// caza_distractores_100.js - Banco Especializado de Speed Drill "Caza-Distractores" (DAFP / CNSC / DIAN)
// 100 casos exclusivos por cargo (Total 300 casos):
// - 100 casos para Profesional (Gestor III - Control Interno, OPEC 236872)
// - 100 casos para Profesional (Gestor III - Fiscalización y Tributario, OPEC 242703)
// - 100 casos para Técnico (Analista IV, OPEC 236760)

(function(global) {
  const CAZA_DISTRACTORES_BY_PROFILE = {
    gestor_iii_ci: [
  {
    "id": "caza_ci_001",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una auditoría interna de cumplimiento al proceso de devoluciones automáticas de saldos a favor:",
    "opcionTexto": "Evaluar la efectividad de los controles automáticos del sistema Muisca y proyectar el informe de auditoría con los hallazgos y riesgos detectados.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Evaluar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Evaluar' y 'Proyectar informes' son los verbos rectores nucleares del auditor interno profesional según el MECI y el propósito del cargo PC-CI-3006."
  },
  {
    "id": "caza_ci_002",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al constatar que un área operativa incumple sistemáticamente los plazos de respuesta a derechos de petición:",
    "opcionTexto": "Asumir directamente la radicación y respuesta de las peticiones acumuladas para descongestionar el buzón de la seccional.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Asumir directamente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / CO-ADMINISTRACIÓN! El auditor interno tiene prohibido co-administrar o ejecutar las operaciones auditadas (Ley 87 de 1993, Art. 3). Su deber es recomendar y auditar, no sustituir al área."
  },
  {
    "id": "caza_ci_003",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al verificar el mapa de riesgos de corrupción del proceso aduanero en zona primaria:",
    "opcionTexto": "Archivar las observaciones sin comunicar al jefe de la oficina porque la seccional ya está en periodo de vacaciones colectivas.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar las",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD U OMISIÓN! El servidor de control interno tiene la obligación legal de alertar oportunamente sobre debilidades en los controles de riesgo de corrupción."
  },
  {
    "id": "caza_ci_004",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el seguimiento trimestral al Plan de Mejoramiento Institucional suscrito ante la Contraloría General:",
    "opcionTexto": "Monitorear el avance porcentual de las acciones correctivas implementadas y valorar las evidencias documentales aportadas por los líderes de proceso.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Monitorear el",
    "explicacion": "¡ACCIÓN CORRECTA! 'Monitorear' y 'Valorar evidencias' representan la labor sustantiva del Gestor III en el seguimiento a planes de mejoramiento."
  },
  {
    "id": "caza_ci_005",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al identificar irregularidades presuntamente delictivas en la custodia de mercancías aprehendidas:",
    "opcionTexto": "Ordenar la captura preventiva del bodeguero y suspenderlo de su cargo mediante auto resolutivo.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar la",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Ordenar capturas es privativo de autoridades judiciales y suspender servidores corresponde a Control Interno Disciplinario o Fiscalía, no a la Oficina de Control Interno."
  },
  {
    "id": "caza_ci_006",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Frente al diseño del Plan Anual de Auditoría Basado en Riesgos para la vigencia:",
    "opcionTexto": "Formular la propuesta metodológica de priorización de procesos críticos considerando el universo auditable y los recursos disponibles.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Formular la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Formular propuestas metodológicas' es una función típica del nivel profesional en planeación de auditorías."
  },
  {
    "id": "caza_ci_007",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al revisar el diseño de controles preventivos en el nuevo software de factura electrónica:",
    "opcionTexto": "Recomendar ajustes a la matriz de riesgos institucionales para asegurar la trazabilidad de los eventos y la mitigación de fraudes.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Recomendar ajustes",
    "explicacion": "¡ACCIÓN CORRECTA! 'Recomendar' en el marco del rol asesor de control interno (Tercera Línea) aporta valor sin incurrir en co-administración."
  },
  {
    "id": "caza_ci_008",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al auditar la contratación de servicios de vigilancia de sedes de la DIAN:",
    "opcionTexto": "Modificar unilateralmente las cláusulas contractuales y declarar la caducidad del contrato con el proveedor.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Modificar unilateralmente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Declarar la caducidad o modificar contratos es potestad exclusiva del ordenador del gasto de la entidad (Nivel Directivo), no del auditor."
  },
  {
    "id": "caza_ci_009",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al recibir indicios de fuga de información reservada en cruces tributarios:",
    "opcionTexto": "Esperar a que finalice el año para incluir el tema en el informe anual sin realizar indagaciones preliminares.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Esperar a",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Postergar una alerta grave de fuga de reserva tributaria contraviene el deber de debida diligencia profesional y el principio de oportunidad."
  },
  {
    "id": "caza_ci_010",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la fase de ejecución de una auditoría financiera a los fondos rotatorios seccionales:",
    "opcionTexto": "Aplicar pruebas sustantivas de muestreo sobre los comprobantes de egreso y conciliar los saldos contra extractos bancarios oficiales.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Aplicar pruebas",
    "explicacion": "¡ACCIÓN CORRECTA! 'Aplicar pruebas sustantivas' y 'Conciliar' son tareas técnicas y metodológicas propias de la labor auditora profesional."
  },
  {
    "id": "caza_ci_011",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al socializar el informe final de auditoría interna con el líder del proceso auditado:",
    "opcionTexto": "Imponer multas salariales al director seccional por no haber alcanzado la meta de recaudo trimestral.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Imponer multas",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El auditor interno no tiene facultad punitiva ni disciplinaria para imponer multas o sanciones salariales."
  },
  {
    "id": "caza_ci_012",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al estructurar los papeles de trabajo de una auditoría especial a los inventarios de vehículos decomisados:",
    "opcionTexto": "Consignar los hallazgos con base en percepciones verbales de terceros sin requerir actas de ingreso ni soportes documentales.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Consignar los",
    "explicacion": "¡DISTRACTOR POR DEFICIENCIA / PASIVIDAD! Las normas internacionales de auditoría interna exigen que la evidencia sea suficiente, fiable, relevante y útil (Norma Global IIA)."
  },
  {
    "id": "caza_ci_013",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el marco de la autoevaluación del Sistema de Control Interno (MECI / MIPG Dimensión 7):",
    "opcionTexto": "Analizar el estado de madurez de los componentes de ambiente de control, gestión de riesgos y actividades de monitoreo institucional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Analizar el",
    "explicacion": "¡ACCIÓN CORRECTA! 'Analizar el estado de madurez' es la función primordial para alimentar el Formulario Único de Reporte de Avance a la Gestión (FURAG)."
  },
  {
    "id": "caza_ci_014",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al advertir que un contratista de software no entregó los códigos fuente en la fecha acordada:",
    "opcionTexto": "Aprobar una adición presupuestal al contrato sin consultar al supervisor ni al comité de adquisiciones.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Aprobar una",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El auditor no administra presupuestos ni aprueba adiciones contractuales."
  },
  {
    "id": "caza_ci_015",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Ante un requerimiento urgente de información formulado por el Consejo de Estado sobre un proceso de auditoría cerrado:",
    "opcionTexto": "Consolidar los antecedentes del expediente auditado y proyectar la respuesta formal para firma del Jefe de Oficina.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Consolidar los",
    "explicacion": "¡ACCIÓN CORRECTA! 'Consolidar antecedentes' y 'Proyectar respuesta' reflejan la autonomía y apoyo técnico de alto nivel del profesional."
  },
  {
    "id": "caza_ci_016",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar inconsistencias en la custodia de títulos de depósito judicial de cobranzas:",
    "opcionTexto": "Abstenerse de registrar el hallazgo porque el funcionario responsable se comprometió a cuadrar las cuentas en privado.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Abstenerse de",
    "explicacion": "¡DISTRACTOR POR OMISIÓN GRAVE! Ocultar o pactar la no inclusión de hallazgos vulnera el Código General Disciplinario y el principio de objetividad e independencia del auditor."
  },
  {
    "id": "caza_ci_017",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el rol de fomento a la cultura del autocontrol institucional:",
    "opcionTexto": "Diseñar talleres pedagógicos y guías prácticas sobre la aplicación de las tres líneas de defensa dirigidos a los servidores de la seccional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Diseñar talleres",
    "explicacion": "¡ACCIÓN CORRECTA! 'Diseñar talleres y guías' cumple directamente con el rol misional de fomento de la cultura del autocontrol de la Ley 87 de 1993."
  },
  {
    "id": "caza_ci_018",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al observar demoras en el pago de nómina de los empleados de la entidad:",
    "opcionTexto": "Ordenar a la Tesorería General la dispersión inmediata de fondos mediante memorando con carácter vinculante.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar a",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Los informes y recomendaciones de control interno no son vinculantes operativamente ni tienen fuerza de ordenamiento de pagos."
  },
  {
    "id": "caza_ci_019",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al verificar el cumplimiento de la política de seguridad digital y protección de datos:",
    "opcionTexto": "Verificar la existencia de copias de seguridad periódicas y comprobar el protocolo de recuperación ante desastres en los servidores centrales.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar' y 'Comprobar' son acciones legítimas del auditor para constatar la efectividad de las defensas informáticas."
  },
  {
    "id": "caza_ci_020",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una auditoría de gestión al área de cobranzas coactivas:",
    "opcionTexto": "Decretar de oficio el levantamiento de medidas cautelares sobre las cuentas bancarias de los deudores morosos.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Decretar de",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Decretar o levantar embargos es facultad exclusiva del funcionario ejecutor de Cobranzas, jamás de Control Interno."
  },
  {
    "id": "caza_ci_021",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al evaluar la efectividad de los indicadores de gestión del área de aduanas:",
    "opcionTexto": "Determinar si las fórmulas de medición reflejan fielmente el impacto real del control en zona primaria y recomendar mejoras técnicas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Determinar si",
    "explicacion": "¡ACCIÓN CORRECTA! 'Determinar efectividad' y 'Recomendar mejoras' son competencias analíticas superiores del auditor profesional."
  },
  {
    "id": "caza_ci_022",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al encontrar expedientes de fiscalización engavetados a punto de prescribir:",
    "opcionTexto": "Redactar una nota informal y guardarla en su gaveta sin elevar informe extraordinario a la jefatura.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Redactar una",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El riesgo inminente de prescripción tributaria exige elevar inmediatamente un informe o memorando de alerta preventiva."
  },
  {
    "id": "caza_ci_023",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al evaluar el cumplimiento de la Ley de Transparencia y Acceso a la Información (Ley 1712 de 2014):",
    "opcionTexto": "Verificar que la información pública clasificada y reservada cuente con el respectivo índice formal y soporte legal aprobado.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar que",
    "explicacion": "¡ACCIÓN CORRECTA! Es función del auditor velar porque la transparencia activa y pasiva cumpla estrictamente con la legislación vigente."
  },
  {
    "id": "caza_ci_024",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al revisar el trámite de bajas de activos fijos inservibles en una bodega seccional:",
    "opcionTexto": "Adjudicar los bienes dados de baja a una fundación comunitaria mediante resolución suscrita por su cuenta.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Adjudicar los",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Disponer de bienes públicos es competencia exclusiva del Comité de Bienes y de la Dirección Administrativa y Financiera."
  },
  {
    "id": "caza_ci_025",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Ante denuncias anónimas sobre presunto direccionamiento de contratos en la seccional:",
    "opcionTexto": "Estructurar un plan de auditoría forense preventiva para verificar los criterios de habilitación y ponderación aplicados en las licitaciones.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Estructurar un",
    "explicacion": "¡ACCIÓN CORRECTA! 'Estructurar planes de auditoría' para profundizar en riesgos de corrupción es deber primordial del Gestor III de Control Interno."
  },
  {
    "id": "caza_ci_026",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar discrepancias en el cálculo de horas extras de los funcionarios aduaneros:",
    "opcionTexto": "Aprobar el pago de las sumas cobradas sin cotejar las planillas de turno ni los biométricos de acceso.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Aprobar el",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / NEGLIGENCIA! El auditor no valida pagos a ciegas; su rol es verificar soportes y evidenciar posibles pagos indebidos."
  },
  {
    "id": "caza_ci_027",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la rendición de la Cuenta Anual Fiscal ante la Contraloría General de la República:",
    "opcionTexto": "Consolidar la información de los diferentes módulos financieros y verificar la consistencia de los datos reportados en el aplicativo SIRECI.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Consolidar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Consolidar' y 'Verificar consistencia' aseguran el cumplimiento oportuno y veraz de los requerimientos de los órganos de control externo."
  },
  {
    "id": "caza_ci_028",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una reunión del Comité Institucional de Coordinación de Control Interno:",
    "opcionTexto": "Presentar el informe de evaluación semestral del SCI destacando las alertas tempranas y el avance del plan de mejoramiento institucional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Presentar el",
    "explicacion": "¡ACCIÓN CORRECTA! Presentar evaluaciones independientes ante la alta dirección es la esencia de la Tercera Línea de Defensa en MIPG."
  },
  {
    "id": "caza_ci_029",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al observar que un área evaluada rechaza las recomendaciones formuladas:",
    "opcionTexto": "Declarar insubsistente al jefe de área por insubordinación técnica frente a las observaciones de auditoría.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Declarar insubsistente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN ABSOLUTA! La facultad nominadora de insubsistencia es del Director General de la entidad, no del auditor."
  },
  {
    "id": "caza_ci_030",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al auditar la atención en los Puntos de Contacto DIAN a nivel nacional:",
    "opcionTexto": "Evaluar los tiempos de espera del contribuyente mediante técnicas estadísticas y comparar los resultados contra el acuerdo de servicio institucional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Evaluar los",
    "explicacion": "¡ACCIÓN CORRECTA! 'Evaluar tiempos' y 'Comparar contra acuerdos de servicio' evalúa la dimensión de servicio al ciudadano dentro del MIPG."
  },
  {
    "id": "caza_ci_031",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar la caducidad de licencias de software antivirus en equipos misionales:",
    "opcionTexto": "Archivar el memorando para evitar conflictos con el área de tecnologías de la información.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar el",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El servidor público debe actuar con integridad y objetividad, sin omitir hallazgos por temor o complacencia."
  },
  {
    "id": "caza_ci_032",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el seguimiento a los planes de contingencia por fallas en el servicio informático de la DIAN:",
    "opcionTexto": "Verificar la efectividad de los protocolos de operación en contingencia y comprobar que no se generen sanciones injustas a declarantes.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar la",
    "explicacion": "¡ACCIÓN CORRECTA! La verificación de protocolos de contingencia salvaguarda el debido proceso y la seguridad jurídica del contribuyente."
  },
  {
    "id": "caza_ci_033",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al auditar la administración del archivo y tablas de retención documental:",
    "opcionTexto": "Ordenar la quema inmediata de documentos antiguos para liberar espacio físico en el sótano de la seccional.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar la",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / ILEGALIDAD! La disposición final y eliminación de documentos públicos exige concepto previo del Archivo General de la Nación y actas del Comité Institucional de Gestión y Desempeño."
  },
  {
    "id": "caza_ci_034",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al emitir la carta de representación previa al informe final de auditoría:",
    "opcionTexto": "Solicitar formalmente a los líderes de proceso auditados la confirmación de la integridad y veracidad de la información aportada.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Solicitar formalmente",
    "explicacion": "¡ACCIÓN CORRECTA! La carta de representación es un estándar internacional obligatorio de aseguramiento en auditoría interna."
  },
  {
    "id": "caza_ci_035",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al verificar el cumplimiento de los controles internos en la gestión de compras y contratación directa de la Seccional:",
    "opcionTexto": "Auditar la justificación técnica de los estudios previos y constatar la existencia del certificado de disponibilidad presupuestal antes de la suscripción del contrato.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Auditar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Auditar' estudios previos y disponibilidad presupuestal forma parte del aseguramiento y control de legalidad del gasto público (Ley 87 de 1993)."
  },
  {
    "id": "caza_ci_036",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una revisión de campo en el depósito aduanero concesionado donde se custodian mercancías bajo aprehensión:",
    "opcionTexto": "Ordenar la entrega inmediata de las mercancías a una entidad sin ánimo de lucro por considerar que los bienes están sufriendo deterioro.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La disposición o donación de mercancías aprehendidas o decomisadas corresponde a la División de Comercialización y al Director Seccional, no al auditor interno."
  },
  {
    "id": "caza_ci_037",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar inconsistencias graves en el aplicativo de conciliación bancaria del recaudo tributario que no han sido reportadas:",
    "opcionTexto": "Omitir la observación en el informe preliminar para no entorpecer el proceso de evaluación de desempeño de la tesorera seccional.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Omitir",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD U OMISIÓN! La omisión voluntaria de hallazgos que comprometen la exactitud del recaudo viola el principio de objetividad e integridad del auditor interno (Ley 1952 de 2019)."
  },
  {
    "id": "caza_ci_038",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación anual del Sistema de Control Interno Contable conforme a la Resolución 193 de 2016 de la CGN:",
    "opcionTexto": "Verificar la razonabilidad de los saldos de cartera dudosa y contrastar las políticas contables aplicadas con los lineamientos del Contador General de la Nación.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar' y 'Contrastar' políticas contables sustenta el informe obligatorio de evaluación del Control Interno Contable."
  },
  {
    "id": "caza_ci_039",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al evidenciar que un funcionario de fiscalización tiene una investigación penal abierta por presunto cohecho:",
    "opcionTexto": "Dictar auto de suspensión provisional del funcionario investigado para proteger la imagen de la Entidad.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Dictar auto",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La suspensión disciplinaria provisional es competencia exclusiva del operador disciplinario o del nominador, no del auditor de control interno."
  },
  {
    "id": "caza_ci_040",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al constatar que la Dirección Seccional no ha actualizado el Plan Anticorrupción y de Atención al Ciudadano en el plazo legal:",
    "opcionTexto": "Guardar silencio porque la responsabilidad de formulación recae exclusivamente sobre la Oficina de Planeación.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar silencio",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El rol de Control Interno incluye el seguimiento preventivo y la emisión de alertas tempranas sobre el incumplimiento de herramientas anticorrupción (Ley 1474 de 2011)."
  },
  {
    "id": "caza_ci_041",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la auditoría de ciberseguridad y acceso a las bases de datos misionales del sistema Muisca:",
    "opcionTexto": "Examinar las bitácoras de auditoría de perfiles privilegiados y contrastar si existen usuarios activos pertenecientes a exfuncionarios desvinculados.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Examinar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Examinar bitácoras' y 'Contrastar usuarios' asegura el control de riesgos de fuga de información y protección de la reserva tributaria (ISO 27001)."
  },
  {
    "id": "caza_ci_042",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante la formulación del Plan Anual de Auditoría de la Oficina de Control Interno:",
    "opcionTexto": "Priorizar los procesos con mayor nivel de riesgo residual y mayor impacto en los objetivos estratégicos institucionales de recaudo y control.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Priorizar",
    "explicacion": "¡ACCIÓN CORRECTA! La planificación basada en riesgos es el pilar de las Normas Internacionales para el Ejercicio Profesional de la Auditoría Interna (Marco IPPF)."
  },
  {
    "id": "caza_ci_043",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar que una dependencia operativa comete errores reiterados en la liquidación de viáticos:",
    "opcionTexto": "Asumir la liquidación de las solicitudes de viáticos del personal para garantizar que salgan sin errores matemáticos.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Asumir",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / CO-ADMINISTRACIÓN! Control Interno no puede convertirse en tramitador operativo; su labor es evaluar la causa raíz y formular recomendaciones de mejora."
  },
  {
    "id": "caza_ci_044",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al recibir una queja ciudadana anónima sobre un posible cobro irregular de dádivas por parte de un auditor aduanero:",
    "opcionTexto": "Desechar la comunicación inmediatamente sin verificar indicios porque los anónimos carecen de valor procesal según criterio personal.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Desechar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Las denuncias anónimas que aporten pruebas o datos concretos deben ser analizadas y remitidas a Control Disciplinario Interno o Fiscalía (Ley 1952 de 2019, Art. 81)."
  },
  {
    "id": "caza_ci_045",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el seguimiento a los hallazgos con alcance fiscal formulados por la Contraloría General de la República:",
    "opcionTexto": "Comprobar la efectividad de las acciones correctivas aplicadas por los líderes de proceso y verificar que los soportes subsanen la causa raíz del hallazgo.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Comprobar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Comprobar efectividad' y 'Verificar soportes' es la responsabilidad directa del auditor interno en el seguimiento a los planes de mejoramiento."
  },
  {
    "id": "caza_ci_046",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al observar que el Comité Institucional de Coordinación de Control Interno no se reúne periódicamente:",
    "opcionTexto": "Declarar la nulidad de todas las decisiones administrativas adoptadas en la Seccional durante el semestre.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Declarar la nulidad",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La declaratoria de nulidad de actos administrativos es facultad de los jueces contenciosos o de la autoridad en vía gubernativa, nunca de Control Interno."
  },
  {
    "id": "caza_ci_047",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al constatar que en el almacén de decomisos de la DIAN hay bienes de alto valor perecederos sin inventario actualizado:",
    "opcionTexto": "Ignorar la situación hasta que el jefe del almacén solicite formalmente la visita de auditoría.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Ignorar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La existencia de riesgos inminentes de pérdida o deterioro patrimonial exige una actuación preventiva y reporte inmediato de alertas."
  },
  {
    "id": "caza_ci_048",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación de la segunda línea de defensa conforme al modelo de las Tres Líneas del IIA:",
    "opcionTexto": "Analizar si la Oficina de Gestión del Riesgo provee lineamientos técnicos sólidos y metodologías efectivas a los líderes de proceso operativo.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Analizar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Analizar' el rol de aseguramiento de la 2ª línea permite a la 3ª línea (Control Interno) evaluar de forma independiente la arquitectura de control institucional."
  },
  {
    "id": "caza_ci_049",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al revisar el informe de ejecución presupuestal de la vigencia:",
    "opcionTexto": "Autorizar el traslado de recursos del rubro de inversión hacia gastos generales para cubrir compras urgentes de papelería.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Autorizar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La ordenación del gasto y las modificaciones presupuestales son atribución de los ordenadores de gasto autorizados por delegación, no de auditoría."
  },
  {
    "id": "caza_ci_050",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al percatarse de que el buzón de PQRSD registra peticiones vencidas hace más de 45 días sin prórroga informada:",
    "opcionTexto": "Esperar a la auditoría semestral ordinaria para dejar constancia escrita sin alertar previamente a la jefatura.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Esperar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Ante vencimientos que vulneran derechos fundamentales y generan riesgo de sanción disciplinaria, debe emitirse alerta temprana preventiva."
  },
  {
    "id": "caza_ci_051",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al proyectar los papeles de trabajo de una auditoría de aseguramiento al trámite de devoluciones tributarias:",
    "opcionTexto": "Documentar de forma clara, suficiente y competente las evidencias físicas, analíticas y testimoniales que respaldan cada conclusión del informe.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Documentar",
    "explicacion": "¡ACCIÓN CORRECTA! La documentación rigurosa en papeles de trabajo es el estándar de calidad y suficiencia de la prueba según las Normas NIA e IIA."
  },
  {
    "id": "caza_ci_052",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al enterarse de que el cónyuge del auditor es representante legal de una empresa que será objeto de auditoría de control interno:",
    "opcionTexto": "Manifestar por escrito el impedimento legal de inmediato ante el Jefe de Control Interno y abstenerse de intervenir en la auditoría.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Manifestar",
    "explicacion": "¡ACCIÓN CORRECTA! Declarar oportunamente los impedimentos garantiza la imparcialidad y previene nulidades disciplinarias (Ley 1952 de 2019, Art. 40)."
  },
  {
    "id": "caza_ci_053",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al comprobar que una seccional tiene dificultades para aplicar el nuevo procedimiento de cobro coactivo:",
    "opcionTexto": "Asumir la proyección y firma de los mandamientos de pago de la seccional para acelerar el recaudo de cartera vencida.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Asumir la proyección y firma",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La proyección y suscripción de mandamientos de pago es función exclusiva de los ejecutores de cobro, no del auditor de control interno."
  },
  {
    "id": "caza_ci_054",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una revisión de los contratos de prestación de servicios profesionales:",
    "opcionTexto": "Omitir la revisión de las planillas de aportes al sistema de seguridad social por considerarlo un trámite meramente administrativo.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Omitir",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La verificación del pago de aportes parafiscales y seguridad social es un deber de control previo al desembolso consagrado en la Ley 100 de 1993 y Ley 80 de 1993."
  },
  {
    "id": "caza_ci_055",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el marco de la implementación de la política de Gestión del Conocimiento e Innovación del MIPG:",
    "opcionTexto": "Evaluar la efectividad de los mecanismos de transferencia de buenas prácticas y lecciones aprendidas entre las áreas de fiscalización y aduanas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Evaluar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Evaluar' los mecanismos de gestión del conocimiento fortalece el aprendizaje organizacional dentro de las dimensiones del MIPG."
  },
  {
    "id": "caza_ci_056",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al finalizar una auditoría de gestión al área de servicio al ciudadano:",
    "opcionTexto": "Imponer multas económicas a los orientadores de ventanilla que llegaron tarde durante la semana de la auditoría.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Imponer multas",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La potestad sancionatoria laboral o disciplinaria recae en el área de talento humano y control disciplinario, jamás en el auditor interno."
  },
  {
    "id": "caza_ci_057",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al notar que el mapa de riesgos de la entidad no contempla los riesgos derivados de fallas en los servidores del Muisca durante vencimientos:",
    "opcionTexto": "Guardar silencio porque no es el rol de control interno cuestionar la matriz aprobada por el Comité Institucional de Gestión y Desempeño.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar silencio",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Control Interno debe evaluar de manera crítica la suficiencia y cobertura de los mapas de riesgos institucionales y formular recomendaciones técnicas."
  },
  {
    "id": "caza_ci_058",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al efectuar una auditoría de seguimiento al cumplimiento de la Ley de Transparencia y Acceso a la Información (Ley 1712 de 2014):",
    "opcionTexto": "Comprobar que la información pública clasificada y reservada cuente con el respectivo índice formal y la debida fundamentación legal en el portal web institucional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Comprobar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Comprobar' el cumplimiento del índice de información reservada y clasificada es un mandato legal y deber de control interno bajo la Ley 1712."
  },
  {
    "id": "caza_ci_059",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar discrepancias en el inventario físico de equipos de cómputo asignados a la seccional:",
    "opcionTexto": "Contratar directamente a una empresa privada de seguridad para investigar el paradero de los computadores faltantes.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Contratar directamente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La celebración de contratos es privativa del ordenador del gasto de la Entidad y no de los profesionales de auditoría."
  },
  {
    "id": "caza_ci_060",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al revisar el informe de quejas reiteradas sobre maltrato verbal a contribuyentes en una sede seccional:",
    "opcionTexto": "Desestimar las quejas sin análisis porque las quejas ciudadanas siempre son subjetivas y carecen de rigor técnico.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Desestimar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El análisis de la satisfacción ciudadana y el respeto al usuario es componente indispensable de la evaluación del servicio público."
  },
  {
    "id": "caza_ci_061",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación del cumplimiento de las metas del FURAG en el componente de Control Interno del MIPG:",
    "opcionTexto": "Revisar las evidencias cargadas por las dependencias, valorar su congruencia técnica y proyectar los comentarios de retroalimentación institucional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Revisar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Revisar evidencias' y 'Valorar congruencia' asegura la veracidad y consistencia de los reportes remitidos al DAFP a través del FURAG."
  },
  {
    "id": "caza_ci_062",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una revisión de procesos aduaneros en puerto marítimo:",
    "opcionTexto": "Fijar unilateralmente una nueva tarifa arancelaria para las mercancías de procedencia asiática que ingresan al país.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Fijar unilateralmente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La fijación de tarifas arancelarias es potestad exclusiva del Gobierno Nacional (Ministerio de Comercio y Presidencia de la República)."
  },
  {
    "id": "caza_ci_063",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al identificar indicios fundados de falsedad ideológica en documentos públicos aportados en una licitación:",
    "opcionTexto": "Archivar el hallazgo para evitar escándalos mediáticos que perjudiquen la reputación de la Seccional.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD U OMISIÓN! El servidor público está legalmente obligado a denunciar inmediatamente ante la Fiscalía General de la Nación los presuntos delitos cometidos en la administración pública (Art. 67 CPP)."
  },
  {
    "id": "caza_ci_064",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al elaborar el informe semestral de seguimiento a la política de austeridad del gasto público (Decreto 1068 de 2015):",
    "opcionTexto": "Consolidar el comportamiento de los gastos en viáticos, telefonía, papelería y publicidad oficial, y comparar contra los límites porcentuales fijados por el Gobierno.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Consolidar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Consolidar' y 'Comparar' gastos institucionales sustenta el informe de austeridad del gasto requerido por la normativa nacional."
  },
  {
    "id": "caza_ci_065",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al auditar el proceso de fiscalización a grandes contribuyentes:",
    "opcionTexto": "Revocar de plano la resolución sanción emitida por la División de Fiscalización al considerar que la interpretación jurídica fue errónea.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Revocar de plano",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La revocatoria directa de actos administrativos tributarios corresponde al superior jerárquico o al funcionario que lo expidió (Art. 736 ET), nunca a Control Interno."
  },
  {
    "id": "caza_ci_066",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al recibir las alertas del sistema sobre múltiples intentos fallidos de autenticación en las cuentas de los directivos:",
    "opcionTexto": "Hacer caso omiso por asumir que los funcionarios simplemente olvidaron sus contraseñas corporativas.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Hacer caso omiso",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Los intentos fallidos reiterados constituyen posibles incidentes de seguridad que exigen verificación y notificación inmediata al Oficial de Seguridad de la Información."
  },
  {
    "id": "caza_ci_067",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el marco de la auditoría interna a la gestión ambiental institucional (ISO 14001 / MIPG):",
    "opcionTexto": "Verificar la implementación del plan de gestión de residuos peligrosos (RAEE) generados por el reemplazo de baterías y componentes electrónicos en las sedes.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar' el cumplimiento ambiental institucional asegura la alineación con las políticas de sostenibilidad del sector público."
  },
  {
    "id": "caza_ci_068",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al advertir demoras en la notificación por correo físico de los requerimientos especiales en la seccional:",
    "opcionTexto": "Asumir personalmente la entrega física de los sobres a las empresas de mensajería para no perder los términos de firmeza.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Asumir personalmente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La gestión logística de correspondencia es labor operativa y de apoyo, ajena al rol evaluador del auditor profesional."
  },
  {
    "id": "caza_ci_069",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al verificar las conciliaciones entre el inventario de bienes muebles y los registros contables de activos fijos:",
    "opcionTexto": "Omitir la conciliación de diferencias menores por considerar que el valor económico no es significativo para el Estado.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Omitir",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Las diferencias en inventarios públicos deben ser documentadas y analizadas independientemente de la cuantía para asegurar la transparencia contable."
  },
  {
    "id": "caza_ci_070",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al auditar los canales de atención y peticiones en lenguas nativas y dialectos de grupos étnicos:",
    "opcionTexto": "Constatar la disponibilidad de intérpretes y formatos accesibles conforme a la Ley de Lenguas Nativas (Ley 1381 de 2010) y política de inclusión DIAN.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Constatar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Constatar' la accesibilidad inclusiva del servicio al ciudadano respalda la evaluación de derechos y enfoque diferencial en el servicio público."
  },
  {
    "id": "caza_ci_071",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al revisar el cumplimiento de las metas del plan de acción institucional:",
    "opcionTexto": "Modificar arbitrariamente las metas trazadas para que todos los procesos alcancen un 100% de cumplimiento en el informe final.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Modificar arbitrariamente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALSEDAD! Alterar los datos para maquillar indicadores vulnera el principio de objetividad y constituye falta disciplinaria gravísima."
  },
  {
    "id": "caza_ci_072",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al percatarse de que el área jurídica no ha contestado las demandas de nulidad y restablecimiento del derecho ante el Tribunal Administrativo:",
    "opcionTexto": "Abstenerse de informar la situación porque el litigio judicial no forma parte de los procesos auditados en el plan anual.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Abstenerse de informar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El riesgo inminente de condenas patrimoniales contra la Entidad por falta de contestación judicial exige una alerta inmediata a la Dirección Seccional."
  },
  {
    "id": "caza_ci_073",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el marco de la auditoría de cumplimiento al procedimiento de cobro coactivo:",
    "opcionTexto": "Verificar que las medidas cautelares de embargo bancario hayan sido ordenadas dentro de los límites y formalidades del artículo 837 del Estatuto Tributario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar' el estricto cumplimiento legal en la imposición de embargos previene demandas de indemnización y nulidades procesales."
  },
  {
    "id": "caza_ci_074",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una inspección a la ventanilla de radicación presencial:",
    "opcionTexto": "Incautar los celulares personales de los usuarios de la fila de atención que estén tomando fotos a los avisos informativos.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Incautar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El personal administrativo y de auditoría carece de potestades de policía para incautar bienes personales de ciudadanos."
  },
  {
    "id": "caza_ci_075",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al constatar que los contratos de prestación de servicios no cuentan con informes mensuales de supervisión aprobados:",
    "opcionTexto": "Dejar pasar la omisión por entender que los contratistas son de absoluta confianza del Director Seccional.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Dejar pasar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La existencia de informes de supervisión es requisito indispensable para autorizar pagos y acreditar el cumplimiento contractual (Ley 80 de 1993)."
  },
  {
    "id": "caza_ci_076",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación del cumplimiento de las normas de archivo y gestión documental (Ley 594 de 2000):",
    "opcionTexto": "Evaluar el grado de implementación de las Tablas de Retención Documental (TRD) y las condiciones de conservación física de los expedientes tributarios en custodia.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Evaluar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Evaluar' la aplicación de las TRD garantiza la seguridad jurídica y la preservación de la memoria institucional de la DIAN."
  },
  {
    "id": "caza_ci_077",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al enterarse de presuntas irregularidades en el pesaje de camiones de carga en el paso fronterizo:",
    "opcionTexto": "Operar personalmente la báscula de pesaje durante toda la jornada para controlar directamente el pesaje de tractomulas.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Operar personalmente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / CO-ADMINISTRACIÓN! El auditor debe auditar los controles y registros de la báscula, no reemplazar al personal de aduanas que opera los equipos."
  },
  {
    "id": "caza_ci_078",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al finalizar el ejercicio de auditoría sin haber alcanzado a recolectar pruebas suficientes sobre un hallazgo:",
    "opcionTexto": "Incluir el hallazgo en el informe definitivo basándose en rumores escuchados en los pasillos de la entidad.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Incluir el hallazgo",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALTA DE EVIDENCIA! Todo hallazgo de auditoría debe sustentarse en evidencia suficiente, confiable, relevante y útil (Normas NIA/IIA)."
  },
  {
    "id": "caza_ci_079",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al observar que una funcionaria utiliza el correo institucional y los equipos de la DIAN para promocionar su negocio privado:",
    "opcionTexto": "Tolera la conducta por considerar que mientras no afecte su horario laboral no tiene relevancia para la administración pública.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Tolera",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El uso de bienes y canales institucionales para fines lucrativos privados está expresamente prohibido en el Código Disciplinario Único (Ley 1952 de 2019)."
  },
  {
    "id": "caza_ci_080",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación del proceso de gestión del talento humano y plan de incentivos:",
    "opcionTexto": "Verificar la objetividad de los criterios de selección de los mejores servidores de la carrera administrativa y su concordancia con las normas del DAFP y la CNSC.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar' el apego a las normas de carrera administrativa y mérito asegura la equidad y motivación en el servicio público."
  },
  {
    "id": "caza_ci_081",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar discrepancias entre la información exógena reportada por los bancos y las declaraciones presentadas:",
    "opcionTexto": "Expedir y firmar directamente las liquidaciones oficiales de aforo a los contribuyentes que no declararon renta.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Expedir y firmar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La liquidación oficial de aforo es competencia de la División de Liquidación y Fiscalización, nunca de Control Interno."
  },
  {
    "id": "caza_ci_082",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al evidenciar que no se están realizando las copias de seguridad de las bases de datos aduaneras los fines de semana:",
    "opcionTexto": "No reportar la falla porque la empresa contratista de nube privada es internacionalmente reconocida y solvente.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "No reportar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La falta de respaldos periódicos representa un riesgo operativo crítico para la continuidad del servicio aduanero y tributario nacional."
  },
  {
    "id": "caza_ci_083",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante la evaluación del cumplimiento de la Política de Defensa Jurídica del Estado:",
    "opcionTexto": "Analizar el mapa de riesgos judiciales y el uso de la herramienta e-KOGUI para el registro y seguimiento a las demandas instauradas contra la DIAN.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Analizar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Analizar' el uso de herramientas de defensa jurídica permite prevenir el daño antijurídico y optimizar los recursos públicos."
  },
  {
    "id": "caza_ci_084",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al revisar el trámite de bajas de inventarios de vehículos oficiales descontinuados:",
    "opcionTexto": "Adjudicar uno de los vehículos dados de baja para su propio uso personal como compensación por horas extras no pagadas.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Adjudicar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / DELITO CONTRA LA ADMINISTRACIÓN! Apropiarse de bienes públicos constituye el delito de peculado por apropiación y falta disciplinaria gravísima."
  },
  {
    "id": "caza_ci_085",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al constatar que en el aplicativo Muisca existen perfiles de administrador con contraseñas genéricas sin caducidad obligatoria:",
    "opcionTexto": "Pasar por alto el hallazgo porque hasta ahora no se ha presentado ningún hackeo en la seccional.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Pasar por alto",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El control interno debe ser proactivo y preventivo; las contraseñas genéricas violan las normas de control de accesos lógicos y seguridad informática."
  },
  {
    "id": "caza_ci_086",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En el seguimiento al informe de rendición de cuentas a la ciudadanía (Ley 489 de 1998 / Conpes 3654):",
    "opcionTexto": "Verificar la realización de los espacios de diálogo participativo y comprobar la publicación de las respuestas a las inquietudes formuladas por los ciudadanos.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar' el cumplimiento de los espacios de rendición de cuentas fortalece la transparencia y legitimidad institucional."
  },
  {
    "id": "caza_ci_087",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al encontrar inconsistencias en las fechas de posesión de varios servidores públicos de la planta temporal:",
    "opcionTexto": "Expedir un acto administrativo declarando insubsistentes a todos los servidores temporales de forma inmediata.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Expedir un acto administrativo",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La declaratoria de insubsistencia o remoción es potestad exclusiva del nominador de la Entidad (Director General o Seccional facultado)."
  },
  {
    "id": "caza_ci_088",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al detectar que la Seccional no ha remitido los informes tributarios a los entes territoriales dentro de los convenios de intercambio de información:",
    "opcionTexto": "Archivar el tema porque los convenios interinstitucionales no tienen carácter obligatorio en el ámbito local.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El incumplimiento de convenios interinstitucionales vulnera los compromisos de cooperación y el deber de coordinación interadministrativa (Ley 489 de 1998)."
  },
  {
    "id": "caza_ci_089",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación de la gestión de riesgos de lavado de activos y financiación del terrorismo (SARLAFT/SAGRILAFT):",
    "opcionTexto": "Evaluar la efectividad de los filtros de control y señales de alerta automáticas en las operaciones aduaneras de importación y exportación.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Evaluar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Evaluar' los filtros contra el lavado de activos refuerza la seguridad fiscal y el cumplimiento de estándares internacionales del GAFI."
  },
  {
    "id": "caza_ci_090",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Durante una inspección al proceso de atención al usuario en época de vencimiento de renta personas naturales:",
    "opcionTexto": "Instalar un cartel en la puerta principal avisando que solo se atenderán 20 personas al día sin importar las filas externas.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Instalar un cartel",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Restringir unilateralmente la atención al público vulnera el principio de eficacia y el derecho a la atención digna (Ley 1437 / Ley 1755)."
  },
  {
    "id": "caza_ci_091",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al advertir que en las actas de destrucción de mercancías decomisadas no constan las firmas de los testigos de ley:",
    "opcionTexto": "Validar el procedimiento sin objeción argumentando que la destrucción de mercancías siempre es un hecho notorio.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Validar el procedimiento",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La destrucción de mercancías decomisadas exige acta formal con testigos y solemnidades legales para evitar el desvío ilícito de bienes patrimoniales."
  },
  {
    "id": "caza_ci_092",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al planear una auditoría con base en el Modelo Integrado de Planeación y Gestión MIPG:",
    "opcionTexto": "Articular las 7 dimensiones del modelo y evaluar la coherencia entre las políticas de talento humano, direccionamiento y control interno.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Articular",
    "explicacion": "¡ACCIÓN CORRECTA! 'Articular' las dimensiones del MIPG garantiza una visión sistémica e integral del funcionamiento institucional conforme al Decreto 1499 de 2017."
  },
  {
    "id": "caza_ci_093",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al recibir un reporte de discrepancia en los cobros de derechos de aduana en una zona franca:",
    "opcionTexto": "Ordenar al comandante de policía la captura inmediata de los funcionarios de la agencia aduanera involucrada.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar al comandante",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Las órdenes de captura son privativas de los jueces de la República con función de control de garantías a solicitud de la Fiscalía."
  },
  {
    "id": "caza_ci_094",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al evidenciar que el Plan Institucional de Capacitación (PIC) de la vigencia anterior solo ejecutó el 20% de las actividades previstas:",
    "opcionTexto": "Guardar silencio porque la capacitación no impacta directamente en las metas de recaudo de impuestos.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar silencio",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El desarrollo de competencias del talento humano es dimensión estructural del MIPG y garantía del mérito administrativo."
  },
  {
    "id": "caza_ci_095",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación del cumplimiento de los compromisos adquiridos en las mesas de diálogo social con agremiaciones:",
    "opcionTexto": "Monitorear el grado de avance de los acuerdos institucionales y reportar alertas tempranas sobre compromisos con riesgo de vencimiento.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Monitorear",
    "explicacion": "¡ACCIÓN CORRECTA! 'Monitorear' compromisos institucionales salvaguarda la confianza ciudadana y la gobernanza institucional."
  },
  {
    "id": "caza_ci_096",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al revisar el registro de horas extras laboradas por los funcionarios de la división aduanera:",
    "opcionTexto": "Rechazar y borrar del sistema todas las horas extras reportadas sin verificar previamente los turnos ni las autorizaciones previas.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Rechazar y borrar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El auditor debe verificar y contrastar soportes, no borrar registros arbitrariamente ni menoscabar derechos laborales devengados."
  },
  {
    "id": "caza_ci_097",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al constatar que en los procesos de fiscalización no se está notificando electrónicamente conforme a los términos del Art. 566-1 del E.T.:",
    "opcionTexto": "Pasar por alto la situación por considerar que la notificación por aviso físico siempre subsana cualquier nulidad.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Pasar por alto",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El indebido procedimiento de notificación electrónica acarrea nulidades procesales y la pérdida de la facultad determinadora por vencimiento de términos."
  },
  {
    "id": "caza_ci_098",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "En la evaluación de la arquitectura de control interno conforme al marco COSO 2013:",
    "opcionTexto": "Valorar los 5 componentes interrelacionados (Ambiente de Control, Evaluación de Riesgos, Actividades de Control, Información y Monitoreo).",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Valorar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Valorar' los 5 componentes del COSO es la metodología estándar internacional adoptada en el MECI actualizado."
  },
  {
    "id": "caza_ci_099",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al verificar que un jefe de división nombró a su sobrino como perito externo en una licitación:",
    "opcionTexto": "Convalidar el nombramiento aludiendo que la preparación académica del sobrino justifica cualquier incompatibilidad.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Convalidar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / ILEGALIDAD! Las inhabilidades y conflicto de intereses por parentesco son taxativas de orden público y no pueden ser saneadas por ningún servidor."
  },
  {
    "id": "caza_ci_100",
    "perfilTarget": "gestor_iii_ci",
    "nivelCargo": "Profesional (Gestor III - Control Interno)",
    "contexto": "Al consolidar el informe final del Plan Anual de Auditoría para presentación al Comité Institucional de Coordinación de Control Interno:",
    "opcionTexto": "Sintetizar los resultados cuantitativos y cualitativos, resaltar las oportunidades de mejora y proyectar las recomendaciones estratégicas para la Dirección General.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Sintetizar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Sintetizar' y 'Proyectar recomendaciones' culmina el ciclo anual de auditoría y agrega valor a la alta dirección según el MECI y el marco del IIA."
  }
],
    gestor_iii: [
  {
    "id": "caza_g3_001",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una investigación fiscal por inclusión de proveedores ficticios en la declaración de renta:",
    "opcionTexto": "Decretar pruebas periciales contables, contrastar libros auxiliares con facturación electrónica y proyectar el Requerimiento Especial debidamente motivado.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Decretar pruebas",
    "explicacion": "¡ACCIÓN CORRECTA! 'Decretar pruebas', 'Contrastar' y 'Proyectar el Requerimiento Especial' definen el núcleo sustancial del fiscalizador profesional (Art. 703 Estatuto Tributario)."
  },
  {
    "id": "caza_g3_002",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir a un apoderado que solicita la prescripción de una obligación tributaria en discusión:",
    "opcionTexto": "Condenar verbalmente la deuda de capital e intereses a cambio de un acuerdo de pago informal de la sanción.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Condenar verbalmente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / ILEGALIDAD! Los tributos son indisponibles por acuerdo entre particulares o funcionarios (Art. 553 E.T.); condonar deudas exige ley de la República."
  },
  {
    "id": "caza_g3_003",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Frente a un contribuyente omiso en presentar declaración de activos en el exterior por más de dos años:",
    "opcionTexto": "Esperar a que el contribuyente cumpla voluntariamente sin expedir el emplazamiento previo por no recargar la carga de trabajo.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Esperar a",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Es deber legal del funcionario iniciar la acción de aforo oficial y expedir el Emplazamiento para Declarar dentro de los términos de ley (Art. 715 E.T.)."
  },
  {
    "id": "caza_g3_004",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Durante una diligencia de inspección tributaria en la sede administrativa de una sociedad comercial:",
    "opcionTexto": "Levantar el acta pormenorizada de inspección dejando constancia detallada de los libros exhibidos, copias tomadas y hechos constatados.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Levantar el",
    "explicacion": "¡ACCIÓN CORRECTA! 'Levantar acta de inspección' es la actuación legal obligatoria para dotar de validez probatoria a la diligencia (Art. 779 E.T.)."
  },
  {
    "id": "caza_g3_005",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al proyectar una Liquidación Oficial de Revisión por inexactitud:",
    "opcionTexto": "Aprobar y firmar como decisor final la liquidación oficial sin someterla a revisión ni firma del Jefe de División de Liquidación.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Aprobar y",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El Gestor III sustancie y 'proyecta' el acto; la firma resolutiva final corresponde al Jefe de División de Liquidación según la estructura de competencias de la DIAN."
  },
  {
    "id": "caza_g3_006",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al detectar inconsistencias en el informe de precios de transferencia de una multinacional:",
    "opcionTexto": "Analizar los métodos económicos de comparabilidad y formular el pliego de cargos por sanciones relativas a precios de transferencia.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Analizar los",
    "explicacion": "¡ACCIÓN CORRECTA! 'Analizar comparabilidad' y 'Formular pliegos' son tareas especializadas reservadas al nivel Profesional en régimen internacional."
  },
  {
    "id": "caza_g3_007",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Ante un auto de archivo de investigación propuesto por un compañero que presenta graves indicios de corrupción:",
    "opcionTexto": "Firmar el archivo como visto bueno sin leer el expediente para no entorpecer el clima laboral de la oficina.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Firmar el",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / CUMPLIMIENTO CIEGO! La responsabilidad del servidor público es indelegable respecto a los actos que avala; firmar sin revisar vulnera el principio de diligencia."
  },
  {
    "id": "caza_g3_008",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En el control posterior aduanero a una declaración de importación con duda sobre el valor declarado:",
    "opcionTexto": "Aplicar las reglas de valoración de la OMC, solicitar pruebas adicionales de valor y proyectar el requerimiento especial aduanero.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Aplicar las",
    "explicacion": "¡ACCIÓN CORRECTA! 'Aplicar reglas de valoración' y 'Proyectar requerimientos aduaneros' se ajustan plenamente al Decreto 920 de 2023 y al rol del Gestor III."
  },
  {
    "id": "caza_g3_009",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al inspeccionar un establecimiento de comercio que no expide factura electrónica:",
    "opcionTexto": "Ordenar la demolición física del local comercial como sanción accesoria ejemplarizante.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar la",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN ABSURDA! La sanción legal por no facturar es la clausura del establecimiento (Art. 657 E.T.), jamás la demolición de infraestructura privada."
  },
  {
    "id": "caza_g3_010",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Frente al trámite de una solicitud de devolución de saldo a favor de IVA por exportaciones:",
    "opcionTexto": "Verificar la existencia real de las operaciones de exportación en los registros de la VUCE y cruzar retenciones practicadas antes de proyectar la resolución.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar operaciones' y 'Cruzar retenciones' asegura la protección del patrimonio público ante devoluciones fraudulentas (Art. 857 E.T.)."
  },
  {
    "id": "caza_g3_011",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al observar que el término de firmeza de una declaración está a tres días de cumplirse y no se ha notificado el requerimiento especial:",
    "opcionTexto": "Dejar vencer el término de firmeza aduciendo que ya no hay tiempo material de gestionar la notificación electrónica.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Dejar vencer",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD GRAVÍSIMA! Dejar vencer los términos de firmeza por desidia acarrea investigación disciplinaria y eventual responsabilidad fiscal por daño patrimonial."
  },
  {
    "id": "caza_g3_012",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al resolver las objeciones presentadas por un contribuyente frente a un Requerimiento Especial:",
    "opcionTexto": "Analizar exhaustivamente los argumentos y pruebas de descargo, aceptar las procedentes y proyectar la Liquidación Oficial de Revisión por las partidas no justificadas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Analizar exhaustivamente",
    "explicacion": "¡ACCIÓN CORRECTA! El funcionario debe garantizar el debido proceso valorando todas las pruebas allegadas antes de proyectar el acto definitivo."
  },
  {
    "id": "caza_g3_013",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al realizar un control tributario en un centro comercial:",
    "opcionTexto": "Promulgar una amnistía de intereses de mora a los comerciantes que paguen de contado en la jornada.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Promulgar una",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Las amnistías tributarias solo pueden ser creadas por el Congreso de la República mediante Ley."
  },
  {
    "id": "caza_g3_014",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una verificación de operaciones de comercio exterior con países con regímenes tributarios preferenciales (paraísos fiscales):",
    "opcionTexto": "Contrastar los estudios de precios de transferencia y proyectar el auto de apertura de investigación fiscal especializado.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Contrastar los",
    "explicacion": "¡ACCIÓN CORRECTA! Es una competencia investigativa analítica del Gestor III en materia de tributación internacional."
  },
  {
    "id": "caza_g3_015",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al encontrar inconsistencias graves en los libros contables de un consorcio de infraestructura:",
    "opcionTexto": "Recomendar que no se investigue al consorcio porque sus integrantes son firmas reconocidas a nivel nacional.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Recomendar que",
    "explicacion": "¡DISTRACTOR POR FALTA DE OBJETIVIDAD / PASIVIDAD! El principio de igualdad y legalidad tributaria impide tratos preferenciales basados en la notoriedad del contribuyente."
  },
  {
    "id": "caza_g3_016",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al detectar una omisión de ingresos en declaración de renta a partir de cruces con el sistema bancario:",
    "opcionTexto": "Proyectar el emplazamiento para corregir detallando con claridad las inconsistencias detectadas y el término para responder.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Proyectar el",
    "explicacion": "¡ACCIÓN CORRECTA! 'Proyectar emplazamiento para corregir' es el procedimiento preventivo reglado en el artículo 688 del Estatuto Tributario."
  },
  {
    "id": "caza_g3_017",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una visita de verificación aduanera a una Zona Franca:",
    "opcionTexto": "Aprobar el ingreso irregular de mercancías sin declaración aduanera cobrando una tarifa personal de agilización.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Aprobar el",
    "explicacion": "¡DISTRACTOR POR CORRUPCIÓN / EXTRALIMITACIÓN! Tipifica delitos penales de concusión y cohecho; el funcionario solo aplica los controles legales."
  },
  {
    "id": "caza_g3_018",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al elaborar una respuesta a un derecho de petición en materia de interpretación del Estatuto Tributario:",
    "opcionTexto": "Citar la doctrina vigente emitida por la Dirección de Gestión Jurídica y proyectar la respuesta dentro del marco institucional sin crear normas nuevas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Citar la",
    "explicacion": "¡ACCIÓN CORRECTA! La doctrina oficial unificada de la DIAN es de obligatoria observancia para los funcionarios según el artículo 131 de la Ley 2010 de 2019."
  },
  {
    "id": "caza_g3_019",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al revisar un expediente con prueba pericial técnica contradictoria:",
    "opcionTexto": "Descartar la prueba pericial sin motivación alguna y resolver con fundamento exclusivo en sospechas personales.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Descartar la",
    "explicacion": "¡DISTRACTOR POR ARBITRARIEDAD / FALTA DE MOTIVACIÓN! Todo acto de determinación debe fundarse en la sana crítica de las pruebas legalmente practicadas (Art. 742 E.T.)."
  },
  {
    "id": "caza_g3_020",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una diligencia de inspección contable tributaria:",
    "opcionTexto": "Examinar los comprobantes de egreso, verificar los soportes de retención en la fuente y contrastar contra el libro mayor de balances.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Examinar los",
    "explicacion": "¡ACCIÓN CORRECTA! 'Examinar', 'Verificar' y 'Contrastar' son verbos propios de la auditoría y fiscalización tributaria."
  },
  {
    "id": "caza_g3_021",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al evaluar la solicitud de un deudor de suscribir un acuerdo de pago a 5 años:",
    "opcionTexto": "Exonerar de plano la constitución de garantías reales porque el contribuyente afirma ser una persona honesta.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Exonerar de",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Los acuerdos de pago a plazos superiores a un año exigen obligatoriamente garantías reales o bancarias (Art. 814 E.T.)."
  },
  {
    "id": "caza_g3_022",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al fiscalizar operaciones de comercio electrónico y ventas por redes sociales sin RUT:",
    "opcionTexto": "Efectuar cruces con las pasarelas de pago digitales y proyectar el auto de inscripción oficiosa en el Registro Único Tributario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Efectuar cruces",
    "explicacion": "¡ACCIÓN CORRECTA! La inscripción de oficio en el RUT está autorizada por el artículo 555-2 del Estatuto Tributario para formalizar a los obligados."
  },
  {
    "id": "caza_g3_023",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al vencerse el término de traslado del requerimiento especial sin respuesta del contribuyente:",
    "opcionTexto": "Archivar el caso considerando que la ausencia de respuesta demuestra desinterés del investigado.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar el",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD ILÍCITA! Si el contribuyente no responde el requerimiento especial, la ley ordena proferir la Liquidación Oficial de Revisión (Art. 710 E.T.)."
  },
  {
    "id": "caza_g3_024",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En el control de mercancías bajo régimen de tránsito aduanero:",
    "opcionTexto": "Verificar la integridad de los precintos electrónicos aduaneros y comprobar que la ruta satelital coincida con la autorizada.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar la",
    "explicacion": "¡ACCIÓN CORRECTA! El control físico y tecnológico del tránsito aduanero es una función medular de la fiscalización aduanera."
  },
  {
    "id": "caza_g3_025",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al detectar una inconsistencia en un auto comisorio de auditoría:",
    "opcionTexto": "Cambiar a mano el nombre del contribuyente investigado en el auto y continuar la diligencia sin autorización de la jefatura.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Cambiar a",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / NULIDAD! Los autos comisorios deben ser formalmente expedidos y modificados por la jefatura competente; alterar documentos genera nulidad procesal."
  },
  {
    "id": "caza_g3_026",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al verificar el cumplimiento de la obligación de facturar electrónicamente en grandes superficies:",
    "opcionTexto": "Constatar la expedición del documento equivalente electrónico y verificar la transmisión oportuna a la plataforma DIAN en tiempo real.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Constatar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Constatar' y 'Verificar la transmisión' asegura el control tributario sobre el ecosistema de facturación electrónica."
  },
  {
    "id": "caza_g3_027",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir un expediente con pruebas obtenidas con violación del debido proceso:",
    "opcionTexto": "Incorporar las pruebas ilícitas sin valorar su nulidad aduciendo que lo importante es recaudar a toda costa.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Incorporar las",
    "explicacion": "¡DISTRACTOR POR VIOLACIÓN CONSTITUCIONAL! El artículo 29 de la Constitución Política prescribe que es nula de pleno derecho la prueba obtenida con violación del debido proceso."
  },
  {
    "id": "caza_g3_028",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una investigación por activos omitidos y pasivos inexistentes en el exterior:",
    "opcionTexto": "Tramitar requerimientos de intercambio de información tributaria internacional con base en los convenios de asistencia mutua suscritos por Colombia.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Tramitar requerimientos",
    "explicacion": "¡ACCIÓN CORRECTA! La activación de canales de intercambio de información (como el Estándar CRS de la OCDE) es función especializada del Gestor III."
  },
  {
    "id": "caza_g3_029",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Durante una inspección física de mercancías extranjeras:",
    "opcionTexto": "Aprobar el remate inmediato y adjudicación privada de la mercancía a familiares del equipo de inspección.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Aprobar el",
    "explicacion": "¡DISTRACTOR POR DELITO / EXTRALIMITACIÓN! La disposición de mercancías decomisadas tiene procedimientos reglados de enajenación, donación o destrucción a través de la Dirección General."
  },
  {
    "id": "caza_g3_030",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al evaluar la solicitud de corrección de una declaración que aumenta el saldo a favor:",
    "opcionTexto": "Verificar la realidad económica de los costos adicionales presentados y proyectar el auto que autoriza o rechaza la corrección dentro de los seis meses de ley.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar realidad económica' y 'Proyectar auto de corrección' se ajusta estrictamente al procedimiento del artículo 589 del Estatuto Tributario."
  },
  {
    "id": "caza_g3_031",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al detectar una empresa fachada utilizada para la creación de IVA descontable ficticio:",
    "opcionTexto": "Archivar el expediente considerando que al tratarse de una sociedad ilocalizable la DIAN no puede hacer nada.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar el",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Procede emitir el acto de declaratoria de proveedor ficticio o insolvente (Art. 671 E.T.) y compulsar copias penales a la Fiscalía General."
  },
  {
    "id": "caza_g3_032",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al finalizar una auditoría tributaria con aceptación voluntaria de las glosas por el contribuyente:",
    "opcionTexto": "Comprobar que la declaración de corrección provocada liquide adecuadamente la sanción reducida del 25% y proyectar el auto de archivo por pago.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Comprobar que",
    "explicacion": "¡ACCIÓN CORRECTA! Comprobar la liquidación de la sanción por corrección provocada (Art. 709 E.T.) culmina válidamente la actuación procesal."
  },
  {
    "id": "caza_g3_033",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al detectar mercancía de contrabando en un retén vial aduanero:",
    "opcionTexto": "Devolver la mercancía al infractor a cambio de una promesa verbal de que tramitará la declaración en el futuro.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Devolver la",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / PREVARICATO! El funcionario está legalmente obligado a adoptar la medida cautelar de aprehensión de la mercancía sin excepción (Decreto 920 de 2023)."
  },
  {
    "id": "caza_g3_034",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al vencerse el término de tres meses que tiene el contribuyente para dar respuesta al Requerimiento Especial formulado en su contra:",
    "opcionTexto": "Analizar integralmente las objeciones y pruebas documentales aportadas y proyectar la Liquidación Oficial de Revisión debidamente motivada dentro de los 6 meses siguientes.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Analizar y proyectar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Analizar objeciones' y 'Proyectar la Liquidación Oficial de Revisión' dentro del plazo perentorio de 6 meses es el núcleo funcional del fiscalizador (Art. 710 del Estatuto Tributario)."
  },
  {
    "id": "caza_g3_035",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al constatar que un contribuyente omiso no atendió el Emplazamiento para Declarar en el término legal de un mes:",
    "opcionTexto": "Expedir y notificar de inmediato la resolución de clausura del establecimiento de comercio como sanción principal sin agotar el procedimiento de aforo.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Expedir y notificar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Frente a la omisión en declarar, la ley contempla la Liquidación Oficial de Aforo y la sanción por no declarar (Art. 715 y 717 ET); la clausura aplica para otros supuestos específicos del Art. 657 ET."
  },
  {
    "id": "caza_g3_036",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al detectar que la declaración de IVA objeto de fiscalización incurre en inexactitud pero restan solo 5 días para la firmeza definitiva:",
    "opcionTexto": "Guardar silencio y dejar vencer el término de firmeza porque el contribuyente es una figura pública respetada en la región.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar silencio",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD U OMISIÓN! Permitir la firmeza por prescripción o vencimiento injustificado acarrea responsabilidad disciplinaria y patrimonial por daño al erario (Art. 705 ET y Ley 1952 de 2019)."
  },
  {
    "id": "caza_g3_037",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Durante una inspección tributaria y contable decretada formalmente en las instalaciones de una persona jurídica investigada (Art. 779 ET):",
    "opcionTexto": "Examinar los libros de contabilidad, verificar los comprobantes internos y externos y levantar el acta detallada con constancia de los hechos verificados.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Examinar y levantar acta",
    "explicacion": "¡ACCIÓN CORRECTA! 'Examinar libros' y 'Levantar acta detallada' en la inspección contable constituye prueba idónea y suspende válidamente los términos de firmeza (Art. 779 y 782 ET)."
  },
  {
    "id": "caza_g3_038",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al evidenciar que el contribuyente se niega reiteradamente a exhibir sus libros de contabilidad durante la diligencia de inspección:",
    "opcionTexto": "Proceder a la aprehensión física de los representantes legales y ordenar su detención preventiva en las celdas de la Seccional.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Proceder a la aprehensión física",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La no exhibición de libros da lugar a la presunción de ingresos y aplicación de la sanción por no exhibir libros (Art. 654 y 655 ET); la privación de libertad es exclusiva del juez penal."
  },
  {
    "id": "caza_g3_039",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir las declaraciones de renta con solicitud de devolución de saldo a favor de un contribuyente con indicios de operaciones inexistentes:",
    "opcionTexto": "Aprobar el giro del dinero sin verificar la procedencia de los costos ni suspender el término de devolución.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Aprobar el giro",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Ante indicios graves de fraude en devoluciones, el Estatuto Tributario faculta la suspensión de términos para investigación previa (Art. 857-1 ET)."
  },
  {
    "id": "caza_g3_040",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En la investigación de operaciones de precios de transferencia de una empresa vinculada del sector minero-energético:",
    "opcionTexto": "Contrastar el estudio de precios de transferencia aportado con las bases de datos financieras internacionales y verificar la razonabilidad de los márgenes de rentabilidad declarados.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Contrastar y verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Contrastar estudios' y 'Verificar márgenes' según los métodos del Art. 260-3 del ET es la labor técnica especializada del auditor en fiscalidad internacional."
  },
  {
    "id": "caza_g3_041",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al constatar que un contribuyente pagó su impuesto de renta pero olvidó liquidar la sanción de extemporaneidad:",
    "opcionTexto": "Condonar verbalmente la sanción de extemporaneidad en consideración a que el contribuyente fue muy cordial durante la visita.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Condonar verbalmente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La condonación de tributos y sanciones está estrictamente reservada a la Ley expedida por el Congreso (principio de legalidad y reserva de ley, Art. 150-12 CP)."
  },
  {
    "id": "caza_g3_042",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al revisar una denuncia tributaria que contiene facturas falsas, cheques y nombres de las empresas de papel utilizadas para evadir el IVA:",
    "opcionTexto": "Archivar el expediente sin abrir averiguación previa aduciendo que la dependencia ya tiene demasiada carga laboral.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar el expediente",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El servidor tiene el deber de dar curso y verificar las denuncias con indicios probatorios para resguardar las rentas públicas (Art. 684 ET)."
  },
  {
    "id": "caza_g3_043",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al tramitar un proceso administrativo de cobro coactivo contra un deudor tributario renuente con título ejecutivo en firme:",
    "opcionTexto": "Proyectar el mandamiento de pago ordenando la cancelación de la obligación tributaria más los intereses moratorios correspondientes y remitir a notificación personal o por correo (Art. 826 ET).",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Proyectar el mandamiento",
    "explicacion": "¡ACCIÓN CORRECTA! 'Proyectar el mandamiento de pago' e iniciar la vía coactiva con base en título ejecutivo legalmente exigible es el cauce procesal del cobro (Art. 826 y 828 ET)."
  },
  {
    "id": "caza_g3_044",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al practicar un embargo de cuentas bancarias en un proceso de cobro coactivo:",
    "opcionTexto": "Embargar indefinidamente el 100% de los saldos bancarios de todas las cuentas de la empresa sin sujetarse al límite legal del doble de la deuda más intereses.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Embargar indefinidamente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El artículo 838 del Estatuto Tributario limita expresamente el embargo preventivo al doble de la deuda más sus intereses."
  },
  {
    "id": "caza_g3_045",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al percatarse de que el deudor coactivo presentó oportunamente la excepción de pago total demostrada con recibo oficial de pago en banco:",
    "opcionTexto": "Continuar con el remate de los bienes embargados sin resolver la excepción de pago propuesta.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Continuar con el remate",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / VIOLACIÓN AL DEBIDO PROCESO! El funcionario ejecutor está obligado a tramitar y resolver de fondo las excepciones antes de ordenar el remate (Art. 832 ET)."
  },
  {
    "id": "caza_g3_046",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Durante una diligencia de control a la expedición de factura electrónica en un establecimiento de comercio:",
    "opcionTexto": "Verificar la entrega de la factura electrónica con validación previa de la DIAN, comprobar el cumplimiento de los requisitos del Art. 617 del E.T. y levantar el acta técnica de visita.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar y comprobar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar entrega de factura electrónica' y 'Levantar acta técnica' es el procedimiento legal para fiscalizar el sistema de facturación (Art. 616-1 y 684 ET)."
  },
  {
    "id": "caza_g3_047",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al constatar que un establecimiento no expide factura electrónica por primera vez:",
    "opcionTexto": "Proceder al decomiso inmediato y destrucción de todo el inventario de mercancías del establecimiento como sanción accesoria.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Proceder al decomiso",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La no expedición de factura da lugar al pliego de cargos y a la sanción de clausura de establecimiento (Art. 657 ET), nunca al decomiso ni destrucción de bienes de procedencia lícita."
  },
  {
    "id": "caza_g3_048",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al finalizar la visita de control de facturación y detectar que el comerciante no entrega facturas electrónicas a sus clientes:",
    "opcionTexto": "Abstenerse de levantar acta y aceptar un refrigerio de cortesía ofrecido por el administrador del local para cerrar amigablemente la visita.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Abstenerse de levantar acta",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / FALTA GRAVE! Omitir el levantamiento del acta y recibir atenciones o dádivas vulnera el Código Disciplinario y el principio de imparcialidad (Ley 1952 de 2019)."
  },
  {
    "id": "caza_g3_049",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una investigación aduanera sobre mercancías extranjeras introducidas al territorio nacional:",
    "opcionTexto": "Cotejar la declaración de importación con los documentos de transporte y verificar si la descripción comercial y seriales corresponden con la mercancía física inspeccionada.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Cotejar y verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Cotejar declaración' y 'Verificar descripción y seriales' es la actividad probatoria por excelencia en fiscalización aduanera para descartar contrabando."
  },
  {
    "id": "caza_g3_050",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al inspeccionar un contenedor de mercancías con inconsistencias menores de ortografía en la traducción de la factura comercial:",
    "opcionTexto": "Ordenar la quema inmediata de todo el cargamento sin otorgar término para la presentación de declaración de legalización.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar la quema",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La legislación aduanera otorga plazos y modalidades para subsanar descripciones o legalizar mercancías; la destrucción solo opera bajo causales taxativas y acta formal."
  },
  {
    "id": "caza_g3_051",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir el informe de peritaje aduanero que confirma que la mercancía extranjera no cuenta con ningún soporte legal de ingreso al país:",
    "opcionTexto": "Guardar el expediente en un cajón y postergar la expedición del pliego de cargos aduanero hasta después del cambio de gobierno.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar el expediente",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El servidor debe dar impulso oportuno y expedir el pliego de cargos aduanero dentro de los términos perentorios fijados por el Decreto 1165 de 2019."
  },
  {
    "id": "caza_g3_052",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al evaluar la solicitud de un contribuyente de saneamiento contable conforme a la Ley de Reforma Tributaria vigente:",
    "opcionTexto": "Examinar si los activos omitidos o pasivos inexistentes declarados cumplen con las condiciones de temporalidad y tarifa especial consagradas expresamente en la Ley.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Examinar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Examinar el cumplimiento de condiciones de ley' garantiza la aplicación estricta de los beneficios tributarios y la debida recaudación."
  },
  {
    "id": "caza_g3_053",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al enterarse de que el contribuyente investigado es hermano de un compañero de oficina:",
    "opcionTexto": "Continuar con la investigación fiscal argumentando que la amistad con el compañero no afectará su independencia de criterio.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Continuar con la investigación",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / CONFLICTO DE INTERÉS! Aunque no sea familiar directo, la existencia de vínculos que afecten la objetividad exige analizar e informar la situación o declararse impedido formalmente (CPACA, Art. 11)."
  },
  {
    "id": "caza_g3_054",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al contestar un derecho de petición ciudadano que solicita copia de las declaraciones de renta y estados financieros de un competidor comercial:",
    "opcionTexto": "Proyectar la respuesta denegando la solicitud con fundamento expreso en la reserva tributaria consagrada en el artículo 583 del Estatuto Tributario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Proyectar respuesta denegando",
    "explicacion": "¡ACCIÓN CORRECTA! La información tributaria goza de reserva legal y solo puede ser suministrada por orden judicial o a entidades legalmente autorizadas (Art. 583 ET y Ley 1712 de 2014)."
  },
  {
    "id": "caza_g3_055",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al atender a un periodista que pregunta verbalmente por la situación fiscal de una empresa investigada por evasión:",
    "opcionTexto": "Entregarle fotocopias completas del Requerimiento Especial y de los extractos bancarios de la empresa investigada para ganar reconocimiento mediático.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Entregarle fotocopias",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / VIOLACIÓN DE RESERVA! La entrega no autorizada de expedientes bajo reserva tributaria constituye delito penal y falta disciplinaria gravísima (Art. 583 ET)."
  },
  {
    "id": "caza_g3_056",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al percatarse de que un expediente físico que contiene la investigación tributaria de un conglomerado económico desapareció de su escritorio:",
    "opcionTexto": "Guardar silencio y fingir que el expediente nunca existió para evitar anotaciones en su hoja de vida.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar silencio",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD U OMISIÓN! La pérdida o deterioro de expedientes institucionales exige reporte inmediato a la jefatura, denuncia penal y reconstrucción inmediata (Art. 126 CGP y Ley 1952 de 2019)."
  },
  {
    "id": "caza_g3_057",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una investigación por deducciones improcedentes en el impuesto sobre la renta de personas jurídicas:",
    "opcionTexto": "Verificar el principio de causalidad, necesidad y proporcionalidad de los gastos deducidos conforme a las exigencias del artículo 107 del Estatuto Tributario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar causalidad, necesidad y proporcionalidad' es la prueba jurídica fundamental para determinar la procedencia de costos y deducciones (Art. 107 ET)."
  },
  {
    "id": "caza_g3_058",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al no estar de acuerdo con una sentencia de unificación del Consejo de Estado sobre deducción de regalías:",
    "opcionTexto": "Desconocer deliberadamente el precedente jurisprudencial vinculante en los requerimientos especiales que proyecta para obligar a los contribuyentes a litigar.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Desconocer deliberadamente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / PREVARICATO! El desconocimiento arbitrario de sentencias de unificación jurisprudencial vinculantes vulnera el principio de legalidad e igualdad (Art. 10 y 270 CPACA)."
  },
  {
    "id": "caza_g3_059",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al analizar el cruce de información exógena donde se evidencian omisiones millonarias en ingresos brutos de un profesional independiente:",
    "opcionTexto": "Archivar las inconsistencias sin emitir emplazamiento previo ni requerimiento ordinario aduciendo que la suma no es suficiente para su interés profesional.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Archivar las inconsistencias",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El servidor público debe gestionar diligentemente las alertas de evasión identificadas en la información exógena (Art. 684 y 688 ET)."
  },
  {
    "id": "caza_g3_060",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al resolver el recurso de reconsideración interpuesto por un contribuyente contra una Liquidación Oficial de Revisión (Art. 720 ET):",
    "opcionTexto": "Estudiar detalladamente los motivos de inconformidad planteados, valorar las pruebas allegadas en el recurso y proyectar la resolución que decide el recurso dentro del año siguiente.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Estudiar y proyectar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Estudiar motivos de inconformidad' y 'Proyectar resolución de reconsideración' en el plazo de 1 año evita la ocurrencia del silencio administrativo positivo (Art. 732 y 734 ET)."
  },
  {
    "id": "caza_g3_061",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al advertir que faltan 2 días para que se configure el silencio administrativo positivo en un recurso de reconsideración:",
    "opcionTexto": "Antedatar la fecha del acto administrativo con un mes de anterioridad para aparentar que fue resuelto dentro del término legal.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Antedatar la fecha",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALSEDAD IDEOLÓGICA! Antedatar documentos públicos es delito penal de falsedad y falta gravísima en el Código Disciplinario."
  },
  {
    "id": "caza_g3_062",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al vencerse el término de un año para resolver el recurso de reconsideración sin haberse emitido pronunciamiento:",
    "opcionTexto": "Notificar la resolución denegando el recurso e ignorar la solicitud de declaratoria de silencio administrativo positivo formulada por el recurrente.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Notificar e ignorar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / ILEGALIDAD! Vencido el año sin notificación válida, opera de pleno derecho el silencio administrativo positivo a favor del contribuyente (Art. 734 ET)."
  },
  {
    "id": "caza_g3_063",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una investigación por pasivos inexistentes incluidos en la declaración de renta de un gran contribuyente:",
    "opcionTexto": "Requerir a los supuestos acreedores nacionales y extranjeros para verificar la realidad económica y existencia de las deudas declaradas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Requerir",
    "explicacion": "¡ACCIÓN CORRECTA! 'Requerir a terceros acreedores' es la facultad fiscalizadora idónea para desvirtuar pasivos inexistentes según el Art. 684 y 283 del ET."
  },
  {
    "id": "caza_g3_064",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al proyectar un pliego de cargos por no enviar información exógena (Art. 651 ET):",
    "opcionTexto": "Calcular la sanción económica aplicando una tasa del 20% sobre el patrimonio líquido del infractor sin importar el tope legal de UVTs establecido en la ley.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Calcular sanción arbitraria",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La tasación de sanciones tributarias debe ceñirse con exactitud a los porcentajes y topes máximos en UVT estipulados taxativamente en la Ley (Art. 651 ET)."
  },
  {
    "id": "caza_g3_065",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir las pruebas extemporáneas de un contribuyente acompañadas del pago voluntario de la sanción reducida:",
    "opcionTexto": "Rechazar de plano el pago sin revisar los recibos oficiales y exigir el pago completo de la sanción sin reducción legal.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Rechazar de plano",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El contribuyente tiene derecho legal a la gradualidad y reducción de sanciones si subsana voluntariamente antes del acto definitivo (Art. 640 ET)."
  },
  {
    "id": "caza_g3_066",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al constatar que en el expediente tributario la notificación electrónica del requerimiento especial arrojó acuse de entrega exitoso en el buzón registrado en el RUT:",
    "opcionTexto": "Verificar la constancia técnica de entrega y computar el término de respuesta a partir de los 5 días hábiles siguientes al recibo del correo (Art. 566-1 ET).",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar y computar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar constancia técnica' y 'Computar plazos' conforme al artículo 566-1 del ET garantiza el debido proceso y la validez probatoria de las notificaciones electrónicas."
  },
  {
    "id": "caza_g3_067",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al encontrar que un contribuyente cambió de domicilio fiscal a otra ciudad hace 2 meses y actualizó su RUT oportunamente:",
    "opcionTexto": "Enviar las notificaciones por correo físico a la dirección antigua abandonada para lograr que no se entere y no conteste el requerimiento.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Enviar notificaciones a dirección antigua",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / MALA FE! Las notificaciones deben dirigirse a la dirección registrada en el RUT vigente a la fecha de envío (Art. 563 ET); vulnerar esto acarrea nulidad insubsanable."
  },
  {
    "id": "caza_g3_068",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir una solicitud formal de facilidad de pago de un deudor que ofrece como garantía una hipoteca sobre un inmueble comercial libre de gravámenes:",
    "opcionTexto": "Estudiar la solvencia de la garantía, verificar el avalúo catastral o pericial y proyectar la resolución de concesión de facilidad de pago (Art. 814 ET).",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Estudiar y proyectar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Estudiar garantía' y 'Proyectar facilidad de pago' conforme al Art. 814 del ET promueve el recaudo voluntario y asegura los créditos a favor de la Nación."
  },
  {
    "id": "caza_g3_069",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al conceder una facilidad de pago a un contribuyente moroso:",
    "opcionTexto": "Exonerar al deudor del pago de todos los intereses moratorios causados sin que exista norma legal expresa de amnistía.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Exonerar de intereses",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La exoneración de intereses moratorios requiere norma legal de rango de ley; los funcionarios no tienen facultad para perdonar intereses (Art. 634 y 814 ET)."
  },
  {
    "id": "caza_g3_070",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al verificar que un contribuyente beneficiario de facilidad de pago incumplió dos cuotas consecutivas pactadas:",
    "opcionTexto": "No adoptar ninguna medida y dejar que pasen los años sin declarar el incumplimiento ni hacer efectiva la garantía.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "No adoptar ninguna medida",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Ante el incumplimiento de facilidades de pago, debe declararse la pérdida del plazo y ordenar la ejecución inmediata de las garantías (Art. 814-3 ET)."
  },
  {
    "id": "caza_g3_071",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En una investigación a contribuyentes del Régimen Simple de Tributación (SIMPLE):",
    "opcionTexto": "Constatar si los ingresos brutos anuales superan el tope legal de 100.000 UVT y verificar el pago oportuno de los anticipos bimestrales en los recibos electrónicos.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Constatar y verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Constatar topes de ingresos' y 'Verificar anticipos bimestrales' asegura la permanencia legítima en el régimen SIMPLE (Art. 905 y 910 ET)."
  },
  {
    "id": "caza_g3_072",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al evidenciar que un contribuyente del SIMPLE omitió facturar electrónicamente una parte sustancial de sus ingresos:",
    "opcionTexto": "Excluirlo de plano del régimen SIMPLE mediante llamada telefónica sin expedir resolución motivada ni otorgar recurso.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Excluirlo de plano mediante llamada",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La exclusión del régimen SIMPLE requiere resolución administrativa debidamente motivada susceptible de recurso de reconsideración (Art. 913 ET)."
  },
  {
    "id": "caza_g3_073",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir indicios claros de contrabando técnico por subfacturación en declaraciones aduaneras tramitadas por una agencia de aduanas:",
    "opcionTexto": "Aplicar los métodos de valoración de la OMC (valor de transacción de mercancías idénticas o similares) y proyectar el requerimiento especial aduanero.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Aplicar y proyectar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Aplicar métodos de valoración OMC' y 'Proyectar requerimiento aduanero' es el cauce legal para combatir la subfacturación aduanera (Decisión 571 CAN y Decreto 1165)."
  },
  {
    "id": "caza_g3_074",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Durante una diligencia de allanamiento con fines de fiscalización tributaria:",
    "opcionTexto": "Romper cerraduras y registrar habitaciones residenciales familiares sin contar con orden previa y motivada del Director Seccional (Art. 779-1 ET).",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Romper cerraduras y registrar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El allanamiento y registro tributario exige orden escrita y fundamentada expedida por el Director General o Seccional (Art. 779-1 ET y garantías constitucionales)."
  },
  {
    "id": "caza_g3_075",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir las pruebas solicitadas en un requerimiento ordinario de información:",
    "opcionTexto": "Omitir la incorporación de los documentos al expediente digital del sistema Muisca dejando que se extravíen.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Omitir la incorporación",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Las pruebas aportadas deben ser radicadas, incorporadas al expediente digital y foliadas para garantizar la completitud del expediente probatorio."
  },
  {
    "id": "caza_g3_076",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al evaluar la procedencia de una sanción por improcedencia en devoluciones (Art. 670 ET):",
    "opcionTexto": "Verificar si la devolución previa se fundamentó en documentos falsos o hechos fraudulentos y proyectar el pliego de cargos correspondiente con la graduación sancionatoria de ley.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar y proyectar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar falsedades' y 'Proyectar pliego de cargos' sanciona la devolución indebida protegiendo el tesoro público (Art. 670 ET)."
  },
  {
    "id": "caza_g3_077",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al detectar que un contribuyente tiene una deuda fiscal cuantiosa:",
    "opcionTexto": "Prohibirle la salida del país y retener su pasaporte sin orden de un juez penal de la República.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Prohibir la salida y retener pasaporte",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La restricción al derecho fundamental de locomoción y la retención de pasaportes solo puede ser ordenada por autoridades judiciales penales."
  },
  {
    "id": "caza_g3_078",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al culminar el plazo probatorio dentro de un proceso de aforo:",
    "opcionTexto": "Dejar transcurrir el término de cinco años sin proferir la Liquidación de Aforo permitiendo la prescripción de la facultad determinadora.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Dejar transcurrir el término",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Permitir la pérdida de competencia por vencimiento del plazo de 5 años para aforar genera grave detrimento patrimonial a la Nación (Art. 717 ET)."
  },
  {
    "id": "caza_g3_079",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En la revisión de retenciones en la fuente aplicadas a pagos al exterior a empresas no residentes:",
    "opcionTexto": "Analizar los Convenios para Evitar la Doble Imposición (CDI) aplicables y comprobar si la tarifa de retención aplicada coincide con los límites fijados en el tratado internacional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Analizar y comprobar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Analizar CDI' y 'Comprobar tarifas de retención' asegura la debida tributación transfronteriza y la aplicación preferente de los convenios internacionales."
  },
  {
    "id": "caza_g3_080",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al requerir información a un banco sobre movimientos financieros de un contribuyente en una investigación tributaria formal:",
    "opcionTexto": "Solicitar por escrito los extractos bancarios conforme a las amplias facultades de fiscalización del artículo 684 del Estatuto Tributario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Solicitar por escrito",
    "explicacion": "¡ACCIÓN CORRECTA! La DIAN tiene facultad legal para levantar la reserva bancaria en el curso de investigaciones tributarias formales (Art. 684 y 623-2 ET)."
  },
  {
    "id": "caza_g3_081",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir un soborno ofrecido por un contribuyente para reducir el monto del Requerimiento Especial:",
    "opcionTexto": "Aceptar el dinero justificando que los salarios públicos son insuficientes para el costo de vida actual.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Aceptar el dinero",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / DELITO DE COHECHO! La solicitud o recepción de dinero o dádivas constituye delito grave de cohecho y destitución inmediata (Ley 1952 de 2019)."
  },
  {
    "id": "caza_g3_082",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al enterarse de que un contribuyente presentó una queja por presunta concusión en su contra:",
    "opcionTexto": "Destruir el expediente físico de fiscalización y borrar los borradores del sistema para que no queden rastros de su actuación.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Destruir el expediente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / DELITO DE DESTRUCCIÓN DE DOCUMENTO PÚBLICO! Destruir expedientes oficiales acarrea penas de prisión y sanciones disciplinarias gravísimas."
  },
  {
    "id": "caza_g3_083",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al proyectar una sanción de clausura de establecimiento de comercio por no facturar (Art. 657 ET):",
    "opcionTexto": "Verificar la imposición de los sellos oficiales de 'Cerrado por Evasión' y coordinar el acompañamiento de la Policía Nacional para garantizar el orden público.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar y coordinar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar imposición de sellos' y 'Coordinar acompañamiento policial' asegura la materialización legal de la sanción de clausura (Art. 657 ET)."
  },
  {
    "id": "caza_g3_084",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al verificar que un comerciante rompió los sellos oficiales de clausura colocados por la DIAN y siguió vendiendo mercancías:",
    "opcionTexto": "Ignorar la ruptura de sellos argumentando que la DIAN no es autoridad penal.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Ignorar la ruptura",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La ruptura de sellos oficiales tipifica el delito de fraude a resolución judicial o administrativa y amerita denuncia penal inmediata (Art. 454 CP)."
  },
  {
    "id": "caza_g3_085",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al realizar el análisis de procedencia de costos en el sector de la construcción:",
    "opcionTexto": "Contrastar las compras de materiales de construcción con las licencias urbanísticas y los contratos de obra celebrados para comprobar la realidad de las erogaciones.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Contrastar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Contrastar compras con licencias y contratos' corrobora la veracidad de los costos amortizables en contratos de construcción (Art. 77-1 ET)."
  },
  {
    "id": "caza_g3_086",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al identificar que un contribuyente dedujo pagos por concepto de sobornos y cohechos a funcionarios extranjeros en su declaración de renta:",
    "opcionTexto": "Rechazar la deducción con fundamento expreso en el artículo 107-1 del Estatuto Tributario y remitir copias a la Fiscalía General de la Nación.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Rechazar y remitir copias",
    "explicacion": "¡ACCIÓN CORRECTA! El artículo 107-1 del ET prohíbe taxativamente la deducción de pagos por actos de corrupción o soborno y ordena compulsa penal inmediata."
  },
  {
    "id": "caza_g3_087",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir una orden de embargo de salarios dentro de un proceso de cobro coactivo:",
    "opcionTexto": "Ordenar el embargo del 100% del salario mínimo mensual legal de un trabajador asalariado.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ordenar embargo del 100%",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El salario mínimo es legalmente inembargable en procesos ejecutivos fiscales (Art. 155 CST y Código General del Proceso)."
  },
  {
    "id": "caza_g3_088",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al constatar que en el cobro coactivo la obligación tributaria ya cumplió más de 5 años desde su exigibilidad sin interrupción ni suspensión del término:",
    "opcionTexto": "Declarar de oficio la prescripción de la acción de cobro conforme a las causales legales del artículo 817 del Estatuto Tributario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Declarar de oficio",
    "explicacion": "¡ACCIÓN CORRECTA! La prescripción de la acción de cobro opera a los 5 años y puede ser decretada de oficio o a solicitud de parte (Art. 817 ET)."
  },
  {
    "id": "caza_g3_089",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al constatar la prescripción de una obligación tributaria de cobro:",
    "opcionTexto": "Ocultar la prescripción y continuar enviando oficios amenazantes de embargo al contribuyente para inducirlo a pagar por miedo.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Ocultar y amenazar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / ABUSO DE AUTORIDAD! Exigir el pago de obligaciones formalmente prescritas mediante intimidación vulnera el debido proceso y la legalidad tributaria."
  },
  {
    "id": "caza_g3_090",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "En la fiscalización de retenciones en la fuente sobre compras:",
    "opcionTexto": "Verificar si el agente retenedor expidió los certificados de retención a los sujetos pasivos y cotejar la concordancia entre lo retenido y lo consignado a la DIAN.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar y cotejar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar expedición de certificados' y 'Cotejar con lo consignado' garantiza el control de la retención en la fuente (Art. 378 y 381 ET)."
  },
  {
    "id": "caza_g3_091",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al constatar que un agente retenedor no consignó las retenciones en la fuente practicadas dentro de los 2 meses siguientes al plazo fijado (Art. 402 Código Penal):",
    "opcionTexto": "Compulsar copias penales ante la Fiscalía General de la Nación por el presunto delito de omisión de agente retenedor o recaudador.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Compulsar copias",
    "explicacion": "¡ACCIÓN CORRECTA! La no consignación de retenciones en la fuente tipifica el delito del artículo 402 del CP y es deber ineludible del funcionario remitir la denuncia penal."
  },
  {
    "id": "caza_g3_092",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir un caso donde el agente retenedor no consignó las retenciones:",
    "opcionTexto": "Archivar el caso y prometer al retenedor que la DIAN nunca lo denunciará si le contrata como asesor privado en sus horas libres.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Archivar y prometer",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / CORRUPCIÓN GRAVÍSIMA! El conflicto de intereses y la omisión de denuncia penal constituyen faltas disciplinarias gravísimas y delitos penales."
  },
  {
    "id": "caza_g3_093",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al revisar una solicitud de corrección provocada por parte de un contribuyente con ocasión del Requerimiento Especial:",
    "opcionTexto": "Verificar que la corrección incluya el aumento del impuesto y la sanción de inexactitud reducida a la cuarta parte (Art. 709 ET).",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar aumento y sanción reducida' al 25% aplica el beneficio procesal de corrección provocada del Art. 709 del ET."
  },
  {
    "id": "caza_g3_094",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al proyectar un Requerimiento Especial:",
    "opcionTexto": "Incluir glosas genéricas e indeterminadas sin cuantificar los valores propuestos ni citar las normas sustanciales infringidas.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Incluir glosas genéricas",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / INDEBIDA MOTIVACIÓN! El Requerimiento Especial debe contener la cuantificación precisa de los tributos y sanciones propuestos y las razones sustentatorias (Art. 703 ET)."
  },
  {
    "id": "caza_g3_095",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al verificar los libros de contabilidad de un contribuyente que aplica normas NIIF:",
    "opcionTexto": "Conciliar las diferencias entre los marcos contables y las reglas fiscales conforme a lo dispuesto en el artículo 772-1 del Estatuto Tributario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Conciliar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Conciliar diferencias contables y fiscales' bajo el Art. 772-1 del ET es la herramienta técnica obligatoria para la fiscalización bajo NIIF."
  },
  {
    "id": "caza_g3_096",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al finalizar una auditoría tributaria donde no se hallaron inexactitudes ni irregularidades:",
    "opcionTexto": "Proyectar el auto de archivo debidamente motivado notificando al contribuyente el cierre exitoso de la investigación.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Proyectar auto de archivo",
    "explicacion": "¡ACCIÓN CORRECTA! 'Proyectar auto de archivo motivado' garantiza la seguridad jurídica del contribuyente cuando se desvirtúan los cargos (Art. 703 ET)."
  },
  {
    "id": "caza_g3_097",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al no hallar irregularidades en una auditoría a una empresa que le cae antipática:",
    "opcionTexto": "Inventar compras ficticias en el borrador del requerimiento especial para obligar a la empresa a pagar una sanción.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Inventar compras ficticias",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALSEDAD IDEOLÓGICA! Consignar hechos falsos en documentos públicos vulnera la legalidad y tipifica delito penal contra la fe pública."
  },
  {
    "id": "caza_g3_098",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al recibir un requerimiento de la Defensoría del Contribuyente y del Usuario Aduanero sobre la vulneración del debido proceso a un usuario:",
    "opcionTexto": "Revisar los antecedentes procesales, responder con claridad y adoptar los correctivos necesarios para salvaguardar las garantías ciudadanas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Revisar y responder",
    "explicacion": "¡ACCIÓN CORRECTA! 'Revisar antecedentes' y 'Responder a la Defensoría del Contribuyente' fortalece la transparencia y el respeto a los derechos ciudadanos."
  },
  {
    "id": "caza_g3_099",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Al tramitar una solicitud de levantamiento de medidas cautelares tras el pago integral de la obligación tributaria e intereses:",
    "opcionTexto": "Proyectar de inmediato el oficio a las entidades bancarias ordenando el desembargo de las cuentas bancarias del contribuyente.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Proyectar oficio de desembargo",
    "explicacion": "¡ACCIÓN CORRECTA! Una vez cancelada la obligación y costas, el ejecutor debe ordenar de inmediato el desembargo de los bienes y cuentas (Art. 837 ET)."
  },
  {
    "id": "caza_g3_100",
    "perfilTarget": "gestor_iii",
    "nivelCargo": "Profesional (Gestor III - Fiscalización y Tributario)",
    "contexto": "Habiéndose pagado en su totalidad la deuda fiscal hace 3 meses:",
    "opcionTexto": "Negarse a proyectar el desembargo de las cuentas aduciendo que el contribuyente debe pagar una 'propina de trámite' a los funcionarios.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Negarse a desembargar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / CONCUSIÓN! Retener indebidamente medidas cautelares o exigir cobros ilegales constituye delito de concusión y falta disciplinaria gravísima."
  }
],
    analista_iv: [
  {
    "id": "caza_a4_001",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir paquetes de declaraciones de renta físicas radicadas en entidades bancarias:",
    "opcionTexto": "Digitar con exactitud la información en el sistema Muisca, cotejar los totales de control y reportar los lotes procesados.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Digitar con",
    "explicacion": "¡ACCIÓN CORRECTA! 'Digitar', 'Cotejar' y 'Reportar lotes' son funciones nucleares operativas del nivel Técnico (Analista IV)."
  },
  {
    "id": "caza_a4_002",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Durante la revisión preliminar de una declaración de importación con presunta subfacturación:",
    "opcionTexto": "Modificar de manera unilateral la fórmula de valoración aduanera y crear una nueva subpartida arancelaria para el país.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Modificar de",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN RADICAL! Crear subpartidas arancelarias corresponde al Gobierno Nacional y formular criterios de valoración al Nivel Profesional/Directivo."
  },
  {
    "id": "caza_a4_003",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al detectar que un usuario radicó un recurso de reposición sin anexar la copia del poder de su abogado:",
    "opcionTexto": "Rechazar definitivamente el recurso y archivar el caso sin consultar al profesional sustanciador.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Rechazar definitivamente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Un analista técnico no resuelve sobre la admisibilidad de fondo de recursos jurídicos; debe preparar la constancia y elevar al profesional para que este requiera o decida."
  },
  {
    "id": "caza_a4_004",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el área de radicación y ventanilla única de correspondencia oficial:",
    "opcionTexto": "Radicar oportunamente las comunicaciones en el sistema de gestión documental, clasificar los anexos y distribuir a las dependencias competentes.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Radicar oportunamente",
    "explicacion": "¡ACCIÓN CORRECTA! 'Radicar', 'Clasificar' y 'Distribuir' representan el soporte operativo reglamentario del Analista IV."
  },
  {
    "id": "caza_a4_005",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al finalizar su turno en la mesa de control de acceso aduanero:",
    "opcionTexto": "Dejar los registros de ingreso de camiones en hojas sueltas sin ingresar al sistema porque ya es la hora de salida.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Dejar los",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / NEGLIGENCIA! El deber del técnico es registrar oportunamente las novedades y asegurar el cierre operativo del turno."
  },
  {
    "id": "caza_a4_006",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el apoyo a una diligencia de allanamiento tributario ordenada por la Dirección Seccional:",
    "opcionTexto": "Inventariar los libros contables encontrados, foliarlos secuencialmente y levantar el registro de custodia de las evidencias.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Inventariar los",
    "explicacion": "¡ACCIÓN CORRECTA! 'Inventariar', 'Foliar' y 'Custodiar' son actividades operacionales esenciales del nivel técnico en apoyo a la fiscalización."
  },
  {
    "id": "caza_a4_007",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir a un contribuyente que solicita asesoría jurídica sobre planeación tributaria patrimonial:",
    "opcionTexto": "Diseñar una estructura societaria en el exterior para que el usuario pague menos impuestos en Colombia.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Diseñar una",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN E INCOMPATIBILIDAD! Los servidores de la DIAN no asesoran privadamente en elusión ni planeación tributaria."
  },
  {
    "id": "caza_a4_008",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al apoyar el proceso de devoluciones automáticas:",
    "opcionTexto": "Comprobar que los certificados bancarios adjuntos coincidan con el titular del RUT y que la cuenta se encuentre activa en el sistema.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Comprobar que",
    "explicacion": "¡ACCIÓN CORRECTA! 'Comprobar coincidencias' y 'Verificar estado de cuentas' es la labor técnica de validación previa obligatoria."
  },
  {
    "id": "caza_a4_009",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al encontrar una inconsistencia aritmética en una liquidación privada de retención en la fuente:",
    "opcionTexto": "Ignorar la inconsistencia y no registrarla en la planilla de control para no demorar la entrega de su trabajo.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Ignorar la",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El rol del técnico es identificar y reportar inconsistencias aritméticas o documentales para que el área de fiscalización actúe."
  },
  {
    "id": "caza_a4_010",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En la administración del almacén de pruebas de la división de fiscalización aduanera:",
    "opcionTexto": "Registrar las entradas y salidas de muestras en el libro de almacén y mantener rotulados los paquetes de acuerdo con el número de expediente.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Registrar las",
    "explicacion": "¡ACCIÓN CORRECTA! 'Registrar entradas/salidas' y 'Rotular' salvaguardan la cadena de custodia de las pruebas aduaneras."
  },
  {
    "id": "caza_a4_011",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al observar lentitud en el aplicativo informático Muisca:",
    "opcionTexto": "Desinstalar el software de los servidores de la sede seccional e instalar una versión de prueba descargada de internet.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Desinstalar el",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Las modificaciones en infraestructura y software institucional corresponden a la Subdirección de TI y a protocolos estrictos de ciberseguridad."
  },
  {
    "id": "caza_a4_012",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el apoyo operativo a la notificación de actos administrativos tributarios:",
    "opcionTexto": "Preparar las citaciones de notificación personal, verificar las direcciones en el RUT y registrar las constancias de entrega por correo certificado.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Preparar las",
    "explicacion": "¡ACCIÓN CORRECTA! 'Preparar citaciones' y 'Registrar constancias de notificación' es un soporte técnico crítico para evitar nulidades por indebida notificación."
  },
  {
    "id": "caza_a4_013",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al detectar que un usuario anexó un billete entre los documentos de una solicitud de inscripción en el RUT:",
    "opcionTexto": "Recibir el dinero en efectivo como propina de agilización y tramitar el RUT prioritariamente.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Recibir el",
    "explicacion": "¡DISTRACTOR POR DELITO / CORRUPCIÓN! El trámite del RUT es estrictamente gratuito; recibir dádivas tipifica el delito de cohecho."
  },
  {
    "id": "caza_a4_014",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al apoyar la consolidación del informe mensual de recaudo tributario de la seccional:",
    "opcionTexto": "Totalizar las cifras recaudadas por cada concepto impositivo y generar los cuadros estadísticos en las plantillas oficiales.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Totalizar las",
    "explicacion": "¡ACCIÓN CORRECTA! 'Totalizar cifras' y 'Generar cuadros estadísticos' corresponde a las funciones técnicas de consolidación de información."
  },
  {
    "id": "caza_a4_015",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir una caja de archivo histórico sin rotular:",
    "opcionTexto": "Guardarla en el rincón más oscuro del depósito sin abrirla para no tener que clasificar su contenido.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardarla en",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El rol técnico exige clasificar, organizar e inventariar los fondos acumulados según las tablas de retención documental."
  },
  {
    "id": "caza_a4_016",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En la atención en ventanilla de quioscos de autogestión de la DIAN:",
    "opcionTexto": "Orientar al ciudadano en el uso de los servicios informáticos electrónicos para la generación de su firma electrónica o copia del RUT.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Orientar al",
    "explicacion": "¡ACCIÓN CORRECTA! 'Orientar al ciudadano' en herramientas digitales es un deber del nivel técnico en atención al usuario."
  },
  {
    "id": "caza_a4_017",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al observar que una empresa adeuda millones de pesos en impuestos:",
    "opcionTexto": "Redactar y firmar el mandamiento de pago coactivo ordenando el embargo inmediato de los bienes de la empresa.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Redactar y",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Proferir mandamientos de pago y ordenar embargos es facultad privativa del Funcionario Ejecutor de Cobranzas (Nivel Profesional/Directivo)."
  },
  {
    "id": "caza_a4_018",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al realizar el cotejo documental previo de una solicitud de devolución de saldo a favor:",
    "opcionTexto": "Comprobar la existencia del poder conferido, verificar la presentación de la cédula del solicitante y elaborar la lista de chequeo de requisitos formales.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Comprobar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Elaborar lista de chequeo' y 'Comprobar requisitos formales' es la función técnica de tamizaje documental."
  },
  {
    "id": "caza_a4_019",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al encontrar un error tipográfico en el número de identificación de un contribuyente en una base de datos:",
    "opcionTexto": "Dejar el error sin corregir ni reportar aduciendo que la base de datos ya está muy desactualizada.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Dejar el",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El analista técnico debe reportar y depurar las inconsistencias en los registros para mantener la calidad de los datos institucionales."
  },
  {
    "id": "caza_a4_020",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el apoyo técnico a la división de cobranzas:",
    "opcionTexto": "Alimentar la matriz de seguimiento con los acuerdos de pago vigentes y registrar los abonos reportados en los extractos de recaudo bancario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Alimentar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Alimentar matriz' y 'Registrar abonos' mantiene actualizada la cartera de la administración tributaria."
  },
  {
    "id": "caza_a4_021",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al atender una llamada de un contribuyente que formula una queja contra un funcionario:",
    "opcionTexto": "Colgar la llamada inmediatamente y bloquear el número telefónico para evitar inconvenientes.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Colgar la",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / FALTA AL SERVICIO! El protocolo de atención al ciudadano obliga a registrar la queja en el sistema PQRS y darle trámite formal."
  },
  {
    "id": "caza_a4_022",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Durante una jornada de inspección física de equipaje en aeropuerto internacional:",
    "opcionTexto": "Operar los equipos de escáner de rayos X según el protocolo técnico y alertar al Gestor aduanero sobre imágenes con densidad sospechosa.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Operar los",
    "explicacion": "¡ACCIÓN CORRECTA! 'Operar equipos técnicos' y 'Alertar anomalías' es la función específica del nivel técnico en control de frontera."
  },
  {
    "id": "caza_a4_023",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al identificar mercancía con presunción de contrabando en la cinta de equipajes:",
    "opcionTexto": "Aprobar el acta de decomiso definitivo de la mercancía sin que intervenga el funcionario profesional competente.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Aprobar el",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! El decomiso definitivo es un acto administrativo sustancial reservado a la autoridad aduanera competente (Nivel Profesional/Directivo)."
  },
  {
    "id": "caza_a4_024",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el manejo del archivo de gestión de la división jurídica tributaria:",
    "opcionTexto": "Foliar rigurosamente los expedientes en orden cronológico, elaborar la hoja de control de préstamos y conservar los legajos en buen estado físico.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Foliar rigurosamente",
    "explicacion": "¡ACCIÓN CORRECTA! 'Foliar', 'Elaborar hojas de control' y 'Conservar expedientes' son deberes técnicos archivísticos según el Acuerdo 002 de 2014 del AGN."
  },
  {
    "id": "caza_a4_025",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al advertir que la fotocopiadora de la seccional tiene una fuga de tinta:",
    "opcionTexto": "Desarmar los circuitos electrónicos internos del equipo sin tener conocimientos de ingeniería electrónica.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Desarmar los",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN OPERATIVA! El técnico debe reportar la novedad al área de mantenimiento o soporte técnico del proveedor, no intervenir equipos especializados sin certificación."
  },
  {
    "id": "caza_a4_026",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el apoyo a la notificación electrónica de resoluciones de sanción:",
    "opcionTexto": "Generar las certificaciones de entrega digital en la plataforma de correo electrónico certificado y anexarlas al expediente digital correspondiente.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Generar las",
    "explicacion": "¡ACCIÓN CORRECTA! 'Generar certificaciones digitales' y 'Anexar al expediente' asegura la constancia procesal del acto notificado (Art. 566-1 E.T.)."
  },
  {
    "id": "caza_a4_027",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al constatar que un contribuyente no firmó el formulario de declaración tributaria presentado en bancos:",
    "opcionTexto": "Falsificar la firma del contribuyente para que el formulario no sea devuelto por el sistema de captura de datos.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Falsificar la",
    "explicacion": "¡DISTRACTOR POR DELITO DE FALSEDAD! Falsificar firmas en documentos públicos es un delito grave; la ley prevé la causal de declaración que se tiene por no presentada (Art. 580 E.T.)."
  },
  {
    "id": "caza_a4_028",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En la recepción de declaraciones de importación simplificada:",
    "opcionTexto": "Verificar que la factura comercial contenga la descripción de la mercancía y cotejar los aranceles liquidados contra la tabla arancelaria oficial.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar que",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar' y 'Cotejar' representan el control documental preventivo asignado al personal técnico."
  },
  {
    "id": "caza_a4_029",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al observar que un paquete de correspondencia judicial lleva 20 días en su escritorio sin radicar:",
    "opcionTexto": "Ocultar la correspondencia bajo una pila de revistas para que la jefatura no se percate de la demora.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Ocultar la",
    "explicacion": "¡DISTRACTOR POR OMISIÓN Y OCULTAMIENTO! Ocultar correspondencia oficial vulnera el régimen disciplinario y lesiona gravemente los términos procesales."
  },
  {
    "id": "caza_a4_030",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el apoyo logístico al Comité Seccional de Gestión y Desempeño:",
    "opcionTexto": "Enviar oportunamente las citaciones a los miembros, organizar el salón de reuniones y preparar la lista de asistencia y carpetas informativas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Enviar oportunamente",
    "explicacion": "¡ACCIÓN CORRECTA! 'Enviar citaciones', 'Organizar' y 'Preparar carpetas' son las responsabilidades logísticas y operativas del Analista IV."
  },
  {
    "id": "caza_a4_031",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al presentarse una discrepancia doctrinal entre dos resoluciones de la DIAN:",
    "opcionTexto": "Dictar un auto resolviendo cuál doctrina prevalece y prohibir a los auditores aplicar la otra resolución.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Dictar un",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La unificación y fijación de doctrina vinculante es atribución exclusiva de la Dirección de Gestión Jurídica (Decreto 1742 de 2020)."
  },
  {
    "id": "caza_a4_032",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al realizar el back-up o respaldo de los archivos de expedientes digitalizados:",
    "opcionTexto": "Verificar la integridad de las copias de seguridad en el repositorio institucional y reportar al supervisor el registro de transferencias completadas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar la",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar integridad' y 'Reportar transferencias' asegura la continuidad operativa y la preservación digital de la memoria institucional."
  },
  {
    "id": "caza_a4_033",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir un lote de mercancías aprehendidas en zona primaria sin inventario adjunto:",
    "opcionTexto": "Realizar el conteo físico detallado, verificar estado y empaques, y elaborar el acta técnica de recepción para firma conjunta con el aprehensor.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Realizar el",
    "explicacion": "¡ACCIÓN CORRECTA! 'Realizar conteo físico', 'Verificar estado' y 'Elaborar acta técnica' garantizan la trazabilidad y la responsabilidad administrativa sobre bienes aprehendidos."
  },
  {
    "id": "caza_a4_034",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir un derecho de petición en la ventanilla de radicación presencial:",
    "opcionTexto": "Radicar el documento inmediatamente en el sistema de gestión documental, estampar el sello con número de radicado y fecha exacta, y entregar la copia con el comprobante al usuario.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Radicar y entregar comprobante",
    "explicacion": "¡ACCIÓN CORRECTA! 'Radicar inmediatamente' y 'Entregar comprobante' es la función técnica nuclear de recepción documental (Ley 1437 y 1755)."
  },
  {
    "id": "caza_a4_035",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir una solicitud ciudadana de exoneración del impuesto de renta:",
    "opcionTexto": "Emitir y firmar una resolución técnica exonerando de impuestos al peticionario por considerar justa su petición.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Emitir y firmar resolución",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La expedición de actos administrativos que resuelven peticiones sustanciales es privativa del nivel profesional o directivo con delegación; el técnico solo radica y proyecta bajo supervisión."
  },
  {
    "id": "caza_a4_036",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al llegar correspondencia física urgente dirigida a la División de Fiscalización a última hora de la tarde:",
    "opcionTexto": "Guardarla en el cajón de su escritorio sin radicar y esperar a la semana siguiente para registrarla en el sistema.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar sin radicar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Toda correspondencia oficial debe ser radicada en estricto orden cronológico de ingreso para salvaguardar los términos perentorios de ley."
  },
  {
    "id": "caza_a4_037",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al organizar un expediente tributario físico de 300 folios conforme a las pautas del Archivo General de la Nación:",
    "opcionTexto": "Foliar en la esquina superior derecha con lápiz de mina negra suave, en orden cronológico ascendente y sin tachaduras ni enmendaduras.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Foliar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Foliar' en el extremo superior derecho con lápiz negro sin enmiendas es la regla archivística técnica obligatoria (Acuerdo 002 de 2014 del AGN)."
  },
  {
    "id": "caza_a4_038",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al advertir que en un expediente judicial faltan 10 folios intermedios:",
    "opcionTexto": "Arrancar todas las hojas restantes del expediente y botarlo a la caneca de basura para que no se note la falta.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Arrancar y botar expediente",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / DESTRUCCIÓN DOCUMENTAL! Alterar o destruir expedientes constituye delito penal gravísimo contra la fe pública y la administración pública."
  },
  {
    "id": "caza_a4_039",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al percatarse de que un expediente físico tiene hojas rasgadas y desprendidas:",
    "opcionTexto": "Ignorar el deterioro y dejar las hojas sueltas sin reportar al supervisor ni aplicar cintas térmicas de conservación.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Ignorar el deterioro",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El técnico custodio del archivo tiene el deber de velar por la integridad física y conservación preventiva del patrimonio documental institucional."
  },
  {
    "id": "caza_a4_040",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al verificar los documentos aportados por un ciudadano para la inscripción en el RUT de persona natural:",
    "opcionTexto": "Cotejar el documento de identidad original, verificar la concordancia de la dirección reportada y validar la actividad económica según la clasificación CIIU vigente.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Cotejar y verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Cotejar documento de identidad' y 'Validar actividad económica' asegura la calidad y consistencia del Registro Único Tributario (Decreto 1625 de 2016)."
  },
  {
    "id": "caza_a4_041",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al atender a un ciudadano en el quiosco de autogestión de la DIAN:",
    "opcionTexto": "Cobrarle cincuenta mil pesos en efectivo por concepto de 'honorarios técnicos' para crearle la cuenta de usuario Muisca.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Cobrar honorarios",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / CONCUSIÓN! Todos los trámites y servicios de la DIAN son absolutamente gratuitos; cobrar por trámites oficiales constituye delito de concusión."
  },
  {
    "id": "caza_a4_042",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al notar que el sistema de asignación de turnos presenciales presenta una fila de 40 usuarios esperando:",
    "opcionTexto": "Abandonar el puesto de atención sin aviso para salir a hacer compras personales en el centro comercial vecino.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Abandonar el puesto",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / ABANDONO DEL CARGO! Dejar desatendido el puesto de atención ciudadana vulnera el deber de diligencia y continuidad del servicio público (Ley 1952 de 2019)."
  },
  {
    "id": "caza_a4_043",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "En el recinto de almacenamiento aduanero, al ingresar un lote de bultos aprehendidos por la Policía Fiscal y Aduanera (POLFA):",
    "opcionTexto": "Realizar el conteo físico, pesar la mercancía en báscula calibrada, verificar seriales y proyectar el acta técnica de recepción para firma conjunta.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Realizar conteo y pesar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Realizar conteo físico', 'Pesar' y 'Proyectar acta de recepción' es la responsabilidad operativa del nivel técnico en depósitos aduaneros."
  },
  {
    "id": "caza_a4_044",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al constatar que en el lote de mercancías aprehendidas hay teléfonos celulares de alta gama:",
    "opcionTexto": "Tomar dos celulares para su uso personal y registrar en el acta que la caja llegó abierta y vacía desde el operativo.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Tomar celulares y falsear acta",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / HURTO Y FALSEDAD! Apropiarse de bienes bajo custodia oficial es delito grave de peculado por apropiación y destitución fulminante."
  },
  {
    "id": "caza_a4_045",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al descargar mercancías en la bodega de almacenamiento y notar que un saco de azúcar importado se rompió:",
    "opcionTexto": "Ignorar el derrame y permitir que las plagas contaminen el resto del lote almacenado.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Ignorar el derrame",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El técnico encargado debe realizar el reempaque inmediato, limpiar el área y registrar la novedad para preservar las mercancías bajo custodia estatal."
  },
  {
    "id": "caza_a4_046",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al registrar la salida de expedientes tributarios en préstamo interno para un profesional de cobranzas:",
    "opcionTexto": "Diligenciar la planilla de préstamo de expedientes, consignar la fecha, número de folios, nombre del funcionario solicitante y recabar su firma de recibido.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Diligenciar planilla de préstamo",
    "explicacion": "¡ACCIÓN CORRECTA! 'Diligenciar planilla de préstamo' garantiza la trazabilidad y la responsabilidad administrativa sobre la custodia de expedientes oficiales."
  },
  {
    "id": "caza_a4_047",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al solicitarle un expediente un amigo personal que no trabaja en la DIAN:",
    "opcionTexto": "Prestarle el expediente original completo para que se lo lleve a su casa durante el fin de semana.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Prestar expediente original a particular",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / VIOLACIÓN DE CUSTODIA Y RESERVA! Los expedientes administrativos son bienes públicos reservados y no pueden salir de la sede ni entregarse a particulares."
  },
  {
    "id": "caza_a4_048",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al vencer el plazo de 15 días del préstamo de un expediente a otra dependencia sin haber sido retornado:",
    "opcionTexto": "Omitir el cobro y no realizar ningún requerimiento de devolución del expediente prestado.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Omitir el cobro",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El técnico de archivo tiene la obligación de realizar el seguimiento periódico y requerir la devolución de expedientes vencidos."
  },
  {
    "id": "caza_a4_049",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al digitalizar paquetes de declaraciones de importación para el archivo electrónico institucional:",
    "opcionTexto": "Escanear a resolución reglamentaria (300 ppp en escala de grises o color), verificar la legibilidad de firmas y códigos de barras, e indexar con los metadatos correspondientes.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Escanear e indexar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Escanear a resolución reglamentaria' e 'Indexar metadatos' cumple con los estándares técnicos de digitalización y preservación digital del AGN."
  },
  {
    "id": "caza_a4_050",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al escanear un documento donde una página quedó borrosa y recortada:",
    "opcionTexto": "Cargar el archivo borroso al repositorio oficial y destruir de inmediato el papel original para que nadie se dé cuenta del error.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Cargar borroso y destruir original",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / DESTRUCCIÓN ILEGAL! La eliminación de originales sin verificación de calidad técnica y sin autorización del Comité de Archivo está terminantemente prohibida."
  },
  {
    "id": "caza_a4_051",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al advertir que el escáner de alta velocidad está arrugando las hojas de los expedientes antiguos:",
    "opcionTexto": "Continuar escaneando a máxima velocidad sin importar que los folios se rompan.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Continuar escaneando",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Debe suspenderse la digitalización mecánica de inmediato y aplicar digitalización manual tipo cama plana para evitar el daño irreversible del documento."
  },
  {
    "id": "caza_a4_052",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al preparar los paquetes de correspondencia física que serán remitidos por correo certificado:",
    "opcionTexto": "Verificar la exactitud de las direcciones postales, confrontar los números de guía con las planillas de envío y archivar los desprendibles de radicación.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar y confrontar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar direcciones' y 'Confrontar números de guía' previene devoluciones de correo y garantiza la eficacia de las notificaciones oficiales."
  },
  {
    "id": "caza_a4_053",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir una queja de un usuario insatisfecho con la demora en su trámite de devolución:",
    "opcionTexto": "Insultar verbalmente al usuario y amenazarlo con bloquearle su RUT en el sistema Muisca.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Insultar y amenazar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / MALTRATO AL CIUDADANO! El servidor público debe brindar un trato respetuoso y cortés; el maltrato verbal y la amenaza de represalias tipifica falta disciplinaria grave."
  },
  {
    "id": "caza_a4_054",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al llegar un ciudadano de la tercera edad que no sabe cómo solicitar una cita virtual:",
    "opcionTexto": "Negarse a orientarlo y decirle que si no sabe usar internet no tiene derecho a ser atendido.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Negarse a orientar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / FALTA DE ORIENTACIÓN! La Ley 1437 y la política de atención preferente ordenan brindar asistencia y orientación a personas de especial protección constitucional."
  },
  {
    "id": "caza_a4_055",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al elaborar el informe estadístico semanal de trámites radicados en el punto de contacto:",
    "opcionTexto": "Consolidar las cifras de atenciones presenciales, desagregar por tipo de trámite y remitir oportunamente el consolidado a la coordinación técnica.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Consolidar y remitir",
    "explicacion": "¡ACCIÓN CORRECTA! 'Consolidar cifras' y 'Remitir reporte estadístico' aporta información veraz para el monitoreo del servicio y la toma de decisiones operativas."
  },
  {
    "id": "caza_a4_056",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al entregar una copia del RUT a un contribuyente que comparece personalmente:",
    "opcionTexto": "Exigirle como requisito previo e inventado que compre una póliza de seguros privada con una agencia recomendada.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Exigir póliza inventada",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La exigencia de requisitos no previstos en la ley está prohibida por la Ley Antitrámites (Decreto Ley 019 de 2012)."
  },
  {
    "id": "caza_a4_057",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al notar que el formato único de inventario documental (FUID) tiene casillas en blanco y datos incompletos:",
    "opcionTexto": "Firmar la transferencia secundaria de expedientes sin subsanar las omisiones de información.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Firmar sin subsanar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El FUID debe ser diligenciado de manera exhaustiva y exacta antes de realizar transferencias documentales al archivo central (Acuerdo 004 de 2019 del AGN)."
  },
  {
    "id": "caza_a4_058",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al gestionar los suministros de papelería y tóner del área de trabajo:",
    "opcionTexto": "Llevar el kardex de entradas y salidas de elementos de consumo, verificar existencias y solicitar el reabastecimiento antes de agotarse el stock mínimo.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Llevar kardex y solicitar reabastecimiento",
    "explicacion": "¡ACCIÓN CORRECTA! 'Llevar kardex' y 'Verificar existencias' asegura la continuidad operativa y el uso racional de los recursos de la dependencia."
  },
  {
    "id": "caza_a4_059",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al necesitar resmas de papel para la impresora de su casa:",
    "opcionTexto": "Llevarse 5 cajas de resmas de papel de la DIAN en su maletín personal para el uso escolar de sus hijos.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Llevarse papel institucional",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / PECULADO POR APROPIACIÓN! La sustracción de bienes de consumo público constituye delito penal y falta disciplinaria grave."
  },
  {
    "id": "caza_a4_060",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al constatar que en el depósito de suministros hay una fuga de agua que gotea sobre las cajas de formularios oficiales:",
    "opcionTexto": "No avisar al área de mantenimiento ni mover las cajas porque 'ese no es su trabajo'.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "No avisar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! El servidor tiene el deber de proteger los bienes públicos y reportar oportunamente cualquier riesgo que afecte el patrimonio institucional."
  },
  {
    "id": "caza_a4_061",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al apoyar operativamente la preparación de la sala para la audiencia pública de rendición de cuentas:",
    "opcionTexto": "Verificar el funcionamiento del equipo audiovisual, verificar el listado de asistencia y entregar las escarapelas a los ciudadanos asistentes.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar equipos y entregar escarapelas",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar equipos' y 'Gestionar asistencia' constituye el apoyo logístico propio del nivel técnico en eventos de participación ciudadana."
  },
  {
    "id": "caza_a4_062",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Durante la audiencia de rendición de cuentas:",
    "opcionTexto": "Tomar el micrófono y dar el discurso central de política fiscal en reemplazo del Director General de la DIAN sin delegación oficial.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Dar el discurso central",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! La vocería institucional de rendición de cuentas corresponde al Director General o a los directivos delegados formalmente."
  },
  {
    "id": "caza_a4_063",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir las preguntas por escrito formuladas por los ciudadanos durante la audiencia pública:",
    "opcionTexto": "Tirarlas a la basura para que los directivos terminen rápido el evento y todos salgan temprano a almorzar.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Tirar preguntas a la basura",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / VULNERACIÓN DE TRANSPARENCIA! Las preguntas ciudadanas deben ser recopiladas y contestadas conforme a las normas de rendición de cuentas del DAFP."
  },
  {
    "id": "caza_a4_064",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al expedir una certificación técnica de documentos existentes en el archivo de gestión bajo su custodia:",
    "opcionTexto": "Cotejar el texto con el expediente original y certificar únicamente que el documento reposa en los archivos institucionales conforme a las instrucciones recibidas.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Cotejar y certificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Cotejar' y 'Certificar existencia física' de documentos custodiados atiende al principio de autenticidad y fe pública administrativa."
  },
  {
    "id": "caza_a4_065",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al certificar la existencia de un expediente en el archivo:",
    "opcionTexto": "Añadir en la certificación que el contribuyente es culpable de evasión tributaria y merece ir a prisión.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Añadir juicios de culpabilidad",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN! Las certificaciones archivísticas son meramente fácticas; emitir juicios de valor o imputaciones penales extralimita las funciones y vulnera la presunción de inocencia."
  },
  {
    "id": "caza_a4_066",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir una solicitud formal de copia de un auto de archivo por parte del apoderado legal del contribuyente:",
    "opcionTexto": "Ignorar la solicitud durante 6 meses porque considera que los abogados siempre complican los trámites sencillos.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Ignorar la solicitud",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Las peticiones de copias deben resolverse dentro de los 10 días siguientes a su recepción (Ley 1437 / Ley 1755, Art. 14)."
  },
  {
    "id": "caza_a4_067",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al verificar el cumplimiento de los términos de conservación en el archivo de gestión según las TRD:",
    "opcionTexto": "Identificar los expedientes que ya cumplieron el tiempo de retención en gestión y preparar la transferencia primaria al archivo central de la Seccional.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Identificar y preparar transferencia",
    "explicacion": "¡ACCIÓN CORRECTA! 'Identificar tiempos de retención' y 'Preparar transferencia primaria' asegura el ciclo vital del documento archivístico (Ley 594 de 2000)."
  },
  {
    "id": "caza_a4_068",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al ver que las cajas de archivo ocupan espacio en el pasillo de la oficina:",
    "opcionTexto": "Vender las cajas de expedientes tributarios a una recicladora informal de cartón para despejar el pasillo.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Vender cajas a recicladora",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / DELITO GRAVÍSIMO! La enajenación o eliminación ilegal de archivos públicos constituye delito penal y violación directa a la Ley General de Archivos."
  },
  {
    "id": "caza_a4_069",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al notar que en el archivo central hay plagas de polillas royendo las carpetas de expedientes históricos:",
    "opcionTexto": "Cerrar la puerta con llave y no alertar a nadie para no tener que participar en la jornada de fumigación.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Cerrar y no alertar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La conservación documental exige prevención biológica inmediata para salvaguardar la memoria institucional y evitar pérdidas de patrimonio."
  },
  {
    "id": "caza_a4_070",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al atender una llamada telefónica ciudadana sobre los requisitos para actualizar el correo electrónico en el RUT:",
    "opcionTexto": "Explicar con claridad los pasos de autogestión en el portal web institucional o el agendamiento de cita en caso de requerir validación presencial.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Explicar con claridad",
    "explicacion": "¡ACCIÓN CORRECTA! 'Explicar con claridad' es la esencia de la orientación al usuario y la facilitación del cumplimiento voluntario."
  },
  {
    "id": "caza_a4_071",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al responder la llamada de un ciudadano:",
    "opcionTexto": "Colgarle el teléfono de inmediato al ciudadano gritándole que llame cuando la seccional tenga ganas de trabajar.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Colgar y gritar",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALTA DISCIPLINARIA! El trato grosero y descortés al usuario vulnera las normas del servicio público y amerita investigación disciplinaria."
  },
  {
    "id": "caza_a4_072",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al dejar sonando el teléfono institucional de orientación al ciudadano durante 2 horas continuas:",
    "opcionTexto": "Poner el teléfono en modo silencio para escuchar música con audífonos sin ser interrumpido.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Poner en silencio",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La desatención voluntaria de los canales de atención asignados constituye incumplimiento grave de los deberes del cargo."
  },
  {
    "id": "caza_a4_073",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir las planillas de asistencia a capacitaciones del talento humano seccional:",
    "opcionTexto": "Digitar los datos de los participantes en el módulo de gestión del talento humano y verificar que no existan registros dobles.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Digitar y verificar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Digitar' y 'Verificar registros' en el sistema asegura la actualización de las historias laborales y el seguimiento al PIC."
  },
  {
    "id": "caza_a4_074",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al digitar los registros de asistencia a capacitación:",
    "opcionTexto": "Incluir en la lista a su compadre que estuvo de vacaciones para que reciba la certificación y los puntos para el concurso.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Incluir falsamente en la lista",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALSEDAD EN DOCUMENTO PÚBLICO! Registrar asistencias ficticias en documentos públicos es conducta punible penal y disciplinariamente."
  },
  {
    "id": "caza_a4_075",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al observar que las planillas de asistencia físicas no coinciden con los nombres de los asistentes reales al curso:",
    "opcionTexto": "Subir los datos erróneos al sistema sin cotejar ni pedir aclaración al capacitador.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Subir datos erróneos",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La función técnica de captura de datos exige verificación y filtro de consistencia antes de la incorporación al sistema."
  },
  {
    "id": "caza_a4_076",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al cotejar el inventario de bienes muebles de su dependencia con el reporte contable institucional:",
    "opcionTexto": "Constatar la presencia física de cada bien mediante su placa de inventario y registrar en el acta los bienes en buen estado, en desuso o deteriorados.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Constatar y registrar en acta",
    "explicacion": "¡ACCIÓN CORRECTA! 'Constatar placas' y 'Registrar estado en acta' respalda la exactitud del inventario de bienes del Estado."
  },
  {
    "id": "caza_a4_077",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al notar que una silla ergonómica de su puesto tiene una rueda suelta:",
    "opcionTexto": "Llevarse la silla a su casa y reportar en el sistema que la silla fue robada por visitantes desconocidos.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Llevarse la silla y denunciar falso robo",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / PECULADO Y DENUNCIA FALSA! Apoderarse de bienes institucionales e inventar denuncias falsas acarrea destitución y cárcel."
  },
  {
    "id": "caza_a4_078",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al encontrar una impresora dañada en el pasillo durante 6 meses acumulando polvo:",
    "opcionTexto": "Pasar de largo sin informar al área de almacén para que tramite el mantenimiento o la baja de inventario.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Pasar de largo",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La desidia ante los activos públicos deteriorados contraviene el principio de diligencia y cuidado de los bienes estatales."
  },
  {
    "id": "caza_a4_079",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al preparar los expedientes que serán microfilmados o transferidos al archivo histórico:",
    "opcionTexto": "Retirar ganchos metálicos, clips y grapas que puedan oxidarse, y limpiar mecánicamente el polvo con brocha de cerdas suaves.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Retirar material oxidable y limpiar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Retirar ganchos oxidables' y 'Limpiar mecánicamente' es la pauta técnica de primeros auxilios y conservación preventiva del AGN."
  },
  {
    "id": "caza_a4_080",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al preparar documentos para archivo:",
    "opcionTexto": "Pegar los folios rotos con cinta adhesiva transparente comercial de empaque de cajas.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Pegar con cinta adhesiva común",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN TÉCNICA / MALA PRÁCTICA! Las cintas comerciales degradan el papel con ácidos y manchas irreversibles; el AGN prohíbe su uso en archivos públicos."
  },
  {
    "id": "caza_a4_081",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al notar que una caja de expedientes históricos tiene hongos visibles en las tapas:",
    "opcionTexto": "Guardarla junto a los expedientes sanos sin aislarla ni reportar el riesgo biológico.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Guardar sin aislar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La presencia de hongos exige aislamiento preventivo inmediato para evitar la contaminación cruzada del acervo documental."
  },
  {
    "id": "caza_a4_082",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al gestionar la correspondencia devuelta por la empresa de mensajería postal con la causal 'dirección errada':",
    "opcionTexto": "Registrar la causal de devolución en el sistema de gestión documental y entregar el sobre con la constancia al profesional del caso para trámite de notificación por aviso.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Registrar y entregar para notificación por aviso",
    "explicacion": "¡ACCIÓN CORRECTA! 'Registrar causal de devolución' y 'Entregar para trámite por aviso' viabiliza la notificación subsidiaria del artículo 568 del Estatuto Tributario."
  },
  {
    "id": "caza_a4_083",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir un sobre de correspondencia devuelta por correo:",
    "opcionTexto": "Romper el sobre con la constancia de devolución y arrojarlo al inodoro para no tener que registrar la novedad.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Romper y arrojar al inodoro",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / DESTRUCCIÓN DE EVIDENCIA! La constancia de devolución postal es prueba procesal vital para acreditar el intento de notificación."
  },
  {
    "id": "caza_a4_084",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir sobres devueltos por el correo:",
    "opcionTexto": "Acumularlos en un rincón durante meses sin informar a los abogados ni registrar las novedades en el sistema.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Acumular sin informar",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La no gestión oportuna de las devoluciones de correo provoca la prescripción o caducidad de los actos tributarios."
  },
  {
    "id": "caza_a4_085",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al custodiar el sello seco y fechador oficial de radicación de la Seccional:",
    "opcionTexto": "Mantenerlos bajo llave al finalizar la jornada laboral y evitar que personas no autorizadas hagan uso de los sellos institucionales.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Mantener bajo llave",
    "explicacion": "¡ACCIÓN CORRECTA! 'Mantener bajo llave' los sellos de radicación previene radicaciones fraudulentas o antedatadas que comprometan la fe pública."
  },
  {
    "id": "caza_a4_086",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al pedirle un tramitador externo que le preste el sello oficial de radicación durante la hora de almuerzo:",
    "opcionTexto": "Entregarle el sello oficial al tramitador a cambio de un almuerzo en un restaurante elegante.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Entregar el sello al tramitador",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / COHECHO Y FALSA FE! Entregar sellos institucionales a terceros particulares es una falta gravísima que facilita fraudes procesales."
  },
  {
    "id": "caza_a4_087",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al notar que el fechador oficial de radicación tiene la fecha trabada en el día anterior:",
    "opcionTexto": "Continuar radicando documentos del día de hoy con la fecha equivocada de ayer sin corregir el fechador.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Continuar radicando con fecha equivocada",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Estampar fechas inexactas en documentos públicos altera la certeza de los términos procesales y puede acarrear nulidades."
  },
  {
    "id": "caza_a4_088",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al atender a una persona en situación de discapacidad visual que requiere radicar un escrito:",
    "opcionTexto": "Leerle pausadamente el contenido del radicado, verificar sus datos y asistirle con calidez en la suscripción del acta correspondiente.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Leer y asistir con calidez",
    "explicacion": "¡ACCIÓN CORRECTA! 'Leer y asistir' materializa los principios de accesibilidad, trato preferente y enfoque diferencial en la administración pública."
  },
  {
    "id": "caza_a4_089",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al llegar un usuario con discapacidad motora a la ventanilla:",
    "opcionTexto": "Decirle que suba por las escaleras sin encender el ascensor de accesibilidad porque gasta demasiada energía eléctrica.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Negar el ascensor de accesibilidad",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / VULNERACIÓN DE DERECHOS! Negar los ajustes razonables a personas con discapacidad vulnera la Convención Internacional sobre los Derechos de las Personas con Discapacidad."
  },
  {
    "id": "caza_a4_090",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al ver que un usuario en silla de ruedas no puede alcanzar la altura de la ventanilla de radicación:",
    "opcionTexto": "Quedarse sentado mirando la pantalla sin levantarse ni brindar una solución de atención adecuada.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Quedarse sentado",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! La orientación y servicio al ciudadano exige empatía, proactividad y disposición inmediata para atender a personas de especial protección."
  },
  {
    "id": "caza_a4_091",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir las órdenes de comparendo aduanero para su archivo e incorporación en el sistema Muisca:",
    "opcionTexto": "Verificar la existencia de las firmas de los aprehensores y del conductor, digitar el número consecutivo y archivar en la carpeta correspondiente.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Verificar firmas y digitar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Verificar firmas' y 'Digitar número consecutivo' asegura el control probatorio y la trazabilidad del proceso sancionatorio aduanero."
  },
  {
    "id": "caza_a4_092",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al archivar una orden de comparendo aduanero:",
    "opcionTexto": "Modificar con corrector líquido el número de placas del vehículo infractor para favorecer a un transportador amigo.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Modificar con corrector líquido",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALSEDAD MATERIAL! Adulterar documentos públicos mediante raspaduras o enmiendas es delito penal de falsedad material."
  },
  {
    "id": "caza_a4_093",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al percatarse de que un lote de órdenes de comparendo no fue ingresado al sistema hace más de un año:",
    "opcionTexto": "Dejar los documentos empolvándose en el sótano sin reportar el retraso a la jefatura de la división.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Dejar empolvándose",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD! Omitir el ingreso oportuno de comparendos genera impunidad y prescripción de las facultades sancionatorias del Estado."
  },
  {
    "id": "caza_a4_094",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al colaborar en la elaboración del inventario físico anual de los almacenes generales de la DIAN:",
    "opcionTexto": "Realizar el conteo por muestreo físico de las cajas, cotejar los códigos de barras con el sistema de inventarios y levantar el acta técnica preliminar.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Realizar conteo y cotejar",
    "explicacion": "¡ACCIÓN CORRECTA! 'Realizar conteo físico' y 'Cotejar con el sistema' respalda el informe anual de inventarios y balance de activos institucionales."
  },
  {
    "id": "caza_a4_095",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al realizar el inventario del almacén:",
    "opcionTexto": "Firmar el acta declarando que se contaron todos los artículos de la bodega cuando en realidad solo revisó dos estantes.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Firmar falsamente el acta",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / FALSEDAD IDEOLÓGICA! Consignar como verificado lo que no se inspeccionó atenta contra la fe pública y la verdad contable."
  },
  {
    "id": "caza_a4_096",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al detectar una diferencia de 50 computadores portátiles entre el inventario físico del almacén y el sistema contable:",
    "opcionTexto": "No decir nada para no causarle problemas al jefe del almacén que es muy buena persona.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "No decir nada",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / COMPLICIDAD! Ocultar faltantes significativos en inventarios públicos tipifica omisión de denuncia y coparticipación disciplinaria."
  },
  {
    "id": "caza_a4_097",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al recibir a los ciudadanos en la sala de espera durante una jornada concurrida:",
    "opcionTexto": "Orientar cordialmente el flujo de turnos, verificar que las personas tengan sus documentos listos y brindar prioridad a mujeres gestantes y adultos mayores.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Orientar y brindar prioridad",
    "explicacion": "¡ACCIÓN CORRECTA! 'Orientar cordialmente' y 'Brindar prioridad' a población vulnerable optimiza los tiempos de atención y garantiza un servicio humanizado."
  },
  {
    "id": "caza_a4_098",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al ver a una mujer con un bebé en brazos esperando de pie en la fila:",
    "opcionTexto": "Burlarse de ella en voz alta diciéndole que debió dejar al niño en su casa.",
    "respuestaCorrecta": "DISTRACTOR_EXTRALIMITACION",
    "verboEvaluado": "Burlarse en voz alta",
    "explicacion": "¡DISTRACTOR POR EXTRALIMITACIÓN / MALTRATO DISCRIMINATORIO! La burla y discriminación contra usuarios vulnerables es causal de sanción disciplinaria por vulneración de la dignidad humana."
  },
  {
    "id": "caza_a4_099",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al terminarse los turnos programados del día y quedar aún 5 ciudadanos con cita agendada en la sala:",
    "opcionTexto": "Apagar las luces de la sala y marcharse sin atender a los ciudadanos que tenían cita formalmente confirmada.",
    "respuestaCorrecta": "DISTRACTOR_PASIVIDAD",
    "verboEvaluado": "Apagar luces y marcharse",
    "explicacion": "¡DISTRACTOR POR PASIVIDAD / DESATENCIÓN! Los ciudadanos con cita confirmada deben ser atendidos o recibir una reprogramación oportuna y explicada con respeto."
  },
  {
    "id": "caza_a4_100",
    "perfilTarget": "analista_iv",
    "nivelCargo": "Técnico (Analista IV)",
    "contexto": "Al finalizar su turno laboral en el punto de contacto ciudadano de la DIAN:",
    "opcionTexto": "Cerrar adecuadamente la sesión en el sistema Muisca, guardar bajo llave los documentos físicos confidenciales y dejar su puesto de trabajo ordenado y limpio.",
    "respuestaCorrecta": "ACCION_CORRECTA",
    "verboEvaluado": "Cerrar sesión y guardar bajo llave",
    "explicacion": "¡ACCIÓN CORRECTA! 'Cerrar sesión' y 'Guardar bajo llave documentos confidenciales' cumple con las políticas de escritorio limpio y seguridad de la información institucional."
  }
]
  };

  // Banco global plano para compatibilidad
  const CAZA_DISTRACTORES_100 = [
    ...CAZA_DISTRACTORES_BY_PROFILE.gestor_iii_ci,
    ...CAZA_DISTRACTORES_BY_PROFILE.gestor_iii,
    ...CAZA_DISTRACTORES_BY_PROFILE.analista_iv
  ];

  function getCazaDistractoresForProfile(profileId) {
    const pid = profileId || "gestor_iii";
    if (CAZA_DISTRACTORES_BY_PROFILE[pid] && Array.isArray(CAZA_DISTRACTORES_BY_PROFILE[pid])) {
      return CAZA_DISTRACTORES_BY_PROFILE[pid];
    }
    return CAZA_DISTRACTORES_BY_PROFILE.gestor_iii;
  }

  if (typeof global !== "undefined") {
    global.CAZA_DISTRACTORES_BY_PROFILE = CAZA_DISTRACTORES_BY_PROFILE;
    global.CAZA_DISTRACTORES_100 = CAZA_DISTRACTORES_100;
    global.getCazaDistractoresForProfile = getCazaDistractoresForProfile;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      CAZA_DISTRACTORES_BY_PROFILE,
      CAZA_DISTRACTORES_100,
      getCazaDistractoresForProfile
    };
  }
})(typeof window !== "undefined" ? window : global);
