// sound_effects.js - Sintetizador de Efectos de Sonido con Web Audio API para SIMO Prep
// 100% nativo, sin archivos de audio externos (cero latencia y cero dependencias).

const SoundFX = {
  ctx: null,
  enabled: true,

  // Inicializar estado de sonido
  init(initialEnabled = true) {
    this.enabled = initialEnabled;
  },

  // Obtener o crear contexto de audio seguro
  getCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  },

  // 1. 🔔 Campana armónica doble al aparecer el popup o tip flash (587Hz -> 880Hz)
  playChime() {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const freqs = [587.33, 880.0];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.22, now + idx * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.12 + 0.48);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.52);
      });
    } catch (e) {
      // Ignorar fallos de autoplay silenciosamente
    }
  },

  // 2. ✅ Respuesta Correcta: Arpegio mayor ascendente triunfal (C5, E5, G5, C6)
  playCorrect() {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // Do5, Mi5, Sol5, Do6

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.24, now + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.32);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.35);
      });
    } catch (e) {}
  },

  // 3. ❌ Respuesta Incorrecta: Tono doble suave descendente y reflexivo (F4 -> C#4)
  playIncorrect() {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const notes = [349.23, 277.18]; // Fa4 -> Do#4

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(freq, now + idx * 0.16);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(550, now + idx * 0.16);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.16);
        gain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.16 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.16 + 0.3);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.16);
        osc.stop(now + idx * 0.16 + 0.33);
      });
    } catch (e) {}
  },

  // 4. ⏱️ Tick sutil de cuenta regresiva (últimos 5 segundos en Speed Drill)
  playTick() {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(920, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  },

  // 5. ⏳ Alerta de tiempo agotado en Speed Drill
  playTimeout() {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;

      [440, 370].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.14);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.22, now + idx * 0.14 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.14 + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.14);
        osc.stop(now + idx * 0.14 + 0.25);
      });
    } catch (e) {}
  },

  // 6. 🧠 Sonido de burbuja/pop placentero al calificar tarjeta SRS o guardar Feynman
  playPop() {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.09);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.25, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  },

  // 7. 🏆 Fanfarria triunfal de hito de racha y celebración
  playFanfare() {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      const fanfareNotes = [
        { f: 523.25, time: 0, dur: 0.12 },
        { f: 659.25, time: 0.12, dur: 0.12 },
        { f: 783.99, time: 0.24, dur: 0.15 },
        { f: 1046.50, time: 0.40, dur: 0.65 },
        { f: 1318.51, time: 0.44, dur: 0.60 }
      ];

      fanfareNotes.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(note.f, now + note.time);

        gain.gain.setValueAtTime(0.0001, now + note.time);
        gain.gain.exponentialRampToValueAtTime(0.28, now + note.time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + note.time + note.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + note.time);
        osc.stop(now + note.time + note.dur + 0.05);
      });
    } catch (e) {}
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SoundFX;
}
