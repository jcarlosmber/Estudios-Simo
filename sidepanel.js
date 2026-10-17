// sidepanel.js - Entrenador SIMO / CNSC Especializado para GESTOR III - DIAN (Convocatoria 2676)
// Incluye Pomodoro 25/5, Filtro por Ejes, Tarjetas SRS con Método Feynman y Dashboard de Métricas con Calculadora

const AppState = {
  currentTab: "practice",
  currentQuestion: null,
  selectedOption: null,
  currentEjeFilter: "todos",
  activeJob: {
    title: "GESTOR III (Código 303 - Grado 03)",
    opec: "242703",
    inscription: "1245650048",
    level: "Profesional",
    entity: "DIAN (Proceso de Selección 2676)",
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

document.addEventListener("DOMContentLoaded", async () => {
  await loadUserData();
  setupNavigation();
  setupTipsModal();
  setupPomodoro();
  setupPracticeLogic();
  setupDistractorHunt();
  setupSpeedDrill();
  setupMnemotecnias();
  setupJobConfig();
  setupSrsLogic();
  setupSimulacroLogic();
  setupDashboardCalculator();
  setupCloudSyncModal();
  await setupSoundToggleUI();

  updateJobProfileUI();
  updateStreakUI();
  loadNextPracticeQuestion();

  // Sincronización Automática Silenciosa con https://simo.liverohoa.com
  if (typeof CloudSync !== "undefined") {
    CloudSync.init().then(async () => {
      const remote = await CloudSync.pullProgress();
      if (remote) {
        updateStreakUI();
        updateDashboardCalculator();
      }
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

  modal.classList.add("active");

  setTimeout(() => launchConfetti(canvas), 100);

  if (btnClose) {
    btnClose.onclick = () => {
      modal.classList.remove("active");
    };
  }
}

function setupTipsModal() {
  const modal = document.getElementById("tipsModal");
  const btnOpen = document.getElementById("btnOpenTipsModal");
  const btnCloseX = document.getElementById("btnCloseTipsModalX");
  const btnClose = document.getElementById("btnCloseTipsModal");
  const listContainer = document.getElementById("tipsListContainer");
  const filterBtns = document.querySelectorAll(".tip-filter-btn");

  const popupFlashModal = document.getElementById("popupTipFlashModal");
  const btnRandomFlash = document.getElementById("btnRandomTipFlash");
  const btnClosePopupX = document.getElementById("btnClosePopupTipX");
  const btnClosePopup = document.getElementById("btnClosePopupTip");
  const btnVerTodasDesdePopup = document.getElementById("btnVerTodasClavesDesdePopup");
  const chkAutoFromModal = document.getElementById("chkAutoTipsFromModal");
  const chkAutoPopup = document.getElementById("chkAutoTipsEnabled");

  // Sincronizar estado inicial de autoTips
  if (chkAutoFromModal) chkAutoFromModal.checked = AppState.autoTips.enabled;
  if (chkAutoPopup) chkAutoPopup.checked = AppState.autoTips.enabled;

  const updateAutoTipsSetting = (enabled) => {
    AppState.autoTips.enabled = enabled;
    if (chkAutoFromModal) chkAutoFromModal.checked = enabled;
    if (chkAutoPopup) chkAutoPopup.checked = enabled;
    StorageManager.set("autoTipsEnabled", enabled);
  };

  if (chkAutoFromModal) {
    chkAutoFromModal.addEventListener("change", (e) => updateAutoTipsSetting(e.target.checked));
  }
  if (chkAutoPopup) {
    chkAutoPopup.addEventListener("change", (e) => updateAutoTipsSetting(e.target.checked));
  }

  // Renderizar las 12 Claves Maestras con tipografía grande (16px y 15px)
  function renderTipsList(filterCategory = "all") {
    if (!listContainer || typeof TIPS_PJS_DATA === "undefined") return;
    listContainer.innerHTML = "";

    const items = filterCategory === "all" 
      ? TIPS_PJS_DATA 
      : TIPS_PJS_DATA.filter(t => t.categoria === filterCategory);

    items.forEach((tip) => {
      const card = document.createElement("div");
      card.style.cssText = `
        background-color: rgba(11, 17, 32, 0.7);
        border-left: 4px solid ${tip.color || "var(--accent-gold)"};
        padding: 16px 18px;
        border-radius: 6px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        gap: 6px;
      `;

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; flex-wrap: wrap;">
          <div style="font-size: 16px; font-weight: 800; color: ${tip.color || "#f59e0b"}; display: flex; align-items: center; gap: 6px;">
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
        <div style="font-size: 15px; color: #e2e8f0; line-height: 1.6; margin-top: 4px;">
          ${tip.contenidoDetallado}
        </div>
        <div style="font-size: 14px; color: #cbd5e1; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 4px; margin-top: 6px; border-left: 2px solid ${tip.color || "#f59e0b"};">
          <strong style="color: #f8fafc;">💡 Regla Rápida:</strong> ${tip.resumenCorto}
        </div>
      `;
      listContainer.appendChild(card);
    });
  }

  renderTipsList("all");

  // Manejo de filtros por categoría
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.style.background = "rgba(255,255,255,0.05)";
        b.style.borderColor = "var(--border-color)";
        b.style.color = "#cbd5e1";
        b.classList.remove("active");
      });
      btn.style.background = "rgba(245, 158, 11, 0.2)";
      btn.style.borderColor = "#f59e0b";
      btn.style.color = "#f59e0b";
      btn.classList.add("active");
      renderTipsList(btn.getAttribute("data-cat"));
    });
  });

  // Apertura y Cierre Modal Principal
  if (btnOpen) btnOpen.addEventListener("click", () => modal.classList.add("active"));
  if (btnCloseX) btnCloseX.addEventListener("click", () => modal.classList.remove("active"));
  if (btnClose) btnClose.addEventListener("click", () => modal.classList.remove("active"));

  // Manejadores Popup Flash Ocasional
  if (btnRandomFlash) {
    btnRandomFlash.addEventListener("click", () => showRandomTipFlash({ forced: true }));
  }
  if (btnClosePopupX) {
    btnClosePopupX.addEventListener("click", () => popupFlashModal.classList.remove("active"));
  }
  if (btnClosePopup) {
    btnClosePopup.addEventListener("click", () => popupFlashModal.classList.remove("active"));
  }
  if (btnVerTodasDesdePopup) {
    btnVerTodasDesdePopup.addEventListener("click", () => {
      popupFlashModal.classList.remove("active");
      modal.classList.add("active");
    });
  }

  // Manejadores Modal Comprensión Lectora Estratégica
  const lecturaModal = document.getElementById("comprensionLectoraModal");
  const btnOpenLectura = document.getElementById("btnOpenLecturaModal");
  const btnCloseLecturaX = document.getElementById("btnCloseLecturaModalX");
  const btnCloseLectura = document.getElementById("btnCloseLecturaModal");
  const btnVerTodasDesdeLectura = document.getElementById("btnVerTodasClavesDesdeLectura");

  if (btnOpenLectura) {
    btnOpenLectura.addEventListener("click", () => {
      if (lecturaModal) lecturaModal.classList.add("active");
    });
  }
  if (btnCloseLecturaX) {
    btnCloseLecturaX.addEventListener("click", () => {
      if (lecturaModal) lecturaModal.classList.remove("active");
    });
  }
  if (btnCloseLectura) {
    btnCloseLectura.addEventListener("click", () => {
      if (lecturaModal) lecturaModal.classList.remove("active");
    });
  }
  if (btnVerTodasDesdeLectura) {
    btnVerTodasDesdeLectura.addEventListener("click", () => {
      if (lecturaModal) lecturaModal.classList.remove("active");
      if (modal) modal.classList.add("active");
      const filterComp = Array.from(filterBtns).find(b => b.getAttribute("data-cat") === "Comprensión Lectora");
      if (filterComp) filterComp.click();
    });
  }

  // Control de microaprendizaje en segundo plano (con Sidepanel cerrado)
  const chkBgTips = document.getElementById("chkBackgroundTips");
  const selectBgInterval = document.getElementById("selectBgInterval");
  const selectBgFormat = document.getElementById("selectBgFormat");
  const selectBgMode = document.getElementById("selectBgMode");
  const chkQuietHours = document.getElementById("chkQuietHours");
  const selectQuietStart = document.getElementById("selectQuietStart");
  const selectQuietEnd = document.getElementById("selectQuietEnd");
  const btnTestBgAlternate = document.getElementById("btnTestBgAlternate");
  const btnTestBgQuestion = document.getElementById("btnTestBgQuestion");
  const btnTestBgTip = document.getElementById("btnTestBackgroundTip");

  StorageManager.get("backgroundTipsEnabled", true).then((enabled) => {
    if (chkBgTips) chkBgTips.checked = enabled;
  });
  StorageManager.get("backgroundTipsInterval", 25).then((interval) => {
    if (selectBgInterval) selectBgInterval.value = String(interval);
  });
  StorageManager.get("backgroundTipsFormat", "popup").then((format) => {
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

  const syncBackgroundSettings = () => {
    const enabled = chkBgTips ? chkBgTips.checked : true;
    const intervalMinutes = selectBgInterval ? parseInt(selectBgInterval.value, 10) : 25;
    const format = selectBgFormat ? selectBgFormat.value : "popup";
    const mode = selectBgMode ? selectBgMode.value : "alternate";
    const quietEnabled = chkQuietHours ? chkQuietHours.checked : true;
    const quietStart = selectQuietStart ? parseInt(selectQuietStart.value, 10) : 20;
    const quietEnd = selectQuietEnd ? parseInt(selectQuietEnd.value, 10) : 8;

    StorageManager.set("backgroundTipsEnabled", enabled);
    StorageManager.set("backgroundTipsInterval", intervalMinutes);
    StorageManager.set("backgroundTipsFormat", format);
    StorageManager.set("backgroundAlternateMode", mode);
    StorageManager.set("quietHoursEnabled", quietEnabled);
    StorageManager.set("quietHoursStart", quietStart);
    StorageManager.set("quietHoursEnd", quietEnd);

    // Si se activó formato notificación y el navegador soporta Web Notifications (PWA en celular)
    if (format === "notification" && typeof Notification !== "undefined" && Notification.permission === "default") {
      Notification.requestPermission();
    }

    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({
        action: "updateBackgroundAlarm",
        enabled: enabled,
        intervalMinutes: intervalMinutes
      });
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

  if (btnTestBgAlternate) {
    btnTestBgAlternate.addEventListener("click", () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "testBackgroundTip" });
      } else {
        showRandomTipFlash({ forced: true });
      }
    });
  }

  if (btnTestBgQuestion) {
    btnTestBgQuestion.addEventListener("click", () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "testBackgroundTip", forcedType: "question" });
      } else {
        openSituationalQuestionFlash();
      }
    });
  }

  if (btnTestBgTip) {
    btnTestBgTip.addEventListener("click", () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: "testBackgroundTip", forcedType: "tip" });
      } else {
        showRandomTipFlash({ forced: true });
      }
    });
  }

  // Timer suave periódico (cada 7 minutos muestra un micro-tip flash de repaso si está en la app)
  setInterval(async () => {
    if (!AppState.autoTips.enabled) return;
    
    // Si estamos en horario de silencio / dormir (por ej 8pm a 8am), no molestar
    const isQuiet = await isClientQuietTime();
    if (isQuiet) return;

    const isAnyModalActive = document.querySelector(".modal-overlay.active");
    if (!isAnyModalActive && AppState.currentTab === "practice") {
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
    const candidates = TIPS_PJS_DATA.filter(t => t.id !== AppState.autoTips.lastTipShownId);
    const pool = candidates.length > 0 ? candidates : TIPS_PJS_DATA;
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
    badgeEl.textContent = `Tip Clave #${tip.numero} • ${tip.categoria}`;
    badgeEl.style.color = tip.color || "#f59e0b";
  }
  if (titleEl) {
    titleEl.textContent = `${tip.numero}. ${tip.titulo}`;
    titleEl.style.color = tip.color || "#f8fafc";
  }
  if (normaEl) normaEl.textContent = `📌 ${tip.normaReferencia}`;
  
  // Banner fotográfico temático curado
  const themeImg = typeof getImageForContext === "function" ? getImageForContext(tip) : null;
  const bannerContainer = document.getElementById("popupTipBannerContainer");
  const bannerImg = document.getElementById("popupTipBannerImg");
  const bannerBadge = document.getElementById("popupTipBannerBadge");
  if (bannerContainer && themeImg) {
    if (bannerImg) {
      bannerImg.src = themeImg.url;
      bannerImg.alt = themeImg.alt;
    }
    if (bannerBadge) {
      bannerBadge.textContent = themeImg.badge;
    }
    bannerContainer.style.display = "flex";
  }

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="font-size: 16px; font-weight: 700; color: #f8fafc; margin-bottom: 8px; line-height: 1.5;">
        ${tip.resumenCorto}
      </div>
      <div style="font-size: 15px; color: #f1f5f9; line-height: 1.65;">
        ${tip.contenidoDetallado}
      </div>
    `;
    bodyEl.style.borderLeftColor = tip.color || "#f59e0b";
  }

  modal.classList.add("active");
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
      if (!isAnyModalActive) {
        showRandomTipFlash({ forced: false });
      }
    }, 450);
  }
}

async function loadUserData() {
  const savedJob = await StorageManager.get("activeJob", null);
  if (savedJob) AppState.activeJob = { ...AppState.activeJob, ...savedJob };

  const savedStats = await StorageManager.get("stats", null);
  if (savedStats) AppState.stats = savedStats;

  const savedSrs = await StorageManager.get("srsCards", []);
  if (savedSrs) AppState.srsCards = savedSrs;

  const savedAutoTips = await StorageManager.get("autoTipsEnabled", true);
  AppState.autoTips.enabled = savedAutoTips;
}

// Modal personalizado (reemplazo estricto de alert y confirm)
function showCustomModal({ title, message, icon = "ℹ️", isConfirm = false, onOk = null, onCancel = null }) {
  const overlay = document.getElementById("generalAlertModal");
  const titleEl = document.getElementById("generalAlertTitle");
  const messageEl = document.getElementById("generalAlertMessage");
  const iconEl = document.getElementById("generalAlertIcon");
  const btnOk = document.getElementById("btnGeneralAlertOk");
  const btnCancel = document.getElementById("btnGeneralAlertCancel");

  titleEl.textContent = title;
  messageEl.textContent = message;
  iconEl.textContent = icon;

  btnCancel.style.display = isConfirm ? "inline-block" : "none";

  const close = () => overlay.classList.remove("active");

  btnOk.onclick = () => {
    close();
    if (onOk) onOk();
  };

  btnCancel.onclick = () => {
    close();
    if (onCancel) onCancel();
  };

  overlay.classList.add("active");
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

// Navegación
function setupNavigation() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.getAttribute("data-tab")));
  });
}

function switchTab(tabName) {
  AppState.currentTab = tabName;
  document.querySelectorAll(".tab-btn").forEach((t) => {
    t.classList.toggle("active", t.getAttribute("data-tab") === tabName);
  });
  document.querySelectorAll(".tab-content").forEach((c) => {
    c.style.display = c.id === `tab-${tabName}` ? "flex" : "none";
  });

  // Mostrar filtro de ejes únicamente en la pestaña de práctica
  const filterBar = document.getElementById("practiceFilterBar");
  if (filterBar) filterBar.style.display = tabName === "practice" ? "flex" : "none";

  if (tabName === "jobFocus") renderJobFocusTab();
  if (tabName === "srs") renderSrsTab();
  if (tabName === "stats") renderStatsTab();
  if (tabName === "speedDrill") startSpeedDrill();
  if (tabName === "mnemotecnias") renderMnemotecniasTab();
}

function updateJobProfileUI() {
  const job = AppState.activeJob;
  document.getElementById("jobTitleDisplay").textContent = `${job.title} ${job.opec ? `(OPEC ${job.opec})` : ""}`;
  document.getElementById("jobLevelBadge").textContent = `GESTOR III • ${job.level.toUpperCase()}`;
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

  filterSelect.addEventListener("change", (e) => {
    AppState.currentEjeFilter = e.target.value;
    loadNextPracticeQuestion();
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
    document.getElementById("feedbackModal").classList.remove("active");
    checkOccasionalTipTrigger("btnCloseModal");
    loadNextPracticeQuestion();
  });

  document.querySelectorAll(".srs-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const difficulty = btn.getAttribute("data-srs");
      handleSrsRating(difficulty);
      document.getElementById("feedbackModal").classList.remove("active");
      checkOccasionalTipTrigger("srsFeedback");
      loadNextPracticeQuestion();
    });
  });
}

function loadNextPracticeQuestion() {
  const filter = AppState.currentEjeFilter;
  let pool = QUESTION_BANK;

  if (filter === "interleaving") {
    // Interleaving: prioriza alternar de eje temático respecto al caso anterior
    if (AppState.currentQuestion && AppState.currentQuestion.ejeId) {
      const otherEjes = QUESTION_BANK.filter((q) => q.ejeId !== AppState.currentQuestion.ejeId);
      if (otherEjes.length > 0) pool = otherEjes;
    }
  } else if (filter && filter !== "todos") {
    const filtered = QUESTION_BANK.filter((q) => {
      if (filter === "misionalidad") return q.ejeId === "misionalidad" || q.ejeId === "estructura_dian";
      if (filter === "mipg") return q.ejeId === "mipg" || q.ejeId === "desempeno";
      return q.ejeId === filter;
    });
    if (filtered.length > 0) pool = filtered;
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  const q = pool[randomIndex];
  renderPracticeQuestion(q);
}

function renderPracticeQuestion(q) {
  AppState.currentQuestion = q;
  AppState.selectedOption = null;

  document.getElementById("qBadgeLevel").textContent = "GESTOR III • DIAN";
  document.getElementById("qBadgeType").textContent = q.tipo;
  document.getElementById("qBadgeTopic").textContent = q.tema;
  document.getElementById("qCaseText").textContent = q.caso;
  document.getElementById("qEnunciado").textContent = q.enunciado;

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

  // Reset de la cacería de distractores
  const huntBox = document.getElementById("distractorHuntBox");
  const huntBtn = document.getElementById("btnDistractorHunt");
  if (huntBox) huntBox.style.display = "none";
  if (huntBtn) huntBtn.textContent = "🕵️ Cacería de Distractores: ¿Por qué fallan las otras opciones?";

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  const btnConfirm = document.getElementById("btnConfirmAnswer");
  btnConfirm.disabled = true;
  btnConfirm.style.display = "block";
  document.getElementById("btnNextQuestion").style.display = "none";

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
  const q = AppState.currentQuestion;
  const isCorrect = selectedId === q.respuestaCorrecta;

  AppState.stats.totalAnswered += 1;
  if (isCorrect) AppState.stats.correctCount += 1;

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

  modal.classList.add("active");
}

function handleSrsRating(difficulty) {
  if (typeof SoundFX !== "undefined") SoundFX.playPop();
  const q = AppState.currentQuestion;
  addToSrsQueue(q, difficulty);
}

function addToSrsQueue(question, difficulty, feynmanNotes = "") {
  const now = new Date();
  let daysToAdd = 1;
  if (difficulty === "good") daysToAdd = 2;
  if (difficulty === "easy") daysToAdd = 5;

  const nextReview = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const existingIdx = AppState.srsCards.findIndex((c) => c.question.id === question.id);
  const existingNotes = existingIdx >= 0 ? AppState.srsCards[existingIdx].feynmanNotes || "" : "";

  const cardData = {
    question: question,
    nextReviewDate: nextReview,
    difficulty: difficulty,
    repetitions: existingIdx >= 0 ? AppState.srsCards[existingIdx].repetitions + 1 : 1,
    feynmanNotes: feynmanNotes || existingNotes
  };

  if (existingIdx >= 0) {
    AppState.srsCards[existingIdx] = cardData;
  } else {
    AppState.srsCards.push(cardData);
  }

  StorageManager.set("srsCards", AppState.srsCards);
}

// =========================================================================
// 3. TARJETAS SRS MEJORADAS (MÉTODO FEYNMAN Y REPASO ACTIVO)
// =========================================================================
function setupSrsLogic() {}

function renderSrsTab() {
  const container = document.getElementById("srsListContainer");
  const badge = document.getElementById("srsPendingBadge");
  const cards = AppState.srsCards || [];

  badge.textContent = `${cards.length} en repaso`;
  container.innerHTML = "";

  if (cards.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 16px; color: var(--text-secondary); display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <div style="font-size: 38px;">🎉</div>
        <div style="font-size: 13px; max-width: 280px; line-height: 1.4;">
          ¡Excelente! Tu cuaderno de errores está al día. Cuando falles una pregunta o la califiques como difícil, aparecerá aquí como Flashcard interactiva.
        </div>
      </div>
    `;
    return;
  }

  cards.forEach((card, idx) => {
    const q = card.question;
    const cardEl = document.createElement("div");
    cardEl.className = "srs-card-container";

    cardEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 10px; background-color: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 6px; border-radius: 4px; font-weight: 800;">
          ${q.ejeNombre || q.tipo}
        </span>
        <span style="font-size: 10px; color: var(--text-secondary);">
          Próximo repaso: <strong>${card.nextReviewDate}</strong>
        </span>
      </div>

      <div style="font-size: 12px; font-weight: 700; color: #f8fafc; line-height: 1.4;">
        ${q.tema}
      </div>

      <div style="font-size: 11px; color: #cbd5e1; background: rgba(11,17,32,0.6); padding: 8px 10px; border-radius: 6px; border-left: 3px solid var(--accent-gold);">
        ${q.caso.slice(0, 160)}...
      </div>

      <!-- Botón para revelar fundamento legal -->
      <button class="btn-secondary btn-reveal-key" style="padding: 6px 10px; font-size: 11px; width: 100%;">
        👁️ Revelar Clave Oficial y Argumento Legal
      </button>

      <div class="revealed-details" style="display: none; flex-direction: column; gap: 6px; background-color: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; padding: 10px;">
        <div style="font-size: 11px; font-weight: 800; color: var(--accent-green);">
          ✓ Respuesta Correcta: Opción ${q.respuestaCorrecta}
        </div>
        <div style="font-size: 11px; color: #e2e8f0; line-height: 1.4;">
          ${q.norma}
        </div>
      </div>

      <!-- Caja Método Feynman (Notas del usuario) -->
      <div class="feynman-box">
        <div style="font-size: 10px; font-weight: 800; color: #f59e0b; text-transform: uppercase;">
          📝 Mis Apuntes Feynman (Explícalo con tus palabras):
        </div>
        <textarea class="feynman-textarea" placeholder="Escribe aquí tu propia síntesis de por qué esta es la regla correcta...">${card.feynmanNotes || ""}</textarea>
        <button class="btn-save-feynman" style="align-self: flex-end; background: none; border: 1px solid rgba(245,158,11,0.4); color: #f59e0b; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; cursor: pointer;">
          Guardar Nota
        </button>
      </div>

      <div style="display: flex; gap: 6px; margin-top: 2px;">
        <button class="btn-primary btn-practice-this" style="padding: 6px 10px; font-size: 11px; flex: 2;">
          Entrenar Caso ➔
        </button>
        <button class="btn-secondary btn-remove-card" style="padding: 6px 8px; font-size: 11px; flex: 1;">
          Eliminar
        </button>
      </div>
    `;

    // Eventos de la tarjeta
    const btnReveal = cardEl.querySelector(".btn-reveal-key");
    const details = cardEl.querySelector(".revealed-details");
    btnReveal.onclick = () => {
      const isVisible = details.style.display === "flex";
      details.style.display = isVisible ? "none" : "flex";
      btnReveal.textContent = isVisible ? "👁️ Revelar Clave Oficial y Argumento Legal" : "🙈 Ocultar Clave";
    };

    const textarea = cardEl.querySelector(".feynman-textarea");
    const btnSaveNote = cardEl.querySelector(".btn-save-feynman");
    btnSaveNote.onclick = () => {
      card.feynmanNotes = textarea.value;
      StorageManager.set("srsCards", AppState.srsCards);
      if (typeof SoundFX !== "undefined") SoundFX.playPop();
      showCustomModal({
        title: "Nota Guardada",
        message: "Tu apunte de la técnica Feynman ha sido guardado exitosamente.",
        icon: "📝"
      });
    };

    cardEl.querySelector(".btn-practice-this").onclick = () => {
      renderPracticeQuestion(q);
      switchTab("practice");
    };

    cardEl.querySelector(".btn-remove-card").onclick = () => {
      AppState.srsCards.splice(idx, 1);
      StorageManager.set("srsCards", AppState.srsCards);
      renderSrsTab();
    };

    container.appendChild(cardEl);
  });
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

function setupCloudSyncModal() {
  const modal = document.getElementById("cloudSyncModal");
  const btnOpen = document.getElementById("btnOpenCloudSync");
  const btnCloseX = document.getElementById("btnCloseCloudSyncX");
  const btnClose = document.getElementById("btnCloseCloudSync");
  const inputUrl = document.getElementById("inputSyncServerUrl");
  const inputUser = document.getElementById("inputSyncUserId");
  const chkAuto = document.getElementById("chkAutoCloudSync");
  const statusEl = document.getElementById("cloudSyncStatus");
  const btnPush = document.getElementById("btnPushCloudSync");
  const btnPull = document.getElementById("btnPullCloudSync");
  const btnPullQ = document.getElementById("btnPullQuestionsServer");

  if (!modal || !btnOpen || typeof CloudSync === "undefined") return;

  CloudSync.init().then(() => {
    if (inputUrl) inputUrl.value = CloudSync.config.serverUrl || "";
    if (inputUser) inputUser.value = CloudSync.config.userId || "aspirante_dian_01";
    if (chkAuto) chkAuto.checked = CloudSync.config.autoSync !== false;
    if (CloudSync.config.lastSyncTimestamp && statusEl) {
      statusEl.innerHTML = `<span>Última sinc: ${new Date(CloudSync.config.lastSyncTimestamp).toLocaleTimeString()}</span>`;
    }
  });

  const saveFormConfig = () => {
    CloudSync.saveConfig({
      serverUrl: inputUrl.value.trim(),
      userId: inputUser.value.trim() || "aspirante_dian_01",
      autoSync: chkAuto.checked
    });
  };

  btnOpen.addEventListener("click", () => {
    modal.classList.add("active");
  });

  if (btnCloseX) btnCloseX.addEventListener("click", () => {
    saveFormConfig();
    modal.classList.remove("active");
  });

  if (btnClose) btnClose.addEventListener("click", () => {
    saveFormConfig();
    modal.classList.remove("active");
    showCustomModal({
      title: "Configuración Guardada",
      message: "Se guardó la configuración de tu servidor.",
      icon: "☁️"
    });
  });

  if (btnPush) {
    btnPush.addEventListener("click", async () => {
      saveFormConfig();
      if (!CloudSync.config.serverUrl) {
        showCustomModal({
          title: "Servidor Requerido",
          message: "Por favor ingresa la URL de tu servidor (ej: http://192.168.1.15:3000)",
          icon: "⚠️"
        });
        return;
      }
      statusEl.innerHTML = `<span style="color: #38bdf8;">⏳ Subiendo progreso a ${CloudSync.config.serverUrl}...</span>`;
      try {
        await CloudSync.pushProgress();
        statusEl.innerHTML = `<span style="color: #34d399;">✅ Sincronizado con éxito (${new Date().toLocaleTimeString()})</span>`;
        showCustomModal({
          title: "¡Progreso Subido!",
          message: "Tus estadísticas, racha, simulacros y tarjetas SRS se guardaron en tu servidor.",
          icon: "☁️"
        });
      } catch (err) {
        statusEl.innerHTML = `<span style="color: #f87171;">❌ Error: ${err.message}</span>`;
        showCustomModal({
          title: "Error al Sincronizar",
          message: `No se pudo conectar al servidor: ${err.message}. Verifica que el servidor esté activo y con CORS permitido.`,
          icon: "⚠️"
        });
      }
    });
  }

  if (btnPull) {
    btnPull.addEventListener("click", async () => {
      saveFormConfig();
      if (!CloudSync.config.serverUrl) {
        showCustomModal({
          title: "Servidor Requerido",
          message: "Por favor ingresa la URL de tu servidor.",
          icon: "⚠️"
        });
        return;
      }
      statusEl.innerHTML = `<span style="color: #38bdf8;">⏳ Descargando progreso...</span>`;
      try {
        await CloudSync.pullProgress();
        updateStreakUI();
        updateDashboardCalculator();
        statusEl.innerHTML = `<span style="color: #34d399;">✅ Progreso descargado con éxito.</span>`;
        showCustomModal({
          title: "¡Progreso Descargado!",
          message: "Se actualizaron tus métricas y racha desde el servidor.",
          icon: "📥"
        });
      } catch (err) {
        statusEl.innerHTML = `<span style="color: #f87171;">❌ Error: ${err.message}</span>`;
        showCustomModal({
          title: "Error al Descargar",
          message: `No se pudo obtener el progreso: ${err.message}`,
          icon: "⚠️"
        });
      }
    });
  }

  if (btnPullQ) {
    btnPullQ.addEventListener("click", async () => {
      saveFormConfig();
      if (!CloudSync.config.serverUrl) return;
      statusEl.innerHTML = `<span style="color: #38bdf8;">⏳ Consultando banco de preguntas...</span>`;
      try {
        const questions = await CloudSync.pullQuestions();
        if (questions && questions.length > 0) {
          statusEl.innerHTML = `<span style="color: #34d399;">✅ ${questions.length} preguntas sincronizadas.</span>`;
          showCustomModal({
            title: "Preguntas Actualizadas",
            message: `Se sincronizaron ${questions.length} preguntas desde tu servidor.`,
            icon: "📚"
          });
        } else {
          statusEl.innerHTML = `<span style="color: #f59e0b;">Sin preguntas nuevas en el servidor.</span>`;
        }
      } catch (err) {
        statusEl.innerHTML = `<span style="color: #f87171;">❌ ${err.message}</span>`;
      }
    });
  }
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
}

// Lógica de "Mi Cargo"
function setupJobConfig() {
  const modal = document.getElementById("jobModal");
  const btnOpen = document.getElementById("btnOpenJobModal");
  const btnCloseX = document.getElementById("btnCloseJobModalX");
  const btnCancel = document.getElementById("btnCancelJobModal");
  const form = document.getElementById("jobForm");

  const openModal = () => {
    const job = AppState.activeJob;
    document.getElementById("inputJobTitle").value = job.title || "";
    document.getElementById("inputJobOpec").value = job.opec || "";
    document.getElementById("selectJobLevel").value = job.level || "Profesional";
    document.getElementById("inputJobEntity").value = job.entity || "";
    document.getElementById("inputJobPurpose").value = job.purpose || "";
    document.getElementById("inputJobFunctions").value = (job.functions || []).join("\n");
    modal.classList.add("active");
  };

  const closeModal = () => modal.classList.remove("active");

  btnOpen.addEventListener("click", openModal);
  btnCloseX.addEventListener("click", closeModal);
  btnCancel.addEventListener("click", closeModal);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rawFunctions = document.getElementById("inputJobFunctions").value;
    const functionsArr = rawFunctions
      .split("\n")
      .map((f) => f.replace(/^\d+[\.\-\)]\s*/, "").trim())
      .filter((f) => f.length > 5);

    AppState.activeJob.title = document.getElementById("inputJobTitle").value.trim();
    AppState.activeJob.opec = document.getElementById("inputJobOpec").value.trim();
    AppState.activeJob.level = document.getElementById("selectJobLevel").value;
    AppState.activeJob.entity = document.getElementById("inputJobEntity").value.trim();
    AppState.activeJob.purpose = document.getElementById("inputJobPurpose").value.trim();
    if (functionsArr.length > 0) AppState.activeJob.functions = functionsArr;

    await StorageManager.set("activeJob", AppState.activeJob);
    updateJobProfileUI();
    closeModal();

    showCustomModal({
      title: "Cargo Actualizado",
      message: `Configurado para ${AppState.activeJob.title}.`,
      icon: "🎯"
    });

    loadNextPracticeQuestion();
  });
}

function renderJobFocusTab() {
  const job = AppState.activeJob;
  document.getElementById("focusCardTitle").textContent = `${job.title} (OPEC ${job.opec})`;
  document.getElementById("focusCardEntity").textContent = `${job.entity} • Ficha FT-TAH-1824`;
  document.getElementById("focusPurposeText").textContent = job.purpose;

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
    const randomQ = QUESTION_BANK[Math.floor(Math.random() * QUESTION_BANK.length)];
    renderPracticeQuestion(randomQ);
    switchTab("practice");
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
