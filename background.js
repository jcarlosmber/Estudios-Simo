// background.js - Service Worker de SIMO Prep (DIAN 2676)
// Alterna automáticamente en segundo plano entre TIPS y PREGUNTAS situacionales inyectadas

importScripts("tips_data.js");
importScripts("questions_gestor_iii.js");
importScripts("questions_gestor_iii_ci.js");
importScripts("questions_analista_iv.js");
importScripts("questions.js");
importScripts("image_catalog.js");

const ALARM_NAME = "periodicBackgroundTip";
const DEFAULT_INTERVAL_MINUTES = 25;

const TIPS_LECTURA_CRITICA = [
  {
    id: "lc_1",
    numero: 1,
    titulo: "Lectura Inversa: Encuentra el Verbo Rector",
    regla: "Saber qué te piden antes de leer el cuerpo del caso ahorra 50% de esfuerzo cognitivo.",
    resumen: "Nunca comiences a leer el caso desde el primer párrafo. Dirige la mirada directamente a la última frase interrogativa en negrilla para fijar el verbo rector (Notificar, Suspender, Decretar, Rechazar, Proyectar)."
  },
  {
    id: "lc_2",
    numero: 2,
    titulo: "Filtro Anti-Ruido: Hechos Probados vs. Emociones",
    regla: "En derecho público solo lo probado en el expediente cuenta. Lo no documentado es distractor.",
    resumen: "Ignora adjetivos y enfados de usuarios. Rastrea únicamente fechas de radicación, actos administrativos notificados y cifras en firme en UVT."
  },
  {
    id: "lc_3",
    numero: 3,
    titulo: "Radar de Cuantificadores Absolutos (Trampas)",
    regla: "Palabras categóricas como 'siempre', 'nunca' o 'de plano' son distractores en un 95%.",
    resumen: "Alerta máxima con 'siempre', 'nunca', 'únicamente', 'inapelable' o 'automáticamente'. La clave oficial prefiere 'previa verificación motivada y término de ley'."
  },
  {
    id: "lc_4",
    numero: 4,
    titulo: "Test del Rol: Cuidado con la Verdad Incompetente",
    regla: "Una opción puede citar una ley perfecta, pero si no es competencia de tu cargo, es usurpación.",
    resumen: "Pregúntate siempre: ¿Está facultado mi cargo (Gestor / Analista) para tomar esta decisión por sí mismo? Si le toca a un Juez, Fiscal o Director, descártala."
  },
  {
    id: "lc_5",
    numero: 5,
    titulo: "Fórmula E-P-C de Comprensión Rápida",
    regla: "Enunciado interrogativo ➔ Premisa fáctica probada ➔ Clave congruente con tu rol.",
    resumen: "Desarticula casos extensos en 3 pasos: Enunciado (E) + Premisa fáctica probada en fechas (P) = Clave congruente sin atajos ilegales (C)."
  },
  {
    id: "lc_6",
    numero: 6,
    titulo: "Técnica E-I-C de Análisis Forense",
    regla: "Escaneo visual preliminar ➔ Interrogante ➔ Conexión al párrafo determinante.",
    resumen: "Escaneo visual de 8 seg de fechas y UVT ➔ Interrogante final ➔ Conexión directa al párrafo determinante sin leer texto irrelevante."
  },
  {
    id: "lc_7",
    numero: 7,
    titulo: "Triángulo V-N-C del Verbo Rector",
    regla: "V (Verbo) ➔ N (Nivel del empleo) ➔ C (Competencia legal).",
    resumen: "Nivel Técnico (Analista) verifica y apoya; Nivel Profesional (Gestor) proyecta, analiza y sustenta; Directivos ordenan, deciden y sancionan."
  },
  {
    id: "lc_8",
    numero: 8,
    titulo: "Técnica del Silencio Administrativo: Positivo vs. Negativo",
    regla: "En derecho tributario el silencio positivo es excepcional; por regla general opera el negativo ficticio.",
    resumen: "En el CPACA rige el silencio negativo ficto (Art. 83) para demandar, salvo norma expresa de silencio positivo como el Art. 734 del E.T. (1 año sin resolver recurso de reconsideración)."
  },
  {
    id: "lc_9",
    numero: 9,
    titulo: "Detector de Falsa Causalidad (Presunción de Buena Fe)",
    regla: "La buena fe se presume (Art. 83 C.P.); el dolo o fraude fiscal exige prueba técnica fehaciente.",
    resumen: "Dos hechos seguidos en el tiempo no configuran dolo automáticamente. Desconfía de sanciones automáticas y exige requerimiento ordinario previo y acervo probatorio."
  },
  {
    id: "lc_10",
    numero: 10,
    titulo: "Jerarquía Normativa: Ley Especial Prima sobre Ley General",
    regla: "El Estatuto Tributario y Régimen de Aduanas prevalecen sobre el CPACA y Código Civil.",
    resumen: "El CPACA es subsidiario ante vacíos. Los términos tributarios especiales (ej. Art. 566-1 E.T. sobre notificación electrónica) desplazan siempre las reglas procesales generales."
  },
  {
    id: "lc_11",
    numero: 11,
    titulo: "Doble Filtro Cautelar: Proporcionalidad e Inembargabilidad",
    regla: "Toda medida cautelar coactiva debe ser proporcional a la deuda y respetar límites legales.",
    resumen: "Los embargos coactivos no pueden superar el límite del Art. 838 E.T. y deben respetar siempre los topes legales inembargables en cuentas de ahorro y nóminas."
  },
  {
    id: "lc_12",
    numero: 12,
    titulo: "Filtro Temporal: Caducidad vs. Prescripción Forense",
    regla: "Caducidad extingue la facultad de sancionar/liquidar; Prescripción extingue la acción de cobro.",
    resumen: "Caducidad o firmeza opera ANTES del acto administrativo definitivo; Prescripción (5 años, Art. 817 E.T.) opera DESPUÉS sobre el título ejecutivo ejecutoriado."
  },
  {
    id: "lc_13",
    numero: 13,
    titulo: "Debido Proceso Probatorio: Prueba Conducente vs. Prueba Ilícita",
    regla: "Es nula de pleno derecho la prueba obtenida con violación del debido proceso (Art. 29 C.P.).",
    resumen: "Pruebas obtenidas mediante hackeos, anónimos sin cadena de custodia o sin auto comisorio previo deben excluirse procesalmente sin importar su veracidad material."
  },
  {
    id: "lc_14",
    numero: 14,
    titulo: "Triangulación Ética MIPG: Conflicto de Interés vs. Diligencia",
    regla: "Ante conflicto de interés, el deber ético no es callar ni resolver: es declarar el impedimento formal.",
    resumen: "Ante vínculos de parentesco o interés particular, el servidor DIAN debe manifestar formalmente su impedimento por escrito (Art. 11 CPACA); la sumisión no exime de falta."
  },
  {
    id: "lc_15",
    numero: 15,
    titulo: "Bloque de Constitucionalidad: Primacía de Tratados de DD.HH.",
    regla: "Los tratados de DD.HH. y garantías constitucionales prevalecen sobre directrices o circulares (Art. 93 C.P.).",
    resumen: "El debido proceso (Art. 29 C.P.) y las garantías fundamentales priman sobre directrices, circulares internas o metas cuantitativas de recaudo de la entidad."
  },
  {
    id: "lc_16",
    numero: 16,
    titulo: "Detector de Causal de Nulidad: Incompetencia y Falsa Motivación",
    regla: "La falta de competencia y la falta o falsa motivación vician de nulidad absoluta el acto administrativo (Art. 137 CPACA).",
    resumen: "La falsa motivación ocurre cuando los motivos alegados se contradicen con las pruebas del expediente. La opción correcta identifica el vicio de legalidad en lugar de ejecutar el acto."
  },
  {
    id: "lc_17",
    numero: 17,
    titulo: "Cómputo Forense del Tiempo: Días Hábiles vs. Calendario y Meses",
    regla: "Los plazos en días fijados en la ley procesal administrativa son hábiles (Art. 68 CPACA y Art. 118 CGP), salvo norma expresa.",
    resumen: "Plazos en días = hábiles (sin sábados, domingos ni festivos). Plazos en meses o años = fecha a fecha en el calendario. Si vence en día inhábil se traslada al siguiente día hábil."
  },
  {
    id: "lc_18",
    numero: 18,
    titulo: "Filtro del Título Ejecutivo: Claro, Expreso y Exigible",
    regla: "No hay cobro coactivo sin título ejecutivo idóneo que conste en documento ejecutoriado (Art. 828 E.T.).",
    resumen: "Para iniciar cobro coactivo la deuda debe ser expresa, clara y exigible. Si un recurso de reconsideración está en trámite, el acto no tiene firmeza y el cobro es nulo por falta de exigibilidad."
  },
  {
    id: "lc_19",
    numero: 19,
    titulo: "Filtro Anti-Contradicción: Coherencia entre Supuesto y Consecuencia",
    regla: "La conclusión procesal debe ser congruente con la gravedad probada de la falta en el supuesto fáctico.",
    resumen: "Alerta con opciones compuestas: una premisa inicial garantista combinada con un desenlace sancionatorio automático o de plano es un distractor clásico de contradicción."
  },
  {
    id: "lc_20",
    numero: 20,
    titulo: "Principio de Favorabilidad: Retroactividad de la Ley Más Benigna",
    regla: "En materia sancionatoria, la ley permisiva o favorable prevalece y aplica de forma retroactiva (Art. 29 C.P. y Art. 640 E.T.).",
    resumen: "Si una reforma posterior reduce una sanción o flexibiliza requisitos antes de la ejecutoria formal del acto, la DIAN debe aplicar retroactivamente la norma favorable al investigado."
  },
  {
    id: "lc_21",
    numero: 21,
    titulo: "Matriz de Congruencia Fáctica: Limítate Estrictamente al Expediente",
    regla: "La liquidación oficial o resolución sancionatoria debe limitarse a los hechos debatidos en el requerimiento previo (Art. 711 E.T.).",
    resumen: "La liquidación oficial de revisión no puede incluir impuestos, periodos o rubros no contemplados en el requerimiento especial previo; violar este principio genera nulidad por incongruencia."
  },
  {
    id: "lc_22",
    numero: 22,
    titulo: "Revocatoria Directa: Límite del Consentimiento Previo del Particular",
    regla: "Los actos particulares y favorables no se revocan sin consentimiento expreso y escrito (Art. 97 CPACA).",
    resumen: "La DIAN no puede revocar de plano actos que reconocieron derechos o devoluciones a particulares; requiere consentimiento escrito previo o demandar en acción de lesividad."
  },
  {
    id: "lc_23",
    numero: 23,
    titulo: "Filtro Anti-Formulismo: Principio de Eficacia vs. Exceso Ritual",
    regla: "El derecho sustancial prevalece sobre las formas procesales intrascendentes (Art. 228 C.P. y Art. 3 CPACA).",
    resumen: "Frente a omisiones formales menores (falta de poder consultable en RUT o foliatura), la entidad debe requerir subsanación en término legal y jamás rechazar de plano."
  },
  {
    id: "lc_24",
    numero: 24,
    titulo: "Efecto Vinculante de Doctrinas y Respuestas a Consultas DIAN",
    regla: "Los conceptos oficiales vigentes de la DIAN obligan a sus funcionarios y protegen al administrado (Ley 2010 de 2019).",
    resumen: "El funcionario fiscalizador no puede sancionar por inexactitud a quien liquidó amparado en un concepto oficial vigente de Gestión Jurídica; rige la confianza legítima."
  },
  {
    id: "lc_25",
    numero: 25,
    titulo: "Detector de Desviación de Poder: Fin Público vs. Interés Viciado",
    regla: "Las facultades de fiscalización deben ejercerse exclusivamente para fines de interés público (Art. 137 CPACA).",
    resumen: "Priorizar auditorías o inspecciones por rencillas vecinales, comerciales o políticas constituye desviación de poder, causal de nulidad absoluta y falta disciplinaria gravísima."
  },
  {
    id: "lc_26",
    numero: 26,
    titulo: "Notificación por Conducta Concluyente: Convalidación Procesal",
    regla: "Si el interesado interpone recursos o manifiesta conocer el acto, se tiene por notificado (Art. 72 CPACA).",
    resumen: "Fallas en el envío o correo electrónico quedan plenamente saneadas el día en que el particular radica memorial o recurso contra el acto; es innecesario repetir la notificación."
  },
  {
    id: "lc_27",
    numero: 27,
    titulo: "Pérdida de Fuerza Ejecutoria: Decaimiento del Acto por el Tiempo",
    regla: "El acto administrativo pierde fuerza ejecutoria transcurridos 5 años sin cobro (Art. 91 CPACA y Art. 817 E.T.).",
    resumen: "Transcurridos más de 5 años desde la firmeza sin mandamiento de pago, el acto pierde fuerza ejecutoria y prescribe la acción coactiva; los embargos tardíos son ilegales."
  },
  {
    id: "lc_28",
    numero: 28,
    titulo: "Confianza Legítima: Prohibición de Ir contra los Actos Propios",
    regla: "La administración no puede defraudar la buena fe objetiva generada en el ciudadano con sus actos previos (Art. 83 C.P.).",
    resumen: "Nadie puede ir válidamente contra sus propios actos (*venire contra factum proprium*). Si la DIAN instruyó un procedimiento por escrito, no puede sancionar luego por seguirlo."
  }
];

