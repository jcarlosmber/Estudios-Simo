// cloud_sync.js - Módulo de Sincronización en la Nube para SIMO Prep (DIAN 2676)
// Permite guardar y sincronizar progreso, racha, SRS y preguntas con un servidor propio

const CloudSync = {
  config: {
    serverUrl: "",
    userId: "aspirante_dian_01",
    autoSync: true,
    lastSyncTimestamp: null
  },

  async init() {
    const savedConfig = await StorageManager.get("cloudSyncConfig", null);
    if (savedConfig) {
      this.config = { ...this.config, ...savedConfig };
    }
  },

  async saveConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    await StorageManager.set("cloudSyncConfig", this.config);
  },

  /**
   * Envía el progreso local al servidor del usuario
   */
  async pushProgress() {
    if (!this.config.serverUrl) {
      throw new Error("No has configurado la URL de tu servidor.");
    }

    const payload = {
      userId: this.config.userId,
      timestamp: new Date().toISOString(),
      stats: AppState.stats,
      srsCards: AppState.srsCards,
      activeJob: AppState.activeJob,
      streak: {
        current: AppState.stats?.streak || 0,
        best: AppState.stats?.bestStreak || 0
      }
    };

    const targetUrl = this.config.serverUrl.replace(/\/+$/, "") + "/sync/push";

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Error en servidor (${response.status}): ${response.statusText}`);
    }

    const data = await response.json();
    this.config.lastSyncTimestamp = new Date().toISOString();
    await this.saveConfig(this.config);
    return data;
  },

  /**
   * Descarga el progreso desde el servidor del usuario y actualiza la app
   */
  async pullProgress() {
    if (!this.config.serverUrl) {
      throw new Error("No has configurado la URL de tu servidor.");
    }

    const targetUrl = `${this.config.serverUrl.replace(/\/+$/, "")}/sync/pull?userId=${encodeURIComponent(this.config.userId)}`;

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error en servidor (${response.status}): ${response.statusText}`);
    }

    const remoteData = await response.json();

    if (remoteData && remoteData.stats) {
      AppState.stats = remoteData.stats;
      await StorageManager.set("stats", AppState.stats);
    }

    if (remoteData && Array.isArray(remoteData.srsCards)) {
      AppState.srsCards = remoteData.srsCards;
      await StorageManager.set("srsCards", AppState.srsCards);
    }

    this.config.lastSyncTimestamp = new Date().toISOString();
    await this.saveConfig(this.config);
    return remoteData;
  },

  /**
   * Descarga o actualiza preguntas desde el servidor (opcional)
   */
  async pullQuestions() {
    if (!this.config.serverUrl) return null;

    try {
      const targetUrl = `${this.config.serverUrl.replace(/\/+$/, "")}/questions`;
      const response = await fetch(targetUrl);
      if (response.ok) {
        const questions = await response.json();
        if (Array.isArray(questions) && questions.length > 0) {
          // Si el servidor envía nuevas preguntas, actualiza el banco local
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
