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
  practiceCorrectIds: [],
  practiceStudiedIds: [],
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
    numero: 1,
    titulo: "Lectura Inversa: Encuentra el Verbo Rector",
    regla: "Saber qué te piden antes de leer el cuerpo del caso ahorra 50% de esfuerzo cognitivo.",
    resumen: "Nunca comiences a leer el caso desde el primer párrafo. En las pruebas de juicio situacional de la CNSC, los casos tienen entre 80 y 250 palabras de contexto descriptivo. Dirige tu mirada directamente a la última frase en negrilla o con signos de interrogación para atrapar el Verbo Rector (Notificar, Suspender, Decretar, Rechazar, Proyectar). Al saber exactamente la meta procesal, lees el texto con un filtro selectivo que descarta la información irrelevante.",
    formula: "Última frase con '?' ➔ Verbo Rector ➔ Filtro de búsqueda selectiva",
    puntosClave: [
      "Ignora el primer párrafo hasta haber leído el interrogante final en negrilla.",
      "Subraya mentalmente el verbo rector (ej. 'proyectar respuesta' vs 'sancionar de plano').",
      "Lee las 3 opciones de respuesta antes de leer la historia completa del caso."
    ],
    ejercicio: {
      pregunta: "Caso extenso de 3 párrafos sobre controversia aduanera. La última frase dice: 'Frente a la solicitud extemporánea del declarante para subsanar la declaración anticipada, la actuación procedente que debe PROYECTAR el funcionario es:' ¿Cuál es la opción congruente con el verbo y la situación?",
      opciones: [
        "A. Decretar inmediatamente el decomiso directo de la mercancía sin auto motivado.",
        "B. Proyectar auto motivado que rechaza la solicitud extemporánea garantizando términos de contradicción.",
        "C. Abrir una indagación preliminar para averiguar los motivos personales del retardo del declarante."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Trampa: 'Decretar decomiso directo sin auto' es arbitrario y no corresponde al verbo 'proyectar respuesta a solicitud extemporánea'.",
        "✅ ¡Excelente! El verbo rector pide 'PROYECTAR' ante un término vencido; proyectar auto motivado respetando el término legal es la respuesta exacta.",
        "❌ Distractor de dilación: En términos procesales perentorios no se abren 'indagaciones previas' sobre motivos subjetivos."
      ]
    }
  },
  {
    id: "lc_2",
    numero: 2,
    titulo: "Filtro Anti-Ruido: Hechos Probados vs. Emociones",
    regla: "En derecho público solo lo probado en el expediente cuenta. Lo no documentado es distractor.",
    resumen: "Los redactores de la prueba suelen adornar los casos con relatos emotivos: 'el contribuyente llora y alega quiebra inminente', 'el usuario insulta a los funcionarios', 'el auditor sospecha que la empresa oculta activos'. El aspirante novato se distrae con la empatía o el prejuicio. El aspirante preparado activa el Filtro Anti-Ruido: elimina adjetivos y busca exclusivamente fechas de notificación, actos administrativos en firme y cuantías en UVT.",
    formula: "Expediente con fechas y soportes formales > Emociones o quejas del usuario",
    puntosClave: [
      "Si una afirmación no tiene soporte documental o fecha en el expediente, legalmente no existe.",
      "Las emociones, enojos o súplicas jamás modifican los términos perentorios del Estatuto Tributario.",
      "Extrae en 5 segundos la línea de tiempo: Fecha del acto ➔ Fecha de notificación ➔ Vencimiento."
    ],
    ejercicio: {
      pregunta: "Un comerciante acude a la DIAN muy alterado afirmando que por un incendio perdió sus facturas y que 'es inhumano e injusto' que le cobren sanción por no enviar información. En el expediente consta requerimiento ordinario notificado válidamente hace 4 meses sin respuesta. ¿Cuál es el dato jurídico determinante?",
      opciones: [
        "A. El angustioso relato verbal del comerciante sobre la pérdida de sus libros por fuerza mayor.",
        "B. El requerimiento ordinario debidamente notificado hace 4 meses cuyo término legal de respuesta expiró.",
        "C. La apreciación subjetiva del funcionario sobre la sinceridad del comerciante."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Distractor de ruido emocional: La fuerza mayor debe probarse formalmente dentro del término de descargos, no mediante alegaciones verbales posteriores.",
        "✅ ¡Perfecto! Núcleo fáctico probado en el expediente: acto notificado en debida forma con término legal vencido. Ese es el único dato legal vinculante.",
        "❌ Distractor subjetivo: Los servidores públicos resuelven conforme al acervo probatorio, no por impresiones de sinceridad."
      ]
    }
  },
  {
    id: "lc_3",
    numero: 3,
    titulo: "Radar de Cuantificadores Absolutos (Trampas)",
    regla: "Palabras categóricas como 'siempre', 'nunca' o 'de plano' son distractores en un 95%.",
    resumen: "En la administración pública rige el debido proceso (Art. 29 C.P.), la presunción de inocencia y el derecho de contradicción. Por mandato constitucional, la ley casi nunca autoriza actuar 'de plano', 'automáticamente', 'sin fórmula de juicio' ni 'de forma inapelable'. Cuando leas las opciones de respuesta, escanea de inmediato buscando estos cuantificadores absolutistas: son distractores diseñados para atrapar a quienes creen erróneamente que la DIAN actúa de manera autoritaria.",
    formula: "Palabras absolutas ('automáticamente', 'sin recurso', 'de plano') = 🚨 ALERTA ROJA",
    puntosClave: [
      "Alerta máxima con: 'siempre', 'nunca', 'únicamente', 'inapelable', 'de plano', 'automáticamente'.",
      "Lenguaje preferido de la clave oficial: 'previa verificación motivada', 'dentro del término legal', 'garantizando el derecho de contradicción'.",
      "Excepción única: cuando la ley expresamente señale que contra un auto de trámite no procede recurso."
    ],
    ejercicio: {
      pregunta: "Al verificar inconsistencias en la declaración de renta de un contribuyente, ¿cuál de las siguientes opciones representa una trampa de cuantificador absoluto que debes descartar de inmediato?",
      opciones: [
        "A. '...proferir de plano y automáticamente liquidación oficial de aforo sin requerimiento especial previo...'",
        "B. '...notificar requerimiento especial motivado para que el contribuyente presente objeciones dentro del término legal...'",
        "C. '...verificar los cruces de información de terceros antes de proferir el pliego de cargos...'"
      ],
      correcta: 0,
      explicaciones: [
        "✅ ¡Detectaste la trampa! 'De plano y automáticamente sin requerimiento previo' viola el debido proceso del Art. 703 del E.T. Es el distractor clásico de la CNSC.",
        "❌ Esta es una opción garantista y válida (lenguaje de clave oficial), no una trampa.",
        "❌ Esta es una actuación de auditoría prudente y legal, no una trampa absolutista."
      ]
    }
  },
  {
    id: "lc_4",
    numero: 4,
    titulo: "Test del Rol: Cuidado con la Verdad Incompetente",
    regla: "Una opción puede citar una ley perfecta, pero si no es competencia de tu cargo, es usurpación.",
    resumen: "La trampa más sofisticada en pruebas situacionales es la 'Verdad Incompetente'. Consiste en una opción redactada con términos jurídicos impecables, que cita jurisprudencia real del Consejo de Estado, pero cuya ordenación o firma le corresponde al Director General, a un Juez de la República, a la Fiscalía o al Director Seccional, y no a un Gestor III o Analista IV. Si tu cargo no puede ejecutar esa acción por sí mismo según el manual de funciones, la opción es falsa por incompetencia.",
    formula: "¿Está facultado mi cargo (Gestor / Analista) para tomar esta decisión por sí mismo?",
    puntosClave: [
      "Pregúntate siempre: ¿Quién firma y quién decide esto según el manual de funciones?",
      "El Nivel Técnico verifica y clasifica; el Nivel Profesional proyecta y sustenta; el Directivo ordena y sanciona.",
      "Las órdenes de captura y extinciones de dominio pertenecen a la Fiscalía y Jueces, nunca a un funcionario DIAN."
    ],
    ejercicio: {
      pregunta: "Como Gestor III en Fiscalización detectas indicios graves de contrabando continuado y facturación falsa por $2.500 millones. ¿Cuál es tu actuación legítima según tu rol funcional?",
      opciones: [
        "A. Ordenar la captura del representante legal de la empresa y decretar la extinción penal del dominio de las bodegas.",
        "B. Elaborar el informe técnico probatorio motivado y remitirlo al superior para que compulse copias a la Fiscalía.",
        "C. Llegar a un acuerdo transaccional informal con el contribuyente para perdonarle parte de la sanción."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Verdad Incompetente / Usurpación de Funciones: Ordenar capturas y extinguir dominio son facultades penales exclusivas de Fiscales y Jueces, no de un Gestor DIAN.",
        "✅ ¡Exacto! Tu rol profesional es recaudar pruebas, elaborar el informe técnico motivado y trasladar al superior para las acciones penales y administrativas pertinentes.",
        "❌ Falta grave disciplinaria: Las sanciones tributarias son de orden público y no se negocian informalmente."
      ]
    }
  },
  {
    id: "lc_5",
    numero: 5,
    titulo: "Fórmula E-P-C de Comprensión Rápida",
    regla: "Enunciado interrogativo ➔ Premisa fáctica probada ➔ Clave congruente con tu rol.",
    resumen: "Cuando el tiempo apremie o sientas fatiga mental tras muchas preguntas, aplica la Fórmula E-P-C para resolver cualquier caso en menos de 40 segundos: E (Enunciado final): ¿Qué problema concreto exige resolver la pregunta? P (Premisa fáctica probada): ¿Qué hecho está soportado con fechas y normas en firme? C (Clave congruente): ¿Cuál de las 3 opciones une el Enunciado con la Premisa respetando la competencia de tu cargo y el debido proceso?",
    formula: "E (Enunciado final) + P (Premisa probada en fechas) = C (Clave congruente)",
    puntosClave: [
      "E: Filtra el 80% de la información innecesaria y fija el objetivo procesal.",
      "P: Descarta opciones que contradicen los hechos probados o inventan datos no dichos.",
      "C: Elige la opción que resuelve directamente el problema planteado sin atajos ilegales."
    ],
    ejercicio: {
      pregunta: "Aplica E-P-C: Enunciado (E): Qué actuación procede ante un recurso de reconsideración tributario. Premisa (P): El expediente prueba que el contribuyente radicó el recurso 5 días hábiles después del vencimiento legal. ¿Cuál es la Clave Congruente (C)?",
      opciones: [
        "A. Dar trámite al recurso aplicando el principio de favorabilidad tributaria.",
        "B. Proyectar auto de rechazo por extemporaneidad motivando el vencimiento de términos y garantizando recurso de queja.",
        "C. Guardar silencio administrativo y archivar el expediente sin comunicar al contribuyente."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Contradice la Premisa (P): La extemporaneidad en recursos tributarios genera rechazo obligatorio por falta de competencia temporal.",
        "✅ ¡Perfecta aplicación E-P-C! Enunciado resuelto + Premisa probada de extemporaneidad + Clave congruente con auto motivado legal.",
        "❌ Viola el debido proceso y deber de motivación: La administración debe resolver expresamente mediante acto notificado."
      ]
    }
  },
  {
    id: "lc_6",
    numero: 6,
    titulo: "Técnica E-I-C de Análisis Forense",
    regla: "Escaneo visual preliminar ➔ Interrogante ➔ Conexión al párrafo determinante.",
    resumen: "Inspirada en las auditorías tributarias y aduaneras de la DIAN: E (Escaneo relámpago de 8 segundos): Recorre el caso saltando palabras de relleno para atrapar anclas duras: fechas, cuantías en UVT, números de resolución y siglas (NIT, CPACA, E.T.). I (Interrogante rector): Lee la pregunta final para saber exactamente qué cálculo o trámite te solicitan. C (Conexión al párrafo determinante): Regresa únicamente al párrafo donde se encuentra la fecha o cifra identificada, omitiendo todo el texto restante.",
    formula: "Escaneo de Anclas (Fechas/UVT) ➔ Interrogante ➔ Conexión selectiva al párrafo clave",
    puntosClave: [
      "No leas como una novela: escanea como auditor forense que busca discrepancias.",
      "Las anclas duras (fechas y números) son imanes visuales que te llevan al párrafo clave.",
      "Te permite contestar preguntas complejas de liquidación y términos en la mitad de tiempo."
    ],
    ejercicio: {
      pregunta: "Escaneo Forense: Un caso menciona una factura emitida el 10 de enero de 2024, un requerimiento ordinario notificado el 15 de marzo, y una respuesta radicada el 20 de mayo. El interrogante te pide determinar si la respuesta fue oportuna si el término legal era de 15 días hábiles. ¿Qué ancla conecta la solución?",
      opciones: [
        "A. La fecha de emisión de la factura (10 de enero).",
        "B. El cálculo de días hábiles entre la notificación del requerimiento (15 de marzo) y la radicación (20 de mayo).",
        "C. El valor monetario registrado en la factura electrónica."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Distractor temporal irrelevante para el cómputo de oportunidad procesal.",
        "✅ ¡Exacto! La técnica E-I-C conecta el término procesal: de 15 de marzo a 20 de mayo excede con creces los 15 días hábiles. El ancla determinante es la línea de tiempo del requerimiento.",
        "❌ Cifra económica no solicitada por el interrogante procesal."
      ]
    }
  },
  {
    id: "lc_7",
    numero: 7,
    titulo: "Triángulo V-N-C del Verbo Rector",
    regla: "V (Verbo) ➔ N (Nivel del empleo) ➔ C (Competencia legal).",
    resumen: "Cada empleo de carrera en la DIAN (Decreto Ley 071 de 2020 y Decreto 1742 de 2020) opera en un nivel jerárquico preciso. El Triángulo V-N-C cruza: V (Verbo de la opción): ¿El verbo denota ejecutar, verificar, sustentar, proyectar o decidir? N (Nivel del cargo): Nivel Técnico (Analista) verifica, clasifica y apoya; Nivel Profesional (Gestor) analiza, proyecta y sustenta; Directivos ordenan y sancionan. C (Competencia): Si un Analista pretende proferir pliegos o un Gestor ordenar embargos judiciales, la opción está viciada por incompetencia.",
    formula: "V (Verbo de la opción) + N (Nivel del cargo) + C (Competencia del manual) = CLAVE",
    puntosClave: [
      "Si concursas para ANALISTA IV (Técnico), descarta opciones donde el funcionario firma actos resolutivos de fondo.",
      "Si concursas para GESTOR III (Profesional), la opción correcta suele ser 'elaborar informe técnico motivado' o 'proyectar pliego'.",
      "Los verbos de fondo (Sancionar, Fallar, Decomisar) están reservados a Directores Seccionales y Jefes de División."
    ],
    ejercicio: {
      pregunta: "En el empleo de ANALISTA IV (Nivel Técnico DIAN), durante una inspección en depósito aduanero detectas exceso de mercancía no declarada. ¿Cuál acción corresponde a la congruencia V-N-C de tu nivel?",
      opciones: [
        "A. Proferir la resolución sancionatoria de decomiso definitivo de la mercancía.",
        "B. Levantar el acta de inspección detallando el conteo físico y trasladarla con los soportes al Profesional competente.",
        "C. Ordenar el remate público inmediato de los bienes en la plataforma aduanera."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Incongruencia de Nivel: Proferir resoluciones sancionatorias de fondo es competencia de Jefes de División o Directores, no del Nivel Técnico.",
        "✅ ¡Triángulo V-N-C perfecto! Verbo: 'Levantar acta y trasladar'; Nivel: Técnico (apoyo y verificación); Competencia: dejar constancia física en el expediente.",
        "❌ Usurpación de funciones de remate y disposición de mercancías."
      ]
    }
  },
  {
    id: "lc_8",
    numero: 8,
    titulo: "Técnica del Silencio Administrativo: Positivo vs. Negativo",
    regla: "En derecho tributario el silencio positivo es excepcional; por regla general opera el negativo ficticio.",
    resumen: "La CNSC evalúa con frecuencia casos donde la administración guarda silencio vencido el término legal. El distractor común induce a creer que el silencio siempre es negativo o que 'no produce efectos'. La regla de oro es: por mandato general del CPACA (Art. 83), el silencio administrativo es negativo (una ficción para permitir demandar ante lo contencioso administrativo). Únicamente opera el silencio administrativo positivo cuando una norma expresa y taxativa lo ordene (como el Art. 734 del E.T. cuando la DIAN no resuelve el recurso de reconsideración en el término de 1 año).",
    formula: "Regla general CPACA = Silencio Negativo // Excepción con norma expresa = Silencio Positivo (Art. 734 E.T.)",
    puntosClave: [
      "Identifica si el trámite tiene norma expresa de silencio positivo (ej. Art. 734 E.T. en reconsideración).",
      "Si no existe norma expresa especial, el silencio es negativo ficticio que agota vía administrativa para demandar.",
      "El silencio administrativo nunca convalida actos manifiestamente ilegales sin norma que lo respalde."
    ],
    ejercicio: {
      pregunta: "Un contribuyente radicó recurso de reconsideración contra una liquidación oficial de revisión. Transcurrieron 14 meses continuos sin que la DIAN haya proferido ni notificado la resolución que decide el recurso. ¿Cuál es el efecto jurídico del silencio según el Art. 734 del Estatuto Tributario?",
      opciones: [
        "A. Opera el silencio administrativo negativo, por lo cual el contribuyente debe esperar indefinidamente la decisión expresa.",
        "B. Se configura el silencio administrativo positivo, entendiéndose fallado el recurso a favor del contribuyente.",
        "C. La liquidación oficial de revisión queda en firme automáticamente y pasa a cobro coactivo."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Trampa clásica: En recursos de reconsideración tributarios no rige el silencio negativo general, sino la regla especial de silencio positivo del Art. 734 E.T.",
        "✅ ¡Acierto Jurídico! Conforme al Art. 734 del Estatuto Tributario, transcurrido 1 año sin notificación del fallo, opera de pleno derecho el silencio positivo a favor del contribuyente.",
        "❌ Contradicción total: El silencio de la administración jamás confirma el acto desfavorable cuando existe causal de silencio positivo."
      ]
    }
  },
  {
    id: "lc_9",
    numero: 9,
    titulo: "Detector de Falsa Causalidad (Presunción de Buena Fe)",
    regla: "La buena fe se presume (Art. 83 C.P.); el dolo o fraude fiscal exige prueba técnica fehaciente.",
    resumen: "Un truco recurrente en los casos de la CNSC es narrar dos hechos sucesivos para que asumas causalidad delictiva: 'la empresa cambió de contador y al mes siguiente se reportaron menos utilidades', o 'el importador cambió de agente aduanero y llegó mercancía con descripción genérica'. El distractor inmediato propone sancionar por 'fraude doloso' o 'evasión intencional'. El ojo forense entrenado recuerda que la buena fe constitucional se presume y que para tipificar falsedad o dolo se requiere prueba documental técnica directa, no sospechas cronológicas.",
    formula: "Sucesión de hechos en el tiempo ≠ Dolo o culpabilidad probada en el expediente",
    puntosClave: [
      "Diferencia siempre 'inconsistencia formal subsanable' de 'fraude o evasión dolosa'.",
      "No asumas mala fe porque dos eventos coincidan en el calendario.",
      "La opción correcta siempre exige verificar pruebas de trazabilidad financiera antes de calificar dolo."
    ],
    ejercicio: {
      pregunta: "En una auditoría tributaria se observa que una sociedad mercantil cambió de revisor fiscal en mayo y en la declaración de IVA del bimestre siguiente declaró saldos a favor atípicos. ¿Cuál es la conducta procesal correcta del auditor?",
      opciones: [
        "A. Formular de inmediato denuncia penal por concierto para delinquir y fraude procesal contra el nuevo revisor fiscal.",
        "B. Proferir requerimiento ordinario de información solicitando los soportes contables y facturas electrónicas que sustentan el saldo a favor.",
        "C. Rechazar de plano la declaración de IVA asumiendo mala fe por el cambio intempestivo de revisor fiscal."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Trampa de prejuicio: Una coincidencia temporal de cambio de personal no es prueba idónea para formular denuncias penales sin acervo probatorio.",
        "✅ ¡Excelente análisis! Rige la presunción de buena fe: la administración solicita soportes objetivos mediante requerimiento ordinario para cotejar la realidad contable.",
        "❌ Arbitrariedad: Ninguna declaración se rechaza 'de plano' por presunción de mala fe sin agotar el debido proceso probatorio."
      ]
    }
  },
  {
    id: "lc_10",
    numero: 10,
    titulo: "Jerarquía Normativa: Ley Especial Prima sobre Ley General",
    regla: "El Estatuto Tributario y Régimen de Aduanas prevalecen sobre el CPACA y Código Civil.",
    resumen: "Muchos distractores están construidos con normas completamente vigentes y verdaderas del Código General del Proceso o del CPACA general. Sin embargo, en el ámbito de la DIAN rige el principio hermenéutico de especialidad (Art. 5 de la Ley 57 de 1887 y Art. 2 del CPACA): las normas tributarias y aduaneras tienen procedimiento propio. Si una opción cita un término del CPACA general (ej. 10 días para peticiones de información) y otra cita el término especial tributario (ej. 15 días según Art. 684 del E.T.), la norma especial siempre es la clave correcta.",
    formula: "Norma Especial DIAN (Estatuto / Régimen Aduanero) > Norma General (CPACA / CGP)",
    puntosClave: [
      "El CPACA es norma subsidiaria: solo aplica en lo no regulado por el Estatuto Tributario o Régimen Aduanero.",
      "Términos de notificación, recursos y firmeza se rigen prioritariamente por el Estatuto Tributario.",
      "Desconfía de opciones que apliquen reglas civiles generales a procedimientos fiscales especiales."
    ],
    ejercicio: {
      pregunta: "Frente a la notificación electrónica de un acto administrativo tributario, el contribuyente alega que según el CPACA general el término corre al día siguiente del envío. La norma especial del Art. 566-1 del E.T. señala que el término se computa a partir de los 5 días hábiles siguientes a la entrega en el buzón. ¿Cuál norma determina la oportunidad legal?",
      opciones: [
        "A. El CPACA general por ser el código rector de toda la administración pública colombiana.",
        "B. El Art. 566-1 del Estatuto Tributario por ser la norma especial que regula expresamente el procedimiento tributario.",
        "C. El Código General del Proceso por analogía procesal obligatoria."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Trampa de generalidad: El CPACA es subsidiario ante normas de procedimiento especial tributario.",
        "✅ ¡Principio de Especialidad! El Art. 566-1 del Estatuto Tributario rige de manera preferente en la DIAN sobre cualquier norma procesal general.",
        "❌ Distractor: El CGP solo aplica por remisión expresa ante vacíos insalvables, no contra norma expresa tributaria."
      ]
    }
  },
  {
    id: "lc_11",
    numero: 11,
    titulo: "Doble Filtro Cautelar: Proporcionalidad e Inembargabilidad",
    regla: "Toda medida cautelar coactiva debe ser proporcional a la deuda y respetar límites legales.",
    resumen: "En la etapa de cobro coactivo o control aduanero, las medidas cautelares (embargos bancarios, secuestros, aprehensiones) son restrictivas de derechos fundamentales. La CNSC coloca trampas donde el funcionario 'ordena embargar la totalidad de la cuenta corriente de nómina' o 'decomisa todo el contenedor porque faltó la serie de una caja'. La clave exige el Doble Filtro Cautelar: 1. Proporcionalidad (la medida no puede exceder el doble de la deuda más intereses - Art. 838 E.T.); 2. Inembargabilidad legal (cuentas de pensiones, depósitos de nómina protegidos por ley y bienes de uso público).",
    formula: "Medida Cautelar Válida = Límite Cuantitativo (Art. 838 E.T.) + Respeto a Bienes Inembargables",
    puntosClave: [
      "Los embargos bancarios en cobro coactivo no pueden superar el límite legal fijado por ley.",
      "Las cuentas de ahorro con montos protegidos por el límite legal de inembargabilidad no se tocan.",
      "La aprehensión aduanera recae exclusivamente sobre la mercancía no amparada, no sobre la legal."
    ],
    ejercicio: {
      pregunta: "En un proceso de cobro coactivo por una obligación tributaria de 50 UVT, el ejecutor fiscal debe decretar medidas cautelares sobre las cuentas bancarias del deudor persona natural. ¿Cuál medida es jurídicamente procedente?",
      opciones: [
        "A. Decretar el embargo indiscriminado y total de todas las cuentas bancarias sin límite de cuantía.",
        "B. Decretar el embargo limitando la medida al monto de la deuda más intereses y costas, respetando los montos legales inembargables en cuentas de ahorro.",
        "C. Congelar de plano los salarios del trabajador sin notificación a la entidad bancaria."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Abuso de poder y desproporcionalidad: El embargo sin límite de cuantía es ilegal y susceptible de revocatoria directa.",
        "✅ ¡Doble Filtro Aplicado! La medida debe fijar un límite cuantitativo estricto y respetar las sumas inembargables de cuentas de ahorro fijadas por la Superintendencia Financiera.",
        "❌ Ilegalidad manifiesta: Los salarios gozan de protección constitucional y legal contra embargos coactivos no autorizados."
      ]
    }
  },
  {
    id: "lc_12",
    numero: 12,
    titulo: "Filtro Temporal: Caducidad vs. Prescripción Forense",
    regla: "Caducidad extingue la facultad de sancionar/liquidar; Prescripción extingue la acción de cobro.",
    resumen: "Una confusión clásica que cuesta puntos en el examen es mezclar la firmeza/caducidad con la prescripción: La Caducidad opera ANTES del acto en firme (es el tiempo máximo que tiene la DIAN para proferir el requerimiento especial o liquidación oficial; si no lo hace en término, la declaración queda en firme). La Prescripción opera DESPUÉS del acto en firme (es el término de 5 años que tiene la DIAN para cobrar coactivamente la obligación ya ejecutoriada - Art. 817 E.T.). Identifica en qué momento procesal está el caso: ¿Se está discutiendo la deuda o ya se está cobrando?",
    formula: "Antes del título en firme = Caducidad / Firmeza // Después del título en firme = Prescripción de Cobro (5 años)",
    puntosClave: [
      "¿El acto está en firme? Si NO: estás evaluando firmeza de la declaración o caducidad sancionatoria.",
      "¿El acto ya es título ejecutivo ejecutoriado? Si SÍ: estás evaluando prescripción de la acción de cobro (Art. 817 E.T.).",
      "La prescripción del cobro se interrumpe con la notificación del mandamiento de pago."
    ],
    ejercicio: {
      pregunta: "Un contribuyente presentó su declaración de renta del año gravable 2018 con beneficio de auditoría y quedó en firme en 2019. En 2024 la DIAN le notifica un requerimiento especial pretendiendo modificar el impuesto a cargo. ¿Qué excepción procesal ampara al contribuyente?",
      opciones: [
        "A. Prescripción de la acción de cobro coactivo de 5 años.",
        "B. Pérdida de competencia por firmeza definitiva de la declaración (caducidad de la facultad de fiscalización).",
        "C. Silencio administrativo negativo sobre la fiscalización."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Confusión conceptual: La prescripción solo aplica a títulos ejecutivos en cobro, no a facultades de liquidación y revisión previa.",
        "✅ ¡Precisión Forense! Al operar la firmeza legal de la declaración, la DIAN pierde de forma definitiva e improrrogable la competencia para revisar o modificar la liquidación privada.",
        "❌ Distractor: El silencio administrativo no rige la pérdida de competencia temporal por firmeza."
      ]
    }
  },
  {
    id: "lc_13",
    numero: 13,
    titulo: "Debido Proceso Probatorio: Prueba Conducente vs. Prueba Ilícita",
    regla: "Es nula de pleno derecho la prueba obtenida con violación del debido proceso (Art. 29 C.P.).",
    resumen: "En fiscalizaciones tributarias y aduaneras, las pruebas deben ser legales, conducentes, pertinentes y útiles, recaudadas con oportunidad de contradicción. En los casos de la CNSC aparecen situaciones tentadoras: 'un hacker entrega archivos de la competencia', 'un exempleado resentido aporta chats privados sin orden de juez', o 'el auditor ingresa a un domicilio privado sin orden de registro'. El distractor induce a utilizar esa prueba porque 'demuestra claramente la evasión'. La respuesta correcta siempre rechaza la prueba ilícita o exige su exclusión procesal.",
    formula: "Prueba ilegal o sin cadena de custodia = Regla de Exclusión Probatoria (Art. 29 C.P.)",
    puntosClave: [
      "Ningún fin sancionatorio justifica el uso de pruebas ilícitas o clandestinas en la administración.",
      "Toda inspección contable o tributaria debe realizarse previa notificación de auto comisorio.",
      "El contribuyente tiene derecho inalienable a controvertir y objetar las pruebas aportadas al expediente."
    ],
    ejercicio: {
      pregunta: "Durante una investigación tributaria, un tercero anónimo aporta una memoria USB asegurando que contiene la contabilidad real paralela ('doble contabilidad') de una empresa, obtenida mediante hackeo a los servidores privados. ¿Cómo debe proceder el funcionario de fiscalización?",
      opciones: [
        "A. Incorporar de inmediato la USB como prueba reina e iniciar liquidación oficial de aforo con base en ella.",
        "B. Desestimar la prueba por ilicitud manifiesta en su obtención (violación al debido proceso y reserva de datos) y practicar pruebas formales directas legalmente autorizadas.",
        "C. Filtrar los archivos a la prensa para que el contribuyente sienta presión social y confiese la evasión."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Nulidad absoluta: Los actos fundamentados en pruebas ilícitas (fruto del árbol envenenado) son nulos de pleno derecho ante la jurisdicción contenciosa.",
        "✅ ¡Postura Constitucional! La prueba obtenida con vulneración de derechos fundamentales no puede sustentar actuaciones administrativas; la DIAN debe recaudar su propio acervo probatorio formal con apego a la ley.",
        "❌ Delito y falta disciplinaria gravísima: Violar la reserva tributaria y filtrar datos a medios acarrearía destitución inmediata."
      ]
    }
  },
  {
    id: "lc_14",
    numero: 14,
    titulo: "Triangulación Ética MIPG: Conflicto de Interés vs. Diligencia",
    regla: "Ante conflicto de interés, el deber ético no es callar ni resolver: es declarar el impedimento formal.",
    resumen: "En las pruebas de juicio situacional para la carrera DIAN, los dilemas éticos son altamente valorados por el Modelo Integrado de Planeación y Gestión (MIPG) y el Código de Integridad. Las situaciones típicas involucran: presión de un superior jerárquico para beneficiar a un amigo, fiscalización a una empresa donde trabaja un pariente, o recepción de atenciones/regalos de usuarios. Los distractores proponen: 1. Obedecer sumisamente ('por obediencia jerárquica'); 2. Pelear o publicar en redes; 3. Hacerse el desentendido. La clave oficial siempre es la vía institucional: declararse impedido por escrito ante el superior inmediato (Art. 11 CPACA y Ley 1952 de 2019).",
    formula: "Parentesco / Interés particular = Deber de Impedimento Motivado Inmediato por Escrito",
    puntosClave: [
      "El conflicto de intereses no es una falta en sí; la falta es NO declararse impedido a tiempo.",
      "La obediencia jerárquica jamás justifica cometer un acto ilegal o manifiestamente contrario a la Constitución.",
      "El servidor de la DIAN responde con el conducto regular: radicación escrita motivada con copia al expediente."
    ],
    ejercicio: {
      pregunta: "A un Gestor de Fiscalización se le asigna por reparto el expediente de auditoría de una sociedad comercial donde su hermano es el socio mayoritario y representante legal. ¿Cuál es la actuación transparente y legal exigida por el Código de Integridad y el CPACA?",
      opciones: [
        "A. Continuar con la auditoría aplicando el máximo rigor posible para demostrar que no favorece a su familiar.",
        "B. Radicar formalmente manifestación de impedimento por escrito ante su superior inmediato, explicando la causal de parentesco para que se reasigne el caso.",
        "C. Abstenerse de actuar en silencio y archivar el expediente de forma encubierta para proteger a la familia."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Trampa de falso heroísmo: Por más riguroso que sea el funcionario, el conflicto de interés objetivo existe por ley y vicia de nulidad cualquier actuación que suscriba.",
        "✅ ¡Conducta Ética Ejemplar! El Art. 11 del CPACA obliga al servidor público a manifestar el impedimento dentro de los 3 días siguientes al conocimiento de la causal. El superior designará un funcionario ad-hoc.",
        "❌ Delito de prevaricato por omisión y falta disciplinaria gravísima de ocultamiento."
      ]
    }
  },
  {
    id: "lc_15",
    numero: 15,
    titulo: "Bloque de Constitucionalidad: Primacía de Tratados de DD.HH.",
    regla: "Los tratados de DD.HH. y garantías constitucionales prevalecen sobre directrices o circulares (Art. 93 C.P.).",
    resumen: "Cuando un caso plantee contradicción entre una directriz, memorando interno o circular de la DIAN y un derecho fundamental o garantía procesal (Art. 29 C.P. o Convención Americana), la opción correcta jamás valida vulnerar el derecho fundamental para 'cumplir metas de recaudo'. Las directrices operativas no pueden modificar el orden constitucional.",
    formula: "Tratados de DD.HH. / Art. 93 C.P. > Ley > Decretos > Circulares e Instructivos Internos",
    puntosClave: [
      "Una circular o memorando interno jamás puede suspender términos legales ni vulnerar el debido proceso.",
      "El derecho a la defensa y contradicción prima sobre directrices de celeridad o metas de fiscalización.",
      "Desconfía de opciones que justifiquen irregularidades procesales escudándose en órdenes verbales de superiores."
    ],
    ejercicio: {
      pregunta: "Una circular interna de una seccional de la DIAN instruye omitir el intento de notificación personal y electrónica para notificar directamente por aviso en portal web a fin de cerrar el trimestre con metas cumplidas. Frente a una liquidación de revisión notificada así, ¿cuál es la validez de dicha actuación?",
      opciones: [
        "A. Válida, porque las circulares internas son de obligatorio cumplimiento jerárquico dentro de la entidad.",
        "B. Nula por violación al debido proceso constitucional, pues las circulares no pueden modificar el régimen legal y preferente de notificación.",
        "C. Válida únicamente si el contribuyente no presenta reclamo dentro de las siguientes 24 horas."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Violación jerárquica: Ningún instructivo interno administrativo puede derogar el procedimiento legal de notificación del Estatuto Tributario.",
        "✅ ¡Primacía Constitucional! El debido proceso (Art. 29 C.P.) y las normas legales de notificación priman absolutamente sobre cualquier directriz operativa o meta de gestión.",
        "❌ Distractor: Las nulidades por violación del núcleo esencial de garantías procesales no se convalidan en 24 horas."
      ]
    }
  },
  {
    id: "lc_16",
    numero: 16,
    titulo: "Detector de Causal de Nulidad: Incompetencia y Falsa Motivación",
    regla: "La falta de competencia y la falta o falsa motivación vician de nulidad absoluta el acto administrativo (Art. 137 CPACA).",
    resumen: "En las pruebas de la CNSC abundan actos administrativos que parecen bien redactados pero carecen de motivación real (falsa motivación: los hechos invocados no existen o fueron falseados) o fueron proferidos por funcionarios sin competencia funcional delegada. La opción correcta siempre identifica el vicio de legalidad y exige sanearlo o revocar el acto en lugar de ejecutarlo de plano.",
    formula: "Acto Administrativo Válido = Competencia Legal Expresa + Motivación Fáctica y Jurídica Real y Probada",
    puntosClave: [
      "Falsa motivación: se alega un hecho inexistente en el expediente para sancionar al administrado.",
      "Incompetencia: el funcionario firma un acto reservado por ley o delegación a otra autoridad.",
      "Todo acto administrativo definitivo debe expresar con claridad los motivos de hecho y de derecho que lo fundamentan."
    ],
    ejercicio: {
      pregunta: "La DIAN profiere una resolución sancionatoria contra una empresa manifestando que no dio respuesta a un requerimiento de información. En el expediente reposa copia auténtica del radicado de respuesta entregado dentro del término legal con su sello digital. ¿Qué causal de nulidad vicia la resolución?",
      opciones: [
        "A. Incompetencia territorial del auditor tributario.",
        "B. Nulidad por falsa motivación, al fundamentarse en un supuesto de hecho contrariado por la prueba documental del expediente.",
        "C. Silencio administrativo positivo por error material involuntario."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Causal equivocada: La falta de radicación alegada no es un tema territorial, sino de veracidad fáctica de la motivación.",
        "✅ ¡Causal Exacta! Existe falsa motivación cuando el fundamento fáctico en que se apoya la administración es contrario a la realidad probada en el expediente (Art. 137 CPACA).",
        "❌ Distractor: El silencio positivo solo opera con norma expresa taxativa y no ante actos expresos con falsa motivación."
      ]
    }
  },
  {
    id: "lc_17",
    numero: 17,
    titulo: "Cómputo Forense del Tiempo: Días Hábiles vs. Calendario y Meses",
    regla: "Los plazos en días fijados en la ley procesal administrativa son hábiles (Art. 68 CPACA y Art. 118 CGP), salvo norma expresa.",
    resumen: "Gran cantidad de preguntas situacionales se definen por saber contar términos: 1. Los plazos en DÍAS en actuaciones administrativas tributarias son HÁBILES (excluyen sábados, domingos y festivos), salvo que la norma diga expresamente 'días calendario'. 2. Si el último día es inhábil, vence el primer día hábil siguiente. 3. Los plazos en MESES o AÑOS se computan en el calendario de fecha a fecha (ej. de 15 de marzo a 15 de abril).",
    formula: "Plazo en Días = Hábiles (sin festivos ni fines de semana) // Plazo en Meses/Años = De fecha a fecha",
    puntosClave: [
      "El término de 15 días para responder requerimiento especial se cuenta en días hábiles.",
      "El término de 3 meses para interponer recurso de reconsideración es en meses calendario de fecha a fecha.",
      "El día inicial de la notificación no se cuenta; el término empieza a correr a partir del día siguiente."
    ],
    ejercicio: {
      pregunta: "Un contribuyente recibe notificación electrónica formal de un requerimiento ordinario el viernes 5 de abril. La norma le concede 5 días hábiles para responder. Si el sábado y domingo son inhábiles y no hay festivos intermedios, ¿cuál es el día límite exacto de respuesta?",
      opciones: [
        "A. El miércoles 10 de abril al finalizar la jornada laboral.",
        "B. El viernes 12 de abril al finalizar la jornada legal.",
        "C. El lunes 8 de abril por contar de corrido los fines de semana."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Conteo incorrecto: Incluyó erróneamente sábado y domingo en un término fijado en días hábiles.",
        "✅ ¡Cómputo Forense Impecable! Notificado el viernes 5: día 1 (lunes 8), día 2 (martes 9), día 3 (miércoles 10), día 4 (jueves 11) y día 5 (viernes 12 de abril).",
        "❌ Distractor: Los fines de semana no se cuentan en plazos de días hábiles del procedimiento tributario."
      ]
    }
  },
  {
    id: "lc_18",
    numero: 18,
    titulo: "Filtro del Título Ejecutivo: Claro, Expreso y Exigible",
    regla: "No hay cobro coactivo sin título ejecutivo idóneo que conste en documento ejecutoriado (Art. 828 E.T.).",
    resumen: "El cobro coactivo no se inicia por meras sospechas o actos en trámite. Requiere un título ejecutivo con tres condiciones inseparables: 1. Expreso (identificado con precisión en el texto); 2. Claro (sujetos deudor/acreedor y cuantía exacta determinada); 3. Exigible (con plazo vencido y sin recursos pendientes de fallo, es decir, debidamente ejecutoriado). Librar mandamiento de pago cuando el contribuyente tiene un recurso de reconsideración en trámite es causal de nulidad por falta de exigibilidad.",
    formula: "Título Ejecutivo Válido = Expreso + Claro + Exigible (Firmeza sin recursos pendientes)",
    puntosClave: [
      "Si un recurso está en trámite, el acto NO está ejecutoriado ni es exigible.",
      "Las liquidaciones privadas son título ejecutivo solo si se presentaron sin pago y no están suspendidas.",
      "Las excepciones contra el mandamiento de pago proceden por falta de título ejecutivo idóneo (Art. 831 E.T.)."
    ],
    ejercicio: {
      pregunta: "La división de Cobranzas de la DIAN libra mandamiento de pago contra un contribuyente con base en una Liquidación Oficial de Revisión sobre la cual se radicó oportunamente recurso de reconsideración que aún se encuentra pendiente de fallo. ¿Qué excepción legal debe prosperar?",
      opciones: [
        "A. Falta de exigibilidad del título ejecutivo, por encontrarse en trámite el recurso de reconsideración que impide la firmeza del acto.",
        "B. Prescripción de la acción ejecutiva por haber transcurrido más de 1 mes sin fallo.",
        "C. Ninguna, porque los actos de la DIAN se cobran de inmediato sin importar si fueron recurridos."
      ],
      correcta: 0,
      explicaciones: [
        "✅ ¡Acierto Procesal! Conforme al Art. 829 y 831 del Estatuto Tributario, el acto administrativo recurrido no está en firme ni es ejecutoriado; carece de exigibilidad para cobro coactivo.",
        "❌ Causal errónea: La prescripción del cobro es de 5 años y opera únicamente sobre obligaciones legalmente ejecutoriadas.",
        "❌ Violación al debido proceso: Los recursos legalmente interpuestos suspenden la ejecución del acto hasta su decisión expresa o silencio procesal."
      ]
    }
  },
  {
    id: "lc_19",
    numero: 19,
    titulo: "Filtro Anti-Contradicción: Coherencia entre Supuesto y Consecuencia",
    regla: "La conclusión procesal debe ser congruente con la gravedad probada de la falta en el supuesto fáctico.",
    resumen: "Un patrón frecuente en los distractores de la CNSC es construir opciones con 'doble faz': la primera parte de la frase suena técnica y garantista, pero en la segunda parte remata con una sanción desproporcionada, autoritaria o de plano (ej. 'solicitar aclaración motivada concediendo término de descargos y proceder de inmediato a la clausura definitiva del negocio sin esperar respuesta'). Lee siempre la opción completa hasta la última palabra para cazar incongruencias internas.",
    formula: "Premisa garantista + Desenlace desproporcionado o automático = 🚫 Distractor con Trampa Oculta",
    puntosClave: [
      "Nunca te quedes con la primera mitad de la opción: la trampa casi siempre se esconde al final.",
      "El principio de proporcionalidad exige equilibrio entre la falta y la sanción impuesta.",
      "Si la opción promete debido proceso pero ejecuta la sanción sin esperar el término, descártala."
    ],
    ejercicio: {
      pregunta: "Al auditar la facturación de un establecimiento de comercio, se detecta que no expidió factura electrónica en dos ventas menores. ¿Cuál de las siguientes opciones contiene una contradicción interna que debes descartar?",
      opciones: [
        "A. Notificar pliego de cargos otorgando 10 días para explicaciones y decretar simultáneamente la clausura inmediata e irrevocable del establecimiento.",
        "B. Notificar pliego de cargos otorgando el término legal de 10 días para que el contribuyente presente descargos con las pruebas pertinentes.",
        "C. Evaluar las explicaciones del contribuyente antes de definir si procede sanción de clausura o sanción pecuniaria."
      ],
      correcta: 0,
      explicaciones: [
        "✅ ¡Cazaste la Contradicción! Da el término de descargos pero al mismo tiempo clausura de inmediato de forma irrevocable: viola la lógica procesal y el debido proceso (Art. 657 E.T.).",
        "❌ Esta opción es coherente, legal y respeta el trámite ordinario sin contradicciones.",
        "❌ Esta opción es prudente y proporcionada conforme a la gradualidad sancionatoria."
      ]
    }
  },
  {
    id: "lc_20",
    numero: 20,
    titulo: "Principio de Favorabilidad: Retroactividad de la Ley Más Benigna",
    regla: "En materia sancionatoria, la ley permisiva o favorable prevalece y aplica de forma retroactiva (Art. 29 C.P. y Art. 640 E.T.).",
    resumen: "En el régimen sancionatorio tributario y aduanero de la DIAN opera el principio constitucional de favorabilidad: si una nueva ley o reforma reduce una sanción o suaviza un requisito antes de que la resolución sancionatoria quede en firme (o incluso en etapa de discusión), la administración tiene la obligación de aplicar la norma más favorable al contribuyente. El distractor típico afirma erróneamente que 'las leyes solo rigen hacia el futuro y la DIAN jamás puede rebajar sanciones vigentes al momento del hecho'.",
    formula: "Infracción anterior + Nueva ley con sanción menor antes de ejecutoria = Aplicación Favorable Obligatoria",
    puntosClave: [
      "La favorabilidad sancionatoria es un principio constitucional de aplicación inmediata.",
      "Aplica tanto en discusiones en sede administrativa como ante la jurisdicción contenciosa.",
      "El Art. 640 del Estatuto Tributario consagra la reducción de sanciones por no reincidencia y favorabilidad."
    ],
    ejercicio: {
      pregunta: "Un contribuyente incurrió en extemporaneidad en 2023 cuya sanción legal calculada era del 10% del impuesto. En 2024, antes de proferirse la resolución sancionatoria, entra en vigencia una reforma tributaria que reduce la sanción aplicable a ese caso al 5%. ¿Cómo debe liquidar la DIAN la sanción?",
      opciones: [
        "A. Al 10%, porque las normas tributarias se aplican estrictamente según la fecha en que ocurrió el hecho generador de la infracción sin excepción.",
        "B. Al 5%, en aplicación obligatoria del principio constitucional de favorabilidad que ampara el derecho sancionatorio administrativo.",
        "C. Promediando ambas tarifas al 7.5% por equidad procesal."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Desconoce el principio de favorabilidad del Art. 29 de la Constitución Política y Art. 640 del Estatuto Tributario.",
        "✅ ¡Postura Constitucional Sancionatoria! Por mandato superior, la ley permisiva o favorable rige retroactivamente sobre hechos no consolidados definitivamente en acto ejecutoriado.",
        "❌ Inexistente en derecho: La administración no puede inventar tarifas promedio no fijadas en la ley."
      ]
    }
  },
  {
    id: "lc_21",
    numero: 21,
    titulo: "Matriz de Congruencia Fáctica: Limítate Estrictamente al Expediente",
    regla: "La liquidación oficial o resolución sancionatoria debe limitarse a los hechos debatidos en el requerimiento previo (Art. 711 E.T.).",
    resumen: "El principio de congruencia fáctica (Art. 711 del Estatuto Tributario) impide a la DIAN modificar la causa petendi o incluir nuevos impuestos, hechos o periodos en la Liquidación Oficial de Revisión que no hayan sido incluidos expresamente en el Requerimiento Especial. En el examen de la CNSC se plantean casos donde el auditor 'aprovecha para cobrarle el IVA del periodo siguiente que descubrió de paso'. Toda opción que extienda la sanción o liquidación más allá de lo formalmente requerido es nula por vulneración del derecho a la defensa.",
    formula: "Hechos y Rubros en Liquidación Oficial ≤ Hechos y Rubros Notificados en Requerimiento Especial (Congruencia)",
    puntosClave: [
      "El Requerimiento Especial delimita de forma improrrogable el marco fáctico del debate tributario.",
      "Si la DIAN quiere modificar otros aspectos, debe proferir ampliación al requerimiento especial dentro del término legal.",
      "Toda liquidación que agregue glosas no contempladas en el requerimiento previo adolece de nulidad por incongruencia."
    ],
    ejercicio: {
      pregunta: "La DIAN notificó Requerimiento Especial a una sociedad cuestionando únicamente las deducciones por salarios del año 2022. En la Liquidación Oficial de Revisión, además de rechazar los salarios, rechaza las deducciones por depreciación de activos que nunca fueron mencionadas en el requerimiento. ¿Qué vicio afecta la liquidación oficial?",
      opciones: [
        "A. Violación al principio de congruencia (Art. 711 E.T.), al incorporar glosas que no fueron objeto del previo requerimiento especial.",
        "B. Caducidad automática de la totalidad del impuesto de renta del año 2022.",
        "C. Ninguno, porque el auditor tributario tiene facultades omnímodas de fiscalización integral en cualquier etapa."
      ],
      correcta: 0,
      explicaciones: [
        "✅ ¡Congruencia Forense! El Art. 711 del Estatuto Tributario exige correspondencia estricta entre el requerimiento especial y la liquidación de revisión; incluir rubros nuevos sin previo requerimiento vulnera el derecho a la defensa.",
        "❌ Distractor: La inclusión indebida vicia de nulidad la glosa no congruente, pero no caduca automáticamente todo el impuesto si los términos del requerimiento inicial se cumplieron.",
        "❌ Arbitrariedad: Las facultades de fiscalización están sujetas al principio de legalidad y al debido proceso reglado."
      ]
    }
  },
  {
    id: "lc_22",
    numero: 22,
    titulo: "Revocatoria Directa: Límite del Consentimiento Previo del Particular",
    regla: "Los actos particulares y favorables no se revocan sin consentimiento expreso y escrito (Art. 97 CPACA).",
    resumen: "Si la DIAN expide por error un acto administrativo que reconoce un saldo a favor, compensación o beneficio a un particular, la administración NO puede revocarlo unilateralmente de plano. Conforme al Art. 97 del CPACA, requiere el consentimiento previo, expreso y escrito del titular. Si el contribuyente no consiente la revocatoria, la entidad debe demandar su propio acto ante la Jurisdicción Contencioso Administrativa mediante el medio de control de lesividad.",
    formula: "Acto Favorable a Particular + Error DIAN = Consentimiento Escrito O Demanda de Lesividad (Nunca de plano)",
    puntosClave: [
      "La revocatoria de oficio sin consentimiento viola el principio de seguridad jurídica y derechos adquiridos.",
      "Única excepción sin consentimiento: si el acto se obtuvo por medios ilícitos penalmente comprobados.",
      "Si el administrado niega el consentimiento, la vía legal exclusiva es la demanda judicial de lesividad."
    ],
    ejercicio: {
      pregunta: "La DIAN profirió resolución que autorizó una devolución de saldos a favor por $80 millones a un declarante. Semanas después, un supervisor detecta un error de cálculo aritmético interno de la entidad y propone revocar unilateralmente y de plano la resolución para cobrar el dinero. ¿Cuál es el trámite legalmente exigido?",
      opciones: [
        "A. Expedir de plano y sin trámite la resolución de revocatoria directa e iniciar embargo bancario preventivo.",
        "B. Solicitar el consentimiento previo, expreso y escrito del titular del derecho; si lo niega, demandar el acto propio ante la jurisdicción contenciosa mediante acción de lesividad.",
        "C. Anular la resolución mediante oficio simple de trámite sin recurso alguno."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Vía de hecho arbitraria: La revocatoria unilateral de actos favorables sin consentimiento está expresamente prohibida por el Art. 97 del CPACA.",
        "✅ ¡Garantía de Legalidad! Los actos particulares y concretos requieren autorización escrita del interesado para su revocatoria; ante su negativa, la DIAN debe acudir al juez contencioso mediante acción de lesividad.",
        "❌ Violación procesal: Los actos creadores de derechos no se invalidan por simples oficios de trámite."
      ]
    }
  },
  {
    id: "lc_23",
    numero: 23,
    titulo: "Filtro Anti-Formulismo: Principio de Eficacia vs. Exceso Ritual",
    regla: "El derecho sustancial prevalece sobre las formas procesales intrascendentes (Art. 228 C.P. y Art. 3 CPACA).",
    resumen: "En las preguntas de juicio situacional, los redactores incluyen distractores que proponen 'rechazar de plano' recursos o peticiones por minucias intrascendentes (ej. 'no adjuntó la copia del poder que ya reposa en el expediente matriz', 'faltó numerar una página'). El Consejo de Estado y la Corte Constitucional prohíben el exceso ritual manifiesto. Si una solicitud contiene la información sustancial pero tiene un defecto formal menor, la conducta oficial es darle trámite o requerir subsanación en término legal, nunca rechazar in límine.",
    formula: "Derecho Sustancial > Formalismo Vacío // Requerir Subsanación > Rechazo Injustificado",
    puntosClave: [
      "El rechazo de plano solo procede por causales taxativas de ley (ej. extemporaneidad absoluta no subsanable).",
      "Los defectos de forma subsanables exigen otorgar plazo de subsanación de 10 días o 1 mes (Art. 17 CPACA).",
      "No se puede exigir al ciudadano documentos o requisitos que la misma entidad ya tiene en su custodia."
    ],
    ejercicio: {
      pregunta: "Un contribuyente radica oportunamente un recurso de reconsideración tributario. En el memorial omitió anexar el certificado de existencia y representación legal que ya reposa actualizado en el Registro Único Tributario (RUT) de la DIAN. ¿Cuál es la decisión correcta del funcionario sustanciador?",
      opciones: [
        "A. Proferir auto inadmisorio concediendo el término legal de un mes para subsanar el requisito formal, o verificarlo directamente en las bases oficiales institucionales.",
        "B. Rechazar de plano y en forma definitiva el recurso declarando ejecutoriada la liquidación oficial.",
        "C. Remitir el expediente al archivo definitivo por carencia de personería jurídica insanable."
      ],
      correcta: 0,
      explicaciones: [
        "✅ ¡Prevalencia Sustancial! Conforme al Estatuto Tributario y CPACA, los defectos de acreditación formal dan lugar a auto inadmisorio para subsanar dentro del mes siguiente, evitando el exceso ritual manifiesto.",
        "❌ Trampa de Exceso Ritual: Los requisitos formales subsanables no acarrean rechazo de plano definitivo sin oportunidad de subsanación.",
        "❌ Extralimitación: La falta de un certificado consultable en bases institucionales no extingue la personería sustantiva."
      ]
    }
  },
  {
    id: "lc_24",
    numero: 24,
    titulo: "Efecto Vinculante de Doctrinas y Respuestas a Consultas DIAN",
    regla: "Los conceptos oficiales vigentes de la DIAN obligan a sus funcionarios y protegen al administrado (Ley 2010 de 2019).",
    resumen: "Cuando un contribuyente liquida sus impuestos o adopta una postura tributaria amparado en un Concepto u Oficio Doctrinal emitido por la Dirección de Gestión Jurídica de la DIAN vigente para la época, el funcionario fiscalizador no puede sancionarlo por inexactitud ni tipificar mala fe. Conforme al Art. 131 de la Ley 2010 de 2019, la doctrina oficial es de obligatorio acatamiento para todos los servidores de la DIAN, y las actuaciones del ciudadano amparadas en ella están protegidas por la confianza legítima.",
    formula: "Concepto DIAN Vigente + Actuación del Contribuyente = Confianza Legítima (Exoneración de Sanción)",
    puntosClave: [
      "El funcionario no puede desconocer a su arbitrio la doctrina jurídica formal de la entidad.",
      "Los cambios doctrinales de la DIAN nunca aplican con retroactividad en perjuicio del administrado.",
      "El sustento en conceptos oficiales vigentes descarta la culpa o negligencia sancionable."
    ],
    ejercicio: {
      pregunta: "En una fiscalización por IVA, el auditor observa que una empresa aplicó una exención siguiendo al pie de la letra un Concepto oficial vigente expedido por la DIAN. El auditor considera personalmente que ese concepto es jurídicamente erróneo. ¿Cuál es su deber funcional?",
      opciones: [
        "A. Imponer la sanción por inexactitud del 100% desconociendo el concepto por criterio personal independiente.",
        "B. Respetar la doctrina oficial vigente de la DIAN que ampara al contribuyente y abstenerse de formular sanción por inexactitud con base en dicho criterio.",
        "C. Denunciar penalmente al representante legal de la empresa por acatar un concepto tributario cuestionable."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Infracción al principio de legalidad: Los conceptos doctrinales de la DIAN son obligatorios para los funcionarios de la entidad (Art. 131 Ley 2010 de 2019); el funcionario no puede inaplicarlos a su arbitrio.",
        "✅ ¡Confianza Legítima y Obligatoriedad Doctrinal! La actuación amparada en conceptos oficiales vigentes excluye la imposición de sanciones por inexactitud tributaria.",
        "❌ Absurdo jurídico: Acatar la doctrina de la propia entidad no constituye delito alguno."
      ]
    }
  },
  {
    id: "lc_25",
    numero: 25,
    titulo: "Detector de Desviación de Poder: Fin Público vs. Interés Viciado",
    regla: "Las facultades de fiscalización deben ejercerse exclusivamente para fines de interés público (Art. 137 CPACA).",
    resumen: "La desviación de poder se configura cuando una potestad legítima (por ejemplo, ordenar visitas de inspección aduanera, requerimientos o fiscalizaciones) se ejecuta persiguiendo fines personales, revanchas comerciales, retaliaciones políticas o presiones indebidas. En los casos situacionales de la CNSC, la respuesta correcta siempre descarta auditorías dirigidas por enemistad o interés privado y exige sujeción a las matrices objetivas de gestión del riesgo y perfiles analíticos de la DIAN.",
    formula: "Competencia Legal ejercida con móvil oculto particular = Desviación de Poder (Nulidad y Falta Gravísima)",
    puntosClave: [
      "La selección de investigados en la DIAN debe responder a criterios técnicos del Sistema de Gestión de Riesgos.",
      "Está prohibido usar la potestad pública para beneficios familiares, políticos o vendettas personales.",
      "La desviación de poder acarrea nulidad del acto administrativo y destitución disciplinaria."
    ],
    ejercicio: {
      pregunta: "Un funcionario de la División de Fiscalización solicita a su superior que se priorice una inspección tributaria a fondo sobre una microempresa vecina, motivado en un altercado particular por el pago de cuotas de administración del conjunto residencial donde vive. ¿Cómo califica jurídicamente esta actuación?",
      opciones: [
        "A. Un acto de celo institucional legítimo que debe ser respaldado por la jefatura.",
        "B. Una conducta constitutiva de desviación de poder y conflicto de interés que amerita investigación disciplinaria.",
        "C. Una actuación reglada normal amparada en las facultades discrecionales de fiscalización."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Error ético grave: Utilizar el aparato coercitivo del Estado para intereses privados es una falta disciplinaria gravísima.",
        "✅ ¡Desviación de Poder Detectada! Desviar las facultades públicas para fines de retaliación privada vicia la función pública y acarrea sanción disciplinaria y penal.",
        "❌ Distractor: Las facultades de fiscalización no son caprichosas ni de venganza particular; son eminentemente regladas y técnicas."
      ]
    }
  },
  {
    id: "lc_26",
    numero: 26,
    titulo: "Notificación por Conducta Concluyente: Convalidación Procesal",
    regla: "Si el interesado interpone recursos o manifiesta conocer el acto, se tiene por notificado (Art. 72 CPACA).",
    resumen: "Ocurre a menudo que una citación o notificación electrónica presentó fallas de envío o acuse de recibo. Sin embargo, el contribuyente acude a la entidad, solicita copias, radica descargos o presenta el recurso de reconsideración respectivo. La regla de conducta concluyente (Art. 72 CPACA) indica que la notificación defectuosa queda plenamente saneada y convalidada en la fecha de radicación del memorial del ciudadano. La opción que proponga 'anular todo y notificar de nuevo desde cero' desconoce la economía procesal.",
    formula: "Manifestación Formal o Recurso Radicado = Notificación Surtida por Conducta Concluyente",
    puntosClave: [
      "La conducta concluyente sanea los vicios de notificación sin necesidad de trámites repetitivos.",
      "El término para resolver o para recursos se computa a partir de la fecha de la manifestación expresa del interesado.",
      "Evita dilaciones injustificadas en la administración de justicia tributaria."
    ],
    ejercicio: {
      pregunta: "A una sociedad comercial no le llegó el correo electrónico con la liquidación oficial por una falla en el servidor. No obstante, el representante legal descarga el acto de la plataforma y radica memorial de reconsideración debidamente motivado dentro del mes siguiente. ¿Cómo opera la notificación de dicho acto?",
      opciones: [
        "A. La liquidación oficial es nula de pleno derecho y debe emitirse un nuevo requerimiento especial.",
        "B. Se tiene por legalmente notificada la sociedad por conducta concluyente desde la fecha en que radicó el recurso, dándose trámite al mismo.",
        "C. La DIAN debe rechazar el recurso y volver a enviar el correo electrónico original esperando 3 meses más."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Consecuencia desproporcionada: La falla formal en la remisión no invalida el acto sustantivo cuando el interesado ejerció oportunamente su defensa.",
        "✅ ¡Conducta Concluyente Perfecta! El Art. 72 del CPACA establece que la notificación se entiende surtida el día en que la parte manifieste conocer el acto o interponga recursos.",
        "❌ Violación al principio de celeridad y eficacia: Sería un desgaste innecesario repetir una notificación ya conocida y controvertida."
      ]
    }
  },
  {
    id: "lc_27",
    numero: 27,
    titulo: "Pérdida de Fuerza Ejecutoria: Decaimiento del Acto por el Tiempo",
    regla: "El acto administrativo pierde fuerza ejecutoria transcurridos 5 años sin cobro (Art. 91 CPACA y Art. 817 E.T.).",
    resumen: "La facultad de hacer cumplir un acto administrativo (su ejecutoriedad) no dura indefinidamente. El fenómeno del decaimiento o pérdida de fuerza ejecutoria opera principalmente cuando transcurren más de cinco (5) años desde que el acto quedó en firme sin que la administración haya realizado los actos coactivos o mandamiento de pago para hacerlo efectivo. Transcurrido ese plazo, el título pierde su carácter coercitivo y el funcionario ejecutor no puede librar embargos sobre actos que han perdido fuerza ejecutoria.",
    formula: "Acto en Firme + 5 Años de Inactividad de Cobro = Pérdida de Fuerza Ejecutoria (Inexigibilidad Sobreviniente)",
    puntosClave: [
      "El deudor puede alegar la pérdida de fuerza ejecutoria mediante excepción ante el mandamiento tardío.",
      "Diferencia: La nulidad es un vicio de nacimiento; el decaimiento es la pérdida de eficacia posterior por inacción.",
      "Previene abusos y garantiza la seguridad jurídica de los administrados frente a la desidia estatal."
    ],
    ejercicio: {
      pregunta: "Una resolución sancionatoria aduanera quedó ejecutoriada en enero de 2018. La administración nunca libró mandamiento de pago ni notificó interrupción alguna. En julio de 2024, la división de cobranzas pretende reactivar el cobro y decretar el embargo de las cuentas del deudor. ¿Qué causal procesal extinguió la potestad coactiva?",
      opciones: [
        "A. Pérdida de fuerza ejecutoria del acto administrativo por transcurso de más de 5 años sin ejecución coactiva (Art. 91 CPACA y prescripción del Art. 817 E.T.).",
        "B. Silencio administrativo positivo tácito.",
        "C. Nulidad por indebida representación procesal."
      ],
      correcta: 0,
      explicaciones: [
        "✅ ¡Firmeza del Tiempo! Transcurridos 5 años sin mandamiento de pago, el acto pierde fuerza ejecutoria (Art. 91 CPACA) y prescribe la acción de cobro tributario (Art. 817 E.T.). Las medidas cautelares son improcedentes.",
        "❌ Distractor: El silencio administrativo no rige la extinción de títulos ejecutivos inactivos.",
        "❌ Causal impertinente: No guarda relación con la extinción de la exigibilidad por el paso del tiempo."
      ]
    }
  },
  {
    id: "lc_28",
    numero: 28,
    titulo: "Confianza Legítima: Prohibición de Ir contra los Actos Propios",
    regla: "La administración no puede defraudar la buena fe objetiva generada en el ciudadano con sus actos previos (Art. 83 C.P.).",
    resumen: "En la doctrina constitucional (*venire contra factum proprium*), la administración pública debe mantener consistencia y estabilidad en sus actuaciones. Si la DIAN le indicó formalmente a un contribuyente mediante oficio que un mecanismo de pago o soporte documental era el idóneo para su caso, y el ciudadano actuó siguiendo exactamente esa instrucción, un nuevo funcionario no puede llegar meses después a desconocer la directriz y sancionarlo alegando 'que debió hacerlo de otra forma'. La buena fe y la confianza legítima protegen al administrado.",
    formula: "Instrucción Oficial Escrita Previa + Ciudadano Actúa de Buena Fe = Protección por Confianza Legítima (Sin Sanción)",
    puntosClave: [
      "Nadie puede ir válidamente en contra de sus propios actos precedentes vinculantes.",
      "Los cambios intempestivos de criterio administrativo deben prever periodos de transición razonables.",
      "El ciudadano que acata las directrices expresas de la autoridad no puede ser considerado infractor culpable."
    ],
    ejercicio: {
      pregunta: "Un importador consultó por escrito a la DIAN sobre el código arancelario de un producto innovador y la división competente le emitió oficio vinculante señalando la partida exacta. Al llegar el embarque, el inspector aduanero alega que ese oficio está mal expedido y pretende aprehender la mercancía por 'inexactitud en la partida arancelaria'. ¿Qué principio superior tutela al importador?",
      opciones: [
        "A. Principio de soberanía arancelaria unilateral de la aduana.",
        "B. Principio de buena fe y confianza legítima (prohibición de ir contra los actos propios), al haber actuado el importador bajo instrucción oficial previa de la autoridad.",
        "C. Ninguno, porque los oficios de la DIAN carecen de todo valor probatorio en puerto."
      ],
      correcta: 1,
      explicaciones: [
        "❌ Infracción constitucional: La discrecionalidad de los inspectores está supeditada a los actos formales de la propia entidad.",
        "✅ ¡Tutela Superior de Confianza Legítima! El ciudadano que obra guiado por una determinación previa de la administración goza de presunción de buena fe y no puede ser sancionado ni despojado de sus mercancías.",
        "❌ Falso: Las respuestas y clasificaciones oficiales de la entidad tienen plena fuerza jurídica y vinculante en sede de control aduanero."
      ]
    }
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
  setupDiaDModal();
  setupDashboardCalculator();
  setupAccountModal();
  setupOnboardingModal();
  setupMobileNotificationPrompt();
  setupInstallModal();
  await setupSoundToggleUI();
  await setupMobileBackgroundScheduler();

  updateEjeFilterOptions(AppState.activeProfileId);
  updateJobProfileUI();
  updateStreakUI();
  showPracticeCover();

  // Verificar si es la primera vez que se conecta para preguntar usuario y cargo a estudiar
  await checkFirstTimeOnboarding();

  // Sincronización Automática Silenciosa con https://simo.liverohoa.com (Progreso y Preguntas)
  const isOnboarded = await StorageManager.get("simo_onboarding_completed", false);
  if (isOnboarded && typeof CloudSync !== "undefined") {
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

// =========================================================================
// SimoFX: Motor de micro-animaciones (estilos inline + keyframes en sidepanel.css)
// =========================================================================
const SimoFX = {
  reduced() {
    return typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },

  _center(el) {
    if (!el || !el.getBoundingClientRect) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  },

  _layer(el, ms) {
    el.classList.add("simo-fx-layer");
    document.body.appendChild(el);
    setTimeout(() => el.remove(), ms);
    return el;
  },

  // Texto flotante tipo "+50 XP" que sube y se desvanece
  floatText(anchor, text, color = "#34d399") {
    if (this.reduced()) return;
    const { x, y } = this._center(anchor);
    const el = document.createElement("div");
    el.textContent = text;
    el.style.cssText = `position: fixed; left: ${x}px; top: ${y - 10}px; z-index: 100000; pointer-events: none; font-size: 18px; font-weight: 900; color: ${color}; text-shadow: 0 2px 10px rgba(0,0,0,0.6), 0 0 14px ${color}; animation: simoFloatUp 1.1s ease-out forwards; white-space: nowrap; font-family: inherit;`;
    this._layer(el, 1200);
  },

  // Explosión radial de emojis/partículas
  burst(anchor, emojis = ["✨", "⭐", "💫"], count = 14, spread = 110) {
    if (this.reduced()) return;
    const { x, y } = this._center(anchor);
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const dist = spread * (0.55 + Math.random() * 0.6);
      const size = 14 + Math.random() * 12;
      p.textContent = emojis[i % emojis.length];
      p.style.cssText = `position: fixed; left: ${x}px; top: ${y}px; z-index: 100000; pointer-events: none; font-size: ${size}px; --dx: ${Math.cos(angle) * dist}px; --dy: ${Math.sin(angle) * dist}px; --rot: ${Math.random() * 540 - 270}deg; animation: simoParticle ${0.7 + Math.random() * 0.5}s cubic-bezier(0.15, 0.8, 0.3, 1) forwards;`;
      this._layer(p, 1300);
    }
  },

  // Reproduce una animación CSS sobre un elemento existente
  play(el, animation) {
    if (!el || this.reduced()) return;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = animation;
    const clear = () => { el.style.animation = ""; el.removeEventListener("animationend", clear); };
    el.addEventListener("animationend", clear);
  },

  shake(el) { this.play(el, "simoShake 0.5s ease-in-out"); },
  pop(el) { this.play(el, "simoPop 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)"); },

  glow(el, color = "rgba(16, 185, 129, 0.7)") {
    if (!el) return;
    el.style.setProperty("--glow", color);
    this.play(el, "simoGlowRing 0.8s ease-out 2");
  },

  // La llama del header crece y gira al sumar racha
  flameBoost() {
    document.querySelectorAll(".duo-flame-icon").forEach((f) => {
      if (this.reduced()) return;
      f.style.display = "inline-block";
      f.style.animation = "none";
      void f.offsetWidth;
      f.style.animation = "simoFlameBoost 0.9s ease-out, simoFlamePulse 1.4s 0.9s infinite alternate";
    });
  },

  // Celebración a pantalla completa: trofeo que emerge + lluvia de emojis
  celebrate(icon = "🏆", title = "¡Logro desbloqueado!", subtitle = "", rain = ["🎉", "⭐", "✨", "🏅"]) {
    if (this.reduced()) return;
    const layer = document.createElement("div");
    layer.style.cssText = "position: fixed; inset: 0; z-index: 100001; pointer-events: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: radial-gradient(circle at center, rgba(245, 158, 11, 0.22) 0%, rgba(11, 17, 32, 0.55) 70%); animation: simoFadeInOut 2.6s ease forwards; overflow: hidden;";

    for (let i = 0; i < 34; i++) {
      const d = document.createElement("div");
      d.textContent = rain[i % rain.length];
      d.style.cssText = `position: absolute; top: 0; left: ${Math.random() * 100}%; font-size: ${14 + Math.random() * 18}px; --rot: ${Math.random() * 720 - 360}deg; animation: simoRainDrop ${1.6 + Math.random() * 1.2}s linear ${Math.random() * 0.8}s forwards; opacity: 0;`;
      layer.appendChild(d);
    }

    const trophy = document.createElement("div");
    trophy.textContent = icon;
    trophy.style.cssText = "font-size: 86px; animation: simoTrophyRise 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; filter: drop-shadow(0 0 30px rgba(250, 204, 21, 0.8));";
    layer.appendChild(trophy);

    const t = document.createElement("div");
    t.textContent = title;
    t.style.cssText = "font-size: 22px; font-weight: 900; text-align: center; padding: 0 20px; background: linear-gradient(90deg, #fde68a, #f59e0b, #fff7ed, #f59e0b, #fde68a); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: simoShine 2s linear infinite;";
    layer.appendChild(t);

    if (subtitle) {
      const s = document.createElement("div");
      s.textContent = subtitle;
      s.style.cssText = "font-size: 14px; font-weight: 700; color: #e2e8f0; text-align: center; padding: 0 24px; text-shadow: 0 2px 8px rgba(0,0,0,0.7);";
      layer.appendChild(s);
    }

    this._layer(layer, 2700);
  },

  // Latido del temporizador en los últimos segundos
  heartbeat(el) { this.play(el, "simoHeartbeat 0.6s ease-in-out"); }
};
if (typeof window !== "undefined") window.SimoFX = SimoFX;

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

  if (iconEl) {
    iconEl.textContent = icon;
    // Animación distinta según el rango alcanzado
    const rankAnimations = {
      "👑": "simoCrownSpin 1.8s ease-in-out infinite",
      "🎖️": "simoMedalSwing 1.4s ease-in-out infinite",
      "⚡": "simoZap 1.1s ease-in-out infinite",
      "🔥": "simoFlamePulse 1.2s infinite alternate"
    };
    iconEl.style.display = "inline-block";
    iconEl.style.animation = rankAnimations[icon] || rankAnimations["🔥"];
  }
  if (titleEl) titleEl.textContent = `¡Racha de ${count} Aciertos!`;
  if (rankEl) rankEl.textContent = rankTitle;
  if (msgEl) msgEl.textContent = motivationalMsg;
  if (countValEl) countValEl.textContent = count;
  if (pointsValEl) pointsValEl.textContent = xp;

  openModal(modal);

  setTimeout(() => launchConfetti(canvas), 100);
  setTimeout(() => SimoFX.burst(iconEl, count >= 10 ? ["👑", "⭐", "💎"] : ["🔥", "✨", "⚡"], 18, 140), 250);

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
  if (modalEl.id === "jobModal" && typeof populateJobModalForm === "function") {
    populateJobModalForm();
  }
  const card = modalEl.querySelector(".modal-card");
  if (card) card.scrollTop = 0;
  const body = modalEl.querySelector(".modal-body");
  if (body) body.scrollTop = 0;
  modalEl.scrollTop = 0;
  modalEl.style.display = "flex";
  requestAnimationFrame(() => {
    modalEl.classList.add("active");
  });
  document.body.classList.add("modal-open");
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("active");
  const anyActive = document.querySelector(".modal-overlay.active");
  if (!anyActive) {
    document.body.classList.remove("modal-open");
  }
  setTimeout(() => {
    if (!modalEl.classList.contains("active")) {
      modalEl.style.display = "";
    }
  }, 240);
}

