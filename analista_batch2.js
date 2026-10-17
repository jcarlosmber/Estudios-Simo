// analista_batch2.js - Preguntas 31 a 55 para ANALISTA IV (Nivel Técnico - OPEC 236760)
// Cubre: Obligaciones Tributarias restantes (6 preguntas), Procedimiento de Fiscalización y Liquidación Aduanera/Tributaria (14 preguntas), Razonamiento Matemático (5 preguntas)

const ANALISTA_BATCH_2 = [
  // --- OBLIGACIONES FORMALES Y SUSTANCIALES (Preguntas 2 a 7 de 7) ---
  {
    id: "an4_oblg_02",
    nivel: "Técnico",
    ejeId: "obligaciones_tributarias",
    ejeNombre: "Obligaciones Formales y Sustanciales en Materia Tributaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Obligación de Facturar Electrónicamente con Validación Previa",
    caso: "En una visita de verificación de control de facturación, el Analista IV constata que un almacén entrega a los clientes tirillas de papel generadas por un software POS no electrónico sin validación previa de la DIAN por compras que superan las 5 UVT.",
    enunciado: "De acuerdo con el artículo 616-1 del Estatuto Tributario y la Resolución 000165 de 2023, ¿cuál es la consecuencia técnica del hallazgo?",
    opciones: [
      {
        id: "A",
        texto: "Configuración de presunto incumplimiento de la obligación formal de facturar electrónicamente, procediendo a levantar acta de visita para dar inicio al procedimiento sancionatorio de clausura del establecimiento (Art. 657 E.T.).",
        explicacion: "Correcta. El artículo 616-1 del E.T. exige la expedición de factura electrónica de venta con validación previa de la DIAN; su omisión o incumplimiento de los requisitos técnicos acarrea la sanción de cierre o clausura del establecimiento (Art. 657 E.T.)."
      },
      {
        id: "B",
        texto: "Validar las tirillas informales porque cualquier papel escrito a mano equivale a factura legal.",
        explicacion: "Incorrecta. La ley exige factura electrónica validada por la DIAN con código CUFE y código QR."
      },
      {
        id: "C",
        texto: "Cobrar una multa en efectivo al cajero del almacén en ese mismo instante.",
        explicacion: "Incorrecta. Los funcionarios de la DIAN no reciben pagos en dinero bajo ninguna modalidad."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 616-1 y Art. 657, Res. 000165 de 2023",
    citaNormativa: "«La expedición de la factura electrónica de venta con validación previa es de carácter obligatorio. Su no expedición o expedición sin requisitos dará lugar a la sanción de clausura del establecimiento.» (Estatuto Tributario, Art. 616-1)."
  },
  {
    id: "an4_oblg_03",
    nivel: "Técnico",
    ejeId: "obligaciones_tributarias",
    ejeNombre: "Obligaciones Formales y Sustanciales en Materia Tributaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Inscripción y Actualización en el Registro Único Tributario (RUT)",
    caso: "Una sociedad cambió su actividad económica principal de comercio al por menor a transporte internacional de carga y modificó su domicilio de Cali a Barranquilla, sin actualizar el RUT durante los 8 meses posteriores al cambio.",
    enunciado: "¿Cuál es el término legal para actualizar el RUT y qué sanción procede según el Estatuto Tributario?",
    opciones: [
      {
        id: "A",
        texto: "La actualización debe efectuarse dentro del mes siguiente a la ocurrencia del hecho; no hacerlo genera la sanción por no actualizar el RUT equivalente a una (1) UVT por cada día de retraso (Art. 658-3 E.T.).",
        explicacion: "Correcta. El artículo 658-3 del Estatuto Tributario establece que la desactualización del RUT genera sanción económica tasada en UVT por cada día de retraso o clausura temporal del establecimiento si se trata de cambio de dirección."
      },
      {
        id: "B",
        texto: "El plazo es de diez años y no acarrea ninguna sanción económica.",
        explicacion: "Incorrecta. El RUT es la base de identificación tributaria y aduanera de la Nación y su actualización oportuna es perentoria."
      },
      {
        id: "C",
        texto: "El RUT se actualiza telepáticamente sin necesidad de trámite alguno.",
        explicacion: "Incorrecta. Es un deber formal que recae en el contribuyente ante los sistemas informáticos de la DIAN."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 555-2 y Art. 658-3",
    citaNormativa: "«Los obligados a inscribirse en el RUT deberán actualizar la información dentro del mes siguiente al hecho que genera la actualización... La no actualización causará sanción de una UVT por cada día de retraso.» (Estatuto Tributario, Art. 658-3)."
  },
  {
    id: "an4_oblg_04",
    nivel: "Técnico",
    ejeId: "obligaciones_tributarias",
    ejeNombre: "Obligaciones Formales y Sustanciales en Materia Tributaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Suministro de Información Exógena Tributaria (Medios Magnéticos)",
    caso: "Al revisar el cumplimiento de deberes formales de una entidad bancaria, el Analista IV constata que venció el plazo fijado en la Resolución Anual de Información Exógena sin que el banco transmitiera el reporte de saldos de cuentas de ahorros.",
    enunciado: "¿Qué actuación técnica debe proyectar el área de fiscalización?",
    opciones: [
      {
        id: "A",
        texto: "Proyectar Pliego de Cargos proponiendo la imposición de la sanción por no suministrar información exógena contemplada en el artículo 651 del Estatuto Tributario, sobre el monto de las sumas no reportadas.",
        explicacion: "Correcta. El artículo 651 del E.T. sanciona con multas pecuniarias tasadas porcentualmente sobre la información no suministrada, errónea o extemporánea requerida para el control fiscal de la Entidad."
      },
      {
        id: "B",
        texto: "Pedir al banco un préstamo personal con tasa cero a cambio de no iniciar la investigación.",
        explicacion: "Incorrecta. Delito de cohecho y falta gravísima de corrupción."
      },
      {
        id: "C",
        texto: "Declarar la caducidad del impuesto de renta de todos los clientes del banco.",
        explicacion: "Incorrecta. Falta de conexidad jurídica y extralimitación absurda de funciones."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 631 y Art. 651",
    citaNormativa: "«Las personas y entidades obligadas a suministrar información tributaria que no la suministren dentro del plazo establecido incurrirán en una multa hasta del 1% de las sumas no informadas.» (Estatuto Tributario, Art. 651)."
  },
  {
    id: "an4_oblg_05",
    nivel: "Técnico",
    ejeId: "obligaciones_tributarias",
    ejeNombre: "Obligaciones Formales y Sustanciales en Materia Tributaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Obligación de Practicar, Consignar y Expedir Certificados de Retención en la Fuente",
    caso: "Una sociedad comercial retuvo $12 millones por concepto de retención en la fuente a título de renta a sus proveedores durante el mes de junio, pero en lugar de consignar el dinero a la DIAN, utilizó esos fondos para pagar la fiesta de fin de año de la gerencia.",
    enunciado: "De acuerdo con el Estatuto Tributario y el Código Penal colombiano, ¿cuáles son las consecuencias jurídicas de esta conducta?",
    opciones: [
      {
        id: "A",
        texto: "La declaración presentada sin pago no produce efecto legal alguno (Art. 580-1 E.T.) y se configura el delito de Omisión de Agente Retenedor o Recaudador (Art. 402 Código Penal), con pena de prisión de 48 a 108 meses.",
        explicacion: "Correcta. Las sumas retenidas son dineros públicos del Estado. No consignarlas dentro de los dos meses siguientes acarrea la ineficacia de la declaración y responsabilidad penal por omisión de agente retenedor (Art. 402 C.P.)."
      },
      {
        id: "B",
        texto: "Ninguna consecuencia, porque el agente retenedor es dueño legítimo de las retenciones que practica.",
        explicacion: "Incorrecta. El agente retenedor actúa por delegación del Estado recaudando dineros del erario público."
      },
      {
        id: "C",
        texto: "La DIAN debe premiar a la empresa con un certificado de excelencia recreativa.",
        explicacion: "Incorrecta. Burla al régimen penal y tributario de la Nación."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 580-1 y Código Penal Art. 402",
    citaNormativa: "«El agente retenedor que no consigne las sumas retenidas dentro de los dos meses siguientes a aquel en que debió presentar la declaración, incurrirá en prisión de 48 a 108 meses y multa.» (Código Penal, Art. 402)."
  },
  {
    id: "an4_oblg_06",
    nivel: "Técnico",
    ejeId: "obligaciones_tributarias",
    ejeNombre: "Obligaciones Formales y Sustanciales en Materia Tributaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Conservación de Libros de Contabilidad y Soportes Internos y Externos",
    caso: "Durante una inspección tributaria, un comerciante sostiene que no conserva las facturas de compra física ni electrónica de sus inventarios del año gravable 2023 porque la ley de comercio solo exige guardar documentos por 6 meses.",
    enunciado: "De conformidad con el artículo 632 del Estatuto Tributario y el artículo 46 de la Ley 962 de 2005, ¿cuál es el término legal correcto de conservación de pruebas tributarias?",
    opciones: [
      {
        id: "A",
        texto: "Por el término de firmeza de la declaración tributaria a la cual corresponden los documentos, el cual generalmente es de tres (3) años, o durante el tiempo que dure el proceso administrativo si este fue notificado oportunamente.",
        explicacion: "Correcta. El artículo 46 de la Ley 962 de 2005 y el artículo 632 del E.T. unificaron el término de conservación de libros y soportes al término de firmeza de la declaración tributaria respectiva, garantizando su exhibición ante la DIAN."
      },
      {
        id: "B",
        texto: "Quince (15) días calendario contados desde la expedición de la factura de venta.",
        explicacion: "Incorrecta. Plazo irrisorio que impediría cualquier fiscalización posterior del Estado."
      },
      {
        id: "C",
        texto: "No existe obligación alguna de conservar soportes si el contribuyente alega que no tiene espacio en su oficina.",
        explicacion: "Incorrecta. La no exhibición de libros y soportes contables genera desconocimiento de costos y sanciones probatorias."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 632 y Ley 962 de 2005 Art. 46",
    citaNormativa: "«El período de conservación de los libros de contabilidad y documentos soporte de que trata el artículo 632 del Estatuto Tributario será igual al término de firmeza de la declaración tributaria correspondiente.» (Ley 962 de 2005, Art. 46)."
  },
  {
    id: "an4_oblg_07",
    nivel: "Técnico",
    ejeId: "obligaciones_tributarias",
    ejeNombre: "Obligaciones Formales y Sustanciales en Materia Tributaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Firma Digital y Representación en Declaraciones Tributarias Virtuales",
    caso: "Una declaración del Impuesto sobre la Renta de una persona jurídica con ingresos superiores a 100.000 UVT fue presentada a través del portal de la DIAN utilizando la firma digital de la secretaria de recepción, careciendo de la firma del Representante Legal y del Revisor Fiscal.",
    enunciado: "¿Cuál es la consecuencia jurídica que el Analista IV debe verificar en el control de calidad de la declaración?",
    opciones: [
      {
        id: "A",
        texto: "La declaración se tiene por no presentada (Art. 580 literal d del Estatuto Tributario), al no haber sido firmada por quien tiene el deber legal de firmarla ni contar con la firma exigida del Revisor Fiscal o Contador.",
        explicacion: "Correcta. El artículo 580 del Estatuto Tributario establece causales taxativas por las cuales una declaración se tiene por no presentada, entre ellas no contener la firma de quien debe cumplir el deber formal o del revisor fiscal cuando exista la obligación legal."
      },
      {
        id: "B",
        texto: "La declaración adquiere firmeza inmediata sin posibilidad de revisión de fondo por parte de la DIAN.",
        explicacion: "Incorrecta. La falta de firma legalmente autorizada invalida el acto procesal de la declaración privada."
      },
      {
        id: "C",
        texto: "La secretaria asume automáticamente la propiedad de todos los bienes de la empresa.",
        explicacion: "Incorrecta. Consecuencia jurídica inexistente y desprovista de sentido legal."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 580 literal d y Art. 596",
    citaNormativa: "«No se entenderá cumplido el deber de presentar la declaración tributaria cuando no contenga la constancia de la firma de quien deba cumplir el deber formal de declarar o la firma del revisor fiscal.» (Estatuto Tributario, Art. 580)."
  },

  // --- PROCEDIMIENTO DE FISCALIZACION Y LIQUIDACION TRIBUTARIA Y ADUANERA (14 preguntas) ---
  {
    id: "an4_fisc_01",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Práctica de Pruebas: Diligencia de Inspección Tributaria y Contable (Art. 779 y 779-1 E.T.)",
    caso: "El Analista IV acompaña al profesional comisionado en una diligencia de inspección contable formalmente decretada mediante Auto de Trámite. Al ingresar al establecimiento, el gerente se niega a exhibir los libros de contabilidad alegando que son secretos.",
    enunciado: "De acuerdo con el Estatuto Tributario, ¿qué constancia y efecto probatorio debe consignarse en el acta?",
    opciones: [
      {
        id: "A",
        texto: "Consignar de manera detallada en el Acta de Inspección la no exhibición de los libros contables, lo cual dará lugar a la aplicación de la sanción por no exhibir libros (Art. 655 E.T.) y el desconocimiento de los costos y deducciones no demostrados.",
        explicacion: "Correcta. La inspección tributaria y contable (Arts. 779 y 782 E.T.) es una facultad oficiosa de la DIAN ante la cual no es oponible la reserva comercial; negarse a exhibirlos se hace constar en acta y acarrea sanciones e inversión de la carga de la prueba."
      },
      {
        id: "B",
        texto: "Retirarse pidiéndole disculpas al gerente por haberlo importunado durante su jornada laboral.",
        explicacion: "Incorrecta. Implica abandono de deberes y sumisión indebida de la potestad fiscal del Estado."
      },
      {
        id: "C",
        texto: "Derribar las puertas del establecimiento sin acompañamiento de la fuerza pública ni orden legal.",
        explicacion: "Incorrecta. Constituye extralimitación y vulneración de derechos fundamentales constitucionales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 655, 779 y 782",
    citaNormativa: "«La no exhibición de los libros de contabilidad cuando la administración tributaria lo exija dará lugar a la aplicación de las sanciones de que trata el artículo 655 del Estatuto Tributario.» (Estatuto Tributario, Art. 782)."
  },
  {
    id: "an4_fisc_02",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Intervención en Diligencias de Destrucción de Mercancía Aduanera Averiada o Impropia",
    caso: "Como función técnica específica (AT-FL-2010), el Analista IV interviene en una diligencia de destrucción de 5 toneladas de alimentos enlatados importados que sufrieron descomposición biológica en el depósito habilitado y fueron declarados impropios para el consumo.",
    enunciado: "Conforme a la normativa aduanera (Decreto 1165 de 2019 / Decreto 920 de 2023), ¿cuál es el requisito documental y procedimental indispensable en la diligencia?",
    opciones: [
      {
        id: "A",
        texto: "Verificar la presencia de la autoridad sanitaria (INVIMA), presenciar la inutilización física total de la mercancía, levantar y suscribir el Acta de Destrucción detallando cantidades, pesos, método ambiental utilizado y causas técnicas.",
        explicacion: "Correcta. La destrucción de mercancía averiada o impropia requiere la presencia de autoridades competentes (aduanera, sanitaria, ambiental), verificación física en sitio y suscripción de acta pormenorizada que extingue la obligación aduanera válidamente."
      },
      {
        id: "B",
        texto: "Repartir los alimentos descompuestos entre los vecinos del depósito para que los consuman bajo su riesgo.",
        explicacion: "Incorrecta. Atenta contra la salud pública y constituye delito contra la salubridad y peculado."
      },
      {
        id: "C",
        texto: "Firmar el acta en blanco desde la oficina sin asistir al lugar de la destrucción física.",
        explicacion: "Incorrecta. Constituye falsedad ideológica en documento público y falta disciplinaria gravísima."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019 Art. 209 y Manual de Disposición de Mercancías DIAN",
    citaNormativa: "«La destrucción de mercancías averiadas, defectuosas o impropias se efectuará en presencia de la autoridad aduanera y sanitaria competente, levantándose el acta correspondiente que dará cuenta de su inutilización definitiva.» (Decreto 1165 de 2019)."
  },
  {
    id: "an4_fisc_03",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Medida Cautelar de Aprehensión de Mercancías (Decreto 920 de 2023)",
    caso: "En un control aduanero en vía pública, el equipo técnico inspecciona un camión que transporta electrodomésticos importados. El conductor aporta copias borrosas de declaraciones de importación cuyos números de serial y marcas no coinciden con la carga física.",
    enunciado: "¿Cuál es la medida cautelar que corresponde adoptar y qué documento oficial debe suscribirse?",
    opciones: [
      {
        id: "A",
        texto: "Adoptar la medida cautelar de Aprehensión de las mercancías por no acreditar su legal introducción y permanencia en el territorio aduanero nacional, suscribiendo el Acta de Hechos y de Aprehensión conforme al Decreto 920 de 2023.",
        explicacion: "Correcta. Cuando la mercancía no coincide en seriales, descripción o cantidad con la declaración de importación, procede la aprehensión inmediata mediante acta formal, trasladando los bienes a un depósito autorizado de la DIAN para el inicio del proceso de decomiso."
      },
      {
        id: "B",
        texto: "Permitir que el camión continúe su ruta con la condición de que el conductor compre un seguro de viaje privado.",
        explicacion: "Incorrecta. Omisión flagrante de la medida cautelar que permite la fuga de mercancía de contrabando."
      },
      {
        id: "C",
        texto: "Subastar los electrodomésticos en la carretera a los conductores que pasen por el peaje.",
        explicacion: "Incorrecta. Vulnera todo el procedimiento aduanero de decomiso y enajenación del Estado."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 920 de 2023 Art. 65 y Art. 69 (Régimen Sancionatorio Aduanero)",
    citaNormativa: "«La aprehensión es la medida cautelar mediante la cual la autoridad aduanera toma posesión de las mercancías sobre las cuales se configure alguna de las causales de decomiso previstas en la ley.» (Decreto 920 de 2023, Art. 65)."
  },
  {
    id: "an4_fisc_04",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Emplazamiento para Declarar en el Proceso de Fiscalización (Art. 715 E.T.)",
    caso: "El grupo de control de omisos identifica a un contribuyente obligado a declarar el Impuesto sobre la Renta que no cumplió con dicha obligación en el plazo del calendario tributario. El Analista IV proyecta el acto preparatorio inicial.",
    enunciado: "¿Cuál es el término perentorio que concede el Emplazamiento para Declarar al contribuyente para subsanar la omisión?",
    opciones: [
      {
        id: "A",
        texto: "Un (1) mes improrrogable contado a partir de su notificación legal, liquidando y pagando la sanción por extemporaneidad correspondiente.",
        explicacion: "Correcta. El artículo 715 del Estatuto Tributario concede el término legal de un mes al sujeto pasivo para que presente la declaración omitida. Si no lo hace, la DIAN queda facultada para aplicar la sanción por no declarar y liquidar de aforo."
      },
      {
        id: "B",
        texto: "Cinco (5) años hábiles según el criterio discrecional del auditor.",
        explicacion: "Incorrecta. Desconoce el término perentorio legal establecido en el Código Tributario."
      },
      {
        id: "C",
        texto: "Veinticuatro (24) horas bajo pena de arresto policial inmediato.",
        explicacion: "Incorrecta. En el procedimiento tributario civil no existe privación preventiva de la libertad por deudas fiscales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 715",
    citaNormativa: "«Quienes incumplan con la obligación de presentar las declaraciones tributarias... serán emplazados por la administración para que lo hagan en el término perentorio de un (1) mes.» (Estatuto Tributario, Art. 715)."
  },
  {
    id: "an4_fisc_05",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Requerimiento Especial como Propuesta de Modificación Oficial (Art. 703 E.T.)",
    caso: "En una investigación por deducciones improcedentes en el impuesto sobre la renta, el profesional comisionado le pide al Analista IV estructurar la tabla de modificaciones y sanciones que conformará el Requerimiento Especial.",
    enunciado: "¿Cuál es la naturaleza jurídica y el plazo legal de respuesta que debe consagrar el Requerimiento Especial según el artículo 707 del E.T.?",
    opciones: [
      {
        id: "A",
        texto: "Es un acto preparatorio de trámite en el que la DIAN formula formalmente los puntos que propone modificar de la declaración y cuantifica las sanciones, concediendo tres (3) meses al contribuyente para responder y aportar pruebas.",
        explicacion: "Correcta. El Requerimiento Especial (Art. 703 E.T.) es la pieza angular del debate probatorio tributario; otorga un plazo garantista de tres meses (Art. 707 E.T.) para que el administrado formule descargos antes de que se expida la Liquidación Oficial de Revisión."
      },
      {
        id: "B",
        texto: "Es una sentencia penal irrevocable que no admite ninguna prueba ni objeción por parte del contribuyente.",
        explicacion: "Incorrecta. El Requerimiento Especial no es acto definitivo ni sanción ejecutoriada, sino una propuesta de determinación."
      },
      {
        id: "C",
        texto: "Es un folleto publicitario sin ningún valor procesal en la investigación.",
        explicacion: "Incorrecta. Su notificación oportuna es requisito obligatorio de validez de la Liquidación Oficial (Art. 703 E.T.)."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 703 y Art. 707",
    citaNormativa: "«Antes de efectuar la liquidación de revisión, la administración enviará al contribuyente un requerimiento especial que contenga todos los puntos que se proponga modificar... El contribuyente dispondrá de tres meses para formular sus objeciones.» (Estatuto Tributario, Art. 703 y 707)."
  },
  {
    id: "an4_fisc_06",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Suspensión de Términos por Notificación de Auto de Inspección Tributaria (Art. 706 E.T.)",
    caso: "La DIAN notifica en debida forma un Auto que ordena Inspección Tributaria dentro de una investigación de renta a una empresa cuyo término de firmeza vencía en dos meses.",
    enunciado: "De acuerdo con el artículo 706 del Estatuto Tributario, ¿qué efecto produce la notificación de este auto sobre el plazo que tiene la administración para notificar el Requerimiento Especial?",
    opciones: [
      {
        id: "A",
        texto: "Suspende el término para notificar el Requerimiento Especial por el término de tres (3) meses contados a partir de la notificación del auto de inspección tributaria.",
        explicacion: "Correcta. El artículo 706 del Estatuto Tributario señala expresamente que el término para notificar el Requerimiento Especial se suspende por tres meses con la notificación en debida forma del auto que ordena inspección tributaria."
      },
      {
        id: "B",
        texto: "Cancela definitivamente la investigación y le otorga inmunidad fiscal permanente a la empresa.",
        explicacion: "Incorrecta. La inspección es una herramienta para recaudar pruebas a favor del Estado, no una condonación."
      },
      {
        id: "C",
        texto: "Obliga a la empresa a cerrar sus puertas durante todo el tiempo que dure la inspección.",
        explicacion: "Incorrecta. La inspección contable no interrumpe el giro ordinario de los negocios del contribuyente."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 706",
    citaNormativa: "«El término para notificar el requerimiento especial se suspenderá por el término de tres (3) meses contados a partir de la notificación del auto que ordene la práctica de inspección tributaria.» (Estatuto Tributario, Art. 706)."
  },
  {
    id: "an4_fisc_07",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Requisitos de las Actas de Hechos y Pruebas en Visitas de Fiscalización",
    caso: "Durante una visita de verificación a un establecimiento de comercio, el Analista IV elabora el acta de hechos registrando lo observado en el inventario físico y las declaraciones del encargado del local.",
    enunciado: "Para que el acta tenga pleno valor probatorio en el proceso sancionatorio, ¿qué formalidad debe cumplirse al concluir la diligencia?",
    opciones: [
      {
        id: "A",
        texto: "Dar lectura al acta en presencia de los intervinientes, suscribirla conjuntamente con el contribuyente o su delegado, y si este se niega a firmar, dejar constancia expresa de dicha negativa avalada por un testigo o funcionario público.",
        explicacion: "Correcta. Las actas de visita de fiscalización son documentos públicos que dan fe de los hechos presenciados; la negativa del investigado a firmar no invalida el acta siempre que se deje constancia fundada con firma de testigos comisionados."
      },
      {
        id: "B",
        texto: "Romper el acta si el comerciante se disgusta y promete portarse bien en el futuro.",
        explicacion: "Incorrecta. La función fiscalizadora es reglada y no queda al arbitrio o humor de los investigados."
      },
      {
        id: "C",
        texto: "Llenar los datos del acta dos semanas después en la casa sin haber anotado nada en el sitio.",
        explicacion: "Incorrecta. Viola el principio de inmediatez y veracidad de la prueba administrativa."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 684 y CPACA Art. 40",
    citaNormativa: "«De toda diligencia de fiscalización se levantará acta firmada por los intervinientes; la negativa a suscribirla no afectará su validez si de ello se deja constancia motivada.» (Estatuto Tributario, Art. 684)."
  },
  {
    id: "an4_fisc_08",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Causales de Decomiso Directo de Mercancías (Decreto 920 de 2023)",
    caso: "En una operación aduanera de fiscalización posterior, se detecta que mercancía de procedencia extranjera ingresó al país oculta dentro de un doble fondo en un contenedor declarado únicamente con chatarra metálica.",
    enunciado: "¿Cuál es la causal de aprehensión y decomiso directo aplicable según el régimen aduanero?",
    opciones: [
      {
        id: "A",
        texto: "Ocultamiento de mercancía en caletas, dobles fondos o medios de transporte adaptados para evadir el control aduanero, dando lugar al decomiso directo de las mercancías y del vehículo utilizado.",
        explicacion: "Correcta. El Decreto 920 de 2023 tipifica como causal grave de decomiso el ocultamiento de mercancías en dobles fondos o compartimentos no autorizados, extendiendo la medida al medio de transporte adaptado para tal fin."
      },
      {
        id: "B",
        texto: "Cobro de una tarifa de estacionamiento especial en el puerto devolviendo los bienes.",
        explicacion: "Incorrecta. No subsana el fraude ni el contrabando tipificado en la ley aduanera."
      },
      {
        id: "C",
        texto: "Regalar los bienes al conductor por su ingenio en el diseño del compartimento oculto.",
        explicacion: "Incorrecta. Absurdo y tipifica encubrimiento de contrabando."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 920 de 2023 Art. 69 num. 1",
    citaNormativa: "«Dará lugar al decomiso de las mercancías cuando se encuentren ocultas en dobles fondos o en cualquier otro medio que dificulte su descubrimiento por la autoridad aduanera.» (Decreto 920 de 2023, Art. 69)."
  },
  {
    id: "an4_fisc_09",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Pliego de Cargos por No Facturar o Facturar sin Requisitos (Art. 657 y 658 E.T.)",
    caso: "Un Analista IV compila las pruebas de una visita de control en la que se comprueba que un restaurante no expidió factura en 20 ventas consecutivas a clientes presenciales.",
    enunciado: "¿Cuál es el acto administrativo que debe formular la DIAN para iniciar formalmente el proceso sancionatorio de clausura y qué plazo tiene el contribuyente para responder?",
    opciones: [
      {
        id: "A",
        texto: "Un Pliego de Cargos donde se expone la presunta infracción, concediendo al interesado el término legal de diez (10) días hábiles para dar respuesta y solicitar pruebas (Art. 657 E.T.).",
        explicacion: "Correcta. Para la sanción de clausura de establecimiento (Art. 657 E.T.), la DIAN formula un Pliego de Cargos concediendo al infractor diez días hábiles para presentar descargos; vencido este plazo, se profiere la resolución sancionatoria motivada."
      },
      {
        id: "B",
        texto: "Colocar un candado en la puerta de manera clandestina en la madrugada sin notificación previa.",
        explicacion: "Incorrecta. Viola las garantías fundamentales del debido proceso administrativo (Art. 29 C.P.)."
      },
      {
        id: "C",
        texto: "Un memorando interno de felicitación por el ahorro de papel.",
        explicacion: "Incorrecta. Desconoce la gravedad de la omisión de facturación y evasión de IVA/Impoconsumo."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 657",
    citaNormativa: "«La administración formulará pliego de cargos al contribuyente concediéndole el término de diez (10) días para que responda... Vencido este término, resolverá mediante resolución motivada.» (Estatuto Tributario, Art. 657)."
  },
  {
    id: "an4_fisc_10",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Cadena de Custodia de Pruebas Materiales en Investigaciones Aduaneras",
    caso: "En una inspección aduanera a una bodega clandestina se incautan libros de contabilidad paralela en cuadernos manuscritos y memorias USB con registros de pagos en efectivo a contrabandistas.",
    enunciado: "¿Cuál es el protocolo técnico que el Analista IV debe aplicar para garantizar la validez judicial y administrativa de estas evidencias?",
    opciones: [
      {
        id: "A",
        texto: "Rotular, embalar y sellar las evidencias físicas y digitales en bolsas de seguridad con registro de cadena de custodia, documentando la fecha, hora, responsable del hallazgo y firmas para evitar alteraciones o tachas de ilicitud.",
        explicacion: "Correcta. La cadena de custodia de elementos probatorios (físicos o digitales) asegura su autenticidad e inalterabilidad desde su recolección hasta su incorporación en el expediente sancionatorio o judicial penal."
      },
      {
        id: "B",
        texto: "Llevarse las memorias USB en el bolsillo del pantalón y conectarlas a una computadora de juegos sin antivirus.",
        explicacion: "Incorrecta. Contamina la evidencia digital y genera nulidad de la prueba por ruptura de cadena de custodia."
      },
      {
        id: "C",
        texto: "Tachar los nombres de los investigados en los cuadernos con corrector blanco líquido.",
        explicacion: "Incorrecta. Constituye destrucción o alteración dolosa de elementos materiales probatorios."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Manual de Cadena de Custodia DIAN / Fiscalía y CPACA Art. 40",
    citaNormativa: "«Los elementos materiales probatorios y evidencia física recolectados en diligencias administrativas deberán someterse a estrictos protocolos de cadena de custodia para asegurar su integridad y autenticidad.» (Manual de Cadena de Custodia)."
  },
  {
    id: "an4_fisc_11",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Revisión Técnica de Denuncias Anónimas de Fiscalización",
    caso: "Llega una denuncia manifestando que una ferretería compra facturas falsas. La denuncia adjunta copias simples de los comprobantes de egreso con nombres de empresas fantasmas, valores y números de cuenta bancaria.",
    enunciado: "De acuerdo con el procedimiento institucional de clasificación y análisis preliminar, ¿qué debe certificar el Analista IV en su informe de viabilidad técnica?",
    opciones: [
      {
        id: "A",
        texto: "Certificar si la denuncia aporta pruebas sumarias y hechos concretos, verificables y fiscalmente relevantes que justifiquen expedir auto comisorio de inspección, evitando archivar denuncias fundadas o tramitar acusaciones temerarias.",
        explicacion: "Correcta. El análisis técnico preliminar de denuncias evalúa la razonabilidad, verosimilitud y suficiencia probatoria de los insumos allegados, orientando los recursos de fiscalización hacia fraudes reales demostrables."
      },
      {
        id: "B",
        texto: "Archivar el caso de inmediato porque las ferreterías nunca deben ser investigadas por la DIAN.",
        explicacion: "Incorrecta. Viola el principio de equidad y universalidad del control fiscal."
      },
      {
        id: "C",
        texto: "Publicar la denuncia en periódicos locales antes de realizar cualquier cotejo institucional.",
        explicacion: "Incorrecta. Viola la presunción de inocencia y la reserva legal tributaria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1474 de 2011 Art. 81 y Procedimiento de Fiscalización DIAN",
    citaNormativa: "«Las quejas y denuncias anónimas se tramitarán cuando aporten pruebas o datos mínimos que permitan verificar la ocurrencia de los hechos fraudulentos.» (Ley 1474 de 2011)."
  },
  {
    id: "an4_fisc_12",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Recurso de Reconsideración contra la Liquidación Oficial de Revisión (Art. 720 E.T.)",
    caso: "A un contribuyente se le notificó una Liquidación Oficial de Revisión por inexactitud en renta. El Analista IV recibe en la ventanilla técnica un escrito de impugnación radicado por el apoderado judicial.",
    enunciado: "¿Cuál es el recurso procedente en vía gubernativa contra dicho acto y cuál es su término legal de interposición?",
    opciones: [
      {
        id: "A",
        texto: "El Recurso de Reconsideración, el cual debe interponerse dentro de los dos (2) meses siguientes a la notificación de la Liquidación Oficial de Revisión (Art. 720 E.T.).",
        explicacion: "Correcta. El artículo 720 del Estatuto Tributario establece que contra las liquidaciones oficiales y resoluciones sancionatorias procede el recurso de reconsideración, interponible dentro de los dos meses siguientes a su notificación legal."
      },
      {
        id: "B",
        texto: "El Recurso de Queja verbal ante la plenaria del Senado dentro de los 3 días hábiles.",
        explicacion: "Incorrecta. Inexistente en el procedimiento tributario administrativo."
      },
      {
        id: "C",
        texto: "Ningún recurso, porque los actos de la DIAN son infalibles y no pueden controvertirse jamás.",
        explicacion: "Incorrecta. Viola el derecho constitucional a la defensa y contradicción en la vía administrativa."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 720",
    citaNormativa: "«Sin perjuicio de lo dispuesto en normas especiales, contra las liquidaciones oficiales... procede el recurso de reconsideración dentro de los dos (2) meses siguientes a su notificación.» (Estatuto Tributario, Art. 720)."
  },
  {
    id: "an4_fisc_13",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Silencio Administrativo Positivo en Recursos Tributarios (Art. 734 E.T.)",
    caso: "Un contribuyente interpuso en debida forma el recurso de reconsideración el 15 de enero de 2024. Al 20 de enero de 2025, la administración no ha proferido ni notificado la resolución que resuelve el recurso.",
    enunciado: "De acuerdo con el artículo 734 del Estatuto Tributario, ¿qué efecto jurídico sustancial se consolida?",
    opciones: [
      {
        id: "A",
        texto: "Opera el Silencio Administrativo Positivo, entendiéndose fallado el recurso a favor del contribuyente, cesando las sanciones y modificaciones determinadas en la liquidación oficial recurrida.",
        explicacion: "Correcta. El artículo 732 y 734 del E.T. señalan que la DIAN tiene un (1) año para resolver el recurso de reconsideración. Si vence dicho término sin notificación del acto resolutorio, opera de pleno derecho el silencio administrativo positivo a favor del recurrente."
      },
      {
        id: "B",
        texto: "La deuda se duplica automáticamente a favor de la DIAN por el transcurso del tiempo.",
        explicacion: "Incorrecta. El silencio administrativo positivo castiga la mora injustificada del Estado beneficiando al ciudadano."
      },
      {
        id: "C",
        texto: "El contribuyente debe ser sancionado con cárcel por no haber ido a preguntar a la oficina.",
        explicacion: "Incorrecta. La carga y el deber procesal de decidir y notificar a tiempo corresponden exclusivamente a la autoridad pública."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 732 y Art. 734",
    citaNormativa: "«Si transcurrido un año desde la interposición del recurso de reconsideración no se ha notificado la decisión, operará el silencio administrativo positivo.» (Estatuto Tributario, Art. 734)."
  },
  {
    id: "an4_fisc_14",
    nivel: "Técnico",
    ejeId: "fiscalizacion_aduanera_procedimiento",
    ejeNombre: "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Procedimiento de Decomiso Ordinario Aduanero y Documentos de Descargos",
    caso: "Notificada un acta de aprehensión aduanera por presunta mercancía no declarada, el interesado cuenta con un término para presentar el Documento de Objeción a la Aprehensión aportando las pruebas que demuestren el legal ingreso al país.",
    enunciado: "¿Cuál es el término legal para presentar dicha objeción según el Decreto 920 de 2023?",
    opciones: [
      {
        id: "A",
        texto: "Dentro de los diez (10) días hábiles siguientes a la entrega o notificación del Acta de Aprehensión (Art. 73 Decreto 920 de 2023).",
        explicacion: "Correcta. El artículo 73 del Decreto 920 de 2023 dispone que el interesado dispone de diez días hábiles siguientes a la aprehensión para presentar escrito de descargos u objeción a la aprehensión acompañando los documentos de soporte."
      },
      {
        id: "B",
        texto: "Tres (3) horas no prorrogables contadas desde el pesaje de la carga.",
        explicacion: "Incorrecta. Violación flagrante del debido proceso por brevedad irrazonable."
      },
      {
        id: "C",
        texto: "Cinco (5) años sin necesidad de aportar pruebas de importación.",
        explicacion: "Incorrecta. Plazo desmedido no contemplado en el régimen aduanero sancionatorio."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 920 de 2023 Art. 73 (Objeción a la Aprehensión)",
    citaNormativa: "«Dentro de los diez (10) días hábiles siguientes a la notificación del acta de aprehensión, el interesado podrá presentar documento de objeción a la aprehensión con las pruebas pertinentes.» (Decreto 920 de 2023, Art. 73)."
  },

  // --- RAZONAMIENTO MATEMATICO (5 preguntas) ---
  {
    id: "an4_mat_01",
    nivel: "Técnico",
    ejeId: "razonamiento_matematico",
    ejeNombre: "Razonamiento Matemático",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Cálculo de la Sanción Mínima Tributaria en UVT (Art. 639 E.T.)",
    caso: "Un contribuyente calcula una sanción por extemporaneidad en su declaración de retención en la fuente que matemáticamente arroja un valor de $180.000 pesos colombianos. Para el año gravable 2025, el valor de la Unidad de Valor Tributario (UVT) es de $49.799.",
    enunciado: "De acuerdo con el artículo 639 del Estatuto Tributario, ¿cuál es el valor real que debe liquidarse y pagarse por concepto de sanción?",
    opciones: [
      {
        id: "A",
        texto: "El valor de la sanción mínima legal, equivalente a diez (10) UVT, es decir, $498.000 pesos (aproximado al múltiplo de mil más cercano).",
        explicacion: "Correcta. El artículo 639 del Estatuto Tributario ordena que el valor mínimo de cualquier sanción tributaria nacional administrada por la DIAN no podrá ser inferior a 10 UVT (10 x $49.799 = $497.990, aproximado a $498.000 según reglas de redondeo fiscal)."
      },
      {
        id: "B",
        texto: "Los $180.000 calculados, porque la ley siempre premia pagar lo mínimo posible.",
        explicacion: "Incorrecta. Desconoce la norma taxativa de la sanción mínima obligatoria del artículo 639 del E.T."
      },
      {
        id: "C",
        texto: "Cero pesos, porque las sanciones inferiores a un millón de pesos se perdonan de oficio.",
        explicacion: "Incorrecta. No existe perdón oficioso automático; se debe aplicar la tarifa de sanción mínima."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 639 y Art. 868",
    citaNormativa: "«El valor mínimo de cualquier sanción, incluidas las sanciones reducidas, será equivalente a la suma de diez (10) UVT.» (Estatuto Tributario, Art. 639)."
  },
  {
    id: "an4_mat_02",
    nivel: "Técnico",
    ejeId: "razonamiento_matematico",
    ejeNombre: "Razonamiento Matemático",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Cálculo de Sanción por Inexactitud General y Reducción con Requerimiento Especial (Art. 709 E.T.)",
    caso: "En una Liquidación de Revisión propuesta en Requerimiento Especial se determina un mayor impuesto a pagar de $40.000.000 por concepto de ingresos omitidos. La sanción general por inexactitud es del 100% de la diferencia ($40.000.000). El contribuyente decide aceptar todos los cargos y allanarse con ocasión de la respuesta al Requerimiento Especial.",
    enunciado: "Conforme al artículo 709 del Estatuto Tributario, ¿a qué porcentaje se reduce la sanción por inexactitud y cuál es el valor resultante a pagar por dicha sanción?",
    opciones: [
      {
        id: "A",
        texto: "Se reduce a la cuarta parte (25%) del valor inicialmente propuesto en caso de allanamiento total oportuno, o a la mitad (50%) según el marco del artículo 709 del E.T., pagando $10.000.000 o $20.000.000 respectivamente según la etapa de allanamiento demostrada.",
        explicacion: "Correcta. El artículo 709 del Estatuto Tributario consagra la reducción de la sanción por inexactitud a la mitad (50%) cuando el contribuyente acepta los hechos planteados en el Requerimiento Especial, corrige su declaración y paga o acuerda el pago con la presentación del memorial de respuesta."
      },
      {
        id: "B",
        texto: "La sanción se incrementa al triple ($120.000.000) por haber respondido la citación oficial.",
        explicacion: "Incorrecta. El allanamiento reduce las sanciones punitivas, no las agrava."
      },
      {
        id: "C",
        texto: "Se exonera totalmente del impuesto principal y de los intereses moratorios.",
        explicacion: "Incorrecta. La reducción legal recae sobre la sanción por inexactitud, manteniéndose íntegro el deber de pagar el tributo omitido."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 648 y Art. 709",
    citaNormativa: "«Si con ocasión de la respuesta al requerimiento especial el contribuyente acepta total o parcialmente los hechos, la sanción por inexactitud se reducirá a la mitad de la planteada.» (Estatuto Tributario, Art. 709)."
  },
  {
    id: "an4_mat_03",
    nivel: "Técnico",
    ejeId: "razonamiento_matematico",
    ejeNombre: "Razonamiento Matemático",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Conversión de Divisas y Liquidación de Tributos Aduaneros (Arancel e IVA)",
    caso: "Una importación tiene un valor CIF de $10.000 USD. La Tasa Representativa del Mercado (TRM) oficial de la semana es de $4.000 COP por dólar. El arancel aplicable a la subpartida arancelaria es del 10% y la tarifa general de IVA es del 19%.",
    enunciado: "¿Cuál es el valor base en pesos para la liquidación del IVA aduanero y cuánto suma el IVA liquidado?",
    opciones: [
      {
        id: "A",
        texto: "El valor en aduanas es $40.000.000 COP, el arancel (10%) es $4.000.000 COP; la base gravable del IVA es $44.000.000 COP (CIF + Arancel), arrojando un IVA del 19% equivalente a $8.360.000 COP.",
        explicacion: "Correcta. En la liquidación aduanera colombiana (Decreto 1165 de 2019 / Estatuto Tributario Art. 459), la base gravable sobre la cual se liquida el IVA en importaciones está conformada por el Valor CIF en pesos colombianos más el Arancel liquidado ($40M + $4M = $44M; $44M x 19% = $8.360.000)."
      },
      {
        id: "B",
        texto: "El IVA se calcula sobre cero pesos porque las importaciones pagan IVA únicamente en su país de origen.",
        explicacion: "Incorrecta. El IVA en importaciones se causa en el territorio nacional al momento del levante o declaración."
      },
      {
        id: "C",
        texto: "El IVA es igual al 100% del valor total de la carga comercial.",
        explicacion: "Incorrecta. Tarifa absurda y confiscatoria no contemplada en el Estatuto Tributario."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 459 y Decreto 1165 de 2019",
    citaNormativa: "«La base gravable sobre la cual se liquida el impuesto sobre las ventas en las importaciones será la misma que se toma para liquidar los derechos de aduana, adicionada con el valor de este gravamen.» (Estatuto Tributario, Art. 459)."
  },
  {
    id: "an4_mat_04",
    nivel: "Técnico",
    ejeId: "razonamiento_matematico",
    ejeNombre: "Razonamiento Matemático",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Prorrateo Proporcional de Costos Comunes en IVA (Art. 490 E.T.)",
    caso: "Una empresa genera durante el bimestre ingresos por operaciones gravadas con IVA por $60.000.000 e ingresos por operaciones excluidas de IVA por $40.000.000 (Ingresos totales = $100.000.000). Incurrió en costos comunes con IVA descontable de $5.000.000 que no pueden imputarse directamente a unas u otras.",
    enunciado: "Aplicando la regla matemática de prorrata del artículo 490 del Estatuto Tributario, ¿cuánto puede tomar la empresa como IVA descontable en su declaración bimestral?",
    opciones: [
      {
        id: "A",
        texto: "El 60% del IVA descontable, es decir, $3.000.000, proporcional a la participación de los ingresos gravados sobre los ingresos totales del período ($60M / $100M = 60%).",
        explicacion: "Correcta. El artículo 490 del Estatuto Tributario establece que cuando los costos o compras comunes afecten indistintamente operaciones gravadas y excluidas, el IVA descontable se imputará en proporción directa al porcentaje que representen los ingresos gravados sobre el total de ingresos brutos del período."
      },
      {
        id: "B",
        texto: "El 100% de los $5.000.000 sin importar que venda bienes excluidos.",
        explicacion: "Incorrecta. Constituye inexactitud tributaria por tomar descuentos tributarios improcedentes."
      },
      {
        id: "C",
        texto: "Cero pesos, perdiendo todo el IVA pagado a los proveedores.",
        explicacion: "Incorrecta. La ley autoriza expresamente el descuento de la porción proporcional gravada."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 490",
    citaNormativa: "«Cuando los bienes o servicios que otorguen derecho a descuento se destinen indistintamente a operaciones gravadas y excluidas... dicho descuento se calculará en proporción al monto de las operaciones gravadas.» (Estatuto Tributario, Art. 490)."
  },
  {
    id: "an4_mat_05",
    nivel: "Técnico",
    ejeId: "razonamiento_matematico",
    ejeNombre: "Razonamiento Matemático",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Cálculo de Sanción por Extemporaneidad antes del Emplazamiento (Art. 641 E.T.)",
    caso: "Un contribuyente presenta su declaración de retención en la fuente con 3 meses de retraso voluntariamente, antes de que la DIAN le profiera emplazamiento para declarar. El impuesto a cargo determinado en la declaración es de $10.000.000.",
    enunciado: "Conforme al artículo 641 del Estatuto Tributario (5% por mes o fracción de mes de retraso sin exceder el 100%), ¿cuál es el valor de la sanción por extemporaneidad a liquidar?",
    opciones: [
      {
        id: "A",
        texto: "$1.500.000 pesos, equivalente al 15% (3 meses x 5%) del impuesto determinado a cargo.",
        explicacion: "Correcta. El artículo 641 del Estatuto Tributario señala que por cada mes o fracción de mes de retraso en la presentación de la declaración, se liquidará una sanción equivalente al 5% del total del impuesto a cargo, sin exceder del 100% (3 meses x 5% = 15%; 15% de $10.000.000 = $1.500.000)."
      },
      {
        id: "B",
        texto: "$50.000.000 pesos porque la tasa mensual es del 50%.",
        explicacion: "Incorrecta. Error en la tasa porcentual legal fijada en el artículo 641."
      },
      {
        id: "C",
        texto: "$500.000 pesos fijos sin importar el número de meses transcurridos.",
        explicacion: "Incorrecta. La sanción es directamente proporcional al tiempo de retardo acumulado."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 641",
    citaNormativa: "«El obligado a declarar que presente las declaraciones tributarias en forma extemporánea deberá liquidar y pagar una sanción por cada mes o fracción de mes calendario de retardo, equivalente al cinco por ciento (5%) del total del impuesto a cargo.» (Estatuto Tributario, Art. 641)."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ANALISTA_BATCH_2 };
}
