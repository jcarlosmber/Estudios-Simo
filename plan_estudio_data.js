/**
 * plan_estudio_data.js
 * Compendio Oficial y Plan Maestro de Estudio: Gestor III (Ficha TP-DE-3006 / FT-TAH-1824 - OPEC 242703)
 * Convocatoria DIAN 2676 / CNSC
 *
 * Incluye:
 * 1. Cronograma Maestro de 60 Días (12 Semanas) con metas, entregables y módulos asociados.
 * 2. Compendio Doctrinal y Normativo de los 20 Módulos de la Ficha 3006.
 * 3. Método Psicométrico de los 4 Filtros de Descarte y Protocolo de Examen de 5 Horas.
 */

const CRONOGRAMA_60_DIAS_DATA = [
  {
    semana: 1,
    titulo: "Identificación del Cargo, Marco Institucional y Estructura DIAN",
    modulos: [1, 8],
    ejes: ["Misionalidad", "Constitucional"],
    meta: "Comprender la naturaleza jurídica de la DIAN, las 5 funciones esenciales de la Ficha TP-DE-3006 y los principios de la función administrativa (Arts. 6, 121, 209 y 363 C.P.).",
    entregables: "Mapa mental de la estructura DIAN y memorización exegética de las 5 funciones de la Ficha 3006.",
    reglaOro: "El servidor público solo puede hacer lo que la ley le faculta expresamente (Art. 121 C.P.). En materia tributaria rige el principio de legalidad estricta y reserva de ley (Art. 338 C.P.).",
    diasRecomendados: "Días 1 a 5 (2 horas diarias)"
  },
  {
    semana: 2,
    titulo: "Gestión Organizacional, Arquitectura de Procesos (BPM) y SIPOC",
    modulos: [2],
    ejes: ["Indicadores", "Procesos", "MIPG"],
    meta: "Dominar la transición de silos burocráticos a la gestión basada en procesos (BPM), la Cadena de Valor Pública de 5 eslabones (Insumo ➔ Actividad ➔ Producto ➔ Resultado ➔ Impacto), la matriz SIPOC y las fórmulas de Eficacia, Eficiencia y Efectividad.",
    entregables: "Formulación de matrices SIPOC para fiscalización y liquidación; cálculo numérico de indicadores con semaforización verde/amarillo/rojo.",
    reglaOro: "Eficacia mide cumplimiento de metas físicas; Eficiencia evalúa costos y recursos invertidos por unidad; Efectividad evalúa el impacto o cambio real generado en el ciudadano.",
    diasRecomendados: "Días 6 a 10 (2 horas diarias)"
  },
  {
    semana: 3,
    titulo: "Metodología General Ajustada (MGA DNP) y Gestión de Proyectos",
    modulos: [3],
    ejes: ["Planeación", "Proyectos MGA", "Presupuesto"],
    meta: "Aprender los 4 módulos de la MGA Web del DNP (Identificación, Preparación, Evaluación Financiera y Programación), formulación de Árbol de Problemas/Objetivos, criterios VPN/TIR/RBC y la metodología del Valor Ganado (EVM: CPI y SPI) del PMBOK 7.",
    entregables: "Taller de cálculo de VPN/TIR y análisis de desviaciones de proyectos públicos (SV, CV, SPI, CPI).",
    reglaOro: "El problema central NUNCA se formula como la falta o ausencia de un bien (ej. 'falta un escáner'), sino como una necesidad insatisfecha o un déficit en el servicio público.",
    diasRecomendados: "Días 11 a 15 (2 horas diarias)"
  },
  {
    semana: 4,
    titulo: "Contratación Estatal Integral (Ley 80/1993, 1150/2007, D. 1082/2015)",
    modulos: [4],
    ejes: ["Contratación Estatal", "SECOP II", "Supervisión"],
    meta: "Dominar las 5 modalidades de selección, requisitos de los Estudios Previos, la matriz de riesgos previsibles CONPES 3714, las pólizas de garantía y los límites legales del Supervisor de Contratos (Ley 1474/2011, Art. 86).",
    entregables: "Cuadro comparativo de modalidades contractuales y esquema del debido proceso sancionatorio contractual.",
    reglaOro: "El supervisor carece de competencia para modificar el objeto del contrato, alterar precios o pactar anticipos no previstos. El precio no es factor de calificación en Concursos de Méritos.",
    diasRecomendados: "Días 16 a 20 (2 horas diarias)"
  },
  {
    semana: 5,
    titulo: "Sistema de Control Interno (MECI) y Modelo de las Tres Líneas",
    modulos: [5],
    ejes: ["Control Interno", "MECI", "COSO 2013"],
    meta: "Estructura del MECI como 7ª dimensión del MIPG (D. 1499/2017), los 5 componentes y 17 principios de COSO 2013, roles de las 3 Líneas del IIA y formulación de planes de mejoramiento (5 Porqués / Diagrama de Ishikawa 6M).",
    entregables: "Esquema interactivo de las Tres Líneas y árbol de causas raíces con el método de los 5 Porqués.",
    reglaOro: "Los Gestores III y líderes operativos son la Primera Línea y dueños absolutos de los riesgos en tiempo real. La Oficina de Control Interno (Tercera Línea) no coadministra ni aprueba operaciones.",
    diasRecomendados: "Días 21 a 25 (2 horas diarias)"
  },
  {
    semana: 6,
    titulo: "Auditoría Interna Gubernamental, Papeles de Trabajo y Hallazgos",
    modulos: [6],
    ejes: ["Auditoría Interna", "IPPF", "Hallazgos"],
    meta: "Normas Internacionales IPPF (Atributos 1000 y Desempeño 2000), Aseguramiento vs. Consultoría, requisitos de la evidencia (Suficiente, Competente, Pertinente), cédulas de auditoría y redacción técnica de los 4 elementos de un hallazgo.",
    entregables: "Redacción de hallazgos con los 4 elementos (Condición, Criterio, Causa y Efecto) y cuadro de traslados (Administrativo, Disciplinario, Fiscal y Penal).",
    reglaOro: "Sin causa raíz identificada, no se puede estructurar un Plan de Mejoramiento Institucional eficaz. La fotocopia no autenticada no tiene competencia probatoria plena.",
    diasRecomendados: "Días 26 a 30 (2 horas diarias)"
  },
  {
    semana: 7,
    titulo: "Gestión Integral del Riesgo (NTC-ISO 31000 y Guía DAFP v5)",
    modulos: [7],
    ejes: ["Gestión del Riesgo", "Anticorrupción", "Seguridad Digital"],
    meta: "Aplicación de la metodología DAFP v5, mapas de calor 5x5, análisis de riesgo inherente y residual, calificación de controles (preventivo, detectivo, correctivo) y seguimiento cuatrimestral al PAAC.",
    entregables: "Matriz 5x5 de riesgos con cálculo de probabilidad e impacto residual y plan de tratamiento.",
    reglaOro: "En la administración pública los riesgos de corrupción NUNCA pueden ser aceptados; exigen obligatoriamente planes de choque y rediseño de controles preventivos.",
    diasRecomendados: "Días 31 a 35 (2 horas diarias)"
  },
  {
    semana: 8,
    titulo: "Carrera DIAN (D.L. 071/2020), Régimen Disciplinario y EDL",
    modulos: [9, 10],
    ejes: ["Carrera Administrativa", "Código Disciplinario", "EDL"],
    meta: "Concurso de méritos DIAN, período de prueba (6 meses improrrogables), fases y ponderaciones de la EDL anual, situaciones administrativas (encargo preferente), y proceso disciplinario de la Ley 1952/2019 reformada por Ley 2094/2021.",
    entregables: "Flujograma de etapas disciplinarias (Instrucción vs. Juzgamiento) y cuadro comparativo de faltas gravísimas.",
    reglaOro: "Garantía de Juez Imparcial: El funcionario instructor que formula el pliego de cargos NUNCA puede ser el mismo funcionario que juzgue y falle.",
    diasRecomendados: "Días 36 a 40 (2 horas diarias)"
  },
  {
    semana: 9,
    titulo: "Procedimiento Administrativo (CPACA) y Procedimiento Tributario",
    modulos: [11, 12],
    ejes: ["CPACA", "Estatuto Tributario", "Determinación Oficial"],
    meta: "Acto administrativo, notificaciones (electrónica Ley 2080), pérdida de fuerza ejecutoria (5 años), revocatoria directa (Art. 97), requerimiento especial tributario (Art. 703), LOR (Art. 710), recurso de reconsideración y reserva del Art. 583 E.T.",
    entregables: "Flujograma de discusión tributaria en sede administrativa y términos de firmeza de declaraciones (Art. 714 E.T.).",
    reglaOro: "La DIAN no puede revocar de oficio un acto que reconoció derechos particulares sin consentimiento expreso y por escrito del titular; si se niega, debe acudir a la Acción de Lesividad (2 años).",
    diasRecomendados: "Días 41 a 45 (2 horas diarias)"
  },
  {
    semana: 10,
    titulo: "MIPG (7 Dimensiones / 19 Políticas), Transparencia y Trámites",
    modulos: [13, 14],
    ejes: ["MIPG", "Transparencia Ley 1712", "Antitrámites"],
    meta: "Las 7 dimensiones y 19 políticas del MIPG (Decreto 1499/2017), medición FURAG e IDI, régimen de excepciones de la Ley 1712 (clasificada vs. reservada), Test de Daño en 3 pasos, prohibiciones antitrámites del D.L. 019/2012 y 2106/2019.",
    entregables: "Matriz mnemotécnica de las 19 políticas MIPG y protocolo del Test de Daño.",
    reglaOro: "Prohibido exigir fotocopia de cédula ampliada al 150%, antecedentes impresos o documentos que ya reposen en la entidad.",
    diasRecomendados: "Días 46 a 50 (2 horas diarias)"
  },
  {
    semana: 11,
    titulo: "Gestión Documental, PQRSDF (Ley 1755) y Excel Avanzado",
    modulos: [15, 16, 17],
    ejes: ["Archivo AGN", "PQRSDF", "Ofimática Fiscal"],
    meta: "Ciclo vital documental (valores primarios y secundarios), 8 instrumentos AGN, expediente electrónico con hash SHA-256 (Ley 2080/2021), términos perentorios de peticiones (15, 10, 30 días), BUSCARX, SUMAR.SI.CONJUNTO y tablas dinámicas.",
    entregables: "Ejercicios prácticos de cruce masivo de bases de datos de exógena con BUSCARX y cuadro de plazos PQRSDF.",
    reglaOro: "Si la petición de documentos no se resuelve en 10 días hábiles, opera el silencio positivo: la DIAN está obligada a entregar las copias gratis en 3 días.",
    diasRecomendados: "Días 51 a 55 (2 horas diarias)"
  },
  {
    semana: 12,
    titulo: "Competencias Comportamentales, Integridad y Gran Simulador Maestro",
    modulos: [18, 19, 20],
    ejes: ["Comportamentales", "Simulador Maestro", "Técnicas TRI"],
    meta: "Código de Integridad (5 valores DAFP), conductas observables de las 4 competencias de la Ficha 3006, resolución completa del Banco de 40 Casos PJS y dominio de los 4 Filtros Psicométricos de Descarte.",
    entregables: "Resolución de los 40 Casos del Simulador Maestro con porcentaje de acierto superior al 85%.",
    reglaOro: "El Gestor III actúa siempre con Nivel 4 en Comportamiento Ético (denuncia inmediata de corrupción) y Nivel 3 en Logro, Comunicación y Equipo, sin caer en pasividad asistencial ni arrogancia directiva.",
    diasRecomendados: "Días 56 a 60 (Práctica intensiva)"
  }
];

