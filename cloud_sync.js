// cloud_sync.js - Módulo de Sincronización Automática en la Nube (DIAN 2676)
// Totalmente pre-configurado para https://simo.liverohoa.com con fallback transparente a http://
// Sincronización transparente de progreso, racha, perfil y banco de preguntas

const CloudSync = {
  DEFAULT_HTTPS_URL: "https://simo.liverohoa.com",
  DEFAULT_HTTP_URL: "http://simo.liverohoa.com",

  config: {
    serverUrl: "https://simo.liverohoa.com",
    userId: "",
    autoSync: true,
    lastSyncTimestamp: null,
    isSyncing: false
  },

  async init() {
    const savedConfig = await StorageManager.get("cloudSyncConfig", null);
    const aspiranteUser = await StorageManager.get("simo_aspirante_user", null);
    const localUser = (function() {
      try { return localStorage.getItem("simo_aspirante_user"); } catch (e) { return null; }
    })();

    const effectiveUser = aspiranteUser || localUser || (savedConfig && savedConfig.userId) || "";

    if (savedConfig) {
      this.config = { ...this.config, ...savedConfig };
      if (!this.config.serverUrl) {
        this.config.serverUrl = this.DEFAULT_HTTPS_URL;
      }
      if (effectiveUser) {
        this.config.userId = effectiveUser;
      }
    } else {
      this.config.serverUrl = this.DEFAULT_HTTPS_URL;
      this.config.userId = effectiveUser;
      this.config.autoSync = true;
      if (effectiveUser) {
        await this.saveConfig(this.config);
      }
    }

    this.setupAutoSyncHooks();
    this.updateStatusBadge();
  },

  async saveConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    await StorageManager.set("cloudSyncConfig", this.config);
    this.updateStatusBadge();
  },

  /**
   * Helper con fallback automático HTTPS -> HTTP
   */
  async smartFetch(endpoint, options = {}) {
    const primaryUrl = (this.config.serverUrl || this.DEFAULT_HTTPS_URL).replace(/\/+$/, "");
    const fallbackUrl = this.DEFAULT_HTTP_URL;

    try {
      const response = await fetch(`${primaryUrl}${endpoint}`, options);
      if (response.ok) return response;
      throw new Error(`Status ${response.status}`);
    } catch (primaryErr) {
      if (primaryUrl.startsWith("https://")) {
        try {
          const fallbackResponse = await fetch(`${fallbackUrl}${endpoint}`, options);
          if (fallbackResponse.ok) {
            this.config.serverUrl = fallbackUrl;
            return fallbackResponse;
          }
        } catch (fallbackErr) {
          throw primaryErr;
        }
      }
      throw primaryErr;
    }
  },

  /**
   * Sube el progreso local al servidor automáticamente
   */
  async pushProgress() {
    if (!this.config.userId) return null;

    const payload = {
      userId: this.config.userId,
      timestamp: new Date().toISOString(),
      stats: typeof AppState !== "undefined" ? AppState.stats : {},
      srsCards: typeof AppState !== "undefined" ? AppState.srsCards : [],
      activeProfileId: typeof AppState !== "undefined" ? (AppState.activeProfileId || "gestor_iii") : "gestor_iii",
      activeJob: typeof AppState !== "undefined" ? AppState.activeJob : null,
      streak: {
        current: (typeof AppState !== "undefined" && AppState.stats?.streak) || 0,
        best: (typeof AppState !== "undefined" && AppState.stats?.bestStreak) || 0
      }
    };

    try {
      const response = await this.smartFetch("/sync/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      this.config.lastSyncTimestamp = new Date().toISOString();
      await this.saveConfig(this.config);
      console.log("[CloudSync] Progreso subido silenciosamente a la nube:", data);
      return data;
    } catch (err) {
      console.warn("[CloudSync] No se pudo subir progreso en segundo plano:", err.message);
      return null;
    }
  },

  /**
   * Descarga el progreso desde el servidor y actualiza la app silenciosamente
   */
  async pullProgress() {
    if (!this.config.userId) return null;

    try {
      const uid = encodeURIComponent(this.config.userId);
      const response = await this.smartFetch(`/sync/pull?userId=${uid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      const remoteData = await response.json();

      if (remoteData && typeof AppState !== "undefined") {
        if (remoteData.stats && typeof remoteData.stats.totalAnswered === "number") {
          const localTotal = AppState.stats?.totalAnswered || 0;
          const remoteTotal = remoteData.stats.totalAnswered;
          if (remoteTotal >= localTotal) {
            AppState.stats = remoteData.stats;
            await StorageManager.set("stats", AppState.stats);
          }
        }

        if (Array.isArray(remoteData.srsCards) && remoteData.srsCards.length > 0) {
          AppState.srsCards = remoteData.srsCards;
          await StorageManager.set("srsCards", AppState.srsCards);
        }

        if (remoteData.activeProfileId && remoteData.activeProfileId !== AppState.activeProfileId) {
          if (typeof applyProfile === "function") {
            applyProfile(remoteData.activeProfileId, true, false);
          }
        }

        this.config.lastSyncTimestamp = new Date().toISOString();
        await this.saveConfig(this.config);
        console.log("[CloudSync] Progreso descargado y actualizado en la app:", remoteData);
        return remoteData;
      }
    } catch (err) {
      console.warn("[CloudSync] No se pudo descargar progreso en segundo plano:", err.message);
      return null;
    }
  },

  /**
   * Descarga o actualiza preguntas desde el servidor de forma transparente
   */
  async pullQuestions() {
    try {
      const profile = (typeof AppState !== "undefined" && AppState.activeProfileId) ? AppState.activeProfileId : "gestor_iii";
      const response = await this.smartFetch(`/questions?profile=${profile}`);
      if (response && response.ok) {
        const questions = await response.json();
        if (Array.isArray(questions) && questions.length > 0) {
          if (typeof window !== "undefined") {
            window.QUESTION_BANK = questions;
            if (profile === "gestor_iii") window.QUESTION_BANK_GESTOR = questions;
            if (profile === "gestor_iii_ci") window.QUESTION_BANK_GESTOR_CI = questions;
            if (profile === "analista_iv") window.QUESTION_BANK_ANALISTA = questions;
            if (window.QUESTION_BANKS) window.QUESTION_BANKS[profile] = questions;
          }
          await StorageManager.set("customQuestionBank_" + profile, questions);
          console.log(`[CloudSync] ${questions.length} preguntas sincronizadas para ${profile}`);
          return questions;
        }
      }
    } catch (err) {
      console.warn("[CloudSync] No se pudieron sincronizar preguntas remotas:", err.message);
    }
    return null;
  },

  /**
   * Sincronización maestra: pull de progreso + pull de preguntas + push de cambios
   */
  async syncAll() {
    if (this.config.isSyncing) return false;
    this.config.isSyncing = true;
    this.updateStatusBadge();

    try {
      // 1. Descargar progreso
      const remote = await this.pullProgress();
      if (remote) {
        if (typeof updateStreakUI === "function") updateStreakUI();
        if (typeof updateDashboardCalculator === "function") updateDashboardCalculator();
      }

      // 2. Descargar preguntas actualizadas
      await this.pullQuestions();

      // 3. Subir el estado actual
      await this.pushProgress();

      this.config.lastSyncTimestamp = new Date().toISOString();
      await this.saveConfig(this.config);
      this.config.isSyncing = false;
      this.updateStatusBadge(true);
      return true;
    } catch (e) {
      console.warn("[CloudSync] Error en syncAll:", e);
      this.config.isSyncing = false;
      this.updateStatusBadge(false);
      return false;
    }
  },

  /**
   * Iniciar sesión o cambiar de cuenta de aspirante
   */
  async login(userId) {
    const cleanId = (userId || "").trim().toLowerCase();
    if (!cleanId) return false;

    this.config.userId = cleanId;
    await this.saveConfig(this.config);
    console.log(`[CloudSync] Sesión iniciada como: ${cleanId}`);

    // Sincronizar inmediatamente datos de la nueva cuenta
    await this.syncAll();
    return true;
  },

  /**
   * Actualiza el badge visual en la interfaz (Ajustes y Modal de Cuenta)
   */
  updateStatusBadge(isSuccess) {
    const sub = document.getElementById("settingsAccountSub");
    const cardUser = document.getElementById("accountCardUserDisplay");
    const badge = document.getElementById("accountBadgeStatus");
    const syncText = document.getElementById("accountCardSyncText");

    const uid = this.config.userId || "";
    if (sub) {
      const timeStr = this.config.lastSyncTimestamp
        ? new Date(this.config.lastSyncTimestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : "Activa";
      sub.textContent = uid 
        ? `Aspirante: ${uid} • 🟢 Sincronizado (${timeStr})`
        : `Cuenta de Aspirante • Toca para registrarte`;
    }

    if (cardUser) {
      cardUser.textContent = uid || "Aspirante";
    }

    if (badge) {
      if (this.config.isSyncing) {
        badge.textContent = "⏳ Sincronizando...";
        badge.style.color = "#38bdf8";
        badge.style.background = "rgba(56, 189, 248, 0.18)";
        badge.style.borderColor = "rgba(56, 189, 248, 0.35)";
      } else if (isSuccess === false) {
        badge.textContent = "🟡 Modo Offline / Local";
        badge.style.color = "#f59e0b";
        badge.style.background = "rgba(245, 158, 11, 0.18)";
        badge.style.borderColor = "rgba(245, 158, 11, 0.35)";
      } else {
        badge.textContent = "🟢 Conectado & Nube Activa";
        badge.style.color = "#34d399";
        badge.style.background = "rgba(52, 211, 153, 0.18)";
        badge.style.borderColor = "rgba(52, 211, 153, 0.35)";
      }
    }

    if (syncText && this.config.lastSyncTimestamp) {
      const timeFormatted = new Date(this.config.lastSyncTimestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      syncText.textContent = `☁️ Preguntas y progreso al día (Última sinc: ${timeFormatted}).`;
    }
  },

  /**
   * Configura listeners de eventos de ventana y temporizador para auto-sincronización transparente
   */
  setupAutoSyncHooks() {
    if (this._hooksConfigured) return;
    this._hooksConfigured = true;

    // Sincronizar al recuperar el foco de la ventana
    if (typeof window !== "undefined") {
      window.addEventListener("focus", () => {
        if (this.config.autoSync) this.syncAll().catch(() => {});
      });

      // Sincronizar cuando la pestaña vuelve a ser visible
      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible" && this.config.autoSync) {
            this.syncAll().catch(() => {});
          }
        });
      }

      // Sincronización de guardia cada 5 minutos
      setInterval(() => {
        if (this.config.autoSync) this.syncAll().catch(() => {});
      }, 5 * 60 * 1000);
    }
  }
};

if (typeof window !== "undefined") {
  window.CloudSync = CloudSync;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CloudSync };
}
