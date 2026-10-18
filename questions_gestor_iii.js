// questions_gestor_iii.js - Banco Maestro de Casos de Juicio Situacional (PJS) para GESTOR III - DIAN 2676
// Alineado con el Manual de Funciones FT-TAH-1824 y los Ejes Oficiales de la Convocatoria CNSC (OPEC 242703)
// Cada caso incluye fundamentación normativa con Cita Clave Textual. Total preguntas: 262

const QUESTION_BANK_GESTOR = [
  {
    "id": "dian_mision_01",
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
    "id": "dian_estruc_02",
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
    "id": "dian_mision_03",
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
    "id": "dian_mipg_01",
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
    "id": "dian_mipg_02",
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
    "id": "dian_mipg_03",
    "nivel": "Profesional",
    "ejeId": "desempeno",
    "ejeNombre": "Medición del Desempeño Institucional (FURAG)",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Medición del Desempeño Institucional y Autodiagnósticos FURAG",
    "caso": "La DIAN recibe los resultados anuales del Índice de Desempeño Institucional (IDI) arrojados por el aplicativo FURAG del DAFP. La entidad obtiene 92 puntos en direccionamiento estratégico, pero registra un retroceso a 68 puntos en la política de racionalización de trámites y servicio al ciudadano.",
    "enunciado": "Para liderar el plan de mejoramiento institucional en su seccional, la recomendación técnica procedente del Gestor III es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Impugnar judicialmente el informe del DAFP alegando que los trámites tributarios por ley deben ser lentos y engorrosos para evitar fraudes.",
        "explicacion": "Incorrecta. La racionalización y digitalización de trámites es mandato legal (Decreto Antitrámites 019 de 2012 y 2106 de 2019) y mejora la transparencia."
      },
      {
        "id": "B",
        "texto": "Analizar los cuellos de botella en la cadena de trámites (RUT, firma digital, devoluciones), implementar la simplificación de requisitos en la plataforma web y automatizar la radicación ciudadana para reducir tiempos de ciclo.",
        "explicacion": "Correcta. El propósito del FURAG y el MIPG es la mejora continua basada en evidencia: un bajo puntaje exige simplificar procedimientos, eliminar pasos redundantes y facilitar el cumplimiento voluntario de los deberes fiscales."
      },
      {
        "id": "C",
        "texto": "Cerrar los canales de atención virtual y exigir presencia física obligatoria con carpetas legajadas para todos los trámites.",
        "explicacion": "Incorrecta. Contradice los principios de gobierno digital, celeridad y racionalización de trámites de la función pública."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto Ley 2106 de 2019, Art. 1 (Racionalización de Trámites) y FURAG",
    "citaNormativa": "«Los trámites y procedimientos administrativos deberán ser simples, ágiles, accesibles y digitales, suprimiendo barreras innecesarias para facilitar el ejercicio de los derechos de los ciudadanos y el cumplimiento de sus deberes.» (Decreto Ley 2106 de 2019, Art. 1)."
  },
  {
    "id": "dian_indic_01",
    "nivel": "Profesional",
    "ejeId": "indicadores",
    "ejeNombre": "Indicadores de Gestión",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Tipología de Indicadores: Eficacia, Eficiencia y Efectividad",
    "caso": "En su rol de formulación y seguimiento a proyectos de la seccional, usted debe evaluar el desempeño de un programa para reducir la evasión tributaria en el comercio minorista. Al cierre del semestre se reporta que se ejecutó el 100% del presupuesto de visitas, pero el índice de recaudo real recuperado aumentó apenas un 1.2% frente a la meta proyectada del 15%.",
    "enunciado": "Al realizar el análisis técnico de los indicadores de gestión conforme a la metodología pública, su conclusión metodológica es:",
    "opciones": [
      {
        "id": "A",
        "texto": "El programa alcanzó alta eficacia pero nula eficiencia financiera en los gastos operativos del personal asignado.",
        "explicacion": "Incorrecta. Confunde los conceptos: eficacia mide el logro de metas finales/impactos, mientras que aquí se gastó el recurso sin lograr el resultado previsto."
      },
      {
        "id": "B",
        "texto": "Se evidenció eficiencia operativa en la ejecución del gasto y actividades (insumo/producto), pero una baja eficacia e impactante falta de efectividad en el logro del objetivo sustantivo del recaudo.",
        "explicacion": "Correcta. La eficiencia analiza la relación insumos/costos vs actividades ejecutadas; la eficacia mide el grado de cumplimiento de los objetivos y metas; y la efectividad evalúa el impacto o cambio real generado en el problema público (Guía DNP / DAFP)."
      },
      {
        "id": "C",
        "texto": "El indicador de efectividad no puede ser medido en entidades tributarias ya que el comportamiento de los contribuyentes es totalmente aleatorio.",
        "explicacion": "Incorrecta. Todo programa público en el marco de la gestión para resultados debe contar con mediciones rigurosas de impacto y efectividad social/económica."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Guía para la Construcción y Análisis de Indicadores de Gestión (DNP / DAFP)",
    "citaNormativa": "«La Eficiencia mide la optimización de los insumos y costos frente a las actividades; la Eficacia evalúa el porcentaje de cumplimiento de las metas u objetivos; y la Efectividad cuantifica el impacto real y la transformación lograda en el problema público.» (Guía Metodológica DNP)."
  },
  {
    "id": "dian_indic_02",
    "nivel": "Profesional",
    "ejeId": "indicadores",
    "ejeNombre": "Indicadores de Gestión",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Formulación de Metas y Semáforos de Gestión",
    "caso": "Una dependencia de la DIAN plantea un indicador denominado 'Porcentaje de expedientes de cobro gestionados'. La meta anual es 95%. Al mes de septiembre el resultado acumulado es de 72%. El líder de proceso propone cambiar la meta a 75% para que en el semáforo institucional la gestión aparezca en color verde.",
    "enunciado": "Frente a las buenas prácticas de medición institucional y control de gestión del MIPG, ¿cuál es el dictamen del Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobar el cambio de meta, dado que la planeación debe ser elástica y ningún indicador debe quedar en color rojo en los comités directivos.",
        "explicacion": "Incorrecta. Desvirtúa la naturaleza de la medición objetiva y maquilla desviaciones operativas que ponen en riesgo la cartera del Estado."
      },
      {
        "id": "B",
        "texto": "Rechazar la modificación arbitraria de la meta, mantener el valor de referencia original del 95%, diagnosticar las causas técnicas del retraso del 23% y formular un plan de choque con acciones correctivas para recuperar el ritmo de gestión.",
        "explicacion": "Correcta. Las metas institucionales no deben manipularse para ocultar rezagos; el indicador sirve justamente para alertar oportunamente desvíos y activar planes de contingencia (Guía DAFP)."
      },
      {
        "id": "C",
        "texto": "Suspender la medición de cobro coactivo y medir únicamente la satisfacción telefónica para asegurar resultados positivos.",
        "explicacion": "Incorrecta. Omite los indicadores misionales esenciales que impactan el recaudo y la sostenibilidad financiera."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Metodología de Direccionamiento Estratégico y Control de Gestión (DAFP)",
    "citaNormativa": "«Las metas institucionales no son modificables unilateralmente para maquillar rezagos operativos; el desvío en el semáforo de gestión tiene la finalidad preventiva de alertar el riesgo y desencadenar planes de contingencia inmediatos.» (DAFP, Guía de Control de Gestión)."
  },
  {
    "id": "dian_razon_01",
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
    "id": "dian_razon_02",
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
    "id": "dian_ci_01",
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
    "id": "dian_ci_02",
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
    "id": "dian_ci_03",
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
    "id": "dian_contra_01",
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
    "id": "dian_conven_02",
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
    "id": "dian_rend_01",
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
    "id": "dian_comp_etico_01",
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
    "id": "dian_comp_logro_01",
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
    "id": "dian_comp_equipo_01",
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
    "id": "dian_comp_comun_01",
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
    "id": "dian_comp_adapt_01",
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
    "id": "dian_comp_usuario_01",
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
    "id": "dian_integ_01",
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
    "id": "dian_integ_02",
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
    "id": "dian_integ_03",
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
    "id": "dian_integ_04",
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
    "id": "dian_trib_01",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Emplazamiento para Corregir vs. Requerimiento Especial",
    "caso": "En una investigación a una empresa comercializadora de tecnología, el Gestor III identifica que en la declaración de renta se imputaron costos por compras ficticias no soportadas en factura electrónica. El contribuyente aún no ha sido notificado de requerimiento especial.",
    "enunciado": "¿Cuál es el instrumento procesal previo que puede expedir el Gestor III para otorgarle al contribuyente la oportunidad de corregir con una sanción menor antes de proferir el Requerimiento Especial?",
    "opciones": [
      {
        "id": "A",
        "texto": "Notificar un Emplazamiento para Corregir, otorgándole un mes para responder o corregir su declaración incrementando la sanción al 20%.",
        "explicacion": "Correcta. El artículo 685 del Estatuto Tributario faculta a la DIAN para enviar emplazamiento para corregir. Si el contribuyente corrige dentro del mes siguiente, la sanción de corrección es del 20% (Art. 644 E.T.), antes de que se profiera el Requerimiento Especial donde la sanción subiría sustancialmente."
      },
      {
        "id": "B",
        "texto": "Proferir de plano una Liquidación Oficial de Aforo desconociendo la totalidad de los costos y ordenando el cierre comercial.",
        "explicacion": "Incorrecta. La liquidación de aforo solo procede contra omisos que no declaran (Art. 717 E.T.), no contra declarantes inexactos; además vulnera el debido proceso."
      },
      {
        "id": "C",
        "texto": "Convocar al representante legal a una reunión informal para negociar verbalmente la exclusión del 50% de los costos sin acto administrativo.",
        "explicacion": "Incorrecta. En el derecho tributario rige el principio de legalidad e indisponibilidad de la obligación fiscal; las actuaciones deben constar en actos formales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Arts. 685 y 644",
    "citaNormativa": "«Cuando la Administración de Impuestos tenga indicios sobre la inexactitud de la declaración del contribuyente, podrá enviarle un emplazamiento para corregir, con el fin de que dentro del mes siguiente a su notificación, la persona o entidad emplazada, si lo considera procedente, corrija la declaración.» (E.T. Art. 685)."
  },
  {
    "id": "dian_trib_02",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Término para Notificar Requerimiento Especial y Suspensión",
    "caso": "La DIAN adelanta auditoría sobre la declaración de renta del año gravable 2022 presentada oportunamente el 15 de abril de 2023 (sujeta a 3 años de firmeza general). El 10 de marzo de 2026, la DIAN notifica en debida forma un Auto de Inspección Tributaria.",
    "enunciado": "De acuerdo con el Estatuto Tributario, ¿qué efecto procesal produce la notificación del Auto de Inspección Tributaria sobre el término para proferir el Requerimiento Especial?",
    "opciones": [
      {
        "id": "A",
        "texto": "Suspende el término para notificar el Requerimiento Especial por tres (3) meses, contados a partir de la notificación del auto.",
        "explicacion": "Correcta. El artículo 706 del Estatuto Tributario dispone expresamente que el término para notificar el requerimiento especial se suspende por tres (3) meses cuando se practique inspección tributaria de oficio, a partir de la notificación del auto que la decrete."
      },
      {
        "id": "B",
        "texto": "Interrumpe definitivamente el término, obligando a reiniciar el cómputo de los tres años desde cero.",
        "explicacion": "Incorrecta. Confunde interrupción (borrón y cuenta nueva) con suspensión (pausa temporal por 3 meses según el Art. 706 E.T.)."
      },
      {
        "id": "C",
        "texto": "No produce ningún efecto legal sobre los términos, por lo que la declaración adquiere firmeza inexorable el 15 de abril de 2026.",
        "explicacion": "Incorrecta. Desconoce la norma expresa de suspensión de términos del Art. 706 E.T., lo cual induciría a error procesal a la administración."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 706 (Suspensión del término)",
    "citaNormativa": "«El término para notificar el requerimiento especial se suspenderá: Cuando se practique inspección tributaria de oficio, por el término de tres meses contados a partir de la notificación del auto que la decrete.» (E.T. Art. 706)."
  },
  {
    "id": "dian_trib_03",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Respuesta al Requerimiento Especial y Reducción de Sanción",
    "caso": "A un contribuyente se le notificó Requerimiento Especial proponiendo una sanción por inexactitud del 100% sobre el mayor impuesto determinado. El contribuyente decide aceptar integralmente los hechos planteados por la DIAN y corregir su declaración dentro de los 3 meses de respuesta.",
    "enunciado": "¿A qué porcentaje se reduce la sanción por inexactitud si el contribuyente acepta los hechos y corrige con ocasión de la respuesta al Requerimiento Especial?",
    "opciones": [
      {
        "id": "A",
        "texto": "Se reduce a la cuarta parte (25%) de la sanción inicialmente planteada por la administración.",
        "explicacion": "Correcta. Según el artículo 709 del Estatuto Tributario, si con ocasión de la respuesta al requerimiento especial el contribuyente acepta total o parcialmente los hechos, la sanción por inexactitud se reducirá a la cuarta parte (25%) en relación con los hechos aceptados."
      },
      {
        "id": "B",
        "texto": "Se exonera totalmente al 0% por tratarse de un allanamiento voluntario de buena fe.",
        "explicacion": "Incorrecta. El Estatuto Tributario no exonera al 0% la inexactitud una vez notificado el Requerimiento Especial; la ley tasa taxativamente la reducción a la cuarta parte."
      },
      {
        "id": "C",
        "texto": "Se mantiene en el 100% sin beneficio alguno porque ya se inició la etapa de determinación oficial.",
        "explicacion": "Incorrecta. Ignora el mecanismo de justicia premial y economía procesal consagrado en el Art. 709 E.T."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 709 (Corrección provocada por el Requerimiento)",
    "citaNormativa": "«Si con ocasión de la respuesta al requerimiento especial, el contribuyente, responsable, agente retenedor o declarante, acepta total o parcialmente los hechos planteados en el requerimiento, la sanción por inexactitud de que trata el artículo 647, se reducirá a la cuarta parte de la planteada inicialmente.» (E.T. Art. 709)."
  },
  {
    "id": "dian_trib_04",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Ampliación al Requerimiento Especial",
    "caso": "Tras recibir la respuesta y pruebas aportadas por el contribuyente al Requerimiento Especial, el equipo de Fiscalización constata la existencia de nuevos hechos y pasivos inexistentes no incluidos en el requerimiento inicial.",
    "enunciado": "Para respetar el debido proceso y poder incorporar estas nuevas glosas a la investigación, ¿qué actuación debe proyectar el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proyectar un Auto de Ampliación al Requerimiento Especial dentro de los tres (3) meses siguientes al vencimiento del plazo para responder el requerimiento inicial, ordenando el traslado por tres meses.",
        "explicacion": "Correcta. El artículo 708 del Estatuto Tributario contempla la Ampliación al Requerimiento Especial para incluir hechos no contemplados en el requerimiento inicial o modificar los planteados, debiendo proferirse dentro de los tres meses siguientes al vencimiento del plazo para contestar."
      },
      {
        "id": "B",
        "texto": "Incluir directamente los nuevos hechos en la Liquidación Oficial de Revisión sin previo aviso, amparado en la facultad oficiosa de aforo.",
        "explicacion": "Incorrecta. Viola el principio de congruencia (Art. 711 E.T.) y el derecho a la defensa (Art. 29 C.P.), viciando de nulidad insanable la liquidación de revisión."
      },
      {
        "id": "C",
        "texto": "Archivar el expediente actual e iniciar una nueva auditoría cinco años después cuando los términos hayan vencido.",
        "explicacion": "Incorrecta. Conlleva negligencia administrativa y la prescripción o firmeza definitiva de la declaración tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 708 (Ampliación al Requerimiento Especial)",
    "citaNormativa": "«El funcionario que conozca de la respuesta al requerimiento especial podrá, dentro de los tres meses siguientes a la fecha del vencimiento del plazo para responderlo, ordenar su ampliación, por una sola vez, y decretar las pruebas que estime necesarias.» (E.T. Art. 708)."
  },
  {
    "id": "dian_trib_05",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Principio de Correspondencia en la Liquidación Oficial de Revisión",
    "caso": "La División de Liquidación profiere una Liquidación Oficial de Revisión modificando la base gravable de renta por concepto de ingresos omitidos del exterior. Sin embargo, al revisar el Requerimiento Especial notificado previamente, este versaba exclusivamente sobre deducciones laborales improcedentes.",
    "enunciado": "¿Qué vicio procesal afecta esta Liquidación Oficial de Revisión según el régimen del Estatuto Tributario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Nulidad por violación al Principio de Correspondencia (Art. 711 E.T.), ya que la liquidación de revisión debe circunscribirse exclusivamente a los hechos y glosas formulados en el requerimiento especial o en su ampliación.",
        "explicacion": "Correcta. El Art. 711 del Estatuto Tributario exige correspondencia estricta entre la declaración, el requerimiento especial y la liquidación de revisión. No se pueden modificar conceptos o hechos que no fueron objeto de requerimiento previo."
      },
      {
        "id": "B",
        "texto": "Ninguno, pues la administración tributaria goza de competencia discrecional ilimitada para cambiar los motivos hasta antes del fallo del recurso.",
        "explicacion": "Incorrecta. La DIAN no tiene facultades discrecionales para violar el principio de correspondencia; sus competencias están regladas taxativamente."
      },
      {
        "id": "C",
        "texto": "Mera irregularidad formal subsanable mediante un oficio aclaratorio informal sin efectos de fondo.",
        "explicacion": "Incorrecta. Es un vicio sustancial de nulidad que afecta el derecho constitucional al debido proceso y contradicción probatoria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 711 (Correspondencia entre la declaración, el requerimiento y la liquidación)",
    "citaNormativa": "«La liquidación de revisión deberá contraerse exclusivamente a la declaración del contribuyente y a los hechos que hubieren sido contemplados en el requerimiento especial o en su ampliación si la hubiere.» (E.T. Art. 711)."
  },
  {
    "id": "dian_trib_06",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Firmeza General de las Declaraciones Tributarias",
    "caso": "Una sociedad presentó su declaración del impuesto sobre la renta del año 2021 el 20 de abril de 2022 de forma oportuna y con liquidación de saldo a pagar. A la fecha de hoy han transcurrido más de tres (3) años sin que la DIAN haya notificado requerimiento especial ni emplazamiento.",
    "enunciado": "¿Cuál es la situación jurídica de la mencionada declaración tributaria frente a la facultad de determinación de la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "La declaración se encuentra en Firmeza Definitiva (Art. 714 E.T.); la DIAN perdió la competencia para modificarla y no puede proferir requerimiento especial.",
        "explicacion": "Correcta. El artículo 714 del Estatuto Tributario consagra la firmeza general de 3 años contados a partir del vencimiento del plazo para declarar (o de la presentación extemporánea). Pasado este término, el denuncio tributario es inmodificable para la DIAN."
      },
      {
        "id": "B",
        "texto": "La DIAN puede modificarla en cualquier momento durante los 10 años siguientes mediante una auditoría posterior no intrusiva.",
        "explicacion": "Incorrecta. El término general de firmeza es de 3 años, salvo reglas especiales de precios de transferencia (5 años) o pérdidas fiscales."
      },
      {
        "id": "C",
        "texto": "Queda en firmeza provisional, pero la DIAN puede revocarla directamente de oficio sin límite temporal.",
        "explicacion": "Incorrecta. La firmeza tributaria precluye la potestad modificatoria de la administración; los actos en firme no pueden desconocerse oficiosamente."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 714 (Firmeza de la declaración tributaria)",
    "citaNormativa": "«La declaración tributaria quedará en firme si, dentro de los tres (3) años siguientes a la fecha del vencimiento del plazo para declarar, no se ha notificado requerimiento especial.» (E.T. Art. 714)."
  },
  {
    "id": "dian_trib_07",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Beneficio de Auditoría y Pérdida del Término Especial",
    "caso": "Un contribuyente se acogió al Beneficio de Auditoría incrementando su impuesto neto de renta en un 35% respecto al año anterior, pretendiendo obtener firmeza en seis (6) meses. No obstante, al verificar los antecedentes, el pago de la declaración se realizó 5 días después del vencimiento legal.",
    "enunciado": "Como Gestor III a cargo de evaluar la procedencia del beneficio de auditoría, su conclusión técnico-jurídica es:",
    "opciones": [
      {
        "id": "A",
        "texto": "El contribuyente perdió el beneficio de auditoría porque la norma exige de forma taxativa presentar la declaración y efectuar el pago total de manera oportuna; en consecuencia, su firmeza se rige por el término general de tres (3) años.",
        "explicacion": "Correcta. El artículo 689-3 del Estatuto Tributario condiciona el beneficio de auditoría a que la declaración se presente oportunamente y su pago total se efectúe en los plazos fijados por el Gobierno. El pago extemporáneo invalida el beneficio especial."
      },
      {
        "id": "B",
        "texto": "El beneficio se mantiene intacto porque la extemporaneidad en el pago solo genera intereses moratorios pero no afecta los términos de firmeza procesal.",
        "explicacion": "Incorrecta. El parágrafo legal condiciona de manera ineludible la firmeza especial de 6 o 12 meses al pago oportuno de la declaración."
      },
      {
        "id": "C",
        "texto": "Se le concede una prórroga automática de 30 días hábiles para subsanar el pago extemporáneo sin perder el beneficio.",
        "explicacion": "Incorrecta. En materia de beneficios tributarios la interpretación es estricta y restrictiva; la ley no autoriza prórrogas discrecionales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 689-3 (Beneficio de auditoría)",
    "citaNormativa": "«Para que opere el beneficio de auditoría, la declaración debe ser presentada oportunamente y el pago de los valores a cargo debe realizarse dentro de los plazos que fije el Gobierno Nacional.» (E.T. Art. 689-3)."
  },
  {
    "id": "dian_trib_08",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Sanción de Clausura del Establecimiento (Art. 657 E.T.)",
    "caso": "Durante un operativo de control de facturación en una zona gastronómica, funcionarios de la DIAN constatan en flagrancia que un restaurante reincidente no expide factura electrónica ni documento equivalente a los clientes, entregando únicamente precuentas o comandas informales.",
    "enunciado": "¿Cuál es la sanción legal procedente y el procedimiento que debe aplicar la DIAN conforme al Estatuto Tributario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Imponer la sanción de Clausura o Cierre del Establecimiento de Comercio por un término de tres (3) días, mediante resolución motivada previo pliego de cargos y traslado de descargos por 10 días.",
        "explicacion": "Correcta. El artículo 657 del Estatuto Tributario contempla la clausura del establecimiento por 3 días por no expedir factura o expedirla sin requisitos. Requiere pliego de cargos con 10 días para descargos, garantizando el debido proceso administrativo."
      },
      {
        "id": "B",
        "texto": "Cerrar inmediatamente el local con candados en el acto sin proferir pliego de cargos ni escuchar descargos.",
        "explicacion": "Incorrecta. Viola flagrantemente el derecho al debido proceso y defensa (Art. 29 C.P. y Art. 657 E.T.), acarreando nulidad de la actuación."
      },
      {
        "id": "C",
        "texto": "Decomisar la maquinaria de cocina y ordenar el desalojo definitivo del inmueble.",
        "explicacion": "Incorrecta. Es una medida desproporcionada que carece de amparo normativo en las facultades de fiscalización tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 657 (Sanción de clausura del establecimiento)",
    "citaNormativa": "«La Administración Tributaria podrá imponer la sanción de clausura o cierre del establecimiento de comercio, oficina, consultorio y, en general, del sitio donde se ejerza la actividad, profesión u oficio, por un término de tres (3) días, cuando no se expida factura o documento equivalente estando obligado a ello.» (E.T. Art. 657)."
  },
  {
    "id": "dian_trib_09",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Ruptura de Sellos Oficiales de Clausura (Art. 657 E.T.)",
    "caso": "A un establecimiento comercial sancionado con cierre por no facturar se le impusieron los sellos oficiales de 'CERRADO POR LA DIAN'. Al día siguiente, el propietario rompe los sellos y abre al público el negocio con normalidad.",
    "enunciado": "Ante la ruptura de sellos oficiales de clausura, ¿cuál es la consecuencia jurídica que la DIAN debe aplicar de inmediato?",
    "opciones": [
      {
        "id": "A",
        "texto": "Imponer la sanción de clausura por un término de treinta (30) días y dar traslado inmediato a la Fiscalía General de la Nación por el delito de violación de sellos oficiales (Código Penal Art. 434).",
        "explicacion": "Correcta. El Art. 657 parágrafo 3 del E.T. establece que la violación a los sellos oficiales acarrea el incremento de la clausura a 30 días, además de la remisión penal a la Fiscalía General por el delito tipificado en el Código Penal."
      },
      {
        "id": "B",
        "texto": "Disculpar la conducta si el comerciante se compromete por escrito a no volver a abrir hasta la semana siguiente.",
        "explicacion": "Incorrecta. El servidor público no puede tolerar la infracción penal ni omitir el ejercicio de la potestad punitiva reglada."
      },
      {
        "id": "C",
        "texto": "Aplicar una amonestación verbal en cartelera y esperar a que termine el año fiscal.",
        "explicacion": "Incorrecta. Constituye omisión de denuncia y prevaricato por omisión de las funciones de policía administrativa fiscal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 657 y Código Penal Art. 434",
    "citaNormativa": "«La ruptura de los sellos oficiales colocados por la DIAN durante la clausura acarreará el cierre del establecimiento por el término de treinta (30) días calendario y la correspondiente denuncia penal ante la autoridad competente.» (E.T. Art. 657 Parágrafo)."
  },
  {
    "id": "dian_trib_10",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Límites del Sistema POS y Factura Electrónica",
    "caso": "Un almacén de grandes superficies expide tiquetes de máquina registradora con sistema POS por compras individuales que superan las cinco (5) UVT sin la identificación plena del adquirente, negándose a expedir la factura electrónica que el cliente exigió.",
    "enunciado": "Respecto a la validez fiscal del tiquete POS en compras superiores a 5 UVT y la exigencia del comprador, ¿cuál es el criterio legal?",
    "opciones": [
      {
        "id": "A",
        "texto": "El tiquete POS no da derecho a costos ni deducciones en renta, ni a descontables en IVA para el comprador; además, siempre que el adquirente exija factura electrónica, el comercio está obligado a expedirla sin importar la cuantía.",
        "explicacion": "Correcta. La Resolución DIAN 1092 de 2022 y el Art. 616-1 del E.T. limitan el POS y fijan que no sirve de soporte fiscal de costos/descontables; si el adquirente solicita factura electrónica, el sujeto obligado debe generarla obligatoriamente."
      },
      {
        "id": "B",
        "texto": "El tiquete POS es plenamente válido para deducir costos ilimitadamente sin que nadie pueda exigir factura electrónica.",
        "explicacion": "Incorrecta. El tiquete POS fue excluido expresamente por la ley como soporte de deducciones y descontables para el adquirente."
      },
      {
        "id": "C",
        "texto": "El comercio solo está obligado a entregar factura electrónica si la compra supera los 50 millones de pesos en efectivo.",
        "explicacion": "Incorrecta. Desconoce la normativa de facturación electrónica y el límite técnico de las 5 UVT para el documento POS."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 616-1 y Resolución DIAN 1092 de 2022",
    "citaNormativa": "«El tiquete de máquina registradora con sistema POS no otorgará derecho a impuestos descontables en el IVA, ni a costos ni deducciones en el impuesto sobre la renta y complementarios para el adquirente.» (E.T. Art. 616-1 Parágrafo 2)."
  },
  {
    "id": "dian_trib_11",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Proveedores Ficticios o Insolventes (Art. 671 E.T.)",
    "caso": "En una redada contra la evasión, la DIAN descubre una empresa de papel constituida únicamente para vender facturas falsas que simulan compras millonarias de insumos inexistentes a diversas corporaciones.",
    "enunciado": "De acuerdo con el artículo 671 del Estatuto Tributario, ¿qué declaración oficial y efectos jurídicos debe tramitar el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proyectar la resolución que declara a la sociedad como 'Proveedor Ficticio', lo cual genera el desconocimiento automático de todas las compras y costos soportados en sus facturas para los terceros compradores durante los 5 años siguientes.",
        "explicacion": "Correcta. El Art. 671 del Estatuto Tributario faculta declarar proveedores ficticios a quienes facturen operaciones inexistentes. Las facturas expedidas no dan derecho a costos, deducciones ni descontables por 5 años a partir de la publicación de la sanción."
      },
      {
        "id": "B",
        "texto": "Felicitar a la empresa por su innovación contable y otorgarle un plazo de 3 años para que empiece a operar de verdad.",
        "explicacion": "Incorrecta. Es un despropósito ético y legal que desconoce las facultades sancionatorias de la administración tributaria."
      },
      {
        "id": "C",
        "texto": "Validar las compras ficticias siempre que los compradores hayan pagado en cheque cruzado.",
        "explicacion": "Incorrecta. El medio de pago no convalida la inexistencia material de la operación económica ni sanea el fraude tributario."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 671 (Sanción de declaración de proveedor ficticio o insolvente)",
    "citaNormativa": "«No serán deducibles en el impuesto sobre la renta, ni darán derecho a impuestos descontables en el IVA, las compras o gastos efectuados a quienes el Director de la DIAN haya declarado como proveedores ficticios.» (E.T. Art. 671)."
  },
  {
    "id": "dian_trib_12",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Tarifas Especiales de la Sanción por Inexactitud (Art. 648 E.T.)",
    "caso": "En una fiscalización a una persona natural de altos ingresos, se evidencia que utilizó maniobras fraudulentas consistentes en la utilización de datos y documentos falsos para omitir ingresos y evadir retenciones en la fuente.",
    "enunciado": "Cuando la inexactitud en la declaración tributaria se origina en la utilización de datos o documentos falsos o fraudulentos, ¿cuál es la tarifa legal de la sanción por inexactitud?",
    "opciones": [
      {
        "id": "A",
        "texto": "La tarifa especial agravada es del ciento sesenta por ciento (160%) de la diferencia del saldo determinado o del impuesto omitido.",
        "explicacion": "Correcta. El artículo 648 del Estatuto Tributario establece que la sanción por inexactitud será del 160% cuando la inexactitud se origine en la comisión de conductas fraudulentas o en la utilización de documentos o datos falsos."
      },
      {
        "id": "B",
        "texto": "La tarifa es del diez por ciento (10%) porque se asimila a una simple corrección formal.",
        "explicacion": "Incorrecta. El fraude documental está sancionado con la tarifa agravada del 160%, la más severa frente a conductas fraudulentas calificadas."
      },
      {
        "id": "C",
        "texto": "La tarifa fija siempre es del 50% con independencia de la gravedad o dolo de la maniobra.",
        "explicacion": "Incorrecta. Desconoce la escala punitiva del Art. 648 E.T., donde la tarifa ordinaria es 100% y la agravada por fraude sube al 160%."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 648 (Tarifa de la sanción por inexactitud)",
    "citaNormativa": "«La sanción por inexactitud será del ciento sesenta por ciento (160%) de la diferencia del saldo a favor o de la suma resultante del mayor impuesto, cuando la inexactitud se origine en la utilización de datos o documentos falsos o fraudulentos.» (E.T. Art. 648 Numeral 1)."
  },
  {
    "id": "dian_trib_13",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Principio de Lesividad y Graduación de Sanciones (Art. 640 E.T.)",
    "caso": "A un declarante se le formula pliego de cargos por extemporaneidad en el suministro de información exógena. El contribuyente demuestra que en los dos (2) años anteriores no cometió la misma conducta sancionable y subsana voluntariamente antes de la notificación de la resolución sanción.",
    "enunciado": "¿A qué porcentaje de reducción tiene derecho el contribuyente en aplicación del artículo 640 del Estatuto Tributario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tiene derecho a que la sanción se reduzca al cincuenta por ciento (50%) del valor determinado, sin que la sanción liquidada resulte inferior a la mínima legal.",
        "explicacion": "Correcta. El artículo 640 del Estatuto Tributario establece que si en los 2 años anteriores no se ha cometido la misma infracción y se subsana antes de la resolución sanción, la sanción se reduce al 50% de la inicialmente calculada (o al 70% si ya se profirió pliego de cargos según el caso, respetando siempre la sanción mínima)."
      },
      {
        "id": "B",
        "texto": "Tiene derecho a la condonación total y un bono de exención tributaria para el año gravable siguiente.",
        "explicacion": "Incorrecta. La ley no autoriza condonaciones totales ni bonos fiscales; rige el principio de obligatoriedad de la sanción graduada."
      },
      {
        "id": "C",
        "texto": "No tiene derecho a reducción porque las sanciones formales no admiten ninguna aplicación del principio de gradualidad.",
        "explicacion": "Incorrecta. El Art. 640 E.T. aplica transversalmente a la gran mayoría de sanciones tributarias, garantizando la proporcionalidad punitiva."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 640 (Aplicación de los principios de lesividad, proporcionalidad, gradualidad y favorabilidad)",
    "citaNormativa": "«Habrá lugar a aplicar la gradualidad cuando no se haya cometido la misma infracción en los dos (2) años anteriores a la fecha de la comisión de la conducta, en cuyo caso la sanción se reducirá al cincuenta por ciento (50%) del valor de la sanción legalmente establecida.» (E.T. Art. 640 Numeral 1)."
  },
  {
    "id": "dian_trib_14",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Correcciones que Aumentan el Impuesto (Art. 588 E.T.)",
    "caso": "Una sociedad descubre por auditoría interna que omitió declarar un contrato de servicios en su denuncio de renta, lo cual incrementa el impuesto a pagar. Ya han transcurrido 2 años desde el vencimiento del plazo para declarar, pero la declaración no está en firme ni ha recibido requerimiento especial.",
    "enunciado": "¿Puede la sociedad corregir su declaración tributaria de forma voluntaria conforme al artículo 588 del Estatuto Tributario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí puede corregir válidamente, pues el término para presentar correcciones que aumenten el impuesto a pagar o disminuyan el saldo a favor es de tres (3) años siguientes al vencimiento del plazo para declarar, siempre que no se haya notificado requerimiento especial.",
        "explicacion": "Correcta. La Ley 1819 de 2016 amplió el término del Art. 588 del Estatuto Tributario a tres (3) años, homologándolo con el término general de firmeza, siempre que no se haya notificado auto de requerimiento especial ni emplazamiento para corregir."
      },
      {
        "id": "B",
        "texto": "No puede corregir, porque las correcciones voluntarias solo se permiten dentro de los 3 meses posteriores a la presentación.",
        "explicacion": "Incorrecta. Confunde plazos; el término legal vigente bajo el Art. 588 E.T. es de 3 años contados a partir del vencimiento para declarar."
      },
      {
        "id": "C",
        "texto": "Solo puede corregir si la DIAN le autoriza previamente por escrito mediante resolución especial de permiso tributario.",
        "explicacion": "Incorrecta. Las correcciones del Art. 588 que incrementan el impuesto son un derecho voluntario directo del declarante sin requerir permiso previo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 588 (Correcciones que aumentan el impuesto)",
    "citaNormativa": "«Los contribuyentes podrán corregir sus declaraciones tributarias dentro de los tres (3) años siguientes al vencimiento del plazo para declarar y antes de que se les haya notificado requerimiento especial o pliego de cargos.» (E.T. Art. 588)."
  },
  {
    "id": "dian_trib_15",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Correcciones que Disminuyen el Impuesto a Pagar (Art. 589 E.T.)",
    "caso": "Una empresa liquida por error un impuesto a las ventas superior al debido por haber calculado el IVA sobre una base que incluía operaciones excluidas. Desea corregir la declaración disminuyendo el valor a pagar.",
    "enunciado": "¿Cuál es el procedimiento legal actual establecido en el artículo 589 del Estatuto Tributario para presentar esta corrección?",
    "opciones": [
      {
        "id": "A",
        "texto": "Presentar la declaración de corrección directamente dentro del año siguiente al vencimiento del plazo para declarar; la corrección surte efectos inmediatos sin necesidad de proyecto previo de corrección ante la DIAN.",
        "explicacion": "Correcta. La Ley 2010 de 2019 reformó el Art. 589 E.T. eliminando el engorroso trámite del 'proyecto de corrección'. Ahora la declaración de corrección que disminuye el valor a pagar o aumenta el saldo a favor se presenta directamente dentro del año siguiente y surte efectos inmediatos."
      },
      {
        "id": "B",
        "texto": "Iniciar una demanda de nulidad y restablecimiento del derecho ante el Consejo de Estado sin presentar ninguna declaración.",
        "explicacion": "Incorrecta. No procede demanda judicial directa; debe agotarse el procedimiento administrativo previo de corrección consagrado en la ley."
      },
      {
        "id": "C",
        "texto": "Esperar a que la DIAN le formule una liquidación oficial de aforo para oponerse en los descargos.",
        "explicacion": "Incorrecta. El aforo es exclusivo contra omisos, no contra declarantes que desean disminuir su carga declarada en exceso."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 589 (Correcciones que disminuyen el valor a pagar o aumentan el saldo a favor)",
    "citaNormativa": "«Para corregir las declaraciones tributarias disminuyendo el valor a pagar o aumentando el saldo a favor, se deberá presentar la respectiva declaración dentro del año siguiente al vencimiento del término para presentar la declaración.» (E.T. Art. 589)."
  },
  {
    "id": "dian_trib_16",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Devolución Automática de Saldos a Favor (Art. 855 E.T.)",
    "caso": "Un exportador catalogado como contribuyente de bajo riesgo presenta solicitud de devolución de un saldo a favor en IVA. El 90% de sus costos y compras están soportados en factura electrónica con validación previa.",
    "enunciado": "¿Cuál es el término especial que tiene la DIAN para proferir el acto de devolución bajo el mecanismo de Devolución Automática?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dentro de los quince (15) días hábiles siguientes a la fecha de radicación de la solicitud en debida forma.",
        "explicacion": "Correcta. El artículo 855 del Estatuto Tributario y el Decreto 963 de 2020 establecen que la DIAN devolverá de forma automática dentro de los 15 días hábiles siguientes a quienes cumplan con los criterios de bajo riesgo y soporten al menos el porcentaje exigido en factura electrónica."
      },
      {
        "id": "B",
        "texto": "Dentro de los seis (6) meses siguientes con intervención obligatoria de la Procuraduría General.",
        "explicacion": "Incorrecta. El término ordinario es de 50 días y el automático se reduce drásticamente a 15 días hábiles; no se extiende a 6 meses ni interviene la Procuraduría."
      },
      {
        "id": "C",
        "texto": "En un término perentorio de 24 horas continuas sin verificar ninguna consistencia tributaria.",
        "explicacion": "Incorrecta. La DIAN requiere un término prudente reglado (15 días hábiles) para verificar los cruces de retenciones y saldos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 855 (Término para la devolución de saldos a favor)",
    "citaNormativa": "«La DIAN podrá devolver, de forma automática, los saldos a favor originados en el impuesto sobre la renta y sobre las ventas, dentro de los quince (15) días siguientes a la fecha de radicación de la solicitud.» (E.T. Art. 855 Parágrafo 5)."
  },
  {
    "id": "dian_trib_17",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inadmisión de Solicitudes de Devolución y Compensación (Art. 857 E.T.)",
    "caso": "Un solicitante de devolución de saldos a favor en renta presenta su trámite omitiendo adjuntar el certificado de retenciones emitido por los agentes retenedores que originaron el saldo.",
    "enunciado": "Como Gestor III del área de Devoluciones, ¿cuál es el acto procesal reglado procedente y qué término tiene el contribuyente para subsanar?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proferir Auto Inadmisorio de la solicitud, notificándolo para que el solicitante subsane las omisiones o inconsistencias dentro del mes siguiente.",
        "explicacion": "Correcta. El artículo 857 del Estatuto Tributario regula el auto inadmisorio cuando no se aportan los requisitos o soportes formales. El interesado dispone de un (1) mes para presentar una nueva solicitud subsanando los vicios señalados."
      },
      {
        "id": "B",
        "texto": "Proferir Auto de Rechazo Definitivo confiscando el saldo a favor en beneficio exclusivo de la DIAN.",
        "explicacion": "Incorrecta. El rechazo definitivo solo procede por causas taxativas graves (ej. extemporaneidad o saldo previamente devuelto), no por omisiones formales subsanables."
      },
      {
        "id": "C",
        "texto": "Ignorar la solicitud archivándola sin respuesta para que opere el silencio administrativo negativo.",
        "explicacion": "Incorrecta. Constituye falta disciplinaria por desatención a las peticiones ciudadanas regladas y mora injustificada."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 857 (Rechazo e inadmisión de las solicitudes de devolución o compensación)",
    "citaNormativa": "«Cuando la solicitud no cumpla con los requisitos, se dictará auto inadmisorio en el cual se señalarán los defectos que deben subsanarse. Dentro del mes siguiente a la notificación del auto, el solicitante podrá presentar nueva solicitud con el lleno de requisitos.» (E.T. Art. 857)."
  },
  {
    "id": "dian_trib_18",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Precios de Transferencia y Principio de Plena Competencia",
    "caso": "Una filial colombiana compra materias primas a su casa matriz en Panamá a un precio un 300% más alto que el valor de mercado entre partes independientes, reduciendo artificialmente la utilidad contable y el impuesto de renta en Colombia.",
    "enunciado": "En la auditoría de precios de transferencia, ¿qué criterio legal debe aplicar el Gestor III para ajustar las operaciones entre partes vinculadas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aplicar el Principio de Plena Competencia (Arm's Length) ajustando los precios y márgenes a los valores que se habrían pactado entre terceros independientes en condiciones comparables (Art. 260-1 y 260-3 E.T.).",
        "explicacion": "Correcta. El régimen de precios de transferencia en Colombia obliga a los contribuyentes que celebren operaciones con vinculados del exterior a determinar sus ingresos, costos y deducciones considerando el principio de plena competencia o valor de mercado."
      },
      {
        "id": "B",
        "texto": "Aceptar los valores pactados sin objeción argumentando la autonomía contractual de la empresa privada internacional.",
        "explicacion": "Incorrecta. El régimen de precios de transferencia existe precisamente para evitar la deslocalización artificial de bases imponibles entre filiales vinculadas."
      },
      {
        "id": "C",
        "texto": "Prohibir indefinidamente a la empresa colombiana realizar cualquier compraventa o importación con el exterior.",
        "explicacion": "Incorrecta. La DIAN no prohíbe el comercio lícito, sino que reliquida las bases fiscales ajustándolas al valor de plena competencia para cobrar el impuesto real."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Arts. 260-1 y 260-3 (Régimen de Precios de Transferencia)",
    "citaNormativa": "«Los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados del exterior están obligados a determinar, para efectos del impuesto, sus ingresos, costos y deducciones considerando para esas operaciones el principio de plena competencia.» (E.T. Art. 260-1)."
  },
  {
    "id": "dian_trib_19",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cláusula General Antielusión y Reconfiguración de Negocios (Art. 869 E.T.)",
    "caso": "Tres accionistas constituyen una cascada de sociedades instrumentales sin empleados ni activos reales, celebrando contratos de arrendamiento simulados únicamente para eludir el impuesto a los dividendos.",
    "enunciado": "¿Qué potestad faculta a la DIAN para desconocer la estructura formal artificial y recaracterizar el negocio conforme a su realidad económica?",
    "opciones": [
      {
        "id": "A",
        "texto": "La Cláusula General Antielusión (Art. 869 E.T.), que autoriza reconfigurar o recaracterizar las operaciones artificiosas o que constituyan abuso en materia tributaria, liquidando los tributos según la sustancia económica real.",
        "explicacion": "Correcta. El Art. 869 del Estatuto Tributario faculta a la DIAN para recaracterizar o reconfigurar cualquier transacción o negocio jurídico que carezca de un propósito económico o comercial legítimo y cuyo objetivo esencial sea la obtención de un beneficio tributario abusivo."
      },
      {
        "id": "B",
        "texto": "El principio de libre empresa que impide a las autoridades públicas investigar la estructura societaria de los particulares.",
        "explicacion": "Incorrecta. La libertad económica no ampara el abuso del derecho ni el fraude a la ley fiscal; prima la prevalencia de la sustancia económica sobre la forma jurídica."
      },
      {
        "id": "C",
        "texto": "La expropiación administrativa inmediata de las acciones y bienes de todas las empresas sin fórmula de juicio.",
        "explicacion": "Incorrecta. La reconfiguración fiscal no es confiscación patrimonial; es una determinación tributaria reglada respetando el debido proceso de auditoría."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 869 (Abuso en materia tributaria)",
    "citaNormativa": "«La Administración Tributaria podrá recaracterizar o reconfigurar toda operación o serie de operaciones que constituyan abuso en materia tributaria y consecuentemente desconocer sus efectos, gravando la realidad económica subyacente.» (E.T. Art. 869)."
  },
  {
    "id": "dian_trib_20",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Régimen Simple de Tributación (SIMPLE) y Exclusión",
    "caso": "Un comerciante inscrito en el Régimen SIMPLE incumple de forma reiterada la obligación de pago del anticipo bimestral durante tres periodos consecutivos y omite la transmisión de facturas electrónicas.",
    "enunciado": "¿Cuál es la actuación legal que debe proyectar el Gestor III conforme a las reglas del Régimen SIMPLE?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proyectar la Resolución de Exclusión del Régimen Simple de Tributación, reclasificando al contribuyente en el régimen ordinario de renta y ventas con las consecuencias fiscales y sancionatorias pertinentes.",
        "explicacion": "Correcta. El artículo 913 del Estatuto Tributario faculta a la DIAN para excluir de oficio a los contribuyentes que incumplan los deberes formales o sustanciales del SIMPLE, perdiendo el beneficio y retornando al régimen ordinario."
      },
      {
        "id": "B",
        "texto": "Condonar las obligaciones pendientes y asignarle un subsidio económico estatal por pertenecer al régimen simple.",
        "explicacion": "Incorrecta. El Régimen SIMPLE es un modelo de formalización tributaria con reglas estrictas de cumplimiento; no otorga subsidios ni exime de sanciones por incumplimiento."
      },
      {
        "id": "C",
        "texto": "Mantenerlo indefinidamente en el SIMPLE prohibiéndole pagar impuestos para que no incurra en gastos.",
        "explicacion": "Incorrecta. Falla garrafal contra la función fiscal de recaudo y control tributario del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Arts. 905 y 913 (Exclusión del Régimen SIMPLE)",
    "citaNormativa": "«Cuando el contribuyente incumpla las condiciones y requisitos previstos para pertenecer al régimen simple de tributación, la DIAN lo excluirá del régimen y lo reclasificará en el régimen ordinario.» (E.T. Art. 913)."
  },
  {
    "id": "dian_trib_21",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Declaraciones que se Tienen por no Presentadas (Art. 580 E.T.)",
    "caso": "Una sociedad remite su declaración de retención en la fuente a través del sistema informático, pero el archivo se presenta sin la firma digital del Revisor Fiscal debidamente facultado, estando obligada por ley a tenerlo.",
    "enunciado": "De acuerdo con el artículo 580 del Estatuto Tributario, ¿cuál es la consecuencia jurídica que afecta a esta declaración?",
    "opciones": [
      {
        "id": "A",
        "texto": "La declaración se tiene como no presentada (Art. 580 literal d E.T.), por cuanto la omisión de la firma del revisor fiscal o contador público cuando existe la obligación legal impide que el denuncio produzca efectos jurídicos válidos.",
        "explicacion": "Correcta. El Art. 580 del Estatuto Tributario es taxativo: las declaraciones que no contengan la firma del revisor fiscal o contador público cuando haya obligación legal de tenerlo, no se tendrán por presentadas."
      },
      {
        "id": "B",
        "texto": "Se tiene por plenamente válida y no requiere firma alguna porque el envío electrónico convalida automáticamente cualquier firma humana.",
        "explicacion": "Incorrecta. El mecanismo electrónico requiere firma electrónica calificada del revisor fiscal; su ausencia acarrea la ineficacia legal de la presentación."
      },
      {
        "id": "C",
        "texto": "Genera automáticamente la pena de prisión de 10 años para el representante legal sin necesidad de proceso disciplinario ni tributario.",
        "explicacion": "Incorrecta. No es una conducta penal per se; es una causal procedimental administrativa de ineficacia de la declaración (tenerse por no presentada)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 580 (Declaraciones que se tienen por no presentadas)",
    "citaNormativa": "«No se entenderá cumplido el deber de presentar la declaración tributaria, cuando la misma no se presente firmada por quien deba cumplir el deber formal de declarar, o cuando se omita la firma del revisor fiscal o contador público existiendo la obligación legal.» (E.T. Art. 580 literal d)."
  },
  {
    "id": "dian_trib_22",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cómputo de Términos en Notificación Electrónica (Art. 566-1 E.T.)",
    "caso": "La DIAN envía un requerimiento ordinario de información al correo electrónico registrado en el RUT de un contribuyente el día miércoles a las 4:00 p.m.",
    "enunciado": "Conforme al artículo 566-1 del Estatuto Tributario, ¿a partir de qué momento se entiende notificado el acto y cuándo empiezan a correr los términos legales para responder?",
    "opciones": [
      {
        "id": "A",
        "texto": "La notificación se entiende surtida para la DIAN con el envío del correo; pero para el contribuyente, los términos empezarán a correr cinco (5) días hábiles después de la entrega del correo electrónico en su buzón.",
        "explicacion": "Correcta. El Art. 566-1 del E.T. (modificado por la Ley 2010 de 2019) estipula que la notificación electrónica se entiende surtida con la entrega del correo, pero los términos para el contribuyente corren a partir del quinto (5°) día hábil siguiente a la entrega del mensaje."
      },
      {
        "id": "B",
        "texto": "Los términos corren inmediatamente a las 4:01 p.m. del mismo día en que se remitió el mensaje de datos sin ningún plazo de gracia.",
        "explicacion": "Incorrecta. Ignora la garantía del término de gracia de cinco (5) días hábiles que la ley otorga para que el administrado revise su bandeja electrónica."
      },
      {
        "id": "C",
        "texto": "Solo se entiende notificado si el contribuyente contesta confirmando de recibido con firma autenticada en notaría.",
        "explicacion": "Incorrecta. La validez de la notificación electrónica no está subordinada a la confirmación de lectura voluntaria del destinatario."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 566-1 (Notificación electrónica)",
    "citaNormativa": "«Los términos concedidos al administrado para responder o impugnar el acto administrativo notificado electrónicamente, empezarán a correr a partir del quinto (5°) día hábil siguiente a la fecha en que el correo electrónico sea entregado en el buzón.» (E.T. Art. 566-1)."
  },
  {
    "id": "dian_trib_23",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Emplazamiento para Declarar y Liquidación Oficial de Aforo (Art. 715 E.T.)",
    "caso": "Un ciudadano obligado a declarar renta por superar topes de ingresos y consignaciones bancarias omite presentar la declaración. La DIAN le notifica Emplazamiento para Declarar otorgándole un (1) mes, pero el ciudadano guarda absoluto silencio y continúa omiso.",
    "enunciado": "¿Cuál es el siguiente paso procesal reglado que la DIAN debe expedir para determinar oficialmente el tributo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proferir una Liquidación Oficial de Aforo dentro de los cinco (5) años siguientes al vencimiento del plazo para declarar, determinando la obligación tributaria y la sanción por no declarar (Arts. 717 y 643 E.T.).",
        "explicacion": "Correcta. Vencido el plazo del emplazamiento para declarar sin que el obligado presente la declaración, la DIAN procede a proferir la Liquidación Oficial de Aforo (Art. 717 E.T.), la cual tiene un término de caducidad de 5 años según el Art. 717 del Estatuto."
      },
      {
        "id": "B",
        "texto": "Declarar la prescripción y archivar el caso definitivamente porque la administración no puede liquidar tributos sin el consentimiento del ciudadano.",
        "explicacion": "Incorrecta. La DIAN tiene la potestad de aforo oficioso precisamente para determinar el impuesto y sancionar a los omisos sin requerir su consentimiento."
      },
      {
        "id": "C",
        "texto": "Notificar un Requerimiento Especial para modificar la declaración inexistente.",
        "explicacion": "Incorrecta. El requerimiento especial solo procede contra declaraciones previamente presentadas para modificarlas; no contra omisos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Arts. 715 y 717 (Liquidación de Aforo)",
    "citaNormativa": "«Agotado el procedimiento previsto en el artículo 715, la Administración podrá, dentro de los cinco (5) años siguientes al vencimiento del plazo señalado para declarar, determinar mediante una Liquidación de Aforo, la obligación tributaria al contribuyente omiso.» (E.T. Art. 717)."
  },
  {
    "id": "dian_trib_24",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Sanción por no Declarar en IVA y Retenciones (Art. 643 E.T.)",
    "caso": "Una sociedad responsable de IVA omite presentar las declaraciones bimestrales de todo el año. La DIAN adelanta el proceso de aforo y debe liquidar la sanción correspondiente por no declarar.",
    "enunciado": "De acuerdo con el artículo 643 del Estatuto Tributario, ¿a cuánto equivale la sanción por no declarar el impuesto sobre las ventas (IVA)?",
    "opciones": [
      {
        "id": "A",
        "texto": "Al diez por ciento (10%) de las consignaciones bancarias o ingresos brutos del período no declarado, o al cien por ciento (100%) de las retenciones que figuren en la última declaración de ventas presentada, la que fuere superior.",
        "explicacion": "Correcta. El artículo 643 numeral 2 del Estatuto Tributario fija de manera taxativa que la sanción por no declarar IVA será del 10% de las consignaciones o ingresos brutos del periodo, o del 100% de las retenciones que figuren en la última declaración de ventas."
      },
      {
        "id": "B",
        "texto": "A una suma fija de 1 UVT sin importar los ingresos ni las transacciones bancarias del contribuyente.",
        "explicacion": "Incorrecta. Las sanciones por omisión son proporcionales a las bases económicas para castigar severamente la omisión de recaudar y declarar el IVA."
      },
      {
        "id": "C",
        "texto": "Al 1% del capital suscrito de la compañía en el registro mercantil.",
        "explicacion": "Incorrecta. La base sancionatoria tributaria se fundamenta en ingresos, consignaciones o impuestos del periodo, no en el capital social."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 643 (Sanción por no declarar)",
    "citaNormativa": "«En el caso de que la omisión se refiera a la declaración del impuesto sobre las ventas, la sanción será del diez por ciento (10%) de las consignaciones bancarias o ingresos brutos de quien persiste en su omisión, o al cien por ciento (100%) del impuesto que figure en la última declaración presentada, el que resulte superior.» (E.T. Art. 643 Numeral 2)."
  },
  {
    "id": "dian_aduanas_01",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Aprehensión vs. Decomiso de Mercancías",
    "caso": "En una inspección de control posterior en un depósito aduanero, funcionarios de la DIAN detectan un contenedor de electrodomésticos sin declaración de importación ni factura comercial amparada en los documentos de transporte.",
    "enunciado": "¿Cuál es la medida cautelar inmediata que debe adoptarse y en qué momento se convierte en acto administrativo definitivo de decomiso?",
    "opciones": [
      {
        "id": "A",
        "texto": "Adoptar de inmediato la medida cautelar de Aprehensión (retención física y traslado a recinto de la DIAN) mediante acta motivada; el Decomiso solo procede al final del proceso administrativo sancionatorio mediante resolución ejecutoriada que transfiere la propiedad al Estado.",
        "explicacion": "Correcta. El Decreto 1165 de 2019 distingue la aprehensión (medida cautelar provisional para asegurar la mercancía mientras se surte el trámite) del decomiso (acto administrativo que declara la pérdida definitiva de dominio a favor de la Nación tras garantizar el debido proceso)."
      },
      {
        "id": "B",
        "texto": "Declarar el decomiso inmediato en el sitio y vender los televisores a los presentes para recuperar el recaudo arancelario.",
        "explicacion": "Incorrecta. Viola el procedimiento administrativo aduanero; no se puede enajenar una mercancía sin resolución de decomiso en firme."
      },
      {
        "id": "C",
        "texto": "Ordenar la devolución inmediata al importador sin verificar ningún documento para no congestionar el depósito.",
        "explicacion": "Incorrecta. Falla disciplinaria gravísima por permitir la fuga de mercancías sin acreditar su legal introducción al territorio aduanero nacional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Arts. 647 y 650",
    "citaNormativa": "«La aprehensión es una medida cautelar mediante la cual la autoridad aduanera toma posesión de las mercancías en tanto se define su situación jurídica. El decomiso es el acto en virtud del cual pasan a poder de la Nación las mercancías respecto de las cuales no se acreditó el cumplimiento de los trámites aduaneros.» (Decreto 1165 de 2019, Art. 647)."
  },
  {
    "id": "dian_aduanas_02",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Término de Respuesta al Acta de Aprehensión y Descargos",
    "caso": "A un operador de comercio exterior se le notifica el Acta de Hechos y Medida Cautelar de Aprehensión por no presentar la descripción completa de las telas importadas (marca, serial y composición textil).",
    "enunciado": "Conforme al régimen procesal aduanero, ¿qué término tiene el interesado para presentar el Documento de Objeción a la Aprehensión y proponer pruebas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dispone de quince (15) días hábiles siguientes a la fecha de notificación del Acta de Aprehensión para presentar el documento de objeciones y aportar o solicitar pruebas.",
        "explicacion": "Correcta. El artículo 651 del Decreto 1165 de 2019 (y su régimen procesal) confiere un término perentorio de 15 días hábiles al interesado para interponer el documento de objeción y desvirtuar las causales de aprehensión."
      },
      {
        "id": "B",
        "texto": "Dispone de un plazo perentorio improrrogable de 2 horas desde la incautación.",
        "explicacion": "Incorrecta. Vulnera flagrantemente el principio del debido proceso y el derecho a la defensa del importador."
      },
      {
        "id": "C",
        "texto": "No tiene derecho a presentar descargos porque la aprehensión es irrecurrible e incontrovertible en sede administrativa.",
        "explicacion": "Incorrecta. Todo administrado tiene derecho a contradecir las medidas de la administración tributaria y aduanera."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Art. 651 (Trámite del proceso de decomiso)",
    "citaNormativa": "«Dentro de los quince (15) días hábiles siguientes a la notificación del acta de aprehensión, el interesado podrá presentar documento de objeción a la aprehensión, en el cual solicitará o aportará las pruebas que pretenda hacer valer.» (Decreto 1165 de 2019, Art. 651)."
  },
  {
    "id": "dian_aduanas_03",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Legalización y Rescate de Mercancías Aprehendidas (Art. 293)",
    "caso": "Un importador subsana la omisión documental de una mercancía aprehendida mediante la presentación de una Declaración de Legalización voluntaria antes de que se profiera la resolución de decomiso de primera instancia.",
    "enunciado": "¿Qué concepto económico y porcentaje por concepto de rescate debe cancelar el importador para recuperar la mercancía legalmente?",
    "opciones": [
      {
        "id": "A",
        "texto": "Debe liquidar y pagar los tributos aduaneros correspondientes más un porcentaje del quince por ciento (15%) del valor en aduana de la mercancía por concepto de rescate (o el porcentaje fijado según el momento procesal de legalización).",
        "explicacion": "Correcta. El Art. 293 del Decreto 1165 de 2019 establece que la declaración de legalización procede pagando los tributos aduaneros adeudados más el rescate (que oscila entre el 15%, 20% o 50% según la oportunidad procesal en que se radique antes del decomiso definitivo)."
      },
      {
        "id": "B",
        "texto": "Solo paga los tributos aduaneros sin ningún rescate ni sanción monetaria adicional.",
        "explicacion": "Incorrecta. El rescate es una sanción económica obligatoria para restablecer la legalidad de la mercancía aprehendida."
      },
      {
        "id": "C",
        "texto": "Debe transferir el 90% de sus utilidades anuales a la DIAN mediante cheque de gerencia.",
        "explicacion": "Incorrecta. El rescate es una tarifa porcentual reglada sobre el valor en aduanas del bien aprehendido, no sobre utilidades generales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Art. 293 (Declaración de legalización y porcentaje de rescate)",
    "citaNormativa": "«La legalización de las mercancías aprehendidas procederá mediante la presentación de la declaración de legalización, previa cancelación de los tributos aduaneros a que haya lugar y del valor del rescate correspondiente.» (Decreto 1165 de 2019, Art. 293)."
  },
  {
    "id": "dian_aduanas_04",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Declaración Anticipada Obligatoria en Importaciones",
    "caso": "Para ciertas partidas arancelarias sensibles (textiles y calzado), la normativa aduanera exige la presentación de una Declaración de Importación Anticipada antes de la llegada del medio de transporte al territorio aduanero nacional. El importador arriba sin haberla presentado.",
    "enunciado": "¿Cuál es la consecuencia aduanera por omitir la Declaración Anticipada obligatoria?",
    "opciones": [
      {
        "id": "A",
        "texto": "La mercancía no podrá obtener autorización de levante directo y procede la medida cautelar de aprehensión de las mercancías en el lugar de arribo por incumplimiento de requisitos de ingreso.",
        "explicacion": "Correcta. El Decreto 1165 de 2019 (Art. 175 y causales de aprehensión Art. 647) establece que la omisión de la declaración anticipada obligatoria da lugar a la aprehensión de las mercancías en el lugar de arribo."
      },
      {
        "id": "B",
        "texto": "Se le permite ingresar la mercancía al país sin revisión y se le otorga un año de plazo para presentarla.",
        "explicacion": "Incorrecta. Destruye el control aduanero y fomenta el ingreso irregular de productos de contrabando técnico."
      },
      {
        "id": "C",
        "texto": "Se exonera de aranceles automáticamente como estímulo a la velocidad del transporte marítimo.",
        "explicacion": "Incorrecta. Es absurdo frente a las políticas de fiscalización aduanera y control previo en frontera."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Art. 175 y Art. 647 (Declaración anticipada y causales de aprehensión)",
    "citaNormativa": "«La declaración anticipada deberá presentarse con una antelación mínima a la llegada de las mercancías. La falta de presentación de la declaración anticipada obligatoria constituirá causal de aprehensión en el lugar de arribo.» (Decreto 1165 de 2019, Art. 175)."
  },
  {
    "id": "dian_aduanas_05",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Importación Temporal para Perfeccionamiento Activo (Sistemas Especiales Plan Vallejo)",
    "caso": "Una empresa industrial importa maquinaria pesada bajo la modalidad de importación temporal para perfeccionamiento activo con suspensión de tributos aduaneros, con el compromiso de reexportar bienes transformados en un plazo de 18 meses. Vencido el plazo, la empresa no reexportó ni modificó la modalidad.",
    "enunciado": "Ante el vencimiento del plazo sin reexportación ni cambio de modalidad, ¿qué actuación corresponde a la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "Declarar el incumplimiento del régimen aduanero temporal, exigir la efectividad de las garantías constituidas y ordenar la aprehensión de la maquinaria o el cobro coactivo de los tributos aduaneros e intereses moratorios.",
        "explicacion": "Correcta. En las importaciones temporales la suspensión de tributos está condicionada al estricto cumplimiento del fin y del término legal. Vencido el plazo sin reexportar ni importar ordinariamente, se hace efectiva la póliza y se persigue la mercancía."
      },
      {
        "id": "B",
        "texto": "Conceder una prórroga tácita automática de 10 años sin póliza ni justificación técnica.",
        "explicacion": "Incorrecta. Las prórrogas en regímenes suspensivos son expresas y requieren solicitud previa y ampliación de garantías antes del vencimiento."
      },
      {
        "id": "C",
        "texto": "Regalar la maquinaria a los directivos de la empresa importadora a título de donación fiscal.",
        "explicacion": "Incorrecta. Conducta ilícita violatoria de los principios de custodia patrimonial y control de comercio exterior."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Arts. 235 a 240 (Importación temporal para perfeccionamiento activo)",
    "citaNormativa": "«Al vencimiento del plazo señalado en la declaración de importación temporal, las mercancías deberán haber sido reexportadas, o sometidas a la modalidad de importación ordinaria; de lo contrario, se hará efectiva la garantía y se dispondrá la aprehensión.» (Decreto 1165 de 2019, Art. 240)."
  },
  {
    "id": "dian_aduanas_06",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Valoración Aduanera y Método del Valor de Transacción (Acuerdo OMC)",
    "caso": "En una verificación de valor en aduana, el Gestor III advierte que el precio de factura de un lote de vehículos importados es sospechosamente bajo. El importador no suministra la prueba de pago bancario y existen cánones de regalía pactados que se omitieron en el valor declarado.",
    "enunciado": "¿Cuál es el método principal de valoración aduanera y qué procede si este es desvirtuado?",
    "opciones": [
      {
        "id": "A",
        "texto": "El método principal es el Valor de Transacción de las mercancías importadas (precio realmente pagado o por pagar con los ajustes del Art. 8 del Acuerdo OMC); si este se desvirtúa por falta de prueba fidedigna o vinculación que afecta el precio, se acude sucesivamente a los métodos secundarios (mercancías idénticas, similares, deductivo, valor reconstruido y del último recurso).",
        "explicacion": "Correcta. El Acuerdo de Valoración de la OMC (incorporado en la legislación aduanera) consagra el orden sucesivo y obligatorio de los métodos de valoración, partiendo del Valor de Transacción con sus debidos ajustes legales."
      },
      {
        "id": "B",
        "texto": "Inventar una cifra al azar multiplicando el número de llantas por el número de chasis sin ningún criterio técnico.",
        "explicacion": "Incorrecta. La valoración aduanera exige un estricto rigor metodológico técnico y probatorio reglado por la OMC."
      },
      {
        "id": "C",
        "texto": "Aceptar la factura falsa porque la DIAN no tiene competencia para cuestionar precios declarados por importadores.",
        "explicacion": "Incorrecta. La fiscalización aduanera tiene la potestad explícita de comprobar el valor en aduana y proferir liquidaciones oficiales de corrección o revisión."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo de Valoración de la OMC y Decreto 1165 de 2019, Arts. 247 a 255",
    "citaNormativa": "«El valor en aduana de las mercancías importadas será el valor de transacción, es decir, el precio realmente pagado o por pagar por las mercancías cuando éstas se venden para su exportación al país de importación, ajustado de conformidad con lo dispuesto en el artículo 8.» (Acuerdo de Valor de la OMC, Art. 1)."
  },
  {
    "id": "dian_aduanas_07",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Operador Económico Autorizado (OEA) y Facilitación del Comercio",
    "caso": "Una empresa exportadora colombiana obtiene la autorización como Operador Económico Autorizado (OEA) tras demostrar altos estándares de seguridad en su cadena de suministro y excelente historial de cumplimiento aduanero.",
    "enunciado": "¿Cuál de los siguientes es un beneficio legal directo otorgado a las empresas calificadas como OEA?",
    "opciones": [
      {
        "id": "A",
        "texto": "Reducción significativa del porcentaje de inspecciones físicas y documentales en puertos y aeropuertos, canales de atención preferencial y agilización en trámites de levante y devoluciones tributarias.",
        "explicacion": "Correcta. El Decreto 3568 de 2011 y las normas aduaneras confieren a los OEA beneficios de facilitación, menor selectividad de inspección intrusiva y prioridad en trámites por ser usuarios altamente confiables."
      },
      {
        "id": "B",
        "texto": "Exención total y permanente de declarar impuestos en Colombia y permiso para ingresar armas sin salvoconducto.",
        "explicacion": "Incorrecta. La figura OEA no otorga exenciones tributarias sustanciales ni autoriza el tráfico ilícito; es una figura de seguridad y facilitación de trámites legítimos."
      },
      {
        "id": "C",
        "texto": "Facultad para emitir sus propias leyes comerciales sin someterse a la Constitución Nacional.",
        "explicacion": "Incorrecta. Inconcebible frente al principio de soberanía y legalidad de la República."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 3568 de 2011 y Decreto 1165 de 2019 (Régimen de Operador Económico Autorizado)",
    "citaNormativa": "«Los usuarios aduaneros reconocidos como Operadores Económicos Autorizados (OEA) gozarán de prerrogativas tales como la disminución de inspecciones físicas y documentales y la atención preferencial en sus operaciones.» (Decreto 3568 de 2011)."
  },
  {
    "id": "dian_aduanas_08",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inspección Aduanera No Intrusiva (Escáneres)",
    "caso": "En el Puerto de Buenaventura, un contenedor seleccionado por el sistema de gestión de riesgos para inspección no intrusiva pasa por los escáneres de rayos X, detectándose cavidades irregulares y densidades discordantes con la carga declarada de frutas frescas.",
    "enunciado": "Ante la inconsistencia en las imágenes radiográficas del escáner, ¿cuál es el protocolo inmediato a seguir por el Gestor III en puerto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ordenar de inmediato el cambio a Inspección Física Intrusiva, procediendo a la apertura del contenedor y vaciado de la carga en presencia del declarante o delegado de la agencia de aduanas para verificar el contenido real.",
        "explicacion": "Correcta. Cuando la inspección no intrusiva arroja imágenes con anomalías o discordancias, el protocolo aduanero exige ordenar inmediatamente la inspección física intrusiva para confirmar o descartar ilícitos aduaneros o contrabando."
      },
      {
        "id": "B",
        "texto": "Autorizar el levante inmediato asumiendo que el escáner se equivocó por fallas de calibración.",
        "explicacion": "Incorrecta. Constituye negligencia grave y complicidad potencial con el tráfico ilícito de mercancías."
      },
      {
        "id": "C",
        "texto": "Devolver el barco a su país de origen sin revisar el contenedor.",
        "explicacion": "Incorrecta. La DIAN debe ejercer soberanía y control dentro de la zona primaria aduanera colombiana mediante inspección formal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Arts. 180 a 184 (Inspección aduanera y uso de tecnologías no intrusivas)",
    "citaNormativa": "«Cuando en la inspección no intrusiva se detecten inconsistencias frente a lo declarado, la autoridad aduanera dispondrá la realización inmediata de la inspección física de las mercancías.» (Decreto 1165 de 2019, Art. 182)."
  },
  {
    "id": "dian_aduanas_09",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Abandono Legal de Mercancías en Depósito (Art. 187)",
    "caso": "Un cargamento de mercancías arriba a un depósito aduanero habilitado. Transcurre el término de almacenamiento de un (1) mes más la prórroga de un mes adicional sin que el importador haya presentado la declaración de importación ni obtenido el levante.",
    "enunciado": "¿Cuál es la figura jurídica que se configura y qué destino corresponde a las mercancías?",
    "opciones": [
      {
        "id": "A",
        "texto": "Opera el Abandono Legal (Art. 187 Decreto 1165/2019); las mercancías pasan a poder de la Nación, pudiendo ser rescatadas por el interesado dentro del mes siguiente pagando los tributos y el rescate del 10% antes de que la DIAN disponga de ellas.",
        "explicacion": "Correcta. El abandono legal opera de pleno derecho por el vencimiento del término de almacenamiento sin trámite aduanero. El declarante tiene la opción de rescatarlas dentro del mes siguiente acreditando pago y rescate reglamentado."
      },
      {
        "id": "B",
        "texto": "El depósito adquiere la propiedad privada definitiva de las mercancías para subastarlas privadamente en beneficio de sus accionistas.",
        "explicacion": "Incorrecta. Los depósitos habilitados no se apropian de las mercancías en abandono legal; la titularidad de disposición corresponde al Estado (DIAN)."
      },
      {
        "id": "C",
        "texto": "Las mercancías deben ser arrojadas al mar de inmediato sin inventario ni acta previa.",
        "explicacion": "Incorrecta. Las mercancías estatales se someten a los mecanismos reglados de adjudicación, donación, venta o destrucción motivada."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Arts. 187 y 188 (Abandono legal y rescate)",
    "citaNormativa": "«Se produce el abandono legal cuando las mercancías no sean declaradas o no se solicite el levante dentro del término de almacenamiento. El interesado podrá rescatar la mercancía en abandono legal dentro del mes siguiente a su ocurrencia.» (Decreto 1165 de 2019, Art. 187)."
  },
  {
    "id": "dian_aduanas_10",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Zonas Francas y Salida de Bienes al Resto del Territorio Aduanero Nacional (TAN)",
    "caso": "Un usuario industrial de bienes instalado en una Zona Franca permanente despacha productos terminados hacia una empresa ubicada en Bogotá (Resto del TAN).",
    "enunciado": "¿Qué trámite aduanero y tributario debe cumplirse para el ingreso legal de estos bienes al territorio nacional?",
    "opciones": [
      {
        "id": "A",
        "texto": "Se considera una importación ordinaria; por tanto, debe presentarse Declaración de Importación liquidando arancel e IVA sobre el valor de los componentes y materias primas extranjeras incorporadas, pagando los tributos y obteniendo levante formal.",
        "explicacion": "Correcta. La introducción de bienes de zona franca al TAN constituye importación para efectos fiscales y aduaneros. El artículo 483 del Decreto 1165 de 2019 y el Estatuto Tributario obligan a declarar y liquidar los tributos sobre el componente externo."
      },
      {
        "id": "B",
        "texto": "No se requiere ninguna declaración ni pago de impuestos porque la zona franca está físicamente dentro de Colombia.",
        "explicacion": "Incorrecta. Para efectos aduaneros, la zona franca es un área geográfica delimitada considerada extraterritorial en materia de aranceles e impuestos indirectos."
      },
      {
        "id": "C",
        "texto": "Basta con una carta informal firmada por el vigilante de la portería de la zona franca.",
        "explicacion": "Incorrecta. Falla garrafal contra la normativa aduanera que exige formulario oficial de importación y levante."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Art. 483 y Estatuto Tributario Art. 459",
    "citaNormativa": "«La introducción al resto del Territorio Aduanero Nacional de bienes procedentes de una Zona Franca, se someterá a las normas y requisitos previstos para las importaciones ordinarias.» (Decreto 1165 de 2019, Art. 483)."
  },
  {
    "id": "dian_aduanas_11",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Infracciones Aduaneras de las Agencias de Aduana",
    "caso": "Una Agencia de Aduanas permite que una persona no autorizada ni vinculada como agente de aduanas suscriba declaraciones de importación a nombre de la sociedad de intermediación.",
    "enunciado": "De acuerdo con el régimen sancionatorio aduanero (Decreto 1165 de 2019), ¿qué gravedad ostenta esta infracción y qué sanción procede?",
    "opciones": [
      {
        "id": "A",
        "texto": "Es una infracción gravísima sancionable con la Cancelación definitiva de la autorización como Agencia de Aduana (Art. 620 numeral 1 Decreto 1165/2019).",
        "explicacion": "Correcta. Permitir que terceros no vinculados o no autorizados actúen en nombre de la agencia constituye una causal gravísima sancionada con la cancelación de la habilitación aduanera."
      },
      {
        "id": "B",
        "texto": "Es una infracción leve que solo da lugar a una felicitación escrita por delegación de funciones.",
        "explicacion": "Incorrecta. Atenta contra la confianza pública y la seguridad jurídica del comercio exterior."
      },
      {
        "id": "C",
        "texto": "No es infracción, pues cualquier ciudadano puede firmar declaraciones aduaneras sin acreditación técnica.",
        "explicacion": "Incorrecta. Las agencias de aduanas prestan un servicio auxiliar de la función pública aduanera rigurosamente calificado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Art. 620 (Infracciones aduaneras de las Agencias de Aduana)",
    "citaNormativa": "«Son infracciones gravísimas de las Agencias de Aduana: Permitir, facilitar o autorizar que terceros no vinculados a la agencia actúen como agentes de aduanas; sanción: Cancelación de la autorización.» (Decreto 1165 de 2019, Art. 620 Numeral 1)."
  },
  {
    "id": "dian_aduanas_12",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Disposición de Mercancías Decomisadas (Donación y Destrucción)",
    "caso": "La DIAN tiene en sus bodegas un lote de medicamentos vencidos y juguetes tóxicos decomisados en firme. Una entidad municipal solicita que se los entreguen en donación para niños de escasos recursos.",
    "enunciado": "Conforme a la normativa aduanera sobre disposición de mercancías aprehendidas o decomisadas, ¿cuál es la decisión legal correcta?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la donación y ordenar la Destrucción de las mercancías, toda vez que los bienes que atentan contra la salud pública, la seguridad o el medio ambiente están legalmente prohibidos para donación o venta.",
        "explicacion": "Correcta. El régimen de disposición de mercancías decomisadas prohíbe de forma tajante donar o comercializar bienes que representen riesgo para la salud o la vida (como alimentos o medicamentos descompuestos o juguetes tóxicos); la única vía legal es su destrucción controlada."
      },
      {
        "id": "B",
        "texto": "Aceptar la donación de inmediato para desocupar la bodega sin importar la toxicidad.",
        "explicacion": "Incorrecta. Genera responsabilidad penal y disciplinaria por atentar contra la salud colectiva de menores de edad."
      },
      {
        "id": "C",
        "texto": "Subastarlos públicamente en la plaza principal de mercado al mejor postor.",
        "explicacion": "Incorrecta. La administración no puede comerciar productos lesivos ni adulterados."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Arts. 720 a 725 (Modalidades de disposición de mercancías decomisadas)",
    "citaNormativa": "«Las mercancías que afecten la salud pública, la seguridad nacional o el medio ambiente no podrán ser objeto de venta ni de donación, debiéndose proceder a su inmediata destrucción.» (Decreto 1165 de 2019, Art. 725)."
  },
  {
    "id": "dian_aduanas_13",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Garantías Aduaneras y Efectividad de Pólizas",
    "caso": "Un usuario aduanero con garantía global constituida para amparar el pago de tributos y sanciones incumple una liquidación oficial de revisión de valor en aduana ejecutoriada por valor de 200 millones de pesos.",
    "enunciado": "¿Cuál es el procedimiento reglado para hacer efectivo el cobro del monto asegurado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proferir el acto administrativo que declara el incumplimiento y ordena hacer efectiva la garantía aduanera, notificando a la compañía de seguros garante en calidad de deudor solidario para el pago de la indemnización.",
        "explicacion": "Correcta. El régimen aduanero faculta a la DIAN para declarar la exigibilidad de la garantía y vincular a la aseguradora para el cobro del siniestro amparado por el título de afianzamiento."
      },
      {
        "id": "B",
        "texto": "Demandar a la aseguradora ante un tribunal de arbitramento en Ginebra, Suiza.",
        "explicacion": "Incorrecta. El cobro de garantías aduaneras se rige por la jurisdicción coactiva y el procedimiento administrativo nacional."
      },
      {
        "id": "C",
        "texto": "Condonar la deuda a la aseguradora si esta ofrece un descuento comercial en su próxima póliza vehicular.",
        "explicacion": "Incorrecta. Constituye concusión, cohecho y peculado contra el tesoro público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Arts. 28 a 34 (Régimen de Garantías Aduaneras)",
    "citaNormativa": "«La declaratoria de incumplimiento de la obligación aduanera se dispondrá mediante acto administrativo debidamente motivado, ordenando hacer efectiva la garantía ante la compañía aseguradora garante.» (Decreto 1165 de 2019, Art. 32)."
  },
  {
    "id": "dian_aduanas_14",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Allanamiento Aduanero en Control Posterior (Art. 684 E.T. y D. 1165)",
    "caso": "Inspectores de fiscalización aduanera de la DIAN se presentan en una bodega comercial de calzado importado no habilitada como depósito público para realizar una inspección física y documental. El vigilante se niega a abrir y traba las puertas con candados.",
    "enunciado": "¿Qué potestad legal extraordinaria asiste a la DIAN para practicar la diligencia inspectiva?",
    "opciones": [
      {
        "id": "A",
        "texto": "Solicitar una Orden de Registro y Allanamiento a la autoridad judicial competente (Fiscalía/Juez de Control de Garantías) para ingresar al inmueble con apoyo de la Policía Fiscal y Aduanera (POLFA).",
        "explicacion": "Correcta. Si se niega el ingreso a recintos cerrados privados no abiertos al público, la inviolabilidad de domicilio (Art. 28 C.P.) exige que la diligencia de allanamiento tributario/aduanero cuente con orden judicial previa, ejecutada con la fuerza pública."
      },
      {
        "id": "B",
        "texto": "Dinamitar la puerta de inmediato sin ninguna autorización judicial ni policial.",
        "explicacion": "Incorrecta. Medida abusiva, delictiva y violatoria de los derechos fundamentales constitucionales."
      },
      {
        "id": "C",
        "texto": "Retirarse definitivamente y borrar los registros del infractor en el sistema informático.",
        "explicacion": "Incorrecta. Omisión flagrante del deber funcional de fiscalización e investigación aduanera."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política Art. 28, Estatuto Tributario Art. 779 y Decreto 1165",
    "citaNormativa": "«Cuando en el ejercicio de las facultades de fiscalización se requiera practicar allanamiento y registro de bienes inmuebles cerrados, se requerirá orden previa de la autoridad judicial competente.» (Estatuto Tributario, Art. 779)."
  },
  {
    "id": "dian_aduanas_15",
    "nivel": "Profesional",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Comercio Exterior",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Delito de Contrabando y Cuantía Penal (Código Penal Art. 319)",
    "caso": "En un operativo fronterizo se intercepta un camión con mercancías extranjeras sin documentación alguna, cuyo valor aduanero liquidado asciende a doscientos cincuenta (250) salarios mínimos legales mensuales vigentes (SMLMV).",
    "enunciado": "Además del procedimiento administrativo de decomiso aduanero, ¿qué deber penal ineludible tiene el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Remitir de inmediato la denuncia penal ante la Fiscalía General de la Nación y poner a disposición al conductor capturado en flagrancia, puesto que al superar los 50 SMLMV se tipifica el Delito de Contrabando (Código Penal Art. 319).",
        "explicacion": "Correcta. El artículo 319 del Código Penal sanciona con pena privativa de la libertad a quien introduzca mercancías al territorio nacional por cuantía superior a 50 SMLMV; el servidor público tiene el deber legal estricto de denunciar el ilícito penal."
      },
      {
        "id": "B",
        "texto": "Ocultar el hecho a la Fiscalía porque el contrabando solo es una falta disciplinaria de menor impacto sin consecuencias penales.",
        "explicacion": "Incorrecta. Desconoce la naturaleza delictiva del contrabando y comete el delito de omisión de denuncia de servidor público."
      },
      {
        "id": "C",
        "texto": "Cobrar una multa de 100.000 pesos en efectivo al conductor y dejarlo seguir con el camión.",
        "explicacion": "Incorrecta. Falla de corrupción y prevaricato inadmisible en la administración pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código Penal Colombiano, Art. 319 (Contrabando)",
    "citaNormativa": "«El que introduzca al territorio nacional mercancías en cuantía superior a cincuenta (50) salarios mínimos legales mensuales vigentes, incurrirá en prisión de cuatro (4) a ocho (8) años.» (Código Penal, Art. 319)."
  },
  {
    "id": "dian_cobro_01",
    "nivel": "Profesional",
    "ejeId": "cobranzas",
    "ejeNombre": "Cobro Coactivo y Títulos Ejecutivos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Mandamiento de Pago y Término para Excepcionar (Art. 826 E.T.)",
    "caso": "La División de Cobranzas profiere un Mandamiento de Pago contra un deudor moroso fundamentado en una liquidación oficial de revisión ejecutoriada.",
    "enunciado": "¿Qué término legal perentorio tiene el ejecutado, a partir de la notificación del mandamiento de pago, para cancelar la deuda o proponer excepciones?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dispone de quince (15) días hábiles para pagar o proponer las excepciones legales consagradas en el artículo 831 del Estatuto Tributario.",
        "explicacion": "Correcta. El artículo 826 del Estatuto Tributario otorga un término perentorio de 15 días siguientes a la notificación del mandamiento de pago para que el deudor extinga la obligación o proponga excepciones taxativas."
      },
      {
        "id": "B",
        "texto": "Dispone de tres (3) meses calendario sin que se le puedan embargar bienes.",
        "explicacion": "Incorrecta. El término legal no es de 3 meses, sino de 15 días hábiles; además las medidas cautelares pueden ser previas o concomitantes."
      },
      {
        "id": "C",
        "texto": "Dispone de 24 horas improrrogables antes de ordenar su captura policiva.",
        "explicacion": "Incorrecta. En Colombia no hay prisión por deudas tributarias de cobro administrativo coactivo ordinario y el término es de 15 días."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 826 (Mandamiento de pago)",
    "citaNormativa": "«El funcionario competente librará mandamiento ordenando el pago de las deudas fiscales. Dentro de los quince (15) días siguientes a la notificación, el deudor podrá pagar o proponer excepciones.» (E.T. Art. 826)."
  },
  {
    "id": "dian_cobro_02",
    "nivel": "Profesional",
    "ejeId": "cobranzas",
    "ejeNombre": "Cobro Coactivo y Títulos Ejecutivos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Excepciones Taxativas contra el Mandamiento de Pago (Art. 831 E.T.)",
    "caso": "Un contribuyente notificado del mandamiento de pago interpone un escrito alegando que 'la tasa del impuesto es injusta y los servicios públicos de su barrio son deficientes'.",
    "enunciado": "Como Gestor III que proyecta la resolución de excepciones en cobro coactivo, ¿cuál es el análisis procedente?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la excepción por improcedente, puesto que los motivos de inconformidad sustancial no corresponden a las causales taxativas de excepción del Art. 831 del Estatuto Tributario (como pago efectivo, prescripción, falta de ejecutoria del título, etc.).",
        "explicacion": "Correcta. En el proceso de cobro coactivo rige el principio de taxatividad de las excepciones (Art. 831 E.T.). No se pueden debatir aspectos sustanciales ni filosóficos de la ley que debieron alegarse en la etapa de discusión o determinación previa."
      },
      {
        "id": "B",
        "texto": "Aceptar la excepción y condonar la totalidad de la deuda fiscal por solidaridad social.",
        "explicacion": "Incorrecta. El servidor de cobranzas carece de facultad para condonar deudas por razones de inconformidad personal del deudor."
      },
      {
        "id": "C",
        "texto": "Suspender el cobro y enviar el expediente a la Alcaldía para que pavimenten el barrio.",
        "explicacion": "Incorrecta. Es ajeno por completo a las competencias legales de la jurisdicción coactiva tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 831 (Excepciones en cobro coactivo)",
    "citaNormativa": "«Contra el mandamiento de pago sólo procederán las siguientes excepciones: El pago efectivo, la existencia de acuerdo de pago, la de falta de ejecutoria del título, la pérdida de ejecutoria del título, la prescripción de la acción de cobro y la falta de título ejecutivo.» (E.T. Art. 831)."
  },
  {
    "id": "dian_cobro_03",
    "nivel": "Profesional",
    "ejeId": "cobranzas",
    "ejeNombre": "Cobro Coactivo y Títulos Ejecutivos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Medidas Cautelares Previas en Cobro Coactivo (Art. 836 E.T.)",
    "caso": "Para garantizar el pago de una deuda tributaria en firme de 800 millones de pesos, el funcionario de Cobranzas decreta el embargo y retención de las cuentas bancarias de la sociedad deudora antes de notificar formalmente el mandamiento de pago.",
    "enunciado": "¿Es legalmente válida la práctica de medidas cautelares previas a la notificación del mandamiento de pago?",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí es legalmente válida; el artículo 836 del Estatuto Tributario autoriza expresamente decretar el embargo y secuestro de bienes de manera previa o concomitante con el mandamiento de pago para evitar la insolvencia del deudor.",
        "explicacion": "Correcta. El artículo 836 del E.T. faculta proferir medidas cautelares previas a la notificación del mandamiento de pago, con el fin de evitar que el ejecutado enajene u oculte sus activos al enterarse del inicio del cobro coactivo."
      },
      {
        "id": "B",
        "texto": "No es válida y genera nulidad automática porque las medidas cautelares solo pueden decretarse después de que un juez penal condene al deudor.",
        "explicacion": "Incorrecta. La DIAN ejerce jurisdicción coactiva administrativa autónoma y la ley faculta medidas cautelares previas directamente."
      },
      {
        "id": "C",
        "texto": "Solo es válida si la sociedad deudora firma un consentimiento voluntario autorizando su propio embargo.",
        "explicacion": "Incorrecta. La medida cautelar es una orden de imperio de la administración tributaria que no depende de la voluntad del ejecutado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 836 (Medidas preventivas)",
    "citaNormativa": "«Previa o simultáneamente con el mandamiento de pago, el funcionario podrá decretar el embargo y secuestro preventivo de los bienes del deudor que se hayan establecido como de su propiedad.» (E.T. Art. 836)."
  },
  {
    "id": "dian_cobro_04",
    "nivel": "Profesional",
    "ejeId": "cobranzas",
    "ejeNombre": "Cobro Coactivo y Títulos Ejecutivos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Acuerdos y Facilidades de Pago (Art. 814 E.T.)",
    "caso": "Una microempresa en crisis de liquidez solicita a la DIAN una facilidad para el pago de sus deudas tributarias vencidas por concepto de impuesto sobre la renta.",
    "enunciado": "Conforme al artículo 814 del Estatuto Tributario, ¿cuál es el plazo máximo que puede conceder la DIAN y qué garantía se exige?",
    "opciones": [
      {
        "id": "A",
        "texto": "Se puede conceder un plazo de hasta cinco (5) años para el pago, exigiendo la constitución de garantías suficientes que respalden la totalidad de la deuda (como garantías bancarias, pólizas de seguros, hipotecas o prendas).",
        "explicacion": "Correcta. El artículo 814 del Estatuto Tributario permite conceder facilidades de pago hasta por 5 años, siempre que el deudor garantice suficientemente la obligación a satisfacción de la DIAN mediante garantías reales o bancarias."
      },
      {
        "id": "B",
        "texto": "Se puede conceder un plazo indefinido de 30 años sin exigir ninguna garantía ni cobrar intereses de mora.",
        "explicacion": "Incorrecta. El plazo máximo legal es de 5 años y las facilidades causan inexorablemente intereses moratorios según la tasa de usura fijada legalmente."
      },
      {
        "id": "C",
        "texto": "La DIAN tiene prohibido conceder plazos de pago bajo cualquier circunstancia.",
        "explicacion": "Incorrecta. La facilidad de pago es un mecanismo legal legítimo y eficaz para salvaguardar la empresa y recuperar la cartera morosa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 814 (Facilidades para el pago)",
    "citaNormativa": "«El Subdirector de Cobranzas o los Directores Seccionales podrán, mediante resolución, conceder facilidades para el pago al deudor hasta por cinco (5) años, siempre que respalde la obligación con garantías suficientes.» (E.T. Art. 814)."
  },
  {
    "id": "dian_cobro_05",
    "nivel": "Profesional",
    "ejeId": "cobranzas",
    "ejeNombre": "Cobro Coactivo y Títulos Ejecutivos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Prescripción de la Acción de Cobro (Art. 817 E.T.)",
    "caso": "Una deuda fiscal contenida en una declaración privada se hizo exigible el 10 de febrero de 2018. Han transcurrido más de siete (7) años sin que la DIAN haya notificado mandamiento de pago ni suscrito acuerdo de pago.",
    "enunciado": "¿Cuál es la situación jurídica de la acción de cobro de esta obligación tributaria?",
    "opciones": [
      {
        "id": "A",
        "texto": "La acción de cobro se encuentra prescrita; el término legal de prescripción es de cinco (5) años contados a partir de la fecha en que se hizo exigible la obligación, operando de oficio o a solicitud de parte (Art. 817 E.T.).",
        "explicacion": "Correcta. El artículo 817 del Estatuto Tributario establece que la acción de cobro prescribe en 5 años contados a partir de la exigibilidad de la obligación. Si no hubo actos interruptores (como mandamiento de pago debidamente notificado), la obligación prescribe."
      },
      {
        "id": "B",
        "texto": "Las deudas tributarias en Colombia son imprescriptibles de por vida y se heredan por 10 generaciones.",
        "explicacion": "Incorrecta. En el Estado de Derecho no existen obligaciones imprescriptibles de cobro ordinario; opera la prescripción extintiva de 5 años."
      },
      {
        "id": "C",
        "texto": "Prescribe únicamente si el presidente de la República emite un decreto especial individual para este deudor.",
        "explicacion": "Incorrecta. La prescripción opera por mandato general de la ley y se decreta administrativamente por la autoridad de cobro."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 817 (Término de prescripción de la acción de cobro)",
    "citaNormativa": "«La acción de cobro de las obligaciones fiscales prescribe en el término de cinco (5) años, contados a partir de la fecha en que se hicieron legalmente exigibles. La prescripción podrá ser decretada de oficio o a solicitud de parte.» (E.T. Art. 817)."
  },
  {
    "id": "dian_cobro_06",
    "nivel": "Profesional",
    "ejeId": "cobranzas",
    "ejeNombre": "Cobro Coactivo y Títulos Ejecutivos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Remisión de Deudas Tributarias (Art. 820 E.T.)",
    "caso": "Al depurar la cartera de la seccional, se encuentra el caso de una persona natural fallecida hace 6 años, cuya sucesión no dejó ningún bien embargable y la cuantía de la deuda no supera los montos fijados legalmente.",
    "enunciado": "De acuerdo con el artículo 820 del Estatuto Tributario, ¿qué figura jurídica procede para suprimir la obligación del balance contable de la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "Declarar la Remisión de la Deuda mediante acto motivado, suprimiendo las obligaciones del deudor fallecido sin bienes conocidos de los registros contables y de cartera.",
        "explicacion": "Correcta. El artículo 820 del Estatuto Tributario faculta al Director y a los comités de cartera para remitir (condonar por incobrabilidad legalmente demostrada) las obligaciones a cargo de personas fallecidas sin dejar bienes o que resulten incobrables."
      },
      {
        "id": "B",
        "texto": "Embargar los bienes de los vecinos del difunto por haber vivido en la misma cuadra.",
        "explicacion": "Incorrecta. Viola flagrantemente el principio de personalidad de las penas y obligaciones tributarias."
      },
      {
        "id": "C",
        "texto": "Dejar la deuda activa durante 200 años en el sistema para que aumente el balance de cartera.",
        "explicacion": "Incorrecta. Viola el principio contable de depuración de cartera pública y el buen juicio administrativo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 820 (Remisión de las deudas tributarias)",
    "citaNormativa": "«El Director de la DIAN podrá suprimir de los registros y cuentas corrientes de los contribuyentes deudores, las deudas a cargo de personas que hubieren muerto sin dejar bienes.» (E.T. Art. 820)."
  },
  {
    "id": "dian_cambiario_01",
    "nivel": "Profesional",
    "ejeId": "cambiario",
    "ejeNombre": "Régimen Cambiario y Lavado de Activos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Canalización Obligatoria de Divisas por Importaciones y Exportaciones",
    "caso": "Un importador de repuestos paga a su proveedor en el exterior transfiriendo criptoactivos no regulados o entregando dinero en efectivo a un cambista informal en la frontera, sin canalizar las divisas por intermediarios autorizados.",
    "enunciado": "Conforme al régimen cambiario administrado por la DIAN (Resolución Externa 1 de 2018 Banco de la República), ¿cuál es la obligación cambiaria omitida?",
    "opciones": [
      {
        "id": "A",
        "texto": "Incumplió el deber de Canalización Obligatoria a través del Mercado Cambiario (Intermediarios del Mercado Cambiario - IMC o cuentas de compensación) y la presentación de la Declaración de Cambio correspondiente.",
        "explicacion": "Correcta. Las operaciones de comercio exterior (importaciones y exportaciones) son de obligatoria canalización a través de los IMC (bancos) o cuentas de compensación registradas. Pagar por canales informales tipifica infracción cambiaria sancionada por la DIAN."
      },
      {
        "id": "B",
        "texto": "No incurrió en ninguna infracción porque en Colombia los pagos internacionales son 100% informales y no requieren reporte cambiario.",
        "explicacion": "Incorrecta. Desconoce el régimen cambiario del Banco de la República y la competencia de control cambiario de la DIAN."
      },
      {
        "id": "C",
        "texto": "Solo es infracción si el dinero se transportó en un submarino militar.",
        "explicacion": "Incorrecta. La infracción se configura por el medio ilícito de canalización frente al régimen normativo cambiario."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Régimen Cambiario (Resolución Externa 1 de 2018 Banco de la República) y D.L. 2245 de 2011",
    "citaNormativa": "«Las operaciones de importación y exportación de bienes deberán canalizarse obligatoriamente a través del mercado cambiario mediante los intermediarios autorizados o mediante cuentas de compensación.» (Resolución Externa 1 de 2018, Art. 7)."
  },
  {
    "id": "dian_cambiario_02",
    "nivel": "Profesional",
    "ejeId": "cambiario",
    "ejeNombre": "Régimen Cambiario y Lavado de Activos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Competencia Sancionatoria de la DIAN en Materia Cambiaria (D.L. 2245 de 2011)",
    "caso": "La DIAN adelanta investigación cambiaria contra un exportador que omitió reintegrar al país las divisas producto de sus ventas internacionales dentro de los plazos reglamentarios.",
    "enunciado": "De acuerdo con el Decreto Ley 2245 de 2011, ¿cuál es la naturaleza de la sanción económica que puede imponer la DIAN por infracción al régimen cambiario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Multa pecuniaria a favor del Tesoro Nacional graduada porcentualmente sobre el monto de las divisas no canalizadas o indebidamente manejadas (Art. 3 Decreto Ley 2245 de 2011).",
        "explicacion": "Correcta. El régimen sancionatorio cambiario administrado por la DIAN (Decreto Ley 2245 de 2011) castiga la indebida o no canalización de divisas con multas proporcionales al valor de la operación cambiaria infractora."
      },
      {
        "id": "B",
        "texto": "Trabajo comunitario obligatorio barriendo las instalaciones de la embajada del país comprador.",
        "explicacion": "Incorrecta. Las sanciones cambiarias de la DIAN son estrictamente pecuniarias (multas) administrativas regladas."
      },
      {
        "id": "C",
        "texto": "Pena de destierro y pérdida de la ciudadanía colombiana.",
        "explicacion": "Incorrecta. Inconstitucional y contraria a los derechos humanos y procesales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 2245 de 2011, Art. 3 (Sanciones en materia de control cambiario)",
    "citaNormativa": "«La persona natural o jurídica que infrinja el régimen cambiario cuya vigilancia y control corresponda a la DIAN, será sancionada con multa fijada conforme a los porcentajes establecidos en el presente decreto.» (Decreto Ley 2245 de 2011, Art. 3)."
  },
  {
    "id": "dian_cambiario_03",
    "nivel": "Profesional",
    "ejeId": "cambiario",
    "ejeNombre": "Régimen Cambiario y Lavado de Activos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Término de Caducidad de la Acción Sancionatoria Cambiaria (D.L. 2245)",
    "caso": "Se detecta una infracción cambiaria consistente en no presentación de declaraciones de cambio ocurrida hace seis (6) años. Durante este tiempo la DIAN no profirió ningún pliego de cargos cambiario.",
    "enunciado": "Conforme al régimen sancionatorio aduanero y cambiario del Decreto Ley 2245 de 2011, ¿cuál es el término de caducidad de la acción sancionatoria?",
    "opciones": [
      {
        "id": "A",
        "texto": "La facultad sancionatoria caducó; el término de caducidad de la acción sancionatoria cambiaria es de cinco (5) años contados a partir de la fecha de la ocurrencia de la infracción.",
        "explicacion": "Correcta. El artículo 5 del Decreto Ley 2245 de 2011 establece que la acción para imponer sanciones por infracciones cambiarias caduca en el término de cinco (5) años contados desde la comisión de los hechos."
      },
      {
        "id": "B",
        "texto": "La facultad sancionatoria cambiaria nunca caduca y dura 50 años.",
        "explicacion": "Incorrecta. En el derecho administrativo sancionador rige el principio de caducidad de la potestad punitiva del Estado (5 años en materia cambiaria)."
      },
      {
        "id": "C",
        "texto": "Caduca a los 30 días calendario de cometida la falta.",
        "explicacion": "Incorrecta. Plazo erróneo; la ley confiere 5 años para investigar y formular pliego de cargos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 2245 de 2011, Art. 5 (Caducidad de la acción cambiaria)",
    "citaNormativa": "«La facultad que tiene la DIAN para imponer sanciones por infracción al régimen cambiario caduca en el término de cinco (5) años contados a partir de la fecha en que se consumó la infracción.» (Decreto Ley 2245 de 2011, Art. 5)."
  },
  {
    "id": "dian_cambiario_04",
    "nivel": "Profesional",
    "ejeId": "cambiario",
    "ejeNombre": "Régimen Cambiario y Lavado de Activos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reporte de Operaciones Sospechosas (ROS) a la UIAF y Reserva Legal",
    "caso": "En una auditoría tributaria, el Gestor III identifica operaciones atípicas con empresas fachada en el exterior por montos desproporcionados sin justificación económica, con indicios vehementes de lavado de activos.",
    "enunciado": "De acuerdo con el régimen de prevención de lavado de activos y financiación del terrorismo, ¿cuál es el conducto formal de reporte y qué deber de confidencialidad rige?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tramitar el Reporte de Operación Sospechosa (ROS) de manera inmediata y confidencial ante la Unidad de Información y Análisis Financiero (UIAF) a través del oficial de cumplimiento/enlace institucional, bajo estricta reserva legal sin informar al contribuyente investigado.",
        "explicacion": "Correcta. La Ley 526 de 1999 y los protocolos SAGRILAFT/SARLAFT exigen que los reportes de operaciones sospechosas (ROS) se canalicen directamente a la UIAF bajo estricta reserva legal, estando penalmente prohibido alertar al sujeto reportado."
      },
      {
        "id": "B",
        "texto": "Llamar al contribuyente para advertirle que lo van a reportar a la UIAF para que retire su dinero rápidamente.",
        "explicacion": "Incorrecta. Constituye delito de revelación de secretos y complicidad en lavado de activos (tipificación penal de 'tipping off')."
      },
      {
        "id": "C",
        "texto": "Publicar los nombres de los sospechosos en redes sociales personales sin ninguna prueba judicial.",
        "explicacion": "Incorrecta. Vulnera la reserva legal, el debido proceso y la presunción de inocencia."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 526 de 1999 y Régimen de Prevención de Lavado de Activos UIAF",
    "citaNormativa": "«Las autoridades que ejerzan funciones de inspección, vigilancia y control reportarán a la UIAF las operaciones sospechosas de las cuales tengan conocimiento. Dicha información estará sujeta a reserva legal.» (Ley 526 de 1999, Art. 10)."
  },
  {
    "id": "dian_cpaca_01",
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
    "id": "dian_cpaca_02",
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
    "id": "dian_cpaca_03",
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
    "id": "dian_cpaca_04",
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
    "id": "dian_cpaca_05",
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
    "id": "dian_cpaca_06",
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
    "id": "dian_cpaca_07",
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
    "id": "dian_peticion_01",
    "nivel": "Profesional",
    "ejeId": "servicio",
    "ejeNombre": "Derecho de Petición y Servicio al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Término para Resolver Peticiones de Documentos y Copias (Ley 1755 Art. 14)",
    "caso": "Un ciudadano radica una petición formal ante la DIAN solicitando copia de un manual técnico no reservado y de estadísticas consolidadas públicas de recaudo de los últimos 3 años.",
    "enunciado": "De acuerdo con el artículo 14 de la Ley 1755 de 2015, ¿cuál es el plazo máximo legal para entregar los documentos o copias solicitadas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Diez (10) días hábiles siguientes a su recepción; si no se da respuesta en este plazo, opera el silencio administrativo positivo debiendo entregar las copias dentro de los 3 días siguientes sin costo.",
        "explicacion": "Correcta. El artículo 14 de la Ley 1755 de 2015 fija 10 días para peticiones de información y copias; si la entidad no responde en ese término, la ley dispone que la petición se entenderá aceptada y la documentación deberá entregarse dentro de los tres días siguientes."
      },
      {
        "id": "B",
        "texto": "Treinta (30) días calendario prorrogables por 6 meses adicionales.",
        "explicacion": "Incorrecta. El término de 30 días es para consultas jurídicas, no para peticiones de documentos (que tienen el término preferente de 10 días)."
      },
      {
        "id": "C",
        "texto": "Un año contado desde la autorización del sindicato de la entidad.",
        "explicacion": "Incorrecta. Desconoce de plano el régimen legal del derecho fundamental de petición."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1755 de 2015, Art. 14 (Términos para resolver las distintas modalidades de peticiones)",
    "citaNormativa": "«Las peticiones de documentos y de información deberán resolverse dentro de los diez (10) días siguientes a su recepción. Si no se da respuesta, se entenderá aceptada la petición y se entregarán dentro de los tres (3) días siguientes.» (Ley 1755 de 2015, Art. 14 Numeral 1)."
  },
  {
    "id": "dian_peticion_02",
    "nivel": "Profesional",
    "ejeId": "servicio",
    "ejeNombre": "Derecho de Petición y Servicio al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Peticiones Oscuras o Incompletas y Desistimiento Tácito (Ley 1755 Art. 17)",
    "caso": "Un ciudadano radica una solicitud confusa sin aportar los documentos esenciales exigidos por la ley para adelantar el trámite de inscripción en el RUT como importador ocasional.",
    "enunciado": "¿Cuál es el trámite reglado que debe aplicar el Gestor III para garantizar el debido proceso?",
    "opciones": [
      {
        "id": "A",
        "texto": "Requerir al peticionario por escrito dentro de los diez (10) días siguientes para que complete la solicitud en un término de un (1) mes; si no la subsana en dicho término, se declarará el desistimiento tácito y el archivo del trámite.",
        "explicacion": "Correcta. El artículo 17 de la Ley 1755 de 2015 regula las peticiones incompletas: la autoridad requiere al peticionario para que subsane en 1 mes. Si no lo hace, opera el desistimiento tácito sin perjuicio de que pueda presentar una nueva petición posteriormente."
      },
      {
        "id": "B",
        "texto": "Tirar la petición a la papelera sin avisarle al ciudadano y bloquear su acceso a la entidad.",
        "explicacion": "Incorrecta. Constituye falta disciplinaria gravísima por denegación de servicios y desprecio a los derechos ciudadanos."
      },
      {
        "id": "C",
        "texto": "Imponerle una multa de diez salarios mínimos mensuales por no redactar con buena ortografía.",
        "explicacion": "Incorrecta. La administración pública no tiene potestad para multar a los ciudadanos por peticiones deficientes o incompletas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1755 de 2015, Art. 17 (Peticiones incompletas y desistimiento tácito)",
    "citaNormativa": "«Cuando la autoridad constate que una petición está incompleta, requerirá al peticionario dentro de los diez (10) días siguientes a la recepción para que la subsane en el término máximo de un (1) mes. Vencidos los términos sin respuesta, se decretará el desistimiento tácito.» (Ley 1755 de 2015, Art. 17)."
  },
  {
    "id": "dian_peticion_03",
    "nivel": "Profesional",
    "ejeId": "servicio",
    "ejeNombre": "Derecho de Petición y Servicio al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Consultas Jurídicas y Carácter No Vinculante (Ley 1755 Art. 28)",
    "caso": "Una agremiación empresarial radica una consulta jurídica a la Subdirección de Normativa y Doctrina de la DIAN solicitando interpretar el alcance tributario de una exención de IVA en paneles solares.",
    "enunciado": "¿Cuál es el término legal para responder y cuál es la naturaleza jurídica de los conceptos emitidos?",
    "opciones": [
      {
        "id": "A",
        "texto": "El término para resolver consultas es de treinta (30) días hábiles; los conceptos emitidos por la DIAN resuelven peticiones en abstracto y no son de obligatorio cumplimiento para los particulares ni deciden situaciones jurídicas concretas.",
        "explicacion": "Correcta. El Art. 14 de la Ley 1755 de 2015 fija 30 días para consultas; y el Art. 28 señala que los conceptos de las autoridades son orientaciones no vinculantes para los ciudadanos (aunque obligatorios para los funcionarios de la misma entidad según doctrina reiterada)."
      },
      {
        "id": "B",
        "texto": "Tienen carácter de ley suprema inmodificable por el Congreso y deben responderse en 24 horas continuas.",
        "explicacion": "Incorrecta. Los conceptos son doctrina administrativa auxiliar, no normas con rango de ley formal ni se resuelven en 24 horas."
      },
      {
        "id": "C",
        "texto": "La DIAN no tiene competencia para emitir conceptos y debe rechazar de plano todas las consultas ciudadanas.",
        "explicacion": "Incorrecta. La DIAN cuenta con la Subdirección de Normativa y Doctrina encargada expresamente de unificar la doctrina tributaria y aduanera."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1755 de 2015, Arts. 14 y 28 (Alcance de los conceptos)",
    "citaNormativa": "«Salvo disposición legal en contrario, los conceptos emitidos por las autoridades como respuestas a peticiones realizadas en ejercicio del derecho a formular consultas no serán de obligatorio cumplimiento o ejecución.» (Ley 1755 de 2015, Art. 28)."
  },
  {
    "id": "dian_peticion_04",
    "nivel": "Profesional",
    "ejeId": "servicio",
    "ejeNombre": "Derecho de Petición y Servicio al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reserva de la Información Tributaria (Art. 583 E.T.) vs. Solicitud de Particulares",
    "caso": "Un ciudadano particular solicita por derecho de petición que la DIAN le entregue copia íntegra de las declaraciones de renta de su vecino para verificar si sus ingresos justifican el carro que compró.",
    "enunciado": "Como Gestor III responsable de proyectar la respuesta al derecho de petición, ¿cuál es la decisión legal procedente?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la solicitud invocando la Reserva Legal de la Información Tributaria (Art. 583 del Estatuto Tributario y Ley 1755 Art. 24), informando motivadamente que los datos de declaraciones tributarias son de carácter reservado y solo accesibles por orden judicial o entes de control autorizados.",
        "explicacion": "Correcta. El artículo 583 del Estatuto Tributario consagra la reserva tributaria estricta de las declaraciones y bases de datos fiscales; ningún particular puede acceder a la información económica de terceros sin autorización legal o judicial expresa."
      },
      {
        "id": "B",
        "texto": "Entregarle de inmediato las declaraciones con extractos bancarios para fomentar la curiosidad comunitaria.",
        "explicacion": "Incorrecta. Constituye violación flagrante de la reserva legal, delito penal y causal de destitución disciplinaria inmediata."
      },
      {
        "id": "C",
        "texto": "Cobrarle un soborno en efectivo de 500.000 pesos para entregarle copias sin sello oficial.",
        "explicacion": "Incorrecta. Delito de cohecho y corrupción absoluta inadmisible en el servicio público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 583 y Ley 1755 de 2015 Art. 24 (Reserva legal)",
    "citaNormativa": "«La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada.» (E.T. Art. 583)."
  },
  {
    "id": "dian_peticion_05",
    "nivel": "Profesional",
    "ejeId": "servicio",
    "ejeNombre": "Derecho de Petición y Servicio al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Requerimientos de Información de la Fiscalía y Jueces de la República (Art. 585 E.T.)",
    "caso": "Un Fiscal Delegado ante el Tribunal, dentro de una investigación penal formal por lavado de activos y enriquecimiento ilícito, libra orden judicial solicitando a la DIAN copia de las declaraciones tributarias y facturas de los imputados.",
    "enunciado": "Ante el requerimiento judicial fundado de la Fiscalía General de la Nación, ¿cómo debe proceder la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "Suministrar la información solicitada bajo estricto protocolo de confidencialidad, toda vez que las órdenes judiciales y de la Fiscalía en procesos penales constituyen una excepción legal válida a la reserva tributaria (Art. 585 E.T.).",
        "explicacion": "Correcta. El artículo 585 del Estatuto Tributario y la jurisprudencia constitucional señalan que la reserva tributaria se levanta frente a requerimientos judiciales y de la Fiscalía General para investigaciones penales, debiendo suministrarse con la debida custodia probatoria."
      },
      {
        "id": "B",
        "texto": "Negar el suministro al Fiscal argumentando que la DIAN es una entidad superior a la Constitución y no le responde a los jueces.",
        "explicacion": "Incorrecta. Incurre en desacato judicial y obstaculización a la justicia tipificada en el Código Penal."
      },
      {
        "id": "C",
        "texto": "Filtrar el requerimiento judicial a los medios de comunicación antes de responderle al fiscal.",
        "explicacion": "Incorrecta. Viola la reserva procesal penal y pone en riesgo el éxito de la investigación penal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 585 (Excepciones a la reserva tributaria para investigaciones penales)",
    "citaNormativa": "«Para los fines de la investigación penal, los jueces y fiscales podrán solicitar el suministro de informaciones o copias de las declaraciones tributarias que reposen en la DIAN.» (E.T. Art. 585)."
  },
  {
    "id": "dian_contra_02",
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
    "id": "dian_contra_03",
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
    "id": "dian_contra_04",
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
    "id": "dian_contra_05",
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
    "id": "dian_discip_01",
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
    "id": "dian_discip_02",
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
    "id": "dian_discip_03",
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
    "id": "dian_discip_04",
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
    "id": "dian_discip_05",
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
    "id": "dian_comp_gestor_01",
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
    "id": "dian_comp_gestor_02",
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
    "id": "dian_comp_gestor_03",
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
    "id": "dian_comp_gestor_04",
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
    "id": "dian_mision_04",
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
    "id": "dian_estruc_03",
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
    "id": "dian_estruc_04",
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
    "id": "dian_mipg_04",
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
    "id": "dian_furag_02",
    "nivel": "Profesional",
    "ejeId": "desempeno",
    "ejeNombre": "Medición del Desempeño Institucional (FURAG)",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Diligenciamiento de Evidencias y Veracidad en el FURAG",
    "caso": "Al recopilar las evidencias para el reporte anual del FURAG en la Dirección Seccional, se evidencia que un grupo de trabajo reporta un 100% de cumplimiento en capacitación de servicio al ciudadano, pero carece de listas de asistencia y evaluaciones de impacto.",
    "enunciado": "¿Cuál es el proceder técnico y ético del Gestor III como coordinador de la información para el FURAG?",
    "opciones": [
      {
        "id": "A",
        "texto": "Exigir los soportes documentales verificables antes de validar el puntaje en el aplicativo, ajustando el porcentaje al avance real soportado documentalmente para garantizar la integridad del reporte.",
        "explicacion": "Correcta. El FURAG exige que toda respuesta esté respaldada en evidencias documentales objetivas y verificables; registrar datos no comprobados vulnera la veracidad del reporte y el control interno institucional."
      },
      {
        "id": "B",
        "texto": "Validar el 100% sin soportes para asegurar una alta calificación de la seccional en el ranking nacional de Función Pública.",
        "explicacion": "Incorrecta. Falsifica el estado real del avance institucional y transgrede el principio de transparencia y honestidad pública."
      },
      {
        "id": "C",
        "texto": "Eliminar la política completa del reporte para no tener que responder preguntas sobre evidencias faltantes.",
        "explicacion": "Incorrecta. El reporte de todas las políticas del MIPG es de carácter obligatorio para las entidades del orden nacional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017 y Lineamientos de Medición FURAG (DAFP)",
    "citaNormativa": "«Las entidades públicas responderán el FURAG con absoluta objetividad y veracidad, sustentando sus respuestas en evidencias comprobables y trazables que demuestren la implementación de las políticas de gestión y desempeño.» (DAFP, Guía FURAG)."
  },
  {
    "id": "dian_furag_03",
    "nivel": "Profesional",
    "ejeId": "desempeno",
    "ejeNombre": "Medición del Desempeño Institucional (FURAG)",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Uso del Índice de Desempeño Institucional (IDI) para Planes de Mejoramiento",
    "caso": "Función Pública publica los resultados del FURAG y la DIAN identifica que la política de 'Gestión del Conocimiento y la Innovación' obtuvo un puntaje inferior al promedio del sector Hacienda.",
    "enunciado": "¿Cuál es la acción correctiva que debe estructurar el Gestor III desde el punto de vista del ciclo de mejora continua?",
    "opciones": [
      {
        "id": "A",
        "texto": "Diseñar un Plan de Mejoramiento Institucional focalizado en las debilidades diagnosticadas por el IDI, estableciendo acciones de transferencia de conocimiento tácito a explícito, bancos de buenas prácticas y seguimiento semestral.",
        "explicacion": "Correcta. La finalidad de la medición del desempeño a través del FURAG es retroalimentar el ciclo de gestión (PHVA), formulando planes de mejoramiento orientados a cerrar las brechas identificadas por el IDI."
      },
      {
        "id": "B",
        "texto": "Impugnar la medición afirmando que la política de gestión del conocimiento no aplica a entidades tributarias.",
        "explicacion": "Incorrecta. Todas las políticas del MIPG aplican transversalmente a las entidades del orden nacional sin excepción."
      },
      {
        "id": "C",
        "texto": "Archivar los resultados y esperar la siguiente vigencia para verificar si el puntaje sube espontáneamente.",
        "explicacion": "Incorrecta. Ignorar los resultados del FURAG atenta contra el principio de eficacia y evaluación del desempeño administrativo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1499 de 2017, Art. 2.2.22.3.8 y Manual Operativo MIPG",
    "citaNormativa": "«Los resultados de la medición del desempeño institucional servirán de insumo para que las entidades formulen planes de mejoramiento que atiendan las debilidades y consoliden las fortalezas identificadas.» (Decreto 1499 de 2017)."
  },
  {
    "id": "dian_indic_03",
    "nivel": "Profesional",
    "ejeId": "indicadores",
    "ejeNombre": "Indicadores de Gestión",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Indicadores de Impacto y Efectividad en la Gestión Tributaria",
    "caso": "La seccional busca medir no solo cuántas visitas de fiscalización se hicieron (actividad/producto), sino en qué medida esas visitas lograron cambiar el comportamiento de cumplimiento voluntario futuro de los contribuyentes fiscalizados.",
    "enunciado": "¿Qué tipología de indicador debe formular el Gestor III para medir este efecto transformador a mediano y largo plazo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Un indicador de Efectividad o Impacto, que evalúa el cambio en la conducta tributaria y el incremento sostenido del recaudo voluntario generado a partir de las intervenciones de fiscalización.",
        "explicacion": "Correcta. De acuerdo con la Guía de Indicadores de DNP/DAFP, los indicadores de impacto y efectividad miden los cambios sustanciales en la población objetivo y la solución del problema público de fondo (cumplimiento voluntario)."
      },
      {
        "id": "B",
        "texto": "Un indicador de insumo que contabilice únicamente el número de resmas de papel utilizadas en las actas de visita.",
        "explicacion": "Incorrecta. Mide utilización de recursos materiales inmediatos, sin relación con el efecto tributario real."
      },
      {
        "id": "C",
        "texto": "Un indicador binario de si los funcionarios llegaron temprano al despacho el día de la visita.",
        "explicacion": "Incorrecta. Mide puntualidad laboral individual, no el resultado institucional sobre la cultura tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Guía para la Construcción e Interpretación de Indicadores de Gestión (DNP / DAFP)",
    "citaNormativa": "«Los indicadores de efectividad o impacto miden el logro de los objetivos de la política pública y el cambio duradero producido en el entorno socioeconómico o en el comportamiento de los ciudadanos.» (Guía DNP)."
  },
  {
    "id": "dian_razon_03",
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
    "id": "dian_rend_02",
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
    "id": "dian_rend_03",
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
    "id": "gestor_vr_01",
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
    "id": "gestor_vr_02",
    "nivel": "Profesional",
    "ejeId": "tributario",
    "ejeNombre": "Procedimiento Tributario y Fiscalización",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Verbo Rector en Procedimiento Tributario - Proyectar Actos Administrativos",
    "caso": "Un contribuyente interpone oportunamente Recurso de Reconsideración contra una Liquidación Oficial de Revisión por deducciones improcedentes de renta. El expediente es asignado para sustanciación al Gestor III adscrito a la División Jurídica Tributaria.",
    "enunciado": "De acuerdo con el principio del debido proceso y los límites funcionales de su empleo, ¿cuál es la conducta procesal que debe ADELANTAR el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Estudiar a fondo las pruebas y argumentos del recurrente, confrontarlos con las normas tributarias y proyectar la resolución que decide el recurso con su motivación fáctica y jurídica, sometiéndola a revisión y firma del funcionario competente.",
        "explicacion": "Correcta. El servidor profesional sustancia y proyecta el acto administrativo motivado; respeta la regla de que la adopción y firma formal corresponde a la autoridad con delegación legal (Director Seccional o Delegado)."
      },
      {
        "id": "B",
        "texto": "Firmar y notificar de manera directa al contribuyente la resolución que confirma la liquidación, omitiendo la firma del Administrador Seccional para agilizar el trámite procesal.",
        "explicacion": "Incorrecta. Incurre en causal de nulidad absoluta del acto por incompetencia funcional subjetiva, ya que el Gestor carece de facultad legal delegada para decidir por sí mismo."
      },
      {
        "id": "C",
        "texto": "Abstenerse de analizar las pruebas documentales aportadas y archivar el recurso alegando congestión en el despacho administrativo.",
        "explicacion": "Incorrecta. Constituye falta disciplinaria gravísima por omisión de los deberes funcionales y denegación de justicia administrativa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Arts. 720, 732 y Decreto 1742 de 2020",
    "citaNormativa": "«Los servidores del nivel profesional realizarán los estudios jurídicos y técnicos requeridos y proyectarán las decisiones para la firma de la autoridad competente.» (Decreto 1742 de 2020)."
  },
  {
    "id": "gestor_vr_03",
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
    "id": "gestor_lc_01",
    "nivel": "Profesional",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Desarticulación de Ruido Emocional y Verificación de Caducidad en Declaración de Importación",
    "caso": "Un operador de comercio exterior presenta un extenso memorial de 12 páginas relatando graves perjuicios económicos ocasionados por bloqueos en vías nacionales, paros portuarios imprevistos y pérdidas de cosechas que afectaron sus flujos de caja. En medio del relato dramático, el importador solicita la condonación total y de plano de tributos aduaneros liquidados en una declaración con levante obtenido hace tres (3) meses, argumentando fuerza mayor insuperable. Al revisar el expediente digital, usted constata que la liquidación oficial de corrección ya fue notificada en debida forma y que el término perentorio de dos meses para interponer recurso de reconsideración venció hace quince (15) días sin que obrara recurso alguno radicado.",
    "enunciado": "Aplicando la técnica de lectura inversa (enfoque en el núcleo fáctico probado vs. ruido narrativo) y las normas aduaneras del Decreto 1165 de 2019, ¿cuál es la determinación técnica que debe PROYECTAR el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar por extemporaneidad cualquier intento de impugnación y proyectar respuesta negativa a la solicitud de condonación, precisando que los actos administrativos tributarios y aduaneros en firme gozan de presunción de legalidad y ejecutoriedad, y que la administración tributaria carece de competencia para condonar tributos legalmente causados sin ley previa.",
        "explicacion": "Correcta. La lectura crítica exige ignorar el ruido narrativo de las quejas económicas y centrarse en el hecho probado: el acto administrativo cobró firmeza por vencimiento del término legal de 2 meses (Art. 720 E.T. / Dec. 1165 de 2019) y no existen competencias administrativas para condonar deudas sin habilitación legal expresa del Congreso (Principio de Legalidad Tributaria)."
      },
      {
        "id": "B",
        "texto": "Conceder una rebaja de oficio del 50% de los aranceles liquidados en consideración a los reportes de prensa y paros portuarios certificados en el memorial, aplicando el principio de conmiseración social.",
        "explicacion": "Incorrecta. Trampa de empatía subjetiva. Los servidores públicos no tienen potestad discrecional para alterar tributos ni liquidaciones en firme por razones de conmiseración personal."
      },
      {
        "id": "C",
        "texto": "Ordenar la suspensión indefinida del cobro coactivo y remitir el caso a la Defensoría del Contribuyente para que dicte sentencia judicial favorable al importador.",
        "explicacion": "Incorrecta. Trampa de usurpación de funciones y cuantificador categórico ('suspensión indefinida'). La Defensoría no dicta sentencias judiciales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política Art. 338, Estatuto Tributario Art. 720 y Decreto 1165 de 2019",
    "citaNormativa": "«En tiempo de paz, solamente el Congreso, las asambleas departamentales y los concejos distritales y municipales podrán imponer contribuciones fiscales o parafiscales. La ley, las ordenanzas y los acuerdos deben fijar, directamente, los sujetos activos y pasivos, los hechos y las bases gravables, y las tarifas de los impuestos.» (Constitución Política, Art. 338)."
  },
  {
    "id": "gestor_lc_02",
    "nivel": "Profesional",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Detección de Trampa de Cuantificador Absoluto en Solicitud de Devolución con Garantía",
    "caso": "Una sociedad anónima radica una solicitud de devolución de saldo a favor en IVA por $850.000.000 amparada con póliza de seguro bancaria, exigiendo en su memorial que la DIAN consigne los recursos en su cuenta bancaria de manera 'automática, inmediata e inapelable de plano', invocando el beneficio de devolución en 20 días hábiles del artículo 860 del Estatuto Tributario. Sin embargo, al cruzar la información en los sistemas de analítica institucional de la DIAN, el Gestor III identifica que dos de los principales proveedores de costos descontables de la sociedad figuran catalogados formalmente como proveedores ficticios mediante resolución ejecutoriada.",
    "enunciado": "Identificando la trampa de los cuantificadores absolutos ('automático de plano') y la normativa de devoluciones, ¿cuál es el procedimiento legal que debe ADELANTAR el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proyectar el auto de suspensión del término para devolver hasta por noventa (90) días conforme al artículo 857-1 del Estatuto Tributario, con el fin de que Fiscalización adelante la investigación previa ante la existencia de indicios fundados sobre la improcedencia del saldo por operaciones con proveedores ficticios.",
        "explicacion": "Correcta. El artículo 857-1 del E.T. prevé taxativamente que incluso en devoluciones con garantía procede la suspensión de términos hasta por 90 días cuando se detectan indicios de inexactitud o proveedores ficticios. La palabra 'automático e inapelable' en la solicitud del contribuyente es un señuelo distractor."
      },
      {
        "id": "B",
        "texto": "Efectuar de inmediato y sin verificación alguna la orden de pago bancario, dado que la presentación de póliza de seguro prohíbe de forma absoluta cualquier tipo de control o cruce fiscal por parte de la DIAN.",
        "explicacion": "Incorrecta. Cae en la trampa del cuantificador absoluto ('prohíbe de forma absoluta'). La garantía acelera el trámite ordinario pero no suprime la facultad legal de suspensión preventiva por fraude fiscal evidente."
      },
      {
        "id": "C",
        "texto": "Declarar la caducidad del derecho de propiedad de la empresa solicitante y confiscar la póliza de seguro a favor del fondo rotatorio del despacho sin motivación alguna.",
        "explicacion": "Incorrecta. Distractor absurdo que viola el debido proceso y la prohibición constitucional de confiscación (Art. 34 C.P.)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 857-1 y Art. 860",
    "citaNormativa": "«El término para devolver o compensar se suspenderá hasta por un término máximo de noventa (90) días, cuando la Administración Tributaria encuentre indicios de inexactitud en la declaración que origina el saldo a favor, o cuando dentro del proceso de determinación se hubiere proferido pliego de cargos por no declarar o por inexactitud.» (Estatuto Tributario, Art. 857-1)."
  },
  {
    "id": "gestor_lc_03",
    "nivel": "Profesional",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Lectura Inversa y Congruencia de Competencia en Proyección de Liquidación Oficial",
    "caso": "En un proceso de determinación oficial del impuesto de renta de una corporación multinacional, se emitió previamente Requerimiento Especial proponiendo glosas a deducciones por regalías internacionales por $3.200.000.000. El contribuyente dio respuesta desvirtuando únicamente $600.000.000 mediante contratos certificados y dictámenes periciales, manteniendo la controversia sobre los $2.600.000.000 restantes. El expediente se encuentra en el despacho del Gestor III dentro de los seis (6) meses siguientes a la respuesta para decidir sobre la liquidación oficial.",
    "enunciado": "Conforme al verbo rector 'PROYECTAR' y al principio de congruencia del artículo 711 del Estatuto Tributario, ¿cuál es el contenido jurídico que debe plasmar el Gestor III en el proyecto de acto administrativo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proyectar la Liquidación Oficial de Revisión manteniendo únicamente las glosas debidamente controvertidas y no desvirtuadas ($2.600.000.000) y aceptando la disminución probada ($600.000.000), garantizando que la liquidación se circunscriba a los hechos analizados en el Requerimiento Especial y su respuesta.",
        "explicacion": "Correcta. Principio de congruencia (Art. 711 E.T.): La liquidación de revisión debe contraerse exclusivamente a los hechos y glosas propuestos en el requerimiento especial. Además, como servidor profesional, su verbo rector es 'proyectar' el acto para firma del Jefe de División."
      },
      {
        "id": "B",
        "texto": "Firmar como autor único y definitivo la clausura inmediata de todos los establecimientos de comercio de la multinacional en el territorio nacional por un término de cinco años.",
        "explicacion": "Incorrecta. Falla de rol y competencia: la sanción de clausura de establecimiento no es materia de liquidación de revisión y un Gestor III no tiene facultades jurisdiccionales sancionatorias de cierre por 5 años."
      },
      {
        "id": "C",
        "texto": "Aprovechar el acto para incluir glosas enteramente nuevas por evasión de IVA y retención en la fuente que nunca fueron notificadas en el Requerimiento Especial.",
        "explicacion": "Incorrecta. Violación flagrante del principio de correspondencia y debido proceso (Art. 711 E.T.), lo que acarrearía la nulidad absoluta del acto administrativo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 711 y Art. 712",
    "citaNormativa": "«La liquidación de revisión deberá contraerse exclusivamente a la declaración del contribuyente y a los hechos que hubieren sido contemplados en el requerimiento especial o en su ampliación si la hubiere.» (Estatuto Tributario, Art. 711)."
  },
  {
    "id": "gestor_lc_04",
    "nivel": "Profesional",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Discriminación de Núcleo Probatorio vs Conjeturas en Precios de Transferencia",
    "caso": "En un informe de auditoría tributaria remitido a su escritorio, el auditor de campo incluye 25 páginas con transcripciones de rumores de mercado sobre la mala reputación del gerente financiero de una empresa vinculada en el exterior, aduciendo que 'con seguridad evaden impuestos por su estilo de vida'. Entre los anexos documentales, figura el estudio técnico formal de precios de transferencia presentado en tiempo por el contribuyente, donde el método de Márgenes Netos de la Transacción (MNT) arroja una rentabilidad operativa del 1.8%, situándose sustancialmente por fuera del rango intercuartil de comparables independientes del mercado (cuyo límite inferior admisible es del 4.2%).",
    "enunciado": "Descartando el ruido especulativo y extrayendo el núcleo fáctico con valor probatorio legal, ¿cuál es el dictamen analítico que debe ESTRUCTURAR el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Desestimar todas las conjeturas sobre el estilo de vida del directivo por carecer de aptitud probatoria legal, y fundamentar el pliego de modificaciones exclusivamente en la evidencia matemática y técnica: el desvío objetivo del margen operativo (1.8%) frente al rango intercuartil de mercado (4.2%), aplicando el ajuste a la mediana según el artículo 260-4 del Estatuto Tributario.",
        "explicacion": "Correcta. La lectura crítica exige depurar el expediente de valoraciones subjetivas o chismes corporativos (ruido narrativo) y ceñirse al dato técnico verificable: la prueba pericial/financiera de que la transacción entre vinculados no cumplió el principio de plena competencia (arm's length) con ajuste a la mediana."
      },
      {
        "id": "B",
        "texto": "Redactar el requerimiento basándose prioritariamente en las apreciaciones sobre la vestimenta y viajes del gerente, pues la convicción íntima del auditor prevalece sobre las tablas estadísticas y normas de comparabilidad.",
        "explicacion": "Incorrecta. Viola el régimen probatorio (Art. 742 E.T.), según el cual los actos de la administración deben fundarse en hechos probados objetivamente en el expediente."
      },
      {
        "id": "C",
        "texto": "Archivar todo el proceso de fiscalización asumiendo que los precios de transferencia solo aplican para empresas con más de 10.000 empleados en Colombia.",
        "explicacion": "Incorrecta. Falsa premisa normativa; el régimen de precios de transferencia aplica por vinculación económica y topes de patrimonio/ingresos, no por número de empleados."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 260-3, Art. 260-4 y Art. 742",
    "citaNormativa": "«La determinación de los precios o montos de contraprestaciones que se hubieren utilizado en operaciones comparables entre partes independientes se realizará mediante la determinación de un rango de precios o márgenes de utilidad... Cuando el precio o margen se encuentre fuera de este rango, se ajustará a la mediana.» (Estatuto Tributario, Art. 260-4)."
  },
  {
    "id": "gestor_lc_05",
    "nivel": "Profesional",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Verificación Fáctica de Términos Procesales en Notificación Electrónica con Falla Técnica Alegada",
    "caso": "Un contribuyente alega en un recurso que la Liquidación Oficial notificada por correo electrónico el día lunes 1 de octubre de 2025 es nula de pleno derecho, asegurando bajo juramento que no revisó su bandeja de entrada sino hasta el 20 de noviembre por problemas de conectividad en su finca de recreo. Al consultar el log de auditoría tecnológica y la constancia de entrega del servicio informático electrónico de la DIAN, se evidencia que el correo de notificación fue remitido y entregado exitosamente el 1 de octubre de 2025 a la dirección electrónica informada en el RUT, generándose el acuse de entrega sin reportes de contingencia ni caída de la plataforma DIAN en dicha fecha.",
    "enunciado": "A la luz del artículo 566-1 del Estatuto Tributario y la regla de cómputo del término, ¿cuál es la premisa jurídica correcta que fundamenta la respuesta técnica del Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "La notificación electrónica se entiende surtida de pleno derecho para el contribuyente al quinto (5) día hábil siguiente a la fecha de entrega del correo en su bandeja registrada en el RUT; en consecuencia, los términos de ley para recurrir corrieron a partir de ese momento, siendo inoponibles las excusas de desconexión voluntaria no atribuibles a falla certificada de los sistemas de la DIAN.",
        "explicacion": "Correcta. El artículo 566-1 del E.T. establece que la notificación electrónica surte efectos a partir del quinto día hábil siguiente al envío exitoso. El olvido o desatención del buzón por viaje o descanso no suspende los términos legales ni desvirtúa la constancia de entrega técnica."
      },
      {
        "id": "B",
        "texto": "Aceptar que la notificación no tuvo validez, toda vez que mientras el contribuyente no abra y lea personalmente el mensaje con confirmación biométrica, ningún término procesal puede correr jamás en Colombia.",
        "explicacion": "Incorrecta. Distractor basado en cuantificador categórico ('ningún término puede correr jamás'). La ley tributaria no condiciona la validez de la notificación a la lectura voluntaria del administrado sino al depósito certificado en la dirección electrónica del RUT."
      },
      {
        "id": "C",
        "texto": "Revocar de oficio la liquidación oficial y declarar la prescripción inmediata de todos los impuestos del contribuyente por haber salido a descansar a su finca.",
        "explicacion": "Incorrecta. Consecuencia jurídica inexistente y lesiva del patrimonio fiscal de la Nación."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 566-1 (Notificación electrónica)",
    "citaNormativa": "«La notificación electrónica se entenderá surtida para todos los efectos legales, cinco (5) días hábiles después de que el mensaje de datos sea entregado en la dirección electrónica reportada en el RUT.» (Estatuto Tributario, Art. 566-1)."
  },
  {
    "id": "gestor_lc_06",
    "nivel": "Profesional",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Descarte de Distractor por Incompetencia Jerárquica en Convenio Interinstitucional",
    "caso": "En desarrollo de un convenio de cooperación interinstitucional entre la DIAN y la Policía Fiscal y Aduanera (POLFA) para mitigar el contrabando abierto de calzado en centros de acopio urbanos, un informe de inteligencia advierte que varias bodegas clandestinas almacenan contenedores descargados de noche. El informe sugiere que el Gestor III 'ordene inmediatamente el allanamiento forzoso con derribo de puertas sin orden judicial y capture de oficio a los arrendadores del inmueble'.",
    "enunciado": "Efectuando el 'Test del Rol Profesional' y respetando los límites de competencia del empleo (Ficha FT-TAH-1824 y CPACA), ¿cuál es el curso de acción legítimo y eficaz del Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Elaborar el diagnóstico técnico del riesgo tributario y aduanero con sustento en los inventarios y declaraciones, y proyectar la minuta de solicitud de registro y allanamiento ante la autoridad competente (Fiscalía General de la Nación o Juez de Control de Garantías) a través de la Dirección Seccional, coordinando con POLFA los apoyos logísticos en el marco del convenio.",
        "explicacion": "Correcta. Filtro de competencia: Un Gestor III carece de funciones de policía judicial para derribar puertas o privar de la libertad a ciudadanos. Su rol profesional es estructurar el análisis técnico y proyectar la solicitud a las autoridades judiciales que la Constitución exige (Art. 28 C.P.)."
      },
      {
        "id": "B",
        "texto": "Ejecutar personalmente el derribo de las puertas de la bodega a la medianoche armado de herramientas de cerrajería, ejerciendo justicia por mano propia en nombre del convenio.",
        "explicacion": "Incorrecta. Distractor flagrante de extralimitación de funciones, delito de violación de habitación ajena y prevaricato."
      },
      {
        "id": "C",
        "texto": "Ignorar la alerta de inteligencia y ordenar la destrucción de los convenios con la POLFA por considerarlos innecesarios para la fiscalización.",
        "explicacion": "Incorrecta. Omisión del deber funcional y destrucción arbitraria de documentos institucionales de cooperación."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política Art. 28, CPACA Art. 6 y Ficha FT-TAH-1824",
    "citaNormativa": "«Nadie puede ser molestado en su persona o familia, ni reducido a prisión o arresto, ni detenido, ni su domicilio registrado, sino en virtud de mandamiento escrito de autoridad judicial competente, con las formalidades legales y por motivo previamente definido en la ley.» (Constitución Política, Art. 28)."
  },
  {
    "id": "areandina_guia_prof_01",
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
    "id": "areandina_guia_tec_02",
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
    "id": "areandina_guia_asis_03",
    "nivel": "Asistencial",
    "ejeId": "servicio",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Derecho a Conocer Estado de Trámites y Principio de Facilitación (Ejemplo Oficial 3 Guía)",
    "caso": "Al inicio de la jornada, un funcionario recibe en el punto de servicio a un ciudadano quien pregunta cómo puede conocer el estado de una solicitud radicada días atrás y qué puede hacer mientras recibe respuesta. El funcionario revisa la plataforma institucional y encuentra información registrada sobre el caso, el traslado, el responsable y los términos.",
    "enunciado": "Con base en la información disponible, al funcionario le corresponde:",
    "opciones": [
      {
        "id": "A",
        "texto": "informar al ciudadano la etapa en la que está la solicitud e indicarle el canal para consultar el progreso.",
        "explicacion": "Correcta. Toda persona tiene derecho a conocer el estado de cualquier actuación o trámite (Ley 1437 de 2011, art. 5, num. 2). Las autoridades deben mantener a disposición de toda persona información completa y actualizada sobre sus trámites (Ley 1712 de 2014, art. 7). Además, deben proporcionar apoyo a los usuarios que lo requieran y proveer todo tipo de asistencia respecto de los trámites y servicios que presten (art. 8). En el caso, la plataforma muestra el avance de la solicitud. Al informar al ciudadano esa etapa, el funcionario responde la primera pregunta en el mismo momento. Al indicarle el canal de consulta, le da un medio para conocer los avances por su cuenta y responde la segunda pregunta."
      },
      {
        "id": "B",
        "texto": "indicar al ciudadano qué dependencia tiene la solicitud y orientarlo para que consulte allí la fase y los avances.",
        "explicacion": "Incorrecta. Indicar al ciudadano qué dependencia tiene la solicitud es un dato útil, pero no responde su pregunta sobre el estado. En el caso, la etapa de la solicitud ya aparece en la plataforma que consulta el funcionario. Los sujetos obligados deben facilitar el ejercicio del derecho de acceso a la información, 'excluyendo exigencias o requisitos que puedan obstruirlo o impedirlo' (Ley 1712 de 2014, art. 3, principio de facilitación). Orientar al ciudadano para que acuda a otra dependencia a obtener un dato disponible le impone un paso adicional, con costos de tiempo y desplazamiento. Además, no le da un medio para consultar los avances sin acudir de nuevo a una oficina."
      },
      {
        "id": "C",
        "texto": "confirmar al ciudadano que la solicitud sigue en curso y pedirle que espere la respuesta en el plazo establecido.",
        "explicacion": "Incorrecta. Toda persona tiene derecho a conocer el estado de cualquier actuación o trámite (Ley 1437 de 2011, art. 5, num. 2). Por eso, el ciudadano puede pedir información sobre el estado de la solicitud mientras está en curso, sin tener que esperar la respuesta final. El principio de celeridad busca 'la agilidad en el trámite y la gestión administrativa' (Ley 1712 de 2014, art. 3). Confirmar al ciudadano que la solicitud sigue en curso no le informa la etapa, aunque esa información está disponible. Pedirle que espere la respuesta tampoco responde su pregunta sobre cómo consultar los avances."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1437 de 2011 (Art. 5, num. 2) y Ley 1712 de 2014 (Arts. 3, 7 y 8)",
    "citaNormativa": "«Toda persona tiene derecho a conocer el estado de cualquier actuación o trámite... Los sujetos obligados deben facilitar el ejercicio del derecho de acceso a la información, excluyendo exigencias o requisitos que puedan obstruirlo o impedirlo.» (Guía de Orientación al Aspirante DIAN 2676, FUAA - CNSC, Pág. 16-17)."
  },
  {
    "id": "dian_aduanas_pjs_01",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Tránsito Aduanero y Tipos de Aduana",
    "caso": "Juan Toro visita las instalaciones de la DIAN en Medellín en busca de asesoría técnica y manifiesta: 'Tengo una mercancía en Riohacha para exportar, y el agente de aduana nivel 4 que me atendió indica que los trámites debo realizarlos en la aduana de salida de la respectiva ciudad'.",
    "enunciado": "Ante esta situación, usted como funcionario de la DIAN, conforme a la normativa aduanera y sus competencias de orientación al usuario, le debe aclarar:",
    "opciones": [
      {
        "id": "A",
        "texto": "El término 'aduana de salida' se utiliza exclusivamente para la exportación directa de bienes sin requerir ningún trámite previo en aduana de partida.",
        "explicacion": "Incorrecta. La aduana de salida es aquella por donde sale bajo reexportación el medio de transporte del turista o por donde sale definitivamente la carga, pero si inicia tránsito se requiere aduana de partida."
      },
      {
        "id": "B",
        "texto": "El término correcto que debe emplear es 'aduana de partida' por tratarse del inicio de una operación de tránsito aduanero.",
        "explicacion": "Correcta. La operación de tránsito aduanero comprende el transporte de mercancías sometidas al régimen de tránsito aduanero entre una aduana de partida (donde inicia la operación) y una de destino (donde finaliza)."
      },
      {
        "id": "C",
        "texto": "No existe distinción técnica entre aduana de salida, de paso o de partida, pudiéndose emplear indistintamente en el RUT y en la declaración.",
        "explicacion": "Incorrecta. El régimen aduanero define con precisión jurídica cada categoría según el régimen y la operación que se autorice."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 1165 de 2019 (Régimen de Tránsito Aduanero)",
    "citaNormativa": "«Aduana de partida: es aquella donde se inicia una operación de tránsito aduanero. Operación de tránsito aduanero: comprende todas las actividades relacionadas con el transporte de mercancías sometidas al régimen de tránsito entre una aduana de partida y una de destino.» (Dec. 1165 de 2019)."
  },
  {
    "id": "dian_aduanas_pjs_02",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Agencias de Aduana y Niveles de Cobertura",
    "caso": "En el mismo caso de Juan Toro, el usuario manifiesta dudas respecto a la jurisdicción y alcance de las actuaciones que puede adelantar la agencia de aduanas que lo está representando en Riohacha clasificada como Nivel 4.",
    "enunciado": "De acuerdo con el régimen aduanero colombiano (Decreto 1165 de 2019, Art. 41), usted le debe precisar:",
    "opciones": [
      {
        "id": "A",
        "texto": "La agencia de aduanas nivel 4 puede ejercer su actividad en todo el territorio nacional respecto de la totalidad de las operaciones de comercio exterior.",
        "explicacion": "Incorrecta. La cobertura en todo el territorio nacional para la totalidad de operaciones corresponde exclusivamente a la Agencia de Aduanas Nivel 1."
      },
      {
        "id": "B",
        "texto": "La agencia de aduanas nivel 4 ejerce su actividad exclusivamente en una sola de las jurisdicciones aduaneras de Arauca, Inírida, Leticia, Puerto Asís, Puerto Carreño, San Andrés, Tumaco o Yopal.",
        "explicacion": "Correcta. El artículo 41 del Decreto 1165 de 2019 delimita taxativamente la cobertura territorial de las agencias de aduanas Nivel 4 a esas administraciones seccionales especiales."
      },
      {
        "id": "C",
        "texto": "Las agencias nivel 4 tienen prohibido tramitar operaciones aduaneras de exportación o tránsito, limitándose a labores de mensajería postal.",
        "explicacion": "Incorrecta. Sí pueden ejercer agenciamiento aduanero, pero restringidas a su jurisdicción territorial autorizada."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 1165 de 2019, Art. 41",
    "citaNormativa": "«Agencia de aduanas nivel 4. Deberá ejercer su actividad exclusivamente en una sola de las jurisdicciones aduaneras de Arauca, Inírida, Leticia, Puerto Asís, Puerto Carreño, San Andrés, Tumaco o Yopal y demás administraciones que establezca la DIAN.» (Decreto 1165 de 2019, Art. 41)."
  },
  {
    "id": "dian_aduanas_pjs_03",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Modalidades de Exportación de Servicios - Consumo en el Extranjero",
    "caso": "Durante una jornada de capacitación técnica sobre comercio exterior orientada a emprendedores, un asistente consulta: 'Si un ciudadano residente en Alemania viaja a Colombia para someterse a un procedimiento quirúrgico estético (liposucción) en una clínica de Medellín, ¿bajo qué modalidad de exportación de servicios se clasifica esta operación?'.",
    "enunciado": "Usted como facilitador técnico de la DIAN le aclara que según los acuerdos del AGCS/OMC y la normativa aduanera corresponde a:",
    "opciones": [
      {
        "id": "A",
        "texto": "Consumo en el extranjero (Modo 2), dado que el consumidor de servicios se desplaza desde su país de residencia para recibir la atención en territorio colombiano.",
        "explicacion": "Correcta. El consumo en el extranjero (Modo 2 de la OMC) ocurre cuando el consumidor se desplaza fuera de su territorio para recibir y consumir el servicio prestado en el país de destino."
      },
      {
        "id": "B",
        "texto": "Suministro transfronterizo (Modo 1), porque la retribución económica se transfiere a través del sistema financiero transfronterizo.",
        "explicacion": "Incorrecta. En el suministro transfronterizo el servicio cruza la frontera mientras ambas partes permanecen en sus respectivos países (ej. software, telemedicina)."
      },
      {
        "id": "C",
        "texto": "Presencia comercial (Modo 3), porque la clínica colombiana factura el servicio como establecimiento de comercio formal.",
        "explicacion": "Incorrecta. La presencia comercial implica que la empresa prestadora establezca una filial o sucursal física en el extranjero."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo General sobre el Comercio de Servicios (AGCS - OMC) y Normativa de Exportación de Servicios",
    "citaNormativa": "«El Modo 2 (Consumo en el extranjero) tiene lugar cuando un consumidor se desplaza desde su país para recibir el servicio en otro país, como en el turismo de salud o educativo.» (OMC / MinCIT / DIAN)."
  },
  {
    "id": "dian_aduanas_pjs_04",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Modalidades de Exportación de Servicios - Presencia de Personas Físicas",
    "caso": "En la misma capacitación, otro participante formula la siguiente pregunta: '¿Cómo se denomina la modalidad de exportación de servicios cuando un arquitecto colombiano viaja temporalmente a Panamá a supervisar y construir una edificación contratada por un tercero?'.",
    "enunciado": "Con base en la clasificación internacional y aduanera de servicios, la respuesta correcta es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Suministro transfronterizo.",
        "explicacion": "Incorrecta. No es suministro transfronterizo porque hay desplazamiento físico del profesional."
      },
      {
        "id": "B",
        "texto": "Presencia comercial en el extranjero.",
        "explicacion": "Incorrecta. La presencia comercial requiere que la empresa constituya una sociedad, sucursal o establecimiento permanente en el exterior."
      },
      {
        "id": "C",
        "texto": "Presencia de personas físicas (Modo 4).",
        "explicacion": "Correcta. El Modo 4 ocurre cuando personas físicas prestadoras de servicios se desplazan de manera temporal al país del consumidor para suministrar el servicio (empleados o profesionales independientes)."
      }
    ],
    "respuestaCorrecta": "C",
    "norma": "Acuerdo General sobre el Comercio de Servicios (AGCS - Modo 4)",
    "citaNormativa": "«Presencia de personas físicas: tiene lugar cuando se desplazan temporalmente las personas físicas proveedoras del servicio al país del consumidor para prestar sus servicios.» (OMC)."
  },
  {
    "id": "dian_aduanas_pjs_05",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Registro Único Tributario (RUT) y Calidad de Usuario Aduanero",
    "caso": "El representante legal de una sociedad comercial se acerca al punto de contacto de la DIAN informando que comenzará a importar insumos y requiere actualizar su Registro Único Tributario (RUT) para habilitarse formalmente ante la entidad como usuario aduanero importador.",
    "enunciado": "Como funcionario competente de la DIAN, usted debe orientarlo indicándole que la habilitación como usuario aduanero se formaliza actualizando la casilla:",
    "opciones": [
      {
        "id": "A",
        "texto": "Casilla 54 (Usuarios Aduaneros) del Registro Único Tributario.",
        "explicacion": "Correcta. En la casilla 54 del RUT se registran los códigos de las diferentes calidades y responsabilidades aduaneras (código 22 para Importador, 23 para Exportador, etc.)."
      },
      {
        "id": "B",
        "texto": "Casilla 57 exclusivamente, la cual contiene la firma digital del representante legal.",
        "explicacion": "Incorrecta. La casilla 57 no corresponde a las responsabilidades aduaneras sino a datos complementarios o de control."
      },
      {
        "id": "C",
        "texto": "Casilla 89 únicamente, correspondiente a la clasificación por tamaño empresarial de la ley MiPyme.",
        "explicacion": "Incorrecta. La casilla 54 es la destinada por la DIAN para identificar el rol aduanero del usuario."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "DUR 1625 de 2016 y Formularios Oficiales DIAN (RUT)",
    "citaNormativa": "«En la casilla 54 del formulario del Registro Único Tributario (RUT) se deben registrar las calidades de usuarios aduaneros correspondientes a las operaciones de comercio exterior.» (Resolución DIAN)."
  },
  {
    "id": "dian_aduanas_pjs_06",
    "nivel": "Profesional",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Tributarias y Deberes Formales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Régimen del IVA para Usuarios Aduaneros Importadores",
    "caso": "El mismo importador consulta si al registrarse como usuario aduanero puede acogerse al régimen de no responsables de IVA (anterior régimen simplificado) dado que sus ingresos brutos proyectados no superan las 3.500 UVT anuales.",
    "enunciado": "Conforme a las disposiciones del Estatuto Tributario y la normativa aduanera, la respuesta técnica que debe suministrar el funcionario es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí puede operar como no responsable de IVA, siempre y cuando mantenga un solo establecimiento de comercio abierto al público.",
        "explicacion": "Incorrecta. El Estatuto Tributario excluye expresamente de la calidad de no responsable a los usuarios aduaneros."
      },
      {
        "id": "B",
        "texto": "No es viable; al habilitarse como usuario aduanero adquiere por mandato legal la calidad de responsable del IVA (antiguo régimen común) con todas sus obligaciones de liquidación y facturación.",
        "explicacion": "Correcta. El artículo 437 del Estatuto Tributario (parágrafo 3) establece que no pueden pertenecer al régimen de no responsables del IVA las personas que ostenten la calidad de usuarios aduaneros."
      },
      {
        "id": "C",
        "texto": "Puede elegir libremente su régimen tributario según lo que tenga consignado en el certificado de matrícula mercantil de la Cámara de Comercio.",
        "explicacion": "Incorrecta. El régimen tributario frente al IVA se rige por el Estatuto Tributario de carácter imperativo y no por la simple voluntad o matrícula registral."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 437 Parágrafo 3",
    "citaNormativa": "«Para celebrar contratos de venta de bienes y/o de prestación de servicios gravados por valor individual y superior a 3.500 UVT... ni tener la calidad de usuarios aduaneros.» (Estatuto Tributario, Art. 437, Parágrafo 3)."
  },
  {
    "id": "dian_aduanas_pjs_07",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Documentos de Transporte en Carga Consolidada",
    "caso": "En una revisión de control previo en puerto, un funcionario analiza la documentación de una importación. Observa que el documento de transporte ampara la totalidad de las mercancías consolidadas a bordo y fue emitido por un agente de carga internacional para amparar el lote completo ante el transportador marítimo.",
    "enunciado": "De acuerdo con las definiciones del régimen aduanero (Decreto 1165 de 2019), el documento que ampara la totalidad de la carga consolidada se denomina técnicamente:",
    "opciones": [
      {
        "id": "A",
        "texto": "Documento de transporte hijo (House Bill of Lading).",
        "explicacion": "Incorrecta. El documento hijo es el que expide el agente de carga a cada uno de los destinatarios individuales por su carga específica desagrupada."
      },
      {
        "id": "B",
        "texto": "Documento de transporte máster (Master Bill of Lading).",
        "explicacion": "Correcta. El documento de transporte emitido por el transportador o por el agente de carga internacional que corresponde a carga consolidada se denomina máster."
      },
      {
        "id": "C",
        "texto": "Manifiesto de carga simplificado.",
        "explicacion": "Incorrecta. El manifiesto de carga es la relación general de bultos del medio de transporte, no el contrato o documento de transporte máster."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 1165 de 2019 (Definiciones de Transporte Internacional)",
    "citaNormativa": "«El documento de transporte emitido por el transportador o por el agente de carga internacional que corresponda a carga consolidada, se denominará máster.» (Decreto 1165 de 2019)."
  },
  {
    "id": "dian_aduanas_pjs_08",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Modalidades de Exportación - Perfeccionamiento Pasivo",
    "caso": "Una empresa manufacturera nacional requiere enviar temporalmente una turbina industrial a una zona franca en Colombia para su reparación y calibración tecnológica, con la obligación de retornarla al resto del territorio aduanero nacional dentro de los plazos legales.",
    "enunciado": "De acuerdo con el Decreto 1165 de 2019, la modalidad aduanera de exportación bajo la cual debe ampararse este trámite es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Exportación temporal para perfeccionamiento pasivo.",
        "explicacion": "Correcta. La exportación temporal para perfeccionamiento pasivo regula la salida temporal de mercancías nacionales o nacionalizadas para ser sometidas a transformación, elaboración o reparación en el exterior o en zona franca, debiendo ser reimportadas."
      },
      {
        "id": "B",
        "texto": "Exportación temporal para reimportación en el mismo estado.",
        "explicacion": "Incorrecta. En el mismo estado no se admite alteración ni reparación sustancial, salvo el mantenimiento necesario para su conservación."
      },
      {
        "id": "C",
        "texto": "Reembarque forzoso con destino a depósito aduanero.",
        "explicacion": "Incorrecta. El reembarque opera para mercancías de procedencia extranjera no nacionalizadas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019 (Modalidades de Exportación)",
    "citaNormativa": "«Exportación temporal para perfeccionamiento pasivo: Es la modalidad que regula la salida temporal de mercancías del territorio aduanero nacional para ser sometidas a transformación, elaboración o reparación en el exterior o en una zona franca.» (Decreto 1165 de 2019)."
  },
  {
    "id": "dian_aduanas_pjs_09",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Términos Internacionales de Comercio (Incoterms 2020) - DDP",
    "caso": "Un exportador colombiano pacta una operación en la que se compromete a entregar los bienes puestos en la bodega del comprador en el país de destino, asumiendo todos los costos de transporte internacional, trámites aduaneros de exportación e importación, aranceles e impuestos locales hasta la entrega.",
    "enunciado": "En la asesoría técnica de comercio exterior, ¿a qué término Incoterms 2020 corresponde este nivel de máxima responsabilidad del vendedor?",
    "opciones": [
      {
        "id": "A",
        "texto": "DDP (Delivered Duty Paid - Entregada Derechos Pagados).",
        "explicacion": "Correcta. En DDP el vendedor asume la máxima responsabilidad, incluyendo el flete, seguro, despacho de exportación, despacho de importación y el pago de tributos aduaneros en destino."
      },
      {
        "id": "B",
        "texto": "FCA (Free Carrier - Franco Porteador).",
        "explicacion": "Incorrecta. En FCA el vendedor solo asume la entrega al transportista designado en el país de origen."
      },
      {
        "id": "C",
        "texto": "CIF (Cost, Insurance and Freight).",
        "explicacion": "Incorrecta. En CIF el vendedor paga costo, flete y seguro marítimo hasta el puerto de destino, pero el comprador asume los riesgos desde el embarque y los tributos de importación."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Reglas Incoterms 2020 (Cámara de Comercio Internacional - CCI)",
    "citaNormativa": "«DDP (Delivered Duty Paid): El vendedor asume todos los costos y riesgos ocasionados al llevar las mercancías hasta el lugar de destino, incluyendo los trámites y el pago de derechos de aduanas e impuestos.» (Incoterms 2020)."
  },
  {
    "id": "dian_aduanas_pjs_10",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Incoterms 2020 - Colocación al Costado del Buque (FAS)",
    "caso": "El mismo exportador manifiesta que va a renegociar su contrato porque no desea asumir fletes marítimos ni riesgos de travesía, y únicamente está dispuesto a colocar la mercancía al costado del buque en el muelle del puerto de Cartagena.",
    "enunciado": "El término Incoterms que define con precisión esta condición de entrega marítima es:",
    "opciones": [
      {
        "id": "A",
        "texto": "FOB (Free On Board).",
        "explicacion": "Incorrecta. En FOB el vendedor debe cargar la mercancía a bordo del buque, sobrepasando la borda."
      },
      {
        "id": "B",
        "texto": "FAS (Free Alongside Ship - Libre al Costado del Buque).",
        "explicacion": "Correcta. En FAS la entrega y transmisión de riesgos ocurren cuando la mercancía se coloca al costado del buque en el muelle o en barcazas en el puerto de embarque convenido."
      },
      {
        "id": "C",
        "texto": "CPT (Carriage Paid To).",
        "explicacion": "Incorrecta. CPT es un término multimodal donde el vendedor paga el transporte hasta el destino designado."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Reglas Incoterms 2020 (CCI)",
    "citaNormativa": "«FAS (Free Alongside Ship): La responsabilidad del vendedor finaliza y el riesgo se transmite una vez la mercancía es colocada al costado del buque en el puerto de embarque convenido.» (Incoterms 2020)."
  },
  {
    "id": "dian_aduanas_pjs_11",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Incoterms 2020 - Alcance del Término FOB",
    "caso": "En una diligencia de inspección documental aduanera sobre una factura comercial emitida bajo el término FOB Buenaventura, surge discrepancia entre el declarante y el inspector respecto a en qué momento exacto se entiende efectuada la entrega de la mercancía.",
    "enunciado": "De acuerdo con las reglas oficiales Incoterms 2020, en el término FOB la entrega se perfecciona cuando:",
    "opciones": [
      {
        "id": "A",
        "texto": "La mercancía ingresa al depósito aduanero habilitado del puerto de origen.",
        "explicacion": "Incorrecta. El ingreso al depósito aduanero no constituye entrega en FOB; solo representa almacenamiento temporal previo."
      },
      {
        "id": "B",
        "texto": "La mercancía se encuentra a bordo del buque en el puerto de embarque designado, momento en que el comprador asume todos los costos y riesgos subsecuentes.",
        "explicacion": "Correcta. En FOB el vendedor entrega la mercancía a bordo del buque designado por el comprador en el puerto de embarque convenido."
      },
      {
        "id": "C",
        "texto": "El buque arriba a la zona de fondeo del puerto de destino convenido.",
        "explicacion": "Incorrecta. El arribo a destino corresponde a términos del grupo D o C, no a FOB."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Reglas Incoterms 2020 (CCI) - Cláusula FOB",
    "citaNormativa": "«FOB (Free On Board): El vendedor entrega la mercancía a bordo del buque designado por el comprador en el puerto de embarque acordado. El comprador soporta todos los costos y riesgos desde ese momento.» (Incoterms 2020)."
  },
  {
    "id": "dian_aduanas_pjs_12",
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
    "id": "dian_aduanas_pjs_13",
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
    "id": "dian_aduanas_pjs_14",
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
    "id": "dian_aduanas_pjs_15",
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
    "id": "dian_aduanas_pjs_16",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Zona Primaria Aduanera - Definición Legal",
    "caso": "A un inspector aduanero se le comisiona para realizar control de ingreso de mercancías y personas en una zona primaria aduanera de un puerto marítimo habilitado.",
    "enunciado": "De acuerdo con el artículo 75 del Decreto 1165 de 2019, la zona primaria aduanera se define como:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aquellos lugares por los cuales la DIAN permite el ingreso y salida de mercancías y/o viajeros bajo control aduanero del territorio aduanero nacional.",
        "explicacion": "Correcta. La zona primaria aduanera comprende puertos, aeropuertos, pasos fronterizos y depósitos habilitados por la DIAN para la entrada y salida de mercancías y personas bajo su potestad."
      },
      {
        "id": "B",
        "texto": "Cualquier parqueadero o bodega privada dentro de los límites del municipio portuario sin necesidad de acto administrativo de habilitación.",
        "explicacion": "Incorrecta. Requiere habilitación formal de la DIAN y cumplimiento de requisitos de seguridad y control aduanero."
      },
      {
        "id": "C",
        "texto": "La sede administrativa de la Dirección Seccional de Impuestos donde se radica la correspondencia.",
        "explicacion": "Incorrecta. La zona primaria corresponde al lugar físico operativo de cruce fronterizo o terminal de carga internacional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Art. 75",
    "citaNormativa": "«Zona primaria aduanera: Son aquellos lugares por los cuales la UAE Dirección de Impuestos y Aduanas Nacionales (DIAN) permite el ingreso y salida de viajeros y/o mercancías bajo control aduanero del territorio aduanero nacional.» (Decreto 1165 de 2019, Art. 75)."
  },
  {
    "id": "dian_aduanas_pjs_17",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Garantías Globales de Muelles y Puertos Habilitados",
    "caso": "En el trámite de habilitación aduanera de una concesión portuaria de servicio público marítimo, se evalúa el monto de la garantía global que debe constituir el operador portuario a favor de la DIAN.",
    "enunciado": "De acuerdo con el artículo 77 del Decreto 1165 de 2019, el monto máximo de la garantía global exigida a los muelles o puertos habilitados equivale al:",
    "opciones": [
      {
        "id": "A",
        "texto": "0.25% del promedio del valor CIF de las mercancías que se estime serán objeto de cargue, descargue y manipulación durante un trimestre en el lugar habilitado.",
        "explicacion": "Correcta. El artículo 77 del Decreto 1165 de 2019 fija la garantía en el 0.25% del valor CIF trimestral estimado para asegurar el cumplimiento de sus obligaciones aduaneras."
      },
      {
        "id": "B",
        "texto": "5% del patrimonio líquido del concesionario reportado en su declaración de renta.",
        "explicacion": "Incorrecta. La norma aduanera no toma el patrimonio líquido como base de esta garantía sino el valor de las mercancías manipuladas."
      },
      {
        "id": "C",
        "texto": "10% del total de tributos aduaneros recaudados durante el año inmediatamente anterior.",
        "explicacion": "Incorrecta. No corresponde al porcentaje legalmente tarifado para puertos habilitados."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019, Art. 77",
    "citaNormativa": "«Los muelles o puertos deberán constituir una garantía global bancaria o de seguros... por un monto máximo equivalente al cero punto veinticinco por ciento (0.25%) del promedio del valor CIF de las mercancías que se estime serán objeto de cargue, descargue y manipulación durante un trimestre.» (Decreto 1165 de 2019, Art. 77)."
  },
  {
    "id": "dian_aduanas_pjs_18",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reforma Aduanera del Decreto 360 de 2021 frente a Incoterms",
    "caso": "Un analista de comercio exterior debate sobre los cambios normativos introducidos por el Decreto 360 de 2021 en el régimen aduanero colombiano frente a las facultades del Gobierno Nacional.",
    "enunciado": "Al verificar el alcance legal del Decreto 360 de 2021, ¿cuál de las siguientes modificaciones NO fue ni podía ser competencia de dicho decreto nacional?",
    "opciones": [
      {
        "id": "A",
        "texto": "Crear o sustituir de manera vinculante internacional los términos Incoterms de la Cámara de Comercio Internacional (CCI).",
        "explicacion": "Correcta. Los términos Incoterms son emitidos por un organismo internacional privado (la CCI en París) y ningún decreto de un gobierno nacional tiene competencia para modificarlos; los decretos nacionales solo adoptan o aplican su uso."
      },
      {
        "id": "B",
        "texto": "Crear la figura del Usuario Aduanero con Trámite Simplificado (UAT).",
        "explicacion": "Incorrecta. La creación de la figura UAT sí fue una modificación explícitamente incorporada por el Decreto 360 de 2021."
      },
      {
        "id": "C",
        "texto": "Eliminar la prohibición de realizar labores de transporte, consolidación y desconsolidación de carga y depósito para Agentes de Aduana.",
        "explicacion": "Incorrecta. Esta eliminación sí formó parte sustancial de la reforma aduanera del Decreto 360 de 2021."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 360 de 2021 y Normas Internacionales de la CCI",
    "citaNormativa": "«El Decreto 360 de 2021 ajustó 148 artículos del régimen aduanero colombiano (UAT, agentes de aduanas, análisis integral), pero las reglas Incoterms son competencia privativa de la Cámara de Comercio Internacional.» (Doctrina Aduanera)."
  },
  {
    "id": "dian_aduanas_pjs_19",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Régimen de Licencia Previa y Documentos en la VUCE",
    "caso": "El señor Carlos Huertas tramita en la Ventanilla Única de Comercio Exterior (VUCE) la importación de una maquinaria que requiere autorización previa del Ministerio de Comercio, Industria y Turismo por estar catalogada en el régimen de licencia previa.",
    "enunciado": "En la orientación técnica, ¿cuál es el documento aduanero que debe tramitar y obtener el importador para este régimen?",
    "opciones": [
      {
        "id": "A",
        "texto": "Licencia de importación.",
        "explicacion": "Correcta. A través de la Licencia de Importación (aprobada por el Comité de Importaciones del MinCIT) se autorizan formalmente las operaciones sometidas al régimen de licencia previa."
      },
      {
        "id": "B",
        "texto": "Registro de importación simplificado.",
        "explicacion": "Incorrecta. El registro de importación se utiliza para el régimen de libre importación, no para el de licencia previa."
      },
      {
        "id": "C",
        "texto": "Autorización de embarque provisional.",
        "explicacion": "Incorrecta. La autorización de embarque opera para exportaciones, no para trámites de importación previa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 925 de 2013 y Régimen de Importaciones VUCE",
    "citaNormativa": "«Por medio de las licencias de importación se autorizan las importaciones del régimen de licencia previa, mientras que a través del registro de importación se tramitan las de libre importación.» (Decreto 925 de 2013)."
  },
  {
    "id": "dian_aduanas_pjs_20",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Régimen de Libre Importación y Registro de Importación",
    "caso": "El mismo señor Huertas consulta cuál es el documento que debe tramitar el mes siguiente para importar otra línea de repuestos clasificados bajo el régimen de libre importación.",
    "enunciado": "La respuesta normativa correcta que le debe comunicar el funcionario de la DIAN es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Registro de importación.",
        "explicacion": "Correcta. El Registro de Importación es el acto y documento electrónico tramitado ante la VUCE mediante el cual se autorizan las importaciones sujetas al régimen de libre importación que requieran algún visto bueno o requisito."
      },
      {
        "id": "B",
        "texto": "Declaración de exportación definitiva (DEX).",
        "explicacion": "Incorrecta. El DEX es un documento aduanero exclusivo de exportación."
      },
      {
        "id": "C",
        "texto": "Factura proforma sin intervención aduanera.",
        "explicacion": "Incorrecta. La factura proforma es un documento comercial informativo pero no constituye el requisito o registro aduanero formal ante la VUCE."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 925 de 2013 y VUCE",
    "citaNormativa": "«El Registro de importación es el acto administrativo mediante el cual se otorga autorización a las importaciones del régimen de libre importación que requieren visto bueno o registro.» (Decreto 925 de 2013)."
  },
  {
    "id": "dian_cambiario_pjs_01",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Funciones Constitucionales del Banco de la República",
    "caso": "En una actuación de control cambiario adelantada por la DIAN, se analiza la competencia de los órganos del Estado frente a la política monetaria y cambiaria. Un investigado alega que la DIAN usurpa funciones que son exclusivas del Banco Central.",
    "enunciado": "De acuerdo con el artículo 371 de la Constitución Política de 1991, son funciones básicas y exclusivas de banca central del Banco de la República:",
    "opciones": [
      {
        "id": "A",
        "texto": "Fijar y cobrar los impuestos directos e indirectos del orden nacional.",
        "explicacion": "Incorrecta. La administración y recaudo tributario nacional corresponde a la DIAN y al Congreso mediante ley."
      },
      {
        "id": "B",
        "texto": "Regular la moneda, los cambios internacionales y el crédito; emitir la moneda legal; administrar las reservas internacionales; ser prestamista de última instancia de los establecimientos de crédito y servir como agente fiscal del gobierno.",
        "explicacion": "Correcta. El artículo 371 de la Constitución consagra de manera taxativa estas funciones esenciales de banca central del Banco de la República."
      },
      {
        "id": "C",
        "texto": "Supervisar disciplinariamente a los funcionarios públicos de la DIAN y de aduanas.",
        "explicacion": "Incorrecta. Corresponde al control interno disciplinario y a la Procuraduría General de la Nación."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Constitución Política de Colombia de 1991, Art. 371",
    "citaNormativa": "«Serán funciones básicas del Banco de la República: regular la moneda, los cambios internacionales y el crédito; emitir la moneda legal; administrar las reservas internacionales; ser prestamista de última instancia y banquero de los establecimientos de crédito; y servir como agente fiscal del gobierno.» (Constitución Política, Art. 371)."
  },
  {
    "id": "dian_cambiario_pjs_02",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Composición de la Junta Directiva del Banco de la República",
    "caso": "Como servidor de la DIAN en el área de orientación a clientes TACI, se le solicita explicar la estructura de la máxima autoridad monetaria, cambiaria y crediticia de Colombia.",
    "enunciado": "De conformidad con el artículo 372 de la Constitución Nacional, la Junta Directiva del Banco de la República está conformada por:",
    "opciones": [
      {
        "id": "A",
        "texto": "Cinco miembros elegidos por votación popular de los gremios económicos.",
        "explicacion": "Incorrecta. No son de elección popular ni representan gremios particulares."
      },
      {
        "id": "B",
        "texto": "Siete miembros: el Ministro de Hacienda (quien la preside), el Gerente del Banco y cinco miembros de dedicación exclusiva nombrados por el Presidente de la República.",
        "explicacion": "Correcta. La Constitución de 1991 (Art. 372) establece exactamente la integración de 7 miembros que representan el interés de la Nación."
      },
      {
        "id": "C",
        "texto": "Doce miembros designados directamente por el Congreso de la República.",
        "explicacion": "Incorrecta. No coincide con la integración constitucional del Banco Central."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Constitución Política de 1991, Art. 372",
    "citaNormativa": "«La Junta Directiva del Banco de la República... estará conformada por siete miembros, entre ellos el Ministro de Hacienda, quien la presidirá. El Gerente del Banco será elegido por la Junta Directiva y será miembro de ella. Los cinco miembros restantes serán nombrados por el Presidente de la República.» (Constitución Política, Art. 372)."
  },
  {
    "id": "dian_cambiario_pjs_03",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Objetivos del Régimen Cambiario vs. Régimen Aduanero",
    "caso": "En una investigación sobre operaciones de comercio exterior, el apoderado de una sociedad argumenta que la DIAN no puede aplicar el régimen sancionatorio cambiario porque sus objetivos son idénticos a los del régimen aduanero.",
    "enunciado": "Al fundamentar la respuesta jurídica, ¿cuál de los siguientes enunciados corresponde a un objetivo aduanero y NO a los propósitos del régimen cambiario de la Ley 9 de 1991?",
    "opciones": [
      {
        "id": "A",
        "texto": "Propiciar la internacionalización de la economía colombiana y estimular la inversión de capitales del exterior.",
        "explicacion": "Incorrecta. Este es un objetivo explícito del régimen cambiario (Ley 9 de 1991, Art. 2)."
      },
      {
        "id": "B",
        "texto": "Determinar las responsabilidades, formalidades y obligaciones en la entrada y salida de mercancías y su desaduanamiento.",
        "explicacion": "Correcta. Este enunciado corresponde a los objetivos y materias propias del régimen aduanero (Decreto 1165 de 2019) y no al régimen de divisas y cambios de la Ley 9 de 1991."
      },
      {
        "id": "C",
        "texto": "Propender por un nivel de reservas internacionales suficiente y coordinar regulaciones con políticas macroeconómicas.",
        "explicacion": "Incorrecta. Es un objetivo medular de la política cambiaria del país."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 9 de 1991, Art. 2 (Propósitos del Régimen Cambiario)",
    "citaNormativa": "«El régimen cambiario tiene por objeto promover el desarrollo económico y el equilibrio cambiario: propiciar la internacionalización, promover transacciones corrientes, aplicar controles a movimientos de capital y propender por reservas internacionales suficientes.» (Ley 9 de 1991, Art. 2)."
  },
  {
    "id": "dian_cambiario_pjs_04",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Intermediarios del Mercado Cambiario (IMC)",
    "caso": "La DIAN adelanta una verificación sobre empresas dedicadas a la compra y venta profesional de divisas. Se analiza bajo qué condiciones una entidad tiene la categoría de Intermediario del Mercado Cambiario (IMC).",
    "enunciado": "De acuerdo con el artículo 8º de la Ley 9 de 1991 y la regulación financiera, ¿cuál es un criterio base para determinar a los IMC?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tratarse de entidades vigiladas por la Superintendencia Financiera de Colombia o entidades cuyo objeto exclusivo consista en realizar operaciones de cambio.",
        "explicacion": "Correcta. La Ley 9 de 1991 (modificada por Ley 510 de 1999 y Decreto 4327 de 2005) establece que son IMC las instituciones financieras vigiladas por la Superfinanciera o aquellas autorizadas con objeto exclusivo cambiario."
      },
      {
        "id": "B",
        "texto": "Cualquier persona natural inscrita en el RUT con actividad comercial general sin vigilancia especial.",
        "explicacion": "Incorrecta. Para operar como intermediario institucional del mercado cambiario se requiere autorización legal y vigilancia financiera."
      },
      {
        "id": "C",
        "texto": "Únicamente las casas de empeño legalmente registradas.",
        "explicacion": "Incorrecta. Las casas de empeño no tienen autorización legal como IMC."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 9 de 1991, Art. 8 y Res. Externa 1 de 2018 Banco de la República",
    "citaNormativa": "«El Gobierno Nacional determinará los intermediarios del mercado cambiario con base en: que se trate de entidades vigiladas por la Superintendencia Financiera de Colombia o entidades cuyo objeto exclusivo consista en realizar operaciones de cambio.» (Ley 9 de 1991, Art. 8)."
  },
  {
    "id": "dian_cambiario_pjs_05",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Definición de Residencia para Efectos Cambiarios",
    "caso": "En un procedimiento de fiscalización cambiaria sobre una operación de inversión internacional, se debate si una persona jurídica constituida en el extranjero debe considerarse residente o no residente a la luz del Decreto 119 de 2017 (DUR 1068 de 2015).",
    "enunciado": "De acuerdo con el artículo 2.17.1.2 del Decreto 1068 de 2015, se consideran NO residentes para efectos cambiarios:",
    "opciones": [
      {
        "id": "A",
        "texto": "Las sucursales de sociedades extranjeras formalmente establecidas en Colombia.",
        "explicacion": "Incorrecta. La norma expresamente otorga condición de residentes para efectos cambiarios a las sucursales de sociedades extranjeras establecidas en el país."
      },
      {
        "id": "B",
        "texto": "Las personas jurídicas que no tengan su domicilio principal dentro del territorio nacional, incluidas aquellas sin ánimo de lucro.",
        "explicacion": "Correcta. El artículo 2.17.1.2, numeral 2, literal b) del DUR 1068 de 2015 califica taxativamente a estas entidades como no residentes cambiarios."
      },
      {
        "id": "C",
        "texto": "Los ciudadanos colombianos que permanezcan en el territorio nacional durante todo el año.",
        "explicacion": "Incorrecta. Son catalogados inequívocamente como residentes cambiarios."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 1068 de 2015, Art. 2.17.1.2 (Modificado por Decreto 119 de 2017)",
    "citaNormativa": "«Se consideran como no residentes: Las personas jurídicas que no tengan su domicilio principal dentro del territorio nacional, incluidas aquellas sin ánimo de lucro, y otras entidades sin personería jurídica ni domicilio en el país.» (DUR 1068 de 2015, Art. 2.17.1.2)."
  },
  {
    "id": "dian_cambiario_pjs_06",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inversiones de Capitales del Exterior - Inversión de Portafolio",
    "caso": "Un inversionista no residente adquiere títulos de certificados de depósito negociables representativos de valores inscritos en la Bolsa de Valores de Colombia y consulta a la DIAN sobre la modalidad de inversión cambiaria a reportar.",
    "enunciado": "De acuerdo con el Decreto 119 de 2017, esta operación clasifica legalmente como:",
    "opciones": [
      {
        "id": "A",
        "texto": "Inversión directa suplementaria al capital asignado.",
        "explicacion": "Incorrecta. La inversión suplementaria al capital aplica a sucursales de sociedades extranjeras, no a compra de valores bursátiles."
      },
      {
        "id": "B",
        "texto": "Inversión de portafolio de capital del exterior.",
        "explicacion": "Correcta. La inversión en valores negociables, certificados de depósito y títulos de renta fija o variable inscritos en bolsa se clasifica normativamente como inversión de portafolio."
      },
      {
        "id": "C",
        "texto": "Endeudamiento externo pasivo sin registro obligatorio.",
        "explicacion": "Incorrecta. No es una operación de crédito ni deuda, sino una inversión bursátil en activos de portafolio."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto 119 de 2017 y Régimen Cambiario de Inversiones Internacionales",
    "citaNormativa": "«Son inversiones de portafolio las inversiones de capitales del exterior que se realicen sobre participaciones en programas de certificados de depósitos negociables representativos de valores y títulos bursátiles.» (Decreto 119 de 2017)."
  },
  {
    "id": "dian_cambiario_pjs_07",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Operaciones y Obligaciones de los IMC (Res. Externa 1 de 2018)",
    "caso": "En una visita de fiscalización a un Intermediario del Mercado Cambiario, se revisa el manual interno de cumplimiento operativo frente a la canalización de divisas.",
    "enunciado": "Conforme al artículo 9º de la Resolución Externa No. 1 de 2018 de la Junta Directiva del Banco de la República, ¿cuál constituye una obligación medular de los IMC ante las autoridades?",
    "opciones": [
      {
        "id": "A",
        "texto": "Exigir a los clientes la información de las operaciones de cambio que canalicen y transmitirla al Banco de la República en los términos y condiciones que éste disponga, además de colaborar con la DIAN.",
        "explicacion": "Correcta. Es una obligación legal estricta de los IMC exigir y transmitir la información de las declaraciones de cambio y suministrar colaboración a la DIAN para el control tributario y cambiario."
      },
      {
        "id": "B",
        "texto": "Destruir los soportes de las transacciones cada 30 días para proteger los datos personales del cliente.",
        "explicacion": "Incorrecta. La normativa cambiaria obliga a conservar todos los soportes por el término legal de firmeza e inspección."
      },
      {
        "id": "C",
        "texto": "Fijar unilateralmente la Tasa Representativa del Mercado (TRM) oficial de Colombia.",
        "explicacion": "Incorrecta. La TRM la certifica la Superintendencia Financiera con base en el promedio ponderado de operaciones de compra y venta del día."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Resolución Externa No. 1 de 2018 Banco de la República, Art. 9",
    "citaNormativa": "«Los IMC estarán obligados a exigir a residentes y no residentes la información de las operaciones de cambio que canalicen y transmitirla al Banco de la República... y suministrar la colaboración que requiera la DIAN.» (Res. Externa 1 de 2018, Art. 9)."
  },
  {
    "id": "dian_cambiario_pjs_08",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reportes Diarios de Tasas de Cambio de los IMC",
    "caso": "Un IMC sostiene ante los funcionarios de inspección que el reporte sobre las tasas de cambio de sus operaciones de divisas solo debe remitirse de forma semestral.",
    "enunciado": "De acuerdo con el artículo 9º numeral 4 de la Resolución Externa No. 1 de 2018, la periodicidad obligatoria con la que los IMC deben informar sus tasas promedio a la SFC es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Semestralmente, coincidiendo con el cierre de estados financieros.",
        "explicacion": "Incorrecta. Dicha periodicidad no permite el cálculo oficial diario de la tasa representativa del mercado."
      },
      {
        "id": "B",
        "texto": "Diariamente, en los términos que señale la Superintendencia Financiera de Colombia.",
        "explicacion": "Correcta. Los IMC deben informar diariamente a la SFC sobre las tasas de cambio promedio de sus operaciones de compra y venta de divisas."
      },
      {
        "id": "C",
        "texto": "Únicamente cuando el dólar supere un límite porcentual predeterminado.",
        "explicacion": "Incorrecta. El deber de información es continuo y de carácter diario."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Resolución Externa No. 1 de 2018, Art. 9 Numeral 4",
    "citaNormativa": "«Informar diariamente a la Superintendencia Financiera de Colombia, en los términos que ésta señale, sobre las tasas de cambio a las cuales efectúen sus operaciones de compra y venta de divisas.» (Res. Externa 1 de 2018)."
  },
  {
    "id": "dian_cambiario_pjs_09",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Regulaciones Cambiarias Especiales en Zonas de Litoral (Ley 9 de 1991)",
    "caso": "En el análisis de las facultades del Gobierno Nacional para expedir regulaciones cambiarias y aduaneras especiales en zonas costeras y fronterizas conforme al parágrafo 1 del artículo 3 de la Ley 9 de 1991, se evalúa el límite geográfico de aplicación.",
    "enunciado": "La Ley 9 de 1991 restringe expresamente que estas regulaciones especiales para la Costa Atlántica y Pacífica no podrán exceder una banda territorial de:",
    "opciones": [
      {
        "id": "A",
        "texto": "100 kilómetros del litoral y del Archipiélago de San Andrés, Providencia y Santa Catalina.",
        "explicacion": "Correcta. La ley establece una limitación territorial máxima de 100 kilómetros desde la línea del litoral para estas regulaciones diferenciadas."
      },
      {
        "id": "B",
        "texto": "300 kilómetros contados desde las capitales de departamento.",
        "explicacion": "Incorrecta. Excede sustancialmente el límite legalmente autorizado."
      },
      {
        "id": "C",
        "texto": "Toda la cuenca hidrográfica nacional sin límite en kilómetros.",
        "explicacion": "Incorrecta. Vulnera el mandato de reserva y precisión geográfica de la norma marco."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 9 de 1991, Art. 3 Parágrafo 1",
    "citaNormativa": "«El Gobierno Nacional podrá expedir regulaciones cambiarias y aduaneras de carácter especial para la Costa Atlántica y Pacífica, con una banda que en ningún caso podrá exceder de los 100 kilómetros del litoral, y de San Andrés y Providencia.» (Ley 9 de 1991, Art. 3)."
  },
  {
    "id": "dian_cambiario_pjs_10",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Medios de Pago Internacionales - Crédito Documentario",
    "caso": "Una empresa importadora consulta sobre el mecanismo de pago internacional más seguro mediante el cual un banco emisor se compromete irrevocablemente a pagar al exportador en el exterior, contra la presentación oportuna de los documentos de embarque conformes.",
    "enunciado": "En la terminología bancaria y de comercio internacional, la carta de crédito formalizada bajo las Reglas y Usos Uniformes (UCP 600) se conoce técnicamente como:",
    "opciones": [
      {
        "id": "A",
        "texto": "Crédito documentario (Carta de Crédito).",
        "explicacion": "Correcta. El crédito documentario o carta de crédito es el instrumento de pago más seguro en el comercio exterior, donde el banco asume un compromiso irrevocable de pago contra presentación de documentos conformes."
      },
      {
        "id": "B",
        "texto": "Cobranza simple no garantizada.",
        "explicacion": "Incorrecta. En la cobranza simple los bancos solo tramitan cobro sin asumir obligación financiera propia ni compromiso irrevocable de pago."
      },
      {
        "id": "C",
        "texto": "Cheque de gerencia en moneda legal colombiana.",
        "explicacion": "Incorrecta. No es un instrumento de canalización cambiaria internacional transfronterizo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Reglas y Usos Uniformes Relativos a los Créditos Documentarios (UCP 600) y Medios de Pago Internacional",
    "citaNormativa": "«El crédito documentario es todo acuerdo, cualquiera que sea su denominación o designación, por el que un banco emisor obrando a petición de un cliente se compromete a pagar a un tercero contra documentos conformes.» (UCP 600)."
  },
  {
    "id": "dian_procedimiento_pjs_01",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Alcance de Requerimientos y Liquidaciones Oficiales Multi-periodo",
    "caso": "Un funcionario de fiscalización tributaria de la DIAN proyecta un pliego de requerimiento especial a un contribuyente investigado por irregularidades detectadas en las declaraciones bimestrales de IVA y en las declaraciones mensuales de retención en la fuente de un mismo año.",
    "enunciado": "Con base en el artículo 695 del Estatuto Tributario, ¿cuál es el alcance legal con el que la Administración de Impuestos puede proferir dichos actos administrativos?",
    "opciones": [
      {
        "id": "A",
        "texto": "Debe proferir obligatoriamente un acto administrativo independiente por cada uno de los periodos bimestrales o mensuales sin posibilidad de acumulación.",
        "explicacion": "Incorrecta. El artículo 695 faculta expresamente la acumulación de periodos para garantizar economía procesal y celeridad."
      },
      {
        "id": "B",
        "texto": "Los emplazamientos, requerimientos y liquidaciones oficiales proferidos por la DIAN podrán referirse a varios periodos gravables en el caso del impuesto sobre las ventas y de retenciones en la fuente.",
        "explicacion": "Correcta. El artículo 695 del Estatuto Tributario autoriza expresamente que los actos administrativos comprendan múltiples periodos gravables en IVA y retención en la fuente."
      },
      {
        "id": "C",
        "texto": "Solo se pueden acumular periodos gravables si el contribuyente presenta previamente una solicitud formal por escrito consintiéndolo.",
        "explicacion": "Incorrecta. La facultad de acumulación es reglada de la administración tributaria y no depende de la autorización del investigado."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 695",
    "citaNormativa": "«Los emplazamientos, requerimientos, liquidaciones oficiales y demás actos administrativos proferidos por la Administración de Impuestos, podrán referirse a varios periodos gravables en el caso de las declaraciones del impuesto sobre las ventas y retenciones en la fuente.» (Estatuto Tributario, Art. 695)."
  },
  {
    "id": "dian_procedimiento_pjs_02",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Acumulación de Impuesto de Renta y Ventas en Actos Oficiales",
    "caso": "En una auditoría integral a un gran contribuyente, el equipo auditor detecta inexactitudes simultáneas en la declaración de renta y en las declaraciones de ventas del respectivo ejercicio. Se evalúa si el requerimiento especial y la posterior liquidación de revisión pueden determinar ambos tributos en el mismo acto.",
    "enunciado": "Conforme al artículo 696 del Estatuto Tributario, la actuación procedente es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí podrán determinarse oficialmente los dos tributos en el mismo acto administrativo, en cuyo caso el fallo del recurso comprenderá uno y otro.",
        "explicacion": "Correcta. El artículo 696 del Estatuto Tributario autoriza que un requerimiento y una liquidación oficial se refieran al mismo tiempo al impuesto de renta y al impuesto sobre las ventas."
      },
      {
        "id": "B",
        "texto": "Está prohibido acumular renta y ventas, acarreando causal de nulidad insanable de pleno derecho por vulneración del debido proceso.",
        "explicacion": "Incorrecta. El Estatuto Tributario permite expresamente esta determinación conjunta."
      },
      {
        "id": "C",
        "texto": "Solo es procedente si la cuantía total de la glosa no excede de 500 UVT.",
        "explicacion": "Incorrecta. La ley no impone un tope de cuantía para el ejercicio de esta facultad."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 696",
    "citaNormativa": "«Un requerimiento y una liquidación de revisión podrán referirse al mismo tiempo al impuesto sobre la renta y al impuesto sobre las ventas. En este caso, el fallo del recurso de reconsideración comprenderá uno y otro tributo.» (Estatuto Tributario, Art. 696)."
  },
  {
    "id": "dian_procedimiento_pjs_03",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Liquidación Oficial de Sanciones no Declaradas y su Incremento",
    "caso": "Al revisar una declaración tributaria presentada por un contribuyente, el funcionario advierte que este incurrió en sanción pero omitió autoliquidarla en el formulario oficial.",
    "enunciado": "De acuerdo con el artículo 701 del Estatuto Tributario, cuando la Administración liquida formalmente las sanciones que el declarante no liquidó o liquidó incorrectamente:",
    "opciones": [
      {
        "id": "A",
        "texto": "Las liquidará incrementadas en un treinta por ciento (30%), procediendo el recurso de reconsideración si se impone mediante resolución independiente.",
        "explicacion": "Correcta. El artículo 701 del Estatuto Tributario dispone expresamente que las sanciones no liquidadas o liquidadas incorrectamente por el declarante se incrementarán en un 30% al determinarse por la administración."
      },
      {
        "id": "B",
        "texto": "Las liquidará sin ningún incremento adicional, limitándose a cobrar intereses moratorios.",
        "explicacion": "Incorrecta. La omisión del contribuyente genera un recargo punitivo legal del 30% sobre la sanción correspondiente."
      },
      {
        "id": "C",
        "texto": "Las incrementará en un cien por ciento (100%) sin posibilidad de recurso alguno en vía gubernativa.",
        "explicacion": "Incorrecta. El incremento legal es del 30% y siempre se garantiza el derecho de defensa mediante recurso de reconsideración."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 701",
    "citaNormativa": "«Cuando el contribuyente, responsable o agente retenedor no hubiere liquidado en su declaración las sanciones a que estuviere obligado o las hubiere liquidado incorrectamente, la Administración las liquidará incrementadas en un treinta por ciento (30%).» (Estatuto Tributario, Art. 701)."
  },
  {
    "id": "dian_procedimiento_pjs_04",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Presunción de Veracidad de las Declaraciones Tributarias",
    "caso": "En una investigación fiscal, un auditor sostiene que toda cifra registrada por el declarante debe considerarse presuntivamente falsa hasta que el contribuyente aporte pruebas contables exhaustivas.",
    "enunciado": "De conformidad con el principio de presunción de veracidad establecido en el artículo 746 del Estatuto Tributario:",
    "opciones": [
      {
        "id": "A",
        "texto": "Las declaraciones tributarias se presumen fraudulentas salvo prueba en contrario aportada por perito contable.",
        "explicacion": "Incorrecta. Esto invertiría inconstitucionalmente la carga de la prueba desconociendo la buena fe consagrada en el Art. 83 de la Carta Política."
      },
      {
        "id": "B",
        "texto": "Los hechos consignados en las declaraciones tributarias, en las correcciones a las mismas o en las respuestas a requerimientos se consideran ciertos, siempre y cuando sobre ellos no se haya solicitado una comprobación especial ni la ley la exija de manera expresa.",
        "explicacion": "Correcta. El artículo 746 del Estatuto Tributario consagra el principio de presunción de veracidad que ampara a las declaraciones y respuestas de los contribuyentes ante la administración tributaria."
      },
      {
        "id": "C",
        "texto": "La presunción de veracidad solo ampara a las declaraciones de renta de personas naturales no comerciantes.",
        "explicacion": "Incorrecta. El artículo 746 aplica de manera general a todos los tributos administrados por la DIAN y a todos los contribuyentes."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 746 (Presunción de Veracidad)",
    "citaNormativa": "«Presunción de veracidad. Se consideran ciertos los hechos consignados en las declaraciones tributarias, en sus correcciones o en las respuestas a requerimientos administrativos, siempre que sobre ellos no se haya solicitado una comprobación especial, ni la ley la exija.» (Estatuto Tributario, Art. 746)."
  },
  {
    "id": "dian_procedimiento_pjs_05",
    "nivel": "Profesional",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Tributarias y Deberes Formales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Sanción por No Actualización Oportuna del RUT",
    "caso": "Una sociedad comercial con domicilio en Bogotá traslada su sede principal y establecimiento de comercio a la ciudad de Cali, pero omite actualizar la dirección en su Registro Único Tributario (RUT) dentro del mes siguiente al cambio.",
    "enunciado": "Conforme al artículo 658-3 del Estatuto Tributario, ¿cuál es la sanción legal aplicable por no actualizar a tiempo la información relativa a la dirección o actividad económica en el RUT?",
    "opciones": [
      {
        "id": "A",
        "texto": "Multa de una (1) UVT por cada mes calendario de retraso.",
        "explicacion": "Incorrecta. La sanción por no actualizar dirección o actividad económica es diaria, no mensual."
      },
      {
        "id": "B",
        "texto": "Sanción equivalente a dos (2) UVT por cada día de retraso en la actualización de la dirección o de la actividad económica del obligado.",
        "explicacion": "Correcta. El artículo 658-3 numeral 3 del Estatuto Tributario estipula una sanción de dos (2) UVT por día cuando la falta de actualización se refiere a la dirección o a la actividad económica."
      },
      {
        "id": "C",
        "texto": "Cancelación automática e irrevocable del NIT y clausura definitiva de la empresa.",
        "explicacion": "Incorrecta. La sanción es pecuniaria y no implica cancelación definitiva del registro tributario."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 658-3, Numeral 3",
    "citaNormativa": "«Cuando la información no suministrada o no actualizada se refiera a la dirección o a la actividad económica del obligado, la sanción será de dos (2) UVT por cada día de retraso en la actualización de la información.» (Estatuto Tributario, Art. 658-3)."
  },
  {
    "id": "dian_procedimiento_pjs_06",
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
    "id": "dian_procedimiento_pjs_07",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Competencia para Fallar la Revocatoria Directa Tributaria",
    "caso": "Un contribuyente radica ante la Dirección Seccional de Impuestos una solicitud de revocatoria directa contra una liquidación oficial de revisión que ya adquirió firmeza y contra la cual no se agotaron los recursos en sede administrativa.",
    "enunciado": "De acuerdo con el artículo 738 del Estatuto Tributario, ¿quién es la autoridad competente para fallar la revocatoria directa de los actos proferidos por la administración?",
    "opciones": [
      {
        "id": "A",
        "texto": "El mismo funcionario auditor sustanciador que formuló la glosa inicial.",
        "explicacion": "Incorrecta. Carece de competencia para revocar actos oficiales en firme de la entidad."
      },
      {
        "id": "B",
        "texto": "El Director Seccional de Impuestos o de Aduanas respectivo, o su delegado.",
        "explicacion": "Correcta. El artículo 738 del Estatuto Tributario radica la competencia para fallar las solicitudes de revocatoria directa en el Administrador de Impuestos o Aduanas respectivo o en quien este delegue."
      },
      {
        "id": "C",
        "texto": "Un juez contencioso administrativo mediante auto interlocutorio en sede gubernativa.",
        "explicacion": "Incorrecta. La revocatoria directa es un mecanismo administrativo interno de la DIAN y no un proceso judicial contencioso."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 738 (Competencia en Revocatoria Directa)",
    "citaNormativa": "«Radica en el Director Seccional (Administrador de Impuestos Nacionales) respectivo o su delegado la competencia para fallar las solicitudes de revocatoria directa de los actos administrativos tributarios.» (Estatuto Tributario, Art. 738)."
  },
  {
    "id": "dian_procedimiento_pjs_08",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Régimen de Zonas Francas - Definición Legal y Beneficios",
    "caso": "Un inversionista extranjero evalúa instalar su planta industrial en una Zona Franca en territorio colombiano y solicita a la DIAN información sobre las características jurídicas de este instrumento de comercio exterior.",
    "enunciado": "De acuerdo con la Ley 1004 de 2005 y el régimen aduanero, una Zona Franca se define técnicamente como:",
    "opciones": [
      {
        "id": "A",
        "texto": "Un área geográfica delimitada del territorio nacional donde se desarrollan actividades industriales de bienes y de servicios, o actividades comerciales, bajo una normatividad especial en materia aduanera, tributaria y de comercio exterior.",
        "explicacion": "Correcta. La Ley 1004 de 2005 define la Zona Franca como un área geográfica delimitada del territorio nacional con régimen especial en materia tributaria, aduanera y de comercio exterior para promover la inversión y empleo."
      },
      {
        "id": "B",
        "texto": "Un territorio internacional inmune a la soberanía del Estado colombiano y exento de cualquier fiscalización de la DIAN.",
        "explicacion": "Incorrecta. La Zona Franca forma parte del territorio colombiano y está bajo estricta potestad aduanera de la DIAN."
      },
      {
        "id": "C",
        "texto": "Un puerto exclusivo de uso militar reservado para navíos de guerra.",
        "explicacion": "Incorrecta. Las zonas francas son áreas económicas e industriales de comercio exterior."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1004 de 2005, Art. 1",
    "citaNormativa": "«La Zona Franca es el área geográfica delimitada dentro del territorio nacional, en donde se desarrollan actividades industriales de bienes y de servicios, o actividades comerciales, bajo una normatividad especial en materia tributaria, aduanera y de comercio exterior.» (Ley 1004 de 2005, Art. 1)."
  },
  {
    "id": "dian_procedimiento_pjs_09",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Examen de Expedientes y Derecho de Defensa",
    "caso": "El apoderado legal de una compañía investigada por la DIAN acude a la dependencia de recursos para examinar el expediente donde cursa un recurso de reconsideración.",
    "enunciado": "De acuerdo con el artículo 729 del Estatuto Tributario, ¿quiénes están legalmente facultados para examinar los expedientes de recursos tributarios?",
    "opciones": [
      {
        "id": "A",
        "texto": "Cualquier ciudadano particular que presente su cédula de ciudadanía, por tratarse de información pública sin reserva.",
        "explicacion": "Incorrecta. Los expedientes tributarios gozan de reserva legal frente a terceros extraños a la relación tributaria."
      },
      {
        "id": "B",
        "texto": "El contribuyente, su apoderado legalmente constituido, o un abogado debidamente autorizado mediante memorial presentado personalmente por el contribuyente.",
        "explicacion": "Correcta. El artículo 729 del Estatuto Tributario delimita taxativamente quiénes tienen acceso al expediente garantizando el debido proceso y preservando la reserva fiscal."
      },
      {
        "id": "C",
        "texto": "Únicamente los peritos designados de oficio por la DIAN.",
        "explicacion": "Incorrecta. Impedir al contribuyente o a su abogado el acceso al expediente vulneraría el derecho fundamental de defensa y debido proceso."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 729",
    "citaNormativa": "«Los expedientes de recursos solo podrán ser examinados por el contribuyente, su apoderado legalmente constituido, o un abogado autorizado mediante memorial presentado personalmente por el contribuyente.» (Estatuto Tributario, Art. 729)."
  },
  {
    "id": "dian_procedimiento_pjs_10",
    "nivel": "Profesional",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Tributarias y Deberes Formales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Renta Líquida Gravable y Principio de Causalidad",
    "caso": "En una asesoría a contribuyentes sobre la determinación del impuesto sobre la renta, se solicita definir de manera precisa qué constituye la renta líquida sobre la cual se aplica la tarifa del impuesto.",
    "enunciado": "De acuerdo con las disposiciones del Estatuto Tributario, la renta líquida gravable se obtiene mediante:",
    "opciones": [
      {
        "id": "A",
        "texto": "La sumatoria total de los activos fijos poseídos por el contribuyente a 31 de diciembre sin deducciones.",
        "explicacion": "Incorrecta. Los activos corresponden al patrimonio bruto y no a la renta líquida."
      },
      {
        "id": "B",
        "texto": "El resultado de restar a la renta bruta las deducciones que tengan relación de causalidad, necesidad y proporcionalidad con la actividad productora de renta y cumplan los requisitos legales.",
        "explicacion": "Correcta. El artículo 26 y 107 del Estatuto Tributario establecen que la renta líquida resulta de restar a la renta bruta las deducciones legalmente procedentes que guarden relación de causalidad con la actividad económica."
      },
      {
        "id": "C",
        "texto": "La totalidad de las ventas brutas del año multiplicadas por la tasa de inflación bancaria.",
        "explicacion": "Incorrecta. No refleja la depuración ordinaria de la renta prevista en el Estatuto Tributario."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Arts. 26 y 107",
    "citaNormativa": "«De la renta bruta se deducen los gastos realizados durante el año gravable en el desarrollo de cualquier actividad productora de renta, siempre que tengan relación de causalidad con las actividades productoras de renta y que sean necesarias y proporcionadas.» (Estatuto Tributario, Art. 107)."
  },
  {
    "id": "dian_gp_pjs_01",
    "nivel": "Profesional",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Control Social y Mecanismos de Participación Ciudadana",
    "caso": "Un grupo de veedores ciudadanos y usuarios radican una solicitud formal ante la administración para pedir explicaciones detalladas y seguimiento sobre irregularidades y sobrecostos en la construcción de una nueva sede institucional de atención al contribuyente que presenta una mora superior a 3 años.",
    "enunciado": "De conformidad con la Ley 1757 de 2015 y los principios de la función administrativa, esta actuación ejercida por la ciudadanía se cataloga técnicamente como:",
    "opciones": [
      {
        "id": "A",
        "texto": "Un proceso de queja anónima disciplinaria.",
        "explicacion": "Incorrecta. No es una queja disciplinaria individual anónima sino el ejercicio formal del control a la gestión pública."
      },
      {
        "id": "B",
        "texto": "Control social a la gestión pública, como mecanismo democrático para vigilar el cumplimiento de fines y la correcta inversión de recursos del Estado.",
        "explicacion": "Correcta. La Ley 1757 de 2015 define el control social como el derecho y deber de los ciudadanos a participar en la vigilancia de la gestión pública y de sus resultados."
      },
      {
        "id": "C",
        "texto": "Una demanda de nulidad electoral contra los directores de la entidad.",
        "explicacion": "Incorrecta. La solicitud ciudadana de información y vigilancia no constituye una acción judicial contenciosa electoral."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Ley 1757 de 2015 (Estatuto de Participación Ciudadana), Arts. 60 y 61",
    "citaNormativa": "«El control social es el derecho y el deber de los ciudadanos a participar de manera individual o a través de sus organizaciones en la vigilancia de la gestión pública y sus resultados.» (Ley 1757 de 2015, Art. 60)."
  },
  {
    "id": "dian_gp_pjs_02",
    "nivel": "Profesional",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Enfoque Diferencial en la Atención al Ciudadano",
    "caso": "La DIAN actualiza sus protocolos institucionales de atención al ciudadano en puntos de contacto para garantizar la priorización y asistencia humanitaria a poblaciones que, por razones de edad, género, grupo étnico o situación de discapacidad, requieren un trato afirmativo y adaptado.",
    "enunciado": "Al incorporar estas garantías en los canales de atención, la entidad está aplicando el principio de:",
    "opciones": [
      {
        "id": "A",
        "texto": "Homogeneización burocrática obligatoria.",
        "explicacion": "Incorrecta. La homogeneización ignora las barreras de acceso de poblaciones vulnerables."
      },
      {
        "id": "B",
        "texto": "Enfoque diferencial e interseccional, garantizando el principio constitucional de igualdad material y no discriminación.",
        "explicacion": "Correcta. El enfoque diferencial reconoce las particularidades y vulnerabilidades de ciertos grupos poblacionales para brindarles protección especial y trato ajustado a sus necesidades."
      },
      {
        "id": "C",
        "texto": "Exención general de tributos por condición social del solicitante.",
        "explicacion": "Incorrecta. El enfoque diferencial garantiza trato digno y facilitación de trámites, no exenciones tributarias sustantivas que solo puede conceder el Congreso por ley."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Constitución Política de 1991, Art. 13 y Directivas Presidenciales de Atención al Ciudadano",
    "citaNormativa": "«El Estado promoverá las condiciones para que la igualdad sea real y efectiva y adoptará medidas en favor de grupos discriminados o marginados.» (Constitución Política, Art. 13)."
  },
  {
    "id": "dian_gp_pjs_03",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Emplazamiento para Declarar y Omisos en Deberes Formales",
    "caso": "En una verificación del sistema de cuenta corriente tributaria, se detecta que un agente retenedor inscrito en el RUT omitió presentar la declaración mensual correspondiente al último periodo gravable por olvido involuntario de su contador.",
    "enunciado": "Una vez constatada la omisión del deber formal, la actuación oficial inicial que debe proferir la División de Fiscalización de la DIAN conforme al Estatuto Tributario es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Archivar el expediente si el contribuyente no registra bienes inmuebles a su nombre.",
        "explicacion": "Incorrecta. El deber de fiscalización es irrenunciable e independiente de la titularidad de inmuebles."
      },
      {
        "id": "B",
        "texto": "Proferir un Emplazamiento para Declarar, otorgando el término legal de un (1) mes para que cumpla con la obligación formal.",
        "explicacion": "Correcta. El artículo 715 del Estatuto Tributario dispone que a quienes incumplan la obligación de declarar se les enviará un emplazamiento para que declaren dentro del término de un mes."
      },
      {
        "id": "C",
        "texto": "Denunciarlo penalmente de forma directa ante la Fiscalía sin mediar ningún requerimiento previo.",
        "explicacion": "Incorrecta. Se requiere agotar el debido proceso administrativo de determinación y cobro antes de cualquier acción penal."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 715 (Emplazamiento para Declarar)",
    "citaNormativa": "«Quienes incumplan con la obligación de presentar las declaraciones tributarias, estando obligados a ello, serán emplazados por la Administración de Impuestos, para que lo hagan en el término perentorio de un (1) mes.» (Estatuto Tributario, Art. 715)."
  },
  {
    "id": "dian_gp_pjs_04",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Sanción de Extemporaneidad en Declaraciones sin Impuesto a Cargo",
    "caso": "El contribuyente emplazado procede a presentar voluntariamente su declaración extemporánea. Al liquidar el formulario, advierte que el saldo a pagar de impuesto es cero ($0). Su asesor contable le sugiere no liquidar ninguna sanción pecuniaria.",
    "enunciado": "De acuerdo con el artículo 641 y 642 del Estatuto Tributario, la orientación correcta que debe prevalecer es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Si no hay impuesto a pagar, la presentación extemporánea no genera sanción alguna.",
        "explicacion": "Incorrecta. La extemporaneidad se sanciona incluso sin impuesto a cargo, liquidándose sobre ingresos brutos, patrimonio o la sanción mínima legal."
      },
      {
        "id": "B",
        "texto": "Debe liquidar obligatoriamente la sanción de extemporaneidad correspondiente sobre los ingresos brutos, el patrimonio o la sanción mínima legal vigente (Art. 639 E.T.), aun cuando el impuesto a pagar sea cero.",
        "explicacion": "Correcta. El Estatuto Tributario establece bases subsidiarias (ingresos brutos, patrimonio líquido y sanción mínima) cuando no existe impuesto a cargo en declaraciones extemporáneas."
      },
      {
        "id": "C",
        "texto": "Debe esperar a que la DIAN le condone la extemporaneidad mediante memorial simple.",
        "explicacion": "Incorrecta. La DIAN no tiene facultades discrecionales para condonar sanciones legalmente causadas."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Arts. 639 y 641",
    "citaNormativa": "«Cuando en la declaración tributaria no resulte impuesto a cargo, la sanción por cada mes o fracción de mes calendario de retardo será equivalente al medio por ciento (0.5%) de los ingresos brutos... sin que en ningún caso pueda ser inferior a la sanción mínima.» (Estatuto Tributario, Art. 641)."
  },
  {
    "id": "dian_gp_pjs_05",
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
    "id": "dian_gp_pjs_06",
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
    "id": "dian_gp_pjs_07",
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
    "id": "dian_gp_pjs_08",
    "nivel": "Profesional",
    "ejeId": "constitucional_estado",
    "ejeNombre": "Derecho Constitucional y Estructura del Estado",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Responsabilidad Fiscal y Competencia de la Contraloría General de la República",
    "caso": "En una entidad pública se investiga la pérdida y malversación de recursos del erario por compras ficticias ejecutadas por un directivo. Se indaga qué organismo constitucional tiene la competencia exclusiva para adelantar el proceso de responsabilidad fiscal.",
    "enunciado": "De conformidad con el artículo 267 de la Constitución Política y la Ley 610 de 2000, la entidad competente para determinar la responsabilidad fiscal y resarcir el daño al erario es:",
    "opciones": [
      {
        "id": "A",
        "texto": "La Contraloría General de la República (o las contralorías territoriales según su ámbito).",
        "explicacion": "Correcta. La vigilancia de la gestión fiscal y la determinación de la responsabilidad fiscal de los servidores y particulares que manejen fondos públicos corresponde privativamente a la Contraloría."
      },
      {
        "id": "B",
        "texto": "La Defensoría del Pueblo mediante acción popular.",
        "explicacion": "Incorrecta. La Defensoría vela por los derechos humanos pero carece de función de control fiscal y cobro coactivo resarcitorio."
      },
      {
        "id": "C",
        "texto": "El Banco de la República a través de su Junta Directiva.",
        "explicacion": "Incorrecta. El Banco Central ejerce banca central y política monetaria, no control fiscal ni juicio de cuentas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política de 1991, Art. 267 y Ley 610 de 2000",
    "citaNormativa": "«El control fiscal es una función pública que ejercerá la Contraloría General de la República, la cual vigila la gestión fiscal de la administración y de los particulares o entidades que manejen fondos o bienes de la Nación.» (Constitución Política, Art. 267)."
  },
  {
    "id": "dian_gp_pjs_09",
    "nivel": "Profesional",
    "ejeId": "constitucional_estado",
    "ejeNombre": "Derecho Constitucional y Estructura del Estado",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Control Constitucional de Decretos Legislativos en Estados de Excepción",
    "caso": "El Presidente de la República declara el Estado de Conmoción Interior y expide una serie de decretos legislativos que adoptan medidas restrictivas del orden público.",
    "enunciado": "De acuerdo con el artículo 214 y 241 numeral 7 de la Constitución Política, estos decretos legislativos están sometidos a un control de constitucionalidad que es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Automático y posterior, a cargo de la Corte Constitucional, debiendo el Gobierno enviarlos al día siguiente de su expedición.",
        "explicacion": "Correcta. La Corte Constitucional ejerce un control automático, integral y posterior sobre todos los decretos legislativos dictados en estados de excepción."
      },
      {
        "id": "B",
        "texto": "Previo y facultativo, a cargo del Consejo de Estado mediante consulta de la Sala de Consulta y Servicio Civil.",
        "explicacion": "Incorrecta. El control no es previo ni a cargo del Consejo de Estado sino jurisdiccional automático de la Corte Constitucional."
      },
      {
        "id": "C",
        "texto": "Inexistente, ya que las facultades de excepción del Presidente son absolutas e inapelables.",
        "explicacion": "Incorrecta. En un Estado Social de Derecho el poder está sometido a pesos y contrapesos constitucionales estrictos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política de 1991, Art. 214 Num. 6 y Art. 241 Num. 7",
    "citaNormativa": "«El Gobierno enviará a la Corte Constitucional al día siguiente de su expedición los decretos legislativos que dicte en uso de las facultades de los estados de excepción, para que aquella decida definitivamente sobre su constitucionalidad.» (Constitución Política, Art. 214)."
  },
  {
    "id": "dian_gp_pjs_10",
    "nivel": "Profesional",
    "ejeId": "constitucional_estado",
    "ejeNombre": "Derecho Constitucional y Estructura del Estado",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Facultades Extraordinarias Presidenciales - Prohibición de Expedir Códigos",
    "caso": "El Congreso de la República aprueba una ley por mayoría absoluta que otorga facultades extraordinarias al Presidente de la República por 6 meses para expedir un nuevo Código General de Aduanas y Comercio Exterior.",
    "enunciado": "A la luz del artículo 150 numeral 10 de la Constitución Política de Colombia, dicha ley de facultades extraordinarias resulta:",
    "opciones": [
      {
        "id": "A",
        "texto": "Inconstitucional, porque la Constitución prohíbe de manera expresa conferir facultades extraordinarias al Ejecutivo para expedir códigos, leyes estatutarias u orgánicas, ni para decretar impuestos.",
        "explicacion": "Correcta. El artículo 150 numeral 10 prohíbe taxativamente delegar la expedición de códigos, leyes estatutarias, orgánicas o creación de impuestos mediante facultades extraordinarias."
      },
      {
        "id": "B",
        "texto": "Constitucional, porque se aprobó por mayoría calificada y por un término inferior a seis meses.",
        "explicacion": "Incorrecta. La prohibición material sobre expedición de códigos es absoluta e infranqueable independientemente de la mayoría obtenida."
      },
      {
        "id": "C",
        "texto": "Válida únicamente si el Presidente la ratifica mediante consulta popular posterior.",
        "explicacion": "Incorrecta. La incompetencia constitucional no se subsana con refrendaciones atípicas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política de 1991, Art. 150 Numeral 10",
    "citaNormativa": "«Estas facultades no se podrán conferir para expedir códigos, leyes estatutarias, orgánicas, ni las previstas en el numeral 20 del presente artículo, ni para decretar impuestos.» (Constitución Política, Art. 150, Num. 10)."
  },
  {
    "id": "dian_comp_pjs_01",
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
    "id": "dian_comp_pjs_02",
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
    "id": "dian_comp_pjs_03",
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
    "id": "dian_comp_pjs_04",
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
    "id": "dian_comp_pjs_05",
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
    "id": "dian_raz_log_01",
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
    "id": "dian_raz_log_02",
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
    "id": "dian_raz_log_03",
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
    "id": "dian_raz_log_04",
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
    "id": "dian_raz_log_05",
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
    "id": "dian_raz_log_06",
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
    "id": "dian_raz_log_07",
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
    "id": "dian_raz_log_08",
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
    "id": "dian_raz_log_09",
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
    "id": "dian_raz_log_10",
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
    "id": "dian_raz_verb_01",
    "nivel": "Profesional",
    "ejeId": "razonamiento_verbal_comprension",
    "ejeNombre": "Razonamiento Verbal y Comprensión Lectora",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Comprensión de Lectura - Coherencia Causal entre Afirmación y Explicación",
    "caso": "Analice el siguiente texto técnico:\n«La madera es un material anisotrópico con distinta elasticidad y resistencia según la dirección de deformación, encontrado como componente estructural principal del tronco de un árbol, PORQUE los árboles se caracterizan biológicamente por formar anillos concéntricos anuales correspondientes al crecimiento diferenciado de su biomasa vegetal según las estaciones climáticas».",
    "enunciado": "Respecto a la relación lógica y veracidad de los dos enunciados unidos por el conector causal 'PORQUE', señale la calificación correcta:",
    "opciones": [
      {
        "id": "A",
        "texto": "Tanto la afirmación como la explicación son científicamente verdaderas, y la explicación expone la causa directa de la condición afirmada.",
        "explicacion": "Correcta. La afirmación sobre el carácter anisotrópico de la madera es verdadera y la explicación del crecimiento anual concéntrico en anillos describe precisamente por qué las fibras tienen orientaciones y densidades distintas en cada eje anatómico."
      },
      {
        "id": "B",
        "texto": "La afirmación es verdadera pero la explicación es falsa en su totalidad.",
        "explicacion": "Incorrecta. La explicación del crecimiento vegetal estacional es un hecho botánico comprobado."
      },
      {
        "id": "C",
        "texto": "Tanto la afirmación como la explicación son premisas falsas.",
        "explicacion": "Incorrecta. Ambas proposiciones describen propiedades físicas y biológicas verídicas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Competencias Básicas CNSC - Comprensión y Asociación Lógica de Lectura",
    "citaNormativa": "«El análisis de consistencia causal evalúa la veracidad de la premisa principal y la pertinencia explicativa del conector lógico subordinante.»"
  },
  {
    "id": "dian_raz_verb_02",
    "nivel": "Profesional",
    "ejeId": "razonamiento_verbal_comprension",
    "ejeNombre": "Razonamiento Verbal y Comprensión Lectora",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Comprensión Lectora - Óptica y Reflexión de Ondas",
    "caso": "Considere el siguiente planteamiento:\n«El color de un objeto es la percepción visual producida en el ojo por la luz reflejada desde su superficie, PORQUE los cuerpos iluminados absorben selectivamente ciertas longitudes de onda del espectro electromagnético y reflejan o transmiten las restantes hacia el observador».",
    "enunciado": "De acuerdo con el análisis de comprensión y relación causal, se concluye que:",
    "opciones": [
      {
        "id": "A",
        "texto": "La afirmación es verdadera y la explicación también es verdadera, existiendo una relación causal directa entre ambas.",
        "explicacion": "Correcta. Ambas proposiciones son correctas según la física óptica y la absorción espectral selectiva es la causa física directa del color percibido."
      },
      {
        "id": "B",
        "texto": "La afirmación es verdadera pero la explicación es científicamente falsa.",
        "explicacion": "Incorrecta. La absorción y reflexión de ondas electromagnéticas es el fundamento físico de la teoría del color."
      },
      {
        "id": "C",
        "texto": "La afirmación es falsa y la explicación no guarda ninguna correspondencia temática.",
        "explicacion": "Incorrecta. Existe concordancia y veracidad integral en el postulado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Competencias Básicas CNSC - Razonamiento Verbal y Comprensión Textual",
    "citaNormativa": "«La comprensión lectora inferencial exige validar la consistencia científica de los enunciados y la pertinencia de la relación causa-efecto expresada en el texto.»"
  },
  {
    "id": "dian_raz_verb_03",
    "nivel": "Profesional",
    "ejeId": "razonamiento_verbal_comprension",
    "ejeNombre": "Razonamiento Verbal y Comprensión Lectora",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Precisión Léxica y Relaciones Semánticas (Sinonimia Contextual)",
    "caso": "En un informe técnico sobre comercio exterior y defensa de la legalidad económica se expresa: «El inspector aduanero actuó como un firme ABANDERADO de las normas de facilitación del comercio legítimo frente a las malas prácticas de contrabando».",
    "enunciado": "¿Cuál de las siguientes opciones constituye el sinónimo más adecuado y preciso de la palabra 'ABANDERADO' en el contexto de la frase?",
    "opciones": [
      {
        "id": "A",
        "texto": "Defensor o promotor activo.",
        "explicacion": "Correcta. En sentido figurado y formal, 'abanderado' designa a la persona que encabeza, promueve o defiende decididamente una causa, principio o doctrina."
      },
      {
        "id": "B",
        "texto": "Inesperado o casual.",
        "explicacion": "Incorrecta. Solo comparte terminación fónica (rima) pero carece por completo de relación semántica."
      },
      {
        "id": "C",
        "texto": "Inoportuno o extemporáneo.",
        "explicacion": "Incorrecta. Es un adjetivo peyorativo que desvirtúa el sentido encomiable de la expresión original."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Competencias Básicas CNSC - Aptitud Verbal y Semántica Contextual",
    "citaNormativa": "«La sinonimia contextual evalúa la capacidad de seleccionar términos equivalentes que preserven el registro formal y el sentido exacto del mensaje dentro del texto.»"
  },
  {
    "id": "dian_raz_verb_04",
    "nivel": "Profesional",
    "ejeId": "razonamiento_verbal_comprension",
    "ejeNombre": "Razonamiento Verbal y Comprensión Lectora",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Analogías Relacionales Proporcionales (Directas e Inversas)",
    "caso": "Considere la siguiente estructura analógica:\n«El avión supersónico Concorde es a VELOZ como la tortuga terrestre es a: _______».",
    "enunciado": "Para completar la relación analógica directa basada en la cualidad prototípica de velocidad y desplazamiento de cada sujeto, el término correspondiente es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Lenta.",
        "explicacion": "Correcta. La relación analógica compara a cada entidad con su cualidad motriz característica predominante en velocidad (avión Concorde -> veloz; tortuga -> lenta)."
      },
      {
        "id": "B",
        "texto": "Verde.",
        "explicacion": "Incorrecta. Verde alude a color y rompe el criterio analógico de desplazamiento y velocidad planteado en la premisa."
      },
      {
        "id": "C",
        "texto": "Rastrera.",
        "explicacion": "Incorrecta. No describe el ritmo de desplazamiento en la variable de velocidad analizada."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Competencias Básicas CNSC - Analogías Verbales y Razonamiento Relacional",
    "citaNormativa": "«Las analogías verbales evalúan la capacidad de identificar la relación lógica subyacente entre un par de conceptos y proyectarla congruentemente a un segundo par.»"
  },
  {
    "id": "dian_raz_verb_05",
    "nivel": "Profesional",
    "ejeId": "razonamiento_verbal_comprension",
    "ejeNombre": "Razonamiento Verbal y Comprensión Lectora",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inferencia Lógica y Conclusiones Válidas",
    "caso": "Lea atentamente las siguientes dos premisas:\n1. «Todas las resoluciones oficiales proferidas por la DIAN que determinen sanciones pecuniarias deben ser motivadas y notificadas legalmente al contribuyente para que adquieran eficacia jurídica».\n2. «La resolución No. 00452 impone una sanción por no enviar información exógena, pero nunca fue notificada al correo electrónico registrado en el RUT ni por edicto al contribuyente».",
    "enunciado": "De las anteriores premisas se infiere deductiva y válidamente que:",
    "opciones": [
      {
        "id": "A",
        "texto": "La resolución No. 00452 no ha adquirido eficacia jurídica ni firmeza para ser exigible en cobro coactivo.",
        "explicacion": "Correcta. Si la validez y eficacia de toda resolución sancionatoria requiere de su debida notificación, la falta de notificación impide que el acto surta efectos vinculantes frente al administrado."
      },
      {
        "id": "B",
        "texto": "El contribuyente ha perdido el derecho a interponer recursos por no haberse enterado a tiempo.",
        "explicacion": "Incorrecta. Los términos para interponer recursos solo corren a partir de la notificación debida en legal forma."
      },
      {
        "id": "C",
        "texto": "La sanción se duplica automáticamente por el paso del tiempo.",
        "explicacion": "Incorrecta. No existe tal presunción ni incremento legal por falta de notificación imputable a la administración."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Competencias Básicas CNSC - Silogismos Lógicos y Razonamiento Deductivo",
    "citaNormativa": "«En el razonamiento deductivo silogístico, la conclusión se deriva necesariamente de la relación lógica universal entre la premisa mayor y la premisa menor.»"
  },
  {
    "id": "dian_comp_ser_01",
    "nivel": "Profesional",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Política de Servicio DIAN - Lenguaje Claro y Principio de Facilitación",
    "caso": "Un ciudadano no especializado en temas contables se acerca angustiado a la ventanilla de la DIAN tras recibir un requerimiento ordinario redactado con terminología tributaria excesivamente hermética y citas de incisos legales complejos, sin comprender qué documentos específicos le están solicitando ni en qué plazo.",
    "enunciado": "De acuerdo con la Política de Servicio al Ciudadano de la DIAN y la directriz de 'Lenguaje Claro', la actuación adecuada que debe asumir el servidor público es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Pedirle al ciudadano que contrate un apoderado tributarista o contador público antes de recibirle cualquier explicación, indicándole que la DIAN no presta asesorías particulares.",
        "explicacion": "Incorrecta. Vulnera la Política de Servicio DIAN (compromiso de cercanía al ciudadano) y el principio de facilitación de los deberes fiscales."
      },
      {
        "id": "B",
        "texto": "Explicarle con empatía, en un lenguaje claro, sencillo y directo, cuál es el alcance del requerimiento, el listado concreto de soportes que debe allegar y las opciones que tiene para radicarlos presencial o virtualmente dentro del plazo legal.",
        "explicacion": "Correcta. La Política de Servicio al Ciudadano de la DIAN ordena 'generar comunicaciones completas y claras en lenguaje ciudadano, facilitando el entendimiento y el cumplimiento voluntario de las obligaciones TACI'."
      },
      {
        "id": "C",
        "texto": "Leerle de nuevo textualmente y en voz alta los artículos del Estatuto Tributario citados en el documento, exigiéndole que tome nota estricta.",
        "explicacion": "Incorrecta. No resuelve la barrera de comunicación ni cumple el mandato de traducción pedagógica del lenguaje institucional."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Política de Servicio al Ciudadano DIAN (Directriz de Lenguaje Claro) y Ley 2052 de 2020",
    "citaNormativa": "«Generar comunicaciones bajo el principio de información completa y clara, con divulgación de los trámites y servicios en lenguaje comprensible para centrar la gestión en el ciudadano.» (Política de Servicio al Ciudadano DIAN)."
  },
  {
    "id": "dian_comp_ser_02",
    "nivel": "Profesional",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Política de Servicio DIAN - Momentos de Verdad y Atención Preferencial Inclusiva",
    "caso": "En una jornada de alta congestión por vencimientos de declaraciones de renta, se presenta en el punto de contacto un adulto mayor con movilidad reducida solicitando apoyo para recuperar su firma electrónica y presentar su obligación formal antes del cierre bancario.",
    "enunciado": "Conforme a los protocolos de inclusión y momentos de verdad de la Política de Servicio de la DIAN, el funcionario de orientación debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Asignarle un turno general ordinario y pedirle que espere sentado en la sala común hasta que su número sea llamado en pantalla.",
        "explicacion": "Incorrecta. Desconoce el mandato constitucional y legal de atención prioritaria a adultos mayores y personas en condición de vulnerabilidad."
      },
      {
        "id": "B",
        "texto": "Activar de inmediato el módulo de atención preferencial, conducirlo a la ventanilla prioritaria o módulo accesible y brindarle acompañamiento técnico paso a paso para la generación de la firma y la radicación exitosa del trámite.",
        "explicacion": "Correcta. La Política de Servicio DIAN establece la obligación de 'garantizar mecanismos de inclusión y protocolos de atención prioritaria para adultos mayores y personas en condición de discapacidad'."
      },
      {
        "id": "C",
        "texto": "Informarle que por políticas de digitalización total la DIAN ya no atiende trámites presenciales de firma electrónica y que debe ingresar por internet desde su casa.",
        "explicacion": "Incorrecta. Imprime una barrera tecnológica insensible que vulnera el deber de facilitación y el derecho al acceso a la administración pública."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Política de Servicio al Ciudadano DIAN, Numeral 13 y Ley 1171 de 2007",
    "citaNormativa": "«Garantizar mecanismos de inclusión mediante software y herramientas que faciliten la gestión de trámites dirigida a adultos mayores, mujeres embarazadas y personas en condición de discapacidad.» (Política de Servicio DIAN)."
  },
  {
    "id": "dian_comp_ser_03",
    "nivel": "Profesional",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Política de Servicio DIAN - Promoción de la Autogestión Digital TACI",
    "caso": "Varios contribuyentes acuden reiteradamente a la sede física de la DIAN solo para solicitar copias impresas de su Registro Único Tributario (RUT), generando largas filas que congestionan las ventanillas de trámites complejos.",
    "enunciado": "Para fomentar la cultura de la autogestión digital conforme a la Política de Servicio Institucional, la estrategia que debe desplegar el equipo de servicio es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Habilitar quioscos digitales de autogestión con orientadores que enseñen a los usuarios a generar y descargar su RUT de manera autónoma desde el portal web o la App DIAN.",
        "explicacion": "Correcta. El numeral 10 de la Política de Servicio DIAN ordena 'incentivar y promover la autogestión de trámites a través de la implementación de servicios en línea y herramientas de ayuda que faciliten el cumplimiento'."
      },
      {
        "id": "B",
        "texto": "Prohibir la expedición del RUT en las oficinas y cerrar las puertas a quienes no tengan cita previa para trámites judiciales.",
        "explicacion": "Incorrecta. Genera hostilidad y desconfianza institucional en lugar de construir cultura ciudadana."
      },
      {
        "id": "C",
        "texto": "Cobrar una tarifa pecuniaria por cada copia impresa del RUT para desincentivar que la soliciten en sede.",
        "explicacion": "Incorrecta. La copia del RUT es un trámite gratuito garantizado por la ley antitrámites (Decreto Ley 019 de 2012)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Política de Servicio al Ciudadano DIAN, Numeral 10 y Decreto Ley 019 de 2012",
    "citaNormativa": "«Incentivar y promover la autogestión de trámites a través de servicios en línea y herramientas de ayuda que faciliten el cumplimiento voluntario de las obligaciones TACI.» (Política de Servicio DIAN)."
  },
  {
    "id": "dian_comp_ser_04",
    "nivel": "Profesional",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Política de Servicio DIAN - Acuerdos de Niveles de Servicio (ANS) en PQRS",
    "caso": "En el sistema de Peticiones, Quejas, Reclamos y Sugerencias (PQRS) de la Seccional se registra una alerta temprana por vencimiento inminente de términos legales en solicitudes ciudadanas de desembargos de cuentas bancarias.",
    "enunciado": "Frente al cumplimiento de los Acuerdos de Niveles de Servicio (ANS) y la promesa de valor institucional, la conducta idónea del gestor responsable es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Priorizar la verificación inmediata de los títulos pagados y proyectar con celeridad los oficios de levantamiento de medidas cautelares para cumplir el término legal y cesar la afectación económica al ciudadano.",
        "explicacion": "Correcta. Alineado con los Acuerdos de Niveles de Servicio (ANS), la diligencia y la protección efectiva de los derechos patrimoniales de los ciudadanos una vez extinguida la obligación."
      },
      {
        "id": "B",
        "texto": "Rechazar las solicitudes de plano argumentando exceso de trabajo para reiniciar los términos del reloj procesal.",
        "explicacion": "Incorrecta. Constituye una práctica abusiva e ilegal que acarrea investigaciones disciplinarias."
      },
      {
        "id": "C",
        "texto": "Esperar a que el ciudadano interponga una acción de tutela para que el juez dicte la orden.",
        "explicacion": "Incorrecta. Demuestra negligencia administrativa y satura innecesariamente a la Rama Judicial."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Política de Servicio al Ciudadano DIAN, Numeral 5 y Ley 1755 de 2015",
    "citaNormativa": "«Definir y cumplir la promesa de servicio para todos los trámites institucionales monitoreados a través de Acuerdos de Niveles de Servicio (ANS).» (Política de Servicio DIAN)."
  },
  {
    "id": "dian_comp_ser_05",
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
    "id": "dian_comp_ser_06",
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
    "id": "dian_comp_ser_07",
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
    "id": "dian_comp_ser_08",
    "nivel": "Profesional",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Derecho de Petición y Atención al Ciudadano",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Código de Integridad DIAN (Valor Respeto) - Escucha Activa y Manejo de Situaciones Difíciles",
    "caso": "Un comerciante visiblemente alterado y con tono de voz exaltado se acerca a reclamar porque sus cuentas bancarias fueron embargadas en un proceso de cobro administrativo coactivo, manifestando que los funcionarios de la DIAN abusan de su poder.",
    "enunciado": "Frente a este escenario de alta tensión emocional, la aplicación del valor del 'Respeto' y la comunicación asertiva exige que el servidor:",
    "opciones": [
      {
        "id": "A",
        "texto": "Gritarle al comerciante y ordenar a los vigilantes que lo desalojen inmediatamente de las instalaciones públicas.",
        "explicacion": "Incorrecta. Escala el conflicto, vulnera el respeto al ciudadano y daña gravemente la imagen institucional de la entidad."
      },
      {
        "id": "B",
        "texto": "Mantener la calma y un tono de voz firme pero sereno, escuchar con empatía su inconformidad sin interrumpir, explicarle con claridad el fundamento de la medida y orientarlo con profesionalismo sobre la ruta legal para subsanar el cobro o solicitar el desembargo.",
        "explicacion": "Correcta. El valor del Respeto y el protocolo de servicio implican reconocer la dignidad del ciudadano, desescalar el conflicto mediante la escucha activa y orientar técnicamente sin perder el equilibrio emocional."
      },
      {
        "id": "C",
        "texto": "Prometerle verbalmente que levantará el embargo de inmediato sin consultar el expediente para que se calme y se retire.",
        "explicacion": "Incorrecta. Constituye una conducta engañosa, irresponsable y contraria a la ley."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Código de Integridad DIAN (Valor Respeto) y Manual de Comunicación Efectiva DIAN",
    "citaNormativa": "«Valor Respeto: Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, procedencia o condición.» (Código de Integridad DIAN)."
  },
  {
    "id": "dian_comp_ser_09",
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
    "id": "dian_comp_ser_10",
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
    "id": "dian_comp_ser_11",
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
    "id": "dian_comp_ser_12",
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
    "id": "dian_comp_ser_13",
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
    "id": "dian_comp_ser_14",
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
    "id": "dian_comp_ser_15",
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
    "id": "dian_mis_trib_01",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Procedimiento de Cobro Coactivo - Mandamiento de Pago y Excepciones",
    "caso": "La División de Cobranzas de una Dirección Seccional de la DIAN libra Mandamiento de Pago contra una sociedad comercial por obligaciones pendientes de retención en la fuente e IVA contenidas en una Liquidación Oficial en firme. El representante legal es notificado personalmente.",
    "enunciado": "De conformidad con el artículo 830 del Estatuto Tributario, ¿cuál es el término legal perentorio que tiene el ejecutado para cancelar la deuda o proponer formalmente excepciones contra el mandamiento de pago?",
    "opciones": [
      {
        "id": "A",
        "texto": "Quince (15) días siguientes a la notificación del mandamiento de pago.",
        "explicacion": "Correcta. El artículo 830 del Estatuto Tributario dispone expresamente: 'Dentro de los quince (15) días siguientes a la notificación del mandamiento de pago, el deudor deberá cancelar el monto de la deuda con sus respectivos intereses, o proponer excepciones'."
      },
      {
        "id": "B",
        "texto": "Treinta (30) días hábiles siguientes al envío de la citación por correo físico.",
        "explicacion": "Incorrecta. Treinta días es el término general para responder requerimientos ordinarios o alegatos, no para proponer excepciones al mandamiento de pago."
      },
      {
        "id": "C",
        "texto": "Dos (2) meses calendario conforme al término general de la vía contenciosa administrativa.",
        "explicacion": "Incorrecta. Los dos meses aplican al recurso de reconsideración (Art. 720 E.T.), no al término estricto de excepciones de cobro coactivo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 830 (Término para pagar o proponer excepciones)",
    "citaNormativa": "«Dentro de los quince (15) días siguientes a la notificación del mandamiento de pago, el deudor deberá cancelar el monto de la deuda con sus respectivos intereses, o proponer mediante memorial las excepciones.» (Estatuto Tributario, Art. 830)."
  },
  {
    "id": "dian_mis_trib_02",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cobro Coactivo - Excepciones Taxativas Contra el Mandamiento de Pago",
    "caso": "En el mismo proceso de cobro, el abogado del ejecutado pretende alegar como excepción que la tarifa del impuesto liquidada originalmente en la liquidación oficial en firme era injusta e inconstitucional.",
    "enunciado": "De acuerdo con el artículo 831 del Estatuto Tributario, ¿cuál es el tratamiento jurídico que debe dar el ejecutor de la DIAN a este argumento?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptarla como excepción de fondo y suspender el proceso coactivo para recalcular la liquidación tributaria.",
        "explicacion": "Incorrecta. El ejecutor coactivo carece de competencia para reabrir la discusión de fondo de un título ejecutivo ejecutoriado."
      },
      {
        "id": "B",
        "texto": "Rechazarla de plano, ya que las excepciones contra el mandamiento de pago son taxativas y no procede discutir la legalidad sustancial del tributo contenido en un acto en firme, admitiéndose únicamente excepciones como pago efectivo, prescripción, falta de ejecutoria o pérdida de fuerza ejecutoria.",
        "explicacion": "Correcta. El artículo 831 del Estatuto Tributario consagra una lista taxativa de excepciones de carácter eminentemente formal y extintivo (pago, compensación, prescripción, falta de título o ejecutoria), prohibiendo revivir el debate sustantivo que debió ventilarse en la etapa de fiscalización y discusión."
      },
      {
        "id": "C",
        "texto": "Remitir el expediente a la Corte Suprema de Justicia para que fije la tarifa aplicable.",
        "explicacion": "Incorrecta. La jurisdicción ordinaria civil/laboral no tiene competencia en litigios tributarios coactivos."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 831 (Excepciones taxativas)",
    "citaNormativa": "«Contra el mandamiento de pago sólo procederán las siguientes excepciones: 1. El pago efectivo. 2. La existencia de acuerdo de pago. 3. La de falta de ejecutoria del título. 4. La pérdida de ejecutoria del título. 5. La prescripción de la acción de cobro...» (Estatuto Tributario, Art. 831)."
  },
  {
    "id": "dian_mis_trib_03",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Medidas Cautelares Previas en Cobro Coactivo y Límites de Inembargabilidad",
    "caso": "El funcionario ejecutor de la DIAN decreta el embargo preventivo de las cuentas de ahorro de una persona natural deudora de impuestos. La entidad bancaria embarga la totalidad de los saldos existentes, incluyendo una cuenta donde el saldo es inferior al límite legal de inembargabilidad para depósitos de ahorro.",
    "enunciado": "Conforme a las normas del Estatuto Tributario (Art. 837-1) y la circular básica jurídica financiera, ¿cuál es la regla de inembargabilidad que debe acatar el ejecutor y el banco en cuentas de ahorro de personas naturales?",
    "opciones": [
      {
        "id": "A",
        "texto": "No opera ningún límite de inembargabilidad cuando se trata de deudas tributarias con la DIAN, pudiendo embargarse el 100% de cualquier depósito sin importar su saldo.",
        "explicacion": "Incorrecta. El artículo 837-1 del Estatuto Tributario reconoce expresamente límites de inembargabilidad para cuentas de ahorro de personas naturales en protección al mínimo vital."
      },
      {
        "id": "B",
        "texto": "El límite de inembargabilidad para cuentas de ahorro de personas naturales establecido en la ley financiera aplica plenamente en los embargos coactivos ordenados por la DIAN (monto ajustado anualmente por la Superfinanciera, equivalente a 510 UVT), por lo cual los saldos inferiores a dicho tope no pueden ser congelados.",
        "explicacion": "Correcta. El artículo 837-1 del Estatuto Tributario establece un límite de inembargabilidad en cuentas de ahorros de personas naturales para garantizar el mínimo vital del contribuyente."
      },
      {
        "id": "C",
        "texto": "El límite de inembargabilidad solo ampara a los funcionarios públicos activos.",
        "explicacion": "Incorrecta. La protección legal cobija de manera general a todas las personas naturales titulares de cuentas de ahorro."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 837-1 (Límite de inembargabilidad en cuentas de ahorro)",
    "citaNormativa": "«Para los efectos del embargo a cuentas de ahorros, se aplicará el límite de inembargabilidad fijado por la Superintendencia Financiera para personas naturales... los saldos hasta dicho monto son inembargables.» (Estatuto Tributario, Art. 837-1)."
  },
  {
    "id": "dian_mis_trib_04",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Acuerdos o Facilidades de Pago (Art. 814 E.T.) y Garantías",
    "caso": "Un contribuyente con una deuda fiscal de $150.000.000 solicita una facilidad o acuerdo de pago a un plazo de 36 meses. Ofrece garantizar la obligación únicamente con su palabra y una letra de cambio sin aval bancario ni bienes hipotecables.",
    "enunciado": "De acuerdo con el artículo 814 del Estatuto Tributario y el Manual de Cobro Coactivo de la DIAN, para conceder un acuerdo de pago por un plazo superior a un año la administración debe exigir:",
    "opciones": [
      {
        "id": "A",
        "texto": "Garantías reales, bancarias o de compañías de seguros idóneas (hipotecas, prendas, pólizas) que respalden suficientemente el capital, los intereses y las sanciones adeudadas.",
        "explicacion": "Correcta. El artículo 814 del Estatuto Tributario exige que para plazos superiores a un año (hasta 5 años) el contribuyente constituya garantías personales, reales, bancarias o de seguros que aseguren el pago total de la acreencia fiscal."
      },
      {
        "id": "B",
        "texto": "Únicamente la fotocopia de la cédula de ciudadanía y una constancia laboral sin garantías.",
        "explicacion": "Incorrecta. La ley prohíbe otorgar facilidades de pago a mediano/largo plazo sin garantías patrimoniales que aseguren el erario público."
      },
      {
        "id": "C",
        "texto": "La entrega inmediata en dación de pago de los bienes muebles del contribuyente.",
        "explicacion": "Incorrecta. La dación de pago extingue la obligación y no es un acuerdo de tracto sucesivo con cuotas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario, Art. 814 (Facilidades para el pago)",
    "citaNormativa": "«El Subdirector de Cobranzas o los Directores Seccionales podrán conceder facilidades para el pago hasta por cinco (5) años... siempre que el deudor o un tercero a su nombre, constituya fideicomiso de garantía, ofrezca bienes para su embargo y secuestro, garantías personales, reales, bancarias o de compañías de seguros.» (Estatuto Tributario, Art. 814)."
  },
  {
    "id": "dian_mis_trib_05",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Requerimiento Especial y Término Perentorio de Respuesta (Art. 707 E.T.)",
    "caso": "La División de Fiscalización notifica en debida forma a un contribuyente un Requerimiento Especial proponiendo la modificación oficial de su declaración del impuesto sobre la renta por desconocimiento de costos improcedentes.",
    "enunciado": "De acuerdo con el artículo 707 del Estatuto Tributario, ¿cuál es el plazo legal que tiene el contribuyente para formular sus descargos, objetar las glosas y solicitar o aportar pruebas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Quince (15) días hábiles siguientes a la fecha de radicación.",
        "explicacion": "Incorrecta. Quince días es el término del emplazamiento para corregir o del mandamiento de pago, no del requerimiento especial."
      },
      {
        "id": "B",
        "texto": "Tres (3) meses siguientes a la fecha de notificación del requerimiento especial.",
        "explicacion": "Correcta. El artículo 707 del Estatuto Tributario consagra textualmente: 'Dentro de los tres (3) meses siguientes a la fecha de notificación del requerimiento especial, el contribuyente, responsable, agente retenedor o declarante, deberá formular por escrito sus objeciones'."
      },
      {
        "id": "C",
        "texto": "Seis (6) meses prorrogables a un año.",
        "explicacion": "Incorrecta. Seis meses es el término que tiene la DIAN para expedir la liquidación oficial de revisión posterior (Art. 710 E.T.), no el término del administrado."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 707 (Respuesta al requerimiento especial)",
    "citaNormativa": "«Dentro de los tres (3) meses siguientes a la fecha de notificación del requerimiento especial, el contribuyente, responsable, agente retenedor o declarante, deberá formular por escrito sus objeciones, solicitar pruebas y subsanar omisiones.» (Estatuto Tributario, Art. 707)."
  },
  {
    "id": "dian_mis_trib_06",
    "nivel": "Profesional",
    "ejeId": "procedimiento_tributario_sancionatorio",
    "ejeNombre": "Procedimiento Tributario y Sancionatorio",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Liquidación Oficial de Aforo y Sanción por No Declarar (Art. 717 E.T.)",
    "caso": "Agotado el plazo de un mes del emplazamiento para declarar sin que el contribuyente omiso presente su declaración tributaria, la DIAN procede a determinar oficialmente la obligación mediante acto administrativo definitivo.",
    "enunciado": "De acuerdo con los artículos 717 y 643 del Estatuto Tributario, el acto administrativo procedente y el porcentaje general de la sanción por no declarar en impuesto sobre la renta es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Resolución de Devolución con sanción de 5 UVT.",
        "explicacion": "Incorrecta. La devolución opera para saldos a favor, no para omisos."
      },
      {
        "id": "B",
        "texto": "Liquidación Oficial de Aforo, acompañada de la sanción por no declarar equivalente al 20% de los ingresos brutos del periodo o el 20% de los ingresos brutos del año anterior (lo que resulte mayor).",
        "explicacion": "Correcta. Conforme a los artículos 717 y 643 del Estatuto Tributario, una vez vencido el término del emplazamiento sin respuesta, la DIAN expide la Liquidación de Aforo dentro de los 5 años siguientes, aplicando la sanción por no declarar correspondiente al 20% de ingresos brutos."
      },
      {
        "id": "C",
        "texto": "Requerimiento Ordinario sin fijación de sanción pecuniaria.",
        "explicacion": "Incorrecta. El requerimiento ordinario es de trámite probatorio previo y no determina el impuesto de forma ejecutiva."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Arts. 717 y 643 (Liquidación de Aforo y Sanción por No Declarar)",
    "citaNormativa": "«Agotado el procedimiento del emplazamiento para declarar... la Administración de Impuestos podrá determinar la obligación tributaria al contribuyente mediante Liquidación de Aforo... En el caso de que la omisión se refiera a la declaración del impuesto sobre la renta, la sanción será del veinte por ciento (20%) de los ingresos brutos.» (Estatuto Tributario, Arts. 717 y 643)."
  },
  {
    "id": "dian_mis_trib_07",
    "nivel": "Profesional",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Tributarias y Deberes Formales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cláusula General Antielusión (Abuso en Materia Tributaria - Art. 869 E.T.)",
    "caso": "Una sociedad realiza una serie de actos y contratos artificiales encadenados que carecen por completo de propósito económico o comercial aparente más allá de erosionar la base gravable y evitar el pago del impuesto de renta.",
    "enunciado": "Con base en el artículo 869 del Estatuto Tributario (Cláusula General Antielusión), la facultad que tiene la DIAN en este caso es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar los contratos como válidos obligatoriamente respetando la autonomía de la voluntad privada sin importar la simulación fiscal.",
        "explicacion": "Incorrecta. Desconoce la potestad legal expresa de la administración tributaria para reconfigurar operaciones abusivas."
      },
      {
        "id": "B",
        "texto": "Recaracterizar o reconfigurar la sustancia económica de los actos que constituyan abuso en materia tributaria, desconociendo los efectos fiscales artificiosos y liquidando el impuesto real correspondiente como si se hubiese realizado la operación ordinaria, junto con los intereses y sanciones.",
        "explicacion": "Correcta. El artículo 869 faculta expresamente a la DIAN para recaracterizar y hacer prevalecer la sustancia económica sobre la forma jurídica artificial adoptada por los contribuyentes para eludir tributos."
      },
      {
        "id": "C",
        "texto": "Exigir la liquidación forzosa de la sociedad mercantil ante la Superintendencia de Sociedades.",
        "explicacion": "Incorrecta. La DIAN recaracteriza los efectos tributarios del acto, pero no disuelve sociedades mercantiles privadas."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Estatuto Tributario, Art. 869 (Abuso en materia tributaria)",
    "citaNormativa": "«La DIAN podrá recaracterizar o reconfigurar toda operación o serie de operaciones que constituyan abuso en materia tributaria y, consecuentemente, desconocer sus efectos, gravando la realidad económica subyacente.» (Estatuto Tributario, Art. 869)."
  },
  {
    "id": "dian_mis_adu_01",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Decreto Ley 0920 de 2023 - Tipología de Infracciones Aduaneras",
    "caso": "En el marco del nuevo régimen sancionatorio aduanero (Decreto Ley 0920 de 2023), se adelanta una investigación sancionatoria contra una agencia de aduanas que omitió liquidar los tributos aduaneros correspondientes mediante el uso deliberado de documentos de transporte falsos.",
    "enunciado": "De acuerdo con la clasificación del Decreto Ley 0920 de 2023, las infracciones aduaneras se categorizan legalmente según su gravedad en:",
    "opciones": [
      {
        "id": "A",
        "texto": "Leves, Graves y Gravísimas.",
        "explicacion": "Correcta. El Decreto Ley 0920 de 2023 estructura el régimen sancionatorio aduanero graduando las conductas ilícitas en infracciones leves, graves y gravísimas, asignando sanciones proporcionales de amonestación, multa o cancelación de la autorización."
      },
      {
        "id": "B",
        "texto": "Infracciones de Primera y Segunda Instancia exclusivamente.",
        "explicacion": "Incorrecta. Esta es una clasificación de competencia procesal y no sustantiva de la falta."
      },
      {
        "id": "C",
        "texto": "Faltas civiles y faltas mercantiles.",
        "explicacion": "Incorrecta. No corresponde a la dogmática sancionatoria aduanera del régimen colombiano."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 0920 de 2023, Art. 5 y Art. 6 (Graduación de Infracciones)",
    "citaNormativa": "«Las infracciones aduaneras se clasifican en leves, graves y gravísimas. La graduación de la sanción atenderá la gravedad de la falta, el impacto fiscal y la reincidencia.» (Decreto Ley 0920 de 2023)."
  },
  {
    "id": "dian_mis_adu_02",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Decreto Ley 0920 de 2023 - Procedimiento de Decomiso Ordinario y Directo",
    "caso": "En una diligencia de control aduanero posterior en una bodega comercial, funcionarios de la DIAN hallan un contenedor con mercancías textiles importadas que carecen de declaración de importación, factura comercial y documentos soporte que amparen su legal introducción al país.",
    "enunciado": "Conforme al Decreto Ley 0920 de 2023 y el régimen aduanero, la medida cautelar inmediata que debe adoptar la autoridad aduanera es:",
    "opciones": [
      {
        "id": "A",
        "texto": "La aprehensión material de las mercancías, como medida cautelar previa para dar inicio al procedimiento administrativo que resolverá sobre su decomiso a favor de la Nación.",
        "explicacion": "Correcta. La aprehensión es la medida cautelar mediante la cual la DIAN toma posesión física de mercancías respecto de las cuales se configura una causal de ilegalidad, garantizando el inicio del proceso de decomiso con respeto al debido proceso y término de descargos."
      },
      {
        "id": "B",
        "texto": "La venta inmediata en subasta pública el mismo día sin levantar acta de inventario.",
        "explicacion": "Incorrecta. Violaría flagrantemente el debido proceso y la garantía de defensa del poseedor."
      },
      {
        "id": "C",
        "texto": "El archivo del caso y devolución de las telas al comerciante bajo palabra.",
        "explicacion": "Incorrecta. Constituye omisión de denuncia y prevaricato por omisión de las funciones de control aduanero."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 0920 de 2023 (Medidas Cautelares y Decomiso)",
    "citaNormativa": "«La aprehensión es una medida cautelar mediante la cual la autoridad aduanera toma posesión de las mercancías en tanto se define su situación jurídica a través del proceso de decomiso.» (Decreto Ley 0920 de 2023)."
  },
  {
    "id": "dian_mis_adu_03",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Valoración Aduanera (Decisión 571 CAN / Acuerdo OMC) - Método del Valor de Transacción",
    "caso": "En la inspección aduanera de una importación de tecnología procedente de Japón, el declarante presenta la factura comercial declarando el valor pagado. El funcionario verifica la procedencia de aplicar el Método Principal de Valoración.",
    "enunciado": "De acuerdo con el Acuerdo sobre Valoración de la OMC y la Decisión 571 de la Comunidad Andina, el Primer Método y base fundamental de valoración aduanera es:",
    "opciones": [
      {
        "id": "A",
        "texto": "El Valor de Transacción de las mercancías importadas, es decir, el precio realmente pagado o por pagar por las mercancías cuando éstas se venden para su exportación al país de importación, ajustado con los elementos del artículo 8.",
        "explicacion": "Correcta. El artículo 1 del Acuerdo de Valoración de la OMC y la Decisión 571 de la CAN consagran que el Valor de Transacción es el primer método imperativo de valoración aduanera, siempre que cumpla con los requisitos legales y no existan restricciones insubsanables o vinculación que afecte el precio."
      },
      {
        "id": "B",
        "texto": "El precio fijado unilateralmente por la DIAN en tablas oficiales de precios estimados.",
        "explicacion": "Incorrecta. El Acuerdo de la OMC prohíbe el uso de valores mínimos o precios arbitrarios como base de valoración aduanera."
      },
      {
        "id": "C",
        "texto": "El costo promedio de producción nacional de bienes idénticos en Colombia.",
        "explicacion": "Incorrecta. El precio en el mercado interno del país importador está expresamente vetado como método primario de valoración aduanera."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo sobre Valoración de la OMC, Art. 1 y Decisión 571 de la Comunidad Andina",
    "citaNormativa": "«El valor en aduana de las mercancías importadas será el valor de transacción, es decir, el precio realmente pagado o por pagar por las mercancías cuando éstas se venden para su exportación al territorio aduanero.» (Acuerdo de Valoración OMC, Art. 1)."
  },
  {
    "id": "dian_mis_adu_04",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Ajustes al Valor de Transacción - Elementos del Artículo 8 del Acuerdo OMC",
    "caso": "Una empresa importa maquinaria y el contrato de compraventa estipula que el comprador debe pagar al vendedor en el exterior un canon o regalía del 5% por la patente de fabricación, condición sin la cual no se perfecciona la venta.",
    "enunciado": "Conforme al artículo 8 del Acuerdo de Valoración de la OMC y la normativa comunitaria andina, este pago por cánones o regalías:",
    "opciones": [
      {
        "id": "A",
        "texto": "Debe adicionarse al precio realmente pagado o por pagar para determinar el valor en aduana, siempre que corra a cargo del comprador y guarde relación directa con las mercancías importadas.",
        "explicacion": "Correcta. El artículo 8 del Acuerdo de la OMC ordena adicionar al valor de transacción los cánones y derechos de licencia relacionados con las mercancías objeto de valoración que el comprador esté obligado a pagar como condición de venta."
      },
      {
        "id": "B",
        "texto": "Debe deducirse del valor de factura por considerarse un gasto intangible exento.",
        "explicacion": "Incorrecta. No es deducible; por el contrario, integra la base gravable aduanera si está ligado a la importación."
      },
      {
        "id": "C",
        "texto": "Invalida totalmente el valor de factura, obligando a pasar al método de último recurso.",
        "explicacion": "Incorrecta. No invalida la transacción; simplemente se incorpora mediante el ajuste del artículo 8."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo de Valoración de la OMC, Art. 8 y Decisión 571 CAN",
    "citaNormativa": "«Para determinar el valor en aduana se añadirán al precio realmente pagado o por pagar: los cánones y derechos de licencia relacionados con las mercancías objeto de valoración que el comprador tenga que pagar directa o indirectamente como condición de venta.» (Acuerdo Valoración OMC, Art. 8)."
  },
  {
    "id": "dian_mis_adu_05",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Tráfico Postal y Envíos Urgentes (Mensajería Acelerada) - Requisitos Legales",
    "caso": "A través de una empresa de envíos urgentes (Courier) arriba al aeropuerto El Dorado un paquete declarado bajo la modalidad de tráfico postal y envíos urgentes. Al aforar el paquete, el inspector constata que el valor FOB es de USD 3.500 y contiene 12 unidades de relojes de alta gama.",
    "enunciado": "De acuerdo con el Decreto 1165 de 2019, ¿cuál es el impedimento legal que descalifica a este paquete de ingresar bajo la modalidad de tráfico postal y envíos urgentes?",
    "opciones": [
      {
        "id": "A",
        "texto": "Supera el valor máximo legal de USD 2.000 y excede el tope de seis (6) unidades de la misma clase, debiendo someterse a cambio de modalidad al régimen de importación ordinaria.",
        "explicacion": "Correcta. La modalidad de tráfico postal y envíos urgentes exige que el valor FOB no exceda de USD 2.000, su peso no supere los 50 kg y no contenga más de 6 unidades de la misma clase; si se incumplen estos topes, debe cambiarse de modalidad a importación ordinaria."
      },
      {
        "id": "B",
        "texto": "Ninguno, porque cualquier paquete que arribe por avión puede nacionalizarse con tarifa preferencial simplificada.",
        "explicacion": "Incorrecta. Desconoce los topes legales estrictos de la modalidad de mensajería expresa."
      },
      {
        "id": "C",
        "texto": "El único impedimento es que no venga rotulado en idioma inglés.",
        "explicacion": "Incorrecta. El idioma del rótulo no es la causal sustantiva aduanera de exclusión de modalidad."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019 (Régimen de Envíos Urgentes)",
    "citaNormativa": "«Bajo esta modalidad sólo se podrán importar paquetes que no excedan de cincuenta (50) kilogramos, cuyo valor FOB no exceda de dos mil dólares de los Estados Unidos de América (USD 2.000) y que no incluyan más de seis (6) unidades de la misma clase.» (Decreto 1165 de 2019)."
  },
  {
    "id": "dian_mis_adu_06",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Declaración Especial de Importación en Zonas Francas",
    "caso": "Un usuario industrial de bienes instalado en una Zona Franca permanente produce piezas metálicas utilizando materias primas nacionales y extranjeras, y procede a introducir los productos terminados al resto del Territorio Aduanero Nacional (TAN).",
    "enunciado": "De conformidad con el Decreto 1165 de 2019 y las resoluciones de la DIAN, el documento aduanero obligatorio para amparar la salida de los bienes de zona franca hacia el territorio aduanero nacional es:",
    "opciones": [
      {
        "id": "A",
        "texto": "La Declaración Especial de Importación (o Declaración de Importación según corresponda), liquidando los tributos aduaneros sobre el componente extranjero y las materias primas importadas incorporadas.",
        "explicacion": "Correcta. La introducción de bienes de zona franca al territorio aduanero nacional constituye una importación y se formaliza mediante la Declaración Especial de Importación o declaración ordinaria, liquidando los gravámenes sobre el componente importado."
      },
      {
        "id": "B",
        "texto": "Un simple remito o factura proforma interna sin intervención del sistema informático aduanero.",
        "explicacion": "Incorrecta. Vulnera la potestad aduanera y tipifica presunto contrabando o evasión aduanera."
      },
      {
        "id": "C",
        "texto": "Un pase de cortesía municipal expedido por la alcaldía local.",
        "explicacion": "Incorrecta. Las alcaldías no tienen potestad en el régimen aduanero de comercio exterior."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019 y Ley 1004 de 2005 (Operaciones desde Zona Franca)",
    "citaNormativa": "«La introducción al resto del territorio aduanero nacional de bienes procedentes de zona franca se considerará una importación y se someterá a las normas aduaneras mediante la Declaración Especial de Importación.» (Decreto 1165 de 2019)."
  },
  {
    "id": "dian_mis_adu_07",
    "nivel": "Profesional",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización Aduanera y Procedimiento",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Operadores Económicos Autorizados (OEA) - Beneficios y Confianza",
    "caso": "Una sociedad exportadora solicita su calificación y autorización ante la DIAN como Operador Económico Autorizado (OEA) en la cadena de suministro internacional.",
    "enunciado": "De acuerdo con el Decreto 3568 de 2011 y las normas aduaneras vigentes, ¿cuál es el principal beneficio y enfoque de la figura del OEA en el comercio exterior colombiano?",
    "opciones": [
      {
        "id": "A",
        "texto": "Gozar de facilitación aduanera con reducción significativa de inspecciones físicas y documentales, atención prioritaria en despachos y reconocimiento mutuo internacional, basado en un historial de alto cumplimiento y seguridad.",
        "explicacion": "Correcta. El OEA es una figura promovida por la Organización Mundial de Aduanas (OMA) que otorga tratamientos preferenciales, agilidad en trámites y reducción de inspecciones a empresas seguras y confiables."
      },
      {
        "id": "B",
        "texto": "Exención perpetua del 100% del pago de aranceles e IVA en todas sus importaciones futuras.",
        "explicacion": "Incorrecta. Ser OEA no confiere exención de tributos sustantivos, sino facilitación y celeridad de trámites operativos."
      },
      {
        "id": "C",
        "texto": "La facultad de ejercer como tribunal aduanero autónomo sin someterse a la DIAN.",
        "explicacion": "Incorrecta. El OEA es un usuario calificado bajo estricta supervisión de la autoridad fiscal y aduanera."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 3568 de 2011 y Marco SAFE de la Organización Mundial de Aduanas",
    "citaNormativa": "«El Operador Económico Autorizado (OEA) es una persona natural o jurídica establecida en Colombia que hace parte de la cadena de suministro internacional, considerada de confianza por la DIAN al garantizar estándares de seguridad y cumplimiento tributario y aduanero.» (Decreto 3568 de 2011)."
  },
  {
    "id": "dian_mis_cam_01",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Operaciones del Mercado Cambiario Obligatoriamente Canalizables (Res. Externa 1/2018)",
    "caso": "Una sociedad colombiana realiza transacciones internacionales y consulta a la DIAN sobre cuáles de sus operaciones deben canalizarse obligatoriamente a través de los Intermediarios del Mercado Cambiario (IMC) o de cuentas de compensación.",
    "enunciado": "De conformidad con el artículo 7º de la Resolución Externa No. 1 de 2018 de la Junta Directiva del Banco de la República, son operaciones obligatoriamente canalizables a través del mercado cambiario:",
    "opciones": [
      {
        "id": "A",
        "texto": "La compraventa de divisas entre particulares turistas en efectivo en aeropuertos.",
        "explicacion": "Incorrecta. Las transacciones menores de turistas pertenecen al mercado no regulado o libre y no son obligatoriamente canalizables por el mercado formal."
      },
      {
        "id": "B",
        "texto": "Importaciones y exportaciones de bienes, operaciones de endeudamiento externo, inversiones internacionales de capital y avales y garantías en moneda extranjera.",
        "explicacion": "Correcta. El artículo 7º de la Res. Externa 1 de 2018 enumera taxativamente las operaciones que deben canalizarse obligatoriamente por el mercado cambiario formal: importación y exportación de bienes, deuda externa, inversión extranjera y garantías en divisas."
      },
      {
        "id": "C",
        "texto": "Únicamente el pago de suscripciones a revistas culturales del exterior.",
        "explicacion": "Incorrecta. Dicha operación no integra la lista obligatoria del mercado cambiario formal."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Resolución Externa No. 1 de 2018 Banco de la República, Art. 7",
    "citaNormativa": "«Deberán canalizarse obligatoriamente a través del mercado cambiario: 1. Importaciones y exportaciones de bienes. 2. Operaciones de endeudamiento externo. 3. Inversiones internacionales de capital...» (Resolución Externa 1 de 2018, Art. 7)."
  },
  {
    "id": "dian_mis_cam_02",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cuentas de Compensación - Registro y Reporte ante el Banco de la República",
    "caso": "Una empresa colombiana abre una cuenta corriente bancaria en Estados Unidos a través de la cual canaliza ingresos por exportaciones y pagos de importaciones de bienes.",
    "enunciado": "De conformidad con la Circular Reglamentaria Externa DCIN-83, para que dicha cuenta opere legalmente bajo el mecanismo de compensación, la empresa debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Registrarla formalmente ante el Banco de la República como 'Cuenta de Compensación' dentro del mes siguiente a su apertura o a la primera operación cambiaria obligatoria, y transmitir mensualmente el reporte de movimientos en el formulario oficial.",
        "explicacion": "Correcta. La Circular DCIN-83 del Banco de la República dispone que toda cuenta en el exterior que canalice operaciones obligatorias debe registrarse como cuenta de compensación y reportar periódicamente sus extractos y declaraciones de cambio."
      },
      {
        "id": "B",
        "texto": "Ocultar la existencia de la cuenta bancaria en el exterior para no pagar el impuesto al patrimonio.",
        "explicacion": "Incorrecta. Tipifica omisión de activos e infracción grave cambiaria y tributaria."
      },
      {
        "id": "C",
        "texto": "Pedir permiso previo y presencial al Ministerio de Relaciones Exteriores.",
        "explicacion": "Incorrecta. La competencia cambiaria en materia de cuentas de compensación radica en el Banco de la República y su fiscalización en la DIAN."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Circular Reglamentaria Externa DCIN-83 Banco de la República y Res. Externa 1 de 2018",
    "citaNormativa": "«Los residentes que utilicen cuentas bancarias en el exterior para canalizar operaciones del mercado cambiario deberán registrarlas ante el Banco de la República bajo el mecanismo de compensación y reportar sus movimientos.» (Circular DCIN-83)."
  },
  {
    "id": "dian_mis_cam_03",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Régimen Sancionatorio Cambiario (Decreto Ley 2245 de 2011) - Competencia DIAN",
    "caso": "En una auditoría cambiaria, la DIAN constata que un importador canalizó a través de un intermediario cambiario el pago de una importación de repuestos industriales por un valor de USD 100.000, pero la Declaración de Importación definitiva solo amparaba mercancías por valor de USD 20.000, sin existir justificación legal para el giro en exceso.",
    "enunciado": "Bajo el régimen sancionatorio cambiario administrado por la DIAN (Decreto Ley 2245 de 2011), esta conducta se tipifica como:",
    "opciones": [
      {
        "id": "A",
        "texto": "Infracción cambiaria por canalizar divisas por un monto superior al valor real de la mercancía importada (sobrefacturación o giro indebido al exterior), sancionable con multa pecuniaria liquidada sobre el valor de la operación indebida.",
        "explicacion": "Correcta. El Decreto Ley 2245 de 2011 tipifica y sanciona expresamente la canalización de divisas en exceso de las importaciones legalmente introducidas, protegiendo al país contra la fuga ilícita de capitales y el contrabando técnico."
      },
      {
        "id": "B",
        "texto": "Un error contable menor no sujeto a ningún tipo de investigación ni sanción por parte del Estado.",
        "explicacion": "Incorrecta. La sobrefacturación cambiaria es una infracción grave que atenta contra el orden público económico nacional."
      },
      {
        "id": "C",
        "texto": "Una donación unilateral libre de impuestos avalada por tratados internacionales.",
        "explicacion": "Incorrecta. Los giros por importaciones deben coincidir documentalmente con las mercancías desaduanadas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 2245 de 2011 (Régimen Sancionatorio Cambiario DIAN)",
    "citaNormativa": "«Infracciones cambiarias por operaciones de comercio exterior: Canalizar a través del mercado cambiario un monto superior al valor real de las mercancías importadas acarreará sanción de multa sobre el monto en exceso canalizado.» (Decreto Ley 2245 de 2011)."
  },
  {
    "id": "dian_mis_cam_04",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Decreto Ley 2245 de 2011 - Caducidad de la Acción Sancionatoria Cambiaria",
    "caso": "La Subdirección de Fiscalización Cambiaria de la DIAN proyecta un pliego de cargos contra un exportador por no canalizar las divisas de una exportación realizada hace más de 6 años, periodo durante el cual la entidad no notificó ningún requerimiento especial aduanero o acto interruptor.",
    "enunciado": "De acuerdo con el artículo 7º del Decreto Ley 2245 de 2011, ¿cuál es el término de caducidad de la facultad sancionatoria de la DIAN en materia de control cambiario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dos (2) años contados a partir de la radicación de la declaración de renta.",
        "explicacion": "Incorrecta. No coincide con el término de caducidad cambiaria fijado por el Decreto Ley 2245."
      },
      {
        "id": "B",
        "texto": "Cinco (5) años contados a partir de la comisión de la infracción o desde el momento en que cesó la conducta infractora.",
        "explicacion": "Correcta. El artículo 7º del Decreto Ley 2245 de 2011 establece expresamente que la facultad sancionatoria cambiaria de la DIAN caduca en el término de cinco (5) años contados desde la ocurrencia de los hechos constitutivos de infracción."
      },
      {
        "id": "C",
        "texto": "Diez (10) años imprescriptibles en favor de la seguridad fiscal del Estado.",
        "explicacion": "Incorrecta. En el régimen sancionatorio administrativo cambiario rige el principio de caducidad perentoria de 5 años."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Decreto Ley 2245 de 2011, Art. 7 (Caducidad de la acción sancionatoria)",
    "citaNormativa": "«La facultad sancionatoria de la DIAN en materia de infracciones cambiarias caduca en el término de cinco (5) años, contados a partir de la fecha en que se consumó la infracción o cesó la conducta.» (Decreto Ley 2245 de 2011, Art. 7)."
  },
  {
    "id": "dian_mis_cam_05",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Declaración de Cambio por Exportación de Bienes (Formulario No. 2 DCIN-83)",
    "caso": "Un productor nacional exporta café a Alemania y recibe el reintegro de las divisas en moneda extranjera a través de su banco comercial autorizado como Intermediario del Mercado Cambiario (IMC).",
    "enunciado": "De acuerdo con el procedimiento cambiario de la Circular Reglamentaria Externa DCIN-83, el documento de cambio que se transmite para legalizar el ingreso de las divisas por exportación es:",
    "opciones": [
      {
        "id": "A",
        "texto": "La Declaración de Cambio por Exportación de Bienes (anterior Formulario No. 2), relacionando el código de concepto de reintegro de divisas y el número del Documento de Transporte o DEX correspondiente.",
        "explicacion": "Correcta. En la normativa cambiaria colombiana, el reintegro de divisas por exportación de bienes se legaliza formalmente mediante la Declaración de Cambio correspondiente (Formulario 2 DCIN-83), vinculando las divisas a los DEX tramitados ante la DIAN."
      },
      {
        "id": "B",
        "texto": "Un cheque en moneda nacional consignado en taquilla ordinaria sin reporte cambiario.",
        "explicacion": "Incorrecta. Las divisas de exportación obligatoriamente canalizables no pueden eludir la declaración de cambio formal ante el Banco de la República."
      },
      {
        "id": "C",
        "texto": "La factura de servicios públicos domiciliarios del exportador.",
        "explicacion": "Incorrecta. Carece de cualquier pertinencia técnica aduanera o cambiaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Circular Reglamentaria Externa DCIN-83 y Res. Externa 1 de 2018 Banco de la República",
    "citaNormativa": "«Los exportadores deberán suministrar a los intermediarios del mercado cambiario la información de los datos mínimos de las operaciones de cambio por exportación de bienes (Declaración de Cambio).» (Circular DCIN-83)."
  },
  {
    "id": "dian_mis_cam_06",
    "nivel": "Profesional",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Obligación de Conservación de Documentos Soporte Cambiarios",
    "caso": "Una sociedad comercial es requerida por la DIAN para que exhiba los documentos soporte de sus operaciones de endeudamiento externo y declaraciones de cambio efectuadas en los últimos tres años. El gerente alega que la empresa destruyó los archivos porque el banco ya tenía los registros digitales.",
    "enunciado": "De acuerdo con el régimen cambiario del Banco de la República y el Decreto Ley 2245 de 2011, ¿cuál es el deber legal de conservación probatoria que recae sobre el usuario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Los residentes y no residentes están obligados a conservar los documentos soporte que acrediten el monto, características y condiciones de las operaciones de cambio durante el término legal de caducidad (cinco años), debiendo exhibirlos a la DIAN cuando ésta lo requiera.",
        "explicacion": "Correcta. La Circular DCIN-83 y el Decreto Ley 2245 de 2011 obligan al usuario cambiario a conservar íntegramente los soportes documentales de cada operación por un término mínimo de cinco (5) años a disposición de la autoridad de control."
      },
      {
        "id": "B",
        "texto": "Los documentos pueden desecharse a los treinta (30) días de ejecutada la transacción bancaria.",
        "explicacion": "Incorrecta. La falta de conservación probatoria acarrea sanciones cambiarias directas por obstaculización del control."
      },
      {
        "id": "C",
        "texto": "Solo las entidades públicas tienen la obligación de guardar comprobantes cambiarios.",
        "explicacion": "Incorrecta. La obligación vincula por igual a personas naturales, jurídicas y sujetos públicos o privados que operen en el mercado de divisas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Resolución Externa 1 de 2018 (Art. 9) y Decreto Ley 2245 de 2011",
    "citaNormativa": "«Los residentes que efectúen operaciones de cambio deberán conservar los documentos que acrediten el cumplimiento de las obligaciones cambiarias durante el término de caducidad de la acción sancionatoria (5 años).» (Régimen Cambiario DIAN / BanRep)."
  },
  {
    "id": "dian_cbo_disc_01",
    "nivel": "Profesional",
    "ejeId": "disciplinario_servidor_publico",
    "ejeNombre": "Régimen Disciplinario del Servidor Público",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Presunción de Inocencia en el Proceso Disciplinario",
    "caso": "A un servidor de la DIAN se le formula pliego de cargos disciplinarios por una supuesta demora injustificada en el reparto de expedientes de fiscalización. Durante la audiencia, el quejoso exige que se sancione inmediatamente al funcionario argumentando que en el ámbito disciplinario el investigado debe demostrar su inocencia desde el inicio.",
    "enunciado": "De acuerdo con el Código General Disciplinario (Ley 1952 de 2019) y los principios constitucionales del debido proceso, ¿cuál es el postulado probatorio rector aplicable?",
    "opciones": [
      {
        "id": "A",
        "texto": "El servidor público se presume inocente mientras no se declare su responsabilidad en fallo disciplinario debidamente ejecutoriado, correspondiendo la carga de la prueba al Estado.",
        "explicacion": "Correcta. La presunción de inocencia es una garantía fundamental del derecho disciplinario: a quien se atribuya una falta disciplinaria se presume inocente hasta tanto se demuestre su culpabilidad en decisión en firme con plenas garantías probatorias."
      },
      {
        "id": "B",
        "texto": "El investigado se presume culpable de manera preventiva hasta que aporte constancias de paz y salvo emitidas por la Procuraduría.",
        "explicacion": "Incorrecta. Invertir la carga de la prueba desconoce abiertamente el artículo 29 de la Constitución Política y el Código General Disciplinario."
      },
      {
        "id": "C",
        "texto": "La presunción de inocencia solo ampara a los servidores de carrera administrativa, excluyendo a los nombrados en provisionalidad.",
        "explicacion": "Incorrecta. Las garantías del debido proceso disciplinario son universales e iguales para todos los servidores públicos sin distinción de vinculación."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019, Art. 10 (Presunción de Inocencia)",
    "citaNormativa": "«A quien se atribuya una falta disciplinaria se presume inocente mientras no se declare su responsabilidad en fallo ejecutoriado. Toda duda razonable se resolverá a favor del investigado cuando no haya modo de eliminarla.» (Ley 1952 de 2019, Art. 10)."
  },
  {
    "id": "dian_cbo_disc_02",
    "nivel": "Profesional",
    "ejeId": "disciplinario_servidor_publico",
    "ejeNombre": "Régimen Disciplinario del Servidor Público",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Principio de In Dubio Pro Disciplinado (Duda Razonable)",
    "caso": "Al momento de proferir el fallo disciplinario de fondo, la autoridad evaluadora constata que las pruebas recaudadas arrojan conclusiones contradictorias respecto a si un funcionario filtró o no un borrador de resolución interna, sin que exista manera objetiva de despejar la duda razonable.",
    "enunciado": "En aplicación del principio de 'In dubio pro disciplinado', la decisión que en derecho corresponde adoptar es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Resolver la duda en favor del investigado y decretar la absolución de los cargos disciplinarios formulados.",
        "explicacion": "Correcta. En el régimen disciplinario, la duda razonable no superable mediante pruebas legales debe resolverse obligatoriamente a favor del disciplinado (in dubio pro disciplinado)."
      },
      {
        "id": "B",
        "texto": "Imponer una sanción atenuada provisional de amonestación escrita preventiva.",
        "explicacion": "Incorrecta. No se puede sancionar sin certeza probatoria de la responsabilidad disciplinaria."
      },
      {
        "id": "C",
        "texto": "Resolver en contra del investigado en defensa de la moralidad pública y la seguridad institucional.",
        "explicacion": "Incorrecta. Viola la garantía constitucional del debido proceso y la presunción de inocencia."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019, Art. 10 (In dubio pro disciplinado)",
    "citaNormativa": "«Toda duda razonable se resolverá a favor del investigado cuando no haya modo de eliminarla.» (Ley 1952 de 2019, Art. 10)."
  },
  {
    "id": "dian_cbo_disc_03",
    "nivel": "Profesional",
    "ejeId": "disciplinario_servidor_publico",
    "ejeNombre": "Régimen Disciplinario del Servidor Público",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Registro y Vigencia de Antecedentes Disciplinarios en la Procuraduría",
    "caso": "Un aspirante que superó las pruebas de la convocatoria pública solicita ante la Procuraduría General de la Nación su certificado ordinario de antecedentes disciplinarios para posesionarse en el empleo público.",
    "enunciado": "De acuerdo con el Código General Disciplinario, ¿cuál es el término de vigencia de las anotaciones que deben figurar en las certificaciones ordinarias de antecedentes disciplinarios?",
    "opciones": [
      {
        "id": "A",
        "texto": "Deberán contener las anotaciones de providencias sancionatorias ejecutoriadas dentro de los cinco (5) años anteriores a su expedición.",
        "explicacion": "Correcta. La ley disciplinaria establece que las certificaciones ordinarias de antecedentes expedidas por la Procuraduría reportan las sanciones ejecutoriadas dentro de los últimos 5 años contados hacia atrás desde su emisión."
      },
      {
        "id": "B",
        "texto": "Todas las anotaciones históricas de por vida sin límite temporal.",
        "explicacion": "Incorrecta. La certificación ordinaria tiene un límite de registro temporal de 5 años para garantizar el derecho al olvido y la rehabilitación laboral."
      },
      {
        "id": "C",
        "texto": "Únicamente las sanciones que impliquen destitución ocurridas en los últimos seis (6) meses.",
        "explicacion": "Incorrecta. Abarca todas las sanciones ejecutoriadas en el quinquenio legal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019 (Registro y Certificación de Antecedentes Disciplinarios)",
    "citaNormativa": "«Las certificaciones ordinarias de antecedentes disciplinarios contendrán las anotaciones de providencias ejecutoriadas dentro de los cinco (5) años anteriores a su expedición.» (Código Disciplinario / PGN)."
  },
  {
    "id": "dian_cbo_disc_04",
    "nivel": "Profesional",
    "ejeId": "disciplinario_servidor_publico",
    "ejeNombre": "Régimen Disciplinario del Servidor Público",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Poder Preferente de la Procuraduría General de la Nación",
    "caso": "La Oficina de Control Interno Disciplinario de la DIAN adelanta una investigación formal contra un directivo seccional por presunto acoso laboral e irregularidades contractuales. La Procuraduría General de la Nación notifica un auto asumiendo directamente la investigación.",
    "enunciado": "En ejercicio del 'Poder Preferente' consagrado en el artículo 277 de la Constitución y la ley disciplinaria, la actuación que debe realizar la DIAN es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Suspender de inmediato su actuación y remitir las diligencias originales completas a la Procuraduría General de la Nación, perdiendo la competencia interna sobre el asunto.",
        "explicacion": "Correcta. El poder preferente del Ministerio Público faculta a la Procuraduría para desplazar en cualquier momento a las oficinas de control disciplinario interno y asumir de manera exclusiva la investigación y juzgamiento."
      },
      {
        "id": "B",
        "texto": "Rechazar la solicitud de la Procuraduría alegando autonomía presupuestal y administrativa de la DIAN.",
        "explicacion": "Incorrecta. El poder preferente de la Procuraduría es de orden constitucional y vinculante para todos los entes del Estado."
      },
      {
        "id": "C",
        "texto": "Continuar tramitando una investigación paralela hasta proferir un fallo independiente.",
        "explicacion": "Incorrecta. Produciría una flagrante vulneración del principio non bis in idem y nulidad de lo actuado por falta de competencia."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política de 1991, Art. 277 Num. 6 y Ley 1952 de 2019",
    "citaNormativa": "«El Procurador General de la Nación ejerce el poder disciplinario preferente, en virtud del cual puede avocar el conocimiento de cualquier investigación disciplinaria que se adelante en las entidades públicas.» (Constitución Política, Art. 277)."
  },
  {
    "id": "dian_cbo_cont_01",
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
    "id": "dian_cbo_cont_02",
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
    "id": "dian_cbo_cont_03",
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
    "id": "dian_cbo_cont_04",
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
    "id": "dian_cbo_mipg_01",
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
    "id": "dian_cbo_mipg_02",
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
    "id": "dian_cbo_mipg_03",
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
    "id": "dian_cbo_mipg_04",
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
    "id": "dian_cbo_arch_01",
    "nivel": "Profesional",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Ley General de Archivos (Ley 594 de 2000) - Instrumentos Archivísticos Clave",
    "caso": "En una auditoría de gestión documental en la DIAN, se evalúa el cumplimiento de los instrumentos archivísticos oficiales que regulan la retención, disposición final y clasificación de expedientes tributarios.",
    "enunciado": "De acuerdo con la Ley 594 de 2000 y los acuerdos del Archivo General de la Nación (AGN), ¿cuál es el instrumento archivístico técnico que fija el tiempo de permanencia de las series documentales en cada etapa del ciclo vital de los archivos?",
    "opciones": [
      {
        "id": "A",
        "texto": "La Tabla de Retención Documental (TRD).",
        "explicacion": "Correcta. La Tabla de Retención Documental (TRD) es el listado de series y subseries documentales con sus correspondientes tipos, a las cuales se les asigna el tiempo de permanencia en cada etapa del ciclo vital del archivo (gestión, central e histórico) y su disposición final (conservación total, eliminación, microfilmación/digitalización o selección)."
      },
      {
        "id": "B",
        "texto": "El libro de registro mercantil de la Cámara de Comercio.",
        "explicacion": "Incorrecta. Es un registro comercial privado ajeno a la gestión documental interna de la entidad estatal."
      },
      {
        "id": "C",
        "texto": "El recibo de caja menor.",
        "explicacion": "Incorrecta. Es un comprobante contable individual sin carácter de instrumento archivístico estructural."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 594 de 2000 (Ley General de Archivos) y Acuerdo 004 de 2019 AGN",
    "citaNormativa": "«Las Tablas de Retención Documental (TRD) son el instrumento archivístico que establece las series documentales producidas o recibidas por una entidad, determinando sus tiempos de retención en cada fase del archivo y su disposición final.» (Ley 594 de 2000 / AGN)."
  },
  {
    "id": "dian_cbo_arch_02",
    "nivel": "Profesional",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Ciclo Vital de los Documentos y Tipos de Archivos",
    "caso": "Un funcionario debe trasladar expedientes de declaraciones de renta que ya cumplieron su periodo de firmeza procesal y consulta activa en la oficina de origen, pero que por su valor legal y fiscal deben conservarse en custodia central durante 10 años adicionales antes de su valoración histórica final.",
    "enunciado": "Conforme a la Ley 594 de 2000, este traslado documental se realiza desde:",
    "opciones": [
      {
        "id": "A",
        "texto": "El Archivo de Gestión hacia el Archivo Central de la entidad.",
        "explicacion": "Correcta. En el ciclo vital archivístico, los documentos activos de uso frecuente permanecen en el Archivo de Gestión de cada oficina y, una vez culminada su vigencia inmediata, se realiza la transferencia primaria hacia el Archivo Central para su custodia precaucional."
      },
      {
        "id": "B",
        "texto": "El Archivo Histórico hacia una bodega de reciclaje directo.",
        "explicacion": "Incorrecta. Los documentos del archivo histórico son de conservación total y permanente por su valor testimonial y patrimonial, y no pueden reciclarse ni eliminarse."
      },
      {
        "id": "C",
        "texto": "El casillero personal del funcionario a su domicilio particular.",
        "explicacion": "Incorrecta. Constituye una falta gravísima de sustracción y ocultamiento indebido de documentos públicos oficiales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 594 de 2000, Art. 23 (Ciclo Vital del Documento)",
    "citaNormativa": "«Ciclo vital del documento: Archivo de gestión (trámite activo), Archivo central (consulta precaucional posterior) y Archivo histórico (conservación permanente por valor científico o cultural).» (Ley 594 de 2000)."
  },
  {
    "id": "dian_cbo_arch_03",
    "nivel": "Profesional",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Expediente Electrónico y Firma Digital (Ley 527 de 1999 / Decreto 2609 de 2012)",
    "caso": "La DIAN expide liquidaciones oficiales de aforo mediante actos administrativos firmados electrónicamente por el Director Seccional. Un contribuyente impugna el acto alegando que al no estar impreso en papel membrete ni llevar firma manuscrita con tinta húmeda carece de validez jurídica.",
    "enunciado": "A la luz de la Ley 527 de 1999 y las normas de gobierno digital (DUR 1083 de 2015), ¿cuál es la validez jurídica del documento y la firma electrónica oficial?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tiene idéntica validez jurídica, fuerza probatoria y eficacia vinculante que un documento manuscrito en papel, cumpliendo los requisitos de autenticidad, integridad y disponibilidad.",
        "explicacion": "Correcta. La Ley 527 de 1999 consagra el principio de equivalencia funcional: los mensajes de datos y documentos electrónicos con firma electrónica o digital tienen los mismos efectos jurídicos que los documentos suscritos en papel físico."
      },
      {
        "id": "B",
        "texto": "Solo tiene valor informativo secundario pero no produce efectos obligatorios ni presta mérito ejecutivo.",
        "explicacion": "Incorrecta. Desconoce la validez probatoria plena otorgada por la ley a los documentos electrónicos del Estado."
      },
      {
        "id": "C",
        "texto": "Requiere obligatoriamente ser ratificado por un notario público con sello en tinta para ser válido.",
        "explicacion": "Incorrecta. Los actos electrónicos emitidos por autoridades públicas no requieren autenticación notarial."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 527 de 1999 (Comercio Electrónico y Firmas Digitales) y Decreto 2609 de 2012",
    "citaNormativa": "«Principio de equivalencia funcional: Cuando cualquier norma requiera que la información conste por escrito o esté firmada, ese requisito quedará satisfecho con un mensaje de datos si se utiliza una firma electrónica o digital confiable.» (Ley 527 de 1999)."
  },
  {
    "id": "dian_cbo_tran_01",
    "nivel": "Profesional",
    "ejeId": "transparencia_acceso_informacion",
    "ejeNombre": "Transparencia y Acceso a la Información Pública",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Ley de Transparencia (Ley 1712 de 2014) - Principio de Máxima Publicidad",
    "caso": "Un ciudadano solicita a la DIAN copia de las estadísticas consolidadas y agregadas sobre el recaudo tributario por sectores económicos del último trimestre. Un funcionario pretende negar la entrega aduciendo que toda información que maneja la entidad es reservada.",
    "enunciado": "Con base en la Ley 1712 de 2014 (Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional), la respuesta legal que debe primar es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Entregar oportunamente la información estadística solicitada, ya que en virtud del principio de máxima publicidad toda información en poder del Estado se presume pública, salvo las excepciones expresas y taxativas de reserva legal sobre datos privados de contribuyentes.",
        "explicacion": "Correcta. El artículo 2º de la Ley 1712 de 2014 consagra el principio de máxima publicidad: toda información en posesión de los sujetos obligados es pública y sólo puede restringirse por reserva legal expresa. Las estadísticas agregadas sin identificación de personas particulares son plenamente públicas."
      },
      {
        "id": "B",
        "texto": "Negar la información y exigirle al ciudadano que demuestre para qué fin personal o comercial necesita los datos estadísticos.",
        "explicacion": "Incorrecta. La ley prohíbe exigir motivación o justificación para el ejercicio del derecho de acceso a la información pública."
      },
      {
        "id": "C",
        "texto": "Cobrarle una tarifa comercial por los datos estadísticos solicitados.",
        "explicacion": "Incorrecta. La información pública es gratuita, cobrándose únicamente los costos de reproducción material si los hubiere."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1712 de 2014, Arts. 2 y 3 (Principio de Máxima Publicidad)",
    "citaNormativa": "«Principio de máxima publicidad: Toda información en posesión, bajo control o custodia de un sujeto obligado es pública y no podrá ser reservada o limitada sino por disposición constitucional o legal.» (Ley 1712 de 2014, Art. 2)."
  },
  {
    "id": "dian_cbo_tran_02",
    "nivel": "Profesional",
    "ejeId": "transparencia_acceso_informacion",
    "ejeNombre": "Transparencia y Acceso a la Información Pública",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Términos Legales de Respuesta a Peticiones de Información y Documentos (Ley 1755 de 2015)",
    "caso": "Un usuario radica un derecho de petición solicitando copias de los actos administrativos de carácter general expedidos por la Dirección Seccional en el último mes.",
    "enunciado": "De acuerdo con el artículo 14 de la Ley 1437 de 2011 (sustituido por la Ley 1755 de 2015), ¿cuál es el plazo legal que tiene la entidad para resolver las peticiones de documentos e información?",
    "opciones": [
      {
        "id": "A",
        "texto": "Diez (10) días hábiles siguientes a su recepción.",
        "explicacion": "Correcta. El artículo 14 de la Ley 1755 de 2015 estipula que las peticiones de documentos y de información deben resolverse dentro de los diez (10) días hábiles siguientes a su recepción."
      },
      {
        "id": "B",
        "texto": "Treinta (30) días hábiles improrrogables.",
        "explicacion": "Incorrecta. Treinta días es el término especial para responder consultas sobre materias de competencia de la entidad, no para peticiones de documentos."
      },
      {
        "id": "C",
        "texto": "Tres (3) meses calendario.",
        "explicacion": "Incorrecta. Excede con creces los términos legales de respuesta a peticiones ciudadanas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1755 de 2015, Art. 14 (Términos para resolver las distintas modalidades de peticiones)",
    "citaNormativa": "«Las peticiones de documentos y de información deberán resolverse dentro de los diez (10) días siguientes a su recepción. Si en ese lapso no se ha dado respuesta, se entenderá que la solicitud ha sido aceptada.» (Ley 1755 de 2015, Art. 14)."
  },
  {
    "id": "dian_cbo_tran_03",
    "nivel": "Profesional",
    "ejeId": "transparencia_acceso_informacion",
    "ejeNombre": "Transparencia y Acceso a la Información Pública",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Silencio Administrativo Positivo en Peticiones de Documentos (Ley 1755 de 2015)",
    "caso": "Transcurren doce (12) días hábiles sin que la entidad dé respuesta ni entregue las copias de los documentos públicos no reservados solicitados por un ciudadano.",
    "enunciado": "Conforme al artículo 14 de la Ley 1755 de 2015, ¿cuál es la consecuencia jurídica que opera por ministerio de la ley ante este vencimiento de términos?",
    "opciones": [
      {
        "id": "A",
        "texto": "Opera el silencio administrativo positivo: la solicitud se entiende legalmente aceptada y la entidad ya no podrá negar la entrega de los documentos, debiendo suministrar las copias dentro de los tres (3) días siguientes.",
        "explicacion": "Correcta. La Ley 1755 de 2015 dispone expresamente que si la administración no responde en el término de 10 días a una petición de documentos, se entenderá aceptada la solicitud y no podrá negarse la entrega, debiendo aportarse las copias dentro de los 3 días siguientes."
      },
      {
        "id": "B",
        "texto": "Se entiende rechazada de plano la petición y el ciudadano debe reiniciar el trámite.",
        "explicacion": "Incorrecta. El silencio administrativo en peticiones de documentos públicos opera en sentido positivo en favor del ciudadano y no negativo."
      },
      {
        "id": "C",
        "texto": "La entidad adquiere una prórroga automática de un año para contestar.",
        "explicacion": "Incorrecta. Es una figura inexistente que desvirtúa el principio de celeridad procesal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1755 de 2015, Art. 14",
    "citaNormativa": "«Si en ese lapso no se ha dado respuesta al peticionario, se entenderá, para todos los efectos legales, que la solicitud ha sido aceptada. En consecuencia, la administración ya no podrá negar la entrega de dichos documentos y las copias se entregarán dentro de los tres (3) días siguientes.» (Ley 1755 de 2015, Art. 14)."
  },
  {
    "id": "dian_cbo_tran_04",
    "nivel": "Profesional",
    "ejeId": "transparencia_acceso_informacion",
    "ejeNombre": "Transparencia y Acceso a la Información Pública",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Decreto Ley 019 de 2012 (Ley Antitrámites) - Prohibición de Exigir Documentos que Reposan en el Estado",
    "caso": "En una oficina seccional de la DIAN, un funcionario exige a una empresa que para tramitar la devolución de un saldo a favor debe aportar fotocopia autenticada en notaría de su certificado de existencia y representación legal de la Cámara de Comercio y copia de declaraciones de renta de años anteriores presentadas ante la misma DIAN.",
    "enunciado": "De acuerdo con el Decreto Ley 019 de 2012 (Ley Antitrámites) y los principios de facilitación administrativa, esta exigencia resulta:",
    "opciones": [
      {
        "id": "A",
        "texto": "Ilegal y prohibida, porque las entidades públicas tienen prohibido exigir documentos que reposen en sus propios archivos o certificados de existencia que puedan ser consultados gratuitamente en línea en las bases de datos de las Cámaras de Comercio (RUES).",
        "explicacion": "Correcta. El Decreto Ley 019 de 2012 prohíbe exigir documentos que reposen en la propia entidad o que se puedan consultar en registros públicos interoperables, así como autenticaciones notariales innecesarias."
      },
      {
        "id": "B",
        "texto": "Completamente válida, porque la desconfianza administrativa faculta exigir toda clase de copias autenticadas.",
        "explicacion": "Incorrecta. Vulnera frontalmente la presunción de buena fe y las normas de racionalización de trámites."
      },
      {
        "id": "C",
        "texto": "Obligatoria únicamente para las personas jurídicas multinacionales.",
        "explicacion": "Incorrecta. La ley antitrámites protege a todos los usuarios del sistema sin excepciones discriminatorias."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 019 de 2012 (Ley Antitrámites), Arts. 9, 15 y 25",
    "citaNormativa": "«Prohibición de exigir documentos que reposan en la entidad: Las autoridades no podrán exigir la presentación de documentos o certificados que ellas mismas hayan expedido o que reposen en sus archivos, ni certificados de matrícula mercantil que puedan consultarse en registros públicos.» (Decreto Ley 019 de 2012)."
  },
  {
    "id": "dian_cbo_tran_05",
    "nivel": "Profesional",
    "ejeId": "transparencia_acceso_informacion",
    "ejeNombre": "Transparencia y Acceso a la Información Pública",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Estatuto Anticorrupción (Ley 1474 de 2011) - Plan Anticorrupción y de Atención al Ciudadano (PAAC)",
    "caso": "La Dirección de Gestión Estratégica de la DIAN debe actualizar el Plan Anticorrupción y de Atención al Ciudadano (PAAC) institucional conforme a los lineamientos del Departamento Administrativo de la Función Pública.",
    "enunciado": "De acuerdo con el artículo 73 de la Ley 1474 de 2011 y las normas reglamentarias, ¿cuáles son los componentes obligatorios que debe estructurar y publicar el PAAC?",
    "opciones": [
      {
        "id": "A",
        "texto": "Mapa de riesgos de corrupción y medidas de mitigación, estrategia antitrámites y racionalización, rendición de cuentas, mecanismos para mejorar la atención al ciudadano y mecanismos para la transparencia y acceso a la información pública.",
        "explicacion": "Correcta. La Ley 1474 de 2011 y el Decreto 124 de 2016 definen los componentes integrales obligatorios del PAAC: gestión del riesgo de corrupción, racionalización de trámites, rendición de cuentas, atención al ciudadano e iniciativas de transparencia activa y pasiva."
      },
      {
        "id": "B",
        "texto": "Únicamente el listado de sanciones disciplinarias impuestas a los funcionarios en el año anterior.",
        "explicacion": "Incorrecta. El PAAC es un plan preventivo e integral de gestión institucional, no un boletín punitivo."
      },
      {
        "id": "C",
        "texto": "El balance financiero de utilidades y pérdidas comerciales de la entidad.",
        "explicacion": "Incorrecta. La DIAN no es una empresa comercial con ánimo de lucro y el PAAC obedece a políticas de transparencia pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1474 de 2011, Art. 73 (Plan Anticorrupción y de Atención al Ciudadano)",
    "citaNormativa": "«Cada entidad del orden nacional, departamental y municipal deberá elaborar anualmente una estrategia de lucha contra la corrupción y de atención al ciudadano que contemplará el mapa de riesgos de corrupción, la racionalización de trámites y los mecanismos de rendición de cuentas y transparencia.» (Ley 1474 de 2011, Art. 73)."
  },
  {
    "id": "dian_conv_reg_01",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Etapa de Verificación de Requisitos Mínimos (VRM) y Cierre de Inscripciones",
    "caso": "Un aspirante inscrito en el proceso de selección de la DIAN a través de la plataforma SIMO omitió cargar el diploma de su especialización antes de la fecha límite de cierre de inscripciones. Días después de cerradas las inscripciones, radica un derecho de petición adjuntando el título y solicitando que sea tenido en cuenta para la etapa de Verificación de Requisitos Mínimos.",
    "enunciado": "De acuerdo con el Acuerdo Oficial de Convocatoria de la CNSC y el principio de preclusión procesal de los concursos de mérito, la decisión que debe adoptar la Universidad evaluadora es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Inadmitir la solicitud y valorar exclusivamente los documentos cargados en el aplicativo SIMO hasta la fecha y hora exacta del cierre de inscripciones, ya que la etapa de inscripción precluyó y no admite modificación ni adición extemporánea de soportes.",
        "explicacion": "Correcta. El Acuerdo de Convocatoria de la CNSC y las reglas constitucionales de los concursos públicos establecen que los documentos aportados después del cierre de inscripciones son extemporáneos e inoponibles, garantizando el principio de igualdad entre todos los concursantes."
      },
      {
        "id": "B",
        "texto": "Aceptar el título extemporáneo por tratarse de un documento auténtico emitido por una universidad reconocida.",
        "explicacion": "Incorrecta. Violaría flagrantemente el principio de igualdad y las reglas vinculantes e inmodificables del concurso (ley del concurso)."
      },
      {
        "id": "C",
        "texto": "Suspender todo el proceso de selección nacional hasta que todos los aspirantes puedan actualizar sus hojas de vida.",
        "explicacion": "Incorrecta. Desconoce la naturaleza reglada, ágil y preclusiva de los procesos de selección por mérito."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo de Convocatoria CNSC (Reglas de Inscripción y VRM) y Art. 125 Constitución Política",
    "citaNormativa": "«Cerrada la etapa de inscripciones no se admitirá la adición, modificación o sustitución de documentos o información en el aplicativo SIMO. La verificación de requisitos mínimos se realizará exclusivamente con los documentos aportados hasta el cierre.» (Acuerdo CNSC Convocatoria DIAN)."
  },
  {
    "id": "dian_conv_reg_02",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Carácter Eliminatorio de la Prueba Funcional y Umbral Mínimo Aprobatorio",
    "caso": "Un concursante presenta las pruebas escritas de la Convocatoria DIAN. En la Prueba de Competencias Funcionales obtiene un puntaje de 68.50 puntos sobre 100, mientras que en la Prueba de Competencias Comportamentales obtiene 95.00 puntos y en Integridad 92.00 puntos.",
    "enunciado": "De acuerdo con el Acuerdo de Convocatoria de la CNSC y la Guía de Orientación al Aspirante, ¿cuál es la consecuencia jurídica sobre su participación en el proceso de selección?",
    "opciones": [
      {
        "id": "A",
        "texto": "Promediar las tres calificaciones y permitirle continuar si el promedio global supera los 70 puntos.",
        "explicacion": "Incorrecta. Las pruebas tienen ponderación independiente y la funcional es estrictamente eliminatoria."
      },
      {
        "id": "B",
        "texto": "Queda eliminado automáticamente del proceso de selección al no alcanzar el puntaje mínimo aprobatorio de 70.00 puntos en la Prueba de Competencias Funcionales, por lo cual sus pruebas comportamental y de integridad no se ponderan ni se publican.",
        "explicacion": "Correcta. La Prueba de Competencias Funcionales tiene carácter eliminatorio con un umbral legal de 70.00 puntos. Quien obtenga un puntaje inferior no supera el concurso y sus demás pruebas carecen de validez clasificatoria."
      },
      {
        "id": "C",
        "texto": "Concederle un examen extraordinario de habilitación en la sede central de la DIAN.",
        "explicacion": "Incorrecta. No existe habilitación ni segundas oportunidades en los concursos públicos de mérito de la CNSC."
      }
    ],
    "respuestaCorrecta": "B",
    "norma": "Acuerdo de Convocatoria CNSC y Guía de Orientación al Aspirante DIAN 2676",
    "citaNormativa": "«La Prueba de Competencias Funcionales tiene carácter eliminatorio. El puntaje mínimo aprobatorio es de setenta punto cero cero (70.00) puntos. Los aspirantes que no alcancen dicho puntaje no continuarán en el proceso de selección.» (Acuerdo CNSC)."
  },
  {
    "id": "dian_conv_reg_03",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Término Perentorio de Reclamaciones contra Resultados en SIMO",
    "caso": "La CNSC publica en la plataforma SIMO los resultados preliminares obtenidos en las pruebas escritas. Un aspirante no está de acuerdo con la calificación asignada en una de las competencias evaluadas y decide formular reclamación formal.",
    "enunciado": "De acuerdo con el Decreto Ley 760 de 2005 y el Acuerdo de Convocatoria de la CNSC, ¿cuál es el plazo legal perentorio que tiene el participante para radicar su reclamación a través de SIMO?",
    "opciones": [
      {
        "id": "A",
        "texto": "Cinco (5) días hábiles siguientes a la fecha de publicación de los resultados preliminares.",
        "explicacion": "Correcta. El artículo 13 del Decreto Ley 760 de 2005 y los acuerdos de la CNSC consagran que las reclamaciones contra los resultados de las pruebas deben presentarse dentro de los cinco (5) días hábiles siguientes a su publicación a través del aplicativo SIMO."
      },
      {
        "id": "B",
        "texto": "Diez (10) días calendario en cualquier ventanilla física de la DIAN.",
        "explicacion": "Incorrecta. El plazo es de 5 días hábiles y el único canal oficial autorizado es la plataforma web SIMO de la CNSC."
      },
      {
        "id": "C",
        "texto": "Un (1) mes calendario mediante recurso de apelación ante el Ministerio de Hacienda.",
        "explicacion": "Incorrecta. El Ministerio de Hacienda no tiene competencia jurisdiccional ni administrativa sobre las reclamaciones del concurso de méritos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 760 de 2005, Art. 13 y Acuerdo de Convocatoria CNSC",
    "citaNormativa": "«Las reclamaciones contra los resultados de las pruebas aplicadas en los procesos de selección se presentarán por los aspirantes dentro de los cinco (5) días hábiles siguientes a la publicación de los mismos en la página web de la CNSC.» (Decreto Ley 760 de 2005)."
  },
  {
    "id": "dian_conv_reg_04",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Criterios Oficiales de Desempate en Listas de Elegibles CNSC",
    "caso": "Al conformar la lista de elegibles para un empleo de Gestor III en la DIAN, dos aspirantes empatan en el puntaje total consolidado con exactamente 84.50 puntos. Ninguno de los dos acredita condición de discapacidad.",
    "enunciado": "De acuerdo con el orden legal de criterios de desempate establecido en el Acuerdo de Convocatoria de la CNSC, ¿cuál es el primer factor de mérito que debe aplicarse para dirimir el desempate?",
    "opciones": [
      {
        "id": "A",
        "texto": "El mayor puntaje obtenido en la Prueba de Competencias Funcionales.",
        "explicacion": "Correcta. En las reglas de desempate de la CNSC, tras verificar la condición de discapacidad, el primer criterio de mérito técnico es la calificación más alta obtenida en la prueba de Competencias Funcionales (por ser la de mayor ponderación y carácter eliminatorio)."
      },
      {
        "id": "B",
        "texto": "La edad del aspirante, prefiriendo al de mayor edad.",
        "explicacion": "Incorrecta. La edad es un criterio residual que solo se aplica si persisten empates tras agotar pruebas, antecedentes, calidad de víctima y voto."
      },
      {
        "id": "C",
        "texto": "El orden alfabético del primer apellido.",
        "explicacion": "Incorrecta. El orden alfabético no es un criterio de desempate en concursos de la carrera administrativa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo de Convocatoria CNSC (Criterios de Desempate)",
    "citaNormativa": "«Para dirimir los empates en la lista de elegibles se aplicarán en estricto orden los siguientes criterios: 1. Con el aspirante que se encuentre en situación de discapacidad. 2. Con el aspirante que haya obtenido el mayor puntaje en la prueba de competencias funcionales.» (Acuerdo CNSC Convocatoria DIAN)."
  },
  {
    "id": "dian_conv_reg_05",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Periodo de Prueba en la DIAN (Decreto Ley 71 de 2020) - Duración y Efectos",
    "caso": "Un aspirante nombrado en periodo de prueba en la planta de personal de la DIAN toma posesión formal de su cargo. Consulta cuál es la duración exacta de dicho periodo y qué efectos tiene la calificación de servicios al finalizar.",
    "enunciado": "Conforme al artículo 31 del Decreto Ley 71 de 2020 (Sistema Específico de Carrera de la DIAN), la duración del periodo de prueba y sus consecuencias jurídicas son:",
    "opciones": [
      {
        "id": "A",
        "texto": "El periodo de prueba tiene una duración de seis (6) meses continuos; si es calificado satisfactoriamente, el servidor adquiere los derechos de carrera específica y se ordena su inscripción en el Registro Público de Carrera Administrativa.",
        "explicacion": "Correcta. El artículo 31 del Decreto Ley 71 de 2020 fija el periodo de prueba en la DIAN en seis meses. La evaluación satisfactoria consolida los derechos de carrera y la inscripción oficial ante la CNSC."
      },
      {
        "id": "B",
        "texto": "Tiene una duración de un (1) mes prorrogable discrecionalmente hasta por dos años por el Director General.",
        "explicacion": "Incorrecta. El término legal de seis meses es perentorio y no queda al arbitrio discrecional del nominador."
      },
      {
        "id": "C",
        "texto": "Tiene una duración de quince (15) días sin necesidad de evaluación de desempeño escrita.",
        "explicacion": "Incorrecta. El periodo de prueba exige evaluación integral del desempeño basada en compromisos funcionales y comportamentales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020, Art. 31 (Periodo de Prueba en la DIAN)",
    "citaNormativa": "«El empleado nombrado en periodo de prueba en la DIAN tendrá una duración de seis (6) meses. Superado satisfactoriamente este periodo, el empleado adquiere los derechos de carrera y se inscribirá en el Registro Público correspondiente.» (Decreto Ley 71 de 2020, Art. 31)."
  },
  {
    "id": "dian_conv_reg_06",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Insubsistencia por Calificación No Satisfactoria en Periodo de Prueba",
    "caso": "Al culminar los seis meses de periodo de prueba, el evaluador califica el desempeño de un empleado con puntaje no satisfactorio debido al incumplimiento grave y reiterado de los compromisos laborales fijados.",
    "enunciado": "De acuerdo con el Decreto Ley 71 de 2020 y el régimen general de carrera, la consecuencia administrativa obligatoria que debe aplicar la DIAN es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Declarar la insubsistencia del nombramiento mediante acto administrativo motivado una vez quede en firme la calificación, procediendo al retiro del servicio público (o el reintegro a su cargo de carrera anterior si ostentaba derechos previos).",
        "explicacion": "Correcta. La calificación no satisfactoria en periodo de prueba acarrea por mandato legal la declaratoria de insubsistencia del nombramiento una vez agotada la vía administrativa."
      },
      {
        "id": "B",
        "texto": "Nombrarlo automáticamente en propiedad definitiva por solidaridad humana.",
        "explicacion": "Incorrecta. Viola la Constitución Política que supedita la carrera administrativa a la demostración efectiva del mérito."
      },
      {
        "id": "C",
        "texto": "Trasladarlo a otra ciudad para iniciar un nuevo periodo de prueba de otros seis meses.",
        "explicacion": "Incorrecta. La no superación del periodo de prueba produce la desvinculación formal del empleo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020, Art. 33 (Efectos de la calificación no satisfactoria)",
    "citaNormativa": "«Si la calificación del periodo de prueba fuere no satisfactoria, el nombramiento del empleado será declarado insubsistente mediante resolución motivada contra la cual procede el recurso de reposición.» (Decreto Ley 71 de 2020, Art. 33)."
  },
  {
    "id": "dian_conv_reg_07",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Derecho Preferencial de Encargo para Empleados de Carrera (Decreto Ley 71 de 2020)",
    "caso": "Se genera una vacancia temporal en un empleo de Gestor IV en una Seccional de la DIAN. La administración decide nombrar directamente a una persona externa mediante contrato o nombramiento provisional, existiendo en la planta empleados de carrera en el grado inmediatamente inferior (Gestor III) con calificación sobresaliente que cumplen los requisitos del perfil.",
    "enunciado": "Conforme al artículo 24 de la Ley 909 de 2004 y las normas de carrera de la DIAN, ¿cuál es el derecho que asiste a los empleados con derechos de carrera?",
    "opciones": [
      {
        "id": "A",
        "texto": "El derecho preferencial a ser encargados en el empleo vacante, siempre que cumplan el perfil, posean las aptitudes requeridas y su última evaluación de desempeño sea sobresaliente o satisfactoria, sin sanciones disciplinarias recientes.",
        "explicacion": "Correcta. El encargo es un derecho preferencial de los empleados con derechos de carrera administrativa para proveer vacantes temporales o definitivas, prevaleciendo sobre el nombramiento provisional de personas externas."
      },
      {
        "id": "B",
        "texto": "No tienen ningún derecho preferencial, quedando a la discrecionalidad absoluta del nominador contratar a quien desee.",
        "explicacion": "Incorrecta. Desconoce el principio constitucional de mérito y estabilidad de los servidores de carrera."
      },
      {
        "id": "C",
        "texto": "Tienen derecho a recibir el sueldo del cargo superior sin necesidad de ejercer las funciones correspondientes.",
        "explicacion": "Incorrecta. El encargo implica la asunción real de las funciones del empleo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020 y Ley 909 de 2004, Art. 24 (Derecho Preferencial de Encargo)",
    "citaNormativa": "«Los empleados con derechos de carrera tendrán derecho preferencial a ser encargados de empleos vacantes de forma transitoria, siempre que cumplan los requisitos del cargo y su última evaluación del desempeño sea sobresaliente.» (Ley 909 de 2004 / Decreto Ley 71 de 2020)."
  },
  {
    "id": "dian_conv_reg_08",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Comisión de Personal de la DIAN - Conformación y Paridad",
    "caso": "En la DIAN se convocan elecciones para renovar la Comisión de Personal institucional encargada de velar por la correcta aplicación de las normas de carrera y conocer las reclamaciones por desmejoramiento laboral.",
    "enunciado": "De acuerdo con el Decreto Ley 71 de 2020 y la Ley 909 de 2004, la Comisión de Personal de la entidad está conformada bajo un principio de paridad por:",
    "opciones": [
      {
        "id": "A",
        "texto": "Dos (2) representantes de la administración designados por el Director General y dos (2) representantes de los empleados elegidos por votación directa y secreta.",
        "explicacion": "Correcta. La Comisión de Personal es un órgano colegiado paritario compuesto por dos representantes del empleador estatal y dos representantes de los empleados públicos elegidos democráticamente."
      },
      {
        "id": "B",
        "texto": "Cinco delegados exclusivos de la Fiscalía General de la Nación.",
        "explicacion": "Incorrecta. La Fiscalía no integra la Comisión de Personal administrativa de la DIAN."
      },
      {
        "id": "C",
        "texto": "Únicamente por los sindicatos de aduanas sin participación de la dirección institucional.",
        "explicacion": "Incorrecta. La conformación legal es paritaria institucional y democrática."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020 y Ley 909 de 2004, Art. 16 (Comisión de Personal)",
    "citaNormativa": "«En todos los organismos y entidades reguladas por la presente ley existirá una Comisión de Personal conformada por dos (2) representantes de la entidad y dos (2) representantes de los empleados.» (Ley 909 de 2004 / Dec. Ley 71 de 2020)."
  },
  {
    "id": "dian_conv_reg_09",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Comisión para Desempeñar Empleos de Libre Nombramiento y Remoción (Art. 26 Dec. Ley 71)",
    "caso": "Un funcionario escalafonado con derechos de carrera específica en la DIAN en el empleo de Gestor III es designado por el Presidente de la República para desempeñar un cargo de libre nombramiento y remoción en el Ministerio de Hacienda.",
    "enunciado": "Conforme al Decreto Ley 71 de 2020, ¿cuál es el derecho que asiste al servidor para no perder sus derechos de carrera en la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "Solicitar una Comisión para desempeñar empleos de libre nombramiento y remoción hasta por el término de tres (3) años prorrogables por tres (3) más, conservando sus derechos de carrera en el cargo de origen.",
        "explicacion": "Correcta. La comisión para ejercer empleos de libre nombramiento y remoción permite al servidor de carrera prestar sus servicios en cargos directivos o de asesoría conservando intactos sus derechos de carrera y su plaza en la entidad de origen."
      },
      {
        "id": "B",
        "texto": "Renunciar de manera irrevocable a sus derechos de carrera para siempre.",
        "explicacion": "Incorrecta. La ley protege expresamente la continuidad de los derechos de carrera mediante la figura de la comisión."
      },
      {
        "id": "C",
        "texto": "Cobrar doble sueldo de tiempo completo en ambas entidades simultáneamente.",
        "explicacion": "Incorrecta. Constituye una violación directa a la prohibición constitucional de percibir doble asignación del tesoro público (Art. 128 C.P.)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020, Art. 26 y Decreto 1083 de 2015",
    "citaNormativa": "«Los empleados de carrera de la DIAN tendrán derecho a ser comisionados hasta por el término de tres (3) años, prorrogable por tres (3) años más, para desempeñar empleos de libre nombramiento y remoción.» (Decreto Ley 71 de 2020, Art. 26)."
  },
  {
    "id": "dian_conv_reg_10",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Registro Público del Sistema Específico de Carrera DIAN (CNSC)",
    "caso": "Un empleado público de la DIAN que superó su periodo de prueba solicita una constancia oficial que acredite su inscripción definitiva en la carrera administrativa específica de la entidad.",
    "enunciado": "De acuerdo con el artículo 130 de la Constitución Política y el Decreto Ley 71 de 2020, ¿qué organismo estatal tiene la administración y custodia privativa del Registro Público de Carrera Administrativa?",
    "opciones": [
      {
        "id": "A",
        "texto": "La Comisión Nacional del Servicio Civil (CNSC).",
        "explicacion": "Correcta. La CNSC es el órgano constitucional autónomo encargado de administrar y vigilar los sistemas de carrera administrativa (general y específicos como el de la DIAN) y de custodiar el Registro Público de Carrera."
      },
      {
        "id": "B",
        "texto": "La Registraduría Nacional del Estado Civil.",
        "explicacion": "Incorrecta. La Registraduría administra la identificación ciudadana y los comicios electorales, no la carrera administrativa."
      },
      {
        "id": "C",
        "texto": "El Banco de la República.",
        "explicacion": "Incorrecta. El Banco Central ejerce funciones monetarias y no de talento humano público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política de 1991, Art. 130 y Decreto Ley 71 de 2020",
    "citaNormativa": "«Habrá una Comisión Nacional del Servicio Civil responsable de la administración y vigilancia de las carreras de los servidores públicos, con excepción de las que tengan carácter especial de origen constitucional.» (Constitución Política, Art. 130)."
  },
  {
    "id": "dian_conv_reg_11",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Movilidad Laboral - Traslado de Funcionarios de Carrera en la DIAN",
    "caso": "La Dirección General de la DIAN requiere reubicar a un Gestor III de carrera de la Seccional de Bogotá a la Seccional de Buenaventura por estrictas necesidades del servicio misional de control al contrabando.",
    "enunciado": "Conforme a las normas del Sistema Específico de Carrera (Decreto Ley 71 de 2020 y Decreto 1083 de 2015), para que el traslado sea legalmente procedente se requiere que:",
    "opciones": [
      {
        "id": "A",
        "texto": "El empleo de destino sea de la misma naturaleza, tenga iguales funciones y afinidad con el perfil, conserve la misma remuneración salarial y no implique desmejora de las condiciones laborales del servidor.",
        "explicacion": "Correcta. El traslado por necesidades del servicio es procedente siempre que se realice a un empleo equivalente de la misma jerarquía, funciones y remuneración, sin desmejorar laboral ni salarialmente al empleado de carrera."
      },
      {
        "id": "B",
        "texto": "Se le disminuya el sueldo básico en un 50% por cambio de ciudad.",
        "explicacion": "Incorrecta. Constituye una desmejora salarial ilegal que vulnera los derechos adquiridos de carrera."
      },
      {
        "id": "C",
        "texto": "Se le exija presentar nuevamente las pruebas escritas del concurso de méritos.",
        "explicacion": "Incorrecta. El servidor ya ostenta derechos de carrera en firme y no requiere concursar para un traslado horizontal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020 y Decreto 1083 de 2015 (Régimen de Traslados)",
    "citaNormativa": "«El traslado se produce cuando se provee con un empleado de carrera un cargo vacante definitivamente con funciones afines, de la misma categoría y para el cual se exijan requisitos mínimos similares, sin desmejora en las condiciones del servidor.» (Decreto 1083 de 2015)."
  },
  {
    "id": "dian_conv_reg_12",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Evaluación del Desempeño Laboral (EDL) en la DIAN - Periodicidad y Metas",
    "caso": "Un servidor de carrera de la DIAN solicita conocer el procedimiento oficial y la periodicidad con la que se evalúa formalmente el rendimiento de los empleados en la entidad.",
    "enunciado": "De acuerdo con el Sistema Específico de Carrera de la DIAN (Decreto Ley 71 de 2020 / Decreto Ley 927 de 2023), la Evaluación del Desempeño Laboral ordinaria comprende:",
    "opciones": [
      {
        "id": "A",
        "texto": "Un periodo anual con dos evaluaciones parciales semestrales y seguimiento concertado de compromisos laborales funcionales y comportamentales institucionales.",
        "explicacion": "Correcta. La evaluación del desempeño en la DIAN y en el sector público se estructura en un ciclo anual con dos evaluaciones parciales semestrales consolidadas en una calificación definitiva anual con base en compromisos concertados."
      },
      {
        "id": "B",
        "texto": "Una evaluación decenal sin concertación de compromisos.",
        "explicacion": "Incorrecta. Los ciclos decenales no existen en la gestión del rendimiento laboral público."
      },
      {
        "id": "C",
        "texto": "Un sorteo semanal aleatorio en el portal web institucional.",
        "explicacion": "Incorrecta. La evaluación es un proceso técnico, objetivo, continuo y concertado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020 y Sistema de Evaluación del Desempeño Laboral DIAN",
    "citaNormativa": "«El desempeño laboral de los empleados de carrera de la DIAN se evaluará con base en criterios objetivos de cumplimiento de metas y competencias mediante evaluaciones parciales semestrales y una definitiva anual.» (Decreto Ley 71 de 2020)."
  },
  {
    "id": "dian_conv_reg_13",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Causales de Retiro del Servicio en el Sistema Específico DIAN",
    "caso": "En la División de Talento Humano se revisan las causales taxativas de cesación definitiva de funciones de los servidores inscritos en la carrera de la DIAN.",
    "enunciado": "Conforme al Decreto Ley 71 de 2020, ¿cuál de los siguientes eventos constituye una causal legal formal de retiro del servicio en la carrera específica de la DIAN?",
    "opciones": [
      {
        "id": "A",
        "texto": "La renuncia regularmente aceptada, la declaratoria de vacancia por abandono del cargo, la calificación no satisfactoria en la evaluación del desempeño y la destitución disciplinaria.",
        "explicacion": "Correcta. El Decreto Ley 71 de 2020 enumera de forma taxativa las causales de retiro del servicio, incluyendo la renuncia aceptada, el abandono del cargo, la pensión de vejez o invalidez, la calificación insatisfactoria y la sanción disciplinaria de destitución."
      },
      {
        "id": "B",
        "texto": "Tener opiniones políticas diferentes a las del Director General.",
        "explicacion": "Incorrecta. Vulnera la libertad de pensamiento y la garantía de estabilidad de la carrera administrativa (Art. 125 C.P.)."
      },
      {
        "id": "C",
        "texto": "Afiliarse a un sindicato formal de la entidad.",
        "explicacion": "Incorrecta. El derecho de asociación sindical está protegido constitucionalmente por el artículo 39 de la Carta Política."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 71 de 2020, Art. 45 (Causales de retiro del servicio)",
    "citaNormativa": "«El retiro del servicio de los empleados del sistema específico de carrera de la DIAN se produce por: renuncia regularmente aceptada, jubilación, invalidez absoluta, calificación no satisfactoria, destitución y abandono del cargo.» (Decreto Ley 71 de 2020)."
  },
  {
    "id": "dian_conv_reg_14",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Exclusión de Listas de Elegibles por Irregularidades o Fraude (Decreto Ley 760 de 2005)",
    "caso": "Con posterioridad a la publicación de la lista de elegibles, la Comisión de Personal de la DIAN comprueba que un aspirante ubicado en el primer puesto aportó un certificado de experiencia laboral falso.",
    "enunciado": "De acuerdo con el artículo 14 del Decreto Ley 760 de 2005, el trámite que debe surtirse es:",
    "opciones": [
      {
        "id": "A",
        "texto": "La Comisión de Personal solicita formalmente a la CNSC la exclusión del aspirante de la lista de elegibles, debiendo la CNSC iniciar la actuación administrativa correspondiente con respeto al debido proceso.",
        "explicacion": "Correcta. La Comisión de Personal o la entidad tiene la facultad de solicitar a la CNSC la exclusión de un aspirante de la lista de elegibles cuando se demuestre fraude, falsedad o incumplimiento sobreviniente de requisitos, siendo la CNSC quien decide la exclusión."
      },
      {
        "id": "B",
        "texto": "Nombrarlo de todas formas en periodo de prueba y esperar a que prescriba la falta.",
        "explicacion": "Incorrecta. Nombrar a una persona a sabiendas de fraude acarrea nulidad del nombramiento y responsabilidad penal para el nominador."
      },
      {
        "id": "C",
        "texto": "Borrar el nombre del aspirante de la lista mediante corrector líquido en la copia física.",
        "explicacion": "Incorrecta. Los actos administrativos se modifican mediante decisiones motivadas del órgano competente (la CNSC)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 760 de 2005, Art. 14 (Exclusión de la lista de elegibles)",
    "citaNormativa": "«Dentro de los cinco (5) días siguientes a la publicación de la lista de elegibles, la Comisión de Personal podrá solicitar a la CNSC la exclusión de la lista de la persona que no cumplió los requisitos o fue incluida mediante fraude.» (Decreto Ley 760 de 2005, Art. 14)."
  },
  {
    "id": "dian_conv_reg_15",
    "nivel": "Profesional",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Sistema Específico de Carrera DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Vigencia y Modificación de las Listas de Elegibles (Vigencia de 2 Años)",
    "caso": "La lista de elegibles en firme para un empleo de la DIAN cuenta con 50 personas escalafonadas para proveer 10 vacantes. Se proveen los 10 empleos mediante nombramientos en periodo de prueba.",
    "enunciado": "Conforme a la Ley 909 de 2004 y los acuerdos de la CNSC, ¿cuál es el término de vigencia de la lista de elegibles y para qué eventos puede ser utilizada con posterioridad?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tiene una vigencia de dos (2) años contados a partir de su firmeza, y durante dicho término debe ser utilizada para proveer las nuevas vacantes definitivas que se generen en el mismo empleo o para reemplazar a quienes no superen el periodo de prueba o renuncien.",
        "explicacion": "Correcta. La lista de elegibles tiene una vigencia legal de dos (2) años y durante este periodo mantiene fuerza vinculante para suplir vacantes definitivas que se produzcan en el mismo empleo o cargo homologable."
      },
      {
        "id": "B",
        "texto": "Pierde vigencia automáticamente al día siguiente de posesionarse el primer aspirante.",
        "explicacion": "Incorrecta. La lista permanece activa durante los dos años de vigencia legal para suplir vacancias futuras."
      },
      {
        "id": "C",
        "texto": "Dura veinte (20) años y no puede convocarse a ningún nuevo concurso hasta que se agoten todos los elegibles.",
        "explicacion": "Incorrecta. La vigencia legal fijada por la ley y la jurisprudencia es de dos años."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 909 de 2004, Art. 31 Numeral 4 y Acuerdos de Convocatoria CNSC",
    "citaNormativa": "«Las listas de elegibles tendrán una vigencia de dos (2) años. Con base en ellas y en estricto orden de mérito, las entidades proveerán las vacantes definitivas que se generen en los mismos empleos.» (Ley 909 de 2004, Art. 31)."
  },
  {
    "id": "dian_guias_org_01",
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
    "id": "dian_guias_org_02",
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
    "id": "dian_guias_org_03",
    "perfil": "GESTOR_III",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Zonas Francas",
    "tema": "Régimen de Zonas Francas: Introducción de Mercancías desde el Exterior (Decreto 2147 de 2016)",
    "contexto": "Un usuario industrial de bienes instalado en una Zona Franca Permanente adquiere una planta generadora de energía importada desde Alemania. El agente de aduanas en el puerto de Barranquilla pretende exigir una declaración de importación ordinaria con liquidación y pago del arancel e IVA antes de autorizar el traslado de la carga hacia la Zona Franca.",
    "enunciado": "Como Gestor III del área de aduanas, ¿cuál es el criterio legal aplicable según el Decreto 2147 de 2016?",
    "opciones": [
      {
        "id": "A",
        "texto": "Exigir el pago previo de todos los gravámenes arancelarios porque la zona franca hace parte física del territorio colombiano y genera tributos en el puerto de arribo.",
        "explicacion": "Incorrecta. El Decreto 2147 de 2016 establece que la introducción de mercancías del exterior a Zona Franca no constituye importación y no genera tributos aduaneros en esa etapa."
      },
      {
        "id": "B",
        "texto": "Autorizar el ingreso a la Zona Franca al amparo del principio de extraterritorialidad aduanera, mediante el Formulario de Movimiento de Mercancías (FMM) autorizado por el Usuario Operador, sin que se causen ni liquiden tributos aduaneros en esta etapa.",
        "explicacion": "Correcta. El Decreto 2147 de 2016 consagra el principio de extraterritorialidad aduanera de las zonas francas: la introducción de bienes procedentes del exterior por parte de un usuario industrial o comercial calificado no constituye importación definitiva ni causa tributos aduaneros; la operación se ampara en el documento de transporte consignado a la zona franca y el Formulario de Movimiento de Mercancías (FMM) debidamente aprobado por el Usuario Operador."
      },
      {
        "id": "C",
        "texto": "Obligar a transformar la planta generadora en chatarra antes del ingreso si no cuenta con registro de importación reembolsable del Banco de la República.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Decreto 2147 de 2016 consagra el principio de extraterritorialidad aduanera de las zonas francas: la introducción de bienes procedentes del exterior por parte de un usuario industrial o comercial calificado no constituye importación definitiva ni causa tributos aduaneros; la operación se ampara en el documento de transporte consignado a la zona franca y el Formulario de Movimiento de Mercancías (FMM) debidamente aprobado por el Usuario Operador."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Decreto 2147 de 2016 consagra el principio de extraterritorialidad aduanera de las zonas francas: la introducción de bienes procedentes del exterior por parte de un usuario industrial o comercial calificado no constituye importación definitiva ni causa tributos aduaneros; la operación se ampara en el documento de transporte consignado a la zona franca y el Formulario de Movimiento de Mercancías (FMM) debidamente aprobado por el Usuario Operador.",
    "norma": "Decreto 2147 de 2016, Art. 47 y ss. (Introducción de bienes a Zona Franca desde el resto del mundo)",
    "citaNormativa": "La introducción de mercancías procedentes de otros países por parte de los usuarios de las zonas francas no se considerará importación, y solo causará tributos aduaneros cuando las mercancías se introduzcan de la zona franca al Territorio Aduanero Nacional.",
    "dificultad": "ALTA",
    "competencia": "Régimen Aduanero Especial y Zonas Francas",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_04",
    "perfil": "GESTOR_III",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Zonas Francas",
    "tema": "Zonas Francas: Salida de Bienes hacia el Territorio Aduanero Nacional - TAN (Decreto 2147 de 2016)",
    "contexto": "Un Usuario Industrial de Bienes elaboró dispositivos médicos en una Zona Franca Permanente utilizando un 70% de componentes nacionales colombianos y un 30% de componentes extranjeros no transformados. La empresa va a nacionalizar el producto final e ingresarlo a Bogotá (TAN).",
    "enunciado": "Como Gestor III responsable de la liquidación y fiscalización aduanera, ¿cómo deben calcularse los tributos aduaneros aplicables?",
    "opciones": [
      {
        "id": "A",
        "texto": "Liquidar el arancel e IVA sobre el 100% del valor total en aduana del producto terminado, sin discriminar el valor agregado nacional.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Según el Decreto 2147 de 2016 y la normativa aduanera nacional, cuando un bien procesado en zona franca se introduce al TAN, la base gravable para liquidar el arancel aduanero corresponde exclusivamente al valor en aduana de las materias primas e insumos extranjeros incorporados en su elaboración, acreditados debidamente en el Certificado de Integración expedido por el Usuario Operador, aplicando la subpartida arancelaria del producto final."
      },
      {
        "id": "B",
        "texto": "Liquidar el arancel aduanero únicamente sobre el valor CIF de las materias primas e insumos extranjeros incorporados en el bien final, con base en el Certificado de Integración expedido por el Usuario Operador.",
        "explicacion": "Correcta. Según el Decreto 2147 de 2016 y la normativa aduanera nacional, cuando un bien procesado en zona franca se introduce al TAN, la base gravable para liquidar el arancel aduanero corresponde exclusivamente al valor en aduana de las materias primas e insumos extranjeros incorporados en su elaboración, acreditados debidamente en el Certificado de Integración expedido por el Usuario Operador, aplicando la subpartida arancelaria del producto final."
      },
      {
        "id": "C",
        "texto": "Exonerar de todo pago de arancel e IVA a la mercancía de manera indefinida por haberse producido dentro del territorio de una Zona Franca colombiana.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Según el Decreto 2147 de 2016 y la normativa aduanera nacional, cuando un bien procesado en zona franca se introduce al TAN, la base gravable para liquidar el arancel aduanero corresponde exclusivamente al valor en aduana de las materias primas e insumos extranjeros incorporados en su elaboración, acreditados debidamente en el Certificado de Integración expedido por el Usuario Operador, aplicando la subpartida arancelaria del producto final."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Según el Decreto 2147 de 2016 y la normativa aduanera nacional, cuando un bien procesado en zona franca se introduce al TAN, la base gravable para liquidar el arancel aduanero corresponde exclusivamente al valor en aduana de las materias primas e insumos extranjeros incorporados en su elaboración, acreditados debidamente en el Certificado de Integración expedido por el Usuario Operador, aplicando la subpartida arancelaria del producto final.",
    "norma": "Decreto 2147 de 2016, Art. 52 y Decreto Ley 0920 de 2023",
    "citaNormativa": "Al Territorio Aduanero Nacional se liquidará el gravamen arancelario aplicable a la subpartida del producto final, únicamente sobre el valor en aduana de las materias primas e insumos extranjeros incorporados en el bien producido.",
    "dificultad": "ALTA",
    "competencia": "Valoración y Liquidación de Tributos Aduaneros en Zonas Francas",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_05",
    "perfil": "GESTOR_III",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Servicio al Ciudadano y PQSR",
    "tema": "Procedimiento Cercanía al Ciudadano PR-CAC-0043: Términos Perentorios de Respuesta",
    "contexto": "A través del Sistema de Radicación Electrónica PQSR y Denuncias de la DIAN, un ciudadano formula simultáneamente tres peticiones en un solo escrito: 1) Solicitud de copia de una resolución de nombramiento, 2) Queja contra la atención de un funcionario, y 3) Consulta jurídica sobre la interpretación doctrinal de la retención en la fuente por pagos al exterior.",
    "enunciado": "Como Gestor III encargado de coordinar la gestión de peticiones conforme al Procedimiento PR-CAC-0043 y la Ley 1755 de 2015, ¿cuáles son los términos legales que rigen el trámite de cada asunto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aplicar un plazo uniforme de 15 días hábiles a todas las solicitudes sin importar su naturaleza jurídica por encontrarse en el mismo radicado.",
        "explicacion": "Incorrecta. El procedimiento oficial PR-CAC-0043 y la Ley 1755 de 2015 fijan 10 días hábiles para peticiones de información y copias, y términos perentorios específicos según la modalidad."
      },
      {
        "id": "B",
        "texto": "Tramitar la entrega de copias en 10 días hábiles, la queja ciudadana en 15 días hábiles y la consulta jurídica institucional en un término de hasta 30 días hábiles, informando al peticionario la debida separación de competencias.",
        "explicacion": "Correcta. El Procedimiento PR-CAC-0043 de la DIAN y el Art. 14 de la Ley 1437 de 2015 (sustituido por la Ley 1755 de 2015) estipulan términos legales perentorios diferenciados: las peticiones de información y documentos prescriben a los diez (10) días hábiles; las peticiones de interés general, quejas y reclamos a los quince (15) días hábiles; y las consultas jurídicas sobre materias a cargo de la entidad a los treinta (30) días hábiles."
      },
      {
        "id": "C",
        "texto": "Conceder 6 meses de espera para responder la totalidad de las solicitudes mediante una sola respuesta acumulada anual.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Procedimiento PR-CAC-0043 de la DIAN y el Art. 14 de la Ley 1437 de 2015 (sustituido por la Ley 1755 de 2015) estipulan términos legales perentorios diferenciados: las peticiones de información y documentos prescriben a los diez (10) días hábiles; las peticiones de interés general, quejas y reclamos a los quince (15) días hábiles; y las consultas jurídicas sobre materias a cargo de la entidad a los treinta (30) días hábiles."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Procedimiento PR-CAC-0043 de la DIAN y el Art. 14 de la Ley 1437 de 2015 (sustituido por la Ley 1755 de 2015) estipulan términos legales perentorios diferenciados: las peticiones de información y documentos prescriben a los diez (10) días hábiles; las peticiones de interés general, quejas y reclamos a los quince (15) días hábiles; y las consultas jurídicas sobre materias a cargo de la entidad a los treinta (30) días hábiles.",
    "norma": "Procedimiento DIAN PR-CAC-0043 y Ley 1755 de 2015, Art. 14 (Sustituto de la Ley 1437 de 2011)",
    "citaNormativa": "Salvo norma legal especial, toda petición deberá resolverse dentro de los quince (15) días siguientes a su recepción. Las peticiones de documentos e información deberán resolverse dentro de los diez (10) días... Las peticiones mediante las cuales se eleva una consulta deberán resolverse dentro de los treinta (30) días siguientes a su recepción.",
    "dificultad": "MEDIA",
    "competencia": "Gestión de PQRSF y Garantía de Derechos Ciudadanos",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_06",
    "perfil": "GESTOR_III",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Servicio al Ciudadano y PQSR",
    "tema": "Trámite de Denuncias por Evasión o Contrabando (Procedimiento PR-CAC-0043)",
    "contexto": "Un comerciante formal radica en el sistema institucional PR-CAC-0043 una denuncia ciudadana detallada anexando facturas paralelas, planillas de inventarios no declarados y ubicación física de bodegas clandestinas donde se comercializan licores de contrabando.",
    "enunciado": "Como Gestor III que evalúa la radicación, ¿cuál es el procedimiento oficial para salvaguardar la reserva y canalizar la investigación?",
    "opciones": [
      {
        "id": "A",
        "texto": "Publicar los anexos y el nombre completo del denunciante en la cartelera física de la sede seccional para que el investigado ejerza contradicción inmediata.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Bajo el Procedimiento PR-CAC-0043 de la DIAN, las denuncias por evasión tributaria, contrabando o infracciones aduaneras deben tramitarse bajo absoluta reserva legal de los datos del denunciante y remitirse a la Dirección de Gestión de Fiscalización (Aduanera o Tributaria) para que se incorporen en las matrices de gestión de riesgo fiscal e inicien las auditorías pertinentes."
      },
      {
        "id": "B",
        "texto": "Clasificar la denuncia con estricta reserva de identidad, radicarla en el módulo de denuncias y remitirla inmediatamente a la Dirección de Gestión de Fiscalización para el análisis de riesgo y apertura del programa de control correspondiente.",
        "explicacion": "Correcta. Bajo el Procedimiento PR-CAC-0043 de la DIAN, las denuncias por evasión tributaria, contrabando o infracciones aduaneras deben tramitarse bajo absoluta reserva legal de los datos del denunciante y remitirse a la Dirección de Gestión de Fiscalización (Aduanera o Tributaria) para que se incorporen en las matrices de gestión de riesgo fiscal e inicien las auditorías pertinentes."
      },
      {
        "id": "C",
        "texto": "Archivar la denuncia de plano porque las denuncias fiscales deben ser formuladas exclusivamente ante la Fiscalía General de la Nación.",
        "explicacion": "Incorrecta. La inacción u omisión de denuncia e investigación incumple los deberes misionales y compromete la responsabilidad del servidor público."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Bajo el Procedimiento PR-CAC-0043 de la DIAN, las denuncias por evasión tributaria, contrabando o infracciones aduaneras deben tramitarse bajo absoluta reserva legal de los datos del denunciante y remitirse a la Dirección de Gestión de Fiscalización (Aduanera o Tributaria) para que se incorporen en las matrices de gestión de riesgo fiscal e inicien las auditorías pertinentes.",
    "norma": "Procedimiento DIAN PR-CAC-0043 (Numerales 4.2 y 5) y Art. 583 del Estatuto Tributario",
    "citaNormativa": "Las denuncias ciudadanas recibidas a través de los canales institucionales deberán remitirse a la dependencia competente de Fiscalización para su evaluación y trámite conforme a los criterios de riesgo, salvaguardando la identidad del denunciante.",
    "dificultad": "MEDIA",
    "competencia": "Trámite Reservado de Denuncias Fiscales",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_07",
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
    "id": "dian_guias_org_08",
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
    "id": "dian_guias_org_09",
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
    "id": "dian_guias_org_10",
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
    "id": "dian_guias_org_11",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Régimen Salarial y Prestacional DIAN",
    "tema": "Prima de Productividad en la DIAN: Requisitos y Criterios (Decreto Ley 1268 de 1999)",
    "contexto": "Un funcionario de la DIAN solicita el reconocimiento y pago de la Prima de Productividad estipulada en el Decreto 1268 de 1999. Sin embargo, durante el semestre correspondiente el funcionario obtuvo una calificación insatisfactoria en su evaluación del desempeño laboral.",
    "enunciado": "Como Gestor III responsable de liquidación de prestaciones y talento humano, ¿qué disposición legal debe aplicarse respecto a esta solicitud?",
    "opciones": [
      {
        "id": "A",
        "texto": "Pagar el 100% de la prima porque se trata de un derecho salarial ciego e incondicionado que no depende en ningún caso del rendimiento individual ni colectivo.",
        "explicacion": "Incorrecta. La prima de productividad del Decreto 1268 de 1999 exige expresamente el cumplimiento de metas y una calificación satisfactoria del desempeño."
      },
      {
        "id": "B",
        "texto": "Negar el reconocimiento de la prima de productividad, dado que el Decreto 1268 de 1999 condiciona taxativamente su pago al cumplimiento de metas de gestión institucionales y a un nivel satisfactorio en la evaluación del desempeño individual.",
        "explicacion": "Correcta. El Decreto Ley 1268 de 1999 regula el régimen salarial y prestacional de los servidores de la contribución en la DIAN. La Prima de Productividad tiene como presupuesto obligatorio el cumplimiento de las metas institucionales de recaudo y control, así como una calificación de servicios satisfactoria o sobresaliente por parte del funcionario en el periodo evaluado."
      },
      {
        "id": "C",
        "texto": "Duplicar el pago de la prima para compensar la baja calificación obtenida por el funcionario.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Decreto Ley 1268 de 1999 regula el régimen salarial y prestacional de los servidores de la contribución en la DIAN. La Prima de Productividad tiene como presupuesto obligatorio el cumplimiento de las metas institucionales de recaudo y control, así como una calificación de servicios satisfactoria o sobresaliente por parte del funcionario en el periodo evaluado."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Decreto Ley 1268 de 1999 regula el régimen salarial y prestacional de los servidores de la contribución en la DIAN. La Prima de Productividad tiene como presupuesto obligatorio el cumplimiento de las metas institucionales de recaudo y control, así como una calificación de servicios satisfactoria o sobresaliente por parte del funcionario en el periodo evaluado.",
    "norma": "Decreto Ley 1268 de 1999, Art. 6° y Decreto Reglamentario de Productividad DIAN",
    "citaNormativa": "La prima de productividad no constituye factor salarial para ningún efecto legal y su reconocimiento estará supeditado al cumplimiento de las metas de gestión fijadas para la entidad y a la obtención de una calificación de servicios satisfactoria.",
    "dificultad": "ALTA",
    "competencia": "Régimen Salarial Especial de Servidores DIAN",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_12",
    "perfil": "GESTOR_III",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Defensoría del Contribuyente y Garantías Ciudadanas",
    "tema": "Funciones y Alcance de la Defensoría del Contribuyente y Usuario Aduanero (Decreto 4048 de 2008)",
    "contexto": "Un importador presenta un requerimiento ante la Defensoría del Contribuyente y del Usuario Aduanero manifestando que una división aduanera retiene su cargamento perecedero pese a contar con autorización de levante y pago total de aranceles desde hace 5 días hábiles.",
    "enunciado": "Como Gestor III que tramita la intervención institucional, ¿cuál es el alcance legal de las funciones de la Defensoría del Contribuyente conforme al Decreto 4048 de 2008 y Decreto 1742 de 2020?",
    "opciones": [
      {
        "id": "A",
        "texto": "Reemplazar al Director General de la DIAN y modificar por decreto las partidas arancelarias de la mercancía.",
        "explicacion": "Incorrecta. La Defensoría del Contribuyente es un órgano de mediación y protección de garantías ciudadanas, sin facultades normativas ni directivas generales."
      },
      {
        "id": "B",
        "texto": "Velar por el respeto de los derechos del contribuyente y usuario aduanero, actuando como mediador y formulando recomendaciones de trámite prioritario e investigaciones ante los entes competentes por dilación injustificada.",
        "explicacion": "Correcta. La Defensoría del Contribuyente y del Usuario Aduanero de la DIAN (Decreto 4048 de 2008, Art. 53 y Dec. 1742 de 2020) es una dependencia especial que garantiza la debida protección y efectividad de los derechos de los usuarios y contribuyentes frente a actuaciones arbitrarias, dilaciones injustificadas o vulneraciones de garantías procedimentales en la administración tributaria y aduanera."
      },
      {
        "id": "C",
        "texto": "Negar la atención por considerar que la Defensoría únicamente atiende litigios laborales de los empleados internos de la DIAN.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Defensoría del Contribuyente y del Usuario Aduanero de la DIAN (Decreto 4048 de 2008, Art. 53 y Dec. 1742 de 2020) es una dependencia especial que garantiza la debida protección y efectividad de los derechos de los usuarios y contribuyentes frente a actuaciones arbitrarias, dilaciones injustificadas o vulneraciones de garantías procedimentales en la administración tributaria y aduanera."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Defensoría del Contribuyente y del Usuario Aduanero de la DIAN (Decreto 4048 de 2008, Art. 53 y Dec. 1742 de 2020) es una dependencia especial que garantiza la debida protección y efectividad de los derechos de los usuarios y contribuyentes frente a actuaciones arbitrarias, dilaciones injustificadas o vulneraciones de garantías procedimentales en la administración tributaria y aduanera.",
    "norma": "Decreto 4048 de 2008, Art. 53 y Decreto 1742 de 2020",
    "citaNormativa": "La Defensoría del Contribuyente y del Usuario Aduanero velará por el respeto de los derechos de los contribuyentes, responsables, agentes retenedores, declarantes y usuarios aduaneros, en sus relaciones con la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales.",
    "dificultad": "MEDIA",
    "competencia": "Protección y Garantías del Contribuyente",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_13",
    "perfil": "GESTOR_III",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Archivo DIAN",
    "tema": "Plan Institucional de Archivos PINAR: Tablas de Retención y Valoración de Expedientes Tributarios",
    "contexto": "En una oficina seccional de fiscalización, ante la falta de espacio físico en los anaqueles, el coordinador ordena desechar e incinerar expedientes tributarios en papel con menos de 3 años de antigüedad, argumentando que dichos actos fueron notificados por correo electrónico.",
    "enunciado": "Como Gestor III a cargo de la gestión documental conforme al PINAR DIAN y la Ley 594 de 2000, ¿qué acción técnica y legal debe imponerse de inmediato?",
    "opciones": [
      {
        "id": "A",
        "texto": "Apoyar la incineración para acelerar la limpieza física de las instalaciones administrativas.",
        "explicacion": "Incorrecta. Destruir o enajenar expedientes tributarios viola la Ley 594 de 2000 (Ley General de Archivos) y la reserva legal documental."
      },
      {
        "id": "B",
        "texto": "Frenar la destrucción de expedientes, exigiendo el cumplimiento estricto de las Tablas de Retención Documental (TRD) y las transferencias secundarias, recordando que los expedientes tributarios y aduaneros tienen reserva legal y tiempos de conservación regulados por la Ley 594 de 2000.",
        "explicacion": "Correcta. El PINAR DIAN y la Ley General de Archivos (Ley 594 de 2000) prohíben la eliminación indiscriminada de documentos públicos sin aplicar las Tablas de Retención Documental (TRD) debidamente aprobadas por el Comité de Archivo Institucional. Además, los expedientes tributarios poseen valor probatorio fiscal y fiscalizable durante el término de firmeza de las declaraciones y cobro coactivo."
      },
      {
        "id": "C",
        "texto": "Regalar los expedientes a recicladores informales para obtener fondos de bienestar para la división.",
        "explicacion": "Incorrecta. Destruir o enajenar expedientes tributarios viola la Ley 594 de 2000 (Ley General de Archivos) y la reserva legal documental."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El PINAR DIAN y la Ley General de Archivos (Ley 594 de 2000) prohíben la eliminación indiscriminada de documentos públicos sin aplicar las Tablas de Retención Documental (TRD) debidamente aprobadas por el Comité de Archivo Institucional. Además, los expedientes tributarios poseen valor probatorio fiscal y fiscalizable durante el término de firmeza de las declaraciones y cobro coactivo.",
    "norma": "Plan Institucional de Archivos PINAR DIAN y Ley 594 de 2000, Art. 24",
    "citaNormativa": "Las entidades del Estado deberán elaborar y adoptar las respectivas tablas de retención documental... La eliminación de documentos se efectuará de conformidad con lo establecido en las tablas de retención documental.",
    "dificultad": "ALTA",
    "competencia": "Gestión Documental y Custodia Probatoria Fiscal",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_14",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Convocatoria DIAN y Reglas del Proceso de Selección",
    "tema": "Modalidad de Ascenso vs. Modalidad de Ingreso Abierto (Acuerdo No. 08 de 2022 y Ley 1960 de 2019)",
    "contexto": "Un empleado con derechos de carrera administrativa en la DIAN en el cargo de Analista I se inscribe al concurso en la modalidad de ascenso para un empleo de Gestor I. Al momento de la Verificación de Requisitos Mínimos, la universidad operadora constata que el aspirante no aportó el título universitario exigido en el Manual Específico de Funciones y Requisitos, sino una certificación de haber cursado hasta 7° semestre.",
    "enunciado": "Conforme a los Acuerdos 08 de 2022 y 24 de 2023 de la CNSC, ¿cuál es el resultado legal que corresponde en la etapa de VRM?",
    "opciones": [
      {
        "id": "A",
        "texto": "Declarar 'No Admitido' en la etapa de VRM, dado que en los concursos de ascenso los requisitos mínimos de estudio y experiencia del empleo deben cumplirse y acreditarse de manera obligatoria a la fecha de cierre de inscripciones.",
        "explicacion": "Correcta. Tanto la Ley 1960 de 2019 como el Acuerdo No. 08 de 2022 de la CNSC disponen que para participar en la modalidad de ascenso es obligatorio ostentar derechos de carrera y cumplir a cabalidad con la totalidad de los requisitos mínimos de estudio y experiencia exigidos para el cargo en la OPEC al momento del cierre de inscripciones, sin excepciones ni plazos posteriores."
      },
      {
        "id": "B",
        "texto": "Otorgarle un plazo de gracia de 2 años después de posesionado para que termine las materias universitarias pendientes.",
        "explicacion": "Incorrecta. En los concursos de mérito de la CNSC, los requisitos mínimos son de cumplimiento obligatorio y estricto al momento del cierre de inscripciones."
      },
      {
        "id": "C",
        "texto": "Homologar de forma automática el título profesional por el solo hecho de ser servidor de carrera en la DIAN.",
        "explicacion": "Incorrecta. En los concursos de mérito de la CNSC, los requisitos mínimos son de cumplimiento obligatorio y estricto al momento del cierre de inscripciones."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "Tanto la Ley 1960 de 2019 como el Acuerdo No. 08 de 2022 de la CNSC disponen que para participar en la modalidad de ascenso es obligatorio ostentar derechos de carrera y cumplir a cabalidad con la totalidad de los requisitos mínimos de estudio y experiencia exigidos para el cargo en la OPEC al momento del cierre de inscripciones, sin excepciones ni plazos posteriores.",
    "norma": "Acuerdo No. 08 de 2022 CNSC (Art. 10 y ss.) y Ley 1960 de 2019",
    "citaNormativa": "Los aspirantes a los empleos en modalidad de ascenso deben cumplir y acreditar los requisitos mínimos señalados en el manual específico de funciones y de competencias laborales a la fecha de cierre de la etapa de inscripciones.",
    "dificultad": "MEDIA",
    "competencia": "Normativa de Concursos Públicos de Mérito",
    "nivel": "Profesional"
  },
  {
    "id": "dian_guias_org_15",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Convocatoria DIAN y Reglas del Proceso de Selección",
    "tema": "Ponderación de Pruebas: Carácter Eliminatorio de Competencias Funcionales (Guía de Orientación al Aspirante)",
    "contexto": "Un aspirante a un empleo de Gestor III en el Proceso de Selección DIAN 2676 obtiene una calificación de 66.50 puntos sobre 100 en la prueba escrita sobre competencias funcionales (cuyo puntaje mínimo aprobatorio estipulado en el Acuerdo es de 70.00 puntos). El aspirante interpone reclamación exigiendo que se le sumen los 100 puntos que obtuvo en su maestría y publicaciones en la prueba de Valoración de Antecedentes para promediar.",
    "enunciado": "De acuerdo con el Acuerdo de Convocatoria y la Guía de Orientación al Aspirante (GOA), ¿cómo debe resolverse en derecho esta reclamación?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la reclamación y promediar los antecedentes porque el posgrado compensa el déficit de puntaje en la prueba escrita.",
        "explicacion": "Incorrecta. La prueba funcional tiene carácter eliminatorio; no aprobarla impide acceder a la valoración de antecedentes sin excepción."
      },
      {
        "id": "B",
        "texto": "Rechazar la reclamación y confirmar la exclusión del concurso, ya que la prueba de competencias funcionales tiene carácter estrictamente eliminatorio y su no aprobación impide acceder a la etapa clasificatoria de Valoración de Antecedentes.",
        "explicacion": "Correcta. El Acuerdo de Convocatoria DIAN y la Guía de Orientación al Aspirante establecen que la prueba sobre competencias funcionales tiene carácter eliminatorio. Quien no alcance el puntaje mínimo aprobatorio (70.00 puntos) queda automáticamente excluido del proceso de selección y no continúa a la etapa clasificatoria de Valoración de Antecedentes ni de Competencias Comportamentales."
      },
      {
        "id": "C",
        "texto": "Repetir la prueba escrita de manera personalizada al aspirante para evitar demandas contenciosas.",
        "explicacion": "Incorrecta. La prueba funcional tiene carácter eliminatorio; no aprobarla impide acceder a la valoración de antecedentes sin excepción."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Acuerdo de Convocatoria DIAN y la Guía de Orientación al Aspirante establecen que la prueba sobre competencias funcionales tiene carácter eliminatorio. Quien no alcance el puntaje mínimo aprobatorio (70.00 puntos) queda automáticamente excluido del proceso de selección y no continúa a la etapa clasificatoria de Valoración de Antecedentes ni de Competencias Comportamentales.",
    "norma": "Acuerdo No. 08 de 2022 CNSC, Art. 21 y Guía de Orientación al Aspirante DIAN 2676",
    "citaNormativa": "La prueba sobre competencias funcionales tiene carácter eliminatorio y un puntaje mínimo aprobatorio... Los aspirantes que no alcancen dicho puntaje no continuarán en el proceso de selección y quedarán eliminados del mismo.",
    "dificultad": "ALTA",
    "competencia": "Reglas de Ponderación y Estructura de Pruebas CNSC",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_01",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Gestión Eficiente de Documentos en Word: Apertura Rápida de Archivos Oficiales",
    "contexto": "En el desarrollo de sus labores de fiscalización y gestión jurídica en la DIAN, un Gestor III debe trabajar simultáneamente en varios informes técnicos. Mientras redacta un pliego de cargos, la jefatura le solicita abrir con urgencia un nuevo documento en blanco para proyectar un oficio perentorio dirigido a un contribuyente.",
    "enunciado": "Para abrir de inmediato un nuevo documento en blanco en Microsoft Word mediante el atajo oficial de teclado, usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Presiona la combinación de teclas Control + U.",
        "explicacion": "Correcta. En Microsoft Word en español, el atajo de teclado oficial para abrir un nuevo documento en blanco es Control + U. La combinación Control + N se utiliza para aplicar formato de negrita al texto seleccionado."
      },
      {
        "id": "B",
        "texto": "Presiona la combinación de teclas Control + N.",
        "explicacion": "Incorrecta. En Microsoft Word en español, Control + N aplica el formato de negrita (Bold) al texto seleccionado, no abre un nuevo documento."
      },
      {
        "id": "C",
        "texto": "Presiona la combinación de teclas Alt + N.",
        "explicacion": "Incorrecta. Alt + N activa la pestaña Insertar en la cinta de opciones mediante el acceso por teclado de Office."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "En Microsoft Word en español, el atajo de teclado oficial para abrir un nuevo documento en blanco es Control + U. La combinación Control + N se utiliza para aplicar formato de negrita al texto seleccionado.",
    "norma": "Estándar Oficial Microsoft Office Word y Guía de Eficiencia Administrativa Función Pública",
    "citaNormativa": "Métodos abreviados de teclado en Word: 'Ctrl + U' crea un nuevo documento en blanco de manera inmediata.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_02",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Alineación de Texto y Estructura en Word: Centrado de Títulos y Encabezados",
    "contexto": "Al estructurar una resolución sancionatoria conforme a las normas de estilo de la DIAN, se requiere centrar el título principal y los encabezados de los considerandos antes de proceder al guardado y firma digital del documento.",
    "enunciado": "¿Cuál es el comando abreviado correcto en Word para centrar el texto seleccionado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Selecciona el contenido y usa la abreviatura Control + C.",
        "explicacion": "Incorrecta. Control + C es el atajo universal para Copiar el elemento seleccionado al portapapeles."
      },
      {
        "id": "B",
        "texto": "Selecciona el contenido y usa la abreviatura Control + T (o Control + E en versiones tradicionales de centrado).",
        "explicacion": "Correcta. En Microsoft Word, la función de centrar texto se ejecuta mediante el comando de teclado Control + T (o Control + E según la versión lingüística de Office). Control + C está reservado para la función Copiar."
      },
      {
        "id": "C",
        "texto": "Selecciona el contenido y usa la abreviatura Alt + E.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: En Microsoft Word, la función de centrar texto se ejecuta mediante el comando de teclado Control + T (o Control + E según la versión lingüística de Office). Control + C está reservado para la función Copiar."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "En Microsoft Word, la función de centrar texto se ejecuta mediante el comando de teclado Control + T (o Control + E según la versión lingüística de Office). Control + C está reservado para la función Copiar.",
    "norma": "Manual de Estilo y Correspondencia Oficial DIAN / Soporte Microsoft Office",
    "citaNormativa": "Atajos de edición en Word: la alineación centrada del texto se aplica sobre la selección mediante el atajo de centrado.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_03",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Corrección de Errores Operativos: Deshacer Acciones en Word",
    "contexto": "Durante la edición de un informe técnico tributario confidencial, el funcionario borra involuntariamente una tabla de liquidación arancelaria recién calculada debido a un deslizamiento del ratón.",
    "enunciado": "Para recuperar de inmediato la tabla borrada revirtiendo la última acción errónea, usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Cierra el programa sin guardar cambios perdiendo todo el trabajo de la mañana.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La combinación Control + Z es el estándar universal de Microsoft Office y Windows para deshacer inmediatamente la última acción efectuada, restaurando el contenido eliminado."
      },
      {
        "id": "B",
        "texto": "Presiona la combinación de teclas Control + Z para deshacer la última acción.",
        "explicacion": "Correcta. La combinación Control + Z es el estándar universal de Microsoft Office y Windows para deshacer inmediatamente la última acción efectuada, restaurando el contenido eliminado."
      },
      {
        "id": "C",
        "texto": "Presiona la combinación de teclas Control + Y para avanzar a la siguiente página.",
        "explicacion": "Incorrecta. Control + Y es el comando para Rehacer la última acción revertida, mientras que Deshacer es Control + Z."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La combinación Control + Z es el estándar universal de Microsoft Office y Windows para deshacer inmediatamente la última acción efectuada, restaurando el contenido eliminado.",
    "norma": "Soporte Técnico Microsoft Office y Estándares de Seguridad de la Información DIAN",
    "citaNormativa": "Comandos universales de edición: 'Ctrl + Z' deshace la acción previa en el documento de trabajo.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_04",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Paginación y Saltos de Sección en Documentos Extensos",
    "contexto": "Al finalizar el primer capítulo de un expediente administrativo de 40 páginas, se requiere que el siguiente capítulo comience en la parte superior de una página nueva sin tener que presionar la tecla Enter repetidamente.",
    "enunciado": "¿Cuál es la acción técnica recomendada para forzar el inicio de una página nueva de manera profesional?",
    "opciones": [
      {
        "id": "A",
        "texto": "Insertar un salto de página utilizando la combinación de teclas Control + Enter (Intro).",
        "explicacion": "Correcta. En Microsoft Word, la inserción de un Salto de Página mediante el atajo Control + Enter garantiza que el nuevo texto comience en la página siguiente de manera limpia, evitando desplazamientos involuntarios cuando se modifiquen los párrafos precedentes."
      },
      {
        "id": "B",
        "texto": "Presionar la barra espaciadora hasta que el texto ruede al siguiente folio.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: En Microsoft Word, la inserción de un Salto de Página mediante el atajo Control + Enter garantiza que el nuevo texto comience en la página siguiente de manera limpia, evitando desplazamientos involuntarios cuando se modifiquen los párrafos precedentes."
      },
      {
        "id": "C",
        "texto": "Reducir el tamaño de la fuente a 2 puntos para que quepa en la misma hoja.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: En Microsoft Word, la inserción de un Salto de Página mediante el atajo Control + Enter garantiza que el nuevo texto comience en la página siguiente de manera limpia, evitando desplazamientos involuntarios cuando se modifiquen los párrafos precedentes."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "En Microsoft Word, la inserción de un Salto de Página mediante el atajo Control + Enter garantiza que el nuevo texto comience en la página siguiente de manera limpia, evitando desplazamientos involuntarios cuando se modifiquen los párrafos precedentes.",
    "norma": "Guía de Buenas Prácticas Documentales en la Administración Pública y Soporte Office",
    "citaNormativa": "Paginación profesional: El salto de página ('Ctrl + Enter') fija el quiebre de página independientemente de ediciones futuras.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_05",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Combinación de Correspondencia Masiva a Contribuyentes",
    "contexto": "La división de cobranzas de la DIAN debe enviar comunicaciones personalizadas a 500 deudores morosos. Cada carta debe contener el nombre del contribuyente, el NIT, el monto adeudado y el periodo fiscal, tomando los datos de una hoja electrónica de Excel.",
    "enunciado": "Para automatizar este envío masivo sin redactar cada oficio individualmente, ¿qué herramienta de Word debe utilizarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Copiar y pegar manualmente los 500 registros uno por uno en documentos separados.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Combinación de Correspondencia en Word permite conectar un documento modelo con un origen de datos (hoja de cálculo de Excel o base de datos), insertando campos combinados como NIT, nombre y valor adeudado para generar masivamente oficios personalizados de forma exacta y automatizada."
      },
      {
        "id": "B",
        "texto": "Utilizar el Asistente para Combinación de Correspondencia (Mail Merge) vinculando el archivo de Excel como origen de datos e insertando los campos combinados.",
        "explicacion": "Correcta. La Combinación de Correspondencia en Word permite conectar un documento modelo con un origen de datos (hoja de cálculo de Excel o base de datos), insertando campos combinados como NIT, nombre y valor adeudado para generar masivamente oficios personalizados de forma exacta y automatizada."
      },
      {
        "id": "C",
        "texto": "Crear una macro en bloc de notas para imprimir las hojas sin formato.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Combinación de Correspondencia en Word permite conectar un documento modelo con un origen de datos (hoja de cálculo de Excel o base de datos), insertando campos combinados como NIT, nombre y valor adeudado para generar masivamente oficios personalizados de forma exacta y automatizada."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Combinación de Correspondencia en Word permite conectar un documento modelo con un origen de datos (hoja de cálculo de Excel o base de datos), insertando campos combinados como NIT, nombre y valor adeudado para generar masivamente oficios personalizados de forma exacta y automatizada.",
    "norma": "Procedimiento de Notificaciones Masivas DIAN y Manual de Usuario Office",
    "citaNormativa": "La combinación de correspondencia permite crear un lote de documentos personalizados donde cada carta contiene información única procedente de una fuente de datos.",
    "dificultad": "MEDIA",
    "competencia": "Automatización Documental y Gestión de Información",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_06",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Pegado Especial: Conservar Solo Texto al Importar Datos desde Internet",
    "contexto": "Al copiar extractos de sentencias del Consejo de Estado y normas desde la página web de la DIAN para insertarlos en un concepto jurídico, el texto pegado arrastra fuentes discordantes, colores de fondo y enlaces no deseados.",
    "enunciado": "Para homologar el formato al estilo institucional de Word sin arrastrar formatos externos, ¿qué opción de pegado debe elegirse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Hacer clic en 'Conservar formato de origen'.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La opción 'Conservar solo texto' elimina las etiquetas HTML, estilos ajenos, hipervínculos indeseados y colores de fondo, adoptando automáticamente la tipografía y el interlineado del documento de destino en Word."
      },
      {
        "id": "B",
        "texto": "Hacer clic en Pegado Especial y seleccionar 'Conservar solo texto' (o Texto sin formato).",
        "explicacion": "Correcta. La opción 'Conservar solo texto' elimina las etiquetas HTML, estilos ajenos, hipervínculos indeseados y colores de fondo, adoptando automáticamente la tipografía y el interlineado del documento de destino en Word."
      },
      {
        "id": "C",
        "texto": "Pegar como imagen no editable para evitar alteraciones.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La opción 'Conservar solo texto' elimina las etiquetas HTML, estilos ajenos, hipervínculos indeseados y colores de fondo, adoptando automáticamente la tipografía y el interlineado del documento de destino en Word."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La opción 'Conservar solo texto' elimina las etiquetas HTML, estilos ajenos, hipervínculos indeseados y colores de fondo, adoptando automáticamente la tipografía y el interlineado del documento de destino en Word.",
    "norma": "Manual de Estilo Institucional DIAN y Guía Técnica de Ofimática",
    "citaNormativa": "Opciones de pegado en Office: 'Conservar solo texto' elimina el formato original y hace coincidir el contenido con el formato del párrafo de destino.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_07",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Selección Rápida de Párrafos con el Ratón en Word",
    "contexto": "Durante la revisión de un extenso memorial tributario, se requiere seleccionar un párrafo completo de argumentación para cambiarle el interlineado a 1.5 líneas.",
    "enunciado": "¿Cuál es la acción de ratón más rápida y precisa para seleccionar automáticamente todo un párrafo en Word?",
    "opciones": [
      {
        "id": "A",
        "texto": "Hacer un solo clic en el centro de cualquier palabra.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: En Microsoft Word, hacer triple clic dentro de un párrafo selecciona automáticamente todo el párrafo completo. El doble clic selecciona únicamente la palabra sobre la que se presiona."
      },
      {
        "id": "B",
        "texto": "Hacer doble clic sobre la primera letra del párrafo.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: En Microsoft Word, hacer triple clic dentro de un párrafo selecciona automáticamente todo el párrafo completo. El doble clic selecciona únicamente la palabra sobre la que se presiona."
      },
      {
        "id": "C",
        "texto": "Hacer triple clic en cualquier parte dentro del párrafo.",
        "explicacion": "Correcta. En Microsoft Word, hacer triple clic dentro de un párrafo selecciona automáticamente todo el párrafo completo. El doble clic selecciona únicamente la palabra sobre la que se presiona."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "En Microsoft Word, hacer triple clic dentro de un párrafo selecciona automáticamente todo el párrafo completo. El doble clic selecciona únicamente la palabra sobre la que se presiona.",
    "norma": "Soporte Técnico Microsoft Word / Técnicas de Productividad Ofimática",
    "citaNormativa": "Métodos de selección rápida: Doble clic selecciona una palabra; triple clic selecciona el párrafo completo.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_08",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Cálculo de Totales en Excel: Función SUMA en Rangos Continuos",
    "contexto": "En una hoja de fiscalización tributaria se listan los valores de retención en la fuente declarados por un contribuyente durante los 12 meses del año en las celdas B2 hasta B13.",
    "enunciado": "¿Cuál es la sintaxis correcta de la fórmula para totalizar dichos valores en la celda B14?",
    "opciones": [
      {
        "id": "A",
        "texto": "=SUMAR(B2-B13)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La sintaxis estándar en Excel para sumar un rango continuo de celdas utiliza la función SUMA con el operador de rango de dos puntos: '=SUMA(B2:B13)'."
      },
      {
        "id": "B",
        "texto": "=SUMA(B2:B13)",
        "explicacion": "Correcta. La sintaxis estándar en Excel para sumar un rango continuo de celdas utiliza la función SUMA con el operador de rango de dos puntos: '=SUMA(B2:B13)'."
      },
      {
        "id": "C",
        "texto": "=TOTAL(B2..B13)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La sintaxis estándar en Excel para sumar un rango continuo de celdas utiliza la función SUMA con el operador de rango de dos puntos: '=SUMA(B2:B13)'."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La sintaxis estándar en Excel para sumar un rango continuo de celdas utiliza la función SUMA con el operador de rango de dos puntos: '=SUMA(B2:B13)'.",
    "norma": "Estándar Oficial Microsoft Excel y Guía de Auditoría Fiscal DIAN",
    "citaNormativa": "Funciones matemáticas en Excel: 'SUMA(número1, [número2], ...)' suma todos los números de un rango de celdas especificado.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_09",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Identificación de Valores Extremos: Función MAX en Auditorías de Precios",
    "contexto": "En un control aduanero de valoración de mercancías importadas, se cuenta con una columna (C2 a C50) con los precios unitarios declarados por diferentes agencias para una misma partida arancelaria.",
    "enunciado": "Para determinar de forma automática cuál es el precio unitario más alto de la muestra, ¿qué fórmula debe insertarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "=ALTO(C2:C50)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función MAX en Microsoft Excel devuelve el valor numérico máximo de un conjunto de valores contenidos en un rango de celdas ('=MAX(C2:C50)')."
      },
      {
        "id": "B",
        "texto": "=MAYOR(C2:C50)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función MAX en Microsoft Excel devuelve el valor numérico máximo de un conjunto de valores contenidos en un rango de celdas ('=MAX(C2:C50)')."
      },
      {
        "id": "C",
        "texto": "=MAX(C2:C50)",
        "explicacion": "Correcta. La función MAX en Microsoft Excel devuelve el valor numérico máximo de un conjunto de valores contenidos en un rango de celdas ('=MAX(C2:C50)')."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "La función MAX en Microsoft Excel devuelve el valor numérico máximo de un conjunto de valores contenidos en un rango de celdas ('=MAX(C2:C50)').",
    "norma": "Soporte Técnico Microsoft Excel y Procedimientos de Valoración Aduanera DIAN",
    "citaNormativa": "Funciones estadísticas en Excel: 'MAX' devuelve el valor más grande de un conjunto de datos.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_10",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Cálculo de Medias Estadísticas: Función PROMEDIO en Gestión Tributaria",
    "contexto": "Un auditor requiere calcular el promedio mensual de ventas gravadas con IVA de una empresa durante el año, ubicadas en el rango D2 a D13.",
    "enunciado": "¿Cuál es la fórmula correspondiente para obtener la media aritmética exacta?",
    "opciones": [
      {
        "id": "A",
        "texto": "=PROMEDIO(D2:D13)",
        "explicacion": "Correcta. La función PROMEDIO en Excel suma los valores del rango especificado y los divide automáticamente entre la cantidad de celdas numéricas que contiene el rango."
      },
      {
        "id": "B",
        "texto": "=MEDIA(D2:D13)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función PROMEDIO en Excel suma los valores del rango especificado y los divide automáticamente entre la cantidad de celdas numéricas que contiene el rango."
      },
      {
        "id": "C",
        "texto": "=SUMA(D2:D13)/10",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función PROMEDIO en Excel suma los valores del rango especificado y los divide automáticamente entre la cantidad de celdas numéricas que contiene el rango."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La función PROMEDIO en Excel suma los valores del rango especificado y los divide automáticamente entre la cantidad de celdas numéricas que contiene el rango.",
    "norma": "Estándar Oficial Microsoft Excel",
    "citaNormativa": "Funciones estadísticas: 'PROMEDIO' calcula la media aritmética de los argumentos contenidos en el rango seleccionado.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_11",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Condicionales Lógicos en Fiscalización: Función SI en Excel",
    "contexto": "En una matriz de control de obligaciones, la columna E contiene el valor de ingresos brutos anuales de varios contribuyentes y el tope legal para estar obligado a declarar renta es de $59.000.000. Se requiere que en la columna F aparezca 'OBLIGADO' si el valor de la celda E2 supera dicho tope y 'NO OBLIGADO' en caso contrario.",
    "enunciado": "¿Cuál es la formulación lógica correcta que debe implementarse en la celda F2?",
    "opciones": [
      {
        "id": "A",
        "texto": "=SI(E2>59000000, \"OBLIGADO\", \"NO OBLIGADO\")",
        "explicacion": "Correcta. La función condicional SI evalúa una prueba lógica y devuelve un valor si es verdadera y otro si es falsa: '=SI(prueba_lógica, [valor_si_verdadero], [valor_si_falso])'. Al tratarse de cadenas de texto, deben encerrarse entre comillas dobles."
      },
      {
        "id": "B",
        "texto": "=CONDICION(E2>59000000, OBLIGADO, NO)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función condicional SI evalúa una prueba lógica y devuelve un valor si es verdadera y otro si es falsa: '=SI(prueba_lógica, [valor_si_verdadero], [valor_si_falso])'. Al tratarse de cadenas de texto, deben encerrarse entre comillas dobles."
      },
      {
        "id": "C",
        "texto": "=VERDADERO_FALSO(E2, 59000000, \"OBLIGADO\")",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función condicional SI evalúa una prueba lógica y devuelve un valor si es verdadera y otro si es falsa: '=SI(prueba_lógica, [valor_si_verdadero], [valor_si_falso])'. Al tratarse de cadenas de texto, deben encerrarse entre comillas dobles."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La función condicional SI evalúa una prueba lógica y devuelve un valor si es verdadera y otro si es falsa: '=SI(prueba_lógica, [valor_si_verdadero], [valor_si_falso])'. Al tratarse de cadenas de texto, deben encerrarse entre comillas dobles.",
    "norma": "Soporte Oficial Microsoft Excel y Manual de Fiscalización DIAN",
    "citaNormativa": "Funciones lógicas en Excel: La función 'SI' comprueba si se cumple una condición y devuelve un valor si se evalúa como VERDADERO y otro si se evalúa como FALSO.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_12",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Búsqueda y Cruce de Información: Función BUSCARV (VLOOKUP)",
    "contexto": "Se dispone de una base de datos institucional de 10.000 contribuyentes en la 'Hoja1'. En una hoja de trabajo separada, un Gestor III tiene una lista de 50 NITs y necesita extraer el nombre o razón social correspondiente ubicado en la columna 2 de la matriz A2:D10000.",
    "enunciado": "Para traer el nombre exacto del contribuyente cuyo NIT está en la celda A2, ¿qué fórmula debe utilizarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "=BUSCARV(A2, Hoja1!$A$2:$D$10000, 2, FALSO)",
        "explicacion": "Correcta. La función BUSCARV busca un valor en la primera columna de una tabla hacia la izquierda y devuelve el valor de la columna especificada (columna 2). El argumento FALSO (o 0) garantiza una coincidencia exacta del NIT y las referencias absolutas ($) fijan la matriz."
      },
      {
        "id": "B",
        "texto": "=ENCONTRAR(A2, Hoja1!A2:D10000, 2)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función BUSCARV busca un valor en la primera columna de una tabla hacia la izquierda y devuelve el valor de la columna especificada (columna 2). El argumento FALSO (o 0) garantiza una coincidencia exacta del NIT y las referencias absolutas ($) fijan la matriz."
      },
      {
        "id": "C",
        "texto": "=EXTRAER(A2, 2, VERDADERO)",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La función BUSCARV busca un valor en la primera columna de una tabla hacia la izquierda y devuelve el valor de la columna especificada (columna 2). El argumento FALSO (o 0) garantiza una coincidencia exacta del NIT y las referencias absolutas ($) fijan la matriz."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La función BUSCARV busca un valor en la primera columna de una tabla hacia la izquierda y devuelve el valor de la columna especificada (columna 2). El argumento FALSO (o 0) garantiza una coincidencia exacta del NIT y las referencias absolutas ($) fijan la matriz.",
    "norma": "Soporte Microsoft Excel y Guía de Cruces de Información Exógena DIAN",
    "citaNormativa": "Búsqueda y referencia: 'BUSCARV(valor_buscado, matriz_tabla, indicador_columnas, [rango])' busca en la primera columna y devuelve un valor en la misma fila desde una columna especificada.",
    "dificultad": "ALTA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_13",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Referencias Absolutas vs. Relativas: El Símbolo $ en Excel",
    "contexto": "Al calcular el impuesto liquidado para una lista de 200 liquidaciones, cada base gravable (columna B) debe multiplicarse por la tarifa general de renta del 35%, la cual está registrada de manera fija y única en la celda H1.",
    "enunciado": "Para que al arrastrar la fórmula hacia abajo la referencia a la celda H1 no se desplace a H2, H3, etc., ¿cómo debe escribirse la fórmula en la celda C2?",
    "opciones": [
      {
        "id": "A",
        "texto": "=B2*H1",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El signo de pesos ($) antes de la letra de la columna y del número de fila ($H$1) crea una referencia absoluta fija. Al copiar o arrastrar la fórmula a otras celdas, la referencia a H1 permanece inmutable mientras que B2 cambia a B3, B4 de forma relativa."
      },
      {
        "id": "B",
        "texto": "=B2*$H$1",
        "explicacion": "Correcta. El signo de pesos ($) antes de la letra de la columna y del número de fila ($H$1) crea una referencia absoluta fija. Al copiar o arrastrar la fórmula a otras celdas, la referencia a H1 permanece inmutable mientras que B2 cambia a B3, B4 de forma relativa."
      },
      {
        "id": "C",
        "texto": "=B2&#H1",
        "explicacion": "Incorrecta. El ampersand (&) es un operador de concatenación de cadenas de texto en Excel, no de fijación de celdas."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El signo de pesos ($) antes de la letra de la columna y del número de fila ($H$1) crea una referencia absoluta fija. Al copiar o arrastrar la fórmula a otras celdas, la referencia a H1 permanece inmutable mientras que B2 cambia a B3, B4 de forma relativa.",
    "norma": "Manual Técnico de Modelación Financiera y Soporte Microsoft Excel",
    "citaNormativa": "Referencias en Excel: Una referencia absoluta de celda (por ejemplo, $A$1) siempre hace referencia a una celda en una ubicación específica.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_14",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Análisis Multidimensional: Tablas Dinámicas en Grandes Volúmenes de Datos",
    "contexto": "La Dirección de Gestión de Fiscalización remite un archivo plano con más de 100.000 registros de declaraciones de importación con datos de seccional, fecha, tipo de mercancía y valor CIF. La jefatura solicita un informe gerencial que resuma el total importado por cada seccional y por cada mes en menos de 10 minutos.",
    "enunciado": "¿Cuál es la herramienta más eficaz y rápida en Excel para generar este resumen gerencial agrupado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ordenar manualmente los 100.000 datos e ir sumando seccional por seccional con una calculadora externa.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Las Tablas Dinámicas en Excel son la herramienta idónea para explorar, resumir, calcular y analizar grandes volúmenes de datos en segundos, permitiendo realizar comparaciones, detectar patrones y generar informes gerenciales multidimensionales de manera automática."
      },
      {
        "id": "B",
        "texto": "Insertar una Tabla Dinámica (Pivot Table) arrastrando el campo Seccional a Filas, el campo Mes a Columnas y el campo Valor CIF a Valores.",
        "explicacion": "Correcta. Las Tablas Dinámicas en Excel son la herramienta idónea para explorar, resumir, calcular y analizar grandes volúmenes de datos en segundos, permitiendo realizar comparaciones, detectar patrones y generar informes gerenciales multidimensionales de manera automática."
      },
      {
        "id": "C",
        "texto": "Exportar el archivo a formato Word para hacer una tabla de texto.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Las Tablas Dinámicas en Excel son la herramienta idónea para explorar, resumir, calcular y analizar grandes volúmenes de datos en segundos, permitiendo realizar comparaciones, detectar patrones y generar informes gerenciales multidimensionales de manera automática."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Las Tablas Dinámicas en Excel son la herramienta idónea para explorar, resumir, calcular y analizar grandes volúmenes de datos en segundos, permitiendo realizar comparaciones, detectar patrones y generar informes gerenciales multidimensionales de manera automática.",
    "norma": "Guía de Analítica y Reportería Gerencial DIAN / Soporte Microsoft Excel",
    "citaNormativa": "Una tabla dinámica es una herramienta avanzada para calcular, resumir y analizar datos que le permite ver comparaciones, patrones y tendencias en ellos.",
    "dificultad": "ALTA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_15",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Protección de Datos Personales en Correo Institucional: Uso de CCO en Outlook",
    "contexto": "La dependencia de servicio al ciudadano de la DIAN debe enviar por correo electrónico institucional una circular informativa a 300 contribuyentes que tienen trámites de devolución en curso. Conforme a la Ley 1581 de 2012 de Protección de Datos Personales (Habeas Data), las direcciones de correo electrónico no deben ser visibles entre los destinatarios.",
    "enunciado": "Al redactar el correo masivo en Microsoft Outlook, ¿en qué campo deben colocarse las 300 direcciones de correo de los ciudadanos?",
    "opciones": [
      {
        "id": "A",
        "texto": "En el campo 'Para' para que todos sepan quiénes más recibieron la circular.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El campo CCO (Con Copia Oculta) en el correo electrónico impide que los destinatarios vean las direcciones de las demás personas que reciben el mensaje. En el sector público, su uso es obligatorio al enviar correos masivos a ciudadanos para dar estricto cumplimiento al régimen general de protección de datos personales de la Ley 1581 de 2012."
      },
      {
        "id": "B",
        "texto": "En el campo 'CC' (Con Copia) para garantizar la transparencia pública de los datos.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El campo CCO (Con Copia Oculta) en el correo electrónico impide que los destinatarios vean las direcciones de las demás personas que reciben el mensaje. En el sector público, su uso es obligatorio al enviar correos masivos a ciudadanos para dar estricto cumplimiento al régimen general de protección de datos personales de la Ley 1581 de 2012."
      },
      {
        "id": "C",
        "texto": "En el campo 'CCO' (Con Copia Oculta) para garantizar que los correos electrónicos permanezcan confidenciales y ocultos para los demás receptores.",
        "explicacion": "Correcta. El campo CCO (Con Copia Oculta) en el correo electrónico impide que los destinatarios vean las direcciones de las demás personas que reciben el mensaje. En el sector público, su uso es obligatorio al enviar correos masivos a ciudadanos para dar estricto cumplimiento al régimen general de protección de datos personales de la Ley 1581 de 2012."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "El campo CCO (Con Copia Oculta) en el correo electrónico impide que los destinatarios vean las direcciones de las demás personas que reciben el mensaje. En el sector público, su uso es obligatorio al enviar correos masivos a ciudadanos para dar estricto cumplimiento al régimen general de protección de datos personales de la Ley 1581 de 2012.",
    "norma": "Ley 1581 de 2012 (Habeas Data) y Políticas de Seguridad de la Información DIAN",
    "citaNormativa": "La divulgación de correos electrónicos personales a terceros sin autorización constituye una vulneración al principio de seguridad y confidencialidad en el tratamiento de datos personales.",
    "dificultad": "MEDIA",
    "competencia": "Gestión de Comunicaciones Oficiales y Seguridad de la Información",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_16",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Automatización de Bandeja de Entrada en Outlook: Reglas de Correo",
    "contexto": "Un Gestor III recibe diariamente más de 120 correos electrónicos institucionales, entre los cuales se encuentran notificaciones del Sistema Electrónico de Contratación Pública (SECOP) y alertas de fiscalización que requieren atención prioritaria.",
    "enunciado": "Para que los correos que contengan en el asunto la palabra 'SECOP' se trasladen de forma automática a una carpeta especial denominada 'Contratos' sin saturar la bandeja principal, ¿qué función debe configurarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Configurar una 'Regla de Correo' (Rules) en Outlook que especifique la condición del asunto y la acción de mover el elemento a la carpeta seleccionada.",
        "explicacion": "Correcta. Las Reglas en Microsoft Outlook permiten automatizar la gestión y organización del correo electrónico institucional, aplicando acciones predefinidas (como mover mensajes, marcarlos con banderas o reenviarlos) con base en criterios específicos como remitente, palabras en el asunto o destinatarios."
      },
      {
        "id": "B",
        "texto": "Eliminar la cuenta de correo y abrir una cuenta personal de mensajería comercial.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Las Reglas en Microsoft Outlook permiten automatizar la gestión y organización del correo electrónico institucional, aplicando acciones predefinidas (como mover mensajes, marcarlos con banderas o reenviarlos) con base en criterios específicos como remitente, palabras en el asunto o destinatarios."
      },
      {
        "id": "C",
        "texto": "Esperar al final de la semana para clasificar manualmente los 600 correos acumulados.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Las Reglas en Microsoft Outlook permiten automatizar la gestión y organización del correo electrónico institucional, aplicando acciones predefinidas (como mover mensajes, marcarlos con banderas o reenviarlos) con base en criterios específicos como remitente, palabras en el asunto o destinatarios."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "Las Reglas en Microsoft Outlook permiten automatizar la gestión y organización del correo electrónico institucional, aplicando acciones predefinidas (como mover mensajes, marcarlos con banderas o reenviarlos) con base en criterios específicos como remitente, palabras en el asunto o destinatarios.",
    "norma": "Manual de Usuario Microsoft Outlook y Guía de Eficiencia Administrativa Función Pública",
    "citaNormativa": "Reglas de Outlook: Las reglas permiten mover, marcar y responder automáticamente a los mensajes de correo electrónico según las condiciones establecidas.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Correo Institucional",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_17",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Diseño y Presentación de Informes en PowerPoint: Notas del Orador",
    "contexto": "El Director Seccional solicita a un profesional preparar una presentación ejecutiva en PowerPoint sobre los resultados del plan de recaudo para el Comité Directivo de la DIAN. Se requiere incluir datos numéricos adicionales de soporte técnico que solo el presentador debe visualizar en su pantalla mientras proyecta las diapositivas al auditorio.",
    "enunciado": "¿En qué sección de PowerPoint debe consignarse esta información de apoyo?",
    "opciones": [
      {
        "id": "A",
        "texto": "En el panel de 'Notas' de cada diapositiva para visualizarse mediante la 'Vista Moderador' (Presenter View) sin proyectarse al público.",
        "explicacion": "Correcta. El panel de Notas en PowerPoint permite al expositor ingresar notas y datos clave que se visualizan exclusivamente en la pantalla del moderador (Vista Moderador) durante la exposición, mientras que la audiencia solo observa la diapositiva en la pantalla principal de proyección."
      },
      {
        "id": "B",
        "texto": "En el título de la diapositiva en fuente color blanco sobre fondo blanco.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El panel de Notas en PowerPoint permite al expositor ingresar notas y datos clave que se visualizan exclusivamente en la pantalla del moderador (Vista Moderador) durante la exposición, mientras que la audiencia solo observa la diapositiva en la pantalla principal de proyección."
      },
      {
        "id": "C",
        "texto": "En un correo electrónico impreso en papel sostenido en la mano.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El panel de Notas en PowerPoint permite al expositor ingresar notas y datos clave que se visualizan exclusivamente en la pantalla del moderador (Vista Moderador) durante la exposición, mientras que la audiencia solo observa la diapositiva en la pantalla principal de proyección."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "El panel de Notas en PowerPoint permite al expositor ingresar notas y datos clave que se visualizan exclusivamente en la pantalla del moderador (Vista Moderador) durante la exposición, mientras que la audiencia solo observa la diapositiva en la pantalla principal de proyección.",
    "norma": "Soporte Técnico Microsoft PowerPoint / Estándares de Comunicación Institucional",
    "citaNormativa": "Vista Moderador: Permite ver la presentación con las notas del orador en un equipo mientras el público ve las diapositivas en otra pantalla.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Presentaciones Ejecutivas",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_18",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Formatos Estándar de Intercambio y Preservación Documental: Archivos PDF",
    "contexto": "Al finalizar la redacción de un concepto tributario definitivo en Word, se requiere remitirlo por canal electrónico al contribuyente garantizando que el documento no pueda ser alterado fácilmente, preserve la fidelidad visual en cualquier dispositivo y cumpla con el estándar de conservación documental.",
    "enunciado": "¿A qué formato estándar debe exportarse o guardarse el archivo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Formato de texto enriquecido .RTF editable.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El formato PDF (y en especial PDF/A para preservación a largo plazo) es el estándar legal y técnico en la administración pública colombiana para el intercambio de documentos oficiales firmados, puesto que asegura la inmutabilidad relativa del contenido, la compatibilidad multiplataforma y la integridad del diseño."
      },
      {
        "id": "B",
        "texto": "Formato PDF (Portable Document Format) / PDF-A para archivo digital seguro.",
        "explicacion": "Correcta. El formato PDF (y en especial PDF/A para preservación a largo plazo) es el estándar legal y técnico en la administración pública colombiana para el intercambio de documentos oficiales firmados, puesto que asegura la inmutabilidad relativa del contenido, la compatibilidad multiplataforma y la integridad del diseño."
      },
      {
        "id": "C",
        "texto": "Formato de bloc de notas sin formato .TXT.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El formato PDF (y en especial PDF/A para preservación a largo plazo) es el estándar legal y técnico en la administración pública colombiana para el intercambio de documentos oficiales firmados, puesto que asegura la inmutabilidad relativa del contenido, la compatibilidad multiplataforma y la integridad del diseño."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El formato PDF (y en especial PDF/A para preservación a largo plazo) es el estándar legal y técnico en la administración pública colombiana para el intercambio de documentos oficiales firmados, puesto que asegura la inmutabilidad relativa del contenido, la compatibilidad multiplataforma y la integridad del diseño.",
    "norma": "Ley 594 de 2000, Acuerdo 002 de 2014 del AGN y Modelo de Seguridad y Privacidad MIPG",
    "citaNormativa": "Los documentos electrónicos que contengan actos administrativos oficiales deben ser generados y preservados en formatos de formato de documento portátil (PDF/A).",
    "dificultad": "BASICA",
    "competencia": "Gestión Documental y Preservación Digital",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_19",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Gestión y Almacenamiento de Archivos en Windows: Compresión en Formato ZIP",
    "contexto": "Para remitir un expediente probatorio que contiene 45 archivos (fotografías de inspección aduanera, actas de aprehensión y declaraciones de importación) cuyo peso total supera los límites permitidos por el servidor de correo institucional, el funcionario debe consolidarlos en un solo archivo de menor tamaño.",
    "enunciado": "¿Cuál es la acción técnica estándar en el explorador de archivos de Windows?",
    "opciones": [
      {
        "id": "A",
        "texto": "Seleccionar los archivos, hacer clic derecho, elegir 'Enviar a' y seleccionar 'Carpeta comprimida (en zip)'.",
        "explicacion": "Correcta. La compresión nativa en formato ZIP de Windows permite empaquetar múltiples archivos en un único contenedor y reducir su tamaño en bytes mediante algoritmos de compresión sin pérdida, facilitando su transmisión segura y ordenada por canales telemáticos."
      },
      {
        "id": "B",
        "texto": "Eliminar 40 de los 45 archivos para que el correo no rebote.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La compresión nativa en formato ZIP de Windows permite empaquetar múltiples archivos en un único contenedor y reducir su tamaño en bytes mediante algoritmos de compresión sin pérdida, facilitando su transmisión segura y ordenada por canales telemáticos."
      },
      {
        "id": "C",
        "texto": "Cambiar la extensión de los archivos a .exe para que pesen menos.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La compresión nativa en formato ZIP de Windows permite empaquetar múltiples archivos en un único contenedor y reducir su tamaño en bytes mediante algoritmos de compresión sin pérdida, facilitando su transmisión segura y ordenada por canales telemáticos."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La compresión nativa en formato ZIP de Windows permite empaquetar múltiples archivos en un único contenedor y reducir su tamaño en bytes mediante algoritmos de compresión sin pérdida, facilitando su transmisión segura y ordenada por canales telemáticos.",
    "norma": "Manual de Estándares Tecnológicos DIAN y Soporte Técnico del Sistema Operativo Windows",
    "citaNormativa": "La compresión de carpetas permite agrupar varios documentos en un solo archivo comprimido optimizando el almacenamiento y ancho de banda.",
    "dificultad": "BASICA",
    "competencia": "Administración de Archivos y Sistemas Operativos",
    "nivel": "Profesional"
  },
  {
    "id": "dian_ofim_20",
    "perfil": "GESTOR_III",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Seguridad de la Información: Bloqueo de Estación de Trabajo en Windows",
    "contexto": "Un Gestor III debe retirarse de su puesto de trabajo durante 15 minutos para acudir a una reunión presencial en la sala de juntas. En su monitor permanecen abiertas bases de datos con información amparada por reserva tributaria.",
    "enunciado": "Para salvaguardar la reserva de la información e impedir accesos no autorizados en su ausencia, ¿cuál es el atajo de teclado inmediato para bloquear la sesión en Windows?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dejar la pantalla encendida confiando en la buena fe de los transeúntes.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El atajo Tecla Windows + L bloquea de forma instantánea la sesión de usuario en Windows, exigiendo la contraseña o autenticación biométrica para reingresar. En entidades de la contribución como la DIAN, esta práctica es un deber formal de seguridad de la información obligatorio para proteger la reserva tributaria (Art. 583 E.T.)."
      },
      {
        "id": "B",
        "texto": "Presionar la tecla del logotipo de Windows + L para bloquear la estación de trabajo de inmediato.",
        "explicacion": "Correcta. El atajo Tecla Windows + L bloquea de forma instantánea la sesión de usuario en Windows, exigiendo la contraseña o autenticación biométrica para reingresar. En entidades de la contribución como la DIAN, esta práctica es un deber formal de seguridad de la información obligatorio para proteger la reserva tributaria (Art. 583 E.T.)."
      },
      {
        "id": "C",
        "texto": "Apagar el monitor sin cerrar la sesión ni bloquear el sistema operativo.",
        "explicacion": "Incorrecta. Apagar solo la pantalla no bloquea la sesión en el sistema operativo, permitiendo que cualquier persona use el equipo con sus credenciales institucionales."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El atajo Tecla Windows + L bloquea de forma instantánea la sesión de usuario en Windows, exigiendo la contraseña o autenticación biométrica para reingresar. En entidades de la contribución como la DIAN, esta práctica es un deber formal de seguridad de la información obligatorio para proteger la reserva tributaria (Art. 583 E.T.).",
    "norma": "Estatuto Tributario Art. 583, Política de Seguridad de la Información DIAN y Norma ISO 27001",
    "citaNormativa": "Los servidores públicos deberán bloquear sus estaciones de trabajo cada vez que se ausenten de su puesto para prevenir la fuga o acceso no autorizado a datos reservados.",
    "dificultad": "BASICA",
    "competencia": "Seguridad Digital y Custodia de la Información",
    "nivel": "Profesional"
  },
  {
    "id": "dian_comp_adv_01",
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
    "id": "dian_comp_adv_02",
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
    "id": "dian_comp_adv_03",
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
    "id": "dian_comp_adv_04",
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
    "id": "dian_comp_adv_05",
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
    "id": "dian_comp_adv_06",
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
    "id": "dian_comp_adv_07",
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
    "id": "dian_comp_adv_08",
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
    "id": "dian_comp_adv_09",
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
    "id": "dian_comp_adv_10",
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
    "id": "dian_comp_adv_11",
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
    "id": "dian_comp_adv_12",
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
    "id": "dian_comp_adv_13",
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
    "id": "dian_comp_adv_14",
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
    "id": "dian_comp_adv_15",
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
    "id": "dian_integ_moral_01",
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
    "id": "dian_integ_moral_02",
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
    "id": "dian_integ_moral_03",
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
    "id": "dian_integ_moral_04",
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
    "id": "dian_integ_moral_05",
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
    "id": "dian_integ_moral_06",
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
    "id": "dian_integ_moral_07",
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
    "id": "dian_integ_moral_08",
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
    "id": "dian_integ_moral_09",
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
    "id": "dian_integ_moral_10",
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
  },
  {
    "id": "dian_prot_01",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Técnica Oficial de Marcación de la Hoja Óptica de Respuestas",
    "contexto": "Durante la aplicación presencial de las pruebas escritas de la Convocatoria DIAN 2676 ante la Universidad de Área Andina, un aspirante realiza marcas con una 'X' tenue en lugar de rellenar el óvalo completo y utiliza un bolígrafo de tinta húmeda no autorizado.",
    "enunciado": "Conforme a las instrucciones expresas de la Guía de Orientación al Aspirante (GOA), ¿cuál es la instrucción oficial y obligatoria para la marcación de respuestas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Marcar únicamente con lápiz de mina negra No. 2 rellenando completamente el óvalo de la opción elegida, sin tachones ni marcas por fuera del círculo para garantizar la lectura óptica por el escáner.",
        "explicacion": "Correcta. La Guía de Orientación al Aspirante para las pruebas escritas DIAN 2676 estipula que la hoja de respuestas es procesada por lectores ópticos de alta velocidad que requieren estrictamente el uso de lápiz de grafito No. 2 y el llenado completo y uniforme del óvalo correspondiente, advirtiendo que marcas tenues, cruces o tachaduras pueden invalidar la lectura de la pregunta."
      },
      {
        "id": "B",
        "texto": "Colocar un visto bueno con marcador fluorescente para que el lector óptico lo detecte más rápido.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Guía de Orientación al Aspirante para las pruebas escritas DIAN 2676 estipula que la hoja de respuestas es procesada por lectores ópticos de alta velocidad que requieren estrictamente el uso de lápiz de grafito No. 2 y el llenado completo y uniforme del óvalo correspondiente, advirtiendo que marcas tenues, cruces o tachaduras pueden invalidar la lectura de la pregunta."
      },
      {
        "id": "C",
        "texto": "Escribir la letra A, B o C con esfero azul en el margen de la hoja óptica.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Guía de Orientación al Aspirante para las pruebas escritas DIAN 2676 estipula que la hoja de respuestas es procesada por lectores ópticos de alta velocidad que requieren estrictamente el uso de lápiz de grafito No. 2 y el llenado completo y uniforme del óvalo correspondiente, advirtiendo que marcas tenues, cruces o tachaduras pueden invalidar la lectura de la pregunta."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La Guía de Orientación al Aspirante para las pruebas escritas DIAN 2676 estipula que la hoja de respuestas es procesada por lectores ópticos de alta velocidad que requieren estrictamente el uso de lápiz de grafito No. 2 y el llenado completo y uniforme del óvalo correspondiente, advirtiendo que marcas tenues, cruces o tachaduras pueden invalidar la lectura de la pregunta.",
    "norma": "Guía de Orientación al Aspirante Pruebas Escritas DIAN 2676 - Sección Marcación",
    "citaNormativa": "Utilice exclusivamente lápiz de mina negra No. 2. Rellene completamente el círculo correspondiente a la opción seleccionada. No haga marcas fuera del círculo ni use bolígrafo.",
    "dificultad": "BASICA",
    "competencia": "Protocolos y Reglas de Pruebas Escritas CNSC",
    "nivel": "Profesional"
  },
  {
    "id": "dian_prot_02",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Prohibición de Dispositivos Electrónicos y Causal de Anulación Inmediata",
    "contexto": "Transcurrida una hora de la prueba escrita, el teléfono celular de un concursante vibra dentro de su bolsillo y el aspirante lo saca discretamente para mirar la hora.",
    "enunciado": "De acuerdo con el reglamento de aplicación de pruebas de la CNSC y la GOA DIAN 2676, ¿qué medida debe aplicar el jefe de salón?",
    "opciones": [
      {
        "id": "A",
        "texto": "Permitirle responder llamadas si se trata de una urgencia familiar justificada.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Guía de Orientación al Aspirante y los Acuerdos de Convocatoria de la CNSC sancionan de forma taxativa con la ANULACIÓN INMEDIATA del examen y la exclusión del concurso a cualquier aspirante que manipule teléfonos móviles, relojes inteligentes o cualquier dispositivo electrónico durante la sesión de la prueba."
      },
      {
        "id": "B",
        "texto": "Anular de manera inmediata la prueba del aspirante, levantar el acta de anulación por manipulación de dispositivo móvil o electrónico y ordenar su retiro del recinto sin derecho a reclamo posterior.",
        "explicacion": "Correcta. La Guía de Orientación al Aspirante y los Acuerdos de Convocatoria de la CNSC sancionan de forma taxativa con la ANULACIÓN INMEDIATA del examen y la exclusión del concurso a cualquier aspirante que manipule teléfonos móviles, relojes inteligentes o cualquier dispositivo electrónico durante la sesión de la prueba."
      },
      {
        "id": "C",
        "texto": "Descontarle 5 puntos de la calificación final pero dejarle terminar el examen.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Guía de Orientación al Aspirante y los Acuerdos de Convocatoria de la CNSC sancionan de forma taxativa con la ANULACIÓN INMEDIATA del examen y la exclusión del concurso a cualquier aspirante que manipule teléfonos móviles, relojes inteligentes o cualquier dispositivo electrónico durante la sesión de la prueba."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Guía de Orientación al Aspirante y los Acuerdos de Convocatoria de la CNSC sancionan de forma taxativa con la ANULACIÓN INMEDIATA del examen y la exclusión del concurso a cualquier aspirante que manipule teléfonos móviles, relojes inteligentes o cualquier dispositivo electrónico durante la sesión de la prueba.",
    "norma": "Guía de Orientación al Aspirante DIAN 2676 - Causales de Anulación de Pruebas",
    "citaNormativa": "Será causal de anulación de la prueba y exclusión del concurso portar, manipular o utilizar teléfonos celulares, cámaras o cualquier dispositivo de comunicación o grabación durante la sesión de examen.",
    "dificultad": "MEDIA",
    "competencia": "Protocolos y Reglas de Pruebas Escritas CNSC",
    "nivel": "Profesional"
  },
  {
    "id": "dian_prot_03",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Término Perentorio y Procedimiento para Reclamaciones contra Resultados",
    "contexto": "Publicados los resultados de las pruebas escritas en el aplicativo SIMO, un concursante inconforme con su puntaje funcional desea interponer una reclamación formal solicitando la revisión detallada de su hoja de respuestas y el cuadernillo de preguntas.",
    "enunciado": "¿Cuál es el término legal y el canal habilitado para radicar la reclamación conforme a la GOA y el Decreto Ley 760 de 2005?",
    "opciones": [
      {
        "id": "A",
        "texto": "Acudir a la sede física del Ministerio de Hacienda durante el mes siguiente a la publicación.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Decreto Ley 760 de 2005 y la Guía de Orientación al Aspirante DIAN 2676 consagran un término perentorio de cinco (5) días hábiles a partir de la publicación de resultados para presentar reclamaciones de forma exclusiva a través de la plataforma SIMO."
      },
      {
        "id": "B",
        "texto": "Radicar la reclamación exclusivamente a través del Sistema SIMO dentro de los cinco (5) días hábiles siguientes a la publicación de los resultados.",
        "explicacion": "Correcta. El Decreto Ley 760 de 2005 y la Guía de Orientación al Aspirante DIAN 2676 consagran un término perentorio de cinco (5) días hábiles a partir de la publicación de resultados para presentar reclamaciones de forma exclusiva a través de la plataforma SIMO."
      },
      {
        "id": "C",
        "texto": "Enviar un mensaje por redes sociales oficiales de la CNSC en cualquier momento.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: El Decreto Ley 760 de 2005 y la Guía de Orientación al Aspirante DIAN 2676 consagran un término perentorio de cinco (5) días hábiles a partir de la publicación de resultados para presentar reclamaciones de forma exclusiva a través de la plataforma SIMO."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Decreto Ley 760 de 2005 y la Guía de Orientación al Aspirante DIAN 2676 consagran un término perentorio de cinco (5) días hábiles a partir de la publicación de resultados para presentar reclamaciones de forma exclusiva a través de la plataforma SIMO.",
    "norma": "Decreto Ley 760 de 2005, Art. 13 y Guía de Orientación al Aspirante DIAN 2676",
    "citaNormativa": "Las reclamaciones contra los resultados de las pruebas escritas deberán presentarse por los aspirantes únicamente a través del SIMO, dentro de los cinco (5) días hábiles siguientes a la publicación de los mismos.",
    "dificultad": "MEDIA",
    "competencia": "Garantías y Reclamaciones en Concursos de Mérito",
    "nivel": "Profesional"
  },
  {
    "id": "dian_prot_04",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Jornada y Duración de la Sesión de Examen Escrito DIAN 2676",
    "contexto": "Un aspirante organiza su plan de tiempo para responder la totalidad de las preguntas de juicio situacional (competencias funcionales y conductuales) durante la sesión única de la prueba.",
    "enunciado": "¿Cuál es el tiempo máximo oficial concedido para la resolución del examen escrito en la jornada continua?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dos (2) horas exactas (120 minutos).",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Guía Oficial de Orientación al Aspirante para el Proceso de Selección DIAN 2676 establece una jornada única de aplicación con una duración máxima de cuatro horas y treinta minutos (4 horas y 30 minutos) para responder la totalidad de los módulos de pruebas escritas."
      },
      {
        "id": "B",
        "texto": "Cuatro horas y treinta minutos (4 horas y 30 minutos / 270 minutos).",
        "explicacion": "Correcta. La Guía Oficial de Orientación al Aspirante para el Proceso de Selección DIAN 2676 establece una jornada única de aplicación con una duración máxima de cuatro horas y treinta minutos (4 horas y 30 minutos) para responder la totalidad de los módulos de pruebas escritas."
      },
      {
        "id": "C",
        "texto": "Ocho (8) horas con receso para almorzar.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: La Guía Oficial de Orientación al Aspirante para el Proceso de Selección DIAN 2676 establece una jornada única de aplicación con una duración máxima de cuatro horas y treinta minutos (4 horas y 30 minutos) para responder la totalidad de los módulos de pruebas escritas."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Guía Oficial de Orientación al Aspirante para el Proceso de Selección DIAN 2676 establece una jornada única de aplicación con una duración máxima de cuatro horas y treinta minutos (4 horas y 30 minutos) para responder la totalidad de los módulos de pruebas escritas.",
    "norma": "Guía de Orientación al Aspirante DIAN 2676 - Estructura de la Jornada de Aplicación",
    "citaNormativa": "La aplicación de las pruebas escritas se realizará en una sola sesión continua con una duración total de 4 horas y 30 minutos.",
    "dificultad": "BASICA",
    "competencia": "Estructura y Tiempos de Examen DIAN 2676",
    "nivel": "Profesional"
  },
  {
    "id": "dian_prot_05",
    "perfil": "GESTOR_III",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Acceso a Pruebas y Reserva Legal del Material de Examen",
    "contexto": "Al interponer su reclamación en SIMO, el aspirante solicita que se le envíen por correo electrónico copias en PDF del cuadernillo de preguntas con sus respuestas para analizarlas con un abogado.",
    "enunciado": "De acuerdo con la reserva legal del material de pruebas de la CNSC y el Decreto Ley 760 de 2005, ¿cómo procede la exhibición de pruebas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Enviar copias no controladas por correo a cualquier persona que las solicite.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Por mandato del Decreto Ley 760 de 2005 y la Ley 909 de 2004, las pruebas de concurso público gozan de reserva legal. El acceso a pruebas se efectúa en una jornada especial presencial y custodiada, prohibiendo la toma de fotografías, apuntes mecánicos o copias que vulneren la reserva del banco de preguntas."
      },
      {
        "id": "B",
        "texto": "Citar al aspirante a una sesión presencial de acceso a pruebas bajo estricta reserva, donde podrá consultar personalmente su cuadernillo y hoja de respuestas sin ingresar celulares ni cámaras, y sin posibilidad de retirar copia física ni digital.",
        "explicacion": "Correcta. Por mandato del Decreto Ley 760 de 2005 y la Ley 909 de 2004, las pruebas de concurso público gozan de reserva legal. El acceso a pruebas se efectúa en una jornada especial presencial y custodiada, prohibiendo la toma de fotografías, apuntes mecánicos o copias que vulneren la reserva del banco de preguntas."
      },
      {
        "id": "C",
        "texto": "Publicar el examen completo en la página web pública de la universidad operadora.",
        "explicacion": "Incorrecta. Esta opción no satisface los lineamientos técnicos ni el marco normativo del caso: Por mandato del Decreto Ley 760 de 2005 y la Ley 909 de 2004, las pruebas de concurso público gozan de reserva legal. El acceso a pruebas se efectúa en una jornada especial presencial y custodiada, prohibiendo la toma de fotografías, apuntes mecánicos o copias que vulneren la reserva del banco de preguntas."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Por mandato del Decreto Ley 760 de 2005 y la Ley 909 de 2004, las pruebas de concurso público gozan de reserva legal. El acceso a pruebas se efectúa en una jornada especial presencial y custodiada, prohibiendo la toma de fotografías, apuntes mecánicos o copias que vulneren la reserva del banco de preguntas.",
    "norma": "Decreto Ley 760 de 2005, Art. 13 Parágrafo y Guía de Orientación al Aspirante DIAN 2676",
    "citaNormativa": "El acceso a las pruebas se realizará en sesión presencial reservada. El aspirante solo podrá observar los documentos y no se le permitirá tomar fotografías ni grabaciones de los cuadernillos de examen.",
    "dificultad": "ALTA",
    "competencia": "Reserva Legal y Acceso a Pruebas CNSC",
    "nivel": "Profesional"
  },
  {
    "id": "dian_vr_gestor_01",
    "nivel": "Profesional",
    "ejeId": "verbos_rectores_cnsc",
    "ejeNombre": "Verbos Rectores y Delimitación Funcional CNSC/DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Regla de Oro Profesional: Análisis y Proyección vs. Pasividad",
    "caso": "Durante una auditoría a un contribuyente del régimen ordinario, el Gestor III constata que existen diferencias millonarias entre los ingresos brutos reportados en exógena y los declarados en el formulario 110 de renta. El contribuyente no atendió una invitación persuasiva previa.",
    "enunciado": "De acuerdo con el catálogo de verbos rectores de la CNSC/DAFP y las funciones del cargo Profesional, ¿cuál es la conducta procesalmente adecuada que debe asumir el Gestor III?",
    "opciones": [
      {
        "id": "A",
        "texto": "Archivar provisionalmente el expediente a la espera de que el contribuyente subsane voluntariamente o prescriba la acción de cobro.",
        "explicacion": "Incorrecta. Distractor por pasividad y omisión de funciones. En el nivel Profesional, abstenerse de investigar y proyectar actos formales constituye negligencia procesal y bajo desempeño evaluativo."
      },
      {
        "id": "B",
        "texto": "Analizar el acervo probatorio contable, valorar las discrepancias de información exógena y proyectar el Requerimiento Especial debidamente motivado con la cuantificación de la sanción por inexactitud.",
        "explicacion": "Correcta. Los verbos 'Analizar' y 'Proyectar' constituyen los verbos rectores esenciales del nivel Profesional (Decreto 1083 de 2015 y Manual FT-TAH-1824 de la DIAN). Implican estudio de fondo y elaboración técnica del acto administrativo."
      },
      {
        "id": "C",
        "texto": "Proferir y firmar de plano la resolución sancionatoria de clausura del establecimiento de comercio sin agotar el procedimiento previo.",
        "explicacion": "Incorrecta. Distractor por extralimitación y vulneración del debido proceso. La clausura directa sin pliego de cargos ni oportunidad de defensa vicia de nulidad absoluta la actuación."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El nivel Profesional se caracteriza por el análisis riguroso de información y la proyección motivada de actos administrativos. Las opciones pasivas de archivo constituyen distractores típicos en las pruebas de la CNSC.",
    "norma": "Decreto 1083 de 2015, Manual de Funciones DIAN FT-TAH-1824 y Estatuto Tributario Art. 703",
    "citaNormativa": "Funciones del nivel profesional: Analizar información, formular alternativas y proyectar los actos administrativos derivados de los procesos de fiscalización y control.",
    "dificultad": "ALTA",
    "competencia": "Juicio Situacional y Delimitación Funcional Profesional"
  },
  {
    "id": "dian_vr_gestor_02",
    "nivel": "Profesional",
    "ejeId": "verbos_rectores_cnsc",
    "ejeNombre": "Verbos Rectores y Delimitación Funcional CNSC/DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Extralimitación Directiva vs. Sustanciación Técnica Profesional",
    "caso": "En una división de fiscalización aduanera se analiza el impacto de una presunta red de subfacturación de textiles en zona primaria. Un Gestor III considera que se debe suspender cautelarmente la actividad de todos los depósitos habilitados de la región.",
    "enunciado": "¿Por qué ordenar la suspensión generalizada de licencias no corresponde al verbo rector de un Gestor III según el régimen de competencias?",
    "opciones": [
      {
        "id": "A",
        "texto": "Porque el verbo rector 'Ordenar' o revocar autorizaciones institucionales generales está reservado exclusivamente al Nivel Directivo (Director o Subdirector de la DIAN), correspondiéndole al Profesional 'investigar, evaluar y proyectar' la decisión motivada individual.",
        "explicacion": "Correcta. La matriz oficial DAFP/CNSC reserva los verbos de mando institucional ('Ordenar', 'Aprobar', 'Fijar') al nivel directivo. El profesional sustancia mediante investigación y formulación técnica del proyecto de acto."
      },
      {
        "id": "B",
        "texto": "Porque los depósitos aduaneros gozan de inmunidad administrativa absoluta ante cualquier medida cautelar de la DIAN.",
        "explicacion": "Incorrecta. La DIAN sí ostenta facultades de control y suspensión sobre auxiliares aduaneros, pero mediante acto de la autoridad directiva competente."
      },
      {
        "id": "C",
        "texto": "Porque el Gestor III debe limitarse únicamente a archivar carpetas sin emitir conceptos sobre aduanas.",
        "explicacion": "Incorrecta. El profesional sí tiene el deber de investigar y conceptuar; lo que no puede es usurpar la competencia resolutiva de la alta dirección."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "El catálogo de 97 verbos rectores establece que 'Ordenar' y 'Aprobar' corresponden al Nivel Directivo, mientras que 'Investigar', 'Evaluar' y 'Proyectar' delimitan el Nivel Profesional.",
    "norma": "Decreto 1083 de 2015, Art. 2.2.2.4.4 y Decreto Ley 0920 de 2023",
    "citaNormativa": "La competencia funcional de expedir mandatos generales y medidas sancionatorias directivas radica en el nominador o director de la entidad, basada en la sustanciación técnica de los profesionales.",
    "dificultad": "ALTA",
    "competencia": "Competencia Orgánica y Jerárquica"
  },
  {
    "id": "dian_vr_gestor_03",
    "nivel": "Profesional",
    "ejeId": "verbos_rectores_cnsc",
    "ejeNombre": "Verbos Rectores y Delimitación Funcional CNSC/DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Formulación de Soluciones vs. Traslado Mecánico de Casos",
    "caso": "Un Gestor III recibe un expediente tributario de gran complejidad técnica sobre tributación internacional y precios de transferencia que presenta vacíos probatorios iniciales.",
    "enunciado": "Ante esta situación, la respuesta que mejor evidencia el nivel de competencia exigido por la CNSC para el cargo Profesional es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Devolver de inmediato el expediente a ventanilla de radicación indicando que carece de pruebas y que no es su responsabilidad completarlas.",
        "explicacion": "Incorrecta. Constituye una conducta pasiva y de evasión de responsabilidades impropia del nivel profesional."
      },
      {
        "id": "B",
        "texto": "Estudiar a fondo la estructura de la operación multinacional, decretar la práctica de inspección tributaria con exhibición de libros y proyectar el auto de requerimiento de información cambiaria.",
        "explicacion": "Correcta. 'Estudiar', 'Practicar pruebas' y 'Proyectar' son los verbos rectores de mayor autonomía técnica profesional que resuelven integralmente la contingencia probatoria."
      },
      {
        "id": "C",
        "texto": "Recomendar verbalmente al contribuyente pagar una cifra aproximada para cerrar el caso sin dejar constancia escrita.",
        "explicacion": "Incorrecta. Vulnera el principio de legalidad e indisponibilidad de la obligación fiscal (Art. 6 C.P.)."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Frente a contingencias técnicas, el profesional público despliega facultades de indagación ('Estudiar', 'Practicar pruebas') y proyecta los actos formales que impulsan la actuación administrativa.",
    "norma": "Estatuto Tributario, Arts. 684 y 779; Decreto 1083 de 2015",
    "citaNormativa": "El nivel profesional adelanta la práctica de pruebas, formula diagnósticos técnicos y proyecta las decisiones correspondientes.",
    "dificultad": "ALTA",
    "competencia": "Resolución de Problemas Complejos y Verbo Rector Profesional"
  }
];

if (typeof window !== "undefined") {
  window.QUESTION_BANK_GESTOR = QUESTION_BANK_GESTOR;
}
if (typeof global !== "undefined") {
  global.QUESTION_BANK_GESTOR = QUESTION_BANK_GESTOR;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_GESTOR };
}
