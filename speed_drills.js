// speed_drills.js - Banco de Microaprendizaje (Speed Drill V/F) y Mnemotecnias para GESTOR III DIAN 2676

const SPEED_DRILLS = [
  {
    id: "sd_01",
    tema: "Derecho de Petición (Ley 1755 de 2015)",
    afirmacion: "El término legal que tiene la DIAN para entregar copias de documentos públicos solicitados por un ciudadano es de quince (15) días hábiles.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 14 de la Ley 1755 de 2015 fija un término perentorio y más expedito de diez (10) días hábiles para peticiones de información y documentos."
  },
  {
    id: "sd_02",
    tema: "Sistema de Control Interno (Ley 87 de 1993)",
    afirmacion: "En el Modelo de las 3 Líneas de Defensa del MECI, la primera línea de defensa está conformada por la Oficina de Control Interno / Auditoría Interna.",
    esVerdadero: false,
    explicacion: "FALSO. La primera línea de defensa son los líderes y servidores operativos del proceso (dueños directos del riesgo y del autocontrol). Control Interno es la tercera línea independiente."
  },
  {
    id: "sd_03",
    tema: "Ponderación de Pruebas DIAN 2676",
    afirmacion: "La prueba escrita de Competencias Funcionales en el concurso DIAN 2676 es de carácter eliminatorio y exige un puntaje mínimo aprobatorio de 70.00 puntos.",
    esVerdadero: true,
    explicacion: "VERDADERO. Tiene un peso del 65% y es la única prueba eliminatoria del proceso de selección (con mínimo 70.00 puntos)."
  },
  {
    id: "sd_04",
    tema: "Indicadores de Gestión",
    afirmacion: "Un programa de auditorías tributarias que ejecutó el 100% del presupuesto de viajes pero no recuperó ni el 1% de la cartera proyectada fue altamente eficaz.",
    esVerdadero: false,
    explicacion: "FALSO. Tuvo eficiencia en el gasto de recursos, pero nula eficacia porque no cumplió la meta de recaudo establecida."
  },
  {
    id: "sd_05",
    tema: "MIPG (Decreto 1499 de 2017)",
    afirmacion: "En el Modelo Integrado de Planeación y Gestión (MIPG), el Talento Humano es considerado la primera dimensión y el corazón de la gestión pública.",
    esVerdadero: true,
    explicacion: "VERDADERO. El MIPG sitúa al Talento Humano como el eje central que impulsa las demás dimensiones institucionales."
  },
  {
    id: "sd_06",
    tema: "Contratación Estatal (Ley 80 de 1993)",
    afirmacion: "El principio de selección objetiva permite a una entidad estatal fraccionar un contrato de mantenimiento de escáneres aduaneros para adjudicarlo directamente sin licitación.",
    esVerdadero: false,
    explicacion: "FALSO. El fraccionamiento de contratos está expresamente prohibido por la ley y tipifica un delito contra la administración pública (Código Penal Art. 410)."
  },
  {
    id: "sd_07",
    tema: "Integridad y Conflicto de Intereses",
    afirmacion: "Si a un auditor de la DIAN le asignan la fiscalización de la empresa donde su hermano es representante legal, debe tramitar el caso con reserva sin declararse impedido.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 11 del CPACA y el Código Disciplinario obligan a manifestar el conflicto de interés y declararse impedido inmediatamente por escrito."
  },
  {
    id: "sd_08",
    tema: "Estructura DIAN (Decreto 1742 de 2020)",
    afirmacion: "La División de Cobranzas tiene la facultad legal de determinar de oficio los tributos omitidos por un contribuyente mediante pliego de cargos.",
    esVerdadero: false,
    explicacion: "FALSO. La determinación e investigación oficial corresponde a Fiscalización y Liquidación. Cobranzas solo actúa con títulos ejecutivos previamente en firme."
  },
  {
    id: "sd_09",
    tema: "Rendición de Cuentas (Ley 1757 de 2015)",
    afirmacion: "La rendición de cuentas pública es válida únicamente cuando se entregan balances financieros sin permitir preguntas de los ciudadanos ni de las veedurías.",
    esVerdadero: false,
    explicacion: "FALSO. Exige obligatoriamente diálogo deliberativo bidireccional, lenguaje claro y respuesta motivada a las inquietudes ciudadanas."
  },
  {
    id: "sd_10",
    tema: "Medición FURAG (DAFP)",
    afirmacion: "El Formulario Único de Reporte de Avance a la Gestión (FURAG) es la herramienta mediante la cual el DAFP evalúa el desempeño institucional de las entidades del Estado.",
    esVerdadero: true,
    explicacion: "VERDADERO. Mide anualmente el avance en las políticas de gestión y desempeño de las 7 dimensiones del MIPG."
  },
  {
    id: "sd_11",
    tema: "Atención al Ciudadano (Ley 1437 de 2011)",
    afirmacion: "La DIAN puede rechazar válidamente una queja ciudadana presentada de forma verbal si el ciudadano manifiesta que no sabe leer ni escribir.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 15 del CPACA exige recibir la petición verbal, registrarla por escrito y entregar copia de radicación al peticionario."
  },
  {
    id: "sd_12",
    tema: "Precios de Transferencia y BEPS",
    afirmacion: "La cláusula general antielusión (Art. 869 E.T.) faculta a la DIAN para desconocer la forma contractual elegida por un contribuyente si esta carece de sustancia económica real.",
    esVerdadero: true,
    explicacion: "VERDADERO. La DIAN puede reclasificar la operación para fines tributarios cuando se trate de actos simulados o artificiales para eludir impuestos."
  },
  {
    id: "sd_13",
    tema: "Comprensión Lectora - Conectores Adversativos",
    afirmacion: "En los casos de juicio situacional, la presencia de conectores como 'sin embargo' o 'no obstante' suele delimitar el quiebre fáctico y el núcleo de la controversia legal a resolver.",
    esVerdadero: true,
    explicacion: "VERDADERO. La redacción psicométrica introduce los antecedentes normales y luego usa conectores adversativos para presentar la anomalía o incumplimiento que debes solucionar."
  },
  {
    id: "sd_14",
    tema: "Comprensión Lectora - Actos de Trámite vs. Definitivos",
    afirmacion: "Contra los actos preparatorios de trámite tributario, como el Requerimiento Especial o el Pliego de Cargos, procede de inmediato el Recurso de Reconsideración.",
    esVerdadero: false,
    explicacion: "FALSO. Los actos de trámite no admiten recursos gubernativos (CPACA Art. 75). Solo se contestan con descargos o corrección; el recurso solo procede contra actos definitivos (Liquidación Oficial)."
  },
  {
    id: "sd_15",
    tema: "Comprensión Lectora - Términos Procesales",
    afirmacion: "En las actuaciones administrativas tributarias, los plazos fijados en días por la ley se entienden y contabilizan como días calendario continuos incluyendo fines de semana.",
    esVerdadero: false,
    explicacion: "FALSO. Por expresa regla del Código de Régimen Político y Municipal (Ley 4 de 1913 Art. 62), los plazos en días se entienden como días HÁBILES, excluyendo sábados, domingos y feriados."
  },
  {
    id: "sd_16",
    tema: "Verbo Rector - Gestor III (Nivel Profesional)",
    afirmacion: "En una situación de evasión tributaria masiva, la conducta esperada del Gestor III (Profesional) en el examen es elegir opciones cuyo verbo rector sea 'Archivar en carpetas' o 'Fotocopiar antecedentes' para apoyar operativamente a la dependencia.",
    esVerdadero: false,
    explicacion: "FALSO. En el nivel profesional (Ficha FT-TAH-1824), esas opciones son distractores de infra-valoración asistencial. El Gestor III debe 'Formular', 'Diseñar', 'Diagnosticar' y 'Estructurar' planes y metodologías con autonomía técnica."
  },
  {
    id: "sd_17",
    tema: "Verbo Rector - Analista IV (Nivel Técnico)",
    afirmacion: "El Analista IV (Técnico en Fiscalización) tiene la potestad legal de 'Declarar el decomiso definitivo' de mercancías y 'Proferir de oficio la liquidación oficial de revisión' en sus actuaciones.",
    esVerdadero: false,
    explicacion: "FALSO. Estas opciones son distractores de usurpación funcional grave. El Analista IV 'Acompaña' la práctica de pruebas, 'Clasifica' insumos y 'Verifica' hechos, pero la potestad resolutiva y decisoria de fondo corresponde a los profesionales y autoridades con delegación expresa."
  },
  {
    id: "sd_18",
    tema: "Verbo Rector - Sustanciación vs. Decisión",
    afirmacion: "En el procedimiento tributario y administrativo de la DIAN, los servidores que sustancian un expediente tienen la función de 'Proyectar' el acto administrativo motivado, mientras que la firma y notificación legal corresponde al funcionario con competencia delegada.",
    esVerdadero: true,
    explicacion: "VERDADERO. Esta distinción es fundamental: el profesional o auditor sustancia y proyecta; el Administrador Seccional o Director suscribe el acto definitivo (CPACA y Estatuto Tributario)."
  },
  {
    id: "sd_19",
    tema: "Verbo Rector - Ficha AT-FL-2010 Analista IV",
    afirmacion: "Dentro de las funciones oficiales del Analista IV en la DIAN se encuentran expresamente: 'Acompañar' diligencias de pruebas, 'Intervenir' en destrucción de mercancías y 'Reportar' operaciones sospechosas (ROS).",
    esVerdadero: true,
    explicacion: "VERDADERO. Son tres de los verbos rectores pilares taxativamente establecidos en la Ficha AT-FL-2010 del empleo código 204 grado 04."
  }
];