// 1. Configuración al instalar la extensión
chrome.runtime.onInstalled.addListener(async () => {
  if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
      .catch((error) => console.error("Error al configurar SidePanel:", error));
  }

  const stored = await chrome.storage.local.get([
    "backgroundTipsEnabled",
    "backgroundTipsInterval",
    "backgroundTipsFormat",
    "backgroundAlternateMode" // "alternate", "tips_only", "questions_only"
  ]);

  const enabled = stored.backgroundTipsEnabled !== undefined ? stored.backgroundTipsEnabled : true;
  const interval = stored.backgroundTipsInterval || DEFAULT_INTERVAL_MINUTES;
  const format = stored.backgroundTipsFormat || "popup"; // "popup" (modal flotante in-page) o "notification"
  const alternateMode = stored.backgroundAlternateMode || "alternate";

  await chrome.storage.local.set({
    backgroundTipsEnabled: enabled,
    backgroundTipsInterval: interval,
    backgroundTipsFormat: format,
    backgroundAlternateMode: alternateMode,
    lastDeliveryType: "tip"
  });

  setupBackgroundAlarm(enabled, interval);
});

// 2. Reanudar alarma al iniciar el navegador
chrome.runtime.onStartup.addListener(async () => {
  const stored = await chrome.storage.local.get(["backgroundTipsEnabled", "backgroundTipsInterval"]);
  const enabled = stored.backgroundTipsEnabled !== undefined ? stored.backgroundTipsEnabled : true;
  const interval = stored.backgroundTipsInterval || DEFAULT_INTERVAL_MINUTES;
  setupBackgroundAlarm(enabled, interval);
});

