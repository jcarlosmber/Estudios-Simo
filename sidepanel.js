// sidepanel.js - Entrenador SIMO / CNSC Especializado para GESTOR III - DIAN (Convocatoria 2676)
// Incluye Pomodoro 25/5, Filtro por Ejes, Tarjetas SRS con Método Feynman y Dashboard de Métricas con Calculadora

const AppState = {
  activeProfileId: "gestor_iii",
  currentTab: "practice",
  practiceSession: {
    active: false,
    questionsAnswered: 0,
    correctCount: 0
  },
  currentQuestion: null,
  selectedOption: null,
  currentEjeFilter: "todos",
  activeJob: (typeof PROFILES_DATA !== "undefined" && PROFILES_DATA.gestor_iii) ? { ...PROFILES_DATA.gestor_iii } : {
    title: "GESTOR III (Código 303 - Grado 03)",
    shortTitle: "GESTOR III",
    opec: "242703",
    inscription: "1245650048",
    level: "Profesional",
    entity: "DIAN (Proceso de Selección 2676)",
    codeFicha: "FT-TAH-1824",
    purpose: "Desarrollar metodologías, estrategias, técnicas y herramientas de gestión que contribuyan con la toma de decisiones y el direccionamiento hacia el cumplimiento misional, de acuerdo con la normativa vigente, la política institucional y lineamientos técnicos.",
    functions: [
      "Realizar análisis y diagnósticos del comportamiento de las variables y tendencias de los sectores económicos de influencia y competencia de la dependencia, de acuerdo con la normativa y políticas institucionales.",
      "Formular, ejecutar, hacer seguimiento, ajuste y evaluar los planes, programas o proyectos de la dependencia o seccional conforme a la planeación estratégica de la DIAN y la metodología establecida.",
      "Adelantar procesos de orientación, implementación, mejora y seguimiento en el cumplimiento de los planes, proyectos y sistemas de gestión establecidos por la Entidad (MIPG y Control Interno).",
      "Contribuir con la revisión de requerimientos para la contratación de servicios o bienes relacionados con la gestión del despacho o proceso según la normativa vigente.",
      "Implementar políticas y estrategias para la planeación, formulación, implementación, mantenimiento y evaluación de convenios de cooperación internacional e interinstitucional."
    ]
  },
  pomodoro: {
    mode: "work", // "work" (25 min) o "break" (5 min)
    timeLeft: 25 * 60,
    isRunning: false,
    interval: null,
    sessionsCompleted: 0
  },
  stats: {
    totalAnswered: 0,
    correctCount: 0,
    functionalTotal: 0,
    functionalCorrect: 0,
    behavioralTotal: 0,
    behavioralCorrect: 0,
    integrityTotal: 0,
    integrityCorrect: 0,
    streak: 1,
    sessionStreak: 0,
    lastStudyDate: new Date().toISOString().slice(0, 10)
  },
  autoTips: {
    enabled: true,
    questionsSinceLastTip: 0,
    intervalQuestions: 4, // cada 4 preguntas muestra un tip
    lastTipShownId: 0
  },
  srsCards: [],
  srsFilter: "all",
  quizRelampago: {
    isActive: false,
    questions: [],
    currentIndex: 0,
    score: 0,
    promotedCount: 0,
    timer: null,
    timeLeft: 45
  },
  simulacro: {
    isActive: false,
    questions: [],
    currentIndex: 0,
    score: 0,
    functionalScore: 0,
    functionalCount: 0,
    timer: null,
    timeLeft: 120
  }
};

function isMobileDevice() {
  const isMobileUA = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isSmallTouch = window.innerWidth <= 768 && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const isStandalone = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
  return Boolean(isMobileUA || isSmallTouch || isStandalone);
}

const StorageManager = {
  async get(key, defaultValue) {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      return new Promise((resolve) => {
        chrome.storage.local.get([key], (result) => {
          resolve(result[key] !== undefined ? result[key] : defaultValue);
        });
      });
    } else {
      const val = localStorage.getItem("simo_prep_" + key);
      return val ? JSON.parse(val) : defaultValue;
    }
  },
  async set(key, value) {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: value }, resolve);
      });
    } else {
      localStorage.setItem("simo_prep_" + key, JSON.stringify(value));
    }
  }
};

// =========================================================================
// SISTEMA UNIVERSAL DE NOTIFICACIONES MÓVIL (PWA / ANDROID / ESCRITORIO)
// =========================================================================
async function sendDeviceNotification(title, options = {}) {
  // 1. Entorno Extensión de Chrome en Escritorio
  if (typeof chrome !== "undefined" && chrome.notifications && chrome.notifications.create) {
    try {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon128.png",
        title: title,
        message: options.body || "",
        priority: 2
      });
      return true;
    } catch (e) {
      console.warn("[Notif] Error con chrome.notifications:", e);
    }
  }

  // 2. Entorno Web / Celular / PWA
  if (typeof Notification === "undefined") {
    console.warn("[Notif] Notification API no soportada en este dispositivo.");
    return false;
  }

  // Verificar o solicitar permiso
  if (Notification.permission === "default") {
    try {
      const perm = await Notification.requestPermission();
      if (perm !== "granted") return false;
    } catch (e) {
      return false;
    }
  } else if (Notification.permission !== "granted") {
    return false;
  }

  const notifOptions = {
    body: options.body || "",
    icon: options.icon || "icons/icon192.png",
    badge: options.badge || "icons/icon72.png",
    vibrate: [200, 100, 200],
    tag: options.tag || "simo-notif-" + Date.now(),
    renotify: true,
    data: options.data || { url: "./" }
  };

  // En Android Chrome y navegadores móviles es mandatorio usar registration.showNotification
  if ("serviceWorker" in navigator) {
    try {
      let reg = await navigator.serviceWorker.getRegistration();
      if (!reg) {
        reg = await navigator.serviceWorker.ready;
      }
      if (reg && reg.showNotification) {
        await reg.showNotification(title, notifOptions);
        return true;
      }
    } catch (swErr) {
      console.warn("[Notif] ServiceWorker showNotification falló:", swErr);
    }
  }

  // Fallback para navegadores que permiten new Notification()
  try {
    new Notification(title, notifOptions);
    return true;
  } catch (err) {
    console.warn("[Notif] Fallback new Notification() error:", err);
  }

  return false;
}

const TIPS_LECTURA_CRITICA = [
  {
    id: "lc_1",
    titulo: "Lectura Inversa: Encuentra el Verbo Rector",
    resumen: "Nunca leas el caso desde el inicio. Ve a la última frase interrogativa en negrilla para fijar el verbo rector (Notificar, Suspender, Rechazar, Proyectar).",
    regla: "Saber qué te piden antes de leer el cuerpo del caso ahorra 50% de esfuerzo cognitivo."
  },
  {
    id: "lc_2",
    titulo: "Filtro Anti-Ruido: Hechos Probados vs. Emociones",
    resumen: "Ignora adjetivos y enfados de usuarios. Rastrea únicamente fechas de radicación, actos administrativos notificados y cifras en firme.",
    regla: "En derecho público solo lo probado en el expediente cuenta. Lo no documentado es distractor."
  },
  {
    id: "lc_3",
    titulo: "Radar de Cuantificadores Absolutos (Trampas)",
    resumen: "Alerta máxima con 'siempre', 'nunca', 'únicamente', 'inapelable' o 'automáticamente'. Son distractores en un 95%.",
    regla: "La clave prefiere 'previa verificación motivada', 'dentro del término' o 'conforme al debido proceso'."
  },
  {
    id: "lc_4",
    titulo: "Test del Rol: Cuidado con la Verdad Incompetente",
    resumen: "Una opción puede citar una ley perfecta, pero si la acción le toca al Director Seccional o al Juez, es usurpación de funciones.",
    regla: "Pregúntate siempre: ¿Está facultado mi cargo (Gestor / Analista) para tomar esta decisión por sí mismo?"
  },
  {
    id: "lc_5",
    titulo: "Fórmula E-P-C de Comprensión Rápida",
    resumen: "Enunciado interrogativo ➔ Premisa fáctica probada con fechas ➔ Clave congruente con tu rol.",
    regla: "Desarticula casos extensos de 4 párrafos en menos de 45 segundos aplicando el filtro E-P-C."
  },
  {
    id: "lc_6",
    titulo: "Técnica E-I-C de Análisis Forense",
    resumen: "Escaneo visual (8 seg de fechas y UVT) ➔ Interrogante final ➔ Conexión al párrafo determinante.",
    regla: "No leas como novela: escanea como auditor y responde como juez."
  },
  {
    id: "lc_7",
    titulo: "Triángulo V-N-C del Verbo Rector",
    resumen: "V (Verbo de la pregunta) ➔ N (Nivel: Profesional vs Técnico) ➔ C (Competencia legal).",
    regla: "Nivel Técnico apoya y verifica; Nivel Profesional sustenta, proyecta y formula."
  }
];

let mobileBackgroundNotificationInterval = null;

async function triggerMobileRandomNotification(forcedType = null) {
  const mode = await StorageManager.get("backgroundAlternateMode", "alternate");
  let type = forcedType;

  if (!type) {
    if (mode === "tips_only") type = "tip";
    else if (mode === "questions_only") type = "question";
    else if (mode === "lectura_only") type = "lectura";
    else {
      // Rotación triple continua: Pregunta ➔ Tip Flash ➔ Lectura Crítica ➔ Pregunta...
      const cycle = ["question", "tip", "lectura"];
      const lastType = await StorageManager.get("lastMobileNotifType", "lectura");
      const lastIndex = cycle.indexOf(lastType);
      const nextIndex = lastIndex >= 0 ? (lastIndex + 1) % cycle.length : 0;
      type = cycle[nextIndex];
      await StorageManager.set("lastMobileNotifType", type);
    }
  }

  if (type === "question") {
    const questions = typeof getCurrentQuestionBank === "function" ? getCurrentQuestionBank() : [];
    if (questions && questions.length > 0) {
      const q = questions[Math.floor(Math.random() * questions.length)];
      const title = "🎯 Caso Situacional DIAN 2676";
      const snippet = (q.contexto || q.pregunta || "").slice(0, 150) + "...";
      return await sendDeviceNotification(title, {
        body: snippet,
        icon: "icons/icon192.png",
        tag: "simo-question-" + (q.id || Date.now())
      });
    }
  }

  if (type === "lectura") {
    const list = typeof TIPS_LECTURA_CRITICA !== "undefined" ? TIPS_LECTURA_CRITICA : [];
    if (list && list.length > 0) {
      const lc = list[Math.floor(Math.random() * list.length)];
      const title = `📖 Lectura Crítica: ${lc.titulo}`;
      return await sendDeviceNotification(title, {
        body: `${lc.resumen}\n💡 ${lc.regla}`,
        icon: "icons/icon192.png",
        tag: "simo-lectura-" + (lc.id || Date.now())
      });
    }
  }

  // Tip / Fórmula
  const tips = typeof TIPS_PJS_DATA !== "undefined" ? TIPS_PJS_DATA : [];
  if (tips && tips.length > 0) {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    const title = `💡 Clave: ${tip.titulo}`;
    const bodyText = tip.formula 
      ? `📐 ${tip.formula} • ${tip.resumenCorto}`
      : tip.resumenCorto;
    return await sendDeviceNotification(title, {
      body: bodyText,
      icon: "icons/icon192.png",
      tag: "simo-tip-" + (tip.id || Date.now())
    });
  }

  return false;
}

async function setupMobileBackgroundScheduler() {
  if (typeof chrome !== "undefined" && chrome.alarms) {
    return; // La extensión de PC usa chrome.alarms
  }

  if (mobileBackgroundNotificationInterval) {
    clearInterval(mobileBackgroundNotificationInterval);
    mobileBackgroundNotificationInterval = null;
  }

  const enabled = await StorageManager.get("backgroundTipsEnabled", true);
  if (!enabled) return;

  const intervalMinutes = Number(await StorageManager.get("backgroundTipsInterval", 25));
  const intervalMs = Math.max(1, intervalMinutes) * 60 * 1000;

  mobileBackgroundNotificationInterval = setInterval(async () => {
    const isEnabled = await StorageManager.get("backgroundTipsEnabled", true);
    if (!isEnabled) return;

    const isQuiet = await isClientQuietTime();
    if (isQuiet) return;

    await triggerMobileRandomNotification();
  }, intervalMs);
}

document.addEventListener("DOMContentLoaded", async () => {
  setupGlobalModals();
  await loadUserData();
  setupNavigation();
  setupTipsModal();
  setupMicrolearningModal();
  setupPomodoro();
  setupPracticeLogic();
  setupDistractorHunt();
  setupSpeedDrill();
  setupMnemotecnias();
  setupJobConfig();
  setupProfileSwitcher();
  setupSrsLogic();
  setupSimulacroLogic();
  setupDashboardCalculator();
  setupAccountModal();
  setupMobileNotificationPrompt();
  setupInstallModal();
  await setupSoundToggleUI();
  await setupMobileBackgroundScheduler();

  updateEjeFilterOptions(AppState.activeProfileId);
  updateJobProfileUI();
  updateStreakUI();
  showPracticeCover();

  // Sincronización Automática Silenciosa con https://simo.liverohoa.com (Progreso y Preguntas)
  if (typeof CloudSync !== "undefined") {
    CloudSync.init().then(async () => {
      await CloudSync.syncAll();
    }).catch(() => {});
  }

  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.onChanged) {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === "local") {
        if (changes.stats) {
          AppState.stats = changes.stats.newValue || AppState.stats;
          updateStreakUI();
        }
        if (changes.srsCards) {
          AppState.srsCards = changes.srsCards.newValue || AppState.srsCards;
          if (AppState.currentTab === "srs") renderSrsTab();
        }
        if (changes.simoSoundEnabled !== undefined) {
          const enabled = changes.simoSoundEnabled.newValue !== false;
          if (typeof SoundFX !== "undefined") SoundFX.enabled = enabled;
          const btn = document.getElementById("btnSoundToggle");
          if (btn) {
            btn.textContent = enabled ? "🔊" : "🔇";
            btn.title = enabled ? "Sonido: Activado (Clic para silenciar)" : "Sonido: Silenciado (Clic para activar)";
            btn.style.opacity = enabled ? "1" : "0.6";
            btn.style.borderColor = enabled ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.15)";
          }
        }
      }
    });
  }
});

async function setupSoundToggleUI() {
  const btn = document.getElementById("btnSoundToggle");
  if (!btn) return;

  const isEnabled = await StorageManager.get("simoSoundEnabled", true);
  if (typeof SoundFX !== "undefined") {
    SoundFX.init(isEnabled);
  }

  const updateBtnUI = (enabled) => {
    btn.textContent = enabled ? "🔊" : "🔇";
    btn.title = enabled
      ? "Sonido: Activado (Clic para silenciar)"
      : "Sonido: Silenciado (Clic para activar)";
    btn.style.opacity = enabled ? "1" : "0.6";
    btn.style.borderColor = enabled ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.15)";
  };

  updateBtnUI(isEnabled);

  btn.addEventListener("click", async () => {
    if (typeof SoundFX === "undefined") return;
    const newState = !SoundFX.enabled;
    SoundFX.enabled = newState;
    updateBtnUI(newState);
    await StorageManager.set("simoSoundEnabled", newState);
    if (newState) {
      SoundFX.playChime();
    }
  });
}

// =========================================================================
// SISTEMA DE CONFETTI Y CELEBRACIÓN DE HITO DE RACHA
// =========================================================================
function launchConfetti(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width || 440;
  canvas.height = rect.height || 400;

  const colors = ["#f59e0b", "#38bdf8", "#10b981", "#ef4444", "#a855f7", "#fbbf24", "#ffffff"];
  const pieces = [];
  const pieceCount = 75;

  for (let i = 0; i < pieceCount; i++) {
    pieces.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 60,
      y: canvas.height * 0.35 + (Math.random() - 0.5) * 40,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 9 + 4),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.26,
      opacity: 1
    });
  }

  let animationId = null;
  const startTime = Date.now();

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - startTime;

    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;

      if (elapsed > 1800) {
        p.opacity = Math.max(0, p.opacity - 0.035);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < 3200) {
      animationId = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (animationId) cancelAnimationFrame(animationId);
    }
  }

  update();
}

function showStreakMilestoneModal(count) {
  const modal = document.getElementById("streakMilestoneModal");
  if (!modal) return;

  const iconEl = document.getElementById("streakMilestoneIcon");
  const titleEl = document.getElementById("streakMilestoneTitle");
  const rankEl = document.getElementById("streakMilestoneRank");
  const msgEl = document.getElementById("streakMilestoneMsg");
  const countValEl = document.getElementById("streakMilestoneCountVal");
  const pointsValEl = document.getElementById("streakMilestonePointsVal");
  const canvas = document.getElementById("streakConfettiCanvas");
  const btnClose = document.getElementById("btnCloseStreakMilestone");

  let rankTitle = "⚡ Nivel: Aspirante en Fuego";
  let motivationalMsg = "¡Gran concentración! Has respondido 3 preguntas consecutivas con el criterio oficial del concurso.";
  let xp = `+${count * 50} XP`;
  let icon = "🔥";

  if (count >= 15) {
    icon = "👑";
    rankTitle = "🏆 Rango: Leyenda Misional DIAN";
    motivationalMsg = "¡Racha histórica de 15 aciertos! Tu dominio de las competencias funcionales y la ética pública te perfila con fuerza para liderar la lista de elegibles de la CNSC.";
    xp = "+1,500 XP";
  } else if (count >= 10) {
    icon = "🎖️";
    rankTitle = "👑 Rango: Maestro de Criterio CNSC";
    motivationalMsg = "¡10 preguntas seguidas sin un solo error! Superas con creces el umbral del 70.00 mínimo de la prueba eliminatoria.";
    xp = "+800 XP";
  } else if (count >= 5) {
    icon = "⚡";
    rankTitle = "⚡ Rango: Gestor III Imparable";
    motivationalMsg = "¡5 aciertos consecutivos! Descartaste los distractores con precisión y aplicaste el criterio normativo correcto.";
    xp = "+350 XP";
  } else {
    icon = "🔥";
    rankTitle = "🔥 Rango: Aspirante Enfocado";
    motivationalMsg = "¡3 aciertos seguidos! La memoria activa y las técnicas de descarte están dando frutos inmediatos.";
    xp = "+150 XP";
  }

  if (iconEl) iconEl.textContent = icon;
  if (titleEl) titleEl.textContent = `¡Racha de ${count} Aciertos!`;
  if (rankEl) rankEl.textContent = rankTitle;
  if (msgEl) msgEl.textContent = motivationalMsg;
  if (countValEl) countValEl.textContent = count;
  if (pointsValEl) pointsValEl.textContent = xp;

  openModal(modal);

  setTimeout(() => launchConfetti(canvas), 100);

  if (btnClose) {
    btnClose.onclick = () => {
      closeModal(modal);
    };
  }
}

