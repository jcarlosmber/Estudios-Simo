// generate_100_questions.js - Script constructor para ampliar el Banco Maestro de Preguntas a 100 Casos
const fs = require('fs');
const path = require('path');

const BATCH_1 = [
  {
    id: "dian_trib_01",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Emplazamiento para Corregir vs. Requerimiento Especial",
    caso: "En una investigación a una empresa comercializadora de tecnología, el Gestor III identifica que en la declaración de renta se imputaron costos por compras ficticias no soportadas en factura electrónica. El contribuyente aún no ha sido notificado de requerimiento especial.",
    enunciado: "¿Cuál es el instrumento procesal previo que puede expedir el Gestor III para otorgarle al contribuyente la oportunidad de corregir con una sanción menor antes de proferir el Requerimiento Especial?",
    opciones: [
      {
        id: "A",
        texto: "Notificar un Emplazamiento para Corregir, otorgándole un mes para responder o corregir su declaración incrementando la sanción al 20%.",
        explicacion: "Correcta. El artículo 685 del Estatuto Tributario faculta a la DIAN para enviar emplazamiento para corregir. Si el contribuyente corrige dentro del mes siguiente, la sanción de corrección es del 20% (Art. 644 E.T.), antes de que se profiera el Requerimiento Especial donde la sanción subiría sustancialmente."
      },
      {
        id: "B",
        texto: "Proferir de plano una Liquidación Oficial de Aforo desconociendo la totalidad de los costos y ordenando el cierre comercial.",
        explicacion: "Incorrecta. La liquidación de aforo solo procede contra omisos que no declaran (Art. 717 E.T.), no contra declarantes inexactos; además vulnera el debido proceso."
      },
      {
        id: "C",
        texto: "Convocar al representante legal a una reunión informal para negociar verbalmente la exclusión del 50% de los costos sin acto administrativo.",
        explicacion: "Incorrecta. En el derecho tributario rige el principio de legalidad e indisponibilidad de la obligación fiscal; las actuaciones deben constar en actos formales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Arts. 685 y 644",
    citaNormativa: "«Cuando la Administración de Impuestos tenga indicios sobre la inexactitud de la declaración del contribuyente, podrá enviarle un emplazamiento para corregir, con el fin de que dentro del mes siguiente a su notificación, la persona o entidad emplazada, si lo considera procedente, corrija la declaración.» (E.T. Art. 685)."
  },
  {
    id: "dian_trib_02",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Término para Notificar Requerimiento Especial y Suspensión",
    caso: "La DIAN adelanta auditoría sobre la declaración de renta del año gravable 2022 presentada oportunamente el 15 de abril de 2023 (sujeta a 3 años de firmeza general). El 10 de marzo de 2026, la DIAN notifica en debida forma un Auto de Inspección Tributaria.",
    enunciado: "De acuerdo con el Estatuto Tributario, ¿qué efecto procesal produce la notificación del Auto de Inspección Tributaria sobre el término para proferir el Requerimiento Especial?",
    opciones: [
      {
        id: "A",
        texto: "Suspende el término para notificar el Requerimiento Especial por tres (3) meses, contados a partir de la notificación del auto.",
        explicacion: "Correcta. El artículo 706 del Estatuto Tributario dispone expresamente que el término para notificar el requerimiento especial se suspende por tres (3) meses cuando se practique inspección tributaria de oficio, a partir de la notificación del auto que la decrete."
      },
      {
        id: "B",
        texto: "Interrumpe definitivamente el término, obligando a reiniciar el cómputo de los tres años desde cero.",
        explicacion: "Incorrecta. Confunde interrupción (borrón y cuenta nueva) con suspensión (pausa temporal por 3 meses según el Art. 706 E.T.)."
      },
      {
        id: "C",
        texto: "No produce ningún efecto legal sobre los términos, por lo que la declaración adquiere firmeza inexorable el 15 de abril de 2026.",
        explicacion: "Incorrecta. Desconoce la norma expresa de suspensión de términos del Art. 706 E.T., lo cual induciría a error procesal a la administración."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 706 (Suspensión del término)",
    citaNormativa: "«El término para notificar el requerimiento especial se suspenderá: Cuando se practique inspección tributaria de oficio, por el término de tres meses contados a partir de la notificación del auto que la decrete.» (E.T. Art. 706)."
  },
  {
    id: "dian_trib_03",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Respuesta al Requerimiento Especial y Reducción de Sanción",
    caso: "A un contribuyente se le notificó Requerimiento Especial proponiendo una sanción por inexactitud del 100% sobre el mayor impuesto determinado. El contribuyente decide aceptar integralmente los hechos planteados por la DIAN y corregir su declaración dentro de los 3 meses de respuesta.",
    enunciado: "¿A qué porcentaje se reduce la sanción por inexactitud si el contribuyente acepta los hechos y corrige con ocasión de la respuesta al Requerimiento Especial?",
    opciones: [
      {
        id: "A",
        texto: "Se reduce a la cuarta parte (25%) de la sanción inicialmente planteada por la administración.",
        explicacion: "Correcta. Según el artículo 709 del Estatuto Tributario, si con ocasión de la respuesta al requerimiento especial el contribuyente acepta total o parcialmente los hechos, la sanción por inexactitud se reducirá a la cuarta parte (25%) en relación con los hechos aceptados."
      },
      {
        id: "B",
        texto: "Se exonera totalmente al 0% por tratarse de un allanamiento voluntario de buena fe.",
        explicacion: "Incorrecta. El Estatuto Tributario no exonera al 0% la inexactitud una vez notificado el Requerimiento Especial; la ley tasa taxativamente la reducción a la cuarta parte."
      },
      {
        id: "C",
        texto: "Se mantiene en el 100% sin beneficio alguno porque ya se inició la etapa de determinación oficial.",
        explicacion: "Incorrecta. Ignora el mecanismo de justicia premial y economía procesal consagrado en el Art. 709 E.T."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 709 (Corrección provocada por el Requerimiento)",
    citaNormativa: "«Si con ocasión de la respuesta al requerimiento especial, el contribuyente, responsable, agente retenedor o declarante, acepta total o parcialmente los hechos planteados en el requerimiento, la sanción por inexactitud de que trata el artículo 647, se reducirá a la cuarta parte de la planteada inicialmente.» (E.T. Art. 709)."
  },
  {
    id: "dian_trib_04",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Ampliación al Requerimiento Especial",
    caso: "Tras recibir la respuesta y pruebas aportadas por el contribuyente al Requerimiento Especial, el equipo de Fiscalización constata la existencia de nuevos hechos y pasivos inexistentes no incluidos en el requerimiento inicial.",
    enunciado: "Para respetar el debido proceso y poder incorporar estas nuevas glosas a la investigación, ¿qué actuación debe proyectar el Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Proyectar un Auto de Ampliación al Requerimiento Especial dentro de los tres (3) meses siguientes al vencimiento del plazo para responder el requerimiento inicial, ordenando el traslado por tres meses.",
        explicacion: "Correcta. El artículo 708 del Estatuto Tributario contempla la Ampliación al Requerimiento Especial para incluir hechos no contemplados en el requerimiento inicial o modificar los planteados, debiendo proferirse dentro de los tres meses siguientes al vencimiento del plazo para contestar."
      },
      {
        id: "B",
        texto: "Incluir directamente los nuevos hechos en la Liquidación Oficial de Revisión sin previo aviso, amparado en la facultad oficiosa de aforo.",
        explicacion: "Incorrecta. Viola el principio de congruencia (Art. 711 E.T.) y el derecho a la defensa (Art. 29 C.P.), viciando de nulidad insanable la liquidación de revisión."
      },
      {
        id: "C",
        texto: "Archivar el expediente actual e iniciar una nueva auditoría cinco años después cuando los términos hayan vencido.",
        explicacion: "Incorrecta. Conlleva negligencia administrativa y la prescripción o firmeza definitiva de la declaración tributaria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 708 (Ampliación al Requerimiento Especial)",
    citaNormativa: "«El funcionario que conozca de la respuesta al requerimiento especial podrá, dentro de los tres meses siguientes a la fecha del vencimiento del plazo para responderlo, ordenar su ampliación, por una sola vez, y decretar las pruebas que estime necesarias.» (E.T. Art. 708)."
  },
  {
    id: "dian_trib_05",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Principio de Correspondencia en la Liquidación Oficial de Revisión",
    caso: "La División de Liquidación profiere una Liquidación Oficial de Revisión modificando la base gravable de renta por concepto de ingresos omitidos del exterior. Sin embargo, al revisar el Requerimiento Especial notificado previamente, este versaba exclusivamente sobre deducciones laborales improcedentes.",
    enunciado: "¿Qué vicio procesal afecta esta Liquidación Oficial de Revisión según el régimen del Estatuto Tributario?",
    opciones: [
      {
        id: "A",
        texto: "Nulidad por violación al Principio de Correspondencia (Art. 711 E.T.), ya que la liquidación de revisión debe circunscribirse exclusivamente a los hechos y glosas formulados en el requerimiento especial o en su ampliación.",
        explicacion: "Correcta. El Art. 711 del Estatuto Tributario exige correspondencia estricta entre la declaración, el requerimiento especial y la liquidación de revisión. No se pueden modificar conceptos o hechos que no fueron objeto de requerimiento previo."
      },
      {
        id: "B",
        texto: "Ninguno, pues la administración tributaria goza de competencia discrecional ilimitada para cambiar los motivos hasta antes del fallo del recurso.",
        explicacion: "Incorrecta. La DIAN no tiene facultades discrecionales para violar el principio de correspondencia; sus competencias están regladas taxativamente."
      },
      {
        id: "C",
        texto: "Mera irregularidad formal subsanable mediante un oficio aclaratorio informal sin efectos de fondo.",
        explicacion: "Incorrecta. Es un vicio sustancial de nulidad que afecta el derecho constitucional al debido proceso y contradicción probatoria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 711 (Correspondencia entre la declaración, el requerimiento y la liquidación)",
    citaNormativa: "«La liquidación de revisión deberá contraerse exclusivamente a la declaración del contribuyente y a los hechos que hubieren sido contemplados en el requerimiento especial o en su ampliación si la hubiere.» (E.T. Art. 711)."
  },
  {
    id: "dian_trib_06",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Firmeza General de las Declaraciones Tributarias",
    caso: "Una sociedad presentó su declaración del impuesto sobre la renta del año 2021 el 20 de abril de 2022 de forma oportuna y con liquidación de saldo a pagar. A la fecha de hoy han transcurrido más de tres (3) años sin que la DIAN haya notificado requerimiento especial ni emplazamiento.",
    enunciado: "¿Cuál es la situación jurídica de la mencionada declaración tributaria frente a la facultad de determinación de la DIAN?",
    opciones: [
      {
        id: "A",
        texto: "La declaración se encuentra en Firmeza Definitiva (Art. 714 E.T.); la DIAN perdió la competencia para modificarla y no puede proferir requerimiento especial.",
        explicacion: "Correcta. El artículo 714 del Estatuto Tributario consagra la firmeza general de 3 años contados a partir del vencimiento del plazo para declarar (o de la presentación extemporánea). Pasado este término, el denuncio tributario es inmodificable para la DIAN."
      },
      {
        id: "B",
        texto: "La DIAN puede modificarla en cualquier momento durante los 10 años siguientes mediante una auditoría posterior no intrusiva.",
        explicacion: "Incorrecta. El término general de firmeza es de 3 años, salvo reglas especiales de precios de transferencia (5 años) o pérdidas fiscales."
      },
      {
        id: "C",
        texto: "Queda en firmeza provisional, pero la DIAN puede revocarla directamente de oficio sin límite temporal.",
        explicacion: "Incorrecta. La firmeza tributaria precluye la potestad modificatoria de la administración; los actos en firme no pueden desconocerse oficiosamente."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 714 (Firmeza de la declaración tributaria)",
    citaNormativa: "«La declaración tributaria quedará en firme si, dentro de los tres (3) años siguientes a la fecha del vencimiento del plazo para declarar, no se ha notificado requerimiento especial.» (E.T. Art. 714)."
  },
  {
    id: "dian_trib_07",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Beneficio de Auditoría y Pérdida del Término Especial",
    caso: "Un contribuyente se acogió al Beneficio de Auditoría incrementando su impuesto neto de renta en un 35% respecto al año anterior, pretendiendo obtener firmeza en seis (6) meses. No obstante, al verificar los antecedentes, el pago de la declaración se realizó 5 días después del vencimiento legal.",
    enunciado: "Como Gestor III a cargo de evaluar la procedencia del beneficio de auditoría, su conclusión técnico-jurídica es:",
    opciones: [
      {
        id: "A",
        texto: "El contribuyente perdió el beneficio de auditoría porque la norma exige de forma taxativa presentar la declaración y efectuar el pago total de manera oportuna; en consecuencia, su firmeza se rige por el término general de tres (3) años.",
        explicacion: "Correcta. El artículo 689-3 del Estatuto Tributario condiciona el beneficio de auditoría a que la declaración se presente oportunamente y su pago total se efectúe en los plazos fijados por el Gobierno. El pago extemporáneo invalida el beneficio especial."
      },
      {
        id: "B",
        texto: "El beneficio se mantiene intacto porque la extemporaneidad en el pago solo genera intereses moratorios pero no afecta los términos de firmeza procesal.",
        explicacion: "Incorrecta. El parágrafo legal condiciona de manera ineludible la firmeza especial de 6 o 12 meses al pago oportuno de la declaración."
      },
      {
        id: "C",
        texto: "Se le concede una prórroga automática de 30 días hábiles para subsanar el pago extemporáneo sin perder el beneficio.",
        explicacion: "Incorrecta. En materia de beneficios tributarios la interpretación es estricta y restrictiva; la ley no autoriza prórrogas discrecionales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 689-3 (Beneficio de auditoría)",
    citaNormativa: "«Para que opere el beneficio de auditoría, la declaración debe ser presentada oportunamente y el pago de los valores a cargo debe realizarse dentro de los plazos que fije el Gobierno Nacional.» (E.T. Art. 689-3)."
  },
  {
    id: "dian_trib_08",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Sanción de Clausura del Establecimiento (Art. 657 E.T.)",
    caso: "Durante un operativo de control de facturación en una zona gastronómica, funcionarios de la DIAN constatan en flagrancia que un restaurante reincidente no expide factura electrónica ni documento equivalente a los clientes, entregando únicamente precuentas o comandas informales.",
    enunciado: "¿Cuál es la sanción legal procedente y el procedimiento que debe aplicar la DIAN conforme al Estatuto Tributario?",
    opciones: [
      {
        id: "A",
        texto: "Imponer la sanción de Clausura o Cierre del Establecimiento de Comercio por un término de tres (3) días, mediante resolución motivada previo pliego de cargos y traslado de descargos por 10 días.",
        explicacion: "Correcta. El artículo 657 del Estatuto Tributario contempla la clausura del establecimiento por 3 días por no expedir factura o expedirla sin requisitos. Requiere pliego de cargos con 10 días para descargos, garantizando el debido proceso administrativo."
      },
      {
        id: "B",
        texto: "Cerrar inmediatamente el local con candados en el acto sin proferir pliego de cargos ni escuchar descargos.",
        explicacion: "Incorrecta. Viola flagrantemente el derecho al debido proceso y defensa (Art. 29 C.P. y Art. 657 E.T.), acarreando nulidad de la actuación."
      },
      {
        id: "C",
        texto: "Decomisar la maquinaria de cocina y ordenar el desalojo definitivo del inmueble.",
        explicacion: "Incorrecta. Es una medida desproporcionada que carece de amparo normativo en las facultades de fiscalización tributaria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 657 (Sanción de clausura del establecimiento)",
    citaNormativa: "«La Administración Tributaria podrá imponer la sanción de clausura o cierre del establecimiento de comercio, oficina, consultorio y, en general, del sitio donde se ejerza la actividad, profesión u oficio, por un término de tres (3) días, cuando no se expida factura o documento equivalente estando obligado a ello.» (E.T. Art. 657)."
  },
  {
    id: "dian_trib_09",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Ruptura de Sellos Oficiales de Clausura (Art. 657 E.T.)",
    caso: "A un establecimiento comercial sancionado con cierre por no facturar se le impusieron los sellos oficiales de 'CERRADO POR LA DIAN'. Al día siguiente, el propietario rompe los sellos y abre al público el negocio con normalidad.",
    enunciado: "Ante la ruptura de sellos oficiales de clausura, ¿cuál es la consecuencia jurídica que la DIAN debe aplicar de inmediato?",
    opciones: [
      {
        id: "A",
        texto: "Imponer la sanción de clausura por un término de treinta (30) días y dar traslado inmediato a la Fiscalía General de la Nación por el delito de violación de sellos oficiales (Código Penal Art. 434).",
        explicacion: "Correcta. El Art. 657 parágrafo 3 del E.T. establece que la violación a los sellos oficiales acarrea el incremento de la clausura a 30 días, además de la remisión penal a la Fiscalía General por el delito tipificado en el Código Penal."
      },
      {
        id: "B",
        texto: "Disculpar la conducta si el comerciante se compromete por escrito a no volver a abrir hasta la semana siguiente.",
        explicacion: "Incorrecta. El servidor público no puede tolerar la infracción penal ni omitir el ejercicio de la potestad punitiva reglada."
      },
      {
        id: "C",
        texto: "Aplicar una amonestación verbal en cartelera y esperar a que termine el año fiscal.",
        explicacion: "Incorrecta. Constituye omisión de denuncia y prevaricato por omisión de las funciones de policía administrativa fiscal."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 657 y Código Penal Art. 434",
    citaNormativa: "«La ruptura de los sellos oficiales colocados por la DIAN durante la clausura acarreará el cierre del establecimiento por el término de treinta (30) días calendario y la correspondiente denuncia penal ante la autoridad competente.» (E.T. Art. 657 Parágrafo)."
  },
  {
    id: "dian_trib_10",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Límites del Sistema POS y Factura Electrónica",
    caso: "Un almacén de grandes superficies expide tiquetes de máquina registradora con sistema POS por compras individuales que superan las cinco (5) UVT sin la identificación plena del adquirente, negándose a expedir la factura electrónica que el cliente exigió.",
    enunciado: "Respecto a la validez fiscal del tiquete POS en compras superiores a 5 UVT y la exigencia del comprador, ¿cuál es el criterio legal?",
    opciones: [
      {
        id: "A",
        texto: "El tiquete POS no da derecho a costos ni deducciones en renta, ni a descontables en IVA para el comprador; además, siempre que el adquirente exija factura electrónica, el comercio está obligado a expedirla sin importar la cuantía.",
        explicacion: "Correcta. La Resolución DIAN 1092 de 2022 y el Art. 616-1 del E.T. limitan el POS y fijan que no sirve de soporte fiscal de costos/descontables; si el adquirente solicita factura electrónica, el sujeto obligado debe generarla obligatoriamente."
      },
      {
        id: "B",
        texto: "El tiquete POS es plenamente válido para deducir costos ilimitadamente sin que nadie pueda exigir factura electrónica.",
        explicacion: "Incorrecta. El tiquete POS fue excluido expresamente por la ley como soporte de deducciones y descontables para el adquirente."
      },
      {
        id: "C",
        texto: "El comercio solo está obligado a entregar factura electrónica si la compra supera los 50 millones de pesos en efectivo.",
        explicacion: "Incorrecta. Desconoce la normativa de facturación electrónica y el límite técnico de las 5 UVT para el documento POS."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 616-1 y Resolución DIAN 1092 de 2022",
    citaNormativa: "«El tiquete de máquina registradora con sistema POS no otorgará derecho a impuestos descontables en el IVA, ni a costos ni deducciones en el impuesto sobre la renta y complementarios para el adquirente.» (E.T. Art. 616-1 Parágrafo 2)."
  },
  {
    id: "dian_trib_11",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Proveedores Ficticios o Insolventes (Art. 671 E.T.)",
    caso: "En una redada contra la evasión, la DIAN descubre una empresa de papel constituida únicamente para vender facturas falsas que simulan compras millonarias de insumos inexistentes a diversas corporaciones.",
    enunciado: "De acuerdo con el artículo 671 del Estatuto Tributario, ¿qué declaración oficial y efectos jurídicos debe tramitar el Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Proyectar la resolución que declara a la sociedad como 'Proveedor Ficticio', lo cual genera el desconocimiento automático de todas las compras y costos soportados en sus facturas para los terceros compradores durante los 5 años siguientes.",
        explicacion: "Correcta. El Art. 671 del Estatuto Tributario faculta declarar proveedores ficticios a quienes facturen operaciones inexistentes. Las facturas expedidas no dan derecho a costos, deducciones ni descontables por 5 años a partir de la publicación de la sanción."
      },
      {
        id: "B",
        texto: "Felicitar a la empresa por su innovación contable y otorgarle un plazo de 3 años para que empiece a operar de verdad.",
        explicacion: "Incorrecta. Es un despropósito ético y legal que desconoce las facultades sancionatorias de la administración tributaria."
      },
      {
        id: "C",
        texto: "Validar las compras ficticias siempre que los compradores hayan pagado en cheque cruzado.",
        explicacion: "Incorrecta. El medio de pago no convalida la inexistencia material de la operación económica ni sanea el fraude tributario."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 671 (Sanción de declaración de proveedor ficticio o insolvente)",
    citaNormativa: "«No serán deducibles en el impuesto sobre la renta, ni darán derecho a impuestos descontables en el IVA, las compras o gastos efectuados a quienes el Director de la DIAN haya declarado como proveedores ficticios.» (E.T. Art. 671)."
  },
  {
    id: "dian_trib_12",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Tarifas Especiales de la Sanción por Inexactitud (Art. 648 E.T.)",
    caso: "En una fiscalización a una persona natural de altos ingresos, se evidencia que utilizó maniobras fraudulentas consistentes en la utilización de datos y documentos falsos para omitir ingresos y evadir retenciones en la fuente.",
    enunciado: "Cuando la inexactitud en la declaración tributaria se origina en la utilización de datos o documentos falsos o fraudulentos, ¿cuál es la tarifa legal de la sanción por inexactitud?",
    opciones: [
      {
        id: "A",
        texto: "La tarifa especial agravada es del ciento sesenta por ciento (160%) de la diferencia del saldo determinado o del impuesto omitido.",
        explicacion: "Correcta. El artículo 648 del Estatuto Tributario establece que la sanción por inexactitud será del 160% cuando la inexactitud se origine en la comisión de conductas fraudulentas o en la utilización de documentos o datos falsos."
      },
      {
        id: "B",
        texto: "La tarifa es del diez por ciento (10%) porque se asimila a una simple corrección formal.",
        explicacion: "Incorrecta. El fraude documental está sancionado con la tarifa agravada del 160%, la más severa frente a conductas fraudulentas calificadas."
      },
      {
        id: "C",
        texto: "La tarifa fija siempre es del 50% con independencia de la gravedad o dolo de la maniobra.",
        explicacion: "Incorrecta. Desconoce la escala punitiva del Art. 648 E.T., donde la tarifa ordinaria es 100% y la agravada por fraude sube al 160%."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 648 (Tarifa de la sanción por inexactitud)",
    citaNormativa: "«La sanción por inexactitud será del ciento sesenta por ciento (160%) de la diferencia del saldo a favor o de la suma resultante del mayor impuesto, cuando la inexactitud se origine en la utilización de datos o documentos falsos o fraudulentos.» (E.T. Art. 648 Numeral 1)."
  },
  {
    id: "dian_trib_13",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Principio de Lesividad y Graduación de Sanciones (Art. 640 E.T.)",
    caso: "A un declarante se le formula pliego de cargos por extemporaneidad en el suministro de información exógena. El contribuyente demuestra que en los dos (2) años anteriores no cometió la misma conducta sancionable y subsana voluntariamente antes de la notificación de la resolución sanción.",
    enunciado: "¿A qué porcentaje de reducción tiene derecho el contribuyente en aplicación del artículo 640 del Estatuto Tributario?",
    opciones: [
      {
        id: "A",
        texto: "Tiene derecho a que la sanción se reduzca al cincuenta por ciento (50%) del valor determinado, sin que la sanción liquidada resulte inferior a la mínima legal.",
        explicacion: "Correcta. El artículo 640 del Estatuto Tributario establece que si en los 2 años anteriores no se ha cometido la misma infracción y se subsana antes de la resolución sanción, la sanción se reduce al 50% de la inicialmente calculada (o al 70% si ya se profirió pliego de cargos según el caso, respetando siempre la sanción mínima)."
      },
      {
        id: "B",
        texto: "Tiene derecho a la condonación total y un bono de exención tributaria para el año gravable siguiente.",
        explicacion: "Incorrecta. La ley no autoriza condonaciones totales ni bonos fiscales; rige el principio de obligatoriedad de la sanción graduada."
      },
      {
        id: "C",
        texto: "No tiene derecho a reducción porque las sanciones formales no admiten ninguna aplicación del principio de gradualidad.",
        explicacion: "Incorrecta. El Art. 640 E.T. aplica transversalmente a la gran mayoría de sanciones tributarias, garantizando la proporcionalidad punitiva."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 640 (Aplicación de los principios de lesividad, proporcionalidad, gradualidad y favorabilidad)",
    citaNormativa: "«Habrá lugar a aplicar la gradualidad cuando no se haya cometido la misma infracción en los dos (2) años anteriores a la fecha de la comisión de la conducta, en cuyo caso la sanción se reducirá al cincuenta por ciento (50%) del valor de la sanción legalmente establecida.» (E.T. Art. 640 Numeral 1)."
  },
  {
    id: "dian_trib_14",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Correcciones que Aumentan el Impuesto (Art. 588 E.T.)",
    caso: "Una sociedad descubre por auditoría interna que omitió declarar un contrato de servicios en su denuncio de renta, lo cual incrementa el impuesto a pagar. Ya han transcurrido 2 años desde el vencimiento del plazo para declarar, pero la declaración no está en firme ni ha recibido requerimiento especial.",
    enunciado: "¿Puede la sociedad corregir su declaración tributaria de forma voluntaria conforme al artículo 588 del Estatuto Tributario?",
    opciones: [
      {
        id: "A",
        texto: "Sí puede corregir válidamente, pues el término para presentar correcciones que aumenten el impuesto a pagar o disminuyan el saldo a favor es de tres (3) años siguientes al vencimiento del plazo para declarar, siempre que no se haya notificado requerimiento especial.",
        explicacion: "Correcta. La Ley 1819 de 2016 amplió el término del Art. 588 del Estatuto Tributario a tres (3) años, homologándolo con el término general de firmeza, siempre que no se haya notificado auto de requerimiento especial ni emplazamiento para corregir."
      },
      {
        id: "B",
        texto: "No puede corregir, porque las correcciones voluntarias solo se permiten dentro de los 3 meses posteriores a la presentación.",
        explicacion: "Incorrecta. Confunde plazos; el término legal vigente bajo el Art. 588 E.T. es de 3 años contados a partir del vencimiento para declarar."
      },
      {
        id: "C",
        texto: "Solo puede corregir si la DIAN le autoriza previamente por escrito mediante resolución especial de permiso tributario.",
        explicacion: "Incorrecta. Las correcciones del Art. 588 que incrementan el impuesto son un derecho voluntario directo del declarante sin requerir permiso previo."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 588 (Correcciones que aumentan el impuesto)",
    citaNormativa: "«Los contribuyentes podrán corregir sus declaraciones tributarias dentro de los tres (3) años siguientes al vencimiento del plazo para declarar y antes de que se les haya notificado requerimiento especial o pliego de cargos.» (E.T. Art. 588)."
  },
  {
    id: "dian_trib_15",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Correcciones que Disminuyen el Impuesto a Pagar (Art. 589 E.T.)",
    caso: "Una empresa liquida por error un impuesto a las ventas superior al debido por haber calculado el IVA sobre una base que incluía operaciones excluidas. Desea corregir la declaración disminuyendo el valor a pagar.",
    enunciado: "¿Cuál es el procedimiento legal actual establecido en el artículo 589 del Estatuto Tributario para presentar esta corrección?",
    opciones: [
      {
        id: "A",
        texto: "Presentar la declaración de corrección directamente dentro del año siguiente al vencimiento del plazo para declarar; la corrección surte efectos inmediatos sin necesidad de proyecto previo de corrección ante la DIAN.",
        explicacion: "Correcta. La Ley 2010 de 2019 reformó el Art. 589 E.T. eliminando el engorroso trámite del 'proyecto de corrección'. Ahora la declaración de corrección que disminuye el valor a pagar o aumenta el saldo a favor se presenta directamente dentro del año siguiente y surte efectos inmediatos."
      },
      {
        id: "B",
        texto: "Iniciar una demanda de nulidad y restablecimiento del derecho ante el Consejo de Estado sin presentar ninguna declaración.",
        explicacion: "Incorrecta. No procede demanda judicial directa; debe agotarse el procedimiento administrativo previo de corrección consagrado en la ley."
      },
      {
        id: "C",
        texto: "Esperar a que la DIAN le formule una liquidación oficial de aforo para oponerse en los descargos.",
        explicacion: "Incorrecta. El aforo es exclusivo contra omisos, no contra declarantes que desean disminuir su carga declarada en exceso."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 589 (Correcciones que disminuyen el valor a pagar o aumentan el saldo a favor)",
    citaNormativa: "«Para corregir las declaraciones tributarias disminuyendo el valor a pagar o aumentando el saldo a favor, se deberá presentar la respectiva declaración dentro del año siguiente al vencimiento del término para presentar la declaración.» (E.T. Art. 589)."
  },
  {
    id: "dian_trib_16",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Devolución Automática de Saldos a Favor (Art. 855 E.T.)",
    caso: "Un exportador catalogado como contribuyente de bajo riesgo presenta solicitud de devolución de un saldo a favor en IVA. El 90% de sus costos y compras están soportados en factura electrónica con validación previa.",
    enunciado: "¿Cuál es el término especial que tiene la DIAN para proferir el acto de devolución bajo el mecanismo de Devolución Automática?",
    opciones: [
      {
        id: "A",
        texto: "Dentro de los quince (15) días hábiles siguientes a la fecha de radicación de la solicitud en debida forma.",
        explicacion: "Correcta. El artículo 855 del Estatuto Tributario y el Decreto 963 de 2020 establecen que la DIAN devolverá de forma automática dentro de los 15 días hábiles siguientes a quienes cumplan con los criterios de bajo riesgo y soporten al menos el porcentaje exigido en factura electrónica."
      },
      {
        id: "B",
        texto: "Dentro de los seis (6) meses siguientes con intervención obligatoria de la Procuraduría General.",
        explicacion: "Incorrecta. El término ordinario es de 50 días y el automático se reduce drásticamente a 15 días hábiles; no se extiende a 6 meses ni interviene la Procuraduría."
      },
      {
        id: "C",
        texto: "En un término perentorio de 24 horas continuas sin verificar ninguna consistencia tributaria.",
        explicacion: "Incorrecta. La DIAN requiere un término prudente reglado (15 días hábiles) para verificar los cruces de retenciones y saldos."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 855 (Término para la devolución de saldos a favor)",
    citaNormativa: "«La DIAN podrá devolver, de forma automática, los saldos a favor originados en el impuesto sobre la renta y sobre las ventas, dentro de los quince (15) días siguientes a la fecha de radicación de la solicitud.» (E.T. Art. 855 Parágrafo 5)."
  },
  {
    id: "dian_trib_17",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Inadmisión de Solicitudes de Devolución y Compensación (Art. 857 E.T.)",
    caso: "Un solicitante de devolución de saldos a favor en renta presenta su trámite omitiendo adjuntar el certificado de retenciones emitido por los agentes retenedores que originaron el saldo.",
    enunciado: "Como Gestor III del área de Devoluciones, ¿cuál es el acto procesal reglado procedente y qué término tiene el contribuyente para subsanar?",
    opciones: [
      {
        id: "A",
        texto: "Proferir Auto Inadmisorio de la solicitud, notificándolo para que el solicitante subsane las omisiones o inconsistencias dentro del mes siguiente.",
        explicacion: "Correcta. El artículo 857 del Estatuto Tributario regula el auto inadmisorio cuando no se aportan los requisitos o soportes formales. El interesado dispone de un (1) mes para presentar una nueva solicitud subsanando los vicios señalados."
      },
      {
        id: "B",
        texto: "Proferir Auto de Rechazo Definitivo confiscando el saldo a favor en beneficio exclusivo de la DIAN.",
        explicacion: "Incorrecta. El rechazo definitivo solo procede por causas taxativas graves (ej. extemporaneidad o saldo previamente devuelto), no por omisiones formales subsanables."
      },
      {
        id: "C",
        texto: "Ignorar la solicitud archivándola sin respuesta para que opere el silencio administrativo negativo.",
        explicacion: "Incorrecta. Constituye falta disciplinaria por desatención a las peticiones ciudadanas regladas y mora injustificada."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 857 (Rechazo e inadmisión de las solicitudes de devolución o compensación)",
    citaNormativa: "«Cuando la solicitud no cumpla con los requisitos, se dictará auto inadmisorio en el cual se señalarán los defectos que deben subsanarse. Dentro del mes siguiente a la notificación del auto, el solicitante podrá presentar nueva solicitud con el lleno de requisitos.» (E.T. Art. 857)."
  },
  {
    id: "dian_trib_18",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Precios de Transferencia y Principio de Plena Competencia",
    caso: "Una filial colombiana compra materias primas a su casa matriz en Panamá a un precio un 300% más alto que el valor de mercado entre partes independientes, reduciendo artificialmente la utilidad contable y el impuesto de renta en Colombia.",
    enunciado: "En la auditoría de precios de transferencia, ¿qué criterio legal debe aplicar el Gestor III para ajustar las operaciones entre partes vinculadas?",
    opciones: [
      {
        id: "A",
        texto: "Aplicar el Principio de Plena Competencia (Arm's Length) ajustando los precios y márgenes a los valores que se habrían pactado entre terceros independientes en condiciones comparables (Art. 260-1 y 260-3 E.T.).",
        explicacion: "Correcta. El régimen de precios de transferencia en Colombia obliga a los contribuyentes que celebren operaciones con vinculados del exterior a determinar sus ingresos, costos y deducciones considerando el principio de plena competencia o valor de mercado."
      },
      {
        id: "B",
        texto: "Aceptar los valores pactados sin objeción argumentando la autonomía contractual de la empresa privada internacional.",
        explicacion: "Incorrecta. El régimen de precios de transferencia existe precisamente para evitar la deslocalización artificial de bases imponibles entre filiales vinculadas."
      },
      {
        id: "C",
        texto: "Prohibir indefinidamente a la empresa colombiana realizar cualquier compraventa o importación con el exterior.",
        explicacion: "Incorrecta. La DIAN no prohíbe el comercio lícito, sino que reliquida las bases fiscales ajustándolas al valor de plena competencia para cobrar el impuesto real."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Arts. 260-1 y 260-3 (Régimen de Precios de Transferencia)",
    citaNormativa: "«Los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados del exterior están obligados a determinar, para efectos del impuesto, sus ingresos, costos y deducciones considerando para esas operaciones el principio de plena competencia.» (E.T. Art. 260-1)."
  },
  {
    id: "dian_trib_19",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Cláusula General Antielusión y Reconfiguración de Negocios (Art. 869 E.T.)",
    caso: "Tres accionistas constituyen una cascada de sociedades instrumentales sin empleados ni activos reales, celebrando contratos de arrendamiento simulados únicamente para eludir el impuesto a los dividendos.",
    enunciado: "¿Qué potestad faculta a la DIAN para desconocer la estructura formal artificial y recaracterizar el negocio conforme a su realidad económica?",
    opciones: [
      {
        id: "A",
        texto: "La Cláusula General Antielusión (Art. 869 E.T.), que autoriza reconfigurar o recaracterizar las operaciones artificiosas o que constituyan abuso en materia tributaria, liquidando los tributos según la sustancia económica real.",
        explicacion: "Correcta. El Art. 869 del Estatuto Tributario faculta a la DIAN para recaracterizar o reconfigurar cualquier transacción o negocio jurídico que carezca de un propósito económico o comercial legítimo y cuyo objetivo esencial sea la obtención de un beneficio tributario abusivo."
      },
      {
        id: "B",
        texto: "El principio de libre empresa que impide a las autoridades públicas investigar la estructura societaria de los particulares.",
        explicacion: "Incorrecta. La libertad económica no ampara el abuso del derecho ni el fraude a la ley fiscal; prima la prevalencia de la sustancia económica sobre la forma jurídica."
      },
      {
        id: "C",
        texto: "La expropiación administrativa inmediata de las acciones y bienes de todas las empresas sin fórmula de juicio.",
        explicacion: "Incorrecta. La reconfiguración fiscal no es confiscación patrimonial; es una determinación tributaria reglada respetando el debido proceso de auditoría."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 869 (Abuso en materia tributaria)",
    citaNormativa: "«La Administración Tributaria podrá recaracterizar o reconfigurar toda operación o serie de operaciones que constituyan abuso en materia tributaria y consecuentemente desconocer sus efectos, gravando la realidad económica subyacente.» (E.T. Art. 869)."
  },
  {
    id: "dian_trib_20",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Régimen Simple de Tributación (SIMPLE) y Exclusión",
    caso: "Un comerciante inscrito en el Régimen SIMPLE incumple de forma reiterada la obligación de pago del anticipo bimestral durante tres periodos consecutivos y omite la transmisión de facturas electrónicas.",
    enunciado: "¿Cuál es la actuación legal que debe proyectar el Gestor III conforme a las reglas del Régimen SIMPLE?",
    opciones: [
      {
        id: "A",
        texto: "Proyectar la Resolución de Exclusión del Régimen Simple de Tributación, reclasificando al contribuyente en el régimen ordinario de renta y ventas con las consecuencias fiscales y sancionatorias pertinentes.",
        explicacion: "Correcta. El artículo 913 del Estatuto Tributario faculta a la DIAN para excluir de oficio a los contribuyentes que incumplan los deberes formales o sustanciales del SIMPLE, perdiendo el beneficio y retornando al régimen ordinario."
      },
      {
        id: "B",
        texto: "Condonar las obligaciones pendientes y asignarle un subsidio económico estatal por pertenecer al régimen simple.",
        explicacion: "Incorrecta. El Régimen SIMPLE es un modelo de formalización tributaria con reglas estrictas de cumplimiento; no otorga subsidios ni exime de sanciones por incumplimiento."
      },
      {
        id: "C",
        texto: "Mantenerlo indefinidamente en el SIMPLE prohibiéndole pagar impuestos para que no incurra en gastos.",
        explicacion: "Incorrecta. Falla garrafal contra la función fiscal de recaudo y control tributario del Estado."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Arts. 905 y 913 (Exclusión del Régimen SIMPLE)",
    citaNormativa: "«Cuando el contribuyente incumpla las condiciones y requisitos previstos para pertenecer al régimen simple de tributación, la DIAN lo excluirá del régimen y lo reclasificará en el régimen ordinario.» (E.T. Art. 913)."
  },
  {
    id: "dian_trib_21",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Declaraciones que se Tienen por no Presentadas (Art. 580 E.T.)",
    caso: "Una sociedad remite su declaración de retención en la fuente a través del sistema informático, pero el archivo se presenta sin la firma digital del Revisor Fiscal debidamente facultado, estando obligada por ley a tenerlo.",
    enunciado: "De acuerdo con el artículo 580 del Estatuto Tributario, ¿cuál es la consecuencia jurídica que afecta a esta declaración?",
    opciones: [
      {
        id: "A",
        texto: "La declaración se tiene como no presentada (Art. 580 literal d E.T.), por cuanto la omisión de la firma del revisor fiscal o contador público cuando existe la obligación legal impide que el denuncio produzca efectos jurídicos válidos.",
        explicacion: "Correcta. El Art. 580 del Estatuto Tributario es taxativo: las declaraciones que no contengan la firma del revisor fiscal o contador público cuando haya obligación legal de tenerlo, no se tendrán por presentadas."
      },
      {
        id: "B",
        texto: "Se tiene por plenamente válida y no requiere firma alguna porque el envío electrónico convalida automáticamente cualquier firma humana.",
        explicacion: "Incorrecta. El mecanismo electrónico requiere firma electrónica calificada del revisor fiscal; su ausencia acarrea la ineficacia legal de la presentación."
      },
      {
        id: "C",
        texto: "Genera automáticamente la pena de prisión de 10 años para el representante legal sin necesidad de proceso disciplinario ni tributario.",
        explicacion: "Incorrecta. No es una conducta penal per se; es una causal procedimental administrativa de ineficacia de la declaración (tenerse por no presentada)."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 580 (Declaraciones que se tienen por no presentadas)",
    citaNormativa: "«No se entenderá cumplido el deber de presentar la declaración tributaria, cuando la misma no se presente firmada por quien deba cumplir el deber formal de declarar, o cuando se omita la firma del revisor fiscal o contador público existiendo la obligación legal.» (E.T. Art. 580 literal d)."
  },
  {
    id: "dian_trib_22",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Cómputo de Términos en Notificación Electrónica (Art. 566-1 E.T.)",
    caso: "La DIAN envía un requerimiento ordinario de información al correo electrónico registrado en el RUT de un contribuyente el día miércoles a las 4:00 p.m.",
    enunciado: "Conforme al artículo 566-1 del Estatuto Tributario, ¿a partir de qué momento se entiende notificado el acto y cuándo empiezan a correr los términos legales para responder?",
    opciones: [
      {
        id: "A",
        texto: "La notificación se entiende surtida para la DIAN con el envío del correo; pero para el contribuyente, los términos empezarán a correr cinco (5) días hábiles después de la entrega del correo electrónico en su buzón.",
        explicacion: "Correcta. El Art. 566-1 del E.T. (modificado por la Ley 2010 de 2019) estipula que la notificación electrónica se entiende surtida con la entrega del correo, pero los términos para el contribuyente corren a partir del quinto (5°) día hábil siguiente a la entrega del mensaje."
      },
      {
        id: "B",
        texto: "Los términos corren inmediatamente a las 4:01 p.m. del mismo día en que se remitió el mensaje de datos sin ningún plazo de gracia.",
        explicacion: "Incorrecta. Ignora la garantía del término de gracia de cinco (5) días hábiles que la ley otorga para que el administrado revise su bandeja electrónica."
      },
      {
        id: "C",
        texto: "Solo se entiende notificado si el contribuyente contesta confirmando de recibido con firma autenticada en notaría.",
        explicacion: "Incorrecta. La validez de la notificación electrónica no está subordinada a la confirmación de lectura voluntaria del destinatario."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 566-1 (Notificación electrónica)",
    citaNormativa: "«Los términos concedidos al administrado para responder o impugnar el acto administrativo notificado electrónicamente, empezarán a correr a partir del quinto (5°) día hábil siguiente a la fecha en que el correo electrónico sea entregado en el buzón.» (E.T. Art. 566-1)."
  },
  {
    id: "dian_trib_23",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Emplazamiento para Declarar y Liquidación Oficial de Aforo (Art. 715 E.T.)",
    caso: "Un ciudadano obligado a declarar renta por superar topes de ingresos y consignaciones bancarias omite presentar la declaración. La DIAN le notifica Emplazamiento para Declarar otorgándole un (1) mes, pero el ciudadano guarda absoluto silencio y continúa omiso.",
    enunciado: "¿Cuál es el siguiente paso procesal reglado que la DIAN debe expedir para determinar oficialmente el tributo?",
    opciones: [
      {
        id: "A",
        texto: "Proferir una Liquidación Oficial de Aforo dentro de los cinco (5) años siguientes al vencimiento del plazo para declarar, determinando la obligación tributaria y la sanción por no declarar (Arts. 717 y 643 E.T.).",
        explicacion: "Correcta. Vencido el plazo del emplazamiento para declarar sin que el obligado presente la declaración, la DIAN procede a proferir la Liquidación Oficial de Aforo (Art. 717 E.T.), la cual tiene un término de caducidad de 5 años según el Art. 717 del Estatuto."
      },
      {
        id: "B",
        texto: "Declarar la prescripción y archivar el caso definitivamente porque la administración no puede liquidar tributos sin el consentimiento del ciudadano.",
        explicacion: "Incorrecta. La DIAN tiene la potestad de aforo oficioso precisamente para determinar el impuesto y sancionar a los omisos sin requerir su consentimiento."
      },
      {
        id: "C",
        texto: "Notificar un Requerimiento Especial para modificar la declaración inexistente.",
        explicacion: "Incorrecta. El requerimiento especial solo procede contra declaraciones previamente presentadas para modificarlas; no contra omisos."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Arts. 715 y 717 (Liquidación de Aforo)",
    citaNormativa: "«Agotado el procedimiento previsto en el artículo 715, la Administración podrá, dentro de los cinco (5) años siguientes al vencimiento del plazo señalado para declarar, determinar mediante una Liquidación de Aforo, la obligación tributaria al contribuyente omiso.» (E.T. Art. 717)."
  },
  {
    id: "dian_trib_24",
    nivel: "Profesional",
    ejeId: "tributario",
    ejeNombre: "Procedimiento Tributario y Fiscalización",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Sanción por no Declarar en IVA y Retenciones (Art. 643 E.T.)",
    caso: "Una sociedad responsable de IVA omite presentar las declaraciones bimestrales de todo el año. La DIAN adelanta el proceso de aforo y debe liquidar la sanción correspondiente por no declarar.",
    enunciado: "De acuerdo con el artículo 643 del Estatuto Tributario, ¿a cuánto equivale la sanción por no declarar el impuesto sobre las ventas (IVA)?",
    opciones: [
      {
        id: "A",
        texto: "Al diez por ciento (10%) de las consignaciones bancarias o ingresos brutos del período no declarado, o al cien por ciento (100%) de las retenciones que figuren en la última declaración de ventas presentada, la que fuere superior.",
        explicacion: "Correcta. El artículo 643 numeral 2 del Estatuto Tributario fija de manera taxativa que la sanción por no declarar IVA será del 10% de las consignaciones o ingresos brutos del periodo, o del 100% de las retenciones que figuren en la última declaración de ventas."
      },
      {
        id: "B",
        texto: "A una suma fija de 1 UVT sin importar los ingresos ni las transacciones bancarias del contribuyente.",
        explicacion: "Incorrecta. Las sanciones por omisión son proporcionales a las bases económicas para castigar severamente la omisión de recaudar y declarar el IVA."
      },
      {
        id: "C",
        texto: "Al 1% del capital suscrito de la compañía en el registro mercantil.",
        explicacion: "Incorrecta. La base sancionatoria tributaria se fundamenta en ingresos, consignaciones o impuestos del periodo, no en el capital social."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 643 (Sanción por no declarar)",
    citaNormativa: "«En el caso de que la omisión se refiera a la declaración del impuesto sobre las ventas, la sanción será del diez por ciento (10%) de las consignaciones bancarias o ingresos brutos de quien persiste en su omisión, o al cien por ciento (100%) del impuesto que figure en la última declaración presentada, el que resulte superior.» (E.T. Art. 643 Numeral 2)."
  }
];

console.log("Batch 1 generado con éxito: " + BATCH_1.length + " preguntas.");
module.exports = { BATCH_1 };