const MNEMOTECNIAS = [
  {
    id: "mnem_01",
    titulo: "H-D-C-J-R: Valores de Integridad DIAN",
    formula: "Honestidad • Diligencia • Compromiso • Justicia • Respeto",
    descripcion: "Los 5 valores del Código de Integridad de la Función Pública exigidos en la prueba (10% de la convocatoria).",
    claveVisual: "Recuerda: 'Hoy Debo Cumplir la Justicia con Respeto'."
  },
  {
    id: "mnem_02",
    titulo: "Las 3 'E' de los Indicadores de Gestión",
    formula: "Eficiencia vs. Eficacia vs. Efectividad",
    descripcion: "Diferencia analítica fundamental evaluada en razonamiento y gestión pública:",
    puntos: [
      "💰 Eficiencia = Insumos y Costos (Hacer más con menos tiempo y dinero).",
      "🎯 Eficacia = Metas y Resultados (Alcanzar el objetivo programado).",
      "🌱 Efectividad = Impacto Social y Económico real sobre el problema público."
    ],
    claveVisual: "Eficiencia cuida la billetera, Eficacia cumple la meta, Efectividad transforma la realidad."
  },
  {
    id: "mnem_03",
    titulo: "3 Líneas de Defensa del Control Interno (MECI / MIPG)",
    formula: "1ª Línea (Dueña) ➔ 2ª Línea (Supervisora) ➔ 3ª Línea (Aseguradora)",
    descripcion: "Estructura obligatoria de control institucional:",
    puntos: [
      "1ª Línea: Servidores y líderes de proceso (ejecutan y mitigan el riesgo a diario).",
      "2ª Línea: Planeación, Calidad y Riesgos (diseñan políticas y supervisan).",
      "3ª Línea: Oficina de Control Interno (evalúa de forma independiente y autónoma)."
    ],
    claveVisual: "El control no lo hace solo la auditoría: empieza en tu propio escritorio (1ª Línea)."
  },
  {
    id: "mnem_04",
    titulo: "Plazos de Peticiones: Regla 10 - 15 - 30 (Ley 1755)",
    formula: "10 días (Docs) • 15 días (General) • 30 días (Consultas)",
    descripcion: "Términos legales perentorios del CPACA:",
    puntos: [
      "📄 10 días hábiles: Peticiones de copias e información (opera silencio positivo de entrega).",
      "✉️ 15 días hábiles: Término general para peticiones de interés particular o reclamos.",
      "❓ 30 días hábiles: Consultas sobre materias técnicas o jurídicas a cargo de la entidad."
    ],
    claveVisual: "10 para ver el papel, 15 para responder el deber, 30 para el concepto resolver."
  },
  {
    id: "mnem_05",
    titulo: "Las 7 Dimensiones del MIPG en Cadena",
    formula: "Talento ➔ Rumbo ➔ Gestión ➔ Evaluación ➔ Datos ➔ Saber ➔ Control",
    descripcion: "Eje estructurante de la gestión pública del Estado Colombiano:",
    puntos: [
      "1. Talento Humano (El corazón)",
      "2. Direccionamiento Estratégico y Planeación",
      "3. Gestión con Valores para el Resultado",
      "4. Evaluación de Resultados",
      "5. Información y Comunicación",
      "6. Gestión del Conocimiento y la Innovación",
      "7. Control Interno (Séptima dimensión transversal)"
    ],
    claveVisual: "Con el Talento en el Rumbo, Gestionamos y Evaluamos con Datos, creando Saber bajo Control."
  },
  {
    id: "mnem_06",
    titulo: "Técnica E-I-C de Comprensión Lectora Forense",
    formula: "Escaneo (8 seg) ➔ Interrogante (Pregunta en Negrilla) ➔ Conexión Focalizada",
    descripcion: "Estrategia para resolver casos extensos de 3 o 4 párrafos en menos de 90 segundos:",
    puntos: [
      "👁️ Escaneo: Barrido visual rápido buscando Fechas, Cifras, UVT y Nombres de dependencias.",
      "❓ Interrogante: Leer con precisión quirúrgica la pregunta final antes del texto largo.",
      "🎯 Conexión: Regresar solo al párrafo donde reposa el dato determinante (evita relecturas completas)."
    ],
    claveVisual: "No leas como novela: escanea como auditor y responde como juez."
  },
  {
    id: "mnem_07",
    titulo: "Regla V-N-C: Triángulo Psicométrico del Verbo Rector",
    formula: "V (Verbo de Pregunta) ➔ N (Nivel del Cargo) ➔ C (Competencia Legal)",
    descripcion: "Filtro en 3 pasos para acertar preguntas situacionales en 30 segundos:",
    puntos: [
      "📌 1. Verbo: ¿La pregunta pide 'Formular', 'Acompañar', 'Verificar' o 'Proyectar'?",
      "💼 2. Nivel: Profesional = Formulación y Sustanciación / Técnico = Verificación y Apoyo operativo.",
      "⚖️ 3. Competencia: Descarta opciones con atajos ilegales, pasividad o usurpación de directores."
    ],
    claveVisual: "Si el verbo no encaja en tu nivel, la opción es una trampa de papel."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SPEED_DRILLS, MNEMOTECNIAS };
}
