// build_gestor_iii_ci_bank.js
// Construye el Banco Maestro Especializado para GESTOR III - Control Interno (OPEC 236872 - Ficha PC-CI-3006)
const fs = require('fs');

const { QUESTION_BANK_GESTOR } = require('./questions_gestor_iii.js');

// 1. Filtrar preguntas existentes de Gestor III afines a los ejes de OPEC 236872
const sharedAxes = [
  "misionalidad",
  "estructura_dian",
  "contratacion",
  "contratacion_estatal",
  "control_interno",
  "mipg",
  "mipg_control_interno",
  "razonamiento",
  "razonamiento_cuantitativo_logico",
  "comportamentales",
  "integridad",
  "comportamental_integridad",
  "cpaca",
  "rendicion_cuentas"
];

const filteredSharedQuestions = QUESTION_BANK_GESTOR.filter(q => sharedAxes.includes(q.ejeId)).map(q => {
  // Ajustar nivel o adaptarlo
  return {
    ...q,
    id: q.id.startsWith("ci_") ? q.id : `ci_shared_${q.id}`
  };
});

// 2. Nuevas preguntas especializadas de alto rigor técnico para los ejes exclusivos de OPEC 236872
const CI_SPECIALIZED_QUESTIONS = [
  // ==========================================
  // EJE: METODOLOGIAS DE AUDITORIAS DE SISTEMAS DE TECNOLOGIA
  // ==========================================
  {
    id: "ci_ti_01",
    nivel: "Profesional",
    ejeId: "auditoria_sistemas_tecnologia",
    ejeNombre: "Metodologías de Auditorías de Sistemas de Tecnología",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Auditoría de Pistas de Auditoría y Logs en Sistemas Transaccionales (MUISCA / SYGA)",
    caso: "Durante una auditoría de sistemas a la plataforma del Sistema Informático Electrónico (MUISCA), el auditor Gestor III detecta que varios funcionarios con permisos de administrador pueden modificar directamente registros de declaraciones tributarias en base de datos sin que quede registro en los logs de auditoría transaccionales.",
    enunciado: "¿Cuál es la recomendación técnica y de control interno que debe formular el auditor conforme a COBIT e ISO 27001?",
    opciones: [
      {
        id: "A",
        texto: "Implementar de inmediato el principio de segregación de funciones (SoD) y configurar pistas de auditoría (audit trails) inmutables en base de datos que registren automáticamente cualquier comando DDL/DML privilegiado, prohibiendo la modificación directa en producción sin orden de cambio autorizada.",
        explicacion: "Correcta. Según estándares de auditoría de TI (COBIT e ISO 27001), los usuarios con privilegios elevados no deben poder alterar transacciones sin trazabilidad inmutable y segregación estricta de funciones entre desarrollo/operación y producción."
      },
      {
        id: "B",
        texto: "Solicitar que los administradores envíen un correo electrónico informal cada fin de mes resumiendo las modificaciones manuales que hayan efectuado en las tablas de base de datos.",
        explicacion: "Incorrecta. Un correo informal carece de integridad técnica, no constituye evidencia auditable inmutable y vulnera las buenas prácticas de seguridad informática gubernamental."
      },
      {
        id: "C",
        texto: "Eliminar todos los permisos de acceso a base de datos de los ingenieros de soporte técnico, deteniendo el mantenimiento correctivo del software.",
        explicacion: "Incorrecta. Paraliza la operatividad tecnológica de la Entidad; la medida correcta es el control de acceso basado en roles (RBAC) y la bitácora inalterable, no la eliminación del soporte."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Marco COBIT, ISO/IEC 27001 y Guía de Auditoría de Sistemas de Información (MINTIC / DAFP)",
    citaNormativa: "«Las entidades públicas deben garantizar la inmutabilidad e integridad de los registros de auditoría (logs) en sistemas de información misionales, asegurando la trazabilidad de accesos privilegiados y la estricta segregación de funciones.» (Políticas de Seguridad Digital del Estado)."
  },
  {
    id: "ci_ti_02",
    nivel: "Profesional",
    ejeId: "auditoria_sistemas_tecnologia",
    ejeNombre: "Metodologías de Auditorías de Sistemas de Tecnología",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Evaluación de Controles Generales de TI (ITGC) y Plan de Continuidad Tecnológica (DRP)",
    caso: "Al evaluar la resiliencia tecnológica de los servidores donde reside el Registro Único Tributario (RUT), el auditor de Control Interno observa que las copias de seguridad se almacenan en el mismo centro de cómputo principal y que no se han realizado pruebas de restauración del Plan de Recuperación ante Desastres (DRP) en los últimos dos años.",
    enunciado: "¿Qué tipo de hallazgo y riesgo material representa esta situación para la DIAN?",
    opciones: [
      {
        id: "A",
        texto: "Un hallazgo administrativo de impacto menor que solo requiere actualizar el inventario físico de servidores.",
        explicacion: "Incorrecta. La falta de respaldos externos y pruebas de DRP compromete la continuidad del servicio del Estado y la recaudación nacional, constituyendo un riesgo crítico y no menor."
      },
      {
        id: "B",
        texto: "Un hallazgo de no conformidad crítica sobre los Controles Generales de TI (ITGC), pues vulnera el principio de disponibilidad y resiliencia institucional, exponiendo a la Entidad a la pérdida catastrófica de información fiscal ante incidentes graves.",
        explicacion: "Correcta. La ausencia de almacenamiento de backups fuera del sitio (offsite) y la omisión de simulacros de contingencia/DRP incumple la norma técnica ISO 22301 y los lineamientos de Gobierno Digital, generando un riesgo severo de interrupción operativa."
      },
      {
        id: "C",
        texto: "Una situación justificada por el ahorro presupuestal en licencias de almacenamiento en la nube privada gubernamental.",
        explicacion: "Incorrecta. El ahorro presupuestal no puede contravenir los estándares obligatorios de seguridad digital y protección de activos de información crítica del Estado."
      }
    ],
    respuestaCorrecta: "B",
    norma: "ISO/IEC 27001 / ISO 22301 y Manual de Seguridad de la Información DIAN",
    citaNormativa: "«Las copias de respaldo de información crítica deben probarse periódicamente y conservarse en una ubicación remota físicamente separada del sitio principal, asegurando el cumplimiento del RTO y RPO definidos en el Plan de Continuidad.»"
  },
  {
    id: "ci_ti_03",
    nivel: "Profesional",
    ejeId: "auditoria_sistemas_tecnologia",
    ejeNombre: "Metodologías de Auditorías de Sistemas de Tecnología",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Técnicas de Auditoría Asistidas por Computador (TAACs / CAATs)",
    caso: "En el marco de una auditoría al proceso de devoluciones automáticas de saldos a favor en el impuesto sobre la renta, el equipo auditor dispone de una base de datos con 850.000 solicitudes tramitadas en el año.",
    enunciado: "¿Cuál es la metodología más eficaz para que el Gestor III evalúe la integridad del algoritmo de validación de requisitos de las devoluciones?",
    opciones: [
      {
        id: "A",
        texto: "Imprimir una muestra aleatoria de 20 solicitudes físicas y revisar los sellos de radicación en ventanilla.",
        explicacion: "Incorrecta. Es ineficiente para evaluar algoritmos lógicos automatizados en poblaciones masivas y no valida el código ni las reglas de negocio del sistema."
      },
      {
        id: "B",
        texto: "Utilizar Técnicas de Auditoría Asistidas por Computador (TAACs / software de análisis de datos) para ejecutar pruebas de integridad de datos al 100% del universo, recreando las reglas de validación del sistema para identificar pagos anómalos o duplicados.",
        explicacion: "Correcta. Las TAACs (CAATs) permiten analizar el 100% de la población de datos electrónicos, contrastar parámetros de negocio y detectar inconsistencias con precisión analítica inalcanzable mediante muestreo manual."
      },
      {
        id: "C",
        texto: "Delegar la auditoría al mismo desarrollador de software que programó el módulo de devoluciones para que entregue una constancia juramentada de que no hay errores.",
        explicacion: "Incorrecta. Viola la independencia y objetividad de la auditoría; quien diseña u opera el control no puede ser el auditor independiente que certifique su eficacia."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Normas Globales de Auditoría Interna (IIA) y Guía de Auditoría con TAACs (ISACA)",
    citaNormativa: "«Los auditores internos deben considerar el uso de herramientas de análisis de datos basadas en tecnología para mejorar la cobertura, precisión y profundidad de los procedimientos de aseguramiento.» (Norma 1220.A2 IIA)."
  },

  // ==========================================
  // EJE: NORMAS INTERNACIONALES DE AUDITORIA (NIA / IIA)
  // ==========================================
  {
    id: "ci_nia_01",
    nivel: "Profesional",
    ejeId: "normas_internacionales_auditoria",
    ejeNombre: "Normas Internacionales de Auditoría",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Independencia, Objetividad y Conflicto de Intereses (Marco IIA / NIA)",
    caso: "Un auditor Gestor III es asignado para liderar la auditoría del proceso de Cobro Coactivo de una Seccional. Hace 6 meses, dicho funcionario se desempeñaba como Jefe encargado de esa misma División de Cobranzas.",
    enunciado: "De conformidad con las Normas Globales de Auditoría Interna del IIA y el Código de Ética profesional, ¿cuál es la conducta que debe adoptar el auditor?",
    opciones: [
      {
        id: "A",
        texto: "Aceptar la asignación con entusiasmo, ya que su conocimiento previo del área le permitirá hacer una auditoría más rápida y condescendiente con sus antiguos compañeros.",
        explicacion: "Incorrecta. Manifiesta un claro conflicto de intereses e impedimento de objetividad real y percibida."
      },
      {
        id: "B",
        texto: "Declarar de manera formal e inmediata su impedimento ante el Jefe de la Oficina de Control Interno por menoscabo a la objetividad individual, absteniéndose de intervenir en la auditoría de actividades sobre las cuales ejerció responsabilidad operativa en el último año.",
        explicacion: "Correcta. La Norma del IIA sobre menoscabo a la independencia u objetividad establece expresamente que los auditores no deben auditar operaciones sobre las que tuvieron responsabilidad gerencial u operativa en un período previo (típicamente al menos un año)."
      },
      {
        id: "C",
        texto: "Continuar con la auditoría pero solicitar a un compañero que firme el informe final en su lugar para ocultar su participación.",
        explicacion: "Incorrecta. Constituye una falta ética grave y un engaño documental que vulnera el principio de integridad y transparencia de la función pública."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Normas Globales de Auditoría Interna del IIA (Norma 1130 - Menoscabo a la Independencia u Objetividad)",
    citaNormativa: "«Los auditores internos no deben asumir la responsabilidad operativa de auditar funciones o actividades sobre las cuales hayan tenido autoridad directa o responsabilidad en el año inmediatamente anterior.» (Norma 1130.A1 IIA)."
  },
  {
    id: "ci_nia_02",
    nivel: "Profesional",
    ejeId: "normas_internacionales_auditoria",
    ejeNombre: "Normas Internacionales de Auditoría",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Evidencia de Auditoría Suficiente y Apropiada (NIA 500 / ISSAI 2500)",
    caso: "Al revisar el expediente de auditoría de un contrato de interventoría, el supervisor del equipo auditor encuentra que un hallazgo de presunto pago indebido se fundamenta únicamente en una llamada telefónica anónima, sin contrastar facturas, actas de recibo ni soportes contables.",
    enunciado: "A la luz de la NIA 500 y las normas de auditoría gubernamental, ¿por qué no es procedente trasladar este hallazgo en el informe definitivo?",
    opciones: [
      {
        id: "A",
        texto: "Porque la evidencia obtenida carece de los atributos de suficiencia (cantidad) y propiedad (relevancia y fiabilidad), siendo indispensable corroborar documentalmente los hechos antes de formular conclusiones vinculantes.",
        explicacion: "Correcta. La NIA 500 exige que el auditor obtenga evidencia 'suficiente y adecuada' (apropiada). Un testimonio telefónico anónimo no validado carece de fiabilidad y sustento probatorio para formular un hallazgo formal."
      },
      {
        id: "B",
        texto: "Porque en auditoría de control interno cualquier denuncia ciudadana debe ser aceptada como prueba plena sin necesidad de verificación.",
        explicacion: "Incorrecta. Las denuncias son insumos o indicios de riesgo, no constituyen prueba plena por sí solas en los papeles de trabajo de auditoría."
      },
      {
        id: "C",
        texto: "Porque los pagos contractuales en el sector público nunca pueden ser cuestionados una vez girados por la Tesorería.",
        explicacion: "Incorrecta. Todo pago estatal está sujeto a control previo, concomitante y posterior de auditoría; la razón técnica es la falta de evidencia de soporte idónea."
      }
    ],
    respuestaCorrecta: "A",
    norma: "NIA 500 (Evidencia de Auditoría) y Marco Internacional de Práctica Profesional (IIA Norma 2310)",
    citaNormativa: "«El auditor diseñará y aplicará procedimientos de auditoría de forma que le permitan obtener evidencia de auditoría suficiente y adecuada para poder alcanzar conclusiones razonables en las que basar su opinión.» (NIA 500, Art. 4)."
  },
  {
    id: "ci_nia_03",
    nivel: "Profesional",
    ejeId: "normas_internacionales_auditoria",
    ejeNombre: "Normas Internacionales de Auditoría",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Estructura Técnica del Hallazgo de Auditoría (C-C-C-E)",
    caso: "Un auditor elabora una observación sobre el archivo de expedientes tributarios señalando: 'Se observan desórdenes en los archivadores del piso 3, lo cual da mala imagen a los visitantes'.",
    enunciado: "¿Cómo debe estructurarse técnicamente este hallazgo para cumplir con la metodología estándar de auditoría gubernamental de la Contraloría y el DAFP?",
    opciones: [
      {
        id: "A",
        texto: "Debe redactarse incorporando los cuatro elementos metodológicos obligatorios: Condición (lo que es), Criterio (norma técnica de archivo que debió cumplirse), Causa (origen de la falla) y Efecto (impacto en la pérdida de documentos o prescripción).",
        explicacion: "Correcta. La metodología técnica universal de auditoría exige que todo hallazgo contenga: Condición (situación detectada), Criterio (norma o estándar vulnerado), Causa (por qué ocurrió) y Efecto (consecuencia o riesgo materializado)."
      },
      {
        id: "B",
        texto: "Debe dejarse tal como está, puesto que la percepción estética del auditor es suficiente para ordenar procesos disciplinarios.",
        explicacion: "Incorrecta. La auditoría no se basa en percepciones subjetivas o estéticas, sino en desviaciones objetivas frente a criterios y estándares normativos."
      },
      {
        id: "C",
        texto: "Debe suprimirse cualquier mención a la causa para evitar comprometer a los directores seccionales responsables del área.",
        explicacion: "Incorrecta. La identificación de la causa-raíz es el elemento medular que permite plantear acciones correctivas efectivas en el plan de mejoramiento institucional."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Guía de Auditoría para Entidades Públicas (DAFP / CGR)",
    citaNormativa: "«Todo hallazgo de auditoría debe constar de Condición, Criterio, Causa y Efecto, proporcionando la base fáctica y analítica necesaria para formular planes de mejoramiento orientados a la causa-raíz.»"
  },

  // ==========================================
  // EJE: FISCALIDAD INTERNACIONAL TACI
  // ==========================================
  {
    id: "ci_taci_01",
    nivel: "Profesional",
    ejeId: "fiscalidad_internacional",
    ejeNombre: "Fiscalidad Internacional TACI",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Régimen de Precios de Transferencia y Principio de Plena Competencia (Arm's Length)",
    caso: "En una auditoría de aseguramiento a los procesos de fiscalización de grandes contribuyentes, el auditor Gestor III revisa los papeles de trabajo de un caso donde una multinacional farmacéutica en Colombia compra materias primas a su casa matriz en Suiza a un precio 400% superior al precio de mercado internacional entre partes independientes.",
    enunciado: "¿Qué concepto normativo y principio rector del régimen tributario internacional debió verificar el equipo de fiscalización?",
    opciones: [
      {
        id: "A",
        texto: "El principio de plena competencia (Arm's length principle) consagrado en el artículo 260-1 del Estatuto Tributario, el cual obliga a que las transacciones entre partes vinculadas se pacten a precios comparables con los que hubieran utilizado terceros independientes en operaciones idénticas.",
        explicacion: "Correcta. El artículo 260-1 del E.T. adopta el estándar internacional de la OCDE (Principio de Plena Competencia), mediante el cual la DIAN ajusta las bases gravables de contribuyentes que transfieren artificialmente utilidades al exterior inflando costos con vinculados económicos."
      },
      {
        id: "B",
        texto: "La exoneración automática de impuestos por tratarse de una empresa domiciliada en un país europeo con alta calificación crediticia.",
        explicacion: "Incorrecta. No existe tal exoneración; por el contrario, los vínculos económicos con el exterior activan formalidades estrictas del régimen de precios de transferencia."
      },
      {
        id: "C",
        texto: "La aplicación de tarifa cero de retención en la fuente asumiendo que los pagos al exterior son ingresos exentos sin necesidad de soporte.",
        explicacion: "Incorrecta. Los pagos al exterior por compras a vinculados están sometidos a estricto control de precios de transferencia y deducción de costos según el artículo 122 y 260-1 del E.T."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Arts. 260-1 a 260-11 y Guías sobre Precios de Transferencia de la OCDE",
    citaNormativa: "«Los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados del exterior están obligados a determinar sus ingresos ordinarios y extraordinarios, sus costos y deducciones... considerando para esas operaciones los precios y márgenes de utilidad que se hubieran utilizado en operaciones comparables con o entre partes independientes.» (Art. 260-1 E.T.)."
  },
  {
    id: "ci_taci_02",
    nivel: "Profesional",
    ejeId: "fiscalidad_internacional",
    ejeNombre: "Fiscalidad Internacional TACI",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Convenios para Evitar la Doble Imposición (CDI) y Cláusula de Beneficiario Efectivo",
    caso: "Al examinar la correcta aplicación de un Convenio para Evitar la Doble Imposición (CDI) suscrito por Colombia, se detecta que un contribuyente nacional giró regalías a una sociedad 'de papel' (conduit company) en un Estado contratante sin sustancia económica real, cuyos accionistas finales residen en una jurisdicción no cooperante.",
    enunciado: "¿Cuál es la disposición de control y fiscalidad internacional que debe verificar el auditor para evitar el abuso de los tratados (Treaty Shopping)?",
    opciones: [
      {
        id: "A",
        texto: "La cláusula del 'Beneficiario Efectivo' y la Cláusula Principal de Propósito (PPT) de las acciones BEPS, verificando que la entidad receptora no sea un mero vehículo interpuesto para acceder indebidamente a las tarifas reducidas del convenio.",
        explicacion: "Correcta. En los CDI y las directrices BEPS (Acción 6) de la OCDE, los beneficios de tarifa reducida solo aplican al verdadero beneficiario efectivo con sustancia económica. Las sociedades instrumentales interpuestas pierden los beneficios tributarios del convenio."
      },
      {
        id: "B",
        texto: "El pago de una tasa adicional voluntaria para convalidar el uso del convenio sin investigar la identidad de los beneficiarios reales.",
        explicacion: "Incorrecta. La ley tributaria no permite convalidar maniobras abusivas mediante pagos voluntarios; la norma antielusión exige desconocer la transacción ficticia."
      },
      {
        id: "C",
        texto: "Permitir la deducción total sin exigir el certificado de residencia fiscal del país emisor.",
        explicacion: "Incorrecta. El certificado de residencia fiscal y la prueba del beneficiario efectivo son requisitos formales e insustituibles para la procedencia de cualquier CDI."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 869 y Convenios de Doble Imposición (Modelo OCDE - Acción 6 BEPS)",
    citaNormativa: "«No se otorgará ningún beneficio contemplado en un Convenio Tributario si es razonable concluir que la obtención de dicho beneficio fue uno de los propósitos principales de la transacción o arreglo...» (Regla General Anti-Abuso / PPT)."
  },

  // ==========================================
  // EJE: PRINCIPIOS DE CONTABILIDAD PUBLICA
  // ==========================================
  {
    id: "ci_contab_01",
    nivel: "Profesional",
    ejeId: "principios_contabilidad_publica",
    ejeNombre: "Principios de Contabilidad Pública",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Principio de Devengo / Causación en el Reconocimiento de Ingresos Tributarios y Pasivos",
    caso: "En una evaluación financiera al balance de la DIAN, el auditor Gestor III evidencia que las sumas recaudadas por concepto de retenciones en la fuente correspondientes a litigios en discusión gubernativa no han sido provisionadas contablemente conforme al grado de probabilidad de fallo en contra.",
    enunciado: "¿Cuál principio del Régimen de Contabilidad Pública emitido por la Contaduría General de la Nación (CGN) se encuentra en riesgo de vulneración?",
    opciones: [
      {
        id: "A",
        texto: "El principio de Negocio en Marcha y la depreciación acelerada de equipos de oficina.",
        explicacion: "Incorrecta. No guarda relación con el reconocimiento de contingencias judiciales ni pasivos estimados."
      },
      {
        id: "B",
        texto: "El principio de Devengo y el criterio de Prudencia en el reconocimiento de Provisiones y Pasivos Contingentes, que exige registrar oportunamente las obligaciones probables derivadas de litigios para reflejar fielmente la situación financiera de la entidad pública.",
        explicacion: "Correcta. El marco normativo para Entidades de Gobierno de la CGN establece que las contingencias judiciales deben evaluarse periódicamente (probable, posible o remota) y registrar una provisión contable cuando la salida de recursos sea probable y cuantificable de forma fiable."
      },
      {
        id: "C",
        texto: "El principio de Caja estricto que prohíbe registrar cualquier tipo de pasivo antes de que exista sentencia ejecutoriada del Consejo de Estado.",
        explicacion: "Incorrecta. La contabilidad pública moderna en Colombia opera bajo la base de acumulación (devengo), no bajo caja estricta; las provisiones se reconocen antes de la sentencia ejecutoriada cuando la pérdida es probable."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Resolución 533 de 2015 de la CGN (Marco Normativo para Entidades de Gobierno) y Marco Conceptual de la Contabilidad Pública",
    citaNormativa: "«Los hechos económicos se reconocen en el momento en que suceden y no solamente cuando se recibe o paga dinero en efectivo o su equivalente, bajo la base del devengo, garantizando la prudencia y revelación de provisiones probables.» (CGN)."
  },
  {
    id: "ci_contab_02",
    nivel: "Profesional",
    ejeId: "principios_contabilidad_publica",
    ejeNombre: "Principios de Contabilidad Pública",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Control Contable y Conciliación de Mercancías Aprehendidas y Decomisadas",
    caso: "Al auditar los depósitos de mercancías aprehendidas en una Seccional de Aduanas, el Gestor III identifica que existen bienes decomisados físicamente valorados en más de $3.000 millones que no han sido dados de alta en el sistema contable ni clasificados en cuentas de bienes en custodia o propiedad de la Entidad.",
    enunciado: "¿Qué impacto tiene esta inconsistencia en los Estados Financieros de la Entidad?",
    opciones: [
      {
        id: "A",
        texto: "Ninguno, porque las mercancías de contrabando incautadas no forman parte de los inventarios ni de las cuentas de orden del sector público.",
        explicacion: "Incorrecta. Todo bien aprehendido o decomisado a favor de la Nación debe tener trazabilidad contable rigurosa en cuentas de orden o activos, según su situación jurídica."
      },
      {
        id: "B",
        texto: "Genera subestimación de activos y falta de revelación adecuada en los Estados Financieros, además de propiciar el riesgo de pérdida, sustracción o deterioro de bienes sin control patrimonial auditable.",
        explicacion: "Correcta. El Régimen de Contabilidad Pública exige la conciliación permanente entre el inventario físico de recintos aduaneros y las cuentas contables de bienes en custodia / decomisados, evitando la invisibilidad patrimonial."
      },
      {
        id: "C",
        texto: "Justifica la donación inmediata de las mercancías sin soporte legal para equilibrar los libros.",
        explicacion: "Incorrecta. La disposición de mercancías decomisadas sigue un procedimiento aduanero reglado estricto y no puede usarse para tapar desbalances contables."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Régimen de Contabilidad Pública (CGN) y Manual de Procedimientos Contables DIAN",
    citaNormativa: "«Los bienes muebles e inmuebles administrados, en custodia o en proceso de extinción de dominio o decomiso deben registrarse en las cuentas correspondientes, garantizando su control físico y financiero.»"
  },

  // ==========================================
  // EJE: GESTION DEL RIESGO
  // ==========================================
  {
    id: "ci_riesgo_01",
    nivel: "Profesional",
    ejeId: "gestion_riesgo",
    ejeNombre: "Gestión del Riesgo",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Diseño de la Matriz de Riesgos de Corrupción y Líneas de Defensa (DAFP / ISO 31000)",
    caso: "En la actualización del Mapa de Riesgos Institucionales de la DIAN, un líder de proceso clasifica el riesgo de 'Colusión de funcionarios para alterar avalúos en remates coactivos' con impacto leve y propone como único control: 'Recomendar al funcionario que actúe con rectitud'.",
    enunciado: "Como auditor de Control Interno que evalúa la solidez metodológica de la matriz, ¿cuál es el dictamen técnico correcto?",
    opciones: [
      {
        id: "A",
        texto: "Aprobar el control por considerar que la buena fe contractual y laboral es autosuficiente para mitigar el riesgo de corrupción.",
        explicacion: "Incorrecta. La Guía DAFP prohíbe taxativamente catalogar 'buenos deseos' o normas abstractas como controles operativos de riesgo de corrupción."
      },
      {
        id: "B",
        texto: "Rechazar la valoración y exigir el rediseño del control, ya que una recomendación verbal es un control inexistente; se requiere diseñar controles preventivos y detectivos automatizados con doble autorización, rotación de peritos y trazabilidad pública en el portal transaccional.",
        explicacion: "Correcta. Conforme a la Guía de Riesgos de Corrupción del DAFP, los controles deben ser específicos, medibles, tener responsable, periodicidad y evidencia verificable. Un recordatorio ético verbal no reduce el riesgo residual."
      },
      {
        id: "C",
        texto: "Eliminar el riesgo del mapa para no alarmar a los entes de control externos.",
        explicacion: "Incorrecta. Ocultar o suprimir riesgos tipificados de corrupción es una falta grave que viola la Ley 1474 de 2011 (Estatuto Anticorrupción)."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Ley 1474 de 2011 (Estatuto Anticorrupción) y Guía para la Gestión del Riesgo (DAFP versión vigente)",
    citaNormativa: "«Un control no puede consistir en el simple cumplimiento de las funciones generales del cargo ni en declaraciones éticas genéricas. Debe ser una acción concreta orientada a modificar la probabilidad o el impacto del riesgo.» (Guía DAFP)."
  },
  {
    id: "ci_riesgo_02",
    nivel: "Profesional",
    ejeId: "gestion_riesgo",
    ejeNombre: "Gestión del Riesgo",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Riesgo Inherente vs. Riesgo Residual y Eficacia del Control",
    caso: "Al evaluar la efectividad de los controles en el proceso de Fiscalización Aduanera, se calcula que el Riesgo Inherente es 'Extremo' debido a los montos transados en comercio exterior. La dependencia auditada implementó un sistema automatizado de perfiles de riesgo con inteligencia artificial que filtra aleatoriamente los contenedores.",
    enunciado: "¿Cómo debe medir el Gestor III el Riesgo Residual del proceso?",
    opciones: [
      {
        id: "A",
        texto: "Asumiendo que el riesgo inherente se redujo a cero de forma permanente por la simple compra del software de inteligencia artificial.",
        explicacion: "Incorrecta. El riesgo residual nunca es cero; la adquisición de tecnología no garantiza su calibración ni la ausencia de fallas operativas o manipulación humana."
      },
      {
        id: "B",
        texto: "Evaluando el diseño, implementación y operatividad práctica del control mediante pruebas de recorrido y muestreo de efectividad, para determinar si el riesgo residual bajó a un nivel aceptable según el apetito de riesgo institucional.",
        explicacion: "Correcta. La evaluación del riesgo residual exige probar la eficacia operativa de los controles (diseño + ejecución + evidencia histórica), verificando si la exposición remanente se sitúa dentro de los rangos tolerables por la Alta Dirección."
      },
      {
        id: "C",
        texto: "Trasladando la responsabilidad de la valoración del riesgo residual a la Policía Fiscal y Aduanera (POLFA).",
        explicacion: "Incorrecta. La valoración de riesgos institucionales es responsabilidad interna de la DIAN en su marco de MIPG y Control Interno."
      }
    ],
    respuestaCorrecta: "B",
    norma: "ISO 31000 y Manual de Gestión Integral del Riesgo DIAN",
    citaNormativa: "«El riesgo residual es el nivel de riesgo que permanece después de implementar los controles. Su valoración requiere verificar no solo el diseño formal del control sino su efectividad en la operación diaria.»"
  },

  // ==========================================
  // EJE: MODELO ESTANDAR DE CONTROL INTERNO MECI
  // ==========================================
  {
    id: "ci_meci_01",
    nivel: "Profesional",
    ejeId: "control_interno_meci",
    ejeNombre: "Modelo Estándar de Control Interno MECI",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Articulación del MECI en la 7ª Dimensión del MIPG y el Esquema de Líneas de Defensa",
    caso: "Durante una mesa técnica institucional, un funcionario sostiene que la Oficina de Control Interno de la DIAN es la encargada de aprobar previamente las órdenes de compra y los actos de liquidación de impuestos para evitar errores.",
    enunciado: "De acuerdo con el Decreto 1499 de 2017 y el Modelo de las Tres Líneas del Instituto de Auditores Internos (IIA), ¿cuál es la precisión conceptual que debe efectuar el auditor Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Confirmar que la Oficina de Control Interno debe coadministrar y firmar los actos administrativos para compartir la responsabilidad disciplinaria con el Director Seccional.",
        explicacion: "Incorrecta. La coadministración está expresamente prohibida a las Oficinas de Control Interno por la Ley 87 de 1993 y desnaturaliza su rol evaluador."
      },
      {
        id: "B",
        texto: "Aclarar que la Oficina de Control Interno actúa como la 'Tercera Línea' brindando aseguramiento y asesoría independiente y objetiva; la 'Primera Línea' (dueños de proceso) y la 'Segunda Línea' (supervisores y áreas técnicas) son las únicas facultadas para diseñar y ejecutar los controles operativos diarios sin coadministración de los auditores.",
        explicacion: "Correcta. La Ley 87 de 1993 y el modelo MECI integrado en MIPG establecen con total claridad que el control interno no es coadministrador; la evaluación independiente (3ª línea) perdería objetividad si interviniera en aprobaciones operativas."
      },
      {
        id: "C",
        texto: "Indicar que el control previo fue restablecido por la Constitución de 1991 para todas las entidades públicas de orden nacional.",
        explicacion: "Incorrecta. La Constitución de 1991 abolió el control previo y perceptivo en los órganos de control, instituyendo el control posterior y selectivo."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Ley 87 de 1993, Decreto 1499 de 2017 y Lineamiento de 3 Líneas de Defensa (DAFP)",
    citaNormativa: "«En ningún caso, el ejercicio de las funciones del responsable de la oficina de control interno podrá ser previo o perceptivo ni implicará coadministración en las decisiones propias de la administración activa.» (Ley 87 de 1993, Art. 12)."
  },
  {
    id: "ci_meci_02",
    nivel: "Profesional",
    ejeId: "control_interno_meci",
    ejeNombre: "Modelo Estándar de Control Interno MECI",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Autocontrol, Autorregulación y Autogestión como Principios Constitucionales del MECI",
    caso: "Un analista tributario comete un error en el cálculo de una sanción y, al advertirlo, decide no corregirlo argumentando: 'Eso le corresponde encontrarlo a la Oficina de Control Interno cuando hagan auditoría el próximo año'.",
    enunciado: "¿Cuál principio fundacional del Sistema de Control Interno está desconociendo el empleado?",
    opciones: [
      {
        id: "A",
        texto: "El principio de Autocontrol, el cual exige que cada servidor público evalúe, controle y corrija oportunamente su propio trabajo y el cumplimiento de las tareas asignadas en el marco de sus funciones.",
        explicacion: "Correcta. El Autocontrol es la capacidad de cada servidor de diagnosticar, monitorear y subsanar desviaciones en su labor diaria sin esperar auditorías externas o posteriores."
      },
      {
        id: "B",
        texto: "El principio de Jerarquía vertical militar que releva al funcionario de toda responsabilidad personal.",
        explicacion: "Incorrecta. La función pública civil en Colombia se fundamenta en la responsabilidad individual del servidor (Art. 6 C.P.) y el autocontrol."
      },
      {
        id: "C",
        texto: "El principio de Inmunidad de los actos tributarios preparatorios.",
        explicacion: "Incorrecta. No existe tal figura; los actos preparatorios con errores inducen a la nulidad del acto administrativo final."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 87 de 1993, Art. 2 y Marco Conceptual del MECI (DAFP)",
    citaNormativa: "«El autocontrol es la capacidad que ostenta cada servidor público para considerar, controlar y aplicar en su función diaria los métodos y procedimientos establecidos, garantizando la eficacia y legalidad de sus actuaciones.»"
  },

  // ==========================================
  // EJE: MODELO INTEGRADO DE PLANEACION Y GESTION MIPG EN AUDITORIA
  // ==========================================
  {
    id: "ci_mipg_01",
    nivel: "Profesional",
    ejeId: "mipg_auditoria",
    ejeNombre: "MIPG en Auditoría Institucional",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Formulación del Plan Anual de Auditoría Basado en Riesgos (PAA)",
    caso: "Para la elaboración del Plan Anual de Auditoría (PAA) de la vigencia, el Director de la Oficina de Control Interno solicita priorizar los procesos que serán objeto de evaluación de aseguramiento.",
    enunciado: "¿Cuál es el criterio técnico que debe utilizar el Gestor III para determinar el universo auditable y la prioridad de las auditorías?",
    opciones: [
      {
        id: "A",
        texto: "Seleccionar únicamente las dependencias que tengan menos carga de trabajo en el año para no incomodar a los procesos más atareados.",
        explicacion: "Incorrecta. La auditoría no se planifica por conveniencia operativa de los auditados sino por criticidad y riesgo."
      },
      {
        id: "B",
        texto: "Construir una matriz de priorización basada en riesgos, evaluando el impacto presupuestal, los riesgos residuales altos/extremos de los mapas de riesgo, los cambios regulatorios recientes, las denuncias ciudadanas y los resultados de autodiagnósticos FURAG.",
        explicacion: "Correcta. El estándar internacional del IIA y la Guía DAFP para el Plan Anual de Auditoría exigen que este sea 100% basado en riesgos, asignando recursos de auditoría donde mayor sea el impacto potencial en los objetivos institucionales."
      },
      {
        id: "C",
        texto: "Auditar exactamente las mismas 5 áreas del año anterior sin variar el alcance ni verificar si los riesgos cambiaron.",
        explicacion: "Incorrecta. Un plan estático y repetitivo incumple las directrices del MIPG y omite la evaluación de riesgos emergentes."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Decreto 1499 de 2017, Manual Operativo del MIPG y Norma IIA 2010 (Planificación)",
    citaNormativa: "«El Director de Auditoría Interna debe establecer un plan de auditoría basado en riesgos para determinar las prioridades de la actividad de auditoría interna, consistente con las metas de la organización.» (Norma 2010 IIA)."
  },
  {
    id: "ci_mipg_02",
    nivel: "Profesional",
    ejeId: "mipg_auditoria",
    ejeNombre: "MIPG en Auditoría Institucional",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Seguimiento a Planes de Mejoramiento y Cierre de No Conformidades",
    caso: "Al realizar el seguimiento trimestral al Plan de Mejoramiento Institucional suscrito ante la Contraloría General de la República (CGR), el auditor constata que una acción correctiva figura como '100% cumplida', pero al pedir la evidencia documental de soporte, la dependencia auditada admite que el procedimiento no se ha implementado en la práctica.",
    enunciado: "¿Qué actuación corresponde realizar al Gestor III conforme a sus funciones oficiales?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar el estado de cumplimiento reportado, emitir el informe de alerta por presunta falsedad o ineficacia del plan, y requerir el reajuste inmediato del cronograma con evidencias reales y sostenibles antes del reporte oficial al ente de control externo.",
        explicacion: "Correcta. La función oficial del Gestor III en Control Interno es validar la veracidad y nivel de avance de los planes de mejoramiento internos y externos; avalar reportes ficticios genera responsabilidad solidaria."
      },
      {
        id: "B",
        texto: "Dar por bueno el reporte y avalarlo ante la Contraloría para evitar sanciones institucionales a la DIAN.",
        explicacion: "Incorrecta. Constituye una falta gravísima contra la fe pública y la ética del auditor, tipificada penal y disciplinariamente."
      },
      {
        id: "C",
        texto: "Asumir personalmente la redacción e implementación del procedimiento operativo de la dependencia auditada.",
        explicacion: "Incorrecta. El auditor no ejecuta la acción correctiva del proceso operativo; su labor es de verificación, seguimiento y aseguramiento."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Resolución Orgánica de la CGR sobre Planes de Mejoramiento y Manual de Funciones PC-CI-3006",
    citaNormativa: "«Gestionar el seguimiento a los planes de mejoramiento internos y los suscritos con los entes externos de control validando su veracidad y nivel de avance de acuerdo con la normatividad vigente.» (Función 5, OPEC 236872)."
  },

  // ==========================================
  // EJE: SOLUCION DE PROBLEMAS NIVEL 4 (COMPORTAMENTAL CLAVE)
  // ==========================================
  {
    id: "ci_sol_prob_01",
    nivel: "Profesional",
    ejeId: "solucion_problemas_n4",
    ejeNombre: "Solución de Problemas (Nivel 4)",
    tipo: "Comportamental (Nivel Profesional)",
    tema: "Análisis Causa-Raíz y Pensamiento Sistémico en Desviaciones de Procesos Críticos",
    caso: "En tres Direcciones Seccionales de frontera se vienen presentando reiteradas demandas de nulidad y restablecimiento del derecho ganadas por los contribuyentes debido a vicios de forma en la notificación del pliego de cargos aduanero. Los directores locales insisten en que el problema es 'falta de presupuesto para fotocopias'.",
    enunciado: "Como Gestor III líder en Control Interno, ¿cuál es la intervención integral que evidencia el nivel de competencia 4 en Solución de Problemas?",
    opciones: [
      {
        id: "A",
        texto: "Aceptar la justificación local y solicitar al Ministerio de Hacienda una adición presupuestal para fotocopias e impresoras en las seccionales.",
        explicacion: "Incorrecta. Se queda en el síntoma aparente y no aborda la causa estructural del fallo jurídico-procesal."
      },
      {
        id: "B",
        texto: "Liderar un análisis causa-raíz multidisciplinario (método de Ishikawa / 5 Porqués) contrastando las sentencias judiciales, identificando que el origen real radica en la indebida parametrización de la notificación electrónica en el sistema informático y la falta de estandarización procesal; y diseñar un plan de contingencia normativo-tecnológico coordinado con la Dirección de Gestión Jurídica.",
        explicacion: "Correcta. La competencia Nivel 4 en Solución de Problemas exige diagnosticar la raíz profunda con visión sistémica, trascender los síntomas obvios y diseñar soluciones sostenibles que articulen tecnología, procesos y normativa."
      },
      {
        id: "C",
        texto: "Enviar un memorando general a los funcionarios de frontera advirtiéndoles que serán denunciados penalmente si vuelven a perder una demanda.",
        explicacion: "Incorrecta. Es una medida punitiva y reactiva que no resuelve la causa raíz de la deficiencia procesal."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Decreto 815 de 2018 (Competencias Comportamentales del Empleo Público)",
    citaNormativa: "«Solución de Problemas Nivel 4: Identifica problemas complejos, analiza causas subyacentes, genera alternativas viables con base en información confiable y formula soluciones estructurales y sostenibles para la organización.»"
  },
  {
    id: "ci_sol_prob_02",
    nivel: "Profesional",
    ejeId: "solucion_problemas_n4",
    ejeNombre: "Solución de Problemas (Nivel 4)",
    tipo: "Comportamental (Nivel Profesional)",
    tema: "Resolución de Cuellos de Botella y Optimización de Procesos Institucionales",
    caso: "El proceso de respuesta a requerimientos de la Procuraduría y la Contraloría sobre presuntas irregularidades en cobros tributarios presenta un índice de vencimiento de términos del 42%, lo que expone a los directivos a sanciones por desacato.",
    enunciado: "¿Cuál acción del Gestor III refleja una solución innovadora y estructural acorde con su función de guiar a las dependencias en la oportunidad de respuestas?",
    opciones: [
      {
        id: "A",
        texto: "Implementar un tablero de control (dashboard) con alertas tempranas semaforizadas a 10, 5 y 2 días del vencimiento, acompañado de mesas de trabajo semanales de seguimiento y una plantilla estandarizada de respuestas que garantice suficiencia técnica y jurídica oportuna.",
        explicacion: "Correcta. Combina automatización, seguimiento preventivo proactivo y herramientas operativas que atacan directamente el cuello de botella temporal y de calidad."
      },
      {
        id: "B",
        texto: "Radicar solicitudes masivas de prórroga a los entes de control para ganar tiempo sin cambiar la forma de trabajo.",
        explicacion: "Incorrecta. Las prórrogas indiscriminadas dilatan la respuesta y no resuelven la ineficiencia interna."
      },
      {
        id: "C",
        texto: "Instruir a los funcionarios para que respondan con cartas genéricas sin contestar de fondo las preguntas de los órganos de control.",
        explicacion: "Incorrecta. Viola el deber de colaboración armónica entre poderes públicos y puede constituir falta disciplinaria gravísima."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Manual de Funciones PC-CI-3006, Función 7 y Decreto 815 de 2018",
    citaNormativa: "«Guiar a las dependencias en las respuestas entre la entidad, entes de control y partes interesadas... verificando que se cumplan los criterios de oportunidad y pertinencia.»"
  },

  // ==========================================
  // EJE: COMPORTAMIENTO ETICO (NIVELES 1 Y 4)
  // ==========================================
  {
    id: "ci_etico_01",
    nivel: "Profesional",
    ejeId: "comportamiento_etico_n1_4",
    ejeNombre: "Comportamiento Ético (Niveles 1 y 4)",
    tipo: "Comportamental (Nivel Profesional)",
    tema: "Presión Jerárquica para Modificar Hallazgos de Auditoría",
    caso: "Durante la auditoría a un contrato de tecnología, el auditor Gestor III detecta sobrecostos evidentes y falta de entrega de entregables clave. Un alto directivo de la entidad se reúne en privado con el auditor y le solicita 'moderar la redacción' y reclasificar el hallazgo como una simple sugerencia menor para 'no perjudicar la imagen de la administración'.",
    enunciado: "¿Cuál es la respuesta y proceder ético indiscutible que debe sostener el auditor?",
    opciones: [
      {
        id: "A",
        texto: "Acceder a la petición del directivo a cambio de ser postulado a una comisión de servicios en el exterior.",
        explicacion: "Incorrecta. Constituye cohecho, corrupción y falta disciplinaria gravísima sancionable con destitución e inhabilidad general."
      },
      {
        id: "B",
        texto: "Mantener con firmeza, objetividad y respeto la evidencia documental y la calificación técnica del hallazgo en el informe oficial, dejando constancia de los papeles de trabajo y comunicando formalmente la situación al Jefe de Control Interno bajo las salvaguardas de integridad pública.",
        explicacion: "Correcta. El Comportamiento Ético Nivel 4 exige mantener la rectitud, objetividad profesional y resistencia irreductible ante cualquier tipo de presión política o jerárquica, salvaguardando el interés general y la verdad."
      },
      {
        id: "C",
        texto: "Filtrar el borrador del informe a redes sociales de manera anónima para generar escándalo público antes de que se apruebe formalmente.",
        explicacion: "Incorrecta. Vulnera la reserva de los papeles de trabajo de auditoría y los conductos regulares legales."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Código de Integridad del Servicio Público, Ley 1952 de 2019 (Código General Disciplinario) y Normas IIA",
    citaNormativa: "«Comportamiento Ético Nivel 4: Actúa con probidad y rectitud, antepone el bien común al particular y defiende los principios institucionales aun en situaciones de alta presión o conflicto.»"
  },

  // ==========================================
  // EJE: COMUNICACION EFECTIVA (NIVELES 1 Y 3)
  // ==========================================
  {
    id: "ci_comunicacion_01",
    nivel: "Profesional",
    ejeId: "comunicacion_efectiva_n1_3",
    ejeNombre: "Comunicación Efectiva (Niveles 1 y 3)",
    tipo: "Comportamental (Nivel Profesional)",
    tema: "Comunicación de Hallazgos en Mesas de Trabajo con Auditados Reacios",
    caso: "En la reunión de cierre de una auditoría, el equipo auditado reacciona a la defensiva y de forma agresiva ante la exposición de tres hallazgos de control interno, acusando al equipo auditor de tener 'animadversión personal'.",
    enunciado: "¿Cómo debe conducir la comunicación el Gestor III en aplicación del Nivel 3 de Comunicación Efectiva?",
    opciones: [
      {
        id: "A",
        texto: "Responder con igual agresividad y amenazar con denunciar a los funcionarios inmediatamente ante la Fiscalía General.",
        explicacion: "Incorrecta. Escala el conflicto, vulnera el trato respetuoso y desvía la auditoría hacia confrontaciones improductivas."
      },
      {
        id: "B",
        texto: "Mantener la serenidad y la escucha activa, despersonalizar la discusión enfocándola estrictamente en los hechos objetivos, criterios normativos y evidencias de los papeles de trabajo, explicando con claridad constructiva cómo el plan de mejoramiento fortalecerá la seguridad jurídica del mismo equipo auditado.",
        explicacion: "Correcta. La Comunicación Efectiva Nivel 3 implica asertividad, manejo constructivo de objeciones, enfoque pedagógico y orientación a resultados basados en hechos verificables."
      },
      {
        id: "C",
        texto: "Retirar los hallazgos para calmar los ánimos y terminar la reunión en un ambiente amistoso.",
        explicacion: "Incorrecta. Falsifica los resultados de la auditoría y vulnera la integridad profesional del auditor."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Decreto 815 de 2018 y Manual de Auditoría Interna DIAN",
    citaNormativa: "«Comunicación Efectiva Nivel 3: Transmite ideas complejas con claridad, escucha de forma asertiva, gestiona desacuerdos constructivamente y logra consensos orientados a la solución técnica.»"
  },

  // ==========================================
  // EJE: ORIENTACION AL LOGRO (NIVELES 1 Y 4)
  // ==========================================
  {
    id: "ci_logro_01",
    nivel: "Profesional",
    ejeId: "orientacion_logro_n1_4",
    ejeNombre: "Orientación al Logro (Niveles 1 y 4)",
    tipo: "Comportamental (Nivel Profesional)",
    tema: "Cumplimiento del Plan Anual de Auditoría bajo Restricciones de Tiempo y Recursos",
    caso: "A dos meses de finalizar la vigencia, la Oficina de Control Interno registra un retraso del 30% en el cronograma de auditorías debido a contingencias sobrevenidas. El Gestor III tiene asignada la auditoría de dos procesos críticos de fiscalización.",
    enunciado: "¿Cuál comportamiento evidencia el Nivel 4 de Orientación al Logro?",
    opciones: [
      {
        id: "A",
        texto: "Reorganizar el plan de trabajo propio y de su equipo de apoyo aplicando muestreo estadístico optimizado y herramientas analíticas digitales, reprogramando actividades no esenciales para asegurar la entrega de informes de alta calidad técnica en los plazos legales, superando los estándares esperados.",
        explicacion: "Correcta. El Nivel 4 de Orientación al Logro se caracteriza por la autogestión proactiva, el uso eficiente de metodologías ágiles y el compromiso inquebrantable con metas de alto impacto institucional superando obstáculos."
      },
      {
        id: "B",
        texto: "Proponer la cancelación de las auditorías pendientes justificándose en que 'el año ya se acabó'.",
        explicacion: "Incorrecta. Refleja pasividad y falta de compromiso con el Plan Anual de Auditoría institucional."
      },
      {
        id: "C",
        texto: "Copiar y pegar informes de vigencias anteriores cambiándoles únicamente la fecha para cumplir con la estadística numérica.",
        explicacion: "Incorrecta. Constituye fraude documental y falta grave contra la ética pública."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 815 de 2018 (Orientación al Logro)",
    citaNormativa: "«Orientación al Logro Nivel 4: Supera los estándares de desempeño establecidos, optimiza procesos y recursos para alcanzar metas ambiciosas y demuestra resiliencia ante contingencias operativas.»"
  },

  // ==========================================
  // EJE: ORIENTACION AL USUARIO Y AL CIUDADANO (NIVEL 1)
  // ==========================================
  {
    id: "ci_usuario_01",
    nivel: "Profesional",
    ejeId: "orientacion_usuario_n1",
    ejeNombre: "Orientación al Usuario y Ciudadano (Nivel 1)",
    tipo: "Comportamental (Nivel Profesional)",
    tema: "Atención de PQRS y Solicitudes Ciudadanas de Control Social",
    caso: "Una veeduría ciudadana solicita acceso al informe de evaluación del sistema de control interno sobre el recaudo aduanero de una seccional fronteriza. Un funcionario sugiere no responder porque 'los ciudadanos no entienden de auditoría'.",
    enunciado: "En cumplimiento de la Ley 1712 de 2014 y la Orientación al Ciudadano, ¿cuál es la actuación que debe orientar el Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Negar la solicitud alegando reserva absoluta sobre todos los documentos de la DIAN sin excepción.",
        explicacion: "Incorrecta. Los informes definitivos de auditoría son documentos públicos no sometidos a reserva, salvo partes estrictamente amparadas por reserva tributaria o secreto industrial."
      },
      {
        id: "B",
        texto: "Suministrar el informe definitivo de auditoría de forma oportuna, clara y en lenguaje comprensible (lenguaje claro), disociando previamente datos personales protegidos por reserva tributaria si los hubiere, facilitando el legítimo ejercicio del control social.",
        explicacion: "Correcta. La Ley 1712 de 2014 consagra el principio de máxima publicidad y transparencia. Los informes finales de control interno son de dominio público y deben entregarse oportunamente con respeto al ciudadano."
      },
      {
        id: "C",
        texto: "Cobrar una tarifa extraordinaria no autorizada para desmotivar al peticionario.",
        explicacion: "Incorrecta. Es una conducta arbitraria y contraria al principio de gratuidad en el acceso a la información pública."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Ley 1712 de 2014 (Transparencia y Acceso a la Información) y Código de Integridad",
    citaNormativa: "«Toda persona tiene derecho a solicitar y recibir información que esté en posesión de los sujetos obligados... garantizando el principio de máxima publicidad y lenguaje claro.»"
  },

  // ==========================================
  // EJE: TRABAJO EN EQUIPO (NIVEL 1)
  // ==========================================
  {
    id: "ci_equipo_01",
    nivel: "Profesional",
    ejeId: "trabajo_equipo_n1",
    ejeNombre: "Trabajo en Equipo (Nivel 1)",
    tipo: "Comportamental (Nivel Profesional)",
    tema: "Colaboración Interdisciplinaria en Comisiones de Auditoría",
    caso: "Se conforma una comisión de auditoría integrada por un contador, un ingeniero de sistemas y un abogado para revisar el sistema de facturación electrónica. En las reuniones, cada profesional descalifica los aportes de las otras disciplinas argumentando que 'solo su profesión es relevante'.",
    enunciado: "Como Gestor III que integra la comisión, ¿cuál es la actitud que promueve el Trabajo en Equipo Nivel 1?",
    opciones: [
      {
        id: "A",
        texto: "Aislarse y redactar únicamente su parte técnica sin hablar con los demás para evitar discusiones.",
        explicacion: "Incorrecta. Fragmenta el informe y genera contradicciones en los papeles de trabajo de auditoría."
      },
      {
        id: "B",
        texto: "Promover la integración sinérgica de los saberes técnicos: el rigor legal del abogado, la verificación transaccional del contador y el análisis de algoritmos del ingeniero, reconociendo el valor complementario de cada disciplina para lograr un informe integral sólido.",
        explicacion: "Correcta. El Trabajo en Equipo exige articulación armónica de habilidades diversas, respeto por la contribución de los pares y enfoque en el objetivo común del aseguramiento institucional."
      },
      {
        id: "C",
        texto: "Pedirle al Jefe de Control Interno que disuelva el equipo y asigne la auditoría a una sola persona.",
        explicacion: "Incorrecta. Una auditoría de sistemas tributarios complejos no puede ser abarcada adecuadamente por una sola disciplina sin merma de profundidad y calidad."
      }
    ],
    respuestaCorrecta: "B",
    norma: "Decreto 815 de 2018 (Trabajo en Equipo)",
    citaNormativa: "«Trabajo en Equipo Nivel 1: Coopera con los demás integrantes del grupo, comparte conocimientos y recursos, y valora las distintas perspectivas para el logro de las metas institucionales.»"
  },

  // ==========================================
  // EJE: RAZONAMIENTO ANALITICO
  // ==========================================
  {
    id: "ci_razonamiento_01",
    nivel: "Profesional",
    ejeId: "razonamiento_analitico",
    ejeNombre: "Razonamiento Analítico",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Inferencia Lógica y Muestreo de Auditoría en Facturación Masiva",
    caso: "En una auditoría analítica se analiza el comportamiento de emisión de facturación electrónica de un grupo de 1.000 contribuyentes de alto riesgo. Se observa que el 20% de los contribuyentes concentra el 80% del valor total facturado (Ley de Pareto). Al realizar pruebas sustantivas en el estrato de mayor valor (200 contribuyentes), se detectan inconsistencias graves en el 35% de los mismos.",
    enunciado: "¿Cuál es la conclusión analítica e inferencial que debe formular el auditor?",
    opciones: [
      {
        id: "A",
        texto: "Concluir que el 100% de los 1.000 contribuyentes cometen fraude fiscal y emitir pliego de cargos masivo inmediato a todos.",
        explicacion: "Incorrecta. Es una generalización indebida y arbitraria; el muestreo en un estrato de riesgo no permite imputar responsabilidad automática a quienes no fueron auditados individualmente."
      },
      {
        id: "B",
        texto: "Determinar que existe una concentración crítica de riesgo fiscal en el estrato superior de facturación con alta tasa de error material (35%), lo que amerita focalizar las auditorías de aseguramiento y recomendar al área de fiscalización la inspección profunda de este segmento prioritario.",
        explicacion: "Correcta. El razonamiento analítico riguroso interpreta la concentración de riesgos, cuantifica la significatividad del hallazgo y orienta las recomendaciones de control y fiscalización con criterio de costo-beneficio."
      },
      {
        id: "C",
        texto: "Afirmar que como el 65% de la muestra estuvo bien, el sistema no presenta ningún problema y no se requieren acciones.",
        explicacion: "Incorrecta. Un 35% de desviación en el estrato que concentra el 80% del volumen financiero representa una materialidad de riesgo inaceptable para la administración tributaria."
      }
    ],
    respuestaCorrecta: "B",
    norma: "NIA 530 (Muestreo de Auditoría) y Técnicas de Análisis Cuantitativo",
    citaNormativa: "«El auditor debe estratificar la población cuando la dispersión de valores sea amplia, permitiendo concentrar los procedimientos en partidas de mayor valor relativo o riesgo.»"
  }
];

// 3. Consolidar el banco completo para GESTOR III Control Interno (OPEC 236872)
const fullGestorCIBank = [
  ...CI_SPECIALIZED_QUESTIONS,
  ...filteredSharedQuestions
];

console.log(`Preguntas compartidas extraídas: ${filteredSharedQuestions.length}`);
console.log(`Preguntas especializadas de CI añadidas: ${CI_SPECIALIZED_QUESTIONS.length}`);
console.log(`Total Banco GESTOR III (Control Interno): ${fullGestorCIBank.length}`);

// 4. Escribir questions_gestor_iii_ci.js
const header = `// questions_gestor_iii_ci.js - Banco Maestro de Casos de Juicio Situacional (PJS)
// GESTOR III - Control Interno (Convocatoria DIAN 2676 - OPEC 236872 - Ficha PC-CI-3006)
// Total Casos: ${fullGestorCIBank.length}
// Cubre el 100% de los Indicadores a Evaluar oficiales de la CNSC/SIMO:
// Control Interno MECI, MIPG en Auditoría, Normas Internacionales de Auditoría (NIA/IIA),
// Metodologías de Auditorías de Sistemas TI, Gestión del Riesgo, Fiscalidad Internacional TACI,
// Principios de Contabilidad Pública (CGN), Conceptos de Contratación Estatal, Estructura y Misionalidad DIAN,
// Razonamiento Analítico, Competencias Comportamentales Profesionales (Niveles 1, 3 y 4) y Valores de Integridad.

const QUESTION_BANK_GESTOR_CI = ${JSON.stringify(fullGestorCIBank, null, 2)};

if (typeof window !== "undefined") {
  window.QUESTION_BANK_GESTOR_CI = QUESTION_BANK_GESTOR_CI;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_GESTOR_CI };
}
`;

fs.writeFileSync('questions_gestor_iii_ci.js', header, 'utf8');
console.log('Archivo questions_gestor_iii_ci.js generado con éxito.');