const MODULOS_TRATADO_3006_DATA = [
  {
    id: 1,
    numero: "Módulo 1",
    titulo: "Identificación del Cargo, Marco Institucional y Desglose Exegético de la Ficha TP-DE-3006",
    ejeId: "misionalidad",
    normograma: "Resoluciones DIAN 0067 de 2024 y 0088 de 2024 | D.L. 071 de 2020 | Decreto 927 de 2023 | Decreto 1742 de 2020",
    resumen: "Análisis exegético del cargo de Gestor III (Código 303, Grado 03). Naturaleza jurídica de la UAE DIAN: organismo del orden nacional adscrito al Ministerio de Hacienda, con personería jurídica, autonomía administrativa y presupuestal, y patrimonio propio. Desglose detallado de las 5 Funciones Esenciales fijadas en el Formato Oficial FT-TAH-1824.",
    secciones: [
      {
        subtitulo: "Naturaleza Jurídica y Competencias Misionales",
        contenido: "La UAE DIAN tiene jurisdicción en todo el territorio nacional y administra los impuestos internos (Renta, IVA, Timbre), los derechos de aduana y el control cambiario. Combate la evasión, el contrabando y el lavado de activos asociado mediante cruces de información exógena y analítica predictiva."
      },
      {
        subtitulo: "Las 5 Funciones Esenciales del Gestor III en la Ficha 3006",
        contenido: "1. Gestión de Planes y Programas: Estructuración y seguimiento de metas del PAI, manejo de KPIs y cargue en MGA Web / BPIN.\n2. Control Interno y Mejoramiento: Apoyo en planes de mejoramiento de la CGR y OCI aplicando matrices de causas raíces (Ishikawa / 5 Porqués).\n3. Gestión Integral del Riesgo: Identificación y valoración en mapas 5x5 según la metodología DAFP v5 e ISO 31000:2018.\n4. Gestión Contractual: Elaboración de Estudios Previos bajo el Decreto 1082/2015, matrices de riesgos CONPES 3714 y supervisión de contratos.\n5. PQRSDF y Actos Administrativos: Proyección de actos administrativos y respuestas a peticiones en términos perentorios, custodiando la reserva tributaria (Art. 583 E.T.)."
      }
    ],
    trampaExamen: "Asignarle al Gestor III atribuciones del Nivel Directivo (como firmar resoluciones de alcance nacional o celebrar contratos) o relegarlo a tareas puramente asistenciales (archivar o transcribir)."
  },
  {
    id: 2,
    numero: "Módulo 2",
    titulo: "Gestión Organizacional, Arquitectura de Procesos (BPM) y Cadena de Valor Pública",
    ejeId: "indicadores",
    normograma: "NTC-ISO 9001:2015 | Decreto 1499 de 2017 (MIPG) | Guía DAFP/DNP de Construcción de Indicadores",
    resumen: "Transición de los silos burocráticos verticales a la gestión por procesos horizontales (BPM). Marco de la Cadena de Valor Pública de Mark Moore (Insumos ➔ Actividades ➔ Productos ➔ Resultados ➔ Impacto). Metodología SIPOC aplicada al ciclo tributario y aduanero. Ciclo Deming PHVA como motor de mejora continua. Tipología y diseño SMART de indicadores de gestión.",
    secciones: [
      {
        subtitulo: "Los 5 Eslabones de la Cadena de Valor Pública",
        contenido: "1. Insumos (Inputs): Presupuesto, talento humano, servidores, software MUISCA.\n2. Actividades: Auditorías, fiscalizaciones, conciliaciones.\n3. Productos (Outputs): Resoluciones de devolución, liquidaciones oficiales de revisión, actas de inspección aduanera, RUTs.\n4. Resultados (Outcomes): Cumplimiento voluntario de declaraciones, agilización del desaduanamiento.\n5. Impacto (Impact): Reducción de la evasión del IVA, sostenibilidad fiscal del Estado, equidad distributiva."
      },
      {
        subtitulo: "Fórmulas de Evaluación: Eficacia, Eficiencia y Efectividad",
        contenido: "• Eficacia (%) = (Meta Lograda / Meta Programada) × 100.\n• Eficiencia (%) = (Rendimiento Real / Rendimiento Estándar) × 100 = (Costo Programado / Costo Real) × 100.\n• Efectividad = Síntesis del impacto y calidad lograda en relación con los recursos empleados.\n• Semaforización DAFP: Verde (≥90%), Amarillo (70% - 89.9%), Rojo (<70% con plan de choque)."
      }
    ],
    trampaExamen: "Confundir Productos con Resultados o Impacto. Un número de liquidaciones notificadas es un Producto; el incremento del recaudo voluntario es un Resultado; la disminución de la pobreza gracias a la inversión fiscal es un Impacto."
  },
  {
    id: 3,
    numero: "Módulo 3",
    titulo: "Planeación Estratégica, Metodología General Ajustada (MGA) y Estándar PMI/PMBOK",
    ejeId: "planeacion",
    normograma: "Ley Orgánica del Plan de Desarrollo (Ley 152/1994) | Estatuto Orgánico del Presupuesto (Decreto 111/1996) | Manual MGA DNP | PMBOK 7ª Edición",
    resumen: "Estructura del PND y alineación en cascada: PND ➔ PEI (DIAN) ➔ PAI ➔ POA ➔ Compromisos EDL. Estatuto Presupuestal: CDP (previo a iniciar) vs. RP (perfeccionado el contrato). Los 4 módulos de la MGA: Identificación (Árbol de Problemas y Objetivos), Preparación, Evaluación Ex-Ante (VPN > 0, TIR > Tasa Social de Descuento del DNP, Relación Beneficio-Costo RBC > 1) y Programación. Valor Ganado EVM (PV, EV, AC, CV, SV, CPI, SPI).",
    secciones: [
      {
        subtitulo: "Metodología MGA y Formulación Técnica",
        contenido: "El problema central debe redactarse siempre como una situación negativa de la sociedad o el servicio, NUNCA como la falta de una solución técnica preconcebida. Las causas se convierten en medios del proyecto y los efectos en fines esperados."
      },
      {
        subtitulo: "Métricas del Valor Ganado (EVM)",
        contenido: "• CV (Cost Variance) = EV - AC. (Si CV < 0: Sobrecosto presupuestal).\n• SV (Schedule Variance) = EV - PV. (Si SV < 0: Retraso de cronograma).\n• CPI = EV / AC. (Si CPI < 1.0: Ineficiencia en gasto).\n• SPI = EV / PV. (Si SPI < 1.0: Ritmo de avance inferior al programado)."
      }
    ],
    trampaExamen: "Creer que el CDP reserva los recursos para el contratista; el CDP solo certifica que hay saldo libre; el Registro Presupuestal (RP) es el que congela y reserva el saldo específicamente para ese contrato."
  },
  {
    id: 4,
    numero: "Módulo 4",
    titulo: "Contratación Estatal Integral (Ley 80/1993, Ley 1150/2007, D. 1082/2015, SECOP II y Supervisión)",
    ejeId: "contratacion",
    normograma: "Ley 80 de 1993 | Ley 1150 de 2007 | Ley 1474 de 2011 | Decreto 1082 de 2015 | CONPES 3714",
    resumen: "Estatuto General de Contratación Pública. Principios: Transparencia, Economía, Responsabilidad y Selección Objetiva. Requisitos Habilitantes (Pasa/No Pasa: capacidad jurídica, financiera, técnica y experiencia) vs. Factores de Calificación (precio, calidad técnica). Las 5 modalidades de selección. Etapas precontractual, contractual y postcontractual. Riesgos CONPES 3714. Supervisión vs. Interventoría y procedimiento sancionatorio del Art. 86 de la Ley 1474/2011.",
    secciones: [
      {
        subtitulo: "Las 5 Modalidades de Selección en Colombia",
        contenido: "1. Licitación Pública: Regla general para mayor cuantía y obras complejas.\n2. Selección Abreviada: Subasta Inversa (Bienes de Características Técnicas Uniformes - CTU, donde prima exclusivamente el menor precio), Menor Cuantía y Acuerdos Marco de Precios.\n3. Concurso de Méritos: Consultorías e interventorías (prohibido evaluar el precio).\n4. Contratación Directa: Causales taxativas (urgencia manifiesta, convenios interadministrativos, inexistencia de pluralidad, prestación de servicios profesionales).\n5. Mínima Cuantía: Contratos ≤ 10% de la menor cuantía (trámite expedito de 1 día hábil)."
      },
      {
        subtitulo: "Supervisión Institucional y Artículo 86",
        contenido: "El Gestor III designado supervisor no puede cambiar el objeto ni otorgar anticipos no pactados. Ante incumplimiento, proyecta el informe circunstanciado para que el Ordenador del Gasto inicie el proceso sancionatorio en audiencia pública garantizando el debido proceso (Art. 86 Ley 1474)."
      }
    ],
    trampaExamen: "Otorgarle puntaje a los requisitos habilitantes (ej. calificar con 20 puntos la capacidad financiera) o calificar la oferta económica en un Concurso de Méritos de consultoría."
  },
  {
    id: 5,
    numero: "Módulo 5",
    titulo: "Sistema de Control Interno y Modelo Estándar (MECI / Marco COSO / Tres Líneas del IIA)",
    ejeId: "control_interno",
    normograma: "Artículos 209 y 269 C.P. | Ley 87 de 1993 | Decreto 1499 de 2017 | Decreto 648 de 2017 | Circular DAFP 100-002",
    resumen: "El Sistema de Control Interno y su integración como 7ª Dimensión del MIPG. Principios de Autocontrol, Autorregulación y Autogestión. Marco COSO 2013: 5 Componentes (Entorno de Control, Evaluación de Riesgos, Actividades de Control, Información/Comunicación, Monitoreo) y 17 Principios. Esquema de las Tres Líneas del IIA. Los 5 roles de las Oficinas de Control Interno. Comités institucionales y Planes de Mejoramiento (PMI).",
    secciones: [
      {
        subtitulo: "Esquema de las Tres Líneas de Defensa",
        contenido: "• 1ª Línea: Líderes de proceso y funcionarios operativos (Gestor III). Son los dueños del riesgo y ejecutan controles en tiempo real.\n• 2ª Línea: Planeación, Gestión de Riesgo y Calidad. Diseñan metodologías, asesoran y consolidan tableros de control.\n• 3ª Línea: Oficina de Control Interno (OCI). Realiza evaluación independiente posterior mediante auditorías basadas en riesgos. No coadministra."
      },
      {
        subtitulo: "Metodología de Planes de Mejoramiento",
        contenido: "Técnica de los 5 Porqués y Diagrama de Ishikawa (6M: Mano de obra, Métodos, Máquinas, Materiales, Mediciones, Medio ambiente). Las acciones deben eliminar la causa raíz y no quedarse en el síntoma superficial."
      }
    ],
    trampaExamen: "Afirmar que los servidores operativos no son responsables del control porque para eso existe la Oficina de Control Interno."
  },
  {
    id: 6,
    numero: "Módulo 6",
    titulo: "Auditoría Interna Gubernamental (Normas NIAI/IPPF, Papeles de Trabajo, Muestreo y Hallazgos)",
    ejeId: "control_interno",
    normograma: "Normas Internacionales para el Ejercicio Profesional de la Auditoría Interna (IPPF - IIA) | Decretos 648 y 1499 de 2017",
    resumen: "Misión y Código de Ética de la Auditoría Interna (Integridad, Objetividad, Confidencialidad, Competencia). Normas sobre Atributos (Serie 1000) y de Desempeño (Serie 2000). Aseguramiento (tripartito) vs. Consultoría (bipartito). Ciclo auditor: PAA basado en riesgos, planeación, trabajo de campo, pruebas de cumplimiento y sustantivas. Papeles de Trabajo y sus atributos (Suficiente, Competente, Pertinente). Redacción técnica de los 4 elementos de un hallazgo.",
    secciones: [
      {
        subtitulo: "Los 4 Elementos Obligatorios de un Hallazgo de Auditoría",
        contenido: "1. Condición: Lo que es. Hechos fácticos encontrados, cuantificados y contrastados.\n2. Criterio: Lo que debe ser. La norma jurídica, resolución o estándar violado.\n3. Causa: Por qué ocurrió. La falla estructural o de control que originó la brecha.\n4. Efecto: El impacto real o potencial (perjuicio patrimonial, retraso o riesgo legal)."
      },
      {
        subtitulo: "Tipologías de Hallazgos y Rutas de Traslado Legal",
        contenido: "• Administrativo ➔ Plan de Mejoramiento Institucional (PMI).\n• Disciplinario ➔ Control Interno Disciplinario o Procuraduría General de la Nación.\n• Fiscal (Daño patrimonial) ➔ Contraloría General de la República (CGR).\n• Penal (Delito formal) ➔ Fiscalía General de la Nación (FGN).\n• Contractual ➔ Ordenador del Gasto para proceso Art. 86 Ley 1474."
      }
    ],
    trampaExamen: "Redactar un informe de hallazgo sin identificar la causa raíz, o proponer sanciones directas por parte del auditor interno (el auditor evalúa y traslada, pero no sanciona)."
  },
  {
    id: 7,
    numero: "Módulo 7",
    titulo: "Gestión Integral del Riesgo en el Sector Público (NTC-ISO 31000:2018, Guía DAFP v5 y CONPES 3995)",
    ejeId: "riesgo",
    normograma: "NTC-ISO 31000:2018 | Ley 1474 de 2011 (Estatuto Anticorrupción, Art. 73) | Guía DAFP Versión 5 de Riesgos | CONPES 3995",
    resumen: "El riesgo como efecto de la incertidumbre sobre los objetivos institucionales. Tres tipologías obligatorias en la DIAN: Gestión/Operativos, Corrupción y Seguridad Digital. Estructura de redacción: Causa Raíz ➔ Evento Incierto ➔ Efecto. Matriz de calor 5x5 (Probabilidad e Impacto). Evaluación de controles según momento (preventivo, detectivo, correctivo) y automatización. Cálculo de riesgo residual. Opciones de tratamiento: Mitigar, Evitar, Transferir o Aceptar. El PAAC y sus cortes cuatrimestrales.",
    secciones: [
      {
        subtitulo: "Regla de Oro de la Política Anticorrupción",
        contenido: "Bajo la Ley 1474 de 2011 y la Guía DAFP v5, los riesgos de corrupción NUNCA pueden ser clasificados como 'Aceptados'. El Estado tiene tolerancia cero con la corrupción; exigen medidas de choque preventivas inmediatas."
      },
      {
        subtitulo: "Seguimiento Cuatrimestral Obligatorio del PAAC",
        contenido: "La OCI de la DIAN debe publicar por ley el seguimiento al Mapa de Riesgos de Corrupción en tres fechas preclusivas: 1er corte al 30 de abril, 2do corte al 31 de agosto y 3er corte al 31 de diciembre."
      }
    ],
    trampaExamen: "Creer que un control correctivo reduce la probabilidad de ocurrencia del riesgo; el control preventivo reduce la probabilidad, mientras que el correctivo solo atiende las consecuencias cuando el daño ya se consumó."
  },
  {
    id: 8,
    numero: "Módulo 8",
    titulo: "Constitucionalismo Colombiano, Estructura del Estado y Régimen de la Hacienda Pública",
    ejeId: "constitucional",
    normograma: "Constitución Política de 1991 (Arts. 1, 2, 4, 6, 83, 93, 95 num 9, 121, 209, 338, 363) | Ley 489 de 1998",
    resumen: "Fundamentos del Estado Social de Derecho y prevalencia del interés general. Supremacía Constitucional (Art. 4) y Principio de Legalidad (Arts. 6 y 121). Estructura orgánica: Ramas Ejecutiva, Legislativa y Judicial; Órganos Autónomos (CNSC, Banco de la República); Organismos de Control (PGN, CGR); Organización Electoral. Descentralización, desconcentración y delegación. Principios de la función administrativa (Art. 209). Régimen de la Hacienda Pública: Deber ciudadano de tributar (Art. 95 num 9), Reserva de Ley (Art. 338) y principios del sistema tributario (Equidad, Eficiencia, Progresividad y no retroactividad - Art. 363).",
    secciones: [
      {
        subtitulo: "Tipología de Tributos en Colombia",
        contenido: "• Impuesto: Coactivo, sin contraprestación directa (Renta, IVA, Consumo) para el fondo común del Estado.\n• Tasa: Tributo con contraprestación directa e individualizada de un servicio público (peajes, pasaportes, tasa portuaria).\n• Contribución Especial/Parafiscal: Gravamen derivado de una plusvalía o beneficio gremial/sectorial específico (valorización, aportes SENA/ICBF)."
      },
      {
        subtitulo: "Irretroactividad y Regla Especial de Impuestos de Período",
        contenido: "Las leyes tributarias rigen hacia el futuro. En impuestos de período gravable (como la Renta, causada del 1 de enero al 31 de diciembre), las leyes no pueden aplicarse sino a partir del período que comience después de su promulgación (Art. 338 C.P.)."
      }
    ],
    trampaExamen: "Aplicar una reforma tributaria de manera retroactiva al año fiscal en curso o aceptar la creación de exenciones o tarifas mediante resoluciones administrativas sin sustento legal."
  },
  {
    id: 9,
    numero: "Módulo 9",
    titulo: "Régimen Específico de Carrera de la UAE DIAN (D.L. 071 de 2020 y D. 927 de 2023) y EDL",
    ejeId: "carrera_dian",
    normograma: "Artículos 122 y 125 C.P. | Decreto Ley 071 de 2020 | Decreto 927 de 2023 | Acuerdos de Convocatoria CNSC",
    resumen: "El Sistema Específico de Carrera de origen legal administrado por la CNSC. Concurso de Ingreso (Abierto) vs. Ascenso (Cerrado). Fases del concurso: Convocatoria, VRM, Pruebas Escritas (Funcionales 65% eliminatorio min 70 pts; Comportamentales 15%; Integridad 10%; Antecedentes 10%), Lista de elegibles (vigencia 2 años). Período de prueba de seis (6) meses improrrogables con evaluación formal. Evaluación del Desempeño Laboral (EDL): ciclo ordinario del 1 feb al 31 ene, ponderación (80-85% funcionales, 15-20% comportamentales), escalas (Sobresaliente ≥90, Satisfactorio 70-89.9, No satisfactorio <70 y retiro). Situaciones administrativas: Encargo preferente para empleados de carrera con calificación sobresaliente. Causales de retiro (Art. 65).",
    secciones: [
      {
        subtitulo: "Derecho Preferente al Encargo",
        contenido: "El encargo recae por ley en el empleado escalafonado en carrera que cumpla los requisitos de estudio y experiencia del cargo superior vacante, no tenga sanción disciplinaria en el último año y tenga calificación Sobresaliente en su última evaluación."
      },
      {
        subtitulo: "Garantías en Período de Prueba",
        contenido: "El empleado nombrado en período de prueba solo puede ser declarado insubsistente mediante calificación formal motivada al término de los 6 meses (o extraordinaria reglada) tras concertación de compromisos y acumulación de evidencias, contra la cual proceden recursos."
      }
    ],
    trampaExamen: "Declarar insubsistente de forma discrecional o verbal a un empleado en período de prueba sin haber agotado el procedimiento de evaluación objetiva de la CNSC."
  },
  {
    id: 10,
    numero: "Módulo 10",
    titulo: "Régimen Disciplinario Único de los Servidores Públicos (Ley 1952 de 2019 / Ley 2094 de 2021)",
    ejeId: "disciplinario",
    normograma: "Constitución Política Arts. 6, 29 y 123 | Código General Disciplinario (Ley 1952 de 2019 reformada por Ley 2094 de 2021)",
    resumen: "El ius puniendi disciplinario. Principios: Imparcialidad, presunción de inocencia, legalidad, ilicitud sustancial y culpabilidad (dolo o culpa, proscripción absoluta de la responsabilidad objetiva). Reforma estructural de la Ley 2094/2021: Separación estricta de autoridades de Instrucción y Juzgamiento. Deberes, prohibiciones e impedimentos (Art. 40 CGD y Art. 11 CPACA). Clasificación de faltas (Gravísimas, Graves, Leves) y sanciones. Faltas gravísimas especiales en la DIAN (violación de la Reserva Tributaria Art. 583 E.T., malversación, prevaricato). Etapas del proceso: Indagación previa, investigación disciplinaria, pliego de cargos, descargos (15 días), audiencia de pruebas, alegatos (10 días), fallo de primera instancia (20 días), apelación y recurso de revisión ante Consejo de Estado.",
    secciones: [
      {
        subtitulo: "Separación Estricta de Fases y Autoridades",
        contenido: "Garantía convencional del debido proceso: El funcionario de la Oficina de Control Interno Disciplinario que instruye e investiga pierde competencia inmediatamente proferido el pliego de cargos. El juzgamiento y fallo corresponde a un funcionario o despacho independiente de juzgamiento."
      },
      {
        subtitulo: "Violación de la Reserva Tributaria como Falta Gravísima",
        contenido: "Suministrar información sobre bases gravables o rentas a particulares sin orden judicial acarrea falta gravísima disciplinaria sancionada con destitución e inhabilidad general de 10 a 20 años, más responsabilidad penal (Art. 194 C.P.)."
      }
    ],
    trampaExamen: "Aceptar que el mismo despacho que investigó y formuló los cargos sea quien dicte el fallo de primera instancia (vicia el proceso de nulidad insubsanable)."
  },
  {
    id: 11,
    numero: "Módulo 11",
    titulo: "Procedimiento Administrativo General (CPACA - Ley 1437 de 2011 y Ley 2080 de 2021)",
    ejeId: "cpaca",
    normograma: "Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA - Ley 1437/2011 reformada por Ley 2080/2021)",
    resumen: "Principios rectores del procedimiento administrativo (Art. 3 CPACA). Elementos de validez del Acto Administrativo: competencia, motivos, objeto, fin y procedimiento. Presunción de legalidad y fuerza ejecutoria (Arts. 88 y 89). Régimen de notificaciones: Personal (citación en 5 días), Por Aviso (envío al día siguiente), Notificación Electrónica (surtida al acceder o al finalizar el día hábil siguiente de entrega en servidor). Firmeza del acto (Art. 87). Pérdida de fuerza ejecutoria al cabo de 5 años sin ejecución (Art. 91). Recursos ordinarios: Reposición (facultativo - 10 días), Apelación (obligatorio para agotar vía administrativa - 10 días), Queja (5 días). Silencio administrativo negativo (3 meses) y positivo excepcional. Revocatoria Directa (Art. 93) y prohibición de revocar actos particulares y concretos sin consentimiento expreso y por escrito del titular (Art. 97); Acción de Lesividad en 2 años.",
    secciones: [
      {
        subtitulo: "Regla de Oro de la Revocatoria Directa (Art. 97 CPACA)",
        contenido: "Si un acto de la DIAN concedió un derecho subjetivo a un contribuyente (ej. reconoció una exención o devolución), la entidad JAMÁS puede revocarlo unilateralmente sin autorización previa y escrita del titular. Debe demandar su propio acto mediante Acción de Lesividad ante el juez contencioso administrativo dentro de los dos (2) años siguientes."
      },
      {
        subtitulo: "Notificación Electrónica bajo la Ley 2080 de 2021",
        contenido: "La notificación electrónica se entiende surtida en la fecha y hora en que el administrado acceda al documento en la plataforma, o al finalizar el día hábil siguiente a la entrega del correo electrónico en el buzón del destinatario."
      }
    ],
    trampaExamen: "Interponer recurso de apelación contra actos dictados por el Director General de la DIAN (no procede apelación por carecer de superior jerárquico; solo procede reposición)."
  },
  {
    id: 12,
    numero: "Módulo 12",
    titulo: "Procedimiento Tributario y Aduanero Esencial para el Gestor III (E.T. Libro V y Ley 1762 de 2015)",
    ejeId: "tributario",
    normograma: "Estatuto Tributario Nacional (Libro V) | Ley 1762 de 2015 (Ley Anticontrabando) | Decreto 1165 de 2019",
    resumen: "Estructura formal del procedimiento tributario: Deberes formales (inscripción RUT Art. 555-2, facturación electrónica validada Art. 616-1, información exógena Art. 631). Facultades de fiscalización e investigación (Art. 684 E.T.); inspección tributaria formal (Art. 779) que suspende por 3 meses el término de firmeza. Determinación Oficial: Emplazamiento para corregir (1 mes), Requerimiento Especial obligatorio (Art. 703) notificado dentro de la firmeza con 3 meses de plazo para responder so pena de nulidad (Art. 730 num 2), Liquidación Oficial de Revisión (Art. 710) notificada dentro de 6 meses so pena de firmeza definitiva. Recurso de Reconsideración (Art. 720) en 2 meses; término de 1 año para notificar el fallo o Silencio Administrativo Positivo Tributario (Art. 734). Firmeza de declaraciones (Art. 714: 3 años general/extemporánea/devoluciones, 5 años precios de transferencia, hasta 12 años compensación de pérdidas). Reserva Tributaria absoluta (Art. 583) y excepciones taxativas. Cláusula Antielusiva General (Art. 869). Ley Anticontrabando 1762: Contrabando >50 SMLMV, favorecimiento, aprehensión y decomiso.",
    secciones: [
      {
        subtitulo: "Silencio Administrativo Positivo Tributario (Art. 734 E.T.)",
        contenido: "Si transcurre un (1) año desde la interposición en debida forma del Recurso de Reconsideración sin que la DIAN haya notificado la resolución que lo resuelve, opera de pleno derecho el Silencio Positivo: la declaración privada adquiere firmeza inmediata y la Liquidación Oficial queda sin efectos."
      },
      {
        subtitulo: "Garantía del Requerimiento Especial (Art. 703 E.T.)",
        contenido: "La DIAN no puede expedir una Liquidación Oficial de Revisión sin haber expedido y notificado previamente el Requerimiento Especial. Omitir este paso genera nulidad absoluta e insubsanable del proceso."
      }
    ],
    trampaExamen: "Entregar copias de declaraciones de renta a cónyuges, periodistas o particulares sin orden judicial penal o causal legal taxativa (viola el Art. 583 y acarrea destitución inmediata)."
  },
  {
    id: 13,
    numero: "Módulo 13",
    titulo: "Modelo Integrado de Planeación y Gestión (MIPG - Decreto 1499 de 2017): Las 7 Dimensiones y las 19 Políticas",
    ejeId: "mipg",
    normograma: "Decreto 1499 de 2017 | Manual Operativo del MIPG (DAFP) | Decreto 1083 de 2015",
    resumen: "Integración de los sistemas anteriores (Desarrollo Administrativo Ley 489, Calidad Ley 872 y Control Interno Ley 87) en el MIPG. Principios: Resultados, Articulación, Calidad, Innovación, Evidencias, Integridad. El Ciudadano como centro del valor público. Las 7 Dimensiones Operativas: 1. Talento Humano, 2. Direccionamiento Estratégico, 3. Gestión con Valores para el Resultado, 4. Evaluación de Resultados, 5. Información y Comunicación, 6. Gestión del Conocimiento y la Innovación, 7. Control Interno (MECI). Las 19 Políticas Institucionales y sus entidades líderes. El cuestionario FURAG y el Índice de Desempeño Institucional (IDI).",
    secciones: [
      {
        subtitulo: "Articulación de las 19 Políticas Institucionales",
        contenido: "• D1 Talento Humano: Gestión Estratégica del Talento Humano (DAFP) e Integridad (DAFP).\n• D2 Direccionamiento: Planeación Institucional (DAFP/DNP), Gestión Presupuestal (MinHacienda), Compras Públicas (CCE).\n• D3 Gestión con Valores: Participación Ciudadana (DAFP), Servicio al Ciudadano (DNP), Racionalización de Trámites (DAFP), Fortalecimiento Organizacional (DAFP), Gobierno Digital (MinTIC), Seguridad Digital (MinTIC), Defensa Jurídica (ANDJE), Mejora Normativa (MinJusticia).\n• D4 Evaluación: Seguimiento y Evaluación Institucional (DAFP/DNP).\n• D5 Información: Gestión Documental (AGN), Transparencia (Secretaría de Transparencia), Información Estadística (DANE).\n• D6 Conocimiento: Gestión del Conocimiento e Innovación (DAFP/MinCiencias).\n• D7 Control Interno: Control Interno - MECI (DAFP)."
      },
      {
        subtitulo: "Medición FURAG e Índice IDI",
        contenido: "El Formulario Único de Reporte y Avance de Gestión (FURAG) evalúa anualmente el grado de madurez de las 19 políticas del MIPG, calculando el IDI (0 a 100 puntos) para identificar brechas de gestión y suscribir planes de mejora."
      }
    ],
    trampaExamen: "Atribuirle la rectoría de la política de Servicio al Ciudadano al Archivo General o confundir la 6ª dimensión (Gestión del Conocimiento) con el área de TI."
  },
  {
    id: 14,
    numero: "Módulo 14",
    titulo: "Transparencia, Acceso a la Información Pública (Ley 1712 de 2014) y Política de Racionalización de Trámites",
    ejeId: "transparencia",
    normograma: "Ley Estatutaria 1712 de 2014 | Decreto Ley 019 de 2012 (Antitrámites) | Decreto Ley 2106 de 2019 | SUIT (DAFP)",
    resumen: "Derecho humano fundamental de acceso a la información pública (Arts. 20 y 74 C.P.). Principios rectores: Máxima publicidad, transparencia, buena fe, facilitación, gratuidad, no discriminación, celeridad y carga de la prueba de la reserva. Transparencia Activa (deber de publicar de oficio en la web) vs. Transparencia Pasiva (atención de solicitudes ciudadanas). Régimen de excepciones: Información Clasificada (intimidad personal, habeas data) vs. Reservada (seguridad nacional, reserva tributaria Art. 583 - max 15 años). El Test de Daño obligatorio en 3 pasos. Recurso de Insistencia ante el Tribunal Contencioso Seccional (10 días). Política Antitrámites: Prohibición de exigir documentos que reposen en la entidad, antecedentes impresos, fotocopias de cédula ampliadas al 150%, huella dactilar cuando hay biometría y extrajuicios notariales. Sistema SUIT y concepto vinculante del DAFP.",
    secciones: [
      {
        subtitulo: "Los Tres Pasos Obligatorios del Test de Daño (Art. 21 Ley 1712)",
        contenido: "Para negar información pública, la DIAN debe fundamentar por escrito:\n1. Reserva Legal Estricta: Citar la ley formal que consagra la excepción.\n2. Probabilidad del Daño: Demostrar que la divulgación causaría un daño real, actual, probable y específico a un bien jurídico protegido.\n3. Proporcionalidad: Acreditar que el daño que causaría la entrega es sustancialmente mayor al interés público general de conocerla."
      },
      {
        subtitulo: "Prohibiciones Antitrámites de Estricto Cumplimiento",
        contenido: "• D.L. 019/2012 Art. 9: Prohibido exigir documentos que reposen en los archivos o sistemas de la propia DIAN.\n• D.L. 2106/2019: Prohibida la fotocopia de la cédula al 150%; se verifica con documento original o biometría.\n• Los trámites no inscritos en el SUIT con concepto del DAFP carecen de validez legal para exigirse."
      }
    ],
    trampaExamen: "Negar una solicitud ciudadana de información alegando simple 'conveniencia administrativa' sin fundamentar el Test de Daño en los 3 pasos de ley."
  },
  {
    id: 15,
    numero: "Módulo 15",
    titulo: "Gestión Documental Pública, Archivo y Expediente Electrónico (Ley 594 de 2000 y Ley 2080 de 2021)",
    ejeId: "gestion_documental",
    normograma: "Ley General de Archivos (Ley 594/2000) | Decreto 1080 de 2015 | Ley 2080 de 2021 | Acuerdos AGN | Código Penal Art. 292",
    resumen: "Marco constitucional (Arts. 8, 15 y 74 C.P.). Principios archivísticos: Fines, institucionalidad, responsabilidad, acceso y racionalidad. El ciclo vital del documento y la teoría de las tres edades: Archivo de Gestión (fase activa - valores primarios: administrativo, legal, fiscal, contable, técnico), Archivo Central (fase semiactiva) y Archivo Histórico (fase permanente - valores secundarios: histórico, científico, cultural). Los 8 instrumentos archivísticos del AGN: CCD, TRD, TVD, PGD, PINAR, BANTER, MOREQ y TCA. El Expediente Electrónico (Ley 2080): Índice electrónico certificado, metadatos obligatorios, preservación en PDF/A y Algoritmo Hash SHA-256 para garantizar la inalterabilidad. Régimen penal y disciplinario de la destrucción documental: Acta formal de eliminación, cumplimiento de la TRD, publicación previa por 30 días en web y aprobación del Comité; destruir irregularmente constituye delito del Art. 292 C.P. (4 a 12 años de prisión).",
    secciones: [
      {
        subtitulo: "Los 8 Instrumentos Archivísticos del AGN",
        contenido: "1. Cuadro de Clasificación Documental (CCD): Estructura lógica y jerárquica de fondos, secciones y series.\n2. Tabla de Retención Documental (TRD): Tiempos de retención en gestión/central y disposición final.\n3. Tabla de Valoración Documental (TVD): Para fondos documentales acumulados históricos.\n4. Programa de Gestión Documental (PGD): Plan estratégico de 8 a 10 años para los 8 procesos archivísticos.\n5. PINAR: Plan institucional anual de archivos articulado al PAI.\n6. BANTER: Diccionario normalizado de términos y series.\n7. MOREQ: Requisitos para software de gestión documental electrónica.\n8. Tablas de Control de Acceso (TCA): Matriz de permisos de consulta y niveles de reserva legal."
      },
      {
        subtitulo: "El Expediente Electrónico y el Hash SHA-256",
        contenido: "Cada documento ingresado al expediente genera una firma criptográfica única (Hash SHA-256). Si se modifica una sola palabra o fecha, el hash cambia automáticamente, evidenciando la adulteración y rompiendo la cadena de custodia probatoria."
      }
    ],
    trampaExamen: "Ordenar la destrucción o depuración de expedientes antiguos por falta de espacio físico sin que la serie esté cumplida en la TRD aprobada ni exista acta formal con publicación previa."
  },
  {
    id: 16,
    numero: "Módulo 16",
    titulo: "Servicio al Ciudadano, Protocolos de Inclusión y Sistema PQRSDF (Ley 1755 de 2015 y Canales DIAN)",
    ejeId: "servicio",
    normograma: "Constitución Política Art. 23 | Ley Estatutaria 1755 de 2015 | Sentencias Corte Constitucional C-951/14 y SU-213/17",
    resumen: "El derecho fundamental de petición. Los tres elementos del núcleo esencial: Pronta resolución (en plazos legales), Respuesta de fondo (clara, precisa, congruente y consecuente, aunque sea desfavorable) y Notificación efectiva. Términos legales perentorios: Petición de interés general o particular (15 días hábiles), Solicitud de documentos e información (10 días hábiles; silencio positivo con entrega obligatoria gratuita en 3 días), Consultas técnicas y jurídicas (30 días hábiles), Peticiones entre entidades (10 días hábiles), Informes de congresistas por control político (5 días calendario), Requerimientos judiciales (inmediato o término fijado en auto). Reglas procesales: Ampliación excepcional del plazo antes del vencimiento por complejidad (hasta el doble del tiempo original); Traslado por incompetencia dentro de los 5 días hábiles; Peticiones incompletas: requerimiento de subsanación dentro de los 10 días y desistimiento tácito si no subsana en 1 mes. El sistema PQRSDF (Petición, Queja, Reclamo, Sugerencia, Denuncia, Felicitación). Canales DIAN (Presencial, Telefónico, Virtual) y Protocolos de Inclusión con Lenguaje Claro.",
    secciones: [
      {
        subtitulo: "Términos Perentorios de la Ley 1755 de 2015",
        contenido: "• Peticiones ordinarias / quejas / reclamos: 15 días hábiles.\n• Solicitud de copias y documentos: 10 días hábiles. (Si se vence sin respuesta, opera aceptación legal tácita y se deben entregar gratis en 3 días hábiles).\n• Consultas jurídicas o conceptos doctrinales: 30 días hábiles.\n• Citaciones o informes de congresistas: 5 días calendario."
      },
      {
        subtitulo: "Trámite de Incompetencia y Peticiones Incompletas",
        contenido: "• Incompetencia (Art. 21): Remitir en 5 días hábiles a la entidad competente y avisar al peticionario; no se puede rechazar de plano.\n• Incompletas (Art. 17): Requerir en 10 días para subsanar; el ciudadano tiene 1 mes prorrogable por otro mes. Si no aporta, opera Desistimiento Tácito con auto motivado."
      }
    ],
    trampaExamen: "Rechazar verbalmente una petición ciudadana porque 'no es competencia de la DIAN' en lugar de efectuar el traslado formal en 5 días a la entidad competente."
  },
  {
    id: 17,
    numero: "Módulo 17",
    titulo: "Herramientas Informáticas y Ofimática Aplicada a la Gestión Pública (Excel Avanzado y Word Técnico)",
    ejeId: "ofimatica",
    normograma: "Manual de Estilo Institucional DIAN | Estándares de Analítica Tributaria y Ofimática Oficial",
    resumen: "El rol de la ofimática en el procesamiento masivo de datos fiscales y la proyección de actos administrativos válidos. Excel Avanzado: Tipos de referencias (Relativa A1, Absoluta $A$1, Mixtas $A1 o A$1). Fórmulas de búsqueda y cruce masivo: BUSCARV (limitada a la derecha, requiere coincidencia exacta con 0/FALSO), BUSCARX (búsqueda bidireccional, no se rompe al insertar columnas, maneja errores nativamente) e ÍNDICE + COINCIDIR. Fórmulas estadísticas condicionales: SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO para múltiples filtros cruzados. Fórmulas lógicas anidadas SI(Y(...)). Funciones de limpieza de datos crudos: ESPACIOS (elimina espacios residuales), VALOR (convierte texto a número) y EXTRAE. Tablas Dinámicas (Pivot Tables), Campos Calculados y Segmentadores (Slicers) para Dashboards de recaudo. Word Técnico: Estilos jerárquicos (Título 1, 2) para tablas de contenido automáticas, Saltos de sección (página siguiente) para intercalar páginas horizontales en tablas anchas sin desconfigurar la paginación, Control de cambios (Track Changes) para revisión colaborativa y protección de documentos.",
    secciones: [
      {
        subtitulo: "Excel: BUSCARX vs. BUSCARV en Auditoría",
        contenido: "BUSCARX(=valor; matriz_buscada; matriz_devuelta; [si_no_se_encuentra]) es la herramienta superior para auditoría fiscal porque busca tanto a la izquierda como a la derecha, no se desconfigura si se insertan columnas intermedias y reemplaza la necesidad de anidar funciones SI.ERROR."
      },
      {
        subtitulo: "Word Técnico: Saltos de Sección y Estilos Jerárquicos",
        contenido: "Nunca se deben aplicar negritas o tamaños sueltos a los títulos en informes de la DIAN. El uso del panel de estilos permite generar el índice oficial automático, y los saltos de sección permiten cambiar de orientación vertical a horizontal en folios específicos."
      }
    ],
    trampaExamen: "Omitir el argumento FALSO o 0 en la función BUSCARV, lo que genera aproximaciones indebidas y arroja datos erróneos en auditorías contables."
  },
  {
    id: 18,
    numero: "Módulo 18",
    titulo: "Competencias Comportamentales en el Modelo CNSC y Prueba de Integridad (Valores Públicos)",
    ejeId: "comportamentales",
    normograma: "Código de Integridad del Servidor Público Colombiano (DAFP) | Decreto 815 de 2018 | Ficha FT-TAH-1824",
    resumen: "La prueba de integridad y competencias comportamentales evalúa el juicio ético del aspirante en situaciones cotidianas de presión, conflicto o dilemas en el ejercicio público. Los 5 Valores Esenciales del Código de Integridad: Honestidad (digo siempre la verdad y denuncio la corrupción), Respeto (trato digno y calidez sin sesgos), Compromiso (entrega al bien común y metas institucionales), Diligencia (celeridad, rigor legal y mejora continua) y Justicia (decisiones imparciales basadas en pruebas y equidad). Las 4 Competencias Específicas del Gestor III (Ficha TP-DE-3006): Comportamiento Ético (Nivel Exigido: Nivel 4 - Máximo Dominio: rechazo y denuncia inmediata de sobornos, cero tolerancia, declaración oportuna de impedimentos); Orientación al Logro (Nivel Exigido: Nivel 3 - Dominio Avanzado: superación de metas del POA, optimización de recursos, proactividad); Comunicación Efectiva (Nivel Exigido: Nivel 3 - Dominio Avanzado: redacción en lenguaje claro, asertividad, adaptación al interlocutor); Trabajo en Equipo (Nivel Exigido: Nivel 3 - Dominio Avanzado: colaboración interdisciplinaria, mediación constructiva y transferencia de conocimientos).",
    secciones: [
      {
        subtitulo: "Nivel de Dominio Conductual de la Ficha 3006",
        contenido: "El Gestor III es un cargo Profesional de alta responsabilidad técnica. En Comportamiento Ético se le exige el Nivel 4 (máxima intransigencia moral y liderazgo en transparencia). En Orientación al Logro, Comunicación y Trabajo en Equipo se le exige Nivel 3 (autonomía propositiva, resolución de bloqueos y orientación al resultado institucional)."
      },
      {
        subtitulo: "Perfil de Respuestas Óptimas en Juicio Situacional",
        contenido: "La opción correcta en comportamentales siempre refleja: 1. Actitud activa e inmediata (no esperar que otros resuelvan); 2. Enfoque constructivo y colaborativo (no buscar culpables individuales); 3. Apego estricto a la legalidad y transparencia (no aceptar informalidades)."
      }
    ],
    trampaExamen: "Elegir opciones individualistas ('hacerlo solo para que quede bien') o pasivas ('avisar al jefe y esperar instrucciones de brazos cruzados'). La opción óptima muestra liderazgo profesional y propuesta de soluciones."
  },
  {
    id: 19,
    numero: "Módulo 19",
    titulo: "Gran Simulador Maestro: Banco de Casos Prácticos de Juicio Situacional Comentados",
    ejeId: "simulacro",
    normograma: "Metodología Oficial de Juicio Situacional (CNSC / DIAN) | Ficha TP-DE-3006",
    resumen: "Compilación de los casos prácticos de juicio situacional con contexto fáctico detallado, rol activo de Gestor III, 3 opciones estandarizadas de respuesta (A, B, C), clave oficial justificada y cita jurídica de la norma rectora. Cubre la totalidad de procesos misionales y estratégicos de la DIAN: fiscalización, aduanas, contratación, control interno, riesgos, MGA, presupuesto, régimen disciplinario, CPACA y competencias comportamentales.",
    secciones: [
      {
        subtitulo: "Anatomía de los Casos de la Ficha 3006",
        contenido: "Cada caso sitúa al aspirante frente a un desafío real en una Seccional o Nivel Central de la DIAN: expedientes con términos por vencer, ofertas contractuales dudosas, discrepancias en indicadores de eficacia/eficiencia, hallazgos de auditoría sin causa identificada o solicitudes de información amparadas en reserva."
      },
      {
        subtitulo: "Banco Dedicado en el Sistema",
        contenido: "Los casos de este simulador maestro se mantienen en el banco independiente `casos_maestros_ficha3006.js`, garantizando práctica focalizada sin interferencias con el banco masivo de preguntas."
      }
    ],
    trampaExamen: "Guiarse por la intuición operativa privada en lugar de aplicar la rigurosidad del derecho público y el debido proceso administrativo."
  },
  {
    id: 20,
    numero: "Módulo 20",
    titulo: "Estrategias Psicométricas Avanzadas de Descarte, Gestión del Tiempo y Cronograma de 60 Días",
    ejeId: "recursos",
    normograma: "Teoría de Respuesta al Ítem (TRI) | Protocolo Oficial de Pruebas Escritas CNSC / DIAN",
    resumen: "Técnicas psicométricas avanzadas para identificar la clave oficial y descartar distractores plausibles o extremos. El Método de los Cuatro Filtros de Descarte: Filtro 1 (Legalidad Estricta y Reserva de Ley), Filtro 2 (Nivel Jerárquico del Cargo: Profesional Gestor III), Filtro 3 (Prioridad del Procedimiento Reglado sobre la Informalidad) y Filtro 4 (Conducta Proactiva, Asertiva e Íntegra). Protocolo de gestión del tiempo para la jornada dominical de 5 horas continuas (120-140 preguntas): Fase 1 Rápida (Horas 1 y 2 - 120 min), Fase 2 Analítica (Horas 3 y 4 - 120 min) y Fase 3 Traslado a Hoja Óptica con lápiz No. 2 (Última Hora - 60 min). El Cronograma Maestro de Estudio Intensivo de 60 Días dividido en 12 Semanas estratégicas con metas y entregables verificables.",
    secciones: [
      {
        subtitulo: "El Método de los Cuatro Filtros Psicométricos",
        contenido: "1. Filtro de Legalidad: Descarta de inmediato cualquier opción que sugiera violar una norma o saltarse el debido proceso por 'urgencia'.\n2. Filtro de Nivel: El Gestor III no ordena el gasto ni revoca actos de ministros, pero tampoco espera órdenes para tareas rutinarias.\n3. Filtro de Procedimiento: Descarta acuerdos verbales o prescindir de actas; todo debe quedar formalizado y con trazabilidad.\n4. Filtro Comportamental: La respuesta óptima propone soluciones, fomenta el diálogo, ataca causas raíces y tiene ética intachable."
      },
      {
        subtitulo: "Cronograma de Examen de 5 Horas",
        contenido: "• Fase 1 (Min 0-120): Resuelve preguntas de lectura directa; marca con círculo las dudosas sin detenerte más de 90 segundos.\n• Fase 2 (Min 120-240): Aborda casos largos, cálculos de indicadores, MGA y fórmulas de Excel usando los 4 filtros.\n• Fase 3 (Min 240-300): Traslado meticuloso a la hoja óptica; verifica correlación pregunta/renglón y no dejes nada en blanco."
      }
    ],
    trampaExamen: "Gastar más de 4 minutos en una sola pregunta compleja en la primera pasada, provocando que falte tiempo al final de la jornada para preguntas fáciles."
  }
];