function setupGlobalModals() {
  // Cierre intuitivo al tocar el fondo oscuro (backdrop click)
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        if (overlay.getAttribute("data-prevent-close") === "true") return;
        closeModal(overlay);
      }
    });
  });

  // Cierre rápido con tecla Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal-overlay.active");
      if (activeModal) {
        if (activeModal.getAttribute("data-prevent-close") === "true") return;
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

  // Definición de Navegación de Subvistas en el Cuerpo de Práctica
  let currentLecturaIndex = 0;

  window.showLecturaTip = function(indexOrMode = "current") {
    const list = typeof TIPS_LECTURA_CRITICA !== "undefined" ? TIPS_LECTURA_CRITICA : [];
    if (!list || list.length === 0) return;

    if (typeof indexOrMode === "number") {
      currentLecturaIndex = (indexOrMode + list.length) % list.length;
    } else if (indexOrMode === "next") {
      currentLecturaIndex = (currentLecturaIndex + 1) % list.length;
    } else if (indexOrMode === "random") {
      currentLecturaIndex = Math.floor(Math.random() * list.length);
    }

    const tip = list[currentLecturaIndex];
    if (!tip) return;

    const badgeEl = document.getElementById("lecturaTipBadge");
    const titleEl = document.getElementById("lecturaTipTitle");
    const normaEl = document.getElementById("lecturaTipNorma");
    const bodyEl = document.getElementById("lecturaTipBody");
    const bannerImg = document.getElementById("lecturaTipBannerImg");
    const bannerBadge = document.getElementById("lecturaTipBannerBadge");
    const extraContentEl = document.getElementById("lecturaTipExtraContent");

    if (badgeEl) {
      badgeEl.textContent = `Técnica ${currentLecturaIndex + 1} de ${list.length} • Lectura Crítica CNSC`;
    }
    if (titleEl) {
      titleEl.textContent = tip.titulo;
    }
    if (normaEl) {
      normaEl.textContent = `💡 ${tip.regla}`;
    }
    if (bannerImg) {
      bannerImg.src = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=720&h=240&q=80";
    }
    if (bannerBadge) {
      bannerBadge.textContent = "🎯 Desglose Forense & Comprensión de Casos";
    }

    if (bodyEl) {
      bodyEl.innerHTML = `
        <div style="font-size: 15px; color: #f8fafc; font-weight: 700; margin-bottom: 8px; line-height: 1.55;">
          ${tip.resumen}
        </div>
        <div style="font-size: 13px; color: #94a3b8; line-height: 1.5; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px; margin-top: 8px;">
          📌 <strong style="color: #38bdf8;">Regla de Oro en SIMO:</strong> ${tip.regla}
        </div>
      `;
    }

    if (extraContentEl && tip.ejercicio) {
      const ej = tip.ejercicio;
      const optionsHtml = ej.opciones.map((opt, oIdx) => `
        <button type="button" class="btn-lectura-exercise-opt" data-opt-idx="${oIdx}" style="text-align: left; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.3); padding: 10px 12px; border-radius: 8px; color: #e2e8f0; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; line-height: 1.45;">
          ${opt}
        </button>
      `).join("");

      const formulaHtml = tip.formula ? `
        <div style="background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.35); border-left: 4px solid #c084fc; border-radius: 8px; padding: 10px 14px; margin-bottom: 12px;">
          <div style="font-size: 11px; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.5px;">📐 Fórmula Mnemotécnica:</div>
          <div style="font-size: 13px; font-weight: 700; color: #fdf4ff; margin-top: 2px;">${tip.formula}</div>
        </div>
      ` : "";

      const puntosHtml = (tip.puntosClave && tip.puntosClave.length > 0) ? `
        <div style="background: rgba(11, 17, 32, 0.6); border-radius: 8px; padding: 10px 14px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.08);">
          <div style="font-size: 11px; font-weight: 800; color: #38bdf8; text-transform: uppercase; margin-bottom: 6px;">⚡ Claves de Aplicación Rápida:</div>
          ${tip.puntosClave.map(p => `<div style="font-size: 12px; color: #cbd5e1; line-height: 1.5; margin-bottom: 4px;">• ${p}</div>`).join("")}
        </div>
      ` : "";

      extraContentEl.innerHTML = `
        ${formulaHtml}
        ${puntosHtml}
        <div style="background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.7)); border: 1px solid rgba(56, 189, 248, 0.4); border-radius: 12px; padding: 16px; margin-top: 6px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="font-size: 14px; font-weight: 800; color: #38bdf8; display: flex; align-items: center; gap: 6px;">
              <span>🎯</span>
              <span>Ejercicio Práctico: Aplica esta Técnica</span>
            </div>
            <span style="font-size: 11px; font-weight: 700; color: #94a3b8; background: rgba(255,255,255,0.06); padding: 3px 8px; border-radius: 10px;">Caso Interactivo</span>
          </div>
          <div style="font-size: 13px; color: #f8fafc; font-weight: 700; line-height: 1.5; margin-bottom: 12px; background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 8px; border-left: 3px solid #38bdf8;">
            ${ej.pregunta}
          </div>
          <div id="lecturaExerciseOptions" style="display: flex; flex-direction: column; gap: 8px;">
            ${optionsHtml}
          </div>
          <div id="lecturaExerciseFeedback" style="display: none; margin-top: 12px; padding: 12px 14px; border-radius: 8px; font-size: 13px; line-height: 1.5;"></div>
        </div>
      `;

      // Event listeners para las opciones interactivas
      const optButtons = extraContentEl.querySelectorAll(".btn-lectura-exercise-opt");
      const fbBox = extraContentEl.querySelector("#lecturaExerciseFeedback");

      optButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const optIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
          const isCorrect = optIdx === ej.correcta;

          // Deshabilitar botones tras responder
          optButtons.forEach((b, bIdx) => {
            b.disabled = true;
            b.style.cursor = "default";
            if (bIdx === ej.correcta) {
              b.style.background = "rgba(34, 197, 94, 0.25)";
              b.style.borderColor = "#22c55e";
              b.style.color = "#86efac";
            } else if (bIdx === optIdx && !isCorrect) {
              b.style.background = "rgba(239, 68, 68, 0.25)";
              b.style.borderColor = "#ef4444";
              b.style.color = "#fca5a5";
            } else {
              b.style.opacity = "0.45";
            }
          });

          if (fbBox) {
            fbBox.style.display = "block";
            if (isCorrect) {
              fbBox.style.background = "rgba(34, 197, 94, 0.15)";
              fbBox.style.border = "1px solid rgba(34, 197, 94, 0.4)";
              fbBox.style.color = "#86efac";
              fbBox.innerHTML = `
                <div style="font-weight: 800; font-size: 14px; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                  <span>🎉</span> ¡ACIERTO FORENSE!
                </div>
                <div>${ej.explicaciones[optIdx]}</div>
              `;
              if (typeof SoundEffects !== "undefined" && typeof SoundEffects.playCorrect === "function") {
                SoundEffects.playCorrect();
              }
              SimoFX.burst(btn, ["🎯", "⭐", "🔍", "✨"], 16, 120);
              SimoFX.floatText(btn, "🎯 Acierto Forense", "#86efac");
              SimoFX.glow(btn, "rgba(34, 197, 94, 0.75)");
            } else {
              fbBox.style.background = "rgba(239, 68, 68, 0.15)";
              fbBox.style.border = "1px solid rgba(239, 68, 68, 0.4)";
              fbBox.style.color = "#fca5a5";
              fbBox.innerHTML = `
                <div style="font-weight: 800; font-size: 14px; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                  <span>🚨</span> TRAMPA DETECTADA
                </div>
                <div>${ej.explicaciones[optIdx]}</div>
                <button type="button" id="btnRetryLecturaExercise" style="margin-top: 10px; background: rgba(56, 189, 248, 0.18); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 6px; cursor: pointer;">
                  🔄 Reintentar Ejercicio
                </button>
              `;
              if (typeof SoundEffects !== "undefined" && typeof SoundEffects.playError === "function") {
                SoundEffects.playError();
              }
              SimoFX.shake(btn);
              SimoFX.floatText(btn, "🚨 ¡Trampa!", "#fca5a5");

              const retryBtn = fbBox.querySelector("#btnRetryLecturaExercise");
              if (retryBtn) {
                retryBtn.addEventListener("click", () => {
                  window.showLecturaTip(currentLecturaIndex);
                });
              }
            }
          }
        });
      });
    }
  };

  window.setPracticeSubView = function(view) {
    const vPractice = document.getElementById("subviewPractice");
    const vLectura = document.getElementById("subviewLecturaCritica");
    const vTipFlash = document.getElementById("subviewTipFlash");

    const btnP = document.getElementById("btnActionPractice");
    const btnL = document.getElementById("btnOpenLecturaModal");
    const btnT = document.getElementById("btnRandomTipFlash");

    if (vPractice) vPractice.style.display = view === "practice" ? "flex" : "none";
    if (vLectura) vLectura.style.display = view === "lectura" ? "flex" : "none";
    if (vTipFlash) vTipFlash.style.display = view === "tipFlash" ? "flex" : "none";

    if (btnP) btnP.classList.toggle("active", view === "practice");
    if (btnL) btnL.classList.toggle("active", view === "lectura");
    if (btnT) btnT.classList.toggle("active", view === "tipFlash");

    if (view === "tipFlash") {
      showRandomTipFlash({ forced: true });
    } else if (view === "lectura") {
      window.showLecturaTip("current");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Manejadores de Tip Flash en el Cuerpo
  const btnNextTipInModal = document.getElementById("btnNextTipFlashInModal");
  if (btnNextTipInModal) {
    btnNextTipInModal.addEventListener("click", () => {
      showRandomTipFlash({ forced: true });
    });
  }

  if (btnRandomFlash) {
    btnRandomFlash.addEventListener("click", () => {
      if (AppState.currentTab !== "practice") {
        switchTab("practice");
      }
      setPracticeSubView("tipFlash");
    });
  }

  const btnBackTip = document.getElementById("btnBackToPracticeFromTip");
  if (btnBackTip) {
    btnBackTip.addEventListener("click", () => setPracticeSubView("practice"));
  }

  if (btnClosePopup) {
    btnClosePopup.addEventListener("click", () => setPracticeSubView("practice"));
  }

  if (btnVerTodasDesdePopup) {
    btnVerTodasDesdePopup.addEventListener("click", () => {
      openModal(modal);
    });
  }

  // Manejadores de Lectura Crítica en el Cuerpo
  const btnOpenLectura = document.getElementById("btnOpenLecturaModal");
  const btnCloseLectura = document.getElementById("btnCloseLecturaModal");
  const btnBackLectura = document.getElementById("btnBackToPracticeFromLectura");
  const btnNextLectura = document.getElementById("btnNextLecturaTip");
  const btnVerTodasDesdeLectura = document.getElementById("btnVerTodasClavesDesdeLectura");

  if (btnOpenLectura) {
    btnOpenLectura.addEventListener("click", () => {
      if (AppState.currentTab !== "practice") {
        switchTab("practice");
      }
      setPracticeSubView("lectura");
    });
  }

  if (btnNextLectura) {
    btnNextLectura.addEventListener("click", () => {
      window.showLecturaTip("next");
    });
  }

  if (btnBackLectura) {
    btnBackLectura.addEventListener("click", () => setPracticeSubView("practice"));
  }

  if (btnCloseLectura) {
    btnCloseLectura.addEventListener("click", () => {
      const filterSelect = document.getElementById("selectEjeFilter");
      if (filterSelect) {
        filterSelect.value = "comprension_lectora";
        AppState.currentEjeFilter = "comprension_lectora";
      }
      setPracticeSubView("practice");
      if (typeof startPracticeSession === "function") {
        startPracticeSession();
      }
    });
  }

  if (btnVerTodasDesdeLectura) {
    btnVerTodasDesdeLectura.addEventListener("click", () => {
      openModal(modal);
      const filterComp = Array.from(filterBtns).find(b => b.getAttribute("data-cat") === "Comprensión Lectora");
      if (filterComp) filterComp.click();
    });
  }
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

  const container = document.getElementById("subviewTipFlash") || document.getElementById("popupTipFlashModal");
  if (!container) return;

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

  if (typeof SoundFX !== "undefined") SoundFX.playChime();
}

function checkOccasionalTipTrigger(origin = "general") {
  if (!AppState.autoTips.enabled) return;
  AppState.autoTips.questionsSinceLastTip += 1;

  // Cada 4 preguntas respondidas lanza un tip flash directamente en el cuerpo
  if (AppState.autoTips.questionsSinceLastTip >= AppState.autoTips.intervalQuestions) {
    AppState.autoTips.questionsSinceLastTip = 0;
    setTimeout(() => {
      const isAnyModalActive = document.querySelector(".modal-overlay.active");
      const isDrillRunning = typeof SpeedDrillState !== "undefined" && SpeedDrillState.timer !== null;
      if (!isAnyModalActive && !isDrillRunning) {
        showRandomTipFlash({ forced: true });
        if (typeof setPracticeSubView === "function" && AppState.currentTab === "practice") {
          setPracticeSubView("tipFlash");
        }
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

  const savedPracticeCorrect = await StorageManager.get("practiceCorrectIds_" + savedProfileId, []);
  AppState.practiceCorrectIds = Array.isArray(savedPracticeCorrect) ? savedPracticeCorrect : [];

  const savedPracticeStudied = await StorageManager.get("practiceStudiedIds_" + savedProfileId, []);
  const studiedSet = new Set(Array.isArray(savedPracticeStudied) ? savedPracticeStudied : []);
  AppState.practiceCorrectIds.forEach((id) => studiedSet.add(id));
  if (Array.isArray(AppState.srsCards)) {
    AppState.srsCards.forEach((c) => { if (c && c.id) studiedSet.add(c.id); });
  }
  AppState.practiceStudiedIds = Array.from(studiedSet);

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

  const hubVerbos = document.getElementById("hubCardVerbos");
  if (hubVerbos) {
    hubVerbos.addEventListener("click", () => {
      if (typeof window.openVerbosModal === "function") {
        window.openVerbosModal();
      } else {
        const btn = document.getElementById("btnOpenVerbosModal");
        if (btn) btn.click();
      }
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
      if (typeof populateJobModalForm === "function") populateJobModalForm();
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
  const btnSettingsOpenAccount = document.getElementById("btnOpenAccountModal");
  if (btnSettingsOpenAccount && modalSettings) {
    btnSettingsOpenAccount.addEventListener("click", () => {
      closeModal(modalSettings);
      if (typeof window.openAccountModal === "function") {
        window.openAccountModal();
      } else {
        const accModal = document.getElementById("accountModal");
        if (accModal) openModal(accModal);
      }
    });
  }
  const btnSettingsOpenInstall = document.getElementById("btnOpenInstallModal");
  if (btnSettingsOpenInstall && modalSettings) {
    btnSettingsOpenInstall.addEventListener("click", () => {
      closeModal(modalSettings);
      const installModal = document.getElementById("installModal");
      if (installModal) openModal(installModal);
    });
  }

  // Clic en el Chip de Perfil de la cabecera para abrir configuración del cargo
  const headerProfile = document.getElementById("btnHeaderProfile");
  if (headerProfile) {
    headerProfile.addEventListener("click", (e) => {
      if (e.target && e.target.id === "profileSwitcher") return;
      if (typeof populateJobModalForm === "function") populateJobModalForm();
      const jobModal = document.getElementById("jobModal");
      if (jobModal) openModal(jobModal);
    });
  }

  // Inicializar Decodificador de Verbos Rectores y Caza-Distractores
  if (typeof setupVerbosRectoresModule === "function") {
    setupVerbosRectoresModule();
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
    if (typeof setPracticeSubView === "function") {
      setPracticeSubView("practice");
    }
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
  if (tabName === "simulacro") renderSimulacroTab();

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

  StorageManager.get("practiceCorrectIds_" + profileId, []).then(async (saved) => {
    AppState.practiceCorrectIds = Array.isArray(saved) ? saved : [];
    const savedStudied = await StorageManager.get("practiceStudiedIds_" + profileId, []);
    const studiedSet = new Set(Array.isArray(savedStudied) ? savedStudied : []);
    AppState.practiceCorrectIds.forEach((id) => studiedSet.add(id));
    if (Array.isArray(AppState.srsCards)) {
      AppState.srsCards.forEach((c) => { if (c && c.id) studiedSet.add(c.id); });
    }
    AppState.practiceStudiedIds = Array.from(studiedSet);

    updateJobProfileUI();
    updateEjeFilterOptions(profileId);
    updateSelectedEjeProgressBar();
    loadNextPracticeQuestion();
  });

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

function getCleanFilterLabel(label) {
  if (!label) return "";
  return label
    .replace(/\s*\([^)]*casos?[^)]*\)/gi, "")
    .replace(/\s*\(\d+\)/g, "")
    .trim();
}

function getQuestionsForFilter(pool, filterId, profileId) {
  if (!pool || !Array.isArray(pool)) return [];
  if (!filterId || filterId === "todos" || filterId === "interleaving") {
    return pool;
  }
  return pool.filter((q) => {
    if (filterId === "misionalidad") {
      return q.ejeId === "misionalidad" || (profileId === "gestor_iii" && q.ejeId === "estructura_dian");
    }
    if (filterId === "estructura_dian") {
      return q.ejeId === "estructura_dian";
    }
    if (filterId === "control_interno_meci" || filterId === "control_interno") {
      return q.ejeId === "control_interno_meci" || q.ejeId === "control_interno" || q.ejeId === "mipg_control_interno";
    }
    if (filterId === "mipg_auditoria" || filterId === "mipg") {
      return q.ejeId === "mipg_auditoria" || q.ejeId === "mipg" || q.ejeId === "desempeno" || q.ejeId === "mipg_control_interno";
    }
    if (filterId === "normas_internacionales_auditoria") {
      return q.ejeId === "normas_internacionales_auditoria";
    }
    if (filterId === "gestion_riesgo") {
      return q.ejeId === "gestion_riesgo";
    }
    if (filterId === "auditoria_sistemas_tecnologia") {
      return q.ejeId === "auditoria_sistemas_tecnologia";
    }
    if (filterId === "fiscalidad_internacional") {
      return q.ejeId === "fiscalidad_internacional";
    }
    if (filterId === "principios_contabilidad_publica") {
      return q.ejeId === "principios_contabilidad_publica";
    }
    if (filterId === "contratacion_estatal" || filterId === "contratacion") {
      return q.ejeId === "contratacion_estatal" || q.ejeId === "contratacion";
    }
    if (filterId === "razonamiento_analitico" || filterId === "razonamiento") {
      return q.ejeId === "razonamiento_analitico" || q.ejeId === "razonamiento" || q.ejeId === "razonamiento_cuantitativo_logico";
    }
    // Comportamentales Nivel Profesional
    if (filterId === "adaptabilidad" || filterId === "adaptabilidad_n1") {
      return q.ejeId && q.ejeId.startsWith("adaptabilidad");
    }
    if (filterId === "comportamiento_etico" || filterId === "comportamiento_etico_n1_4") {
      return q.ejeId && q.ejeId.startsWith("comportamiento_etico");
    }
    if (filterId === "comunicacion_efectiva" || filterId === "comunicacion_efectiva_n1_3") {
      return q.ejeId && q.ejeId.startsWith("comunicacion_efectiva");
    }
    if (filterId === "orientacion_logro" || filterId === "orientacion_logro_n1_4") {
      return q.ejeId && q.ejeId.startsWith("orientacion_logro");
    }
    if (filterId === "orientacion_usuario" || filterId === "orientacion_usuario_n1") {
      return q.ejeId && q.ejeId.startsWith("orientacion_usuario");
    }
    if (filterId === "solucion_problemas" || filterId === "solucion_problemas_n4") {
      return q.ejeId && q.ejeId.startsWith("solucion_problemas");
    }
    if (filterId === "trabajo_equipo" || filterId === "trabajo_equipo_n1") {
      return q.ejeId && q.ejeId.startsWith("trabajo_equipo");
    }
    // Valores de Integridad
    if (filterId === "compromiso") return q.ejeId === "compromiso";
    if (filterId === "diligencia") return q.ejeId === "diligencia";
    if (filterId === "honestidad") return q.ejeId === "honestidad";
    if (filterId === "justicia") return q.ejeId === "justicia";
    if (filterId === "respeto") return q.ejeId === "respeto";
    if (filterId === "integridad") return q.ejeId === "integridad" || q.ejeId === "comportamental_integridad";

    if (filterId === "comprension_lectora") return q.ejeId === "comprension_lectora" || q.ejeId === "razonamiento";

    return q.ejeId === filterId;
  });
}

function updateSelectedEjeProgressBar() {
  const bar = document.getElementById("filterEjeProgressBar");
  const text = document.getElementById("filterEjeProgressText");
  const filterSelect = document.getElementById("selectEjeFilter");
  if (!bar || !text || !filterSelect) return;

  const currentFilter = filterSelect.value || AppState.currentEjeFilter || "todos";
  const currentProfileId = AppState.activeProfileId || "gestor_iii";
  let pool = null;
  if (typeof getQuestionsForProfile === "function") {
    pool = getQuestionsForProfile(currentProfileId);
  }
  if (!pool || pool.length === 0) {
    if (typeof window !== "undefined" && window.QUESTION_BANK && window.QUESTION_BANK.length > 0) {
      pool = window.QUESTION_BANK;
    } else if (typeof QUESTION_BANK !== "undefined" && Array.isArray(QUESTION_BANK) && QUESTION_BANK.length > 0) {
      pool = QUESTION_BANK;
    } else {
      pool = [];
    }
  }

  const matchingQuestions = getQuestionsForFilter(pool, currentFilter, currentProfileId);
  const total = matchingQuestions.length;

  const studiedSet = new Set(AppState.practiceStudiedIds || []);
  if (Array.isArray(AppState.practiceCorrectIds)) {
    AppState.practiceCorrectIds.forEach((id) => studiedSet.add(id));
  }
  const studiedCount = matchingQuestions.filter((q) => studiedSet.has(q.id)).length;
  const pct = total > 0 ? Math.round((studiedCount / total) * 100) : 0;

  bar.style.width = `${pct}%`;
  text.textContent = `${pct}% estudiado (${studiedCount}/${total})`;

  if (pct === 100) {
    bar.style.background = "linear-gradient(90deg, #10b981, #059669)";
    text.style.color = "#34d399";
    text.style.borderColor = "rgba(16, 185, 129, 0.45)";
    text.style.background = "rgba(16, 185, 129, 0.18)";
  } else if (pct > 0) {
    bar.style.background = "linear-gradient(90deg, #38bdf8, #10b981)";
    text.style.color = "#38bdf8";
    text.style.borderColor = "rgba(56, 189, 248, 0.35)";
    text.style.background = "rgba(56, 189, 248, 0.14)";
  } else {
    bar.style.background = "rgba(255, 255, 255, 0.1)";
    text.style.color = "#94a3b8";
    text.style.borderColor = "rgba(255, 255, 255, 0.12)";
    text.style.background = "rgba(255, 255, 255, 0.06)";
  }
}

function updateEjeFilterOptions(profileId) {
  const filterSelect = document.getElementById("selectEjeFilter");
  if (!filterSelect || typeof PROFILES_DATA === "undefined") return;
  const currentProfileId = profileId || AppState.activeProfileId || "gestor_iii";
  const profile = PROFILES_DATA[currentProfileId] || PROFILES_DATA.gestor_iii;
  if (!profile || !profile.filterOptions) return;

  const previousSelectedValue = filterSelect.value || AppState.currentEjeFilter || "todos";

  let pool = null;
  if (typeof getQuestionsForProfile === "function") {
    pool = getQuestionsForProfile(currentProfileId);
  }
  if (!pool || pool.length === 0) {
    if (typeof window !== "undefined" && window.QUESTION_BANK && window.QUESTION_BANK.length > 0) {
      pool = window.QUESTION_BANK;
    } else if (typeof QUESTION_BANK !== "undefined" && Array.isArray(QUESTION_BANK) && QUESTION_BANK.length > 0) {
      pool = QUESTION_BANK;
    } else {
      pool = [];
    }
  }

  const studiedSet = new Set(AppState.practiceStudiedIds || []);
  if (Array.isArray(AppState.practiceCorrectIds)) {
    AppState.practiceCorrectIds.forEach((id) => studiedSet.add(id));
  }

  filterSelect.innerHTML = "";
  let valueStillExists = false;

  profile.filterOptions.forEach((opt) => {
    const optionEl = document.createElement("option");
    optionEl.value = opt.id;

    const matchingQuestions = getQuestionsForFilter(pool, opt.id, currentProfileId);
    const totalCount = matchingQuestions.length;
    const studiedCount = matchingQuestions.filter((q) => studiedSet.has(q.id)).length;
    const percentage = totalCount > 0 ? Math.round((studiedCount / totalCount) * 100) : 0;

    const cleanLabel = getCleanFilterLabel(opt.label);

    let optionText = cleanLabel;
    if (totalCount > 0) {
      optionText = `${cleanLabel} (${percentage}% · ${studiedCount}/${totalCount})`;
    } else {
      optionText = `${cleanLabel} (0%)`;
    }

    optionEl.textContent = optionText;
    filterSelect.appendChild(optionEl);

    if (opt.id === previousSelectedValue) {
      valueStillExists = true;
    }
  });

  const finalValue = valueStillExists ? previousSelectedValue : "todos";
  AppState.currentEjeFilter = finalValue;
  filterSelect.value = finalValue;

  updateSelectedEjeProgressBar();
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
      if (typeof setPracticeSubView === "function") {
        setPracticeSubView("practice");
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
    updateSelectedEjeProgressBar();
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
    const filtered = getQuestionsForFilter(pool, filter, AppState.activeProfileId);
    if (filtered.length > 0) pool = filtered;
  }

  // Sistema Anti-Repetición Inteligente: Solo repite preguntas acertadas tras terminar las otras
  if (!AppState.practiceCorrectIds) {
    AppState.practiceCorrectIds = [];
  }
  const correctSet = new Set(AppState.practiceCorrectIds);
  let availableCandidates = pool.filter((q) => !correctSet.has(q.id));

  // Si ya se acertaron todas las preguntas del grupo seleccionado, reiniciar ciclo para este grupo
  if (availableCandidates.length === 0) {
    const poolIdSet = new Set(pool.map((q) => q.id));
    AppState.practiceCorrectIds = AppState.practiceCorrectIds.filter((id) => !poolIdSet.has(id));
    StorageManager.set("practiceCorrectIds_" + AppState.activeProfileId, AppState.practiceCorrectIds);
    availableCandidates = [...pool];

    const filterName = (filter && filter !== "todos" && filter !== "interleaving") ? `del eje seleccionado` : `de este cargo`;
    SimoFX.celebrate("🏆", "¡Ciclo de Casos Completado!", `${pool.length} casos situacionales dominados`, ["🎉", "⭐", "🏅", "✨"]);
    showCustomModal({
      title: "🎉 ¡Ciclo de Casos Completado!",
      message: `¡Extraordinario avance! Has acertado todos los ${pool.length} casos situacionales ${filterName}. Se ha reiniciado el ciclo para que continúes repasando y consolidando tu preparación para el examen.`,
      icon: "🏆"
    });
  }

  // Evitar repetir la misma pregunta que se acaba de responder si hay más de 1 opción disponible
  let candidates = availableCandidates;
  if (candidates.length > 1 && AppState.currentQuestion) {
    const diff = candidates.filter((q) => q.id !== AppState.currentQuestion.id);
    if (diff.length > 0) candidates = diff;
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const q = candidates[randomIndex];
  renderPracticeQuestion(q);
  updatePracticeProgressPill(pool.length, availableCandidates.length);
  updateSelectedEjeProgressBar();
}

function updatePracticeProgressPill(totalPoolCount, remainingCount) {
  const pill = document.getElementById("qBadgeProgressPill");
  if (!pill) return;
  const total = typeof totalPoolCount === "number" ? totalPoolCount : 0;
  const remaining = typeof remainingCount === "number" ? remainingCount : total;
  const completed = Math.max(0, total - remaining);

  if (total > 0) {
    pill.textContent = `🎯 ${completed}/${total} (${remaining} restantes)`;
    pill.style.display = "inline-flex";
  } else {
    pill.style.display = "none";
  }
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
  if (!AppState.practiceStudiedIds) AppState.practiceStudiedIds = [];
  if (!AppState.practiceStudiedIds.includes(q.id)) {
    AppState.practiceStudiedIds.push(q.id);
    StorageManager.set("practiceStudiedIds_" + AppState.activeProfileId, AppState.practiceStudiedIds);
  }

  if (isCorrect) {
    AppState.practiceSession.correctCount = (AppState.practiceSession.correctCount || 0) + 1;
    if (!AppState.practiceCorrectIds) AppState.practiceCorrectIds = [];
    if (!AppState.practiceCorrectIds.includes(q.id)) {
      AppState.practiceCorrectIds.push(q.id);
      StorageManager.set("practiceCorrectIds_" + AppState.activeProfileId, AppState.practiceCorrectIds);
    }
  }

  updateEjeFilterOptions(AppState.activeProfileId);
  updateSelectedEjeProgressBar();

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

  const selectedOptEl = document.querySelector(`.option-item[data-id="${selectedId}"]`);
  if (!isCorrect) {
    addToSrsQueue(q, "hard");
    AppState.sessionStreak = 0;
    if (typeof SoundFX !== "undefined") SoundFX.playIncorrect();
    SimoFX.shake(document.getElementById("practiceCardContainer"));
    SimoFX.floatText(selectedOptEl, "📚 A repasar", "#fca5a5");
  } else {
    AppState.sessionStreak = (AppState.sessionStreak || 0) + 1;
    SimoFX.burst(selectedOptEl, ["✨", "⭐", "💫", "✅"], 16, 120);
    SimoFX.floatText(selectedOptEl, `+${AppState.sessionStreak * 50} XP`, "#34d399");
    SimoFX.flameBoost();
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
  const inputQuickUser = document.getElementById("inputSettingsQuickUserId");
  const btnSaveQuickUser = document.getElementById("btnSaveQuickUser");

  window.openAccountModal = function() {
    const currentUid = (typeof CloudSync !== "undefined" && CloudSync.config && CloudSync.config.userId)
      ? CloudSync.config.userId
      : (localStorage.getItem("simo_aspirante_user") || "jcarlos");

    if (inputUser) inputUser.value = currentUid;
    if (inputQuickUser) inputQuickUser.value = currentUid;
    if (inputServer && typeof CloudSync !== "undefined" && CloudSync.config) {
      inputServer.value = CloudSync.config.serverUrl || "https://simo.liverohoa.com";
    }
    if (typeof CloudSync !== "undefined" && typeof CloudSync.updateStatusBadge === "function") {
      CloudSync.updateStatusBadge();
    }
    if (modal) openModal(modal);
  };

  const syncUserAcrossUI = (userId) => {
    const cleanId = (userId || "").trim().toLowerCase();
    if (!cleanId) return;

    if (inputUser) inputUser.value = cleanId;
    if (inputQuickUser) inputQuickUser.value = cleanId;

    const sub = document.getElementById("settingsAccountSub");
    if (sub) sub.textContent = `Aspirante: ${cleanId} • 🟢 Nube activa`;

    const cardUser = document.getElementById("accountCardUserDisplay");
    if (cardUser) cardUser.textContent = cleanId;

    try {
      localStorage.setItem("simo_aspirante_user", cleanId);
    } catch (e) {}
  };

  // Carga inicial de usuario en inputs
  if (typeof CloudSync !== "undefined") {
    CloudSync.init().then(() => {
      const uid = CloudSync.config.userId || "jcarlos";
      syncUserAcrossUI(uid);
      if (inputServer) inputServer.value = CloudSync.config.serverUrl || "https://simo.liverohoa.com";
      CloudSync.updateStatusBadge();
    }).catch(() => {
      const fallbackUser = localStorage.getItem("simo_aspirante_user") || "jcarlos";
      syncUserAcrossUI(fallbackUser);
    });
  } else {
    const fallbackUser = localStorage.getItem("simo_aspirante_user") || "jcarlos";
    syncUserAcrossUI(fallbackUser);
  }

  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
      const modalSettings = document.getElementById("appSettingsModal");
      if (modalSettings) closeModal(modalSettings);
      window.openAccountModal();
    });
  }

  const performSaveUser = async (targetUserId, targetServerUrl, sourceBtn) => {
    const rawUser = (targetUserId || "").trim().toLowerCase();
    if (!rawUser) {
      showCustomModal({
        title: "ID Requerido",
        message: "Por favor escribe tu nombre o ID de aspirante (ej: jcarlos).",
        icon: "⚠️"
      });
      return;
    }

    if (sourceBtn) {
      sourceBtn.textContent = "⏳ Guardando...";
      sourceBtn.disabled = true;
    }

    try {
      syncUserAcrossUI(rawUser);

      if (typeof CloudSync !== "undefined") {
        if (targetServerUrl) {
          CloudSync.config.serverUrl = targetServerUrl;
        }
        await CloudSync.login(rawUser);
      } else if (typeof StorageManager !== "undefined") {
        await StorageManager.set("cloudSyncConfig", { userId: rawUser });
      }

      if (modal && modal.classList.contains("active")) {
        closeModal(modal);
      }

      showCustomModal({
        title: "¡Usuario Guardado!",
        message: `Tu nombre de usuario se actualizó a "${rawUser}". Tu progreso y preguntas se sincronizan bajo esta cuenta.`,
        icon: "👤"
      });
    } catch (e) {
      console.warn("[CloudSync] Error guardando usuario:", e);
      if (modal && modal.classList.contains("active")) {
        closeModal(modal);
      }
    } finally {
      if (sourceBtn) {
        sourceBtn.textContent = sourceBtn.id === "btnSaveQuickUser" ? "💾 Guardar" : "💾 Guardar e Iniciar Sesión";
        sourceBtn.disabled = false;
      }
    }
  };

  if (btnSave) {
    btnSave.addEventListener("click", () => {
      const rawUser = inputUser ? inputUser.value : "jcarlos";
      const serverUrl = inputServer ? inputServer.value : "https://simo.liverohoa.com";
      performSaveUser(rawUser, serverUrl, btnSave);
    });
  }

  if (btnSaveQuickUser) {
    btnSaveQuickUser.addEventListener("click", () => {
      const rawUser = inputQuickUser ? inputQuickUser.value : "jcarlos";
      performSaveUser(rawUser, null, btnSaveQuickUser);
    });
  }

  if (btnCloseX) btnCloseX.addEventListener("click", () => closeModal(modal));
  if (btnClose) btnClose.addEventListener("click", () => closeModal(modal));

  if (btnManualSync && typeof CloudSync !== "undefined") {
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

// =========================================================================
// ASISTENTE DE BIENVENIDA Y REGISTRO INICIAL (USUARIO Y CARGO DIAN)
// =========================================================================
let onboardingSelectedProfile = "gestor_iii_ci";

function setupOnboardingModal() {
  const modal = document.getElementById("welcomeOnboardingModal");
  if (!modal) return;

  const inputUser = document.getElementById("onboardingInputUserId");
  const errorEl = document.getElementById("onboardingUserError");
  const cardGestorCI = document.getElementById("onboardingCardGestorCI");
  const cardGestor = document.getElementById("onboardingCardGestor");
  const cardAnalista = document.getElementById("onboardingCardAnalista");
  const checkGestorCI = document.getElementById("onboardingCheckGestorCI");
  const checkGestor = document.getElementById("onboardingCheckGestor");
  const checkAnalista = document.getElementById("onboardingCheckAnalista");
  const btnSubmit = document.getElementById("btnSubmitOnboarding");
  const btnCloseX = document.getElementById("btnCloseOnboardingModalX");
  const btnReopen = document.getElementById("btnReopenOnboarding");

  window.selectOnboardingProfile = function(profileId) {
    if (profileId === "analista_iv" || profileId === "gestor_iii" || profileId === "gestor_iii_ci") {
      onboardingSelectedProfile = profileId;
    } else if (profileId && profileId.includes("236872")) {
      onboardingSelectedProfile = "gestor_iii_ci";
    } else {
      onboardingSelectedProfile = "gestor_iii_ci";
    }

    // Reset all cards
    [cardGestorCI, cardGestor, cardAnalista].forEach(c => {
      if (c) {
        c.classList.remove("active");
        c.style.borderColor = "rgba(255, 255, 255, 0.12)";
        c.style.backgroundColor = "rgba(11, 17, 32, 0.6)";
      }
    });
    if (checkGestorCI) checkGestorCI.style.display = "none";
    if (checkGestor) checkGestor.style.display = "none";
    if (checkAnalista) checkAnalista.style.display = "none";

    if (onboardingSelectedProfile === "gestor_iii_ci") {
      if (cardGestorCI) {
        cardGestorCI.classList.add("active");
        cardGestorCI.style.borderColor = "#38bdf8";
        cardGestorCI.style.backgroundColor = "rgba(2, 132, 199, 0.18)";
      }
      if (checkGestorCI) checkGestorCI.style.display = "inline-block";
    } else if (onboardingSelectedProfile === "gestor_iii") {
      if (cardGestor) {
        cardGestor.classList.add("active");
        cardGestor.style.borderColor = "#38bdf8";
        cardGestor.style.backgroundColor = "rgba(2, 132, 199, 0.18)";
      }
      if (checkGestor) checkGestor.style.display = "inline-block";
    } else {
      if (cardAnalista) {
        cardAnalista.classList.add("active");
        cardAnalista.style.borderColor = "#38bdf8";
        cardAnalista.style.backgroundColor = "rgba(168, 85, 247, 0.18)";
      }
      if (checkAnalista) checkAnalista.style.display = "inline-block";
    }
  };

  if (cardGestorCI) {
    cardGestorCI.addEventListener("click", () => {
      window.selectOnboardingProfile("gestor_iii_ci");
    });
  }

  if (cardGestor) {
    cardGestor.addEventListener("click", () => {
      window.selectOnboardingProfile("gestor_iii");
    });
  }

  if (cardAnalista) {
    cardAnalista.addEventListener("click", () => {
      window.selectOnboardingProfile("analista_iv");
    });
  }

  if (inputUser) {
    inputUser.addEventListener("input", () => {
      if (errorEl && errorEl.style.display !== "none") {
        errorEl.style.display = "none";
      }
      inputUser.style.borderColor = "rgba(56, 189, 248, 0.4)";
    });

    inputUser.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (btnSubmit) btnSubmit.click();
      }
    });
  }

  if (btnCloseX) {
    btnCloseX.addEventListener("click", () => {
      closeModal(modal);
    });
  }

  window.openOnboardingModal = function({ isReopen = false } = {}) {
    if (!modal) return;

    if (isReopen) {
      modal.removeAttribute("data-prevent-close");
      if (btnCloseX) btnCloseX.style.display = "flex";
    } else {
      modal.setAttribute("data-prevent-close", "true");
      if (btnCloseX) btnCloseX.style.display = "none";
    }

    const currentUid = (typeof CloudSync !== "undefined" && CloudSync.config && CloudSync.config.userId && CloudSync.config.userId !== "jcarlos")
      ? CloudSync.config.userId
      : (localStorage.getItem("simo_aspirante_user") || "");

    if (inputUser) inputUser.value = currentUid;
    if (errorEl) errorEl.style.display = "none";

    const currentProf = AppState.activeProfileId || "gestor_iii";
    window.selectOnboardingProfile(currentProf);

    openModal(modal);
    setTimeout(() => {
      if (inputUser) inputUser.focus();
    }, 150);
  };

  if (btnReopen) {
    btnReopen.addEventListener("click", () => {
      const modalSettings = document.getElementById("appSettingsModal");
      if (modalSettings) closeModal(modalSettings);
      window.openOnboardingModal({ isReopen: true });
    });
  }

  if (btnSubmit) {
    btnSubmit.addEventListener("click", async () => {
      const rawUser = inputUser ? inputUser.value.trim().toLowerCase() : "";
      if (!rawUser) {
        if (errorEl) {
          errorEl.style.display = "block";
          errorEl.textContent = "⚠️ Por favor escribe tu nombre o identificador de aspirante.";
        }
        if (inputUser) {
          inputUser.style.borderColor = "#f87171";
          inputUser.focus();
        }
        return;
      }

      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span>⏳</span> Guardando tu perfil...`;

      try {
        // 1. Guardar bandera de onboarding completado
        await StorageManager.set("simo_onboarding_completed", true);
        try { localStorage.setItem("simo_onboarding_completed", "true"); } catch (e) {}

        // 2. Guardar usuario
        await StorageManager.set("simo_aspirante_user", rawUser);
        try { localStorage.setItem("simo_aspirante_user", rawUser); } catch (e) {}

        // 3. Sincronizar en CloudSync y UI
        if (typeof CloudSync !== "undefined") {
          CloudSync.config.userId = rawUser;
          await CloudSync.saveConfig(CloudSync.config);
        }

        const inputAcc = document.getElementById("inputAccountUserId");
        if (inputAcc) inputAcc.value = rawUser;
        const inputQuick = document.getElementById("inputSettingsQuickUserId");
        if (inputQuick) inputQuick.value = rawUser;
        const cardUser = document.getElementById("accountCardUserDisplay");
        if (cardUser) cardUser.textContent = rawUser;
        const sub = document.getElementById("settingsAccountSub");
        if (sub) sub.textContent = `Aspirante: ${rawUser} • 🟢 Conectado`;

        // 4. Aplicar el cargo seleccionado
        applyProfile(onboardingSelectedProfile, true, false);

        // 5. Cerrar modal de bienvenida
        modal.removeAttribute("data-prevent-close");
        closeModal(modal);

        // 6. Mensaje de bienvenida personalizado con Modal
        const profileData = (typeof PROFILES_DATA !== "undefined" && PROFILES_DATA[onboardingSelectedProfile])
          ? PROFILES_DATA[onboardingSelectedProfile]
          : { title: onboardingSelectedProfile };

        showCustomModal({
          title: `¡Bienvenido a Bordo, ${rawUser.toUpperCase()}! 🚀`,
          message: `Has quedado registrado exitosamente para preparar el cargo ${profileData.shortTitle || profileData.title} (OPEC ${profileData.opec || "2676"}). Se ha cargado tu banco de preguntas y tu ruta temática. ¡A por esa plaza en la DIAN!`,
          icon: "🎯"
        });

        // 7. Sincronización en la nube silenciosa
        if (typeof CloudSync !== "undefined") {
          CloudSync.syncAll().catch(() => {});
        }
      } catch (err) {
        console.error("[Onboarding] Error al guardar:", err);
      } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `<span>🚀</span> ¡Comenzar a Estudiar!`;
      }
    });
  }
}

async function checkFirstTimeOnboarding() {
  const isCompleted = await StorageManager.get("simo_onboarding_completed", false);
  const localCompleted = (function() {
    try { return localStorage.getItem("simo_onboarding_completed") === "true"; } catch (e) { return false; }
  })();

  if (!isCompleted && !localCompleted) {
    if (typeof window.openOnboardingModal === "function") {
      setTimeout(() => {
        window.openOnboardingModal({ isReopen: false });
      }, 400);
    }
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
  const selectMod = document.getElementById("selectCalcModality");

  if (!sliderFunc) return;

  [sliderFunc, sliderComp, sliderInteg, sliderAntec].forEach((slider) => {
    if (slider) slider.addEventListener("input", updateDashboardCalculator);
  });

  if (selectMod) {
    selectMod.addEventListener("change", updateDashboardCalculator);
  }

  updateDashboardCalculator();
}

function updateDashboardCalculator() {
  const sliderFunc = document.getElementById("sliderFunc");
  const sliderComp = document.getElementById("sliderComp");
  const sliderInteg = document.getElementById("sliderInteg");
  const sliderAntec = document.getElementById("sliderAntec");
  const selectMod = document.getElementById("selectCalcModality");

  if (!sliderFunc) return;

  // Modalidades Oficiales de la Convocatoria DIAN 2676 (Págs. 9-11 Guía de Orientación)
  const MODALITY_RULES = {
    ingreso_con_exp: { func: 0.65, comp: 0.15, integ: 0.10, antec: 0.10, antecActive: true },
    ingreso_sin_exp: { func: 0.70, comp: 0.20, integ: 0.10, antec: 0.00, antecActive: false },
    ascenso_con_exp: { func: 0.60, comp: 0.15, integ: 0.10, antec: 0.15, antecActive: true },
    ascenso_sin_exp: { func: 0.65, comp: 0.20, integ: 0.10, antec: 0.05, antecActive: true }
  };

  const selectedKey = selectMod ? selectMod.value : "ingreso_con_exp";
  const rules = MODALITY_RULES[selectedKey] || MODALITY_RULES.ingreso_con_exp;

  // Actualizar slider de Antecedentes si la modalidad no requiere experiencia
  const antecRow = sliderAntec ? sliderAntec.closest(".calc-row") : null;
  if (antecRow) {
    antecRow.style.opacity = rules.antecActive ? "1" : "0.35";
    antecRow.style.pointerEvents = rules.antecActive ? "auto" : "none";
  }

  const valFunc = parseFloat(sliderFunc.value) || 0;
  const valComp = parseFloat(sliderComp ? sliderComp.value : 80) || 0;
  const valInteg = parseFloat(sliderInteg ? sliderInteg.value : 85) || 0;
  const valAntec = rules.antecActive ? (parseFloat(sliderAntec ? sliderAntec.value : 70) || 0) : 0;

  const funcEl = document.getElementById("calcFuncVal");
  const compEl = document.getElementById("calcCompVal");
  const integEl = document.getElementById("calcIntegVal");
  const antecEl = document.getElementById("calcAntecVal");

  if (funcEl) funcEl.textContent = `${valFunc} pts (${Math.round(rules.func * 100)}%)`;
  if (compEl) compEl.textContent = `${valComp} pts (${Math.round(rules.comp * 100)}%)`;
  if (integEl) integEl.textContent = `${valInteg} pts (${Math.round(rules.integ * 100)}%)`;
  if (antecEl) antecEl.textContent = rules.antecActive ? `${valAntec} pts (${Math.round(rules.antec * 100)}%)` : "No aplica (0%)";

  const totalPonderado = (valFunc * rules.func) + (valComp * rules.comp) + (valInteg * rules.integ) + (valAntec * rules.antec);
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
      statusEl.textContent = `Supera el umbral eliminatorio con ${totalPonderado.toFixed(2)} pts ponderados totales.`;
      statusEl.style.color = "#34d399";
    } else {
      statusEl.textContent = `Atención: La prueba funcional exige mínimo 70.00 pts (tienes ${valFunc}). Al no aprobar, no se califican Comportamentales ni Integridad.`;
      statusEl.style.color = "#f87171";
    }
  }
}

// Función robusta de población del modal de cargo
function populateJobModalForm(forcedProfileId = null) {
  const profileId = forcedProfileId || AppState.activeProfileId || "gestor_iii";
  AppState._pendingProfileId = profileId;

  const defaultProfile = (typeof PROFILES_DATA !== "undefined" && PROFILES_DATA[profileId]) ? PROFILES_DATA[profileId] : null;
  let job = defaultProfile || {};
  if (!forcedProfileId && AppState.activeJob && AppState.activeJob.title) {
    // Si el activeJob coincide con el perfil seleccionado o no hay forzado, usarlo
    job = AppState.activeJob;
  }

  const inputTitle = document.getElementById("inputJobTitle");
  const inputOpec = document.getElementById("inputJobOpec");
  const selectLevel = document.getElementById("selectJobLevel");
  const inputEntity = document.getElementById("inputJobEntity");
  const inputPurpose = document.getElementById("inputJobPurpose");
  const inputFunctions = document.getElementById("inputJobFunctions");

  if (inputTitle) inputTitle.value = job.title || "";
  if (inputOpec) inputOpec.value = job.opec || "";
  if (selectLevel) selectLevel.value = job.level || "Profesional";
  if (inputEntity) inputEntity.value = job.entity || "";
  if (inputPurpose) inputPurpose.value = job.purpose || "";
  if (inputFunctions) {
    inputFunctions.value = Array.isArray(job.functions) ? job.functions.join("\n") : (job.functions || "");
  }

  // Resaltado visual de la tarjeta de perfil activa
  const btnQuickGestorCI = document.getElementById("btnQuickProfileGestorCI");
  const btnQuickGestor = document.getElementById("btnQuickProfileGestor");
  const btnQuickAnalista = document.getElementById("btnQuickProfileAnalista");
  const badgeGestorCI = document.getElementById("badgeActiveGestorCI");
  const badgeGestor = document.getElementById("badgeActiveGestor");
  const badgeAnalista = document.getElementById("badgeActiveAnalista");

  [btnQuickGestorCI, btnQuickGestor, btnQuickAnalista].forEach(b => {
    if (b) b.classList.remove("active");
  });
  if (badgeGestorCI) badgeGestorCI.style.display = "none";
  if (badgeGestor) badgeGestor.style.display = "none";
  if (badgeAnalista) badgeAnalista.style.display = "none";

  if (profileId === "gestor_iii_ci" || profileId === "gestor_iii_236872" || profileId === "236872") {
    if (btnQuickGestorCI) btnQuickGestorCI.classList.add("active");
    if (badgeGestorCI) badgeGestorCI.style.display = "inline-block";
  } else if (profileId === "gestor_iii") {
    if (btnQuickGestor) btnQuickGestor.classList.add("active");
    if (badgeGestor) badgeGestor.style.display = "inline-block";
  } else {
    if (btnQuickAnalista) btnQuickAnalista.classList.add("active");
    if (badgeAnalista) badgeAnalista.style.display = "inline-block";
  }

  // Renderizar dinámicamente los Ejes e Indicadores Oficiales a Evaluar en SIMO
  const ejesContainer = document.getElementById("jobModalEjesContainer");
  const countBadge = document.getElementById("jobModalEjesCountBadge");

  if (ejesContainer) {
    const rawOptions = (defaultProfile && Array.isArray(defaultProfile.filterOptions))
      ? defaultProfile.filterOptions
      : [];
    const activeFilters = rawOptions.filter(f => f && f.id !== "todos" && f.id !== "interleaving");

    if (countBadge) {
      countBadge.textContent = `${activeFilters.length} Indicadores Oficiales`;
    }

    if (activeFilters.length === 0) {
      ejesContainer.innerHTML = '<span style="font-size: 12px; color: #94a3b8; font-style: italic;">No hay ejes preconfigurados para este cargo.</span>';
    } else {
      ejesContainer.innerHTML = activeFilters.map(f => {
        const idLower = (f.id || "").toLowerCase();
        const isIntegridad = idLower.includes("integridad") || ["compromiso", "diligencia", "honestidad", "justicia", "respeto"].includes(idLower);
        const isComportamental = idLower.includes("comportament") || idLower.includes("adaptabilidad") || idLower.includes("etico") || idLower.includes("comunicacion") || idLower.includes("logro") || idLower.includes("usuario") || idLower.includes("solucion") || idLower.includes("trabajo_equipo");

        let borderCol = "rgba(56, 189, 248, 0.4)";
        let bgCol = "rgba(2, 132, 199, 0.15)";
        let textCol = "#e0f2fe";
        let tagType = "Funcional";

        if (isIntegridad) {
          borderCol = "rgba(245, 158, 11, 0.45)";
          bgCol = "rgba(245, 158, 11, 0.14)";
          textCol = "#fef3c7";
          tagType = "Integridad";
        } else if (isComportamental) {
          borderCol = "rgba(168, 85, 247, 0.45)";
          bgCol = "rgba(168, 85, 247, 0.14)";
          textCol = "#f3e8ff";
          tagType = "Comportamental";
        }

        return `<span title="Componente: ${tagType}" style="font-size: 11.5px; font-weight: 700; color: ${textCol}; background: ${bgCol}; border: 1px solid ${borderCol}; padding: 4px 10px; border-radius: 8px; display: inline-flex; align-items: center; gap: 5px; transition: transform 0.15s ease;">
          ${f.label}
        </span>`;
      }).join("");
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
    populateJobModalForm();
    openModal(modal);
  };

  const closeJobModal = () => closeModal(modal);

  if (btnOpen) btnOpen.addEventListener("click", openJobModal);
  if (btnCloseX) btnCloseX.addEventListener("click", closeJobModal);
  if (btnCancel) btnCancel.addEventListener("click", closeJobModal);

  // Selector Rápido de Perfiles Oficiales DIAN
  const btnQuickGestorCI = document.getElementById("btnQuickProfileGestorCI");
  const btnQuickGestor = document.getElementById("btnQuickProfileGestor");
  const btnQuickAnalista = document.getElementById("btnQuickProfileAnalista");

  if (btnQuickGestorCI) {
    btnQuickGestorCI.addEventListener("click", () => {
      populateJobModalForm("gestor_iii_ci");
    });
  }

  if (btnQuickGestor) {
    btnQuickGestor.addEventListener("click", () => {
      populateJobModalForm("gestor_iii");
    });
  }

  if (btnQuickAnalista) {
    btnQuickAnalista.addEventListener("click", () => {
      populateJobModalForm("analista_iv");
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const opec = document.getElementById("inputJobOpec").value.trim();
    const title = document.getElementById("inputJobTitle").value.trim();

    let targetProfileId = AppState._pendingProfileId;
    if (!targetProfileId) {
      if (opec.includes("236872") || title.toUpperCase().includes("CONTROL INTERNO") || title.toUpperCase().includes("AUDITORIA")) {
        targetProfileId = "gestor_iii_ci";
      } else if (opec.includes("236760") || title.toUpperCase().includes("ANALISTA")) {
        targetProfileId = "analista_iv";
      } else {
        targetProfileId = "gestor_iii_ci";
      }
    }

    applyProfile(targetProfileId, true, true);
    closeModal(modal);
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

// =========================================================================
// 4. MOTOR DE SIMULACRO REAL AREANDINA (DIAN 2676 - GUÍA OFICIAL)
// =========================================================================
const SimulacroState = {
  active: false,
  count: 15,
  mode: "optical", // "optical" | "classic"
  questions: [],
  currentIndex: 0,
  answers: {}, // { [index]: "A" | "B" | "C" }
  bookmarks: {}, // { [index]: true }
  timeLeft: 15 * 150, // 2.5 minutos por caso en segundos
  totalTime: 15 * 150,
  timerInterval: null,
  startTime: null,
  elapsedSeconds: 0,
  isReviewing: false,
  countdownInterval: null
};

// Cuenta regresiva oficial al Domingo 8 de Noviembre de 2026, 8:00 a.m. (Colombia GMT-5)
function initExamCountdown() {
  const update = () => {
    const examDate = new Date("2026-11-08T08:00:00-05:00");
    const now = new Date();
    const diff = examDate.getTime() - now.getTime();

    const dEl = document.getElementById("countdownDays");
    const hEl = document.getElementById("countdownHours");
    const mEl = document.getElementById("countdownMins");
    const sEl = document.getElementById("countdownSecs");

    if (!dEl || !hEl || !mEl || !sEl) return;

    if (diff <= 0) {
      dEl.textContent = "0";
      hEl.textContent = "00";
      mEl.textContent = "00";
      sEl.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    dEl.textContent = days.toString();
    hEl.textContent = hours.toString().padStart(2, "0");
    mEl.textContent = mins.toString().padStart(2, "0");
    sEl.textContent = secs.toString().padStart(2, "0");
  };

  update();
  if (SimulacroState.countdownInterval) clearInterval(SimulacroState.countdownInterval);
  SimulacroState.countdownInterval = setInterval(update, 1000);
}

function renderSimulacroTab() {
  initExamCountdown();
  if (!SimulacroState.active && !SimulacroState.isReviewing) {
    const setupView = document.getElementById("simulacroSetupView");
    const activeView = document.getElementById("simulacroActiveView");
    const resultView = document.getElementById("simulacroResultView");
    if (setupView) setupView.style.display = "flex";
    if (activeView) activeView.style.display = "none";
    if (resultView) resultView.style.display = "none";
  }
}

function setupSimulacroLogic() {
  initExamCountdown();

  // Selector de cantidad de preguntas
  [15, 30, 60].forEach((count) => {
    const btn = document.getElementById(`btnSimCount${count}`);
    if (btn) {
      btn.addEventListener("click", () => {
        SimulacroState.count = count;
        [15, 30, 60].forEach((c) => {
          const b = document.getElementById(`btnSimCount${c}`);
          if (b) {
            const isActive = c === count;
            b.classList.toggle("active", isActive);
            b.style.background = isActive ? "rgba(56, 189, 248, 0.15)" : "var(--bg-card)";
            b.style.borderColor = isActive ? "#38bdf8" : "var(--border-color)";
            b.style.color = isActive ? "#f8fafc" : "#cbd5e1";
          }
        });
      });
    }
  });

  // Selector de modo de respuesta (Hoja Óptica vs Digital Táctil)
  const btnOptical = document.getElementById("btnSimModeOptical");
  const btnClassic = document.getElementById("btnSimModeClassic");

  const updateModeButtons = (mode) => {
    SimulacroState.mode = mode;
    if (btnOptical) {
      const isOpt = mode === "optical";
      btnOptical.classList.toggle("active", isOpt);
      btnOptical.style.background = isOpt ? "rgba(245, 158, 11, 0.12)" : "var(--bg-card)";
      btnOptical.style.borderColor = isOpt ? "#f59e0b" : "var(--border-color)";
    }
    if (btnClassic) {
      const isClas = mode === "classic";
      btnClassic.classList.toggle("active", isClas);
      btnClassic.style.background = isClas ? "rgba(56, 189, 248, 0.15)" : "var(--bg-card)";
      btnClassic.style.borderColor = isClas ? "#38bdf8" : "var(--border-color)";
    }
  };

  if (btnOptical) btnOptical.addEventListener("click", () => updateModeButtons("optical"));
  if (btnClassic) btnClassic.addEventListener("click", () => updateModeButtons("classic"));

  // Botón Iniciar Simulacro
  const btnStart = document.getElementById("btnStartSimulacro");
  if (btnStart) btnStart.addEventListener("click", startSimulacro);

  // Botón toggle mapa de preguntas
  const btnToggleMap = document.getElementById("btnToggleSimGrid");
  const bubbleMap = document.getElementById("simBubbleMap");
  if (btnToggleMap && bubbleMap) {
    btnToggleMap.addEventListener("click", () => {
      const isHidden = bubbleMap.style.display === "none";
      bubbleMap.style.display = isHidden ? "grid" : "none";
      btnToggleMap.textContent = isHidden ? "✕ Ocultar" : "🗺️ Mapa";
    });
  }

  // Botón entregar simulacro anticipadamente
  const btnFinish = document.getElementById("btnFinishSimulacroEarly");
  if (btnFinish) {
    btnFinish.addEventListener("click", () => {
      const answeredCount = Object.keys(SimulacroState.answers).length;
      const total = SimulacroState.questions.length;
      showCustomModal({
        title: "¿Entregar examen ahora?",
        message: `Has respondido ${answeredCount} de ${total} casos. ¿Deseas calificar tu prueba y ver el diagnóstico oficial?`,
        icon: "📋",
        showCancel: true,
        okText: "Sí, Calificar",
        cancelText: "Continuar Examen",
        onOk: () => finishSimulacro(true)
      });
    });
  }

  // Navegación Anterior / Siguiente
  const btnPrev = document.getElementById("btnPrevSimQuestion");
  const btnNext = document.getElementById("btnNextSimQuestion");

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (SimulacroState.currentIndex > 0) {
        SimulacroState.currentIndex--;
        renderSimulacroQuestion();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (SimulacroState.currentIndex < SimulacroState.questions.length - 1) {
        SimulacroState.currentIndex++;
        renderSimulacroQuestion();
      } else {
        const answeredCount = Object.keys(SimulacroState.answers).length;
        const total = SimulacroState.questions.length;
        showCustomModal({
          title: "¡Llegaste a la última pregunta!",
          message: `Has completado el cuadernillo (${answeredCount}/${total} respondidas). ¿Deseas entregar el examen para ver tus resultados?`,
          icon: "🏁",
          showCancel: true,
          okText: "Entregar Examen",
          cancelText: "Revisar Respuestas",
          onOk: () => finishSimulacro(false)
        });
      }
    });
  }

  // Botón Bookmark
  const btnBookmark = document.getElementById("btnBookmarkSimQuestion");
  if (btnBookmark) {
    btnBookmark.addEventListener("click", () => {
      const idx = SimulacroState.currentIndex;
      SimulacroState.bookmarks[idx] = !SimulacroState.bookmarks[idx];
      renderSimulacroQuestion();
      renderSimBubbleMap();
    });
  }

  // Botones de resultados: Revisar y Reiniciar
  const btnReview = document.getElementById("btnReviewSimAnswers");
  if (btnReview) btnReview.addEventListener("click", reviewSimAnswers);

  const btnRestart = document.getElementById("btnRestartSimulacro");
  if (btnRestart) {
    btnRestart.addEventListener("click", () => {
      SimulacroState.active = false;
      SimulacroState.isReviewing = false;
      document.getElementById("simulacroResultView").style.display = "none";
      document.getElementById("simulacroActiveView").style.display = "none";
      document.getElementById("simulacroSetupView").style.display = "flex";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function startSimulacro() {
  const pool = (typeof getQuestionsForProfile === "function" && AppState.activeProfileId)
    ? getQuestionsForProfile(AppState.activeProfileId)
    : (QUESTION_BANK || []);

  if (!pool || pool.length === 0) {
    showCustomModal({
      title: "Banco no disponible",
      message: "No se encontraron casos de estudio para cargar el simulacro.",
      icon: "⚠️"
    });
    return;
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  SimulacroState.questions = shuffled.slice(0, SimulacroState.count);
  SimulacroState.currentIndex = 0;
  SimulacroState.answers = {};
  SimulacroState.bookmarks = {};
  SimulacroState.active = true;
  SimulacroState.isReviewing = false;
  SimulacroState.startTime = Date.now();
  SimulacroState.totalTime = SimulacroState.count * 150; // 2.5 min por caso
  SimulacroState.timeLeft = SimulacroState.totalTime;

  // Interfaz
  document.getElementById("simulacroSetupView").style.display = "none";
  document.getElementById("simulacroResultView").style.display = "none";
  document.getElementById("simulacroActiveView").style.display = "flex";

  // Temporizador regresivo oficial
  if (SimulacroState.timerInterval) clearInterval(SimulacroState.timerInterval);
  updateSimClockDisplay();

  SimulacroState.timerInterval = setInterval(() => {
    SimulacroState.timeLeft--;
    updateSimClockDisplay();

    if (SimulacroState.timeLeft <= 0) {
      clearInterval(SimulacroState.timerInterval);
      showCustomModal({
        title: "⏰ ¡Tiempo Oficial Agotado!",
        message: "Se ha cumplido el tiempo límite reglamentario de la prueba escrita. Tu examen será calificado automáticamente.",
        icon: "⏱️",
        onOk: () => finishSimulacro(true)
      });
    }
  }, 1000);

  renderSimulacroQuestion();
  renderSimBubbleMap();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateSimClockDisplay() {
  const clockEl = document.getElementById("simTimerClock");
  if (!clockEl) return;
  const m = Math.floor(Math.max(0, SimulacroState.timeLeft) / 60);
  const s = Math.max(0, SimulacroState.timeLeft) % 60;
  clockEl.textContent = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

  if (SimulacroState.timeLeft <= 300) {
    clockEl.parentElement.style.background = "rgba(239, 68, 68, 0.2)";
    clockEl.parentElement.style.borderColor = "#ef4444";
    clockEl.style.color = "#f87171";
  } else {
    clockEl.parentElement.style.background = "rgba(245, 158, 11, 0.15)";
    clockEl.parentElement.style.borderColor = "rgba(245, 158, 11, 0.3)";
    clockEl.style.color = "#f59e0b";
  }
}

function renderSimulacroQuestion() {
  const idx = SimulacroState.currentIndex;
  const total = SimulacroState.questions.length;
  const q = SimulacroState.questions[idx];
  if (!q) return;

  const counterEl = document.getElementById("simQuestionCounter");
  if (counterEl) counterEl.textContent = `Pregunta ${idx + 1} de ${total}`;

  const bookmarkBtn = document.getElementById("btnBookmarkSimQuestion");
  if (bookmarkBtn) {
    const isBookmarked = !!SimulacroState.bookmarks[idx];
    bookmarkBtn.textContent = isBookmarked ? "⭐" : "🔖";
    bookmarkBtn.title = isBookmarked ? "Marcada para revisión (toca para desmarcar)" : "Marcar para revisar luego";
  }

  const ejeBadge = document.getElementById("simEjeBadge");
  if (ejeBadge) ejeBadge.textContent = q.ejeNombre || q.ejeId || "Caso PJS";

  const caseText = document.getElementById("simCaseText");
  if (caseText) caseText.textContent = q.caso;

  const enunciadoText = document.getElementById("simEnunciadoText");
  if (enunciadoText) enunciadoText.textContent = q.enunciado;

  const container = document.getElementById("simOptionsContainer");
  if (!container) return;
  container.innerHTML = "";

  const selectedAnswer = SimulacroState.answers[idx];

  if (SimulacroState.mode === "optical") {
    // MODO HOJA ÓPTICA AREANDINA (Lápiz N° 2)
    const card = document.createElement("div");
    card.style.cssText = "background: #ffffff; color: #0b1120; border-radius: 10px; padding: 14px 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 2px solid #e2e8f0; display: flex; flex-direction: column; gap: 12px;";

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 8px;">
        <div style="font-size: 11px; font-weight: 900; color: #0f172a; letter-spacing: 0.5px;">
          HOJA DE RESPUESTAS OFICIAL AREANDINA • LÁPIZ N° 2
        </div>
        <span style="font-size: 11px; font-weight: 800; background: #0f172a; color: #ffffff; padding: 2px 8px; border-radius: 4px;">
          ÍTEM ${idx + 1}
        </span>
      </div>

      <div style="display: flex; justify-content: center; gap: 24px; padding: 10px 0; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1;">
        ${['A', 'B', 'C'].map((letter) => {
          const isMarked = selectedAnswer === letter;
          return `
            <button type="button" class="sim-optical-bubble" data-letter="${letter}" style="width: 44px; height: 44px; border-radius: 50%; border: 2px solid ${isMarked ? '#090d16' : '#64748b'}; background: ${isMarked ? '#090d16' : '#ffffff'}; color: ${isMarked ? '#ffffff' : '#0f172a'}; font-size: 16px; font-weight: 900; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: ${isMarked ? 'inset 0 3px 6px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.06)'};">
              ${letter}
            </button>
          `;
        }).join('')}
      </div>
      <div style="font-size: 10px; color: #64748b; text-align: center; font-style: italic;">
        Toca el círculo para rellenarlo completamente con lápiz grafito N° 2.
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 4px;">
        ${q.opciones.map((opt) => `
          <div class="sim-optical-desc" data-letter="${opt.id}" style="font-size: 12px; line-height: 1.5; color: #1e293b; background: ${selectedAnswer === opt.id ? '#f1f5f9' : '#ffffff'}; border-left: 4px solid ${selectedAnswer === opt.id ? '#0f172a' : '#cbd5e1'}; padding: 8px 10px; border-radius: 4px; cursor: pointer;">
            <strong style="color: #0f172a;">${opt.id}.</strong> ${opt.texto}
          </div>
        `).join('')}
      </div>
    `;

    // Listeners para las burbujas y textos
    card.querySelectorAll(".sim-optical-bubble, .sim-optical-desc").forEach((elem) => {
      elem.addEventListener("click", () => {
        const letter = elem.getAttribute("data-letter");
        selectSimAnswer(letter);
      });
    });

    container.appendChild(card);
  } else {
    // MODO DIGITAL TÁCTIL
    q.opciones.forEach((opt) => {
      const isSelected = selectedAnswer === opt.id;
      const card = document.createElement("div");
      card.style.cssText = `background: ${isSelected ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-card)'}; border: 1px solid ${isSelected ? '#38bdf8' : 'var(--border-color)'}; border-radius: 8px; padding: 12px 14px; cursor: pointer; display: flex; gap: 10px; align-items: flex-start; transition: all 0.2s ease;`;

      card.innerHTML = `
        <span style="width: 26px; height: 26px; border-radius: 50%; background: ${isSelected ? '#38bdf8' : 'rgba(255,255,255,0.08)'}; color: ${isSelected ? '#0b1120' : '#fff'}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; flex-shrink: 0;">
          ${opt.id}
        </span>
        <span style="font-size: 13px; line-height: 1.5; color: ${isSelected ? '#ffffff' : '#cbd5e1'};">
          ${opt.texto}
        </span>
      `;

      card.addEventListener("click", () => selectSimAnswer(opt.id));
      container.appendChild(card);
    });
  }

  // Deshabilitar botón Anterior si estamos en la 0
  const btnPrev = document.getElementById("btnPrevSimQuestion");
  if (btnPrev) btnPrev.disabled = idx === 0;

  // Cambiar texto de botón Siguiente en la última
  const btnNext = document.getElementById("btnNextSimQuestion");
  if (btnNext) btnNext.textContent = (idx === total - 1) ? "Entregar Examen 🏁" : "Siguiente ➔";
}

function selectSimAnswer(letter) {
  const idx = SimulacroState.currentIndex;
  SimulacroState.answers[idx] = letter;
  renderSimulacroQuestion();
  renderSimBubbleMap();

  if (typeof playSoundEffect === "function") {
    playSoundEffect("click");
  }
}

function renderSimBubbleMap() {
  const mapEl = document.getElementById("simBubbleMap");
  if (!mapEl) return;
  mapEl.innerHTML = "";

  const total = SimulacroState.questions.length;
  for (let i = 0; i < total; i++) {
    const isCurrent = i === SimulacroState.currentIndex;
    const isAnswered = !!SimulacroState.answers[i];
    const isBookmarked = !!SimulacroState.bookmarks[i];

    const btn = document.createElement("button");
    btn.type = "button";
    btn.style.cssText = `padding: 6px 2px; border-radius: 6px; font-size: 11px; font-weight: 800; cursor: pointer; transition: all 0.2s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
      background: ${isCurrent ? "rgba(56, 189, 248, 0.25)" : (isAnswered ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.05)")};
      border: 1px solid ${isCurrent ? "#38bdf8" : (isBookmarked ? "#f59e0b" : (isAnswered ? "#10b981" : "rgba(255,255,255,0.1)"))};
      color: ${isCurrent ? "#38bdf8" : (isAnswered ? "#34d399" : "#94a3b8")};`;

    btn.innerHTML = `
      <span>${i + 1}</span>
      <span style="font-size: 9px;">${isBookmarked ? "⭐" : (isAnswered ? SimulacroState.answers[i] : "·")}</span>
    `;

    btn.addEventListener("click", () => {
      SimulacroState.currentIndex = i;
      renderSimulacroQuestion();
      renderSimBubbleMap();
    });

    mapEl.appendChild(btn);
  }
}

function finishSimulacro(isConfirmed = false) {
  if (SimulacroState.timerInterval) {
    clearInterval(SimulacroState.timerInterval);
    SimulacroState.timerInterval = null;
  }

  const total = SimulacroState.questions.length;
  let hits = 0;

  SimulacroState.questions.forEach((q, idx) => {
    if (SimulacroState.answers[idx] === q.respuestaCorrecta) {
      hits++;
    }
  });

  const rawScore = (hits / total) * 100;
  // Truncado oficial con 2 decimales según la Guía Areandina Pág. 22
  const scoreVal = (Math.floor(rawScore * 100) / 100).toFixed(2);
  const isApproved = parseFloat(scoreVal) >= 70.00;

  const elapsed = SimulacroState.totalTime - SimulacroState.timeLeft;
  const elapsedMins = Math.floor(elapsed / 60);
  const elapsedSecs = elapsed % 60;
  const pace = (elapsed / total / 60).toFixed(1);

  // Actualizar UI de Resultados
  document.getElementById("simulacroActiveView").style.display = "none";
  document.getElementById("simulacroSetupView").style.display = "none";
  document.getElementById("simulacroResultView").style.display = "flex";

  const iconEl = document.getElementById("simResultIcon");
  const verdictEl = document.getElementById("simResultVerdict");
  const verdictSubEl = document.getElementById("simResultVerdictSub");
  const scoreValEl = document.getElementById("simResultScoreVal");
  const hitsValEl = document.getElementById("simResultHitsVal");
  const accValEl = document.getElementById("simResultAccuracyVal");
  const timeValEl = document.getElementById("simResultTimeVal");
  const paceValEl = document.getElementById("simResultPaceVal");

  if (iconEl) iconEl.textContent = isApproved ? "🎉" : "⚠️";
  if (iconEl) iconEl.style.borderColor = isApproved ? "#10b981" : "#ef4444";
  if (iconEl) iconEl.style.background = isApproved ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)";

  if (verdictEl) {
    verdictEl.textContent = isApproved ? "¡SUPERASTE EL UMBRAL ELIMINATORIO!" : "NO ALCANZASTE EL UMBRAL ELIMINATORIO";
    verdictEl.style.color = isApproved ? "#10b981" : "#ef4444";
  }

  if (verdictSubEl) {
    verdictSubEl.textContent = isApproved
      ? `Puntaje oficial: ${scoreVal} pts (supera el mínimo de 70.00). Según la Guía Oficial Areandina, continúas en concurso y se calificarán tus pruebas Comportamentales e Integridad.`
      : `Puntaje oficial: ${scoreVal} pts (mínimo aprobatorio: 70.00). Según el numeral 4.7 y 6.3 de la Guía Oficial Areandina, la prueba Funcional es eliminatoria y no se calificarán Comportamentales ni Integridad.`;
  }

  if (scoreValEl) scoreValEl.textContent = scoreVal;
  if (hitsValEl) hitsValEl.textContent = `${hits} / ${total}`;
  if (accValEl) accValEl.textContent = `${Math.round(rawScore)}% de acierto`;
  if (timeValEl) timeValEl.textContent = `${elapsedMins}m ${elapsedSecs}s`;
  if (paceValEl) paceValEl.textContent = `${pace} min/caso`;

  if (typeof playSoundEffect === "function") {
    playSoundEffect(isApproved ? "correct" : "error");
  }

  // Guardar en estadísticas de usuario
  if (AppState && AppState.stats) {
    AppState.stats.totalAnswered += total;
    AppState.stats.correctCount += hits;
    AppState.stats.functionalTotal = (AppState.stats.functionalTotal || 0) + total;
    AppState.stats.functionalCorrect = (AppState.stats.functionalCorrect || 0) + hits;
    if (typeof saveUserData === "function") saveUserData();
    if (typeof updateStatsUI === "function") updateStatsUI();
  }

  if (SimulacroState && Array.isArray(SimulacroState.questions)) {
    if (!AppState.practiceStudiedIds) AppState.practiceStudiedIds = [];
    let addedCount = 0;
    SimulacroState.questions.forEach((q, idx) => {
      if (SimulacroState.answers[idx] && q && q.id && !AppState.practiceStudiedIds.includes(q.id)) {
        AppState.practiceStudiedIds.push(q.id);
        addedCount++;
      }
    });
    if (addedCount > 0) {
      StorageManager.set("practiceStudiedIds_" + AppState.activeProfileId, AppState.practiceStudiedIds);
      updateEjeFilterOptions(AppState.activeProfileId);
      updateSelectedEjeProgressBar();
    }
  }

  if (typeof CloudSync !== "undefined" && CloudSync.config.autoSync) {
    CloudSync.pushProgress().catch(() => {});
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function reviewSimAnswers() {
  SimulacroState.isReviewing = true;
  document.getElementById("simulacroResultView").style.display = "none";
  document.getElementById("simulacroActiveView").style.display = "flex";

  // Mostrar preguntas con retroalimentación completa
  const container = document.getElementById("simOptionsContainer");
  if (!container) return;

  const idx = SimulacroState.currentIndex;
  const q = SimulacroState.questions[idx];
  const userAns = SimulacroState.answers[idx];
  const isCorrect = userAns === q.respuestaCorrecta;

  container.innerHTML = `
    <div style="background: ${isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)'}; border: 1px solid ${isCorrect ? '#10b981' : '#ef4444'}; border-radius: 8px; padding: 12px; margin-bottom: 6px;">
      <div style="font-weight: 800; font-size: 13px; color: ${isCorrect ? '#34d399' : '#f87171'};">
        ${isCorrect ? '✓ Respuesta Correcta' : `✕ Marcaste Opción ${userAns || 'Sin Responder'} (Correcta era: ${q.respuestaCorrecta})`}
      </div>
      <div style="font-size: 12px; color: #cbd5e1; margin-top: 6px; line-height: 1.5;">
        ${q.opciones.find(o => o.id === q.respuestaCorrecta)?.explicacion || ''}
      </div>
      ${q.citaNormativa ? `
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 11px; color: #38bdf8; font-style: italic;">
          ⚖️ Cita Normativa Areandina: ${q.citaNormativa}
        </div>
      ` : ''}
    </div>
  `;

  // Renderizar las opciones estándar comentadas
  q.opciones.forEach((opt) => {
    const isThisCorrect = opt.id === q.respuestaCorrecta;
    const isUserChoice = opt.id === userAns;

    const optCard = document.createElement("div");
    optCard.style.cssText = `background: var(--bg-card); border: 1px solid ${isThisCorrect ? '#10b981' : (isUserChoice ? '#ef4444' : 'var(--border-color)')}; border-radius: 8px; padding: 10px 12px; display: flex; flex-direction: column; gap: 4px;`;

    optCard.innerHTML = `
      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 900; color: ${isThisCorrect ? '#34d399' : (isUserChoice ? '#f87171' : '#94a3b8')};">
          ${opt.id}. ${opt.texto}
        </span>
        ${isThisCorrect ? '<span style="font-size: 11px; background: rgba(16,185,129,0.2); color: #34d399; padding: 2px 6px; border-radius: 4px; font-weight: 800;">CORRECTA</span>' : ''}
      </div>
    `;
    container.appendChild(optCard);
  });
}

// =========================================================================
// PROTOCOLO OFICIAL DÍA D (CHECKLIST 8 DE NOVIEMBRE)
// =========================================================================
function setupDiaDModal() {
  const hubCard = document.getElementById("hubCardDiaD");
  const modal = document.getElementById("diaDModal");
  const closeX = document.getElementById("btnCloseDiaDModalX");
  const closeBtn = document.getElementById("btnCloseDiaDModal");

  const chkDoc = document.getElementById("chkDiaDoc");
  const chkLapiz = document.getElementById("chkDiaLapiz");
  const chkBorrador = document.getElementById("chkDiaBorrador");
  const chkSacapuntas = document.getElementById("chkDiaSacapuntas");

  try {
    const saved = JSON.parse(localStorage.getItem("simo_diad_checklist") || "{}");
    if (chkDoc) chkDoc.checked = !!saved.doc;
    if (chkLapiz) chkLapiz.checked = !!saved.lapiz;
    if (chkBorrador) chkBorrador.checked = !!saved.borrador;
    if (chkSacapuntas) chkSacapuntas.checked = !!saved.sacapuntas;
  } catch (e) {}

  const saveState = () => {
    try {
      localStorage.setItem("simo_diad_checklist", JSON.stringify({
        doc: chkDoc ? chkDoc.checked : false,
        lapiz: chkLapiz ? chkLapiz.checked : false,
        borrador: chkBorrador ? chkBorrador.checked : false,
        sacapuntas: chkSacapuntas ? chkSacapuntas.checked : false
      }));
    } catch (e) {}
  };

  [chkDoc, chkLapiz, chkBorrador, chkSacapuntas].forEach((chk) => {
    if (chk) chk.addEventListener("change", saveState);
  });

  const openModal = () => { if (modal) modal.style.display = "flex"; };
  const closeModal = () => { if (modal) modal.style.display = "none"; saveState(); };

  if (hubCard) hubCard.addEventListener("click", openModal);
  if (closeX) closeX.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
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
  currentDrill: null,
  completedIds: [],
  streak: 0,
  timer: null,
  timeLeft: 15,
  isAnswered: false
};

async function setupSpeedDrill() {
  const stored = await StorageManager.get("speedDrillsCompleted", []);
  SpeedDrillState.completedIds = Array.isArray(stored) ? stored : [];

  const btnTrue = document.getElementById("btnSpeedTrue");
  const btnFalse = document.getElementById("btnSpeedFalse");
  const btnNext = document.getElementById("btnNextSpeedDrill");

  if (!btnTrue || !btnFalse) return;

  btnTrue.addEventListener("click", () => handleSpeedDrillAnswer(true));
  btnFalse.addEventListener("click", () => handleSpeedDrillAnswer(false));
  if (btnNext) btnNext.addEventListener("click", () => nextSpeedDrillStep());
}

async function startSpeedDrill() {
  if (!SpeedDrillState.completedIds || SpeedDrillState.completedIds.length === 0) {
    const stored = await StorageManager.get("speedDrillsCompleted", []);
    SpeedDrillState.completedIds = Array.isArray(stored) ? stored : [];
  }
  SpeedDrillState.streak = 0;
  const streakEl = document.getElementById("speedDrillStreak");
  if (streakEl) streakEl.textContent = "0";
  renderSpeedDrillCard();
}

function renderSpeedDrillCard() {
  if (typeof SPEED_DRILLS === "undefined" || SPEED_DRILLS.length === 0) return;

  const completedSet = new Set(SpeedDrillState.completedIds || []);
  let pool = SPEED_DRILLS.filter((d) => !completedSet.has(d.id));

  // Si ya se acertaron todas las afirmaciones, reiniciar ciclo y felicitar al usuario
  if (pool.length === 0) {
    SpeedDrillState.completedIds = [];
    StorageManager.set("speedDrillsCompleted", []);
    pool = [...SPEED_DRILLS];
    SimoFX.celebrate("⚡", "¡Ciclo Speed Drill Completado!", `${SPEED_DRILLS.length} afirmaciones dominadas`, ["⚡", "⭐", "🔥", "💥"]);
    showCustomModal({
      title: "⚡ ¡Ciclo Speed Drill Completado!",
      message: `¡Impresionante agilidad mental! Has respondido correctamente todas las ${SPEED_DRILLS.length} afirmaciones de Speed Drill. Se ha reiniciado el ciclo para que continúes batiendo récords de velocidad.`,
      icon: "🏆"
    });
  }

  // Evitar repetir la misma afirmación que se acaba de responder si hay más de 1 disponible
  let candidates = pool;
  if (candidates.length > 1 && SpeedDrillState.currentDrill) {
    const diff = candidates.filter((d) => d.id !== SpeedDrillState.currentDrill.id);
    if (diff.length > 0) candidates = diff;
  }

  const drill = candidates[Math.floor(Math.random() * candidates.length)];
  SpeedDrillState.currentDrill = drill;
  SpeedDrillState.isAnswered = false;
  SpeedDrillState.timeLeft = 15;

  const completedCount = SpeedDrillState.completedIds ? SpeedDrillState.completedIds.length : 0;
  const remainingCount = Math.max(0, SPEED_DRILLS.length - completedCount);

  const remainingBadge = document.getElementById("speedDrillRemainingBadge");
  if (remainingBadge) {
    remainingBadge.textContent = `${completedCount + 1}/${SPEED_DRILLS.length} • ${remainingCount} restantes`;
  }

  const topicBadge = document.getElementById("speedDrillTopicBadge");
  if (topicBadge) {
    topicBadge.textContent = drill.tema;
  }

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
      if (typeof SoundFX !== "undefined" && SoundFX.playTick) SoundFX.playTick();
      timerEl.style.display = "inline-block";
      SimoFX.heartbeat(timerEl);
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

  const drill = SpeedDrillState.currentDrill;
  if (!drill) return;
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
    if (!SpeedDrillState.completedIds.includes(drill.id)) {
      SpeedDrillState.completedIds.push(drill.id);
      StorageManager.set("speedDrillsCompleted", SpeedDrillState.completedIds);
    }
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

  const remainingBadge = document.getElementById("speedDrillRemainingBadge");
  if (remainingBadge) {
    const completedCount = SpeedDrillState.completedIds ? SpeedDrillState.completedIds.length : 0;
    const remainingCount = Math.max(0, SPEED_DRILLS.length - completedCount);
    remainingBadge.textContent = `${completedCount}/${SPEED_DRILLS.length} • ${remainingCount} restantes`;
  }

  const streakEl = document.getElementById("speedDrillStreak");
  streakEl.textContent = SpeedDrillState.streak;
  explEl.textContent = drill.explicacion;
  fb.style.display = "flex";

  const answerBtn = document.getElementById(userChoice ? "btnSpeedTrue" : "btnSpeedFalse");
  if (isCorrect) {
    const streak = SpeedDrillState.streak;
    const emojis = streak >= 10 ? ["👑", "💎", "⭐"] : streak >= 5 ? ["🔥", "⚡", "💥"] : ["⚡", "✨"];
    SimoFX.burst(answerBtn, emojis, streak >= 5 ? 20 : 12, streak >= 5 ? 150 : 100);
    SimoFX.floatText(answerBtn, streak >= 3 ? `🔥 x${streak}` : "⚡ +1", "#fde047");
    streakEl.style.display = "inline-block";
    SimoFX.pop(streakEl);
    if ([5, 10, 20].includes(streak)) {
      SimoFX.celebrate(streak >= 10 ? "👑" : "🔥", `¡Racha Relámpago x${streak}!`, "Velocidad y precisión de nivel examen", ["⚡", "🔥", "⭐"]);
    }
  } else {
    SimoFX.shake(document.getElementById("speedDrillStatement"));
    SimoFX.floatText(answerBtn, "💢 Racha rota", "#fca5a5");
  }
}

function handleSpeedDrillTimeout() {
  if (SpeedDrillState.isAnswered) return;
  SpeedDrillState.isAnswered = true;
  SpeedDrillState.streak = 0;
  document.getElementById("speedDrillStreak").textContent = "0";

  if (typeof SoundFX !== "undefined" && SoundFX.playTimeout) SoundFX.playTimeout();
  SimoFX.shake(document.getElementById("speedDrillStatement"));
  SimoFX.floatText(document.getElementById("speedDrillTimer"), "⌛ ¡Tiempo!", "#fbbf24");

  const drill = SpeedDrillState.currentDrill;
  if (!drill) return;
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

// =========================================================================
// MÓDULO: DECODIFICADOR DE VERBOS RECTORES & CAZA-DISTRACTORES (DAFP / CNSC)
// =========================================================================
function setupVerbosRectoresModule() {
  const btnOpen = document.getElementById("btnOpenVerbosModal");
  const modal = document.getElementById("modalVerbosRectores");
  const btnClose = document.getElementById("btnCloseVerbosModal");

  if (!modal) return;

  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
      openVerbosModal();
    });
  }
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      closeModal(modal);
    });
  }

  // Setup tabs internas
  const tabBtns = {
    buscador: document.getElementById("tabBtnVerbosBuscador"),
    caza: document.getElementById("tabBtnVerbosCaza"),
    infografia: document.getElementById("tabBtnVerbosInfografia"),
    reglas: document.getElementById("tabBtnVerbosReglas")
  };

  const sections = {
    buscador: document.getElementById("sectionVerbosBuscador"),
    caza: document.getElementById("sectionVerbosCaza"),
    infografia: document.getElementById("sectionVerbosInfografia"),
    reglas: document.getElementById("sectionVerbosReglas")
  };

  function switchVerbosTab(tabKey) {
    Object.keys(tabBtns).forEach((k) => {
      if (tabBtns[k]) {
        const isActive = (k === tabKey);
        tabBtns[k].classList.toggle("active", isActive);
        if (isActive) {
          tabBtns[k].style.background = "rgba(168, 85, 247, 0.25)";
          tabBtns[k].style.borderColor = "#a855f7";
          tabBtns[k].style.color = "#f3e8ff";
          tabBtns[k].style.fontWeight = "800";
        } else {
          tabBtns[k].style.background = "transparent";
          tabBtns[k].style.borderColor = "rgba(255,255,255,0.1)";
          tabBtns[k].style.color = "#94a3b8";
          tabBtns[k].style.fontWeight = "700";
        }
      }
      if (sections[k]) {
        sections[k].style.display = (k === tabKey) ? "flex" : "none";
      }
    });

    if (tabKey === "caza") {
      initCazaDistractores();
    }
  }

  if (tabBtns.buscador) tabBtns.buscador.addEventListener("click", () => switchVerbosTab("buscador"));
  if (tabBtns.caza) tabBtns.caza.addEventListener("click", () => switchVerbosTab("caza"));
  if (tabBtns.infografia) tabBtns.infografia.addEventListener("click", () => switchVerbosTab("infografia"));
  if (tabBtns.reglas) tabBtns.reglas.addEventListener("click", () => switchVerbosTab("reglas"));

  // Buscador y filtros de píldoras
  const inputSearch = document.getElementById("inputBuscarVerbo");
  const filterTodos = document.getElementById("filterVerboTodos");
  const filterPropios = document.getElementById("filterVerboPropios");
  const filterDistractores = document.getElementById("filterVerboDistractores");

  let currentPillFilter = "todos"; // "todos", "propios", "distractores"

  function updatePillStyles() {
    [filterTodos, filterPropios, filterDistractores].forEach((b) => {
      if (b) {
        b.style.borderColor = "rgba(255,255,255,0.1)";
        b.style.background = "transparent";
        b.style.color = "#94a3b8";
      }
    });
    if (currentPillFilter === "todos" && filterTodos) {
      filterTodos.style.borderColor = "#a855f7";
      filterTodos.style.background = "rgba(168, 85, 247, 0.25)";
      filterTodos.style.color = "#f3e8ff";
    }
    if (currentPillFilter === "propios" && filterPropios) {
      filterPropios.style.borderColor = "#10b981";
      filterPropios.style.background = "rgba(16, 185, 129, 0.2)";
      filterPropios.style.color = "#34d399";
    }
    if (currentPillFilter === "distractores" && filterDistractores) {
      filterDistractores.style.borderColor = "#f43f5e";
      filterDistractores.style.background = "rgba(244, 63, 94, 0.2)";
      filterDistractores.style.color = "#fb7185";
    }
    renderVerbosList();
  }

  if (filterTodos) filterTodos.addEventListener("click", () => { currentPillFilter = "todos"; updatePillStyles(); });
  if (filterPropios) filterPropios.addEventListener("click", () => { currentPillFilter = "propios"; updatePillStyles(); });
  if (filterDistractores) filterDistractores.addEventListener("click", () => { currentPillFilter = "distractores"; updatePillStyles(); });

  if (inputSearch) {
    inputSearch.addEventListener("input", () => {
      renderVerbosList();
    });
  }

  // Infografía selectors
  const infoButtons = document.querySelectorAll(".info-nivel-btn");
  const imgInfo = document.getElementById("imgVerbosInfografia");
  const titleInfo = document.getElementById("infoNivelTitle");
  const linkInfo = document.getElementById("linkOpenFullImg");

  infoButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      infoButtons.forEach((b) => {
        b.style.borderColor = "rgba(255,255,255,0.1)";
        b.style.background = "transparent";
        b.style.color = "#94a3b8";
      });
      btn.style.borderColor = "#38bdf8";
      btn.style.background = "rgba(56, 189, 248, 0.2)";
      btn.style.color = "#38bdf8";

      const imgSrc = btn.getAttribute("data-img");
      if (imgInfo) imgInfo.src = imgSrc;
      if (linkInfo) linkInfo.href = imgSrc;
      if (titleInfo) titleInfo.textContent = `Lámina Oficial: ${btn.textContent.trim()} (DAFP)`;
    });
  });

  // Estado del Speed Drill Caza-Distractores
  let cazaState = {
    currentIndex: 0,
    score: 0,
    answered: false,
    pool: []
  };

  function initCazaDistractores() {
    if (typeof VERBOS_RECTORES_DATA === "undefined") return;
    const all = VERBOS_RECTORES_DATA.SPEED_DRILLS_VERBOS || [];
    const profile = AppState.activeProfileId || "gestor_iii";
    const profileCases = all.filter((c) => c.perfilTarget === profile);
    cazaState.pool = profileCases.length > 0 ? [...profileCases, ...all.filter((c) => c.perfilTarget !== profile)] : [...all];
    cazaState.currentIndex = 0;
    cazaState.score = 0;
    cazaState.answered = false;
    updateCazaUI();
  }

  function updateCazaUI() {
    const total = cazaState.pool.length;
    if (total === 0) return;

    const cardBox = document.getElementById("cazaCardBox");
    if (!cardBox) return;

    if (cazaState.currentIndex >= total) {
      renderCazaFinished();
      return;
    }

    const currentCase = cazaState.pool[cazaState.currentIndex];
    cazaState.answered = false;

    const badgeNivel = document.getElementById("cazaBadgeNivel");
    const progressStep = document.getElementById("cazaProgressStep");
    const contextoEl = document.getElementById("cazaContextoText");
    const opcionEl = document.getElementById("cazaOpcionText");
    const scoreEl = document.getElementById("cazaScoreText");
    const feedbackBox = document.getElementById("cazaFeedbackBox");
    const buttons = document.querySelectorAll(".btn-caza-action");

    if (badgeNivel) badgeNivel.textContent = currentCase.nivelCargo;
    if (progressStep) progressStep.textContent = `Caso ${cazaState.currentIndex + 1} de ${total}`;
    if (scoreEl) scoreEl.textContent = `${cazaState.score} / ${total}`;
    if (contextoEl) contextoEl.textContent = currentCase.contexto;
    if (opcionEl) opcionEl.textContent = `«${currentCase.opcionTexto}»`;

    if (feedbackBox) feedbackBox.style.display = "none";
    buttons.forEach((btn) => {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    });
  }

  function handleCazaAnswer(chosenType) {
    if (cazaState.answered) return;
    cazaState.answered = true;

    const currentCase = cazaState.pool[cazaState.currentIndex];
    const isCorrect = (chosenType === currentCase.respuestaCorrecta);

    const feedbackBox = document.getElementById("cazaFeedbackBox");
    const titleEl = document.getElementById("cazaFeedbackTitle");
    const descEl = document.getElementById("cazaFeedbackDesc");
    const scoreEl = document.getElementById("cazaScoreText");
    const buttons = document.querySelectorAll(".btn-caza-action");

    buttons.forEach((btn) => {
      btn.disabled = true;
      btn.style.opacity = "0.65";
      btn.style.pointerEvents = "none";
    });

    if (isCorrect) {
      cazaState.score += 1;
      if (typeof SoundFX !== "undefined" && SoundFX.playCorrect) SoundFX.playCorrect();
      if (feedbackBox) {
        feedbackBox.style.display = "flex";
        feedbackBox.style.background = "rgba(16, 185, 129, 0.15)";
        feedbackBox.style.border = "1.5px solid #10b981";
      }
      if (titleEl) {
        titleEl.textContent = "🎯 ¡EXCELENTE! Discriminaste con precisión (+1 Acierto)";
        titleEl.style.color = "#34d399";
      }
    } else {
      if (typeof SoundFX !== "undefined" && SoundFX.playWrong) SoundFX.playWrong();
      if (feedbackBox) {
        feedbackBox.style.display = "flex";
        feedbackBox.style.background = "rgba(239, 68, 68, 0.15)";
        feedbackBox.style.border = "1.5px solid #ef4444";
      }
      if (titleEl) {
        titleEl.textContent = "❌ ¡TRAMPA IDENTIFICADA! Ojo al nivel jerárquico";
        titleEl.style.color = "#f87171";
      }
    }

    if (descEl) descEl.innerHTML = currentCase.explicacion;
    if (scoreEl) scoreEl.textContent = `${cazaState.score} / ${cazaState.pool.length}`;
  }

  function renderCazaFinished() {
    const cardBox = document.getElementById("cazaCardBox");
    if (!cardBox) return;
    const total = cazaState.pool.length;
    const perc = Math.round((cazaState.score / total) * 100);

    cardBox.innerHTML = `
      <div style="text-align: center; padding: 24px 10px; display: flex; flex-direction: column; align-items: center; gap: 12px;">
        <div style="font-size: 42px;">${perc >= 75 ? "🏆" : "🎯"}</div>
        <div style="font-size: 18px; font-weight: 800; color: #f8fafc;">¡Desafío Caza-Distractores Completado!</div>
        <div style="font-size: 14px; color: #cbd5e1;">Puntaje: <strong style="color: #38bdf8;">${cazaState.score} de ${total}</strong> (${perc}%)</div>
        <p style="font-size: 12.5px; color: #94a3b8; max-width: 420px; line-height: 1.5;">
          ${perc >= 75 ? "¡Tienes un radar afilado para identificar las trampas de nivel jerárquico de la CNSC!" : "Continúa repasando los 97 verbos para no caer en extralimitaciones ni pasividad el día de la prueba."}
        </p>
        <button id="btnRestartCaza" style="margin-top: 8px; padding: 10px 20px; font-size: 13.5px; font-weight: 800; background: linear-gradient(135deg, #a855f7, #7c3aed); border: none; color: #fff; border-radius: 8px; cursor: pointer;">
          🔄 Repetir Desafío
        </button>
      </div>
    `;

    const btnRestart = document.getElementById("btnRestartCaza");
    if (btnRestart) {
      btnRestart.addEventListener("click", () => {
        initCazaDistractores();
      });
    }
  }

  // Listener para botones de acción del Caza-Distractores
  document.querySelectorAll(".btn-caza-action").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-answer");
      handleCazaAnswer(type);
    });
  });

  const btnNextCaza = document.getElementById("btnCazaNextCase");
  if (btnNextCaza) {
    btnNextCaza.addEventListener("click", () => {
      cazaState.currentIndex += 1;
      updateCazaUI();
    });
  }

  // Abrir modal y sincronizar con perfil activo
  function openVerbosModal() {
    const profile = AppState.activeProfileId || "gestor_iii";
    const isGestor = profile === "gestor_iii" || profile === "gestor_iii_ci" || (profile && profile.includes("gestor"));
    const badge = document.getElementById("verbosBadgePerfil");
    if (badge) {
      badge.textContent = isGestor ? "GESTOR III (Profesional)" : "ANALISTA IV (Técnico)";
      badge.style.color = isGestor ? "#38bdf8" : "#c084fc";
      badge.style.borderColor = isGestor ? "#38bdf8" : "#c084fc";
    }

    const btnPro = document.getElementById("btnInfoNivelPro");
    const btnTec = document.getElementById("btnInfoNivelTec");
    if (isGestor && btnPro) btnPro.click();
    else if (btnTec) btnTec.click();

    switchVerbosTab("buscador");
    renderVerbosList();

    if (modal) {
      modal.style.display = "flex";
      openModal(modal);
    }
  }

  window.openVerbosModal = openVerbosModal;

  function renderVerbosList() {
    const container = document.getElementById("listaVerbosContainer");
    const counterEl = document.getElementById("verbosCounterText");
    if (!container || typeof VERBOS_RECTORES_DATA === "undefined") return;

    const query = (inputSearch ? inputSearch.value : "").trim().toLowerCase();
    const profile = AppState.activeProfileId || "gestor_iii";
    const all = VERBOS_RECTORES_DATA.VERBOS_CATALOGO || [];

    let filtered = all.filter((v) => {
      const matchText = v.verbo.toLowerCase().includes(query) || v.descripcion.toLowerCase().includes(query);
      if (!matchText) return false;

      const evalResult = VERBOS_RECTORES_DATA.evaluarVerboParaCargo(v.verbo, profile);
      if (!evalResult) return true;

      if (currentPillFilter === "propios") return evalResult.esPropio;
      if (currentPillFilter === "distractores") return evalResult.esDistractor;
      return true;
    });

    if (counterEl) {
      counterEl.textContent = `Mostrando ${filtered.length} de ${all.length} verbos`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 24px; color: #94a3b8; font-size: 13px;">
          No se encontraron verbos para "${query}" con el filtro seleccionado.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((v) => {
      const evalResult = VERBOS_RECTORES_DATA.evaluarVerboParaCargo(v.verbo, profile);
      const esPropio = evalResult ? evalResult.esPropio : false;
      const statusColor = esPropio ? "#10b981" : "#f43f5e";
      const statusBg = esPropio ? "rgba(16, 185, 129, 0.12)" : "rgba(244, 63, 94, 0.12)";
      const statusBorder = esPropio ? "rgba(16, 185, 129, 0.3)" : "rgba(244, 63, 94, 0.3)";
      const statusLabel = esPropio ? "✅ Propio de tu Cargo" : `⚠️ ${evalResult ? evalResult.tipoDistractor : 'Distractor'}`;

      const levelsBadges = Object.keys(v.niveles)
        .filter((k) => v.niveles[k])
        .map((k) => `<span style="font-size: 10px; font-weight: 800; background: rgba(255,255,255,0.08); padding: 1px 5px; border-radius: 4px; color: #cbd5e1;">${k}</span>`)
        .join(" ");

      return `
        <div class="verbo-card-item" style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 10px 14px; display: flex; flex-direction: column; gap: 6px; transition: border-color 0.2s;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 14.5px; font-weight: 800; color: #f8fafc;">${v.num}. ${v.verbo}</span>
              <div style="display: flex; gap: 4px;">${levelsBadges}</div>
            </div>
            <span style="font-size: 10.5px; font-weight: 800; color: ${statusColor}; background: ${statusBg}; border: 1px solid ${statusBorder}; padding: 2px 8px; border-radius: 10px;">
              ${statusLabel}
            </span>
          </div>
          <div style="font-size: 12px; color: #cbd5e1; line-height: 1.45;">
            ${v.descripcion}
          </div>
          <div style="font-size: 11px; color: ${esPropio ? '#34d399' : '#fb7185'}; background: rgba(0,0,0,0.25); padding: 5px 8px; border-radius: 6px; border-left: 2px solid ${statusColor};">
            💡 <strong>En tu examen:</strong> ${evalResult ? evalResult.diagnostico : ''}
          </div>
        </div>
      `;
    }).join("");
  }
}

