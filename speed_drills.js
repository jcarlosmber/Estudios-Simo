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
  },
  {
    id: "sd_20",
    tema: "Estatuto Tributario (Art. 705 E.T.)",
    afirmacion: "El término general que tiene la DIAN para notificar el Requerimiento Especial a un contribuyente es de cinco (5) años contados desde el vencimiento del plazo para declarar.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 705 del Estatuto Tributario establece que el Requerimiento Especial debe notificarse a más tardar dentro de los tres (3) años siguientes a la fecha de vencimiento del plazo para declarar (o de la fecha de presentación si fue extemporánea)."
  },
  {
    id: "sd_21",
    tema: "CPACA (Art. 76 Ley 1437 de 2011)",
    afirmacion: "En el procedimiento administrativo colombiano, el recurso de reposición es de interposición obligatoria para agotar la actuación y poder acudir a la demanda contenciosa.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 76 del CPACA señala que el recurso de reposición no es obligatorio sino facultativo; el recurso obligatorio para agotar la vía administrativa cuando proceda es el de apelación."
  },
  {
    id: "sd_22",
    tema: "Régimen Aduanero (Decreto 1165 de 2019)",
    afirmacion: "La aprehensión de una mercancía en zona primaria aduanera traslada automáticamente la propiedad de los bienes a favor de la Nación sin requerir resolución de decomiso previa.",
    esVerdadero: false,
    explicacion: "FALSO. La aprehensión es una medida cautelar provisional. La titularidad solo pasa a la Nación cuando se profiere y queda en firme la resolución de decomiso motivada tras agotar el debido proceso."
  },
  {
    id: "sd_23",
    tema: "Sistema de Control Interno (Ley 87 de 1993)",
    afirmacion: "El establecimiento y desarrollo del Sistema de Control Interno en la DIAN es responsabilidad exclusiva del Jefe de la Oficina de Control Interno.",
    esVerdadero: false,
    explicacion: "FALSO. Conforme al artículo 6 de la Ley 87 de 1993, el control interno es responsabilidad de la máxima autoridad de la entidad y de TODOS los servidores públicos en el ejercicio de sus funciones."
  },
  {
    id: "sd_24",
    tema: "Código Disciplinario (Ley 1952 de 2019)",
    afirmacion: "El servidor público que identifique una causal de conflicto de intereses respecto de un asunto a su cargo debe declararse impedido dentro de los tres (3) días hábiles siguientes.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 11 del CPACA y el régimen disciplinario ordenan manifestar el impedimento dentro de los 3 días hábiles siguientes al conocimiento de la causal mediante escrito motivado al superior."
  },
  {
    id: "sd_25",
    tema: "Carrera DIAN (Decreto Ley 071 de 2020)",
    afirmacion: "Los servidores nombrados en periodo de prueba en la DIAN superan dicha etapa tras completar un periodo reglamentario de seis (6) meses con calificación satisfactoria.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 31 del Decreto Ley 071 de 2020 fija el periodo de prueba en seis (6) meses, al cabo del cual se realiza la evaluación del desempeño laboral para inscripción en el Registro de Carrera."
  },
  {
    id: "sd_26",
    tema: "Estatuto Tributario (Art. 689-3 E.T.)",
    afirmacion: "El Beneficio de Auditoría permite que una declaración de renta quede en firme en 6 o 12 meses si se incrementa el impuesto neto de renta en los porcentajes mínimos señalados por la ley.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 689-3 del E.T. premia el incremento del impuesto neto de renta (ej. 35% o 25%) reduciendo la firmeza a 6 o 12 meses, siempre que se cumplan las condiciones legales."
  },
  {
    id: "sd_27",
    tema: "Estatuto Tributario (Art. 714 E.T.)",
    afirmacion: "La firmeza general de la declaración tributaria ordinaria en la cual no se liquiden pérdidas fiscales opera a los cinco (5) años de su presentación.",
    esVerdadero: false,
    explicacion: "FALSO. Conforme al Art. 714 del Estatuto Tributario, la declaración tributaria queda en firme a los tres (3) años siguientes al vencimiento del plazo para declarar (o de su presentación si fue extemporánea)."
  },
  {
    id: "sd_28",
    tema: "Régimen Cambiario y Lavado de Activos",
    afirmacion: "La DIAN carece de competencia para investigar infracciones al régimen cambiario, pues esa función pertenece con exclusividad al Banco de la República.",
    esVerdadero: false,
    explicacion: "FALSO. Por mandato legal y del Decreto 1742 de 2020, la DIAN ejerce el control y vigilancia cambiaria en operaciones de importación, exportación de bienes, zonas francas y endeudamiento externo conexo."
  },
  {
    id: "sd_29",
    tema: "MIPG - Información y Comunicación",
    afirmacion: "Las políticas de 'Transparencia y Acceso a la Información Pública' y 'Gestión Documental' forman parte integral de la Dimensión de Información y Comunicación del MIPG.",
    esVerdadero: true,
    explicacion: "VERDADERO. Es la 5ª dimensión del MIPG orientada a garantizar un flujo de información interno y externo transparente, oportuno y verificable hacia la ciudadanía."
  },
  {
    id: "sd_30",
    tema: "CPACA (Art. 164 Ley 1437 de 2011)",
    afirmacion: "El medio de control de nulidad y restablecimiento del derecho contra una liquidación oficial caduca en el término perentorio de cuatro (4) meses contados desde el día siguiente a su notificación.",
    esVerdadero: true,
    explicacion: "VERDADERO. El numeral 2, literal d) del artículo 164 del CPACA estipula que la demanda debe interponerse dentro del término de 4 meses siguientes a la notificación del acto definitivo que agota vía administrativa."
  },
  {
    id: "sd_31",
    tema: "Estatuto Tributario (Art. 720 E.T.)",
    afirmacion: "El contribuyente dispone de un plazo de quince (15) días hábiles para interponer el recurso de reconsideración contra la Liquidación Oficial de Revisión.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 720 del Estatuto Tributario concede dos (2) meses calendario contados a partir de la notificación de la liquidación oficial para interponer el recurso de reconsideración."
  },
  {
    id: "sd_32",
    tema: "Régimen Aduanero (Decreto 1165 de 2019)",
    afirmacion: "La declaración anticipada obligatoria de importación debe radicarse con una antelación no inferior a cinco (5) días hábiles a la llegada de las mercancías al país.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 175 del Decreto 1165 de 2019 fija la antelación mínima de la declaración anticipada en no menos de quince (15) días calendario a la llegada de las mercancías para las operaciones reguladas."
  },
  {
    id: "sd_33",
    tema: "Facturación Electrónica (Art. 616-1 E.T.)",
    afirmacion: "El tiquete de máquina registradora con sistema POS otorga derecho a costos y deducciones en el impuesto de renta para el adquirente que sea comerciante.",
    esVerdadero: false,
    explicacion: "FALSO. Por expresa disposición del Art. 616-1 del E.T., el tiquete POS no otorga derecho a costos ni deducciones en renta ni a impuestos descontables en IVA; para ello se exige Factura Electrónica de Venta."
  },
  {
    id: "sd_34",
    tema: "Cobro Coactivo (Art. 817 E.T.)",
    afirmacion: "La acción de cobro de las obligaciones fiscales a cargo de la DIAN prescribe en el término de cinco (5) años contados desde que se hicieron legalmente exigibles.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 817 del Estatuto Tributario consagra el término de prescripción de la acción de cobro en 5 años a partir de la ejecutoria del acto administrativo o presentación de la declaración privada."
  },
  {
    id: "sd_35",
    tema: "Constitución Política (Art. 29 C.P.)",
    afirmacion: "En actuaciones tributarias sancionatorias, una prueba obtenida mediante hackeo o vulneración de comunicaciones privadas puede admitirse válidamente si demuestra una evasión multimillonaria.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 29 de la Constitución Política es taxativo y categórico: 'Es nula, de pleno derecho, la prueba obtenida con violación del debido proceso' (regla de exclusión probatoria inquebrantable)."
  },
  {
    id: "sd_36",
    tema: "Procedimiento Tributario (Art. 705 E.T.)",
    afirmacion: "La DIAN dispone por regla general de tres (3) años contados desde el vencimiento del plazo para declarar para notificar el Requerimiento Especial al contribuyente.",
    esVerdadero: true,
    explicacion: "VERDADERO. Conforme al artículo 705 del Estatuto Tributario, el requerimiento especial debe notificarse a más tardar dentro de los 3 años siguientes a la fecha de vencimiento del plazo para declarar (o de la presentación extemporánea)."
  },
  {
    id: "sd_37",
    tema: "Firmeza de Declaraciones (Art. 714 E.T.)",
    afirmacion: "Una declaración tributaria en la que se liquidó saldo a favor adquiere firmeza en el término general de doce (12) meses si la DIAN no ha notificado requerimiento.",
    esVerdadero: false,
    explicacion: "FALSO. El término de firmeza de la declaración donde se liquida saldo a favor es el mismo término que tiene la DIAN para devolver o compensar (3 años o ligada a la solicitud de devolución según el Art. 714 del E.T.), nunca 12 meses."
  },
  {
    id: "sd_38",
    tema: "Pérdidas Fiscales y Firmeza (Art. 714 E.T.)",
    afirmacion: "La declaración tributaria del impuesto sobre la renta en la que se liquiden o compensen pérdidas fiscales adquiere firmeza en un término especial de cinco (5) años.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 714 del Estatuto Tributario establece expresamente un término especial de firmeza de cinco (5) años para declaraciones con liquidación o compensación de pérdidas fiscales."
  },
  {
    id: "sd_39",
    tema: "Notificación Electrónica DIAN (Art. 566-1 E.T.)",
    afirmacion: "En la notificación electrónica de la DIAN, el acto se entiende notificado al instante exacto en que sale del buzón de correo del funcionario emisor.",
    esVerdadero: false,
    explicacion: "FALSO. El Art. 566-1 del E.T. dispone que la notificación electrónica se entiende surtida para efectos de términos para el contribuyente a partir del quinto (5°) día hábil siguiente a la fecha de envío del acuse de recibo o entrega en bandeja."
  },
  {
    id: "sd_40",
    tema: "Notificación por Aviso (Art. 69 CPACA)",
    afirmacion: "Si no es posible la notificación personal ni electrónica, la notificación por aviso se publica por cinco (5) días hábiles en la página web institucional y se tiene por surtida al finalizar el día siguiente al retiro.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 69 del CPACA estipula que el aviso debe publicarse en la página electrónica por el término de 5 días y la notificación se considerará surtida al finalizar el día siguiente al retiro del aviso."
  },
  {
    id: "sd_41",
    tema: "Silencio Administrativo Positivo (Art. 734 E.T.)",
    afirmacion: "Si la DIAN no resuelve el Recurso de Reconsideración dentro del término legal de un (1) año, opera el silencio administrativo positivo a favor del recurrente.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 734 del Estatuto Tributario consagra el silencio administrativo positivo si transcurrido un año desde la interposición en debida forma no se ha notificado la resolución que decide el recurso."
  },
  {
    id: "sd_42",
    tema: "Principio Non Bis In Idem",
    afirmacion: "Un mismo hecho inexacto puede ser sancionado simultáneamente con la sanción de clausura del establecimiento y con sanción penal de privación de la libertad sin vulnerar garantías procesales.",
    esVerdadero: false,
    explicacion: "FALSO. El principio constitucional del Non Bis In Idem (Art. 29 C.P.) prohíbe juzgar o sancionar dos veces a una persona por el mismo hecho bajo la misma identidad de sujeto, causa y fundamento sancionatorio."
  },
  {
    id: "sd_43",
    tema: "Inhabilidades Contractuales (Ley 80 de 1993)",
    afirmacion: "Quien haya sido destituido e inhabilitado en un proceso disciplinario queda inhabilitado para celebrar contratos con el Estado por un término general de cinco (5) años a partir de la ejecutoria.",
    esVerdadero: true,
    explicacion: "VERDADERO. El literal d) del numeral 1 del artículo 8 de la Ley 80 de 1993 fija la inhabilidad de 5 años para contratar con entidades públicas por sanción disciplinaria de destitución."
  },
  {
    id: "sd_44",
    tema: "Régimen Disciplinario (Ley 1952 de 2019)",
    afirmacion: "En el régimen disciplinario de los servidores públicos, las faltas disciplinarias se clasifican únicamente en dos categorías: dolosas y culposas.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 46 del Código General Disciplinario clasifica las faltas según su gravedad en gravísimas, graves y leves. Dolo y culpa son las modalidades de la conducta, no la clasificación de la falta."
  },
  {
    id: "sd_45",
    tema: "Prescripción de la Acción Disciplinaria",
    afirmacion: "La acción disciplinaria de los servidores públicos prescribe en el término de cinco (5) años contados desde la comisión de la falta si no se ha notificado fallo de primera instancia.",
    esVerdadero: true,
    explicacion: "VERDADERO. Conforme a la Ley 1952 de 2019 modificada por la Ley 2094 de 2021 (Art. 33), la acción disciplinaria prescribe en 5 años contados para las faltas instantáneas desde el día de su consumación."
  },
  {
    id: "sd_46",
    tema: "Control Interno (Ley 87 de 1993)",
    afirmacion: "El Jefe de la Oficina de Control Interno de una entidad del orden nacional como la DIAN es nombrado por concurso de méritos de la CNSC con derechos de carrera.",
    esVerdadero: false,
    explicacion: "FALSO. De acuerdo con el artículo 8 de la Ley 1474 de 2011, los Jefes de Control Interno del orden nacional son de libre designación del Presidente de la República por un periodo fijo de 4 años."
  },
  {
    id: "sd_47",
    tema: "Rol de la Auditoría Interna (DAFP)",
    afirmacion: "Un auditor interno de la DIAN tiene prohibido participar en la autorización de pagos, liquidación de contratos o aprobación de declaraciones tributarias.",
    esVerdadero: true,
    explicacion: "VERDADERO. El principio de independencia y objetividad de la Ley 87 de 1993 y las Normas Internacionales de Auditoría prohíbe taxativamente la coadministración o ejecución de operaciones misionales por parte del auditor."
  },
  {
    id: "sd_48",
    tema: "Gestión de Riesgos MIPG",
    afirmacion: "En la metodología de gestión del riesgo del DAFP, el 'Riesgo Residual' es el nivel de riesgo valorado antes de aplicar los controles de la entidad.",
    esVerdadero: false,
    explicacion: "FALSO. El nivel de riesgo valorado antes de aplicar los controles es el 'Riesgo Inherente'. El 'Riesgo Residual' es el que permanece después de implementar y verificar la efectividad de los controles."
  },
  {
    id: "sd_49",
    tema: "Gestión del Riesgo y Apetito al Riesgo",
    afirmacion: "Si el riesgo residual de un proceso se ubica por encima del apetito de riesgo institucional, la administración debe implementar planes de tratamiento y mitigación adicionales.",
    esVerdadero: true,
    explicacion: "VERDADERO. Según la Guía de Gestión del Riesgo del DAFP (MIPG), cualquier riesgo que supere la zona de tolerancia o apetito institucional exige medidas activas de tratamiento (reducir, evitar, transferir)."
  },
  {
    id: "sd_50",
    tema: "Gestión Documental (Ley 594 de 2000)",
    afirmacion: "Un funcionario de la DIAN puede destruir expedientes tributarios inactivos a su criterio si ya no caben físicamente en el archivo de gestión de la dependencia.",
    esVerdadero: false,
    explicacion: "FALSO. La Ley 594 de 2000 prohíbe la eliminación arbitraria de documentos. La disposición final solo procede conforme a las Tablas de Retención Documental (TRD) y con acta formal aprobada por el Comité Institucional."
  },
  {
    id: "sd_51",
    tema: "Devoluciones Tributarias (Art. 850 E.T.)",
    afirmacion: "El término general que tiene la DIAN para devolver los saldos a favor en renta o IVA es de cincuenta (50) días hábiles siguientes a la solicitud en debida forma.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 855 del Estatuto Tributario establece un término legal de 50 días para que la administración tributaria liquide y profiera el acto de devolución de saldos a favor."
  },
  {
    id: "sd_52",
    tema: "Compensación Previa de Saldos (Art. 861 E.T.)",
    afirmacion: "Si un contribuyente solicita la devolución de 100 millones pero tiene deudas tributarias en cobro por 30 millones, la DIAN debe entregar los 100 millones y cobrar los 30 después.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 861 del Estatuto Tributario obliga a realizar la compensación previa de oficio: la DIAN imputa primero el saldo a favor a las deudas fiscales exigibles y solo gira el remanente neto."
  },
  {
    id: "sd_53",
    tema: "Sanción por Inexactitud (Art. 648 E.T.)",
    afirmacion: "La tarifa general de la sanción por inexactitud en las declaraciones tributarias equivale al 100% de la diferencia entre el saldo a pagar determinado y el saldo declarado.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 648 del Estatuto Tributario (modificado por la Ley 1819 de 2016) fija la tarifa general de la sanción por inexactitud en el cien por ciento (100%) de la diferencia."
  },
  {
    id: "sd_54",
    tema: "Sanción por Extemporaneidad (Art. 641 E.T.)",
    afirmacion: "La sanción por extemporaneidad antes del emplazamiento es del 5% del impuesto a cargo por cada mes o fracción de mes calendario de retraso, con un tope máximo del 100%.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 641 del Estatuto Tributario fija exactamente el 5% por mes o fracción de mes calendario sobre el impuesto a cargo, sin que la sanción supere el 100% del impuesto."
  },
  {
    id: "sd_55",
    tema: "Sanción Mínima Tributaria (Art. 639 E.T.)",
    afirmacion: "La sanción mínima tributaria fijada en el artículo 639 del Estatuto Tributario equivale a veinte (20) Unidades de Valor Tributario (UVT).",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 639 del Estatuto Tributario establece con precisión que el valor mínimo de cualquier sanción tributaria será equivalente a diez (10) UVT."
  },
  {
    id: "sd_56",
    tema: "Fijación del Valor de la UVT",
    afirmacion: "El valor de la Unidad de Valor Tributario (UVT) es reajustado anualmente por el Congreso mediante ley de la República.",
    esVerdadero: false,
    explicacion: "FALSO. De acuerdo con el artículo 868 del Estatuto Tributario, la UVT es reajustada anualmente de forma administrativa por el Director General de la DIAN mediante resolución, según la variación del IPC para ingresos medios."
  },
  {
    id: "sd_57",
    tema: "Naturaleza de la Retención en la Fuente",
    afirmacion: "La retención en la fuente es un impuesto tributario sustantivo independiente con hecho generador autónomo y tarifa propia del 19%.",
    esVerdadero: false,
    explicacion: "FALSO. La retención en la fuente no es un impuesto en sí mismo, sino un mecanismo instrumental de recaudo y cobro anticipado de otros impuestos (Renta, IVA, ICA)."
  },
  {
    id: "sd_58",
    tema: "Mecanismo de Autorretención",
    afirmacion: "En la autorretención, el sujeto pasivo del impuesto retiene el valor respectivo de sus propios ingresos y lo consigna periódicamente a la DIAN.",
    esVerdadero: true,
    explicacion: "VERDADERO. La figura de autorretención faculta y obliga al propio vendedor o prestador del servicio calificado a practicarse la retención a sí mismo y declararla mensualmente."
  },
  {
    id: "sd_59",
    tema: "Impuesto sobre las Ventas (IVA)",
    afirmacion: "El IVA en Colombia es un impuesto de causación periódica anual que grava únicamente las ganancias netas de las sociedades comerciales.",
    esVerdadero: false,
    explicacion: "FALSO. El IVA es un tributo indirecto al consumo que se causa en cada operación gravada de venta o prestación de servicios, con periodicidad bimestral o cuatrimestral, no anual sobre utilidades."
  },
  {
    id: "sd_60",
    tema: "Impuesto Nacional al Consumo (INC)",
    afirmacion: "El Impuesto Nacional al Consumo (INC) facturado por un restaurante puede ser descontado como IVA en la declaración bimestral del contribuyente adquirente.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 512-1 del Estatuto Tributario dispone expresamente que el impuesto nacional al consumo constituye para el adquirente un costo del respectivo bien o servicio, y en ningún caso da derecho a descuento de IVA."
  },
  {
    id: "sd_61",
    tema: "Régimen Aduanero - Abandono Legal",
    afirmacion: "Las mercancías importadas caen en abandono legal a favor de la Nación si transcurre un (1) mes de permanencia en depósito habilitado sin solicitar desaduanamiento ni prórroga.",
    esVerdadero: true,
    explicacion: "VERDADERO. Según el Decreto 1165 de 2019, vencido el término de almacenamiento de un mes (prorrogable por un mes más) sin obtener levante ni reembarque, opera de pleno derecho el abandono legal."
  },
  {
    id: "sd_62",
    tema: "Medidas Cautelares Aduaneras (Decreto 1165)",
    afirmacion: "La 'Aprehensión' es la medida cautelar provisional de retención física de la mercancía, mientras que el 'Decomiso' es el acto administrativo en firme que transfiere la propiedad a la Nación.",
    esVerdadero: true,
    explicacion: "VERDADERO. Es la distinción esencial del régimen aduanero: la aprehensión es la medida preventiva de retención, y el decomiso es la sanción definitiva que adjudica el dominio de la mercancía al Estado."
  },
  {
    id: "sd_63",
    tema: "Tráfico Postal y Envíos Urgentes",
    afirmacion: "La modalidad de tráfico postal y envíos urgentes permite ingresar mercancías sin pagar tributos aduaneros siempre que su valor no supere los 10.000 dólares de los Estados Unidos.",
    esVerdadero: false,
    explicacion: "FALSO. El tope de valor FOB para envíos urgentes bajo esta modalidad es de hasta 2.000 dólares estadounidenses y peso no superior a 50 kg por paquete (Decreto 1165 de 2019)."
  },
  {
    id: "sd_64",
    tema: "Inspección Aduanera y Canal Verde",
    afirmacion: "Cuando el sistema de gestión del riesgo aduanero de la DIAN asigna canal verde a una declaración de importación, se autoriza el levante automático de la mercancía.",
    esVerdadero: true,
    explicacion: "VERDADERO. El canal verde o levante automático permite la disposición de la mercancía sin que medie inspección documental ni reconocimiento físico por parte del funcionario aduanero."
  },
  {
    id: "sd_65",
    tema: "Canal Rojo Aduanero",
    afirmacion: "La asignación de canal rojo en importaciones faculta al importador a retirar la carga inmediatamente del puerto mientras el funcionario revisa los papeles en Bogotá.",
    esVerdadero: false,
    explicacion: "FALSO. El canal rojo exige inspección física obligatoria de la mercancía y revisión documental detallada in situ antes de autorizar cualquier levante o retiro del recinto aduanero."
  },
  {
    id: "sd_66",
    tema: "Efectos del Levante Aduanero",
    afirmacion: "El levante es el acto formal por el cual la autoridad aduanera autoriza a los interesados la disposición de las mercancías previo cumplimiento de los requisitos legales.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 3 del Decreto 1165 de 2019 define el levante como el acto por el cual la autoridad aduanera autoriza a los interesados la libre disposición de las mercancías."
  },
  {
    id: "sd_67",
    tema: "Auditoría Forense y Pistas Digitales",
    afirmacion: "En auditorías de fiscalización tributaria, las copias de correos electrónicos corporativos obtenidas sin cadena de custodia ni hash digital tienen pleno valor probatorio inobjetable.",
    esVerdadero: false,
    explicacion: "FALSO. En auditoría digital y forense, la evidencia electrónica debe preservar la cadena de custodia y la verificación de funciones hash (Ley 527 de 1999) para garantizar su inmutabilidad y autenticidad probatoria."
  },
  {
    id: "sd_68",
    tema: "Papeles de Trabajo de Auditoría (NIA 230)",
    afirmacion: "Los papeles de trabajo elaborados por los auditores de la DIAN durante una fiscalización son propiedad privada del auditor y puede llevárselos a su casa al renunciar.",
    esVerdadero: false,
    explicacion: "FALSO. Los papeles de trabajo son documentos públicos institucionales de la DIAN, integran el expediente oficial y están protegidos por reserva legal tributaria (Art. 583 E.T.)."
  },
  {
    id: "sd_69",
    tema: "Reserva Tributaria (Art. 583 E.T.)",
    afirmacion: "Cualquier ciudadano tiene derecho a solicitar y obtener de la DIAN copias de las declaraciones de renta de sus competidores comerciales invocando la Ley de Transparencia.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 583 del Estatuto Tributario ampara con reserva legal absoluta las declaraciones e informaciones tributarias. Solo los jueces penales y autoridades expresamente autorizadas por ley pueden acceder a ellas."
  },
  {
    id: "sd_70",
    tema: "Violación de Reserva de Información (C.P. Art. 418)",
    afirmacion: "El servidor público de la DIAN que publique o entregue información reservada de contribuyentes incurre en falta disciplinaria gravísima y en delito de revelación de secreto.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 418 del Código Penal tipifica la revelación de secreto con pena de prisión y pérdida del empleo, además de constituir falta gravísima en el régimen disciplinario."
  },
  {
    id: "sd_71",
    tema: "Cobro Coactivo (Art. 826 E.T.)",
    afirmacion: "El Mandamiento de Pago es el acto administrativo de trámite coercitivo con el cual el funcionario ejecutor de la DIAN ordena el pago de las deudas fiscales exigibles.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 826 del Estatuto Tributario dispone que el funcionario competente librará mandamiento de pago ordenando la cancelación de las obligaciones pendientes con sus respectivos intereses."
  },
  {
    id: "sd_72",
    tema: "Excepciones en Cobro Coactivo (Art. 831 E.T.)",
    afirmacion: "El ejecutado contra quien se libró mandamiento de pago dispone de quince (15) días hábiles siguientes a su notificación para proponer excepciones legales.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 830 del Estatuto Tributario otorga un término de quince (15) días hábiles contados a partir de la notificación del mandamiento de pago para proponer las excepciones del Art. 831."
  },
  {
    id: "sd_73",
    tema: "Medidas Cautelares en Cobro Coactivo (Art. 837 E.T.)",
    afirmacion: "La DIAN puede decretar el embargo y secuestro de bienes de manera previa o concomitante con la notificación del mandamiento de pago.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 837 del Estatuto Tributario faculta expresamente a la administración para decretar medidas cautelares previas o simultáneas con el fin de garantizar el recaudo de la deuda fiscal."
  },
  {
    id: "sd_74",
    tema: "Principio de Celeridad (Art. 3 CPACA)",
    afirmacion: "El principio de celeridad permite a los funcionarios de la DIAN omitir la notificación del requerimiento especial cuando consideren que el contribuyente es culpable sin lugar a dudas.",
    esVerdadero: false,
    explicacion: "FALSO. El principio de celeridad agiliza los trámites pero no autoriza vulnerar el debido proceso ni prescindir de etapas procesales obligatorias como el requerimiento especial (Art. 29 C.P.)."
  },
  {
    id: "sd_75",
    tema: "Revocatoria Directa (Art. 93 CPACA)",
    afirmacion: "La revocatoria directa de actos administrativos procede de oficio o a petición de parte cuando sea evidente que atentan contra el orden constitucional o causan agravio injustificado.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 93 del CPACA enumera las causales de revocatoria: manifiesta oposición a la Constitución o la ley, falta de conformidad con el interés público o agravio injustificado a una persona."
  },
  {
    id: "sd_76",
    tema: "Límites a la Revocatoria Directa (Art. 736 E.T.)",
    afirmacion: "Un contribuyente que demandó la liquidación oficial ante el Tribunal Administrativo puede pedir simultáneamente la revocatoria directa del acto ante la DIAN sin desistir de la demanda.",
    esVerdadero: false,
    explicacion: "FALSO. De acuerdo con el artículo 736 del Estatuto Tributario y el CPACA, no procede la solicitud de revocatoria directa cuando el peticionario haya ejercitado las acciones contencioso administrativas correspondientes."
  },
  {
    id: "sd_77",
    tema: "Silencio Administrativo Negativo (Art. 83 CPACA)",
    afirmacion: "En el procedimiento administrativo general, transcurridos tres (3) meses sin que se haya notificado decisión sobre una petición, se entenderá que es negativa.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 83 del CPACA consagra la regla general del silencio administrativo negativo al vencerse tres (3) meses sin decisión de fondo."
  },
  {
    id: "sd_78",
    tema: "Desistimiento Tácito (Art. 17 CPACA)",
    afirmacion: "Si un ciudadano no atiende el requerimiento de completar documentos en el plazo de un (1) mes, la autoridad decretará el desistimiento tácito y archivo de la petición.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 17 del CPACA establece que transcurrido un (1) mes sin que el interesado cumpla con lo requerido, se entenderá que ha desistido de la solicitud."
  },
  {
    id: "sd_79",
    tema: "Carga de la Prueba (Art. 742 E.T.)",
    afirmacion: "Las decisiones de la administración tributaria pueden fundarse exclusivamente en rumores o informaciones anónimas de internet sin necesidad de corroboración fáctica.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 742 del Estatuto Tributario exige que la determinación de tributos y sanciones debe fundarse en los hechos que aparezcan demostrados en el expediente por los medios de prueba señalados en la ley."
  },
  {
    id: "sd_80",
    tema: "Presunción de Veracidad (Art. 746 E.T.)",
    afirmacion: "Las declaraciones tributarias presentadas por los contribuyentes se presumen veraces mientras no se demuestre lo contrario a través de pruebas legales.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 746 del Estatuto Tributario consagra la presunción legal de veracidad de las declaraciones privadas y sus anexos mientras la DIAN no desvirtúe su contenido."
  },
  {
    id: "sd_81",
    tema: "Inspección Tributaria y Suspensión (Art. 779 E.T.)",
    afirmacion: "La práctica del auto que decreta una inspección tributaria suspende por tres (3) meses el término que tiene la DIAN para notificar el Requerimiento Especial.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 779 del Estatuto Tributario dispone que el término para notificar el requerimiento especial se suspende por tres (3) meses a partir de la notificación del auto que decreta la inspección tributaria."
  },
  {
    id: "sd_82",
    tema: "Inspección Contable (Art. 782 E.T.)",
    afirmacion: "Cualquier bachiller o pasante universitario puede realizar y firmar formalmente un acta de inspección contable tributaria para fundar una sanción millonaria.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 782 del Estatuto Tributario exige de forma perentoria que la inspección contable debe ser realizada exclusivamente por funcionarios que tengan la calidad de Contador Público titulado."
  },
  {
    id: "sd_83",
    tema: "Acta de Visita de Fiscalización",
    afirmacion: "Las actas de visita levantadas por los inspectores tributarios constituyen documentos públicos que hacen fe de los hechos observados y verificados en la diligencia.",
    esVerdadero: true,
    explicacion: "VERDADERO. Las actas de inspección o visita son documentos públicos que gozan de autenticidad y constituyen prueba idónea de las circunstancias materiales verificadas directamente por el funcionario."
  },
  {
    id: "sd_84",
    tema: "Facturación Electrónica con Validación Previa",
    afirmacion: "Una factura electrónica entregada al cliente antes de ser validada y aprobada por la plataforma informática de la DIAN carece de validez fiscal como soporte de deducciones.",
    esVerdadero: true,
    explicacion: "VERDADERO. El modelo de facturación electrónica en Colombia es de validación previa obligatoria (Art. 616-1 E.T.); sin la validación informática de la DIAN el documento no surte efectos fiscales de deducción ni soporte de IVA."
  },
  {
    id: "sd_85",
    tema: "Documento Soporte a No Obligados a Facturar",
    afirmacion: "Cuando un contribuyente compra bienes o servicios a un sujeto no obligado a facturar, debe generar y transmitir electrónicamente el documento soporte a la DIAN para deducir el gasto.",
    esVerdadero: true,
    explicacion: "VERDADERO. Conforme a las resoluciones de la DIAN sobre el Art. 771-2 del E.T., el documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura debe generarse y transmitirse de forma electrónica."
  },
  {
    id: "sd_86",
    tema: "Nómina Electrónica (Resolución DIAN)",
    afirmacion: "El documento soporte de pago de nómina electrónica debe transmitirse a la DIAN anualmente junto con la declaración del impuesto sobre la renta.",
    esVerdadero: false,
    explicacion: "FALSO. El documento soporte de pago de nómina electrónica tiene periodicidad mensual y debe transmitirse a la DIAN dentro de los primeros diez (10) días hábiles del mes siguiente al causado."
  },
  {
    id: "sd_87",
    tema: "Sistema RADIAN (Factoring Electrónico)",
    afirmacion: "El RADIAN es la plataforma oficial administrada por la DIAN donde se registran las facturas electrónicas de venta como título valor y sus eventos de endoso y circulación.",
    esVerdadero: true,
    explicacion: "VERDADERO. El RADIAN es el registro oficial que administra la DIAN para la trazabilidad y negociación de las facturas electrónicas de venta como títulos valores comerciales."
  },
  {
    id: "sd_88",
    tema: "Registro Único Tributario (Art. 555-2 E.T.)",
    afirmacion: "El RUT es el único mecanismo institucional obligatorio en Colombia para identificar, ubicar y clasificar a las personas naturales y jurídicas con obligaciones administradas por la DIAN.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 555-2 del Estatuto Tributario establece que el Registro Único Tributario (RUT) constituye el único mecanismo para identificar, ubicar y clasificar a todos los sujetos de obligaciones fiscales."
  },
  {
    id: "sd_89",
    tema: "Suspensión del RUT por Domicilio Inexistente",
    afirmacion: "La DIAN está facultada para suspender la inscripción en el RUT cuando verifique en visita que la dirección aportada es inexistente o el contribuyente no realiza actividad allí.",
    esVerdadero: true,
    explicacion: "VERDADERO. El Estatuto Tributario y el Decreto 1625 de 2016 autorizan la suspensión inmediata del RUT por causales como no ubicación del contribuyente en la dirección informada o presunción fundada de operaciones ficticias."
  },
  {
    id: "sd_90",
    tema: "Responsabilidad Fiscal (Ley 610 de 2000)",
    afirmacion: "El proceso de responsabilidad fiscal que adelanta la Contraloría persigue privar de la libertad a los servidores públicos que malversaron fondos del Estado.",
    esVerdadero: false,
    explicacion: "FALSO. La responsabilidad fiscal es de naturaleza eminentemente patrimonial y reparatoria (recuperar el erario dañado), no de carácter penal ni privativo de la libertad."
  },
  {
    id: "sd_91",
    tema: "Nulidad y Restablecimiento del Derecho (Art. 164 CPACA)",
    afirmacion: "La demanda de nulidad y restablecimiento del derecho contra una liquidación oficial debe interponerse dentro de los cuatro (4) meses siguientes a la notificación de la resolución que agotó la vía administrativa.",
    esVerdadero: true,
    explicacion: "VERDADERO. El artículo 164 numeral 2 literal d) del CPACA fija una caducidad perentoria de cuatro (4) meses para demandar la nulidad y restablecimiento del derecho contra actos administrativos particulares."
  },
  {
    id: "sd_92",
    tema: "Medio de Control de Simple Nulidad (Art. 137 CPACA)",
    afirmacion: "La acción de simple nulidad contra una resolución general reglamentaria de la DIAN caduca a los cuatro (4) meses de su expedición.",
    esVerdadero: false,
    explicacion: "FALSO. La demanda de simple nulidad contra actos de carácter general puede ejercitarse en cualquier tiempo (Art. 164 CPACA), no tiene término de caducidad."
  },
  {
    id: "sd_93",
    tema: "Recurso de Apelación en Vía Administrativa",
    afirmacion: "El recurso de apelación debe interponerse ante el superior jerárquico directamente, saltándose al funcionario que profirió la decisión original.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 76 del CPACA dispone que el recurso de apelación se interpone ante el mismo funcionario que tomó la decisión para que lo conceda y remita el expediente al superior jerárquico."
  },
  {
    id: "sd_94",
    tema: "Ponderación Convocatoria DIAN 2676",
    afirmacion: "La prueba de Competencias Comportamentales en el concurso DIAN 2676 tiene carácter eliminatorio con puntaje mínimo de 65 puntos.",
    esVerdadero: false,
    explicacion: "FALSO. La prueba de competencias comportamentales es de carácter clasificatorio (no eliminatorio), pondera el 20% del total del concurso. La única prueba eliminatoria es la Funcional (70.00 pts)."
  },
  {
    id: "sd_95",
    tema: "Valoración de Antecedentes (Convocatoria 2676)",
    afirmacion: "En la prueba de Valoración de Antecedentes, se otorga puntaje adicional por los títulos y meses de experiencia que se usaron para cumplir el requisito mínimo exigido en la OPEC.",
    esVerdadero: false,
    explicacion: "FALSO. En Valoración de Antecedentes solo se puntúa la educación y experiencia que exceda el requisito mínimo establecido para el empleo en la OPEC; los requisitos mínimos no generan puntaje clasificatorio."
  },
  {
    id: "sd_96",
    tema: "Periodo de Prueba en Carrera DIAN",
    afirmacion: "El periodo de prueba para los servidores nombrados en la DIAN por concurso de méritos tiene una duración obligatoria de seis (6) meses continuos de labor.",
    esVerdadero: true,
    explicacion: "VERDADERO. El Decreto Ley 071 de 2020 y el régimen general de carrera establecen un periodo de prueba de seis (6) meses para evaluar las competencias del servidor seleccionado."
  },
  {
    id: "sd_97",
    tema: "Superación del Periodo de Prueba",
    afirmacion: "Superado el periodo de prueba con calificación satisfactoria o sobresaliente, el empleado adquiere los derechos de carrera administrativa y la inscripción en el registro público.",
    esVerdadero: true,
    explicacion: "VERDADERO. La aprobación del periodo de prueba otorga formalmente los derechos de carrera administrativa y da derecho a la inscripción definitiva en el escalafón de carrera de la DIAN."
  },
  {
    id: "sd_98",
    tema: "Conflicto de Interés en Función Pública",
    afirmacion: "Si el cónyuge de una auditora de la DIAN es contador del contribuyente auditado, la auditora puede continuar la fiscalización si promete ser totalmente imparcial.",
    esVerdadero: false,
    explicacion: "FALSO. El artículo 11 del CPACA y el Código de Integridad obligan a declararse impedido de inmediato por conflicto de interés real y objetivo (vínculo matrimonial o parentesco directo)."
  },
  {
    id: "sd_99",
    tema: "Código de Integridad (Valor Respeto)",
    afirmacion: "El valor de la Integridad prohíbe terminantemente a los servidores de la DIAN recibir atenciones, comidas, dádivas o favores de personas interesadas en sus actuaciones.",
    esVerdadero: true,
    explicacion: "VERDADERO. El Código de Integridad y el régimen disciplinario sancionan severamente recibir cualquier dádiva o remuneración indebida de particulares vinculados a trámites a cargo de la entidad."
  },
  {
    id: "sd_100",
    tema: "Manual de Funciones y Nivel Jerárquico (DAFP)",
    afirmacion: "Un funcionario del nivel Profesional (como Gestor III) tiene prohibido firmar actos que creen, modifiquen o extingan situaciones jurídicas generales reservadas a Directores Seccionales.",
    esVerdadero: true,
    explicacion: "VERDADERO. El Decreto 1083 de 2015 del DAFP reserva la expedición de actos resolutivos y decisorios a los empleos del nivel directivo; el profesional formula, sustancia y proyecta, pero no usurpa facultades de dirección."
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
