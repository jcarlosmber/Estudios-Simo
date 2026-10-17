// cloud_sync.js - Módulo de Sincronización Automática en la Nube (DIAN 2676)
// Totalmente pre-configurado para https://simo.liverohoa.com con fallback transparente a http://

const CloudSync = {
  DEFAULT_HTTPS_URL: "https://simo.liverohoa.com",
  DEFAULT_HTTP_URL: "http://simo.liverohoa.com",

  config: {
    serverUrl: "https://simo.liverohoa.com",
    userId: "jcarlos",
    autoSync: true,
    lastSyncTimestamp: null
  },

  async init() {
    const savedConfig = await StorageManager.get("cloudSyncConfig", null);
    if (savedConfig) {
      this.config = { ...this.config, ...savedConfig };
      // Asegurar que si estaba vacío, use el servidor por defecto
      if (!this.config.serverUrl) {
        this.config.serverUrl = this.DEFAULT_HTTPS_URL;
      }
    } else {
      this.config.serverUrl = this.DEFAULT_HTTPS_URL;
      this.config.userId = "jcarlos";
      this.config.autoSync = true;
      await this.saveConfig(this.config);
    }
  },

  async saveConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    await StorageManager.set("cloudSyncConfig", this.config);
  },

  /**
   * Helper que intenta la petición en HTTPS y si falla por certificado/red, intenta en HTTP automáticamente
   */
  async smartFetch(endpoint, options = {}) {
    const primaryUrl = (this.config.serverUrl || this.DEFAULT_HTTPS_URL).replace(/\/+$/, "");
    const fallbackUrl = this.DEFAULT_HTTP_URL;

    try {
      const response = await fetch(`${primaryUrl}${endpoint}`, options);
      if (response.ok) return response;
      throw new Error(`Status ${response.status}`);
    } catch (primaryErr) {
      // Si la URL primaria era HTTPS y falló, reintenta en HTTP
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
   * Envía el progreso local al servidor automáticamente
   */
  async pushProgress() {
    const payload = {
      userId: this.config.userId || "jcarlos",
      timestamp: new Date().toISOString(),
      stats: AppState.stats,
      srsCards: AppState.srsCards,
      activeProfileId: AppState.activeProfileId || "gestor_iii",
      activeJob: AppState.activeJob,
      streak: {
        current: AppState.stats?.streak || 0,
        best: AppState.stats?.bestStreak || 0
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
      console.log("[CloudSync Auto] Progreso sincronizado silenciosamente en la nube:", data);
      return data;
    } catch (err) {
      console.warn("[CloudSync Auto] No se pudo sincronizar en segundo plano:", err.message);
      return null;
    }
  },

  /**
   * Descarga el progreso desde el servidor y actualiza la app silenciosamente
   */
  async pullProgress() {
    try {
      const uid = encodeURIComponent(this.config.userId || "jcarlos");
      const response = await this.smartFetch(`/sync/pull?userId=${uid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      const remoteData = await response.json();

      if (remoteData) {
        if (remoteData.stats && typeof remoteData.stats.totalAnswered === "number") {
          // Solo sobrescribe si los datos remotos tienen mayor o igual progreso
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
        console.log("[CloudSync Auto] Progreso descargado y actualizado en la app:", remoteData);
        return remoteData;
      }
    } catch (err) {
      console.warn("[CloudSync Auto] No se pudo descargar progreso en segundo plano:", err.message);
      return null;
    }
  },

  /**
   * Descarga o actualiza preguntas desde el servidor (opcional)
   */
  async pullQuestions() {
    try {
      const response = await this.smartFetch("/questions");
      if (response && response.ok) {
        const questions = await response.json();
        if (Array.isArray(questions) && questions.length > 0) {
          if (typeof window !== "undefined") {
            window.QUESTION_BANK = questions;
          }
          await StorageManager.set("customQuestionBank", questions);
          return questions;
        }
      }
    } catch (err) {
      console.warn("No se pudieron cargar preguntas remotas:", err.message);
    }
    return null;
  }
};

if (typeof window !== "undefined") {
  window.CloudSync = CloudSync;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CloudSync };
}
