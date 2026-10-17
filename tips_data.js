/**
 * BANCO MAESTRO DE CLAVES Y TIPS DE JUICIO SITUACIONAL (CNSC / DIAN)
 * Especializado para GESTOR III - DIAN 2676 (OPEC 242703)
 */

const TIPS_PJS_DATA = [
  {
    id: 1,
    numero: "1",
    titulo: "Principio de Legalidad Estricta y Reserva de Ley",
    categoria: "Constitución y Legalidad",
    icono: "⚖️",
    color: "#f59e0b",
    resumenCorto: "El servidor público solo hace lo expresamente facultado por ley. Descarta atajos informales o justificaciones basadas en urgencia.",
    normaReferencia: "Constitución Política Arts. 6, 121 y 122",
    contenidoDetallado: `En el derecho público rige el principio restrictivo: mientras los particulares pueden hacer todo lo que no esté prohibido, los servidores públicos <strong>únicamente pueden hacer lo que la Constitución y la ley les faculta de forma taxativa</strong>.<br><br>
    <strong>Trampa habitual en la prueba:</strong> Opciones que proponen "acuerdos verbales", "saltarse la verificación formal para ganar tiempo" o "priorizar la urgencia operativa sobre el procedimiento reglado".<br><br>
    <strong>Regla de oro:</strong> La urgencia institucional jamás subsana la omisión de un trámite legal obligatorio. Si el Estatuto Tributario o el CPACA exigen acto motivado o constancia previa, cualquier atajo es nulo y constituye falta disciplinaria.`
  },
  {
    id: 2,
    numero: "2",
    titulo: "Anatomía de Opciones en Juicio Situacional (A, B, C)",
    categoria: "Técnica de Examen",
    icono: "🎯",
    color: "#60a5fa",
    resumenCorto: "Diferencia la Clave Integral del Distractor Plausible (suena rápida pero omite formalidades) y del Distractor Punitivo.",
    normaReferencia: "Metodología Oficial de Evaluación CNSC - PJS",
    contenidoDetallado: `Las preguntas de juicio situacional de la CNSC se estructuran con 3 opciones estandarizadas:<br><br>
    1. <strong>La Clave (Respuesta Correcta):</strong> Es integral, respeta el debido proceso, deja trazabilidad probatoria escrita, formula soluciones estructurales y se ajusta a la competencia del cargo.<br>
    2. <strong>El Distractor Plausible (La Trampa Principal):</strong> Parece una respuesta muy ejecutiva, moderna o amable, pero omite un paso formal obligatorio (ej. no deja constancia, no notifica legalmente o delega lo indelegable).<br>
    3. <strong>El Distractor Extremo:</strong> Es pasivo ("no hacer nada y esperar"), arbitrario o excesivamente punitivo sin agotar etapas previas.<br><br>
    <strong>Regla de oro:</strong> Pregúntate siempre: <em>"¿Esta opción deja expediente con trazabilidad legal de principio a fin?"</em> Si la respuesta es no, descártala.`
  },
  {
    id: 3,
    numero: "3",
    titulo: "Técnica de Lectura Inversa (Regla de los 90 Segundos)",
    categoria: "Gestión del Tiempo",
    icono: "⏱️",
    color: "#818cf8",
    resumenCorto: "Lee primero la última frase interrogativa en negrilla. Sabrás de inmediato si te piden un término legal, una ruta procesal o una competencia.",
    normaReferencia: "Estrategia Psicométrica para Pruebas Escritas Masivas",
    contenidoDetallado: `Los casos situacionales de la DIAN suelen tener 3 o 4 párrafos cargados de antecedentes contables, liquidaciones o descargos voluminosos.<br><br>
    • <strong>Paso 1:</strong> Lee de inmediato el <strong>enunciado final interrogativo en negrilla</strong> antes de leer todo el texto largo.<br>
    • <strong>Paso 2:</strong> Identifica el rol que te asignan (¿Gestor de Fiscalización, Liquidador, Notificador o Auditor Interno?).<br>
    • <strong>Paso 3:</strong> Lee el cuerpo del caso filtrando únicamente las fechas clave, estados de cuenta y hechos probados relevantes para la pregunta.<br><br>
    <strong>Efecto:</strong> Ahorras hasta un 40% del tiempo de lectura por pregunta y evitas la fatiga cognitiva en sesiones de más de 100 preguntas.`
  },
  {
    id: 4,
    numero: "4",
    titulo: "Nivel Profesional (Gestor III) vs. Nivel Asistencial/Técnico",
    categoria: "Competencias del Empleo",
    icono: "💼",
    color: "#4ade80",
    resumenCorto: "Se evalúa análisis de causas, modelado de riesgos y propuesta técnica fundada, no el traslado ciego del expediente ni la pasividad.",
    normaReferencia: "Decreto 815 de 2018 y Manual Específico de Funciones DIAN",
    contenidoDetallado: `En el nivel profesional Gestor III de la DIAN, el evaluador califica tu <strong>autonomía técnica, juicio analítico y capacidad propositiva</strong>.<br><br>
    <strong>Opciones incorrectas frecuentes:</strong><br>
    • "Dar traslado inmediato del caso a la Oficina Jurídica sin análisis previo."<br>
    • "Consultar con el jefe inmediato qué decidir ante la duda procesal."<br>
    • "Limitarse a archivar o radicar el documento sin verificar el fondo."<br><br>
    <strong>Respuesta ganadora:</strong> El profesional elabora el informe técnico motivado, contrasta las bases de datos aduaneras/tributarias, calcula el impacto financiero del riesgo y proyecta la actuación legal sustentada lista para revisión.`
  },
  {
    id: 5,
    numero: "5",
    titulo: "Tolerancia Cero e Integridad Pública (Impedimentos y Denuncia)",
    categoria: "Ética e Integridad",
    icono: "🛡️",
    color: "#f87171",
    resumenCorto: "Cualquier dádiva se rechaza de plano y se denuncia. Ante conflicto de interés o familiaridad, declárate impedido inmediatamente.",
    normaReferencia: "Ley 1952/2019 (Código Disciplinario) y Ley 1437/2011 Art. 11",
    contenidoDetallado: `La prueba de Integridad DIAN tiene un peso evaluativo obligatorio y exige rigor moral absoluto:<br><br>
    1. <strong>Ofertas indebidas:</strong> Si un contribuyente, usuario o apoderado ofrece regalos, atenciones, becas, hospedajes o beneficios: se <strong>rechaza de inmediato</strong>, se levanta acta formal en el expediente y se radica denuncia ante la División de Control Disciplinario y Fiscalía.<br>
    2. <strong>Conflictos de Interés:</strong> Si el contribuyente auditado es familiar (hasta 4º de consanguinidad, 2º de afinidad), socio, amigo íntimo o contraparte en litigios: la única conducta correcta es <strong>declararse impedido por escrito ante el superior jerárquico</strong> de manera inmediata, absteniéndose de cualquier gestión.`
  },
  {
    id: 6,
    numero: "6",
    titulo: "Autocontrol en MIPG (1ª Línea de Defensa Operativa)",
    categoria: "Gestión Pública y Control Interno",
    icono: "🏢",
    color: "#38bdf8",
    resumenCorto: "El autocontrol del riesgo corresponde al servidor operativo (1ª Línea). Control Interno (3ª Línea) evalúa ex-post y nunca coadministra.",
    normaReferencia: "Decreto 1499 de 2017 y Manual Operativo MIPG",
    contenidoDetallado: `El Modelo Estándar de Control Interno (MECI) articulado al MIPG define con precisión las Tres Líneas de Defensa:<br><br>
    • <strong>1ª Línea (Línea Estratégica y Operativa):</strong> Servidores y coordinadores que ejecutan los trámites a diario. Son los <strong>dueños absolutos de los riesgos y controles</strong>.<br>
    • <strong>2ª Línea (Supervisión y Monitoreo):</strong> Áreas de planeación, riesgos y calidad que definen metodologías.<br>
    • <strong>3ª Línea (Control Interno / Auditoría):</strong> Evaluación independiente ex-post.<br><br>
    <strong>Trampa común:</strong> Respuestas que afirmen que "Control Interno debe revisar o autorizar previamente el requerimiento tributario". Control Interno jamás es coadministrador ni juez previo de actuaciones operativas.`
  },
  {
    id: 7,
    numero: "7",
    titulo: "Debido Proceso Administrativo y Notificaciones Formales",
    categoria: "Procedimiento Tributario y Sancionatorio",
    icono: "📑",
    color: "#fbbf24",
    resumenCorto: "La notificación electrónica legal es obligatoria. Avisos informales por teléfono o chat no surten efectos y acarrean nulidad.",
    normaReferencia: "Constitución Política Art. 29 y Estatuto Tributario Arts. 563 a 568",
    contenidoDetallado: `Todo acto que liquide tributos, imponga sanciones aduaneras o decida recursos debe ser notificado en debida forma legal:<br><br>
    • La <strong>notificación electrónica</strong> en el buzón registrado ante el RUT es el medio preferente en la DIAN. El término para responder o recurrir corre a partir del día hábil siguiente a la entrega del correo o confirmación.<br>
    • Notificaciones verbales, llamadas telefónicas o mensajes informales de chat carecen de validez procesal.<br><br>
    <strong>Regla de oro:</strong> Una indebida notificación vulnera el derecho a la defensa y causa la nulidad insanable de la liquidación oficial. Descarta opciones que omitan la formalidad legal de notificación.`
  },
  {
    id: 8,
    numero: "8",
    titulo: "Motivación del Acto vs. Desviación de Poder y Arbitrariedad",
    categoria: "Derecho Administrativo",
    icono: "⚖️",
    color: "#a855f7",
    resumenCorto: "Toda decisión de la DIAN debe fundarse en pruebas idóneas y normas exactas. La sospecha sin prueba jamás justifica una sanción.",
    normaReferencia: "CPACA (Ley 1437 de 2011) Arts. 44 y 137",
    contenidoDetallado: `La facultad fiscalizadora y sancionatoria del Estado no es discrecionalidad abierta ni capricho del auditor:<br><br>
    • Todo requerimiento, pliego de cargos o liquidación oficial de revisión debe contener una <strong>motivación clara, suficiente y sustentada</strong>: hechos probados (pruebas documentales, cruces de información exógena, inspección tributaria) y normas infringidas.<br>
    • Sancionar o desconocer deducciones por simple presunción no amparada en la ley configura <em>desviación de poder</em> y acarrea responsabilidad disciplinaria y patrimonial para el funcionario.<br><br>
    <strong>Clave CNSC:</strong> La respuesta acertada siempre sustenta el acervo probatorio antes de proferir el acto sancionatorio.`
  },
  {
    id: 9,
    numero: "9",
    titulo: "Reserva Legal Estricta de la Información Tributaria y Aduanera",
    categoria: "Custodia de Datos y Confidencialidad",
    icono: "🔒",
    color: "#ec4899",
    resumenCorto: "Las declaraciones y expedientes DIAN son reservados. Ni periodistas, ni veedores, ni terceros pueden acceder sin mandato judicial.",
    normaReferencia: "Estatuto Tributario Art. 583 y Ley Estatutaria 1581 de 2012",
    contenidoDetallado: `La información suministrada por los contribuyentes en sus declaraciones de renta, IVA, aduanas y retenciones está amparada por <strong>reserva legal estricta</strong> (Art. 583 E.T.):<br><br>
    • Si un medio de comunicación, veedor ciudadano, congresista o familiar pide estados financieros o copias de declaraciones de un tercero, la respuesta correcta es <strong>negar la solicitud motivando la reserva legal expresa</strong>.<br>
    • La reserva solo cede ante órdenes de autoridades judiciales en procesos penales, procesos de alimentos o requerimientos de autoridades tributarias homólogas bajo convenios internacionales.<br><br>
    <strong>Violación:</strong> Revelar información reservada constituye falta gravísima y delito de violación de reserva procesal.`
  },
  {
    id: 10,
    numero: "10",
    titulo: "Orientación al Usuario y Manejo Asertivo del Conflicto",
    categoria: "Atención al Ciudadano y Asertividad",
    icono: "🤝",
    color: "#10b981",
    resumenCorto: "Frente a ciudadanos exaltados: escucha activa, lenguaje técnico sereno, ceñirse a protocolos y no tomar la agresión como algo personal.",
    normaReferencia: "Decreto 815 de 2018 (Competencias Comportamentales Comunes)",
    contenidoDetallado: `En pruebas situacionales se evalúa cómo reaccionas ante usuarios molestos por embargos, demoras o liquidaciones de aforo:<br><br>
    • <strong>Conductas de alta efectividad:</strong> Mantener la serenidad emocional, usar lenguaje claro y desprovisto de tecnicismos hostiles, explicar el fundamento legal del trámite y orientar sobre los recursos procedentes en la ventanilla o canal oficial.<br>
    • <strong>Conductas descartables:</strong> Confrontar al usuario con el mismo tono agresivo, amenazarlo con usar la fuerza pública sin agotar el diálogo o prometer levantar medidas cautelares sin sustento legal solo para calmarlo.`
  },
  {
    id: 11,
    numero: "11",
    titulo: "Jerarquía Normativa y Prevalencia Constitucional",
    categoria: "Hermenéutica Jurídica",
    icono: "🏛️",
    color: "#06b6d4",
    resumenCorto: "Constitución > Ley/Estatuto > Decretos > Resoluciones DIAN. Ante contradicción abierta con la ley, prima el ordenamiento superior.",
    normaReferencia: "Constitución Política Art. 4 (Norma de Normas)",
    contenidoDetallado: `Al analizar normas concurrentes en situaciones aduaneras o tributarias, aplica el orden de jerarquía formal:<br><br>
    1. Constitución Política y Bloque de Constitucionalidad (Convenios OIT, Derechos Humanos).<br>
    2. Estatuto Tributario, Código de Procedimiento Administrativo (CPACA) y Leyes del Congreso.<br>
    3. Decretos Reglamentarios Únicos (Decreto 1625 de 2016 en Materia Tributaria).<br>
    4. Resoluciones, Circulares y Conceptos Jurídicos Generales de la DIAN.<br><br>
    <strong>Criterio evaluativo:</strong> Los conceptos doctrinarios de la DIAN obligan a sus empleados, pero jamás pueden derogar ni desbordar el texto expreso de la ley tributaria creada por el legislador.`
  },
  {
    id: 12,
    numero: "12",
    titulo: "Firmeza de Declaraciones y Caducidad de la Fiscalización",
    categoria: "Términos Procesales y Preclusión",
    icono: "⏳",
    color: "#eab308",
    resumenCorto: "La DIAN pierde competencia para modificar declaraciones si vence el término perentorio de firmeza (generalmente 3 años).",
    normaReferencia: "Estatuto Tributario Arts. 705 y 714",
    contenidoDetallado: `El Estado no tiene facultades sancionatorias infinitas en el tiempo. La seguridad jurídica protege al administrado mediante la figura de la <strong>firmeza tributaria</strong>:<br><br>
    • La declaración tributaria queda en firme transcurridos 3 años desde el vencimiento del plazo para declarar (o desde la fecha de presentación si fue extemporánea), siempre que no se haya notificado Requerimiento Especial.<br>
    • Si un funcionario profiere un requerimiento especial un día después de vencido el término legal de firmeza, el acto adolece de <em>falta de competencia temporal</em> y es insanablemente nulo.<br><br>
    <strong>Enfoque Gestor III:</strong> El profesional debe auditar prioritariamente los expedientes con riesgo inminente de vencimiento para salvaguardar el recaudo público de la Nación.`
  },
  {
    id: 13,
    numero: "13",
    titulo: "Método E-P-C de Descomposición Textual (Enunciado, Premisa, Clave)",
    categoria: "Comprensión Lectora",
    icono: "📖",
    color: "#38bdf8",
    resumenCorto: "Descompón el caso en 3 capas: 1) Verbo rector final, 2) Premisa fáctica probada, 3) Clave de congruencia.",
    normaReferencia: "Estrategia Psicométrica para Textos Jurídicos Complejos",
    contenidoDetallado: `Los casos de la CNSC están redactados con estructuras narrativas densas para medir tu resistencia a la fatiga y tu capacidad de abstracción analítica:<br><br>
    • <strong>E (Enunciado final):</strong> Lee siempre primero la última frase interrogativa. Contiene el verbo de acción exigido (ej. <em>"¿Qué actuación inmediata debe adelantar el Gestor?"</em> o <em>"¿Cuál es el vicio procesal presentado?"</em>).<br>
    • <strong>P (Premisa fáctica central):</strong> Busca en el texto largo únicamente dos cosas: los <em>hechos probados</em> y las <em>fechas/cifras</em>. Ignora adjetivos y quejas subjetivas de los involucrados.<br>
    • <strong>C (Clave congruente):</strong> La opción correcta debe conectar directamente con el verbo del enunciado, sin desviarse a temas colaterales aunque sean ciertos.`
  },
  {
    id: 14,
    numero: "14",
    titulo: "Detección de Cuantificadores Absolutos y Trampas Semánticas",
    categoria: "Comprensión Lectora",
    icono: "🚨",
    color: "#f87171",
    resumenCorto: "Alerta roja ante: 'siempre', 'jamás', 'exclusivamente', 'sin excepción'. En derecho administrativo casi todo trámite tiene excepción reglamentaria.",
    normaReferencia: "Semántica Jurídica y Teoría de la Argumentación",
    contenidoDetallado: `En las opciones de respuesta, los redactores del examen suelen fabricar distractores agregando adverbios o cuantificadores absolutos que convierten una premisa válida en una falsedad jurídica:<br><br>
    • <strong>Cuantificadores de ALERTA ROJA (90% probabilidad de ser distractor):</strong> <em>"siempre", "nunca", "en ningún caso", "de manera inapelable", "de plano sin audiencia", "únicamente", "automáticamente"</em>.<br>
    • <strong>Cuantificadores de ALTA CONGRUENCIA (habitual en la Clave):</strong> <em>"previa verificación", "dejando constancia motivada", "dentro del término legal establecido", "garantizando el derecho de contradicción", "conforme a la competencia legal"</em>.<br><br>
    <strong>Regla de oro:</strong> Si una opción afirma que la administración puede actuar <em>"de inmediato sin mediar trámite previo"</em>, casi con certeza vulnera el Art. 29 de la Constitución.`
  },
  {
    id: 15,
    numero: "15",
    titulo: "Separación de Hechos Probados vs. Ruido Narrativo y Quejas",
    categoria: "Comprensión Lectora",
    icono: "🔍",
    color: "#a855f7",
    resumenCorto: "Filtra el texto distinguiendo entre lo que está DOCUMENTADO (pruebas, actos, fechas) y las meras opiniones o quejas de pasillo.",
    normaReferencia: "Régimen Probatorio CPACA Art. 168 y Estatuto Tributario Art. 742",
    contenidoDetallado: `Un caso situacional estándar de la DIAN contiene entre un 40% y un 60% de <strong>ruido narrativo</strong> (ej. <em>"el contribuyente visiblemente molesto manifestó que la DIAN lo persigue"</em> o <em>"el auditor anterior tenía sospechas sobre la veracidad del inventario"</em>):<br><br>
    • Las sospechas, molestias o comentarios de terceros <strong>carecen de valor probatorio</strong> para la toma de decisiones del Gestor III.<br>
    • Subraya mentalmente solo los <strong>Hechos Jurídicos Firmes</strong>: fechas de radicación en el sistema oficial, liquidaciones notificadas, certificados de existencia y representación, y pruebas documentales allegadas al expediente.<br><br>
    <strong>Acierto:</strong> Decide con base en el expediente formal, jamás con base en rumores o suposiciones del relato.`
  },
  {
    id: 16,
    numero: "16",
    titulo: "Trazabilidad Temporal y Línea de Tiempo Mental (Hitos Procesales)",
    categoria: "Comprensión Lectora",
    icono: "📅",
    color: "#fbbf24",
    resumenCorto: "Organiza mentalmente la cronología: Fecha declaración ➔ Fecha requerimiento ➔ Vencimiento. Te delata caducidades o silencios en segundos.",
    normaReferencia: "Cómputo de Términos Legales - Ley 4 de 1913 y Código General del Proceso",
    contenidoDetallado: `Las preguntas funcionales complejas en fiscalización y cobro coactivo ocultan la respuesta correcta en la cronología de las fechas:<br><br>
    • <strong>Construye la Línea de Tiempo Mental:</strong><br>
      1️⃣ <em>Hito Inicial:</em> Fecha en que se radicó la declaración o se cometió la presunta infracción aduanera.<br>
      2️⃣ <em>Hito Intermedio:</em> Fecha en que la DIAN notificó el primer acto formal (Emplazamiento, Auto de Inspección o Requerimiento Especial).<br>
      3️⃣ <em>Hito Final:</em> Fecha límite para que el administrado responda o para que la administración liquide.<br><br>
    <strong>Alerta de lectura:</strong> Verifica si los plazos están dados en <em>días hábiles</em> (términos de meses/días en el CPACA y Estatuto Tributario) o <em>días calendario</em>. Si la administración actuó fuera de término, la opción correcta siempre apunta a la firmeza o pérdida de competencia.`
  },
  {
    id: 17,
    numero: "17",
    titulo: "Lectura del Rol y Congruencia de Competencia Funcional",
    categoria: "Comprensión Lectora",
    icono: "👔",
    color: "#10b981",
    resumenCorto: "¿Quién eres en el caso? Muchos distractores plantean medidas legales correctas pero que le corresponden a OTRA dependencia o autoridad.",
    normaReferencia: "Manual de Funciones DIAN y Principio de Competencia Administrativa",
    contenidoDetallado: `Uno de los distractores más difíciles de detectar es la <strong>opción jurídicamente válida pero incompetente por el rol</strong>:<br><br>
    • Si el caso te define como <em>Gestor III en Fiscalización Tributaria</em>, tu labor es investigar, cruzar bases de datos y proyectar el Requerimiento Especial. No te compete proferir la Liquidación Oficial de Revisión (función del área de Liquidación), ni dictar mandamiento de pago (Cobranzas), ni interponer denuncia penal a título personal sin el trámite institucional.<br>
    • Si te presentan una opción perfecta pero reservada al <em>Director Seccional</em> o al <em>Juez Administrativo</em>, esa opción es un <strong>distractor de incompetencia</strong>.<br><br>
    <strong>Técnica:</strong> Pregúntate siempre: <em>"¿Mi cargo de Gestor III tiene la facultad reglamentaria directa para ejecutar esta acción?"</em>`
  },
  {
    id: 18,
    numero: "18",
    titulo: "Filtro de la 'Verdad Innegable' vs. la 'Verdad Preguntada'",
    categoria: "Comprensión Lectora",
    icono: "🎯",
    color: "#f59e0b",
    resumenCorto: "No marques una opción solo porque 'es una gran verdad legal'. Verifica que responda con exactitud al problema que el caso planteó.",
    normaReferencia: "Hermenéutica de Preguntas de Opción Múltiple con Única Respuesta",
    contenidoDetallado: `Es el error más común de los profesionales con sólidos conocimientos jurídicos en las pruebas de la CNSC:<br><br>
    • El aspirante lee la Opción B, reconoce que reproduce casi textualmente un artículo de la Constitución o del Estatuto Tributario, y la marca sin dudar.<br>
    • <strong>El engaño:</strong> Aunque la frase es 100% cierta en el ordenamiento jurídico, <strong>no resuelve la situación planteada en el caso</strong>.<br><br>
    <strong>Ejemplo real:</strong> Si el caso pregunta <em>"¿Qué actuación inmediata debe realizar para suspender el término de prescripción?"</em>, una opción que explique maravillosamente qué es la prescripción o cuándo opera no responde a la pregunta de acción procesal.<br><br>
    <strong>Test de congruencia:</strong> Junta la pregunta del enunciado con la opción elegida usando la palabra <em>'porque'</em> o <em>'mediante'</em>. Si no encajan de forma lógica y directa, es un distractor de desvío temático.`
  },
  {
    id: 19,
    numero: "19",
    titulo: "Régimen Sancionatorio Aduanero: Decomiso vs. Multa y Legalización",
    categoria: "Régimen Aduanero",
    icono: "🚢",
    color: "#0284c7",
    resumenCorto: "La aprehensión material solo procede por falta de amparo documental o mercancía distinta. Errores menores permiten legalización.",
    normaReferencia: "Decreto 1165 de 2019 y Decreto 659 de 2024",
    contenidoDetallado: `En materia aduanera, la pérdida definitiva de la propiedad de las mercancías a favor de la Nación (decomiso) es la medida más gravosa:<br><br>
    • Procede la <strong>aprehensión y decomiso</strong> cuando la mercancía ingresó por lugar no habilitado, no fue declarada o no coincide en naturaleza, marca y seriales con los documentos de transporte.<br>
    • Si se trata de un simple <strong>error formal de transcripción</strong> o descripción incompleta que no impida la individualización de la carga, la ley faculta la <em>declaración de legalización voluntaria</em> con pago del rescate, sin decomiso material.<br><br>
    <strong>Clave de examen:</strong> Desecha opciones que pretendan decomisar mercancías por errores subsanables o que omitan levantar el acta de aprehensión obligatoria en el momento de la inspección.`
  },
  {
    id: 20,
    numero: "20",
    titulo: "Facturación Electrónica y Sanción de Clausura del Establecimiento",
    categoria: "Procedimiento Tributario",
    icono: "🏪",
    color: "#e11d48",
    resumenCorto: "El cierre por 3 días exige acta de visita de no expedición y pliego de cargos previo con 10 días para responder. Jamás cierre de hecho.",
    normaReferencia: "Estatuto Tributario Arts. 657 y 684-2",
    contenidoDetallado: `La no expedición de la factura electrónica o su expedición sin los requisitos de ley acarrea la sanción de clausura del establecimiento por 3 días:<br><br>
    • <strong>Debido proceso obligatorio:</strong> La DIAN no puede cerrar un local mercantil de forma inmediata o sorpresiva durante la visita de control. Los funcionarios deben levantar el <em>acta de visita de control formal</em> suscrita con el comerciante.<br>
    • Posteriormente se formula el <strong>Pliego de Cargos</strong>, concediendo al contribuyente el término legal de <strong>10 días hábiles</strong> para que ejerza su derecho a la defensa y aporte pruebas.<br><br>
    <strong>Trampa CNSC:</strong> Opciones que afirmen que los auditores proceden a <em>"colocar de inmediato los sellos de clausura durante la diligencia de inspección"</em>. Eso constituye vía de hecho e irregularidad procesal sancionable.`
  },
  {
    id: 21,
    numero: "21",
    titulo: "Diferencia Sustancial: No Sujeción vs. Exención Tributaria",
    categoria: "Derecho Tributario Sustantivo",
    icono: "📑",
    color: "#14b8a6",
    resumenCorto: "En la No Sujeción el hecho generador nunca nació para la ley; en la Exención nació pero la norma libera del pago.",
    normaReferencia: "Principios Generales del Derecho Tributario Colombiano",
    contenidoDetallado: `Diferenciar con precisión estos dos conceptos evita confusiones graves al calificar liquidaciones oficiales:<br><br>
    • <strong>No Sujeción:</strong> La operación o actividad económica no encaja en la definición legal del hecho generador (ej. las indemnizaciones por daño emergente en el impuesto de renta). No hay obligación tributaria sustancial ni deber de presentar declaración por ese concepto.<br>
    • <strong>Exención:</strong> La actividad sí configura plenamente el hecho generador, pero el legislador por política pública decide exonerar del gravamen (ej. rentas exentas hoteleras o de economía naranja). Exige cumplir todos los requisitos de control formal y declarar.<br><br>
    <strong>Acierto:</strong> Si una opción afirma que un ingreso no gravado debe tratarse como renta exenta para glosarlo por no pedir certificado, es un distractor técnico.`
  },
  {
    id: 22,
    numero: "22",
    titulo: "Notificación por Conducta Concluyente en Materia Administrativa",
    categoria: "Procedimiento Administrativo",
    icono: "🤝",
    color: "#8b5cf6",
    resumenCorto: "Si el contribuyente radica descargos o recursos antes de la notificación formal, se entiende notificado desde la radicación.",
    normaReferencia: "CPACA (Ley 1437 de 2011) Art. 72",
    contenidoDetallado: `¿Qué ocurre si la DIAN cometió un error en el envío del correo electrónico de notificación, pero el contribuyente presenta su recurso demostrando conocer el acto?<br><br>
    • Opera la <strong>Notificación por Conducta Concluyente</strong>: La parte interesada se da por enterada del contenido del acto administrativo en la fecha en que presente el escrito, interponga los recursos procedentes o manifieste expresamente su conocimiento.<br>
    • Esto <em>sanea cualquier vicio previo en la notificación formal</em> y reactiva el cómputo de términos a favor de la administración para resolver.<br><br>
    <strong>Regla de oro:</strong> Si el administrado ya contestó de fondo el requerimiento, la administración no necesita reiniciar el trámite de notificación electrónica.`
  },
  {
    id: 23,
    numero: "23",
    titulo: "Saneamiento de Vicios Procesales y Principio de Eficacia",
    categoria: "Derecho Procesal Administrativo",
    icono: "⚖️",
    color: "#64748b",
    resumenCorto: "No todo error formal causa nulidad. Si no afectó la defensa ni el sentido del fallo, la DIAN debe sanear de oficio y fallar de fondo.",
    normaReferencia: "CPACA Art. 84, Art. 137 y Constitución Art. 228",
    contenidoDetallado: `En la administración pública prima el derecho sustancial sobre las formas procesales vacías (Art. 228 C.P.):<br><br>
    • Errores mecanográficos en el número de expediente, omisión de folios de archivo o yerros menores en citas no determinantes <strong>no configuran nulidad insanable</strong>.<br>
    • La actuación debe ser convalidada o subsanada mediante auto de trámite motivado, garantizando que el administrado conozca el expediente.<br><br>
    <strong>Clave CNSC:</strong> La respuesta acertada busca siempre sanear el proceso y resolver el fondo de la obligación tributaria, en lugar de anular todo el expediente y archivar sin recaudo.`
  },
  {
    id: 24,
    numero: "24",
    titulo: "Valor Probatorio de la Información Exógena (Reporte de Terceros)",
    categoria: "Fiscalización y Prueba Tributaria",
    icono: "📊",
    color: "#059669",
    resumenCorto: "La exógena es solo prueba indiciaria. La DIAN no puede liquidar oficialmente sin requerir al contribuyente para cotejar su contabilidad.",
    normaReferencia: "Estatuto Tributario Arts. 631 y 742 a 746",
    contenidoDetallado: `Un error clásico de fiscalización es asumir que lo reportado en medios magnéticos por un tercero es verdad irrefutable:<br><br>
    • La información exógena constituye un <strong>indicio grave orientador</strong>, pero no constituye por sí sola plena prueba para expedir una Liquidación Oficial de Revisión.<br>
    • Si un tercero reportó compras que el contribuyente desconoce, la DIAN tiene el deber de expedir <em>Emplazamiento para Corregir o Auto de Inspección Tributaria</em>, solicitando libros de contabilidad, facturas y soportes de pago.<br><br>
    <strong>Acierto:</strong> El Gestor III no liquida a ciegas con la exógena; formula el requerimiento probatorio para cotejar la realidad contable de ambas partes.`
  },
  {
    id: 25,
    numero: "25",
    titulo: "Firmeza Especial por Beneficio de Auditoría (Términos Abreviados)",
    categoria: "Términos Procesales y Preclusión",
    icono: "⚡",
    color: "#f59e0b",
    resumenCorto: "Si el impuesto neto se incrementó en 35% o 25%, la firmeza opera en 6 o 12 meses. La DIAN pierde competencia si no emplaza a tiempo.",
    normaReferencia: "Estatuto Tributario Art. 689-3",
    contenidoDetallado: `El Beneficio de Auditoría es una prerrogativa legal que premia a los contribuyentes que incrementan voluntariamente su tributación:<br><br>
    • Si el impuesto neto de renta aumentó mínimo un <strong>35%</strong> respecto al año anterior: firmeza definitiva en <strong>6 meses</strong> contados desde la presentación oportuna.<br>
    • Si el aumento fue de mínimo un <strong>25%</strong>: firmeza en <strong>12 meses</strong>.<br><br>
    <strong>Enfoque Gestor III:</strong> El profesional debe verificar con máxima urgencia si una declaración cuenta con este beneficio, ya que si transcurren los 6 o 12 meses sin notificación de Emplazamiento para Corregir, la declaración adquiere firmeza inmutable.`
  },
  {
    id: 26,
    numero: "26",
    titulo: "Asertividad y Gestión de Metas de Recaudo sin Vulnerar la Ética",
    categoria: "Competencias Comportamentales",
    icono: "🌟",
    color: "#d946ef",
    resumenCorto: "Ante metas exigentes de fiscalización: prioriza cartera de alto impacto y optimiza procesos. Jamás presiones coactivas ilegales.",
    normaReferencia: "Decreto 815 de 2018 y Manual de Funciones Gestor III",
    contenidoDetallado: `En pruebas comportamentales para cargos misionales de la DIAN se somete al aspirante a escenarios de alta tensión institucional:<br><br>
    • <strong>Escenario:</strong> La seccional está rezagada en la meta de recaudo del trimestre y la dirección exige resultados urgentes.<br>
    • <strong>Respuesta de excelencia profesional:</strong> Realizar segmentación analítica de la cartera (Principio de Pareto: 80/20), priorizar los omisos y morosos de mayor cuantía con riesgo inminente de prescripción, y coordinar cruces masivos con facturación electrónica.<br>
    • <strong>Respuestas descartables:</strong> Imponer sanciones desproporcionadas a pequeños comerciantes informales solo para abultar las cifras estadísticas, o exigir horas extras no autorizadas al equipo de trabajo.`
  },
  {
    id: 27,
    numero: "27",
    titulo: "La Trampa de la Causa Falsa (Falacia Post Hoc) en Casos de Fiscalización",
    categoria: "Comprensión Lectora",
    icono: "🔎",
    color: "#38bdf8",
    resumenCorto: "Que un hecho ocurra tras otro no prueba causalidad. Descarta opciones que sancionen sin probar el nexo causal directo.",
    normaReferencia: "Régimen Probatorio CPACA Art. 168 y Estatuto Tributario Art. 742",
    contenidoDetallado: `En los textos de la CNSC suele relatarse que una empresa cambió de contador y al mes siguiente bajó su recaudo de IVA:<br><br>
    • <strong>El error de lectura:</strong> Asumir automáticamente que el nuevo contador comete evasión. La simultaneidad temporal no constituye prueba jurídica.<br>
    • <strong>Criterio oficial:</strong> La administración tributaria solo puede proferir pliego de cargos si demuestra el <em>nexo causal objetivo</em> (maniobra fraudulenta, omisión de ingresos o facturas falsas) mediante pruebas directas.<br><br>
    <strong>Clave de descarte:</strong> Si una opción sugiere sancionar o liquidar de aforo basándose únicamente en la coincidencia cronológica, descártala por falta de motivación probatoria.`
  },
  {
    id: 28,
    numero: "28",
    titulo: "Detección del Distractor de 'Ampliación Injustificada del Objeto Investigativo'",
    categoria: "Comprensión Lectora",
    icono: "🎯",
    color: "#f59e0b",
    resumenCorto: "Si el caso versa sobre IVA bimestral, descarta opciones que propongan auditar Renta o Precios de Transferencia sin previo auto ampliatorio.",
    normaReferencia: "Estatuto Tributario Arts. 684 y 779 (Límites del Auto de Inspección)",
    contenidoDetallado: `Un distractor recurrente para medir la precisión del Gestor III es la extralimitación temática:<br><br>
    • <strong>Escenario típico:</strong> Se abre inspección para verificar retenciones en la fuente de enero a marzo. En la visita, el auditor nota posibles subfacturaciones de importaciones de hace dos años.<br>
    • <strong>La trampa:</strong> La opción incorrecta propone incautar libros y glosar renta de inmediato en la misma acta.<br>
    • <strong>La regla de oro:</strong> Los actos de inspección tienen un <em>objeto delimitado</em>. Si surgen nuevos hallazgos, se proyecta un informe motivado para solicitar la apertura de un nuevo programa o ampliación formal del auto comisorio.<br><br>
    <strong>Acierto:</strong> Mantén la respuesta estrictamente ceñida al objeto delimitado en el enunciado.`
  },
  {
    id: 29,
    numero: "29",
    titulo: "Rastreo de Conectores Adversativos (El Pivote Oculto: 'Sin embargo' y 'No obstante')",
    categoria: "Comprensión Lectora",
    icono: "⚡",
    color: "#a855f7",
    resumenCorto: "El núcleo de la dificultad del caso está casi siempre inmediatamente después de: 'sin embargo', 'no obstante', 'a pesar de' o 'empero'.",
    normaReferencia: "Lingüística Forense y Estructura Semántica de Casos Psicométricos",
    contenidoDetallado: `La estructura de redacción de la Universidad Nacional y comisiones evaluadoras de la CNSC utiliza conectores de contraste para introducir el nudo fáctico:<br><br>
    • La primera parte del caso describe un trámite habitual conforme a la ley (ej. <em>'El contribuyente presentó oportunamente su declaración...'</em>).<br>
    • <strong>El quiebre:</strong> Aparece la palabra <em>'sin embargo'</em> o <em>'no obstante'</em> seguida del dato determinante (ej. <em>'...no obstante, el pago electrónico fue rechazado por el banco dos días después de vencer el plazo'</em>).<br><br>
    <strong>Estrategia de lectura:</strong> Cuando tus ojos detecten un conector adversativo, detén la lectura rápida y analiza la frase siguiente: ahí radica la controversia legal que debes resolver.`
  },
  {
    id: 30,
    numero: "30",
    titulo: "La Regla de los Términos Procesales Perentorios (Días Hábiles vs. Días Calendario)",
    categoria: "Comprensión Lectora",
    icono: "📅",
    color: "#10b981",
    resumenCorto: "En actuaciones de la DIAN los términos en días son HÁBILES; en meses o años son CALENDARIO. Cuidado con contar sábados en términos de días.",
    normaReferencia: "Ley 4 de 1913 Art. 62 y Estatuto Tributario Art. 683",
    contenidoDetallado: `Un error común de comprensión lectora surge al contabilizar plazos procesales en los casos:<br><br>
    • <strong>Plazos fijados en días</strong> (ej. 10 días para responder requerimiento ordinario, 1 mes para recurso de reconsideración, 3 meses para requerimiento especial): en días, se cuentan únicamente días <em>hábiles</em>, excluyendo sábados, domingos y festivos.<br>
    • <strong>Plazos fijados en meses o años</strong> (ej. 2 meses, 3 años de firmeza): se cuentan de fecha a fecha, de calendario a calendario (ej. del 15 de marzo al 15 de abril). Si vence en día inhábil, se prorroga al primer día hábil siguiente.<br><br>
    <strong>Descarte inmediato:</strong> Descarta opciones que afirmen que un término venció en sábado o domingo sin considerar la prórroga legal al lunes hábil.`
  },
  {
    id: 31,
    numero: "31",
    titulo: "Filtro del Verbo de Mayor Idoneidad y Eficacia Administrativa",
    categoria: "Comprensión Lectora",
    icono: "⚖️",
    color: "#38bdf8",
    resumenCorto: "Entre dos opciones que parecen legales, la correcta usa el verbo de mayor vinculatoriedad (ej. 'Proferir acto motivado' vs. 'Hacer una advertencia verbal').",
    normaReferencia: "Eficacia y Formalidad de Actos Administrativos - CPACA Art. 3",
    contenidoDetallado: `Las pruebas de juicio situacional miden tu nivel de resolución y formalismo institucional:<br><br>
    • <strong>Verbos débiles o informales (distractores habituales):</strong> <em>'Sugerir telefónicamente', 'acordar verbalmente una prórroga', 'redactar un memorando interno sin efectos jurídicos', 'esperar a que el usuario se comunique'</em>.<br>
    • <strong>Verbos con fuerza vinculante oficial (claves habituales):</strong> <em>'Proferir auto motivado', 'notificar en debida forma procesal', 'ordenar inspección técnica contable', 'remitir con informe fundado a la dependencia competente'</em>.<br><br>
    <strong>Regla:</strong> La administración pública se expresa mediante actos jurídicos formales por escrito, jamás mediante acuerdos informales de pasillo.`
  },
  {
    id: 32,
    numero: "32",
    titulo: "La Trampa de la 'Opción Idílica o Utópica' sin Respaldo Operativo",
    categoria: "Comprensión Lectora",
    icono: "🛑",
    color: "#f87171",
    resumenCorto: "Desconfía de opciones que prometen 'recuperar el 100% de la cartera de inmediato' ignorando los plazos, el debido proceso y la capacidad institucional.",
    normaReferencia: "Principio de Eficacia con Reserva de lo Posible - CP Art. 209",
    contenidoDetallado: `Los psicómetras diseñan distractores 'seductoramente heroicos' que apelan al deseo de soluciones milagrosas:<br><br>
    • <strong>Ejemplo de distractor idílico:</strong> <em>'Ordenar el embargo inmediato de todas las cuentas bancarias de todos los morosos en 24 horas y recuperar la totalidad del déficit sin necesidad de título ejecutivo'</em>.<br>
    • <strong>Por qué falla:</strong> El embargo en cobro coactivo requiere mandamiento de pago previo notificado (E.T. Art. 826) y título ejecutivo ejecutoriado. Desconocer el procedimiento acarrea nulidad y demandas de reparación directa contra la DIAN.<br><br>
    <strong>Acierto:</strong> Elige siempre la opción viable, reglamentada y proporcional, no la fantasía de fuerza desmedida.`
  },
  {
    id: 33,
    numero: "33",
    titulo: "Identificación del Sujeto Pasivo Real en Entidades Complejas",
    categoria: "Comprensión Lectora",
    icono: "👥",
    color: "#fbbf24",
    resumenCorto: "Distingue en la lectura: Sociedad Anónima vs. Representante Legal vs. Revisor Fiscal vs. Socios. No atribuyas sanciones sin título de imputación.",
    normaReferencia: "Estatuto Tributario Arts. 793, 794 y 658-1",
    contenidoDetallado: `En casos de auditoría a personas jurídicas, una trampa frecuente consiste en dirigir el acto sancionatorio al sujeto equivocado:<br><br>
    • La obligación sustancial y la sanción por inexactitud recaen en primer término sobre la <strong>Persona Jurídica contribuyente</strong>.<br>
    • El Representante Legal y el Revisor Fiscal solo responden solidaria o subsidiariamente si se les formula <em>pliego de cargos independiente</em> con demostración de culpa grave o dolo (E.T. Art. 658-1).<br><br>
    <strong>Cuidado de lectura:</strong> Si el caso describe una evasión de una sociedad y una opción propone proferir liquidación oficial a nombre propio del contador, descártala: al contador se le formula pliego de cargos por separado para sanción disciplinaria/multa.`
  },
  {
    id: 34,
    numero: "34",
    titulo: "Descarte de Opciones con Violación Procesal Camuflada en 'Buena Fe'",
    categoria: "Comprensión Lectora",
    icono: "🛡️",
    color: "#059669",
    resumenCorto: "El fin no justifica los medios en el Estado de Derecho. Si una opción 'agiliza el recaudo' pero omite el traslado de pruebas, es ilegal.",
    normaReferencia: "Constitución Política Art. 29 (Garantía del Debido Proceso)",
    contenidoDetallado: `Muchos distractores presentan una motivación aparentemente noble para inducir al error:<br><br>
    • <strong>El engaño narrativo:</strong> <em>'Para evitar que los fondos de salud pública se queden sin recursos en la emergencia, el auditor decidió omitir el término de respuesta del contribuyente y liquidar de aforo'</em>.<br>
    • <strong>Criterio intransigente:</strong> En Colombia no existe urgencia o meta de recaudo que autorice violar el debido proceso administrativo (Art. 29 CP). Cualquier acto proferido sin dar oportunidad de contradicción es insanablemente nulo de pleno derecho.<br><br>
    <strong>Acierto:</strong> Jamás selecciones una opción que vulnere el derecho de defensa, por muy loable o urgente que parezca la justificación del relato.`
  },
  {
    id: 35,
    numero: "35",
    titulo: "El Test de la 'Respuesta Espejo' (Paráfrasis Vaciada de Contenido)",
    categoria: "Comprensión Lectora",
    icono: "🪞",
    color: "#a855f7",
    resumenCorto: "Cuidado con la opción que repite las mismas palabras del enunciado pero no propone ninguna solución técnica concreta.",
    normaReferencia: "Psicometría de Reactivos de Juicio Situacional",
    contenidoDetallado: `Los evaluadores construyen distractores que actúan como 'espejos' psicológicos:<br><br>
    • Si el enunciado pregunta: <em>'¿Cómo debe proceder el Gestor III ante la recurrente inconsistencia de costos en el inventario?'</em><br>
    • <strong>La opción espejo:</strong> <em>'Debe proceder a verificar que los costos del inventario no presenten inconsistencias recurrentes para que el informe quede sin novedades'</em>.<br>
    • <strong>El defecto:</strong> Es una tautología vacía. No especifica la herramienta técnica (cruzar con facturación electrónica, requerir kardex contable, verificar proveedor ficticio).<br><br>
    <strong>Técnica:</strong> Exige a la opción elegida que contenga un <em>cómo</em> procedimental específico.`
  },
  {
    id: 36,
    numero: "36",
    titulo: "Detección de Modificadores Condicionales ('Siempre que', 'Salvo que')",
    categoria: "Comprensión Lectora",
    icono: "🧩",
    color: "#f59e0b",
    resumenCorto: "Las excepciones legales se ocultan en frases condicionales. Si el supuesto del caso no cumple la condición estricta, la regla general prevalece.",
    normaReferencia: "Código Civil Colombiano Arts. 27 a 32 (Reglas de Hermenéutica Legal)",
    contenidoDetallado: `En los enunciados normativos de la DIAN, las frases subordinadas determinan la aplicabilidad de la norma:<br><br>
    • <strong>Fórmulas condicionales:</strong> <em>'siempre y cuando', 'a condición de que', 'salvo que medie', 'en tanto no se haya notificado'</em>.<br>
    • <strong>Caso práctico:</strong> La ley dice que opera la firmeza en 6 meses <em>'siempre que se haya presentado oportunamente y con el incremento del 35%'</em>. Si el caso menciona que la declaración se presentó <strong>un día tarde de forma extemporánea</strong>, la condición se rompió y la firmeza pasa automáticamente al régimen general de 3 años.<br><br>
    <strong>Regla de oro:</strong> Si una frase condicional no se cumple al 100% en los hechos del relato, la prerrogativa especial desaparece.`
  },
  {
    id: 37,
    numero: "37",
    titulo: "Triangulación Cuantitativa Simple (Cálculo de Sanciones y Cifras Clave)",
    categoria: "Comprensión Lectora",
    icono: "🧮",
    color: "#38bdf8",
    resumenCorto: "La CNSC evalúa criterio normativo de la base y porcentaje, no cálculos complejos. Busca la lógica de graduación de sanciones del Art. 640 E.T.",
    normaReferencia: "Estatuto Tributario Art. 640 (Principio de Lesividad y Graduación)",
    contenidoDetallado: `Cuando un caso incluya montos monetarios o porcentajes de sanción:<br><br>
    • No te detengas a hacer divisiones decimales complejas.<br>
    • Verifica el <strong>criterio de reducción de sanción</strong> (Art. 640 E.T.):<br>
      - Reducción al <strong>50%</strong> de la sanción si no ha cometido la misma infracción en el año anterior.<br>
      - Reducción al <strong>75%</strong> si no la ha cometido en los dos años anteriores.<br>
      - Sanción mínima legal fija (no puede ser inferior a la UVT mínima legal fijada por resolución).<br><br>
    <strong>Acierto:</strong> Si el contribuyente subsana voluntariamente antes de requerimiento especial, la sanción de corrección es del 10% (Art. 644); si responde al requerimiento especial, es del 20%. Esa es la diferencia conceptual que evalúa el examen.`
  },
  {
    id: 38,
    numero: "38",
    titulo: "Diferenciación entre Actos de Trámite vs. Actos Definitivos",
    categoria: "Comprensión Lectora",
    icono: "📑",
    color: "#10b981",
    resumenCorto: "Los actos de mero trámite (Requerimiento Especial, Emplazamiento) NO admiten recursos. Marcar reposición o apelación contra ellos es error garrafal.",
    normaReferencia: "CPACA Art. 75 y Estatuto Tributario Art. 720",
    contenidoDetallado: `Uno de los distractores procesales más clásicos en los exámenes de concurso público:<br><br>
    • <strong>Actos preparatorios o de trámite:</strong> Auto de Inspección Tributaria, Emplazamiento para Corregir, Requerimiento Especial, Pliego de Cargos. <em>Contra ellos NO procede recurso alguno</em>; el administrado solo tiene derecho a dar respuesta procesal con descargos o corrección.<br>
    • <strong>Actos administrativos definitivos:</strong> Liquidación Oficial de Revisión, Resolución Sanción, Resolución que decide excepciones en cobro coactivo. <em>Contra ellos procede el Recurso de Reconsideración</em> (o reposición/apelación según el caso).<br><br>
    <strong>Descarte directo:</strong> Si una opción plantea <em>'Interponer recurso de reconsideración contra el Requerimiento Especial'</em>, es falsa por naturaleza procesal.`
  },
  {
    id: 39,
    numero: "39",
    titulo: "Método de Escaneo Focalizado de Nombres Propios, Fechas y Cifras (Barrido Inicial)",
    categoria: "Comprensión Lectora",
    icono: "⚡",
    color: "#a855f7",
    resumenCorto: "En casos extensos de 15 líneas: haz un barrido visual de 8 segundos localizando exclusivamente: Fechas, N° de Actos, Cifras en UVT/Pesos y Nombres de dependencias.",
    normaReferencia: "Lectura Veloz Aplicada al Análisis Documental Forense",
    contenidoDetallado: `Cuando el texto sea intimidante por su extensión, no intentes memorizar la narrativa en la primera lectura:<br><br>
    • <strong>Fase de Escaneo (8 a 10 segundos):</strong> Fija tu mirada en busca de anclas cuantitativas y temporales: fechas (ej. <em>'14 de mayo de 2023'</em>), números de radicado, valores y denominación exacta de las dependencias involucradas.<br>
    • <strong>Fase de Interrogación:</strong> Lee la pregunta final.<br>
    • <strong>Fase de Conexión:</strong> Vuelve solo a las dos líneas donde se ubica el dato que la pregunta exige resolver.<br><br>
    <strong>Beneficio:</strong> Reduces el tiempo de respuesta de 90 a 35 segundos, reservando energía mental para las preguntas más densas del examen.`
  },
  {
    id: 40,
    numero: "40",
    titulo: "Detección del Distractor de 'Delegación Ilegal de Facultades Indelebles'",
    categoria: "Comprensión Lectora",
    icono: "👔",
    color: "#f59e0b",
    resumenCorto: "Ciertas competencias de la DIAN son privativas del Director General o Seccional y no pueden delegarse en el Gestor III sin acto administrativo formal.",
    normaReferencia: "Ley 489 de 1998 Arts. 9 a 12 y Decreto 1742 de 2020",
    contenidoDetallado: `El régimen de función pública establece límites severos a la delegación administrativa:<br><br>
    • No se pueden delegar atribuciones conferidas por la Constitución, ni la expedición de reglamentos de carácter general, ni funciones que hayan sido delegadas previamente (prohibición de subdelegación en cascada sin autorización legal).<br>
    • Si en un caso el Director Seccional le ordena verbalmente al Gestor III que <em>'firme por él la resolución que resuelve el recurso de reconsideración'</em>, dicha actuación adolece de nulidad por falta de competencia funcional por incompetencia personal.<br><br>
    <strong>Regla:</strong> El Gestor III proyecta la decisión técnica; el titular legal de la competencia delegada es quien suscribe oficialmente el acto administrativo.`
  },
  {
    id: 41,
    numero: "41",
    titulo: "La Regla del Silencio Administrativo Positivo vs. Negativo en la Lectura",
    categoria: "Comprensión Lectora",
    icono: "⏳",
    color: "#10b981",
    resumenCorto: "El silencio positivo es EXCEPCIONAL y requiere norma expresa (ej. recurso de reconsideración no resuelto en 1 año). Por regla general, el silencio es negativo.",
    normaReferencia: "Estatuto Tributario Art. 734 y CPACA Arts. 83 y 84",
    contenidoDetallado: `Muchos distractores juegan con la figura del silencio administrativo para confundir al aspirante:<br><br>
    • <strong>Regla general en el CPACA (Art. 83):</strong> Si transcurren 3 meses sin respuesta a una petición o actuación, opera el <em>Silencio Administrativo Negativo</em> (se entiende denegada la solicitud para permitir acudir a la justicia contenciosa).<br>
    • <strong>Excepción especial tributaria (Silencio Positivo - Art. 734 E.T.):</strong> Si la DIAN no resuelve el Recurso de Reconsideración dentro del término de <strong>un (1) año</strong> contado a partir de su debida interposición, opera el <em>Silencio Administrativo Positivo</em> y se entiende fallado a favor del contribuyente.<br><br>
    <strong>Atención al leer:</strong> Verifica si el caso trata de un recurso gubernativo tributario (1 año para positivo) o de un derecho de petición general (silencio negativo). Marcar la figura inversa es causal inmediata de fallo en la pregunta.`
  },
  {
    id: 42,
    numero: "42",
    titulo: "La Técnica del Verbo Rector en Juicio Situacional (CNSC / DIAN)",
    categoria: "Verbo Rector",
    icono: "🎯",
    color: "#a855f7",
    resumenCorto: "El Verbo Rector en el enunciado interrogativo final determina la naturaleza exacta de la acción requerida: formular, verificar, proyectar, acompañar o reportar.",
    normaReferencia: "Metodología Oficial de Juicio Situacional CNSC y Decreto Ley 071 de 2020",
    contenidoDetallado: `En las pruebas escritas de la CNSC y la DIAN, el <strong>Verbo Rector</strong> es el núcleo lingüístico y comportamental de cada pregunta:<br><br>
    • <strong>Ubicación Clave:</strong> Se localiza invariablemente en la <strong>oración interrogativa final</strong> en negrilla (ej. <em>'¿Cuál es la acción que debe FORMULAR el Gestor...?'</em> o <em>'¿Qué labor técnica debe ACOMPAÑAR el Analista...?'</em>).<br>
    • <strong>El Filtro del Triángulo Psicométrico:</strong><br>
      1. <strong>Acción Requerida:</strong> ¿Te piden diseñar, verificar, proyectar o custodiar?<br>
      2. <strong>Nivel Jerárquico:</strong> ¿El cargo evaluado es Profesional (análisis, formulación y sustanciación) o Técnico (apoyo operativo, verificación material y fe documental)?<br>
      3. <strong>Límite Legal:</strong> ¿La opción respeta el principio de legalidad (Art. 121 C.P.) o extralimita las facultades del empleo?<br><br>
    <strong>Regla de oro:</strong> Una opción puede describir una acción muy positiva o necesaria, pero si su verbo rector no satisface la exigencia funcional de la pregunta, es un distractor prefabricado para hacerte perder puntos.`
  },
  {
    id: 43,
    numero: "43",
    titulo: "Verbos Rectores en GESTOR III (Nivel Profesional): Formular, Diseñar y Evaluar",
    categoria: "Verbo Rector",
    icono: "💼",
    color: "#3b82f6",
    resumenCorto: "El Gestor III (FT-TAH-1824) actúa con verbos de alta autonomía analítica y estratégica. Descarta verbos asistenciales mecánicos y de usurpación directiva.",
    normaReferencia: "Decreto 815 de 2018 y Manual Específico de Funciones DIAN (Ficha FT-TAH-1824)",
    contenidoDetallado: `Para el empleo de <strong>GESTOR III (OPEC 242703 - Nivel Profesional, Grado 03)</strong>, el evaluador califica tu capacidad de juicio analítico, modelamiento y formulación técnica:<br><br>
    • <strong>Verbos Rectores del Manual:</strong> <em>Formular</em> (estrategias y planes), <em>Diseñar</em> (metodologías e indicadores), <em>Evaluar</em> (gestión y riesgos), <em>Diagnosticar</em> (variables macroeconómicas y tributarias), <em>Proyectar</em> (respuestas a recursos y actos administrativos), <em>Coordinar</em> e <em>Implementar</em> (sistemas MIPG).<br><br>
    • <strong>Trampa 1: El Distractor Asistencial (Infra-valoración):</strong><br>
      Opciones que ofrecen verbos mecánicos como <em>'foliar fotocopias'</em>, <em>'trasladar el oficio sin análisis'</em> o <em>'archivar pasivamente en espera'</em>. En el nivel profesional, estas conductas se sancionan con 0 puntos por carencia de juicio técnico.<br><br>
    • <strong>Trampa 2: El Distractor de Usurpación Directiva (Extralimitación):</strong><br>
      Opciones donde el Gestor <em>'expide por su cuenta la sanción definitiva'</em>, <em>'declara de plano la revocatoria'</em> o <em>'sanciona sin competencia'</em>. Recuerda: el Gestor III <strong>proyecta y sustancia</strong> la decisión técnica; la firma formal y la potestad sancionatoria corresponden al Director Seccional o General mediante delegación formal expresa.`
  },
  {
    id: 44,
    numero: "44",
    titulo: "Verbos Rectores en ANALISTA IV (Nivel Técnico): Acompañar, Clasificar y Verificar",
    categoria: "Verbo Rector",
    icono: "🔍",
    color: "#f59e0b",
    resumenCorto: "El Analista IV (AT-FL-2010) ejecuta soporte técnico en terreno y despacho: Acompañar, Clasificar, Intervenir, Elaborar actas, Custodiar y Reportar.",
    normaReferencia: "Ficha Oficial AT-FL-2010 y Decreto Ley 071 de 2020",
    contenidoDetallado: `Para el empleo de <strong>ANALISTA IV (OPEC 236760 - Nivel Técnico, Grado 04)</strong>, las 9 funciones esenciales de la Ficha AT-FL-2010 delimitan con precisión milimétrica su campo de acción:<br><br>
    • <strong>Los 6 Verbos Rectores de Oro del Analista IV:</strong><br>
      1. <strong>Acompañar:</strong> Las diligencias de práctica de pruebas decretadas formalmente dentro de investigaciones tributarias, aduaneras o cambiarias.<br>
      2. <strong>Apoyar:</strong> La ejecución de acciones de fiscalización y verificación en campo y despacho.<br>
      3. <strong>Clasificar:</strong> La información técnica preliminar, insumos y denuncias recibidas para facilitar la toma de decisiones.<br>
      4. <strong>Intervenir:</strong> En las diligencias materiales de destrucción de mercancías averiadas, defectuosas o inservibles.<br>
      5. <strong>Elaborar:</strong> Actos y documentos de carácter técnico, administrativo y operativo (actas de inspección, cuadros de cotejo, inventarios).<br>
      6. <strong>Reportar:</strong> Operaciones sospechosas (ROS) y conductas indicativas de lavado de activos ante las instancias competentes.<br><br>
    • <strong>Trampa Fatal: El Distractor de Usurpación Jurídica:</strong><br>
      Cuidado con opciones que pretendan que el Analista IV <em>'declare de plano el decomiso definitivo'</em>, <em>'califique jurídicamente la culpabilidad'</em> o <em>'resuelva el recurso de reposición'</em>. Cualquier respuesta con verbos resolutivos de fondo es nula de pleno derecho e incorrecta en el examen.`
  },
  {
    id: 45,
    numero: "45",
    titulo: "Verbos de Decisión vs. Verbos de Sustanciación (El Blindaje Jurídico)",
    categoria: "Verbo Rector",
    icono: "⚖️",
    color: "#10b981",
    resumenCorto: "Diferencia procesal entre quien sustancia (analiza, recolecta y proyecta) y quien decide (adopta y firma con potestad delegada). Clave para evitar la nulidad.",
    normaReferencia: "CPACA (Ley 1437 de 2011 Arts. 9 y 43) y Estatuto Tributario",
    contenidoDetallado: `En la arquitectura jurídica de la DIAN existe una estricta división entre sustanciación y decisión:<br><br>
    • <strong>Servidores que Sustancian (Gestores y Analistas):</strong><br>
      - Verbos: <em>Examinar, cotejar, verificar, recopilar pruebas, clasificar antecedentes, elaborar proyectos de pliegos, resoluciones o informes técnicos.</em><br>
      - Sus actuaciones constituyen <strong>actos preparatorios o de trámite</strong> que ilustran el juicio de la entidad pero no generan decisión definitiva frente al tercero por sí solos.<br><br>
    • <strong>Autoridades que Deciden (Directores, Administradores, Jefes de División):</strong><br>
      - Verbos: <em>Adoptar, resolver recursos, ordenar decomisos definitivos, fallar de fondo, sancionar.</em><br>
      - Requieren investidura legal o acto expreso de delegación (Ley 489 de 1998 Art. 9).<br><br>
    <strong>Impacto en el examen:</strong> Cuando el enunciado pregunte por el trámite de un acto definitivo, la conducta correcta del profesional es <strong>proyectar con motivación suficiente</strong> para someterlo a la firma de la jefatura competente, jamás arrogarse la decisión unilateral.`
  },
  {
    id: 46,
    numero: "46",
    titulo: "La Regla Mnemotécnica V-N-C: Verbo, Nivel y Competencia",
    categoria: "Verbo Rector",
    icono: "🧠",
    color: "#ec4899",
    resumenCorto: "Aplica en 10 segundos el filtro V-N-C: 1) ¿Qué Verbo manda la pregunta? 2) ¿A qué Nivel pertenece el cargo? 3) ¿Qué Competencia legal autoriza la norma?",
    normaReferencia: "Estrategia de Resolución Acelerada para Pruebas Escritas CNSC",
    contenidoDetallado: `Para resolver cualquier caso situacional en menos de 60 segundos sin caer en los distractores más elaborados de la Universidad evaluadora:<br><br>
    • <strong>Paso 1 - V (Verbo):</strong> Identifica el verbo rector del enunciado (ej. <em>'formular'</em>, <em>'acompañar'</em>, <em>'clasificar'</em>). Descarta de entrada las opciones cuyos verbos contradigan la naturaleza de la solicitud.<br><br>
    • <strong>Paso 2 - N (Nivel Jerárquico):</strong><br>
      - Si eres <strong>Gestor III (Profesional)</strong>: Tus opciones ganadoras contienen verbos como <em>Formular, Diagnosticar, Estructurar, Evaluar, Proponer</em>.<br>
      - Si eres <strong>Analista IV (Técnico)</strong>: Tus opciones ganadoras contienen verbos como <em>Acompañar, Clasificar, Verificar, Elaborar actas, Custodiar, Reportar</em>.<br><br>
    • <strong>Paso 3 - C (Competencia Legal):</strong> Confirma que la acción no vulnere el debido proceso (Art. 29 C.P.) ni constituya omisión o extralimitación de funciones (Art. 6 C.P.).<br><br>
    <strong>Resultado garantizado:</strong> Eliminas 2 de las 3 opciones en los primeros 25 segundos y aseguras el máximo puntaje en competencias funcionales.`
  }
];

if (typeof window !== "undefined") {
  window.TIPS_PJS_DATA = TIPS_PJS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TIPS_PJS_DATA };
}
