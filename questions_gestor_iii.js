// questions_gestor_iii.js - Banco Maestro de Casos de Juicio Situacional (PJS) para GESTOR III - DIAN 2676
// Alineado con el Manual de Funciones FT-TAH-1824 y los Ejes Oficiales de la Convocatoria CNSC (OPEC 242703)
// Cada caso incluye fundamentación normativa con Cita Clave Textual. Total preguntas: 110

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
  }
];

if (typeof window !== "undefined") {
  window.QUESTION_BANK_GESTOR = QUESTION_BANK_GESTOR;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_GESTOR };
}