// =========================================================================
// SISTEMA UNIVERSAL DE MODALES (OPTIMIZADO PARA APP Y PANTALLAS TÁCTILES)
// =========================================================================
function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("active");
  const anyActive = document.querySelector(".modal-overlay.active");
  if (!anyActive) {
    document.body.classList.remove("modal-open");
  }
}

function setupGlobalModals() {
  // Cierre intuitivo al tocar el fondo oscuro (backdrop click)
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Cierre rápido con tecla Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal-overlay.active");
      if (activeModal) {
        closeModal(activeModal);
      }
    }
  });
}

// =========================================================================
// 1. BANCO MAESTRO DE 41 CLAVES DE JUICIO SITUACIONAL (CNSC / DIAN)
// =========================================================================
function setupTipsModal() {
  const modal = document.getElementById("tipsModal");
  const btnOpen = document.getElementById("btnOpenTipsModal");
  const btnCloseX = document.getElementById("btnCloseTipsModalX");
  const btnClose = document.getElementById("btnCloseTipsModal");
  const listContainer = document.getElementById("tipsListContainer");
  const filterBtns = document.querySelectorAll(".tip-filter-btn");
  const searchInput = document.getElementById("inputSearchTips");
  const countBadge = document.getElementById("tipsCountBadge");
  const btnOpenMicro = document.getElementById("btnOpenMicrolearningFromTips");

  const popupFlashModal = document.getElementById("popupTipFlashModal");
  const btnRandomFlash = document.getElementById("btnRandomTipFlash");
  const btnClosePopupX = document.getElementById("btnClosePopupTipX");
  const btnClosePopup = document.getElementById("btnClosePopupTip");
  const btnVerTodasDesdePopup = document.getElementById("btnVerTodasClavesDesdePopup");
  const chkAutoPopup = document.getElementById("chkAutoTipsEnabled");

  // Sincronizar estado inicial de autoTips popup
  if (chkAutoPopup) chkAutoPopup.checked = AppState.autoTips.enabled;
  if (chkAutoPopup) {
    chkAutoPopup.addEventListener("change", (e) => {
      AppState.autoTips.enabled = e.target.checked;
      StorageManager.set("autoTipsEnabled", e.target.checked);
      const chkAutoModal = document.getElementById("chkAutoTipsFromModal");
      if (chkAutoModal) chkAutoModal.checked = e.target.checked;
    });
  }

  let currentCategory = "all";
  let currentSearch = "";

  // Renderizar las 46 Claves Maestras y Fórmulas Mnemotécnicas
  function renderTipsList() {
    if (!listContainer || typeof TIPS_PJS_DATA === "undefined") return;
    listContainer.innerHTML = "";

    const term = currentSearch.trim().toLowerCase();

    // Vista especializada para la categoría Fórmulas & Mnemotecnias
    if (currentCategory === "Fórmulas y Mnemotecnias") {
      const infografiaBlock = document.createElement("div");
      infografiaBlock.style.cssText = "display: flex; flex-direction: column; gap: 12px; margin-bottom: 8px;";
      infografiaBlock.innerHTML = `
        <div style="font-size: 13px; font-weight: 800; color: var(--accent-gold); text-transform: uppercase;">
          🖼️ Infografías de Estudio Visual Clave
        </div>
        <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-sm);">
          <a href="assets/infografia_lineas_defensa.jpg" target="_blank" style="display: block; text-decoration: none;">
            <img src="assets/infografia_lineas_defensa.jpg" alt="Las Tres Líneas de Defensa" style="width: 100%; height: auto; display: block; cursor: pointer;" title="Clic para ampliar en nueva pestaña">
          </a>
          <div style="padding: 10px 12px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 13px; font-weight: 800; color: #f8fafc;">Fortaleza de las 3 Líneas de Defensa</div>
              <div style="font-size: 11px; color: var(--text-secondary);">Sistema de Control Interno (Ley 87 de 1993 y MECI)</div>
            </div>
            <a href="assets/infografia_lineas_defensa.jpg" target="_blank" style="font-size: 11px; color: var(--accent-blue); text-decoration: none; font-weight: 700; border: 1px solid rgba(56,189,248,0.4); padding: 4px 8px; border-radius: 6px;">🔍 Ampliar</a>
          </div>
        </div>
        <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-sm);">
          <a href="assets/infografia_mipg.jpg" target="_blank" style="display: block; text-decoration: none;">
            <img src="assets/infografia_mipg.jpg" alt="7 Dimensiones del MIPG" style="width: 100%; height: auto; display: block; cursor: pointer;" title="Clic para ampliar en nueva pestaña">
          </a>
          <div style="padding: 10px 12px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 13px; font-weight: 800; color: #f8fafc;">El Corazón y las 7 Dimensiones del MIPG</div>
              <div style="font-size: 11px; color: var(--text-secondary);">Talento Humano articulando las políticas de gestión</div>
            </div>
            <a href="assets/infografia_mipg.jpg" target="_blank" style="font-size: 11px; color: var(--accent-blue); text-decoration: none; font-weight: 700; border: 1px solid rgba(56,189,248,0.4); padding: 4px 8px; border-radius: 6px;">🔍 Ampliar</a>
          </div>
        </div>
        <div style="font-size: 13px; font-weight: 800; color: #c084fc; text-transform: uppercase; margin-top: 6px; letter-spacing: 0.5px;">
          📐 Anclas y Fórmulas Mnemotécnicas
        </div>
      `;
      listContainer.appendChild(infografiaBlock);

      if (typeof MNEMOTECNIAS !== "undefined") {
        MNEMOTECNIAS.forEach((m) => {
          if (term && !m.titulo.toLowerCase().includes(term) && !m.formula.toLowerCase().includes(term) && !m.descripcion.toLowerCase().includes(term)) {
            return;
          }
          const card = document.createElement("div");
          card.style.cssText = `
            background-color: var(--bg-surface);
            border: 1px solid rgba(168, 85, 247, 0.35);
            border-left: 4px solid #a855f7;
            padding: 14px 16px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.25);
            display: flex;
            flex-direction: column;
            gap: 6px;
          `;
          const pointsHtml = m.puntos ? `
            <ul style="font-size: 13px; line-height: 1.55; color: #cbd5e1; margin: 4px 0 0 18px; padding: 0;">
              ${m.puntos.map(p => `<li style="margin-bottom: 4px;">${p}</li>`).join("")}
            </ul>
          ` : "";
          card.innerHTML = `
            <div style="font-size: 15px; font-weight: 800; color: #c084fc; display: flex; align-items: center; gap: 6px;">
              <span>💡</span>
              <span>${m.titulo}</span>
            </div>
            <div style="background-color: rgba(11, 17, 32, 0.85); border-left: 4px solid var(--accent-blue); padding: 9px 12px; border-radius: 6px; font-size: 13px; font-weight: 800; color: #38bdf8; font-family: 'Consolas', monospace;">
              ${m.formula}
            </div>
            <div style="font-size: 13px; color: #f1f5f9; line-height: 1.5;">
              ${m.descripcion}
            </div>
            ${pointsHtml}
            <div style="background-color: rgba(245, 158, 11, 0.12); border: 1px dashed rgba(245, 158, 11, 0.4); padding: 7px 10px; border-radius: 6px; font-size: 12px; color: #fef08a; font-weight: 600;">
              🔑 Ancla Visual: ${m.claveVisual}
            </div>
          `;
          listContainer.appendChild(card);
        });
      }

      if (countBadge) {
        countBadge.textContent = "Mostrando fórmulas, infografías y anclas de memoria";
      }
      return;
    }

    const filtered = TIPS_PJS_DATA.filter((tip) => {
      const matchCategory = currentCategory === "all" || tip.categoria === currentCategory;
      const matchSearch = !term ||
        tip.titulo.toLowerCase().includes(term) ||
        tip.resumenCorto.toLowerCase().includes(term) ||
        (tip.normaReferencia && tip.normaReferencia.toLowerCase().includes(term)) ||
        (tip.contenidoDetallado && tip.contenidoDetallado.toLowerCase().includes(term)) ||
        (tip.categoria && tip.categoria.toLowerCase().includes(term)) ||
        (tip.formula && tip.formula.toLowerCase().includes(term)) ||
        String(tip.numero).includes(term);
      return matchCategory && matchSearch;
    });

    if (countBadge) {
      countBadge.textContent = term ? `${filtered.length} claves encontradas` : "Claves y Fórmulas disponibles";
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align: center; padding: 36px 16px; color: #94a3b8; background: rgba(11, 17, 32, 0.5); border-radius: 10px; border: 1px dashed rgba(255,255,255,0.1);">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <div style="font-size: 15px; font-weight: 800; color: #f8fafc;">No se encontraron claves</div>
          <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">Prueba buscando otra palabra clave o selecciona "Todas".</div>
        </div>
      `;
      return;
    }

    filtered.forEach((tip) => {
      const card = document.createElement("div");
      card.style.cssText = `
        background-color: rgba(11, 17, 32, 0.75);
        border: 1px solid rgba(255,255,255,0.06);
        border-left: 4px solid ${tip.color || "var(--accent-gold)"};
        padding: 15px 16px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        gap: 6px;
      `;

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; flex-wrap: wrap;">
          <div style="font-size: 15px; font-weight: 800; color: ${tip.color || "#f59e0b"}; display: flex; align-items: center; gap: 6px;">
            <span>${tip.icono || "💡"}</span>
            <span>${tip.numero}. ${tip.titulo}</span>
          </div>
          <span style="font-size: 11px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 4px; font-weight: 700; white-space: nowrap;">
            ${tip.categoria}
          </span>
        </div>
        <div style="font-size: 12px; color: #94a3b8; font-weight: 600;">
          📌 Fundamento: ${tip.normaReferencia}
        </div>
        <div style="font-size: 14px; color: #e2e8f0; line-height: 1.6; margin-top: 2px;">
          ${tip.contenidoDetallado}
        </div>
        <div style="font-size: 13px; color: #cbd5e1; background: rgba(0,0,0,0.35); padding: 8px 12px; border-radius: 6px; margin-top: 4px; border-left: 2px solid ${tip.color || "#f59e0b"};">
          <strong style="color: #f8fafc;">💡 Regla Rápida:</strong> ${tip.resumenCorto}
        </div>
        ${tip.formula ? `
          <div style="font-size: 13px; color: #fdf4ff; background: rgba(168, 85, 247, 0.16); border: 1px solid rgba(168, 85, 247, 0.4); border-left: 3px solid #a855f7; padding: 9px 12px; border-radius: 6px; margin-top: 5px; display: flex; align-items: flex-start; gap: 8px;">
            <span style="font-size: 16px; line-height: 1.2;">📐</span>
            <div style="flex: 1;">
              <div style="font-size: 11px; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.5px;">Fórmula / Regla Mnemotécnica:</div>
              <div style="font-size: 13px; font-weight: 700; color: #f8fafc; font-family: 'Consolas', monospace; margin-top: 2px; line-height: 1.35;">${tip.formula}</div>
            </div>
          </div>
        ` : ""}
      `;
      listContainer.appendChild(card);
    });
  }

  renderTipsList();

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderTipsList();
    });
  }

  // Manejo de filtros por categoría
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.style.background = "rgba(255,255,255,0.05)";
        b.style.borderColor = "var(--border-color)";
        b.style.color = "#cbd5e1";
        b.classList.remove("active");
      });
      const cat = btn.getAttribute("data-cat");
      if (cat === "Fórmulas y Mnemotecnias") {
        btn.style.background = "rgba(168, 85, 247, 0.25)";
        btn.style.borderColor = "#c084fc";
        btn.style.color = "#c084fc";
      } else {
        btn.style.background = "rgba(245, 158, 11, 0.2)";
        btn.style.borderColor = "#f59e0b";
        btn.style.color = "#f59e0b";
      }
      btn.classList.add("active");
      currentCategory = cat;
      renderTipsList();
    });
  });

  // Acceso directo a Microaprendizaje desde el modal de claves
  if (btnOpenMicro) {
    btnOpenMicro.addEventListener("click", () => {
      closeModal(modal);
      const microModal = document.getElementById("microlearningModal");
      openModal(microModal);
    });
  }

  // Apertura y Cierre Modal Principal de Claves
  if (btnOpen) btnOpen.addEventListener("click", () => openModal(modal));
  if (btnCloseX) btnCloseX.addEventListener("click", () => closeModal(modal));
  if (btnClose) btnClose.addEventListener("click", () => closeModal(modal));

  // Manejadores Popup Flash Ocasional
  const btnNextTipInModal = document.getElementById("btnNextTipFlashInModal");
  if (btnNextTipInModal) {
    btnNextTipInModal.addEventListener("click", () => {
      showRandomTipFlash({ forced: true });
    });
  }

  if (btnRandomFlash) {
    btnRandomFlash.addEventListener("click", () => showRandomTipFlash({ forced: true }));
  }
  if (btnClosePopupX) {
    btnClosePopupX.addEventListener("click", () => closeModal(popupFlashModal));
  }
  if (btnClosePopup) {
    btnClosePopup.addEventListener("click", () => closeModal(popupFlashModal));
  }
  if (btnVerTodasDesdePopup) {
    btnVerTodasDesdePopup.addEventListener("click", () => {
      closeModal(popupFlashModal);
      openModal(modal);
    });
  }

  // Manejadores Modal Comprensión Lectora Estratégica
  const lecturaModal = document.getElementById("comprensionLectoraModal");
  const btnOpenLectura = document.getElementById("btnOpenLecturaModal");
  const btnCloseLecturaX = document.getElementById("btnCloseLecturaModalX");
  const btnCloseLectura = document.getElementById("btnCloseLecturaModal");
  const btnVerTodasDesdeLectura = document.getElementById("btnVerTodasClavesDesdeLectura");

  if (btnOpenLectura) {
    btnOpenLectura.addEventListener("click", () => openModal(lecturaModal));
  }
  if (btnCloseLecturaX) {
    btnCloseLecturaX.addEventListener("click", () => closeModal(lecturaModal));
  }
  if (btnCloseLectura) {
    btnCloseLectura.addEventListener("click", () => {
      closeModal(lecturaModal);
      if (typeof switchTab === "function") {
        switchTab("practice");
      }
      const filterSelect = document.getElementById("selectEjeFilter");
      if (filterSelect) {
        filterSelect.value = "comprension_lectora";
        AppState.currentEjeFilter = "comprension_lectora";
      }
      if (typeof startPracticeSession === "function") {
        startPracticeSession();
      }
    });
  }
  if (btnVerTodasDesdeLectura) {
    btnVerTodasDesdeLectura.addEventListener("click", () => {
      closeModal(lecturaModal);
      openModal(modal);
      const filterComp = Array.from(filterBtns).find(b => b.getAttribute("data-cat") === "Comprensión Lectora");
      if (filterComp) filterComp.click();
    });
  }

  // Interacción Cazador de Trampas Semánticas en el modal de lectura
  document.querySelectorAll(".btn-trap-tester").forEach((btn) => {
    btn.addEventListener("click", () => {
      const trapId = btn.getAttribute("data-trap-id");
      const fb = document.getElementById(`trapFeedback${trapId}`);
      if (fb) {
        fb.style.display = fb.style.display === "none" ? "block" : "none";
      }
    });
  });
}