// 3. Crear o actualizar la alarma periódica
function setupBackgroundAlarm(enabled, intervalMinutes) {
  chrome.alarms.clear(ALARM_NAME, () => {
    if (enabled && intervalMinutes > 0) {
      chrome.alarms.create(ALARM_NAME, {
        delayInMinutes: intervalMinutes,
        periodInMinutes: intervalMinutes
      });
      console.log(`[SIMO Prep] Alarma de microaprendizaje activada cada ${intervalMinutes} min.`);
    } else {
      console.log("[SIMO Prep] Alarma de microaprendizaje desactivada.");
    }
  });
}

// Helper para verificar horario de descanso / silencio (ej: 8:00 PM a 8:00 AM)
function isQuietTime(stored = {}) {
  const enabled = stored.quietHoursEnabled !== undefined ? stored.quietHoursEnabled : true;
  if (!enabled) return false;

  const start = stored.quietHoursStart !== undefined ? Number(stored.quietHoursStart) : 20; // 8:00 PM por defecto
  const end = stored.quietHoursEnd !== undefined ? Number(stored.quietHoursEnd) : 8;       // 8:00 AM por defecto

  const currentHour = new Date().getHours(); // 0 a 23
  if (start > end) {
    // Horario que cruza la medianoche (ej. 20 a 8)
    return currentHour >= start || currentHour < end;
  } else {
    return currentHour >= start && currentHour < end;
  }
}

// 4. Disparar cuando suene la alarma periódica
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name !== ALARM_NAME) return;

  const stored = await chrome.storage.local.get([
    "backgroundTipsEnabled",
    "backgroundTipsFormat",
    "backgroundAlternateMode",
    "lastDeliveryType",
    "lastBackgroundTipId",
    "lastBackgroundQuestionId",
    "quietHoursEnabled",
    "quietHoursStart",
    "quietHoursEnd"
  ]);

  if (stored.backgroundTipsEnabled === false) return;

  // Si está en horario de silencio / dormir (8pm a 8am), no enviar nada
  if (isQuietTime(stored)) {
    console.log("[SIMO Prep] Horario de silencio activo (8pm - 8am). Notificación cancelada.");
    return;
  }

  await deliverNextBackgroundItem(stored);
});

// Alternar entre Pregunta, Tip Flash y Lectura Crítica
async function deliverNextBackgroundItem(stored = {}, forcedType = null) {
  const format = stored.backgroundTipsFormat || "popup";
  const alternateMode = stored.backgroundAlternateMode || "alternate";
  const lastType = stored.lastDeliveryType || "lectura";

  let nextType = forcedType;
  if (!nextType) {
    if (alternateMode === "tips_only") {
      nextType = "tip";
    } else if (alternateMode === "questions_only") {
      nextType = "question";
    } else if (alternateMode === "lectura_only") {
      nextType = "lectura";
    } else {
      // Rotación triple: Pregunta ➔ Tip Flash ➔ Lectura Crítica ➔ Pregunta...
      const rotationCycle = ["question", "tip", "lectura"];
      const lastIndex = rotationCycle.indexOf(lastType);
      const nextIndex = lastIndex >= 0 ? (lastIndex + 1) % rotationCycle.length : 0;
      nextType = rotationCycle[nextIndex];
    }
  }

  await chrome.storage.local.set({ lastDeliveryType: nextType });

  if (nextType === "question" && typeof QUESTION_BANK !== "undefined" && QUESTION_BANK.length > 0) {
    await deliverQuestionFlash(format, stored.lastBackgroundQuestionId);
  } else if (nextType === "lectura") {
    await deliverLecturaFlash(format, stored.lastBackgroundLecturaId);
  } else {
    await deliverTipFlash(format, stored.lastBackgroundTipId);
  }
}

// Entrega de TIP de Lectura Crítica
async function deliverLecturaFlash(format, lastLecturaId) {
  const candidates = TIPS_LECTURA_CRITICA.filter((l) => l.id !== lastLecturaId);
  const pool = candidates.length > 0 ? candidates : TIPS_LECTURA_CRITICA;
  const lc = pool[Math.floor(Math.random() * pool.length)];

  await chrome.storage.local.set({ lastBackgroundLecturaId: lc.id });

  if (format === "popup" || format === "inpage") {
    try {
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (activeTab && activeTab.id && activeTab.url && !activeTab.url.startsWith("chrome://") && !activeTab.url.startsWith("edge://")) {
        await injectInPageTipModal(activeTab.id, {
          titulo: lc.titulo,
          categoria: "Comprensión Lectora",
          icono: "📖",
          color: "#38bdf8",
          resumenCorto: lc.resumen,
          normaReferencia: "Estrategia de Examen CNSC / DIAN",
          contenidoDetallado: lc.regla,
          formula: "Enunciado interrogativo ➔ Núcleo fáctico probatorio ➔ Clave congruente"
        });
        return;
      }
    } catch (err) {
      console.warn("Fallo inyección lectura in-page, fallback a notificación:", err);
    }
  }

  const notifId = `simo_lectura_${lc.id}_${Date.now()}`;
  chrome.notifications.create(notifId, {
    type: "basic",
    iconUrl: "icons/icon128.png",
    title: `📖 Lectura Crítica • ${lc.titulo}`,
    message: `${lc.resumen}\n💡 ${lc.regla}`,
    priority: 2
  });
}

// Entrega de TIP situacional
async function deliverTipFlash(format, lastTipId) {
  if (typeof TIPS_PJS_DATA === "undefined" || TIPS_PJS_DATA.length === 0) return;

  const candidates = TIPS_PJS_DATA.filter((t) => t.id !== lastTipId);
  const pool = candidates.length > 0 ? candidates : TIPS_PJS_DATA;
  const tip = pool[Math.floor(Math.random() * pool.length)];

  await chrome.storage.local.set({ lastBackgroundTipId: tip.id });

  if (format === "popup" || format === "inpage") {
    try {
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (activeTab && activeTab.id && activeTab.url && !activeTab.url.startsWith("chrome://") && !activeTab.url.startsWith("edge://")) {
        await injectInPageTipModal(activeTab.id, tip);
        return;
      }
    } catch (err) {
      console.warn("Fallo inyección tip in-page, fallback a notificación:", err);
    }
  }

  // Notificación nativa fallback
  const notifId = `simo_tip_${tip.id}_${Date.now()}`;
  chrome.notifications.create(notifId, {
    type: "basic",
    iconUrl: "icons/icon128.png",
    title: `💡 Clave #${tip.numero} • ${tip.titulo}`,
    message: `📌 ${tip.resumenCorto}\n(Clic para ver análisis detallado)`,
    priority: 2
  });
}

