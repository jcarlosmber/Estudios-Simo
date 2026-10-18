// questions_gestor_iii_ci.js - Banco Maestro de Casos de Juicio Situacional (PJS)
// GESTOR III - Control Interno (Convocatoria DIAN 2676 - OPEC 236872 - Ficha PC-CI-3006)
// Total Casos: 150
// Cubre el 100% de los Indicadores a Evaluar oficiales de la CNSC/SIMO:
// Control Interno MECI, MIPG en Auditoría, Normas Internacionales de Auditoría (NIA/IIA),
// Metodologías de Auditorías de Sistemas TI, Gestión del Riesgo, Fiscalidad Internacional TACI,
// Principios de Contabilidad Pública (CGN), Conceptos de Contratación Estatal, Estructura y Misionalidad DIAN,
// Razonamiento Analítico, Competencias Comportamentales Profesionales (Niveles 1, 3 y 4) y Valores de Integridad.

const QUESTION_BANK_GESTOR_CI = [
  {
    "id": "ci_ti_01",
    "nivel": "Profesional",
    "ejeId": "auditoria_sistemas_tecnologia",
    "ejeNombre": "Metodologías de Auditorías de Sistemas de Tecnología",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Auditoría de Pistas de Auditoría y Logs en Sistemas Transaccionales (MUISCA / SYGA)",
    "caso": "Durante una auditoría de sistemas a la plataforma del Sistema Informático Electrónico (MUISCA), el auditor Gestor III detecta que varios funcionarios con permisos de administrador pueden modificar directamente registros de declaraciones tributarias en base de datos sin que quede registro en los logs de auditoría transaccionales.",
    "enunciado": "¿Cuál es la recomendación técnica y de control interno que debe formular el auditor conforme a COBIT e ISO 27001?",
    "opciones": [
      {
        "id": "A",
        "texto": "Implementar de inmediato el principio de segregación de funciones (SoD) y configurar pistas de auditoría (audit trails) inmutables en base de datos que registren automáticamente cualquier comando DDL/DML privilegiado, prohibiendo la modificación directa en producción sin orden de cambio autorizada.",
        "explicacion": "Correcta. Según estándares de auditoría de TI (COBIT e ISO 27001), los usuarios con privilegios elevados no deben poder alterar transacciones sin trazabilidad inmutable y segregación estricta de funciones entre desarrollo/operación y producción."
      },
      {
        "id": "B",
        "texto": "Solicitar que los administradores envíen un correo electrónico informal cada fin de mes resumiendo las modificaciones manuales que hayan efectuado en las tablas de base de datos.",
        "explicacion": "Incorrecta. Un correo informal carece de integridad técnica, no constituye evidencia auditable inmutable y vulnera las buenas prácticas de seguridad informática gubernamental."
      },
      {
        "id": "C",
        "texto": "Eliminar todos los permisos de acceso a base de datos de los ingenieros de soporte técnico, deteniendo el mantenimiento correctivo del software.",
        "explicacion": "Incorrecta. Paraliza la operatividad tecnológica de la Entidad; la medida correcta es el control de acceso basado en roles (RBAC) y la bitácora inalterable, no la eliminación del soporte."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Marco COBIT, ISO/IEC 27001 y Guía de Auditoría de Sistemas de Información (MINTIC / DAFP)",
    "citaNormativa": "«Las entidades públicas deben garantizar la inmutabilidad e integridad de los registros de auditoría (logs) en sistemas de información misionales, asegurando la trazabilidad de accesos privilegiados y la estricta segregación de funciones.» (Políticas de Seguridad Digital del Estado)."
  },
  {
    "id": "ci_ti_02",
    "nivel": "Profesional",
    "ejeId": "auditoria_sistemas_tecnologia",
    "ejeNombre": "Metodologías de Auditorías de Sistemas de Tecnología",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Evaluación de Controles Generales de TI (ITGC) y Plan de Continuidad Tecnológica (DRP)",
    "caso": "Al evaluar la resiliencia tecnológica de los servidores donde reside el Registro Único Tributario (RUT), el auditor de Control Interno observa que las copias de seguridad se almacenan en el mismo centro de cómputo principal y que no se han realizado pruebas de restauración del Plan de Recuperación ante Desastres (DRP) en los últimos dos años.",
    "enunciado": "¿Qué tipo de hallazgo y riesgo material representa esta situación para la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "Un hallazgo administrativo de impacto menor que solo requiere actualizar el inventario físico de servidores.",
        "explicacion": "Incorrecta. La falta de respaldos externos y pruebas de DRP compromete la continuidad del servicio del Estado y la recaudación nacional, constituyendo un riesgo crítico y no menor."
      },
      {
        "id": "B",
        "texto": "Un hallazgo de no conformidad crítica sobre los Controles Generales de TI (ITGC), pues vulnera el principio de disponibilidad y resiliencia institucional, exponiendo a la Entidad a la pérdida catastrófica de información fiscal ante incidentes graves.",
        "explicacion": "Correcta. La ausencia de almacenamiento de backups fuera del sitio (offsite) y la omisión de simulacros de contingencia/DRP incumple la norma técnica ISO 22301 y los lineamientos de Gobierno Digital, generando un riesgo severo de interrupción operativa."
      },
      {
        "id": "C",
        "texto": "Una situación justificada por el ahorro presupuestal en licencias de almacenamiento en la nube privada gubernamental.",
        "explicacion": "Incorrecta. El ahorro presupuestal no puede contravenir los estándares obligatorios de seguridad digital y protección de activos de información crítica del Estado."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "ISO/IEC 27001 / ISO 22301 y Manual de Seguridad de la Información DIAN",
    "citaNormativa": "«Las copias de respaldo de información crítica deben probarse periódicamente y conservarse en una ubicación remota físicamente separada del sitio principal, asegurando el cumplimiento del RTO y RPO definidos en el Plan de Continuidad.»"
  },
  {
    "id": "ci_ti_03",
    "nivel": "Profesional",
    "ejeId": "auditoria_sistemas_tecnologia",
    "ejeNombre": "Metodologías de Auditorías de Sistemas de Tecnología",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Técnicas de Auditoría Asistidas por Computador (TAACs / CAATs)",
    "caso": "En el marco de una auditoría al proceso de devoluciones automáticas de saldos a favor en el impuesto sobre la renta, el equipo auditor dispone de una base de datos con 850.000 solicitudes tramitadas en el año.",
    "enunciado": "¿Cuál es la metodología más eficaz para que el Gestor III evalúe la integridad del algoritmo de validación de requisitos de las devoluciones?",
    "opciones": [
      {
        "id": "A",
        "texto": "Imprimir una muestra aleatoria de 20 solicitudes físicas y revisar los sellos de radicación en ventanilla.",
        "explicacion": "Incorrecta. Es ineficiente para evaluar algoritmos lógicos automatizados en poblaciones masivas y no valida el código ni las reglas de negocio del sistema."
      },
      {
        "id": "B",
        "texto": "Utilizar Técnicas de Auditoría Asistidas por Computador (TAACs / software de análisis de datos) para ejecutar pruebas de integridad de datos al 100% del universo, recreando las reglas de validación del sistema para identificar pagos anómalos o duplicados.",
        "explicacion": "Correcta. Las TAACs (CAATs) permiten analizar el 100% de la población de datos electrónicos, contrastar parámetros de negocio y detectar inconsistencias con precisión analítica inalcanzable mediante muestreo manual."
      },
      {
        "id": "C",
        "texto": "Delegar la auditoría al mismo desarrollador de software que programó el módulo de devoluciones para que entregue una constancia juramentada de que no hay errores.",
        "explicacion": "Incorrecta. Viola la independencia y objetividad de la auditoría; quien diseña u opera el control no puede ser el auditor independiente que certifique su eficacia."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Normas Globales de Auditoría Interna (IIA) y Guía de Auditoría con TAACs (ISACA)",
    "citaNormativa": "«Los auditores internos deben considerar el uso de herramientas de análisis de datos basadas en tecnología para mejorar la cobertura, precisión y profundidad de los procedimientos de aseguramiento.» (Norma 1220.A2 IIA)."
  },
  {
    "id": "ci_nia_01",
    "nivel": "Profesional",
    "ejeId": "normas_internacionales_auditoria",
    "ejeNombre": "Normas Internacionales de Auditoría",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Independencia, Objetividad y Conflicto de Intereses (Marco IIA / NIA)",
    "caso": "Un auditor Gestor III es asignado para liderar la auditoría del proceso de Cobro Coactivo de una Seccional. Hace 6 meses, dicho funcionario se desempeñaba como Jefe encargado de esa misma División de Cobranzas.",
    "enunciado": "De conformidad con las Normas Globales de Auditoría Interna del IIA y el Código de Ética profesional, ¿cuál es la conducta que debe adoptar el auditor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la asignación con entusiasmo, ya que su conocimiento previo del área le permitirá hacer una auditoría más rápida y condescendiente con sus antiguos compañeros.",
        "explicacion": "Incorrecta. Manifiesta un claro conflicto de intereses e impedimento de objetividad real y percibida."
      },
      {
        "id": "B",
        "texto": "Declarar de manera formal e inmediata su impedimento ante el Jefe de la Oficina de Control Interno por menoscabo a la objetividad individual, absteniéndose de intervenir en la auditoría de actividades sobre las cuales ejerció responsabilidad operativa en el último año.",
        "explicacion": "Correcta. La Norma del IIA sobre menoscabo a la independencia u objetividad establece expresamente que los auditores no deben auditar operaciones sobre las que tuvieron responsabilidad gerencial u operativa en un período previo (típicamente al menos un año)."
      },
      {
        "id": "C",
        "texto": "Continuar con la auditoría pero solicitar a un compañero que firme el informe final en su lugar para ocultar su participación.",
        "explicacion": "Incorrecta. Constituye una falta ética grave y un engaño documental que vulnera el principio de integridad y transparencia de la función pública."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Normas Globales de Auditoría Interna del IIA (Norma 1130 - Menoscabo a la Independencia u Objetividad)",
    "citaNormativa": "«Los auditores internos no deben asumir la responsabilidad operativa de auditar funciones o actividades sobre las cuales hayan tenido autoridad directa o responsabilidad en el año inmediatamente anterior.» (Norma 1130.A1 IIA)."
  },
  {
    "id": "ci_nia_02",
    "nivel": "Profesional",
    "ejeId": "normas_internacionales_auditoria",
    "ejeNombre": "Normas Internacionales de Auditoría",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Evidencia de Auditoría Suficiente y Apropiada (NIA 500 / ISSAI 2500)",
    "caso": "Al revisar el expediente de auditoría de un contrato de interventoría, el supervisor del equipo auditor encuentra que un hallazgo de presunto pago indebido se fundamenta únicamente en una llamada telefónica anónima, sin contrastar facturas, actas de recibo ni soportes contables.",
    "enunciado": "A la luz de la NIA 500 y las normas de auditoría gubernamental, ¿por qué no es procedente trasladar este hallazgo en el informe definitivo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Porque la evidencia obtenida carece de los atributos de suficiencia (cantidad) y propiedad (relevancia y fiabilidad), siendo indispensable corroborar documentalmente los hechos antes de formular conclusiones vinculantes.",
        "explicacion": "Correcta. La NIA 500 exige que el auditor obtenga evidencia 'suficiente y adecuada' (apropiada). Un testimonio telefónico anónimo no validado carece de fiabilidad y sustento probatorio para formular un hallazgo formal."
      },
      {
        "id": "B",
        "texto": "Porque en auditoría de control interno cualquier denuncia ciudadana debe ser aceptada como prueba plena sin necesidad de verificación.",
        "explicacion": "Incorrecta. Las denuncias son insumos o indicios de riesgo, no constituyen prueba plena por sí solas en los papeles de trabajo de auditoría."
      },
      {
        "id": "C",
        "texto": "Porque los pagos contractuales en el sector público nunca pueden ser cuestionados una vez girados por la Tesorería.",
        "explicacion": "Incorrecta. Todo pago estatal está sujeto a control previo, concomitante y posterior de auditoría; la razón técnica es la falta de evidencia de soporte idónea."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "NIA 500 (Evidencia de Auditoría) y Marco Internacional de Práctica Profesional (IIA Norma 2310)",
    "citaNormativa": "«El auditor diseñará y aplicará procedimientos de auditoría de forma que le permitan obtener evidencia de auditoría suficiente y adecuada para poder alcanzar conclusiones razonables en las que basar su opinión.» (NIA 500, Art. 4)."
  },
  {
    "id": "ci_nia_03",
    "nivel": "Profesional",
    "ejeId": "normas_internacionales_auditoria",
    "ejeNombre": "Normas Internacionales de Auditoría",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Estructura Técnica del Hallazgo de Auditoría (C-C-C-E)",
    "caso": "Un auditor elabora una observación sobre el archivo de expedientes tributarios señalando: 'Se observan desórdenes en los archivadores del piso 3, lo cual da mala imagen a los visitantes'.",
    "enunciado": "¿Cómo debe estructurarse técnicamente este hallazgo para cumplir con la metodología estándar de auditoría gubernamental de la Contraloría y el DAFP?",
    "opciones": [
      {
        "id": "A",
        "texto": "Debe redactarse incorporando los cuatro elementos metodológicos obligatorios: Condición (lo que es), Criterio (norma técnica de archivo que debió cumplirse), Causa (origen de la falla) y Efecto (impacto en la pérdida de documentos o prescripción).",
        "explicacion": "Correcta. La metodología técnica universal de auditoría exige que todo hallazgo contenga: Condición (situación detectada), Criterio (norma o estándar vulnerado), Causa (por qué ocurrió) y Efecto (consecuencia o riesgo materializado)."
      },
      {
        "id": "B",
        "texto": "Debe dejarse tal como está, puesto que la percepción estética del auditor es suficiente para ordenar procesos disciplinarios.",
        "explicacion": "Incorrecta. La auditoría no se basa en percepciones subjetivas o estéticas, sino en desviaciones objetivas frente a criterios y estándares normativos."
      },
      {
        "id": "C",
        "texto": "Debe suprimirse cualquier mención a la causa para evitar comprometer a los directores seccionales responsables del área.",
        "explicacion": "Incorrecta. La identificación de la causa-raíz es el elemento medular que permite plantear acciones correctivas efectivas en el plan de mejoramiento institucional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Guía de Auditoría para Entidades Públicas (DAFP / CGR)",
    "citaNormativa": "«Todo hallazgo de auditoría debe constar de Condición, Criterio, Causa y Efecto, proporcionando la base fáctica y analítica necesaria para formular planes de mejoramiento orientados a la causa-raíz.»"
  },
  {
    "id": "ci_taci_01",
    "nivel": "Profesional",
    "ejeId": "fiscalidad_internacional",
    "ejeNombre": "Fiscalidad Internacional TACI",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Régimen de Precios de Transferencia y Principio de Plena Competencia (Arm's Length)",
    "caso": "En una auditoría de aseguramiento a los procesos de fiscalización de grandes contribuyentes, el auditor Gestor III revisa los papeles de trabajo de un caso donde una multinacional farmacéutica en Colombia compra materias primas a su casa matriz en Suiza a un precio 400% superior al precio de mercado internacional entre partes independientes.",
    "enunciado": "¿Qué concepto normativo y principio rector del régimen tributario internacional debió verificar el equipo de fiscalización?",
    "opciones": [
      {
        "id": "A",
        "texto": "El principio de plena competencia (Arm's length principle) consagrado en el artículo 260-1 del Estatuto Tributario, el cual obliga a que las transacciones entre partes vinculadas se pacten a precios comparables con los que hubieran utilizado terceros independientes en operaciones idénticas.",
        "explicacion": "Correcta. El artículo 260-1 del E.T. adopta el estándar internacional de la OCDE (Principio de Plena Competencia), mediante el cual la DIAN ajusta las bases gravables de contribuyentes que transfieren artificialmente utilidades al exterior inflando costos con vinculados económicos."
      },
      {
        "id": "B",
        "texto": "La exoneración automática de impuestos por tratarse de una empresa domiciliada en un país europeo con alta calificación crediticia.",
        "explicacion": "Incorrecta. No existe tal exoneración; por el contrario, los vínculos económicos con el exterior activan formalidades estrictas del régimen de precios de transferencia."
      },
      {
        "id": "C",
        "texto": "La aplicación de tarifa cero de retención en la fuente asumiendo que los pagos al exterior son ingresos exentos sin necesidad de soporte.",
        "explicacion": "Incorrecta. Los pagos al exterior por compras a vinculados están sometidos a estricto control de precios de transferencia y deducción de costos según el artículo 122 y 260-1 del E.T."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Arts. 260-1 a 260-11 y Guías sobre Precios de Transferencia de la OCDE",
    "citaNormativa": "«Los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados del exterior están obligados a determinar sus ingresos ordinarios y extraordinarios, sus costos y deducciones... considerando para esas operaciones los precios y márgenes de utilidad que se hubieran utilizado en operaciones comparables con o entre partes independientes.» (Art. 260-1 E.T.)."
  },
  {
    "id": "ci_taci_02",
    "nivel": "Profesional",
    "ejeId": "fiscalidad_internacional",
    "ejeNombre": "Fiscalidad Internacional TACI",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Convenios para Evitar la Doble Imposición (CDI) y Cláusula de Beneficiario Efectivo",
    "caso": "Al examinar la correcta aplicación de un Convenio para Evitar la Doble Imposición (CDI) suscrito por Colombia, se detecta que un contribuyente nacional giró regalías a una sociedad 'de papel' (conduit company) en un Estado contratante sin sustancia económica real, cuyos accionistas finales residen en una jurisdicción no cooperante.",
    "enunciado": "¿Cuál es la disposición de control y fiscalidad internacional que debe verificar el auditor para evitar el abuso de los tratados (Treaty Shopping)?",
    "opciones": [
      {
        "id": "A",
        "texto": "La cláusula del 'Beneficiario Efectivo' y la Cláusula Principal de Propósito (PPT) de las acciones BEPS, verificando que la entidad receptora no sea un mero vehículo interpuesto para acceder indebidamente a las tarifas reducidas del convenio.",
        "explicacion": "Correcta. En los CDI y las directrices BEPS (Acción 6) de la OCDE, los beneficios de tarifa reducida solo aplican al verdadero beneficiario efectivo con sustancia económica. Las sociedades instrumentales interpuestas pierden los beneficios tributarios del convenio."
      },
      {
        "id": "B",
        "texto": "El pago de una tasa adicional voluntaria para convalidar el uso del convenio sin investigar la identidad de los beneficiarios reales.",
        "explicacion": "Incorrecta. La ley tributaria no permite convalidar maniobras abusivas mediante pagos voluntarios; la norma antielusión exige desconocer la transacción ficticia."
      },
      {
        "id": "C",
        "texto": "Permitir la deducción total sin exigir el certificado de residencia fiscal del país emisor.",
        "explicacion": "Incorrecta. El certificado de residencia fiscal y la prueba del beneficiario efectivo son requisitos formales e insustituibles para la procedencia de cualquier CDI."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 869 y Convenios de Doble Imposición (Modelo OCDE - Acción 6 BEPS)",
    "citaNormativa": "«No se otorgará ningún beneficio contemplado en un Convenio Tributario si es razonable concluir que la obtención de dicho beneficio fue uno de los propósitos principales de la transacción o arreglo...» (Regla General Anti-Abuso / PPT)."
  },
  {
    "id": "ci_contab_01",
    "nivel": "Profesional",
    "ejeId": "principios_contabilidad_publica",
    "ejeNombre": "Principios de Contabilidad Pública",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Principio de Devengo / Causación en el Reconocimiento de Ingresos Tributarios y Pasivos",
    "caso": "En una evaluación financiera al balance de la DIAN, el auditor Gestor III evidencia que las sumas recaudadas por concepto de retenciones en la fuente correspondientes a litigios en discusión gubernativa no han sido provisionadas contablemente conforme al grado de probabilidad de fallo en contra.",
    "enunciado": "¿Cuál principio del Régimen de Contabilidad Pública emitido por la Contaduría General de la Nación (CGN) se encuentra en riesgo de vulneración?",
    "opciones": [
      {
        "id": "A",
        "texto": "El principio de Negocio en Marcha y la depreciación acelerada de equipos de oficina.",
        "explicacion": "Incorrecta. No guarda relación con el reconocimiento de contingencias judiciales ni pasivos estimados."
      },
      {
        "id": "B",
        "texto": "El principio de Devengo y el criterio de Prudencia en el reconocimiento de Provisiones y Pasivos Contingentes, que exige registrar oportunamente las obligaciones probables derivadas de litigios para reflejar fielmente la situación financiera de la entidad pública.",
        "explicacion": "Correcta. El marco normativo para Entidades de Gobierno de la CGN establece que las contingencias judiciales deben evaluarse periódicamente (probable, posible o remota) y registrar una provisión contable cuando la salida de recursos sea probable y cuantificable de forma fiable."
      },
      {
        "id": "C",
        "texto": "El principio de Caja estricto que prohíbe registrar cualquier tipo de pasivo antes de que exista sentencia ejecutoriada del Consejo de Estado.",
        "explicacion": "Incorrecta. La contabilidad pública moderna en Colombia opera bajo la base de acumulación (devengo), no bajo caja estricta; las provisiones se reconocen antes de la sentencia ejecutoriada cuando la pérdida es probable."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Resolución 533 de 2015 de la CGN (Marco Normativo para Entidades de Gobierno) y Marco Conceptual de la Contabilidad Pública",
    "citaNormativa": "«Los hechos económicos se reconocen en el momento en que suceden y no solamente cuando se recibe o paga dinero en efectivo o su equivalente, bajo la base del devengo, garantizando la prudencia y revelación de provisiones probables.» (CGN)."
  },
  {
    "id": "ci_contab_02",
    "nivel": "Profesional",
    "ejeId": "principios_contabilidad_publica",
    "ejeNombre": "Principios de Contabilidad Pública",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Control Contable y Conciliación de Mercancías Aprehendidas y Decomisadas",
    "caso": "Al auditar los depósitos de mercancías aprehendidas en una Seccional de Aduanas, el Gestor III identifica que existen bienes decomisados físicamente valorados en más de $3.000 millones que no han sido dados de alta en el sistema contable ni clasificados en cuentas de bienes en custodia o propiedad de la Entidad.",
    "enunciado": "¿Qué impacto tiene esta inconsistencia en los Estados Financieros de la Entidad?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ninguno, porque las mercancías de contrabando incautadas no forman parte de los inventarios ni de las cuentas de orden del sector público.",
        "explicacion": "Incorrecta. Todo bien aprehendido o decomisado a favor de la Nación debe tener trazabilidad contable rigurosa en cuentas de orden o activos, según su situación jurídica."
      },
      {
        "id": "B",
        "texto": "Genera subestimación de activos y falta de revelación adecuada en los Estados Financieros, además de propiciar el riesgo de pérdida, sustracción o deterioro de bienes sin control patrimonial auditable.",
        "explicacion": "Correcta. El Régimen de Contabilidad Pública exige la conciliación permanente entre el inventario físico de recintos aduaneros y las cuentas contables de bienes en custodia / decomisados, evitando la invisibilidad patrimonial."
      },
      {
        "id": "C",
        "texto": "Justifica la donación inmediata de las mercancías sin soporte legal para equilibrar los libros.",
        "explicacion": "Incorrecta. La disposición de mercancías decomisadas sigue un procedimiento aduanero reglado estricto y no puede usarse para tapar desbalances contables."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Régimen de Contabilidad Pública (CGN) y Manual de Procedimientos Contables DIAN",
    "citaNormativa": "«Los bienes muebles e inmuebles administrados, en custodia o en proceso de extinción de dominio o decomiso deben registrarse en las cuentas correspondientes, garantizando su control físico y financiero.»"
  },
  {
    "id": "ci_riesgo_01",
    "nivel": "Profesional",
    "ejeId": "gestion_riesgo",
    "ejeNombre": "Gestión del Riesgo",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Diseño de la Matriz de Riesgos de Corrupción y Líneas de Defensa (DAFP / ISO 31000)",
    "caso": "En la actualización del Mapa de Riesgos Institucionales de la DIAN, un líder de proceso clasifica el riesgo de 'Colusión de funcionarios para alterar avalúos en remates coactivos' con impacto leve y propone como único control: 'Recomendar al funcionario que actúe con rectitud'.",
    "enunciado": "Como auditor de Control Interno que evalúa la solidez metodológica de la matriz, ¿cuál es el dictamen técnico correcto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobar el control por considerar que la buena fe contractual y laboral es autosuficiente para mitigar el riesgo de corrupción.",
        "explicacion": "Incorrecta. La Guía DAFP prohíbe taxativamente catalogar 'buenos deseos' o normas abstractas como controles operativos de riesgo de corrupción."
      },
      {
        "id": "B",
        "texto": "Rechazar la valoración y exigir el rediseño del control, ya que una recomendación verbal es un control inexistente; se requiere diseñar controles preventivos y detectivos automatizados con doble autorización, rotación de peritos y trazabilidad pública en el portal transaccional.",
        "explicacion": "Correcta. Conforme a la Guía de Riesgos de Corrupción del DAFP, los controles deben ser específicos, medibles, tener responsable, periodicidad y evidencia verificable. Un recordatorio ético verbal no reduce el riesgo residual."
      },
      {
        "id": "C",
        "texto": "Eliminar el riesgo del mapa para no alarmar a los entes de control externos.",
        "explicacion": "Incorrecta. Ocultar o suprimir riesgos tipificados de corrupción es una falta grave que viola la Ley 1474 de 2011 (Estatuto Anticorrupción)."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 1474 de 2011 (Estatuto Anticorrupción) y Guía para la Gestión del Riesgo (DAFP versión vigente)",
    "citaNormativa": "«Un control no puede consistir en el simple cumplimiento de las funciones generales del cargo ni en declaraciones éticas genéricas. Debe ser una acción concreta orientada a modificar la probabilidad o el impacto del riesgo.» (Guía DAFP)."
  },
  {
    "id": "ci_riesgo_02",
    "nivel": "Profesional",
    "ejeId": "gestion_riesgo",
    "ejeNombre": "Gestión del Riesgo",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Riesgo Inherente vs. Riesgo Residual y Eficacia del Control",
    "caso": "Al evaluar la efectividad de los controles en el proceso de Fiscalización Aduanera, se calcula que el Riesgo Inherente es 'Extremo' debido a los montos transados en comercio exterior. La dependencia auditada implementó un sistema automatizado de perfiles de riesgo con inteligencia artificial que filtra aleatoriamente los contenedores.",
    "enunciado": "¿Cómo debe medir el Gestor III el Riesgo Residual del proceso?",
    "opciones": [
      {
        "id": "A",
        "texto": "Asumiendo que el riesgo inherente se redujo a cero de forma permanente por la simple compra del software de inteligencia artificial.",
        "explicacion": "Incorrecta. El riesgo residual nunca es cero; la adquisición de tecnología no garantiza su calibración ni la ausencia de fallas operativas o manipulación humana."
      },
      {
        "id": "B",
        "texto": "Evaluando el diseño, implementación y operatividad práctica del control mediante pruebas de recorrido y muestreo de efectividad, para determinar si el riesgo residual bajó a un nivel aceptable según el apetito de riesgo institucional.",
        "explicacion": "Correcta. La evaluación del riesgo residual exige probar la eficacia operativa de los controles (diseño + ejecución + evidencia histórica), verificando si la exposición remanente se sitúa dentro de los rangos tolerables por la Alta Dirección."
      },
      {
        "id": "C",
        "texto": "Trasladando la responsabilidad de la valoración del riesgo residual a la Policía Fiscal y Aduanera (POLFA).",
        "explicacion": "Incorrecta. La valoración de riesgos institucionales es responsabilidad interna de la DIAN en su marco de MIPG y Control Interno."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "ISO 31000 y Manual de Gestión Integral del Riesgo DIAN",
    "citaNormativa": "«El riesgo residual es el nivel de riesgo que permanece después de implementar los controles. Su valoración requiere verificar no solo el diseño formal del control sino su efectividad en la operación diaria.»"
  },
  {
    "id": "ci_meci_01",
    "nivel": "Profesional",
    "ejeId": "control_interno_meci",
    "ejeNombre": "Modelo Estándar de Control Interno MECI",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Articulación del MECI en la 7ª Dimensión del MIPG y el Esquema de Líneas de Defensa",
    "caso": "Durante una mesa técnica institucional, un funcionario sostiene que la Oficina de Control Interno de la DIAN es la encargada de aprobar previamente las órdenes de compra y los actos de liquidación de impuestos para evitar errores.",
    "enunciado": "De acuerdo con el Decreto 1499 de 2017 y el Modelo de las Tres Líneas del Instituto de Auditores Internos (IIA), ¿cuál es la precisión conceptual que debe efectuar el auditor Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Confirmar que la Oficina de Control Interno debe coadministrar y firmar los actos administrativos para compartir la responsabilidad disciplinaria con el Director Seccional.",
        "explicacion": "Incorrecta. La coadministración está expresamente prohibida a las Oficinas de Control Interno por la Ley 87 de 1993 y desnaturaliza su rol evaluador."
      },
      {
        "id": "B",
        "texto": "Aclarar que la Oficina de Control Interno actúa como la 'Tercera Línea' brindando aseguramiento y asesoría independiente y objetiva; la 'Primera Línea' (dueños de proceso) y la 'Segunda Línea' (supervisores y áreas técnicas) son las únicas facultadas para diseñar y ejecutar los controles operativos diarios sin coadministración de los auditores.",
        "explicacion": "Correcta. La Ley 87 de 1993 y el modelo MECI integrado en MIPG establecen con total claridad que el control interno no es coadministrador; la evaluación independiente (3ª línea) perdería objetividad si interviniera en aprobaciones operativas."
      },
      {
        "id": "C",
        "texto": "Indicar que el control previo fue restablecido por la Constitución de 1991 para todas las entidades públicas de orden nacional.",
        "explicacion": "Incorrecta. La Constitución de 1991 abolió el control previo y perceptivo en los órganos de control, instituyendo el control posterior y selectivo."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 87 de 1993, Decreto 1499 de 2017 y Lineamiento de 3 Líneas de Defensa (DAFP)",
    "citaNormativa": "«En ningún caso, el ejercicio de las funciones del responsable de la oficina de control interno podrá ser previo o perceptivo ni implicará coadministración en las decisiones propias de la administración activa.» (Ley 87 de 1993, Art. 12)."
  },
  {
    "id": "ci_meci_02",
    "nivel": "Profesional",
    "ejeId": "control_interno_meci",
    "ejeNombre": "Modelo Estándar de Control Interno MECI",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Autocontrol, Autorregulación y Autogestión como Principios Constitucionales del MECI",
    "caso": "Un analista tributario comete un error en el cálculo de una sanción y, al advertirlo, decide no corregirlo argumentando: 'Eso le corresponde encontrarlo a la Oficina de Control Interno cuando hagan auditoría el próximo año'.",
    "enunciado": "¿Cuál principio fundacional del Sistema de Control Interno está desconociendo el empleado?",
    "opciones": [
      {
        "id": "A",
        "texto": "El principio de Autocontrol, el cual exige que cada servidor público evalúe, controle y corrija oportunamente su propio trabajo y el cumplimiento de las tareas asignadas en el marco de sus funciones.",
        "explicacion": "Correcta. El Autocontrol es la capacidad de cada servidor de diagnosticar, monitorear y subsanar desviaciones en su labor diaria sin esperar auditorías externas o posteriores."
      },
      {
        "id": "B",
        "texto": "El principio de Jerarquía vertical militar que releva al funcionario de toda responsabilidad personal.",
        "explicacion": "Incorrecta. La función pública civil en Colombia se fundamenta en la responsabilidad individual del servidor (Art. 6 C.P.) y el autocontrol."
      },
      {
        "id": "C",
        "texto": "El principio de Inmunidad de los actos tributarios preparatorios.",
        "explicacion": "Incorrecta. No existe tal figura; los actos preparatorios con errores inducen a la nulidad del acto administrativo final."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 87 de 1993, Art. 2 y Marco Conceptual del MECI (DAFP)",
    "citaNormativa": "«El autocontrol es la capacidad que ostenta cada servidor público para considerar, controlar y aplicar en su función diaria los métodos y procedimientos establecidos, garantizando la eficacia y legalidad de sus actuaciones.»"
  },
  {
    "id": "ci_mipg_01",
    "nivel": "Profesional",
    "ejeId": "mipg_auditoria",
    "ejeNombre": "MIPG en Auditoría Institucional",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Formulación del Plan Anual de Auditoría Basado en Riesgos (PAA)",
    "caso": "Para la elaboración del Plan Anual de Auditoría (PAA) de la vigencia, el Director de la Oficina de Control Interno solicita priorizar los procesos que serán objeto de evaluación de aseguramiento.",
    "enunciado": "¿Cuál es el criterio técnico que debe utilizar el Gestor III para determinar el universo auditable y la prioridad de las auditorías?",
    "opciones": [
      {
        "id": "A",
        "texto": "Seleccionar únicamente las dependencias que tengan menos carga de trabajo en el año para no incomodar a los procesos más atareados.",
        "explicacion": "Incorrecta. La auditoría no se planifica por conveniencia operativa de los auditados sino por criticidad y riesgo."
      },
      {
        "id": "B",
        "texto": "Construir una matriz de priorización basada en riesgos, evaluando el impacto presupuestal, los riesgos residuales altos/extremos de los mapas de riesgo, los cambios regulatorios recientes, las denuncias ciudadanas y los resultados de autodiagnósticos FURAG.",
        "explicacion": "Correcta. El estándar internacional del IIA y la Guía DAFP para el Plan Anual de Auditoría exigen que este sea 100% basado en riesgos, asignando recursos de auditoría donde mayor sea el impacto potencial en los objetivos institucionales."
      },
      {
        "id": "C",
        "texto": "Auditar exactamente las mismas 5 áreas del año anterior sin variar el alcance ni verificar si los riesgos cambiaron.",
        "explicacion": "Incorrecta. Un plan estático y repetitivo incumple las directrices del MIPG y omite la evaluación de riesgos emergentes."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 1499 de 2017, Manual Operativo del MIPG y Norma IIA 2010 (Planificación)",
    "citaNormativa": "«El Director de Auditoría Interna debe establecer un plan de auditoría basado en riesgos para determinar las prioridades de la actividad de auditoría interna, consistente con las metas de la organización.» (Norma 2010 IIA)."
  },
  {
    "id": "ci_mipg_02",
    "nivel": "Profesional",
    "ejeId": "mipg_auditoria",
    "ejeNombre": "MIPG en Auditoría Institucional",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Seguimiento a Planes de Mejoramiento y Cierre de No Conformidades",
    "caso": "Al realizar el seguimiento trimestral al Plan de Mejoramiento Institucional suscrito ante la Contraloría General de la República (CGR), el auditor constata que una acción correctiva figura como '100% cumplida', pero al pedir la evidencia documental de soporte, la dependencia auditada admite que el procedimiento no se ha implementado en la práctica.",
    "enunciado": "¿Qué actuación corresponde realizar al Gestor III conforme a sus funciones oficiales?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar el estado de cumplimiento reportado, emitir el informe de alerta por presunta falsedad o ineficacia del plan, y requerir el reajuste inmediato del cronograma con evidencias reales y sostenibles antes del reporte oficial al ente de control externo.",
        "explicacion": "Correcta. La función oficial del Gestor III en Control Interno es validar la veracidad y nivel de avance de los planes de mejoramiento internos y externos; avalar reportes ficticios genera responsabilidad solidaria."
      },
      {
        "id": "B",
        "texto": "Dar por bueno el reporte y avalarlo ante la Contraloría para evitar sanciones institucionales a la DIAN.",
        "explicacion": "Incorrecta. Constituye una falta gravísima contra la fe pública y la ética del auditor, tipificada penal y disciplinariamente."
      },
      {
        "id": "C",
        "texto": "Asumir personalmente la redacción e implementación del procedimiento operativo de la dependencia auditada.",
        "explicacion": "Incorrecta. El auditor no ejecuta la acción correctiva del proceso operativo; su labor es de verificación, seguimiento y aseguramiento."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Resolución Orgánica de la CGR sobre Planes de Mejoramiento y Manual de Funciones PC-CI-3006",
    "citaNormativa": "«Gestionar el seguimiento a los planes de mejoramiento internos y los suscritos con los entes externos de control validando su veracidad y nivel de avance de acuerdo con la normatividad vigente.» (Función 5, OPEC 236872)."
  },
  {
    "id": "ci_sol_prob_01",
    "nivel": "Profesional",
    "ejeId": "solucion_problemas_n4",
    "ejeNombre": "Solución de Problemas (Nivel 4)",
    "tipo": "Comportamental (Nivel Profesional)",
    "tema": "Análisis Causa-Raíz y Pensamiento Sistémico en Desviaciones de Procesos Críticos",
    "caso": "En tres Direcciones Seccionales de frontera se vienen presentando reiteradas demandas de nulidad y restablecimiento del derecho ganadas por los contribuyentes debido a vicios de forma en la notificación del pliego de cargos aduanero. Los directores locales insisten en que el problema es 'falta de presupuesto para fotocopias'.",
    "enunciado": "Como Gestor III líder en Control Interno, ¿cuál es la intervención integral que evidencia el nivel de competencia 4 en Solución de Problemas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la justificación local y solicitar al Ministerio de Hacienda una adición presupuestal para fotocopias e impresoras en las seccionales.",
        "explicacion": "Incorrecta. Se queda en el síntoma aparente y no aborda la causa estructural del fallo jurídico-procesal."
      },
      {
        "id": "B",
        "texto": "Liderar un análisis causa-raíz multidisciplinario (método de Ishikawa / 5 Porqués) contrastando las sentencias judiciales, identificando que el origen real radica en la indebida parametrización de la notificación electrónica en el sistema informático y la falta de estandarización procesal; y diseñar un plan de contingencia normativo-tecnológico coordinado con la Dirección de Gestión Jurídica.",
        "explicacion": "Correcta. La competencia Nivel 4 en Solución de Problemas exige diagnosticar la raíz profunda con visión sistémica, trascender los síntomas obvios y diseñar soluciones sostenibles que articulen tecnología, procesos y normativa."
      },
      {
        "id": "C",
        "texto": "Enviar un memorando general a los funcionarios de frontera advirtiéndoles que serán denunciados penalmente si vuelven a perder una demanda.",
        "explicacion": "Incorrecta. Es una medida punitiva y reactiva que no resuelve la causa raíz de la deficiencia procesal."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 815 de 2018 (Competencias Comportamentales del Empleo Público)",
    "citaNormativa": "«Solución de Problemas Nivel 4: Identifica problemas complejos, analiza causas subyacentes, genera alternativas viables con base en información confiable y formula soluciones estructurales y sostenibles para la organización.»"
  },
  {
    "id": "ci_sol_prob_02",
    "nivel": "Profesional",
    "ejeId": "solucion_problemas_n4",
    "ejeNombre": "Solución de Problemas (Nivel 4)",
    "tipo": "Comportamental (Nivel Profesional)",
    "tema": "Resolución de Cuellos de Botella y Optimización de Procesos Institucionales",
    "caso": "El proceso de respuesta a requerimientos de la Procuraduría y la Contraloría sobre presuntas irregularidades en cobros tributarios presenta un índice de vencimiento de términos del 42%, lo que expone a los directivos a sanciones por desacato.",
    "enunciado": "¿Cuál acción del Gestor III refleja una solución innovadora y estructural acorde con su función de guiar a las dependencias en la oportunidad de respuestas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Implementar un tablero de control (dashboard) con alertas tempranas semaforizadas a 10, 5 y 2 días del vencimiento, acompañado de mesas de trabajo semanales de seguimiento y una plantilla estandarizada de respuestas que garantice suficiencia técnica y jurídica oportuna.",
        "explicacion": "Correcta. Combina automatización, seguimiento preventivo proactivo y herramientas operativas que atacan directamente el cuello de botella temporal y de calidad."
      },
      {
        "id": "B",
        "texto": "Radicar solicitudes masivas de prórroga a los entes de control para ganar tiempo sin cambiar la forma de trabajo.",
        "explicacion": "Incorrecta. Las prórrogas indiscriminadas dilatan la respuesta y no resuelven la ineficiencia interna."
      },
      {
        "id": "C",
        "texto": "Instruir a los funcionarios para que respondan con cartas genéricas sin contestar de fondo las preguntas de los órganos de control.",
        "explicacion": "Incorrecta. Viola el deber de colaboración armónica entre poderes públicos y puede constituir falta disciplinaria gravísima."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Manual de Funciones PC-CI-3006, Función 7 y Decreto 815 de 2018",
    "citaNormativa": "«Guiar a las dependencias en las respuestas entre la entidad, entes de control y partes interesadas... verificando que se cumplan los criterios de oportunidad y pertinencia.»"
  },
  {
    "id": "ci_etico_01",
    "nivel": "Profesional",
    "ejeId": "comportamiento_etico_n1_4",
    "ejeNombre": "Comportamiento Ético (Niveles 1 y 4)",
    "tipo": "Comportamental (Nivel Profesional)",
    "tema": "Presión Jerárquica para Modificar Hallazgos de Auditoría",
    "caso": "Durante la auditoría a un contrato de tecnología, el auditor Gestor III detecta sobrecostos evidentes y falta de entrega de entregables clave. Un alto directivo de la entidad se reúne en privado con el auditor y le solicita 'moderar la redacción' y reclasificar el hallazgo como una simple sugerencia menor para 'no perjudicar la imagen de la administración'.",
    "enunciado": "¿Cuál es la respuesta y proceder ético indiscutible que debe sostener el auditor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Acceder a la petición del directivo a cambio de ser postulado a una comisión de servicios en el exterior.",
        "explicacion": "Incorrecta. Constituye cohecho, corrupción y falta disciplinaria gravísima sancionable con destitución e inhabilidad general."
      },
      {
        "id": "B",
        "texto": "Mantener con firmeza, objetividad y respeto la evidencia documental y la calificación técnica del hallazgo en el informe oficial, dejando constancia de los papeles de trabajo y comunicando formalmente la situación al Jefe de Control Interno bajo las salvaguardas de integridad pública.",
        "explicacion": "Correcta. El Comportamiento Ético Nivel 4 exige mantener la rectitud, objetividad profesional y resistencia irreductible ante cualquier tipo de presión política o jerárquica, salvaguardando el interés general y la verdad."
      },
      {
        "id": "C",
        "texto": "Filtrar el borrador del informe a redes sociales de manera anónima para generar escándalo público antes de que se apruebe formalmente.",
        "explicacion": "Incorrecta. Vulnera la reserva de los papeles de trabajo de auditoría y los conductos regulares legales."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Código de Integridad del Servicio Público, Ley 1952 de 2019 (Código General Disciplinario) y Normas IIA",
    "citaNormativa": "«Comportamiento Ético Nivel 4: Actúa con probidad y rectitud, antepone el bien común al particular y defiende los principios institucionales aun en situaciones de alta presión o conflicto.»"
  },
  {
    "id": "ci_comunicacion_01",
    "nivel": "Profesional",
    "ejeId": "comunicacion_efectiva_n1_3",
    "ejeNombre": "Comunicación Efectiva (Niveles 1 y 3)",
    "tipo": "Comportamental (Nivel Profesional)",
    "tema": "Comunicación de Hallazgos en Mesas de Trabajo con Auditados Reacios",
    "caso": "En la reunión de cierre de una auditoría, el equipo auditado reacciona a la defensiva y de forma agresiva ante la exposición de tres hallazgos de control interno, acusando al equipo auditor de tener 'animadversión personal'.",
    "enunciado": "¿Cómo debe conducir la comunicación el Gestor III en aplicación del Nivel 3 de Comunicación Efectiva?",
    "opciones": [
      {
        "id": "A",
        "texto": "Responder con igual agresividad y amenazar con denunciar a los funcionarios inmediatamente ante la Fiscalía General.",
        "explicacion": "Incorrecta. Escala el conflicto, vulnera el trato respetuoso y desvía la auditoría hacia confrontaciones improductivas."
      },
      {
        "id": "B",
        "texto": "Mantener la serenidad y la escucha activa, despersonalizar la discusión enfocándola estrictamente en los hechos objetivos, criterios normativos y evidencias de los papeles de trabajo, explicando con claridad constructiva cómo el plan de mejoramiento fortalecerá la seguridad jurídica del mismo equipo auditado.",
        "explicacion": "Correcta. La Comunicación Efectiva Nivel 3 implica asertividad, manejo constructivo de objeciones, enfoque pedagógico y orientación a resultados basados en hechos verificables."
      },
      {
        "id": "C",
        "texto": "Retirar los hallazgos para calmar los ánimos y terminar la reunión en un ambiente amistoso.",
        "explicacion": "Incorrecta. Falsifica los resultados de la auditoría y vulnera la integridad profesional del auditor."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 815 de 2018 y Manual de Auditoría Interna DIAN",
    "citaNormativa": "«Comunicación Efectiva Nivel 3: Transmite ideas complejas con claridad, escucha de forma asertiva, gestiona desacuerdos constructivamente y logra consensos orientados a la solución técnica.»"
  },
  {
    "id": "ci_logro_01",
    "nivel": "Profesional",
    "ejeId": "orientacion_logro_n1_4",
    "ejeNombre": "Orientación al Logro (Niveles 1 y 4)",
    "tipo": "Comportamental (Nivel Profesional)",
    "tema": "Cumplimiento del Plan Anual de Auditoría bajo Restricciones de Tiempo y Recursos",
    "caso": "A dos meses de finalizar la vigencia, la Oficina de Control Interno registra un retraso del 30% en el cronograma de auditorías debido a contingencias sobrevenidas. El Gestor III tiene asignada la auditoría de dos procesos críticos de fiscalización.",
    "enunciado": "¿Cuál comportamiento evidencia el Nivel 4 de Orientación al Logro?",
    "opciones": [
      {
        "id": "A",
        "texto": "Reorganizar el plan de trabajo propio y de su equipo de apoyo aplicando muestreo estadístico optimizado y herramientas analíticas digitales, reprogramando actividades no esenciales para asegurar la entrega de informes de alta calidad técnica en los plazos legales, superando los estándares esperados.",
        "explicacion": "Correcta. El Nivel 4 de Orientación al Logro se caracteriza por la autogestión proactiva, el uso eficiente de metodologías ágiles y el compromiso inquebrantable con metas de alto impacto institucional superando obstáculos."
      },
      {
        "id": "B",
        "texto": "Proponer la cancelación de las auditorías pendientes justificándose en que 'el año ya se acabó'.",
        "explicacion": "Incorrecta. Refleja pasividad y falta de compromiso con el Plan Anual de Auditoría institucional."
      },
      {
        "id": "C",
        "texto": "Copiar y pegar informes de vigencias anteriores cambiándoles únicamente la fecha para cumplir con la estadística numérica.",
        "explicacion": "Incorrecta. Constituye fraude documental y falta grave contra la ética pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 (Orientación al Logro)",
    "citaNormativa": "«Orientación al Logro Nivel 4: Supera los estándares de desempeño establecidos, optimiza procesos y recursos para alcanzar metas ambiciosas y demuestra resiliencia ante contingencias operativas.»"
  },
  {
    "id": "ci_usuario_01",
    "nivel": "Profesional",
    "ejeId": "orientacion_usuario_n1",
    "ejeNombre": "Orientación al Usuario y Ciudadano (Nivel 1)",
    "tipo": "Comportamental (Nivel Profesional)",
    "tema": "Atención de PQRS y Solicitudes Ciudadanas de Control Social",
    "caso": "Una veeduría ciudadana solicita acceso al informe de evaluación del sistema de control interno sobre el recaudo aduanero de una seccional fronteriza. Un funcionario sugiere no responder porque 'los ciudadanos no entienden de auditoría'.",
    "enunciado": "En cumplimiento de la Ley 1712 de 2014 y la Orientación al Ciudadano, ¿cuál es la actuación que debe orientar el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Negar la solicitud alegando reserva absoluta sobre todos los documentos de la DIAN sin excepción.",
        "explicacion": "Incorrecta. Los informes definitivos de auditoría son documentos públicos no sometidos a reserva, salvo partes estrictamente amparadas por reserva tributaria o secreto industrial."
      },
      {
        "id": "B",
        "texto": "Suministrar el informe definitivo de auditoría de forma oportuna, clara y en lenguaje comprensible (lenguaje claro), disociando previamente datos personales protegidos por reserva tributaria si los hubiere, facilitando el legítimo ejercicio del control social.",
        "explicacion": "Correcta. La Ley 1712 de 2014 consagra el principio de máxima publicidad y transparencia. Los informes finales de control interno son de dominio público y deben entregarse oportunamente con respeto al ciudadano."
      },
      {
        "id": "C",
        "texto": "Cobrar una tarifa extraordinaria no autorizada para desmotivar al peticionario.",
        "explicacion": "Incorrecta. Es una conducta arbitraria y contraria al principio de gratuidad en el acceso a la información pública."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 1712 de 2014 (Transparencia y Acceso a la Información) y Código de Integridad",
    "citaNormativa": "«Toda persona tiene derecho a solicitar y recibir información que esté en posesión de los sujetos obligados... garantizando el principio de máxima publicidad y lenguaje claro.»"
  },
  {
    "id": "ci_equipo_01",
    "nivel": "Profesional",
    "ejeId": "trabajo_equipo_n1",
    "ejeNombre": "Trabajo en Equipo (Nivel 1)",
    "tipo": "Comportamental (Nivel Profesional)",
    "tema": "Colaboración Interdisciplinaria en Comisiones de Auditoría",
    "caso": "Se conforma una comisión de auditoría integrada por un contador, un ingeniero de sistemas y un abogado para revisar el sistema de facturación electrónica. En las reuniones, cada profesional descalifica los aportes de las otras disciplinas argumentando que 'solo su profesión es relevante'.",
    "enunciado": "Como Gestor III que integra la comisión, ¿cuál es la actitud que promueve el Trabajo en Equipo Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aislarse y redactar únicamente su parte técnica sin hablar con los demás para evitar discusiones.",
        "explicacion": "Incorrecta. Fragmenta el informe y genera contradicciones en los papeles de trabajo de auditoría."
      },
      {
        "id": "B",
        "texto": "Promover la integración sinérgica de los saberes técnicos: el rigor legal del abogado, la verificación transaccional del contador y el análisis de algoritmos del ingeniero, reconociendo el valor complementario de cada disciplina para lograr un informe integral sólido.",
        "explicacion": "Correcta. El Trabajo en Equipo exige articulación armónica de habilidades diversas, respeto por la contribución de los pares y enfoque en el objetivo común del aseguramiento institucional."
      },
      {
        "id": "C",
        "texto": "Pedirle al Jefe de Control Interno que disuelva el equipo y asigne la auditoría a una sola persona.",
        "explicacion": "Incorrecta. Una auditoría de sistemas tributarios complejos no puede ser abarcada adecuadamente por una sola disciplina sin merma de profundidad y calidad."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 815 de 2018 (Trabajo en Equipo)",
    "citaNormativa": "«Trabajo en Equipo Nivel 1: Coopera con los demás integrantes del grupo, comparte conocimientos y recursos, y valora las distintas perspectivas para el logro de las metas institucionales.»"
  },
  {
    "id": "ci_razonamiento_01",
    "nivel": "Profesional",
    "ejeId": "razonamiento_analitico",
    "ejeNombre": "Razonamiento Analítico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inferencia Lógica y Muestreo de Auditoría en Facturación Masiva",
    "caso": "En una auditoría analítica se analiza el comportamiento de emisión de facturación electrónica de un grupo de 1.000 contribuyentes de alto riesgo. Se observa que el 20% de los contribuyentes concentra el 80% del valor total facturado (Ley de Pareto). Al realizar pruebas sustantivas en el estrato de mayor valor (200 contribuyentes), se detectan inconsistencias graves en el 35% de los mismos.",
    "enunciado": "¿Cuál es la conclusión analítica e inferencial que debe formular el auditor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Concluir que el 100% de los 1.000 contribuyentes cometen fraude fiscal y emitir pliego de cargos masivo inmediato a todos.",
        "explicacion": "Incorrecta. Es una generalización indebida y arbitraria; el muestreo en un estrato de riesgo no permite imputar responsabilidad automática a quienes no fueron auditados individualmente."
      },
      {
        "id": "B",
        "texto": "Determinar que existe una concentración crítica de riesgo fiscal en el estrato superior de facturación con alta tasa de error material (35%), lo que amerita focalizar las auditorías de aseguramiento y recomendar al área de fiscalización la inspección profunda de este segmento prioritario.",
        "explicacion": "Correcta. El razonamiento analítico riguroso interpreta la concentración de riesgos, cuantifica la significatividad del hallazgo y orienta las recomendaciones de control y fiscalización con criterio de costo-beneficio."
      },
      {
        "id": "C",
        "texto": "Afirmar que como el 65% de la muestra estuvo bien, el sistema no presenta ningún problema y no se requieren acciones.",
        "explicacion": "Incorrecta. Un 35% de desviación en el estrato que concentra el 80% del volumen financiero representa una materialidad de riesgo inaceptable para la administración tributaria."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "NIA 530 (Muestreo de Auditoría) y Técnicas de Análisis Cuantitativo",
    "citaNormativa": "«El auditor debe estratificar la población cuando la dispersión de valores sea amplia, permitiendo concentrar los procedimientos en partidas de mayor valor relativo o riesgo.»"
  },
  {
    "id": "ci_shared_dian_mision_01",
    "nivel": "Profesional",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Misionalidad de la DIAN y Control Tributario/Aduanero",
    "caso": "Usted se desempeña como Gestor III en una Dirección Seccional de la DIAN. Durante un comité de seguimiento misional, se analiza una disminución atípica en el recaudo tributario del sector importador de insumos industriales, detectándose indicios de subfacturación sistemática y triangulación documental en aduanas.",
    "enunciado": "De acuerdo con los objetivos misionales de la DIAN y el régimen aduanero y tributario vigente, ¿cuál es la acción estratégica que debe formular el Gestor III para atender este fenómeno?",
    "opciones": [
      {
        "id": "A",
        "texto": "Diseñar un plan de choque articulando el análisis de inteligencia corporativa con fiscalización aduanera y tributaria para confrontar los precios de transferencia, declaraciones de importación y facturación electrónica de los operadores del sector.",
        "explicacion": "Correcta. La misionalidad de la DIAN (Decreto 1742 de 2020) exige garantizar la seguridad fiscal del Estado mediante la sinergia entre fiscalización tributaria, control aduanero y trazabilidad electrónica, protegiendo el orden público económico contra el contrabando técnico y la evasión."
      },
      {
        "id": "B",
        "texto": "Suspender de manera generalizada las autorizaciones de levante de mercancías para todos los importadores del sector económico analizado, hasta que presenten pólizas bancarias adicionales.",
        "explicacion": "Incorrecta. Vulnera los principios de facilitación del comercio legítimo, proporcionalidad y debido proceso aduanero, además de exceder las competencias sin un acto administrativo motivado individual."
      },
      {
        "id": "C",
        "texto": "Limitar la intervención al archivo de las alertas y esperar a que los contribuyentes presenten voluntariamente sus declaraciones de corrección en el siguiente año gravable.",
        "explicacion": "Incorrecta. Incumple el deber misional de control oportuno, permitiendo la consolidación del fraude fiscal y la prescripción o caducidad de facultades sancionatorias."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020, Art. 2 (Objetivo de la DIAN) y Estatuto Tributario",
    "citaNormativa": "«La DIAN tiene como objetivo coadyuvar a garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional, mediante la administración y el control al debido cumplimiento de las obligaciones tributarias, aduaneras, cambiarias y los derechos de explotación y gastos de administración sobre los juegos de suerte y azar.» (Decreto 1742 de 2020, Art. 2)."
  },
  {
    "id": "ci_shared_dian_estruc_02",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Estructura Organizacional de la DIAN y Procesos Misionales",
    "caso": "En el nivel seccional se presenta una divergencia entre la División de Fiscalización y Liquidación y la División de Cobranzas respecto a la competencia para determinar y perseguir obligaciones fiscales derivadas de omisos en facturación electrónica.",
    "enunciado": "Conforme a la estructura funcional de la DIAN (Decreto 1742 de 2020), ¿cuál es el direccionamiento técnico correcto que debe recordar el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "La División de Cobranzas debe determinar previamente el tributo mediante acto administrativo de aforo antes de iniciar el cobro coactivo.",
        "explicacion": "Incorrecta. La función de determinación y liquidación oficial de tributos corresponde a Fiscalización y Liquidación; Cobranzas solo actúa con títulos ejecutivos claros, expresos y exigibles."
      },
      {
        "id": "B",
        "texto": "La División de Fiscalización y Liquidación adelanta la investigación y expide los actos oficiales de determinación (pliego de cargos / liquidación oficial), y una vez en firme el título ejecutivo, se remite a Cobranzas para el cobro coactivo.",
        "explicacion": "Correcta. El Decreto 1742 de 2020 delimita con claridad la etapa de investigación y determinación (Fiscalización/Liquidación) de la etapa de ejecución y recaudo coactivo (Cobranzas y Garantías)."
      },
      {
        "id": "C",
        "texto": "Ambas dependencias pueden adelantar de manera concurrente e indistinta las investigaciones, inspecciones y embargos de cuentas bancarias.",
        "explicacion": "Incorrecta. Genera nulidad procesal por falta de competencia funcional y vulnera el debido proceso consagrado en el artículo 29 constitucional."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 1742 de 2020, Arts. 31 y 35 (Competencias Seccionales DIAN)",
    "citaNormativa": "«Corresponde a la División de Fiscalización adelantar las investigaciones y proferir los actos oficiales de liquidación y sanción; y a la División de Cobranzas adelantar el procedimiento administrativo de cobro coactivo de los títulos ejecutivos ejecutoriados.» (Decreto 1742 de 2020, Arts. 31 y 35)."
  },
  {
    "id": "ci_shared_dian_mision_03",
    "nivel": "Profesional",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Control al Contrabando y Comercio Exterior",
    "caso": "En una zona aduanera primaria, funcionarios de la DIAN retienen un cargamento de mercancías extranjeras cuyo código arancelario declarado ampara textiles de algodón ordinario con arancel del 5%, pero la inspección física y el análisis químico revelan telas sintéticas de alto valor gravadas con arancel del 40%.",
    "enunciado": "Frente a este caso de contrabando técnico o falsedad arancelaria, el procedimiento que debe coordinar el Gestor III en apoyo a la dependencia aduanera es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Permitir el retiro de la mercancía previo pago informal de una sanción económica voluntaria fijada por el inspector de turno.",
        "explicacion": "Incorrecta e ilegal. Vulnera el debido proceso sancionatorio aduanero y configura una conducta punible de cohecho o concusión."
      },
      {
        "id": "B",
        "texto": "Adoptar la medida cautelar de aprehensión de la mercancía, expedir el acta respectiva motivada, iniciar el proceso de decomiso aduanero y dar traslado a la Fiscalía por presunto fraude a la renta de aduanas.",
        "explicacion": "Correcta. El régimen de aduanas vigente faculta a la DIAN para aplicar la aprehensión inmediata ante discrepancias sustanciales en naturaleza, valor o código arancelario que alteren los tributos aduaneros, remitiendo copias a la justicia penal."
      },
      {
        "id": "C",
        "texto": "Devolver la mercancía al país de origen sin iniciar ningún registro administrativo para no afectar las estadísticas comerciales de la aduana.",
        "explicacion": "Incorrecta. Desconoce la potestad aduanera y omite el deber legal de persecución de conductas ilícitas que atentan contra la industria nacional y el recaudo público."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 1165 de 2019, Arts. 3 y 647 (Régimen de Aduanas)",
    "citaNormativa": "«La aprehensión es la medida cautelar mediante la cual la autoridad aduanera toma posesión de las mercancías respecto de las cuales se configure alguna de las causales previstas en el presente Decreto... dando traslado a la autoridad judicial competente cuando los hechos puedan constituir delito.» (Decreto 1165 de 2019, Art. 647)."
  },
  {
    "id": "ci_shared_dian_mipg_01",
    "nivel": "Profesional",
    "ejeId": "mipg",
    "ejeNombre": "Modelo de Planeación y Gestión MIPG",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Fundamentos y Dimensiones del MIPG (Decreto 1499 de 2017)",
    "caso": "Como Gestor III, se le encarga participar en la articulación de la planeación estratégica de la DIAN con el Modelo Integrado de Planeación y Gestión (MIPG), con el objetivo de elevar el índice de Desempeño Institucional reportado en el Formulario Único de Reporte y Avance de Gestión (FURAG).",
    "enunciado": "Para lograr que la gestión estratégica genere valor público tangible al ciudadano y al recaudo, el modelo MIPG establece que la entidad debe armonizar transversalmente:",
    "opciones": [
      {
        "id": "A",
        "texto": "Las 7 dimensiones operativas y sus políticas de gestión y desempeño, ubicando al Talento Humano como corazón del modelo, impulsado por el Direccionamiento Estratégico y enfocado en la Gestión para el Resultado con Valores.",
        "explicacion": "Correcta. El MIPG (Decreto 1499 de 2017 y Manual Operativo DAFP) estructura 7 dimensiones donde el Talento Humano es el eje motriz, vinculado a la planeación, gestión presupuestal, evaluación, información, control interno y gestión del conocimiento."
      },
      {
        "id": "B",
        "texto": "Exclusivamente la dimensión de Control Interno, omitiendo la política de servicio al ciudadano por tratarse de una entidad recaudadora coactiva.",
        "explicacion": "Incorrecta. El MIPG es integral e indivisible; una de las políticas centrales es el Servicio al Ciudadano y la Facilitación del Cumplimiento Tributario voluntario."
      },
      {
        "id": "C",
        "texto": "Únicamente la adquisición de infraestructura tecnológica de servidores, sin relacionarla con los procesos de capacitación del talento humano ni con el mapa de riesgos.",
        "explicacion": "Incorrecta. La tecnología es una herramienta de soporte dentro de la dimensión de Información y Comunicación, pero aislada no garantiza la efectividad del modelo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017, Art. 2.2.22.3.2 (Estructura del MIPG)",
    "citaNormativa": "«El Modelo Integrado de Planeación y Gestión - MIPG operará a través de 7 dimensiones... ubicando el Talento Humano como el corazón del modelo y eje fundamental que impulsa la gestión pública orientada a resultados con valores.» (Decreto 1499 de 2017)."
  },
  {
    "id": "ci_shared_dian_mipg_02",
    "nivel": "Profesional",
    "ejeId": "mipg",
    "ejeNombre": "Modelo de Planeación y Gestión MIPG",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Gestión del Conocimiento y la Innovación en MIPG",
    "caso": "En una división técnica de la DIAN, varios funcionarios expertos con más de 25 años de trayectoria en fiscalización de precios de transferencia y régimen tributario especial están próximos a jubilarse. No existe documentación de sus métodos de auditoría ni guías prácticas para el personal nuevo.",
    "enunciado": "Con base en la Dimensión 6 del MIPG ('Gestión del Conocimiento y la Innovación'), ¿cuál es la estrategia técnica que el Gestor III debe estructurar?",
    "opciones": [
      {
        "id": "A",
        "texto": "Diseñar un programa institucional de transferencia y captura del conocimiento tácito a explícito, construyendo guías metodológicas, lecciones aprendidas y talleres de mentoría cruzada.",
        "explicacion": "Correcta. La Dimensión de Gestión del Conocimiento del MIPG tiene como objetivo preservar la memoria institucional, convertir el conocimiento tácito de los expertos en conocimiento explícito y asegurar la continuidad operativa de la entidad."
      },
      {
        "id": "B",
        "texto": "Solicitar una prórroga forzosa indefinida de los nombramientos de los funcionarios para posponer su jubilación legal.",
        "explicacion": "Incorrecta. Vulnera el régimen prestacional y los derechos adquiridos de los servidores públicos consagrados en la ley."
      },
      {
        "id": "C",
        "texto": "Eliminar el proceso de auditoría de precios de transferencia del manual de funciones para evitar la necesidad de capacitación.",
        "explicacion": "Incorrecta. Afecta directamente la misión de control fiscal y recaudo tributario del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Manual Operativo MIPG, Dimensión 6 (Gestión del Conocimiento y la Innovación)",
    "citaNormativa": "«Las entidades públicas deben salvaguardar la memoria institucional, promoviendo la transformación del conocimiento tácito de sus servidores expertos en conocimiento explícito, accesible y documentado para la sostenibilidad del servicio público.» (DAFP, Manual Operativo MIPG)."
  },
  {
    "id": "ci_shared_dian_razon_01",
    "nivel": "Profesional",
    "ejeId": "razonamiento",
    "ejeNombre": "Razonamiento Analítico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Razonamiento Analítico y Análisis de Tendencias Económicas",
    "caso": "Al revisar el informe de comportamiento económico de los contribuyentes de su jurisdicción, usted identifica que el sector agroindustrial aumentó sus ventas declaradas en un 38%, pero sus solicitudes de compensación y saldo a favor de IVA se incrementaron en un 190% respecto al año anterior, con compras soportadas en proveedores recién creados.",
    "enunciado": "Aplicando razonamiento analítico para orientar la toma de decisiones misionales, ¿cuál es la inferencia técnica más fundada?",
    "opciones": [
      {
        "id": "A",
        "texto": "El comportamiento es habitual y proporcional al crecimiento de las ventas, por lo que procede ordenar el giro inmediato de todos los saldos sin verificar soportes.",
        "explicacion": "Incorrecta. El incremento del 190% en devoluciones es desproporcionado frente al 38% de ventas y presenta señales claras de riesgo de operaciones simuladas."
      },
      {
        "id": "B",
        "texto": "Existe una alerta de riesgo por posible creación de empresas fachada y facturas ficticias para apropiación fraudulenta de recursos del IVA; se debe focalizar un cruce de medios magnéticos y suspender cautelarmente la devolución hasta la auditoría previa.",
        "explicacion": "Correcta. El razonamiento analítico en la DIAN exige correlacionar datos de ventas, compras, temporalidad de proveedores y desbalances estadísticos para proteger el patrimonio fiscal."
      },
      {
        "id": "C",
        "texto": "Cerrar inmediatamente las instalaciones físicas de todas las empresas del sector agroindustrial sin permitirles presentar descargos.",
        "explicacion": "Incorrecta. Vulnera el debido proceso constitucional y legal; las medidas cautelares y auditorías deben sustentarse en el marco del Estatuto Tributario."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Arts. 850, 857-1 y 671 (Control a Devoluciones de IVA)",
    "citaNormativa": "«La Administración Tributaria podrá suspender el término para la devolución hasta por noventa (90) días, cuando se adviertan indicios de inexactitud en la declaración o compras sustentadas en proveedores inexistentes o ficticios.» (Estatuto Tributario, Art. 857-1)."
  },
  {
    "id": "ci_shared_dian_razon_02",
    "nivel": "Profesional",
    "ejeId": "razonamiento",
    "ejeNombre": "Razonamiento Analítico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Análisis Comparativo de Rentabilidad y Brecha Fiscal",
    "caso": "Un estudio sectorial refleja que en el gremio de hoteles de una ciudad turística la tasa promedio de rentabilidad líquida sobre ingresos brutos es del 14%. Sin embargo, cinco grandes cadenas hoteleras registran sistemáticamente en los últimos tres años rentabilidades del 0.8% declarando altos costos de consultorías pagadas a firmas domiciliadas en paraísos fiscales.",
    "enunciado": "En aplicación del análisis analítico de riesgo de elusión internacional (BEPS) y fiscalización de la DIAN, usted orienta:",
    "opciones": [
      {
        "id": "A",
        "texto": "Descartar cualquier investigación porque cada empresario es libre de fijar los gastos que desee sin importar el destino del pago.",
        "explicacion": "Incorrecta. La DIAN tiene facultades legales expresas para aplicar el régimen de precios de transferencia y la cláusula general antielusión (E.T. Art. 869)."
      },
      {
        "id": "B",
        "texto": "Estructurar un programa de auditoría tributaria internacional focalizado en precios de transferencia y sustancia económica de los pagos al exterior, requiriendo los contratos, entregables tangibles y la demostración de la realidad material de las consultorías.",
        "explicacion": "Correcta. Conforme al Estatuto Tributario y las directrices OCDE adoptadas por la DIAN, las transacciones con jurisdicciones no cooperantes o de baja tributación exigen demostrar la sustancia económica real para evitar el traslado artificial de utilidades."
      },
      {
        "id": "C",
        "texto": "Proceder a liquidar una sanción automática del 100% sin solicitar explicaciones ni pruebas al contribuyente.",
        "explicacion": "Incorrecta. Toda sanción debe estar precedida de requerimiento especial o pliego de cargos garantizando el derecho de contradicción y defensa."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 260-1 y Art. 869 (Cláusula General Antielusión)",
    "citaNormativa": "«La Administración Tributaria podrá recaracterizar o reconfigurar toda operación o serie de operaciones que constituyan abuso en materia tributaria, desconociendo sus efectos cuando carezcan de un propósito económico y comercial real y sustantivo.» (Estatuto Tributario, Art. 869)."
  },
  {
    "id": "ci_shared_dian_ci_01",
    "nivel": "Profesional",
    "ejeId": "control_interno",
    "ejeNombre": "Sistema de Control Interno",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Contexto del Sistema de Control Interno y Modelo de 3 Líneas (Ley 87 de 1993)",
    "caso": "Durante una revisión de procesos previa a la auditoría interna en la DIAN, un líder de subproceso afirma que la responsabilidad de identificar, controlar y mitigar los riesgos de corrupción y evasión en la radicación de devoluciones de IVA le corresponde exclusivamente a la Oficina de Control Interno.",
    "enunciado": "Con base en la séptima dimensión del MIPG y el Modelo de las Tres Líneas de Defensa, ¿cuál es la precisión conceptual que debe emitir el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "El líder del subproceso comete un error, ya que los líderes de los procesos operativos constituyen la Primera Línea y son los dueños directos de gestionar los riesgos y aplicar los controles en el día a día; Control Interno actúa como Tercera Línea de aseguramiento y evaluación independiente.",
        "explicacion": "Correcta. Según la Ley 87 de 1993, el MECI y el marco del IIA adaptado por el DAFP, la 1ª Línea es la gestión operativa (dueña del riesgo), la 2ª Línea es la supervisión técnica/riesgos, y la 3ª Línea (auditoría interna) evalúa de forma independiente y no ejecuta controles de gestión."
      },
      {
        "id": "B",
        "texto": "El líder del subproceso tiene razón, puesto que los funcionarios operativos solo deben ejecutar trámites sin preocuparse por mapas de riesgo ni matrices de control.",
        "explicacion": "Incorrecta. El autocontrol y la autogestión son principios rectores obligatorios de todo servidor público en el Sistema de Control Interno."
      },
      {
        "id": "C",
        "texto": "La gestión de los riesgos recae únicamente en la Fiscalía General de la Nación mediante denuncias penales una vez materializada la pérdida presupuestal.",
        "explicacion": "Incorrecta. El Sistema de Control Interno es preventivo y de gestión administrativa interna, previo a la acción de los entes penales externos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 87 de 1993, Art. 2 y Marco Internacional de las Tres Líneas (DAFP / MECI)",
    "citaNormativa": "«El autocontrol es la capacidad de cada servidor de considerar el control como inherente a su labor diaria. La primera línea es la dueña directa del riesgo operativo; la Oficina de Control Interno actúa en tercera línea como evaluadora independiente.» (Ley 87 de 1993)."
  },
  {
    "id": "ci_shared_dian_ci_02",
    "nivel": "Profesional",
    "ejeId": "control_interno",
    "ejeNombre": "Sistema de Control Interno",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Evaluación del Sistema de Control Interno y Gestión del Riesgo",
    "caso": "En la evaluación del mapa de riesgos de corrupción de la Dirección Seccional, se detecta que el riesgo 'Otorgamiento irregular de medidas cautelares o levantamiento indebido de embargos' se encuentra calificado con probabilidad alta e impacto catastrófico, pero los controles existentes son manuales y posteriores.",
    "enunciado": "Para robustecer el control interno conforme a los lineamientos del DAFP y la política antifraude de la DIAN, usted debe recomendar:",
    "opciones": [
      {
        "id": "A",
        "texto": "Eliminar el riesgo de la matriz institucional para no desmejorar la calificación de la entidad en la auditoría externa de la Contraloría General.",
        "explicacion": "Incorrecta. Ocultar o eliminar un riesgo material viola los principios de transparencia y gestión pública, configurando falta disciplinaria gravísima."
      },
      {
        "id": "B",
        "texto": "Implementar controles preventivos y automáticos mediante validaciones cruzadas en el sistema informático, segregación estricta de funciones entre quien proyecta y quien autoriza el desembargo, y bitácoras de auditoría no modificables.",
        "explicacion": "Correcta. La adecuada gestión de riesgos institucionales exige pasar de controles detectives/reactivos a controles preventivos y sistemáticos con segregación de funciones (Guía DAFP para la Gestión del Riesgo)."
      },
      {
        "id": "C",
        "texto": "Delegar la potestad de autorizar embargos y desembargos en personal contratista para agilizar el flujo de expedientes represados.",
        "explicacion": "Incorrecta. El ejercicio de facultades públicas de coacción tributaria y cautelares no puede ser delegado en contratistas de prestación de servicios por mandato constitucional y de carrera."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Constitución Política Art. 123 y Guía de Administración del Riesgo de Corrupción (DAFP)",
    "citaNormativa": "«El diseño de controles frente a riesgos de corrupción exige la segregación de funciones incompatibles y la implementación de controles preventivos automáticos, garantizando que el ejercicio de potestades de embargo sea indelegable y trazable.» (DAFP, Guía del Riesgo)."
  },
  {
    "id": "ci_shared_dian_ci_03",
    "nivel": "Profesional",
    "ejeId": "control_interno",
    "ejeNombre": "Sistema de Control Interno",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Auditoría Interna Basada en Riesgos y Planes de Mejoramiento",
    "caso": "La Oficina de Control Interno de la DIAN entrega a su dependencia un informe de auditoría con tres hallazgos administrativos con presunto alcance disciplinario relacionados con la custodia de expedientes tributarios físicos. El jefe de dependencia le solicita proyectar el Plan de Mejoramiento.",
    "enunciado": "Para que el Plan de Mejoramiento sea técnicamente válido y conforme a las normas de auditoría pública, debe estructurarse:",
    "opciones": [
      {
        "id": "A",
        "texto": "Identificando la causa raíz de cada hallazgo, formulando acciones correctivas medibles, designando responsables directos y estableciendo un cronograma con fechas perentorias e indicadores de eficacia.",
        "explicacion": "Correcta. La metodología del MECI y DAFP estipula que un plan de mejoramiento no puede limitarse a buenas intenciones; debe atacar la causa raíz, ser verificable con cronograma, recursos y responsables precisos."
      },
      {
        "id": "B",
        "texto": "Redactando un documento manifestando inconformidad con los auditores y solicitando el archivo de las observaciones sin asumir compromisos.",
        "explicacion": "Incorrecta. Vulnera la obligatoriedad de atender los hallazgos de control interno y genera apertura de proceso disciplinario sancionatorio."
      },
      {
        "id": "C",
        "texto": "Estableciendo metas con plazos a 10 años para dilatar el seguimiento de los organismos de control.",
        "explicacion": "Incorrecta. Los planes de mejoramiento deben ser razonables y oportunos para mitigar el riesgo de forma inmediata."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 87 de 1993, Art. 3 y Guía de Auditoría Interna DAFP",
    "citaNormativa": "«Los planes de mejoramiento suscritos a partir de hallazgos de auditoría deben formularse atacando la causa raíz del desvío, estableciendo metas cuantitativas, cronogramas verificables y responsables directos para su efectivo cierre.» (DAFP, Guía de Auditoría)."
  },
  {
    "id": "ci_shared_dian_contra_01",
    "nivel": "Profesional",
    "ejeId": "contratacion",
    "ejeNombre": "Contratación y Convenios",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Revisión de Requerimientos Contractuales y Estudios Previos",
    "caso": "En desarrollo de la Función 4 del Manual ('revisión de requerimientos para contratación de servicios o bienes'), a usted se le remite una solicitud para contratar el servicio de mantenimiento de los escáneres de inspección aduanera no intrusiva por un valor de 800 millones de pesos. El área solicitante pide contratarlo directamente argumentando urgencia.",
    "enunciado": "De acuerdo con el Estatuto General de Contratación Pública (Ley 80 de 1993 y Ley 1150 de 2007), su orientación jurídica-técnica es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Avalar la contratación directa inmediata sin importar la cuantía, ya que los temas aduaneros gozan de excepción automática a las licitaciones.",
        "explicacion": "Incorrecta. La contratación directa es de interpretación restrictiva y taxativa en la Ley 1150 de 2007. El mantenimiento habitual de equipos debe adelantarse por licitación pública o selección abreviada."
      },
      {
        "id": "B",
        "texto": "Rechazar la solicitud de contratación directa por falta de sustento legal, exigir la estructuración completa de estudios y documentos previos, análisis del sector económico y adelantar el proceso competitivo (Licitación o Selección Abreviada) garantizando la pluralidad de oferentes.",
        "explicacion": "Correcta. La regla general de la contratación pública es la selección objetiva mediante convocatoria competitiva. La falta de planeación no justifica la urgencia manifiesta (Ley 80 de 1993, Art. 24 y Ley 1150 de 2007, Art. 2)."
      },
      {
        "id": "C",
        "texto": "Fraccionar el contrato en cuatro contratos menores para evadir la licitación y adjudicarlos a discreción.",
        "explicacion": "Incorrecta e ilícita. El fraccionamiento de contratos es una conducta delictiva (contrato sin cumplimiento de requisitos legales, Código Penal Art. 410)."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 80 de 1993, Art. 24 y Ley 1150 de 2007, Art. 2",
    "citaNormativa": "«La selección objetiva se garantiza mediante la escogencia en licitación pública o selección abreviada como regla general. Las causales de contratación directa son taxativas y la falta de planeación no ampara la urgencia manifiesta.» (Ley 1150 de 2007, Art. 2)."
  },
  {
    "id": "ci_shared_dian_conven_02",
    "nivel": "Profesional",
    "ejeId": "contratacion",
    "ejeNombre": "Contratación y Convenios",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Convenios de Cooperación Internacional e Interinstitucional (Función 5)",
    "caso": "Para cumplir la Función 5 del empleo Gestor III, se proyecta un convenio de intercambio de información tributaria y aduanera entre la DIAN y la Policía Fiscal y Aduanera (POLFA). Se debate si en el texto del convenio se puede compartir la totalidad de las declaraciones de renta sin reserva alguna con cualquier suboficial policial.",
    "enunciado": "Frente a las normas de reserva de la declaración tributaria y protección de datos sensibles, el Gestor III debe salvaguardar:",
    "opciones": [
      {
        "id": "A",
        "texto": "La entrega irrestricta de las bases de datos a toda la fuerza pública sin necesidad de acuerdos de confidencialidad ni perfiles de usuario.",
        "explicacion": "Incorrecta. Vulnera el artículo 583 del Estatuto Tributario y la Ley Estatutaria de Habeas Data 1581 de 2012."
      },
      {
        "id": "B",
        "texto": "Que el convenio estipule expresamente la estricta reserva tributaria (Art. 583 E.T.), los protocolos de seguridad de la información, el principio de finalidad y la trazabilidad de accesos restringidos exclusivamente a investigaciones penales o aduaneras en curso.",
        "explicacion": "Correcta. La cooperación interinstitucional debe respetar los límites constitucionales de reserva tributaria y protección de datos personales consagrados en la ley."
      },
      {
        "id": "C",
        "texto": "La prohibición absoluta de suscribir cualquier tipo de convenio de intercambio de información con organismos de seguridad del Estado.",
        "explicacion": "Incorrecta. Los convenios interinstitucionales para combatir el contrabando y lavado de activos son indispensables y están autorizados por ley bajo protocolos de reserva."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 583 y Ley Estatutaria 1581 de 2012 (Habeas Data)",
    "citaNormativa": "«La información tributaria respecto de las bases gravables y la determinación privada de los impuestos tiene el carácter de reserva y sólo podrá ser suministrada para los fines propios de la administración y los juicios o investigaciones que tramiten las autoridades competentes.» (Estatuto Tributario, Art. 583)."
  },
  {
    "id": "ci_shared_dian_rend_01",
    "nivel": "Profesional",
    "ejeId": "rendicion_cuentas",
    "ejeNombre": "Estrategia de Rendición de Cuentas",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Estrategia de Rendición de Cuentas a la Ciudadanía (Ley 1757 de 2015)",
    "caso": "La seccional prepara su audiencia pública de rendición de cuentas sobre la gestión del último año. El área de comunicaciones propone presentar únicamente un balance numérico resumido en diapositivas con tecnicismos contables, sin habilitar espacios de preguntas del público para evitar cuestionamientos sobre demoras en citas presenciales.",
    "enunciado": "De acuerdo con el Manual Único de Rendición de Cuentas (CONPES 3654 y Ley 1757 de 2015), ¿cuál es la directriz que debe aplicar el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la propuesta, ya que la rendición de cuentas es un acto protocolario unilateral donde la entidad solo tiene la obligación de divulgar cifras agregadas.",
        "explicacion": "Incorrecta. La rendición de cuentas no es un monólogo ni un acto cosmético; se fundamenta en los tres elementos: información de calidad, diálogo bidireccional e incentivos."
      },
      {
        "id": "B",
        "texto": "Asegurar que el proceso contemple lenguaje claro, publicación previa de informes comprensibles, mesas de diálogo deliberativo con gremios y veedurías ciudadanas, y respuesta obligatoria fundamentada a las inquietudes formuladas.",
        "explicacion": "Correcta. La Ley 1757 de 2015 y la política de transparencia del MIPG establecen que la rendición de cuentas debe ser permanente, inclusiva, en lenguaje claro y con espacios efectivos de interlocución ciudadana."
      },
      {
        "id": "C",
        "texto": "Cobrar una tasa de inscripción a los veedores y ciudadanos que deseen intervenir o formular preguntas en el evento público.",
        "explicacion": "Incorrecta. El control social y la participación ciudadana en la gestión pública son derechos de ejercicio libre y totalmente gratuito."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 1757 de 2015, Arts. 48 a 52 (Estatuto de Participación Ciudadana)",
    "citaNormativa": "«La rendición de cuentas es el proceso conformado por un conjunto de normas, procedimientos y metodologías que comprende la información, el diálogo y la responsabilidad, garantizando que la ciudadanía pueda deliberar y recibir explicaciones sobre la gestión pública.» (Ley 1757 de 2015, Art. 48)."
  },
  {
    "id": "ci_shared_dian_comp_etico_01",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (15%)",
    "tema": "Comportamiento Ético Nivel 4 (Máximo Nivel de Exigencia)",
    "caso": "Un contribuyente con gran poder económico y social en la región, objeto de una visita de auditoría fiscal, solicita una reunión privada por fuera de la sede de la DIAN ofreciendo patrocinar becas de posgrado para los hijos de los auditores a cambio de orientar favorablemente las conclusiones del informe.",
    "enunciado": "Frente a este ofrecimiento, la conducta esperada de un Gestor III en el Nivel 4 de Comportamiento Ético es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar categóricamente la invitación y el ofrecimiento, dejar constancia escrita inmediata del hecho en el expediente administrativo y radicar formalmente la denuncia ante la Oficina de Control Disciplinario Interno y la Fiscalía General.",
        "explicacion": "Correcta. El Nivel 4 de Comportamiento Ético en la DIAN exige no solo rechazar cualquier beneficio indebido directo o indirecto, sino promover activamente la cultura de legalidad, proteger la entidad y denunciar los actos corruptos formalmente."
      },
      {
        "id": "B",
        "texto": "Aceptar la reunión privada solo para escuchar la propuesta con el fin de obtener mayor evidencia testimonial sin reportarla a sus superiores.",
        "explicacion": "Inadecuada. Pone en riesgo la integridad del servidor, vulnera el código de conducta y el debido proceso de las visitas oficiales de fiscalización."
      },
      {
        "id": "C",
        "texto": "Agradecer el gesto de las becas por ser para formación educativa y sugerirle que haga la donación directamente al fondo de bienestar de la entidad.",
        "explicacion": "Inadecuada e ilícita. Configura una falta grave por conflicto de intereses y recepción de dádivas prohibidas por la Ley 1952 de 2019."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019, Art. 38 (Código General Disciplinario)",
    "citaNormativa": "«Está prohibido a todo servidor público solicitar, aceptar o recibir dádivas, promesas o beneficios directos o indirectos para sí o para un tercero por retardar, omitir o ejecutar actos de su cargo, debiendo denunciar inmediatamente cualquier intento de soborno.» (Ley 1952 de 2019, Art. 38)."
  },
  {
    "id": "ci_shared_dian_comp_logro_01",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (15%)",
    "tema": "Orientación al Logro Nivel 3",
    "caso": "Faltando dos semanas para culminar el periodo fiscal, la seccional se encuentra al 82% del cumplimiento de la meta de auditorías a grandes omisos debido a fallas intermitentes en la plataforma tecnológica central.",
    "enunciado": "Demostrando la competencia de Orientación al Logro Nivel 3, usted como Gestor III debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Solicitar por escrito la disminución de las metas anuales a la Dirección General para no ver afectada la calificación de desempeño de la dependencia.",
        "explicacion": "Inadecuada. Refleja resignación ante obstáculos y falta de perseverancia orientada a la excelencia en los resultados misionales."
      },
      {
        "id": "B",
        "texto": "Proponer una reorganización temporal de los turnos de trabajo, priorizar los expedientes de mayor impacto fiscal y coordinar con el área de tecnología planes de contingencia para procesar información fuera de las horas pico, alcanzando la meta propuesta.",
        "explicacion": "Correcta. El Nivel 3 de Orientación al Logro implica superar estándares, actuar con proactividad ante imprevistos técnicos y movilizar recursos para garantizar el cumplimiento de metas ambiciosas."
      },
      {
        "id": "C",
        "texto": "Cerrar los expedientes apresuradamente firmando autos de archivo masivos sin haber revisado los soportes contables.",
        "explicacion": "Inadecuada. Sacrifica la calidad técnica y la legalidad por la velocidad, generando grave detrimento patrimonial y responsabilidad."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Resolución 0067 de 2024 de la DIAN y Decreto 815 de 2018",
    "citaNormativa": "«El profesional con orientación al logro identifica cuellos de botella en la operación, reorganiza recursos con proactividad y formula alternativas innovadoras para asegurar el cumplimiento oportuno de las metas de recaudo y control fiscal.» (Resolución DIAN 0067/2024)."
  },
  {
    "id": "ci_shared_dian_comp_equipo_01",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (15%)",
    "tema": "Trabajo en Equipo Nivel 3 y Comunicación Efectiva",
    "caso": "En su equipo de trabajo se integran profesionales de diferentes disciplinas (abogados, contadores e ingenieros). Se evidencia desarticulación porque los analistas de datos no comprenden el lenguaje procesal de los abogados y estos últimos desestiman los modelos estadísticos de fiscalización.",
    "enunciado": "Para liderar la sinergia de equipo conforme a la competencia de Trabajo en Equipo Nivel 3, su actuación idónea es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Establecer sesiones de transferencia de conocimiento mutuo, estandarizar un glosario común de términos y definir flujos de trabajo colaborativos donde los hallazgos analíticos se traduzcan en argumentos probatorios jurídicamente sólidos.",
        "explicacion": "Correcta. El Nivel 3 de Trabajo en Equipo fomenta la cohesión interdisciplinaria, valora los aportes técnicos de todos los miembros y alinea los talentos hacia el objetivo común."
      },
      {
        "id": "B",
        "texto": "Solicitar el traslado inmediato de los ingenieros a otra área para trabajar únicamente con abogados que compartan el mismo perfil formativo.",
        "explicacion": "Inadecuada. Limita la capacidad analítica de la DIAN y desconoce la necesidad de equipos multidisciplinarios modernos."
      },
      {
        "id": "C",
        "texto": "Imponer que los informes jurídicos prevalezcan sin contrastar los datos informáticos para evitar debates internos.",
        "explicacion": "Inadecuada. Genera sesgos y debilita la fundamentación técnica de las investigaciones tributarias."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Resolución 0067 de 2024 (Manual de Competencias DIAN)",
    "citaNormativa": "«Construye sinergias interdisciplinarias, articula el lenguaje analítico y jurídico para potenciar los resultados colectivos y reconoce el valor de las diferentes áreas técnicas para fortalecer las investigaciones de la DIAN.» (Resolución DIAN 0067/2024)."
  },
  {
    "id": "ci_shared_dian_comp_comun_01",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (15%)",
    "tema": "Comunicación Efectiva Nivel 3",
    "caso": "Debe exponer ante el comité de directores seccionales un informe de complejidad tributaria sobre el impacto de la nueva reforma en los comerciantes informales. Asisten directivos de distintas profesiones con poco tiempo disponible.",
    "enunciado": "Bajo la competencia de Comunicación Efectiva Nivel 3, ¿cómo estructura su intervención?",
    "opciones": [
      {
        "id": "A",
        "texto": "Leer textualmente 80 diapositivas cargadas de párrafos normativos y artículos de leyes sin síntesis gráfica ni conclusiones ejecutivas.",
        "explicacion": "Inadecuada. Sobrecarga a la audiencia, diluye los mensajes clave y no demuestra capacidad de síntesis ejecutiva."
      },
      {
        "id": "B",
        "texto": "Sintetizar la información en un resumen ejecutivo con infografías claras, destacando los 3 impactos críticos, las cifras clave de recaudo proyectado y las alternativas de decisión con lenguaje técnico pero directo y persuasivo.",
        "explicacion": "Correcta. El Nivel 3 de Comunicación Efectiva adapta el mensaje a los destinatarios de alto nivel, utiliza recursos visuales estructurados y transmite ideas complejas con claridad e impacto."
      },
      {
        "id": "C",
        "texto": "Omitir los riesgos del proyecto para dar una impresión de falso optimismo y evitar preguntas difíciles del panel directivo.",
        "explicacion": "Inadecuada. Falta a la veracidad, transparencia y rigor profesional exigidos en la DIAN."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Resolución 0067 de 2024 (Competencias Laborales DIAN)",
    "citaNormativa": "«Estructura informes y presentaciones ejecutivas adaptadas al nivel de la audiencia, sintetizando complejidades tributarias mediante recursos visuales claros que facilitan la toma oportuna de decisiones institucionales.» (Resolución DIAN 0067/2024)."
  },
  {
    "id": "ci_shared_dian_comp_adapt_01",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (15%)",
    "tema": "Adaptabilidad Nivel 1",
    "caso": "La DIAN reemplaza repentinamente la plataforma de radicación de auditorías que usted utilizaba desde hace cuatro años por un nuevo sistema inteligente en la nube. Varios compañeros protestan y se niegan a usarlo, alegando lentitud inicial de aprendizaje.",
    "enunciado": "Demostrando la competencia de Adaptabilidad Nivel 1, la actitud profesional del Gestor III es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Asumir una disposición abierta al cambio, capacitarse con empeño en los tutoriales del nuevo sistema, explorar sus ventajas y apoyar pacientemente a los compañeros con mayor resistencia a la tecnología.",
        "explicacion": "Correcta. La Adaptabilidad Nivel 1 se traduce en flexibilidad positiva frente a transformaciones operativas y tecnológicas, facilitando la transición y superando la inercia del confort."
      },
      {
        "id": "B",
        "texto": "Promover un cese de actividades hasta que la administración reinstale el software antiguo ya conocido.",
        "explicacion": "Inadecuada. Afecta la continuidad del servicio público y desconoce las políticas de modernización tecnológica estatal."
      },
      {
        "id": "C",
        "texto": "Continuar radicando sus informes en carpetas físicas manuales sin ingresar al nuevo software corporativo.",
        "explicacion": "Inadecuada. Genera reprocesos, desarticulación en las bases de datos y desacato a las directrices de la entidad."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 (Competencias Comportamentales del Sector Público)",
    "citaNormativa": "«Acepta y se adapta con facilidad a las transformaciones organizacionales y tecnológicas de la entidad, manteniendo un desempeño de calidad y apoyando la modernización del servicio público.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_usuario_01",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (15%)",
    "tema": "Orientación al Usuario y al Ciudadano Nivel 1",
    "caso": "Un contribuyente de la tercera edad acude a la ventanilla visiblemente confundido porque le llegó un correo de embargo y desconoce el funcionamiento del portal web Muisca. El trámite no pertenece directamente a su despacho pero el ciudadano no encuentra orientación.",
    "enunciado": "En cumplimiento de la competencia de Orientación al Ciudadano Nivel 1, usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Le indica que ese problema es de Cobranzas y que debe sacar cita por internet en su casa sin darle ninguna indicación más.",
        "explicacion": "Inadecuada. Demuestra desinterés y vulnera los principios de atención prioritaria al adulto mayor y facilitación ciudadana."
      },
      {
        "id": "B",
        "texto": "Escucha su inquietud con empatía y respeto, le orienta de forma sencilla sobre el motivo del mensaje, lo acompaña o guía hacia el módulo de atención presencial preferencial y le imprime la constancia de turno requerida.",
        "explicacion": "Correcta. La Orientación al Usuario Nivel 1 se manifiesta en la calidez, la escucha activa, la búsqueda de soluciones efectivas y el trato digno a los ciudadanos en especial condición de vulnerabilidad."
      },
      {
        "id": "C",
        "texto": "Le cobra una tarifa por asesorarlo personalmente en horario laboral.",
        "explicacion": "Inadecuada e ilegal. Constituye falta gravísima y delito de concusión."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 1437 de 2011, Art. 5 (Derechos de las Personas ante las Autoridades)",
    "citaNormativa": "«En sus relaciones con las autoridades, toda persona tiene derecho a ser tratada con el respeto debido a la dignidad humana y a recibir atención especial y preferente si se trata de personas en situación de vulnerabilidad o adultos mayores.» (CPACA, Art. 5, Num. 1 y 4)."
  },
  {
    "id": "ci_shared_dian_integ_01",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Valor de la Diligencia y Respeto en el Servicio Público",
    "caso": "A las 4:55 p.m., faltando cinco minutos para finalizar la atención, un pequeño comerciante campesino llega a la sede seccional solicitando orientación sobre la expedición del documento equivalente electrónico, angustiado porque teme ser sancionado con el cierre de su negocio. El funcionario de turno se niega a recibirlo alegando que ya inició el proceso de corte de caja.",
    "enunciado": "A la luz del valor de la Diligencia y la Honestidad del Código de Integridad, la postura que orienta el deber ser del Gestor III es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Apoyar la decisión de rechazo para sentar un precedente de disciplina horaria en la ciudadanía.",
        "explicacion": "Incorrecta. Desconoce el principio de servicio, prevalencia del interés general y atención con empatía a poblaciones vulnerables."
      },
      {
        "id": "B",
        "texto": "Atender al ciudadano con paciencia y calidez, explicarle en lenguaje sencillo los pasos del trámite, tranquilizarlo sobre los plazos legales y garantizar que reciba la orientación completa antes de retirarse.",
        "explicacion": "Correcta. El valor de la Diligencia ('Uso con responsabilidad mi tiempo y pongo lo mejor de mí para resolver las necesidades del ciudadano') y el Respeto ('Comprendo y valoro la dignidad de todas las personas') son pilares del Código de Integridad de la Función Pública."
      },
      {
        "id": "C",
        "texto": "Decirle que contrate un asesor tributario privado costoso porque la DIAN no tiene el deber de educar a los contribuyentes.",
        "explicacion": "Incorrecta. La DIAN tiene la obligación misional expresa de orientar y facilitar el cumplimiento tributario voluntario."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Código de Integridad del Servidor Público Colombiano (DAFP)",
    "citaNormativa": "«Diligencia: Uso con responsabilidad mi tiempo y pongo lo mejor de mí para resolver las necesidades del ciudadano... Respeto: Comprendo y valoro la dignidad de todas las personas, reconociendo sus derechos y ofreciendo un trato justo y cordial.» (DAFP, Código de Integridad)."
  },
  {
    "id": "ci_shared_dian_integ_02",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Valor de la Honestidad y Conflicto de Intereses",
    "caso": "En el reparto mensual de expedientes de fiscalización para investigación tributaria, a usted le asignan la auditoría de una sociedad comercial en la que su cónyuge es socio accionista con el 30% del capital y representante legal suplente.",
    "enunciado": "Con base en el valor de la Honestidad y las causales legales de impedimento (Ley 1437 de 2011 y Código Disciplinario), su proceder inmediato es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Adelantar la investigación de forma discreta y archivarla rápidamente antes de que otros funcionarios se enteren del vínculo familiar.",
        "explicacion": "Incorrecta e ilícita. Configura falta disciplinaria gravísima por actuar estando incurso en causal sobreviniente de impedimento e interés indebido en la celebración de contratos o trámites."
      },
      {
        "id": "B",
        "texto": "Declararse inmediatamente impedido por escrito motivado ante su superior jerárquico, manifestando el parentesco y conflicto de interés para que el expediente sea reasignado a otro profesional idóneo.",
        "explicacion": "Correcta. El valor de la Honestidad ('Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud') exige manifestar oportunamente los conflictos de interés (CPACA Art. 11 y 12)."
      },
      {
        "id": "C",
        "texto": "Cobrar honorarios a la empresa de su cónyuge para emitir un concepto tributario favorable respaldado con su cargo público.",
        "explicacion": "Incorrecta y delictiva. Tipifica delitos graves contra la administración pública como cohecho propio y concusión."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 1437 de 2011, Art. 11 (Causales de Impedimento) y Ley 1952 de 2019",
    "citaNormativa": "«Cuando el interés general de la función pública entre en conflicto con el interés particular y directo del servidor o de su cónyuge, este deberá declararse inmediatamente impedido para actuar en el trámite o actuación administrativa.» (CPACA, Art. 11, Num. 1)."
  },
  {
    "id": "ci_shared_dian_integ_03",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Valor de la Justicia y el Debido Proceso",
    "caso": "Durante una inspección contable, un jefe de división le ordena liquidar una sanción por inexactitud a un contribuyente aplicando una interpretación jurídica personal que contradice la doctrina oficial vigente de la DIAN y la jurisprudencia unificada del Consejo de Estado.",
    "enunciado": "En observancia del valor de la Justicia y la prevalencia del Estado Constitucional de Derecho, usted debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Acatar sumisamente la orden verbal e imponer la sanción arbitraria sin importar la doctrina ni los precedentes judiciales.",
        "explicacion": "Incorrecta. El servidor público está subordinado a la Constitución y la ley; la obediencia debida no ampara la ejecución de órdenes manifiestamente ilegales o arbitrarias."
      },
      {
        "id": "B",
        "texto": "Sustentar técnicamente y por escrito la doctrina oficial de la DIAN y la jurisprudencia del Consejo de Estado, motivando la improcedencia de la sanción arbitraria para garantizar la seguridad jurídica, la justicia tributaria y el debido proceso.",
        "explicacion": "Correcta. El valor de la Justicia ('Actúo con equidad, imparcialidad y reconozco el derecho de cada cual') orienta al servidor a aplicar la ley objetivamente sin arbitrariedades (Art. 209 C.P.)."
      },
      {
        "id": "C",
        "texto": "Filtrar el expediente anónimamente a medios de comunicación para dañar la reputación del superior.",
        "explicacion": "Incorrecta. Rompe el deber de confidencialidad y no resuelve por los canales institucionales y jurídicos el dilema legal."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Constitución Política de Colombia, Arts. 6, 29 y 209",
    "citaNormativa": "«Los servidores públicos son responsables por infringir la Constitución y las leyes, y por omisión o extralimitación en el ejercicio de sus funciones. La función administrativa está al servicio de los intereses generales con fundamento en la igualdad y la moralidad.» (Constitución Política, Arts. 6 y 209)."
  },
  {
    "id": "ci_shared_dian_integ_04",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Valor del Compromiso con la Sostenibilidad Fiscal",
    "caso": "Se implementa una campaña nacional de cultura de la contribución y educación fiscal en colegios y universidades de la región. El evento requiere apoyo logístico y pedagógico voluntario un sábado en la mañana.",
    "enunciado": "Desde el valor del Compromiso ('Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de la sociedad'), su decisión es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Participar con entusiasmo en la jornada pedagógica, compartiendo con los jóvenes la importancia social de los tributos para financiar la salud, la educación y la paz en Colombia.",
        "explicacion": "Correcta. El valor del Compromiso trasciende el cumplimiento formal del horario y abraza con vocación el sentido transformador de la administración tributaria para el desarrollo del país."
      },
      {
        "id": "B",
        "texto": "Burlarse de la iniciativa pedagógica afirmando que a los jóvenes solo se les debe enseñar a evadir impuestos.",
        "explicacion": "Inadecuada. Atenta contra la misión de la DIAN y denigra la función pública y la cultura de la legalidad."
      },
      {
        "id": "C",
        "texto": "Exigir viáticos triples en efectivo por adelantado como condición innegociable para asistir.",
        "explicacion": "Inadecuada. Demuestra desapego al valor de vocación pública y falta de compromiso institucional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad de la Función Pública y Misión Social DIAN",
    "citaNormativa": "«Compromiso: Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para promover el bien común, la cultura de la contribución y la defensa de los recursos públicos de todos los colombianos.» (Código de Integridad DAFP)."
  },
  {
    "id": "ci_shared_dian_cpaca_01",
    "nivel": "Profesional",
    "ejeId": "cpaca",
    "ejeNombre": "Derecho Administrativo y CPACA",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Recurso de Reconsideración Tributario (Art. 720 E.T.)",
    "caso": "A un contribuyente se le notifica en debida forma una Liquidación Oficial de Revisión por impuesto de renta. En desacuerdo con la glosa, decide impugnar el acto en sede administrativa gubernativa.",
    "enunciado": "¿Cuál es el recurso procedente, ante qué autoridad se interpone y cuál es el término legal para radicarlo?",
    "opciones": [
      {
        "id": "A",
        "texto": "El Recurso de Reconsideración, el cual debe interponerse por escrito ante la misma dependencia que profirió el acto dentro de los dos (2) meses siguientes a su notificación.",
        "explicacion": "Correcta. El artículo 720 del Estatuto Tributario establece que contra las liquidaciones oficiales y resoluciones sanción procede únicamente el Recurso de Reconsideración, el cual debe interponerse dentro de los dos (2) meses siguientes a la notificación del acto administrativo."
      },
      {
        "id": "B",
        "texto": "El Recurso de Reposición y en subsidio Apelación ante el Ministro de Hacienda en el término de 5 días hábiles.",
        "explicacion": "Incorrecta. En materia tributaria rige el principio de especialidad procedimental: el recurso ordinario es el de Reconsideración (no reposición/apelación ordinarios del CPACA) y su término es de dos meses."
      },
      {
        "id": "C",
        "texto": "Una acción de tutela directa sin agotar la vía administrativa gubernativa.",
        "explicacion": "Incorrecta. La tutela es subsidiaria e improcedente existiendo recursos administrativos y medios de control contencioso ordinarios."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 720 (Recurso de reconsideración)",
    "citaNormativa": "«Sin perjuicio de lo dispuesto en normas especiales, contra las liquidaciones oficiales, resoluciones que impongan sanciones o decreten el decomiso de mercancías, procede el recurso de reconsideración dentro de los dos (2) meses siguientes a su notificación.» (E.T. Art. 720)."
  },
  {
    "id": "ci_shared_dian_cpaca_02",
    "nivel": "Profesional",
    "ejeId": "cpaca",
    "ejeNombre": "Derecho Administrativo y CPACA",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Silencio Administrativo Positivo en Recurso de Reconsideración (Art. 734 E.T.)",
    "caso": "Un contribuyente interpuso en debida forma el Recurso de Reconsideración contra una Liquidación Oficial de Revisión el 10 de marzo de 2024. A la fecha de hoy, 15 de abril de 2025, la DIAN no ha notificado la resolución que decide el recurso.",
    "enunciado": "De conformidad con el artículo 734 del Estatuto Tributario, ¿qué figura jurídica se consolida a favor del contribuyente?",
    "opciones": [
      {
        "id": "A",
        "texto": "Opera el Silencio Administrativo Positivo; al vencer el término de un (1) año sin notificar la decisión del recurso, se entiende fallado a favor del recurrente y queda sin efecto la liquidación oficial.",
        "explicacion": "Correcta. El artículo 734 del Estatuto Tributario consagra de manera expresa el silencio administrativo positivo si la DIAN no resuelve el recurso de reconsideración dentro del año siguiente a su interposición en debida forma, protocolizándose la revocatoria del acto recurrido."
      },
      {
        "id": "B",
        "texto": "Opera el silencio negativo debiendo pagar de inmediato el doble del valor liquidado.",
        "explicacion": "Incorrecta. En el recurso de reconsideración tributario la norma especial consagra expresamente el silencio positivo (Art. 734 E.T.), no el negativo."
      },
      {
        "id": "C",
        "texto": "La DIAN dispone de un término indefinido de 10 años para contestar cuando sus funcionarios tengan tiempo libre.",
        "explicacion": "Incorrecta. Los términos procesales de la administración son perentorios e improrrogables para garantizar la seguridad jurídica."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 734 (Silencio administrativo positivo)",
    "citaNormativa": "«Si transcurrido un año desde la interposición en debida forma del recurso de reconsideración, no se ha notificado la decisión correspondiente, se entenderá fallado a favor del recurrente, en cuyo caso la administración deberá protocolizar la decisión.» (E.T. Art. 734)."
  },
  {
    "id": "ci_shared_dian_cpaca_03",
    "nivel": "Profesional",
    "ejeId": "cpaca",
    "ejeNombre": "Derecho Administrativo y CPACA",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Pérdida de Fuerza Ejecutoria del Acto Administrativo (CPACA Art. 91)",
    "caso": "Una resolución sanción quedó debidamente ejecutoriada hace seis (6) años. Durante ese lapso la DIAN no adelantó ningún acto de ejecución ni cobro coactivo para hacerla efectiva.",
    "enunciado": "De acuerdo con el artículo 91 del CPACA, ¿cuál es el fenómeno jurídico que extingue la ejecutoriedad del acto administrativo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Pérdida de fuerza ejecutoria por el transcurso de cinco (5) años sin que la administración haya ejecutado los actos que le corresponden para hacerla efectiva (decaimiento del acto administrativo por prescripción del cobro).",
        "explicacion": "Correcta. El artículo 91 numeral 3 del CPACA dispone que los actos administrativos pierden su fuerza ejecutoria cuando al cabo de cinco (5) años de estar en firme, la autoridad no ha realizado los actos de ejecución correspondientes."
      },
      {
        "id": "B",
        "texto": "El acto adquiere mayor fuerza ejecutoria indefinida y puede cobrarse en cualquier momento del siglo XXI.",
        "explicacion": "Incorrecta. La inactividad de la administración por 5 años extingue la fuerza ejecutoria del acto administrativo."
      },
      {
        "id": "C",
        "texto": "El acto se transforma automáticamente en un bono de deuda pública transable en la bolsa de valores.",
        "explicacion": "Incorrecta. Planteamiento absurdo e inexistente en la teoría general del acto administrativo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "CPACA (Ley 1437 de 2011), Art. 91 (Pérdida de fuerza ejecutoria)",
    "citaNormativa": "«Salvo norma expresa en contrario, los actos administrativos en firme serán obligatorios mientras no hayan sido anulados. Perderán obligatoriedad y fuerza ejecutoria: Cuando al cabo de cinco (5) años de estar en firme, la autoridad no ha realizado los actos que le correspondan para ejecutarlos.» (CPACA, Art. 91 Numeral 3)."
  },
  {
    "id": "ci_shared_dian_cpaca_04",
    "nivel": "Profesional",
    "ejeId": "cpaca",
    "ejeNombre": "Derecho Administrativo y CPACA",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Revocatoria Directa de Actos Administrativos Tributarios (CPACA Art. 93 y E.T. Art. 736)",
    "caso": "Un contribuyente que no interpuso recurso de reconsideración dentro de los dos meses contra una liquidación oficial solicita la Revocatoria Directa demostrando que el acto se fundamentó en una norma declarada inexequible con efectos retroactivos por la Corte Constitucional.",
    "enunciado": "¿Es procedente la solicitud de revocatoria directa aún cuando no se hayan interpuesto los recursos en vía gubernativa?",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí es procedente; conforme al artículo 93 del CPACA y al Estatuto Tributario, la falta de interposición de recursos ordinarios no impide la solicitud de revocatoria directa cuando el acto manifiesta manifiesta oposición a la Constitución o la ley.",
        "explicacion": "Correcta. El artículo 93 del CPACA y la jurisprudencia del Consejo de Estado reiteran que la no interposición de recursos en vía administrativa no priva al ciudadano del derecho a solicitar la revocatoria directa por las causales taxativas legales (manifiesta oposición a la Constitución, violación a la ley o agravio injustificado)."
      },
      {
        "id": "B",
        "texto": "No es procedente bajo ninguna circunstancia porque quien no interpuso recursos pierde todos sus derechos de por vida.",
        "explicacion": "Incorrecta. Confunde el agotamiento de la vía administrativa para demandar ante la jurisdicción contenciosa con el mecanismo autónomo de revocatoria directa."
      },
      {
        "id": "C",
        "texto": "Solo procede si el contribuyente paga el 50% del valor discutido como fianza no reembolsable.",
        "explicacion": "Incorrecta. La solicitud de revocatoria directa no exige depósitos ni cauciones pecuniarias previas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "CPACA, Art. 93 y Estatuto Tributario, Art. 736 (Revocatoria directa)",
    "citaNormativa": "«Los actos administrativos deberán ser revocados por las mismas autoridades que los hayan expedido: Cuando sea manifiesta su oposición a la Constitución Política o a la ley. La solicitud de revocatoria directa procederá aun cuando se hubiere ejercido o no los recursos administrativos.» (CPACA, Art. 93)."
  },
  {
    "id": "ci_shared_dian_cpaca_05",
    "nivel": "Profesional",
    "ejeId": "cpaca",
    "ejeNombre": "Derecho Administrativo y CPACA",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Corrección de Errores Aritméticos o de Hecho (CPACA Art. 45)",
    "caso": "En una resolución sanción, el funcionario liquidador escribió en la parte resolutiva la suma de '$100.000.000 (diez millones de pesos)', existiendo una contradicción palmaria y un error mecanográfico evidente frente a los datos contables del expediente.",
    "enunciado": "¿Cuál es el mecanismo formal legal que debe emplear la administración para subsanar este vicio formal?",
    "opciones": [
      {
        "id": "A",
        "texto": "Expedir un acto de corrección de error aritmético o de trascripción material conforme al artículo 45 del CPACA, el cual puede efectuarse en cualquier tiempo siempre que no altere lo sustancial de la decisión.",
        "explicacion": "Correcta. El Art. 45 del CPACA faculta a la autoridad administrativa para corregir en cualquier tiempo, de oficio o a petición de parte, los errores puramente aritméticos, mecanográficos o de trascripción que no modifiquen el fondo de la decisión."
      },
      {
        "id": "B",
        "texto": "Tachar el documento con bolígrafo y corrector líquido sin dejar constancia administrativa.",
        "explicacion": "Incorrecta. Atenta contra la custodia y validez de los expedientes oficiales y tipifica alteración de documento público."
      },
      {
        "id": "C",
        "texto": "Iniciar un nuevo juicio situacional de fiscalización desde cero anulando todos los antecedentes.",
        "explicacion": "Incorrecta. Viola el principio de economía procesal y eficacia administrativa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "CPACA (Ley 1437 de 2011), Art. 45 (Corrección de errores formales)",
    "citaNormativa": "«En cualquier tiempo, de oficio o a petición de parte, se podrán corregir los errores simplemente aritméticos, de hecho o de transcripción contenidos en los actos administrativos, siempre que la corrección no altere lo sustancial de la decisión.» (CPACA, Art. 45)."
  },
  {
    "id": "ci_shared_dian_cpaca_06",
    "nivel": "Profesional",
    "ejeId": "cpaca",
    "ejeNombre": "Derecho Administrativo y CPACA",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Notificación por Conducta Concluyente (CPACA Art. 72)",
    "caso": "A un declarante no se le notificó formalmente por correo electrónico la resolución que impone sanción por libros de contabilidad. Sin embargo, el ciudadano radica un escrito ante la DIAN interponiendo recurso de reconsideración donde transcribe íntegramente la resolución sanción y debate sus pruebas.",
    "enunciado": "De acuerdo con el artículo 72 del CPACA, ¿qué efecto procesal se produce respecto a la notificación del acto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Opera la Notificación por Conducta Concluyente; se tiene por surtida la notificación personal a partir de la fecha de radicación del escrito donde el interesado manifiesta o demuestra conocer el acto en su integridad.",
        "explicacion": "Correcta. El artículo 72 del CPACA dispone que cuando una parte interponga recursos o se manifieste conocedora del contenido del acto administrativo sin haber sido notificada debidamente, se entenderá surtida la notificación por conducta concluyente desde la fecha de dicha manifestación."
      },
      {
        "id": "B",
        "texto": "El acto es inexistente jurídicamente y el contribuyente queda inmune de por vida.",
        "explicacion": "Incorrecta. La conducta concluyente sanea la falta de notificación previa garantizando que el administrado ejerció su defensa material."
      },
      {
        "id": "C",
        "texto": "La DIAN debe sancionar al contribuyente por haberse enterado del acto administrativo sin permiso previo.",
        "explicacion": "Incorrecta. Absurdo procesal; el conocimiento del acto abre el ejercicio legítimo del derecho de defensa y contradicción."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "CPACA (Ley 1437 de 2011), Art. 72 (Falta o irregularidad de las notificaciones)",
    "citaNormativa": "«La notificación quedará surtida y el acto producirá efectos cuando la parte interesada se declare sabedora del acto administrativo o interponga los recursos procedentes, dándose por notificada por conducta concluyente.» (CPACA, Art. 72)."
  },
  {
    "id": "ci_shared_dian_cpaca_07",
    "nivel": "Profesional",
    "ejeId": "cpaca",
    "ejeNombre": "Derecho Administrativo y CPACA",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Notificación por Aviso subsidiaria (CPACA Art. 69)",
    "caso": "Se intenta notificar personalmente un acto administrativo definitivo en la dirección física de un contribuyente que no tiene correo electrónico autorizado en el RUT. Se le envía citación para notificación personal, pero no comparece dentro de los cinco (5) días hábiles siguientes.",
    "enunciado": "¿Cuál es el mecanismo subsidiario de notificación que debe aplicar la DIAN conforme al artículo 69 del CPACA?",
    "opciones": [
      {
        "id": "A",
        "texto": "Efectuar la Notificación por Aviso, remitiendo copia íntegra del acto al domicilio y publicándolo en la página web institucional con indicación de los recursos procedentes; la notificación se considerará surtida al finalizar el día siguiente al de la entrega o retiro del aviso.",
        "explicacion": "Correcta. El artículo 69 del CPACA regula la notificación por aviso cuando no sea posible la notificación personal tras vencer el término de la citación, surtiéndose al finalizar el día siguiente a la entrega del aviso."
      },
      {
        "id": "B",
        "texto": "Dejar el expediente abandonado en un archivo muerto sin intentar ninguna otra vía de comunicación.",
        "explicacion": "Incorrecta. La administración tiene el deber de agotar los mecanismos subsidiarios de notificación para asegurar la firmeza de sus actos."
      },
      {
        "id": "C",
        "texto": "Publicar el nombre del contribuyente en un megáfono callejero por el centro de la ciudad.",
        "explicacion": "Incorrecta. Mecanismo informal y lesivo del derecho a la intimidad no previsto en la ley."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "CPACA (Ley 1437 de 2011), Art. 69 (Notificación por aviso)",
    "citaNormativa": "«Si no pudiere hacerse la notificación personal al cabo de los cinco (5) días del envío de la citación, se notificará por medio de aviso que se remitirá a la dirección que se conozca del interesado. La notificación se entenderá surtida al finalizar el día siguiente al de la entrega del aviso.» (CPACA, Art. 69)."
  },
  {
    "id": "ci_shared_dian_contra_02",
    "nivel": "Profesional",
    "ejeId": "contratacion",
    "ejeNombre": "Contratación y Convenios",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Principio de Planeación y Estudios Previos en Contratación Estatal",
    "caso": "La Seccional requiere contratar urgentemente la adquisición de servidores informáticos para procesamiento de macrodatos. Para acelerar el proceso, el área responsable propone publicar el pliego de condiciones sin haber elaborado el estudio del sector ni el análisis del riesgo previsible.",
    "enunciado": "Desde el principio de legalidad y planeación contractual (Ley 80 de 1993 y Decreto 1082 de 2015), ¿cuál es el direccionamiento técnico correcto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la propuesta y elaborar rigurosamente los Estudios y Documentos Previos (análisis del sector, maduración técnica y matriz de riesgos previsibles) antes de la apertura del proceso, puesto que la falta de planeación vicia de nulidad el contrato y genera responsabilidad patrimonial y disciplinaria.",
        "explicacion": "Correcta. El Principio de Planeación es rector en la contratación pública. Ningún proceso puede abrirse sin estudios previos completos, análisis de mercado y matriz de riesgos; omitirlos acarrea nulidad del proceso y sanción a los estructuradores."
      },
      {
        "id": "B",
        "texto": "Adjudicar directamente el contrato por WhatsApp a un amigo del director sin estudios ni pólizas.",
        "explicacion": "Incorrecta. Delito de contrato sin cumplimiento de requisitos legales (Código Penal Art. 410) y falta gravísima."
      },
      {
        "id": "C",
        "texto": "Comprar los servidores con dinero en efectivo de la caja menor de la oficina sin registrar en el SECOP.",
        "explicacion": "Incorrecta. La caja menor está restringida a gastos urgentes menores e imprevistos; no ampara adquisición de bienes tecnológicos de gran escala."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 80 de 1993, Art. 25 (Principio de Economía y Planeación) y Decreto 1082 de 2015",
    "citaNormativa": "«En los procesos contractuales se elaborarán los estudios, diseños y proyectos requeridos, y los pliegos de condiciones, con antelación a la apertura del proceso de selección o de la firma del contrato.» (Ley 80 de 1993, Art. 25 Numeral 12)."
  },
  {
    "id": "ci_shared_dian_contra_03",
    "nivel": "Profesional",
    "ejeId": "contratacion",
    "ejeNombre": "Contratación y Convenios",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Modalidades de Selección: Licitación Pública vs. Selección Abreviada vs. Mínima Cuantía",
    "caso": "La DIAN requiere contratar el servicio integral de aseo, cafetería y mantenimiento para todas las sedes del país por un valor estimado de 15.000 millones de pesos.",
    "enunciado": "Tratándose de servicios de características técnicas uniformes y de común utilización, ¿cuál es la modalidad de selección procedente conforme a la Ley 1150 de 2007?",
    "opciones": [
      {
        "id": "A",
        "texto": "Selección Abreviada por Subasta Inversa Presencial o Electrónica (o Acuerdo Marco de Precios en Colombia Compra Eficiente), por tratarse de bienes y servicios de características técnicas uniformes y común utilización.",
        "explicacion": "Correcta. El artículo 2 numeral 2 literal a de la Ley 1150 de 2007 señala que los bienes y servicios uniformes se adquieren por Selección Abreviada (subasta inversa presencial o electrónica o tienda virtual de acuerdos marco), independientemente de la cuantía."
      },
      {
        "id": "B",
        "texto": "Contratación Directa sin convocatoria pública argumentando que el aseo no es importante.",
        "explicacion": "Incorrecta. La contratación directa es excepcionalísima para causales taxativas de ley; los servicios uniformes no encajan en contratación directa."
      },
      {
        "id": "C",
        "texto": "Mínima Cuantía fraccionando el contrato en 1.000 contratos diminutos para evitar licitar.",
        "explicacion": "Incorrecta. El fraccionamiento contractual es una práctica ilícita expresamente prohibida y penalizada en Colombia."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1150 de 2007, Art. 2 Numeral 2 (Selección abreviada de bienes uniformes)",
    "citaNormativa": "«La adquisición de bienes y servicios de características técnicas uniformes y de común utilización por parte de las entidades estatales se realizará por la modalidad de selección abreviada mediante subasta inversa o acuerdos marco de precios.» (Ley 1150 de 2007, Art. 2)."
  },
  {
    "id": "ci_shared_dian_contra_04",
    "nivel": "Profesional",
    "ejeId": "contratacion",
    "ejeNombre": "Contratación y Convenios",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Supervisión de Contratos Estatales y Responsabilidad (Ley 1474 de 2011 Art. 83)",
    "caso": "A un Gestor III se le designa como supervisor de un contrato de suministro de papelería e insumos de oficina. El contratista entrega productos de una calidad inferior a la especificada en el pliego y solicita la firma del acta de recibido a satisfacción prometiendo cambiar los productos el próximo mes.",
    "enunciado": "¿Cuál es el deber funcional y de integridad que debe observar el supervisor designado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la firma del acta de recibido a satisfacción, elaborar un informe de incumplimiento con requerimiento formal al contratista para el ajuste conforme al pliego, y de persistir el desacato, solicitar a la ordenación del gasto el inicio del procedimiento sancionatorio de multas o caducidad (Art. 86 Ley 1474/2011).",
        "explicacion": "Correcta. El artículo 83 de la Ley 1474 de 2011 (Estatuto Anticorrupción) obliga al supervisor a vigilar el cumplimiento material y técnico del contrato; certificar el recibido a satisfacción de bienes no entregados o deficientes acarrea responsabilidad penal por falsedad y prevaricato."
      },
      {
        "id": "B",
        "texto": "Firmar el acta a satisfacción para evitar conflictos personales y recibir un paquete de resmas de papel para su casa.",
        "explicacion": "Incorrecta. Falla disciplinaria gravísima, delito de falsedad ideológica en documento público y peculado por apropiación."
      },
      {
        "id": "C",
        "texto": "Renunciar al empleo público inmediatamente y quemar las resmas de papel defectuosas.",
        "explicacion": "Incorrecta. Conducta evasiva contraria al ejercicio de la supervisión contractual institucional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1474 de 2011 (Estatuto Anticorrupción), Arts. 83 y 86 (Supervisión e interventoría)",
    "citaNormativa": "«La supervisión contractual consiste en el seguimiento técnico, administrativo, financiero, contable y jurídico que se ejerce sobre el contrato. Si el supervisor advierte incumplimiento, requerirá al contratista e informará al ordenador del gasto.» (Ley 1474 de 2011, Art. 83)."
  },
  {
    "id": "ci_shared_dian_contra_05",
    "nivel": "Profesional",
    "ejeId": "contratacion",
    "ejeNombre": "Contratación y Convenios",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inhabilidades e Incompatibilidades en Contratación Estatal (Ley 80 de 1993 Art. 8)",
    "caso": "En un proceso licitatorio para el mantenimiento de las plantas eléctricas de la DIAN se presenta como oferente único una empresa donde la cónyuge del Director Seccional posee el 60% de las acciones y es la representante legal.",
    "enunciado": "De acuerdo con el artículo 8 de la Ley 80 de 1993, ¿cuál es la situación jurídica del oferente en este proceso?",
    "opciones": [
      {
        "id": "A",
        "texto": "Está incurso en una Inhabilidad e Incompatibilidad insubsanable para contratar con la entidad (por parentesco en primer grado de consanguinidad/afinidad con el directivo con poder de decisión), debiendo rechazarse la oferta de plano.",
        "explicacion": "Correcta. El Art. 8 numeral 1 literal b y numeral 2 de la Ley 80 de 1993 prohíbe de forma taxativa celebrar contratos estatales con los cónyuges o parientes dentro del cuarto grado de consanguinidad o segundo de afinidad de los servidores del nivel directivo de la entidad."
      },
      {
        "id": "B",
        "texto": "Debe adjudicársele el contrato de inmediato con un 20% de sobreprecio por tratarse de la familia del director.",
        "explicacion": "Incorrecta. Tipifica delitos de interés indebido en la celebración de contratos y tráfico de influencias."
      },
      {
        "id": "C",
        "texto": "Puede contratar libremente si el cónyuge promete no hablar de trabajo durante la cena familiar.",
        "explicacion": "Incorrecta. Las inhabilidades legales son objetivas y de orden público; no se subsanan con promesas domésticas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 80 de 1993, Art. 8 (Inhabilidades e incompatibilidades para contratar)",
    "citaNormativa": "«Son inhábiles para participar en licitaciones y para celebrar contratos estatales: El cónyuge, compañero permanente del servidor público en los niveles directivo, asesor o ejecutivo de la entidad contratante.» (Ley 80 de 1993, Art. 8 Numeral 2 Literal b)."
  },
  {
    "id": "ci_shared_dian_discip_01",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Faltas Gravísimas y Código General Disciplinario (Ley 1952 de 2019 / Ley 2094 de 2021)",
    "caso": "A un auditor de fiscalización de la DIAN se le demuestra que utilizó las bases de datos de información exógena reservada para suministrar listados comerciales de ventas a empresas competidoras a cambio de pagos en efectivo.",
    "enunciado": "De acuerdo con el Código General Disciplinario, ¿qué calificación merece esta conducta y qué sanción procede?",
    "opciones": [
      {
        "id": "A",
        "texto": "Constituye una Falta Gravísima cometida a título de dolo (revelación indebida de secretos e infracción a la reserva legal), sancionable con Destitución del empleo e Inhabilidad General para ejercer cargos públicos de diez (10) a veinte (20) años.",
        "explicacion": "Correcta. Utilizar información reservada en provecho propio o de terceros constituye falta gravísima bajo el Código General Disciplinario (Ley 1952 de 2019 modificada por la Ley 2094 de 2021), acarreando la destitución e inhabilidad máxima legal."
      },
      {
        "id": "B",
        "texto": "Es una falta leve sancionable con una felicitación por haber encontrado fuentes alternativas de ingresos.",
        "explicacion": "Incorrecta. Aberración ética y jurídica contraria a los fundamentos constitucionales del servicio civil."
      },
      {
        "id": "C",
        "texto": "Solo amerita una llamada de atención privada que no constará en la hoja de vida.",
        "explicacion": "Incorrecta. La gravedad material y el dolo de la conducta exigen la sanción expulsiva del servicio público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019 (Código General Disciplinario) y Ley 2094 de 2021, Arts. 48 a 55",
    "citaNormativa": "«Las faltas gravísimas cometidas con dolo o culpa gravísima se sancionarán con destitución e inhabilidad general de diez a veinte años.» (Código General Disciplinario, Art. 48)."
  },
  {
    "id": "ci_shared_dian_discip_02",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Trámite de Impedimentos y Conflicto de Intereses (CPACA Art. 11 y CGD)",
    "caso": "Al Gestor III se le asigna para proyectar la resolución de aforo contra una firma constructora donde su hermano es el socio mayoritario y su cuñada es la gerente general.",
    "enunciado": "¿Cuál es el procedimiento legal obligatorio que debe adelantar de forma inmediata el funcionario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Manifestar por escrito el impedimento ante su superior jerárquico dentro de los tres (3) días siguientes a conocer la asignación, detallando la causal legal de parentesco (Art. 11 numeral 1 CPACA), absteniéndose de actuar hasta que se designe funcionario ad-hoc.",
        "explicacion": "Correcta. El artículo 11 del CPACA y el Código Disciplinario obligan al servidor público a manifestar inmediatamente su impedimento ante el superior jerárquico frente a parientes en primer y segundo grado. Actuar estando impedido vicia de nulidad el acto y configura falta disciplinaria grave."
      },
      {
        "id": "B",
        "texto": "Continuar con el expediente en secreto y archivar la investigación para ayudar económicamente a su familia.",
        "explicacion": "Incorrecta. Configura prevaricato por acción, conflicto de interés no declarado y falta gravísima dolosa."
      },
      {
        "id": "C",
        "texto": "Aumentar al triple las sanciones a su hermano para demostrar públicamente que no tiene favoritismos.",
        "explicacion": "Incorrecta. Sigue estando impedido; la imparcialidad objetiva exige apartarse completamente del caso con independencia del sentido del fallo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "CPACA (Ley 1437 de 2011), Arts. 11 y 12 (Impedimentos y recusaciones)",
    "citaNormativa": "«El servidor público que esté incurso en alguna de las causales de impedimento deberá manifestarlo por escrito a su superior jerárquico inmediatamente conozca de ella, cesando toda actuación en el expediente.» (CPACA, Art. 12)."
  },
  {
    "id": "ci_shared_dian_discip_03",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Deber de Denuncia de Delitos contra la Administración Pública (Ley 1952 Art. 38)",
    "caso": "Un contribuyente investigado se acerca al escritorio del Gestor III y le ofrece un sobre con 10 millones de pesos en billetes para que engavete el requerimiento especial y no lo envíe al correo electrónico.",
    "enunciado": "¿Cuál es la conducta inmediata que debe adoptar el servidor público conforme al Código General Disciplinario y la legislación penal?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar categóricamente el dinero, poner el hecho en conocimiento inmediato de la Policía Judicial / Fiscalía por la comisión en flagrancia del delito de Cohecho por dar u ofrecer (Código Penal Art. 407), y rendir informe escrito pormenorizado a su superior jerárquico.",
        "explicacion": "Correcta. El servidor tiene el deber estricto de rechazar todo intento de soborno y denunciar de inmediato la conducta punible (Art. 38 numeral 24 de la Ley 1952 de 2019 y Código de Procedimiento Penal)."
      },
      {
        "id": "B",
        "texto": "Recibir el dinero en efectivo prometiendo que solo cobrará la mitad de las sanciones en el acto oficial.",
        "explicacion": "Incorrecta. Constituye el delito de cohecho impropio/propio y acarrea privación inmediata de la libertad y destitución definitiva."
      },
      {
        "id": "C",
        "texto": "Pedirle que le consigna en una cuenta virtual a nombre de un primo para que la DIAN no se entere.",
        "explicacion": "Incorrecta. Maniobra criminal de ocultamiento y complicidad en cohecho y enriquecimiento ilícito."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019, Art. 38 Numeral 24 y Código Penal Art. 407 (Cohecho por dar u ofrecer)",
    "citaNormativa": "«Es deber de todo servidor público denunciar los delitos, contravenciones y faltas disciplinarias de los cuales tuviere conocimiento, poniendo a disposición las pruebas correspondientes.» (Ley 1952 de 2019, Art. 38)."
  },
  {
    "id": "ci_shared_dian_discip_04",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Prohibición de Dádivas y Regalos de Usuarios Fiscalizados (Ley 1952 Art. 39)",
    "caso": "Con motivo de la época decembrina, una empresa multinacional que se encuentra en medio de un proceso de auditoría tributaria envía al domicilio de los auditores canastas navideñas de lujo que contienen licores importados y teléfonos celulares de última generación.",
    "enunciado": "Frente a la entrega de regalos por parte de sujetos pasivos objeto de fiscalización, ¿cuál es la orden legal?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar y devolver formalmente los regalos, informando que los servidores públicos tienen expresamente prohibido solicitar o recibir dádivas, presentes, agasajos o cualquier beneficio directo o indirecto de personas interesadas en trámites o actuaciones a su cargo (Ley 1952 Art. 39).",
        "explicacion": "Correcta. El Código General Disciplinario prohíbe de manera tajante a todo servidor recibir obsequios, dádivas o atenciones de administrados con intereses en decisiones a su cargo. Aceptar regalos compromete la independencia y tipifica falta disciplinaria grave."
      },
      {
        "id": "B",
        "texto": "Aceptar los celulares y usarlos para hacer llamadas privadas argumentando que en Navidad se perdona todo.",
        "explicacion": "Incorrecta. Transgrede la integridad pública, el principio de imparcialidad y la prohibición legal expresa de dádivas."
      },
      {
        "id": "C",
        "texto": "Vender los celulares por internet y repartir el dinero entre los compañeros de puesto.",
        "explicacion": "Incorrecta. Agrava la conducta ilícita con comercialización clandestina de bienes provenientes de dádivas ilegales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019, Art. 39 Numeral 19 (Prohibición de dádivas y presentes)",
    "citaNormativa": "«A todo servidor público le está prohibido: Solicitar, cobrar o recibir dádivas, presentes, agasajos, o cualquier beneficio proveniente de personas con las que tenga relación oficial o interés en las decisiones.» (Ley 1952 de 2019, Art. 39)."
  },
  {
    "id": "ci_shared_dian_discip_05",
    "nivel": "Profesional",
    "ejeId": "integridad",
    "ejeNombre": "Valores de Integridad",
    "tipo": "Integridad (10%)",
    "tema": "Conflicto de Interés Aparente, Potencial y Real (Ley 2013 de 2019)",
    "caso": "Un Gestor III posee acciones minoritarias en un fondo de inversión que a su vez es dueño del 10% de un consorcio vial al que la seccional le está investigando una devolución millonaria de saldos de IVA.",
    "enunciado": "Desde las directrices del DAFP sobre gestión de conflictos de intereses y la Ley 2013 de 2019, ¿qué clasificación tiene esta situación y cómo debe administrarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Constituye un Conflicto de Interés Potencial/Aparente que debe declararse formalmente en el Formato de Declaración de Bienes, Rentas y Conflictos de Interés (SIDEAP / SIGEP), informando al jefe inmediato para que decida si es necesario apartarlo de la asignación del trámite para blindar la transparencia institucional.",
        "explicacion": "Correcta. El DAFP establece que la gestión preventiva de la integridad exige declarar oportunamente los conflictos reales, potenciales y aparentes. Revelar las inversiones financieras evita cuestionamientos éticos y protege la legalidad del acto administrativo."
      },
      {
        "id": "B",
        "texto": "Ocultar la inversión financiera deliberadamente en la declaración juramentada de bienes.",
        "explicacion": "Incorrecta. Constituye falta gravísima por falsedad en la declaración de bienes y rentas y ocultamiento de información patrimonial."
      },
      {
        "id": "C",
        "texto": "Aprobar la devolución del IVA en 2 minutos para que sus acciones en el fondo suban de precio.",
        "explicacion": "Incorrecta. Configura conflicto de interés real consumado, tráfico de influencias y prevaricato por provecho económico propio."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 2013 de 2019 y Guía para la Gestión de Conflictos de Interés DAFP",
    "citaNormativa": "«Los servidores públicos tienen el deber de declarar proactivamente sus bienes, rentas y registrar los posibles conflictos de interés en el sistema de información pública institucional para garantizar la transparencia.» (Ley 2013 de 2019)."
  },
  {
    "id": "ci_shared_dian_comp_gestor_01",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (Clasificatorio - 25%)",
    "tema": "Liderazgo de Equipos y Resiliencia en Cierres Tributarios Bajo Presión",
    "caso": "Faltando dos semanas para el cierre del calendario de vencimiento de declaraciones de renta, el sistema de información experimenta fallas intermitentes y el equipo de analistas manifiesta desmotivación y estrés por la sobrecarga de consultas y expedientes.",
    "enunciado": "Como Gestor III, para orientar al equipo hacia el cumplimiento de los objetivos misionales garantizando el bienestar del personal, su acción es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Organizar una sesión ágil de priorización y redistribución de cargas de trabajo según criticidad procesal, coordinar con el área de TI la contingencia técnica, y mantener una comunicación empática y constante que canalice soluciones y motive al equipo al logro de las metas.",
        "explicacion": "Correcta. El Decreto 815 de 2018 define el Liderazgo en el nivel profesional como la capacidad de orientar, inspirar y coordinar equipos en escenarios de alta exigencia, equilibrando la eficacia operativa con el soporte humano y la gestión de contingencias."
      },
      {
        "id": "B",
        "texto": "Amenazar con abrirles procesos disciplinarios a todos los analistas si no trabajan 24 horas continuas sin dormir.",
        "explicacion": "Inadecuada. Estilo autoritario destructivo que fomenta el acoso laboral, agrava el estrés y deteriora el clima organizacional."
      },
      {
        "id": "C",
        "texto": "Apagar el teléfono, irse de la oficina y dejar que los expedientes prescriban por sí solos.",
        "explicacion": "Inadecuada. Demuestra desidia, negligencia y falta de vocación de servicio público profesional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 (Competencias Comportamentales del Nivel Profesional)",
    "citaNormativa": "«Liderazgo: Fomenta la integración y el compromiso del equipo, orienta sus esfuerzos hacia el logro de los objetivos institucionales y mantiene un clima laboral participativo y armónico ante situaciones adversas.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_gestor_02",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (Clasificatorio - 25%)",
    "tema": "Aprendizaje Continuo e Innovación Tecnológica (Big Data e IA Fiscal)",
    "caso": "La DIAN implementa un nuevo modelo predictivo de analítica avanzada y minería de datos de facturación electrónica para detectar redes de evasores. Algunos funcionarios veteranos se resisten al cambio prefiriendo la revisión manual en papel físico.",
    "enunciado": "Desde la competencia de Aprendizaje Continuo e Innovación, su comportamiento como Gestor III es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Capacitarse activamente en las nuevas herramientas de analítica digital, liderar pilotos prácticos de aplicación en su seccional y compartir didácticamente los hallazgos con sus compañeros para demostrar el valor del ahorro de tiempo y la precisión en la fiscalización.",
        "explicacion": "Correcta. La competencia de Aprendizaje Continuo implica apropiar activamente nuevas tecnologías y conocimientos, adaptándose a las transformaciones organizacionales y promoviendo la gestión del conocimiento colectivo."
      },
      {
        "id": "B",
        "texto": "Boicotear el sistema informático ingresando datos basura para que la dirección regrese al archivo en papel.",
        "explicacion": "Inadecuada. Atenta contra la infraestructura tecnológica del Estado y configura sabotaje institucional."
      },
      {
        "id": "C",
        "texto": "Burlarse de los compañeros que intentan aprender el software acusándolos de 'modernistas'.",
        "explicacion": "Inadecuada. Genera resistencia tóxica y fractura el desarrollo del talento humano en la entidad."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 (Competencia de Aprendizaje Continuo e Innovación)",
    "citaNormativa": "«Aprendizaje Continuo: Adquiere, desarrolla y aplica conocimientos y destrezas para mejorar el desempeño propio y del equipo, adaptándose a las innovaciones tecnológicas y de gestión.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_gestor_03",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (Clasificatorio - 25%)",
    "tema": "Comunicación Asertiva y Manejo de Contribuyentes Conflictivos",
    "caso": "Un ciudadano indignado por el cobro coactivo de una sanción tributaria ingresa al módulo de atención gritando insultos, golpeando la mesa y acusando a los funcionarios de 'ladrones'.",
    "enunciado": "Como profesional del servicio, ¿cuál es la respuesta comportamental asertiva e idónea?",
    "opciones": [
      {
        "id": "A",
        "texto": "Mantener la calma y el autocontrol emocional, escuchar atentamente sus descargos sin interrumpir, invitarlo con voz firme y serena a sentarse en un espacio reservado, revisar el estado de su expediente con el número de cédula y explicarle con lenguaje claro las alternativas procesales y facilidades de pago que le asisten en derecho.",
        "explicacion": "Correcta. El servicio al ciudadano exige autorregulación, escucha activa y asertividad: desescalar la hostilidad con compostura profesional, validar la inquietud y brindar orientación técnica fundamentada sin entrar en confrontaciones personales."
      },
      {
        "id": "B",
        "texto": "Responder a los gritos con insultos más fuertes y retar al ciudadano a una pelea física en la calle.",
        "explicacion": "Inadecuada. Falta disciplinaria gravísima de agresión a usuarios, desprestigiando la dignidad institucional del Estado."
      },
      {
        "id": "C",
        "texto": "Cerrar la ventanilla en su cara y marcharse a tomar café durante tres horas.",
        "explicacion": "Inadecuada. Demuestra desprecio por el usuario y omisión del deber de atención y orientación oportuna."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 (Orientación al Ciudadano y Comunicación Asertiva)",
    "citaNormativa": "«Orientación al Usuario y al Ciudadano: Atiende las solicitudes con respeto, empatía y efectividad, utilizando un lenguaje claro y constructivo que fortalezca la confianza de la ciudadanía en las instituciones del Estado.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_gestor_04",
    "nivel": "Profesional",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales DIAN",
    "tipo": "Comportamental (Clasificatorio - 25%)",
    "tema": "Autonomía Técnica y Rigor en Informes Periciales Tributarios",
    "caso": "Al proyectar un informe técnico pericial de auditoría sobre devoluciones indebidas de un gran contribuyente, un superior jerárquico le sugiere sutilmente 'rebajar la gravedad de los hallazgos' para no incomodar al apoderado de la empresa que es un exfuncionario de la entidad.",
    "enunciado": "Frente a presiones externas que buscan alterar los informes técnicos, su proceder profesional ético es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Mantener la estricta autonomía técnica y objetividad profesional, soportando cada hallazgo contable y tributario en las pruebas documentales y normativas del expediente, radicando el informe pericial íntegro conforme a la verdad real de los hechos investigados.",
        "explicacion": "Correcta. La autonomía técnica profesional (Decreto 815 de 2018) y el valor de la Honestidad exigen apego intransigente a la verdad probatoria y a la legalidad; los informes de fiscalización son actos técnicos fundamentados que no pueden alterarse por complacencia."
      },
      {
        "id": "B",
        "texto": "Borrar todos los hallazgos de inmediato para complacer al superior y esperar que le prometan un ascenso.",
        "explicacion": "Inadecuada. Configura concierto para cometer prevaricato, falsedad ideológica y falta absoluta de ética profesional."
      },
      {
        "id": "C",
        "texto": "Vender el borrador del informe al contribuyente a cambio de un puesto de trabajo en la multinacional.",
        "explicacion": "Inadecuada. Conducta criminal de concusión, cohecho y corrupción sistemática."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política Art. 209, Ley 1952 de 2019 y Código de Integridad DAFP",
    "citaNormativa": "«Los servidores públicos actuarán con rectitud y apego a la legalidad objetiva, velando por la prevalencia del interés general sobre presiones particulares o jerárquicas indebidas.» (Código de Integridad de la Función Pública)."
  },
  {
    "id": "ci_shared_dian_mision_04",
    "nivel": "Profesional",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Facilitación del Cumplimiento Voluntario y Seguridad Fiscal",
    "caso": "Como Gestor III, se le solicita proponer una estrategia para reducir la brecha de cumplimiento en profesionales independientes que no emiten facturación electrónica de venta, antes de iniciar procesos punitivos masivos.",
    "enunciado": "¿Cuál de las siguientes acciones se alinea de forma óptima con la visión y objetivos misionales modernos de la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "Implementar campañas de pedagogía tributaria personalizada con advertencias persuasivas en el buzón electrónico, facilitando la adopción del sistema de facturación gratuita de la DIAN antes de desplegar fiscalización formal.",
        "explicacion": "Correcta. La misionalidad contemporánea de la DIAN busca promover prioritariamente el cumplimiento voluntario mediante facilitación, herramientas gratuitas y persuasión fundada en datos, reservando la coacción punitiva para la renuencia contumaz."
      },
      {
        "id": "B",
        "texto": "Ordenar el embargo preventivo inmediato de las cuentas bancarias de todos los obligados omisos sin previo aviso persuasivo.",
        "explicacion": "Incorrecta. Viola el debido proceso y la proporcionalidad; las medidas cautelares en cobro coactivo exigen la previa existencia de un título ejecutivo en firme."
      },
      {
        "id": "C",
        "texto": "Delegar a las agremiaciones privadas el cobro y control de la facturación electrónica exonerando a la DIAN de su función fiscal.",
        "explicacion": "Incorrecta. La función pública tributaria y el control de obligaciones es indelegable por mandato constitucional y legal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020, Art. 2 y Estatuto Tributario Art. 616-1",
    "citaNormativa": "«Coadyuvar a garantizar la seguridad fiscal del Estado mediante la administración y el control oportuno... facilitando el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias.» (Decreto 1742 de 2020)."
  },
  {
    "id": "ci_shared_dian_estruc_03",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Competencias de las Direcciones de Gestión y Dependencias del Nivel Central",
    "caso": "En una Dirección Seccional surge una consulta técnica sobre la interpretación del tratamiento tributario de activos intangibles formados en el exterior. La División de Fiscalización y la División Jurídica local sostienen criterios contradictorios.",
    "enunciado": "De acuerdo con la estructura del Decreto 1742 de 2020, ¿a qué dependencia del Nivel Central le corresponde fijar el criterio interpretativo vinculante para todos los empleados de la Entidad?",
    "opciones": [
      {
        "id": "A",
        "texto": "A la Dirección de Gestión Jurídica, a través de la Subdirección de Normativa y Doctrina, cuyos conceptos oficiales son vinculantes para los funcionarios de la DIAN.",
        "explicacion": "Correcta. El Decreto 1742 de 2020 asigna a la Dirección de Gestión Jurídica y su Subdirección de Normativa y Doctrina la competencia exclusiva para absolver consultas y sentar doctrina oficial vinculante (Art. 131 Ley 2010 de 2019)."
      },
      {
        "id": "B",
        "texto": "A la Dirección de Gestión de Fiscalización, ya que es el área que adelanta las investigaciones operativas en el terreno.",
        "explicacion": "Incorrecta. Fiscalización define lineamientos operativos, pero carece de facultad de interpretación jurídica doctrinal general y vinculante."
      },
      {
        "id": "C",
        "texto": "Al Director Seccional de Impuestos respectivo, quien tiene autonomía legal absoluta para definir el criterio jurídico en su jurisdicción.",
        "explicacion": "Incorrecta. La doctrina jurídica en la DIAN es unitaria a nivel nacional para garantizar seguridad jurídica e igualdad ante la ley."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020, Art. 32 y Ley 2010 de 2019 Art. 131",
    "citaNormativa": "«Los conceptos emitidos por la Dirección de Gestión Jurídica o la Subdirección de Normativa y Doctrina de la DIAN constituyen interpretación oficial para los empleados de la entidad y serán de obligatoria aplicación para estos.» (Ley 2010 de 2019, Art. 131)."
  },
  {
    "id": "ci_shared_dian_estruc_04",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Articulación entre Nivel Central y Direcciones Seccionales",
    "caso": "Un plan estratégico nacional para combatir la informalidad aduanera en zonas de frontera es diseñado por la Dirección General. El Gestor III debe coordinar su despliegue operativo en la seccional correspondiente.",
    "enunciado": "¿Cuál es el canal jerárquico y funcional formal para canalizar estas directrices operativas hacia los grupos ejecutores?",
    "opciones": [
      {
        "id": "A",
        "texto": "A través del Director Seccional y los Jefes de División de Operación Aduanera y Fiscalización, quienes adoptan el plan conforme a las metas e indicadores fijados por el Nivel Central.",
        "explicacion": "Correcta. La estructura desconcentrada de la DIAN (Decreto 1742 de 2020) opera mediante líneas directivas nacionales hacia las Direcciones Seccionales y sus divisiones especializadas."
      },
      {
        "id": "B",
        "texto": "Contactando directamente a empresas transportadoras locales para que operen como inspectores delegados sin intervención de los jefes seccionales.",
        "explicacion": "Incorrecta. Rompe el principio de jerarquía administrativa y delega indebidamente facultades reservadas a servidores públicos."
      },
      {
        "id": "C",
        "texto": "Desconociendo el plan nacional e implementando un manual alternativo sin aval del Nivel Central.",
        "explicacion": "Incorrecta. Viola el principio de unidad de gestión y disciplina institucional consagrado en el régimen de la DIAN."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020, Art. 4, 38 y 52",
    "citaNormativa": "«Las Direcciones Seccionales dependen técnica, funcional y jerárquicamente del Director General de la DIAN a través de las Direcciones de Gestión respectivas, garantizando la ejecución de políticas nacionales.» (Decreto 1742 de 2020)."
  },
  {
    "id": "ci_shared_dian_mipg_04",
    "nivel": "Profesional",
    "ejeId": "mipg",
    "ejeNombre": "Modelo de Planeación y Gestión MIPG",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Dimensión de Direccionamiento Estratégico y Planeación en MIPG",
    "caso": "En el marco de la formulación del Plan de Acción Institucional (PAI) de la seccional, el Gestor III debe estructurar metas orientadas al logro de los objetivos del Plan Estratégico de la DIAN bajo la Dimensión 1 del MIPG.",
    "enunciado": "¿Cuál es el componente metodológico indispensable que debe estructurar el Gestor III según el Manual Operativo del MIPG?",
    "opciones": [
      {
        "id": "A",
        "texto": "Definir objetivos claros articulados a las políticas de gestión, metas cuantitativas verificables, cronograma de actividades, asignación de responsables y riesgos asociados a la gestión.",
        "explicacion": "Correcta. La Dimensión de Direccionamiento Estratégico del MIPG (Decreto 1499 de 2017) exige alinear la visión, los objetivos estratégicos, la gestión de riesgos y la asignación eficiente de recursos hacia resultados cuantificables."
      },
      {
        "id": "B",
        "texto": "Copiar textualmente las metas del año gravable anterior sin evaluar el contexto externo ni los riesgos emergentes del entorno económico.",
        "explicacion": "Incorrecta. Contraviene el principio de mejora continua y dinamismo estratégico que exige el MIPG."
      },
      {
        "id": "C",
        "texto": "Suprimir el mapa de riesgos institucionales para agilizar la aprobación administrativa del plan operativo.",
        "explicacion": "Incorrecta. La gestión del riesgo es transversal y obligatoria en todas las dimensiones del MIPG."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017 y Manual Operativo MIPG (DAFP)",
    "citaNormativa": "«La Dimensión de Direccionamiento Estratégico y Planeación permite a la entidad focalizar su accionar para garantizar el cumplimiento de su misión, determinando prioridades, metas, asignación presupuestal y mitigación de riesgos.» (Manual Operativo MIPG)."
  },
  {
    "id": "ci_shared_dian_razon_03",
    "nivel": "Profesional",
    "ejeId": "razonamiento",
    "ejeNombre": "Razonamiento Analítico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inferencia Lógica sobre Desviaciones Financieras y Fiscales",
    "caso": "Al auditar un conglomerado comercial, el Gestor III observa que mientras los ingresos brutos crecieron un 85% interanual, la utilidad neta gravable disminuyó en un 60%, debido a un incremento exponencial en 'gastos por asesorías de gestión en el exterior' contratadas con una filial vinculada.",
    "enunciado": "Aplicando razonamiento analítico y deductivo en materia de fiscalización, ¿cuál es la hipótesis técnica principal que debe formularse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Existe un alto indicio de planeación fiscal agresiva mediante erosión de la base imponible y traslado artificial de utilidades a través de precios de transferencia no acordes al principio de plena competencia (arm's length).",
        "explicacion": "Correcta. El razonamiento analítico correlaciona el crecimiento atípico de gastos vinculados con el exterior frente a la contracción artificial de la renta gravable local, activando el régimen de precios de transferencia (Art. 260-1 E.T.)."
      },
      {
        "id": "B",
        "texto": "La empresa automáticamente quebrará la próxima semana por lo que no vale la pena continuar la auditoría tributaria.",
        "explicacion": "Incorrecta. Es una conclusión apresurada, errónea y carente de sustento técnico financiero y analítico."
      },
      {
        "id": "C",
        "texto": "Aceptar los gastos sin comprobación porque los contratos entre empresas familiares y vinculadas están exentos de revisión tributaria.",
        "explicacion": "Incorrecta. Las operaciones con vinculados del exterior están sujetas a la vigilancia más rigurosa del régimen de precios de transferencia."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 260-1 a 260-11 (Precios de Transferencia) y Art. 684",
    "citaNormativa": "«Los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados del exterior están obligados a determinar sus ingresos y deducciones considerando el principio de plena competencia.» (Estatuto Tributario, Art. 260-1)."
  },
  {
    "id": "ci_shared_dian_rend_02",
    "nivel": "Profesional",
    "ejeId": "rendicion_cuentas",
    "ejeNombre": "Estrategia de Rendición de Cuentas",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Los Tres Elementos del Ciclo de Rendición de Cuentas (Ley 1757 de 2015)",
    "caso": "Para la jornada anual de rendición de cuentas de la Dirección Seccional, el despacho propone únicamente publicar un informe en PDF de 400 páginas con cifras técnicas en la web, sin abrir espacios de diálogo ni responder preguntas ciudadanas.",
    "enunciado": "De acuerdo con el Manual de Rendición de Cuentas (CONPES 3654 y Ley 1757 de 2015), ¿por qué esta propuesta es técnicamente incompleta?",
    "opciones": [
      {
        "id": "A",
        "texto": "Porque la rendición de cuentas exige tres elementos inseparables: Información comprensible (lenguaje claro), Diálogo constructivo (interacción y retroalimentación) e Incentivos/responsabilidad (compromisos de mejora pública).",
        "explicacion": "Correcta. La Ley 1757 de 2015 y la política de rendición de cuentas del MIPG definen que no basta con publicar datos (información); es indispensable el diálogo participativo con la ciudadanía y la asunción de responsabilidades."
      },
      {
        "id": "B",
        "texto": "Porque la ley prohíbe taxativamente subir archivos digitales en formato PDF a los portales web gubernamentales.",
        "explicacion": "Incorrecta. Los informes digitales son válidos, lo que es deficiente es la ausencia de diálogo deliberativo y lenguaje claro."
      },
      {
        "id": "C",
        "texto": "Porque la rendición de cuentas solo debe hacerse ante los jueces de la República y no ante la ciudadanía civil.",
        "explicacion": "Incorrecta. La rendición de cuentas pública es un deber democrático obligatorio frente a toda la sociedad civil."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1757 de 2015, Art. 48 a 52 y Conpes 3654 de 2010",
    "citaNormativa": "«La rendición de cuentas es un proceso conformado por un conjunto de normas, procedimientos, metodologías y estructuras... que comprende tres elementos centrales: información, diálogo e incentivos.» (Ley 1757 de 2015, Art. 48)."
  },
  {
    "id": "ci_shared_dian_rend_03",
    "nivel": "Profesional",
    "ejeId": "rendicion_cuentas",
    "ejeNombre": "Estrategia de Rendición de Cuentas",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Uso de Lenguaje Claro y Diálogo con Grupos de Valor",
    "caso": "Al redactar el informe de rendición de cuentas seccional, se presentan explicaciones cargadas de siglas y tecnicismos jurídicos que impiden a los comerciantes de la región comprender cómo se invirtió el recaudo tributario y los resultados contra el contrabando local.",
    "enunciado": "¿Cuál es la recomendación del Gestor III para garantizar la efectividad del ejercicio según las directrices de Función Pública?",
    "opciones": [
      {
        "id": "A",
        "texto": "Traducir los resultados técnicos a infografías y resúmenes ejecutivos en Lenguaje Claro, explicando el impacto social de la gestión y habilitando canales previos para recoger preguntas e inquietudes de la comunidad.",
        "explicacion": "Correcta. El marco de Lenguaje Claro (Guía DAFP) exige simplificar el mensaje administrativo para democratizar el acceso a la información y fomentar una participación ciudadana informada y constructiva."
      },
      {
        "id": "B",
        "texto": "Aumentar aún más los tecnicismos jurídicos en latín para demostrar superioridad académica ante los ciudadanos participantes.",
        "explicacion": "Incorrecta. Aleja a la ciudadanía, restringe la transparencia y debilita la confianza institucional en el Estado."
      },
      {
        "id": "C",
        "texto": "Cancelar la jornada de rendición de cuentas bajo el argumento de que el ciudadano común no entiende temas aduaneros.",
        "explicacion": "Incorrecta. Viola el mandato constitucional de transparencia y la Ley Estatutaria de Participación Ciudadana."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1757 de 2015 y Guía de Lenguaje Claro para Servidores Públicos (DNP / DAFP)",
    "citaNormativa": "«Las entidades públicas deberán utilizar un lenguaje claro, sencillo y comprensible que permita a los ciudadanos entender la gestión pública y ejercer el control social de manera efectiva.» (Ley 1757 de 2015)."
  },
  {
    "id": "ci_shared_gestor_vr_01",
    "nivel": "Profesional",
    "ejeId": "razonamiento",
    "ejeNombre": "Razonamiento Analítico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Técnica del Verbo Rector en el Nivel Profesional - Formulación Estratégica",
    "caso": "En una Seccional de la DIAN se evidencia un incremento del 35% en la evasión del impuesto sobre las ventas (IVA) en el sector hotelero durante la temporada turística. La Jefatura de Fiscalización le solicita al Gestor III que intervenga de manera inmediata frente a esta problemática recurrente.",
    "enunciado": "Teniendo en cuenta el nivel profesional y las funciones del cargo (FT-TAH-1824), ¿cuál es la acción prioritaria que debe FORMULAR el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Formular un plan de choque focalizado de auditorías y control preventivo con base en cruces de información de facturación electrónica y pasarelas de pago, estableciendo indicadores de riesgo y cronograma de seguimiento.",
        "explicacion": "Correcta. El Gestor III ejerce el verbo rector 'Formular', desplegando autonomía analítica, modelación de riesgos y diseño metodológico según la Ficha FT-TAH-1824 y el Decreto 815 de 2018."
      },
      {
        "id": "B",
        "texto": "Archivar y foliar cronológicamente las denuncias ciudadanas recibidas en ventanilla, limitándose a remitir fotocopias simples al buzón del Administrador Seccional sin realizar diagnósticos ni cruces analíticos.",
        "explicacion": "Incorrecta. Distractor de infra-valoración; ofrece verbos meramente mecánicos/asistenciales (archivar, foliar, fotocopiar) que denotan carencia de competencia profesional analítica."
      },
      {
        "id": "C",
        "texto": "Expedir y suscribir unilateralmente una resolución sancionatoria de clausura de establecimiento de plano contra todos los hoteles de la región sin requerimiento previo ni otorgar derecho de defensa.",
        "explicacion": "Incorrecta. Distractor de extralimitación; usurpa facultades sancionatorias privativas de la Jefatura con delegación formal, vulnerando el debido proceso (Art. 29 C.P.) y el principio de legalidad."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018, Ficha FT-TAH-1824 y Manual Específico de Funciones DIAN",
    "citaNormativa": "«Son funciones del nivel profesional: Formular, ejecutar, hacer seguimiento, ajuste y evaluar los planes, programas o proyectos de la dependencia... y realizar análisis y diagnósticos del comportamiento de las variables.» (Ficha FT-TAH-1824)."
  },
  {
    "id": "ci_shared_gestor_vr_03",
    "nivel": "Profesional",
    "ejeId": "mipg",
    "ejeNombre": "Modelo de Planeación y Gestión MIPG",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Verbo Rector en Gestión Institucional - Evaluar y Proponer Mejoras",
    "caso": "La Oficina de Control Interno emite un informe donde señala una debilidad reiterada en los tiempos de respuesta a los derechos de petición en la Seccional. El Gestor III de Planeación debe intervenir para subsanar este riesgo institucional.",
    "enunciado": "Bajo el marco del MIPG y las funciones de su empleo, ¿cómo debe ACTUAR el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Evaluar el flujo del proceso de correspondencia, identificar los cuellos de botella en la asignación de peticiones y estructurar una propuesta técnica de optimización con alertas tempranas y tablero de control.",
        "explicacion": "Correcta. Despliega los verbos rectores propios del nivel profesional: evaluar, diagnosticar, estructurar y proponer mejoras organizacionales según la dimensión de Gestión con Valores para el Resultado del MIPG."
      },
      {
        "id": "B",
        "texto": "Asumir personalmente la radicación física y fotocopiado manual de las peticiones en la ventanilla única durante toda la vigencia, sin modificar el procedimiento ni analizar las causas de la demora.",
        "explicacion": "Incorrecta. Se degrada a tareas asistenciales de ejecución repetitiva desconociendo su rol analítico y estratégico de mejoramiento continuo institucional."
      },
      {
        "id": "C",
        "texto": "Modificar de forma unilateral los términos legales del derecho de petición de 15 a 30 días en el sistema para que no salgan alertas de vencimiento.",
        "explicacion": "Incorrecta. Modificación arbitraria e ilegal de normas estatutarias de orden público (Ley 1755 de 2015), acarreando responsabilidad disciplinaria y penal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017 (MIPG) y Ficha FT-TAH-1824",
    "citaNormativa": "«Adelantar procesos de orientación, implementación, mejora y seguimiento en el cumplimiento de los planes, proyectos y sistemas de gestión establecidos por la Entidad.» (Ficha FT-TAH-1824)."
  },
  {
    "id": "ci_shared_areandina_guia_prof_01",
    "nivel": "Profesional",
    "ejeId": "mipg",
    "ejeNombre": "Modelo MIPG y Desempeño FURAG",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Gestión Estratégica del Talento Humano - Diagnóstico y Madurez MIPG (Ejemplo Oficial 1 Guía)",
    "caso": "Al iniciar la planeación de una nueva vigencia, se requiere conocer el estado actual de la gestión del área antes de definir nuevas acciones. La información disponible muestra avances distintos entre los procesos de ingreso, desarrollo y retiro, pero aún no se han identificado de manera ordenada las fortalezas, brechas ni el nivel de madurez alcanzado. Se designa a un profesional para dicha labor con los instrumentos adecuados.",
    "enunciado": "Para diagnosticar el estado de la gestión con base en la información descrita, al profesional le corresponde:",
    "opciones": [
      {
        "id": "A",
        "texto": "aplicar la Matriz de Gestión Estratégica del Talento Humano y calificar las variables que la componen.",
        "explicacion": "Correcta. Según el Manual Operativo del MIPG, el diagnóstico es la Etapa 2 de la Política de Gestión Estratégica del Talento Humano. Para hacerlo, la entidad usa la Matriz de Gestión Estratégica del Talento Humano. Esta matriz contiene un inventario de variables para cumplir los lineamientos de la política. Al diligenciarla, la entidad obtiene una calificación que la ubica en un nivel de madurez: básico operativo, transformación o consolidación. Con ese resultado, la entidad identifica sus fortalezas y los aspectos por mejorar. En el caso, el jefe necesita conocer el estado actual de la gestión antes de planear la nueva vigencia. Por eso, al funcionario le corresponde aplicar la matriz y calificar sus variables."
      },
      {
        "id": "B",
        "texto": "consultar el Plan de Acción de Talento Humano y verificar el avance de las actividades de cada proceso.",
        "explicacion": "Incorrecta. Según el Manual Operativo del MIPG, el plan de acción corresponde a la Etapa 3 de la Política de Gestión Estratégica del Talento Humano: diseñar acciones. Las acciones del plan se diseñan una vez identificado el nivel de madurez de la entidad y con base en los resultados del diagnóstico. Por eso, el plan de acción es posterior al diagnóstico y no sirve para hacerlo. Verificar el avance de sus actividades es una tarea de seguimiento: muestra cuánto se ha ejecutado, pero no establece el estado de la gestión frente a los lineamientos de la política. En el caso, el jefe pide conocer el estado actual de la gestión antes de definir nuevas acciones. Revisar el avance de las actividades no entrega ese diagnóstico."
      },
      {
        "id": "C",
        "texto": "revisar el Plan Estratégico de Talento Humano y comparar las actividades programadas con las ejecutadas.",
        "explicacion": "Incorrecta. El Plan Estratégico de Talento Humano es uno de los planes institucionales que la entidad integra a su plan de acción y publica a más tardar el 31 de enero de cada año (Decreto 1083 de 2015, artículo 2.2.22.3.14, adicionado por el Decreto 612 de 2018). Es un instrumento de planeación, es decir, define las actividades que la entidad va a ejecutar. Por eso, comparar las actividades programadas con las ejecutadas mide cuánto se ha cumplido el plan, pero no establece el estado de la gestión del talento humano frente a los lineamientos de la política. Según el Manual Operativo del MIPG, ese estado se establece en la etapa de diagnóstico, que es previa a la planeación de las acciones. En el caso, el jefe necesita conocer el estado actual de la gestión antes de definir nuevas acciones. El grado de cumplimiento de un plan no entrega ese diagnóstico."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Manual Operativo del MIPG (Etapa 2: Diagnóstico) y Decreto 1083 de 2015",
    "citaNormativa": "«El diagnóstico es la Etapa 2 de la Política de Gestión Estratégica del Talento Humano. Para hacerlo, la entidad usa la Matriz de Gestión Estratégica del Talento Humano que ubica a la entidad en un nivel de madurez: básico operativo, transformación o consolidación.» (Guía de Orientación al Aspirante DIAN 2676, FUAA - CNSC, Pág. 13)."
  },
  {
    "id": "ci_shared_areandina_guia_tec_02",
    "nivel": "Técnico",
    "ejeId": "control_interno",
    "ejeNombre": "Control Interno y 3 Líneas de Defensa",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Evaluación de Competencias Laborales y Cierre de Brechas (Ejemplo Oficial 2 Guía)",
    "caso": "En el área de talento humano, se revisaron los resultados de una evaluación de competencias laborales, e identificaron brechas entre las competencias requeridas por los empleos y las demostradas por los servidores. Para orientar las acciones de desarrollo, se pide el apoyo de un técnico para procesar esos datos.",
    "enunciado": "Con base en los resultados descritos, el técnico debe entregar la información según:",
    "opciones": [
      {
        "id": "A",
        "texto": "las diferencias halladas en la valoración con un consolidado que identifique a las personas.",
        "explicacion": "Correcta. Las competencias funcionales son las habilidades y conocimientos aplicados que debe tener el empleado para cumplir las funciones de su empleo (Decreto Ley 927 de 2023, art. 58). Su evaluación le corresponde a la dependencia encargada de la gestión del personal (art. 60). El desarrollo de competencias busca establecer acciones para cerrar las brechas frente al nivel requerido (Decreto 1083 de 2015, art. 2.2.18.4.1, num. 3). Además, el sistema de evaluación de competencias de la entidad debe permitir identificar el grado de ajuste entre el perfil del empleo y el del servidor (art. 2.2.18.4.5). Si los resultados se organizan por competencia y se comparan con el nivel que exige cada empleo, se ve la brecha de cada servidor. En el caso, se van a definir acciones de desarrollo. El criterio que usa el técnico para organizar el insumo le indica al área qué competencias debe fortalecer y en qué servidores."
      },
      {
        "id": "B",
        "texto": "el puntaje obtenido para facilitar la actividad general de formación para los servidores.",
        "explicacion": "Incorrecta. El puntaje total reúne en un solo valor los resultados de todas las competencias. Ese valor no muestra cuál competencia está por debajo del nivel que exige el empleo. El desarrollo de competencias se orienta a cerrar las brechas frente al nivel requerido (Decreto 1083 de 2015, art. 2.2.18.4.1, num. 3). Por eso, el insumo debe mostrar el resultado de cada competencia. Un servidor con un puntaje total alto puede tener una competencia por debajo del nivel requerido. En el caso, ordenar a los servidores por puntaje total no le da al área una base para definir qué competencias desarrollar."
      },
      {
        "id": "C",
        "texto": "el promedio alcanzado por área con el fin de guiar el orden de las decisiones a tomar.",
        "explicacion": "Incorrecta. El promedio por dependencia reúne los resultados de servidores con empleos distintos. Cada empleo tiene exigencias propias, definidas en el Manual Específico de Requisitos y Funciones (Decreto Ley 927 de 2023, art. 58). El promedio oculta las diferencias entre servidores y no compara cada resultado con el nivel que exige el empleo. El sistema de evaluación de competencias de la entidad debe permitir identificar el grado de ajuste entre el perfil del empleo y el del servidor (Decreto 1083 de 2015, art. 2.2.18.4.5). En el caso, este insumo no le muestra al área qué competencias desarrollar ni en qué servidores."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 927 de 2023 (Arts. 58 y 60) y Decreto 1083 de 2015 (Arts. 2.2.18.4.1 y 2.2.18.4.5)",
    "citaNormativa": "«El sistema de evaluación de competencias de la entidad debe permitir identificar el grado de ajuste entre el perfil del empleo y el del servidor para establecer acciones que cierren las brechas frente al nivel requerido.» (Guía de Orientación al Aspirante DIAN 2676, FUAA - CNSC, Pág. 15)."
  },
  {
    "id": "ci_shared_dian_aduanas_pjs_12",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Competencias Legales de la DIAN y Funciones de Policía Judicial",
    "caso": "Durante una sesión de inducción institucional, se repasan las facultades asignadas a la DIAN por el Decreto 4048 de 2008 y el Decreto 1742 de 2020 para prevenir y combatir conductas delictivas asociadas al fraude tributario, contrabando y lavado de activos.",
    "enunciado": "Respecto a las atribuciones de la DIAN en materia judicial y de investigación penal, señale el enunciado correcto:",
    "opciones": [
      {
        "id": "A",
        "texto": "La DIAN puede dictar sentencias penales condenatorias por delitos tributarios.",
        "explicacion": "Incorrecta. Juzgar y condenar penalmente es competencia privativa de la Rama Judicial (jueces de la República)."
      },
      {
        "id": "B",
        "texto": "La DIAN ejerce funciones de policía judicial en coordinación con la Fiscalía General de la Nación, en investigaciones por contrabando, fraude aduanero y delitos conexos.",
        "explicacion": "Correcta. La DIAN cuenta con atribuciones legales de policía judicial (Decreto 4048 de 2008 / Dec. 1742 de 2020 / Código de Procedimiento Penal) para apoyar a la Fiscalía en investigaciones penales tributarias y aduaneras."
      },
      {
        "id": "C",
        "texto": "La DIAN tiene prohibida cualquier intervención o colaboración con autoridades judiciales penales debido a la reserva tributaria absoluta.",
        "explicacion": "Incorrecta. El Estatuto Tributario y las leyes de procedimiento exceptúan la reserva tributaria ante requerimientos de autoridades judiciales y de policía judicial competentes."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 4048 de 2008, Art. 3 y Decreto 1742 de 2020",
    "citaNormativa": "«Ejercer las funciones de policía judicial, de conformidad con las normas legales, en coordinación con la Fiscalía General de la Nación en asuntos de su competencia.» (Decreto 4048 de 2008 / Decreto 1742 de 2020)."
  },
  {
    "id": "ci_shared_dian_aduanas_pjs_13",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Naturaleza Jurídica y Adscripción de la DIAN",
    "caso": "En un cuestionario de evaluación sobre la estructura del Estado colombiano y la administración pública, se indaga por la naturaleza orgánica de la DIAN y el sector administrativo al cual pertenece.",
    "enunciado": "De acuerdo con la Ley 489 de 1998 y las normas orgánicas de la entidad, la DIAN es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Una Unidad Administrativa Especial del orden nacional, de carácter técnico y especializado, con personería jurídica, autonomía administrativa y presupuestal, adscrita al Ministerio de Hacienda y Crédito Público.",
        "explicacion": "Correcta. Esta es la definición exacta de la naturaleza jurídica de la DIAN consagrada en su normativa orgánica."
      },
      {
        "id": "B",
        "texto": "Un establecimiento público adscrito al Ministerio de Comercio, Industria y Turismo.",
        "explicacion": "Incorrecta. La DIAN no es establecimiento público ni está adscrita al MinCIT, sino al Ministerio de Hacienda."
      },
      {
        "id": "C",
        "texto": "Una superintendencia con personería jurídica adscrita al Departamento Administrativo de la Presidencia de la República.",
        "explicacion": "Incorrecta. No ostenta la calidad de superintendencia."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 4048 de 2008, Art. 1 y Decreto 1742 de 2020",
    "citaNormativa": "«La DIAN está organizada como una Unidad Administrativa Especial del orden nacional de carácter eminentemente técnico y especializado, con personería jurídica, autonomía administrativa y presupuestal, adscrita al Ministerio de Hacienda y Crédito Público.» (Decreto 1742 de 2020)."
  },
  {
    "id": "ci_shared_dian_aduanas_pjs_14",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Mapa de Macroprocesos Institucionales de la DIAN",
    "caso": "Para la implementación del Sistema Integrado de Gestión y Control Institucional, un funcionario debe clasificar las actividades de la entidad según la tipología de macroprocesos adoptada por la DIAN.",
    "enunciado": "La clasificación de los macroprocesos oficiales de la DIAN comprende:",
    "opciones": [
      {
        "id": "A",
        "texto": "Estratégicos, Misionales, de Apoyo, y de Evaluación y Control.",
        "explicacion": "Correcta. La DIAN adopta el modelo de gestión por procesos del sector público (MIPG), clasificando sus macroprocesos en Estratégicos, Misionales, de Apoyo, y de Evaluación y Control."
      },
      {
        "id": "B",
        "texto": "Financieros, Judiciales y Disciplinarios exclusivamente.",
        "explicacion": "Incorrecta. Esta tipología no refleja la estructura sistémica por procesos de la entidad."
      },
      {
        "id": "C",
        "texto": "Procesos de Comercio Exterior y Procesos de Presupuesto Municipal exclusivamente.",
        "explicacion": "Incorrecta. La DIAN es del orden nacional y sus macroprocesos abarcan todo el espectro institucional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Sistema de Gestión Institucional DIAN y Modelo Integrado de Planeación y Gestión (MIPG)",
    "citaNormativa": "«Los macroprocesos de la DIAN se estructuran en: Procesos Estratégicos, Procesos Misionales, Procesos de Apoyo y Procesos de Evaluación y Control.» (Manual de Calidad DIAN)."
  },
  {
    "id": "ci_shared_dian_aduanas_pjs_15",
    "nivel": "Profesional",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Misión Institucional de la DIAN",
    "caso": "En un ejercicio de planeación estratégica en una Dirección Seccional, se solicita formular el propósito superior que guía el accionar de todos los servidores públicos de la entidad.",
    "enunciado": "Conforme a la plataforma estratégica vigente, la misión institucional de la DIAN es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Recaudar exclusivamente los tributos de las grandes empresas para financiar subsidios públicos.",
        "explicacion": "Incorrecta. Reduce la misión a un segmento y desconoce el control aduanero, cambiario y la facilitación general."
      },
      {
        "id": "B",
        "texto": "Facilitar y garantizar el entendimiento y cumplimiento de los deberes tributarios, aduaneros y cambiarios, para contribuir a la seguridad fiscal del Estado y la competitividad del país.",
        "explicacion": "Correcta. Esta es la declaración misional oficial de la DIAN centrada en la facilitación, el control y la seguridad fiscal de Colombia."
      },
      {
        "id": "C",
        "texto": "Imponer sanciones pecuniarias y cierres de establecimientos como objetivo primordial del Estado.",
        "explicacion": "Incorrecta. La sanción es una medida correctiva y no la misión final de la entidad, que busca el cumplimiento voluntario y la competitividad."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Plataforma Estratégica DIAN y Decreto 1742 de 2020",
    "citaNormativa": "«Misión de la DIAN: Facilitar y garantizar el entendimiento y cumplimiento de los deberes tributarios, aduaneros y cambiarios, para contribuir a la seguridad fiscal del Estado y la competitividad del país.» (DIAN)."
  },
  {
    "id": "ci_shared_dian_procedimiento_pjs_06",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Modelo de Gestión MUISCA de la DIAN",
    "caso": "En una evaluación de gestión institucional de la DIAN, se analiza la sigla y el alcance estratégico del sistema informático central que soporta la operación de la entidad.",
    "enunciado": "En la arquitectura institucional de la DIAN, la sigla MUISCA corresponde a:",
    "opciones": [
      {
        "id": "A",
        "texto": "Modelo Unificado de Intereses Sociales para el Control Tributario.",
        "explicacion": "Incorrecta. No corresponde al significado institucional del modelo."
      },
      {
        "id": "B",
        "texto": "Modelo Único de Ingresos, Servicio y Control Automatizado.",
        "explicacion": "Correcta. MUISCA significa Modelo Único de Ingresos, Servicio y Control Automatizado, concebido como el modelo integral de procesos y plataforma tecnológica de la DIAN."
      },
      {
        "id": "C",
        "texto": "Módulo Universal de Inspección y Sanciones Cambiarias Aduaneras.",
        "explicacion": "Incorrecta. Es una denominación ficticia."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 4048 de 2008 y Sistema de Gestión MUISCA DIAN",
    "citaNormativa": "«El Modelo Único de Ingresos, Servicio y Control Automatizado (MUISCA) constituye la base operativa y conceptual para la gestión tributaria, aduanera y cambiaria de la DIAN.» (DIAN)."
  },
  {
    "id": "ci_shared_dian_gp_pjs_05",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Contratación Pública - Urgencia Manifiesta y Contratación Directa",
    "caso": "Debido a un daño catastrófico e imprevisto en los servidores centrales de la DIAN que paraliza el sistema de facturación electrónica y las aduanas nacionales, el ordenador del gasto debe contratar inmediatamente servicios especializados de rescate de datos e infraestructura tecnológica.",
    "enunciado": "Conforme a la Ley 80 de 1993 (Art. 42), la causal y modalidad jurídica de selección que faculta la celebración inmediata del contrato sin agotar licitación pública es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Selección abreviada de menor cuantía con pliegos tipo.",
        "explicacion": "Incorrecta. Los términos de la selección abreviada impiden una respuesta inmediata ante una catástrofe que paralice el servicio público."
      },
      {
        "id": "B",
        "texto": "Declaratoria de Urgencia Manifiesta, que habilita legalmente la modalidad de contratación directa para atender de inmediato la contingencia.",
        "explicacion": "Correcta. El artículo 42 de la Ley 80 de 1993 consagra la urgencia manifiesta ante situaciones imprevistas que exijan atención inmediata para garantizar la continuidad del servicio público, permitiendo contratar directamente."
      },
      {
        "id": "C",
        "texto": "Concurso público de méritos internacional.",
        "explicacion": "Incorrecta. El concurso de méritos es para consultorías y proyectos de arquitectura, no para emergencias operativas."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 80 de 1993, Art. 42 y Ley 1150 de 2007",
    "citaNormativa": "«Existe urgencia manifiesta cuando la continuidad del servicio exige el suministro de bienes, o la prestación de servicios, o la ejecución de obras en el inmediato futuro... Con el fin de hacer cesar la urgencia, se podrá contratar directamente.» (Ley 80 de 1993, Art. 42)."
  },
  {
    "id": "ci_shared_dian_gp_pjs_06",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Acto Administrativo de Declaración de Urgencia Manifiesta y Control Fiscal",
    "caso": "Tras declarar la urgencia manifiesta para la compra de suministros críticos, el equipo jurídico elabora el acto administrativo motivado correspondiente.",
    "enunciado": "De acuerdo con el artículo 43 de la Ley 80 de 1993, una vez celebrado el contrato por urgencia manifiesta, la entidad tiene el deber legal estricto de:",
    "opciones": [
      {
        "id": "A",
        "texto": "Remitir el contrato y el expediente con el acto administrativo motivado a la Contraloría General de la República de manera inmediata para su control fiscal posterior.",
        "explicacion": "Correcta. El artículo 43 de la Ley 80 de 1993 exige que de la urgencia manifiesta y de los contratos originados en ella se dé traslado inmediato al órgano de control fiscal correspondiente para que se pronuncie sobre su legalidad."
      },
      {
        "id": "B",
        "texto": "Mantener en secreto la contratación durante cinco años aludiendo seguridad nacional.",
        "explicacion": "Incorrecta. Vulnera frontalmente el principio de transparencia y el control de los recursos públicos."
      },
      {
        "id": "C",
        "texto": "Someter el contrato a la aprobación previa del Concejo Municipal de la jurisdicción.",
        "explicacion": "Incorrecta. Las entidades del orden nacional no están sujetas a autorización previa de concejos municipales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 80 de 1993, Art. 43 (Control Fiscal de la Urgencia Manifiesta)",
    "citaNormativa": "«Del uso de la urgencia manifiesta se dará traslado inmediato al organismo de control fiscal respectivo, para que este se pronuncie sobre los hechos y circunstancias que determinaron tal declaración.» (Ley 80 de 1993, Art. 43)."
  },
  {
    "id": "ci_shared_dian_gp_pjs_07",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Publicidad de la Contratación Estatal en el SECOP",
    "caso": "Un servidor público participa en un proceso de adquisición de licencias y soporte técnico. Se consulta cuál es la plataforma electrónica obligatoria donde deben publicarse todos los actos, estudios previos, pliegos y contratos de la entidad.",
    "enunciado": "De conformidad con la Ley 1150 de 2007, el Decreto 1082 de 2015 y la Ley 1712 de 2014, el sistema oficial de obligatoria consulta pública es:",
    "opciones": [
      {
        "id": "A",
        "texto": "El Sistema Electrónico para la Contratación Pública (SECOP).",
        "explicacion": "Correcta. El SECOP es la plataforma oficial única donde todas las entidades públicas del Estado colombiano deben publicar la actividad precontractual, contractual y poscontractual."
      },
      {
        "id": "B",
        "texto": "El SIGEP exclusivamente para hojas de vida de contratistas.",
        "explicacion": "Incorrecta. El SIGEP administra talento humano y hojas de vida, no la gestión contractual integral ni las licitaciones."
      },
      {
        "id": "C",
        "texto": "El buzón de quejas municipal.",
        "explicacion": "Incorrecta. No es una plataforma transaccional de contratación pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1150 de 2007, Art. 3 y Decreto 1082 de 2015",
    "citaNormativa": "«Las entidades estatales deberán publicar oportunamente en el Sistema Electrónico para la Contratación Pública (SECOP) todos los documentos del proceso contractual.» (Ley 1150 de 2007 / Decreto 1082 de 2015)."
  },
  {
    "id": "ci_shared_dian_comp_pjs_01",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia: Creatividad e Innovación ante Cambios Normativos",
    "caso": "La división donde usted labora en la DIAN se verá afectada sustancialmente por la entrada en vigor de una reforma tributaria y aduanera que transforma formatos, sistemas de notificación electrónica e informes de fiscalización.",
    "enunciado": "Para demostrar la competencia comportamental de 'Creatividad e Innovación' y adaptabilidad institucional, la conducta más asertiva que usted debe asumir es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Esperar a que la Dirección General remita las directrices de contingencia sin adelantar ninguna iniciativa previa.",
        "explicacion": "Incorrecta. Demuestra pasividad y reactividad, opuesta a la proactividad e innovación requeridas en el nivel profesional."
      },
      {
        "id": "B",
        "texto": "Estudiar la reforma con anticipación y formular una propuesta o herramienta práctica de trabajo colaborativo que estandarice y facilite la transición operativa del equipo sin traumatismos en el servicio.",
        "explicacion": "Correcta. Demuestra alto desarrollo de la competencia de Creatividad e Innovación (Decreto 815 de 2018), al proponer soluciones constructivas que optimizan los procesos ante transformaciones complejas."
      },
      {
        "id": "C",
        "texto": "Manifestar formalmente desacuerdo con los cambios normativos y solicitar traslado de dependencia.",
        "explicacion": "Incorrecta. Refleja resistencia al cambio institucional e indisposición frente a los retos del servicio público."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 815 de 2018 y Decreto Ley 927 de 2023 (Competencia Creatividad e Innovación)",
    "citaNormativa": "«Creatividad e innovación: Generar ideas, conceptos o métodos novedosos orientados a la solución de problemas, optimización de procesos y mejora en la prestación del servicio público.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_pjs_02",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia: Aprendizaje Continuo y Transferencia del Conocimiento",
    "caso": "En su Dirección Seccional se implementará una nueva plataforma analítica de cruce de datos fiscales. Dado que usted ya conoce y domina el software por un empleo previo, el equipo experimenta dificultades y temor al error en las primeras pruebas.",
    "enunciado": "Con base en la competencia de 'Aprendizaje Continuo y Trabajo en Equipo', ¿cuál es la actuación que más agrega valor público?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ofrecerse voluntariamente para liderar talleres prácticos de transferencia de conocimiento y diseñar una guía rápida con ejemplos reales para que sus compañeros dominen la herramienta con confianza.",
        "explicacion": "Correcta. La conducta ejemplifica la competencia de Aprendizaje Continuo y transferencia activa de conocimiento para el empoderamiento del equipo y el éxito misional colectivo."
      },
      {
        "id": "B",
        "texto": "Reservarse el conocimiento para destacar individualmente en las evaluaciones de desempeño frente a sus pares.",
        "explicacion": "Incorrecta. Representa individualismo negativo y falta de cooperación y trabajo en equipo."
      },
      {
        "id": "C",
        "texto": "Asumir la totalidad de la carga operativa de sus compañeros para que ellos no tengan que aprender el nuevo sistema.",
        "explicacion": "Incorrecta. Genera dependencia operativa insostenible y no promueve el desarrollo de competencias en el colectivo institucional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Decreto Ley 927 de 2023 (Competencia Aprendizaje Continuo)",
    "citaNormativa": "«Aprendizaje continuo: Adquirir, asimilar y transferir conocimientos y destrezas para mejorar continuamente el desempeño individual y el del equipo de trabajo.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_pjs_03",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia: Orientación a Resultados y Mejora de Procesos",
    "caso": "En el área de devoluciones tributarias de la DIAN se evidencia un cuello de botella que retrasa la resolución de solicitudes dentro de los términos legales de 50 días. El equipo se siente abrumado por el volumen de expedientes.",
    "enunciado": "Ante este panorama, para evidenciar 'Orientación a Resultados', la acción adecuada es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Proponer un análisis de causas raíz en el flujo de trabajo, priorizar los expedientes por antigüedad y riesgo, y establecer metas intermedias de avance medibles para descongestionar el proceso oportunamente.",
        "explicacion": "Correcta. La Orientación a Resultados implica estructurar planes de acción enfocados en el cumplimiento oportuno de metas, superando obstáculos con rigor metodológico y visión de servicio."
      },
      {
        "id": "B",
        "texto": "Solicitar sistemáticamente suspensiones de términos en todos los trámites para evitar incurrir en silencio administrativo.",
        "explicacion": "Incorrecta. Desnaturaliza el procedimiento administrativo y perjudica los derechos de los contribuyentes cumplidos."
      },
      {
        "id": "C",
        "texto": "Recomendar la desestimación automática de las solicitudes más complejas para bajar las cifras estadísticas.",
        "explicacion": "Incorrecta. Vulnera el debido proceso y la legalidad, acarreando responsabilidades disciplinarias y fiscales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Código de Integridad DIAN",
    "citaNormativa": "«Orientación a resultados: Realizar el trabajo con altos estándares de calidad, orientando las actuaciones al logro de los objetivos institucionales y a la satisfacción de las necesidades ciudadanas.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_pjs_04",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia: Integridad, Honestidad y Resistencia a Presiones Indebidas",
    "caso": "Durante una auditoría tributaria a un importante consorcio económico, un representante del contribuyente sugiere al auditor agilizar favorablemente el cierre del expediente ofreciéndole una asesoría externa privada lucrativa para el año siguiente.",
    "enunciado": "Bajo los principios del Código de Integridad del Servicio Público y las normas de transparencia de la DIAN, el servidor público debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la conversación informal para no indisponer al contribuyente mientras termina la auditoría oficial.",
        "explicacion": "Incorrecta. Pone en riesgo la imparcialidad del servidor y transgrede el deber de denuncia ante ofertas indebidas."
      },
      {
        "id": "B",
        "texto": "Rechazar de manera inmediata, categórica y por escrito cualquier insinuación indebida, declarar la situación ante el superior jerárquico y poner en conocimiento de la Oficina de Seguridad Institucional y Control Interno Disciplinario los hechos.",
        "explicacion": "Correcta. La integridad y la probidad exigen cero tolerancia frente a la corrupción, salvaguardando la fe pública, la transparencia y el interés general del Estado."
      },
      {
        "id": "C",
        "texto": "Pedir al contribuyente que formalice su oferta de empleo por correo personal sin involucrar a la entidad.",
        "explicacion": "Incorrecta. Constituye una falta gravísima disciplinaria y la configuración de presuntos delitos contra la administración pública (cohecho, concusión o conflicto de interés)."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Código de Integridad del Servicio Público y Decreto 1742 de 2020",
    "citaNormativa": "«Valor Honestidad: Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general sobre el particular.» (Código de Integridad Función Pública)."
  },
  {
    "id": "ci_shared_dian_comp_pjs_05",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia: Trabajo en Equipo y Comunicación Asertiva",
    "caso": "En un equipo multidisciplinario encargado de un operativo aduanero conjunto, surgen diferencias marcadas entre los inspectores y los analistas jurídicos respecto al procedimiento para aprehender una carga con inconsistencias documentales.",
    "enunciado": "Para canalizar el conflicto y asegurar el éxito del operativo conforme a la competencia de 'Trabajo en Equipo', lo procedente es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Propiciar un espacio inmediato de deliberación técnica fundamentada en la norma aduanera, escuchando los argumentos de ambas áreas para unificar un criterio legal sólido que blinde jurídicamente el acta de aprehensión.",
        "explicacion": "Correcta. Fomenta la articulación interdisciplinaria, el respeto técnico y la comunicación asertiva para la consecución del objetivo institucional común."
      },
      {
        "id": "B",
        "texto": "Dejar que cada área actúe por separado y que el juzgado administrativo dirima quién tenía la razón.",
        "explicacion": "Incorrecta. Pone en riesgo la validez del procedimiento administrativo aduanero de la DIAN y desintegra el equipo."
      },
      {
        "id": "C",
        "texto": "Desautorizar a los analistas jurídicos frente a los usuarios aduaneros presentes en el muelle.",
        "explicacion": "Incorrecta. Deteriora la confianza ciudadana en la institución y viola las normas básicas de respeto profesional y trabajo en equipo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Manual de Competencias Laborales DIAN",
    "citaNormativa": "«Trabajo en equipo y colaboración: Trabajar de forma coordinada y constructiva con los demás para alcanzar metas conjuntas, propiciando un ambiente de respeto y sinergia laboral.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_raz_log_01",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Mínimo Común Múltiplo y Sincronización de Frecuencias",
    "caso": "En una terminal de transporte de carga y fiscalización aduanera intermunicipal, tres rutas de despacho operan con intervalos regulares:\n- La ruta A hacia el puerto marítimo sale cada 12 horas.\n- La ruta B hacia el centro del país sale cada 8 horas.\n- La ruta C hacia la frontera norte sale cada 16 horas.\nSi las tres rutas acaban de coincidir saliendo simultáneamente a las 08:00 horas:",
    "enunciado": "¿Cuántas horas deben transcurrir como mínimo para que las tres rutas vuelvan a coincidir en su horario de salida?",
    "opciones": [
      {
        "id": "A",
        "texto": "36 horas.",
        "explicacion": "Incorrecta. 36 es divisible por 12 pero no por 8 ni por 16 de forma exacta (36/8 = 4.5; 36/16 = 2.25)."
      },
      {
        "id": "B",
        "texto": "48 horas.",
        "explicacion": "Correcta. Se calcula el Mínimo Común Múltiplo (MCM) de 12, 8 y 16:\n- 12 = 2² × 3\n- 8 = 2³\n- 16 = 2⁴\nMCM = 2⁴ × 3 = 16 × 3 = 48 horas. Transcurridas 48 horas, la ruta A habrá hecho 4 viajes, la ruta B 6 viajes y la ruta C 3 viajes, coincidiendo nuevamente."
      },
      {
        "id": "C",
        "texto": "96 horas.",
        "explicacion": "Incorrecta. Aunque 96 es un múltiplo común, no es el mínimo tiempo requerido para la primera coincidencia."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Aritmética Operativa y Mínimo Común Múltiplo",
    "citaNormativa": "«El mínimo común múltiplo (MCM) de dos o más números naturales es el menor número que es múltiplo de todos ellos, utilizado para resolver problemas de periodicidad y concurrencia de eventos.»"
  },
  {
    "id": "ci_shared_dian_raz_log_02",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Variaciones Porcentuales Sucesivas y Aranceles",
    "caso": "Una empresa importadora cotiza un lote de maquinaria industrial por $50.000.000. Días después, por ajustes de aranceles de importación, el precio oficial se incrementa en un 15%, valor que la empresa financia en su totalidad. Posteriormente, al momento de nacionalizar y facturar, el proveedor aplica un descuento comercial del 10% sobre el último precio oficial facturado.",
    "enunciado": "¿Qué excedente de liquidez o ahorro en dinero le sobra a la empresa frente al crédito total que había tramitado con el aumento?",
    "opciones": [
      {
        "id": "A",
        "texto": "$2.500.000",
        "explicacion": "Incorrecta. Este valor surge de restar simplemente 15% menos 10% (5% de 50 millones), cometiendo el error de aplicar porcentajes sobre bases distintas."
      },
      {
        "id": "B",
        "texto": "$5.750.000",
        "explicacion": "Correcta. Procedimiento paso a paso:\n1. Precio inicial: $50.000.000.\n2. Con aumento del 15%: $50.000.000 + (50.000.000 × 0.15) = $57.500.000 (monto financiado).\n3. Descuento del 10% sobre $57.500.000: $57.500.000 × 0.10 = $5.750.000.\n4. Precio final a pagar: $57.500.000 - $5.750.000 = $51.750.000.\n5. Dinero sobrante frente al crédito: $57.500.000 - $51.750.000 = $5.750.000."
      },
      {
        "id": "C",
        "texto": "$7.500.000",
        "explicacion": "Incorrecta. $7.500.000 corresponde únicamente al valor del incremento del 15%, no al ahorro generado por el descuento posterior."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Razonamiento Matemático (Porcentajes Escalonados)",
    "citaNormativa": "«En variaciones porcentuales sucesivas, cada porcentaje debe aplicarse sobre la base inmediatamente anterior y no sobre el valor original de partida.»"
  },
  {
    "id": "ci_shared_dian_raz_log_03",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Ecuaciones Lineales y Factores Multiplicativos Inversos",
    "caso": "En un vivero tecnificado de reforestación, el número de plantas sembradas inicialmente se multiplicó por 15 en la primera fase de germinación, y posteriormente ese resultado volvió a multiplicarse por 6 en la etapa de vivero final, obteniéndose un consolidado total de 28.080 plantas.",
    "enunciado": "¿Cuántas plantas se sembraron en el lote inicial de germinación?",
    "opciones": [
      {
        "id": "A",
        "texto": "221 plantas.",
        "explicacion": "Incorrecta. 221 × 15 × 6 = 19.890 plantas, cifra muy inferior a 28.080."
      },
      {
        "id": "B",
        "texto": "312 plantas.",
        "explicacion": "Correcta. Planteamiento:\nTotal final = Plantas iniciales (X) × 15 × 6\n28.080 = X × 90\nX = 28.080 / 90 = 312 plantas iniciales.\nVerificación: 312 × 15 = 4.680; 4.680 × 6 = 28.080."
      },
      {
        "id": "C",
        "texto": "512 plantas.",
        "explicacion": "Incorrecta. 512 × 90 = 46.080 plantas, superando el total real."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Álgebra y Ecuaciones Lineales de Primer Grado",
    "citaNormativa": "«Para despejar una incógnita sometida a productos sucesivos se divide el valor resultante entre el producto de los coeficientes multiplicadores.»"
  },
  {
    "id": "ci_shared_dian_raz_log_04",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Conversión de Unidades de Tiempo y Operaciones Horarias",
    "caso": "Un buque mercante zarpa del puerto de Cartagena a las 08:35 horas con destino a un puerto secundario en el Caribe, donde arriba y atraca formalmente a las 16:30 horas del mismo día.",
    "enunciado": "¿Cuántos minutos duró exactamente la travesía de navegación de un puerto a otro?",
    "opciones": [
      {
        "id": "A",
        "texto": "425 minutos.",
        "explicacion": "Incorrecta. Corresponde a 7 horas con 5 minutos, desconociendo los minutos reales."
      },
      {
        "id": "B",
        "texto": "475 minutos.",
        "explicacion": "Correcta. Cálculo del tiempo transcurrido:\n- De 08:35 a 16:00 transcurren 7 horas y 25 minutos (8 horas menos 35 min = 7 h 25 min).\n- De 16:00 a 16:30 son 30 minutos adicionales.\n- Tiempo total: 7 horas y 55 minutos.\n- Conversión a minutos: (7 horas × 60 min/hora) + 55 min = 420 + 55 = 475 minutos."
      },
      {
        "id": "C",
        "texto": "515 minutos.",
        "explicacion": "Incorrecta. 515 minutos equivalen a 8 horas y 35 minutos, lo que situaría el arribo a las 17:10 horas."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Sistema Métrico y Medición de Tiempo",
    "citaNormativa": "«El cálculo de intervalos de tiempo sexagesimal requiere la descomposición en horas enteras y minutos fraccionarios para su conversión a la unidad requerida.»"
  },
  {
    "id": "ci_shared_dian_raz_log_05",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Relaciones de Proporción y Magnitudes Fraccionarias",
    "caso": "En un complejo arquitectónico institucional se analiza la altura de tres edificios A, B y C. Se conoce que:\n- El edificio C tiene una altura de 80 metros.\n- El edificio B tiene la cuarta parte de la altura del edificio C.\n- El edificio A es el doble de alto que el edificio B.",
    "enunciado": "¿Cuál es la sumatoria de las alturas de los tres edificios en conjunto?",
    "opciones": [
      {
        "id": "A",
        "texto": "100 metros.",
        "explicacion": "Incorrecta. Solo suma la altura de C (80 m) y B (20 m), omitiendo el edificio A."
      },
      {
        "id": "B",
        "texto": "140 metros.",
        "explicacion": "Correcta. Deducción de las alturas individuales:\n- Edificio C = 80 metros.\n- Edificio B = 80 / 4 = 20 metros.\n- Edificio A = 2 × 20 = 40 metros.\n- Altura total = Altura A + Altura B + Altura C = 40 + 20 + 80 = 140 metros."
      },
      {
        "id": "C",
        "texto": "160 metros.",
        "explicacion": "Incorrecta. Asume erróneamente que el edificio A tiene la misma altura que C."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Proporciones y Razonamiento Abstracto Numérico",
    "citaNormativa": "«La resolución de sistemas de magnitudes relativas requiere identificar el término independiente pivote y sustituir secuencialmente las condiciones dadas.»"
  },
  {
    "id": "ci_shared_dian_raz_log_06",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Regla de Tres Compuesta (Horas, Días y Rendimiento)",
    "caso": "Una cuadrilla de 10 operarios que labora en jornadas de 12 horas diarias tarda 5 días en digitalizar e indexar 12.000 expedientes aduaneros. Si para una nueva meta de 8.000 expedientes se decide aumentar la jornada a 16 horas diarias manteniendo la misma cantidad de operarios con igual rendimiento:",
    "enunciado": "¿En cuántos días completarán la digitalización de los 8.000 expedientes?",
    "opciones": [
      {
        "id": "A",
        "texto": "2.5 días.",
        "explicacion": "Correcta. Cálculo por regla de tres compuesta:\n- Total horas primer trabajo: 12 horas/día × 5 días = 60 horas en total.\n- Rendimiento horario: 12.000 expedientes / 60 horas = 200 expedientes/hora.\n- Horas requeridas para 8.000 expedientes: 8.000 / 200 = 40 horas totales.\n- Días requeridos a 16 horas/día: 40 horas / 16 horas/día = 2.5 días."
      },
      {
        "id": "B",
        "texto": "3.5 días.",
        "explicacion": "Incorrecta. 3.5 días a 16 horas/día sumarían 56 horas, lo que permitiría procesar 11.200 expedientes."
      },
      {
        "id": "C",
        "texto": "4.0 días.",
        "explicacion": "Incorrecta. Desconoce el incremento de horas por jornada y la reducción del volumen de expedientes."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Competencias Básicas CNSC - Proporcionalidad Compuesta y Rendimiento Laboral",
    "citaNormativa": "«La regla de tres compuesta permite relacionar magnitudes directa e inversamente proporcionales estableciendo la constante de rendimiento por unidad de tiempo.»"
  },
  {
    "id": "ci_shared_dian_raz_log_07",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Operaciones con Fracciones y División de Capacidades",
    "caso": "En una brigada móvil de inspección aduanera y tributaria, se cuenta con un carrotanque que contiene 100 galones de combustible especial. Si cada una de las motocicletas oficiales de patrullaje fronterizo requiere exactamente 1/5 de galón para completar su tanque:",
    "enunciado": "¿A cuántas motocicletas se les puede suministrar combustible con la capacidad total del carrotanque?",
    "opciones": [
      {
        "id": "A",
        "texto": "500 motocicletas.",
        "explicacion": "Correcta. Operación de división de fracciones:\nTotal motos = 100 / (1/5) = 100 × (5/1) = 500 motocicletas.\nCada galón rinde para 5 motocicletas (1 / (1/5) = 5). En 100 galones se abastecen: 100 × 5 = 500 motos."
      },
      {
        "id": "B",
        "texto": "50 motocicletas.",
        "explicacion": "Incorrecta. Es el resultado de dividir erróneamente 100 entre 2 en lugar de multiplicar por el inverso fraccionario."
      },
      {
        "id": "C",
        "texto": "20 motocicletas.",
        "explicacion": "Incorrecta. Corresponde a multiplicar 100 por 1/5 (sacar la quinta parte de 100), confundiendo la capacidad con el consumo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Competencias Básicas CNSC - Aritmética de Fracciones y Razones",
    "citaNormativa": "«La división de un entero entre una fracción común equivale a multiplicar el entero por el recíproco de la fracción (a ÷ b/c = a × c/b).»"
  },
  {
    "id": "ci_shared_dian_raz_log_08",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Balance Dinámico de Entradas y Salidas (Flujo Continuo)",
    "caso": "Un bus articulado de transporte inicia su recorrido con 40 pasajeros a bordo.\n- En la primera parada descienden 20 pasajeros y abordan 28 nuevos pasajeros.\n- En la segunda parada descienden 12 pasajeros y abordan 10 nuevos pasajeros.",
    "enunciado": "¿Con cuántos pasajeros a bordo continúa el bus después de culminar la segunda parada?",
    "opciones": [
      {
        "id": "A",
        "texto": "42 pasajeros.",
        "explicacion": "Incorrecta. Error en la suma algebraica de entradas y salidas."
      },
      {
        "id": "B",
        "texto": "46 pasajeros.",
        "explicacion": "Correcta. Balance aritmético secuencial:\n- Inicio: 40 pasajeros.\n- Tras parada 1: 40 - 20 + 28 = 20 + 28 = 48 pasajeros.\n- Tras parada 2: 48 - 12 + 10 = 36 + 10 = 46 pasajeros."
      },
      {
        "id": "C",
        "texto": "52 pasajeros.",
        "explicacion": "Incorrecta. Omite descontar el descenso de los 12 pasajeros en la segunda parada."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Operaciones Combinadas de Adición y Sustracción",
    "citaNormativa": "«El cálculo de balance de flujos dinámicos requiere aplicar ordenadamente sumas y restas sucesivas respetando los signos de entrada (+) y salida (-).»"
  },
  {
    "id": "ci_shared_dian_raz_log_09",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Tasas de Avance y Proporcionalidad Temporal Porcentual",
    "caso": "Un operario de archivo documental logra procesar 1/4 (25%) del total de un expediente en un tiempo de 2 horas continuas de labor a ritmo constante.",
    "enunciado": "Si el operario mantiene exactamente la misma velocidad durante una jornada continua de 6 horas, ¿qué porcentaje total del expediente habrá procesado?",
    "opciones": [
      {
        "id": "A",
        "texto": "50%",
        "explicacion": "Incorrecta. En 50% solo habría trabajado 4 horas (el doble de 2 horas)."
      },
      {
        "id": "B",
        "texto": "75%",
        "explicacion": "Correcta. Planteamiento proporcional directo:\n- En 2 horas procesa: 1/4 = 25%.\n- Rendimiento horario: 25% / 2 horas = 12.5% por hora.\n- En 6 horas procesa: 6 × 12.5% = 75% (o bien: 6 horas es el triple de 2 horas, luego 25% × 3 = 75%)."
      },
      {
        "id": "C",
        "texto": "100%",
        "explicacion": "Incorrecta. Para completar el 100% necesitaría 8 horas continuas (4 × 2 horas)."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Proporcionalidad Directa y Porcentajes",
    "citaNormativa": "«Dos magnitudes son directamente proporcionales cuando al multiplicar una de ellas por un número, la otra queda multiplicada por el mismo número.»"
  },
  {
    "id": "ci_shared_dian_raz_log_10",
    "nivel": "Profesional",
    "ejeId": "razonamiento_cuantitativo_logico",
    "ejeNombre": "Razonamiento Cuantitativo y Lógico",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cálculo de Complemento Porcentual en Inventarios",
    "caso": "En una granja experimental se tienen 120 pollitos recién nacidos. De ellos, se clasifica que el 40% son de plumaje blanco y los restantes corresponden a pollitos de plumaje amarillo.",
    "enunciado": "¿Cuántos pollitos amarillos hay en total en la granja?",
    "opciones": [
      {
        "id": "A",
        "texto": "48 pollitos.",
        "explicacion": "Incorrecta. 48 corresponde al 40% de pollitos blancos (120 × 0.40 = 48), no a los amarillos restantes."
      },
      {
        "id": "B",
        "texto": "72 pollitos.",
        "explicacion": "Correcta. Cálculo del complemento:\n- Método 1: Los pollitos amarillos representan el 60% restante (100% - 40% = 60%). Total amarillos = 120 × 0.60 = 72 pollitos.\n- Método 2: Pollitos blancos = 120 × 0.40 = 48. Pollitos amarillos = 120 - 48 = 72 pollitos."
      },
      {
        "id": "C",
        "texto": "80 pollitos.",
        "explicacion": "Incorrecta. 80 equivaldría al 66.6% del total, no al 60% complementario."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Competencias Básicas CNSC - Porcentajes y Complementariedad de Conjuntos",
    "citaNormativa": "«El porcentaje complementario de un subconjunto A respecto al conjunto total U es igual a 100% menos el porcentaje de A.»"
  },
  {
    "id": "ci_shared_dian_comp_ser_05",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Código de Integridad DIAN (Valor Honestidad) - Conflicto de Interés",
    "caso": "A un auditor tributario de la DIAN se le asigna de manera aleatoria el expediente de fiscalización de una sociedad comercial en la que su cónyuge se desempeña como contadora pública y accionista minoritaria.",
    "enunciado": "De acuerdo con el Código de Integridad, la Ley 1952 de 2019 (Código General Disciplinario) y la normativa institucional, el servidor público debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Continuar con la auditoría procurando ser lo más objetivo posible para demostrar profesionalismo, sin comentar nada a sus superiores.",
        "explicacion": "Incorrecta. Omitir manifestar el impedimento legal constituye una falta disciplinaria gravísima por actuar en conflicto de interés."
      },
      {
        "id": "B",
        "texto": "Declararse impedido de manera formal y por escrito ante su jefe inmediato tan pronto conoce la designación, motivando la existencia del vínculo conyugal para que el caso sea reasignado.",
        "explicacion": "Correcta. El valor de la Honestidad y la Ley 1437 de 2011 (Art. 11 y 12) obligan a manifestar inmediatamente los impedimentos legales garantizando la absoluta imparcialidad y transparencia del Estado."
      },
      {
        "id": "C",
        "texto": "Sugerir a su cónyuge que renuncie discretamente a la sociedad durante los meses que dure la auditoría.",
        "explicacion": "Incorrecta. Representa una maniobra elusiva y desleal contraria a los postulados éticos de la función pública."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Código de Integridad DIAN (Valor Honestidad), Ley 1952 de 2019 y Ley 1437 de 2011",
    "citaNormativa": "«Valor Honestidad: Declaro oportunamente cualquier situación de conflicto de interés que pueda comprometer mi objetividad o la credibilidad de la entidad.» (Código de Integridad Función Pública)."
  },
  {
    "id": "ci_shared_dian_comp_ser_06",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Código de Integridad DIAN (Valor Diligencia) - Prevención de Prescripción y Caducidad",
    "caso": "Un funcionario de la División de Cobranzas advierte que un título ejecutivo de alta cuantía está a menos de 45 días de prescribir debido a la inacción de administraciones pasadas.",
    "enunciado": "Para salvaguardar la seguridad fiscal del Estado bajo el valor de la 'Diligencia', la conducta que le corresponde asumir es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Actuar con celeridad y rigurosidad técnica, proyectando de inmediato el mandamiento de pago y las medidas cautelares para interrumpir formalmente el término de prescripción antes de su acaecimiento.",
        "explicacion": "Correcta. El valor de la Diligencia exige actuar con prontitud, esmero y eficacia para proteger los recursos públicos y evitar el detrimento patrimonial del Estado."
      },
      {
        "id": "B",
        "texto": "Dejar que prescriba la obligación para evitar el desgaste administrativo de cobrar un expediente antiguo.",
        "explicacion": "Incorrecta. Genera detrimento patrimonial del Estado y responsabilidad fiscal y disciplinaria por negligencia."
      },
      {
        "id": "C",
        "texto": "Guardar silencio y solicitar su traslado a otra seccional para que la prescripción ocurra bajo la gestión de otro servidor.",
        "explicacion": "Incorrecta. Vulnera frontalmente la ética pública y el deber de cuidado de los caudales públicos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad DIAN (Valor Diligencia) y Estatuto Tributario, Art. 817",
    "citaNormativa": "«Valor Diligencia: Cumplo los deberes, funciones y responsabilidades asignadas con prontitud, destreza y eficiencia, optimizando los recursos del Estado.» (Código de Integridad DIAN)."
  },
  {
    "id": "ci_shared_dian_comp_ser_07",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Código de Integridad DIAN (Valor Justicia) - Imparcialidad y Libre Valoración Probatoria",
    "caso": "En un procedimiento de liquidación oficial aduanera, el investigado aporta una prueba pericial idónea y legal que demuestra fehacientemente que la mercancía importada no clasifica en la subpartida arancelaria sancionable señalada por el requerimiento inicial.",
    "enunciado": "Bajo el valor de la 'Justicia' y el deber de objetividad que rige a la DIAN, el sustanciador debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Ignorar la prueba aportada por el usuario para sostener la sanción inicial a favor de las estadísticas de recaudo sancionatorio.",
        "explicacion": "Incorrecta. Vulnera el debido proceso, el principio de justicia y la sana crítica probatoria, viciando de nulidad el acto administrativo."
      },
      {
        "id": "B",
        "texto": "Valorar de manera integral y rigurosa la prueba aportada conforme a la sana crítica, reconociendo el hecho cierto y ajustando la liquidación a derecho, garantizando la justicia fiscal sin sesgos.",
        "explicacion": "Correcta. El valor de la Justicia orienta al servidor público a decidir con apego estricto a la verdad fáctica y probatoria, protegiendo tanto los intereses legítimos del Estado como los derechos de los particulares."
      },
      {
        "id": "C",
        "texto": "Sancionar al contribuyente con una multa menor para llegar a un punto intermedio salomónico sin sustento técnico.",
        "explicacion": "Incorrecta. La función tributaria y aduanera es plenamente reglada y no admite transacciones arbitrarias al margen de la ley."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Código de Integridad DIAN (Valor Justicia) y Estatuto Tributario, Art. 683",
    "citaNormativa": "«Valor Justicia: Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación alguna.» (Código de Integridad)."
  },
  {
    "id": "ci_shared_dian_comp_ser_09",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Código de Integridad DIAN (Valor Compromiso) - Apoyo y Sentido de Pertenencia Institucional",
    "caso": "Durante la semana de vencimientos del impuesto sobre la renta de personas naturales, el sistema registra una demanda masiva de consultas ciudadanas que sobrepasa la capacidad ordinaria del canal presencial y telefónico.",
    "enunciado": "Para evidenciar el valor del 'Compromiso' con la organización y el servicio público, la actitud que debe demostrar el servidor es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Apagar su equipo a la hora exacta de salida sin importar que aún queden ciudadanos esperando en la fila de radicación.",
        "explicacion": "Incorrecta. Refleja desinterés e indolencia frente al usuario y las metas misionales del Estado."
      },
      {
        "id": "B",
        "texto": "Articularse solidariamente con el equipo de trabajo, mostrando disposición proactiva para extender su apoyo en la atención, resolver dudas y asegurar que todos los ciudadanos reciban orientación antes del cierre.",
        "explicacion": "Correcta. El valor del Compromiso se traduce en el sentido de pertenencia y entrega al servicio público, yendo más allá del cumplimiento mínimo para asegurar la satisfacción ciudadana."
      },
      {
        "id": "C",
        "texto": "Culpar públicamente a los jefes de la seccional por no haber contratado más personal supernumerario.",
        "explicacion": "Incorrecta. Destruye el clima laboral y no aporta a la solución de la contingencia institucional."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Código de Integridad DIAN (Valor Compromiso) y Decreto Ley 927 de 2023",
    "citaNormativa": "«Valor Compromiso: Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas.» (Código de Integridad DIAN)."
  },
  {
    "id": "ci_shared_dian_comp_ser_10",
    "nivel": "Profesional",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia Decreto 815 - Aporte Técnico y Profesional Especializado",
    "caso": "En una controversia jurídica sobre la aplicación de una exención aduanera en un tratado de libre comercio, existen interpretaciones contradictorias entre los inspectores de muelle. Se solicita al Gestor Profesional elaborar una línea técnica orientadora.",
    "enunciado": "Para desplegar un alto 'Aporte Técnico y Profesional', el funcionario debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Investigar de manera exhaustiva los antecedentes del tratado, la doctrina oficial unificada de la DIAN y la jurisprudencia del Consejo de Estado, redactando un criterio técnico robusto y didáctico que brinde seguridad jurídica a la operación aduanera.",
        "explicacion": "Correcta. La competencia de Aporte Técnico y Profesional (Decreto 815 de 2018) exige aplicar conocimientos especializados con rigor normativo para resolver vacíos y estandarizar la gestión con excelencia."
      },
      {
        "id": "B",
        "texto": "Elegir al azar una de las posturas para no dilatar el debate y cerrar la discusión.",
        "explicacion": "Incorrecta. Demuestra ligereza técnica y expone a la entidad a demandas contenciosas de nulidad y restablecimiento del derecho."
      },
      {
        "id": "C",
        "texto": "Trasladar la responsabilidad de la decisión al usuario importador.",
        "explicacion": "Incorrecta. Desconoce la función privativa de la autoridad aduanera."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Decreto 1742 de 2020 (Competencia Aporte Técnico)",
    "citaNormativa": "«Aporte técnico-profesional: Poner a disposición de la entidad los conocimientos especializados, formulando soluciones con fundamento técnico y metodológico riguroso.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_ser_11",
    "nivel": "Profesional",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia Decreto 815 - Trabajo en Equipo y Articulación con la POLFA",
    "caso": "Se programa un operativo interinstitucional de alto impacto en una zona de frontera entre inspectores tributarios y aduaneros de la DIAN y miembros de la Policía Fiscal y Aduanera (POLFA).",
    "enunciado": "Para garantizar la sinergia operativa bajo la competencia de 'Trabajo en Equipo y Cooperación', es indispensable:",
    "opciones": [
      {
        "id": "A",
        "texto": "Establecer canales de comunicación claros, coordinar previamente las funciones técnicas aduaneras de la DIAN con las labores de custodia y seguridad de la POLFA, actuando como un solo cuerpo unificado bajo protocolos oficiales conjuntos.",
        "explicacion": "Correcta. El trabajo en equipo interinstitucional requiere articulación, claridad de roles y cooperación mutua para maximizar la eficacia del control estatal."
      },
      {
        "id": "B",
        "texto": "Competir entre dependencias para ver cuál entidad realiza el mayor número de incautaciones de forma independiente.",
        "explicacion": "Incorrecta. La rivalidad interinstitucional entorpece las investigaciones y eleva los riesgos de seguridad en zona de frontera."
      },
      {
        "id": "C",
        "texto": "Permitir que la fuerza policial tome todas las decisiones de determinación tributaria sin intervención de los inspectores DIAN.",
        "explicacion": "Incorrecta. Vulnera la competencia legal especializada que la ley radica exclusivamente en los funcionarios aduaneros de la DIAN."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Convenios Institucionales DIAN - Policía Nacional (POLFA)",
    "citaNormativa": "«Trabajo en equipo y colaboración: Desarrollar relaciones de cooperación efectiva con otros equipos y entidades, alineando esfuerzos para el logro de propósitos superiores del Estado.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_ser_12",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia Decreto 815 - Manejo de Conflictos Organizacionales y Negociación",
    "caso": "Se presenta una discrepancia reiterada entre la División de Cobranzas y la División de Fiscalización respecto a la oportunidad y forma de remitir los expedientes sancionatorios con recurso fallado, lo que genera retrasos en el cobro coactivo.",
    "enunciado": "Para gestionar constructivamente esta tensión bajo la competencia de 'Manejo de Conflictos', lo adecuado es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Promover una mesa de trabajo técnica entre líderes de ambas dependencias para mapear el flujo de transferencia, estandarizar una lista de chequeo conjunta de requisitos y acordar un protocolo de entrega que erradique los reprocesos.",
        "explicacion": "Correcta. La resolución constructiva de conflictos organizacionales implica abordar las causas sistémicas mediante el diálogo técnico, el diseño de soluciones consensuadas y la estandarización por procesos."
      },
      {
        "id": "B",
        "texto": "Enviar memorandos con copia a la Procuraduría acusando de negligencia a la otra división.",
        "explicacion": "Incorrecta. Destruye la cohesión interna y no soluciona la falla procesal de fondo."
      },
      {
        "id": "C",
        "texto": "Devolver sistemáticamente todos los expedientes recibidos sin revisarlos.",
        "explicacion": "Incorrecta. Afecta directamente el recaudo tributario y paraliza la gestión pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 (Manejo de Conflictos y Coordinación por Procesos MIPG)",
    "citaNormativa": "«Manejo de conflictos: Identificar divergencias de criterio y orientar los desacuerdos hacia soluciones constructivas y consensuadas que beneficien la operación institucional.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_ser_13",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia Decreto 815 - Adaptabilidad al Cambio y Transformación Digital",
    "caso": "La DIAN migra definitivamente sus expedientes físicos a una nueva plataforma de expediente electrónico y notificación electrónica obligatoria. Algunos funcionarios veteranos expresan temor y resistencia a abandonar las carpetas en papel.",
    "enunciado": "En el marco de la competencia de 'Adaptabilidad al Cambio y Liderazgo Transformador', el profesional debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Adoptar una actitud de acogida y entusiasmo frente a la digitalización, capacitarse a fondo en el aplicativo y acompañar pacientemente a sus compañeros con mentoría práctica, resaltando los beneficios de seguridad, celeridad y ahorro ecológico.",
        "explicacion": "Correcta. La adaptabilidad al cambio exige asumir con flexibilidad y actitud proactiva las transformaciones tecnológicas, sirviendo de agente dinamizador del cambio positivo en el entorno laboral."
      },
      {
        "id": "B",
        "texto": "Seguir imprimiendo todos los documentos a escondidas para armar expedientes paralelos en físico.",
        "explicacion": "Incorrecta. Entorpece la política de cero papel y genera duplicidad riesgosa en la trazabilidad documental."
      },
      {
        "id": "C",
        "texto": "Burlarse de los compañeros que tienen dificultades con las herramientas digitales.",
        "explicacion": "Incorrecta. Vulnera el respeto, el compañerismo y deteriora gravemente el clima organizacional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Política de Gestión Documental y Transformación Digital MIPG",
    "citaNormativa": "«Adaptabilidad al cambio: Mantener una actitud abierta y constructiva frente a nuevas tecnologías, directrices y métodos de trabajo, facilitando su adopción en la organización.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_ser_14",
    "nivel": "Profesional",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Competencia Decreto 815 - Liderazgo de Equipos y Orientación al Logro",
    "caso": "A un Gestor Profesional se le encarga liderar una comisión temporal de fiscalización express en un sector comercial caracterizado por alta informalidad, contando con varios técnicos recién ingresados a la carrera administrativa.",
    "enunciado": "Para liderar con éxito la misión conforme al Decreto 815 de 2018, la acción recomendada es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Definir metas claras y alcanzables, asignar tareas según fortalezas individuales, brindar retroalimentación oportuna y motivar al equipo mediante el ejemplo de trabajo ético y riguroso en campo.",
        "explicacion": "Correcta. El liderazgo en el nivel profesional implica guiar, empoderar y respaldar al equipo humano, garantizando el cumplimiento de los objetivos misionales con altos estándares de calidad y ética."
      },
      {
        "id": "B",
        "texto": "Amenazar al equipo con calificaciones deficientes en el periodo de prueba si no logran el 200% de la meta el primer día.",
        "explicacion": "Incorrecta. El liderazgo coercitivo y autoritario genera desmotivación, estrés laboral y errores operativos en campo."
      },
      {
        "id": "C",
        "texto": "Dejar que cada técnico actúe por cuenta propia sin dar instrucciones para no interferir en su autonomía.",
        "explicacion": "Incorrecta. Omite el deber esencial de dirección, orientación técnica y supervisión propio del rol del gestor."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 (Competencia de Liderazgo de Grupos de Trabajo)",
    "citaNormativa": "«Liderazgo: Guiar y orientar el grupo de trabajo hacia la consecución de las metas institucionales, promoviendo el desarrollo de sus integrantes y el sentido de corresponsabilidad.» (Decreto 815 de 2018)."
  },
  {
    "id": "ci_shared_dian_comp_ser_15",
    "nivel": "Profesional",
    "ejeId": "comportamental_integridad",
    "ejeNombre": "Competencias Comportamentales e Integridad",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Código de Ética DIAN y Reserva Tributaria Absoluta (Art. 583 E.T.)",
    "caso": "Un amigo cercano de la infancia contacta a un funcionario de la DIAN y le pide el favor informal de revisar en las bases de datos internas el patrimonio y las deudas reportadas por un socio con el que piensa realizar un negocio inmobiliario privado.",
    "enunciado": "Ante esta petición, la obligación ética y jurídica irrenunciable del servidor público es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Consultar los datos en el sistema pero decírselos únicamente de palabra sin imprimir ni enviar pantallazos.",
        "explicacion": "Incorrecta. Violar la reserva tributaria de forma verbal o electrónica es una falta gravísima y un delito penal (violación de datos personales y revelación de secreto)."
      },
      {
        "id": "B",
        "texto": "Rechazar de plano la solicitud, recordarle con firmeza que la información tributaria goza de reserva legal absoluta conforme al artículo 583 del Estatuto Tributario y que los servidores de la DIAN tienen prohibido consultar o divulgar datos de contribuyentes para fines particulares.",
        "explicacion": "Correcta. El Código de Ética DIAN y el artículo 583 del Estatuto Tributario consagran la reserva tributaria estricta como pilar de la confianza ciudadana en el Estado, prohibiendo cualquier consulta o fuga de información sin orden judicial o legal previa."
      },
      {
        "id": "C",
        "texto": "Pedirle que le pague un almuerzo a cambio de suministrarle la copia digital de la declaración de renta.",
        "explicacion": "Incorrecta. Constituye una conducta abiertamente delictiva de concusión y corrupción sancionable penal y disciplinariamente."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 583 (Reserva de la Información Tributaria) y Código de Ética DIAN",
    "citaNormativa": "«La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada.» (Estatuto Tributario, Art. 583)."
  },
  {
    "id": "ci_shared_dian_cbo_cont_01",
    "nivel": "Profesional",
    "ejeId": "contratacion_estatal",
    "ejeNombre": "Contratación Estatal y Gestión de Recursos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inhabilidades e Incompatibilidades Sobrevinientes (Art. 9 Ley 80 de 1993)",
    "caso": "Durante la ejecución de un contrato de suministro informático con la DIAN, el contratista persona natural es condenado penalmente en primera y segunda instancia por un delito contra la administración pública, sobreviniendo una inhabilidad legal insubsanable.",
    "enunciado": "De acuerdo con el artículo 9º de la Ley 80 de 1993, la obligación legal que tiene el contratista inhabilitado es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Ceder el contrato previa autorización escrita de la entidad contratante, y de no ser posible la cesión, renunciar formalmente a su ejecución.",
        "explicacion": "Correcta. El artículo 9º de la Ley 80 de 1993 dispone que si sobreviene inhabilidad o incompatibilidad durante la ejecución contractual, el contratista debe ceder el contrato previa aprobación de la entidad, o renunciar a su ejecución si no fuere viable la cesión."
      },
      {
        "id": "B",
        "texto": "Continuar ejecutando el contrato a través de un apoderado verbal sin informar a la entidad pública.",
        "explicacion": "Incorrecta. Configura causal de nulidad absoluta del contrato y transgresión gravísima del régimen de inhabilidades."
      },
      {
        "id": "C",
        "texto": "Cobrar por anticipado la totalidad del valor del contrato restante.",
        "explicacion": "Incorrecta. Resulta abiertamente ilegal y lesivo del erario público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 80 de 1993, Art. 9 (Inhabilidades e Incompatibilidades Sobrevinientes)",
    "citaNormativa": "«Si llegare a sobrevenir inhabilidad o incompatibilidad en el contratista, éste cederá el contrato previa autorización escrita de la entidad contratante o, si ello no fuere posible, renunciará a su ejecución.» (Ley 80 de 1993, Art. 9)."
  },
  {
    "id": "ci_shared_dian_cbo_cont_02",
    "nivel": "Profesional",
    "ejeId": "contratacion_estatal",
    "ejeNombre": "Contratación Estatal y Gestión de Recursos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Causales de Nulidad Absoluta de los Contratos Estatales (Art. 44 Ley 80)",
    "caso": "Se verifica que un contrato de arrendamiento de una sede seccional fue celebrado directamente con el hermano del ordenador del gasto de la entidad, omitiendo el régimen legal de inhabilidades y el debido proceso de selección.",
    "enunciado": "Conforme al artículo 44 de la Ley 80 de 1993, este contrato adolece de:",
    "opciones": [
      {
        "id": "A",
        "texto": "Nulidad absoluta, por haberse celebrado contra expresa prohibición constitucional o legal y con persona incursa en causal de inhabilidad e incompatibilidad.",
        "explicacion": "Correcta. El artículo 44 numeral 2 de la Ley 80 de 1993 establece que los contratos del Estado son absolutamente nulos en los casos en que se celebren con personas legalmente inhabilitadas o contra expresa prohibición constitucional o legal."
      },
      {
        "id": "B",
        "texto": "Nulidad relativa saneable mediante el simple cambio de firma en el acta final.",
        "explicacion": "Incorrecta. La violación del régimen de inhabilidades e incompatibilidades genera nulidad absoluta de orden público, insanable."
      },
      {
        "id": "C",
        "texto": "Plena validez siempre y cuando el canon de arrendamiento sea inferior al avalúo catastral.",
        "explicacion": "Incorrecta. El valor económico no convalida la violación del régimen legal imperativo de inhabilidades."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 80 de 1993, Art. 44 (Nulidad Absoluta)",
    "citaNormativa": "«Los contratos del Estado son absolutamente nulos en los casos previstos en el derecho común y además cuando: se celebren con personas incursas en causales de inhabilidad o incompatibilidad previstas en la Constitución y la ley.» (Ley 80 de 1993, Art. 44)."
  },
  {
    "id": "ci_shared_dian_cbo_cont_03",
    "nivel": "Profesional",
    "ejeId": "contratacion_estatal",
    "ejeNombre": "Contratación Estatal y Gestión de Recursos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Consorcios y Uniones Temporales - Diferencia en Sanciones Contractuales",
    "caso": "La DIAN adjudica un contrato de desarrollo de software a una Unión Temporal integrada por dos empresas (A con 70% de participación técnica y B con 30% financiera). El contrato se incumple por fallas graves en los desarrollos informáticos imputables exclusivamente a la empresa A.",
    "enunciado": "De acuerdo con el artículo 7º de la Ley 80 de 1993, ¿cuál es la diferencia de responsabilidad sancionatoria entre los consorcios y las uniones temporales?",
    "opciones": [
      {
        "id": "A",
        "texto": "En la Unión Temporal las sanciones por incumplimiento se imponen distribuidas según la participación en la ejecución de cada uno de los miembros, mientras que en el Consorcio todos responden solidariamente por las sanciones.",
        "explicacion": "Correcta. El artículo 7º parágrafo 1 de la Ley 80 de 1993 señala que en la unión temporal las sanciones por incumplimiento se distribuirán de acuerdo con la participación en la ejecución de cada uno de los integrantes (aunque en las obligaciones económicas frente a terceros responden solidariamente)."
      },
      {
        "id": "B",
        "texto": "No existe ninguna diferencia; en ambas figuras las sanciones siempre se imponen por partes iguales.",
        "explicacion": "Incorrecta. La ley distingue expresamente la imputación de sanciones en la unión temporal atendiendo la participación pactada."
      },
      {
        "id": "C",
        "texto": "En la unión temporal la responsabilidad sancionatoria solo recae sobre el representante legal del consorcio.",
        "explicacion": "Incorrecta. La responsabilidad recae sobre los miembros del acuerdo asociativo según la ley."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 80 de 1993, Art. 7 (Consorcios y Uniones Temporales)",
    "citaNormativa": "«En las uniones temporales las sanciones por el incumplimiento de las obligaciones derivadas de la propuesta y del contrato se impondrán según la participación en la ejecución de cada uno de los miembros de la unión temporal.» (Ley 80 de 1993, Art. 7)."
  },
  {
    "id": "ci_shared_dian_cbo_cont_04",
    "nivel": "Profesional",
    "ejeId": "contratacion_estatal",
    "ejeNombre": "Contratación Estatal y Gestión de Recursos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Liquidación Bilateral y Unilateral de los Contratos Estatales",
    "caso": "Finalizado el plazo de ejecución de un contrato de obra pública de la DIAN, el contratista no acude a la citación para suscribir el acta de liquidación bilateral de común acuerdo ni responde a los requerimientos dentro del plazo legal.",
    "enunciado": "Conforme al artículo 11 de la Ley 1150 de 2007 (que subrogó el Art. 60 de la Ley 80 de 1993), la actuación que debe adelantar la entidad es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Proceder a la Liquidación Unilateral del contrato mediante acto administrativo motivado dentro de los dos (2) meses siguientes al vencimiento del término para liquidar de mutuo acuerdo.",
        "explicacion": "Correcta. La ley faculta a la entidad estatal para liquidar unilateralmente el contrato mediante acto administrativo motivado si el contratista no se presenta o no hay acuerdo bilateral dentro del plazo legal o contractual fijado."
      },
      {
        "id": "B",
        "texto": "Dejar el contrato abierto indefinidamente hasta que el contratista decida comparecer.",
        "explicacion": "Incorrecta. Genera inseguridad jurídica y desidia en la administración de los recursos públicos."
      },
      {
        "id": "C",
        "texto": "Condonar las pólizas y devolver las retenciones en garantía de manera automática.",
        "explicacion": "Incorrecta. Vulnera la obligación de verificar el estado contable y de cumplimiento del contrato antes de liberar garantías."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1150 de 2007, Art. 11 (Liquidación de los Contratos)",
    "citaNormativa": "«Si el contratista no se presenta a la liquidación previa notificación o convocatoria que le haga la entidad, o las partes no llegan a un acuerdo sobre su contenido, la entidad tendrá la facultad de liquidar en forma unilateral dentro de los dos (2) meses siguientes.» (Ley 1150 de 2007, Art. 11)."
  },
  {
    "id": "ci_shared_dian_cbo_mipg_01",
    "nivel": "Profesional",
    "ejeId": "mipg_control_interno",
    "ejeNombre": "MIPG y Sistema de Control Interno (MECI)",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "MIPG - Dimensión 1: El Talento Humano como Corazón del Modelo",
    "caso": "En la sesión del Comité Institucional de Gestión y Desempeño de la DIAN, se debate sobre la priorización de los recursos institucionales en el marco de la implementación del Modelo Integrado de Planeación y Gestión (MIPG).",
    "enunciado": "De acuerdo con el Decreto 1499 de 2017 y el manual operativo del MIPG, ¿cuál de las siete (7) dimensiones se concibe como el corazón, centro y eje dinamizador fundamental de todo el modelo?",
    "opciones": [
      {
        "id": "A",
        "texto": "La Dimensión de Talento Humano, entendida como el activo más importante y el motor principal para generar valor público y resultados con valores.",
        "explicacion": "Correcta. El MIPG define al Talento Humano como el corazón del modelo, dado que son los servidores públicos quienes dinamizan las demás dimensiones estratégicas, operativas y de control en la gestión estatal."
      },
      {
        "id": "B",
        "texto": "La Dimensión de Gestión de Compras e Inmuebles exclusivamente.",
        "explicacion": "Incorrecta. No es una de las 7 dimensiones estructurales del MIPG."
      },
      {
        "id": "C",
        "texto": "La Dimensión de Publicidad y Redes Sociales.",
        "explicacion": "Incorrecta. No corresponde a la arquitectura del modelo de Función Pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017 y Manual Operativo del MIPG (Función Pública)",
    "citaNormativa": "«La Dimensión del Talento Humano es el corazón del Modelo Integrado de Planeación y Gestión (MIPG), reconociendo al servidor público como el principal factor de éxito de la gestión del Estado.» (MIPG)."
  },
  {
    "id": "ci_shared_dian_cbo_mipg_02",
    "nivel": "Profesional",
    "ejeId": "mipg_control_interno",
    "ejeNombre": "MIPG y Sistema de Control Interno (MECI)",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "MECI - Las Tres Líneas de Defensa en la Gestión del Riesgo",
    "caso": "Al estructurar la matriz de riesgos institucionales contra la corrupción y la evasión, se delimitan las responsabilidades de cada nivel organizacional bajo el esquema de las Líneas de Defensa del MECI / MIPG.",
    "enunciado": "De acuerdo con la Séptima Dimensión del MIPG (Control Interno - MECI), ¿a quién corresponde la Primera Línea de Defensa en la gestión del riesgo?",
    "opciones": [
      {
        "id": "A",
        "texto": "A los líderes de proceso y servidores públicos que gestionan la operación en el día a día, encargados de aplicar y monitorear directamente los controles en sus actividades ordinarias.",
        "explicacion": "Correcta. La Primera Línea de Defensa reside en la propia operación (líderes de proceso y sus equipos operativos), quienes deben identificar, evaluar y aplicar los controles en su trabajo cotidiano."
      },
      {
        "id": "B",
        "texto": "Exclusivamente a los auditores de la Oficina de Control Interno.",
        "explicacion": "Incorrecta. La Oficina de Control Interno constituye la Tercera Línea de Defensa (evaluación independiente), no la primera línea operativa."
      },
      {
        "id": "C",
        "texto": "A los jueces de la República en fallos judiciales contenciosos.",
        "explicacion": "Incorrecta. Los jueces ejercen control judicial externo y no integran el sistema de control interno administrativo de la entidad."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017 y Guía de las Líneas de Defensa MECI (Función Pública)",
    "citaNormativa": "«Primera Línea de Defensa: Líderes de proceso y sus colaboradores en la operación diaria, responsables de la gestión y mitigación directa de los riesgos inherentes a sus procesos.» (MECI / MIPG)."
  },
  {
    "id": "ci_shared_dian_cbo_mipg_03",
    "nivel": "Profesional",
    "ejeId": "mipg_control_interno",
    "ejeNombre": "MIPG y Sistema de Control Interno (MECI)",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "MIPG - Dimensión 3: Gestión con Valores para Resultados (Ventanilla Hacia Adentro y Afuera)",
    "caso": "Para optimizar el flujo de los trámites aduaneros y tributarios, la DIAN rediseña sus procesos articulando los trámites internos de back-office con la atención presencial y virtual en front-office.",
    "enunciado": "En la estructura de la Dimensión de 'Gestión con Valores para Resultados' del MIPG, este abordaje integral se descompone en:",
    "opciones": [
      {
        "id": "A",
        "texto": "Ventanilla hacia adentro (gestión de procesos internos, compras y tecnologías) y Ventanilla hacia afuera (relación directa con el ciudadano, trámites, servicios y participación).",
        "explicacion": "Correcta. El MIPG concibe la gestión operativa en dos perspectivas complementarias: 'ventanilla hacia adentro' (procesos internos que soportan la entidad) y 'ventanilla hacia afuera' (entrega de bienes y servicios a los ciudadanos)."
      },
      {
        "id": "B",
        "texto": "Control policivo y cobro coactivo exclusivamente.",
        "explicacion": "Incorrecta. Reduce la gestión pública a medidas punitivas desconociendo la facilitación ciudadana."
      },
      {
        "id": "C",
        "texto": "Presupuesto anual y nómina de servidores exclusivamente.",
        "explicacion": "Incorrecta. No abarca el enfoque por procesos del modelo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Manual Operativo del MIPG (Dimensión 3: Gestión con Valores para Resultados)",
    "citaNormativa": "«La Dimensión Gestión con Valores para Resultados aborda los procesos desde dos perspectivas: Ventanilla hacia adentro (gestión operativa interna) y Ventanilla hacia afuera (relación y entrega efectiva de servicios a los ciudadanos).» (MIPG)."
  },
  {
    "id": "ci_shared_dian_cbo_mipg_04",
    "nivel": "Profesional",
    "ejeId": "mipg_control_interno",
    "ejeNombre": "MIPG y Sistema de Control Interno (MECI)",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "MIPG - Dimensión 6: Gestión del Conocimiento y la Innovación",
    "caso": "Ante la jubilación próxima de varios funcionarios expertos en fiscalización aduanera de hidrocarburos, la DIAN implementa un programa de bancos de buenas prácticas, comunidades de aprendizaje y manuales de lecciones aprendidas.",
    "enunciado": "Esta iniciativa se enmarca de manera directa en cuál dimensión del MIPG:",
    "opciones": [
      {
        "id": "A",
        "texto": "Dimensión 6: Gestión del Conocimiento y la Innovación, orientada a capturar, preservar, transferir y generar nuevo conocimiento institucional para evitar la fuga de saberes críticos.",
        "explicacion": "Correcta. La Dimensión de Gestión del Conocimiento y la Innovación busca que el saber y la experiencia acumulada por los servidores no se pierdan, sino que se documenten, transfieran e innoven en beneficio continuo del Estado."
      },
      {
        "id": "B",
        "texto": "Dimensión de Evaluación de Resultados exclusivamente.",
        "explicacion": "Incorrecta. La evaluación mide metas e indicadores cuantitativos, no la transferencia del conocimiento tácito."
      },
      {
        "id": "C",
        "texto": "Dimensión Financiera Contable.",
        "explicacion": "Incorrecta. No corresponde a la arquitectura de gestión del conocimiento de Función Pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017 (Dimensión 6 MIPG: Gestión del Conocimiento)",
    "citaNormativa": "«La Dimensión de Gestión del Conocimiento y la Innovación fortalece la memoria institucional, la analítica y el aprendizaje continuo para mejorar el desempeño del servicio público.» (MIPG)."
  },
  {
    "id": "ci_shared_dian_guias_org_01",
    "perfil": "GESTOR_III",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Orgánica y Misionalidad de la DIAN",
    "tema": "Naturaleza Jurídica y Fusión Histórica de la DIAN (Decreto 2117 de 1992 y Dec. 1071 de 1999)",
    "contexto": "Durante una controversia jurídica sobre la competencia para auditar operaciones que involucran tanto obligaciones arancelarias como obligaciones del impuesto sobre las ventas e IVA en operaciones exteriores, un apoderado alega que la DIAN carece de competencia unitaria al tratarse de ramas tributarias y aduaneras materialmente separadas.",
    "enunciado": "En su calidad de Gestor III de la Dirección de Gestión Jurídica de la DIAN, ¿cómo debe fundamentar orgánicamente la competencia integral de la Entidad?",
    "opciones": [
      {
        "id": "A",
        "texto": "Sostener que la DIAN es una Unidad Administrativa Especial del orden nacional, de carácter técnico y adscrita al Ministerio de Hacienda, creada por la fusión de la DIN y la DAN con competencia integral sobre tributos del orden nacional, aduaneros y régimen cambiario.",
        "explicacion": "Correcta. La DIAN fue creada como Unidad Administrativa Especial (UAE) mediante el Decreto 2117 de 1992, al fusionar el 1º de junio de 1993 la Dirección de Impuestos Nacionales (DIN) y la Dirección de Aduanas Nacionales (DAN), consolidada orgánicamente en el Decreto 1071 de 1999 y Decreto 4048 de 2008, con personería jurídica, autonomía y adscripción al Ministerio de Hacienda, ejerciendo la administración y control unitario de las obligaciones tributarias, aduaneras y cambiarias."
      },
      {
        "id": "B",
        "texto": "Argumentar que la DIAN es un establecimiento público descentralizado territorialmente con autonomía judicial plena e independencia jerárquica total respecto del Ministerio de Hacienda y Crédito Público.",
        "explicacion": "Incorrecta. La DIAN es una Unidad Administrativa Especial (UAE) del orden nacional, con personería jurídica y autonomía técnica, adscrita al Ministerio de Hacienda."
      },
      {
        "id": "C",
        "texto": "Reconocer que la DIAN solo tiene competencia tributaria interna, debiendo remitir el componente arancelario y aduanero al Ministerio de Comercio, Industria y Turismo para su liquidación final.",
        "explicacion": "Incorrecta. La DIAN concentra de forma unitaria la competencia tributaria, aduanera y cambiaria, sin fragmentación hacia otros ministerios."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La DIAN fue creada como Unidad Administrativa Especial (UAE) mediante el Decreto 2117 de 1992, al fusionar el 1º de junio de 1993 la Dirección de Impuestos Nacionales (DIN) y la Dirección de Aduanas Nacionales (DAN), consolidada orgánicamente en el Decreto 1071 de 1999 y Decreto 4048 de 2008, con personería jurídica, autonomía y adscripción al Ministerio de Hacienda, ejerciendo la administración y control unitario de las obligaciones tributarias, aduaneras y cambiarias.",
    "norma": "Decreto 2117 de 1992, Decreto 1071 de 1999 y Decreto 4048 de 2008, Art. 1",
    "citaNormativa": "La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales - DIAN, es una entidad adscrita al Ministerio de Hacienda y Crédito Público, con personería jurídica, autonomía administrativa y presupuestal, y con competencia en materia de impuestos del orden nacional, aduanera y control cambiario.",
    "dificultad": "ALTA",
    "competencia": "Estructura del Estado y Misionalidad DIAN",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_guias_org_02",
    "perfil": "GESTOR_III",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Orgánica y Misionalidad de la DIAN",
    "tema": "Distribución de Competencias: Nivel Central vs. Direcciones Seccionales de Grandes Contribuyentes",
    "contexto": "Una sociedad catalogada formalmente como 'Gran Contribuyente' mediante resolución de la Dirección General de la DIAN radica una solicitud de devolución de saldos a favor del impuesto sobre la renta ante una Dirección Seccional Delegada de una ciudad intermedia donde tiene una sucursal operativa menor.",
    "enunciado": "Como Gestor III que evalúa la admisibilidad del trámite, ¿qué actuación corresponde conforme a la distribución funcional del Decreto 4048 de 2008 y Decreto 1742 de 2020?",
    "opciones": [
      {
        "id": "A",
        "texto": "Asumir la sustanciación y trámite de la devolución en la Dirección Seccional Delegada por haber operado la radicación física dentro de su jurisdicción geográfica.",
        "explicacion": "Incorrecta. Carece de competencia material y funcional: los Grandes Contribuyentes están asignados por resolución expresa a la Dirección Seccional de Grandes Contribuyentes."
      },
      {
        "id": "B",
        "texto": "Remitir el expediente inmediatamente por competencia a la Dirección Seccional de Grandes Contribuyentes de Bogotá, notificando al contribuyente conforme al principio de competencia territorial y funcional de la DIAN.",
        "explicacion": "Correcta. Conforme a los Decretos 4048 de 2008 y 1742 de 2020, la Dirección Seccional de Grandes Contribuyentes tiene competencia privativa y preferente para la administración, fiscalización, liquidación, discusión y cobro de los tributos de los sujetos calificados en dicha categoría, por lo que cualquier actuación radicada en otra seccional debe remitirse a la dependencia competente sin vulnerar el debido proceso."
      },
      {
        "id": "C",
        "texto": "Rechazar de plano y definitivamente la solicitud de devolución mediante auto sancionatorio sin posibilidad de remitirla a la seccional competente.",
        "explicacion": "Incorrecta. Vulnera el debido proceso administrativo; cuando una petición se radica ante una dependencia sin competencia interna, debe remitirse a la dependencia competente."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Conforme a los Decretos 4048 de 2008 y 1742 de 2020, la Dirección Seccional de Grandes Contribuyentes tiene competencia privativa y preferente para la administración, fiscalización, liquidación, discusión y cobro de los tributos de los sujetos calificados en dicha categoría, por lo que cualquier actuación radicada en otra seccional debe remitirse a la dependencia competente sin vulnerar el debido proceso.",
    "norma": "Decreto 4048 de 2008, Art. 38 y Decreto 1742 de 2020 (Competencia Grandes Contribuyentes)",
    "citaNormativa": "La Dirección Seccional de Grandes Contribuyentes de Bogotá ejerce competencia sobre los contribuyentes, responsables o agentes de retención que mediante resolución sean calificados como tales.",
    "dificultad": "ALTA",
    "competencia": "Competencias Funcionales y Territoriales de la DIAN",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_guias_org_07",
    "perfil": "GESTOR_III",
    "ejeId": "mipg",
    "ejeNombre": "Transformación Digital y PETI DIAN",
    "tema": "PETI 2022-2025: Factura Electrónica con Validación Previa y Documento Equivalente (Res. 000165 de 2023)",
    "contexto": "En una visita de control de facturación, un establecimiento de comercio que emite tiquetes de máquina registradora con sistema POS para ventas que superan los montos autorizados por la DIAN, se niega a expedir factura electrónica con validación previa al comprador que la exige expresamente, alegando que el POS es suficiente soporte fiscal.",
    "enunciado": "En su rol de Gestor III en la fiscalización de facturación electrónica, ¿qué determinación legal debe fundamentar conforme al PETI y la Resolución 000165 de 2023?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar el tiquete POS como soporte válido de costos y deducciones sin importar la solicitud del adquiriente ni el valor de la operación.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Plan Estratégico de TI (PETI), el Art. 616-1 del E.T. y la Resolución 000165 de 2023 establecen la universalización del sistema de facturación electrónica con validación previa. El tiquete POS no otorga derecho a costos ni deducciones en el impuesto sobre la renta ni impuestos descontables en IVA, y cuando el comprador solicite la factura electrónica de venta, el emisor está obligado a expedirla con transmisión inmediata y validación previa por la DIAN."
      },
      {
        "id": "B",
        "texto": "Determinar el incumplimiento del deber formal de facturar, dado que si el adquirente exige la factura electrónica de venta, el obligado debe generarla y transmitirla con validación previa en tiempo real a la DIAN, y el tiquete POS sin validación no da derecho a costos ni deducciones en renta.",
        "explicacion": "Correcta. El Plan Estratégico de TI (PETI), el Art. 616-1 del E.T. y la Resolución 000165 de 2023 establecen la universalización del sistema de facturación electrónica con validación previa. El tiquete POS no otorga derecho a costos ni deducciones en el impuesto sobre la renta ni impuestos descontables en IVA, y cuando el comprador solicite la factura electrónica de venta, el emisor está obligado a expedirla con transmisión inmediata y validación previa por la DIAN."
      },
      {
        "id": "C",
        "texto": "Sancionar al comprador que solicitó la factura por entorpecer la actividad comercial del establecimiento.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Plan Estratégico de TI (PETI), el Art. 616-1 del E.T. y la Resolución 000165 de 2023 establecen la universalización del sistema de facturación electrónica con validación previa. El tiquete POS no otorga derecho a costos ni deducciones en el impuesto sobre la renta ni impuestos descontables en IVA, y cuando el comprador solicite la factura electrónica de venta, el emisor está obligado a expedirla con transmisión inmediata y validación previa por la DIAN."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Plan Estratégico de TI (PETI), el Art. 616-1 del E.T. y la Resolución 000165 de 2023 establecen la universalización del sistema de facturación electrónica con validación previa. El tiquete POS no otorga derecho a costos ni deducciones en el impuesto sobre la renta ni impuestos descontables en IVA, y cuando el comprador solicite la factura electrónica de venta, el emisor está obligado a expedirla con transmisión inmediata y validación previa por la DIAN.",
    "norma": "Estatuto Tributario Art. 616-1, PETI DIAN 2022-2025 y Resolución DIAN 000165 de 2023",
    "citaNormativa": "El documento equivalente generado por máquinas registradoras con sistema POS no otorga derecho a costos ni deducciones... Cuando el adquirente exija factura electrónica de venta, el emisor está en la obligación de expedirla cumpliendo las condiciones de validación previa.",
    "dificultad": "ALTA",
    "competencia": "Régimen Sancionatorio y Facturación Electrónica DIAN",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_guias_org_08",
    "perfil": "GESTOR_III",
    "ejeId": "mipg",
    "ejeNombre": "Transformación Digital y PETI DIAN",
    "tema": "Modelos Analíticos de Riesgo Fiscal y Cruces de Información Exógena (Art. 684-4 E.T.)",
    "contexto": "La Dirección de Gestión de Innovación y Tecnología, aplicando los lineamientos de analítica de datos del PETI 2022-2025, detecta mediante inteligencia de negocios algoritmos con discrepancias sistemáticas entre las facturas electrónicas de compra transmitidas por proveedores ficticios y los costos declarados por un grupo de sociedades inmobiliarias.",
    "enunciado": "Como Gestor III de la división de fiscalización, ¿cuál es la acción idónea para iniciar las actuaciones administrativas correspondientes?",
    "opciones": [
      {
        "id": "A",
        "texto": "Descartar los reportes automáticos por provenir de algoritmos computacionales y limitarse a esperar una denuncia física en papel.",
        "explicacion": "Incorrecta. La inacción u omisión de denuncia e investigación incumple los deberes misionales y compromete la responsabilidad del servidor público."
      },
      {
        "id": "B",
        "texto": "Incorporar las alertas y perfiles de riesgo del MGR (Modelo de Gestión de Riesgo) como insumo para proferir emplazamientos previos por inexactitud o requerimientos ordinarios de información, sustentados en la facultad del Art. 684-4 del Estatuto Tributario.",
        "explicacion": "Correcta. El Art. 684-4 del Estatuto Tributario y el eje de Analítica del PETI autorizan a la DIAN a implementar modelos de gestión de riesgo fundamentados en cruces informáticos y analítica de datos. La información extraída permite expedir pliegos de cargos, emplazamientos o requerimientos conforme a las etapas procesales regladas, respetando el debido proceso y la contradicción."
      },
      {
        "id": "C",
        "texto": "Clausurar inmediatamente las empresas inmobiliarias de manera indefinida sin otorgar término para responder ni practicar pliego de cargos.",
        "explicacion": "Incorrecta. La imposición de sanciones de plano sin pliego de cargos ni traslado para descargos vulnera el artículo 29 de la Constitución Política (debido proceso)."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Art. 684-4 del Estatuto Tributario y el eje de Analítica del PETI autorizan a la DIAN a implementar modelos de gestión de riesgo fundamentados en cruces informáticos y analítica de datos. La información extraída permite expedir pliegos de cargos, emplazamientos o requerimientos conforme a las etapas procesales regladas, respetando el debido proceso y la contradicción.",
    "norma": "Estatuto Tributario, Art. 684-4 y PETI DIAN 2022-2025 (Eje de Analítica de Datos)",
    "citaNormativa": "La Dirección de Impuestos y Aduanas Nacionales podrá utilizar la información recolectada de la factura electrónica, declaraciones y terceros, para el diseño de modelos de riesgo tendientes a identificar y fiscalizar a los contribuyentes que presenten inexactitudes o evasión.",
    "dificultad": "ALTA",
    "competencia": "Inteligencia Tributaria y Gestión del Riesgo",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_guias_org_09",
    "perfil": "GESTOR_III",
    "ejeId": "misionalidad",
    "ejeNombre": "Planeación Estratégica Institucional DIAN",
    "tema": "Misión y Visión DIAN: Seguridad Fiscal y Facilitación del Comercio Exterior",
    "contexto": "En la formulación del plan operativo anual de una Dirección Seccional, un equipo propone suprimir las actividades de orientación y facilitación al usuario, canalizando el 100% de los recursos humanos hacia redadas de decomiso directo sin previa orientación.",
    "enunciado": "Como Gestor III con funciones de planeación y control de gestión, ¿cómo debe reorientar esta propuesta conforme al Plan Estratégico Institucional de la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobar la propuesta porque la única razón de ser de la DIAN es la imposición coactiva de multas y sanciones a la ciudadanía.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Plan Estratégico Institucional de la DIAN y el Decreto 4048 de 2008 establecen que la misión institucional combina de manera armónica dos pilares: facilitar el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias, y al mismo tiempo combatir con rigor la evasión, el contrabando y la corrupción, asegurando la sostenibilidad fiscal de la Nación."
      },
      {
        "id": "B",
        "texto": "Alinear los objetivos equilibrando la facilitación del cumplimiento voluntario de las obligaciones con la lucha frontal contra el fraude y el contrabando, en concordancia con la misión de garantizar la sostenibilidad fiscal del Estado y facilitar el comercio legítimo.",
        "explicacion": "Correcta. El Plan Estratégico Institucional de la DIAN y el Decreto 4048 de 2008 establecen que la misión institucional combina de manera armónica dos pilares: facilitar el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias, y al mismo tiempo combatir con rigor la evasión, el contrabando y la corrupción, asegurando la sostenibilidad fiscal de la Nación."
      },
      {
        "id": "C",
        "texto": "Suspender todo tipo de control aduanero y tributario para no generar inconformidades entre los comerciantes de la región.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Plan Estratégico Institucional de la DIAN y el Decreto 4048 de 2008 establecen que la misión institucional combina de manera armónica dos pilares: facilitar el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias, y al mismo tiempo combatir con rigor la evasión, el contrabando y la corrupción, asegurando la sostenibilidad fiscal de la Nación."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Plan Estratégico Institucional de la DIAN y el Decreto 4048 de 2008 establecen que la misión institucional combina de manera armónica dos pilares: facilitar el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias, y al mismo tiempo combatir con rigor la evasión, el contrabando y la corrupción, asegurando la sostenibilidad fiscal de la Nación.",
    "norma": "Decreto 4048 de 2008, Art. 2 y Plan Estratégico Institucional DIAN 2023-2026",
    "citaNormativa": "La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales tiene como objeto coadyuvar a garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional, mediante la administración y control al debido cumplimiento de las obligaciones tributarias, aduaneras, cambiarias.",
    "dificultad": "MEDIA",
    "competencia": "Alineación Estratégica Institucional",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_guias_org_10",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Gestión del Talento Humano y Bienestar",
    "tema": "Plan Estratégico de Talento Humano y Bienestar DIAN 2023: Conciliación y Clima Laboral",
    "contexto": "Un superior jerárquico prohíbe de manera verbal y unilateral a los funcionarios de su división asistir a las jornadas semestrales institucionales de capacitación sobre bienestar y prevención de riesgos psicosociales aprobadas en el Plan de Bien-Estar DIAN 2023, alegando que dichas actividades carecen de valor laboral.",
    "enunciado": "Como Gestor III que asesora al Comité de Convivencia y Talento Humano, ¿cuál es el marco jurídico que ampara el derecho de los funcionarios?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la orden del jefe inmediato sin objeción, puesto que los planes de bienestar son facultativos y pueden cancelarse verbalmente por cualquier superior.",
        "explicacion": "Incorrecta. Los planes de capacitación y bienestar son mandatos legales del Sistema Específico de Carrera DIAN y del Decreto Ley 1567 de 1998."
      },
      {
        "id": "B",
        "texto": "Recordar que los programas de capacitación y bienestar laboral son mandatos legales del Sistema Específico de Carrera DIAN y del Decreto Ley 1567 de 1998, diseñados para garantizar el desarrollo integral, el clima laboral óptimo y la salud de los servidores públicos.",
        "explicacion": "Correcta. El Plan Estratégico de Talento Humano y Bien-Estar DIAN 2023 se fundamenta en el Decreto Ley 71 de 2020 y el Decreto Ley 1567 de 1998, los cuales obligan a las entidades públicas a formular e implementar programas de estímulos, bienestar social y capacitación como parte de los derechos de los servidores públicos para fomentar la calidad de vida laboral y el desempeño institucional."
      },
      {
        "id": "C",
        "texto": "Promover el abandono colectivo e indefinido de los puestos de trabajo de todos los funcionarios sin agotar los canales institucionales de concertación.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Plan Estratégico de Talento Humano y Bien-Estar DIAN 2023 se fundamenta en el Decreto Ley 71 de 2020 y el Decreto Ley 1567 de 1998, los cuales obligan a las entidades públicas a formular e implementar programas de estímulos, bienestar social y capacitación como parte de los derechos de los servidores públicos para fomentar la calidad de vida laboral y el desempeño institucional."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Plan Estratégico de Talento Humano y Bien-Estar DIAN 2023 se fundamenta en el Decreto Ley 71 de 2020 y el Decreto Ley 1567 de 1998, los cuales obligan a las entidades públicas a formular e implementar programas de estímulos, bienestar social y capacitación como parte de los derechos de los servidores públicos para fomentar la calidad de vida laboral y el desempeño institucional.",
    "norma": "Decreto Ley 71 de 2020, Art. 56 y Decreto Ley 1567 de 1998, Art. 13",
    "citaNormativa": "Los programas de bienestar social deben propender por la creación de condiciones favorables para el desarrollo integral del empleado y el mejoramiento de su nivel de vida y el de su familia.",
    "dificultad": "MEDIA",
    "competencia": "Políticas de Talento Humano y Bienestar Laboral",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_01",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Aporte Técnico-Profesional ante Cambios Normativos Complejos",
    "contexto": "La división de fiscalización donde usted labora se verá afectada de raíz por una reforma tributaria estructural que modifica sustancialmente el régimen sancionatorio y las liquidaciones oficiales. Estos cambios exigen rediseñar los procedimientos operativos y los formatos de pliegos de cargos.",
    "enunciado": "De acuerdo con las competencias del nivel profesional (Decreto 815 de 2018), ante esta situación usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Investiga con anterioridad la información disponible para estar prevenido ante posibles quejas de los usuarios.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La competencia de 'Aporte Técnico-Profesional' (Nivel Profesional - Decreto 815 de 2018) implica no solo conocer la norma, sino aplicar activamente los conocimientos técnicos especializados para generar soluciones innovadoras y metodologías que optimicen la gestión del área."
      },
      {
        "id": "B",
        "texto": "Espera a que la Dirección General emita instrucciones formales y mientras tanto continúa aplicando la normativa anterior.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La competencia de 'Aporte Técnico-Profesional' (Nivel Profesional - Decreto 815 de 2018) implica no solo conocer la norma, sino aplicar activamente los conocimientos técnicos especializados para generar soluciones innovadoras y metodologías que optimicen la gestión del área."
      },
      {
        "id": "C",
        "texto": "Estudia los cambios normativos anticipadamente y diseña una propuesta metodológica que facilite la transición operativa del equipo sin traumatismos en los términos procesales.",
        "explicacion": "Correcta. La competencia de 'Aporte Técnico-Profesional' (Nivel Profesional - Decreto 815 de 2018) implica no solo conocer la norma, sino aplicar activamente los conocimientos técnicos especializados para generar soluciones innovadoras y metodologías que optimicen la gestión del área."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "La competencia de 'Aporte Técnico-Profesional' (Nivel Profesional - Decreto 815 de 2018) implica no solo conocer la norma, sino aplicar activamente los conocimientos técnicos especializados para generar soluciones innovadoras y metodologías que optimicen la gestión del área.",
    "norma": "Decreto 815 de 2018 (Competencias Comportamentales del Nivel Profesional)",
    "citaNormativa": "Aporte Técnico-Profesional: Aplica el conocimiento profesional en la resolución de problemas y promueve el mejoramiento continuo de los procesos institucionales.",
    "dificultad": "ALTA",
    "competencia": "Aporte Técnico-Profesional",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_02",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Gestión de Procedimientos y Racionalización del Servicio",
    "contexto": "En el área de cobranzas se presentan cuellos de botella en la expedición de mandamientos de pago debido al exceso de impresiones y firmas físicas en expedientes que ya cuentan con trazabilidad electrónica en el sistema Muisca.",
    "enunciado": "Bajo la competencia de 'Gestión de Procedimientos', ¿cuál es la conducta más adecuada del Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Analizar el flujo integral del proceso, identificar actividades redundantes y formular un plan de racionalización apoyado en la firma digital para reducir los tiempos de respuesta.",
        "explicacion": "Correcta. La competencia de 'Gestión de Procedimientos' exige al profesional planificar, hacer seguimiento y ajustar continuamente las actividades para asegurar el cumplimiento eficiente, oportuno y con calidad de los objetivos de la entidad pública."
      },
      {
        "id": "B",
        "texto": "Aumentar su jornada laboral de manera no autorizada para imprimir más documentos físicos por día.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La competencia de 'Gestión de Procedimientos' exige al profesional planificar, hacer seguimiento y ajustar continuamente las actividades para asegurar el cumplimiento eficiente, oportuno y con calidad de los objetivos de la entidad pública."
      },
      {
        "id": "C",
        "texto": "Desentenderse de los retrasos argumentando que la culpa es exclusiva del sistema informático central.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La competencia de 'Gestión de Procedimientos' exige al profesional planificar, hacer seguimiento y ajustar continuamente las actividades para asegurar el cumplimiento eficiente, oportuno y con calidad de los objetivos de la entidad pública."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La competencia de 'Gestión de Procedimientos' exige al profesional planificar, hacer seguimiento y ajustar continuamente las actividades para asegurar el cumplimiento eficiente, oportuno y con calidad de los objetivos de la entidad pública.",
    "norma": "Decreto 815 de 2018 (Gestión de Procedimientos)",
    "citaNormativa": "Gestión de Procedimientos: Coordina, ejecuta y controla las actividades asignadas de acuerdo con los planes y programas institucionales, buscando la optimización de recursos.",
    "dificultad": "ALTA",
    "competencia": "Gestión de Procedimientos",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_03",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Instrumentación de Decisiones Basadas en Evidencia Técnica",
    "contexto": "Al evaluar la viabilidad de proferir una liquidación oficial de revisión por valor de $5.000 millones a una multinacional, existen presiones internas para archivar el caso con base en interpretaciones subjetivas sin soporte contable.",
    "enunciado": "En cumplimiento de la competencia de 'Instrumentación de Decisiones', usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Adopta la decisión fundándose rigurosamente en las pruebas contables, cruces exógenos y doctrina jurídica vinculante, estructurando un concepto técnico sólido e inobjetable.",
        "explicacion": "Correcta. La 'Instrumentación de Decisiones' en el nivel profesional consiste en tomar decisiones fundamentadas en información válida, objetiva y rigurosa, asumiendo la responsabilidad técnica de sus efectos legales y fiscales."
      },
      {
        "id": "B",
        "texto": "Archiva el expediente para evitar litigios futuros contra la administración tributaria.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Instrumentación de Decisiones' en el nivel profesional consiste en tomar decisiones fundamentadas en información válida, objetiva y rigurosa, asumiendo la responsabilidad técnica de sus efectos legales y fiscales."
      },
      {
        "id": "C",
        "texto": "Traslada la decisión a un comité informal sin dejar registro escrito ni sustento probatorio.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Instrumentación de Decisiones' en el nivel profesional consiste en tomar decisiones fundamentadas en información válida, objetiva y rigurosa, asumiendo la responsabilidad técnica de sus efectos legales y fiscales."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La 'Instrumentación de Decisiones' en el nivel profesional consiste en tomar decisiones fundamentadas en información válida, objetiva y rigurosa, asumiendo la responsabilidad técnica de sus efectos legales y fiscales.",
    "norma": "Decreto 815 de 2018 (Instrumentación de Decisiones)",
    "citaNormativa": "Instrumentación de Decisiones: Elige alternativas de acción viables, oportunas y sustentadas en información objetiva para resolver las situaciones que se presentan en el ejercicio de sus funciones.",
    "dificultad": "ALTA",
    "competencia": "Instrumentación de Decisiones",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_04",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Comunicación Efectiva y Asertiva ante Contribuyentes Exaltados",
    "contexto": "Un representante legal acude a la oficina jurídica sumamente disgustado por el embargo preventivo de sus cuentas bancarias, utilizando expresiones agresivas hacia los funcionarios de ventanilla.",
    "enunciado": "Como Gestor III, bajo la competencia de 'Comunicación Efectiva', su proceder debe ser:",
    "opciones": [
      {
        "id": "A",
        "texto": "Responderle en el mismo tono defensivo para hacer respetar la autoridad estatal.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Comunicación Efectiva' en el servicio público exige transmitir información de manera clara, oportuna y empática, manteniendo la calma ante situaciones de conflicto y garantizando la adecuada orientación ciudadana."
      },
      {
        "id": "B",
        "texto": "Escuchar activamente al ciudadano, mantener la serenidad y explicarle con claridad y lenguaje accesible los motivos jurídicos de la medida y los mecanismos legales que tiene para solicitar el desembargo.",
        "explicacion": "Correcta. La 'Comunicación Efectiva' en el servicio público exige transmitir información de manera clara, oportuna y empática, manteniendo la calma ante situaciones de conflicto y garantizando la adecuada orientación ciudadana."
      },
      {
        "id": "C",
        "texto": "Llamar a la fuerza pública de inmediato sin escuchar el motivo de la reclamación.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Comunicación Efectiva' en el servicio público exige transmitir información de manera clara, oportuna y empática, manteniendo la calma ante situaciones de conflicto y garantizando la adecuada orientación ciudadana."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Comunicación Efectiva' en el servicio público exige transmitir información de manera clara, oportuna y empática, manteniendo la calma ante situaciones de conflicto y garantizando la adecuada orientación ciudadana.",
    "norma": "Decreto 815 de 2018 (Comunicación Efectiva) y Política de Servicio al Ciudadano DIAN",
    "citaNormativa": "Comunicación Efectiva: Expresa las ideas de forma clara, asertiva y respetuosa, adaptando el lenguaje al interlocutor y facilitando la comprensión recíproca.",
    "dificultad": "MEDIA",
    "competencia": "Comunicación Efectiva",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_05",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Liderazgo de Grupos de Trabajo y Cohesión de Equipo",
    "contexto": "Se le asigna la coordinación de un equipo interdisciplinario (abogados y contadores) para auditar un complejo esquema de precios de transferencia. Entre los miembros del equipo surgen discrepancias sobre la metodología de análisis.",
    "enunciado": "Bajo la competencia de 'Liderazgo de Grupos de Trabajo', ¿cuál es su actuación idónea?",
    "opciones": [
      {
        "id": "A",
        "texto": "Imponer su criterio profesional de manera unilateral sin consultar la opinión técnica de los contadores.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Liderazgo de Grupos de Trabajo' implica guiar, coordinar y alinear los esfuerzos del equipo hacia el cumplimiento de las metas institucionales, promoviendo un clima participativo, sinérgico y de respeto técnico."
      },
      {
        "id": "B",
        "texto": "Convocar mesas técnicas de trabajo para concertar criterios, distribuir roles según las fortalezas individuales y motivar al equipo hacia el logro del objetivo común con metas claras.",
        "explicacion": "Correcta. El 'Liderazgo de Grupos de Trabajo' implica guiar, coordinar y alinear los esfuerzos del equipo hacia el cumplimiento de las metas institucionales, promoviendo un clima participativo, sinérgico y de respeto técnico."
      },
      {
        "id": "C",
        "texto": "Dejar que cada miembro actúe por su cuenta y que el informe final sea un mosaico desarticulado de opiniones contradictorias.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Liderazgo de Grupos de Trabajo' implica guiar, coordinar y alinear los esfuerzos del equipo hacia el cumplimiento de las metas institucionales, promoviendo un clima participativo, sinérgico y de respeto técnico."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Liderazgo de Grupos de Trabajo' implica guiar, coordinar y alinear los esfuerzos del equipo hacia el cumplimiento de las metas institucionales, promoviendo un clima participativo, sinérgico y de respeto técnico.",
    "norma": "Decreto 815 de 2018 (Liderazgo de Grupos de Trabajo)",
    "citaNormativa": "Liderazgo de Grupos de Trabajo: Orienta y motiva el trabajo colectivo hacia el logro de metas y resultados institucionales, fomentando el desarrollo de sus integrantes.",
    "dificultad": "ALTA",
    "competencia": "Liderazgo de Grupos de Trabajo",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_06",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Orientación a Resultados y Cumplimiento de Metas Institucionales",
    "contexto": "A falta de dos semanas para el cierre del trimestre, la seccional se encuentra al 85% de la meta de fiscalización asignada debido a retrasos en las notificaciones electrónicas de autos de inspección tributaria.",
    "enunciado": "Bajo la competencia de 'Orientación a Resultados', ¿qué acción prioritaria corresponde al Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Priorizar y reprogramar las acciones críticas de notificación, optimizar el uso de los sistemas de envío electrónico y concentrar los esfuerzos en los casos con mayor impacto fiscal para alcanzar la meta establecida.",
        "explicacion": "Correcta. La 'Orientación a Resultados' exige encaminar todos los actos hacia la consecución de los fines, metas y objetivos institucionales, con altos estándares de calidad, eficacia y sentido de urgencia."
      },
      {
        "id": "B",
        "texto": "Solicitar una rebaja de la meta argumentando que el trimestre fue más corto de lo habitual.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Orientación a Resultados' exige encaminar todos los actos hacia la consecución de los fines, metas y objetivos institucionales, con altos estándares de calidad, eficacia y sentido de urgencia."
      },
      {
        "id": "C",
        "texto": "Notificar actos incompletos o con fallas para inflar artificialmente las cifras de cierre.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Orientación a Resultados' exige encaminar todos los actos hacia la consecución de los fines, metas y objetivos institucionales, con altos estándares de calidad, eficacia y sentido de urgencia."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La 'Orientación a Resultados' exige encaminar todos los actos hacia la consecución de los fines, metas y objetivos institucionales, con altos estándares de calidad, eficacia y sentido de urgencia.",
    "norma": "Decreto 815 de 2018 (Orientación a Resultados)",
    "citaNormativa": "Orientación a Resultados: Realiza las funciones y tareas orientadas al logro de los objetivos institucionales y la satisfacción del usuario.",
    "dificultad": "ALTA",
    "competencia": "Orientación a Resultados",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_07",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Orientación al Usuario y Facilitación del Cumplimiento Tributario",
    "contexto": "Un contribuyente adulto mayor de escasos recursos acude a la sede seccional solicitando orientación sobre la devolución del saldo a favor de su declaración simplificada, manifestando que no sabe utilizar el portal web.",
    "enunciado": "Bajo la competencia de 'Orientación al Usuario y al Ciudadano', ¿cómo debe proceder el servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Indicarle de manera despectiva que todo se hace por internet y que si no sabe debe contratar a un contador.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Orientación al Usuario' es una competencia esencial del servidor público que busca satisfacer las necesidades de la ciudadanía con enfoque diferencial, accesibilidad, respeto, oportunidad y trato digno."
      },
      {
        "id": "B",
        "texto": "Atenderlo con calidez y paciencia, orientarlo paso a paso en el punto de contacto asistido y facilitarle la autogestión de su solicitud garantizando su derecho de acceso.",
        "explicacion": "Correcta. La 'Orientación al Usuario' es una competencia esencial del servidor público que busca satisfacer las necesidades de la ciudadanía con enfoque diferencial, accesibilidad, respeto, oportunidad y trato digno."
      },
      {
        "id": "C",
        "texto": "Cobrarle una tarifa personal para hacerle el trámite desde su cuenta privada.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Orientación al Usuario' es una competencia esencial del servidor público que busca satisfacer las necesidades de la ciudadanía con enfoque diferencial, accesibilidad, respeto, oportunidad y trato digno."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Orientación al Usuario' es una competencia esencial del servidor público que busca satisfacer las necesidades de la ciudadanía con enfoque diferencial, accesibilidad, respeto, oportunidad y trato digno.",
    "norma": "Decreto 815 de 2018 y Política Institucional de Cercanía al Ciudadano DIAN",
    "citaNormativa": "Orientación al Usuario: Dirige sus actuaciones hacia la atención prioritaria de las necesidades de los usuarios, con vocación de servicio.",
    "dificultad": "MEDIA",
    "competencia": "Orientación al Usuario y al Ciudadano",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_08",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Creatividad e Innovación en Métodos de Fiscalización",
    "contexto": "Los esquemas tradicionales de auditoría física no están logrando detectar maniobras complejas de venta informal a través de redes sociales y comercio electrónico no declarado.",
    "enunciado": "Bajo la competencia de 'Creatividad e Innovación', el profesional debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Proponer el uso de herramientas de analítica digital y cruces de datos con pasarelas de pago y operadores logísticos de envíos para rastrear transacciones digitales no declaradas.",
        "explicacion": "Correcta. La competencia de 'Creatividad e Innovación' implica generar alternativas novedosas y viables para mejorar los procesos y enfrentar desafíos emergentes en la administración tributaria y aduanera."
      },
      {
        "id": "B",
        "texto": "Concluir que el comercio electrónico no puede ser fiscalizado y descartar cualquier acción institucional.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La competencia de 'Creatividad e Innovación' implica generar alternativas novedosas y viables para mejorar los procesos y enfrentar desafíos emergentes en la administración tributaria y aduanera."
      },
      {
        "id": "C",
        "texto": "Prohibir el uso de internet a nivel nacional mediante un decreto interno.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La competencia de 'Creatividad e Innovación' implica generar alternativas novedosas y viables para mejorar los procesos y enfrentar desafíos emergentes en la administración tributaria y aduanera."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La competencia de 'Creatividad e Innovación' implica generar alternativas novedosas y viables para mejorar los procesos y enfrentar desafíos emergentes en la administración tributaria y aduanera.",
    "norma": "Decreto 815 de 2018 (Creatividad e Innovación)",
    "citaNormativa": "Creatividad e Innovación: Plantea soluciones alternativas y novedosas frente a las situaciones laborales, orientadas al mejoramiento de los procesos institucionales.",
    "dificultad": "ALTA",
    "competencia": "Creatividad e Innovación",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_09",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Adaptabilidad y Flexibilidad ante Reestructuraciones Administrativas",
    "contexto": "Mediante decreto del Gobierno Nacional se reestructura la dependencia donde usted labora, trasladando sus funciones tradicionales hacia una nueva división de gestión analítica con nuevas herramientas tecnológicas.",
    "enunciado": "Bajo la competencia de 'Adaptabilidad al Cambio', ¿cuál es la actitud profesional requerida?",
    "opciones": [
      {
        "id": "A",
        "texto": "Negarse a utilizar los nuevos aplicativos y radicar quejas permanentes contra la reestructuración.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Adaptabilidad al Cambio' faculta al servidor para ajustar su comportamiento y enfoque ante transformaciones en la estructura, procedimientos o tecnología de la entidad, manteniendo la productividad y motivación."
      },
      {
        "id": "B",
        "texto": "Asumir con disposición constructiva el cambio, capacitarse con rapidez en las nuevas metodologías y colaborar activamente en la puesta en marcha de la nueva división.",
        "explicacion": "Correcta. La 'Adaptabilidad al Cambio' faculta al servidor para ajustar su comportamiento y enfoque ante transformaciones en la estructura, procedimientos o tecnología de la entidad, manteniendo la productividad y motivación."
      },
      {
        "id": "C",
        "texto": "Solicitar una incapacidad médica prolongada para no participar en la transición.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Adaptabilidad al Cambio' faculta al servidor para ajustar su comportamiento y enfoque ante transformaciones en la estructura, procedimientos o tecnología de la entidad, manteniendo la productividad y motivación."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Adaptabilidad al Cambio' faculta al servidor para ajustar su comportamiento y enfoque ante transformaciones en la estructura, procedimientos o tecnología de la entidad, manteniendo la productividad y motivación.",
    "norma": "Decreto 815 de 2018 (Adaptabilidad)",
    "citaNormativa": "Adaptabilidad: Modifica su conducta ante situaciones cambiantes en su entorno laboral para responder eficientemente a los nuevos requerimientos.",
    "dificultad": "MEDIA",
    "competencia": "Adaptabilidad al Cambio",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_10",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Trabajo en Equipo y Manejo de Conflictos Interpersonales",
    "contexto": "Durante una jornada de conciliación de glosas contables, dos profesionales de su equipo discrepan fuertemente sobre el criterio de amortización de intangibles, paralizando el informe conjunto.",
    "enunciado": "Bajo la competencia de 'Trabajo en Equipo', ¿cómo debe intervenir el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tomar partido personal por el compañero más afín y descalificar públicamente al otro colega.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Trabajo en Equipo' promueve la cooperación, la confianza y la búsqueda conjunta de soluciones constructivas frente a discrepancias técnicas, anteponiendo los objetivos institucionales sobre posturas individuales."
      },
      {
        "id": "B",
        "texto": "Generar un espacio de diálogo técnico respetuoso, revisar la doctrina unificada de la DIAN y orientar la discusión hacia un consenso fundamentado en la ley.",
        "explicacion": "Correcta. El 'Trabajo en Equipo' promueve la cooperación, la confianza y la búsqueda conjunta de soluciones constructivas frente a discrepancias técnicas, anteponiendo los objetivos institucionales sobre posturas individuales."
      },
      {
        "id": "C",
        "texto": "Desentenderse del conflicto y esperar a que la jefatura sancione a ambos funcionarios.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Trabajo en Equipo' promueve la cooperación, la confianza y la búsqueda conjunta de soluciones constructivas frente a discrepancias técnicas, anteponiendo los objetivos institucionales sobre posturas individuales."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Trabajo en Equipo' promueve la cooperación, la confianza y la búsqueda conjunta de soluciones constructivas frente a discrepancias técnicas, anteponiendo los objetivos institucionales sobre posturas individuales.",
    "norma": "Decreto 815 de 2018 (Trabajo en Equipo)",
    "citaNormativa": "Trabajo en Equipo: Coopera con los demás para alcanzar los objetivos comunes, propiciando un ambiente armónico y constructivo.",
    "dificultad": "MEDIA",
    "competencia": "Trabajo en Equipo",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_11",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Toma de Decisiones Éticas bajo Presión Laboral",
    "contexto": "Un superior jerárquico le insinúa verbalmente a un auditor acelerar y aprobar una devolución millonaria sin verificar los libros contables, argumentando que el solicitante es una figura política influyente.",
    "enunciado": "Conforme a los principios de juicio moral y ética pública del servidor, usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobar la devolución de inmediato para evitar roces laborales y asegurar su permanencia.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La integridad ética y la toma de decisiones objetiva obligan al servidor público a anteponer el interés general y la legalidad sobre presiones indebidas, garantizando la igualdad y la protección del patrimonio público."
      },
      {
        "id": "B",
        "texto": "Rechazar cualquier trato preferencial injustificado, exigir la verificación probatoria estricta de los soportes y sustentar el informe por escrito de forma técnica y transparente.",
        "explicacion": "Correcta. La integridad ética y la toma de decisiones objetiva obligan al servidor público a anteponer el interés general y la legalidad sobre presiones indebidas, garantizando la igualdad y la protección del patrimonio público."
      },
      {
        "id": "C",
        "texto": "Filtrar los documentos confidenciales a la prensa de manera anónima sin tramitar el expediente.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La integridad ética y la toma de decisiones objetiva obligan al servidor público a anteponer el interés general y la legalidad sobre presiones indebidas, garantizando la igualdad y la protección del patrimonio público."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La integridad ética y la toma de decisiones objetiva obligan al servidor público a anteponer el interés general y la legalidad sobre presiones indebidas, garantizando la igualdad y la protección del patrimonio público.",
    "norma": "Código de Integridad del Servicio Público y Ley 1952 de 2019",
    "citaNormativa": "Deber de imparcialidad: El servidor debe actuar sin favoritismos, garantizando que sus decisiones se sustenten exclusivamente en el ordenamiento legal.",
    "dificultad": "ALTA",
    "competencia": "Integridad y Razonamiento Moral",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_12",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Planeación y Organización de Tareas Complejas",
    "contexto": "Se le asigna simultáneamente la sustanciación de 15 recursos de reconsideración en materia aduanera que están próximos a vencerse por silencio administrativo positivo en diferentes fechas del mes.",
    "enunciado": "Bajo la competencia de 'Planeación', ¿cuál es la mejor estrategia operativa?",
    "opciones": [
      {
        "id": "A",
        "texto": "Elaborar un cronograma de trabajo priorizando los expedientes por orden estricto de vencimiento de términos, identificando las pruebas pendientes y asignando tiempos específicos a cada proyecto.",
        "explicacion": "Correcta. La 'Planeación' permite anticipar requerimientos, definir prioridades críticas en función de plazos perentorios y optimizar los tiempos de ejecución para evitar el acaecimiento de silencios administrativos perjudiciales para la administración."
      },
      {
        "id": "B",
        "texto": "Comenzar por el expediente más fácil y dejar los complejos para el último día hábil.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Planeación' permite anticipar requerimientos, definir prioridades críticas en función de plazos perentorios y optimizar los tiempos de ejecución para evitar el acaecimiento de silencios administrativos perjudiciales para la administración."
      },
      {
        "id": "C",
        "texto": "Solicitar una prórroga colectiva de términos que la ley aduanera no contempla.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Planeación' permite anticipar requerimientos, definir prioridades críticas en función de plazos perentorios y optimizar los tiempos de ejecución para evitar el acaecimiento de silencios administrativos perjudiciales para la administración."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La 'Planeación' permite anticipar requerimientos, definir prioridades críticas en función de plazos perentorios y optimizar los tiempos de ejecución para evitar el acaecimiento de silencios administrativos perjudiciales para la administración.",
    "norma": "Decreto 815 de 2018 (Planeación) y Estatuto Aduanero (Silencio Administrativo)",
    "citaNormativa": "Planeación: Diseña y estructura las actividades de manera anticipada, ordenando los recursos disponibles para alcanzar los resultados previstos.",
    "dificultad": "ALTA",
    "competencia": "Planeación y Organización",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_13",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Pensamiento Estratégico y Visión Global de la DIAN",
    "contexto": "En una mesa técnica de formulación de indicadores de control aduanero, se discute si el éxito se mide únicamente por el valor de mercancías incautadas en pasos fronterizos o por la reducción global del contrabando en la economía formal.",
    "enunciado": "Bajo la competencia de 'Pensamiento Estratégico', el Gestor III debe orientar la visión hacia:",
    "opciones": [
      {
        "id": "A",
        "texto": "Medir exclusivamente operativos de choque aislados sin importar su impacto a largo plazo.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Pensamiento Estratégico' permite al profesional comprender la interrelación entre las funciones específicas de su cargo y los grandes objetivos del Estado, anticipando escenarios de impacto macroeconómico y social."
      },
      {
        "id": "B",
        "texto": "Conectar los controles aduaneros operativos con la formalización del comercio, la seguridad de las cadenas de suministro y el impacto en la competitividad y recaudo nacional sostenible.",
        "explicacion": "Correcta. El 'Pensamiento Estratégico' permite al profesional comprender la interrelación entre las funciones específicas de su cargo y los grandes objetivos del Estado, anticipando escenarios de impacto macroeconómico y social."
      },
      {
        "id": "C",
        "texto": "Suprimir los controles aduaneros para favorecer el consumo sin restricciones.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Pensamiento Estratégico' permite al profesional comprender la interrelación entre las funciones específicas de su cargo y los grandes objetivos del Estado, anticipando escenarios de impacto macroeconómico y social."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Pensamiento Estratégico' permite al profesional comprender la interrelación entre las funciones específicas de su cargo y los grandes objetivos del Estado, anticipando escenarios de impacto macroeconómico y social.",
    "norma": "Decreto 815 de 2018 (Pensamiento Estratégico) y Plan Estratégico DIAN",
    "citaNormativa": "Pensamiento Estratégico: Comprende y analiza los factores del entorno para alinear las acciones del área con las metas y la misión institucional.",
    "dificultad": "ALTA",
    "competencia": "Pensamiento Estratégico",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_14",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Aprendizaje Continuo y Actualización Profesional Autónoma",
    "contexto": "La expedición de nuevos decretos reglamentarios sobre precios de transferencia e inteligencia artificial aplicada al recaudo no ha sido objeto aún de capacitaciones formales por parte de la entidad.",
    "enunciado": "Bajo la competencia de 'Aprendizaje Continuo', el servidor debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Abstenerse de resolver expedientes de esa temática hasta que la DIAN le financie un posgrado especializado.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Aprendizaje Continuo' impulsa al servidor público a adquirir y actualizar constantemente sus competencias técnicas y normativas, aplicando el conocimiento adquirido en beneficio de la excelencia institucional."
      },
      {
        "id": "B",
        "texto": "Asumir la iniciativa de autoaprendizaje, estudiar de forma autónoma la jurisprudencia, doctrina y fuentes oficiales, y compartir los conocimientos adquiridos con su equipo.",
        "explicacion": "Correcta. El 'Aprendizaje Continuo' impulsa al servidor público a adquirir y actualizar constantemente sus competencias técnicas y normativas, aplicando el conocimiento adquirido en beneficio de la excelencia institucional."
      },
      {
        "id": "C",
        "texto": "Delegar todos los casos complejos a los funcionarios provisionales recién ingresados.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El 'Aprendizaje Continuo' impulsa al servidor público a adquirir y actualizar constantemente sus competencias técnicas y normativas, aplicando el conocimiento adquirido en beneficio de la excelencia institucional."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Aprendizaje Continuo' impulsa al servidor público a adquirir y actualizar constantemente sus competencias técnicas y normativas, aplicando el conocimiento adquirido en beneficio de la excelencia institucional.",
    "norma": "Decreto 815 de 2018 (Aprendizaje Continuo)",
    "citaNormativa": "Aprendizaje Continuo: Identifica y adquiere conocimientos relevantes para su desarrollo profesional y el mejoramiento de su gestión laboral.",
    "dificultad": "MEDIA",
    "competencia": "Aprendizaje Continuo",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_comp_adv_15",
    "perfil": "GESTOR_III",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Experticia Técnica en la Resolución de Casos Complejos",
    "contexto": "En una discusión técnica sobre la deducibilidad de regalías en contratos de explotación de recursos naturales no renovables, se presentan posiciones doctrinales divergentes.",
    "enunciado": "Bajo la competencia de 'Experticia Técnica', ¿cómo debe fundamentar su concepto el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Emitir una opinión rápida basada en intuición personal sin revisar las sentencias de unificación de la Corte Constitucional ni del Consejo de Estado.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Experticia Técnica' se traduce en el dominio especializado de la disciplina y el marco normativo, permitiendo resolver problemas complejos con criterio jurídico y técnico de alta precisión."
      },
      {
        "id": "B",
        "texto": "Aplicar con rigor y profundidad los precedentes jurisprudenciales obligatorios, las normas tributarias vigentes y los principios de hermenéutica jurídica, estructurando un análisis coherente e irrebatible.",
        "explicacion": "Correcta. La 'Experticia Técnica' se traduce en el dominio especializado de la disciplina y el marco normativo, permitiendo resolver problemas complejos con criterio jurídico y técnico de alta precisión."
      },
      {
        "id": "C",
        "texto": "Copiar textualmente un concepto obsoleto emitido hace diez años antes de la reforma legal.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La 'Experticia Técnica' se traduce en el dominio especializado de la disciplina y el marco normativo, permitiendo resolver problemas complejos con criterio jurídico y técnico de alta precisión."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Experticia Técnica' se traduce en el dominio especializado de la disciplina y el marco normativo, permitiendo resolver problemas complejos con criterio jurídico y técnico de alta precisión.",
    "norma": "Decreto 815 de 2018 (Experticia Técnica)",
    "citaNormativa": "Experticia Técnica: Domina y aplica los conocimientos especializados propios de su campo laboral en el análisis y solución de problemas.",
    "dificultad": "ALTA",
    "competencia": "Experticia Técnica",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_01",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Honestidad: Reconocimiento Abierto de Errores Operativos",
    "contexto": "Al proyectar una liquidación oficial, usted comete un error en la digitación de la tarifa aplicable que favorece involuntariamente al contribuyente en una suma millonaria. El documento aún no ha sido notificado pero ya fue firmado por su jefe inmediato.",
    "enunciado": "Conforme a los principios de moralidad pública y el valor institucional de la HONESTIDAD, usted debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Ocultar el error y permitir la notificación del acto para evitar un llamado de atención de su superior.",
        "explicacion": "Incorrecta. Ocultar o alterar información vulnera frontalmente el valor de la Honestidad y el principio de transparencia del servidor público."
      },
      {
        "id": "B",
        "texto": "Informar de inmediato a su jefe sobre el error cometido, asumiendo con transparencia la equivocación y gestionando la corrección del acto antes de su notificación legal.",
        "explicacion": "Correcta. El valor de la HONESTIDAD en el Código de Integridad del Servicio Público establece: 'Siempre digo la verdad, incluso cuando cometo errores, porque es humano cometerlos pero no es correcto esconderlos'. Actuar con transparencia protege el patrimonio público y la validez de los actos administrativos."
      },
      {
        "id": "C",
        "texto": "Alterar el archivo digital en secreto y culpar a un compañero de la falla en el sistema.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor de la HONESTIDAD en el Código de Integridad del Servicio Público establece: 'Siempre digo la verdad, incluso cuando cometo errores, porque es humano cometerlos pero no es correcto esconderlos'. Actuar con transparencia protege el patrimonio público y la validez de los actos administrativos."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor de la HONESTIDAD en el Código de Integridad del Servicio Público establece: 'Siempre digo la verdad, incluso cuando cometo errores, porque es humano cometerlos pero no es correcto esconderlos'. Actuar con transparencia protege el patrimonio público y la validez de los actos administrativos.",
    "norma": "Código de Integridad del Servicio Público (Función Pública / DIAN) - Valor Honestidad",
    "citaNormativa": "Honestidad: Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y siempre favoreciendo el interés general.",
    "dificultad": "ALTA",
    "competencia": "Honestidad y Moralidad Pública",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_02",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Honestidad: Rechazo Rotundo a Dádivas e Incentivos Indebidos",
    "contexto": "El apoderado de una empresa investigada por contrabando se presenta en su oficina ofreciéndole una tarjeta de regalo de alto valor y boletos para un viaje internacional como 'muestra de agradecimiento por su cordial atención'.",
    "enunciado": "Frente a este ofrecimiento, su proceder ético y legal inmediato debe ser:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar los boletos argumentando que se trata de una cortesía privada sin compromiso formal.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad prohíbe tajantemente recibir favores, regalos o incentivos: 'No acepto incentivos, favores ni ningún otro tipo de beneficio que me ofrezcan personas interesadas en un proceso de toma de decisiones'. Dicha conducta configura además posibles delitos contra la administración pública (cohecho)."
      },
      {
        "id": "B",
        "texto": "Rechazar categóricamente el beneficio, advertirle sobre la ilegalidad de su conducta y reportar de inmediato el hecho ante la Oficina de Control Disciplinario Interno y la Fiscalía.",
        "explicacion": "Correcta. El Código de Integridad prohíbe tajantemente recibir favores, regalos o incentivos: 'No acepto incentivos, favores ni ningún otro tipo de beneficio que me ofrezcan personas interesadas en un proceso de toma de decisiones'. Dicha conducta configura además posibles delitos contra la administración pública (cohecho)."
      },
      {
        "id": "C",
        "texto": "Guardar silencio y recibir el obsequio a nombre de todo el grupo de trabajo.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad prohíbe tajantemente recibir favores, regalos o incentivos: 'No acepto incentivos, favores ni ningún otro tipo de beneficio que me ofrezcan personas interesadas en un proceso de toma de decisiones'. Dicha conducta configura además posibles delitos contra la administración pública (cohecho)."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad prohíbe tajantemente recibir favores, regalos o incentivos: 'No acepto incentivos, favores ni ningún otro tipo de beneficio que me ofrezcan personas interesadas en un proceso de toma de decisiones'. Dicha conducta configura además posibles delitos contra la administración pública (cohecho).",
    "norma": "Código de Integridad - Valor Honestidad y Ley 1952 de 2019, Art. 38",
    "citaNormativa": "Lo que no hago en Honestidad: No acepto incentivos, favores, ni ningún otro tipo de beneficio que me ofrezcan personas o grupos que estén interesados en un proceso de toma de decisiones.",
    "dificultad": "ALTA",
    "competencia": "Honestidad y Conflicto de Interés",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_03",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Respeto: Trato Digno e Inclusivo ante Perspectivas Diversas",
    "contexto": "Durante una mesa técnica de discusión institucional, un servidor recién posesionado expone una tesis interpretativa que contradice la costumbre operativa arraigada de los funcionarios más antiguos.",
    "enunciado": "Bajo el valor del RESPETO del Código de Integridad, el equipo debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Burlarse del nuevo funcionario y excluirlo de las futuras reuniones de trabajo.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor del RESPETO establece: 'Reconozco, valoro y trato de manera digna a todas las personas... Abro la ventana del diálogo y la comprensión, a pesar de que los demás tengan perspectivas y opiniones distintas a las mías'."
      },
      {
        "id": "B",
        "texto": "Escuchar con atención y apertura los argumentos planteados, debatiendo sobre el mérito técnico de la idea con consideración y cortesía, sin importar la antigüedad del interlocutor.",
        "explicacion": "Correcta. El valor del RESPETO establece: 'Reconozco, valoro y trato de manera digna a todas las personas... Abro la ventana del diálogo y la comprensión, a pesar de que los demás tengan perspectivas y opiniones distintas a las mías'."
      },
      {
        "id": "C",
        "texto": "Exigirle que guarde silencio hasta que cumpla al menos 5 años de servicio en la entidad.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor del RESPETO establece: 'Reconozco, valoro y trato de manera digna a todas las personas... Abro la ventana del diálogo y la comprensión, a pesar de que los demás tengan perspectivas y opiniones distintas a las mías'."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor del RESPETO establece: 'Reconozco, valoro y trato de manera digna a todas las personas... Abro la ventana del diálogo y la comprensión, a pesar de que los demás tengan perspectivas y opiniones distintas a las mías'.",
    "norma": "Código de Integridad del Servicio Público - Valor Respeto",
    "citaNormativa": "Respeto: Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, títulos o cualquier otra condición.",
    "dificultad": "MEDIA",
    "competencia": "Respeto y Convivencia Laboral",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_04",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Compromiso: Disposición al Servicio y Bien Común",
    "contexto": "El último día del vencimiento de la declaración de renta se presenta una caída temporal del sistema en los servidores seccionales. Finalizada la jornada formal de trabajo, decenas de contribuyentes permanecen a la espera de radicación en la sede física.",
    "enunciado": "Bajo el valor institucional del COMPROMISO, ¿cuál es la conducta esperada del funcionario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Cerrar inmediatamente las ventanillas en punto de las 5:00 p.m. y marcharse ignorando la contingencia ciudadana.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor del COMPROMISO exige: 'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores'."
      },
      {
        "id": "B",
        "texto": "Asumir con empatía y sentido de servicio la situación, coordinar con la jefatura la recepción manual o radicación de contingencia y atender a los ciudadanos presentes para evitarles sanciones injustas.",
        "explicacion": "Correcta. El valor del COMPROMISO exige: 'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores'."
      },
      {
        "id": "C",
        "texto": "Apagar las luces de la sala de espera para presionar la salida de los usuarios.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor del COMPROMISO exige: 'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores'."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor del COMPROMISO exige: 'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores'.",
    "norma": "Código de Integridad - Valor Compromiso y Estatuto Tributario (Régimen de Contingencia)",
    "citaNormativa": "Compromiso: Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas.",
    "dificultad": "MEDIA",
    "competencia": "Compromiso con el Servicio Público",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_05",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Diligencia: Seguridad de Equipos y Protección de Claves de Acceso",
    "contexto": "Al salir a almorzar, un funcionario olvida bloquear su computador de trabajo, dejando expuesta una consulta activa del sistema con datos patrimoniales reservados de ciudadanos. Al regresar, nota que alguien manipuló su equipo.",
    "enunciado": "Conforme al valor de la DILIGENCIA y la moralidad pública, el funcionario debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Guardar silencio para no ser sancionado disciplinariamente por el descuido.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor de la DILIGENCIA impone: 'Uso responsablemente los recursos informáticos y protejo la información a mi cargo'. Ante un incidente de seguridad, actuar con celeridad y reporte transparente es un imperativo ético indispensable para mitigar riesgos sobre la reserva legal."
      },
      {
        "id": "B",
        "texto": "Reportar de inmediato la inconsistencia al oficial de seguridad de la información y a su jefe inmediato, solicitando el cambio urgente de credenciales y auditoría de accesos.",
        "explicacion": "Correcta. El valor de la DILIGENCIA impone: 'Uso responsablemente los recursos informáticos y protejo la información a mi cargo'. Ante un incidente de seguridad, actuar con celeridad y reporte transparente es un imperativo ético indispensable para mitigar riesgos sobre la reserva legal."
      },
      {
        "id": "C",
        "texto": "Borrar el historial de navegación para fingir que la máquina estuvo apagada.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor de la DILIGENCIA impone: 'Uso responsablemente los recursos informáticos y protejo la información a mi cargo'. Ante un incidente de seguridad, actuar con celeridad y reporte transparente es un imperativo ético indispensable para mitigar riesgos sobre la reserva legal."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor de la DILIGENCIA impone: 'Uso responsablemente los recursos informáticos y protejo la información a mi cargo'. Ante un incidente de seguridad, actuar con celeridad y reporte transparente es un imperativo ético indispensable para mitigar riesgos sobre la reserva legal.",
    "norma": "Código de Integridad - Valor Diligencia y Política de Seguridad de la Información DIAN",
    "citaNormativa": "Diligencia: Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia.",
    "dificultad": "ALTA",
    "competencia": "Diligencia y Responsabilidad Pública",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_06",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Justicia: Imparcialidad y Ausencia de Favoritismos",
    "contexto": "Un primo hermano de un funcionario radica una solicitud de devolución de impuestos con inconsistencias formales evidentes, solicitándole telefónicamente 'darle una mano aprobando el trámite rápido'.",
    "enunciado": "Bajo el valor de la JUSTICIA y las normas de conflicto de intereses, el servidor debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobarle la solicitud por tratarse de un lazo familiar sagrado.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor de la JUSTICIA dispone: 'Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación'. El conflicto de interés derivado del parentesco hasta el cuarto grado de consanguinidad obliga al funcionario a manifestar su impedimento legal."
      },
      {
        "id": "B",
        "texto": "Declararse impedido de inmediato conforme al Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA), remitiendo el expediente a su superior para que asigne otro funcionario.",
        "explicacion": "Correcta. El valor de la JUSTICIA dispone: 'Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación'. El conflicto de interés derivado del parentesco hasta el cuarto grado de consanguinidad obliga al funcionario a manifestar su impedimento legal."
      },
      {
        "id": "C",
        "texto": "Archivar el expediente sin auto ni justificación.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El valor de la JUSTICIA dispone: 'Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación'. El conflicto de interés derivado del parentesco hasta el cuarto grado de consanguinidad obliga al funcionario a manifestar su impedimento legal."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor de la JUSTICIA dispone: 'Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación'. El conflicto de interés derivado del parentesco hasta el cuarto grado de consanguinidad obliga al funcionario a manifestar su impedimento legal.",
    "norma": "Código de Integridad - Valor Justicia y Ley 1437 de 2011, Art. 11 (Causales de Impedimento)",
    "citaNormativa": "Justicia: Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación... Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables.",
    "dificultad": "ALTA",
    "competencia": "Justicia e Imparcialidad",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_07",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Uso debido de los Bienes y Recursos Públicos del Estado",
    "contexto": "En una oficina seccional, un funcionario utiliza de forma cotidiana la impresora institucional, resmas de papel de la DIAN y el vehículo oficial asignado para imprimir publicidad de un negocio comercial privado de su cónyuge.",
    "enunciado": "Frente a este uso de recursos estatales, el marco ético de la función pública determina que:",
    "opciones": [
      {
        "id": "A",
        "texto": "Es una práctica admisible siempre que el funcionario no descuide su horario de trabajo.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad es taxativo: 'No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos (esto incluye el tiempo laboral, elementos y bienes asignados)'. Dicho acto constituye falta disciplinaria gravísima."
      },
      {
        "id": "B",
        "texto": "Es una infracción grave al deber de honestidad y diligencia, pues los recursos públicos no deben destinarse a fines particulares o familiares, acarreando responsabilidad disciplinaria y fiscal.",
        "explicacion": "Correcta. El Código de Integridad es taxativo: 'No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos (esto incluye el tiempo laboral, elementos y bienes asignados)'. Dicho acto constituye falta disciplinaria gravísima."
      },
      {
        "id": "C",
        "texto": "Debe autorizarse formalmente por la Comisión de Personal para fomentar el emprendimiento familiar.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad es taxativo: 'No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos (esto incluye el tiempo laboral, elementos y bienes asignados)'. Dicho acto constituye falta disciplinaria gravísima."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad es taxativo: 'No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos (esto incluye el tiempo laboral, elementos y bienes asignados)'. Dicho acto constituye falta disciplinaria gravísima.",
    "norma": "Código de Integridad - Valor Honestidad y Ley 1952 de 2019, Art. 38",
    "citaNormativa": "Lo que no hago en Honestidad: No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos.",
    "dificultad": "MEDIA",
    "competencia": "Custodia de Bienes Públicos",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_08",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Razonamiento Moral Posconvencional: Prevalencia del Interés General",
    "contexto": "Se discute la aplicación de una directiva interna que recomienda no fiscalizar a medianas empresas de cierta región para no perjudicar índices políticos locales, a pesar de constatarse graves indicios de evasión sistemática de IVA.",
    "enunciado": "Desde la perspectiva del razonamiento moral de Lawrence Kohlberg y el Código de Integridad, el servidor debe actuar guiado por:",
    "opciones": [
      {
        "id": "A",
        "texto": "El nivel preconvencional: obedecer ciegamente la directiva únicamente para evitar castigos o sanciones de sus superiores.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Las pruebas de integridad de la CNSC evalúan el razonamiento moral según la escala de Kohlberg. El nivel posconvencional (el más alto y deseable en servidores públicos) guía el comportamiento mediante principios éticos universales, el deber constitucional y la primacía del bien común por encima de presiones coyunturales o intereses particulares."
      },
      {
        "id": "B",
        "texto": "El nivel convencional: seguir la costumbre mayoritaria del grupo sin cuestionar la legalidad de la orden.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Las pruebas de integridad de la CNSC evalúan el razonamiento moral según la escala de Kohlberg. El nivel posconvencional (el más alto y deseable en servidores públicos) guía el comportamiento mediante principios éticos universales, el deber constitucional y la primacía del bien común por encima de presiones coyunturales o intereses particulares."
      },
      {
        "id": "C",
        "texto": "El nivel posconvencional: defender los principios constitucionales de igualdad, legalidad y moralidad pública, haciendo prevalecer el interés general y el mandato imperativo de la ley sobre directrices arbitrarias.",
        "explicacion": "Correcta. Las pruebas de integridad de la CNSC evalúan el razonamiento moral según la escala de Kohlberg. El nivel posconvencional (el más alto y deseable en servidores públicos) guía el comportamiento mediante principios éticos universales, el deber constitucional y la primacía del bien común por encima de presiones coyunturales o intereses particulares."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "Las pruebas de integridad de la CNSC evalúan el razonamiento moral según la escala de Kohlberg. El nivel posconvencional (el más alto y deseable en servidores públicos) guía el comportamiento mediante principios éticos universales, el deber constitucional y la primacía del bien común por encima de presiones coyunturales o intereses particulares.",
    "norma": "Constitución Política de 1991, Art. 209 (Principios de la Función Administrativa) y Código de Integridad",
    "citaNormativa": "La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.",
    "dificultad": "ALTA",
    "competencia": "Razonamiento Moral Posconvencional",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_09",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Transparencia y Acceso a la Información vs. Negativa Injustificada",
    "contexto": "Un periodista ciudadano solicita formalmente copia de los informes de auditoría sobre cumplimiento de metas de recaudo de la seccional de los últimos 2 años. Un directivo sugiere no entregar los datos aduciendo que la prensa busca perjudicar la imagen de la administración.",
    "enunciado": "Bajo los preceptos de honestidad y el principio de máxima publicidad (Ley 1712 de 2014), el Gestor III debe orientar la respuesta hacia:",
    "opciones": [
      {
        "id": "A",
        "texto": "Negar la información sin motivación legal inventando una causal inexistente de reserva de seguridad nacional.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad establece: 'Facilito el acceso a la información pública, completa, veraz, oportuna y comprensible'. Salvo las excepciones taxativas de ley (reserva tributaria individual del Art. 583 E.T.), la información institucional sobre gestión y metas es pública por mandato de la Ley 1712 de 2014."
      },
      {
        "id": "B",
        "texto": "Garantizar la entrega oportuna y completa de la información pública requerida, toda vez que los informes de gestión no están amparados por reserva legal tributaria y rige el principio de máxima divulgación.",
        "explicacion": "Correcta. El Código de Integridad establece: 'Facilito el acceso a la información pública, completa, veraz, oportuna y comprensible'. Salvo las excepciones taxativas de ley (reserva tributaria individual del Art. 583 E.T.), la información institucional sobre gestión y metas es pública por mandato de la Ley 1712 de 2014."
      },
      {
        "id": "C",
        "texto": "Cobrar una suma exorbitante por cada copia para desmotivar al peticionario.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad establece: 'Facilito el acceso a la información pública, completa, veraz, oportuna y comprensible'. Salvo las excepciones taxativas de ley (reserva tributaria individual del Art. 583 E.T.), la información institucional sobre gestión y metas es pública por mandato de la Ley 1712 de 2014."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad establece: 'Facilito el acceso a la información pública, completa, veraz, oportuna y comprensible'. Salvo las excepciones taxativas de ley (reserva tributaria individual del Art. 583 E.T.), la información institucional sobre gestión y metas es pública por mandato de la Ley 1712 de 2014.",
    "norma": "Ley 1712 de 2014, Art. 2 y Código de Integridad - Valor Honestidad",
    "citaNormativa": "Principio de máxima publicidad: Toda información en posesión, custodia o control de un sujeto obligado es pública y no podrá ser reservada sino por disposición constitucional o legal expresa.",
    "dificultad": "ALTA",
    "competencia": "Transparencia y Acceso a la Información",
    "nivel": "Profesional"
  },
  {
    "id": "ci_shared_dian_integ_moral_10",
    "perfil": "GESTOR_III",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Denuncia de Conductas Irregulares y Cero Tolerancia con la Corrupción",
    "contexto": "Un Gestor III descubre que un compañero de división cobra dinero a tramitadores para agilizar el desbloqueo indebido del Registro Único Tributario (RUT) de contribuyentes suspendidos por simulación de operaciones.",
    "enunciado": "Ante este hallazgo, el imperativo ético y deber legal del funcionario es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Hacerse el de la vista gorda porque no es su función fiscalizar a sus colegas y no desea ganarse enemigos.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad del Servicio Público ordena de manera perentoria: 'Denuncio las faltas, delitos o violación de derechos de los que tengo conocimiento en el ejercicio de mi cargo, siempre'. La omisión de denuncia constituye además falta disciplinaria y penal (prevaricato por omisión)."
      },
      {
        "id": "B",
        "texto": "Denunciar de manera inmediata, reservada y documentada los hechos ante la Oficina de Control Disciplinario Interno y la Dirección de Fiscalización, aportando las evidencias encontradas.",
        "explicacion": "Correcta. El Código de Integridad del Servicio Público ordena de manera perentoria: 'Denuncio las faltas, delitos o violación de derechos de los que tengo conocimiento en el ejercicio de mi cargo, siempre'. La omisión de denuncia constituye además falta disciplinaria y penal (prevaricato por omisión)."
      },
      {
        "id": "C",
        "texto": "Pedirle al compañero una parte de las ganancias para no delatarlo.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Código de Integridad del Servicio Público ordena de manera perentoria: 'Denuncio las faltas, delitos o violación de derechos de los que tengo conocimiento en el ejercicio de mi cargo, siempre'. La omisión de denuncia constituye además falta disciplinaria y penal (prevaricato por omisión)."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad del Servicio Público ordena de manera perentoria: 'Denuncio las faltas, delitos o violación de derechos de los que tengo conocimiento en el ejercicio de mi cargo, siempre'. La omisión de denuncia constituye además falta disciplinaria y penal (prevaricato por omisión).",
    "norma": "Código de Integridad - Valor Honestidad y Ley 1952 de 2019, Art. 38 Num. 24",
    "citaNormativa": "Lo que hago en Honestidad: Denuncio las faltas, delitos o violación de derechos de los que tengo conocimiento en el ejercicio de mi cargo siempre.",
    "dificultad": "ALTA",
    "competencia": "Ética Pública y Lucha Contra la Corrupción",
    "nivel": "Profesional"
  }
];

if (typeof window !== "undefined") {
  window.QUESTION_BANK_GESTOR_CI = QUESTION_BANK_GESTOR_CI;
}
if (typeof global !== "undefined") {
  global.QUESTION_BANK_GESTOR_CI = QUESTION_BANK_GESTOR_CI;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_GESTOR_CI };
}
