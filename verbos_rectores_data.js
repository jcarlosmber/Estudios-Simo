// verbos_rectores_data.js - Catálogo Oficial de 97 Verbos Rectores (DAFP / DASCD / CNSC)
// Incluye reglas para descartar distractores por extralimitación vs pasividad y banco de Speed Drill "Caza-Distractores"

(function(global) {
  const fs = typeof require !== 'undefined' ? require('fs') : null;
  const path = typeof require !== 'undefined' ? require('path') : null;

  // Catálogo completo de 97 verbos
  const VERBOS_CATALOGO = [
    { num: 1, verbo: "Absolver", niveles: { DIR: false, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Resolver dudas jurídicas, técnicas o consultas complejas." },
    { num: 2, verbo: "Accesar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Ingresar o consultar sistemas de información y bases de datos." },
    { num: 3, verbo: "Accionar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Poner en marcha mecanismos, planes o medidas correctivas." },
    { num: 4, verbo: "Acompañar", niveles: { DIR: false, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Realizar seguimiento o soporte estratégico en procesos y comités." },
    { num: 5, verbo: "Activar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Poner en funcionamiento protocolos, alarmas o trámites operativos." },
    { num: 6, verbo: "Actualizar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: true }, descripcion: "Poner al día registros, inventarios, normas o expedientes." },
    { num: 7, verbo: "Actuar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Intervenir en procesos administrativos, disciplinarios o judiciales." },
    { num: 8, verbo: "Adaptar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Ajustar metodologías, instrumentos o normas a un contexto específico." },
    { num: 9, verbo: "Adecuar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Modificar procesos o herramientas según directrices institucionales." },
    { num: 10, verbo: "Adelantar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Llevar a cabo trámites, investigaciones, estudios o procesos técnicos." },
    { num: 11, verbo: "Administrar", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Gestionar recursos, bienes, sistemas o programas institucionales." },
    { num: 12, verbo: "Adquirir", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Gestionar la contratación o compra de bienes y servicios." },
    { num: 13, verbo: "Alimentar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Ingresar datos e información en sistemas y plataformas tecnológicas." },
    { num: 14, verbo: "Almacenar", niveles: { DIR: false, ASE: false, PRO: false, TEC: false, ASI: true }, descripcion: "Guardar y custodiar documentos físicos, inventarios o suministros." },
    { num: 15, verbo: "Ampliar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Extender el alcance de coberturas, análisis o proyectos." },
    { num: 16, verbo: "Analizar", niveles: { DIR: false, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Examinar detalladamente datos, normas o casos para emitir conceptos." },
    { num: 17, verbo: "Aplicar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Ejecutar normas, métodos, fórmulas, procedimientos o pruebas." },
    { num: 18, verbo: "Apoyar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Asistir operativamente en la ejecución de tareas de un área." },
    { num: 19, verbo: "Aprobar", niveles: { DIR: true, ASE: false, PRO: false, TEC: false, ASI: false }, descripcion: "Dar visto bueno oficial o adoptar actos administrativos y planes." },
    { num: 20, verbo: "Armar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Ensamblar expedientes, carpetas, folios o equipos físicos." },
    { num: 21, verbo: "Arreglar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Realizar labores de mantenimiento, acondicionamiento o reparación básica." },
    { num: 22, verbo: "Articular", niveles: { DIR: true, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Enlazar dependencias, entidades o procesos para un fin común." },
    { num: 23, verbo: "Asesorar", niveles: { DIR: false, ASE: true, PRO: false, TEC: false, ASI: false }, descripcion: "Dar consejo técnico especializado a la alta dirección." },
    { num: 24, verbo: "Asignar", niveles: { DIR: true, ASE: false, PRO: false, TEC: false, ASI: false }, descripcion: "Distribuir cargas de trabajo, recursos o funciones al personal." },
    { num: 25, verbo: "Asistir", niveles: { DIR: false, ASE: true, PRO: true, TEC: true, ASI: true }, descripcion: "Prestar apoyo técnico, legal o administrativo según el nivel." },
    { num: 26, verbo: "Atender", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Recibir y brindar respuesta directa a usuarios y ciudadanos." },
    { num: 27, verbo: "Brindar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Ofrecer orientación, información o servicio al ciudadano." },
    { num: 28, verbo: "Capacitar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Impartir formación y entrenamiento técnico o misional." },
    { num: 29, verbo: "Catalogar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Registrar y ordenar material bibliográfico, documental o bienes." },
    { num: 30, verbo: "Censar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Realizar levantamiento masivo de datos de usuarios o predios." },
    { num: 31, verbo: "Clasificar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Agrupar documentos, solicitudes o información por criterios." },
    { num: 32, verbo: "Compilar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Reunir normas, jurisprudencia, estadísticas o antecedentes." },
    { num: 33, verbo: "Calificar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Asignar puntajes, conceptos de idoneidad o evaluar méritos." },
    { num: 34, verbo: "Codificar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: false }, descripcion: "Asignar códigos presupuestales, arancelarios o archivísticos." },
    { num: 35, verbo: "Colaborar", niveles: { DIR: false, ASE: false, PRO: false, TEC: false, ASI: true }, descripcion: "Cooperar en actividades secundarias o de apoyo general." },
    { num: 36, verbo: "Comunicar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: true }, descripcion: "Notificar formalmente decisiones, traslados o circulares." },
    { num: 37, verbo: "Conceptualizar", niveles: { DIR: false, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Desarrollar ideas teóricas o doctrinales sobre una materia." },
    { num: 38, verbo: "Conceptuar", niveles: { DIR: false, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Emitir dictamen técnico o jurídico de fondo sobre un tema." },
    { num: 39, verbo: "Conducir", niveles: { DIR: false, ASE: false, PRO: false, TEC: false, ASI: true }, descripcion: "Operar vehículos oficiales o transportar personas y bienes." },
    { num: 40, verbo: "Configurar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Ajustar parámetros de software, bases de datos o redes." },
    { num: 41, verbo: "Conocer", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Asumir el conocimiento formal de un expediente o recurso." },
    { num: 42, verbo: "Consolidar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Unificar informes, cifras contables o datos de diversas fuentes." },
    { num: 43, verbo: "Contabilizar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: false }, descripcion: "Registrar transacciones contables, presupuestales o financieras." },
    { num: 44, verbo: "Controlar", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Verificar el cumplimiento de planes, metas, tributos o aduanas." },
    { num: 45, verbo: "Coordinar", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Armonizar y dirigir grupos de trabajo o procesos misionales." },
    { num: 46, verbo: "Cumplir", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Acatar órdenes legítimas, reglamentos o metas operativas." },
    { num: 47, verbo: "Custodiar", niveles: { DIR: false, ASE: false, PRO: false, TEC: false, ASI: true }, descripcion: "Salvaguardar expedientes, títulos valores o bienes del Estado." },
    { num: 48, verbo: "Dar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Proporcionar información, trámite o traslado de solicitudes." },
    { num: 49, verbo: "Definir", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Establecer políticas, criterios de interpretación o directrices." },
    { num: 50, verbo: "Desarrollar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Elaborar proyectos, software, auditorías o fiscalizaciones." },
    { num: 51, verbo: "Desempeñar", niveles: { DIR: true, ASE: true, PRO: true, TEC: true, ASI: true }, descripcion: "Cumplir las funciones asignadas conforme a la naturaleza del empleo." },
    { num: 52, verbo: "Dirigir", niveles: { DIR: true, ASE: false, PRO: false, TEC: false, ASI: false }, descripcion: "Conducir las políticas, dependencias o áreas de la entidad." },
    { num: 53, verbo: "Diseñar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Crear modelos, instrumentos, manuales, sistemas o políticas." },
    { num: 54, verbo: "Efectuar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Realizar cobros, inspecciones físicas, liquidaciones o notificaciones." },
    { num: 55, verbo: "Ejercer", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Desempeñar facultades de fiscalización, cobro o control disciplinario." },
    { num: 56, verbo: "Elaborar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: true }, descripcion: "Redactar actos administrativos, liquidaciones, conceptos o actas." },
    { num: 57, verbo: "Emitir", niveles: { DIR: true, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Proferir resoluciones, fallos, dictámenes o conceptos oficiales." },
    { num: 58, verbo: "Establecer", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Fijar mecanismos, metodologías o procedimientos institucionales." },
    { num: 59, verbo: "Estudiar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Analizar expedientes, títulos, declaraciones o solicitudes." },
    { num: 60, verbo: "Evaluar", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Medir resultados, desempeño institucional, proyectos o riesgos." },
    { num: 61, verbo: "Examinar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Inspeccionar mercancías, contabilidad o libros de comercio." },
    { num: 62, verbo: "Facilitar", niveles: { DIR: false, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Mediar o proporcionar condiciones para agilizar un proceso." },
    { num: 63, verbo: "Fallar", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Resolver procesos de fondo (disciplinarios, sancionatorios o tributarios)." },
    { num: 64, verbo: "Fijar", niveles: { DIR: true, ASE: false, PRO: false, TEC: false, ASI: false }, descripcion: "Determinar calendarios tributarios, tarifas o lineamientos." },
    { num: 65, verbo: "Fomentar", niveles: { DIR: true, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Promover la cultura tributaria, la ética o la transparencia." },
    { num: 66, verbo: "Generar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Producir reportes, liquidaciones de aforo o estadísticas." },
    { num: 67, verbo: "Gestionar", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Tramitar recursos, acuerdos de pago o soluciones institucionales." },
    { num: 68, verbo: "Hacer", niveles: { DIR: false, ASE: false, PRO: false, TEC: false, ASI: true }, descripcion: "Ejecutar tareas materiales y operativas directas." },
    { num: 69, verbo: "Identificar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Detectar riesgos, omisos, inexactos o cuellos de botella." },
    { num: 70, verbo: "Implementar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Poner en práctica planes de auditoría, control o software." },
    { num: 71, verbo: "Incorporar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Incluir información, pruebas o bienes al patrimonio/expediente." },
    { num: 72, verbo: "Informar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: true }, descripcion: "Rendir cuentas del estado de procesos o trámites asignados." },
    { num: 73, verbo: "Ingresar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Digitar datos, registrar radicados o almacenar insumos." },
    { num: 74, verbo: "Inspeccionar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Efectuar visitas tributarias, aduaneras o de control interno." },
    { num: 75, verbo: "Inventariar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Levantar el inventario de archivo, bienes o activos fijos." },
    { num: 76, verbo: "Investigar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Indagar sobre evasión, contrabando o infracciones aduaneras." },
    { num: 77, verbo: "Liderar", niveles: { DIR: true, ASE: false, PRO: false, TEC: false, ASI: false }, descripcion: "Encabezar equipos estratégicos o transformaciones organizacionales." },
    { num: 78, verbo: "Mantener", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Conservar actualizados sistemas, tablas de retención o archivos." },
    { num: 79, verbo: "Monitorear", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Hacer seguimiento periódico a indicadores y planes de acción." },
    { num: 80, verbo: "Notificar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Comunicar formalmente requerimientos, autos o liquidaciones." },
    { num: 81, verbo: "Operar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: false }, descripcion: "Manejar sistemas tecnológicos, escáneres o software misional." },
    { num: 82, verbo: "Optimizar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Mejorar la eficiencia de procesos, recaudo o tiempos de respuesta." },
    { num: 83, verbo: "Ordenar", niveles: { DIR: true, ASE: false, PRO: false, TEC: false, ASI: false }, descripcion: "Emitir mandamientos de pago, actos de decomiso o gasto público." },
    { num: 84, verbo: "Organizar", niveles: { DIR: true, ASE: true, PRO: true, TEC: true, ASI: true }, descripcion: "Estructurar actividades, eventos, expedientes o equipos." },
    { num: 85, verbo: "Orientar", niveles: { DIR: false, ASE: true, PRO: true, TEC: true, ASI: true }, descripcion: "Guiar al ciudadano, usuario aduanero o contribuyente." },
    { num: 86, verbo: "Parametrizar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Configurar reglas en sistemas informáticos tributarios/aduaneros." },
    { num: 87, verbo: "Participar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Integrar comités técnicos, mesas de trabajo o grupos de estudio." },
    { num: 88, verbo: "Planear", niveles: { DIR: true, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Formular planes operativos, de fiscalización o presupuestales." },
    { num: 89, verbo: "Preparar", niveles: { DIR: false, ASE: false, PRO: false, TEC: true, ASI: true }, descripcion: "Elaborar borradores, cuadros de datos o insumos para conceptos." },
    { num: 90, verbo: "Practicar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Realizar pruebas periciales, inspecciones o tomas de inventario." },
    { num: 91, verbo: "Presentar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Sustentar informes de gestión, estadísticas o pliegos de cargos." },
    { num: 92, verbo: "Presupuestar", niveles: { DIR: false, ASE: false, PRO: true, TEC: false, ASI: false }, descripcion: "Estimar ingresos, gastos o proyecciones de recaudo." },
    { num: 93, verbo: "Procesar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Tramitar solicitudes de devolución, compensación o declaraciones." },
    { num: 94, verbo: "Producir", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Generar estadísticas, actos o material institucional." },
    { num: 95, verbo: "Promover", niveles: { DIR: true, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Impulsar la formalización tributaria o el cumplimiento voluntario." },
    { num: 96, verbo: "Programar", niveles: { DIR: false, ASE: false, PRO: true, TEC: true, ASI: false }, descripcion: "Calendarizar auditorías, visitas o tareas de desarrollo." },
    { num: 97, verbo: "Proyectar", niveles: { DIR: false, ASE: true, PRO: true, TEC: false, ASI: false }, descripcion: "Redactar borradores de resoluciones, liquidaciones o conceptos." }
  ];

  // Reglas de descarte por nivel
  const REGLAS_POR_NIVEL = {
    PRO: {
      nombre: "Nivel Profesional (Gestor III - OPEC 242703)",
      enfoque: "Análisis, formulación, control, investigación y proyección de decisiones técnicas o jurídicas.",
      verbosPropios: ["Formular", "Diseñar", "Coordinar", "Administrar", "Evaluar", "Proponer", "Proyectar", "Conceptuar", "Investigar", "Fiscalizar", "Analizar", "Fallar", "Adecuar", "Estructurar"],
      distractoresTipicos: [
        { tipo: "Pasividad / Omisión (Desempeño Bajo)", descripcion: "Opciones que se limitan a 'archivar el expediente', 'esperar instrucciones pasivamente', 'radicar mecánicamente sin concepto' o 'trasladar el caso sin análisis previo'." },
        { tipo: "Extralimitación Directiva", descripcion: "Opciones que pretendan 'aprobar políticas institucionales de la entidad', 'asignar presupuestos globales' o 'dirigir la seccional', las cuales son exclusivas del Nivel Directivo." }
      ],
      infografia: "assets/verbos/Funciones profesional.png"
    },
    TEC: {
      nombre: "Nivel Técnico (Analista IV - OPEC 236760)",
      enfoque: "Aplicación práctica de conocimientos específicos, procesos operacionales, soporte y verificación técnica.",
      verbosPropios: ["Apoyar", "Ejecutar", "Comprobar", "Verificar", "Operar", "Rendir informes", "Consolidar", "Examinar", "Aplicar", "Notificar", "Parametrizar", "Adelantar"],
      distractoresTipicos: [
        { tipo: "Extralimitación de Funciones (Trampa Clásica)", descripcion: "Opciones con verbos como 'Diseñar sistemas', 'Formular políticas', 'Aprobar o revocar actos de plano' o 'Conceptuar jurídicamente de fondo', las cuales corresponden al Nivel Profesional o Directivo." },
        { tipo: "Descuidos de Procedimiento", descripcion: "Opciones que salten los protocolos técnicos, omitan el reporte al profesional líder o modifiquen parámetros sin autorización previa." }
      ],
      infografia: "assets/verbos/Funciones tenico.png"
    },
    ASI: {
      nombre: "Nivel Asistencial",
      enfoque: "Tareas de apoyo administrativo, digitación, correspondencia y custodia básica.",
      verbosPropios: ["Recibir", "Radicar", "Clasificar", "Archivar", "Distribuir", "Custodiar", "Atender", "Alimentar"],
      distractoresTipicos: [
        { tipo: "Extralimitación", descripcion: "Acciones de auditoría, toma de decisiones o proyección de resoluciones sancionatorias." }
      ],
      infografia: "assets/verbos/Funciones asistencial.png"
    },
    ASE: {
      nombre: "Nivel Asesor",
      enfoque: "Asistencia técnica y estratégica de alto nivel para orientar decisiones directivas.",
      verbosPropios: ["Asesorar", "Aconsejar", "Recomendar", "Conceptuar", "Aportar elementos de juicio"],
      distractoresTipicos: [
        { tipo: "Extralimitación Ejecutiva", descripcion: "Ordenar mandamientos de pago o emitir actos resolutivos de plano (eso le corresponde al Director)." }
      ],
      infografia: "assets/verbos/Funciones asesores.png"
    }
  };

  // Banco de Desafíos Speed Drill "Caza-Distractores" (100 Casos Oficiales DAFP / CNSC)
  const SPEED_DRILLS_VERBOS = (typeof CAZA_DISTRACTORES_100 !== "undefined" && Array.isArray(CAZA_DISTRACTORES_100) && CAZA_DISTRACTORES_100.length > 0)
    ? CAZA_DISTRACTORES_100
    : [
    {
      id: "vd_01",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III)",
      contexto: "Al detectar una omisión reiterada en la presentación de la declaración de IVA de un gran contribuyente:",
      opcionTexto: "Archivar provisionalmente el expediente a la espera de que el contribuyente subsane voluntariamente en el siguiente ciclo anual.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR PASIVIDAD! El nivel Profesional tiene como propósito investigar, formular y proyectar actos de control (como el Emplazamiento para Declarar). La pasividad vulnera las competencias misionales."
    },
    {
      id: "vd_02",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Durante una jornada de recepción y verificación documental de importaciones en puerto:",
      opcionTexto: "Diseñar de forma autónoma una nueva metodología de inspección física y aprobar unilateralmente la modificación del manual de procedimientos de la seccional.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! 'Diseñar metodologías' y 'Aprobar modificaciones' son verbos reservados para el Nivel Profesional y Directivo. El Analista Técnico debe apoyar, verificar y comprobar según el manual vigente."
    },
    {
      id: "vd_03",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III)",
      contexto: "En una investigación por deducciones ficticias de costos en declaración de renta:",
      opcionTexto: "Analizar las pruebas recaudadas en cruces de exógena, contrastar la contabilidad del investigado y proyectar el pliego de cargos debidamente motivado.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡CORRECTA! Los verbos 'Analizar' y 'Proyectar' definen la competencia esencial y el grado de autonomía propio del nivel Profesional."
    },
    {
      id: "vd_04",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Frente a discrepancias detectadas en las casillas de una declaración de importación:",
      opcionTexto: "Comprobar los valores numéricos, verificar los soportes arancelarios y rendir informe técnico pormenorizado al Gestor III a cargo para su valoración de fondo.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡CORRECTA! 'Comprobar', 'Verificar' y 'Rendir informe técnico' son los verbos rectores idóneos del nivel Técnico (Analista IV)."
    },
    {
      id: "vd_05",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III)",
      contexto: "Al recibir una consulta jurídica compleja sobre aplicación de tarifas preferenciales en zonas francas:",
      opcionTexto: "Aprobar mediante decreto interno una exención tributaria especial para las empresas de su jurisdicción.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! Un Gestor III proyecta conceptos o actos, pero 'Aprobar exenciones o decretos' es de reserva de ley o competencia de la alta dirección nacional."
    },
    {
      id: "vd_06",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "En el área de recaudo y cobranzas de la DIAN:",
      opcionTexto: "Alimentar el sistema informático con los pagos reportados por bancos y consolidar la matriz de inconsistencias para el comité de cartera.",
      respuestaCorrecta: "ACCION_CORRECTA",
      explicacion: "¡CORRECTA! 'Alimentar sistemas' y 'Consolidar datos' son acciones de apoyo operacional plenamente autorizadas para el rol técnico."
    },
    {
      id: "vd_07",
      perfilTarget: "gestor_iii",
      nivelCargo: "Profesional (Gestor III)",
      contexto: "Ante un requerimiento especial con objeciones fundamentadas por el contribuyente:",
      opcionTexto: "Remitir el expediente al archivo central indicando que no tiene tiempo de estudiar la respuesta.",
      respuestaCorrecta: "DISTRACTOR_PASIVIDAD",
      explicacion: "¡DISTRACTOR POR OMISIÓN/PASIVIDAD! El profesional tiene el deber de estudiar, valorar las pruebas y proyectar la liquidación oficial o auto de archivo motivado."
    },
    {
      id: "vd_08",
      perfilTarget: "analista_iv",
      nivelCargo: "Técnico (Analista IV)",
      contexto: "Al observar lentitud en el aplicativo informático misional:",
      opcionTexto: "Redefinir la política de arquitectura de software institucional y ordenar la adquisición de un nuevo servidor internacional.",
      respuestaCorrecta: "DISTRACTOR_EXTRALIMITACION",
      explicacion: "¡DISTRACTOR POR EXTRALIMITACIÓN! 'Redefinir políticas' y 'Ordenar contrataciones' exceden por completo el rol de un Analista IV; su función es reportar la incidencia y operar bajo los protocolos establecidos."
    }
  ];

  // Métodos de consulta
  function buscarVerbo(query) {
    if (!query) return VERBOS_CATALOGO;
    const clean = query.trim().toLowerCase();
    return VERBOS_CATALOGO.filter(v => 
      v.verbo.toLowerCase().includes(clean) || 
      v.descripcion.toLowerCase().includes(clean)
    );
  }

  function getVerbosPorNivel(nivelKey) {
    // nivelKey: DIR, ASE, PRO, TEC, ASI
    return VERBOS_CATALOGO.filter(v => v.niveles && v.niveles[nivelKey]);
  }

  function evaluarVerboParaCargo(verboStr, profileId) {
    const v = VERBOS_CATALOGO.find(item => item.verbo.toLowerCase() === verboStr.trim().toLowerCase());
    if (!v) return null;

    const esGestor = (profileId === 'gestor_iii' || profileId === 'gestor_iii_ci' || (profileId && profileId.includes('gestor')));
    const nivelTarget = esGestor ? 'PRO' : 'TEC';

    const esPropio = v.niveles[nivelTarget];
    let diagnostico = "";
    let esDistractor = false;
    let tipoDistractor = "";

    if (esPropio) {
      diagnostico = `Verbo AUTORIZADO y propio para tu nivel (${esGestor ? 'Profesional' : 'Técnico'}). Muy probable en la opción correcta.`;
    } else {
      esDistractor = true;
      if (esGestor) {
        // Para gestor (profesional), si solo es técnico o asistencial suele ser pasivo
        if (!v.niveles.PRO && (v.niveles.TEC || v.niveles.ASI) && !v.niveles.DIR) {
          tipoDistractor = "Distractor por Pasividad / Tarea Operativa Menor";
          diagnostico = "Para un Gestor III, limitarse a esta tarea operativa o mecánica denota bajo nivel de competencia profesional.";
        } else if (v.niveles.DIR && !v.niveles.PRO) {
          tipoDistractor = "Distractor por Extralimitación Directiva";
          diagnostico = "Este verbo es exclusivo del Nivel Directivo; un Gestor III no puede aprobar políticas ni ordenar gasto de plano.";
        } else {
          tipoDistractor = "Distractor de Nivel";
          diagnostico = "No corresponde a las funciones del Nivel Profesional.";
        }
      } else {
        // Para analista (técnico), si es profesional o directivo es extralimitación
        if (v.niveles.PRO || v.niveles.DIR || v.niveles.ASE) {
          tipoDistractor = "Distractor por Extralimitación de Funciones";
          diagnostico = "¡Cuidado! Este verbo pertenece al nivel Profesional/Directivo. En tu examen para Analista IV suele ser la trampa del evaluador.";
        } else {
          tipoDistractor = "Distractor de Nivel";
          diagnostico = "No corresponde al ámbito de competencia técnica.";
        }
      }
    }

    return {
      verbo: v.verbo,
      descripcion: v.descripcion,
      niveles: v.niveles,
      esPropio,
      esDistractor,
      tipoDistractor,
      diagnostico
    };
  }

  const exportObj = {
    VERBOS_CATALOGO,
    REGLAS_POR_NIVEL,
    SPEED_DRILLS_VERBOS,
    buscarVerbo,
    getVerbosPorNivel,
    evaluarVerboParaCargo
  };

  if (typeof global !== "undefined") {
    global.VERBOS_RECTORES_DATA = exportObj;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = exportObj;
  }
})(typeof window !== "undefined" ? window : global);