// Entrega de PREGUNTA situacional interactiva
async function deliverQuestionFlash(format, lastQId) {
  if (typeof QUESTION_BANK === "undefined" || QUESTION_BANK.length === 0) return;

  const candidates = QUESTION_BANK.filter((q) => q.id !== lastQId);
  const pool = candidates.length > 0 ? candidates : QUESTION_BANK;
  const q = pool[Math.floor(Math.random() * pool.length)];

  await chrome.storage.local.set({ lastBackgroundQuestionId: q.id });

  if (format === "popup" || format === "inpage") {
    try {
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (activeTab && activeTab.id && activeTab.url && !activeTab.url.startsWith("chrome://") && !activeTab.url.startsWith("edge://")) {
        await injectInPageQuestionModal(activeTab.id, q);
        return;
      }
    } catch (err) {
      console.warn("Fallo inyección pregunta in-page, fallback a notificación:", err);
    }
  }

  // Notificación nativa fallback
  const notifId = `simo_q_${q.id}_${Date.now()}`;
  chrome.notifications.create(notifId, {
    type: "basic",
    iconUrl: "icons/icon128.png",
    title: `🎯 Desafío Express • ${q.tipo || 'DIAN Gestor III'}`,
    message: `${q.enunciado}\n(Clic para responder en pantalla)`,
    priority: 2
  });
}

// Inyección de MODAL DE TIP en la página activa
async function injectInPageTipModal(tabId, tipData) {
  const themeImg = typeof getImageForContext === "function" ? getImageForContext(tipData) : null;
  const storedSound = await chrome.storage.local.get(["simoSoundEnabled"]);
  const soundEnabled = storedSound.simoSoundEnabled !== false;

  await chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (tip, themeImg, initialSoundEnabled) => {
      const existing = document.getElementById("simo-tip-floating-host");
      if (existing) existing.remove();

      // Sintetizador Web Audio API aislado para el modal
      const SoundFX = {
        ctx: null,
        enabled: initialSoundEnabled,
        getCtx() {
          if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
          }
          if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume().catch(() => {});
          }
          return this.ctx;
        },
        playChime() {
          if (!this.enabled) return;
          try {
            const ctx = this.getCtx();
            if (!ctx) return;
            const now = ctx.currentTime;
            [587.33, 880.0].forEach((freq, idx) => {
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
          } catch (e) {}
        }
      };

      const host = document.createElement("div");
      host.id = "simo-tip-floating-host";
      host.style.position = "fixed";
      host.style.bottom = "24px";
      host.style.right = "24px";
      host.style.zIndex = "2147483647";
      host.style.pointerEvents = "auto";

      const shadow = host.attachShadow({ mode: "open" });

      shadow.innerHTML = `
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
          .modal-card {
            background: linear-gradient(145deg, #0b1120 0%, #131d33 100%);
            color: #f8fafc;
            border: 2px solid ${tip.color || '#f59e0b'};
            border-radius: 14px;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.75);
            max-width: 580px;
            width: 94vw;
            max-height: 88vh;
            overflow-y: auto;
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            animation: simoSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes simoSlideIn {
            from { transform: translateY(30px) scale(0.95); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 12px; }
          .badge { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(245, 158, 11, 0.2); color: ${tip.color || '#f59e0b'}; padding: 4px 10px; border-radius: 6px; }
          
          .theme-banner-box {
            position: relative;
            width: 100%;
            height: 125px;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: #0f172a;
          }
          .theme-banner-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .theme-banner-badge {
            position: absolute;
            bottom: 8px;
            left: 8px;
            background: rgba(11, 17, 32, 0.88);
            backdrop-filter: blur(4px);
            color: #f59e0b;
            font-size: 11px;
            font-weight: 800;
            padding: 3px 8px;
            border-radius: 4px;
            border: 1px solid rgba(245, 158, 11, 0.4);
          }

          .btn-sound {
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.15);
            color: #f8fafc;
            font-size: 16px;
            cursor: pointer;
            border-radius: 6px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
          }
          .btn-sound:hover { background: rgba(255,255,255,0.18); border-color: #38bdf8; }

          .btn-close { background: rgba(255,255,255,0.08); border: none; color: #94a3b8; font-size: 20px; cursor: pointer; border-radius: 6px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }
          .btn-close:hover { background: rgba(255,255,255,0.15); color: #fff; }
          .title { font-size: 20px; font-weight: 800; color: #f8fafc; line-height: 1.35; }
          .norma { font-size: 14px; color: #38bdf8; font-weight: 600; margin-top: 4px; }
          .body-text { font-size: 16px; line-height: 1.65; color: #f1f5f9; background: rgba(11, 17, 32, 0.75); padding: 16px 18px; border-radius: 8px; border-left: 5px solid ${tip.color || '#f59e0b'}; }
          .resumen { font-size: 15px; color: #f8fafc; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); padding: 14px 16px; border-radius: 8px; line-height: 1.6; }
          .btn-ok { background: linear-gradient(135deg, #f59e0b, #d97706); color: #0b1120; font-weight: 800; border: none; padding: 13px 18px; border-radius: 8px; font-size: 16px; cursor: pointer; text-align: center; }
          .btn-ok:hover { opacity: 0.92; }
        </style>
        <div class="modal-card">
          <div class="header">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 22px;">${tip.icono || '💡'}</span>
              <span class="badge">💡 Clave #${tip.numero} • ${tip.categoria}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="btn-sound" id="simoSoundBtn" title="${initialSoundEnabled ? 'Sonido: Activado (Clic para silenciar)' : 'Sonido: Silenciado (Clic para activar)'}">
                ${initialSoundEnabled ? '🔊' : '🔇'}
              </button>
              <button class="btn-close" id="simoCloseBtn" title="Cerrar">✕</button>
            </div>
          </div>

          ${themeImg ? `
            <div class="theme-banner-box">
              <img src="${themeImg.url}" alt="${themeImg.alt}" class="theme-banner-img" />
              <div class="theme-banner-badge">${themeImg.badge}</div>
            </div>
          ` : ''}

          <div>
            <div class="title">${tip.numero}. ${tip.titulo}</div>
            <div class="norma">📌 ${tip.normaReferencia}</div>
          </div>
          <div class="body-text">
            ${tip.contenidoDetallado}
          </div>
          <div class="resumen">
            <strong style="color: #f59e0b;">💡 Pauta de Oro:</strong> ${tip.resumenCorto}
          </div>
          <button class="btn-ok" id="simoOkBtn">¡Anotado! Continuar navegando 🚀</button>
        </div>
      `;

      const closeWidget = () => {
        host.style.transition = "opacity 0.25s, transform 0.25s";
        host.style.opacity = "0";
        host.style.transform = "translateY(20px)";
        setTimeout(() => host.remove(), 260);
      };

      const soundBtn = shadow.getElementById("simoSoundBtn");
      if (soundBtn) {
        soundBtn.addEventListener("click", () => {
          SoundFX.enabled = !SoundFX.enabled;
          soundBtn.textContent = SoundFX.enabled ? "🔊" : "🔇";
          soundBtn.title = SoundFX.enabled ? "Sonido: Activado (Clic para silenciar)" : "Sonido: Silenciado (Clic para activar)";
          if (SoundFX.enabled) SoundFX.playChime();
          try {
            chrome.runtime.sendMessage({
              action: "toggleSoundPreference",
              enabled: SoundFX.enabled
            });
          } catch (e) {}
        });
      }

      shadow.getElementById("simoCloseBtn").addEventListener("click", closeWidget);
      shadow.getElementById("simoOkBtn").addEventListener("click", closeWidget);

      document.body.appendChild(host);

      // Reproducir sonido suave de llegada de campana
      SoundFX.playChime();
    },
    args: [tipData, themeImg, soundEnabled]
  });
}