const METODO_4_FILTROS_DATA = {
  titulo: "Método de los Cuatro Filtros de Descarte Psicométrico (Modelo TRI)",
  descripcion: "Diseñado para pruebas escritas masivas de la CNSC y universidades evaluadoras. Permite descartar los 2 distractores estructurados en cada caso de juicio situacional en menos de 60 segundos.",
  filtros: [
    {
      numero: 1,
      nombre: "Principio de Legalidad Estricta y Reserva de Ley",
      regla: "En el sector público rige el principio positivo: el servidor SOLO puede hacer lo que la Constitución y la ley le atribuyen expresamente (Arts. 6, 121 C.P.).",
      criterioDescarte: "Cualquier opción que sugiera ignorar una norma, otorgar beneficios sin reserva legal, saltarse el debido proceso o violar la reserva tributaria (Art. 583 E.T.) bajo pretexto de 'urgencia' operativa, queda descartada de inmediato."
    },
    {
      numero: 2,
      nombre: "Nivel Jerárquico del Cargo (Gestor III = Nivel Profesional)",
      regla: "El Gestor III es un cargo técnico-profesional de sustanciación, análisis y apoyo especializado.",
      criterioDescarte: "Se descartan tanto las opciones que asuman funciones exclusivas de la Alta Dirección (ordenar el gasto público, revocar actos discrecionalmente) como aquellas que reflejen pasividad o subordinación mecánica asistencial ('esperar que le ordenen todo')."
    },
    {
      numero: 3,
      nombre: "Prioridad del Procedimiento Institucional Reglado sobre la Informalidad",
      regla: "La gestión pública es reglada, motivada y documentada en expedientes trazables.",
      criterioDescarte: "Las opciones que propongan 'acuerdos verbales', 'arreglar las cosas de palabra', 'omitir el acta para no demorar' o 'prestar usuarios informáticos' son distractores clásicos construidos para detectar informalidad."
    },
    {
      numero: 4,
      nombre: "Conducta Proactiva, Asertiva e Íntegra (MIPG y Código de Integridad)",
      regla: "El mérito premia el liderazgo propositivo y la probidad ética al servicio del ciudadano.",
      criterioDescarte: "En dilemas éticos y comportamentales, la clave oficial es siempre aquella donde el servidor denuncia la corrupción de plano, asume la iniciativa para resolver cuellos de botella, propone mejoras en datos y media con asertividad."
    }
  ],
  protocolo5Horas: {
    duracionTotal: "5 Horas (300 minutos) - 120 a 140 Preguntas",
    fases: [
      {
        nombre: "Fase 1: Primera Pasada Rápida",
        tiempo: "Horas 1 y 2 (Minuto 0 al 120)",
        objetivo: "Asegurar todos los puntos de respuesta directa y procedimentales conocidos.",
        estrategia: "Lee primero la pregunta en negrilla (técnica de lectura inversa). Responde inmediatamente las seguras. Si un caso genera duda o exige cálculo, márcalo con un círculo en el cuadernillo y sigue adelante sin perder ritmo."
      },
      {
        nombre: "Fase 2: Segunda Pasada Analítica",
        tiempo: "Horas 3 y 4 (Minuto 120 al 240)",
        objetivo: "Resolver los casos situacionales complejos y ejercicios cuantitativos.",
        estrategia: "Regresa únicamente a las preguntas marcadas. Aplica el método de los 4 filtros de descarte entre las dos opciones finalistas. Resuelve los cálculos de indicadores (Eficacia, Eficiencia), MGA y fórmulas de Excel."
      },
      {
        nombre: "Fase 3: Traslado a Hoja Óptica y Verificación",
        tiempo: "Última Hora (Minuto 240 al 300)",
        objetivo: "Llenar la hoja de respuestas con precisión milimétrica sin desfases.",
        estrategia: "Usa lápiz de grafito No. 2. Rellena los óvalos de 10 en 10 cotejando el número de la pregunta con el renglón. No dejes ninguna pregunta sin responder: en las pruebas de la CNSC los errores NO descuentan puntos."
      }
    ]
  }
};

// Exportación compatible tanto con navegadores (window) como con Node.js
if (typeof window !== "undefined") {
  window.CRONOGRAMA_60_DIAS_DATA = CRONOGRAMA_60_DIAS_DATA;
  window.MODULOS_TRATADO_3006_DATA = MODULOS_TRATADO_3006_DATA;
  window.METODO_4_FILTROS_DATA = METODO_4_FILTROS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CRONOGRAMA_60_DIAS_DATA,
    MODULOS_TRATADO_3006_DATA,
    METODO_4_FILTROS_DATA
  };
}
