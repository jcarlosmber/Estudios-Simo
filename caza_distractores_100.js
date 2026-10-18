// caza_distractores_100.js - Banco de 100 Casos de Speed Drill "Caza-Distractores" (DAFP / CNSC / DIAN)
// Diseñado para evaluar discriminación de nivel jerárquico, extralimitaciones y pasividad/omisión.

(function(global) {
  const CAZA_DISTRACTORES_100 = [
    // -------------------------------------------------------------
    // BLOQUE 1: GESTOR III - CONTROL INTERNO (Ficha PC-CI-3006) [vd_01 - vd_34]
    // -------------------------------------------------------------
    {
      id: "vd_01",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Durante una auditoría interna de cumplimiento al proceso de devoluciones automáticas de saldos a favor:",
      opcionTexto: "Evaluar la efectividad de los controles automáticos del sistema Muisca y proyectar el informe de auditoría con los hallazgos y riesgos detectados.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Evaluar' y 'Proyectar informes' son los verbos rectores nucleares del auditor interno profesional según el MECI y el propósito del cargo PC-CI-3006."
    },
    {
      id: "vd_02",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al constatar que un área operativa incumple sistemáticamente los plazos de respuesta a derechos de petición:",
      opcionTexto: "Asumir directamente la radicación y respuesta de las peticiones acumuladas para descongestionar el buzón de la seccional.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN / CO-ADMINISTRACIÓN! El auditor interno tiene prohibido co-administrar o ejecutar las operaciones auditadas (Ley 87 de 1993, Art. 3). Su deber es recomendar y auditar, no sustituir al área."
    },
    {
      id: "vd_03",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al verificar el mapa de riesgos de corrupción del proceso aduanero en zona primaria:",
      opcionTexto: "Archivar las observaciones sin comunicar al jefe de la oficina porque la seccional ya está en periodo de vacaciones colectivas.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD U OMISIÓN! El servidor de control interno tiene la obligación legal de alertar oportunamente sobre debilidades en los controles de riesgo de corrupción."
    },
    {
      id: "vd_04",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "En el seguimiento trimestral al Plan de Mejoramiento Institucional suscrito ante la Contraloría General:",
      opcionTexto: "Monitorear el avance porcentual de las acciones correctivas implementadas y valorar las evidencias documentales aportadas por los líderes de proceso.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Monitorear' y 'Valorar evidencias' representan la labor sustantiva del Gestor III en el seguimiento a planes de mejoramiento."
    },
    {
      id: "vd_05",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al identificar irregularidades presuntamente delictivas en la custodia de mercancías aprehendidas:",
      opcionTexto: "Ordenar la captura preventiva del bodeguero y suspenderlo de su cargo mediante auto resolutivo.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Ordenar capturas es privativo de autoridades judiciales y suspender servidores corresponde a Control Interno Disciplinario o Fiscalía, no a la Oficina de Control Interno."
    },
    {
      id: "vd_06",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Frente al diseño del Plan Anual de Auditoría Basado en Riesgos para la vigencia:",
      opcionTexto: "Formular la propuesta metodológica de priorización de procesos críticos considerando el universo auditable y los recursos disponibles.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Formular propuestas metodológicas' es una función típica del nivel profesional en planeación de auditorías."
    },
    {
      id: "vd_07",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al revisar el diseño de controles preventivos en el nuevo software de factura electrónica:",
      opcionTexto: "Recomendar ajustes a la matriz de riesgos institucionales para asegurar la trazabilidad de los eventos y la mitigación de fraudes.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Recomendar' en el marco del rol asesor de control interno (Tercera Línea) aporta valor sin incurrir en co-administración."
    },
    {
      id: "vd_08",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al auditar la contratación de servicios de vigilancia de sedes de la DIAN:",
      opcionTexto: "Modificar unilateralmente las cláusulas contractuales y declarar la caducidad del contrato con el proveedor.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Declarar la caducidad o modificar contratos es potestad exclusiva del ordenador del gasto de la entidad (Nivel Directivo), no del auditor."
    },
    {
      id: "vd_09",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al recibir indicios de fuga de información reservada en cruces tributarios:",
      opcionTexto: "Esperar a que finalice el año para incluir el tema en el informe anual sin realizar indagaciones preliminares.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! Postergar una alerta grave de fuga de reserva tributaria contraviene el deber de debida diligencia profesional y el principio de oportunidad."
    },
    {
      id: "vd_10",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "En la fase de ejecución de una auditoría financiera a los fondos rotatorios seccionales:",
      opcionTexto: "Aplicar pruebas sustantivas de muestreo sobre los comprobantes de egreso y conciliar los saldos contra extractos bancarios oficiales.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Aplicar pruebas sustantivas' y 'Conciliar' son tareas técnicas y metodológicas propias de la labor auditora profesional."
    },
    {
      id: "vd_11",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al socializar el informe final de auditoría interna con el líder del proceso auditado:",
      opcionTexto: "Imponer multas salariales al director seccional por no haber alcanzado la meta de recaudo trimestral.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! El auditor interno no tiene facultad punitiva ni disciplinaria para imponer multas o sanciones salariales."
    },
    {
      id: "vd_12",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al estructurar los papeles de trabajo de una auditoría especial a los inventarios de vehículos decomisados:",
      opcionTexto: "Consignar los hallazgos con base en percepciones verbales de terceros sin requerir actas de ingreso ni soportes documentales.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR DEFICIENCIA / PASIVIDAD! Las normas internacionales de auditoría interna exigen que la evidencia sea suficiente, fiable, relevante y útil (Norma Global IIA)."
    },
    {
      id: "vd_13",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "En el marco de la autoevaluación del Sistema de Control Interno (MECI / MIPG Dimensión 7):",
      opcionTexto: "Analizar el estado de madurez de los componentes de ambiente de control, gestión de riesgos y actividades de monitoreo institucional.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Analizar el estado de madurez' es la función primordial para alimentar el Formulario Único de Reporte de Avance a la Gestión (FURAG)."
    },
    {
      id: "vd_14",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al advertir que un contratista de software no entregó los códigos fuente en la fecha acordada:",
      opcionTexto: "Aprobar una adición presupuestal al contrato sin consultar al supervisor ni al comité de adquisiciones.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! El auditor no administra presupuestos ni aprueba adiciones contractuales."
    },
    {
      id: "vd_15",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Ante un requerimiento urgente de información formulado por el Consejo de Estado sobre un proceso de auditoría cerrado:",
      opcionTexto: "Consolidar los antecedentes del expediente auditado y proyectar la respuesta formal para firma del Jefe de Oficina.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Consolidar antecedentes' y 'Proyectar respuesta' reflejan la autonomía y apoyo técnico de alto nivel del profesional."
    },
    {
      id: "vd_16",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al detectar inconsistencias en la custodia de títulos de depósito judicial de cobranzas:",
      opcionTexto: "Abstenerse de registrar el hallazgo porque el funcionario responsable se comprometió a cuadrar las cuentas en privado.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR OMISIÓN GRAVE! Ocultar o pactar la no inclusión de hallazgos vulnera el Código General Disciplinario y el principio de objetividad e independencia del auditor."
    },
    {
      id: "vd_17",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "En el rol de fomento a la cultura del autocontrol institucional:",
      opcionTexto: "Diseñar talleres pedagógicos y guías prácticas sobre la aplicación de las tres líneas de defensa dirigidos a los servidores de la seccional.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Diseñar talleres y guías' cumple directamente con el rol misional de fomento de la cultura del autocontrol de la Ley 87 de 1993."
    },
    {
      id: "vd_18",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al observar demoras en el pago de nómina de los empleados de la entidad:",
      opcionTexto: "Ordenar a la Tesorería General la dispersión inmediata de fondos mediante memorando con carácter vinculante.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Los informes y recomendaciones de control interno no son vinculantes operativamente ni tienen fuerza de ordenamiento de pagos."
    },
    {
      id: "vd_19",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al verificar el cumplimiento de la política de seguridad digital y protección de datos:",
      opcionTexto: "Verificar la existencia de copias de seguridad periódicas y comprobar el protocolo de recuperación ante desastres en los servidores centrales.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Verificar' y 'Comprobar' son acciones legítimas del auditor para constatar la efectividad de las defensas informáticas."
    },
    {
      id: "vd_20",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Durante una auditoría de gestión al área de cobranzas coactivas:",
      opcionTexto: "Decretar de oficio el levantamiento de medidas cautelares sobre las cuentas bancarias de los deudores morosos.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Decretar o levantar embargos es facultad exclusiva del funcionario ejecutor de Cobranzas, jamás de Control Interno."
    },
    {
      id: "vd_21",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al evaluar la efectividad de los indicadores de gestión del área de aduanas:",
      opcionTexto: "Determinar si las fórmulas de medición reflejan fielmente el impacto real del control en zona primaria y recomendar mejoras técnicas.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Determinar efectividad' y 'Recomendar mejoras' son competencias analíticas superiores del auditor profesional."
    },
    {
      id: "vd_22",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al encontrar expedientes de fiscalización engavetados a punto de prescribir:",
      opcionTexto: "Redactar una nota informal y guardarla en su gaveta sin elevar informe extraordinario a la jefatura.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! El riesgo inminente de prescripción tributaria exige elevar inmediatamente un informe o memorando de alerta preventiva."
    },
    {
      id: "vd_23",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al evaluar el cumplimiento de la Ley de Transparencia y Acceso a la Información (Ley 1712 de 2014):",
      opcionTexto: "Verificar que la información pública clasificada y reservada cuente con el respectivo índice formal y soporte legal aprobado.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! Es función del auditor velar porque la transparencia activa y pasiva cumpla estrictamente con la legislación vigente."
    },
    {
      id: "vd_24",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al revisar el trámite de bajas de activos fijos inservibles en una bodega seccional:",
      opcionTexto: "Adjudicar los bienes dados de baja a una fundación comunitaria mediante resolución suscrita por su cuenta.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Disponer de bienes públicos es competencia exclusiva del Comité de Bienes y de la Dirección Administrativa y Financiera."
    },
    {
      id: "vd_25",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Ante denuncias anónimas sobre presunto direccionamiento de contratos en la seccional:",
      opcionTexto: "Estructurar un plan de auditoría forense preventiva para verificar los criterios de habilitación y ponderación aplicados en las licitaciones.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Estructurar planes de auditoría' para profundizar en riesgos de corrupción es deber primordial del Gestor III de Control Interno."
    },
    {
      id: "vd_26",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al detectar discrepancias en el cálculo de horas extras de los funcionarios aduaneros:",
      opcionTexto: "Aprobar el pago de las sumas cobradas sin cotejar las planillas de turno ni los biométricos de acceso.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD / NEGLIGENCIA! El auditor no valida pagos a ciegas; su rol es verificar soportes y evidenciar posibles pagos indebidos."
    },
    {
      id: "vd_27",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "En la rendición de la Cuenta Anual Fiscal ante la Contraloría General de la República:",
      opcionTexto: "Consolidar la información de los diferentes módulos financieros y verificar la consistencia de los datos reportados en el aplicativo SIRECI.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Consolidar' y 'Verificar consistencia' aseguran el cumplimiento oportuno y veraz de los requerimientos de los órganos de control externo."
    },
    {
      id: "vd_28",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Durante una reunión del Comité Institucional de Coordinación de Control Interno:",
      opcionTexto: "Presentar el informe de evaluación semestral del SCI destacando las alertas tempranas y el avance del plan de mejoramiento institucional.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! Presentar evaluaciones independientes ante la alta dirección es la esencia de la Tercera Línea de Defensa en MIPG."
    },
    {
      id: "vd_29",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al observar que un área evaluada rechaza las recomendaciones formuladas:",
      opcionTexto: "Declarar insubsistente al jefe de área por insubordinación técnica frente a las observaciones de auditoría.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN ABSOLUTA! La facultad nominadora de insubsistencia es del Director General de la entidad, no del auditor."
    },
    {
      id: "vd_30",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al auditar la atención en los Puntos de Contacto DIAN a nivel nacional:",
      opcionTexto: "Evaluar los tiempos de espera del contribuyente mediante técnicas estadísticas y comparar los resultados contra el acuerdo de servicio institucional.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Evaluar tiempos' y 'Comparar contra acuerdos de servicio' evalúa la dimensión de servicio al ciudadano dentro del MIPG."
    },
    {
      id: "vd_31",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al detectar la caducidad de licencias de software antivirus en equipos misionales:",
      opcionTexto: "Archivar el memorando para evitar conflictos con el área de tecnologías de la información.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! El servidor público debe actuar con integridad y objetividad, sin omitir hallazgos por temor o complacencia."
    },
    {
      id: "vd_32",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "En el seguimiento a los planes de contingencia por fallas en el servicio informático de la DIAN:",
      opcionTexto: "Verificar la efectividad de los protocolos de operación en contingencia y comprobar que no se generen sanciones injustas a declarantes.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! La verificación de protocolos de contingencia salvaguarda el debido proceso y la seguridad jurídica del contribuyente."
    },
    {
      id: "vd_33",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al auditar la administración del archivo y tablas de retención documental:",
      opcionTexto: "Ordenar la quema inmediata de documentos antiguos para liberar espacio físico en el sótano de la seccional.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN / ILEGALIDAD! La disposición final y eliminación de documentos públicos exige concepto previo del Archivo General de la Nación y actas del Comité Institucional de Gestión y Desempeño."
    },
    {
      id: "vd_34",
      perfilTarget: "gestor_iii_ci",
      nivelCargo: "Profesional (Gestor III - Control Interno)",
      contexto: "Al emitir la carta de representación previa al informe final de auditoría:",
      opcionTexto: "Solicitar formalmente a los líderes de proceso auditados la confirmación de la integridad y veracidad de la información aportada.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! La carta de representación es un estándar internacional obligatorio de aseguramiento en auditoría interna."
    },

    // -------------------------------------------------------------
    // BLOQUE 2: GESTOR III - FISCALIZACIÓN Y TRIBUTARIO (Ficha FT-TAH-1824) [vd_35 - vd_67]
    // -------------------------------------------------------------
    {
      id: "vd_35",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "En una investigación fiscal por inclusión de proveedores ficticios en la declaración de renta:",
      opcionTexto: "Decretar pruebas periciales contables, contrastar libros auxiliares con facturación electrónica y proyectar el Requerimiento Especial debidamente motivado.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Decretar pruebas', 'Contrastar' y 'Proyectar el Requerimiento Especial' definen el núcleo sustancial del fiscalizador profesional (Art. 703 Estatuto Tributario)."
    },
    {
      id: "vd_36",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al recibir a un apoderado que solicita la prescripción de una obligación tributaria en discusión:",
      opcionTexto: "Condenar verbalmente la deuda de capital e intereses a cambio de un acuerdo de pago informal de la sanción.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN / ILEGALIDAD! Los tributos son indisponibles por acuerdo entre particulares o funcionarios (Art. 553 E.T.); condonar deudas exige ley de la República."
    },
    {
      id: "vd_37",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Frente a un contribuyente omiso en presentar declaración de activos en el exterior por más de dos años:",
      opcionTexto: "Esperar a que el contribuyente cumpla voluntariamente sin expedir el emplazamiento previo por no recargar la carga de trabajo.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! Es deber legal del funcionario iniciar la acción de aforo oficial y expedir el Emplazamiento para Declarar dentro de los términos de ley (Art. 715 E.T.)."
    },
    {
      id: "vd_38",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Durante una diligencia de inspección tributaria en la sede administrativa de una sociedad comercial:",
      opcionTexto: "Levantar el acta pormenorizada de inspección dejando constancia detallada de los libros exhibidos, copias tomadas y hechos constatados.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Levantar acta de inspección' es la actuación legal obligatoria para dotar de validez probatoria a la diligencia (Art. 779 E.T.)."
    },
    {
      id: "vd_39",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al proyectar una Liquidación Oficial de Revisión por inexactitud:",
      opcionTexto: "Aprobar y firmar como decisor final la liquidación oficial sin someterla a revisión ni firma del Jefe de División de Liquidación.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! El Gestor III sustancie y 'proyecta' el acto; la firma resolutiva final corresponde al Jefe de División de Liquidación según la estructura de competencias de la DIAN."
    },
    {
      id: "vd_40",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al detectar inconsistencias en el informe de precios de transferencia de una multinacional:",
      opcionTexto: "Analizar los métodos económicos de comparabilidad y formular el pliego de cargos por sanciones relativas a precios de transferencia.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Analizar comparabilidad' y 'Formular pliegos' son tareas especializadas reservadas al nivel Profesional en régimen internacional."
    },
    {
      id: "vd_41",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Ante un auto de archivo de investigación propuesto por un compañero que presenta graves indicios de corrupción:",
      opcionTexto: "Firmar el archivo como visto bueno sin leer el expediente para no entorpecer el clima laboral de la oficina.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD / CUMPLIMIENTO CIEGO! La responsabilidad del servidor público es indelegable respecto a los actos que avala; firmar sin revisar vulnera el principio de diligencia."
    },
    {
      id: "vd_42",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "En el control posterior aduanero a una declaración de importación con duda sobre el valor declarado:",
      opcionTexto: "Aplicar las reglas de valoración de la OMC, solicitar pruebas adicionales de valor y proyectar el requerimiento especial aduanero.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Aplicar reglas de valoración' y 'Proyectar requerimientos aduaneros' se ajustan plenamente al Decreto 920 de 2023 y al rol del Gestor III."
    },
    {
      id: "vd_43",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al inspeccionar un establecimiento de comercio que no expide factura electrónica:",
      opcionTexto: "Ordenar la demolición física del local comercial como sanción accesoria ejemplarizante.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN ABSURDA! La sanción legal por no facturar es la clausura del establecimiento (Art. 657 E.T.), jamás la demolición de infraestructura privada."
    },
    {
      id: "vd_44",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Frente al trámite de una solicitud de devolución de saldo a favor de IVA por exportaciones:",
      opcionTexto: "Verificar la existencia real de las operaciones de exportación en los registros de la VUCE y cruzar retenciones practicadas antes de proyectar la resolución.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Verificar operaciones' y 'Cruzar retenciones' asegura la protección del patrimonio público ante devoluciones fraudulentas (Art. 857 E.T.)."
    },
    {
      id: "vd_45",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al observar que el término de firmeza de una declaración está a tres días de cumplirse y no se ha notificado el requerimiento especial:",
      opcionTexto: "Dejar vencer el término de firmeza aduciendo que ya no hay tiempo material de gestionar la notificación electrónica.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD GRAVÍSIMA! Dejar vencer los términos de firmeza por desidia acarrea investigación disciplinaria y eventual responsabilidad fiscal por daño patrimonial."
    },
    {
      id: "vd_46",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al resolver las objeciones presentadas por un contribuyente frente a un Requerimiento Especial:",
      opcionTexto: "Analizar exhaustivamente los argumentos y pruebas de descargo, aceptar las procedentes y proyectar la Liquidación Oficial de Revisión por las partidas no justificadas.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! El funcionario debe garantizar el debido proceso valorando todas las pruebas allegadas antes de proyectar el acto definitivo."
    },
    {
      id: "vd_47",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al realizar un control tributario en un centro comercial:",
      opcionTexto: "Promulgar una amnistía de intereses de mora a los comerciantes que paguen de contado en la jornada.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Las amnistías tributarias solo pueden ser creadas por el Congreso de la República mediante Ley."
    },
    {
      id: "vd_48",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "En una verificación de operaciones de comercio exterior con países con regímenes tributarios preferenciales (paraísos fiscales):",
      opcionTexto: "Contrastar los estudios de precios de transferencia y proyectar el auto de apertura de investigación fiscal especializado.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! Es una competencia investigativa analítica del Gestor III en materia de tributación internacional."
    },
    {
      id: "vd_49",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al encontrar inconsistencias graves en los libros contables de un consorcio de infraestructura:",
      opcionTexto: "Recomendar que no se investigue al consorcio porque sus integrantes son firmas reconocidas a nivel nacional.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR FALTA DE OBJETIVIDAD / PASIVIDAD! El principio de igualdad y legalidad tributaria impide tratos preferenciales basados en la notoriedad del contribuyente."
    },
    {
      id: "vd_50",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al detectar una omisión de ingresos en declaración de renta a partir de cruces con el sistema bancario:",
      opcionTexto: "Proyectar el emplazamiento para corregir detallando con claridad las inconsistencias detectadas y el término para responder.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Proyectar emplazamiento para corregir' es el procedimiento preventivo reglado en el artículo 688 del Estatuto Tributario."
    },
    {
      id: "vd_51",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "En una visita de verificación aduanera a una Zona Franca:",
      opcionTexto: "Aprobar el ingreso irregular de mercancías sin declaración aduanera cobrando una tarifa personal de agilización.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR CORRUPCIÓN / EXTRALIMITACIÓN! Tipifica delitos penales de concusión y cohecho; el funcionario solo aplica los controles legales."
    },
    {
      id: "vd_52",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al elaborar una respuesta a un derecho de petición en materia de interpretación del Estatuto Tributario:",
      opcionTexto: "Citar la doctrina vigente emitida por la Dirección de Gestión Jurídica y proyectar la respuesta dentro del marco institucional sin crear normas nuevas.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! La doctrina oficial unificada de la DIAN es de obligatoria observancia para los funcionarios según el artículo 131 de la Ley 2010 de 2019."
    },
    {
      id: "vd_53",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al revisar un expediente con prueba pericial técnica contradictoria:",
      opcionTexto: "Descartar la prueba pericial sin motivación alguna y resolver con fundamento exclusivo en sospechas personales.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR ARBITRARIEDAD / FALTA DE MOTIVACIÓN! Todo acto de determinación debe fundarse en la sana crítica de las pruebas legalmente practicadas (Art. 742 E.T.)."
    },
    {
      id: "vd_54",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "En una diligencia de inspección contable tributaria:",
      opcionTexto: "Examinar los comprobantes de egreso, verificar los soportes de retención en la fuente y contrastar contra el libro mayor de balances.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Examinar', 'Verificar' y 'Contrastar' son verbos propios de la auditoría y fiscalización tributaria."
    },
    {
      id: "vd_55",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al evaluar la solicitud de un deudor de suscribir un acuerdo de pago a 5 años:",
      opcionTexto: "Exonerar de plano la constitución de garantías reales porque el contribuyente afirma ser una persona honesta.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Los acuerdos de pago a plazos superiores a un año exigen obligatoriamente garantías reales o bancarias (Art. 814 E.T.)."
    },
    {
      id: "vd_56",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al fiscalizar operaciones de comercio electrónico y ventas por redes sociales sin RUT:",
      opcionTexto: "Efectuar cruces con las pasarelas de pago digitales y proyectar el auto de inscripción oficiosa en el Registro Único Tributario.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! La inscripción de oficio en el RUT está autorizada por el artículo 555-2 del Estatuto Tributario para formalizar a los obligados."
    },
    {
      id: "vd_57",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al vencerse el término de traslado del requerimiento especial sin respuesta del contribuyente:",
      opcionTexto: "Archivar el caso considerando que la ausencia de respuesta demuestra desinterés del investigado.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD ILÍCITA! Si el contribuyente no responde el requerimiento especial, la ley ordena proferir la Liquidación Oficial de Revisión (Art. 710 E.T.)."
    },
    {
      id: "vd_58",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "En el control de mercancías bajo régimen de tránsito aduanero:",
      opcionTexto: "Verificar la integridad de los precintos electrónicos aduaneros y comprobar que la ruta satelital coincida con la autorizada.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! El control físico y tecnológico del tránsito aduanero es una función medular de la fiscalización aduanera."
    },
    {
      id: "vd_59",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al detectar una inconsistencia en un auto comisorio de auditoría:",
      opcionTexto: "Cambiar a mano el nombre del contribuyente investigado en el auto y continuar la diligencia sin autorización de la jefatura.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN / NULIDAD! Los autos comisorios deben ser formalmente expedidos y modificados por la jefatura competente; alterar documentos genera nulidad procesal."
    },
    {
      id: "vd_60",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al verificar el cumplimiento de la obligación de facturar electrónicamente en grandes superficies:",
      opcionTexto: "Constatar la expedición del documento equivalente electrónico y verificar la transmisión oportuna a la plataforma DIAN en tiempo real.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Constatar' y 'Verificar la transmisión' asegura el control tributario sobre el ecosistema de facturación electrónica."
    },
    {
      id: "vd_61",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al recibir un expediente con pruebas obtenidas con violación del debido proceso:",
      opcionTexto: "Incorporar las pruebas ilícitas sin valorar su nulidad aduciendo que lo importante es recaudar a toda costa.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR VIOLACIÓN CONSTITUCIONAL! El artículo 29 de la Constitución Política prescribe que es nula de pleno derecho la prueba obtenida con violación del debido proceso."
    },
    {
      id: "vd_62",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "En una investigación por activos omitidos y pasivos inexistentes en el exterior:",
      opcionTexto: "Tramitar requerimientos de intercambio de información tributaria internacional con base en los convenios de asistencia mutua suscritos por Colombia.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! La activación de canales de intercambio de información (como el Estándar CRS de la OCDE) es función especializada del Gestor III."
    },
    {
      id: "vd_63",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Durante una inspección física de mercancías extranjeras:",
      opcionTexto: "Aprobar el remate inmediato y adjudicación privada de la mercancía a familiares del equipo de inspección.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR DELITO / EXTRALIMITACIÓN! La disposición de mercancías decomisadas tiene procedimientos reglados de enajenación, donación o destrucción a través de la Dirección General."
    },
    {
      id: "vd_64",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al evaluar la solicitud de corrección de una declaración que aumenta el saldo a favor:",
      opcionTexto: "Verificar la realidad económica de los costos adicionales presentados y proyectar el auto que autoriza o rechaza la corrección dentro de los seis meses de ley.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Verificar realidad económica' y 'Proyectar auto de corrección' se ajusta estrictamente al procedimiento del artículo 589 del Estatuto Tributario."
    },
    {
      id: "vd_65",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al detectar una empresa fachada utilizada para la creación de IVA descontable ficticio:",
      opcionTexto: "Archivar el expediente considerando que al tratarse de una sociedad ilocalizable la DIAN no puede hacer nada.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! Procede emitir el acto de declaratoria de proveedor ficticio o insolvente (Art. 671 E.T.) y compulsar copias penales a la Fiscalía General."
    },
    {
      id: "vd_66",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al finalizar una auditoría tributaria con aceptación voluntaria de las glosas por el contribuyente:",
      opcionTexto: "Comprobar que la declaración de corrección provocada liquide adecuadamente la sanción reducida del 25% y proyectar el auto de archivo por pago.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! Comprobar la liquidación de la sanción por corrección provocada (Art. 709 E.T.) culmina válidamente la actuación procesal."
    },
    {
      id: "vd_67",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III - Fiscalización)",
      contexto: "Al detectar mercancía de contrabando en un retén vial aduanero:",
      opcionTexto: "Devolver la mercancía al infractor a cambio de una promesa verbal de que tramitará la declaración en el futuro.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN / PREVARICATO! El funcionario está legalmente obligado a adoptar la medida cautelar de aprehensión de la mercancía sin excepción (Decreto 920 de 2023)."
    },

    // -------------------------------------------------------------
    // BLOQUE 3: ANALISTA IV - NIVEL TÉCNICO Y OPERATIVO (Ficha T-OR-2104) [vd_68 - vd_100]
    // -------------------------------------------------------------
    {
      id: "vd_68",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al recibir paquetes de declaraciones de renta físicas radicadas en entidades bancarias:",
      opcionTexto: "Digitar con exactitud la información en el sistema Muisca, cotejar los totales de control y reportar los lotes procesados.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Digitar', 'Cotejar' y 'Reportar lotes' son funciones nucleares operativas del nivel Técnico (Analista IV)."
    },
    {
      id: "vd_69",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Durante la revisión preliminar de una declaración de importación con presunta subfacturación:",
      opcionTexto: "Modificar de manera unilateral la fórmula de valoración aduanera y crear una nueva subpartida arancelaria para el país.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN RADICAL! Crear subpartidas arancelarias corresponde al Gobierno Nacional y formular criterios de valoración al Nivel Profesional/Directivo."
    },
    {
      id: "vd_70",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al detectar que un usuario radicó un recurso de reposición sin anexar la copia del poder de su abogado:",
      opcionTexto: "Rechazar definitivamente el recurso y archivar el caso sin consultar al profesional sustanciador.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Un analista técnico no resuelve sobre la admisibilidad de fondo de recursos jurídicos; debe preparar la constancia y elevar al profesional para que este requiera o decida."
    },
    {
      id: "vd_71",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el área de radicación y ventanilla única de correspondencia oficial:",
      opcionTexto: "Radicar oportunamente las comunicaciones en el sistema de gestión documental, clasificar los anexos y distribuir a las dependencias competentes.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Radicar', 'Clasificar' y 'Distribuir' representan el soporte operativo reglamentario del Analista IV."
    },
    {
      id: "vd_72",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al finalizar su turno en la mesa de control de acceso aduanero:",
      opcionTexto: "Dejar los registros de ingreso de camiones en hojas sueltas sin ingresar al sistema porque ya es la hora de salida.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD / NEGLIGENCIA! El deber del técnico es registrar oportunamente las novedades y asegurar el cierre operativo del turno."
    },
    {
      id: "vd_73",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el apoyo a una diligencia de allanamiento tributario ordenada por la Dirección Seccional:",
      opcionTexto: "Inventariar los libros contables encontrados, foliarlos secuencialmente y levantar el registro de custodia de las evidencias.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Inventariar', 'Foliar' y 'Custodiar' son actividades operacionales esenciales del nivel técnico en apoyo a la fiscalización."
    },
    {
      id: "vd_74",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al recibir a un contribuyente que solicita asesoría jurídica sobre planeación tributaria patrimonial:",
      opcionTexto: "Diseñar una estructura societaria en el exterior para que el usuario pague menos impuestos en Colombia.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN E INCOMPATIBILIDAD! Los servidores de la DIAN no asesoran privadamente en elusión ni planeación tributaria."
    },
    {
      id: "vd_75",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al apoyar el proceso de devoluciones automáticas:",
      opcionTexto: "Comprobar que los certificados bancarios adjuntos coincidan con el titular del RUT y que la cuenta se encuentre activa en el sistema.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Comprobar coincidencias' y 'Verificar estado de cuentas' es la labor técnica de validación previa obligatoria."
    },
    {
      id: "vd_76",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al encontrar una inconsistencia aritmética en una liquidación privada de retención en la fuente:",
      opcionTexto: "Ignorar la inconsistencia y no registrarla en la planilla de control para no demorar la entrega de su trabajo.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! El rol del técnico es identificar y reportar inconsistencias aritméticas o documentales para que el área de fiscalización actúe."
    },
    {
      id: "vd_77",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En la administración del almacén de pruebas de la división de fiscalización aduanera:",
      opcionTexto: "Registrar las entradas y salidas de muestras en el libro de almacén y mantener rotulados los paquetes de acuerdo con el número de expediente.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Registrar entradas/salidas' y 'Rotular' salvaguardan la cadena de custodia de las pruebas aduaneras."
    },
    {
      id: "vd_78",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al observar lentitud en el aplicativo informático Muisca:",
      opcionTexto: "Desinstalar el software de los servidores de la sede seccional e instalar una versión de prueba descargada de internet.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Las modificaciones en infraestructura y software institucional corresponden a la Subdirección de TI y a protocolos estrictos de ciberseguridad."
    },
    {
      id: "vd_79",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el apoyo operativo a la notificación de actos administrativos tributarios:",
      opcionTexto: "Preparar las citaciones de notificación personal, verificar las direcciones en el RUT y registrar las constancias de entrega por correo certificado.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Preparar citaciones' y 'Registrar constancias de notificación' es un soporte técnico crítico para evitar nulidades por indebida notificación."
    },
    {
      id: "vd_80",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al detectar que un usuario anexó un billete entre los documentos de una solicitud de inscripción en el RUT:",
      opcionTexto: "Recibir el dinero en efectivo como propina de agilización y tramitar el RUT prioritariamente.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR DELITO / CORRUPCIÓN! El trámite del RUT es estrictamente gratuito; recibir dádivas tipifica el delito de cohecho."
    },
    {
      id: "vd_81",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al apoyar la consolidación del informe mensual de recaudo tributario de la seccional:",
      opcionTexto: "Totalizar las cifras recaudadas por cada concepto impositivo y generar los cuadros estadísticos en las plantillas oficiales.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Totalizar cifras' y 'Generar cuadros estadísticos' corresponde a las funciones técnicas de consolidación de información."
    },
    {
      id: "vd_82",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al recibir una caja de archivo histórico sin rotular:",
      opcionTexto: "Guardarla en el rincón más oscuro del depósito sin abrirla para no tener que clasificar su contenido.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! El rol técnico exige clasificar, organizar e inventariar los fondos acumulados según las tablas de retención documental."
    },
    {
      id: "vd_83",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En la atención en ventanilla de quioscos de autogestión de la DIAN:",
      opcionTexto: "Orientar al ciudadano en el uso de los servicios informáticos electrónicos para la generación de su firma electrónica o copia del RUT.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Orientar al ciudadano' en herramientas digitales es un deber del nivel técnico en atención al usuario."
    },
    {
      id: "vd_84",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al observar que una empresa adeuda millones de pesos en impuestos:",
      opcionTexto: "Redactar y firmar el mandamiento de pago coactivo ordenando el embargo inmediato de los bienes de la empresa.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Proferir mandamientos de pago y ordenar embargos es facultad privativa del Funcionario Ejecutor de Cobranzas (Nivel Profesional/Directivo)."
    },
    {
      id: "vd_85",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al realizar el cotejo documental previo de una solicitud de devolución de saldo a favor:",
      opcionTexto: "Comprobar la existencia del poder conferido, verificar la presentación de la cédula del solicitante y elaborar la lista de chequeo de requisitos formales.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Elaborar lista de chequeo' y 'Comprobar requisitos formales' es la función técnica de tamizaje documental."
    },
    {
      id: "vd_86",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al encontrar un error tipográfico en el número de identificación de un contribuyente en una base de datos:",
      opcionTexto: "Dejar el error sin corregir ni reportar aduciendo que la base de datos ya está muy desactualizada.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! El analista técnico debe reportar y depurar las inconsistencias en los registros para mantener la calidad de los datos institucionales."
    },
    {
      id: "vd_87",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el apoyo técnico a la división de cobranzas:",
      opcionTexto: "Alimentar la matriz de seguimiento con los acuerdos de pago vigentes y registrar los abonos reportados en los extractos de recaudo bancario.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Alimentar matriz' y 'Registrar abonos' mantiene actualizada la cartera de la administración tributaria."
    },
    {
      id: "vd_88",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al atender una llamada de un contribuyente que formula una queja contra un funcionario:",
      opcionTexto: "Colgar la llamada inmediatamente y bloquear el número telefónico para evitar inconvenientes.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD / FALTA AL SERVICIO! El protocolo de atención al ciudadano obliga a registrar la queja en el sistema PQRS y darle trámite formal."
    },
    {
      id: "vd_89",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Durante una jornada de inspección física de equipaje en aeropuerto internacional:",
      opcionTexto: "Operar los equipos de escáner de rayos X según el protocolo técnico y alertar al Gestor aduanero sobre imágenes con densidad sospechosa.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Operar equipos técnicos' y 'Alertar anomalías' es la función específica del nivel técnico en control de frontera."
    },
    {
      id: "vd_90",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al identificar mercancía con presunción de contrabando en la cinta de equipajes:",
      opcionTexto: "Aprobar el acta de decomiso definitivo de la mercancía sin que intervenga el funcionario profesional competente.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! El decomiso definitivo es un acto administrativo sustancial reservado a la autoridad aduanera competente (Nivel Profesional/Directivo)."
    },
    {
      id: "vd_91",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el manejo del archivo de gestión de la división jurídica tributaria:",
      opcionTexto: "Foliar rigurosamente los expedientes en orden cronológico, elaborar la hoja de control de préstamos y conservar los legajos en buen estado físico.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Foliar', 'Elaborar hojas de control' y 'Conservar expedientes' son deberes técnicos archivísticos según el Acuerdo 002 de 2014 del AGN."
    },
    {
      id: "vd_92",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al advertir que la fotocopiadora de la seccional tiene una fuga de tinta:",
      opcionTexto: "Desarmar los circuitos electrónicos internos del equipo sin tener conocimientos de ingeniería electrónica.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN OPERATIVA! El técnico debe reportar la novedad al área de mantenimiento o soporte técnico del proveedor, no intervenir equipos especializados sin certificación."
    },
    {
      id: "vd_93",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el apoyo a la notificación electrónica de resoluciones de sanción:",
      opcionTexto: "Generar las certificaciones de entrega digital en la plataforma de correo electrónico certificado y anexarlas al expediente digital correspondiente.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Generar certificaciones digitales' y 'Anexar al expediente' asegura la constancia procesal del acto notificado (Art. 566-1 E.T.)."
    },
    {
      id: "vd_94",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al constatar que un contribuyente no firmó el formulario de declaración tributaria presentado en bancos:",
      opcionTexto: "Falsificar la firma del contribuyente para que el formulario no sea devuelto por el sistema de captura de datos.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR DELITO DE FALSEDAD! Falsificar firmas en documentos públicos es un delito grave; la ley prevé la causal de declaración que se tiene por no presentada (Art. 580 E.T.)."
    },
    {
      id: "vd_95",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En la recepción de declaraciones de importación simplificada:",
      opcionTexto: "Verificar que la factura comercial contenga la descripción de la mercancía y cotejar los aranceles liquidados contra la tabla arancelaria oficial.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Verificar' y 'Cotejar' representan el control documental preventivo asignado al personal técnico."
    },
    {
      id: "vd_96",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al observar que un paquete de correspondencia judicial lleva 20 días en su escritorio sin radicar:",
      opcionTexto: "Ocultar la correspondencia bajo una pila de revistas para que la jefatura no se percate de la demora.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR OMISIÓN Y OCULTAMIENTO! Ocultar correspondencia oficial vulnera el régimen disciplinario y lesiona gravemente los términos procesales."
    },
    {
      id: "vd_97",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el apoyo logístico al Comité Seccional de Gestión y Desempeño:",
      opcionTexto: "Enviar oportunamente las citaciones a los miembros, organizar el salón de reuniones y preparar la lista de asistencia y carpetas informativas.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Enviar citaciones', 'Organizar' y 'Preparar carpetas' son las responsabilidades logísticas y operativas del Analista IV."
    },
    {
      id: "vd_98",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al presentarse una discrepancia doctrinal entre dos resoluciones de la DIAN:",
      opcionTexto: "Dictar un auto resolviendo cuál doctrina prevalece y prohibir a los auditores aplicar la otra resolución.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! La unificación y fijación de doctrina vinculante es atribución exclusiva de la Dirección de Gestión Jurídica (Decreto 1742 de 2020)."
    },
    {
      id: "vd_99",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al realizar el back-up o respaldo de los archivos de expedientes digitalizados:",
      opcionTexto: "Verificar la integridad de las copias de seguridad en el repositorio institucional y reportar al supervisor el registro de transferencias completadas.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Verificar integridad' y 'Reportar transferencias' asegura la continuidad operativa y la preservación digital de la memoria institucional."
    },
    {
      id: "vd_100",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al recibir un lote de mercancías aprehendidas en zona primaria sin inventario adjunto:",
      opcionTexto: "Realizar el conteo físico detallado, verificar estado y empaques, y elaborar el acta técnica de recepción para firma conjunta con el aprehensor.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡ACCIÓN CORRECTA! 'Realizar conteo físico', 'Verificar estado' y 'Elaborar acta técnica' garantizan la trazabilidad y la responsabilidad administrativa sobre bienes aprehendidos."
    }
  ];

  if (typeof global !== "undefined") {
    global.CAZA_DISTRACTORES_100 = CAZA_DISTRACTORES_100;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = CAZA_DISTRACTORES_100;
  }
})(typeof window !== "undefined" ? window : global);