// Inyección de MODAL DE PREGUNTA SITUACIONAL INTERACTIVA en la página activa
async function injectInPageQuestionModal(tabId, qData) {
  const stored = await chrome.storage.local.get(["stats", "speedDrillQuizStreak", "simoSoundEnabled", "questionTimerSeconds"]);
  const initialStreak = typeof stored.speedDrillQuizStreak === "number" ? stored.speedDrillQuizStreak : 0;
  const soundEnabled = stored.simoSoundEnabled !== false;
  const questionTimerSeconds = typeof stored.questionTimerSeconds === "number" ? stored.questionTimerSeconds : 120;
  const themeImg = typeof getImageForContext === "function" ? getImageForContext(qData) : null;

  await chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: (q, initialStreak, themeImg, initialSoundEnabled, timerSecondsConfig) => {
      const existing = document.getElementById("simo-tip-floating-host");
      if (existing) existing.remove();

      // Sintetizador Web Audio API aislado para el modal
      const SoundFX = {
        ctx: null,
        enabled: initialSoundEnabled,
        getCtx() {
          if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
          }
          if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume().catch(() => {});
          }
          return this.ctx;
        },
        playChime() {
          if (!this.enabled) return;
          try {
            const ctx = this.getCtx();
            if (!ctx) return;
            const now = ctx.currentTime;
            [587.33, 880.0].forEach((freq, idx) => {
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
          } catch (e) {}
        },
        playCorrect() {
          if (!this.enabled) return;
          try {
            const ctx = this.getCtx();
            if (!ctx) return;
            const now = ctx.currentTime;
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
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
        playIncorrect() {
          if (!this.enabled) return;
          try {
            const ctx = this.getCtx();
            if (!ctx) return;
            const now = ctx.currentTime;
            [349.23, 277.18].forEach((freq, idx) => {
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
            fanfareNotes.forEach((n) => {
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.type = "triangle";
              osc.frequency.setValueAtTime(n.f, now + n.time);
              gain.gain.setValueAtTime(0.0001, now + n.time);
              gain.gain.exponentialRampToValueAtTime(0.28, now + n.time + 0.02);
              gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(now + n.time);
              osc.stop(now + n.time + n.dur + 0.05);
            });
          } catch (e) {}
        }
      };

      const host = document.createElement("div");
      host.id = "simo-tip-floating-host";
      host.style.position = "fixed";
      host.style.bottom = "20px";
      host.style.right = "20px";
      host.style.zIndex = "2147483647";
      host.style.pointerEvents = "auto";

      const shadow = host.attachShadow({ mode: "open" });

      const totalSeconds = typeof timerSecondsConfig === "number" ? timerSecondsConfig : 120;
      const isFreeMode = totalSeconds === 0;
      const initialTimerText = isFreeMode
        ? "00:00 (Libre)"
        : `${Math.floor(totalSeconds / 60).toString().padStart(2, "0")}:${(totalSeconds % 60).toString().padStart(2, "0")}`;

      const optionsHtml = q.opciones.map((opt) => `
        <button class="option-btn" data-id="${opt.id}">
          <div class="option-badge">${opt.id}</div>
          <div class="option-label">${opt.texto}</div>
        </button>
      `).join("");

      shadow.innerHTML = `
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
          .modal-card {
            background: linear-gradient(145deg, #0b1120 0%, #172033 100%);
            color: #f8fafc;
            border: 2px solid #38bdf8;
            border-radius: 14px;
            box-shadow: 0 18px 48px rgba(0, 0, 0, 0.85);
            max-width: 620px;
            width: 95vw;
            max-height: 90vh;
            overflow-y: auto;
            padding: 22px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            animation: simoSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes simoSlideIn {
            from { transform: translateY(30px) scale(0.95); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 10px; }
          .badge { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(56, 189, 248, 0.2); color: #38bdf8; padding: 4px 10px; border-radius: 6px; }
          
          .streak-pill {
            font-size: 13px;
            font-weight: 800;
            background: rgba(245, 158, 11, 0.18);
            color: #f59e0b;
            border: 1px solid rgba(245, 158, 11, 0.4);
            padding: 4px 10px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 4px;
            transition: all 0.3s ease;
          }
          .streak-pulse {
            animation: simoPulse 0.5s ease-in-out;
          }
          @keyframes simoPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); background: rgba(245, 158, 11, 0.4); }
            100% { transform: scale(1); }
          }

          .timer-pill {
            font-size: 13px;
            font-weight: 800;
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.35);
            padding: 4px 10px;
            border-radius: 20px;
            white-space: nowrap;
          }
          .timer-pill.urgent {
            background: rgba(239, 68, 68, 0.25) !important;
            color: #f87171 !important;
            border-color: #ef4444 !important;
            animation: simoBlink 0.6s infinite alternate;
          }
          @keyframes simoBlink {
            from { opacity: 0.75; }
            to { opacity: 1; }
          }

          .speed-bar-track {
            width: 100%;
            height: 5px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 4px;
            overflow: hidden;
            margin-top: -4px;
          }
          .speed-bar-fill {
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, #38bdf8, #2563eb);
            border-radius: 4px;
            transition: width 1s linear, background 0.3s;
          }
          .speed-bar-fill.urgent {
            background: linear-gradient(90deg, #f59e0b, #ef4444) !important;
          }

          .theme-banner-box {
            position: relative;
            width: 100%;
            height: 125px;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: #0f172a;
          }
          .theme-banner-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .theme-banner-badge {
            position: absolute;
            bottom: 8px;
            left: 8px;
            background: rgba(11, 17, 32, 0.88);
            backdrop-filter: blur(4px);
            color: #38bdf8;
            font-size: 11px;
            font-weight: 800;
            padding: 3px 8px;
            border-radius: 4px;
            border: 1px solid rgba(56, 189, 248, 0.4);
          }

          .btn-sound {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #f8fafc;
            font-size: 16px;
            cursor: pointer;
            border-radius: 6px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
          }
          .btn-sound:hover {
            background: rgba(255, 255, 255, 0.18);
            border-color: #38bdf8;
          }

          .btn-close { background: rgba(255,255,255,0.08); border: none; color: #94a3b8; font-size: 20px; cursor: pointer; border-radius: 6px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }
          .btn-close:hover { background: rgba(255,255,255,0.15); color: #fff; }
          
          .caso-box { font-size: 15px; line-height: 1.6; color: #f1f5f9; background: rgba(11, 17, 32, 0.75); padding: 14px 18px; border-radius: 8px; border-left: 4px solid #38bdf8; }
          .enunciado { font-size: 16px; font-weight: 800; color: #f8fafc; line-height: 1.5; margin: 2px 0; }
          
          .options-list { display: flex; flex-direction: column; gap: 9px; }
          .option-btn {
            background: rgba(30, 41, 59, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 8px;
            padding: 12px 14px;
            color: #f1f5f9;
            text-align: left;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            transition: all 0.2s ease;
          }
          .option-btn:hover:not(:disabled) {
            background: rgba(56, 189, 248, 0.16);
            border-color: #38bdf8;
          }
          .option-badge {
            background: rgba(255, 255, 255, 0.1);
            color: #cbd5e1;
            font-size: 14px;
            font-weight: 800;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-top: 1px;
          }
          .option-label { font-size: 15px; line-height: 1.55; }

          .option-btn.correct {
            background: rgba(34, 197, 94, 0.22) !important;
            border-color: #22c55e !important;
            color: #86efac !important;
          }
          .option-btn.correct .option-badge {
            background: #22c55e !important;
            color: #0b1120 !important;
          }
          .option-btn.incorrect {
            background: rgba(239, 68, 68, 0.22) !important;
            border-color: #ef4444 !important;
            color: #fca5a5 !important;
          }
          .option-btn.incorrect .option-badge {
            background: #ef4444 !important;
            color: #ffffff !important;
          }

          .feedback-box {
            display: none;
            background: rgba(11, 17, 32, 0.95);
            border-radius: 10px;
            padding: 16px 18px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            animation: simoSlideIn 0.25s ease;
            display: none;
            flex-direction: column;
            gap: 12px;
          }
          
          .breakdown-section {
            display: flex;
            flex-direction: column;
            gap: 9px;
            margin-top: 4px;
          }
          .breakdown-title {
            font-size: 14px;
            font-weight: 800;
            color: #f8fafc;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .breakdown-item {
            padding: 12px 14px;
            border-radius: 8px;
            background: rgba(15, 23, 42, 0.8);
            border-left: 4px solid #94a3b8;
          }
          .breakdown-item.correct {
            border-left-color: #22c55e;
            background: rgba(34, 197, 94, 0.12);
          }
          .breakdown-item.incorrect {
            border-left-color: #ef4444;
            background: rgba(239, 68, 68, 0.12);
          }
          .breakdown-head {
            font-size: 15px;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 4px;
          }
          .breakdown-head.correct { color: #4ade80; }
          .breakdown-head.incorrect { color: #f87171; }
          .breakdown-body {
            font-size: 15px;
            color: #e2e8f0;
            line-height: 1.6;
          }

          /* SRS SECTION */
          .srs-box {
            display: none;
            background: rgba(15, 23, 42, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            padding: 14px 16px;
            margin-top: 2px;
            animation: simoSlideIn 0.25s ease;
          }
          .srs-title {
            font-size: 13px;
            font-weight: 800;
            color: #cbd5e1;
            text-transform: uppercase;
            letter-spacing: 0.4px;
          }
          .srs-buttons {
            display: flex;
            gap: 8px;
            margin-top: 8px;
          }
          .srs-btn {
            flex: 1;
            background: rgba(30, 41, 59, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            padding: 10px 6px;
            color: #f1f5f9;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            text-align: center;
            transition: all 0.2s ease;
          }
          .srs-btn:hover {
            transform: translateY(-2px);
          }
          .srs-btn.srs-hard { border-color: rgba(239, 68, 68, 0.5); }
          .srs-btn.srs-hard:hover, .srs-btn.srs-hard.active { background: rgba(239, 68, 68, 0.25); border-color: #ef4444; color: #fca5a5; }
          .srs-btn.srs-good { border-color: rgba(56, 189, 248, 0.5); }
          .srs-btn.srs-good:hover, .srs-btn.srs-good.active { background: rgba(56, 189, 248, 0.25); border-color: #38bdf8; color: #7dd3fc; }
          .srs-btn.srs-easy { border-color: rgba(34, 197, 94, 0.5); }
          .srs-btn.srs-easy:hover, .srs-btn.srs-easy.active { background: rgba(34, 197, 94, 0.25); border-color: #22c55e; color: #86efac; }
          .srs-sub { font-size: 11px; font-weight: 500; opacity: 0.85; display: block; margin-top: 2px; }

          .btn-ok {
            display: none;
            background: linear-gradient(135deg, #38bdf8, #2563eb);
            color: #ffffff;
            font-weight: 800;
            border: none;
            padding: 13px 18px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            margin-top: 4px;
          }
          .btn-ok:hover { opacity: 0.92; }
        </style>
        <div class="modal-card">
          <div class="header">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 20px;">⚡</span>
              <span class="badge">Speed Drill Situacional</span>
              <div class="streak-pill" id="simoSreakPill">
                🔥 Racha: <strong id="simoSreakCount">${initialStreak}</strong>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="timer-pill" id="simoTimerPill">
                ⏱️ <span id="simoTimerSec">${initialTimerText}</span>
              </div>
              <button class="btn-sound" id="simoSoundBtn" title="${initialSoundEnabled ? 'Sonido: Activado (Clic para silenciar)' : 'Sonido: Silenciado (Clic para activar)'}">
                ${initialSoundEnabled ? '🔊' : '🔇'}
              </button>
              <button class="btn-close" id="simoCloseBtn" title="Cerrar">✕</button>
            </div>
          </div>

          <!-- Barra de Progreso de Tiempo Speed Drill -->
          <div class="speed-bar-track">
            <div id="simoSpeedBar" class="speed-bar-fill"></div>
          </div>

          ${themeImg ? `
            <div class="theme-banner-box">
              <img src="${themeImg.url}" alt="${themeImg.alt}" class="theme-banner-img" />
              <div class="theme-banner-badge">${themeImg.badge}</div>
            </div>
          ` : ''}

          <div class="caso-box">
            ${q.caso}
          </div>

          <div class="enunciado">
            ${q.enunciado}
          </div>

          <div class="options-list" id="simoOptionsContainer">
            ${optionsHtml}
          </div>

          <div class="feedback-box" id="simoFeedbackBox">
            <!-- Retroalimentación explicativa con Distractores -->
          </div>

          <!-- SECCIÓN REPETICIÓN ESPACIADA (SRS) -->
          <div class="srs-box" id="simoSrsBox">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="srs-title">🧠 Programar Repetición Espaciada (SRS):</span>
              <span id="simoSrsStatus" style="font-size: 13px; font-weight: 700; color: #38bdf8;"></span>
            </div>
            <div class="srs-buttons">
              <button class="srs-btn srs-hard" data-srs="hard">
                🔴 Difícil<br><span class="srs-sub">Repasar hoy</span>
              </button>
              <button class="srs-btn srs-good" data-srs="good">
                🟡 Regular<br><span class="srs-sub">En 2 días</span>
              </button>
              <button class="srs-btn srs-easy" data-srs="easy">
                🟢 Dominada<br><span class="srs-sub">En 5 días</span>
              </button>
            </div>
          </div>

          <button class="btn-ok" id="simoOkBtn">¡Anotado! Continuar navegando 🚀</button>
        </div>
      `;

      let currentStreak = initialStreak;
      let remainingSec = isFreeMode ? 0 : totalSeconds;
      let elapsedSec = 0;
      let isAnswered = false;
      let selectedDifficulty = null;

      const timerSecEl = shadow.getElementById("simoTimerSec");
      const timerPillEl = shadow.getElementById("simoTimerPill");
      const speedBarEl = shadow.getElementById("simoSpeedBar");
      const streakCountEl = shadow.getElementById("simoSreakCount");
      const streakPillEl = shadow.getElementById("simoSreakPill");
      const feedbackBox = shadow.getElementById("simoFeedbackBox");
      const srsBox = shadow.getElementById("simoSrsBox");
      const srsStatusEl = shadow.getElementById("simoSrsStatus");
      const okBtn = shadow.getElementById("simoOkBtn");
      const optionButtons = shadow.querySelectorAll(".option-btn");
      const soundBtn = shadow.getElementById("simoSoundBtn");

      // Alternar sonido desde el modal flotante
      if (soundBtn) {
        soundBtn.addEventListener("click", () => {
          SoundFX.enabled = !SoundFX.enabled;
          soundBtn.textContent = SoundFX.enabled ? "🔊" : "🔇";
          soundBtn.title = SoundFX.enabled ? "Sonido: Activado (Clic para silenciar)" : "Sonido: Silenciado (Clic para activar)";
          if (SoundFX.enabled) SoundFX.playChime();
          try {
            chrome.runtime.sendMessage({
              action: "toggleSoundPreference",
              enabled: SoundFX.enabled
            });
          } catch (e) {}
        });
      }

      // Temporizador Speed Drill o Modo Libre
      const timerInterval = setInterval(() => {
        if (isAnswered) return;
        if (isFreeMode) {
          elapsedSec += 1;
          const mins = Math.floor(elapsedSec / 60);
          const secs = elapsedSec % 60;
          timerSecEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")} (Libre)`;
          speedBarEl.style.width = "100%";
        } else {
          remainingSec -= 1;
          const mins = Math.floor(Math.max(0, remainingSec) / 60);
          const secs = Math.max(0, remainingSec) % 60;
          timerSecEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
          
          const pct = Math.max(0, (remainingSec / totalSeconds) * 100);
          speedBarEl.style.width = pct + "%";

          if (remainingSec <= 15) {
            timerPillEl.classList.add("urgent");
            speedBarEl.classList.add("urgent");
          }

          // Ticks de sonido en los últimos 5 segundos
          if (remainingSec <= 5 && remainingSec > 0) {
            SoundFX.playTick();
          }

          if (remainingSec <= 0) {
            clearInterval(timerInterval);
            SoundFX.playTimeout();
            evaluateResponse(null, true);
          }
        }
      }, 1000);

      const closeWidget = () => {
        clearInterval(timerInterval);
        // Si no seleccionó dificultad manualmente, guardar en SRS por defecto
        if (isAnswered && !selectedDifficulty) {
          try {
            chrome.runtime.sendMessage({
              action: "saveSrsCard",
              question: q,
              difficulty: "good"
            });
          } catch (e) {}
        }
        host.style.transition = "opacity 0.25s, transform 0.25s";
        host.style.opacity = "0";
        host.style.transform = "translateY(20px)";
        setTimeout(() => host.remove(), 260);
      };

      shadow.getElementById("simoCloseBtn").addEventListener("click", closeWidget);
      okBtn.addEventListener("click", closeWidget);

      function evaluateResponse(selectedId, isTimeout = false) {
        if (isAnswered) return;
        isAnswered = true;
        clearInterval(timerInterval);

        const timeSpent = isFreeMode ? Math.max(1, elapsedSec) : Math.max(1, totalSeconds - remainingSec);
        const isCorrect = !isTimeout && selectedId === q.respuestaCorrecta;

        // Deshabilitar opciones
        optionButtons.forEach((b) => (b.disabled = true));

        // Resaltar opciones correctas e incorrectas
        optionButtons.forEach((b) => {
          const bId = b.getAttribute("data-id");
          if (bId === q.respuestaCorrecta) {
            b.classList.add("correct");
          } else if (bId === selectedId && !isCorrect) {
            b.classList.add("incorrect");
          }
        });

        // Actualizar racha en UI
        if (isCorrect) {
          currentStreak += 1;
          streakCountEl.textContent = currentStreak;
          streakPillEl.classList.add("streak-pulse");
          timerPillEl.textContent = `⚡ Respondido en ${timeSpent}s`;
          timerPillEl.style.color = "#4ade80";
          timerPillEl.style.borderColor = "#22c55e";

          // Fanfarria si alcanzó hito
          if ([3, 5, 10, 15, 20].includes(currentStreak)) {
            SoundFX.playFanfare();
          } else {
            SoundFX.playCorrect();
          }
        } else {
          currentStreak = 0;
          streakCountEl.textContent = "0";
          if (isTimeout) {
            timerPillEl.textContent = `⏱️ Tiempo agotado (${totalSeconds}s)`;
          } else {
            timerPillEl.textContent = `⚡ Respondido en ${timeSpent}s`;
            SoundFX.playIncorrect();
          }
        }

        // Generar desglose completo de Distractores
        const breakdownItemsHtml = q.opciones.map((opt) => {
          const isThisCorrect = opt.id === q.respuestaCorrecta;
          return `
            <div class="breakdown-item ${isThisCorrect ? 'correct' : 'incorrect'}">
              <div class="breakdown-head ${isThisCorrect ? 'correct' : 'incorrect'}">
                <span>${isThisCorrect ? '✓' : '✕'}</span>
                <span>Opción ${opt.id} ${isThisCorrect ? '— CLAVE OFICIAL CNSC/DIAN' : '— DISTRACTOR'}</span>
              </div>
              <div class="breakdown-body">
                ${opt.explicacion || (isThisCorrect ? (q.justificacion || "Opción correcta conforme a la norma.") : (q.justificacion ? `Distractor descartado: ${q.justificacion}` : "Opción incorrecta según los criterios de la prueba."))}
              </div>
            </div>
          `;
        }).join("");

        const isMilestone = isCorrect && [3, 5, 10, 15, 20].includes(currentStreak);
        const milestoneBannerHtml = isMilestone ? `
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.35), rgba(239, 68, 68, 0.25)); border: 2px solid #f59e0b; border-radius: 10px; padding: 12px 16px; text-align: center; box-shadow: 0 0 30px rgba(245, 158, 11, 0.45); animation: simoPulse 0.5s ease-in-out;">
            <div style="font-size: 28px; margin-bottom: 2px;">🔥 🏆 🔥</div>
            <div style="font-size: 16px; font-weight: 900; color: #fef08a; text-transform: uppercase; letter-spacing: 0.5px;">
              ¡Hito de Racha Alcanzado: ${currentStreak} Aciertos Seguidos!
            </div>
            <div style="font-size: 13px; color: #f8fafc; margin-top: 4px; line-height: 1.45;">
              ${currentStreak >= 10 ? '👑 ¡Nivel Maestro CNSC! Criterio impecable para liderar la lista de elegibles de la DIAN.' : currentStreak >= 5 ? '⚡ ¡Nivel Gestor Imparable! Superas holgadamente el 70% eliminatorio.' : '🔥 ¡En racha ascendente! La técnica de descarte de distractores está funcionando.'}
            </div>
            <div style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 4px;">
              +${currentStreak * 50} Puntos de Mérito XP Ganados
            </div>
          </div>
        ` : '';

        feedbackBox.style.display = "flex";
        feedbackBox.innerHTML = `
          ${milestoneBannerHtml}

          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
            <div style="font-size: 16px; font-weight: 800; color: ${isCorrect ? '#4ade80' : '#f87171'}; display: flex; align-items: center; gap: 6px;">
              <span>${isCorrect ? '✓ ¡Respuesta Correcta!' : isTimeout ? '⏱️ ¡Tiempo Agotado en Speed Drill!' : '✕ Respuesta Incorrecta'}</span>
            </div>
            <div style="font-size: 13px; font-weight: 700; color: #cbd5e1;">
              ${isCorrect ? `🔥 Racha: ${currentStreak} seguidas` : '💥 Racha reiniciada'}
            </div>
          </div>

          <div style="background: rgba(99, 102, 241, 0.16); border-left: 4px solid #6366f1; padding: 14px 16px; border-radius: 8px;">
            <div style="font-size: 13px; font-weight: 800; color: #a5b4fc; text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.5px;">
              ⚖️ Fundamento Normativo / Criterio Oficial:
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #f8fafc; line-height: 1.45; margin-bottom: 6px;">
              ${q.norma || 'Manual de Funciones DIAN y Estatuto Tributario / CPACA'}
            </div>
            ${q.citaNormativa ? `
              <div style="background: rgba(11, 17, 32, 0.7); border-left: 3px solid #38bdf8; padding: 10px 14px; border-radius: 6px; font-style: italic; font-size: 14px; line-height: 1.6; color: #cbd5e1; margin-top: 6px;">
                <strong style="color: #38bdf8; font-style: normal; display: block; margin-bottom: 2px;">📖 Cita Clave para asimilar:</strong>
                ${q.citaNormativa}
              </div>
            ` : ''}
          </div>

          <div class="breakdown-section">
            <div class="breakdown-title">🔍 Análisis de Opciones y Distractores:</div>
            ${breakdownItemsHtml}
          </div>
        `;

        // Mostrar sección SRS y botón de cierre
        srsBox.style.display = "block";
        okBtn.style.display = "block";

        // Registrar estadísticas y racha en el storage en segundo plano
        try {
          chrome.runtime.sendMessage({
            action: "recordBackgroundAnswer",
            isCorrect: isCorrect,
            newQuizStreak: currentStreak,
            timeSpent: timeSpent,
            tipo: q.tipo || "Funcional"
          });
        } catch (e) {
          console.warn("No se pudo registrar respuesta de Speed Drill:", e);
        }
      }

      // Eventos en botones de opciones
      optionButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const selectedId = btn.getAttribute("data-id");
          evaluateResponse(selectedId, false);
        });
      });

      // Eventos en botones SRS
      shadow.querySelectorAll(".srs-btn").forEach((srsBtn) => {
        srsBtn.addEventListener("click", () => {
          selectedDifficulty = srsBtn.getAttribute("data-srs");
          
          shadow.querySelectorAll(".srs-btn").forEach((b) => b.classList.remove("active"));
          srsBtn.classList.add("active");

          SoundFX.playPop();

          const labels = { hard: "hoy", good: "en 2 días", easy: "en 5 días" };
          srsStatusEl.textContent = `✓ Programada para repasar ${labels[selectedDifficulty] || 'pronto'}`;

          try {
            chrome.runtime.sendMessage({
              action: "saveSrsCard",
              question: q,
              difficulty: selectedDifficulty
            });
          } catch (e) {
            console.warn("No se pudo programar tarjeta SRS:", e);
          }
        });
      });

      document.body.appendChild(host);

      // Reproducir sonido de llegada de la pregunta
      SoundFX.playChime();
    },
    args: [qData, initialStreak, themeImg, soundEnabled, questionTimerSeconds]
  });
}