// =========================================================================
// 2. MODAL DEDICADO DE MICROAPRENDIZAJE & REPASO INTELIGENTE
// =========================================================================
function setupMicrolearningModal() {
  const modal = document.getElementById("microlearningModal");
  const btnCloseX = document.getElementById("btnCloseMicrolearningModalX");
  const btnCancel = document.getElementById("btnCancelMicrolearningModal");
  const btnSave = document.getElementById("btnSaveMicrolearningModal");

  const chkBgTips = document.getElementById("chkBackgroundTips");
  const selectBgInterval = document.getElementById("selectBgInterval");
  const selectBgFormat = document.getElementById("selectBgFormat");
  const selectBgMode = document.getElementById("selectBgMode");
  const chkQuietHours = document.getElementById("chkQuietHours");
  const selectQuietStart = document.getElementById("selectQuietStart");
  const selectQuietEnd = document.getElementById("selectQuietEnd");
  const chkAutoFromModal = document.getElementById("chkAutoTipsFromModal");
  const selectQuestionTimer = document.getElementById("selectQuestionTimer");
  const labelTimerIntensity = document.getElementById("labelTimerIntensity");

  const btnTestBgAlternate = document.getElementById("btnTestBgAlternate");
  const btnTestBgQuestion = document.getElementById("btnTestBgQuestion");
  const btnTestBgTip = document.getElementById("btnTestBackgroundTip");
  const btnTestBgLectura = document.getElementById("btnTestBgLectura");

  const updateIntensityBadge = (sec) => {
    if (!labelTimerIntensity) return;
    const s = Number(sec);
    if (s === 45) {
      labelTimerIntensity.textContent = "⚡ 45s Speed";
      labelTimerIntensity.style.color = "#f59e0b";
      labelTimerIntensity.style.background = "rgba(245, 158, 11, 0.2)";
    } else if (s === 60) {
      labelTimerIntensity.textContent = "🔥 1 min Intenso";
      labelTimerIntensity.style.color = "#f43f5e";
      labelTimerIntensity.style.background = "rgba(244, 63, 94, 0.2)";
    } else if (s === 90) {
      labelTimerIntensity.textContent = "🎯 90s Táctico";
      labelTimerIntensity.style.color = "#a855f7";
      labelTimerIntensity.style.background = "rgba(168, 85, 247, 0.2)";
    } else if (s === 120) {
      labelTimerIntensity.textContent = "⏱️ 2 min (Oficial)";
      labelTimerIntensity.style.color = "#38bdf8";
      labelTimerIntensity.style.background = "rgba(56, 189, 248, 0.2)";
    } else if (s === 180) {
      labelTimerIntensity.textContent = "📖 3 min Detallado";
      labelTimerIntensity.style.color = "#34d399";
      labelTimerIntensity.style.background = "rgba(52, 211, 153, 0.2)";
    } else if (s === 0) {
      labelTimerIntensity.textContent = "🧘 Tiempo Libre";
      labelTimerIntensity.style.color = "#cbd5e1";
      labelTimerIntensity.style.background = "rgba(255, 255, 255, 0.1)";
    }
  };

  // Cargar preferencias guardadas
  StorageManager.get("backgroundTipsEnabled", true).then((enabled) => {
    if (chkBgTips) chkBgTips.checked = enabled;
  });
  StorageManager.get("backgroundTipsInterval", 25).then((interval) => {
    if (selectBgInterval) selectBgInterval.value = String(interval);
  });
  const defaultFormat = isMobileDevice() ? "notification" : "popup";
  StorageManager.get("backgroundTipsFormat", defaultFormat).then((format) => {
    if (selectBgFormat) selectBgFormat.value = format;
  });
  StorageManager.get("backgroundAlternateMode", "alternate").then((mode) => {
    if (selectBgMode) selectBgMode.value = mode;
  });
  StorageManager.get("quietHoursEnabled", true).then((enabled) => {
    if (chkQuietHours) chkQuietHours.checked = enabled;
  });
  StorageManager.get("quietHoursStart", 20).then((start) => {
    if (selectQuietStart) selectQuietStart.value = String(start);
  });
  StorageManager.get("quietHoursEnd", 8).then((end) => {
    if (selectQuietEnd) selectQuietEnd.value = String(end);
  });
  StorageManager.get("autoTipsEnabled", true).then((enabled) => {
    if (chkAutoFromModal) chkAutoFromModal.checked = enabled;
  });
  StorageManager.get("questionTimerSeconds", 120).then((timerSec) => {
    if (selectQuestionTimer) selectQuestionTimer.value = String(timerSec);
    updateIntensityBadge(timerSec);
    PracticeTimer.setTotalSeconds(timerSec);
  });

  const syncBackgroundSettings = () => {
    const enabled = chkBgTips ? chkBgTips.checked : true;
    const intervalMinutes = selectBgInterval ? parseInt(selectBgInterval.value, 10) : 25;
    const format = selectBgFormat ? selectBgFormat.value : "popup";
    const mode = selectBgMode ? selectBgMode.value : "alternate";
    const quietEnabled = chkQuietHours ? chkQuietHours.checked : true;
    const quietStart = selectQuietStart ? parseInt(selectQuietStart.value, 10) : 20;
    const quietEnd = selectQuietEnd ? parseInt(selectQuietEnd.value, 10) : 8;
    const autoTipsInApp = chkAutoFromModal ? chkAutoFromModal.checked : true;
    const questionTimerSec = selectQuestionTimer ? parseInt(selectQuestionTimer.value, 10) : 120;

    AppState.autoTips.enabled = autoTipsInApp;
    StorageManager.set("autoTipsEnabled", autoTipsInApp);
    const chkAutoPopup = document.getElementById("chkAutoTipsEnabled");
    if (chkAutoPopup) chkAutoPopup.checked = autoTipsInApp;

    StorageManager.set("backgroundTipsEnabled", enabled);
    StorageManager.set("backgroundTipsInterval", intervalMinutes);
    StorageManager.set("backgroundTipsFormat", format);
    StorageManager.set("backgroundAlternateMode", mode);
    StorageManager.set("quietHoursEnabled", quietEnabled);
    StorageManager.set("quietHoursStart", quietStart);
    StorageManager.set("quietHoursEnd", quietEnd);
    StorageManager.set("questionTimerSeconds", questionTimerSec);

    updateIntensityBadge(questionTimerSec);
    PracticeTimer.setTotalSeconds(questionTimerSec);

    if (format === "notification" && typeof Notification !== "undefined" && Notification.permission === "default") {
      Notification.requestPermission();
    }

    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({
        action: "updateBackgroundAlarm",
        enabled: enabled,
        intervalMinutes: intervalMinutes,
        questionTimerSeconds: questionTimerSec
      });
    } else {
      setupMobileBackgroundScheduler();
    }
  };

  if (chkBgTips) chkBgTips.addEventListener("change", syncBackgroundSettings);
  if (selectBgInterval) selectBgInterval.addEventListener("change", syncBackgroundSettings);
  if (selectBgFormat) {
    selectBgFormat.addEventListener("change", () => {
      if (selectBgFormat.value === "notification" && typeof Notification !== "undefined" && Notification.permission === "default") {
        Notification.requestPermission();
      }
      syncBackgroundSettings();
    });
  }
  if (selectBgMode) selectBgMode.addEventListener("change", syncBackgroundSettings);
  if (chkQuietHours) chkQuietHours.addEventListener("change", syncBackgroundSettings);
  if (selectQuietStart) selectQuietStart.addEventListener("change", syncBackgroundSettings);
  if (selectQuietEnd) selectQuietEnd.addEventListener("change", syncBackgroundSettings);
  if (chkAutoFromModal) chkAutoFromModal.addEventListener("change", syncBackgroundSettings);
  if (selectQuestionTimer) {
    selectQuestionTimer.addEventListener("change", () => {
      syncBackgroundSettings();
    });
  }

  // Botones de cierre
  if (btnCloseX) btnCloseX.addEventListener("click", () => closeModal(modal));
  if (btnCancel) btnCancel.addEventListener("click", () => closeModal(modal));
  if (btnSave) {
    btnSave.addEventListener("click", () => {
      syncBackgroundSettings();
      btnSave.textContent = "¡Guardado! ✔";
      setTimeout(() => {
        btnSave.textContent = "Guardar y Activar 🚀";
        closeModal(modal);
      }, 350);
    });
  }

  // Botones de prueba interactiva
  if (btnTestBgAlternate) {
    btnTestBgAlternate.addEventListener("click", async () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "testBackgroundTip" });
      } else {
        const sent = await triggerMobileRandomNotification();
        if (!sent && typeof Notification !== "undefined" && Notification.permission !== "granted") {
          showCustomModal({
            title: "Permisos de Notificación",
            message: "Debes activar las notificaciones en tu celular (o permitir notificaciones en el navegador) para recibirlas.",
            icon: "🔔"
          });
        }
      }
    });
  }

  if (btnTestBgQuestion) {
    btnTestBgQuestion.addEventListener("click", async () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "testBackgroundTip", forcedType: "question" });
      } else {
        await triggerMobileRandomNotification("question");
      }
    });
  }

  if (btnTestBgTip) {
    btnTestBgTip.addEventListener("click", async () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "testBackgroundTip", forcedType: "tip" });
      } else {
        await triggerMobileRandomNotification("tip");
      }
    });
  }

  if (btnTestBgLectura) {
    btnTestBgLectura.addEventListener("click", async () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "testBackgroundTip", forcedType: "lectura" });
      } else {
        await triggerMobileRandomNotification("lectura");
      }
    });
  }

  // Timer suave periódico (cada 7 minutos muestra un micro-tip flash de repaso si está en la app)
  setInterval(async () => {
    if (!AppState.autoTips.enabled) return;
    
    // Si estamos en horario de silencio / dormir (por ej 8pm a 8am), no molestar
    const isQuiet = await isClientQuietTime();
    if (isQuiet) return;

    // Solo si el usuario está en la app estudiando libremente y no tiene otros modales abiertos ni está en speed drill
    const isAnyModalActive = document.querySelector(".modal-overlay.active");
    const isDrillRunning = typeof SpeedDrillState !== "undefined" && SpeedDrillState.timer !== null;
    if (!isAnyModalActive && !isDrillRunning && AppState.currentTab === "practice") {
      showRandomTipFlash({ forced: false });
    }
  }, 7 * 60 * 1000);
}

// Función auxiliar para verificar si la hora actual está dentro del horario de descanso configurado
async function isClientQuietTime() {
  const enabled = await StorageManager.get("quietHoursEnabled", true);
  if (!enabled) return false;

  const start = Number(await StorageManager.get("quietHoursStart", 20)); // 8:00 PM
  const end = Number(await StorageManager.get("quietHoursEnd", 8));       // 8:00 AM

  const currentHour = new Date().getHours();
  if (start > end) {
    // Cruza la medianoche (ej: de 20:00 a 08:00)
    return currentHour >= start || currentHour < end;
  } else {
    return currentHour >= start && currentHour < end;
  }
}

function showRandomTipFlash({ forced = false, customTip = null } = {}) {
  if (!forced && !AppState.autoTips.enabled) return;
  if (typeof TIPS_PJS_DATA === "undefined" || TIPS_PJS_DATA.length === 0) return;

  const modal = document.getElementById("popupTipFlashModal");
  if (!modal) return;

  let tip = customTip;
  if (!tip) {
    const mnemTips = (typeof MNEMOTECNIAS !== "undefined" ? MNEMOTECNIAS : []).map((m, idx) => ({
      id: m.id,
      isMnem: true,
      numero: `F${idx + 1}`,
      titulo: m.titulo,
      categoria: "Fórmula Mnemotécnica",
      icono: "📐",
      color: "#c084fc",
      normaReferencia: `Ancla Visual: ${m.claveVisual}`,
      resumenCorto: m.descripcion,
      formula: m.formula,
      contenidoDetallado: m.puntos ? m.puntos.map(p => `• ${p}`).join("<br>") : m.claveVisual,
      mnemRaw: m
    }));

    const fullPool = [...TIPS_PJS_DATA, ...mnemTips];
    const candidates = fullPool.filter(t => t.id !== AppState.autoTips.lastTipShownId);
    const pool = candidates.length > 0 ? candidates : fullPool;
    tip = pool[Math.floor(Math.random() * pool.length)];
  }

  AppState.autoTips.lastTipShownId = tip.id;

  const iconEl = document.getElementById("popupTipIcon");
  const badgeEl = document.getElementById("popupTipBadge");
  const titleEl = document.getElementById("popupTipTitle");
  const normaEl = document.getElementById("popupTipNorma");
  const bodyEl = document.getElementById("popupTipBody");

  if (iconEl) iconEl.textContent = tip.icono || "💡";
  if (badgeEl) {
    badgeEl.textContent = tip.isMnem 
      ? `Fórmula Mnemotécnica • ${tip.numero}`
      : `Tip Clave #${tip.numero} • ${tip.categoria}`;
    badgeEl.style.color = tip.color || "#f59e0b";
  }
  if (titleEl) {
    titleEl.textContent = tip.isMnem ? tip.titulo : `${tip.numero}. ${tip.titulo}`;
    titleEl.style.color = tip.color || "#f8fafc";
  }
  if (normaEl) normaEl.textContent = `📌 ${tip.normaReferencia}`;
  
  // Banner fotográfico o infografía temático curado
  const bannerContainer = document.getElementById("popupTipBannerContainer");
  const bannerImg = document.getElementById("popupTipBannerImg");
  const bannerBadge = document.getElementById("popupTipBannerBadge");
  if (bannerContainer) {
    if (tip.isMnem && tip.id === "mnem_03") {
      if (bannerImg) bannerImg.src = "assets/infografia_lineas_defensa.jpg";
      if (bannerBadge) bannerBadge.textContent = "Fortaleza de las 3 Líneas de Defensa (MECI)";
      bannerContainer.style.display = "flex";
    } else if (tip.isMnem && tip.id === "mnem_05") {
      if (bannerImg) bannerImg.src = "assets/infografia_mipg.jpg";
      if (bannerBadge) bannerBadge.textContent = "El Corazón y las 7 Dimensiones del MIPG";
      bannerContainer.style.display = "flex";
    } else {
      const themeImg = typeof getImageForContext === "function" ? getImageForContext(tip) : null;
      if (themeImg) {
        if (bannerImg) {
          bannerImg.src = themeImg.url;
          bannerImg.alt = themeImg.alt;
        }
        if (bannerBadge) {
          bannerBadge.textContent = themeImg.badge;
        }
        bannerContainer.style.display = "flex";
      }
    }
  }

  if (bodyEl) {
    const formulaHtml = tip.formula ? `
      <div style="background: rgba(168, 85, 247, 0.18); border: 1px solid rgba(168, 85, 247, 0.45); border-left: 4px solid #c084fc; border-radius: 8px; padding: 10px 14px; margin: 12px 0 10px 0; display: flex; align-items: flex-start; gap: 10px;">
        <span style="font-size: 20px; line-height: 1;">📐</span>
        <div style="flex: 1;">
          <div style="font-size: 11px; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.5px;">Fórmula Mnemotécnica / Regla Rápida:</div>
          <div style="font-size: 14px; font-weight: 800; color: #fdf4ff; font-family: 'Consolas', monospace; margin-top: 3px; line-height: 1.4;">${tip.formula}</div>
        </div>
      </div>
    ` : "";

    bodyEl.innerHTML = `
      <div style="font-size: 16px; font-weight: 700; color: #f8fafc; margin-bottom: 8px; line-height: 1.5;">
        ${tip.resumenCorto}
      </div>
      ${formulaHtml}
      <div style="font-size: 15px; color: #f1f5f9; line-height: 1.65; margin-top: 6px;">
        ${tip.contenidoDetallado}
      </div>
    `;
    bodyEl.style.borderLeftColor = tip.color || "#f59e0b";
  }

  openModal(modal);
  if (typeof SoundFX !== "undefined") SoundFX.playChime();
}

function checkOccasionalTipTrigger(origin = "general") {
  if (!AppState.autoTips.enabled) return;
  AppState.autoTips.questionsSinceLastTip += 1;

  // Cada 4 preguntas respondidas lanza un tip flash
  if (AppState.autoTips.questionsSinceLastTip >= AppState.autoTips.intervalQuestions) {
    AppState.autoTips.questionsSinceLastTip = 0;
    setTimeout(() => {
      const isAnyModalActive = document.querySelector(".modal-overlay.active");
      const isDrillRunning = typeof SpeedDrillState !== "undefined" && SpeedDrillState.timer !== null;
      if (!isAnyModalActive && !isDrillRunning) {
        showRandomTipFlash({ forced: false });
      }
    }, 450);
  }
}

async function loadUserData() {
  const savedProfileId = await StorageManager.get("activeProfileId", "gestor_iii");
  AppState.activeProfileId = savedProfileId;

  if (typeof setActiveQuestionBank === "function") {
    setActiveQuestionBank(savedProfileId);
  }

  const savedJob = await StorageManager.get("activeJob", null);
  if (savedJob) {
    AppState.activeJob = { ...AppState.activeJob, ...savedJob };
  } else if (typeof PROFILES_DATA !== "undefined" && PROFILES_DATA[savedProfileId]) {
    AppState.activeJob = { ...PROFILES_DATA[savedProfileId] };
  }

  const savedStats = await StorageManager.get("stats", null);
  if (savedStats) AppState.stats = savedStats;

  const savedSrs = await StorageManager.get("srsCards", []);
  if (savedSrs) AppState.srsCards = savedSrs;

  const savedAutoTips = await StorageManager.get("autoTipsEnabled", true);
  AppState.autoTips.enabled = savedAutoTips;

  const savedQuestionTimer = await StorageManager.get("questionTimerSeconds", 120);
  PracticeTimer.setTotalSeconds(savedQuestionTimer);
}

// Modal personalizado (reemplazo estricto de alert y confirm)
function showCustomModal({ title, message, icon = "ℹ️", isConfirm = false, okText = "Aceptar", cancelText = "Cancelar", onOk = null, onCancel = null }) {
  const overlay = document.getElementById("generalAlertModal");
  const titleEl = document.getElementById("generalAlertTitle");
  const messageEl = document.getElementById("generalAlertMessage");
  const iconEl = document.getElementById("generalAlertIcon");
  const btnOk = document.getElementById("btnGeneralAlertOk");
  const btnCancel = document.getElementById("btnGeneralAlertCancel");

  if (!overlay || !titleEl) return;

  titleEl.textContent = title;
  messageEl.textContent = message;
  iconEl.textContent = icon;
  btnOk.textContent = okText;
  btnCancel.textContent = cancelText;

  btnCancel.style.display = isConfirm ? "inline-block" : "none";

  const close = () => closeModal(overlay);

  btnOk.onclick = () => {
    close();
    if (onOk) onOk();
  };

  btnCancel.onclick = () => {
    close();
    if (onCancel) onCancel();
  };

  openModal(overlay);
}

// =========================================================================
// 1. TEMPORIZADOR POMODORO INTEGRADO (25 MIN ESTUDIO / 5 MIN DESCANSO)
// =========================================================================
function setupPomodoro() {
  const widget = document.getElementById("pomodoroWidget");
  const clock = document.getElementById("pomodoroClock");
  const label = document.getElementById("pomodoroLabel");

  const updatePomodoroUI = () => {
    const mins = Math.floor(AppState.pomodoro.timeLeft / 60);
    const secs = AppState.pomodoro.timeLeft % 60;
    clock.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    if (AppState.pomodoro.mode === "break") {
      widget.classList.add("break-mode");
      label.textContent = "Pausa";
    } else {
      widget.classList.remove("break-mode");
      label.textContent = "Estudio";
    }
  };

  widget.addEventListener("click", () => {
    if (AppState.pomodoro.isRunning) {
      clearInterval(AppState.pomodoro.interval);
      AppState.pomodoro.isRunning = false;
      showCustomModal({
        title: "Pomodoro Pausado",
        message: "El temporizador de estudio está en pausa. Haz clic de nuevo cuando desees reanudar.",
        icon: "⏸️"
      });
    } else {
      AppState.pomodoro.isRunning = true;
      AppState.pomodoro.interval = setInterval(() => {
        AppState.pomodoro.timeLeft -= 1;
        updatePomodoroUI();

        if (AppState.pomodoro.timeLeft <= 0) {
          clearInterval(AppState.pomodoro.interval);
          AppState.pomodoro.isRunning = false;

          if (AppState.pomodoro.mode === "work") {
            AppState.pomodoro.sessionsCompleted += 1;
            AppState.pomodoro.mode = "break";
            AppState.pomodoro.timeLeft = 5 * 60; // 5 minutos de pausa
            updatePomodoroUI();

            showCustomModal({
              title: "¡Sesión Pomodoro Completada! 🍅",
              message: "Completaste 25 minutos de estudio enfocado. Tómate 5 minutos de pausa para consolidar el aprendizaje en tu memoria.",
              icon: "🎉",
              onOk: () => {
                AppState.pomodoro.isRunning = true;
                AppState.pomodoro.interval = setInterval(tick, 1000);
              }
            });
          } else {
            AppState.pomodoro.mode = "work";
            AppState.pomodoro.timeLeft = 25 * 60;
            updatePomodoroUI();

            showCustomModal({
              title: "¡Pausa Terminada! 🚀",
              message: "Regresemos al estudio con la mente fresca para la siguiente ronda de casos situacionales.",
              icon: "💪"
            });
          }
        }
      }, 1000);
    }
  });

  const tick = () => {
    AppState.pomodoro.timeLeft -= 1;
    updatePomodoroUI();
  };

  updatePomodoroUI();
}

