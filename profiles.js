// profiles.js - Catálogo Oficial de Perfiles de Cargo DIAN (Convocatoria 2676)
// Soporta alternancia fluida entre perfiles de estudio (Gestor III y Analista IV)

const PROFILES_DATA = {
  gestor_iii: {
    id: "gestor_iii",
    title: "GESTOR III (Código 303 - Grado 03)",
    shortTitle: "GESTOR III",
    opec: "242703",
    inscription: "1245650048",
    level: "Profesional",
    levelCode: "303",
    grade: "03",
    entity: "DIAN (Proceso de Selección 2676)",
    salary: "$8.450.000 aprox (Vigencia 2025)",
    closingDate: "2026-02-07",
    codeFicha: "FT-TAH-1824 / TP-DE-3006",
    purpose: "Desarrollar metodologías, estrategias, técnicas y herramientas de gestión que contribuyan con la toma de decisiones y el direccionamiento hacia el cumplimiento misional, de acuerdo con la normativa vigente, la política institucional y lineamientos técnicos.",
    functions: [
      "Realizar análisis y diagnósticos del comportamiento de las variables y tendencias de los sectores económicos de influencia y competencia de la dependencia, de acuerdo con la normativa y políticas institucionales.",
      "Formular, ejecutar, hacer seguimiento, ajuste y evaluar los planes, programas o proyectos de la dependencia o seccional conforme a la planeación estratégica de la DIAN y la metodología establecida.",
      "Adelantar procesos de orientación, implementación, mejora y seguimiento en el cumplimiento de los planes, proyectos y sistemas de gestión establecidos por la Entidad (MIPG y Control Interno).",
      "Contribuir con la revisión de requerimientos para la contratación de servicios o bienes relacionados con la gestión del despacho o proceso según la normativa vigente.",
      "Implementar políticas y estrategias para la planeación, formulación, implementación, mantenimiento y evaluación de convenios de cooperación internacional e interinstitucional."
    ],
    filterOptions: [
      { id: "interleaving", label: "🌪️ Modo Intercalado (Mezcla Mixta)" },
      { id: "todos", label: "⚡ Todos los Ejes de la DIAN" },
      { id: "tributario", label: "📊 Procedimiento Tributario y Fiscalización" },
      { id: "aduanero", label: "🚢 Régimen Aduanero y Comercio Exterior" },
      { id: "comportamentales", label: "🤝 Competencias Comportamentales Gestor III" },
      { id: "integridad", label: "⭐ Valores de Integridad y CGD" },
      { id: "cpaca", label: "📜 Derecho Administrativo y CPACA" },
      { id: "cobranzas", label: "⚖️ Cobro Coactivo y Títulos Ejecutivos" },
      { id: "contratacion", label: "📄 Contratación Estatal y Convenios" },
      { id: "servicio", label: "👥 Derecho de Petición y Atención al Ciudadano" },
      { id: "cambiario", label: "💱 Régimen Cambiario y Lavado de Activos" },
      { id: "control_interno", label: "🛡️ Control Interno y 3 Líneas de Defensa" },
      { id: "misionalidad", label: "🏛️ Misionalidad y Estructura DIAN" },
      { id: "mipg", label: "📐 Modelo MIPG y Desempeño FURAG" },
      { id: "indicadores", label: "📈 Indicadores de Gestión" },
      { id: "comprension_lectora", label: "📖 Lectura Crítica y Casos Complejos" },
      { id: "razonamiento", label: "🧠 Razonamiento Analítico" },
      { id: "rendicion_cuentas", label: "📢 Rendición de Cuentas" }
    ]
  },

  analista_iv: {
    id: "analista_iv",
    title: "ANALISTA IV (Código 204 - Grado 04)",
    shortTitle: "ANALISTA IV",
    opec: "236760",
    inscription: "1255108884",
    level: "Técnico",
    levelCode: "204",
    grade: "04",
    entity: "DIAN (Proceso de Selección 2676 - Ingreso)",
    salary: "$6.390.426 (Vigencia 2025)",
    vacancies: 19,
    closingDate: "2026-02-07",
    codeFicha: "AT-FL-2010",
    purpose: "AT-FL-2010. PRESTAR APOYO TÉCNICO EN EL DESARROLLO DE INVESTIGACIONES Y DILIGENCIAS, TENDIENTES A LA DETECCIÓN DE INCUMPLIMIENTO DE LA NORMATIVA TRIBUTARIA, ADUANERA O CAMBIARIA VIGENTE Y DE CONDUCTAS INDICATIVAS DE LAVADO DE ACTIVOS DE ACUERDO CON LOS PROCEDIMIENTOS ESTABLECIDOS.",
    functions: [
      "Acompañar las diligencias de práctica de pruebas decretadas dentro de una investigación, de acuerdo con la normativa vigente y los procedimientos establecidos.",
      "Apoyar la ejecución de acciones de fiscalización, en el marco de su competencia y jurisdicción, tendientes a la verificación del cumplimiento de las obligaciones tributarias, aduaneras o cambiarias, de acuerdo con la normativa vigente, lineamientos institucionales y procedimientos establecidos.",
      "Clasificar la información necesaria para el análisis preliminar de los insumos y de las denuncias de fiscalización recibidas, de acuerdo con la normativa vigente, procedimientos y lineamientos institucionales.",
      "Elaborar actos administrativos y demás documentos de carácter técnico, administrativo y operativo relacionados con asuntos del proceso de fiscalización y liquidación, de acuerdo con la normativa y procedimientos vigentes.",
      "Intervenir en las diligencias de destrucción de mercancía averiada, defectuosa o impropia respecto del fin para el cual fue importada, de acuerdo con la normativa vigente, los procedimientos establecidos y las directrices institucionales.",
      "Las señaladas como comunes a todos los empleos de la planta de personal de la entidad, incluidas en la resolución que adopta o modifica el manual y las demás asignadas por autoridad competente, de acuerdo con el nivel, grado de responsabilidad y el área de desempeño del empleo.",
      "Participar en las acciones técnicas y administrativas que faciliten la ejecución de los procedimientos asociados al proceso de fiscalización y liquidación, de acuerdo con la normativa, las políticas y los lineamientos establecidos.",
      "Realizar actividades de verificación necesarias dentro de las investigaciones para la determinación del cumplimiento de las obligaciones tributarias, aduaneras o cambiarias y, el reporte de las operaciones sospechosas de lavado de activos y financiación del terrorismo, en el marco de su competencia y jurisdicción, de acuerdo con la normativa vigente, las directrices institucionales y los procedimientos establecidos.",
      "Realizar la gestión documental relacionada con trámites, solicitudes técnicas, denuncias y reportes de operaciones sospechosas, propios del proceso de fiscalización y liquidación que permitan establecer la trazabilidad de lo actuado, de acuerdo con la normativa vigente y los procedimientos establecidos."
    ],
    filterOptions: [
      { id: "interleaving", label: "🌪️ Modo Intercalado (Mezcla Mixta)" },
      { id: "todos", label: "⚡ Todos los Casos Analista IV" },
      // Ejes Funcionales
      { id: "comprension_lectora", label: "📖 Lectura Crítica y Casos Complejos" },
      { id: "fiscalizacion_aduanera_procedimiento", label: "🔍 Fiscalización, Pruebas y Destrucción Aduanera" },
      { id: "obligaciones_tributarias", label: "📋 Obligaciones Formales y Sustanciales" },
      { id: "gestion_documental", label: "📁 Gestión Documental y Trazabilidad" },
      { id: "lavado_activos_ros", label: "🚨 Lavado de Activos, SARLAFT y ROS" },
      { id: "liquidacion_impuestos", label: "📑 Liquidación de Impuestos Nacionales" },
      { id: "normativa_cambiaria", label: "💱 Normativa Cambiaria e Infracciones" },
      { id: "razonamiento_matematico", label: "🧮 Razonamiento Matemático y Sanciones" },
      { id: "estructura_dian", label: "🏛️ Estructura Organizacional DIAN" },
      { id: "misionalidad", label: "🎯 Misionalidad de la DIAN" },
      // Competencias Comportamentales (Nivel Técnico)
      { id: "adaptabilidad", label: "🔄 Adaptabilidad" },
      { id: "comportamiento_etico", label: "🛡️ Comportamiento Ético" },
      { id: "comunicacion_efectiva", label: "🗣️ Comunicación Efectiva" },
      { id: "trabajo_equipo", label: "🤝 Trabajo en Equipo" },
      { id: "orientacion_logro", label: "🎯 Orientación al Logro" },
      { id: "orientacion_usuario", label: "👥 Orientación al Usuario y Ciudadano" },
      // Valores de Integridad
      { id: "compromiso", label: "⭐ Compromiso" },
      { id: "diligencia", label: "⚡ Diligencia" },
      { id: "honestidad", label: "🕊️ Honestidad" },
      { id: "justicia", label: "⚖️ Justicia" },
      { id: "respeto", label: "🤝 Respeto" }
    ]
  }
};

if (typeof window !== "undefined") {
  window.PROFILES_DATA = PROFILES_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROFILES_DATA };
}
