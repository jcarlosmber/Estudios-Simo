/**
 * casos_maestros_ficha3006.js
 * Banco Independiente de Casos de Juicio Situacional (PJS) - Gran Simulador Maestro Ficha 3006
 * Compendio para el Empleo: GESTOR III (Código 303, Grado 03 - Convocatoria DIAN 2676 / CNSC)
 * Ficha Técnica Oficial: TP-DE-3006 / Formato FT-TAH-1824
 *
 * Módulo 19 del Manual Maestro: 40 Casos Prácticos de Juicio Situacional Comentados
 * Con claves oficiales y fundamentación técnico-jurídica detallada.
 * Este banco se mantiene POR APARTE para no mezclarlo con el banco general.
 */

const CASOS_MAESTROS_FICHA_3006 = [
  {
    id: "caso_m19_01",
    moduloOrigen: 2,
    moduloNombre: "Módulo 2: Gestión Organizacional e Indicadores de Desempeño",
    ejeId: "indicadores",
    ejeNombre: "Indicadores de Gestión y Cadena de Valor",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Usted se desempeña como Gestor III en la Dirección Seccional de Impuestos de Bogotá. Al realizar el corte trimestral del Plan de Acción Institucional (PAI), observa que el subproceso a su cargo programó la expedición de 500 resoluciones de devolución de impuestos con un presupuesto asignado de $150.000.000 COP. Al cierre del período, se expidieron 480 resoluciones y se ejecutaron $160.000.000 COP, generándose además reclamos por retrasos en los tiempos de respuesta legal.",
    enunciado: "Frente a la evaluación del desempeño del proceso y la formulación del reporte técnico para el Comité Seccional, ¿cuál es la determinación metodológicamente correcta que debe adoptar usted como Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Reportar que el proceso fue eficaz en un 96%, justificar que el sobrecosto presupuestal es razonable dado el volumen atendido y solicitar una adición presupuestal para el siguiente trimestre sin alterar el procedimiento.",
        explicacion: "Distractor que ignora la ineficiencia del gasto y no activa la mejora continua ni el análisis causal exigido por el MIPG."
      },
      {
        id: "B",
        texto: "Calificar la eficacia en el 96% y la eficiencia como desfavorable (sobrecosto presupuestal), procediendo a realizar un análisis de causa raíz sobre los cuellos de botella para estructurar un plan de acción correctivo inmediato.",
        explicacion: "CLAVE OFICIAL. La eficacia (480/500 = 96%) mide el logro de la meta física, pero la eficiencia evalúa la relación costo-beneficio ($160M vs. $150M para menos productos). El Gestor III debe reportar las cifras reales e iniciar el análisis de causa raíz (Ciclo PHVA)."
      },
      {
        id: "C",
        texto: "Ajustar la meta programada a 480 resoluciones en el aplicativo de planeación institucional para evitar que el indicador caiga en semáforo amarillo o rojo ante el nivel central.",
        explicacion: "Distractor antiético e ilegal. Alterar o maquillar metas en los sistemas institucionales constituye falta disciplinaria grave."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La eficacia (480 / 500 = 96%) mide el cumplimiento de la meta física, pero la eficiencia evalúa la relación entre los recursos programados y los ejecutados; al gastar más ($160M vs. $150M) produciendo menos, la eficiencia fue deficiente. El servidor público profesional (Gestor III) tiene el deber técnico de reportar las cifras reales sin maquillar metas y emprender el análisis causal para formular acciones de mejoramiento continuo (Ciclo PHVA).",
    norma: "Guía para la Construcción e Interpretación de Indicadores de Gestión DAFP/DNP y Decreto 1499 de 2017",
    citaNormativa: "La eficiencia evalúa los recursos empleados frente a los productos entregados. Cuando el costo real supera el programado, el indicador de eficiencia resulta desfavorable y exige plan correctivo.",
    dificultad: "ALTA",
    competencia: "Gestión Organizacional y Evaluación del Desempeño"
  },
  {
    id: "caso_m19_02",
    moduloOrigen: 2,
    moduloNombre: "Módulo 2: Caracterización de Procesos y Modelo SIPOC",
    ejeId: "indicadores",
    ejeNombre: "Gestión por Procesos y SIPOC",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En el marco de la modernización de los procesos tributarios y aduaneros, a usted le asignan la revisión y ajuste de la caracterización del proceso de Fiscalización Tributaria bajo la herramienta SIPOC, con el fin de corregir fallas reiteradas en la trazabilidad documental detectadas por la Oficina de Control Interno.",
    enunciado: "Al diligenciar la matriz SIPOC de dicho proceso, ¿cuál es la estructuración técnica idónea de las variables analizadas?",
    opciones: [
      {
        id: "A",
        texto: "Identificar como Proveedor a los contribuyentes e informantes de exógena; como Entrada a las declaraciones y reportes tributarios; como Salidas a los Requerimientos Especiales y Liquidaciones Oficiales; y como Clientes al contribuyente fiscalizado y la División de Cobranzas.",
        explicacion: "CLAVE OFICIAL. Satisface con exactitud la lógica SIPOC: los proveedores aportan los insumos (declaraciones/exógena), el proceso agrega valor probatorio, las salidas son los actos formales y los clientes son el destinatario directo y el subproceso siguiente de cobro."
      },
      {
        id: "B",
        texto: "Definir como Proveedor a la Dirección General de la DIAN; como Entrada a los funcionarios del nivel profesional; como Proceso al cobro coactivo judicial; y como Salidas al recaudo monetario en cuentas de la Dirección del Tesoro Nacional.",
        explicacion: "Distractor técnico que confunde los insumos de información con el talento humano y mezcla procesos de fiscalización con cobro coactivo."
      },
      {
        id: "C",
        texto: "Establecer que el Cliente es exclusivamente la Contraloría General de la República; las Entradas son las quejas anónimas; y las Salidas son las órdenes de allanamiento a bodegas aduaneras.",
        explicacion: "Distractor que confunde los entes de control externo con los clientes/destinatarios del flujo de valor del proceso misional."
      }
    ],
    respuestaCorrecta: "A",
    justificacion: "La metodología SIPOC exige que los proveedores suministren los insumos o datos de partida (contribuyentes / exógena), las entradas sean los insumos a transformar (declaraciones), las salidas sean los productos formalizados del proceso (actos administrativos de determinación) y los clientes o destinatarios sean quienes reciben la actuación (contribuyentes inspeccionados y el proceso subsiguiente de cobranzas).",
    norma: "Norma Técnica NTC-ISO 9001:2015 y Manual Operativo del MIPG (DAFP)",
    citaNormativa: "SIPOC: Proveedores (Suppliers) -> Entradas (Inputs) -> Proceso (Process) -> Salidas (Outputs) -> Clientes/Destinatarios (Customers).",
    dificultad: "ALTA",
    competencia: "Arquitectura de Procesos y Flujo de Valor Público"
  },
  {
    id: "caso_m19_03",
    moduloOrigen: 3,
    moduloNombre: "Módulo 3: Formulación de Proyectos en Metodología General Ajustada (MGA)",
    ejeId: "planeacion",
    ejeNombre: "Metodología General Ajustada (MGA) y BPIN",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Como Gestor III comisionado para apoyar la formulación de un proyecto de inversión en MGA Web orientado a modernizar los equipos de escaneo e inspección no intrusiva en una Seccional Aduanera, el equipo técnico le entrega un borrador donde el problema central se define textualmente como: 'Ausencia de escáneres de alta resolución de tecnología de rayos X en el puerto marítimo'.",
    enunciado: "Desde el rigor técnico y metodológico exigido por el Departamento Nacional de Planeación (DNP), ¿qué corrección inmediata debe realizar usted en la estructuración del proyecto?",
    opciones: [
      {
        id: "A",
        texto: "Avalar la redacción, dado que describe con precisión el activo tecnológico que el proyecto busca adquirir a través de los recursos de inversión del Presupuesto General de la Nación.",
        explicacion: "Distractor que desconoce la regla básica del DNP: jamás enunciar la falta de un bien como el problema central."
      },
      {
        id: "B",
        texto: "Reformular el problema central expresándolo como una situación negativa no resuelta (ej. 'Altos tiempos de inspección aduanera y bajo nivel de detección de contrabando en el puerto marítimo'), dado que la falta de un equipo es una solución preconcebida y no el problema.",
        explicacion: "CLAVE OFICIAL. La regla metodológica de oro de la MGA/DNP establece que el problema central debe representar la situación negativa o el déficit de servicio que afecta a la sociedad o a la entidad, nunca la ausencia de un medio o bien físico."
      },
      {
        id: "C",
        texto: "Suprimir el análisis del problema central y pasar directamente al Módulo 3 de Costeo y Evaluación Financiera para agilizar la asignación de recursos en el Banco de Proyectos (BPIN).",
        explicacion: "Distractor que omite la fase lógica de identificación y el árbol de problemas indispensables para que el DNP dé viabilidad técnica."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La Metodología General Ajustada (MGA) del DNP prohíbe taxativamente formular el problema central como la ausencia o falta de una solución particular (un escáner, un software, un vehículo). El problema debe redactarse siempre como la necesidad social o institucional no satisfecha o el déficit en el servicio público. La adquisición del equipo constituye un medio o componente de la alternativa de solución, no el problema en sí mismo.",
    norma: "Manual Conceptual de la Metodología General Ajustada (MGA) - Departamento Nacional de Planeación (DNP)",
    citaNormativa: "El problema central debe reflejar una situación negativa existente que afecta a una población delimitada, no la falta de una alternativa de solución técnica previa.",
    dificultad: "ALTA",
    competencia: "Planeación Estratégica y Formulación de Proyectos de Inversión"
  },
  {
    id: "caso_m19_04",
    moduloOrigen: 3,
    moduloNombre: "Módulo 3: Evaluación Financiera Ex-Ante de Proyectos de Inversión Pública",
    ejeId: "planeacion",
    ejeNombre: "Evaluación Económica Ex-Ante y Criterios VPN/TIR",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Usted analiza dos alternativas de inversión tecnológica en el Módulo 3 de la MGA para automatizar el trámite de solicitudes aduaneras. La Alternativa 1 presenta un Valor Presente Neto (VPN) de $850.000.000 COP y una Tasa Interna de Retorno (TIR) del 14.5% (con una tasa social de descuento del 12%). La Alternativa 2 presenta un VPN de -$120.000.000 COP y una TIR del 9.8%.",
    enunciado: "Con base en los criterios de evaluación de proyectos públicos del DNP, ¿cuál debe ser su recomendación técnica fundamentada?",
    opciones: [
      {
        id: "A",
        texto: "Recomendar la Alternativa 2, ya que al tener un VPN negativo implica menores erogaciones presupuestales netas para el Estado colombiano a lo largo de su ciclo de vida.",
        explicacion: "Distractor con falacia conceptual: un VPN negativo significa que el proyecto destruye riqueza y sus costos superan los beneficios."
      },
      {
        id: "B",
        texto: "Declarar inadmisibles ambas alternativas, dado que los proyectos del sector público no pueden evaluarse mediante criterios de rentabilidad financiera como el VPN o la TIR.",
        explicacion: "Distractor erróneo: la MGA Web exige obligatoriamente la evaluación ex-ante mediante VPN, TIR y RBC."
      },
      {
        id: "C",
        texto: "Recomendar la selección y priorización de la Alternativa 1, dado que su VPN es mayor que cero y su TIR supera la tasa social de descuento, evidenciando viabilidad económica y generación neta de beneficios.",
        explicacion: "CLAVE OFICIAL. Criterio de decisión universal en la MGA: un proyecto es viable cuando su VPN > 0 y su TIR > Tasa Social de Descuento (14.5% > 12%). La Alternativa 2 destruye valor público y debe ser descartada."
      }
    ],
    respuestaCorrecta: "C",
    justificacion: "En evaluación financiera y económica ex-ante (MGA Módulo 3), el criterio de decisión universal establece que un proyecto es viable y crea valor cuando su VPN > 0 y su TIR supera la Tasa Social de Descuento del DNP (14.5% > 12%). Un VPN negativo indica destrucción neta de valor social o financiero, haciendo inviable la alternativa 2.",
    norma: "Guía Metodológica de Evaluación Económica y Financiera - DNP",
    citaNormativa: "Regla de Decisión MGA: Se aprueba la alternativa que presente Valor Presente Neto (VPN) positivo y Tasa Interna de Retorno (TIR) superior a la tasa de descuento oficial.",
    dificultad: "ALTA",
    competencia: "Evaluación Financiera y Toma de Decisiones en Inversión Pública"
  },
  {
    id: "caso_m19_05",
    moduloOrigen: 4,
    moduloNombre: "Módulo 4: Modalidades de Selección en Contratación Estatal (Subasta Inversa)",
    ejeId: "contratacion",
    ejeNombre: "Contratación Estatal y SECOP II",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "La Dirección de Gestión Corporativa de la DIAN requiere adquirir 4.500 resmas de papel bond y elementos estándar de papelería para el funcionamiento administrativo de todas las Seccionales del país durante la vigencia fiscal. El valor del presupuesto asciende a $480.000.000 COP, superando el tope de menor cuantía de la entidad.",
    enunciado: "Al ser consultado usted como Gestor III sobre la modalidad de selección contractual legalmente procedente bajo la Ley 1150 de 2007 y el Decreto 1082 de 2015, ¿qué debe conceptuar?",
    opciones: [
      {
        id: "A",
        texto: "Debe adelantarse mediante Licitación Pública obligatoria, ya que el valor total del contrato supera la menor cuantía institucional de la entidad.",
        explicacion: "Distractor que asume que la cuantía define la licitación por defecto, olvidando que la tipología del bien prima sobre la cuantía."
      },
      {
        id: "B",
        texto: "Procede la Selección Abreviada mediante el mecanismo de Subasta Inversa (o adquisición por Acuerdo Marco de Precios en Colombia Compra Eficiente), por tratarse de bienes de características técnicas uniformes y de común utilización.",
        explicacion: "CLAVE OFICIAL. El Art. 2 Numeral 2 Lit. a) de la Ley 1150/2007 dispone que los bienes y servicios de características técnicas uniformes y común utilización (CTU) se contratan por Selección Abreviada sin importar la cuantía."
      },
      {
        id: "C",
        texto: "Procede Contratación Directa por tratarse de suministros esenciales para la continuidad ininterrumpida del servicio público tributario y aduanero.",
        explicacion: "Distractor ilegal. La compra de papelería ordinaria no constituye urgencia manifiesta ni causal taxativa de contratación directa."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 2, numeral 2, literal a) de la Ley 1150 de 2007 consagra que la adquisición de bienes y servicios de características técnicas uniformes y común utilización (CTU) se realizará por Selección Abreviada (subasta inversa o acuerdos marco), independientemente de la cuantía. La naturaleza del bien prima sobre la cuantía. La contratación directa es de interpretación restrictiva y no ampara compras comunes de papelería.",
    norma: "Ley 1150 de 2007, Art. 2 Numeral 2 Literal a) y Decreto 1082 de 2015",
    citaNormativa: "La adquisición de bienes y servicios de características técnicas uniformes y de común utilización se realizará por selección abreviada mediante subasta inversa o compra por catálogo de acuerdos marco.",
    dificultad: "ALTA",
    competencia: "Régimen Contractual del Estado y Modalidades de Selección"
  },
  {
    id: "caso_m19_06",
    moduloOrigen: 4,
    moduloNombre: "Módulo 4: Requisitos de los Estudios Previos en Contratación Estatal",
    ejeId: "contratacion",
    ejeNombre: "Estudios Previos y Planeación Contractual",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En la estructuración de unos Estudios Previos para contratar el servicio de mantenimiento de aires acondicionados de la Seccional, el profesional solicitante omitió incluir la matriz de riesgos previsibles argumentando que 'al ser un contrato de servicios y no de obra pública, el contratista asume todo el riesgo operacional de manera inherente'.",
    enunciado: "Al revisar los documentos previos conforme al Decreto 1082 de 2015 y la política de Colombia Compra Eficiente, ¿cuál es su actuación debida como Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Devolver los Estudios Previos solicitando la inclusión obligatoria de la Matriz de Tipificación, Estimación y Asignación de Riesgos Previsibles (documento CONPES 3714), ya que es un requisito de validez legal para toda contratación estatal.",
        explicacion: "CLAVE OFICIAL. El Art. 4 de la Ley 1150 de 2007 y el Decreto 1082 de 2015 exigen la matriz de riesgos en todos los procesos contractuales sin importar la modalidad ni el objeto."
      },
      {
        id: "B",
        texto: "Avalar el documento, puesto que las matrices de riesgos solo son exigibles legalmente en licitaciones de concesión de infraestructura o megaobras civiles.",
        explicacion: "Distractor que limita erróneamente la gestión de riesgos a megaobras, violando la Ley 1150."
      },
      {
        id: "C",
        texto: "Reemplazar la matriz por una declaración juramentada del ordenador del gasto donde conste que la entidad se exonera de cualquier perjuicio contractual.",
        explicacion: "Distractor que sugiere un atajo administrativo nulo e improcedente en derecho administrativo."
      }
    ],
    respuestaCorrecta: "A",
    justificacion: "El artículo 4 de la Ley 1150 de 2007 y el Decreto 1082 de 2015 disponen de manera perentoria que en todos los procesos de selección pública de contratistas, la entidad estatal debe incluir la tipificación, estimación y asignación de los riesgos previsibles involucrados en la contratación. Su omisión vicia la fase preparatoria y vulnera el principio jurisprudencial de planeación contractual.",
    norma: "Ley 1150 de 2007, Art. 4 y Decreto 1082 de 2015, Art. 2.2.1.1.2.1.1",
    citaNormativa: "Los estudios previos deberán contener la tipificación, estimación y asignación de los riesgos previsibles que puedan afectar el equilibrio económico del contrato.",
    dificultad: "ALTA",
    competencia: "Estructuración Técnica y Principio de Planeación en Contratación"
  },
  {
    id: "caso_m19_07",
    moduloOrigen: 4,
    moduloNombre: "Módulo 4: Supervisión Contractual y Modificaciones al Contrato",
    ejeId: "contratacion",
    ejeNombre: "Supervisión de Contratos Estatales",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Usted es designado formalmente como supervisor de un contrato de prestación de servicios de digitalización de expedientes tributarios. A las dos semanas de ejecución, el contratista le solicita por correo electrónico suspender temporalmente el contrato y autorizarle el pago de un anticipo que no fue contemplado ni pactado en el contrato original ni en los pliegos de condiciones.",
    enunciado: "De conformidad con la Ley 80 de 1993 y la Ley 1474 de 2011, ¿cuál debe ser su determinación jurídica y administrativa?",
    opciones: [
      {
        id: "A",
        texto: "Autorizar por escrito el anticipo solicitado, considerando que facilitará el flujo de caja del contratista y acelerará el cumplimiento de las metas de digitalización de la DIAN.",
        explicacion: "Distractor que implica extralimitación de funciones grave: el supervisor no puede crear figuras económicas no pactadas."
      },
      {
        id: "B",
        texto: "Rechazar la solicitud de anticipo, informando al contratista que el supervisor carece de competencia legal para modificar las cláusulas económicas del contrato y que las condiciones pactadas son inalterables.",
        explicacion: "CLAVE OFICIAL. La supervisión se limita al control técnico y financiero del contrato en los términos pactados. El supervisor no puede conceder anticipos no previstos ni modificar el contrato; solo el Ordenador del Gasto puede suscribir otrosíes previa justificación."
      },
      {
        id: "C",
        texto: "Proponerle al contratista compensar el anticipo no pactado reduciendo unilateralmente el número de expedientes a digitalizar en la entrega final.",
        explicacion: "Distractor ilegal que propone una alteración irregular del objeto y alcance contractual."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La supervisión contractual se circunscribe al seguimiento técnico, administrativo y financiero del contrato en los términos pactados. El supervisor no es parte del contrato, no ostenta facultades de ordenación del gasto y no puede alterar las condiciones económicas esenciales ni crear figuras no acordadas en los pliegos de condiciones (violación al principio de legalidad y selección objetiva, tipificado en la Ley 1474 de 2011).",
    norma: "Ley 1474 de 2011 (Estatuto Anticorrupción), Arts. 83 y 84",
    citaNormativa: "La supervisión consistirá en el seguimiento técnico, administrativo, financiero, contable y jurídico sobre el cumplimiento del objeto del contrato. El supervisor no puede exonerar al contratista ni modificar cláusulas económicas.",
    dificultad: "ALTA",
    competencia: "Supervisión y Control de la Ejecución Contractual"
  },
  {
    id: "caso_m19_08",
    moduloOrigen: 5,
    moduloNombre: "Módulo 5: El Modelo MECI y el Esquema de las Tres Líneas",
    ejeId: "control_interno",
    ejeNombre: "Control Interno y Tres Líneas de Defensa",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Durante una reunión de coordinación interna en una División Seccional de la DIAN, un funcionario afirma: 'El control de las inconsistencias en los registros del RUT y las validaciones de documentos tributarios son responsabilidad exclusiva de la Oficina de Control Interno, por tanto nosotros en el área operativa no debemos diseñar ni aplicar controles preventivos'.",
    enunciado: "A la luz del Modelo Estándar de Control Interno (MECI) articulado en MIPG y el Marco de las Tres Líneas del IIA, ¿cuál es la aclaración técnica que le corresponde hacer como Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Validar la afirmación del compañero, dado que la Oficina de Control Interno tiene autonomía constitucional para garantizar que no existan errores en ningún proceso.",
        explicacion: "Distractor que confunde el rol evaluador de la OCI con la operación diaria de los controles."
      },
      {
        id: "B",
        texto: "Clarificar que la responsabilidad primaria del diseño y aplicación de controles directos (autocontrol) recae en los servidores de la Primera Línea (operación), mientras que Control Interno conforma la Tercera Línea, encargada de la evaluación posterior e independiente.",
        explicacion: "CLAVE OFICIAL. En el esquema de las Tres Líneas adoptado por la Circular DAFP 100-002, la Primera Línea (operativos y Gestores) es la dueña del riesgo y ejecutora del autocontrol. La OCI no coadministra ni opera controles directos para mantener su independencia."
      },
      {
        id: "C",
        texto: "Explicar que los controles operativos son responsabilidad exclusiva de la Segunda Línea (Planeación), mientras que la Primera Línea solo tiene el deber de archivar documentos.",
        explicacion: "Distractor que distorsiona las funciones de asesoría de la Segunda Línea y minimiza el rol de la Primera Línea."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "Bajo el esquema de las Tres Líneas (Circular DAFP 100-002 y lineamientos IIA), la Primera Línea de Defensa está integrada por los líderes de proceso y servidores operativos, quienes son los dueños de los riesgos y responsables de ejecutar los controles diarios en tiempo real. La Oficina de Control Interno (Tercera Línea) no administra ni opera controles directos para salvaguardar su independencia y objetividad en la evaluación posterior.",
    norma: "Circular Conjunta DAFP - Presidencia 100-002 y Decreto 1499 de 2017",
    citaNormativa: "La Primera Línea de Defensa está conformada por los servidores de los procesos misionales y de apoyo, quienes son los responsables primarios de identificar riesgos y aplicar controles en la operación diaria.",
    dificultad: "ALTA",
    competencia: "Sistema de Control Interno Institucional y Modelo de Aseguramiento"
  },
  {
    id: "caso_m19_09",
    moduloOrigen: 5,
    moduloNombre: "Módulo 5: Componentes del Marco COSO 2013 en el Sector Público",
    ejeId: "control_interno",
    ejeNombre: "Marco COSO 2013 y Componentes del Control",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "La Oficina de Planeación detecta que, aunque una dependencia cuenta con manuales de funciones actualizados y mapas de riesgos bien diseñados, los servidores no aplican los filtros de validación de identidad al registrar usuarios debido a una cultura generalizada de prisa e informalidad tolerada por la jefatura inmediata.",
    enunciado: "¿Cuál de los 5 componentes del Modelo COSO 2013 / MECI se encuentra sustancialmente fallando en este escenario?",
    opciones: [
      {
        id: "A",
        texto: "Componente de Entorno de Control, puesto que fallan el tono de la administración, el compromiso ético, la disciplina organizacional y la cultura de integridad.",
        explicacion: "CLAVE OFICIAL. El Entorno de Control es la base y cimiento de COSO. Si la jefatura tolera la omisión de procedimientos y reina la informalidad, la falla es estructural en el ambiente y cultura de control."
      },
      {
        id: "B",
        texto: "Componente de Actividades de Monitoreo, porque la Contraloría General no ha emitido glosas fiscales.",
        explicacion: "Distractor que confunde el control fiscal externo con el monitoreo del sistema interno."
      },
      {
        id: "C",
        texto: "Componente de Información y Comunicación, dado que el sistema MUISCA no tiene conexión satelital.",
        explicacion: "Distractor que desvía la atención a un elemento técnico irrelevante frente al problema de cultura institucional."
      }
    ],
    respuestaCorrecta: "A",
    justificacion: "El Entorno de Control es la base y cimiento de todo el sistema de control interno según COSO 2013 y el MECI. Comprende el compromiso de la alta dirección con la integridad, los valores éticos, la disciplina de cumplimiento y la supervisión del comportamiento del personal. Si la cultura tolera la omisión de controles, el entorno de control está viciado en su base.",
    norma: "Marco Integrado de Control Interno COSO 2013 y 7ª Dimensión del MIPG",
    citaNormativa: "Principio 1 COSO: La organización demuestra compromiso con la integridad y los valores éticos, estableciendo el 'tono desde la cima'.",
    dificultad: "ALTA",
    competencia: "Diagnóstico y Valoración de Componentes de Control Interno"
  },
  {
    id: "caso_m19_10",
    moduloOrigen: 6,
    moduloNombre: "Módulo 6: Auditoría Interna Gubernamental y Papeles de Trabajo",
    ejeId: "control_interno",
    ejeNombre: "Evidencia de Auditoría y Papeles de Trabajo",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En el desarrollo de una auditoría interna al proceso de gestión aduanera, un auditor encuentra un documento fotocopiado sin firmas ni fechas que supuestamente prueba una entrega irregular de mercancías aprehendidas. Basado únicamente en dicho papel, el auditor pretende radicar de inmediato un hallazgo de alcance penal.",
    enunciado: "Evaluando la evidencia a la luz de las Normas Internacionales de Auditoría Interna (NIAI / IPPF), ¿qué defecto metodológico insubsanable presenta dicha actuación?",
    opciones: [
      {
        id: "A",
        texto: "Ninguno, puesto que cualquier documento que llegue a manos del auditor constituye plena prueba judicial inmediata en Colombia.",
        explicacion: "Distractor que ignora las reglas de pertinencia y validez probatoria procesal."
      },
      {
        id: "B",
        texto: "La evidencia no cumple con los atributos de suficiencia, competencia (confiabilidad) y pertinencia, requiriéndose la verificación en fuentes oficiales y soportes originales antes de formalizar el hallazgo.",
        explicacion: "CLAVE OFICIAL. Las normas del IPPF (Norma 2310) exigen que los papeles de trabajo contengan evidencia Suficiente (convincente), Competente/Confiable (fuente auténtica) y Pertinente (lógica). Una fotocopia sin firmas carece de competencia probatoria."
      },
      {
        id: "C",
        texto: "El auditor debió destruir el documento de inmediato para no entorpecer las labores operativas de los inspectores de aduanas.",
        explicacion: "Distractor absurdo que sugiere la destrucción indebida de documentos."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "Las normas del IPPF (The IIA) y las guías de auditoría del DAFP exigen que la evidencia recopilada en los Papeles de Trabajo debe ser Suficiente (fáctica y convincente), Competente / Confiable (obtenida de fuentes fidedignas e idóneas) y Pertinente (que sustente directamente el hallazgo). Una fotocopia anónima, sin autenticidad ni contraste con el sistema oficial, carece de competencia probatoria para tipificar un hallazgo penal.",
    norma: "Norma Internacional de Auditoría Interna 2310 (Identificación de la Información) - IPPF / IIA",
    citaNormativa: "Los auditores internos deben identificar información suficiente, confiable, relevante y útil de manera tal que permita alcanzar los objetivos del trabajo.",
    dificultad: "ALTA",
    competencia: "Normas Internacionales de Auditoría y Valor Probatorio"
  },
  {
    id: "caso_m19_11",
    moduloOrigen: 6,
    moduloNombre: "Módulo 6: Redacción Técnica de Hallazgos de Auditoría (4 Elementos)",
    ejeId: "control_interno",
    ejeNombre: "Estructuración de Hallazgos de Auditoría",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Se le encomienda revisar el borrador de un informe de auditoría. El texto indica: 'Se encontró que durante enero a marzo no se conciliaron las cuentas bancarias de recaudo tributario con los extractos del Banco de la República, lo cual infringe la Resolución DIAN 0012 de 2021 y genera el riesgo de desajustes contables en el balance general por $3.200 millones'.",
    enunciado: "¿Cuál de los 4 elementos esenciales del hallazgo formal de auditoría está ausente en la redacción descrita?",
    opciones: [
      {
        id: "A",
        texto: "La Condición (los hechos encontrados).",
        explicacion: "La condición sí está presente: no se conciliaron las cuentas durante enero a marzo."
      },
      {
        id: "B",
        texto: "El Criterio (la norma o estándar legal).",
        explicacion: "El criterio sí está citado: la Resolución DIAN 0012 de 2021."
      },
      {
        id: "C",
        texto: "La Causa (el origen raíz que generó el incumplimiento).",
        explicacion: "CLAVE OFICIAL. El texto tiene Condición (no conciliación), Criterio (Resolución 0012) y Efecto (riesgo contable por $3.200M), pero OMITIÓ la Causa (por qué no se conciliaron: falta de personal, caída del sistema, perfiles no asignados). Sin causa es imposible estructurar el plan de mejoramiento."
      }
    ],
    respuestaCorrecta: "C",
    justificacion: "El texto presenta la Condición (no se conciliaron las cuentas de recaudo), el Criterio (Resolución DIAN 0012) y el Efecto (riesgo de desajustes por $3.200M). Sin embargo, omitió determinar la Causa (por qué no se conciliaron: falta de acceso al software, rotación imprevista de personal, ausencia de perfil habilitado, etc.). Sin causa, es imposible que el líder del proceso formule un Plan de Mejoramiento Institucional efectivo.",
    norma: "Guía de Auditoría para Entidades Públicas - DAFP (Versión Vigente)",
    citaNormativa: "Todo hallazgo de auditoría debe contener indefectiblemente los 4 atributos: Condición, Criterio, Causa y Efecto.",
    dificultad: "ALTA",
    competencia: "Técnicas de Auditoría Gubernamental y Hallazgos"
  },
  {
    id: "caso_m19_12",
    moduloOrigen: 7,
    moduloNombre: "Módulo 7: Valoración de Riesgos y Cálculo de Riesgo Residual (DAFP v5)",
    ejeId: "riesgo",
    ejeNombre: "Metodología de Riesgos DAFP v5",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En la matriz de riesgos del proceso de Devoluciones de Impuestos, el riesgo de 'Aprobación de devoluciones improcedentes a contribuyentes ficticios' presenta una Probabilidad de 4 (Probable) y un Impacto de 5 (Catastrófico), situándose en Riesgo Inherente Extremo. Se implementa un nuevo control que es de naturaleza preventiva, totalmente automatizado en la plataforma informática y cuenta con segregación estricta de funciones.",
    enunciado: "Conforme a la Guía de Riesgos DAFP Versión 5, ¿cuál es el efecto esperado de este control sobre la matriz del proceso?",
    opciones: [
      {
        id: "A",
        texto: "El control reduce de inmediato el impacto del riesgo a 1 (Insignificante), pues la tecnología elimina cualquier pérdida económica potencial.",
        explicacion: "Distractor falaz: los controles preventivos no reducen la magnitud del impacto potencial de la estafa, sino la probabilidad de que ocurra."
      },
      {
        id: "B",
        texto: "El control robusto disminuye sustancialmente la probabilidad de ocurrencia del riesgo, mitigando el nivel hacia un Riesgo Residual moderado o bajo.",
        explicacion: "CLAVE OFICIAL. Los controles preventivos automáticos atacan la causa y reducen la probabilidad (de 4 a 1 o 2). Aunque el impacto intrínseco sigue siendo severo en caso de ocurrir, el Riesgo Residual se desplaza a una zona tolerable."
      },
      {
        id: "C",
        texto: "El control no altera en nada la matriz, dado que los riesgos con impacto catastrófico nunca pueden disminuir su valoración residual.",
        explicacion: "Distractor erróneo: el propósito del diseño de controles es justamente desplazar el riesgo a nivel residual."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "Los controles preventivos operan sobre las causas que originan el riesgo, reduciendo de manera directa la probabilidad de ocurrencia. El impacto intrínseco (lo que ocurriría en dinero o daño legal si el riesgo se llegara a materializar) permanece constante o disminuye marginalmente, pero al descender la probabilidad de 4 a 1 o 2, la calificación del Riesgo Residual se reubica en una zona tolerable para la entidad.",
    norma: "Guía para la Administración del Riesgo y el Diseño de Controles - DAFP (Versión 5)",
    citaNormativa: "La calificación de controles evalúa el diseño y la operatividad. Un control preventivo y automático disminuye de manera sustantiva el nivel de probabilidad del riesgo en la matriz de calor.",
    dificultad: "ALTA",
    competencia: "Administración Integral del Riesgo y Mitigación de Controles"
  },
  {
    id: "caso_m19_13",
    moduloOrigen: 7,
    moduloNombre: "Módulo 7: Tratamiento y Apetito del Riesgo en el Sector Público",
    ejeId: "riesgo",
    ejeNombre: "Políticas de Tratamiento y Riesgos de Corrupción",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Durante la actualización del mapa de riesgos institucional de una Dirección Seccional de Aduanas, el equipo de trabajo identifica un riesgo tipificado como 'Posible concertación de funcionarios de control aduanero con contrabandistas para facilitar el tránsito de contenedores no inspeccionados'. El comité local propone calificar el tratamiento como 'Riesgo Aceptado', justificando que los sueldos del personal de inspección son bajos.",
    enunciado: "Desde el marco legal anticorrupción (Ley 1474 de 2011) y la política de riesgos DAFP, ¿cuál es la única postura admisible?",
    opciones: [
      {
        id: "A",
        texto: "Aceptar el tratamiento propuesto, siempre y cuando se notifique a la Oficina de Gestión Humana para mejorar los salarios en el siguiente año.",
        explicacion: "Distractor ilegal que tolera la corrupción bajo argumentos socioeconómicos."
      },
      {
        id: "B",
        texto: "Rechazar categóricamente la aceptación del riesgo, dado que en la administración pública los riesgos de corrupción nunca son admisibles ni aceptables, debiendo establecerse controles estrictos de prevención, monitoreo y mitigación.",
        explicacion: "CLAVE OFICIAL. Regla de oro nacional: bajo el Estatuto Anticorrupción y la Guía DAFP v5, los riesgos de corrupción JAMÁS pueden ser aceptados por ninguna autoridad del Estado."
      },
      {
        id: "C",
        texto: "Transferir el riesgo a una empresa aseguradora contratando una póliza de infidelidad de empleados.",
        explicacion: "Distractor que pretende transferir un delito público a un contrato privado de seguros, desconociendo el deber preventivo estatal."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La Guía DAFP v5 y la Estrategia de Lucha Contra la Corrupción prohíben de forma absoluta la opción de 'Aceptar' riesgos tipificados como de corrupción. El Estado no puede tolerar actos ilícitos bajo ningún argumento presupuestal o circunstancial. El tratamiento obligatorio frente a un riesgo de corrupción es el diseño de controles rigurosos de mitigación y la activación de canales de denuncia y blindaje informático.",
    norma: "Ley 1474 de 2011 (Estatuto Anticorrupción), Art. 73 y Guía DAFP v5",
    citaNormativa: "Los riesgos de corrupción no admiten apetito de riesgo ni pueden ser clasificados bajo la opción de 'Aceptar'. Es imperativa su mitigación inmediata mediante controles preventivos.",
    dificultad: "ALTA",
    competencia: "Ética Institucional y Mapa de Riesgos de Corrupción"
  },
  {
    id: "caso_m19_14",
    moduloOrigen: 8,
    moduloNombre: "Módulo 8: Principios Constitucionales de la Función Pública (Legalidad)",
    ejeId: "constitucional",
    ejeNombre: "Constitucionalismo y Principio de Legalidad",
    nivel: "Profesional",
    tipo: "Básica Organizacional",
    caso: "Un Gestor III recibe una instrucción verbal de su superior jerárquico inmediato ordenándole emitir una resolución aprobando una exención tributaria a una empresa local, a pesar de que la ley tributaria vigente no contempla dicho beneficio fiscal para ese sector de la economía. El jefe le manifiesta: 'Haga la resolución bajo mi responsabilidad, es un compromiso institucional de la Alcaldía'.",
    enunciado: "Con fundamento en los artículos 6, 121 y 122 de la Constitución Política y el Código General Disciplinario, ¿cómo debe proceder el servidor?",
    opciones: [
      {
        id: "A",
        texto: "Cumplir la instrucción verbal sin objeciones, pues en virtud del principio de jerarquía administrativa el subalterno queda exento de toda responsabilidad disciplinaria y penal.",
        explicacion: "Distractor peligroso: en el derecho público colombiano la obediencia debida ciega no ampara actos manifiestamente delictivos o ilegales."
      },
      {
        id: "B",
        texto: "Negarse respetuosamente a expedir el acto y manifestar por escrito a su superior la improcedencia legal, dado que en el Estado de derecho ninguna autoridad puede ejercer competencias no atribuidas por la ley ni otorgar beneficios tributarios sin reserva de ley.",
        explicacion: "CLAVE OFICIAL. Art. 6 (responsabilidad por extralimitación/omisión), Art. 121 (ninguna autoridad puede ejercer funciones no atribuidas) y Art. 338 C.P. (reserva de ley estricta para exenciones). El servidor debe negarse y dejar constancia escrita."
      },
      {
        id: "C",
        texto: "Expedir el acto administrativo pero firmando con una seña visible para indicar que fue coaccionado por su superior.",
        explicacion: "Distractor informal que no exime de responsabilidad penal por prevaricato."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "En Colombia, el principio de legalidad (Art. 6 C.P.) sujeta a los servidores a responder por infringir la ley y por extralimitación u omisión. El artículo 121 dispone que ninguna autoridad puede ejercer funciones distintas a las atribuidas en la ley, y el artículo 338 consagra el principio de legalidad estricta del tributo (solo el Congreso crea exenciones). La obediencia debida en el sector público no ampara la ejecución de actos manifiestamente ilegales o constitutivos de delito (prevaricato).",
    norma: "Constitución Política de Colombia Arts. 6, 121 y 338",
    citaNormativa: "Ninguna autoridad del Estado podrá ejercer funciones distintas de las que le atribuyen la Constitución y la ley. Solo el Congreso mediante ley formal puede consagrar exenciones tributarias.",
    dificultad: "ALTA",
    competencia: "Supremacía Constitucional y Reserva de Ley"
  },
  {
    id: "caso_m19_15",
    moduloOrigen: 8,
    moduloNombre: "Módulo 8: Principio de Progresividad y Equidad Tributaria",
    ejeId: "constitucional",
    ejeNombre: "Principios del Sistema Tributario (Art. 363 C.P.)",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En un foro sobre políticas de recaudo de la DIAN, se debate una propuesta académica para reformar el impuesto sobre la renta de personas naturales, sugiriendo una tarifa única plana del 20% para todos los ciudadanos colombianos, independientemente de que ganen 1 salario mínimo o 50 salarios mínimos mensuales.",
    enunciado: "¿Qué principio constitucional del sistema tributario (Artículo 363 C.P.) se vulneraría ostensiblemente con dicha propuesta?",
    opciones: [
      {
        id: "A",
        texto: "El principio de no retroactividad tributaria.",
        explicacion: "La propuesta no está rigiendo sobre hechos pasados, por lo que no viola la irretroactividad."
      },
      {
        id: "B",
        texto: "El principio de legalidad del tributo.",
        explicacion: "Si se expide por el Congreso mediante ley, cumpliría con la legalidad formal, pero vulneraría los principios sustantivos."
      },
      {
        id: "C",
        texto: "El principio de progresividad y equidad vertical.",
        explicacion: "CLAVE OFICIAL. Una tarifa plana impone un impacto regresivo sobre los sectores de menor capacidad contributiva, desconociendo que quien más renta percibe debe tributar con una tarifa porcentual efectiva mayor (equidad vertical y progresividad)."
      }
    ],
    respuestaCorrecta: "C",
    justificacion: "El principio de progresividad tributaria exige que la carga impositiva aumente de forma más que proporcional a medida que se incrementa la capacidad económica o renta del contribuyente. Una tarifa plana del 20% para todos los estratos tiene un impacto altamente regresivo, afectando desproporcionadamente la subsistencia digna de los ingresos bajos (vulnerando la equidad vertical y la progresividad consagrada en el art. 363 de la Carta Magna).",
    norma: "Constitución Política de Colombia, Artículo 363 y Jurisprudencia Corte Constitucional C-776/03",
    citaNormativa: "El sistema tributario se funda en los principios de equidad, eficiencia y progresividad. La progresividad exige consultar la capacidad contributiva real del sujeto.",
    dificultad: "ALTA",
    competencia: "Derecho Constitucional Tributario y Equidad Fiscal"
  },
  {
    id: "caso_m19_16",
    moduloOrigen: 9,
    moduloNombre: "Módulo 9: Carrera Específica de la DIAN y Período de Prueba",
    ejeId: "carrera_dian",
    ejeNombre: "Sistema Específico DIAN y Período de Prueba",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Un profesional recién nombrado en el empleo de Gestor III en la DIAN mediante concurso de méritos abierto de la CNSC inicia su período de prueba de seis (6) meses. Al cumplirse el cuarto mes, su jefe inmediato le manifiesta de forma verbal que 'no ha cumplido las expectativas del área' y que por tanto tramitará su declaratoria de insubsistencia al día siguiente sin realizar evaluaciones formales previas.",
    enunciado: "Conforme al Decreto Ley 071 de 2020 y las directrices de la CNSC, ¿cuál es la garantía legal que ampara al servidor en período de prueba?",
    opciones: [
      {
        id: "A",
        texto: "El jefe puede declararlo insubsistente en cualquier día de forma discrecional sin motivación técnica, ya que el empleado aún no adquiere derechos de carrera.",
        explicacion: "Distractor erróneo: el período de prueba no es asimilable a un cargo de libre nombramiento; goza de debido proceso reglado."
      },
      {
        id: "B",
        texto: "El período de prueba es legalmente de seis meses completos, requiriéndose la concertación previa de compromisos, el seguimiento continuo con evidencias y una evaluación formal motivada con base en la tabla de calificación de la CNSC.",
        explicacion: "CLAVE OFICIAL. El D.L. 071/2020 fija el período en 6 meses improrrogables. Para declarar la insubsistencia es indispensable haber concertado compromisos, acumulado el portafolio de evidencias y emitido una evaluación formal no satisfactoria contra la que caben recursos."
      },
      {
        id: "C",
        texto: "El servidor en período de prueba goza de inamovilidad absoluta y no puede ser retirado bajo ninguna circunstancia antes de cumplir dos años en la entidad.",
        explicacion: "Distractor inventado: los derechos de carrera definitiva se adquieren al aprobar los 6 meses de prueba."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El Decreto Ley 071 de 2020 establece que el período de prueba tiene una duración improrrogable de seis (6) meses. Para declarar insubsistente a un funcionario en período de prueba por desempeño no satisfactorio, es obligatorio haber concertado compromisos laborales, acumulado el portafolio de evidencias objetivas y expedido una calificación formal motivada al término del período (o extraordinaria reglada), contra la cual proceden los recursos de ley.",
    norma: "Decreto Ley 071 de 2020, Artículos 31 y 32 y Acuerdos CNSC",
    citaNormativa: "El período de prueba tendrá una duración de seis (6) meses. Al término del mismo, el empleado será evaluado en su desempeño laboral. Si la calificación es no satisfactoria, el nombramiento será declarado insubsistente mediante resolución motivada.",
    dificultad: "ALTA",
    competencia: "Carrera Administrativa y Garantías del Debido Proceso Laboral"
  },
  {
    id: "caso_m19_17",
    moduloOrigen: 9,
    moduloNombre: "Módulo 9: Evaluación del Desempeño Laboral (EDL) y Compromisos",
    ejeId: "carrera_dian",
    ejeNombre: "Evaluación del Desempeño Laboral (EDL)",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Al iniciar el período ordinario de evaluación anual del desempeño laboral, el evaluador asignado se niega a concertar los compromisos funcionales individuales con el Gestor III dentro de los primeros 15 días hábiles, aduciendo exceso de trabajo en la Seccional.",
    enunciado: "¿Cuál es la disposición reglamentaria que debe operar para garantizar la continuidad del proceso de evaluación del empleado?",
    opciones: [
      {
        id: "A",
        texto: "Si el evaluador no realiza la concertación dentro del término legal, el evaluado deberá presentarle dentro de los tres (3) días siguientes una propuesta de compromisos, y si no hay acuerdo, el evaluador los fijará unilateralmente dentro de los tres días siguientes.",
        explicacion: "CLAVE OFICIAL. Procedimiento reglado de la CNSC y de la DIAN: ante la omisión de concertación, el evaluado radica su propuesta en 3 días hábiles y el superior tiene 3 días para fijarlos formalmente."
      },
      {
        id: "B",
        texto: "El proceso de evaluación queda suspendido indefinidamente y el funcionario obtiene automáticamente una calificación de 100 puntos en el nivel sobresaliente.",
        explicacion: "Distractor: no existen calificaciones ficticias automáticas al 100% por falta de concertación."
      },
      {
        id: "C",
        texto: "El funcionario debe interponer una demanda de tutela solicitando el reintegro preventivo a la lista de elegibles de la CNSC.",
        explicacion: "Distractor procesalmente improcedente; la lista de elegibles ya agotó su efecto tras el nombramiento."
      }
    ],
    respuestaCorrecta: "A",
    justificacion: "De acuerdo con los acuerdos de la CNSC y la regulación de la DIAN (Decreto Ley 071 de 2020), cuando no se logra la concertación ordinaria dentro del plazo fijado, el servidor evaluado debe presentar formalmente su propuesta de compromisos; ante el silencio o desacuerdo, el evaluador los fija formalmente dentro de los plazos reglamentarios. El mérito exige reglas objetivas de evaluación y no genera calificaciones ficticias automáticas.",
    norma: "Acuerdo Marco de EDL de la CNSC y Reglamentación DIAN (D.L. 071/2020)",
    citaNormativa: "Si el evaluador omite concertar dentro de los 15 días hábiles, el evaluado presentará propuesta dentro de los 3 días siguientes; si no hay acuerdo, el evaluador fijará los compromisos dentro de los 3 días posteriores.",
    dificultad: "ALTA",
    competencia: "Gestión del Desempeño y Procedimiento de Fijación de Compromisos"
  },
  {
    id: "caso_m19_18",
    moduloOrigen: 10,
    moduloNombre: "Módulo 10: Conflicto de Intereses e Impedimentos del Gestor Público",
    ejeId: "disciplinario",
    ejeNombre: "Régimen Disciplinario e Impedimentos",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "A un Gestor III de la División de Fiscalización se le asigna por reparto el expediente de una investigación tributaria sobre inexactitud en el impuesto sobre la renta de la sociedad mercantil 'Inversiones Horizonte S.A.S.'. Al revisar la documentación, el funcionario advierte que uno de los accionistas mayoritarios y representante legal de dicha compañía es su hermano biológico.",
    enunciado: "De conformidad con la Ley 1952 de 2019 (Código General Disciplinario) y el CPACA, ¿cuál es el deber jurídico inmediato e ineludible del servidor?",
    opciones: [
      {
        id: "A",
        texto: "Continuar con la fiscalización aplicando la máxima severidad técnica posible para demostrar a sus superiores que no tiene favoritismo familiar.",
        explicacion: "Distractor que viola la ley: actuar estando impedido vicia de nulidad absoluta todo lo actuado y constituye falta gravísima."
      },
      {
        id: "B",
        texto: "Declararse formal e inmediatamente impedido por escrito ante su superior jerárquico dentro de los tres (3) días siguientes, absteniéndose de realizar cualquier actuación o práctica de pruebas.",
        explicacion: "CLAVE OFICIAL. El parentesco en segundo grado de consanguinidad (hermano) es causal taxativa e insubsanable de impedimento (Art. 40 Ley 1952 y Art. 11 CPACA). El servidor debe manifestarlo por escrito y suspender la actuación."
      },
      {
        id: "C",
        texto: "Transferir informalmente la carpeta del expediente a un compañero de escritorio de confianza sin avisar a la jefatura para no generar trámites burocráticos.",
        explicacion: "Distractor informal que desconoce el trámite administrativo de reparto oficial y designación de funcionario ad-hoc."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 40 del Código Disciplinario y el artículo 11 del CPACA establecen causales obligatorias de impedimento cuando el servidor tenga parentesco dentro del cuarto grado de consanguinidad (hermanos = 2° grado) con las partes interesadas. El servidor debe manifestar el impedimento por escrito a su superior jerárquico inmediato y suspender cualquier actuación. Actuar en conflicto de intereses constituye falta gravísima disciplinaria y vicia de nulidad absoluta las actuaciones administrativas practicadas.",
    norma: "Ley 1952 de 2019 (Código General Disciplinario), Art. 40 y CPACA Art. 11",
    citaNormativa: "Todo servidor público que deba actuar en un asunto respecto del cual se configure alguna causal de impedimento deberá manifestarlo inmediatamente por escrito a su superior.",
    dificultad: "ALTA",
    competencia: "Integridad Pública y Gestión de Conflictos de Interés"
  },
  {
    id: "caso_m19_19",
    moduloOrigen: 10,
    moduloNombre: "Módulo 10: Principio de Separación de Roles en el Proceso Disciplinario (Ley 2094 de 2021)",
    ejeId: "disciplinario",
    ejeNombre: "Garantías Procesales del Código Disciplinario",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Se inicia una queja disciplinaria contra un servidor de la DIAN por presuntas irregularidades en la custodia de un expediente tributario. El funcionario encargado de liderar la etapa de instrucción (investigación y formulación del pliego de cargos) pretende emitir simultáneamente el fallo sancionatorio de primera instancia en el mismo despacho.",
    enunciado: "Conforme a la reforma estructural introducida por la Ley 2094 de 2021 en concordancia con los fallos de la Corte Interamericana de Derechos Humanos, ¿por qué es jurídicamente inviable esta actuación?",
    opciones: [
      {
        id: "A",
        texto: "Porque la sanción disciplinaria solo puede ser ordenada mediante una sentencia de la Corte Suprema de Justicia en sala penal.",
        explicacion: "Distractor que confunde el proceso penal con la potestad disciplinaria administrativa."
      },
      {
        id: "B",
        texto: "Porque la ley exige la separación estricta entre la autoridad de instrucción (investigación) y la autoridad de juzgamiento (fallo), garantizando la imparcialidad objetiva del juzgador disciplinario.",
        explicacion: "CLAVE OFICIAL. La reforma de la Ley 2094 de 2021 (adecuación a estándares CIDH) exige separación funcional absoluta: el funcionario que investiga y formula pliego de cargos NUNCA puede juzgar ni emitir fallo."
      },
      {
        id: "C",
        texto: "Porque las Oficinas de Control Interno Disciplinario fueron suprimidas en el ordenamiento colombiano y todas las quejas pasaron a los Juzgados de Pequeñas Causas.",
        explicacion: "Distractor disparatado sobre la competencia institucional."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La Ley 2094 de 2021 adecuó el ordenamiento disciplinario colombiano a los estándares de la Convención Americana sobre Derechos Humanos (Caso Petro Urrego vs. Colombia), consagrando la separación taxativa de etapas y autoridades: el funcionario que investiga e instruye nunca puede ser el mismo que juzgue y falle. Si un mismo funcionario ejerce ambos roles, se produce la nulidad de todo el proceso por vulneración al debido proceso y al juez imparcial.",
    norma: "Ley 2094 de 2021, Artículo 3 y Jurisprudencia Corte Constitucional C-030/23",
    citaNormativa: "El disciplinable será investigado y juzgado por autoridades diferentes e independientes. La autoridad instructora remitirá el expediente a la autoridad de juzgamiento formalizado el pliego de cargos.",
    dificultad: "ALTA",
    competencia: "Debido Proceso Disciplinario y Estándares Convencionales"
  },
  {
    id: "caso_m19_20",
    moduloOrigen: 11,
    moduloNombre: "Módulo 11: Pérdida de Fuerza Ejecutoria del Acto Administrativo",
    ejeId: "cpaca",
    ejeNombre: "Eficacia y Ejecutoriedad de los Actos Administrativos",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "La DIAN profirió y notificó debidamente una Resolución Sanción contra un contribuyente por no expedir factura electrónica en el año 2018. El acto quedó en firme. Han transcurrido más de cinco (5) años sin que la administración haya iniciado o adelantado el proceso administrativo de cobro coactivo contra el obligado.",
    enunciado: "De conformidad con el artículo 91 del CPACA (Ley 1437 de 2011), ¿qué fenómeno jurídico se ha configurado sobre dicho acto administrativo?",
    opciones: [
      {
        id: "A",
        texto: "Caducidad del medio de control de nulidad simple.",
        explicacion: "Distractor: la acción de nulidad simple no tiene término de caducidad y no opera sobre el cobro."
      },
      {
        id: "B",
        texto: "Pérdida de fuerza ejecutoria por el transcurso de más de cinco (5) años sin que la administración haya ejecutado los actos materiales para hacerlo efectivo.",
        explicacion: "CLAVE OFICIAL. Art. 91 Numeral 3 del CPACA: cuando transcurren 5 años de estar en firme un acto sin que la autoridad adelante las gestiones ejecutivas de cobro, el acto decae y pierde su fuerza ejecutoria."
      },
      {
        id: "C",
        texto: "Nulidad de pleno derecho con sanción pecuniaria directa al Director General.",
        explicacion: "Distractor que confunde el decaimiento de ejecutoriedad con nulidad procesal."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 91, numeral 3 del CPACA dispone expresamente que los actos administrativos pierden fuerza ejecutoria (decaen y no pueden ser cobrados) 'cuando al cabo de cinco (5) años de estar en firme, la autoridad no ha realizado los actos que le correspondan para ejecutarlos'. El contribuyente puede formular la excepción de pérdida de fuerza ejecutoria ante cualquier intento tardío de cobro coactivo.",
    norma: "CPACA (Ley 1437 de 2011), Artículo 91 Numeral 3",
    citaNormativa: "Salvo norma expresa en contrario, los actos administrativos pierden obligatoriedad: 3. Cuando al cabo de cinco (5) años de estar en firme, la autoridad no ha realizado los actos que le correspondan para ejecutarlos.",
    dificultad: "ALTA",
    competencia: "Régimen del Acto Administrativo y Pérdida de Fuerza Ejecutoria"
  },
  {
    id: "caso_m19_21",
    moduloOrigen: 11,
    moduloNombre: "Módulo 11: Notificación Electrónica en el Procedimiento Administrativo",
    ejeId: "cpaca",
    ejeNombre: "Notificaciones y Eficacia Procesal (Ley 2080/2021)",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "La División de Cobranzas de una Dirección Seccional envía un Mandamiento de Pago a un contribuyente obligado a registrar buzón electrónico el día viernes a las 6:30 p.m. El contribuyente no abre el correo durante el fin de semana. El funcionario ejecutor radica órdenes de embargo el día lunes a las 8:00 a.m. argumentando que el acto ya se encuentra formalmente notificado.",
    enunciado: "Conforme a las reglas del artículo 56 del CPACA modificado por la Ley 2080 de 2021, ¿cuál es la situación jurídica de dicha notificación?",
    opciones: [
      {
        id: "A",
        texto: "La actuación del ejecutor es legalmente válida, puesto que la entrega automática en el servidor del destinatario surte efectos inmediatos sin importar el horario.",
        explicacion: "Distractor que desconoce el plazo de gracia legal contemplado en la reforma de la Ley 2080."
      },
      {
        id: "B",
        texto: "La notificación es prematura e ineficaz, dado que la ley dispone que la notificación electrónica se entiende surtida al finalizar el día hábil siguiente a la entrega del correo en el servidor, por lo que el lunes no habían empezado a correr los términos.",
        explicacion: "CLAVE OFICIAL. Bajo la Ley 2080 de 2021, si el usuario no accede antes, la notificación solo se perfecciona 'al finalizar el día hábil siguiente al de la entrega'. Enviado el viernes, el día hábil siguiente es el lunes completo; se entiende surtida al finalizar el lunes."
      },
      {
        id: "C",
        texto: "La notificación es nula de pleno derecho porque los mandamientos de pago jamás pueden enviarse por medios digitales.",
        explicacion: "Distractor erróneo: el buzón electrónico tributario está plenamente autorizado por el Estatuto Tributario y el CPACA."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 56 del CPACA (reformado por la Ley 2080 de 2021) establece de manera perentoria que la notificación electrónica se considerará surtida en la fecha y hora en que el administrado acceda al acto, o al finalizar el día hábil siguiente al de la entrega del correo electrónico en el servidor del destinatario. Habiéndose depositado el viernes fuera de horario, el día hábil siguiente es el lunes; por ende, la notificación solo se perfecciona al finalizar el lunes y los términos comienzan a contarse desde el martes.",
    norma: "Ley 2080 de 2021, Artículo 10 (que modificó el Art. 56 del CPACA)",
    citaNormativa: "La notificación electrónica se entenderá surtida a partir de la fecha y hora en que el administrado acceda al acto, o al finalizar el día hábil siguiente al de la entrega del correo electrónico en el servidor del destinatario.",
    dificultad: "ALTA",
    competencia: "Régimen de Notificaciones Digitales y Cómputo de Términos"
  },
  {
    id: "caso_m19_22",
    moduloOrigen: 11,
    moduloNombre: "Módulo 11: Revocatoria Directa de Actos Particulares y Acción de Lesividad",
    ejeId: "cpaca",
    ejeNombre: "Revocatoria Directa y Acción de Lesividad",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "La DIAN expidió hace 10 meses una resolución reconociendo a una empresa exportadora una devolución de saldo a favor por $350 millones COP. Tras una auditoría interna posterior, un Gestor III descubre que la empresa cometió un error contable en la liquidación y la devolución era improcedente en $100 millones. El jefe de dependencia propone proferir de inmediato una revocatoria directa unilateral de oficio para recuperar los recursos públicos.",
    enunciado: "Con base en el artículo 97 del CPACA, ¿cuál es el análisis jurídico que usted debe presentar como Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Proceder de inmediato con la resolución de revocatoria unilateral de oficio, pues la defensa del tesoro público prima sobre cualquier derecho adquirido por error.",
        explicacion: "Distractor peligroso que viola el debido proceso y la prohibición expresa del Art. 97 del CPACA."
      },
      {
        id: "B",
        texto: "Informar que la DIAN no puede revocar de oficio el acto sin el consentimiento previo, expreso y escrito de la empresa; si esta no lo consiente, la única vía legal es demandar el propio acto mediante Acción de Lesividad ante el Tribunal Administrativo dentro de los 2 años siguientes.",
        explicacion: "CLAVE OFICIAL. Regla de oro del derecho administrativo (Art. 97 CPACA): los actos que crean derechos particulares y subjetivos son inmutables de oficio; requieren consentimiento escrito o demanda de lesividad en 2 años."
      },
      {
        id: "C",
        texto: "Solicitar la intervención de la Fiscalía General para que confisque las cuentas de la exportadora sin agotar la vía contenciosa.",
        explicacion: "Distractor absurdo que desconoce las competencias jurisdiccionales."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "Conforme al artículo 97 del CPACA, los actos administrativos de carácter particular y concreto que hayan creado o modificado una situación jurídica de carácter particular y concreto o reconocido un derecho de igual categoría, no podrán ser revocados sin el consentimiento previo, expreso y escrito del respectivo titular. Ante su negativa o silencio, la entidad estatal debe demandar su propio acto a través del medio de control de Nulidad y Restablecimiento del Derecho (Acción de Lesividad), dentro de los dos (2) años siguientes a su expedición.",
    norma: "CPACA (Ley 1437 de 2011), Artículo 97 y Artículo 164 Numeral 2 Literal b)",
    citaNormativa: "Si el titular niega su consentimiento y la autoridad considera que el acto es contrario a la ley, deberá demandarlo ante la Jurisdicción de lo Contencioso Administrativo.",
    dificultad: "ALTA",
    competencia: "Revocatoria Directa y Garantía de Derechos Adquiridos"
  },
  {
    id: "caso_m19_23",
    moduloOrigen: 12,
    moduloNombre: "Módulo 12: Facultades de Fiscalización y Suspensión de Términos (Art. 779 E.T.)",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "La División de Fiscalización adelanta una investigación sobre el impuesto de renta de una corporación. Faltando dos (2) meses para que expire el término de firmeza de la declaración privada, la DIAN notifica debidamente al contribuyente un Auto que Ordena Inspección Tributaria formal en sus instalaciones.",
    enunciado: "¿Qué efecto procesal vinculante produce la notificación del auto de inspección tributaria sobre los términos de la DIAN para expedir el Requerimiento Especial?",
    opciones: [
      {
        id: "A",
        texto: "No produce ningún efecto sobre los términos ordinarios de firmeza, obligando a proferir el Requerimiento Especial en los dos meses restantes.",
        explicacion: "Distractor que desconoce el beneficio legal de suspensión de términos del Art. 779 E.T."
      },
      {
        id: "B",
        texto: "Suspende por tres (3) meses el término que tiene la DIAN para notificar el Requerimiento Especial y el término de firmeza de la declaración tributaria.",
        explicacion: "CLAVE OFICIAL. Art. 779 del Estatuto Tributario: la inspección tributaria suspende por 3 meses el término para proferir el requerimiento especial, contados a partir de su notificación."
      },
      {
        id: "C",
        texto: "Interrumpe definitivamente la firmeza, otorgándole a la DIAN un nuevo plazo completo de tres (3) años adicionales para fiscalizar.",
        explicacion: "Distractor erróneo: la inspección suspende por 3 meses, no reinicia el cómputo de 3 años."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 779 del Estatuto Tributario prescribe de forma explícita que cuando la administración tributaria ordena la práctica de una Inspección Tributaria, el término para notificar el Requerimiento Especial (y consecuentemente la firmeza de la declaración investigada) se suspende por tres (3) meses, contados a partir de la notificación del auto respectivo.",
    norma: "Estatuto Tributario Nacional, Artículo 779 Inciso Final",
    citaNormativa: "El término para practicar el requerimiento especial se suspenderá durante el tiempo que dure la inspección tributaria, el cual no podrá ser superior a tres (3) meses.",
    dificultad: "ALTA",
    competencia: "Términos Procesales de Fiscalización y Determinación Tributaria"
  },
  {
    id: "caso_m19_24",
    moduloOrigen: 12,
    moduloNombre: "Módulo 12: Obligatoriedad y Términos del Requerimiento Especial (Art. 703 E.T.)",
    ejeId: "tributario",
    ejeNombre: "Determinación Oficial de Tributos",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En una investigación por deducciones improcedentes de una compañía del sector calzado, un funcionario proyecta directamente la Liquidación Oficial de Revisión para 'ahorrar trámites', aduciendo que las pruebas de contabilidad aportadas por el contribuyente son tan contundentes en su falsedad que un Requerimiento Especial sería una pérdida de tiempo innecesaria.",
    enunciado: "Como Gestor III encargado del control técnico y de legalidad de los actos del despacho, ¿cuál es su dictamen sobre dicho proyecto?",
    opciones: [
      {
        id: "A",
        texto: "Aprobar el proyecto de Liquidación Oficial de Revisión directa, considerando que la economía procesal ampara la supresión de pasos en casos de falsedad evidente.",
        explicacion: "Distractor que promueve la nulidad insanable por violación directa del debido proceso tributario."
      },
      {
        id: "B",
        texto: "Rechazar categóricamente el proyecto, advirtiendo que omitir la expedición y notificación previa del Requerimiento Especial vicia de nulidad absoluta e insubsanable todo el proceso de liquidación (Art. 730 num. 2 E.T.), debiendo concederse al contribuyente el término legal de 3 meses para formular objeciones.",
        explicacion: "CLAVE OFICIAL. El Requerimiento Especial es el acto previo sustancial de la determinación oficial. Su omisión genera nulidad absoluta conforme al Art. 730 num 2 E.T., privando al administrado del derecho a réplica en 3 meses (Art. 707)."
      },
      {
        id: "C",
        texto: "Modificar el proyecto convirtiéndolo en un Emplazamiento para Declarar con cobro coactivo preventivo.",
        explicacion: "Distractor confuso que mezcla actos de contribuyentes omisos con contribuyentes que ya declararon."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 703 del Estatuto Tributario consagra el Requerimiento Especial como el acto procesal previo más importante de la determinación tributaria. La DIAN jamás puede expedir una Liquidación Oficial de Revisión sin haber notificado previamente el Requerimiento Especial; su omisión acarrea la causal de Nulidad Absoluta del artículo 730 numeral 2 del E.T., vulnerando el debido proceso y el término de tres (3) meses que otorga el artículo 707 para responder y controvertir.",
    norma: "Estatuto Tributario Nacional, Artículos 703, 707 y 730 Numeral 2",
    citaNormativa: "Antes de efectuar la liquidación de revisión, la administración enviará al contribuyente un requerimiento especial que contenga todos los puntos que se proponga modificar. Los actos son nulos cuando se omita el requerimiento especial previo.",
    dificultad: "ALTA",
    competencia: "Debido Proceso en Fiscalización Tributaria"
  },
  {
    id: "caso_m19_25",
    moduloOrigen: 12,
    moduloNombre: "Módulo 12: Término de la Liquidación Oficial de Revisión y Firmeza (Art. 710 E.T.)",
    ejeId: "tributario",
    ejeNombre: "Firmeza de Declaraciones y Vencimiento de Términos",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Un contribuyente respondió debidamente el Requerimiento Especial formulado por la DIAN el 15 de marzo de 2024. El despacho liquidador, por sobrecarga de expedientes, notifica la Liquidación Oficial de Revisión siete (7) meses después (15 de octubre de 2024), sin haber decretado suspensión de términos ni ampliación probatoria.",
    enunciado: "De conformidad con el artículo 710 del Estatuto Tributario, ¿qué consecuencia jurídica se produce de forma automática?",
    opciones: [
      {
        id: "A",
        texto: "La liquidación oficial es plenamente válida, pero el funcionario responsable recibirá un llamado de atención verbal interno.",
        explicacion: "Distractor que ignora las consecuencias sustantivas sobre la firmeza de la declaración privada."
      },
      {
        id: "B",
        texto: "Opera la firmeza definitiva de la declaración tributaria privada del contribuyente y la liquidación tardía resulta nula de pleno derecho, al haber vencido el plazo legal improrrogable de seis (6) meses para notificarla.",
        explicacion: "CLAVE OFICIAL. Art. 710 del E.T.: la DIAN dispone de 6 meses improrrogables para notificar la LOR tras la respuesta al requerimiento. Vencido el término, opera la firmeza definitiva y la DIAN pierde competencia para modificarla."
      },
      {
        id: "C",
        texto: "La DIAN puede convalidar el retraso aplicando una sanción de mora automática al declarante.",
        explicacion: "Distractor arbitrario y absurdo."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 710 del Estatuto Tributario establece con carácter perentorio que la administración dispone de seis (6) meses, contados a partir del vencimiento del término para responder el Requerimiento Especial, para proferir y notificar la Liquidación Oficial de Revisión. Si transcurre dicho lapso sin que la liquidación sea notificada, opera de forma automática e irreversible la Firmeza Definitiva de la declaración privada, extinguiéndose la facultad de la DIAN para modificarla.",
    norma: "Estatuto Tributario Nacional, Artículo 710 y 714",
    citaNormativa: "Dentro de los seis (6) meses siguientes a la fecha de vencimiento del término para dar respuesta al requerimiento especial, la administración deberá practicar y notificar la liquidación de revisión.",
    dificultad: "ALTA",
    competencia: "Términos Preclusivos en la Determinación del Tributo"
  },
  {
    id: "caso_m19_26",
    moduloOrigen: 12,
    moduloNombre: "Módulo 12: Silencio Administrativo Positivo Tributario (Art. 734 E.T.)",
    ejeId: "tributario",
    ejeNombre: "Recursos en Vía Gubernativa Tributaria",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "A una sociedad comercial se le notificó una Liquidación Oficial de Revisión determinando un mayor impuesto de renta. La empresa interpuso en debida forma el Recurso de Reconsideración el día 10 de febrero de 2024. Al 15 de febrero de 2025 (un año y cinco días después), la Subdirección Jurídica no ha notificado providencia alguna.",
    enunciado: "Con base en el artículo 734 del Estatuto Tributario, ¿cuál es el estado jurídico del litigio tributario?",
    opciones: [
      {
        id: "A",
        texto: "Se entiende negado el recurso por silencio administrativo negativo, habilitando a la DIAN para iniciar el embargo de cuentas de la sociedad.",
        explicacion: "Distractor que confunde la regla general del CPACA con la regla especialísima favorable al administrado del Estatuto Tributario."
      },
      {
        id: "B",
        texto: "Se ha configurado de pleno derecho el Silencio Administrativo Positivo: el recurso se entiende resuelto a favor del contribuyente, la liquidación oficial queda sin efectos y la declaración privada adquiere firmeza inmediata.",
        explicacion: "CLAVE OFICIAL. Art. 734 del E.T.: transcurrido un año desde la interposición del recurso sin notificación del fallo, opera silencio positivo pleno; el recurso se tiene por fallado a favor del recurrente."
      },
      {
        id: "C",
        texto: "El plazo de un año se prorroga automáticamente por otro año más si la DIAN certifica congestión judicial.",
        explicacion: "Distractor inventado; el término de un año es perentorio e improrrogable."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "A diferencia del régimen administrativo general donde impera el silencio negativo, el artículo 734 del Estatuto Tributario consagra una de las figuras más potentes de garantía ciudadana: el Silencio Administrativo Positivo. Si transcurre un (1) año desde la interposición en debida forma del Recurso de Reconsideración sin que la DIAN haya notificado la resolución correspondiente, el recurso se entenderá fallado a favor del contribuyente, cesando cualquier cobro.",
    norma: "Estatuto Tributario Nacional, Artículos 732 y 734",
    citaNormativa: "Si transcurrido un (1) año desde la interposición en debida forma del recurso no se ha notificado la providencia que lo resuelva, se entenderá fallado a favor del recurrente, en cuyo caso la administración de oficio o a petición de parte declarará configurado el silencio.",
    dificultad: "ALTA",
    competencia: "Recursos Tributarios y Garantías Sustanciales del Contribuyente"
  },
  {
    id: "caso_m19_27",
    moduloOrigen: 12,
    moduloNombre: "Módulo 12: Custodia y Violación de la Reserva Tributaria (Art. 583 E.T.)",
    ejeId: "tributario",
    ejeNombre: "Reserva Tributaria y Régimen Disciplinario",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Un prestigioso periodista de un canal de televisión nacional radica un derecho de petición ante la DIAN exigiendo copias íntegras de las declaraciones de renta de los últimos cinco años de tres candidatos al Congreso, argumentando que 'el interés público y el derecho a la información de los votantes prevalecen sobre el secreto tributario'.",
    enunciado: "Usted como Gestor III encargado de proyectar la respuesta, ¿cómo debe fundamentar jurídicamente la decisión institucional?",
    opciones: [
      {
        id: "A",
        texto: "Entregar las copias requeridas de forma inmediata, pues la Ley 1712 de 2014 consagra el principio de máxima publicidad para figuras públicas.",
        explicacion: "Distractor que ignora que la información de declaraciones tributarias goza de reserva legal expresa e insubsanable frente a periodistas."
      },
      {
        id: "B",
        texto: "Denegar la entrega de los documentos invocando la Reserva Legal Tributaria Absoluta (Artículo 583 del Estatuto Tributario y Ley 1712 Art. 19), explicando que dicha información solo puede ser compartida con las autoridades expresamente autorizadas por ley (Fiscalía, Jueces, CGR, PGN).",
        explicacion: "CLAVE OFICIAL. Las declaraciones tributarias son de reserva legal estricta (Art. 583 E.T.). Entregar dicha información a periodistas o particulares sin mandato judicial es un delito penal (Art. 194 C.P.) y falta disciplinaria gravísima causal de destitución inmediata."
      },
      {
        id: "C",
        texto: "Entregar únicamente los montos de patrimonio bruto y esconder los datos de ingresos netos.",
        explicacion: "Distractor que propone una violación parcial de la reserva legal."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 583 del Estatuto Tributario impone la Reserva Tributaria estricta sobre las bases gravables y datos contables de los contribuyentes. Los periodistas o ciudadanos particulares no forman parte de las excepciones legales taxativas (reservadas a Jueces, Fiscalía, Contraloría, Procuraduría, UGPP y UIAF previa solicitud formal). El servidor de la DIAN que viole esta reserva incurre en Falta Gravísima sancionada con Destitución Inmediata (Art. 585 y 586 E.T.) y delito penal.",
    norma: "Estatuto Tributario Arts. 583 y 585 en concordancia con Ley 1712 de 2014 Art. 19",
    citaNormativa: "La información tributaria respecto de las bases gravables y la determinación privada de los impuestos tendrá el carácter de información reservada.",
    dificultad: "ALTA",
    competencia: "Protección de Datos Tributarios y Régimen de Reserva Legal"
  },
  {
    id: "caso_m19_28",
    moduloOrigen: 12,
    moduloNombre: "Módulo 12: Cláusula General Antielusiva y Recaracterización (Art. 869 E.T.)",
    ejeId: "tributario",
    ejeNombre: "Fiscalización Internacional y Cláusula Antielusiva",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En una fiscalización a un grupo empresarial, se constata que crearon una compleja red de empresas 'de papel' en un paraíso fiscal sin empleados ni infraestructura material, cuyo único propósito fue transferir artificialmente utilidades para reducir la tasa efectiva de tributación del impuesto de renta en Colombia.",
    enunciado: "De acuerdo con el artículo 869 del Estatuto Tributario, ¿cuál es la facultad legal que le asiste a la administración tributaria?",
    opciones: [
      {
        id: "A",
        texto: "Aceptar las declaraciones tal como fueron presentadas, pues el contribuyente tiene libertad contractual y empresarial para elegir cualquier figura jurídica.",
        explicacion: "Distractor que ignora la Cláusula General Antielusiva frente a negocios artificiales sin sustancia económica."
      },
      {
        id: "B",
        texto: "Aplicar la Cláusula General Antielusiva y la facultad de Recaracterización, desconociendo las figuras artificiales para liquidar el tributo conforme a la verdadera sustancia y realidad económica de la operación, imponiendo las sanciones por inexactitud correspondientes.",
        explicacion: "CLAVE OFICIAL. Art. 869 del E.T.: ante esquemas abusivos carentes de propósito comercial genuino, la DIAN puede recaracterizar el negocio y determinar el tributo con base en la sustancia económica real."
      },
      {
        id: "C",
        texto: "Solicitar una orden de captura internacional a la Interpol contra los accionistas antes de iniciar la vía administrativa.",
        explicacion: "Distractor exagerado y fuera de competencia de fiscalización."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 869 del Estatuto Tributario consagra la Cláusula General Antielusiva contra el abuso en materia tributaria. Cuando una serie de contratos u operaciones carecen de un propósito económico o de negocios legítimo distinto al mero beneficio fiscal, la DIAN tiene la potestad reglada de recaracterizar los actos, liquidar el impuesto sobre la realidad sustantiva y aplicar las sanciones pertinentes.",
    norma: "Estatuto Tributario Nacional, Artículo 869 y 869-1",
    citaNormativa: "La Administración Tributaria podrá recaracterizar o reconfigurar cualquier operación o serie de operaciones que constituyan abuso en materia tributaria, y desconocer sus efectos.",
    dificultad: "ALTA",
    competencia: "Técnicas Antielusión y Sustancia Económica en Fiscalización"
  },
  {
    id: "caso_m19_29",
    moduloOrigen: 12,
    moduloNombre: "Módulo 12: Control Aduanero y Medidas Cautelares (Ley 1762 de 2015)",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Ley Anticontrabando",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Durante un operativo de control aduanero en un depósito fiscal, funcionarios de la DIAN hallan un lote de electrodomésticos importados por un valor superior a 150 SMLMV que no cuenta con declaraciones de importación ni factura de compra que acredite su legal introducción al territorio aduanero nacional.",
    enunciado: "Conforme a la Ley Anticontrabando (Ley 1762 de 2015) y el Decreto 1165 de 2019, ¿cuáles son las medidas inmediatas que deben adoptarse?",
    opciones: [
      {
        id: "A",
        texto: "Conceder al propietario un plazo de sesenta (60) días hábiles para traer los papeles de importación sin retener la mercancía.",
        explicacion: "Distractor que permite la fuga de mercancía de contrabando."
      },
      {
        id: "B",
        texto: "Practicar la Aprehensión física preventiva de las mercancías, iniciar el proceso administrativo de Decomiso formal y remitir compulsa de copias inmediata a la Fiscalía General de la Nación por el presunto delito de Contrabando (Art. 319 C.P.), al superar el umbral de los 50 SMLMV.",
        explicacion: "CLAVE OFICIAL. La Ley 1762/2015 tipifica el contrabando penal cuando la mercancía supera 50 SMLMV. En sede aduanera opera la aprehensión inmediata y el decomiso; en sede penal se traslada de oficio a la Fiscalía."
      },
      {
        id: "C",
        texto: "Imponer una multa equivalente al 5% del valor de las mercancías y autorizar su libre comercialización inmediata.",
        explicacion: "Distractor ilegal que legalizaría contrabando abierto."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "Bajo el Decreto 1165 de 2019 y la Ley 1762 de 2015, ante la ausencia de soportes legales de introducción, la medida cautelar inmediata es la Aprehensión física de las mercancías para dar inicio al proceso de Decomiso en favor de la Nación. Asimismo, dado que la cuantía supera con creces el límite de 50 Salarios Mínimos Legales Mensuales Vigentes, se configura formalmente la presunta comisión del delito de Contrabando (Art. 319 Código Penal), naciendo el deber legal de dar noticia criminal a la Fiscalía General.",
    norma: "Ley 1762 de 2015, Artículo 4 y Decreto 1165 de 2019",
    citaNormativa: "El que introduzca al territorio nacional mercancías en cuantía superior a 50 SMLMV eludiendo el control aduanero incurrirá en prisión de 8 a 14 años. La DIAN dispondrá la aprehensión y decomiso administrativo.",
    dificultad: "ALTA",
    competencia: "Control de Fronteras, Decomiso Aduanero y Noticia Criminal"
  },
  {
    id: "caso_m19_30",
    moduloOrigen: 13,
    moduloNombre: "Módulo 13: El Modelo MIPG y la Evaluación mediante FURAG",
    ejeId: "mipg",
    ejeNombre: "Dimensiones y Políticas del MIPG",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En la evaluación anual del Modelo Integrado de Planeación y Gestión (MIPG) de la DIAN, el reporte del Formulario Único de Reporte y Avance de Gestión (FURAG) arroja un Índice de Desempeño Institucional (IDI) de 68 puntos sobre 100 en la Dimensión 6: Gestión del Conocimiento y la Innovación, ubicándola en zona roja de alerta.",
    enunciado: "Como Gestor III que apoya al Comité Institucional de Gestión y Desempeño, ¿cuál debe ser su propuesta técnica prioritaria?",
    opciones: [
      {
        id: "A",
        texto: "Impugnar la medición del FURAG ante el Consejo de Estado alegando intromisión ilegítima del DAFP en la soberanía de la DIAN.",
        explicacion: "Distractor disparatado que desconoce el marco vinculante del Decreto 1499 de 2017."
      },
      {
        id: "B",
        texto: "Formular de forma prioritaria en el Plan de Mejoramiento Institucional (PMI) acciones estructuradas para implementar mecanismos de captura, almacenamiento y difusión del conocimiento crítico de los expertos que se jubilan, y laboratorios de innovación operativa.",
        explicacion: "CLAVE OFICIAL. La Dimensión 6 del MIPG se enfoca en que el saber técnico no se pierda por rotación o jubilación, y en fomentar la innovación. Ante un puntaje deficiente en el FURAG, el deber es diseñar acciones de choque en el PMI."
      },
      {
        id: "C",
        texto: "Contratar de urgencia la compra de 500 computadores de escritorio para justificar mayor inversión tecnológica.",
        explicacion: "Distractor que confunde la política de infraestructura tecnológica con la gestión del conocimiento del talento humano."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El Decreto 1499 de 2017 establece que los resultados del FURAG y el IDI son la base diagnóstica para el cierre de brechas de gestión. La Dimensión 6 (Gestión del Conocimiento y la Innovación) liderada por el DAFP busca documentar y salvaguardar el saber hacer de los funcionarios expertos antes de su retiro del servicio y crear cultura de innovación. Al caer en zona de rezago, es mandatorio abrir líneas de mejoramiento institucional en el PMI.",
    norma: "Decreto 1499 de 2017 y Manual Operativo del MIPG (Dimensión 6)",
    citaNormativa: "La gestión del conocimiento busca que la entidad retenga, desarrolle y comparta el conocimiento generado por sus servidores, facilitando la innovación y la memoria institucional.",
    dificultad: "ALTA",
    competencia: "Implementación del MIPG y Evaluación de Resultados Institucionales"
  },
  {
    id: "caso_m19_31",
    moduloOrigen: 14,
    moduloNombre: "Módulo 14: Régimen de Información Clasificada vs. Reservada (Ley 1712 de 2014)",
    ejeId: "transparencia",
    ejeNombre: "Acceso a la Información y Ley 1712",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Una agremiación empresarial solicita a la DIAN la entrega de un informe que contiene la lista de todas las empresas de su sector con sus números de teléfono celular privados, correos personales de sus directivos y los montos exactos de retenciones en la fuente declarados en el último año.",
    enunciado: "De acuerdo con el régimen de excepciones de la Ley Estatutaria 1712 de 2014, ¿cómo debe catalogarse técnicamente dicha información para sustentar la respuesta?",
    opciones: [
      {
        id: "A",
        texto: "Toda la información es pública y de libre acceso, ya que se refiere a personas jurídicas que realizan actividades de comercio.",
        explicacion: "Distractor falso: los datos personales y las declaraciones tienen amparo constitucional estricto."
      },
      {
        id: "B",
        texto: "Los datos de teléfonos celulares y correos personales constituyen Información Pública Clasificada (Art. 18 - protección de la intimidad y datos personales), mientras que las cifras de retenciones declaradas constituyen Información Pública Reservada (Art. 19 - amparada por la Reserva Tributaria del Art. 583 E.T.).",
        explicacion: "CLAVE OFICIAL. Distinción exacta de la Ley 1712: la información Clasificada protege la intimidad de las personas (Habeas Data); la información Reservada protege el orden público, la seguridad o las rentas del Estado (Reserva Tributaria)."
      },
      {
        id: "C",
        texto: "Toda la información se clasifica como secreto de Estado bajo reserva militar permanente de 50 años.",
        explicacion: "Distractor absurdo que usa categorías de seguridad y defensa nacional inexistentes en materia tributaria."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La Ley 1712 de 2014 distingue nítidamente entre dos clases de excepciones: 1. Información Clasificada (Art. 18): Protege derechos individuales e intimidad personal (datos de contacto privados, habeas data); 2. Información Reservada (Art. 19): Protege bienes e intereses colectivos o públicos (como la estabilidad de las finanzas y el secreto de las declaraciones tributarias bajo el Art. 583 E.T.).",
    norma: "Ley Estatutaria 1712 de 2014, Artículos 18 y 19",
    citaNormativa: "Información pública clasificada es aquella información que perteneciendo al ámbito privado de una persona esté en custodia de un sujeto obligado. Información reservada es aquella legalmente exceptuada por daño a intereses públicos.",
    dificultad: "ALTA",
    competencia: "Transparencia y Régimen Constitucional de Excepciones al Acceso"
  },
  {
    id: "caso_m19_32",
    moduloOrigen: 14,
    moduloNombre: "Módulo 14: El Test de Daño y Motivación de la Negativa (Art. 21 Ley 1712)",
    ejeId: "transparencia",
    ejeNombre: "Test de Daño y Motivación de Reservas",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Un ciudadano solicita el mapa de vulnerabilidades de seguridad digital y puertos de red de los servidores del MUISCA. El funcionario encargado pretende responder una simple carta de un renglón diciendo: 'Se niega la petición por ser información reservada conforme a la ley'.",
    enunciado: "¿Qué exigencia constitucional y legal debe cumplir el Gestor III para que el acto administrativo de respuesta no sea anulado por el Tribunal Seccional?",
    opciones: [
      {
        id: "A",
        texto: "La respuesta es suficiente con la sola mención de la palabra reserva, puesto que la seguridad informática del Estado se presume blindada.",
        explicacion: "Distractor que desconoce el mandato del Test de Daño obligatorio."
      },
      {
        id: "B",
        texto: "Debe estructurar obligatoriamente el Test de Daño demostrando por escrito: 1. La norma legal expresa de reserva; 2. La probabilidad de que la divulgación cause un daño real, actual y específico a los servidores fiscales; y 3. La ponderación de que el perjuicio es mayor al interés general de conocerla.",
        explicacion: "CLAVE OFICIAL. El Art. 21 de la Ley 1712 y la jurisprudencia de la Corte Constitucional exigen que toda denegación de información cumpla el Test de Daño en sus tres componentes analíticos."
      },
      {
        id: "C",
        texto: "Debe remitir al ciudadano a una entrevista oral con el Director General para que le explique verbalmente los motivos.",
        explicacion: "Distractor informal e ineficaz en derecho procesal administrativo."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 21 de la Ley Estatutaria 1712 de 2014 y la Corte Constitucional en Sentencia C-274 de 2013 prohíben las denegaciones automáticas o lacónicas. La DIAN está obligada a aplicar el Test de Daño, acreditando de manera concurrente: base legal expresa, amenaza de daño real y específico, y la estricta proporcionalidad del secreto frente al derecho ciudadano de acceso.",
    norma: "Ley Estatutaria 1712 de 2014, Artículo 21 y Sentencia C-274 de 2013",
    citaNormativa: "La carga de la prueba sobre la aplicabilidad de una excepción corresponde al sujeto obligado. Debe demostrar que el daño que causaría la divulgación es real, actual, probable y específico.",
    dificultad: "ALTA",
    competencia: "Garantías de Acceso a la Información y Test de Daño"
  },
  {
    id: "caso_m19_33",
    moduloOrigen: 14,
    moduloNombre: "Módulo 14: Prohibiciones Antitrámites (D.L. 019 de 2012 y 2106 de 2019)",
    ejeId: "transparencia",
    ejeNombre: "Estatuto Antitrámites y Eficiencia Administrativa",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Para tramitar una solicitud de actualización de RUT de una persona natural en ventanilla seccional, el funcionario le exige al contribuyente aportar: 1. Fotocopia de la cédula de ciudadanía ampliada al 150%; 2. Copia del certificado judicial de la Policía; y 3. Copia física de la declaración de renta presentada ante la misma DIAN el año anterior.",
    enunciado: "Frente a las prohibiciones expresas del régimen antitrámites en Colombia, ¿cuál es la determinación correcta?",
    opciones: [
      {
        id: "A",
        texto: "La exigencia es válida para blindar la seguridad del trámite tributario contra la suplantación de identidad.",
        explicacion: "Distractor que ignora las prohibiciones legales categóricas del régimen antitrámites."
      },
      {
        id: "B",
        texto: "Todas las exigencias son ilegales: está prohibido exigir fotocopia ampliada de cédula (D.L. 2106/2019), certificados de antecedentes que se consultan en línea (D.L. 019/2012) y documentos que ya reposen en los archivos o bases de la propia entidad.",
        explicacion: "CLAVE OFICIAL. El Decreto Ley 019/2012 y el D.L. 2106/2019 prohíben taxativamente pedir documentos que ya tiene la entidad, antecedentes de otras agencias públicas e imponer el requisito de la cédula al 150%."
      },
      {
        id: "C",
        texto: "Solo es ilegal pedir el certificado judicial; la fotocopia ampliada y las declaraciones anteriores son obligatorias.",
        explicacion: "Distractor que desconoce la prohibición expresa de la cédula ampliada y de documentos internos."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El Decreto Ley 019 de 2012 (Art. 9 y 18) y el Decreto Ley 2106 de 2019 proscriben de manera tajante tres prácticas viciosas de la burocracia: 1. Exigir documentos o copias que reposen en la misma entidad o en sus sistemas informáticos; 2. Exigir constancias de antecedentes judiciales o fiscales que el servidor debe consultar directamente en línea; 3. Exigir fotocopias de documentos de identidad ampliados.",
    norma: "Decreto Ley 019 de 2012 Arts. 9 y 18 y Decreto Ley 2106 de 2019 Art. 12",
    citaNormativa: "Ninguna entidad pública podrá exigir fotocopia de la cédula de ciudadanía ampliada al 150% ni documentos que reposen en sus propios archivos o bases de datos.",
    dificultad: "ALTA",
    competencia: "Simplificación Administrativa y Régimen Antitrámites"
  },
  {
    id: "caso_m19_34",
    moduloOrigen: 15,
    moduloNombre: "Módulo 15: Ciclo Vital Documental y Valores Primarios vs. Secundarios",
    ejeId: "gestion_documental",
    ejeNombre: "Gestión Documental y Archivo (Ley 594/2000)",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "En una Seccional de la DIAN se decide reorganizar el archivo. Un servidor propone trasladar de inmediato al Archivo Histórico los expedientes de fiscalización del año 2022 que se encuentran demandados ante el Consejo de Estado, alegando que 'ya pasaron más de dos años desde su emisión'.",
    enunciado: "De conformidad con la Ley General de Archivos (Ley 594 de 2000) y la teoría de las tres edades, ¿cuál es el análisis archivístico correcto?",
    opciones: [
      {
        id: "A",
        texto: "El traslado es correcto, pues el Archivo Histórico custodia todos los documentos de más de dos años de vigencia.",
        explicacion: "Distractor absurdo sobre los tiempos del ciclo vital archivístico."
      },
      {
        id: "B",
        texto: "El traslado es improcedente: mientras los expedientes tengan procesos judiciales activos conservan sus Valores Primarios (Legal, Administrativo y Fiscal), por lo cual deben permanecer en el Archivo de Gestión o Central hasta su fallo definitivo.",
        explicacion: "CLAVE OFICIAL. Los documentos en trámite o litigio conservan vigentes sus valores primarios. Solo pasan a custodia permanente en Archivo Histórico cuando prescriben las acciones legales y adquieren valor secundario (histórico o científico)."
      },
      {
        id: "C",
        texto: "Los documentos deben ser triturados para evitar que los demandantes los utilicen contra la DIAN.",
        explicacion: "Distractor delictivo (destrucción de documento público)."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La Ley 594 de 2000 estructura el ciclo vital en: Archivo de Gestión, Central e Histórico. Los valores primarios (administrativo, legal, fiscal, contable y técnico) subsisten mientras el acto o expediente produzca efectos jurídicos o esté sujeto a controversia judicial. Un expediente en litigio ante el Consejo de Estado no puede transferirse al archivo histórico ni ser eliminado, pues es la prueba judicial del Estado.",
    norma: "Ley 594 de 2000 (Ley General de Archivos), Artículos 4 y 23 y Decreto 1080 de 2015",
    citaNormativa: "Los documentos en trámite o con efectos jurídicos vigentes forman parte de los archivos de gestión y central por la preservación de sus valores primarios.",
    dificultad: "ALTA",
    competencia: "Administración del Ciclo Vital de los Documentos Públicos"
  },
  {
    id: "caso_m19_35",
    moduloOrigen: 15,
    moduloNombre: "Módulo 15: El Expediente Electrónico y el Hash Criptográfico (Ley 2080)",
    ejeId: "gestion_documental",
    ejeNombre: "Expediente Electrónico y Seguridad Digital",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Durante un juicio contencioso administrativo, el apoderado de un contribuyente alega que la DIAN alteró una resolución dentro del expediente electrónico para modificar la fecha de notificación. El perito informático de la entidad presenta el Índice Electrónico Certificado y demuestra que el código Hash SHA-256 del archivo no ha variado en ningún dígito desde su radicación.",
    enunciado: "A la luz de los artículos 36A y siguientes del CPACA (Ley 2080 de 2021), ¿cuál es la consecuencia técnica y jurídica de dicha prueba?",
    opciones: [
      {
        id: "A",
        texto: "El hash solo tiene fines estadísticos y no prueba la autenticidad ni integridad del documento en juicio.",
        explicacion: "Distractor erróneo: la ley otorga plena validez técnica y probatoria a la firma y algoritmo hash."
      },
      {
        id: "B",
        texto: "Se demuestra con certeza científica la integridad e inalterabilidad del documento, acreditando la cadena de custodia probatoria y desvirtuando de plano la presunta adulteración de la fecha.",
        explicacion: "CLAVE OFICIAL. El Hash SHA-256 es la huella digital criptográfica única. Si se hubiera modificado un solo carácter o fecha, el hash cambiaría radicalmente. La coincidencia del hash prueba la integridad absoluta del expediente."
      },
      {
        id: "C",
        texto: "La prueba es inadmisible y el juez debe exigir el envío del papel físico original con sellos húmedos.",
        explicacion: "Distractor que desconoce el principio de equivalencia funcional y la digitalización judicial de la Ley 2080."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La Ley 2080 de 2021 institucionalizó el Expediente Electrónico y el Índice Electrónico Certificado. El uso del algoritmo criptográfico hash (SHA-256) garantiza la función de equivalencia funcional de la Ley 527 de 1999: si el hash coincide de forma idéntica con el registrado en el índice, se comprueba científicamente que el archivo no fue manipulado ni modificado, teniendo plena validez probatoria ante los jueces.",
    norma: "CPACA Arts. 36A y 36B (incorporados por Ley 2080 de 2021) y Ley 527 de 1999",
    citaNormativa: "El expediente electrónico deberá contar con un índice electrónico firmado que garantice la integridad, inalterabilidad y autenticidad de los documentos que lo conforman.",
    dificultad: "ALTA",
    competencia: "Gestión del Expediente Electrónico y Evidencia Digital"
  },
  {
    id: "caso_m19_36",
    moduloOrigen: 15,
    moduloNombre: "Módulo 15: Régimen Penal y Disciplinario de la Destrucción de Documentos",
    ejeId: "gestion_documental",
    ejeNombre: "Disposición Final y Régimen Sancionatorio Documental",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Para desocupar una bodega que será remodelada en una Dirección Seccional, el Administrador local ordena a los Gestores III tomar 200 cajas de expedientes de cobro de hace 8 años y arrojarlas al camión recolector de basura de la ciudad, afirmando que 'esos procesos ya prescribieron y no se necesitan'.",
    enunciado: "¿Cuál es la tipificación jurídica y las consecuencias legales de dicha orden administrativa?",
    opciones: [
      {
        id: "A",
        texto: "Es una actuación administrativa legítima dentro de las facultades de autogestión de espacio físico del Administrador Seccional.",
        explicacion: "Distractor que ignora el régimen legal estricto de eliminación de archivos públicos."
      },
      {
        id: "B",
        texto: "Configura una actuación manifiestamente ilegal que constituye el delito de Destrucción, Supresión u Ocultamiento de Documento Público (Artículo 292 del Código Penal: 4 a 12 años de prisión) y Falta Gravísima Disciplinaria, dado que ninguna eliminación procede sin cumplir la TRD, acta FUID, publicación por 30 días en web y aprobación del Comité.",
        explicacion: "CLAVE OFICIAL. Arrojar documentos a la basura sin cumplir la TRD, acta formal y publicación de 30 días es un delito penal tipificado en el Art. 292 C.P. y falta gravísima causal de destitución."
      },
      {
        id: "C",
        texto: "Solo constituye una falta leve administrativa que se subsana pagando el valor del papel reciclado.",
        explicacion: "Distractor que minimiza una conducta punible de orden penal."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La eliminación de documentos públicos en Colombia está estrictamente reglada por el Archivo General de la Nación. Ningún funcionario puede destruir expedientes sin: 1. Cumplimiento de los tiempos de retención en la TRD; 2. Levantamiento de Acta de Eliminación con inventario FUID; 3. Publicación del inventario durante treinta (30) días en la página web; y 4. Aprobación del Comité de Gestión. Destruirlos irregularmente tipifica el delito del Art. 292 del Código Penal (4 a 12 años de prisión) y falta gravísima disciplinaria.",
    norma: "Ley 594 de 2000, Acuerdo AGN 004 de 2019 y Código Penal Colombiano Art. 292",
    citaNormativa: "El que destruya, suprima u oculte total o parcialmente documento público que deba servir de prueba incurrirá en prisión de cuatro (4) a doce (12) años.",
    dificultad: "ALTA",
    competencia: "Custodia de Archivos Públicos y Responsabilidad Penal"
  },
  {
    id: "caso_m19_37",
    moduloOrigen: 16,
    moduloNombre: "Módulo 16: Términos Perentorios en PQRSDF y Silencio Positivo en Copias",
    ejeId: "servicio",
    ejeNombre: "Derecho de Petición (Ley 1755 de 2015)",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Un ciudadano radica formalmente una solicitud de copias de los actos administrativos mediante los cuales se adjudicó una licitación en la DIAN. Transcurren doce (12) días hábiles sin que la entidad expida las copias ni comunique prórroga alguna. Al día 13, el funcionario de correspondencia pretende liquidarle un cobro de $500 por cada fotocopia.",
    enunciado: "Con base en el parágrafo del artículo 14 de la Ley Estatutaria 1755 de 2015, ¿cuál es la obligación ineludible de la DIAN?",
    opciones: [
      {
        id: "A",
        texto: "Archivar la solicitud por haber superado el término y exigir al ciudadano que vuelva a radicarla.",
        explicacion: "Distractor abusivo que vulnera el derecho de petición."
      },
      {
        id: "B",
        texto: "Hacer entrega material de las copias solicitadas de manera obligatoria y gratuita al peticionario dentro de los tres (3) días hábiles siguientes, al haberse configurado la aceptación legal tácita por vencimiento del plazo de 10 días.",
        explicacion: "CLAVE OFICIAL. Parágrafo Art. 14 Ley 1755: si no se responde la solicitud de documentos en 10 días, se entiende legalmente aceptada; la entidad no puede negar los documentos y debe entregarlos gratis en 3 días."
      },
      {
        id: "C",
        texto: "Cobrar el doble del valor de las copias por concepto de recargo administrativo de trámite extemporáneo.",
        explicacion: "Distractor inventado e ilegal."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El parágrafo del artículo 14 de la Ley 1755 de 2015 consagra una sanción expresa a la mora de la administración: si transcurren los diez (10) días hábiles para resolver peticiones de información o copias sin que la entidad responda, la petición se entenderá aceptada para todos los efectos. La DIAN no podrá negar los documentos y tiene la obligación imperativa de entregarlos gratuitamente dentro de los tres (3) días hábiles siguientes.",
    norma: "Ley Estatutaria 1755 de 2015, Artículo 14 Parágrafo",
    citaNormativa: "Si a la fecha de vencimiento del término de diez (10) días la autoridad no ha emitido respuesta, la petición se entenderá aceptada y se deberán entregar las copias dentro de los tres (3) días siguientes sin cobrar suma alguna.",
    dificultad: "ALTA",
    competencia: "Términos Legales de Atención y Sanciones por Mora"
  },
  {
    id: "caso_m19_38",
    moduloOrigen: 16,
    moduloNombre: "Módulo 16: Trámite de Incompetencia y Desistimiento Tácito en Peticiones",
    ejeId: "servicio",
    ejeNombre: "Procedimiento de Trámite en Peticiones",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "A la Seccional de la DIAN llega una petición donde un ciudadano formula dos pretensiones: 1. La prescripción del impuesto de Industria y Comercio (ICA) municipal; y 2. La solicitud de aclaración de una retención en la fuente nacional practicada sobre sus ingresos de trabajo.",
    enunciado: "Conforme a las reglas de los artículos 17 y 21 de la Ley 1755 de 2015, ¿cuál es el procedimiento que debe aplicar el Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar de plano la totalidad de la solicitud, manifestando que al incluir un impuesto municipal la DIAN pierde competencia general.",
        explicacion: "Distractor que omite el trámite reglado y vulnera el derecho fundamental del ciudadano."
      },
      {
        id: "B",
        texto: "Resolver de fondo la pretensión sobre retención en la fuente en el término de 15 días hábiles, y respecto a la pretensión del ICA municipal, remitir el expediente a la Secretaría de Hacienda del respectivo municipio dentro de los cinco (5) días hábiles siguientes informando al ciudadano.",
        explicacion: "CLAVE OFICIAL. Art. 21 Ley 1755: si una parte es incompetencia, se traslada a la autoridad competente en 5 días hábiles avisando al interesado, y se sustancian los aspectos que sí competen a la entidad."
      },
      {
        id: "C",
        texto: "Archivar el expediente y esperar a que el peticionario presente una tutela para atenderlo.",
        explicacion: "Distractor que promueve la negligencia y la violación de deberes funcionales."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "El artículo 21 de la Ley Estatutaria 1755 de 2015 dispone que cuando una autoridad recibe una solicitud sobre asuntos que escapan a su órbita funcional, no puede rechazarla arbitrariamente: debe trasladar la parte no competente a la entidad facultada (Secretaría de Hacienda Municipal) dentro de los cinco (5) días hábiles siguientes e informar al peticionario, tramitando de fondo la pretensión tributaria nacional que sí corresponde a la DIAN dentro del plazo ordinario de 15 días.",
    norma: "Ley Estatutaria 1755 de 2015, Artículo 21 (Traslado por Incompetencia)",
    citaNormativa: "Si la autoridad a quien se dirige la petición no es la competente, se remitirá a la que la sea en un término de cinco (5) días hábiles y de ello se informará al peticionario.",
    dificultad: "ALTA",
    competencia: "Gestión de Trámites PQRSDF y Traslado Administrativo"
  },
  {
    id: "caso_m19_39",
    moduloOrigen: 17,
    moduloNombre: "Módulo 17: Excel Avanzado para Cruces Fiscales (BUSCARX vs BUSCARV)",
    ejeId: "ofimatica",
    ejeNombre: "Herramientas Ofimáticas Aplicadas a la Fiscalización",
    nivel: "Profesional",
    tipo: "Funcional (Eliminatorio - 65%)",
    caso: "Un Gestor III debe cruzar una base de datos de 250.000 registros de información exógena donde la columna clave (el NIT del declarante) se encuentra en la columna D, y la información del ingreso que se requiere auditar está ubicada a la izquierda, en la columna B. Además, frecuentemente se añaden columnas intermedias en los reportes.",
    enunciado: "¿Cuál es la función de Microsoft Excel técnicamente idónea y moderna para realizar este cruce masivo sin desconfigurar la fórmula?",
    opciones: [
      {
        id: "A",
        texto: "La función =BUSCARV(D2; B:D; 1; FALSO) , ya que es la única compatible con el sistema MUISCA.",
        explicacion: "Distractor con error técnico grave: BUSCARV solo puede buscar valores ubicados a la derecha de la columna buscada."
      },
      {
        id: "B",
        texto: "La función =BUSCARX(D2; D:D; B:B; 'No reporta'; 0) , dado que permite buscar de derecha a izquierda, no se desconfigura si se insertan columnas intermedias y gestiona errores nativamente.",
        explicacion: "CLAVE OFICIAL. BUSCARX supera estructuralmente las limitaciones de BUSCARV: extrae a la izquierda, es inmune a la inserción de columnas y permite parametrizar textos de error sin anidar SI.ERROR."
      },
      {
        id: "C",
        texto: "La función =SUMA(B:D) combinada con filtros manuales con el mouse fila por fila.",
        explicacion: "Distractor inviable e ineficiente para 250.000 registros."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La función BUSCARX (disponible en Excel moderno) supera la limitación histórica de BUSCARV, la cual solo permite extraer información hacia la derecha de la matriz. BUSCARX permite buscar en cualquier dirección (de derecha a izquierda: busca en la columna D y devuelve la columna B), es totalmente inmune a la inserción o eliminación de columnas intermedias (a diferencia de BUSCARV que depende de un índice numérico estático) y maneja datos no encontrados en su cuarto argumento.",
    norma: "Estándar Oficial de Microsoft Excel Avanzado y Analítica de Datos DIAN",
    citaNormativa: "=BUSCARX(valor_buscado; matriz_buscada; matriz_devuelta; [si_no_se_encuentra]; [modo_de_coincidencia])",
    dificultad: "ALTA",
    competencia: "Analítica de Datos Tributarios y Cruce Masivo de Bases"
  },
  {
    id: "caso_m19_40",
    moduloOrigen: 18,
    moduloNombre: "Módulo 18: Competencias Comportamentales del Gestor III (Comportamiento Ético Nivel 4)",
    ejeId: "comportamentales",
    ejeNombre: "Competencias Comportamentales e Integridad",
    nivel: "Profesional",
    tipo: "Comportamental (Clasificatorio - 15%)",
    caso: "Usted como Gestor III de la División de Cobranzas descubre que un tramitador externo ofrece a funcionarios de la oficina dádivas económicas en efectivo para 'engavetar' expedientes de cobro coactivo de grandes deudores fiscales para que se configure la pérdida de fuerza ejecutoria de los 5 años. Un compañero le dice: 'No te metas en problemas, ellos tienen contactos políticos, limítate a tus propios expedientes'.",
    enunciado: "Frente a las conductas observables del Nivel 4 de Comportamiento Ético exigido en la Ficha TP-DE-3006 y el Código de Integridad, ¿cuál debe ser su determinación?",
    opciones: [
      {
        id: "A",
        texto: "Seguir el consejo del compañero para salvaguardar la tranquilidad laboral en la seccional, manteniendo una actitud pasiva y neutral.",
        explicacion: "Distractor pasivo y cómplice que viola el Nivel 4 de conducta ética y el deber de denuncia."
      },
      {
        id: "B",
        texto: "Rechazar categóricamente cualquier complicidad o silencio, y formular de inmediato la denuncia penal y disciplinaria documentada ante la Dirección de Gestión de Fiscalización, la Oficina de Control Interno Disciplinario y la Fiscalía, aportando las pruebas correspondientes.",
        explicacion: "CLAVE OFICIAL. El Gestor III tiene nivel exigido 4 en Comportamiento Ético (máximo dominio conductual): promueve la cultura de legalidad, rechaza de plano presiones indebidas y denuncia inmediatamente los hechos de corrupción sin excusas."
      },
      {
        id: "C",
        texto: "Confrontar agresivamente a los tramitadores en el pasillo de la entidad para amedrentarlos físicamente.",
        explicacion: "Distractor agresivo que vulnera las normas de respeto y debido proceso."
      }
    ],
    respuestaCorrecta: "B",
    justificacion: "La Ficha Técnica TP-DE-3006 asigna al Gestor III el Nivel 4 (Máximo Dominio) en la competencia de Comportamiento Ético. Sus conductas observables obligatorias demandan: 'Rechazar de plano y denunciar cualquier insinuación, dádiva, presión indebida o promesa de beneficio personal, convirtiéndose en referente de transparencia'. La omisión de denuncia constituye además falta disciplinaria gravísima y delito de prevaricato por omisión.",
    norma: "Ficha Técnica Oficial TP-DE-3006 (Formato FT-TAH-1824) y Código de Integridad DAFP (Valor Honestidad)",
    citaNormativa: "Conducta de Nivel 4: Denuncia oportunamente los actos de corrupción de los que tenga conocimiento y rechaza cualquier beneficio ilícito.",
    dificultad: "ALTA",
    competencia: "Comportamiento Ético Nivel 4 e Integridad en el Servicio Público"
  }
];

// Exportación para navegadores y Node.js
if (typeof window !== "undefined") {
  window.CASOS_MAESTROS_FICHA_3006 = CASOS_MAESTROS_FICHA_3006;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CASOS_MAESTROS_FICHA_3006 };
}