// Navegación Estilo App Duolingo
function setupNavigation() {
  const tabs = document.querySelectorAll(".nav-tab-item, .tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.getAttribute("data-tab")));
  });

  // Tarjetas del Centro de Recursos (Learning Hub)
  const hubTips = document.getElementById("hubCardTips");
  if (hubTips) {
    hubTips.addEventListener("click", () => {
      const tipsModal = document.getElementById("tipsModal");
      if (tipsModal) openModal(tipsModal);
    });
  }

  const hubMicro = document.getElementById("hubCardMicrolearning");
  if (hubMicro) {
    hubMicro.addEventListener("click", () => {
      openModal(document.getElementById("microlearningModal"));
    });
  }

  const hubLectura = document.getElementById("hubCardLectura");
  if (hubLectura) {
    hubLectura.addEventListener("click", () => {
      const btn = document.getElementById("btnOpenLecturaModal");
      if (btn) btn.click();
    });
  }

  const hubSRS = document.getElementById("hubCardSRS");
  if (hubSRS) {
    hubSRS.addEventListener("click", () => switchTab("srs"));
  }

  const hubJob = document.getElementById("hubCardJob");
  if (hubJob) {
    hubJob.addEventListener("click", () => switchTab("jobFocus"));
  }

  // Botones de retorno al centro de recursos
  document.querySelectorAll(".btn-back-to-recursos").forEach((btn) => {
    btn.addEventListener("click", () => switchTab("recursos"));
  });

  // Modal de Ajustes
  const btnSettings = document.getElementById("btnOpenSettingsModal");
  const modalSettings = document.getElementById("appSettingsModal");
  const btnCloseSettingsX = document.getElementById("btnCloseSettingsModalX");
  const btnCloseSettings = document.getElementById("btnCloseSettingsModal");
  const btnSettingsOpenJob = document.getElementById("btnSettingsOpenJob");
  const btnSettingsOpenBgTips = document.getElementById("btnSettingsOpenBgTips");

  if (btnSettings && modalSettings) {
    btnSettings.addEventListener("click", () => openModal(modalSettings));
  }
  if (btnCloseSettingsX && modalSettings) {
    btnCloseSettingsX.addEventListener("click", () => closeModal(modalSettings));
  }
  if (btnCloseSettings && modalSettings) {
    btnCloseSettings.addEventListener("click", () => closeModal(modalSettings));
  }
  if (btnSettingsOpenJob && modalSettings) {
    btnSettingsOpenJob.addEventListener("click", () => {
      closeModal(modalSettings);
      const jobModal = document.getElementById("jobModal");
      if (jobModal) openModal(jobModal);
    });
  }
  if (btnSettingsOpenBgTips && modalSettings) {
    btnSettingsOpenBgTips.addEventListener("click", () => {
      closeModal(modalSettings);
      const microModal = document.getElementById("microlearningModal");
      if (microModal) openModal(microModal);
    });
  }

  // Clic en el Chip de Perfil de la cabecera para abrir configuración del cargo
  const headerProfile = document.getElementById("btnHeaderProfile");
  if (headerProfile) {
    headerProfile.addEventListener("click", (e) => {
      if (e.target && e.target.id === "profileSwitcher") return;
      const jobModal = document.getElementById("jobModal");
      if (jobModal) openModal(jobModal);
    });
  }
}

