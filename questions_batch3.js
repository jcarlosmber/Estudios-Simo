// questions_batch3.js - Lote 3 de Preguntas de Juicio Situacional (CPACA, Peticiones, Contratación, Disciplinario y Competencias Gestor III)
const BATCH_3 = [
  // =========================================================================
  // DERECHO ADMINISTRATIVO Y PROCEDIMENTAL (CPACA Y ESTATUTO TRIBUTARIO)
  // =========================================================================
  {
    id: "dian_cpaca_01",
    nivel: "Profesional",
    ejeId: "cpaca",
    ejeNombre: "Derecho Administrativo y CPACA",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Recurso de Reconsideración Tributario (Art. 720 E.T.)",
    caso: "A un contribuyente se le notifica en debida forma una Liquidación Oficial de Revisión por impuesto de renta. En desacuerdo con la glosa, decide impugnar el acto en sede administrativa gubernativa.",
    enunciado: "¿Cuál es el recurso procedente, ante qué autoridad se interpone y cuál es el término legal para radicarlo?",
    opciones: [
      {
        id: "A",
        texto: "El Recurso de Reconsideración, el cual debe interponerse por escrito ante la misma dependencia que profirió el acto dentro de los dos (2) meses siguientes a su notificación.",
        explicacion: "Correcta. El artículo 720 del Estatuto Tributario establece que contra las liquidaciones oficiales y resoluciones sanción procede únicamente el Recurso de Reconsideración, el cual debe interponerse dentro de los dos (2) meses siguientes a la notificación del acto administrativo."
      },
      {
        id: "B",
        texto: "El Recurso de Reposición y en subsidio Apelación ante el Ministro de Hacienda en el término de 5 días hábiles.",
        explicacion: "Incorrecta. En materia tributaria rige el principio de especialidad procedimental: el recurso ordinario es el de Reconsideración (no reposición/apelación ordinarios del CPACA) y su término es de dos meses."
      },
      {
        id: "C",
        texto: "Una acción de tutela directa sin agotar la vía administrativa gubernativa.",
        explicacion: "Incorrecta. La tutela es subsidiaria e improcedente existiendo recursos administrativos y medios de control contencioso ordinarios."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 720 (Recurso de reconsideración)",
    citaNormativa: "«Sin perjuicio de lo dispuesto en normas especiales, contra las liquidaciones oficiales, resoluciones que impongan sanciones o decreten el decomiso de mercancías, procede el recurso de reconsideración dentro de los dos (2) meses siguientes a su notificación.» (E.T. Art. 720)."
  },
  {
    id: "dian_cpaca_02",
    nivel: "Profesional",
    ejeId: "cpaca",
    ejeNombre: "Derecho Administrativo y CPACA",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Silencio Administrativo Positivo en Recurso de Reconsideración (Art. 734 E.T.)",
    caso: "Un contribuyente interpuso en debida forma el Recurso de Reconsideración contra una Liquidación Oficial de Revisión el 10 de marzo de 2024. A la fecha de hoy, 15 de abril de 2025, la DIAN no ha notificado la resolución que decide el recurso.",
    enunciado: "De conformidad con el artículo 734 del Estatuto Tributario, ¿qué figura jurídica se consolida a favor del contribuyente?",
    opciones: [
      {
        id: "A",
        texto: "Opera el Silencio Administrativo Positivo; al vencer el término de un (1) año sin notificar la decisión del recurso, se entiende fallado a favor del recurrente y queda sin efecto la liquidación oficial.",
        explicacion: "Correcta. El artículo 734 del Estatuto Tributario consagra de manera expresa el silencio administrativo positivo si la DIAN no resuelve el recurso de reconsideración dentro del año siguiente a su interposición en debida forma, protocolizándose la revocatoria del acto recurrido."
      },
      {
        id: "B",
        texto: "Opera el silencio negativo debiendo pagar de inmediato el doble del valor liquidado.",
        explicacion: "Incorrecta. En el recurso de reconsideración tributario la norma especial consagra expresamente el silencio positivo (Art. 734 E.T.), no el negativo."
      },
      {
        id: "C",
        texto: "La DIAN dispone de un término indefinido de 10 años para contestar cuando sus funcionarios tengan tiempo libre.",
        explicacion: "Incorrecta. Los términos procesales de la administración son perentorios e improrrogables para garantizar la seguridad jurídica."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 734 (Silencio administrativo positivo)",
    citaNormativa: "«Si transcurrido un año desde la interposición en debida forma del recurso de reconsideración, no se ha notificado la decisión correspondiente, se entenderá fallado a favor del recurrente, en cuyo caso la administración deberá protocolizar la decisión.» (E.T. Art. 734)."
  },
  {
    id: "dian_cpaca_03",
    nivel: "Profesional",
    ejeId: "cpaca",
    ejeNombre: "Derecho Administrativo y CPACA",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Pérdida de Fuerza Ejecutoria del Acto Administrativo (CPACA Art. 91)",
    caso: "Una resolución sanción quedó debidamente ejecutoriada hace seis (6) años. Durante ese lapso la DIAN no adelantó ningún acto de ejecución ni cobro coactivo para hacerla efectiva.",
    enunciado: "De acuerdo con el artículo 91 del CPACA, ¿cuál es el fenómeno jurídico que extingue la ejecutoriedad del acto administrativo?",
    opciones: [
      {
        id: "A",
        texto: "Pérdida de fuerza ejecutoria por el transcurso de cinco (5) años sin que la administración haya ejecutado los actos que le corresponden para hacerla efectiva (decaimiento del acto administrativo por prescripción del cobro).",
        explicacion: "Correcta. El artículo 91 numeral 3 del CPACA dispone que los actos administrativos pierden su fuerza ejecutoria cuando al cabo de cinco (5) años de estar en firme, la autoridad no ha realizado los actos de ejecución correspondientes."
      },
      {
        id: "B",
        texto: "El acto adquiere mayor fuerza ejecutoria indefinida y puede cobrarse en cualquier momento del siglo XXI.",
        explicacion: "Incorrecta. La inactividad de la administración por 5 años extingue la fuerza ejecutoria del acto administrativo."
      },
      {
        id: "C",
        texto: "El acto se transforma automáticamente en un bono de deuda pública transable en la bolsa de valores.",
        explicacion: "Incorrecta. Planteamiento absurdo e inexistente en la teoría general del acto administrativo."
      }
    ],
    respuestaCorrecta: "A",
    norma: "CPACA (Ley 1437 de 2011), Art. 91 (Pérdida de fuerza ejecutoria)",
    citaNormativa: "«Salvo norma expresa en contrario, los actos administrativos en firme serán obligatorios mientras no hayan sido anulados. Perderán obligatoriedad y fuerza ejecutoria: Cuando al cabo de cinco (5) años de estar en firme, la autoridad no ha realizado los actos que le correspondan para ejecutarlos.» (CPACA, Art. 91 Numeral 3)."
  },
  {
    id: "dian_cpaca_04",
    nivel: "Profesional",
    ejeId: "cpaca",
    ejeNombre: "Derecho Administrativo y CPACA",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Revocatoria Directa de Actos Administrativos Tributarios (CPACA Art. 93 y E.T. Art. 736)",
    caso: "Un contribuyente que no interpuso recurso de reconsideración dentro de los dos meses contra una liquidación oficial solicita la Revocatoria Directa demostrando que el acto se fundamentó en una norma declarada inexequible con efectos retroactivos por la Corte Constitucional.",
    enunciado: "¿Es procedente la solicitud de revocatoria directa aún cuando no se hayan interpuesto los recursos en vía gubernativa?",
    opciones: [
      {
        id: "A",
        texto: "Sí es procedente; conforme al artículo 93 del CPACA y al Estatuto Tributario, la falta de interposición de recursos ordinarios no impide la solicitud de revocatoria directa cuando el acto manifiesta manifiesta oposición a la Constitución o la ley.",
        explicacion: "Correcta. El artículo 93 del CPACA y la jurisprudencia del Consejo de Estado reiteran que la no interposición de recursos en vía administrativa no priva al ciudadano del derecho a solicitar la revocatoria directa por las causales taxativas legales (manifiesta oposición a la Constitución, violación a la ley o agravio injustificado)."
      },
      {
        id: "B",
        texto: "No es procedente bajo ninguna circunstancia porque quien no interpuso recursos pierde todos sus derechos de por vida.",
        explicacion: "Incorrecta. Confunde el agotamiento de la vía administrativa para demandar ante la jurisdicción contenciosa con el mecanismo autónomo de revocatoria directa."
      },
      {
        id: "C",
        texto: "Solo procede si el contribuyente paga el 50% del valor discutido como fianza no reembolsable.",
        explicacion: "Incorrecta. La solicitud de revocatoria directa no exige depósitos ni cauciones pecuniarias previas."
      }
    ],
    respuestaCorrecta: "A",
    norma: "CPACA, Art. 93 y Estatuto Tributario, Art. 736 (Revocatoria directa)",
    citaNormativa: "«Los actos administrativos deberán ser revocados por las mismas autoridades que los hayan expedido: Cuando sea manifiesta su oposición a la Constitución Política o a la ley. La solicitud de revocatoria directa procederá aun cuando se hubiere ejercido o no los recursos administrativos.» (CPACA, Art. 93)."
  },
  {
    id: "dian_cpaca_05",
    nivel: "Profesional",
    ejeId: "cpaca",
    ejeNombre: "Derecho Administrativo y CPACA",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Corrección de Errores Aritméticos o de Hecho (CPACA Art. 45)",
    caso: "En una resolución sanción, el funcionario liquidador escribió en la parte resolutiva la suma de '$100.000.000 (diez millones de pesos)', existiendo una contradicción palmaria y un error mecanográfico evidente frente a los datos contables del expediente.",
    enunciado: "¿Cuál es el mecanismo formal legal que debe emplear la administración para subsanar este vicio formal?",
    opciones: [
      {
        id: "A",
        texto: "Expedir un acto de corrección de error aritmético o de trascripción material conforme al artículo 45 del CPACA, el cual puede efectuarse en cualquier tiempo siempre que no altere lo sustancial de la decisión.",
        explicacion: "Correcta. El Art. 45 del CPACA faculta a la autoridad administrativa para corregir en cualquier tiempo, de oficio o a petición de parte, los errores puramente aritméticos, mecanográficos o de trascripción que no modifiquen el fondo de la decisión."
      },
      {
        id: "B",
        texto: "Tachar el documento con bolígrafo y corrector líquido sin dejar constancia administrativa.",
        explicacion: "Incorrecta. Atenta contra la custodia y validez de los expedientes oficiales y tipifica alteración de documento público."
      },
      {
        id: "C",
        texto: "Iniciar un nuevo juicio situacional de fiscalización desde cero anulando todos los antecedentes.",
        explicacion: "Incorrecta. Viola el principio de economía procesal y eficacia administrativa."
      }
    ],
    respuestaCorrecta: "A",
    norma: "CPACA (Ley 1437 de 2011), Art. 45 (Corrección de errores formales)",
    citaNormativa: "«En cualquier tiempo, de oficio o a petición de parte, se podrán corregir los errores simplemente aritméticos, de hecho o de transcripción contenidos en los actos administrativos, siempre que la corrección no altere lo sustancial de la decisión.» (CPACA, Art. 45)."
  },
  {
    id: "dian_cpaca_06",
    nivel: "Profesional",
    ejeId: "cpaca",
    ejeNombre: "Derecho Administrativo y CPACA",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Notificación por Conducta Concluyente (CPACA Art. 72)",
    caso: "A un declarante no se le notificó formalmente por correo electrónico la resolución que impone sanción por libros de contabilidad. Sin embargo, el ciudadano radica un escrito ante la DIAN interponiendo recurso de reconsideración donde transcribe íntegramente la resolución sanción y debate sus pruebas.",
    enunciado: "De acuerdo con el artículo 72 del CPACA, ¿qué efecto procesal se produce respecto a la notificación del acto?",
    opciones: [
      {
        id: "A",
        texto: "Opera la Notificación por Conducta Concluyente; se tiene por surtida la notificación personal a partir de la fecha de radicación del escrito donde el interesado manifiesta o demuestra conocer el acto en su integridad.",
        explicacion: "Correcta. El artículo 72 del CPACA dispone que cuando una parte interponga recursos o se manifieste conocedora del contenido del acto administrativo sin haber sido notificada debidamente, se entenderá surtida la notificación por conducta concluyente desde la fecha de dicha manifestación."
      },
      {
        id: "B",
        texto: "El acto es inexistente jurídicamente y el contribuyente queda inmune de por vida.",
        explicacion: "Incorrecta. La conducta concluyente sanea la falta de notificación previa garantizando que el administrado ejerció su defensa material."
      },
      {
        id: "C",
        texto: "La DIAN debe sancionar al contribuyente por haberse enterado del acto administrativo sin permiso previo.",
        explicacion: "Incorrecta. Absurdo procesal; el conocimiento del acto abre el ejercicio legítimo del derecho de defensa y contradicción."
      }
    ],
    respuestaCorrecta: "A",
    norma: "CPACA (Ley 1437 de 2011), Art. 72 (Falta o irregularidad de las notificaciones)",
    citaNormativa: "«La notificación quedará surtida y el acto producirá efectos cuando la parte interesada se declare sabedora del acto administrativo o interponga los recursos procedentes, dándose por notificada por conducta concluyente.» (CPACA, Art. 72)."
  },
  {
    id: "dian_cpaca_07",
    nivel: "Profesional",
    ejeId: "cpaca",
    ejeNombre: "Derecho Administrativo y CPACA",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Notificación por Aviso subsidiaria (CPACA Art. 69)",
    caso: "Se intenta notificar personalmente un acto administrativo definitivo en la dirección física de un contribuyente que no tiene correo electrónico autorizado en el RUT. Se le envía citación para notificación personal, pero no comparece dentro de los cinco (5) días hábiles siguientes.",
    enunciado: "¿Cuál es el mecanismo subsidiario de notificación que debe aplicar la DIAN conforme al artículo 69 del CPACA?",
    opciones: [
      {
        id: "A",
        texto: "Efectuar la Notificación por Aviso, remitiendo copia íntegra del acto al domicilio y publicándolo en la página web institucional con indicación de los recursos procedentes; la notificación se considerará surtida al finalizar el día siguiente al de la entrega o retiro del aviso.",
        explicacion: "Correcta. El artículo 69 del CPACA regula la notificación por aviso cuando no sea posible la notificación personal tras vencer el término de la citación, surtiéndose al finalizar el día siguiente a la entrega del aviso."
      },
      {
        id: "B",
        texto: "Dejar el expediente abandonado en un archivo muerto sin intentar ninguna otra vía de comunicación.",
        explicacion: "Incorrecta. La administración tiene el deber de agotar los mecanismos subsidiarios de notificación para asegurar la firmeza de sus actos."
      },
      {
        id: "C",
        texto: "Publicar el nombre del contribuyente en un megáfono callejero por el centro de la ciudad.",
        explicacion: "Incorrecta. Mecanismo informal y lesivo del derecho a la intimidad no previsto en la ley."
      }
    ],
    respuestaCorrecta: "A",
    norma: "CPACA (Ley 1437 de 2011), Art. 69 (Notificación por aviso)",
    citaNormativa: "«Si no pudiere hacerse la notificación personal al cabo de los cinco (5) días del envío de la citación, se notificará por medio de aviso que se remitirá a la dirección que se conozca del interesado. La notificación se entenderá surtida al finalizar el día siguiente al de la entrega del aviso.» (CPACA, Art. 69)."
  },

  // =========================================================================
  // DERECHO DE PETICIÓN Y SERVICIO AL CIUDADANO (LEY 1755 DE 2015)
  // =========================================================================
  {
    id: "dian_peticion_01",
    nivel: "Profesional",
    ejeId: "servicio",
    ejeNombre: "Derecho de Petición y Servicio al Ciudadano",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Término para Resolver Peticiones de Documentos y Copias (Ley 1755 Art. 14)",
    caso: "Un ciudadano radica una petición formal ante la DIAN solicitando copia de un manual técnico no reservado y de estadísticas consolidadas públicas de recaudo de los últimos 3 años.",
    enunciado: "De acuerdo con el artículo 14 de la Ley 1755 de 2015, ¿cuál es el plazo máximo legal para entregar los documentos o copias solicitadas?",
    opciones: [
      {
        id: "A",
        texto: "Diez (10) días hábiles siguientes a su recepción; si no se da respuesta en este plazo, opera el silencio administrativo positivo debiendo entregar las copias dentro de los 3 días siguientes sin costo.",
        explicacion: "Correcta. El artículo 14 de la Ley 1755 de 2015 fija 10 días para peticiones de información y copias; si la entidad no responde en ese término, la ley dispone que la petición se entenderá aceptada y la documentación deberá entregarse dentro de los tres días siguientes."
      },
      {
        id: "B",
        texto: "Treinta (30) días calendario prorrogables por 6 meses adicionales.",
        explicacion: "Incorrecta. El término de 30 días es para consultas jurídicas, no para peticiones de documentos (que tienen el término preferente de 10 días)."
      },
      {
        id: "C",
        texto: "Un año contado desde la autorización del sindicato de la entidad.",
        explicacion: "Incorrecta. Desconoce de plano el régimen legal del derecho fundamental de petición."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1755 de 2015, Art. 14 (Términos para resolver las distintas modalidades de peticiones)",
    citaNormativa: "«Las peticiones de documentos y de información deberán resolverse dentro de los diez (10) días siguientes a su recepción. Si no se da respuesta, se entenderá aceptada la petición y se entregarán dentro de los tres (3) días siguientes.» (Ley 1755 de 2015, Art. 14 Numeral 1)."
  },
  {
    id: "dian_peticion_02",
    nivel: "Profesional",
    ejeId: "servicio",
    ejeNombre: "Derecho de Petición y Servicio al Ciudadano",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Peticiones Oscuras o Incompletas y Desistimiento Tácito (Ley 1755 Art. 17)",
    caso: "Un ciudadano radica una solicitud confusa sin aportar los documentos esenciales exigidos por la ley para adelantar el trámite de inscripción en el RUT como importador ocasional.",
    enunciado: "¿Cuál es el trámite reglado que debe aplicar el Gestor III para garantizar el debido proceso?",
    opciones: [
      {
        id: "A",
        texto: "Requerir al peticionario por escrito dentro de los diez (10) días siguientes para que complete la solicitud en un término de un (1) mes; si no la subsana en dicho término, se declarará el desistimiento tácito y el archivo del trámite.",
        explicacion: "Correcta. El artículo 17 de la Ley 1755 de 2015 regula las peticiones incompletas: la autoridad requiere al peticionario para que subsane en 1 mes. Si no lo hace, opera el desistimiento tácito sin perjuicio de que pueda presentar una nueva petición posteriormente."
      },
      {
        id: "B",
        texto: "Tirar la petición a la papelera sin avisarle al ciudadano y bloquear su acceso a la entidad.",
        explicacion: "Incorrecta. Constituye falta disciplinaria gravísima por denegación de servicios y desprecio a los derechos ciudadanos."
      },
      {
        id: "C",
        texto: "Imponerle una multa de diez salarios mínimos mensuales por no redactar con buena ortografía.",
        explicacion: "Incorrecta. La administración pública no tiene potestad para multar a los ciudadanos por peticiones deficientes o incompletas."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1755 de 2015, Art. 17 (Peticiones incompletas y desistimiento tácito)",
    citaNormativa: "«Cuando la autoridad constate que una petición está incompleta, requerirá al peticionario dentro de los diez (10) días siguientes a la recepción para que la subsane en el término máximo de un (1) mes. Vencidos los términos sin respuesta, se decretará el desistimiento tácito.» (Ley 1755 de 2015, Art. 17)."
  },
  {
    id: "dian_peticion_03",
    nivel: "Profesional",
    ejeId: "servicio",
    ejeNombre: "Derecho de Petición y Servicio al Ciudadano",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Consultas Jurídicas y Carácter No Vinculante (Ley 1755 Art. 28)",
    caso: "Una agremiación empresarial radica una consulta jurídica a la Subdirección de Normativa y Doctrina de la DIAN solicitando interpretar el alcance tributario de una exención de IVA en paneles solares.",
    enunciado: "¿Cuál es el término legal para responder y cuál es la naturaleza jurídica de los conceptos emitidos?",
    opciones: [
      {
        id: "A",
        texto: "El término para resolver consultas es de treinta (30) días hábiles; los conceptos emitidos por la DIAN resuelven peticiones en abstracto y no son de obligatorio cumplimiento para los particulares ni deciden situaciones jurídicas concretas.",
        explicacion: "Correcta. El Art. 14 de la Ley 1755 de 2015 fija 30 días para consultas; y el Art. 28 señala que los conceptos de las autoridades son orientaciones no vinculantes para los ciudadanos (aunque obligatorios para los funcionarios de la misma entidad según doctrina reiterada)."
      },
      {
        id: "B",
        texto: "Tienen carácter de ley suprema inmodificable por el Congreso y deben responderse en 24 horas continuas.",
        explicacion: "Incorrecta. Los conceptos son doctrina administrativa auxiliar, no normas con rango de ley formal ni se resuelven en 24 horas."
      },
      {
        id: "C",
        texto: "La DIAN no tiene competencia para emitir conceptos y debe rechazar de plano todas las consultas ciudadanas.",
        explicacion: "Incorrecta. La DIAN cuenta con la Subdirección de Normativa y Doctrina encargada expresamente de unificar la doctrina tributaria y aduanera."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1755 de 2015, Arts. 14 y 28 (Alcance de los conceptos)",
    citaNormativa: "«Salvo disposición legal en contrario, los conceptos emitidos por las autoridades como respuestas a peticiones realizadas en ejercicio del derecho a formular consultas no serán de obligatorio cumplimiento o ejecución.» (Ley 1755 de 2015, Art. 28)."
  },
  {
    id: "dian_peticion_04",
    nivel: "Profesional",
    ejeId: "servicio",
    ejeNombre: "Derecho de Petición y Servicio al Ciudadano",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Reserva de la Información Tributaria (Art. 583 E.T.) vs. Solicitud de Particulares",
    caso: "Un ciudadano particular solicita por derecho de petición que la DIAN le entregue copia íntegra de las declaraciones de renta de su vecino para verificar si sus ingresos justifican el carro que compró.",
    enunciado: "Como Gestor III responsable de proyectar la respuesta al derecho de petición, ¿cuál es la decisión legal procedente?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar la solicitud invocando la Reserva Legal de la Información Tributaria (Art. 583 del Estatuto Tributario y Ley 1755 Art. 24), informando motivadamente que los datos de declaraciones tributarias son de carácter reservado y solo accesibles por orden judicial o entes de control autorizados.",
        explicacion: "Correcta. El artículo 583 del Estatuto Tributario consagra la reserva tributaria estricta de las declaraciones y bases de datos fiscales; ningún particular puede acceder a la información económica de terceros sin autorización legal o judicial expresa."
      },
      {
        id: "B",
        texto: "Entregarle de inmediato las declaraciones con extractos bancarios para fomentar la curiosidad comunitaria.",
        explicacion: "Incorrecta. Constituye violación flagrante de la reserva legal, delito penal y causal de destitución disciplinaria inmediata."
      },
      {
        id: "C",
        texto: "Cobrarle un soborno en efectivo de 500.000 pesos para entregarle copias sin sello oficial.",
        explicacion: "Incorrecta. Delito de cohecho y corrupción absoluta inadmisible en el servicio público."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 583 y Ley 1755 de 2015 Art. 24 (Reserva legal)",
    citaNormativa: "«La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada.» (E.T. Art. 583)."
  },
  {
    id: "dian_peticion_05",
    nivel: "Profesional",
    ejeId: "servicio",
    ejeNombre: "Derecho de Petición y Servicio al Ciudadano",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Requerimientos de Información de la Fiscalía y Jueces de la República (Art. 585 E.T.)",
    caso: "Un Fiscal Delegado ante el Tribunal, dentro de una investigación penal formal por lavado de activos y enriquecimiento ilícito, libra orden judicial solicitando a la DIAN copia de las declaraciones tributarias y facturas de los imputados.",
    enunciado: "Ante el requerimiento judicial fundado de la Fiscalía General de la Nación, ¿cómo debe proceder la DIAN?",
    opciones: [
      {
        id: "A",
        texto: "Suministrar la información solicitada bajo estricto protocolo de confidencialidad, toda vez que las órdenes judiciales y de la Fiscalía en procesos penales constituyen una excepción legal válida a la reserva tributaria (Art. 585 E.T.).",
        explicacion: "Correcta. El artículo 585 del Estatuto Tributario y la jurisprudencia constitucional señalan que la reserva tributaria se levanta frente a requerimientos judiciales y de la Fiscalía General para investigaciones penales, debiendo suministrarse con la debida custodia probatoria."
      },
      {
        id: "B",
        texto: "Negar el suministro al Fiscal argumentando que la DIAN es una entidad superior a la Constitución y no le responde a los jueces.",
        explicacion: "Incorrecta. Incurre en desacato judicial y obstaculización a la justicia tipificada en el Código Penal."
      },
      {
        id: "C",
        texto: "Filtrar el requerimiento judicial a los medios de comunicación antes de responderle al fiscal.",
        explicacion: "Incorrecta. Viola la reserva procesal penal y pone en riesgo el éxito de la investigación penal."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 585 (Excepciones a la reserva tributaria para investigaciones penales)",
    citaNormativa: "«Para los fines de la investigación penal, los jueces y fiscales podrán solicitar el suministro de informaciones o copias de las declaraciones tributarias que reposen en la DIAN.» (E.T. Art. 585)."
  },

  // =========================================================================
  // CONTRATACIÓN ESTATAL Y SUPERVISIÓN (LEY 80 DE 1993 Y LEY 1150 DE 2007)
  // =========================================================================
  {
    id: "dian_contra_02",
    nivel: "Profesional",
    ejeId: "contratacion",
    ejeNombre: "Contratación y Convenios",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Principio de Planeación y Estudios Previos en Contratación Estatal",
    caso: "La Seccional requiere contratar urgentemente la adquisición de servidores informáticos para procesamiento de macrodatos. Para acelerar el proceso, el área responsable propone publicar el pliego de condiciones sin haber elaborado el estudio del sector ni el análisis del riesgo previsible.",
    enunciado: "Desde el principio de legalidad y planeación contractual (Ley 80 de 1993 y Decreto 1082 de 2015), ¿cuál es el direccionamiento técnico correcto?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar la propuesta y elaborar rigurosamente los Estudios y Documentos Previos (análisis del sector, maduración técnica y matriz de riesgos previsibles) antes de la apertura del proceso, puesto que la falta de planeación vicia de nulidad el contrato y genera responsabilidad patrimonial y disciplinaria.",
        explicacion: "Correcta. El Principio de Planeación es rector en la contratación pública. Ningún proceso puede abrirse sin estudios previos completos, análisis de mercado y matriz de riesgos; omitirlos acarrea nulidad del proceso y sanción a los estructuradores."
      },
      {
        id: "B",
        texto: "Adjudicar directamente el contrato por WhatsApp a un amigo del director sin estudios ni pólizas.",
        explicacion: "Incorrecta. Delito de contrato sin cumplimiento de requisitos legales (Código Penal Art. 410) y falta gravísima."
      },
      {
        id: "C",
        texto: "Comprar los servidores con dinero en efectivo de la caja menor de la oficina sin registrar en el SECOP.",
        explicacion: "Incorrecta. La caja menor está restringida a gastos urgentes menores e imprevistos; no ampara adquisición de bienes tecnológicos de gran escala."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 80 de 1993, Art. 25 (Principio de Economía y Planeación) y Decreto 1082 de 2015",
    citaNormativa: "«En los procesos contractuales se elaborarán los estudios, diseños y proyectos requeridos, y los pliegos de condiciones, con antelación a la apertura del proceso de selección o de la firma del contrato.» (Ley 80 de 1993, Art. 25 Numeral 12)."
  },
  {
    id: "dian_contra_03",
    nivel: "Profesional",
    ejeId: "contratacion",
    ejeNombre: "Contratación y Convenios",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Modalidades de Selección: Licitación Pública vs. Selección Abreviada vs. Mínima Cuantía",
    caso: "La DIAN requiere contratar el servicio integral de aseo, cafetería y mantenimiento para todas las sedes del país por un valor estimado de 15.000 millones de pesos.",
    enunciado: "Tratándose de servicios de características técnicas uniformes y de común utilización, ¿cuál es la modalidad de selección procedente conforme a la Ley 1150 de 2007?",
    opciones: [
      {
        id: "A",
        texto: "Selección Abreviada por Subasta Inversa Presencial o Electrónica (o Acuerdo Marco de Precios en Colombia Compra Eficiente), por tratarse de bienes y servicios de características técnicas uniformes y común utilización.",
        explicacion: "Correcta. El artículo 2 numeral 2 literal a de la Ley 1150 de 2007 señala que los bienes y servicios uniformes se adquieren por Selección Abreviada (subasta inversa presencial o electrónica o tienda virtual de acuerdos marco), independientemente de la cuantía."
      },
      {
        id: "B",
        texto: "Contratación Directa sin convocatoria pública argumentando que el aseo no es importante.",
        explicacion: "Incorrecta. La contratación directa es excepcionalísima para causales taxativas de ley; los servicios uniformes no encajan en contratación directa."
      },
      {
        id: "C",
        texto: "Mínima Cuantía fraccionando el contrato en 1.000 contratos diminutos para evitar licitar.",
        explicacion: "Incorrecta. El fraccionamiento contractual es una práctica ilícita expresamente prohibida y penalizada en Colombia."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1150 de 2007, Art. 2 Numeral 2 (Selección abreviada de bienes uniformes)",
    citaNormativa: "«La adquisición de bienes y servicios de características técnicas uniformes y de común utilización por parte de las entidades estatales se realizará por la modalidad de selección abreviada mediante subasta inversa o acuerdos marco de precios.» (Ley 1150 de 2007, Art. 2)."
  },
  {
    id: "dian_contra_04",
    nivel: "Profesional",
    ejeId: "contratacion",
    ejeNombre: "Contratación y Convenios",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Supervisión de Contratos Estatales y Responsabilidad (Ley 1474 de 2011 Art. 83)",
    caso: "A un Gestor III se le designa como supervisor de un contrato de suministro de papelería e insumos de oficina. El contratista entrega productos de una calidad inferior a la especificada en el pliego y solicita la firma del acta de recibido a satisfacción prometiendo cambiar los productos el próximo mes.",
    enunciado: "¿Cuál es el deber funcional y de integridad que debe observar el supervisor designado?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar la firma del acta de recibido a satisfacción, elaborar un informe de incumplimiento con requerimiento formal al contratista para el ajuste conforme al pliego, y de persistir el desacato, solicitar a la ordenación del gasto el inicio del procedimiento sancionatorio de multas o caducidad (Art. 86 Ley 1474/2011).",
        explicacion: "Correcta. El artículo 83 de la Ley 1474 de 2011 (Estatuto Anticorrupción) obliga al supervisor a vigilar el cumplimiento material y técnico del contrato; certificar el recibido a satisfacción de bienes no entregados o deficientes acarrea responsabilidad penal por falsedad y prevaricato."
      },
      {
        id: "B",
        texto: "Firmar el acta a satisfacción para evitar conflictos personales y recibir un paquete de resmas de papel para su casa.",
        explicacion: "Incorrecta. Falla disciplinaria gravísima, delito de falsedad ideológica en documento público y peculado por apropiación."
      },
      {
        id: "C",
        texto: "Renunciar al empleo público inmediatamente y quemar las resmas de papel defectuosas.",
        explicacion: "Incorrecta. Conducta evasiva contraria al ejercicio de la supervisión contractual institucional."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1474 de 2011 (Estatuto Anticorrupción), Arts. 83 y 86 (Supervisión e interventoría)",
    citaNormativa: "«La supervisión contractual consiste en el seguimiento técnico, administrativo, financiero, contable y jurídico que se ejerce sobre el contrato. Si el supervisor advierte incumplimiento, requerirá al contratista e informará al ordenador del gasto.» (Ley 1474 de 2011, Art. 83)."
  },
  {
    id: "dian_contra_05",
    nivel: "Profesional",
    ejeId: "contratacion",
    ejeNombre: "Contratación y Convenios",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Inhabilidades e Incompatibilidades en Contratación Estatal (Ley 80 de 1993 Art. 8)",
    caso: "En un proceso licitatorio para el mantenimiento de las plantas eléctricas de la DIAN se presenta como oferente único una empresa donde la cónyuge del Director Seccional posee el 60% de las acciones y es la representante legal.",
    enunciado: "De acuerdo con el artículo 8 de la Ley 80 de 1993, ¿cuál es la situación jurídica del oferente en este proceso?",
    opciones: [
      {
        id: "A",
        texto: "Está incurso en una Inhabilidad e Incompatibilidad insubsanable para contratar con la entidad (por parentesco en primer grado de consanguinidad/afinidad con el directivo con poder de decisión), debiendo rechazarse la oferta de plano.",
        explicacion: "Correcta. El Art. 8 numeral 1 literal b y numeral 2 de la Ley 80 de 1993 prohíbe de forma taxativa celebrar contratos estatales con los cónyuges o parientes dentro del cuarto grado de consanguinidad o segundo de afinidad de los servidores del nivel directivo de la entidad."
      },
      {
        id: "B",
        texto: "Debe adjudicársele el contrato de inmediato con un 20% de sobreprecio por tratarse de la familia del director.",
        explicacion: "Incorrecta. Tipifica delitos de interés indebido en la celebración de contratos y tráfico de influencias."
      },
      {
        id: "C",
        texto: "Puede contratar libremente si el cónyuge promete no hablar de trabajo durante la cena familiar.",
        explicacion: "Incorrecta. Las inhabilidades legales son objetivas y de orden público; no se subsanan con promesas domésticas."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 80 de 1993, Art. 8 (Inhabilidades e incompatibilidades para contratar)",
    citaNormativa: "«Son inhábiles para participar en licitaciones y para celebrar contratos estatales: El cónyuge, compañero permanente del servidor público en los niveles directivo, asesor o ejecutivo de la entidad contratante.» (Ley 80 de 1993, Art. 8 Numeral 2 Literal b)."
  },

  // =========================================================================
  // RÉGIMEN DISCIPLINARIO Y CONTROL DE CORRUPCIÓN (LEY 1952 DE 2019 Y LEY 2094 DE 2021)
  // =========================================================================
  {
    id: "dian_discip_01",
    nivel: "Profesional",
    ejeId: "integridad",
    ejeNombre: "Valores de Integridad",
    tipo: "Integridad (10%)",
    tema: "Faltas Gravísimas y Código General Disciplinario (Ley 1952 de 2019 / Ley 2094 de 2021)",
    caso: "A un auditor de fiscalización de la DIAN se le demuestra que utilizó las bases de datos de información exógena reservada para suministrar listados comerciales de ventas a empresas competidoras a cambio de pagos en efectivo.",
    enunciado: "De acuerdo con el Código General Disciplinario, ¿qué calificación merece esta conducta y qué sanción procede?",
    opciones: [
      {
        id: "A",
        texto: "Constituye una Falta Gravísima cometida a título de dolo (revelación indebida de secretos e infracción a la reserva legal), sancionable con Destitución del empleo e Inhabilidad General para ejercer cargos públicos de diez (10) a veinte (20) años.",
        explicacion: "Correcta. Utilizar información reservada en provecho propio o de terceros constituye falta gravísima bajo el Código General Disciplinario (Ley 1952 de 2019 modificada por la Ley 2094 de 2021), acarreando la destitución e inhabilidad máxima legal."
      },
      {
        id: "B",
        texto: "Es una falta leve sancionable con una felicitación por haber encontrado fuentes alternativas de ingresos.",
        explicacion: "Incorrecta. Aberración ética y jurídica contraria a los fundamentos constitucionales del servicio civil."
      },
      {
        id: "C",
        texto: "Solo amerita una llamada de atención privada que no constará en la hoja de vida.",
        explicacion: "Incorrecta. La gravedad material y el dolo de la conducta exigen la sanción expulsiva del servicio público."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1952 de 2019 (Código General Disciplinario) y Ley 2094 de 2021, Arts. 48 a 55",
    citaNormativa: "«Las faltas gravísimas cometidas con dolo o culpa gravísima se sancionarán con destitución e inhabilidad general de diez a veinte años.» (Código General Disciplinario, Art. 48)."
  },
  {
    id: "dian_discip_02",
    nivel: "Profesional",
    ejeId: "integridad",
    ejeNombre: "Valores de Integridad",
    tipo: "Integridad (10%)",
    tema: "Trámite de Impedimentos y Conflicto de Intereses (CPACA Art. 11 y CGD)",
    caso: "Al Gestor III se le asigna para proyectar la resolución de aforo contra una firma constructora donde su hermano es el socio mayoritario y su cuñada es la gerente general.",
    enunciado: "¿Cuál es el procedimiento legal obligatorio que debe adelantar de forma inmediata el funcionario?",
    opciones: [
      {
        id: "A",
        texto: "Manifestar por escrito el impedimento ante su superior jerárquico dentro de los tres (3) días siguientes a conocer la asignación, detallando la causal legal de parentesco (Art. 11 numeral 1 CPACA), absteniéndose de actuar hasta que se designe funcionario ad-hoc.",
        explicacion: "Correcta. El artículo 11 del CPACA y el Código Disciplinario obligan al servidor público a manifestar inmediatamente su impedimento ante el superior jerárquico frente a parientes en primer y segundo grado. Actuar estando impedido vicia de nulidad el acto y configura falta disciplinaria grave."
      },
      {
        id: "B",
        texto: "Continuar con el expediente en secreto y archivar la investigación para ayudar económicamente a su familia.",
        explicacion: "Incorrecta. Configura prevaricato por acción, conflicto de interés no declarado y falta gravísima dolosa."
      },
      {
        id: "C",
        texto: "Aumentar al triple las sanciones a su hermano para demostrar públicamente que no tiene favoritismos.",
        explicacion: "Incorrecta. Sigue estando impedido; la imparcialidad objetiva exige apartarse completamente del caso con independencia del sentido del fallo."
      }
    ],
    respuestaCorrecta: "A",
    norma: "CPACA (Ley 1437 de 2011), Arts. 11 y 12 (Impedimentos y recusaciones)",
    citaNormativa: "«El servidor público que esté incurso en alguna de las causales de impedimento deberá manifestarlo por escrito a su superior jerárquico inmediatamente conozca de ella, cesando toda actuación en el expediente.» (CPACA, Art. 12)."
  },
  {
    id: "dian_discip_03",
    nivel: "Profesional",
    ejeId: "integridad",
    ejeNombre: "Valores de Integridad",
    tipo: "Integridad (10%)",
    tema: "Deber de Denuncia de Delitos contra la Administración Pública (Ley 1952 Art. 38)",
    caso: "Un contribuyente investigado se acerca al escritorio del Gestor III y le ofrece un sobre con 10 millones de pesos en billetes para que engavete el requerimiento especial y no lo envíe al correo electrónico.",
    enunciado: "¿Cuál es la conducta inmediata que debe adoptar el servidor público conforme al Código General Disciplinario y la legislación penal?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar categóricamente el dinero, poner el hecho en conocimiento inmediato de la Policía Judicial / Fiscalía por la comisión en flagrancia del delito de Cohecho por dar u ofrecer (Código Penal Art. 407), y rendir informe escrito pormenorizado a su superior jerárquico.",
        explicacion: "Correcta. El servidor tiene el deber estricto de rechazar todo intento de soborno y denunciar de inmediato la conducta punible (Art. 38 numeral 24 de la Ley 1952 de 2019 y Código de Procedimiento Penal)."
      },
      {
        id: "B",
        texto: "Recibir el dinero en efectivo prometiendo que solo cobrará la mitad de las sanciones en el acto oficial.",
        explicacion: "Incorrecta. Constituye el delito de cohecho impropio/propio y acarrea privación inmediata de la libertad y destitución definitiva."
      },
      {
        id: "C",
        texto: "Pedirle que le consigna en una cuenta virtual a nombre de un primo para que la DIAN no se entere.",
        explicacion: "Incorrecta. Maniobra criminal de ocultamiento y complicidad en cohecho y enriquecimiento ilícito."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1952 de 2019, Art. 38 Numeral 24 y Código Penal Art. 407 (Cohecho por dar u ofrecer)",
    citaNormativa: "«Es deber de todo servidor público denunciar los delitos, contravenciones y faltas disciplinarias de los cuales tuviere conocimiento, poniendo a disposición las pruebas correspondientes.» (Ley 1952 de 2019, Art. 38)."
  },
  {
    id: "dian_discip_04",
    nivel: "Profesional",
    ejeId: "integridad",
    ejeNombre: "Valores de Integridad",
    tipo: "Integridad (10%)",
    tema: "Prohibición de Dádivas y Regalos de Usuarios Fiscalizados (Ley 1952 Art. 39)",
    caso: "Con motivo de la época decembrina, una empresa multinacional que se encuentra en medio de un proceso de auditoría tributaria envía al domicilio de los auditores canastas navideñas de lujo que contienen licores importados y teléfonos celulares de última generación.",
    enunciado: "Frente a la entrega de regalos por parte de sujetos pasivos objeto de fiscalización, ¿cuál es la orden legal?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar y devolver formalmente los regalos, informando que los servidores públicos tienen expresamente prohibido solicitar o recibir dádivas, presentes, agasajos o cualquier beneficio directo o indirecto de personas interesadas en trámites o actuaciones a su cargo (Ley 1952 Art. 39).",
        explicacion: "Correcta. El Código General Disciplinario prohíbe de manera tajante a todo servidor recibir obsequios, dádivas o atenciones de administrados con intereses en decisiones a su cargo. Aceptar regalos compromete la independencia y tipifica falta disciplinaria grave."
      },
      {
        id: "B",
        texto: "Aceptar los celulares y usarlos para hacer llamadas privadas argumentando que en Navidad se perdona todo.",
        explicacion: "Incorrecta. Transgrede la integridad pública, el principio de imparcialidad y la prohibición legal expresa de dádivas."
      },
      {
        id: "C",
        texto: "Vender los celulares por internet y repartir el dinero entre los compañeros de puesto.",
        explicacion: "Incorrecta. Agrava la conducta ilícita con comercialización clandestina de bienes provenientes de dádivas ilegales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1952 de 2019, Art. 39 Numeral 19 (Prohibición de dádivas y presentes)",
    citaNormativa: "«A todo servidor público le está prohibido: Solicitar, cobrar o recibir dádivas, presentes, agasajos, o cualquier beneficio proveniente de personas con las que tenga relación oficial o interés en las decisiones.» (Ley 1952 de 2019, Art. 39)."
  },
  {
    id: "dian_discip_05",
    nivel: "Profesional",
    ejeId: "integridad",
    ejeNombre: "Valores de Integridad",
    tipo: "Integridad (10%)",
    tema: "Conflicto de Interés Aparente, Potencial y Real (Ley 2013 de 2019)",
    caso: "Un Gestor III posee acciones minoritarias en un fondo de inversión que a su vez es dueño del 10% de un consorcio vial al que la seccional le está investigando una devolución millonaria de saldos de IVA.",
    enunciado: "Desde las directrices del DAFP sobre gestión de conflictos de intereses y la Ley 2013 de 2019, ¿qué clasificación tiene esta situación y cómo debe administrarse?",
    opciones: [
      {
        id: "A",
        texto: "Constituye un Conflicto de Interés Potencial/Aparente que debe declararse formalmente en el Formato de Declaración de Bienes, Rentas y Conflictos de Interés (SIDEAP / SIGEP), informando al jefe inmediato para que decida si es necesario apartarlo de la asignación del trámite para blindar la transparencia institucional.",
        explicacion: "Correcta. El DAFP establece que la gestión preventiva de la integridad exige declarar oportunamente los conflictos reales, potenciales y aparentes. Revelar las inversiones financieras evita cuestionamientos éticos y protege la legalidad del acto administrativo."
      },
      {
        id: "B",
        texto: "Ocultar la inversión financiera deliberadamente en la declaración juramentada de bienes.",
        explicacion: "Incorrecta. Constituye falta gravísima por falsedad en la declaración de bienes y rentas y ocultamiento de información patrimonial."
      },
      {
        id: "C",
        texto: "Aprobar la devolución del IVA en 2 minutos para que sus acciones en el fondo suban de precio.",
        explicacion: "Incorrecta. Configura conflicto de interés real consumado, tráfico de influencias y prevaricato por provecho económico propio."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 2013 de 2019 y Guía para la Gestión de Conflictos de Interés DAFP",
    citaNormativa: "«Los servidores públicos tienen el deber de declarar proactivamente sus bienes, rentas y registrar los posibles conflictos de interés en el sistema de información pública institucional para garantizar la transparencia.» (Ley 2013 de 2019)."
  },

  // =========================================================================
  // COMPETENCIAS COMPORTAMENTALES DEL GESTOR III (DECRETO 815 DE 2018)
  // =========================================================================
  {
    id: "dian_comp_gestor_01",
    nivel: "Profesional",
    ejeId: "comportamentales",
    ejeNombre: "Competencias Comportamentales DIAN",
    tipo: "Comportamental (Clasificatorio - 25%)",
    tema: "Liderazgo de Equipos y Resiliencia en Cierres Tributarios Bajo Presión",
    caso: "Faltando dos semanas para el cierre del calendario de vencimiento de declaraciones de renta, el sistema de información experimenta fallas intermitentes y el equipo de analistas manifiesta desmotivación y estrés por la sobrecarga de consultas y expedientes.",
    enunciado: "Como Gestor III, para orientar al equipo hacia el cumplimiento de los objetivos misionales garantizando el bienestar del personal, su acción es:",
    opciones: [
      {
        id: "A",
        texto: "Organizar una sesión ágil de priorización y redistribución de cargas de trabajo según criticidad procesal, coordinar con el área de TI la contingencia técnica, y mantener una comunicación empática y constante que canalice soluciones y motive al equipo al logro de las metas.",
        explicacion: "Correcta. El Decreto 815 de 2018 define el Liderazgo en el nivel profesional como la capacidad de orientar, inspirar y coordinar equipos en escenarios de alta exigencia, equilibrando la eficacia operativa con el soporte humano y la gestión de contingencias."
      },
      {
        id: "B",
        texto: "Amenazar con abrirles procesos disciplinarios a todos los analistas si no trabajan 24 horas continuas sin dormir.",
        explicacion: "Inadecuada. Estilo autoritario destructivo que fomenta el acoso laboral, agrava el estrés y deteriora el clima organizacional."
      },
      {
        id: "C",
        texto: "Apagar el teléfono, irse de la oficina y dejar que los expedientes prescriban por sí solos.",
        explicacion: "Inadecuada. Demuestra desidia, negligencia y falta de vocación de servicio público profesional."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 815 de 2018 (Competencias Comportamentales del Nivel Profesional)",
    citaNormativa: "«Liderazgo: Fomenta la integración y el compromiso del equipo, orienta sus esfuerzos hacia el logro de los objetivos institucionales y mantiene un clima laboral participativo y armónico ante situaciones adversas.» (Decreto 815 de 2018)."
  },
  {
    id: "dian_comp_gestor_02",
    nivel: "Profesional",
    ejeId: "comportamentales",
    ejeNombre: "Competencias Comportamentales DIAN",
    tipo: "Comportamental (Clasificatorio - 25%)",
    tema: "Aprendizaje Continuo e Innovación Tecnológica (Big Data e IA Fiscal)",
    caso: "La DIAN implementa un nuevo modelo predictivo de analítica avanzada y minería de datos de facturación electrónica para detectar redes de evasores. Algunos funcionarios veteranos se resisten al cambio prefiriendo la revisión manual en papel físico.",
    enunciado: "Desde la competencia de Aprendizaje Continuo e Innovación, su comportamiento como Gestor III es:",
    opciones: [
      {
        id: "A",
        texto: "Capacitarse activamente en las nuevas herramientas de analítica digital, liderar pilotos prácticos de aplicación en su seccional y compartir didácticamente los hallazgos con sus compañeros para demostrar el valor del ahorro de tiempo y la precisión en la fiscalización.",
        explicacion: "Correcta. La competencia de Aprendizaje Continuo implica apropiar activamente nuevas tecnologías y conocimientos, adaptándose a las transformaciones organizacionales y promoviendo la gestión del conocimiento colectivo."
      },
      {
        id: "B",
        texto: "Boicotear el sistema informático ingresando datos basura para que la dirección regrese al archivo en papel.",
        explicacion: "Inadecuada. Atenta contra la infraestructura tecnológica del Estado y configura sabotaje institucional."
      },
      {
        id: "C",
        texto: "Burlarse de los compañeros que intentan aprender el software acusándolos de 'modernistas'.",
        explicacion: "Inadecuada. Genera resistencia tóxica y fractura el desarrollo del talento humano en la entidad."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 815 de 2018 (Competencia de Aprendizaje Continuo e Innovación)",
    citaNormativa: "«Aprendizaje Continuo: Adquiere, desarrolla y aplica conocimientos y destrezas para mejorar el desempeño propio y del equipo, adaptándose a las innovaciones tecnológicas y de gestión.» (Decreto 815 de 2018)."
  },
  {
    id: "dian_comp_gestor_03",
    nivel: "Profesional",
    ejeId: "comportamentales",
    ejeNombre: "Competencias Comportamentales DIAN",
    tipo: "Comportamental (Clasificatorio - 25%)",
    tema: "Comunicación Asertiva y Manejo de Contribuyentes Conflictivos",
    caso: "Un ciudadano indignado por el cobro coactivo de una sanción tributaria ingresa al módulo de atención gritando insultos, golpeando la mesa y acusando a los funcionarios de 'ladrones'.",
    enunciado: "Como profesional del servicio, ¿cuál es la respuesta comportamental asertiva e idónea?",
    opciones: [
      {
        id: "A",
        texto: "Mantener la calma y el autocontrol emocional, escuchar atentamente sus descargos sin interrumpir, invitarlo con voz firme y serena a sentarse en un espacio reservado, revisar el estado de su expediente con el número de cédula y explicarle con lenguaje claro las alternativas procesales y facilidades de pago que le asisten en derecho.",
        explicacion: "Correcta. El servicio al ciudadano exige autorregulación, escucha activa y asertividad: desescalar la hostilidad con compostura profesional, validar la inquietud y brindar orientación técnica fundamentada sin entrar en confrontaciones personales."
      },
      {
        id: "B",
        texto: "Responder a los gritos con insultos más fuertes y retar al ciudadano a una pelea física en la calle.",
        explicacion: "Inadecuada. Falta disciplinaria gravísima de agresión a usuarios, desprestigiando la dignidad institucional del Estado."
      },
      {
        id: "C",
        texto: "Cerrar la ventanilla en su cara y marcharse a tomar café durante tres horas.",
        explicacion: "Inadecuada. Demuestra desprecio por el usuario y omisión del deber de atención y orientación oportuna."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 815 de 2018 (Orientación al Ciudadano y Comunicación Asertiva)",
    citaNormativa: "«Orientación al Usuario y al Ciudadano: Atiende las solicitudes con respeto, empatía y efectividad, utilizando un lenguaje claro y constructivo que fortalezca la confianza de la ciudadanía en las instituciones del Estado.» (Decreto 815 de 2018)."
  },
  {
    id: "dian_comp_gestor_04",
    nivel: "Profesional",
    ejeId: "comportamentales",
    ejeNombre: "Competencias Comportamentales DIAN",
    tipo: "Comportamental (Clasificatorio - 25%)",
    tema: "Autonomía Técnica y Rigor en Informes Periciales Tributarios",
    caso: "Al proyectar un informe técnico pericial de auditoría sobre devoluciones indebidas de un gran contribuyente, un superior jerárquico le sugiere sutilmente 'rebajar la gravedad de los hallazgos' para no incomodar al apoderado de la empresa que es un exfuncionario de la entidad.",
    enunciado: "Frente a presiones externas que buscan alterar los informes técnicos, su proceder profesional ético es:",
    opciones: [
      {
        id: "A",
        texto: "Mantener la estricta autonomía técnica y objetividad profesional, soportando cada hallazgo contable y tributario en las pruebas documentales y normativas del expediente, radicando el informe pericial íntegro conforme a la verdad real de los hechos investigados.",
        explicacion: "Correcta. La autonomía técnica profesional (Decreto 815 de 2018) y el valor de la Honestidad exigen apego intransigente a la verdad probatoria y a la legalidad; los informes de fiscalización son actos técnicos fundamentados que no pueden alterarse por complacencia."
      },
      {
        id: "B",
        texto: "Borrar todos los hallazgos de inmediato para complacer al superior y esperar que le prometan un ascenso.",
        explicacion: "Inadecuada. Configura concierto para cometer prevaricato, falsedad ideológica y falta absoluta de ética profesional."
      },
      {
        id: "C",
        texto: "Vender el borrador del informe al contribuyente a cambio de un puesto de trabajo en la multinacional.",
        explicacion: "Inadecuada. Conducta criminal de concusión, cohecho y corrupción sistemática."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Constitución Política Art. 209, Ley 1952 de 2019 y Código de Integridad DAFP",
    citaNormativa: "«Los servidores públicos actuarán con rectitud y apego a la legalidad objetiva, velando por la prevalencia del interés general sobre presiones particulares o jerárquicas indebidas.» (Código de Integridad de la Función Pública)."
  }
];

console.log("Batch 3 generado con éxito: " + BATCH_3.length + " preguntas.");
module.exports = { BATCH_3 };