// 5. Al hacer clic en notificaciones nativas
chrome.notifications.onClicked.addListener(async (notificationId) => {
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!activeTab || !activeTab.id) return;

  if (notificationId.startsWith("simo_tip_")) {
    const parts = notificationId.split("_");
    const tipId = parseInt(parts[2], 10);
    const tip = TIPS_PJS_DATA.find((t) => t.id === tipId);
    if (tip) await injectInPageTipModal(activeTab.id, tip);
  } else if (notificationId.startsWith("simo_q_")) {
    const parts = notificationId.split("_");
    const qId = parts[2];
    const q = QUESTION_BANK.find((item) => item.id === qId);
    if (q) await injectInPageQuestionModal(activeTab.id, q);
  }
  chrome.notifications.clear(notificationId);
});

// 6. Mensajes desde el Panel Lateral o Widget in-page
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "updateBackgroundAlarm") {
    setupBackgroundAlarm(message.enabled, message.intervalMinutes);
    sendResponse({ success: true });
  } else if (message.action === "testBackgroundTip") {
    const stored = await chrome.storage.local.get([
      "backgroundTipsFormat",
      "backgroundAlternateMode",
      "lastDeliveryType",
      "lastBackgroundTipId",
      "lastBackgroundQuestionId"
    ]);
    await deliverNextBackgroundItem(stored, message.forcedType || null);
    sendResponse({ success: true });
  } else if (message.action === "recordBackgroundAnswer") {
    // Sumar a las estadísticas de estudio y persistir racha
    const stored = await chrome.storage.local.get(["stats", "speedDrillQuizStreak"]);
    const curr = stored.stats || {
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

    curr.totalAnswered += 1;
    if (message.isCorrect) curr.correctCount += 1;

    if (message.tipo && message.tipo.includes("Funcional")) {
      curr.functionalTotal += 1;
      if (message.isCorrect) curr.functionalCorrect += 1;
    } else {
      curr.behavioralTotal += 1;
      if (message.isCorrect) curr.behavioralCorrect += 1;
    }

    const today = new Date().toISOString().slice(0, 10);
    if (curr.lastStudyDate !== today) {
      curr.streak = (curr.streak || 1) + 1;
      curr.lastStudyDate = today;
    }

    const newQuizStreak = typeof message.newQuizStreak === "number" ? message.newQuizStreak : (message.isCorrect ? (stored.speedDrillQuizStreak || 0) + 1 : 0);

    await chrome.storage.local.set({
      stats: curr,
      speedDrillQuizStreak: newQuizStreak
    });
    sendResponse({ success: true, newQuizStreak: newQuizStreak });
  } else if (message.action === "saveSrsCard") {
    // Programar tarjeta de Repetición Espaciada (SRS)
    const { question, difficulty } = message;
    const stored = await chrome.storage.local.get(["srsCards"]);
    const srsCards = stored.srsCards || [];
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
    const existingIdx = srsCards.findIndex((c) => c.question && c.question.id === question.id);
    const existingNotes = existingIdx >= 0 ? srsCards[existingIdx].feynmanNotes || "" : "";

    const cardData = {
      question: question,
      nextReviewDate: nextReview,
      difficulty: difficulty,
      leitnerBox: leitnerBox,
      repetitions: existingIdx >= 0 ? (srsCards[existingIdx].repetitions || 1) + 1 : 1,
      feynmanNotes: existingNotes
    };

    if (existingIdx >= 0) {
      srsCards[existingIdx] = cardData;
    } else {
      srsCards.push(cardData);
    }

    await chrome.storage.local.set({ srsCards });
    sendResponse({ success: true, nextReviewDate: nextReview });
  } else if (message.action === "toggleSoundPreference") {
    await chrome.storage.local.set({ simoSoundEnabled: message.enabled });
    sendResponse({ success: true, enabled: message.enabled });
  }
  return true;
});