function switchTab(tabName) {
  // Si salimos de speedDrill, limpiar su temporizador activo
  if (typeof SpeedDrillState !== "undefined" && SpeedDrillState.timer) {
    clearInterval(SpeedDrillState.timer);
    SpeedDrillState.timer = null;
  }

  AppState.currentTab = tabName;

  // Si se ingresa a una sub-herramienta de recursos, mantener iluminado 'recursos' en el bottom nav
  const activeNavKey = ["srs", "jobFocus", "recursos"].includes(tabName) ? "recursos" : tabName;

  document.querySelectorAll(".nav-tab-item, .tab-btn").forEach((t) => {
    const dataTab = t.getAttribute("data-tab");
    t.classList.toggle("active", dataTab === activeNavKey || dataTab === tabName);
  });

  document.querySelectorAll(".tab-content").forEach((c) => {
    if (c.id === `tab-${tabName}`) {
      c.style.display = "flex";
      c.style.flexDirection = "column";
      c.style.width = "100%";
    } else {
      c.style.display = "none";
    }
  });

  // Mostrar filtro de ejes únicamente en la pestaña de práctica
  const filterBar = document.getElementById("practiceFilterBar");
  if (filterBar) filterBar.style.display = tabName === "practice" ? "flex" : "none";

  if (tabName === "practice") {
    if (!AppState.practiceSession.active) {
      showPracticeCover();
    } else {
      hidePracticeCover();
    }
  }

  if (tabName === "jobFocus") renderJobFocusTab();
  if (tabName === "srs") renderSrsTab();
  if (tabName === "stats") renderStatsTab();
  if (tabName === "speedDrill") startSpeedDrill();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateJobProfileUI() {
  const job = AppState.activeJob || {};
  const titleDisplay = document.getElementById("jobTitleDisplay");
  const opecBadge = document.getElementById("jobOpecBadge");
  const levelBadge = document.getElementById("jobLevelBadge");
  const switcher = document.getElementById("profileSwitcher");

  if (titleDisplay) {
    titleDisplay.textContent = `Ficha ${job.codeFicha || 'DIAN 2676'} | ${job.title || ''}`;
  }
  if (opecBadge) {
    opecBadge.textContent = `OPEC ${job.opec || '2676'}`;
  }
  if (levelBadge) {
    levelBadge.textContent = `${job.shortTitle || job.title || 'DIAN'} • ${(job.level || 'PROFESIONAL').toUpperCase()}`;
  }
  if (switcher && AppState.activeProfileId) {
    switcher.value = AppState.activeProfileId;
  }
}

function applyProfile(profileId, save = true, showNotification = false) {
  if (typeof PROFILES_DATA === "undefined" || !PROFILES_DATA[profileId]) return;
  AppState.activeProfileId = profileId;
  const profile = PROFILES_DATA[profileId];
  AppState.activeJob = { ...profile };

  if (typeof setActiveQuestionBank === "function") {
    setActiveQuestionBank(profileId);
  }

  if (save) {
    StorageManager.set("activeProfileId", profileId);
    StorageManager.set("activeJob", AppState.activeJob);
  }

  const switcher = document.getElementById("profileSwitcher");
  if (switcher) switcher.value = profileId;

  updateJobProfileUI();
  updateEjeFilterOptions(profileId);
  loadNextPracticeQuestion();

  if (AppState.currentTab === "jobFocus") renderJobFocusTab();
  if (AppState.currentTab === "srs") renderSrsTab();
  if (AppState.currentTab === "stats") renderStatsTab();

  if (showNotification) {
    showCustomModal({
      title: `Perfil Cambiado: ${profile.shortTitle || profile.title}`,
      message: `Se ha activado el banco de preguntas y los indicadores oficiales para ${profile.title} (OPEC ${profile.opec}).`,
      icon: "🎯"
    });
  }
}

function updateEjeFilterOptions(profileId) {
  const filterSelect = document.getElementById("selectEjeFilter");
  if (!filterSelect || typeof PROFILES_DATA === "undefined") return;
  const profile = PROFILES_DATA[profileId] || PROFILES_DATA.gestor_iii;
  if (!profile || !profile.filterOptions) return;

  filterSelect.innerHTML = "";
  profile.filterOptions.forEach((opt) => {
    const optionEl = document.createElement("option");
    optionEl.value = opt.id;
    optionEl.textContent = opt.label;
    filterSelect.appendChild(optionEl);
  });

  AppState.currentEjeFilter = "todos";
  filterSelect.value = "todos";
}

function setupProfileSwitcher() {
  const switcher = document.getElementById("profileSwitcher");
  if (!switcher) return;
  switcher.addEventListener("change", (e) => {
    applyProfile(e.target.value, true, true);
  });
}

function updateStreakUI() {
  const streakCount = document.getElementById("streakCount");
  const today = new Date().toISOString().slice(0, 10);
  
  if (AppState.stats.lastStudyDate !== today) {
    const lastDate = new Date(AppState.stats.lastStudyDate);
    const currDate = new Date(today);
    const diffDays = Math.round((currDate - lastDate) / (1000 * 3600 * 24));
    
    if (diffDays === 1) {
      AppState.stats.streak += 1;
    } else if (diffDays > 1) {
      AppState.stats.streak = 1;
    }
    AppState.stats.lastStudyDate = today;
    StorageManager.set("stats", AppState.stats);
  }

  streakCount.textContent = AppState.stats.streak;
}

// =========================================================================
// 2. PRÁCTICA LIBRE CON FILTRO POR EJES TEMÁTICOS
// =========================================================================
function setupPracticeLogic() {
  const btnConfirm = document.getElementById("btnConfirmAnswer");
  const btnNext = document.getElementById("btnNextQuestion");
  const btnCloseModal = document.getElementById("btnCloseFeedback");
  const filterSelect = document.getElementById("selectEjeFilter");

  const btnStartCover = document.getElementById("btnStartPracticeFromCover");
  const btnFinishCard = document.getElementById("btnFinishSessionFromCard");
  const btnFinishFeedback = document.getElementById("btnFinishSessionFromFeedback");
  const btnActionPractice = document.getElementById("btnActionPractice");

  if (btnActionPractice) {
    btnActionPractice.addEventListener("click", () => {
      if (AppState.currentTab !== "practice") {
        switchTab("practice");
      }
      if (!AppState.practiceSession.active) {
        startPracticeSession();
      } else {
        const questionCard = document.getElementById("practiceQuestionCard");
        if (questionCard) {
          questionCard.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  if (btnStartCover) {
    btnStartCover.addEventListener("click", () => {
      startPracticeSession();
    });
  }

  if (btnFinishCard) {
    btnFinishCard.addEventListener("click", () => {
      finishPracticeSession();
    });
  }

  if (btnFinishFeedback) {
    btnFinishFeedback.addEventListener("click", () => {
      finishPracticeSession();
    });
  }

  filterSelect.addEventListener("change", (e) => {
    AppState.currentEjeFilter = e.target.value;
    if (AppState.practiceSession.active) {
      loadNextPracticeQuestion();
    }
  });

  btnConfirm.addEventListener("click", () => {
    if (!AppState.selectedOption) return;
    evaluateAnswer(AppState.selectedOption);
  });

  btnNext.addEventListener("click", () => {
    checkOccasionalTipTrigger("btnNext");
    loadNextPracticeQuestion();
  });

  btnCloseModal.addEventListener("click", () => {
    closeModal(document.getElementById("feedbackModal"));
    checkOccasionalTipTrigger("btnCloseModal");
    loadNextPracticeQuestion();
  });

  document.querySelectorAll(".srs-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const difficulty = btn.getAttribute("data-srs");
      handleSrsRating(difficulty);
      closeModal(document.getElementById("feedbackModal"));
      checkOccasionalTipTrigger("srsFeedback");
      loadNextPracticeQuestion();
    });
  });

  const btnScanner = document.getElementById("btnToggleScanner");
  if (btnScanner) {
    btnScanner.addEventListener("click", toggleCaseScanner);
  }
}

// Escáner Rayos X para Lectura Crítica de Casos Situacionales
let isScannerActive = false;
function toggleCaseScanner() {
  const caseEl = document.getElementById("qCaseText");
  const btn = document.getElementById("btnToggleScanner");
  if (!caseEl || !AppState.currentQuestion || !AppState.currentQuestion.caso) return;

  isScannerActive = !isScannerActive;
  if (!isScannerActive) {
    caseEl.textContent = AppState.currentQuestion.caso;
    if (btn) {
      btn.style.background = "rgba(168, 85, 247, 0.15)";
      btn.style.borderColor = "rgba(168, 85, 247, 0.4)";
      btn.style.color = "#c084fc";
      btn.innerHTML = "🔍 Escáner Rayos X";
    }
    return;
  }

  if (btn) {
    btn.style.background = "rgba(168, 85, 247, 0.4)";
    btn.style.borderColor = "#c084fc";
    btn.style.color = "#ffffff";
    btn.innerHTML = "✨ Rayos X Activo";
  }

  let text = AppState.currentQuestion.caso;
  text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // 1. Fechas, plazos y números temporales (Dorado/Ámbar)
  text = text.replace(/\b(\d+)\s*(meses|días|dias|años|horas|semanas|folios|páginas|paginas)\b/gi, '<mark style="background: rgba(245, 158, 11, 0.25); color: #fde68a; font-weight: 700; padding: 1px 4px; border-radius: 4px; border-bottom: 2px solid #f59e0b;">$1 $2</mark>');
  text = text.replace(/\b(\d{1,2}\s+de\s+[a-záéíóú]+(?:\s+de\s+\d{4})?)\b/gi, '<mark style="background: rgba(245, 158, 11, 0.25); color: #fde68a; font-weight: 700; padding: 1px 4px; border-radius: 4px; border-bottom: 2px solid #f59e0b;">$1</mark>');

  // 2. Actos administrativos, normas y montos monetarios (Azul/Cian)
  text = text.replace(/\b(liquidación oficial(?:\s+de\s+revisión|\s+de\s+corrección)?|requerimiento especial|recurso de reconsideración|estatuto tributario|decreto\s+\d+|resolución|resolucion|artículo\s+\d+|articulo\s+\d+|auto de suspensión|póliza de seguro|\$\s*[\d\.\,]+)\b/gi, '<mark style="background: rgba(56, 189, 248, 0.25); color: #bae6fd; font-weight: 700; padding: 1px 4px; border-radius: 4px; border-bottom: 2px solid #38bdf8;">$1</mark>');

  // 3. Palabras trampa / cuantificadores categóricos (Rojo sutil tachado)
  text = text.replace(/\b(automática|automático|automáticamente|de plano|inapelable|inapelable de plano|de plano y sin fórmula de juicio|suspensión indefinida|condonación total y de plano|siempre|nunca|sin audiencia)\b/gi, '<mark style="background: rgba(239, 68, 68, 0.28); color: #fca5a5; font-weight: 700; padding: 1px 4px; border-radius: 4px; border-bottom: 2px solid #ef4444; text-decoration: line-through;">$1</mark>');

  caseEl.innerHTML = text;
}

// Cronómetro reglamentario configurable por el usuario (Microaprendizaje / Práctica)
const PracticeTimer = {
  totalSeconds: 120, // Por defecto 120s (2 min)
  remaining: 120,
  interval: null,
  isPaused: false,
  setTotalSeconds(sec) {
    this.totalSeconds = typeof sec === "number" ? sec : 120;
    if (this.totalSeconds === 0) {
      this.remaining = 0;
    } else {
      this.remaining = this.totalSeconds;
    }
    this.updateUI();
  },
  start() {
    this.stop();
    this.isPaused = false;

    if (this.totalSeconds === 0) {
      // Modo libre sin límite de tiempo (cronómetro hacia arriba)
      this.remaining = 0;
      this.updateUI();
      this.interval = setInterval(() => {
        if (this.isPaused) return;
        this.remaining += 1;
        this.updateUI();
      }, 1000);
      return;
    }

    // Modo cuenta regresiva con tiempo límite
    this.remaining = this.totalSeconds;
    this.updateUI();

    this.interval = setInterval(() => {
      if (this.isPaused) return;
      this.remaining -= 1;
      this.updateUI();

      const warningThreshold = Math.min(30, Math.max(10, Math.floor(this.totalSeconds * 0.25)));
      if (this.remaining === warningThreshold || this.remaining === 10) {
        if (typeof SoundFX !== "undefined" && SoundFX.playTick) SoundFX.playTick();
      }

      if (this.remaining <= 0) {
        this.stop();
        if (typeof SoundFX !== "undefined" && SoundFX.playTimeout) SoundFX.playTimeout();
        this.updateUI();
        showCustomModal({
          title: "⏱️ Tiempo de Respuesta Agotado",
          message: `Han transcurrido los ${this.totalSeconds} segundos configurados para este caso. Confirma tu opción para ver el análisis de distractores y la clave oficial.`,
          icon: "⌛"
        });
      }
    }, 1000);
  },
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  pause() {
    this.isPaused = true;
  },
  updateUI() {
    const timerEl = document.getElementById("practiceQuestionTimer");
    if (!timerEl) return;

    if (this.totalSeconds === 0) {
      const mins = Math.floor(this.remaining / 60);
      const secs = this.remaining % 60;
      timerEl.textContent = `⏱️ ${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")} (Libre)`;
      timerEl.style.color = "#38bdf8";
      timerEl.style.borderColor = "rgba(56, 189, 248, 0.4)";
      timerEl.style.background = "rgba(15, 23, 42, 0.8)";
      return;
    }

    const mins = Math.floor(Math.max(0, this.remaining) / 60);
    const secs = Math.max(0, this.remaining) % 60;
    timerEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    const warningThreshold = Math.min(30, Math.max(10, Math.floor(this.totalSeconds * 0.25)));
    if (this.remaining <= warningThreshold) {
      timerEl.style.color = "#f87171";
      timerEl.style.borderColor = "#ef4444";
      timerEl.style.background = "rgba(239, 68, 68, 0.2)";
    } else {
      timerEl.style.color = "#f8fafc";
      timerEl.style.borderColor = "rgba(255,255,255,0.15)";
      timerEl.style.background = "rgba(15, 23, 42, 0.8)";
    }
  }
};

function showPracticeCover() {
  const cover = document.getElementById("practiceCoverCard");
  const card = document.getElementById("practiceCardContainer");
  const shortTitle = AppState.activeJob?.shortTitle || "DIAN 2676";
  const badge = document.getElementById("practiceCoverBadge");
  if (badge) badge.textContent = `Modo Práctica • ${shortTitle}`;

  if (cover) cover.style.display = "flex";
  if (card) card.style.display = "none";
  PracticeTimer.stop();
}

function hidePracticeCover() {
  const cover = document.getElementById("practiceCoverCard");
  const card = document.getElementById("practiceCardContainer");
  if (cover) cover.style.display = "none";
  if (card) card.style.display = "flex";
}

function promptStartPracticeSession({ fromSwitch = false } = {}) {
  const shortTitle = AppState.activeJob?.shortTitle || "DIAN 2676";
  showCustomModal({
    title: "Iniciar Modo Práctica",
    message: `¿Deseas iniciar una sesión de entrenamiento en Juicio Situacional para ${shortTitle}? Se activará el temporizador por caso y se registrará tu desempeño.`,
    icon: "🎯",
    isConfirm: true,
    okText: "▶ Iniciar Práctica",
    cancelText: "Ahora no",
    onOk: () => {
      startPracticeSession();
    },
    onCancel: () => {
      AppState.practiceSession.active = false;
      showPracticeCover();
      if (fromSwitch) {
        switchTab("recursos");
      }
    }
  });
}

function startPracticeSession() {
  AppState.practiceSession.active = true;
  AppState.practiceSession.questionsAnswered = 0;
  AppState.practiceSession.correctCount = 0;
  hidePracticeCover();
  loadNextPracticeQuestion();
}

function finishPracticeSession() {
  PracticeTimer.stop();
  const feedbackModal = document.getElementById("feedbackModal");
  if (feedbackModal) closeModal(feedbackModal);

  const total = AppState.practiceSession.questionsAnswered || 0;
  const correct = AppState.practiceSession.correctCount || 0;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const streak = AppState.sessionStreak || 0;

  AppState.practiceSession.active = false;
  showPracticeCover();

  showCustomModal({
    title: "Sesión de Práctica Finalizada",
    message: total > 0
      ? `¡Excelente entrenamiento! Has respondido ${total} caso(s) en esta sesión con ${correct} acierto(s) (${pct}% de efectividad). Tu racha en esta sesión fue de ${streak} acierto(s) consecutivos.`
      : "Has finalizado la sesión de práctica. ¡Puedes retomarla cuando quieras!",
    icon: "🏆",
    isConfirm: false,
    okText: "Ver Estadísticas",
    onOk: () => {
      switchTab("stats");
    }
  });
}

function loadNextPracticeQuestion() {
  if (!AppState.practiceSession.active) {
    AppState.practiceSession.active = true;
  }
  hidePracticeCover();
  const filter = AppState.currentEjeFilter;
  let pool = null;
  if (typeof getQuestionsForProfile === "function") {
    pool = getQuestionsForProfile(AppState.activeProfileId);
  }
  if (!pool || pool.length === 0) {
    if (typeof window !== "undefined" && window.QUESTION_BANK && window.QUESTION_BANK.length > 0) {
      pool = window.QUESTION_BANK;
    } else if (typeof QUESTION_BANK !== "undefined" && Array.isArray(QUESTION_BANK) && QUESTION_BANK.length > 0) {
      pool = QUESTION_BANK;
    } else if (typeof window !== "undefined" && window.QUESTION_BANK_GESTOR && window.QUESTION_BANK_GESTOR.length > 0) {
      pool = window.QUESTION_BANK_GESTOR;
    } else {
      pool = [];
    }
  }

  if (!pool || pool.length === 0) {
    console.warn("[SIMO Prep] No hay preguntas disponibles en el banco.");
    return;
  }

  if (filter === "interleaving") {
    // Interleaving: prioriza alternar de eje temático respecto al caso anterior
    if (AppState.currentQuestion && AppState.currentQuestion.ejeId) {
      const otherEjes = pool.filter((q) => q.ejeId !== AppState.currentQuestion.ejeId);
      if (otherEjes.length > 0) pool = otherEjes;
    }
  } else if (filter && filter !== "todos") {
    const filtered = pool.filter((q) => {
      if (filter === "misionalidad" && AppState.activeProfileId === "gestor_iii") return q.ejeId === "misionalidad" || q.ejeId === "estructura_dian";
      if (filter === "mipg") return q.ejeId === "mipg" || q.ejeId === "desempeno";
      if (filter === "adaptabilidad") return q.ejeId && q.ejeId.startsWith("adaptabilidad");
      if (filter === "comportamiento_etico") return q.ejeId && q.ejeId.startsWith("comportamiento_etico");
      if (filter === "comunicacion_efectiva") return q.ejeId && q.ejeId.startsWith("comunicacion_efectiva");
      if (filter === "trabajo_equipo") return q.ejeId && q.ejeId.startsWith("trabajo_equipo");
      if (filter === "orientacion_logro") return q.ejeId && q.ejeId.startsWith("orientacion_logro");
      if (filter === "orientacion_usuario") return q.ejeId && q.ejeId.startsWith("orientacion_usuario");
      if (filter === "comprension_lectora") return q.ejeId === "comprension_lectora" || q.ejeId === "razonamiento";
      return q.ejeId === filter;
    });
    if (filtered.length > 0) pool = filtered;
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  const q = pool[randomIndex];
  renderPracticeQuestion(q);
}

function renderPracticeQuestion(q) {
  if (!q) return;
  AppState.currentQuestion = q;
  AppState.selectedOption = null;
  PracticeTimer.start();

  const levelBadge = document.getElementById("qBadgeLevel");
  if (levelBadge) {
    const short = AppState.activeJob?.shortTitle || (q.nivel === "Técnico" ? "ANALISTA IV" : "GESTOR III");
    levelBadge.textContent = `${short} • DIAN`;
  }
  document.getElementById("qBadgeType").textContent = q.tipo;
  document.getElementById("qBadgeTopic").textContent = q.tema;
  document.getElementById("qCaseText").textContent = q.caso;
  document.getElementById("qEnunciado").textContent = q.enunciado;

  // Actualizar métricas de velocidad de lectura (Lectura Crítica)
  const caseWords = q.caso ? q.caso.trim().split(/\s+/).length : 0;
  const targetSec = Math.max(25, Math.round(caseWords / 3.2));
  const paceBadge = document.getElementById("caseReadingPaceBadge");
  if (paceBadge) {
    paceBadge.textContent = `⏱️ ${caseWords} palabras • Meta: ${targetSec}s`;
    paceBadge.style.display = "inline-block";
  }

  // Reset del Escáner Rayos X a texto limpio para la nueva pregunta
  isScannerActive = false;
  const btnScanner = document.getElementById("btnToggleScanner");
  if (btnScanner) {
    btnScanner.style.background = "rgba(168, 85, 247, 0.15)";
    btnScanner.style.borderColor = "rgba(168, 85, 247, 0.4)";
    btnScanner.style.color = "#c084fc";
    btnScanner.innerHTML = "🔍 Escáner Rayos X";
  }

  // Ajustar banner de escena fotográfica curada (Unsplash / Wikimedia) según el caso
  const sceneBanner = document.getElementById("qSceneBannerContainer");
  const sceneImg = document.getElementById("qSceneBannerImg");
  if (sceneBanner) {
    const themeImg = typeof getImageForContext === "function" ? getImageForContext(q) : null;
    if (themeImg) {
      if (sceneImg) {
        sceneImg.src = themeImg.url;
        sceneImg.alt = themeImg.alt;
      }
      const label = sceneBanner.querySelector("div");
      if (label) {
        label.textContent = `📸 Contexto Visual: ${themeImg.badge} — ${themeImg.caption}`;
      }
      sceneBanner.style.display = "flex";
    }
  }

  // Reset de la cacería de distractores (oculta mientras se responde)
  const huntBox = document.getElementById("distractorHuntBox");
  if (huntBox) {
    huntBox.style.display = "none";
    huntBox.innerHTML = "";
  }

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  const btnConfirm = document.getElementById("btnConfirmAnswer");
  const postRow = document.getElementById("postAnswerActionsRow");
  if (btnConfirm) {
    btnConfirm.disabled = true;
    btnConfirm.style.display = "block";
  }
  if (postRow) postRow.style.display = "none";

  q.opciones.forEach((opt) => {
    const item = document.createElement("div");
    item.className = "option-item";
    item.setAttribute("data-id", opt.id);

    item.innerHTML = `
      <div class="option-key">${opt.id}</div>
      <div class="option-text">${opt.texto}</div>
    `;

    item.addEventListener("click", () => {
      document.querySelectorAll(".option-item").forEach((el) => el.classList.remove("selected"));
      item.classList.add("selected");
      AppState.selectedOption = opt.id;
      btnConfirm.disabled = false;
    });

    optionsContainer.appendChild(item);
  });
}

function evaluateAnswer(selectedId) {
  PracticeTimer.stop();
  const q = AppState.currentQuestion;
  const isCorrect = selectedId === q.respuestaCorrecta;

  // Feedback visual en las opciones de la tarjeta
  document.querySelectorAll(".option-item").forEach((el) => {
    const optId = el.getAttribute("data-id");
    el.style.pointerEvents = "none";
    if (optId === q.respuestaCorrecta) {
      el.style.borderColor = "var(--accent-green)";
      el.style.backgroundColor = "rgba(16, 185, 129, 0.16)";
      el.style.boxShadow = "0 4px 0 #047857";
    } else if (optId === selectedId) {
      el.style.borderColor = "var(--accent-red)";
      el.style.backgroundColor = "rgba(239, 68, 68, 0.16)";
      el.style.boxShadow = "0 4px 0 #991b1b";
    }
  });

  // Mostrar Cacería de Distractores en la tarjeta ahora que ya se confirmó
  const huntBox = document.getElementById("distractorHuntBox");
  if (huntBox) {
    const incorrectOpts = q.opciones.filter((o) => o.id !== q.respuestaCorrecta);
    huntBox.innerHTML = `
      <div style="font-weight: 800; color: #f59e0b; margin-bottom: 10px; font-size: 14px; display: flex; align-items: center; gap: 6px;">
        <span>🎯</span>
        <span>Cacería de Distractores: ¿Por qué fallan las otras opciones?</span>
      </div>
      ${incorrectOpts.map((o) => `
        <div style="margin-bottom: 8px; padding: 10px 12px; background: rgba(239, 68, 68, 0.12); border-left: 3px solid var(--accent-red); border-radius: 8px;">
          <strong style="color: #fca5a5; font-size: 13px;">❌ Opción ${o.id}:</strong>
          <div style="color: #e2e8f0; font-size: 13px; margin-top: 3px; line-height: 1.5;">${o.explicacion}</div>
        </div>
      `).join("")}
    `;
    huntBox.style.display = "block";
  }

  // Alternar botones de acción en la tarjeta
  const btnConfirm = document.getElementById("btnConfirmAnswer");
  const postRow = document.getElementById("postAnswerActionsRow");
  if (btnConfirm) btnConfirm.style.display = "none";
  if (postRow) postRow.style.display = "flex";

  AppState.stats.totalAnswered += 1;
  if (isCorrect) AppState.stats.correctCount += 1;

  AppState.practiceSession.questionsAnswered = (AppState.practiceSession.questionsAnswered || 0) + 1;
  if (isCorrect) AppState.practiceSession.correctCount = (AppState.practiceSession.correctCount || 0) + 1;

  if (q.tipo.includes("Funcional")) {
    AppState.stats.functionalTotal += 1;
    if (isCorrect) AppState.stats.functionalCorrect += 1;
  } else if (q.tipo.includes("Comportamental")) {
    AppState.stats.behavioralTotal += 1;
    if (isCorrect) AppState.stats.behavioralCorrect += 1;
  } else {
    AppState.stats.integrityTotal += 1;
    if (isCorrect) AppState.stats.integrityCorrect += 1;
  }

  StorageManager.set("stats", AppState.stats);
  if (typeof CloudSync !== "undefined" && CloudSync.config.autoSync && CloudSync.config.serverUrl) {
    CloudSync.pushProgress().catch(() => {});
  }

  if (!isCorrect) {
    addToSrsQueue(q, "hard");
    AppState.sessionStreak = 0;
    if (typeof SoundFX !== "undefined") SoundFX.playIncorrect();
  } else {
    AppState.sessionStreak = (AppState.sessionStreak || 0) + 1;
    if (typeof SoundFX !== "undefined") {
      if ([3, 5, 10, 15, 20].includes(AppState.sessionStreak)) {
        SoundFX.playFanfare();
        setTimeout(() => showStreakMilestoneModal(AppState.sessionStreak), 380);
      } else {
        SoundFX.playCorrect();
      }
    }
  }

  openFeedbackModal(isCorrect, q);
}

function openFeedbackModal(isCorrect, q) {
  const modal = document.getElementById("feedbackModal");
  const icon = document.getElementById("feedbackIcon");
  const title = document.getElementById("feedbackTitle");
  const normText = document.getElementById("feedbackNormText");
  const breakdownContainer = document.getElementById("feedbackOptionsBreakdown");

  const streakBadge = document.getElementById("feedbackStreakBadge");
  const streakTitle = document.getElementById("feedbackStreakTitle");
  const streakSub = document.getElementById("feedbackStreakSubtitle");
  const streakXP = document.getElementById("feedbackStreakXP");

  if (isCorrect) {
    icon.className = "verdict-icon correct";
    icon.textContent = "✓";
    title.className = "verdict-title correct";
    title.textContent = "¡Respuesta Correcta!";

    if (streakBadge && AppState.sessionStreak > 0) {
      streakTitle.textContent = `¡Racha Activa: ${AppState.sessionStreak} aciertos consecutivos! 🔥`;
      streakSub.textContent = `${AppState.sessionStreak} casos resueltos sin fallar en esta sesión`;
      streakXP.textContent = `+${AppState.sessionStreak * 50} XP`;
      streakBadge.style.display = "flex";
      streakBadge.classList.remove("streak-badge-active");
      void streakBadge.offsetWidth; // reflow para re-animar
      streakBadge.classList.add("streak-badge-active");
    }
  } else {
    icon.className = "verdict-icon incorrect";
    icon.textContent = "✕";
    title.className = "verdict-title incorrect";
    title.textContent = "Respuesta Incorrecta";
    if (streakBadge) streakBadge.style.display = "none";
  }

  if (q.citaNormativa) {
    normText.innerHTML = `
      <div style="font-weight: 700; color: #f8fafc; margin-bottom: 6px;">${q.norma || "Criterio de juicio situacional oficial para la DIAN."}</div>
      <div style="background: rgba(11, 17, 32, 0.7); border-left: 3px solid #38bdf8; padding: 10px 14px; border-radius: 6px; font-style: italic; font-size: 14px; line-height: 1.6; color: #cbd5e1; margin-top: 6px;">
        <strong style="color: #38bdf8; font-style: normal; display: block; margin-bottom: 2px;">📖 Cita Clave para asimilar:</strong>
        ${q.citaNormativa}
      </div>
    `;
  } else {
    normText.textContent = q.norma || "Criterio de juicio situacional oficial para la DIAN.";
  }
  breakdownContainer.innerHTML = "";

  q.opciones.forEach((opt) => {
    const isThisCorrect = opt.id === q.respuestaCorrecta;
    const item = document.createElement("div");
    item.className = `breakdown-item ${isThisCorrect ? "correct" : "incorrect"}`;
    item.style.cssText = `
      padding: 14px 16px;
      border-radius: 6px;
      font-size: 15px;
      line-height: 1.6;
      background-color: rgba(11, 17, 32, 0.7);
      border-left: 4px solid ${isThisCorrect ? "var(--accent-green)" : "#f87171"};
      margin-bottom: 2px;
    `;
    item.innerHTML = `
      <div style="font-size: 15px; font-weight: 800; color: ${isThisCorrect ? "var(--accent-green)" : "#f87171"}; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
        <span>${isThisCorrect ? "✓" : "✕"}</span>
        <span>Opción ${opt.id} ${isThisCorrect ? "— CLAVE OFICIAL CNSC/DIAN" : "— DISTRACTOR"}</span>
      </div> 
      <div style="font-size: 15px; color: #e2e8f0; line-height: 1.6;">
        ${opt.explicacion}
      </div>
    `;
    breakdownContainer.appendChild(item);
  });

  openModal(modal);
}

function handleSrsRating(difficulty) {
  if (typeof SoundFX !== "undefined") SoundFX.playPop();
  const q = AppState.currentQuestion;
  addToSrsQueue(q, difficulty);
}

function addToSrsQueue(question, difficulty, feynmanNotes = "") {
  const now = new Date();
  let daysToAdd = 1;
  let leitnerBox = 1;
  if (difficulty === "good") {
    daysToAdd = 3;
    leitnerBox = 2;
  }
  if (difficulty === "easy") {
    daysToAdd = 7;
    leitnerBox = 3;
  }

  const nextReview = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const existingIdx = AppState.srsCards.findIndex((c) => c.question && c.question.id === question.id);
  const existingNotes = existingIdx >= 0 ? AppState.srsCards[existingIdx].feynmanNotes || "" : "";
  const existingReps = existingIdx >= 0 ? (AppState.srsCards[existingIdx].repetitions || 1) : 0;

  const cardData = {
    question: question,
    nextReviewDate: nextReview,
    difficulty: difficulty,
    leitnerBox: leitnerBox,
    repetitions: existingReps + 1,
    feynmanNotes: feynmanNotes || existingNotes
  };

  if (existingIdx >= 0) {
    AppState.srsCards[existingIdx] = cardData;
  } else {
    AppState.srsCards.push(cardData);
  }

  StorageManager.set("srsCards", AppState.srsCards);
  if (typeof CloudSync !== "undefined" && CloudSync.config.autoSync) {
    CloudSync.pushProgress().catch(() => {});
  }
}

// =========================================================================
// 3. FLASHCARDS INTERACTIVAS 3D CON SISTEMA LEITNER Y QUIZ RELÁMPAGO
// =========================================================================
function setupSrsLogic() {
  // Filtros de Cajas Leitner
  const filterBtns = document.querySelectorAll(".leitner-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.srsFilter = btn.getAttribute("data-box");
      renderSrsCardsList();
    });
  });

  // Botón para iniciar Quiz Relámpago
  const btnStartQuiz = document.getElementById("btnStartQuizRelampago");
  if (btnStartQuiz) {
    btnStartQuiz.addEventListener("click", () => {
      startQuizRelampago();
    });
  }
}

function renderSrsTab() {
  // Si hay un quiz relámpago en curso, mantenerlo en pantalla
  if (AppState.quizRelampago && AppState.quizRelampago.isActive) {
    return;
  }

  const container = document.getElementById("srsListContainer");
  const badge = document.getElementById("srsPendingBadge");
  const quizBanner = document.getElementById("quizRelampagoBanner");
  const quizArea = document.getElementById("quizRelampagoArea");
  const leitnerFilters = document.getElementById("leitnerFilters");
  const cards = AppState.srsCards || [];

  if (quizArea) quizArea.style.display = "none";
  if (quizBanner) quizBanner.style.display = cards.length > 0 ? "flex" : "none";
  if (leitnerFilters) leitnerFilters.style.display = cards.length > 0 ? "grid" : "none";
  if (container) container.style.display = "flex";

  if (badge) badge.textContent = `${cards.length} en baraja`;

  // Calcular contadores por caja Leitner
  let box1Count = 0;
  let box2Count = 0;
  let box3Count = 0;

  cards.forEach((c) => {
    const box = c.leitnerBox || (c.difficulty === "hard" ? 1 : c.difficulty === "good" ? 2 : 3);
    if (box === 1) box1Count++;
    else if (box === 2) box2Count++;
    else if (box === 3) box3Count++;
  });

  const countBoxAll = document.getElementById("countBoxAll");
  const countBox1 = document.getElementById("countBox1");
  const countBox2 = document.getElementById("countBox2");
  const countBox3 = document.getElementById("countBox3");

  if (countBoxAll) countBoxAll.textContent = cards.length;
  if (countBox1) countBox1.textContent = box1Count;
  if (countBox2) countBox2.textContent = box2Count;
  if (countBox3) countBox3.textContent = box3Count;

  renderSrsCardsList();
}

function renderSrsCardsList() {
  const container = document.getElementById("srsListContainer");
  if (!container) return;
  container.innerHTML = "";

  const cards = AppState.srsCards || [];

  if (cards.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 16px; color: var(--text-secondary); display: flex; flex-direction: column; align-items: center; gap: 12px; background: rgba(15, 23, 42, 0.4); border: 1px dashed var(--border-color); border-radius: 12px;">
        <div style="font-size: 42px;">🎴</div>
        <div style="font-size: 14px; font-weight: 700; color: #f8fafc;">
          Tu Baraja de Flashcards está limpia
        </div>
        <div style="font-size: 12px; max-width: 290px; line-height: 1.5; color: #94a3b8;">
          Al resolver simulacros o preguntas de práctica, califica los casos como 🔴 Difícil o 🟡 Regular para que se agreguen automáticamente a tu baraja interactiva 3D.
        </div>
        <button class="btn-primary" style="margin-top: 6px; font-size: 11px; padding: 8px 16px;" onclick="switchTab('practice')">
          🚀 Ir a Practicar Preguntas
        </button>
      </div>
    `;
    return;
  }

  // Filtrar según la caja seleccionada
  const filter = AppState.srsFilter || "all";
  const filteredCards = cards.map((c, idx) => ({ ...c, originalIdx: idx })).filter((c) => {
    if (filter === "all") return true;
    const box = c.leitnerBox || (c.difficulty === "hard" ? 1 : c.difficulty === "good" ? 2 : 3);
    return String(box) === String(filter);
  });

  if (filteredCards.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-secondary); font-size: 12px; background: rgba(15, 23, 42, 0.3); border-radius: 8px;">
        No tienes tarjetas guardadas en esta caja en este momento.
      </div>
    `;
    return;
  }

  filteredCards.forEach((card) => {
    const q = card.question;
    const box = card.leitnerBox || (card.difficulty === "hard" ? 1 : card.difficulty === "good" ? 2 : 3);

    let boxBadgeBg = "rgba(239, 68, 68, 0.15)";
    let boxBadgeBorder = "rgba(239, 68, 68, 0.35)";
    let boxBadgeColor = "#fca5a5";
    let boxLabel = "🔴 Caja 1 • Repaso Diario";

    if (box === 2) {
      boxBadgeBg = "rgba(245, 158, 11, 0.15)";
      boxBadgeBorder = "rgba(245, 158, 11, 0.35)";
      boxBadgeColor = "#fde68a";
      boxLabel = "🟡 Caja 2 • Cada 3 Días";
    } else if (box === 3) {
      boxBadgeBg = "rgba(16, 185, 129, 0.15)";
      boxBadgeBorder = "rgba(16, 185, 129, 0.35)";
      boxBadgeColor = "#6ee7b7";
      boxLabel = "🟢 Caja 3 • Dominada (7 Días)";
    }

    const correctOpt = (q.opciones || []).find((o) => o.id === q.respuestaCorrecta);
    const correctText = correctOpt ? correctOpt.texto : "";

    const cardEl = document.createElement("div");
    cardEl.className = "srs-flip-card";

    cardEl.innerHTML = `
      <div class="srs-flip-inner">
        <!-- ANVERSO (FRENTE DE LA FICHA) -->
        <div class="srs-flip-front">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
            <span style="font-size: 10px; font-weight: 800; background: ${boxBadgeBg}; border: 1px solid ${boxBadgeBorder}; color: ${boxBadgeColor}; padding: 3px 8px; border-radius: 6px;">
              ${boxLabel}
            </span>
            <span style="font-size: 10px; color: var(--text-secondary);">
              Repaso: <strong style="color: #cbd5e1;">${card.nextReviewDate || "Hoy"}</strong>
            </span>
          </div>

          <div style="font-size: 11px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.4px;">
            ${q.ejeNombre || q.tipo || "Juicio Situacional"} • ${q.tema || "DIAN"}
          </div>

          <div style="font-size: 12px; color: #f8fafc; font-weight: 600; line-height: 1.5; background: rgba(11, 17, 32, 0.6); padding: 10px 12px; border-radius: 8px; border-left: 3px solid var(--accent-gold);">
            ${q.caso}
          </div>

          <!-- Opciones para reflexión activa previa al volteo -->
          <div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #cbd5e1;">
            ${(q.opciones || []).map((opt) => `
              <div style="padding: 6px 8px; background: rgba(255, 255, 255, 0.04); border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.06); display: flex; gap: 6px;">
                <strong style="color: #38bdf8;">${opt.id})</strong>
                <span>${opt.texto}</span>
              </div>
            `).join("")}
          </div>

          <div class="srs-flip-indicator">
            <span>🔄 Toca aquí para voltear y ver fundamento legal</span>
          </div>
        </div>

        <!-- REVERSO (FUNDAMENTO Y AUTOEVALUACIÓN LEITNER) -->
        <div class="srs-flip-back">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 10px; font-weight: 800; color: #10b981; text-transform: uppercase; display: flex; align-items: center; gap: 4px;">
              <span>⚖️ Criterio Oficial DIAN</span>
            </span>
            <button class="btn-flip-back" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #cbd5e1; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 4px; cursor: pointer;">
              ↩️ Frente
            </button>
          </div>

          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 12px; font-weight: 800; color: #34d399;">
              ✓ Respuesta Correcta: Opción ${q.respuestaCorrecta}
            </div>
            ${correctText ? `<div style="font-size: 11px; color: #f1f5f9; line-height: 1.4;">${correctText}</div>` : ""}
          </div>

          <div style="background: rgba(11, 17, 32, 0.7); border-radius: 8px; padding: 8px 10px; border-left: 3px solid #6366f1; font-size: 11px; color: #cbd5e1; line-height: 1.4;">
            <strong style="color: #a5b4fc; display: block; margin-bottom: 2px;">Fundamento Normativo:</strong>
            ${q.norma || "Fundamento legal y directriz del modelo de evaluación por competencias."}
          </div>

          <!-- Acciones de Repetición Espaciada Leitner -->
          <div style="display: flex; flex-direction: column; gap: 6px; margin-top: auto;">
            <div style="font-size: 10px; font-weight: 800; color: #94a3b8; text-transform: uppercase; text-align: center;">
              ¿Cómo la dominas? (Califica para espaciar)
            </div>
            <div class="leitner-actions-grid">
              <button class="leitner-action-btn leitner-btn-hard" data-box="1" title="Repasar mañana">
                <span>🔴 Difícil</span>
                <span style="font-size: 9px; opacity: 0.85;">Caja 1 • Diario</span>
              </button>
              <button class="leitner-action-btn leitner-btn-good" data-box="2" title="Repasar en 3 días">
                <span>🟡 Regular</span>
                <span style="font-size: 9px; opacity: 0.85;">Caja 2 • 3 días</span>
              </button>
              <button class="leitner-action-btn leitner-btn-easy" data-box="3" title="Repasar en 7 días">
                <span>🟢 Dominada</span>
                <span style="font-size: 9px; opacity: 0.85;">Caja 3 • 7 días</span>
              </button>
            </div>
          </div>

          <!-- Acciones de práctica y eliminación -->
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; margin-top: 4px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 6px;">
            <button class="btn-srs-practice" style="background: none; border: none; color: #38bdf8; font-size: 11px; font-weight: 700; cursor: pointer; padding: 2px 4px; display: flex; align-items: center; gap: 4px;">
              <span>🎯 Entrenar en Práctica ➔</span>
            </button>
            <button class="btn-srs-delete" style="background: none; border: none; color: #f87171; font-size: 11px; font-weight: 700; cursor: pointer; padding: 2px 4px; display: flex; align-items: center; gap: 4px;">
              <span>🗑️ Quitar</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // Evento de volteo 3D al hacer clic en el frente
    const frontEl = cardEl.querySelector(".srs-flip-front");
    frontEl.addEventListener("click", () => {
      cardEl.classList.toggle("flipped");
      if (typeof SoundFX !== "undefined") SoundFX.playPop();
    });

    // Botón para volver al frente desde el reverso
    const btnFlipBack = cardEl.querySelector(".btn-flip-back");
    btnFlipBack.addEventListener("click", (e) => {
      e.stopPropagation();
      cardEl.classList.remove("flipped");
    });

    // Calificación Leitner
    const rateBtns = cardEl.querySelectorAll(".leitner-action-btn");
    rateBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetBox = parseInt(btn.getAttribute("data-box"), 10);
        rateLeitnerCard(card.originalIdx, targetBox);
      });
    });

    // Entrenar este caso en práctica
    const btnPractice = cardEl.querySelector(".btn-srs-practice");
    btnPractice.addEventListener("click", (e) => {
      e.stopPropagation();
      renderPracticeQuestion(q);
      switchTab("practice");
    });

    // Eliminar tarjeta
    const btnDelete = cardEl.querySelector(".btn-srs-delete");
    btnDelete.addEventListener("click", (e) => {
      e.stopPropagation();
      showCustomModal({
        title: "¿Quitar Flashcard?",
        message: "¿Deseas eliminar esta tarjeta de tu cuaderno de repaso Leitner?",
        icon: "🗑️",
        isConfirm: true,
        onOk: () => {
          AppState.srsCards.splice(card.originalIdx, 1);
          StorageManager.set("srsCards", AppState.srsCards);
          if (typeof SoundFX !== "undefined") SoundFX.playPop();
          renderSrsTab();
        }
      });
    });

    container.appendChild(cardEl);
  });
}

function rateLeitnerCard(cardIdx, targetBox) {
  const card = AppState.srsCards[cardIdx];
  if (!card) return;

  card.leitnerBox = targetBox;
  card.difficulty = targetBox === 1 ? "hard" : targetBox === 2 ? "good" : "easy";

  const now = new Date();
  const days = targetBox === 1 ? 1 : targetBox === 2 ? 3 : 7;
  card.nextReviewDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  card.repetitions = (card.repetitions || 1) + 1;

  if (targetBox === 3 && typeof SoundFX !== "undefined") {
    SoundFX.playCorrect();
  } else if (typeof SoundFX !== "undefined") {
    SoundFX.playPop();
  }

  StorageManager.set("srsCards", AppState.srsCards);
  if (typeof CloudSync !== "undefined" && CloudSync.config.autoSync) {
    CloudSync.pushProgress().catch(() => {});
  }

  renderSrsTab();
}

// =========================================================================
// MODO: QUIZ RELÁMPAGO DE ERRORES (ACTIVE RECALL CRONOMETRADO)
// =========================================================================
function startQuizRelampago() {
  const cards = AppState.srsCards || [];
  if (cards.length === 0) {
    showCustomModal({
      title: "Baraja Vacía",
      message: "No tienes preguntas en tu baraja de repaso todavía. Agrega casos resolviendo simulacros o prácticas.",
      icon: "🎴"
    });
    return;
  }

  // Barajar hasta 10 preguntas
  const shuffled = [...cards].sort(() => Math.random() - 0.5).slice(0, 10);

  AppState.quizRelampago = {
    isActive: true,
    questions: shuffled,
    currentIndex: 0,
    score: 0,
    promotedCount: 0,
    timer: null,
    timeLeft: 45
  };

  const container = document.getElementById("srsListContainer");
  const quizBanner = document.getElementById("quizRelampagoBanner");
  const leitnerFilters = document.getElementById("leitnerFilters");
  const quizArea = document.getElementById("quizRelampagoArea");

  if (container) container.style.display = "none";
  if (quizBanner) quizBanner.style.display = "none";
  if (leitnerFilters) leitnerFilters.style.display = "none";
  if (quizArea) quizArea.style.display = "flex";

  renderQuizRelampagoQuestion();
}

function renderQuizRelampagoQuestion() {
  const qArea = document.getElementById("quizRelampagoArea");
  if (!qArea) return;

  const state = AppState.quizRelampago;
  if (!state || !state.isActive) return;

  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }

  if (state.currentIndex >= state.questions.length) {
    finishQuizRelampago();
    return;
  }

  const currentCard = state.questions[state.currentIndex];
  const q = currentCard.question;
  state.timeLeft = 45;

  qArea.innerHTML = `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: var(--shadow-md);">
      
      <!-- Encabezado Quiz Relámpago -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 18px;">⚡</span>
          <div>
            <div style="font-size: 13px; font-weight: 800; color: #f8fafc;">
              Quiz Relámpago (${state.currentIndex + 1}/${state.questions.length})
            </div>
            <div style="font-size: 10px; color: #94a3b8;">
              Aciertos: <strong style="color: #34d399;">${state.score}</strong>
            </div>
          </div>
        </div>

        <button id="btnExitQuizRelampago" style="background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); color: #fca5a5; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px; cursor: pointer;">
          ✕ Salir
        </button>
      </div>

      <!-- Barra de tiempo de 45 segundos -->
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #f59e0b;">
          <span>⏱️ Tiempo Relámpago:</span>
          <span id="quizTimerText">45s</span>
        </div>
        <div class="quiz-timer-track">
          <div id="quizTimerBar" class="quiz-timer-fill" style="width: 100%;"></div>
        </div>
      </div>

      <!-- Caso Situacional -->
      <div style="font-size: 11px; font-weight: 800; color: #38bdf8; text-transform: uppercase;">
        ${q.ejeNombre || q.tipo || "Juicio Situacional"} • ${q.tema || "DIAN"}
      </div>

      <div style="font-size: 12px; color: #f8fafc; font-weight: 600; line-height: 1.5; background: rgba(11, 17, 32, 0.6); padding: 10px 12px; border-radius: 8px; border-left: 3px solid var(--accent-gold);">
        ${q.caso}
      </div>

      <!-- Opciones Interactivas -->
      <div id="quizOptionsContainer" style="display: flex; flex-direction: column; gap: 8px; margin-top: 4px;">
        ${(q.opciones || []).map((opt) => `
          <button class="quiz-option-btn" data-opt-id="${opt.id}">
            <strong style="color: #38bdf8; font-size: 13px;">${opt.id})</strong>
            <span>${opt.texto}</span>
          </button>
        `).join("")}
      </div>

      <!-- Recuadro de retroalimentación inmediata -->
      <div id="quizFeedbackBox" style="display: none; flex-direction: column; gap: 8px; border-radius: 8px; padding: 10px 12px;"></div>

      <button id="btnNextQuizQuestion" class="btn-primary" style="display: none; padding: 10px; font-size: 12px; font-weight: 800; margin-top: 4px;">
        Siguiente Pregunta ➔
      </button>
    </div>
  `;

  // Salir del Quiz
  document.getElementById("btnExitQuizRelampago").addEventListener("click", () => {
    showCustomModal({
      title: "¿Salir del Quiz Relámpago?",
      message: "Tu progreso actual quedará guardado para las preguntas que ya respondiste.",
      icon: "⚡",
      isConfirm: true,
      onOk: () => {
        exitQuizRelampago();
      }
    });
  });

  // Opciones de respuesta
  const optBtns = qArea.querySelectorAll(".quiz-option-btn");
  optBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const optId = btn.getAttribute("data-opt-id");
      handleQuizRelampagoAnswer(optId, btn);
    });
  });

  // Botón Siguiente
  const btnNext = document.getElementById("btnNextQuizQuestion");
  btnNext.addEventListener("click", () => {
    state.currentIndex++;
    renderQuizRelampagoQuestion();
  });

  // Iniciar temporizador
  const timerText = document.getElementById("quizTimerText");
  const timerBar = document.getElementById("quizTimerBar");

  state.timer = setInterval(() => {
    state.timeLeft--;
    if (timerText) timerText.textContent = `${state.timeLeft}s`;
    if (timerBar) timerBar.style.width = `${(state.timeLeft / 45) * 100}%`;

    if (state.timeLeft <= 5 && typeof SoundFX !== "undefined") {
      SoundFX.playTick();
    }

    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      state.timer = null;
      if (typeof SoundFX !== "undefined") SoundFX.playTimeout();
      handleQuizRelampagoAnswer(null, null); // Tiempo agotado
    }
  }, 1000);
}

function handleQuizRelampagoAnswer(selectedOptId, clickedBtn) {
  const state = AppState.quizRelampago;
  if (!state || !state.isActive) return;

  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }

  const currentCard = state.questions[state.currentIndex];
  const q = currentCard.question;
  const isCorrect = selectedOptId === q.respuestaCorrecta;

  // Deshabilitar todas las opciones
  const qArea = document.getElementById("quizRelampagoArea");
  const optBtns = qArea.querySelectorAll(".quiz-option-btn");
  optBtns.forEach((btn) => {
    btn.disabled = true;
    const id = btn.getAttribute("data-opt-id");
    if (id === q.respuestaCorrecta) {
      btn.classList.add("correct");
    } else if (id === selectedOptId && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  const feedbackBox = document.getElementById("quizFeedbackBox");
  const btnNext = document.getElementById("btnNextQuizQuestion");

  if (isCorrect) {
    state.score++;
    if (typeof SoundFX !== "undefined") SoundFX.playCorrect();

    // Promover en Leitner si no está al máximo
    const prevBox = currentCard.leitnerBox || 1;
    const newBox = Math.min(3, prevBox + 1);
    currentCard.leitnerBox = newBox;
    currentCard.difficulty = newBox === 3 ? "easy" : newBox === 2 ? "good" : "hard";
    const days = newBox === 3 ? 7 : newBox === 2 ? 3 : 1;
    currentCard.nextReviewDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    state.promotedCount++;

    feedbackBox.style.display = "flex";
    feedbackBox.style.background = "rgba(16, 185, 129, 0.15)";
    feedbackBox.style.border = "1px solid rgba(16, 185, 129, 0.4)";
    feedbackBox.innerHTML = `
      <div style="font-size: 13px; font-weight: 800; color: #34d399; display: flex; align-items: center; gap: 6px;">
        <span>✓ ¡Excelente! Respuesta Correcta</span>
        <span style="font-size: 10px; background: #10b981; color: #0b1120; padding: 2px 6px; border-radius: 4px; font-weight: 800;">
          Ascendida a Caja ${newBox} 🚀
        </span>
      </div>
      <div style="font-size: 11px; color: #cbd5e1; line-height: 1.4;">
        ${q.norma || "Fundamento validado exitosamente."}
      </div>
    `;
  } else {
    if (typeof SoundFX !== "undefined") SoundFX.playIncorrect();

    // Desciende a Caja 1 para repaso diario
    currentCard.leitnerBox = 1;
    currentCard.difficulty = "hard";
    currentCard.nextReviewDate = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

    feedbackBox.style.display = "flex";
    feedbackBox.style.background = "rgba(239, 68, 68, 0.15)";
    feedbackBox.style.border = "1px solid rgba(239, 68, 68, 0.4)";
    feedbackBox.innerHTML = `
      <div style="font-size: 13px; font-weight: 800; color: #f87171;">
        ${selectedOptId ? "❌ Opción Errónea" : "⏳ ¡Tiempo Agotado!"} • Clave Oficial: ${q.respuestaCorrecta}
      </div>
      <div style="font-size: 11px; color: #cbd5e1; line-height: 1.4;">
        <strong style="color: #fca5a5;">Criterio Normativo:</strong> ${q.norma || "Revisa la norma para afianzar el concepto."}
      </div>
      <div style="font-size: 10px; color: #fde68a; font-weight: 700;">
        📌 Esta tarjeta se fijó en Caja 1 (Repaso Diario).
      </div>
    `;
  }

  // Guardar cambios en la tarjeta dentro de AppState.srsCards
  const existingMasterIdx = AppState.srsCards.findIndex((c) => c.question && c.question.id === q.id);
  if (existingMasterIdx >= 0) {
    AppState.srsCards[existingMasterIdx].leitnerBox = currentCard.leitnerBox;
    AppState.srsCards[existingMasterIdx].difficulty = currentCard.difficulty;
    AppState.srsCards[existingMasterIdx].nextReviewDate = currentCard.nextReviewDate;
  }
  StorageManager.set("srsCards", AppState.srsCards);

  btnNext.style.display = "block";
}

function finishQuizRelampago() {
  const qArea = document.getElementById("quizRelampagoArea");
  if (!qArea) return;

  const state = AppState.quizRelampago;
  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);

  if (pct >= 70 && typeof SoundFX !== "undefined") {
    SoundFX.playFanfare();
  } else if (typeof SoundFX !== "undefined") {
    SoundFX.playPop();
  }

  qArea.innerHTML = `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; box-shadow: var(--shadow-md);">
      <div style="font-size: 48px;">${pct >= 70 ? "🏆" : "💪"}</div>
      
      <div>
        <h3 style="font-size: 16px; font-weight: 800; color: #f8fafc; margin: 0;">
          ${pct >= 70 ? "¡Excelente Dominio Relámpago!" : "¡Buen Entrenamiento de Refuerzo!"}
        </h3>
        <p style="font-size: 12px; color: #94a3b8; margin: 4px 0 0 0;">
          Has completado el repaso activo de tus preguntas guardadas.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; margin: 6px 0;">
        <div style="background: rgba(15, 23, 42, 0.6); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-size: 22px; font-weight: 800; color: #38bdf8;">${state.score} / ${total}</div>
          <div style="font-size: 11px; color: #94a3b8;">Aciertos (${pct}%)</div>
        </div>
        <div style="background: rgba(15, 23, 42, 0.6); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-size: 22px; font-weight: 800; color: #34d399;">+${state.promotedCount}</div>
          <div style="font-size: 11px; color: #94a3b8;">Ascendidas en Leitner</div>
        </div>
      </div>

      <div style="display: flex; gap: 8px; width: 100%;">
        <button id="btnRetryQuizRelampago" class="btn-primary" style="flex: 1; padding: 10px; font-size: 11px; font-weight: 800;">
          🔄 Repetir Quiz
        </button>
        <button id="btnBackToFlashcards" class="btn-secondary" style="flex: 1; padding: 10px; font-size: 11px; font-weight: 800;">
          🎴 Ver Flashcards 3D
        </button>
      </div>
    </div>
  `;

  document.getElementById("btnRetryQuizRelampago").addEventListener("click", () => {
    startQuizRelampago();
  });

  document.getElementById("btnBackToFlashcards").addEventListener("click", () => {
    exitQuizRelampago();
  });
}

function exitQuizRelampago() {
  const state = AppState.quizRelampago;
  if (state && state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  state.isActive = false;

  const quizArea = document.getElementById("quizRelampagoArea");
  if (quizArea) quizArea.style.display = "none";

  renderSrsTab();
}

// =========================================================================
// 4. DASHBOARD REDISEÑADO: MÉTRICAS Y CALCULADORA OFICIAL DIAN 2676
// =========================================================================
function setupDashboardCalculator() {
  const sFunc = document.getElementById("sliderFunc");
  const sComp = document.getElementById("sliderComp");
  const sInteg = document.getElementById("sliderInteg");
  const sAntec = document.getElementById("sliderAntec");

  const vFunc = document.getElementById("calcFuncVal");
  const vComp = document.getElementById("calcCompVal");
  const vInteg = document.getElementById("calcIntegVal");
  const vAntec = document.getElementById("calcAntecVal");

  const totalScoreEl = document.getElementById("calcTotalScore");
  const badgeEl = document.getElementById("calcPassBadge");
  const statusTextEl = document.getElementById("calcStatusText");

  const updateCalculations = () => {
    const f = parseFloat(sFunc.value);
    const c = parseFloat(sComp.value);
    const i = parseFloat(sInteg.value);
    const a = parseFloat(sAntec.value);

    vFunc.textContent = `${f} pts`;
    vComp.textContent = `${c} pts`;
    vInteg.textContent = `${i} pts`;
    vAntec.textContent = `${a} pts`;

    // Ponderación oficial de la Convocatoria DIAN 2676
    // Funcionales: 65% (Eliminatorio, mínimo 70.00)
    // Comportamentales: 15%
    // Integridad: 10%
    // Antecedentes: 10%
    const weightedTotal = (f * 0.65) + (c * 0.15) + (i * 0.10) + (a * 0.10);
    totalScoreEl.textContent = weightedTotal.toFixed(2);

    if (f < 70.00) {
      badgeEl.className = "pass-badge failed";
      badgeEl.textContent = "❌ ELIMINADO EN FUNCIONALES (< 70)";
      statusTextEl.textContent = "No aprueba la prueba eliminatoria de la DIAN";
      statusTextEl.style.color = "var(--accent-red)";
    } else {
      badgeEl.className = "pass-badge approved";
      badgeEl.textContent = "✅ SUPERA UMBRAL (≥ 70.00)";
      statusTextEl.textContent = "Elegible para lista definitiva de mérito";
      statusTextEl.style.color = "var(--accent-green)";
    }
  };

  [sFunc, sComp, sInteg, sAntec].forEach((slider) => {
    slider.addEventListener("input", updateCalculations);
  });

  updateCalculations();

  document.getElementById("btnResetStats").addEventListener("click", () => {
    showCustomModal({
      title: "Reiniciar Historial",
      message: "¿Deseas poner en cero tu registro de preguntas y precisión?",
      icon: "⚠️",
      isConfirm: true,
      onOk: () => {
        AppState.stats = {
          totalAnswered: 0,
          correctCount: 0,
          functionalTotal: 0,
          functionalCorrect: 0,
          behavioralTotal: 0,
          behavioralCorrect: 0,
          integrityTotal: 0,
          integrityCorrect: 0,
          streak: 1,
          lastStudyDate: new Date().toISOString().slice(0, 10)
        };
        StorageManager.set("stats", AppState.stats);
        renderStatsTab();
      }
    });
  });
}

function setupAccountModal() {
  const modal = document.getElementById("accountModal");
  const btnOpen = document.getElementById("btnOpenAccountModal");
  const btnCloseX = document.getElementById("btnCloseAccountModalX");
  const btnClose = document.getElementById("btnCloseAccountModal");
  const inputUser = document.getElementById("inputAccountUserId");
  const btnSave = document.getElementById("btnSaveAccountUser");
  const inputServer = document.getElementById("inputAccountServerUrl");
  const btnManualSync = document.getElementById("btnManualSyncNow");

  if (!modal || typeof CloudSync === "undefined") return;

  CloudSync.init().then(() => {
    if (inputUser) inputUser.value = CloudSync.config.userId || "jcarlos";
    if (inputServer) inputServer.value = CloudSync.config.serverUrl || "https://simo.liverohoa.com";
    CloudSync.updateStatusBadge();
  });

  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
      if (inputUser) inputUser.value = CloudSync.config.userId || "jcarlos";
      if (inputServer) inputServer.value = CloudSync.config.serverUrl || "https://simo.liverohoa.com";
      CloudSync.updateStatusBadge();
      openModal(modal);
    });
  }

  const handleSave = async () => {
    const rawUser = inputUser ? inputUser.value.trim() : "jcarlos";
    const serverUrl = inputServer ? inputServer.value.trim() : "https://simo.liverohoa.com";
    if (!rawUser) {
      showCustomModal({
        title: "ID Requerido",
        message: "Por favor escribe tu nombre o ID de aspirante (ej: jcarlos).",
        icon: "⚠️"
      });
      return;
    }

    if (serverUrl) {
      CloudSync.config.serverUrl = serverUrl;
    }

    btnSave.textContent = "⏳ Conectando...";
    btnSave.disabled = true;

    try {
      await CloudSync.login(rawUser);
      closeModal(modal);
      btnSave.textContent = "💾 Guardar e Iniciar Sesión";
      btnSave.disabled = false;
      showCustomModal({
        title: "¡Sesión Activa!",
        message: `Has iniciado sesión como "${rawUser}". Tu progreso, racha y preguntas se sincronizan solos en segundo plano.`,
        icon: "👤"
      });
    } catch (e) {
      btnSave.textContent = "💾 Guardar e Iniciar Sesión";
      btnSave.disabled = false;
      closeModal(modal);
    }
  };

  if (btnSave) btnSave.addEventListener("click", handleSave);
  if (btnCloseX) btnCloseX.addEventListener("click", () => closeModal(modal));
  if (btnClose) btnClose.addEventListener("click", () => closeModal(modal));

  if (btnManualSync) {
    btnManualSync.addEventListener("click", async () => {
      btnManualSync.textContent = "⏳ Sincronizando...";
      btnManualSync.disabled = true;
      try {
        await CloudSync.syncAll();
        btnManualSync.textContent = "✅ ¡Sincronizado!";
        setTimeout(() => {
          btnManualSync.textContent = "🔄 Forzar Sincronización Ahora";
          btnManualSync.disabled = false;
        }, 1600);
      } catch (err) {
        btnManualSync.textContent = "❌ Error";
        setTimeout(() => {
          btnManualSync.textContent = "🔄 Forzar Sincronización Ahora";
          btnManualSync.disabled = false;
        }, 1600);
      }
    });
  }
}

function setupMobileNotificationPrompt() {
  const modal = document.getElementById("mobileNotificationModal");
  const btnEnable = document.getElementById("btnEnableMobileNotifications");
  const btnDismiss = document.getElementById("btnDismissMobileNotifications");

  if (!modal || !isMobileDevice()) return;
  if (typeof Notification === "undefined") return;

  if (Notification.permission !== "default") return;

  // Invitar amistosamente tras breve pausa para no abrumar al aspirante
  setTimeout(() => {
    if (Notification.permission === "default" && !sessionStorage.getItem("simo_notif_prompt_dismissed")) {
      openModal(modal);
    }
  }, 1400);

  if (btnEnable) {
    btnEnable.addEventListener("click", async () => {
      closeModal(modal);
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          await StorageManager.set("backgroundTipsEnabled", true);
          await StorageManager.set("backgroundTipsFormat", "notification");
          const selectBgFormat = document.getElementById("selectBgFormat");
          if (selectBgFormat) selectBgFormat.value = "notification";

          await sendDeviceNotification("🚀 SIMO Prep DIAN 2676", {
            body: "¡Notificaciones de estudio activadas! Recibirás preguntas y claves de examen en tu celular.",
            icon: "icons/icon192.png"
          });

          setupMobileBackgroundScheduler();

          showCustomModal({
            title: "¡Notificaciones Activas!",
            message: "Se envió un aviso de prueba. Recibirás casos situacionales y tips periódicos directamente en tu barra de notificaciones.",
            icon: "🔔"
          });
        }
      } catch (e) {
        console.warn("Error solicitando permisos de notificación:", e);
      }
    });
  }

  if (btnDismiss) {
    btnDismiss.addEventListener("click", () => {
      sessionStorage.setItem("simo_notif_prompt_dismissed", "true");
      closeModal(modal);
    });
  }

  // Si instala la PWA en el celular
  window.addEventListener("appinstalled", () => {
    if (Notification.permission === "default") {
      openModal(modal);
    }
  });
}

function setupInstallModal() {
  const modal = document.getElementById("installModal");
  const btnOpen = document.getElementById("btnOpenInstallModal");
  const btnCloseX = document.getElementById("btnCloseInstallModalX");
  const btnClose = document.getElementById("btnCloseInstallModal");

  if (!modal || !btnOpen) return;

  btnOpen.addEventListener("click", () => openModal(modal));
  if (btnCloseX) btnCloseX.addEventListener("click", () => closeModal(modal));
  if (btnClose) btnClose.addEventListener("click", () => closeModal(modal));
}

function renderStatsTab() {
  const stats = AppState.stats;
  const total = stats.totalAnswered;
  const correct = stats.correctCount;
  const acc = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Actualizar Score Circle y Cockpit
  const scoreCircle = document.getElementById("dashScoreCircle");
  if (scoreCircle) scoreCircle.style.setProperty("--score-pct", acc);

  document.getElementById("dashAccuracyVal").textContent = `${acc}%`;
  document.getElementById("statTotalAnswered").textContent = total;
  document.getElementById("statCorrect").textContent = correct;
  document.getElementById("statPendingSRS").textContent = AppState.srsCards.length;

  const levelTitle = document.getElementById("dashLevelTitle");
  const subStatus = document.getElementById("dashSubStatus");

  if (acc >= 75 && total >= 10) {
    levelTitle.textContent = "Dominio Alto (Supera Umbral DIAN)";
    levelTitle.style.color = "var(--accent-green)";
    subStatus.textContent = `${total} casos resueltos con excelente precisión`;
  } else if (acc >= 60 && total >= 5) {
    levelTitle.textContent = "Dominio Medio (En Progreso)";
    levelTitle.style.color = "var(--accent-gold)";
    subStatus.textContent = "Cerca del umbral eliminatorio de 70.00 pts";
  } else {
    levelTitle.textContent = "Fase de Diagnóstico Inicial";
    levelTitle.style.color = "var(--text-primary)";
    subStatus.textContent = "Resuelve más casos para consolidar tu diagnóstico";
  }

  // Barras de progreso por componente
  const funcAcc = stats.functionalTotal > 0 ? Math.round((stats.functionalCorrect / stats.functionalTotal) * 100) : 0;
  const compAcc = stats.behavioralTotal > 0 ? Math.round((stats.behavioralCorrect / stats.behavioralTotal) * 100) : 0;
  const integAcc = stats.integrityTotal > 0 ? Math.round((stats.integrityCorrect / stats.integrityTotal) * 100) : 0;

  document.getElementById("statFuncPerc").textContent = `${funcAcc}% (Mínimo: 70%)`;
  const funcBar = document.getElementById("statFuncBar");
  funcBar.style.width = `${funcAcc}%`;
  funcBar.style.backgroundColor = funcAcc >= 70 ? "var(--accent-green)" : "var(--accent-red)";

  document.getElementById("statCompPerc").textContent = `${compAcc}%`;
  document.getElementById("statCompBar").style.width = `${compAcc}%`;

  document.getElementById("statIntegPerc").textContent = `${integAcc}%`;
  document.getElementById("statIntegBar").style.width = `${integAcc}%`;

  updateDashboardCalculator();
}

function setupDashboardCalculator() {
  const sliderFunc = document.getElementById("sliderFunc");
  const sliderComp = document.getElementById("sliderComp");
  const sliderInteg = document.getElementById("sliderInteg");
  const sliderAntec = document.getElementById("sliderAntec");

  if (!sliderFunc) return;

  [sliderFunc, sliderComp, sliderInteg, sliderAntec].forEach((slider) => {
    if (slider) slider.addEventListener("input", updateDashboardCalculator);
  });

  updateDashboardCalculator();
}

function updateDashboardCalculator() {
  const sliderFunc = document.getElementById("sliderFunc");
  const sliderComp = document.getElementById("sliderComp");
  const sliderInteg = document.getElementById("sliderInteg");
  const sliderAntec = document.getElementById("sliderAntec");

  if (!sliderFunc) return;

  const valFunc = parseFloat(sliderFunc.value) || 0;
  const valComp = parseFloat(sliderComp ? sliderComp.value : 80) || 0;
  const valInteg = parseFloat(sliderInteg ? sliderInteg.value : 85) || 0;
  const valAntec = parseFloat(sliderAntec ? sliderAntec.value : 70) || 0;

  const funcEl = document.getElementById("calcFuncVal");
  const compEl = document.getElementById("calcCompVal");
  const integEl = document.getElementById("calcIntegVal");
  const antecEl = document.getElementById("calcAntecVal");

  if (funcEl) funcEl.textContent = `${valFunc} pts`;
  if (compEl) compEl.textContent = `${valComp} pts`;
  if (integEl) integEl.textContent = `${valInteg} pts`;
  if (antecEl) antecEl.textContent = `${valAntec} pts`;

  // Ponderación oficial DIAN 2676:
  // Funcionales: 65% (Mínimo eliminatorio 70.00 pts)
  // Comportamentales: 15% (Clasificatorio)
  // Integridad: 10% (Clasificatorio)
  // Antecedentes: 10% (Clasificatorio)
  const totalPonderado = (valFunc * 0.65) + (valComp * 0.15) + (valInteg * 0.10) + (valAntec * 0.10);
  const totalScoreEl = document.getElementById("calcTotalScore");
  if (totalScoreEl) {
    totalScoreEl.textContent = totalPonderado.toFixed(2);
  }

  const badgeEl = document.getElementById("calcPassBadge");
  const statusEl = document.getElementById("calcStatusText");
  const apruebaFuncional = valFunc >= 70;

  if (badgeEl) {
    if (apruebaFuncional) {
      badgeEl.className = "pass-badge passed";
      badgeEl.textContent = "✅ Aprobado DIAN";
      badgeEl.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
      badgeEl.style.color = "#34d399";
      badgeEl.style.border = "1px solid #10b981";
    } else {
      badgeEl.className = "pass-badge failed";
      badgeEl.textContent = "❌ Eliminado (<70 en Funcional)";
      badgeEl.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
      badgeEl.style.color = "#f87171";
      badgeEl.style.border = "1px solid #ef4444";
    }
  }

  if (statusEl) {
    if (apruebaFuncional) {
      statusEl.textContent = `Supera el umbral eliminatorio con ${totalPonderado.toFixed(2)} pts totales.`;
      statusEl.style.color = "#34d399";
    } else {
      statusEl.textContent = `Atención: La prueba funcional exige mínimo 70.00 pts (tienes ${valFunc}).`;
      statusEl.style.color = "#f87171";
    }
  }
}

// Lógica de "Mi Cargo"
function setupJobConfig() {
  const modal = document.getElementById("jobModal");
  const btnOpen = document.getElementById("btnOpenJobModal");
  const btnCloseX = document.getElementById("btnCloseJobModalX");
  const btnCancel = document.getElementById("btnCancelJobModal");
  const form = document.getElementById("jobForm");

  const openJobModal = () => {
    const job = AppState.activeJob;
    document.getElementById("inputJobTitle").value = job.title || "";
    document.getElementById("inputJobOpec").value = job.opec || "";
    document.getElementById("selectJobLevel").value = job.level || "Profesional";
    document.getElementById("inputJobEntity").value = job.entity || "";
    document.getElementById("inputJobPurpose").value = job.purpose || "";
    document.getElementById("inputJobFunctions").value = (job.functions || []).join("\n");
    openModal(modal);
  };

  const closeJobModal = () => closeModal(modal);

  if (btnOpen) btnOpen.addEventListener("click", openJobModal);
  if (btnCloseX) btnCloseX.addEventListener("click", closeJobModal);
  if (btnCancel) btnCancel.addEventListener("click", closeJobModal);

  // Selector Rápido de Perfiles Oficiales DIAN (Gestor III y Analista IV)
  const btnQuickGestor = document.getElementById("btnQuickProfileGestor");
  const btnQuickAnalista = document.getElementById("btnQuickProfileAnalista");

  const fillFormWithProfile = (profile) => {
    if (!profile) return;
    document.getElementById("inputJobTitle").value = profile.title || "";
    document.getElementById("inputJobOpec").value = profile.opec || "";
    document.getElementById("selectJobLevel").value = profile.level || "Profesional";
    document.getElementById("inputJobEntity").value = profile.entity || "";
    document.getElementById("inputJobPurpose").value = profile.purpose || "";
    document.getElementById("inputJobFunctions").value = (profile.functions || []).join("\n");
  };

  if (btnQuickGestor) {
    btnQuickGestor.addEventListener("click", () => {
      AppState._pendingProfileId = "gestor_iii";
      if (typeof PROFILES_DATA !== "undefined" && PROFILES_DATA.gestor_iii) {
        fillFormWithProfile(PROFILES_DATA.gestor_iii);
      }
    });
  }

  if (btnQuickAnalista) {
    btnQuickAnalista.addEventListener("click", () => {
      AppState._pendingProfileId = "analista_iv";
      if (typeof PROFILES_DATA !== "undefined" && PROFILES_DATA.analista_iv) {
        fillFormWithProfile(PROFILES_DATA.analista_iv);
      }
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const opec = document.getElementById("inputJobOpec").value.trim();
    const title = document.getElementById("inputJobTitle").value.trim();

    let targetProfileId = AppState._pendingProfileId;
    if (!targetProfileId) {
      if (opec.includes("236760") || title.toUpperCase().includes("ANALISTA")) {
        targetProfileId = "analista_iv";
      } else {
        targetProfileId = "gestor_iii";
      }
    }

    applyProfile(targetProfileId, true, true);
    closeModal();
  });
}

function renderJobFocusTab() {
  const job = AppState.activeJob || {};
  document.getElementById("focusCardTitle").textContent = `${job.title || ''} ${job.opec ? `(OPEC ${job.opec})` : ''}`;
  document.getElementById("focusCardEntity").textContent = `${job.entity || 'DIAN'} • Ficha ${job.codeFicha || 'DIAN 2676'}`;
  document.getElementById("focusPurposeText").textContent = job.purpose || 'Propósito del empleo no configurado.';

  const container = document.getElementById("functionsListContainer");
  const countBadge = document.getElementById("functionsCountBadge");
  container.innerHTML = "";

  const funcs = job.functions || [];
  countBadge.textContent = `${funcs.length} funciones`;

  funcs.forEach((fn, idx) => {
    const item = document.createElement("div");
    item.style.backgroundColor = "var(--bg-card)";
    item.style.border = "1px solid var(--border-color)";
    item.style.borderRadius = "8px";
    item.style.padding = "8px 10px";
    item.style.display = "flex";
    item.style.gap = "8px";
    item.style.alignItems = "flex-start";

    item.innerHTML = `
      <span style="background-color: rgba(245, 158, 11, 0.2); color: #f59e0b; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; flex-shrink: 0;">
        ${idx + 1}
      </span>
      <div style="font-size: 11px; color: var(--text-primary); line-height: 1.4;">
        ${fn}
      </div>
    `;
    container.appendChild(item);
  });

  document.getElementById("btnEditJobFromCard").onclick = () => {
    document.getElementById("btnOpenJobModal").click();
  };

  document.getElementById("btnGenerateForJob").onclick = () => {
    const pool = (typeof QUESTION_BANK !== "undefined" && Array.isArray(QUESTION_BANK) && QUESTION_BANK.length > 0)
      ? QUESTION_BANK 
      : (typeof getQuestionsForProfile === "function" ? getQuestionsForProfile(AppState.activeProfileId) : []);
    if (pool.length > 0) {
      const randomQ = pool[Math.floor(Math.random() * pool.length)];
      renderPracticeQuestion(randomQ);
      switchTab("practice");
    }
  };
}

// Simulacro
function setupSimulacroLogic() {
  const btnStart = document.getElementById("btnStartSimulacro");
  btnStart.addEventListener("click", startSimulacro);
}

function startSimulacro() {
  const pool = QUESTION_BANK;
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  AppState.simulacro.questions = shuffled.slice(0, 5);
  AppState.simulacro.currentIndex = 0;
  AppState.simulacro.score = 0;
  AppState.simulacro.functionalScore = 0;
  AppState.simulacro.functionalCount = 0;
  AppState.simulacro.isActive = true;

  document.getElementById("simulacroSetup").style.display = "none";
  document.getElementById("simulacroActiveArea").style.display = "flex";

  renderSimulacroStep();
}

function renderSimulacroStep() {
  const s = AppState.simulacro;
  if (s.currentIndex >= s.questions.length) {
    finishSimulacro();
    return;
  }

  const q = s.questions[s.currentIndex];
  document.getElementById("simulacroProgressText").textContent = `Pregunta ${s.currentIndex + 1} de ${s.questions.length}`;

  s.timeLeft = 120;
  updateSimulacroClockUI();
  clearInterval(s.timer);
  s.timer = setInterval(() => {
    s.timeLeft -= 1;
    updateSimulacroClockUI();
    if (s.timeLeft <= 0) {
      clearInterval(s.timer);
      handleSimulacroTimeout();
    }
  }, 1000);

  const container = document.getElementById("simulacroCardContainer");
  container.innerHTML = `
    <div class="question-card" style="margin-top: 0;">
      <div style="font-size: 10px; color: var(--accent-gold); font-weight: 800; text-transform: uppercase;">
        ${q.tipo}
      </div>
      <div class="case-box">
        <div class="case-heading">Caso Situacional DIAN</div>
        <div class="case-text">${q.caso}</div>
      </div>
      <div class="question-enunciado">${q.enunciado}</div>
      <div id="simOptions" class="options-list"></div>
      <button id="btnSimNext" class="btn-primary" disabled style="margin-top: 6px;">
        Responder y Avanzar ➔
      </button>
    </div>
  `;

  let selectedId = null;
  const simOptionsContainer = document.getElementById("simOptions");
  const btnNext = document.getElementById("btnSimNext");

  q.opciones.forEach((opt) => {
    const item = document.createElement("div");
    item.className = "option-item";
    item.innerHTML = `
      <div class="option-key">${opt.id}</div>
      <div class="option-text">${opt.texto}</div>
    `;

    item.addEventListener("click", () => {
      simOptionsContainer.querySelectorAll(".option-item").forEach((el) => el.classList.remove("selected"));
      item.classList.add("selected");
      selectedId = opt.id;
      btnNext.disabled = false;
    });

    simOptionsContainer.appendChild(item);
  });

  btnNext.addEventListener("click", () => {
    clearInterval(s.timer);
    const isCorrect = selectedId === q.respuestaCorrecta;
    if (isCorrect) s.score += 1;
    else addToSrsQueue(q, "hard");

    if (q.tipo.includes("Funcional")) {
      s.functionalCount += 1;
      if (isCorrect) s.functionalScore += 1;
    }

    s.currentIndex += 1;
    renderSimulacroStep();
  });
}

function handleSimulacroTimeout() {
  const s = AppState.simulacro;
  showCustomModal({
    title: "¡Tiempo Agotado!",
    message: "Se agotaron los 2 minutos (120 segundos) reglamentarios para esta pregunta.",
    icon: "⏱️",
    onOk: () => {
      s.currentIndex += 1;
      renderSimulacroStep();
    }
  });
}

function updateSimulacroClockUI() {
  const clock = document.getElementById("simulacroClock");
  const mins = Math.floor(AppState.simulacro.timeLeft / 60);
  const secs = AppState.simulacro.timeLeft % 60;
  clock.textContent = `⏳ ${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function finishSimulacro() {
  clearInterval(AppState.simulacro.timer);
  const s = AppState.simulacro;
  const total = s.questions.length;
  const scorePercent = Math.round((s.score / total) * 100);

  const funcPercent = s.functionalCount > 0 ? Math.round((s.functionalScore / s.functionalCount) * 100) : scorePercent;
  const passed = funcPercent >= 70;

  document.getElementById("simulacroSetup").style.display = "flex";
  document.getElementById("simulacroActiveArea").style.display = "none";

  showCustomModal({
    title: passed ? "¡Simulacro Aprobado!" : "Simulacro No Aprobado",
    message: `Puntaje global: ${scorePercent}/100.\nDesempeño en Funcionales: ${funcPercent}/100.\n${
      passed 
        ? "¡Excelente! Superaste el puntaje mínimo aprobatorio de la DIAN (70.00 en Competencias Funcionales)." 
        : "Atención: La prueba funcional de la DIAN es ELIMINATORIA y exige mínimo 70.00 puntos. Te recomendamos reforzar los ejes en tu Cuaderno de Errores."
    }`,
    icon: passed ? "🏆" : "⚠️"
  });

  if (typeof CloudSync !== "undefined" && CloudSync.config.autoSync) {
    CloudSync.pushProgress().catch(() => {});
  }
}

// =========================================================================
// 5. CACERÍA DE DISTRACTORES (MÉTODO SOCRÁTICO)
// =========================================================================
function setupDistractorHunt() {
  const btn = document.getElementById("btnDistractorHunt");
  const box = document.getElementById("distractorHuntBox");
  if (!btn || !box) return;

  btn.addEventListener("click", () => {
    const isVisible = box.style.display === "block";
    if (isVisible) {
      box.style.display = "none";
      btn.textContent = "🕵️ Cacería de Distractores: ¿Por qué fallan las otras opciones?";
    } else {
      const q = AppState.currentQuestion;
      if (!q) return;
      const incorrectOpts = q.opciones.filter((o) => o.id !== q.respuestaCorrecta);
      box.innerHTML = `
        <div style="font-weight: 800; color: #f59e0b; margin-bottom: 8px; font-size: 14px;">
          🎯 Clave Socrática para Descartar los Distractores:
        </div>
        ${incorrectOpts.map((o) => `
          <div style="margin-bottom: 8px; padding: 8px 10px; background: rgba(239, 68, 68, 0.12); border-left: 3px solid var(--accent-red); border-radius: 4px;">
            <strong style="color: #fca5a5;">Por qué descartar la Opción ${o.id}:</strong><br>
            <span style="color: #e2e8f0;">${o.explicacion}</span>
          </div>
        `).join("")}
      `;
      box.style.display = "block";
      btn.textContent = "🙈 Ocultar Cacería de Distractores";
    }
  });
}

// =========================================================================
// 6. SPEED DRILL (MICROAPRENDIZAJE RELÁMPAGO V/F CON TEMPORIZADOR)
// =========================================================================
const SpeedDrillState = {
  currentIndex: 0,
  streak: 0,
  timer: null,
  timeLeft: 15,
  isAnswered: false
};

function setupSpeedDrill() {
  const btnTrue = document.getElementById("btnSpeedTrue");
  const btnFalse = document.getElementById("btnSpeedFalse");
  const btnNext = document.getElementById("btnNextSpeedDrill");

  if (!btnTrue || !btnFalse) return;

  btnTrue.addEventListener("click", () => handleSpeedDrillAnswer(true));
  btnFalse.addEventListener("click", () => handleSpeedDrillAnswer(false));
  if (btnNext) btnNext.addEventListener("click", () => nextSpeedDrillStep());
}

function startSpeedDrill() {
  SpeedDrillState.currentIndex = 0;
  SpeedDrillState.streak = 0;
  const streakEl = document.getElementById("speedDrillStreak");
  if (streakEl) streakEl.textContent = "0";
  renderSpeedDrillCard();
}

function renderSpeedDrillCard() {
  if (typeof SPEED_DRILLS === "undefined" || SPEED_DRILLS.length === 0) return;

  const drill = SPEED_DRILLS[SpeedDrillState.currentIndex % SPEED_DRILLS.length];
  SpeedDrillState.isAnswered = false;
  SpeedDrillState.timeLeft = 15;

  document.getElementById("speedDrillTopicBadge").textContent = drill.tema;
  document.getElementById("speedDrillStatement").textContent = drill.afirmacion;
  document.getElementById("speedDrillFeedback").style.display = "none";
  document.getElementById("btnSpeedTrue").disabled = false;
  document.getElementById("btnSpeedFalse").disabled = false;

  const timerEl = document.getElementById("speedDrillTimer");
  timerEl.textContent = `⏳ 15s`;

  clearInterval(SpeedDrillState.timer);
  SpeedDrillState.timer = setInterval(() => {
    SpeedDrillState.timeLeft -= 1;
    timerEl.textContent = `⏳ ${SpeedDrillState.timeLeft}s`;

    if (SpeedDrillState.timeLeft <= 5 && SpeedDrillState.timeLeft > 0) {
      if (typeof SoundFX !== "undefined") SoundFX.playTick();
    }

    if (SpeedDrillState.timeLeft <= 0) {
      clearInterval(SpeedDrillState.timer);
      handleSpeedDrillTimeout();
    }
  }, 1000);
}

function handleSpeedDrillAnswer(userChoice) {
  if (SpeedDrillState.isAnswered) return;
  SpeedDrillState.isAnswered = true;
  clearInterval(SpeedDrillState.timer);

  const drill = SPEED_DRILLS[SpeedDrillState.currentIndex % SPEED_DRILLS.length];
  const isCorrect = userChoice === drill.esVerdadero;

  if (typeof SoundFX !== "undefined") {
    if (isCorrect) SoundFX.playCorrect();
    else SoundFX.playIncorrect();
  }

  document.getElementById("btnSpeedTrue").disabled = true;
  document.getElementById("btnSpeedFalse").disabled = true;

  const fb = document.getElementById("speedDrillFeedback");
  const verdictEl = document.getElementById("speedDrillVerdict");
  const explEl = document.getElementById("speedDrillExplanation");

  if (isCorrect) {
    SpeedDrillState.streak += 1;
    verdictEl.textContent = `✅ ¡ACERTASTE! Es ${drill.esVerdadero ? "VERDADERO" : "FALSO"}`;
    verdictEl.style.color = "var(--accent-green)";
    fb.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
    fb.style.border = "1px solid rgba(16, 185, 129, 0.4)";
  } else {
    SpeedDrillState.streak = 0;
    verdictEl.textContent = `❌ INCORRECTO. La respuesta es ${drill.esVerdadero ? "VERDADERO" : "FALSO"}`;
    verdictEl.style.color = "var(--accent-red)";
    fb.style.backgroundColor = "rgba(239, 68, 68, 0.15)";
    fb.style.border = "1px solid rgba(239, 68, 68, 0.4)";
  }

  document.getElementById("speedDrillStreak").textContent = SpeedDrillState.streak;
  explEl.textContent = drill.explicacion;
  fb.style.display = "flex";
}

function handleSpeedDrillTimeout() {
  if (SpeedDrillState.isAnswered) return;
  SpeedDrillState.isAnswered = true;
  SpeedDrillState.streak = 0;
  document.getElementById("speedDrillStreak").textContent = "0";

  if (typeof SoundFX !== "undefined") SoundFX.playTimeout();

  const drill = SPEED_DRILLS[SpeedDrillState.currentIndex % SPEED_DRILLS.length];
  const fb = document.getElementById("speedDrillFeedback");
  const verdictEl = document.getElementById("speedDrillVerdict");
  const explEl = document.getElementById("speedDrillExplanation");

  verdictEl.textContent = `⏱️ ¡TIEMPO AGOTADO! Era ${drill.esVerdadero ? "VERDADERO" : "FALSO"}`;
  verdictEl.style.color = "var(--accent-gold)";
  fb.style.backgroundColor = "rgba(245, 158, 11, 0.15)";
  fb.style.border = "1px solid rgba(245, 158, 11, 0.4)";
  explEl.textContent = drill.explicacion;
  fb.style.display = "flex";
}

function nextSpeedDrillStep() {
  SpeedDrillState.currentIndex += 1;
  renderSpeedDrillCard();
}

// =========================================================================
// 7. MNEMOTECNIAS Y FÓRMULAS VISUALES
// =========================================================================
function setupMnemotecnias() {}

function renderMnemotecniasTab() {
  const container = document.getElementById("mnemotecniasContainer");
  if (!container || typeof MNEMOTECNIAS === "undefined") return;

  container.innerHTML = "";

  MNEMOTECNIAS.forEach((m) => {
    const card = document.createElement("div");
    card.style.backgroundColor = "var(--bg-surface)";
    card.style.border = "1px solid var(--border-color)";
    card.style.borderRadius = "12px";
    card.style.padding = "16px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.gap = "8px";

    const pointsHtml = m.puntos ? `
      <ul style="font-size: 13px; line-height: 1.55; color: #cbd5e1; margin-left: 18px;">
        ${m.puntos.map((p) => `<li style="margin-bottom: 4px;">${p}</li>`).join("")}
      </ul>
    ` : "";

    card.innerHTML = `
      <div style="font-size: 15px; font-weight: 800; color: var(--accent-gold); display: flex; align-items: center; gap: 6px;">
        <span>💡</span>
        <span>${m.titulo}</span>
      </div>
      <div style="background-color: rgba(11, 17, 32, 0.85); border-left: 4px solid var(--accent-blue); padding: 10px 12px; border-radius: 6px; font-size: 14px; font-weight: 800; color: #38bdf8;">
        ${m.formula}
      </div>
      <div style="font-size: 13px; color: #f1f5f9; line-height: 1.5;">
        ${m.descripcion}
      </div>
      ${pointsHtml}
      <div style="background-color: rgba(245, 158, 11, 0.12); border: 1px dashed rgba(245, 158, 11, 0.4); padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #fef08a; font-weight: 600;">
        🔑 Ancla Visual: ${m.claveVisual}
      </div>
    `;

    container.appendChild(card);
  });
}
