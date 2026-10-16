// questions_batch2.js - Lote 2 de Preguntas de Juicio Situacional (Aduanas, Cobro Coactivo y Régimen Cambiario)
const BATCH_2 = [
  // =========================================================================
  // RÉGIMEN ADUANERO (DECRETOS 1165 DE 2019 Y 659 DE 2024)
  // =========================================================================
  {
    id: "dian_aduanas_01",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Aprehensión vs. Decomiso de Mercancías",
    caso: "En una inspección de control posterior en un depósito aduanero, funcionarios de la DIAN detectan un contenedor de electrodomésticos sin declaración de importación ni factura comercial amparada en los documentos de transporte.",
    enunciado: "¿Cuál es la medida cautelar inmediata que debe adoptarse y en qué momento se convierte en acto administrativo definitivo de decomiso?",
    opciones: [
      {
        id: "A",
        texto: "Adoptar de inmediato la medida cautelar de Aprehensión (retención física y traslado a recinto de la DIAN) mediante acta motivada; el Decomiso solo procede al final del proceso administrativo sancionatorio mediante resolución ejecutoriada que transfiere la propiedad al Estado.",
        explicacion: "Correcta. El Decreto 1165 de 2019 distingue la aprehensión (medida cautelar provisional para asegurar la mercancía mientras se surte el trámite) del decomiso (acto administrativo que declara la pérdida definitiva de dominio a favor de la Nación tras garantizar el debido proceso)."
      },
      {
        id: "B",
        texto: "Declarar el decomiso inmediato en el sitio y vender los televisores a los presentes para recuperar el recaudo arancelario.",
        explicacion: "Incorrecta. Viola el procedimiento administrativo aduanero; no se puede enajenar una mercancía sin resolución de decomiso en firme."
      },
      {
        id: "C",
        texto: "Ordenar la devolución inmediata al importador sin verificar ningún documento para no congestionar el depósito.",
        explicacion: "Incorrecta. Falla disciplinaria gravísima por permitir la fuga de mercancías sin acreditar su legal introducción al territorio aduanero nacional."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Arts. 647 y 650",
    citaNormativa: "«La aprehensión es una medida cautelar mediante la cual la autoridad aduanera toma posesión de las mercancías en tanto se define su situación jurídica. El decomiso es el acto en virtud del cual pasan a poder de la Nación las mercancías respecto de las cuales no se acreditó el cumplimiento de los trámites aduaneros.» (Decreto 1165 de 2019, Art. 647)."
  },
  {
    id: "dian_aduanas_02",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Término de Respuesta al Acta de Aprehensión y Descargos",
    caso: "A un operador de comercio exterior se le notifica el Acta de Hechos y Medida Cautelar de Aprehensión por no presentar la descripción completa de las telas importadas (marca, serial y composición textil).",
    enunciado: "Conforme al régimen procesal aduanero, ¿qué término tiene el interesado para presentar el Documento de Objeción a la Aprehensión y proponer pruebas?",
    opciones: [
      {
        id: "A",
        texto: "Dispone de quince (15) días hábiles siguientes a la fecha de notificación del Acta de Aprehensión para presentar el documento de objeciones y aportar o solicitar pruebas.",
        explicacion: "Correcta. El artículo 651 del Decreto 1165 de 2019 (y su régimen procesal) confiere un término perentorio de 15 días hábiles al interesado para interponer el documento de objeción y desvirtuar las causales de aprehensión."
      },
      {
        id: "B",
        texto: "Dispone de un plazo perentorio improrrogable de 2 horas desde la incautación.",
        explicacion: "Incorrecta. Vulnera flagrantemente el principio del debido proceso y el derecho a la defensa del importador."
      },
      {
        id: "C",
        texto: "No tiene derecho a presentar descargos porque la aprehensión es irrecurrible e incontrovertible en sede administrativa.",
        explicacion: "Incorrecta. Todo administrado tiene derecho a contradecir las medidas de la administración tributaria y aduanera."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Art. 651 (Trámite del proceso de decomiso)",
    citaNormativa: "«Dentro de los quince (15) días hábiles siguientes a la notificación del acta de aprehensión, el interesado podrá presentar documento de objeción a la aprehensión, en el cual solicitará o aportará las pruebas que pretenda hacer valer.» (Decreto 1165 de 2019, Art. 651)."
  },
  {
    id: "dian_aduanas_03",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Legalización y Rescate de Mercancías Aprehendidas (Art. 293)",
    caso: "Un importador subsana la omisión documental de una mercancía aprehendida mediante la presentación de una Declaración de Legalización voluntaria antes de que se profiera la resolución de decomiso de primera instancia.",
    enunciado: "¿Qué concepto económico y porcentaje por concepto de rescate debe cancelar el importador para recuperar la mercancía legalmente?",
    opciones: [
      {
        id: "A",
        texto: "Debe liquidar y pagar los tributos aduaneros correspondientes más un porcentaje del quince por ciento (15%) del valor en aduana de la mercancía por concepto de rescate (o el porcentaje fijado según el momento procesal de legalización).",
        explicacion: "Correcta. El Art. 293 del Decreto 1165 de 2019 establece que la declaración de legalización procede pagando los tributos aduaneros adeudados más el rescate (que oscila entre el 15%, 20% o 50% según la oportunidad procesal en que se radique antes del decomiso definitivo)."
      },
      {
        id: "B",
        texto: "Solo paga los tributos aduaneros sin ningún rescate ni sanción monetaria adicional.",
        explicacion: "Incorrecta. El rescate es una sanción económica obligatoria para restablecer la legalidad de la mercancía aprehendida."
      },
      {
        id: "C",
        texto: "Debe transferir el 90% de sus utilidades anuales a la DIAN mediante cheque de gerencia.",
        explicacion: "Incorrecta. El rescate es una tarifa porcentual reglada sobre el valor en aduanas del bien aprehendido, no sobre utilidades generales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Art. 293 (Declaración de legalización y porcentaje de rescate)",
    citaNormativa: "«La legalización de las mercancías aprehendidas procederá mediante la presentación de la declaración de legalización, previa cancelación de los tributos aduaneros a que haya lugar y del valor del rescate correspondiente.» (Decreto 1165 de 2019, Art. 293)."
  },
  {
    id: "dian_aduanas_04",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Declaración Anticipada Obligatoria en Importaciones",
    caso: "Para ciertas partidas arancelarias sensibles (textiles y calzado), la normativa aduanera exige la presentación de una Declaración de Importación Anticipada antes de la llegada del medio de transporte al territorio aduanero nacional. El importador arriba sin haberla presentado.",
    enunciado: "¿Cuál es la consecuencia aduanera por omitir la Declaración Anticipada obligatoria?",
    opciones: [
      {
        id: "A",
        texto: "La mercancía no podrá obtener autorización de levante directo y procede la medida cautelar de aprehensión de las mercancías en el lugar de arribo por incumplimiento de requisitos de ingreso.",
        explicacion: "Correcta. El Decreto 1165 de 2019 (Art. 175 y causales de aprehensión Art. 647) establece que la omisión de la declaración anticipada obligatoria da lugar a la aprehensión de las mercancías en el lugar de arribo."
      },
      {
        id: "B",
        texto: "Se le permite ingresar la mercancía al país sin revisión y se le otorga un año de plazo para presentarla.",
        explicacion: "Incorrecta. Destruye el control aduanero y fomenta el ingreso irregular de productos de contrabando técnico."
      },
      {
        id: "C",
        texto: "Se exonera de aranceles automáticamente como estímulo a la velocidad del transporte marítimo.",
        explicacion: "Incorrecta. Es absurdo frente a las políticas de fiscalización aduanera y control previo en frontera."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Art. 175 y Art. 647 (Declaración anticipada y causales de aprehensión)",
    citaNormativa: "«La declaración anticipada deberá presentarse con una antelación mínima a la llegada de las mercancías. La falta de presentación de la declaración anticipada obligatoria constituirá causal de aprehensión en el lugar de arribo.» (Decreto 1165 de 2019, Art. 175)."
  },
  {
    id: "dian_aduanas_05",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Importación Temporal para Perfeccionamiento Activo (Sistemas Especiales Plan Vallejo)",
    caso: "Una empresa industrial importa maquinaria pesada bajo la modalidad de importación temporal para perfeccionamiento activo con suspensión de tributos aduaneros, con el compromiso de reexportar bienes transformados en un plazo de 18 meses. Vencido el plazo, la empresa no reexportó ni modificó la modalidad.",
    enunciado: "Ante el vencimiento del plazo sin reexportación ni cambio de modalidad, ¿qué actuación corresponde a la DIAN?",
    opciones: [
      {
        id: "A",
        texto: "Declarar el incumplimiento del régimen aduanero temporal, exigir la efectividad de las garantías constituidas y ordenar la aprehensión de la maquinaria o el cobro coactivo de los tributos aduaneros e intereses moratorios.",
        explicacion: "Correcta. En las importaciones temporales la suspensión de tributos está condicionada al estricto cumplimiento del fin y del término legal. Vencido el plazo sin reexportar ni importar ordinariamente, se hace efectiva la póliza y se persigue la mercancía."
      },
      {
        id: "B",
        texto: "Conceder una prórroga tácita automática de 10 años sin póliza ni justificación técnica.",
        explicacion: "Incorrecta. Las prórrogas en regímenes suspensivos son expresas y requieren solicitud previa y ampliación de garantías antes del vencimiento."
      },
      {
        id: "C",
        texto: "Regalar la maquinaria a los directivos de la empresa importadora a título de donación fiscal.",
        explicacion: "Incorrecta. Conducta ilícita violatoria de los principios de custodia patrimonial y control de comercio exterior."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Arts. 235 a 240 (Importación temporal para perfeccionamiento activo)",
    citaNormativa: "«Al vencimiento del plazo señalado en la declaración de importación temporal, las mercancías deberán haber sido reexportadas, o sometidas a la modalidad de importación ordinaria; de lo contrario, se hará efectiva la garantía y se dispondrá la aprehensión.» (Decreto 1165 de 2019, Art. 240)."
  },
  {
    id: "dian_aduanas_06",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Valoración Aduanera y Método del Valor de Transacción (Acuerdo OMC)",
    caso: "En una verificación de valor en aduana, el Gestor III advierte que el precio de factura de un lote de vehículos importados es sospechosamente bajo. El importador no suministra la prueba de pago bancario y existen cánones de regalía pactados que se omitieron en el valor declarado.",
    enunciado: "¿Cuál es el método principal de valoración aduanera y qué procede si este es desvirtuado?",
    opciones: [
      {
        id: "A",
        texto: "El método principal es el Valor de Transacción de las mercancías importadas (precio realmente pagado o por pagar con los ajustes del Art. 8 del Acuerdo OMC); si este se desvirtúa por falta de prueba fidedigna o vinculación que afecta el precio, se acude sucesivamente a los métodos secundarios (mercancías idénticas, similares, deductivo, valor reconstruido y del último recurso).",
        explicacion: "Correcta. El Acuerdo de Valoración de la OMC (incorporado en la legislación aduanera) consagra el orden sucesivo y obligatorio de los métodos de valoración, partiendo del Valor de Transacción con sus debidos ajustes legales."
      },
      {
        id: "B",
        texto: "Inventar una cifra al azar multiplicando el número de llantas por el número de chasis sin ningún criterio técnico.",
        explicacion: "Incorrecta. La valoración aduanera exige un estricto rigor metodológico técnico y probatorio reglado por la OMC."
      },
      {
        id: "C",
        texto: "Aceptar la factura falsa porque la DIAN no tiene competencia para cuestionar precios declarados por importadores.",
        explicacion: "Incorrecta. La fiscalización aduanera tiene la potestad explícita de comprobar el valor en aduana y proferir liquidaciones oficiales de corrección o revisión."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Acuerdo de Valoración de la OMC y Decreto 1165 de 2019, Arts. 247 a 255",
    citaNormativa: "«El valor en aduana de las mercancías importadas será el valor de transacción, es decir, el precio realmente pagado o por pagar por las mercancías cuando éstas se venden para su exportación al país de importación, ajustado de conformidad con lo dispuesto en el artículo 8.» (Acuerdo de Valor de la OMC, Art. 1)."
  },
  {
    id: "dian_aduanas_07",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Operador Económico Autorizado (OEA) y Facilitación del Comercio",
    caso: "Una empresa exportadora colombiana obtiene la autorización como Operador Económico Autorizado (OEA) tras demostrar altos estándares de seguridad en su cadena de suministro y excelente historial de cumplimiento aduanero.",
    enunciado: "¿Cuál de los siguientes es un beneficio legal directo otorgado a las empresas calificadas como OEA?",
    opciones: [
      {
        id: "A",
        texto: "Reducción significativa del porcentaje de inspecciones físicas y documentales en puertos y aeropuertos, canales de atención preferencial y agilización en trámites de levante y devoluciones tributarias.",
        explicacion: "Correcta. El Decreto 3568 de 2011 y las normas aduaneras confieren a los OEA beneficios de facilitación, menor selectividad de inspección intrusiva y prioridad en trámites por ser usuarios altamente confiables."
      },
      {
        id: "B",
        texto: "Exención total y permanente de declarar impuestos en Colombia y permiso para ingresar armas sin salvoconducto.",
        explicacion: "Incorrecta. La figura OEA no otorga exenciones tributarias sustanciales ni autoriza el tráfico ilícito; es una figura de seguridad y facilitación de trámites legítimos."
      },
      {
        id: "C",
        texto: "Facultad para emitir sus propias leyes comerciales sin someterse a la Constitución Nacional.",
        explicacion: "Incorrecta. Inconcebible frente al principio de soberanía y legalidad de la República."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 3568 de 2011 y Decreto 1165 de 2019 (Régimen de Operador Económico Autorizado)",
    citaNormativa: "«Los usuarios aduaneros reconocidos como Operadores Económicos Autorizados (OEA) gozarán de prerrogativas tales como la disminución de inspecciones físicas y documentales y la atención preferencial en sus operaciones.» (Decreto 3568 de 2011)."
  },
  {
    id: "dian_aduanas_08",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Inspección Aduanera No Intrusiva (Escáneres)",
    caso: "En el Puerto de Buenaventura, un contenedor seleccionado por el sistema de gestión de riesgos para inspección no intrusiva pasa por los escáneres de rayos X, detectándose cavidades irregulares y densidades discordantes con la carga declarada de frutas frescas.",
    enunciado: "Ante la inconsistencia en las imágenes radiográficas del escáner, ¿cuál es el protocolo inmediato a seguir por el Gestor III en puerto?",
    opciones: [
      {
        id: "A",
        texto: "Ordenar de inmediato el cambio a Inspección Física Intrusiva, procediendo a la apertura del contenedor y vaciado de la carga en presencia del declarante o delegado de la agencia de aduanas para verificar el contenido real.",
        explicacion: "Correcta. Cuando la inspección no intrusiva arroja imágenes con anomalías o discordancias, el protocolo aduanero exige ordenar inmediatamente la inspección física intrusiva para confirmar o descartar ilícitos aduaneros o contrabando."
      },
      {
        id: "B",
        texto: "Autorizar el levante inmediato asumiendo que el escáner se equivocó por fallas de calibración.",
        explicacion: "Incorrecta. Constituye negligencia grave y complicidad potencial con el tráfico ilícito de mercancías."
      },
      {
        id: "C",
        texto: "Devolver el barco a su país de origen sin revisar el contenedor.",
        explicacion: "Incorrecta. La DIAN debe ejercer soberanía y control dentro de la zona primaria aduanera colombiana mediante inspección formal."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Arts. 180 a 184 (Inspección aduanera y uso de tecnologías no intrusivas)",
    citaNormativa: "«Cuando en la inspección no intrusiva se detecten inconsistencias frente a lo declarado, la autoridad aduanera dispondrá la realización inmediata de la inspección física de las mercancías.» (Decreto 1165 de 2019, Art. 182)."
  },
  {
    id: "dian_aduanas_09",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Abandono Legal de Mercancías en Depósito (Art. 187)",
    caso: "Un cargamento de mercancías arriba a un depósito aduanero habilitado. Transcurre el término de almacenamiento de un (1) mes más la prórroga de un mes adicional sin que el importador haya presentado la declaración de importación ni obtenido el levante.",
    enunciado: "¿Cuál es la figura jurídica que se configura y qué destino corresponde a las mercancías?",
    opciones: [
      {
        id: "A",
        texto: "Opera el Abandono Legal (Art. 187 Decreto 1165/2019); las mercancías pasan a poder de la Nación, pudiendo ser rescatadas por el interesado dentro del mes siguiente pagando los tributos y el rescate del 10% antes de que la DIAN disponga de ellas.",
        explicacion: "Correcta. El abandono legal opera de pleno derecho por el vencimiento del término de almacenamiento sin trámite aduanero. El declarante tiene la opción de rescatarlas dentro del mes siguiente acreditando pago y rescate reglamentado."
      },
      {
        id: "B",
        texto: "El depósito adquiere la propiedad privada definitiva de las mercancías para subastarlas privadamente en beneficio de sus accionistas.",
        explicacion: "Incorrecta. Los depósitos habilitados no se apropian de las mercancías en abandono legal; la titularidad de disposición corresponde al Estado (DIAN)."
      },
      {
        id: "C",
        texto: "Las mercancías deben ser arrojadas al mar de inmediato sin inventario ni acta previa.",
        explicacion: "Incorrecta. Las mercancías estatales se someten a los mecanismos reglados de adjudicación, donación, venta o destrucción motivada."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Arts. 187 y 188 (Abandono legal y rescate)",
    citaNormativa: "«Se produce el abandono legal cuando las mercancías no sean declaradas o no se solicite el levante dentro del término de almacenamiento. El interesado podrá rescatar la mercancía en abandono legal dentro del mes siguiente a su ocurrencia.» (Decreto 1165 de 2019, Art. 187)."
  },
  {
    id: "dian_aduanas_10",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Zonas Francas y Salida de Bienes al Resto del Territorio Aduanero Nacional (TAN)",
    caso: "Un usuario industrial de bienes instalado en una Zona Franca permanente despacha productos terminados hacia una empresa ubicada en Bogotá (Resto del TAN).",
    enunciado: "¿Qué trámite aduanero y tributario debe cumplirse para el ingreso legal de estos bienes al territorio nacional?",
    opciones: [
      {
        id: "A",
        texto: "Se considera una importación ordinaria; por tanto, debe presentarse Declaración de Importación liquidando arancel e IVA sobre el valor de los componentes y materias primas extranjeras incorporadas, pagando los tributos y obteniendo levante formal.",
        explicacion: "Correcta. La introducción de bienes de zona franca al TAN constituye importación para efectos fiscales y aduaneros. El artículo 483 del Decreto 1165 de 2019 y el Estatuto Tributario obligan a declarar y liquidar los tributos sobre el componente externo."
      },
      {
        id: "B",
        texto: "No se requiere ninguna declaración ni pago de impuestos porque la zona franca está físicamente dentro de Colombia.",
        explicacion: "Incorrecta. Para efectos aduaneros, la zona franca es un área geográfica delimitada considerada extraterritorial en materia de aranceles e impuestos indirectos."
      },
      {
        id: "C",
        texto: "Basta con una carta informal firmada por el vigilante de la portería de la zona franca.",
        explicacion: "Incorrecta. Falla garrafal contra la normativa aduanera que exige formulario oficial de importación y levante."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Art. 483 y Estatuto Tributario Art. 459",
    citaNormativa: "«La introducción al resto del Territorio Aduanero Nacional de bienes procedentes de una Zona Franca, se someterá a las normas y requisitos previstos para las importaciones ordinarias.» (Decreto 1165 de 2019, Art. 483)."
  },
  {
    id: "dian_aduanas_11",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Infracciones Aduaneras de las Agencias de Aduana",
    caso: "Una Agencia de Aduanas permite que una persona no autorizada ni vinculada como agente de aduanas suscriba declaraciones de importación a nombre de la sociedad de intermediación.",
    enunciado: "De acuerdo con el régimen sancionatorio aduanero (Decreto 1165 de 2019), ¿qué gravedad ostenta esta infracción y qué sanción procede?",
    opciones: [
      {
        id: "A",
        texto: "Es una infracción gravísima sancionable con la Cancelación definitiva de la autorización como Agencia de Aduana (Art. 620 numeral 1 Decreto 1165/2019).",
        explicacion: "Correcta. Permitir que terceros no vinculados o no autorizados actúen en nombre de la agencia constituye una causal gravísima sancionada con la cancelación de la habilitación aduanera."
      },
      {
        id: "B",
        texto: "Es una infracción leve que solo da lugar a una felicitación escrita por delegación de funciones.",
        explicacion: "Incorrecta. Atenta contra la confianza pública y la seguridad jurídica del comercio exterior."
      },
      {
        id: "C",
        texto: "No es infracción, pues cualquier ciudadano puede firmar declaraciones aduaneras sin acreditación técnica.",
        explicacion: "Incorrecta. Las agencias de aduanas prestan un servicio auxiliar de la función pública aduanera rigurosamente calificado."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Art. 620 (Infracciones aduaneras de las Agencias de Aduana)",
    citaNormativa: "«Son infracciones gravísimas de las Agencias de Aduana: Permitir, facilitar o autorizar que terceros no vinculados a la agencia actúen como agentes de aduanas; sanción: Cancelación de la autorización.» (Decreto 1165 de 2019, Art. 620 Numeral 1)."
  },
  {
    id: "dian_aduanas_12",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Disposición de Mercancías Decomisadas (Donación y Destrucción)",
    caso: "La DIAN tiene en sus bodegas un lote de medicamentos vencidos y juguetes tóxicos decomisados en firme. Una entidad municipal solicita que se los entreguen en donación para niños de escasos recursos.",
    enunciado: "Conforme a la normativa aduanera sobre disposición de mercancías aprehendidas o decomisadas, ¿cuál es la decisión legal correcta?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar la donación y ordenar la Destrucción de las mercancías, toda vez que los bienes que atentan contra la salud pública, la seguridad o el medio ambiente están legalmente prohibidos para donación o venta.",
        explicacion: "Correcta. El régimen de disposición de mercancías decomisadas prohíbe de forma tajante donar o comercializar bienes que representen riesgo para la salud o la vida (como alimentos o medicamentos descompuestos o juguetes tóxicos); la única vía legal es su destrucción controlada."
      },
      {
        id: "B",
        texto: "Aceptar la donación de inmediato para desocupar la bodega sin importar la toxicidad.",
        explicacion: "Incorrecta. Genera responsabilidad penal y disciplinaria por atentar contra la salud colectiva de menores de edad."
      },
      {
        id: "C",
        texto: "Subastarlos públicamente en la plaza principal de mercado al mejor postor.",
        explicacion: "Incorrecta. La administración no puede comerciar productos lesivos ni adulterados."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Arts. 720 a 725 (Modalidades de disposición de mercancías decomisadas)",
    citaNormativa: "«Las mercancías que afecten la salud pública, la seguridad nacional o el medio ambiente no podrán ser objeto de venta ni de donación, debiéndose proceder a su inmediata destrucción.» (Decreto 1165 de 2019, Art. 725)."
  },
  {
    id: "dian_aduanas_13",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Garantías Aduaneras y Efectividad de Pólizas",
    caso: "Un usuario aduanero con garantía global constituida para amparar el pago de tributos y sanciones incumple una liquidación oficial de revisión de valor en aduana ejecutoriada por valor de 200 millones de pesos.",
    enunciado: "¿Cuál es el procedimiento reglado para hacer efectivo el cobro del monto asegurado?",
    opciones: [
      {
        id: "A",
        texto: "Proferir el acto administrativo que declara el incumplimiento y ordena hacer efectiva la garantía aduanera, notificando a la compañía de seguros garante en calidad de deudor solidario para el pago de la indemnización.",
        explicacion: "Correcta. El régimen aduanero faculta a la DIAN para declarar la exigibilidad de la garantía y vincular a la aseguradora para el cobro del siniestro amparado por el título de afianzamiento."
      },
      {
        id: "B",
        texto: "Demandar a la aseguradora ante un tribunal de arbitramento en Ginebra, Suiza.",
        explicacion: "Incorrecta. El cobro de garantías aduaneras se rige por la jurisdicción coactiva y el procedimiento administrativo nacional."
      },
      {
        id: "C",
        texto: "Condonar la deuda a la aseguradora si esta ofrece un descuento comercial en su próxima póliza vehicular.",
        explicacion: "Incorrecta. Constituye concusión, cohecho y peculado contra el tesoro público."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019, Arts. 28 a 34 (Régimen de Garantías Aduaneras)",
    citaNormativa: "«La declaratoria de incumplimiento de la obligación aduanera se dispondrá mediante acto administrativo debidamente motivado, ordenando hacer efectiva la garantía ante la compañía aseguradora garante.» (Decreto 1165 de 2019, Art. 32)."
  },
  {
    id: "dian_aduanas_14",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Allanamiento Aduanero en Control Posterior (Art. 684 E.T. y D. 1165)",
    caso: "Inspectores de fiscalización aduanera de la DIAN se presentan en una bodega comercial de calzado importado no habilitada como depósito público para realizar una inspección física y documental. El vigilante se niega a abrir y traba las puertas con candados.",
    enunciado: "¿Qué potestad legal extraordinaria asiste a la DIAN para practicar la diligencia inspectiva?",
    opciones: [
      {
        id: "A",
        texto: "Solicitar una Orden de Registro y Allanamiento a la autoridad judicial competente (Fiscalía/Juez de Control de Garantías) para ingresar al inmueble con apoyo de la Policía Fiscal y Aduanera (POLFA).",
        explicacion: "Correcta. Si se niega el ingreso a recintos cerrados privados no abiertos al público, la inviolabilidad de domicilio (Art. 28 C.P.) exige que la diligencia de allanamiento tributario/aduanero cuente con orden judicial previa, ejecutada con la fuerza pública."
      },
      {
        id: "B",
        texto: "Dinamitar la puerta de inmediato sin ninguna autorización judicial ni policial.",
        explicacion: "Incorrecta. Medida abusiva, delictiva y violatoria de los derechos fundamentales constitucionales."
      },
      {
        id: "C",
        texto: "Retirarse definitivamente y borrar los registros del infractor en el sistema informático.",
        explicacion: "Incorrecta. Omisión flagrante del deber funcional de fiscalización e investigación aduanera."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Constitución Política Art. 28, Estatuto Tributario Art. 779 y Decreto 1165",
    citaNormativa: "«Cuando en el ejercicio de las facultades de fiscalización se requiera practicar allanamiento y registro de bienes inmuebles cerrados, se requerirá orden previa de la autoridad judicial competente.» (Estatuto Tributario, Art. 779)."
  },
  {
    id: "dian_aduanas_15",
    nivel: "Profesional",
    ejeId: "aduanero",
    ejeNombre: "Régimen Aduanero y Comercio Exterior",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Delito de Contrabando y Cuantía Penal (Código Penal Art. 319)",
    caso: "En un operativo fronterizo se intercepta un camión con mercancías extranjeras sin documentación alguna, cuyo valor aduanero liquidado asciende a doscientos cincuenta (250) salarios mínimos legales mensuales vigentes (SMLMV).",
    enunciado: "Además del procedimiento administrativo de decomiso aduanero, ¿qué deber penal ineludible tiene el Gestor III?",
    opciones: [
      {
        id: "A",
        texto: "Remitir de inmediato la denuncia penal ante la Fiscalía General de la Nación y poner a disposición al conductor capturado en flagrancia, puesto que al superar los 50 SMLMV se tipifica el Delito de Contrabando (Código Penal Art. 319).",
        explicacion: "Correcta. El artículo 319 del Código Penal sanciona con pena privativa de la libertad a quien introduzca mercancías al territorio nacional por cuantía superior a 50 SMLMV; el servidor público tiene el deber legal estricto de denunciar el ilícito penal."
      },
      {
        id: "B",
        texto: "Ocultar el hecho a la Fiscalía porque el contrabando solo es una falta disciplinaria de menor impacto sin consecuencias penales.",
        explicacion: "Incorrecta. Desconoce la naturaleza delictiva del contrabando y comete el delito de omisión de denuncia de servidor público."
      },
      {
        id: "C",
        texto: "Cobrar una multa de 100.000 pesos en efectivo al conductor y dejarlo seguir con el camión.",
        explicacion: "Incorrecta. Falla de corrupción y prevaricato inadmisible en la administración pública."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Código Penal Colombiano, Art. 319 (Contrabando)",
    citaNormativa: "«El que introduzca al territorio nacional mercancías en cuantía superior a cincuenta (50) salarios mínimos legales mensuales vigentes, incurrirá en prisión de cuatro (4) a ocho (8) años.» (Código Penal, Art. 319)."
  },

  // =========================================================================
  // COBRO COACTIVO Y TÍTULOS EJECUTIVOS (ESTATUTO TRIBUTARIO)
  // =========================================================================
  {
    id: "dian_cobro_01",
    nivel: "Profesional",
    ejeId: "cobranzas",
    ejeNombre: "Cobro Coactivo y Títulos Ejecutivos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Mandamiento de Pago y Término para Excepcionar (Art. 826 E.T.)",
    caso: "La División de Cobranzas profiere un Mandamiento de Pago contra un deudor moroso fundamentado en una liquidación oficial de revisión ejecutoriada.",
    enunciado: "¿Qué término legal perentorio tiene el ejecutado, a partir de la notificación del mandamiento de pago, para cancelar la deuda o proponer excepciones?",
    opciones: [
      {
        id: "A",
        texto: "Dispone de quince (15) días hábiles para pagar o proponer las excepciones legales consagradas en el artículo 831 del Estatuto Tributario.",
        explicacion: "Correcta. El artículo 826 del Estatuto Tributario otorga un término perentorio de 15 días siguientes a la notificación del mandamiento de pago para que el deudor extinga la obligación o proponga excepciones taxativas."
      },
      {
        id: "B",
        texto: "Dispone de tres (3) meses calendario sin que se le puedan embargar bienes.",
        explicacion: "Incorrecta. El término legal no es de 3 meses, sino de 15 días hábiles; además las medidas cautelares pueden ser previas o concomitantes."
      },
      {
        id: "C",
        texto: "Dispone de 24 horas improrrogables antes de ordenar su captura policiva.",
        explicacion: "Incorrecta. En Colombia no hay prisión por deudas tributarias de cobro administrativo coactivo ordinario y el término es de 15 días."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 826 (Mandamiento de pago)",
    citaNormativa: "«El funcionario competente librará mandamiento ordenando el pago de las deudas fiscales. Dentro de los quince (15) días siguientes a la notificación, el deudor podrá pagar o proponer excepciones.» (E.T. Art. 826)."
  },
  {
    id: "dian_cobro_02",
    nivel: "Profesional",
    ejeId: "cobranzas",
    ejeNombre: "Cobro Coactivo y Títulos Ejecutivos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Excepciones Taxativas contra el Mandamiento de Pago (Art. 831 E.T.)",
    caso: "Un contribuyente notificado del mandamiento de pago interpone un escrito alegando que 'la tasa del impuesto es injusta y los servicios públicos de su barrio son deficientes'.",
    enunciado: "Como Gestor III que proyecta la resolución de excepciones en cobro coactivo, ¿cuál es el análisis procedente?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar la excepción por improcedente, puesto que los motivos de inconformidad sustancial no corresponden a las causales taxativas de excepción del Art. 831 del Estatuto Tributario (como pago efectivo, prescripción, falta de ejecutoria del título, etc.).",
        explicacion: "Correcta. En el proceso de cobro coactivo rige el principio de taxatividad de las excepciones (Art. 831 E.T.). No se pueden debatir aspectos sustanciales ni filosóficos de la ley que debieron alegarse en la etapa de discusión o determinación previa."
      },
      {
        id: "B",
        texto: "Aceptar la excepción y condonar la totalidad de la deuda fiscal por solidaridad social.",
        explicacion: "Incorrecta. El servidor de cobranzas carece de facultad para condonar deudas por razones de inconformidad personal del deudor."
      },
      {
        id: "C",
        texto: "Suspender el cobro y enviar el expediente a la Alcaldía para que pavimenten el barrio.",
        explicacion: "Incorrecta. Es ajeno por completo a las competencias legales de la jurisdicción coactiva tributaria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 831 (Excepciones en cobro coactivo)",
    citaNormativa: "«Contra el mandamiento de pago sólo procederán las siguientes excepciones: El pago efectivo, la existencia de acuerdo de pago, la de falta de ejecutoria del título, la pérdida de ejecutoria del título, la prescripción de la acción de cobro y la falta de título ejecutivo.» (E.T. Art. 831)."
  },
  {
    id: "dian_cobro_03",
    nivel: "Profesional",
    ejeId: "cobranzas",
    ejeNombre: "Cobro Coactivo y Títulos Ejecutivos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Medidas Cautelares Previas en Cobro Coactivo (Art. 836 E.T.)",
    caso: "Para garantizar el pago de una deuda tributaria en firme de 800 millones de pesos, el funcionario de Cobranzas decreta el embargo y retención de las cuentas bancarias de la sociedad deudora antes de notificar formalmente el mandamiento de pago.",
    enunciado: "¿Es legalmente válida la práctica de medidas cautelares previas a la notificación del mandamiento de pago?",
    opciones: [
      {
        id: "A",
        texto: "Sí es legalmente válida; el artículo 836 del Estatuto Tributario autoriza expresamente decretar el embargo y secuestro de bienes de manera previa o concomitante con el mandamiento de pago para evitar la insolvencia del deudor.",
        explicacion: "Correcta. El artículo 836 del E.T. faculta proferir medidas cautelares previas a la notificación del mandamiento de pago, con el fin de evitar que el ejecutado enajene u oculte sus activos al enterarse del inicio del cobro coactivo."
      },
      {
        id: "B",
        texto: "No es válida y genera nulidad automática porque las medidas cautelares solo pueden decretarse después de que un juez penal condene al deudor.",
        explicacion: "Incorrecta. La DIAN ejerce jurisdicción coactiva administrativa autónoma y la ley faculta medidas cautelares previas directamente."
      },
      {
        id: "C",
        texto: "Solo es válida si la sociedad deudora firma un consentimiento voluntario autorizando su propio embargo.",
        explicacion: "Incorrecta. La medida cautelar es una orden de imperio de la administración tributaria que no depende de la voluntad del ejecutado."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 836 (Medidas preventivas)",
    citaNormativa: "«Previa o simultáneamente con el mandamiento de pago, el funcionario podrá decretar el embargo y secuestro preventivo de los bienes del deudor que se hayan establecido como de su propiedad.» (E.T. Art. 836)."
  },
  {
    id: "dian_cobro_04",
    nivel: "Profesional",
    ejeId: "cobranzas",
    ejeNombre: "Cobro Coactivo y Títulos Ejecutivos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Acuerdos y Facilidades de Pago (Art. 814 E.T.)",
    caso: "Una microempresa en crisis de liquidez solicita a la DIAN una facilidad para el pago de sus deudas tributarias vencidas por concepto de impuesto sobre la renta.",
    enunciado: "Conforme al artículo 814 del Estatuto Tributario, ¿cuál es el plazo máximo que puede conceder la DIAN y qué garantía se exige?",
    opciones: [
      {
        id: "A",
        texto: "Se puede conceder un plazo de hasta cinco (5) años para el pago, exigiendo la constitución de garantías suficientes que respalden la totalidad de la deuda (como garantías bancarias, pólizas de seguros, hipotecas o prendas).",
        explicacion: "Correcta. El artículo 814 del Estatuto Tributario permite conceder facilidades de pago hasta por 5 años, siempre que el deudor garantice suficientemente la obligación a satisfacción de la DIAN mediante garantías reales o bancarias."
      },
      {
        id: "B",
        texto: "Se puede conceder un plazo indefinido de 30 años sin exigir ninguna garantía ni cobrar intereses de mora.",
        explicacion: "Incorrecta. El plazo máximo legal es de 5 años y las facilidades causan inexorablemente intereses moratorios según la tasa de usura fijada legalmente."
      },
      {
        id: "C",
        texto: "La DIAN tiene prohibido conceder plazos de pago bajo cualquier circunstancia.",
        explicacion: "Incorrecta. La facilidad de pago es un mecanismo legal legítimo y eficaz para salvaguardar la empresa y recuperar la cartera morosa."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 814 (Facilidades para el pago)",
    citaNormativa: "«El Subdirector de Cobranzas o los Directores Seccionales podrán, mediante resolución, conceder facilidades para el pago al deudor hasta por cinco (5) años, siempre que respalde la obligación con garantías suficientes.» (E.T. Art. 814)."
  },
  {
    id: "dian_cobro_05",
    nivel: "Profesional",
    ejeId: "cobranzas",
    ejeNombre: "Cobro Coactivo y Títulos Ejecutivos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Prescripción de la Acción de Cobro (Art. 817 E.T.)",
    caso: "Una deuda fiscal contenida en una declaración privada se hizo exigible el 10 de febrero de 2018. Han transcurrido más de siete (7) años sin que la DIAN haya notificado mandamiento de pago ni suscrito acuerdo de pago.",
    enunciado: "¿Cuál es la situación jurídica de la acción de cobro de esta obligación tributaria?",
    opciones: [
      {
        id: "A",
        texto: "La acción de cobro se encuentra prescrita; el término legal de prescripción es de cinco (5) años contados a partir de la fecha en que se hizo exigible la obligación, operando de oficio o a solicitud de parte (Art. 817 E.T.).",
        explicacion: "Correcta. El artículo 817 del Estatuto Tributario establece que la acción de cobro prescribe en 5 años contados a partir de la exigibilidad de la obligación. Si no hubo actos interruptores (como mandamiento de pago debidamente notificado), la obligación prescribe."
      },
      {
        id: "B",
        texto: "Las deudas tributarias en Colombia son imprescriptibles de por vida y se heredan por 10 generaciones.",
        explicacion: "Incorrecta. En el Estado de Derecho no existen obligaciones imprescriptibles de cobro ordinario; opera la prescripción extintiva de 5 años."
      },
      {
        id: "C",
        texto: "Prescribe únicamente si el presidente de la República emite un decreto especial individual para este deudor.",
        explicacion: "Incorrecta. La prescripción opera por mandato general de la ley y se decreta administrativamente por la autoridad de cobro."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 817 (Término de prescripción de la acción de cobro)",
    citaNormativa: "«La acción de cobro de las obligaciones fiscales prescribe en el término de cinco (5) años, contados a partir de la fecha en que se hicieron legalmente exigibles. La prescripción podrá ser decretada de oficio o a solicitud de parte.» (E.T. Art. 817)."
  },
  {
    id: "dian_cobro_06",
    nivel: "Profesional",
    ejeId: "cobranzas",
    ejeNombre: "Cobro Coactivo y Títulos Ejecutivos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Remisión de Deudas Tributarias (Art. 820 E.T.)",
    caso: "Al depurar la cartera de la seccional, se encuentra el caso de una persona natural fallecida hace 6 años, cuya sucesión no dejó ningún bien embargable y la cuantía de la deuda no supera los montos fijados legalmente.",
    enunciado: "De acuerdo con el artículo 820 del Estatuto Tributario, ¿qué figura jurídica procede para suprimir la obligación del balance contable de la DIAN?",
    opciones: [
      {
        id: "A",
        texto: "Declarar la Remisión de la Deuda mediante acto motivado, suprimiendo las obligaciones del deudor fallecido sin bienes conocidos de los registros contables y de cartera.",
        explicacion: "Correcta. El artículo 820 del Estatuto Tributario faculta al Director y a los comités de cartera para remitir (condonar por incobrabilidad legalmente demostrada) las obligaciones a cargo de personas fallecidas sin dejar bienes o que resulten incobrables."
      },
      {
        id: "B",
        texto: "Embargar los bienes de los vecinos del difunto por haber vivido en la misma cuadra.",
        explicacion: "Incorrecta. Viola flagrantemente el principio de personalidad de las penas y obligaciones tributarias."
      },
      {
        id: "C",
        texto: "Dejar la deuda activa durante 200 años en el sistema para que aumente el balance de cartera.",
        explicacion: "Incorrecta. Viola el principio contable de depuración de cartera pública y el buen juicio administrativo."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario, Art. 820 (Remisión de las deudas tributarias)",
    citaNormativa: "«El Director de la DIAN podrá suprimir de los registros y cuentas corrientes de los contribuyentes deudores, las deudas a cargo de personas que hubieren muerto sin dejar bienes.» (E.T. Art. 820)."
  },

  // =========================================================================
  // RÉGIMEN CAMBIARIO Y LAVADO DE ACTIVOS (DECRETO LEY 2245 DE 2011)
  // =========================================================================
  {
    id: "dian_cambiario_01",
    nivel: "Profesional",
    ejeId: "cambiario",
    ejeNombre: "Régimen Cambiario y Lavado de Activos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Canalización Obligatoria de Divisas por Importaciones y Exportaciones",
    caso: "Un importador de repuestos paga a su proveedor en el exterior transfiriendo criptoactivos no regulados o entregando dinero en efectivo a un cambista informal en la frontera, sin canalizar las divisas por intermediarios autorizados.",
    enunciado: "Conforme al régimen cambiario administrado por la DIAN (Resolución Externa 1 de 2018 Banco de la República), ¿cuál es la obligación cambiaria omitida?",
    opciones: [
      {
        id: "A",
        texto: "Incumplió el deber de Canalización Obligatoria a través del Mercado Cambiario (Intermediarios del Mercado Cambiario - IMC o cuentas de compensación) y la presentación de la Declaración de Cambio correspondiente.",
        explicacion: "Correcta. Las operaciones de comercio exterior (importaciones y exportaciones) son de obligatoria canalización a través de los IMC (bancos) o cuentas de compensación registradas. Pagar por canales informales tipifica infracción cambiaria sancionada por la DIAN."
      },
      {
        id: "B",
        texto: "No incurrió en ninguna infracción porque en Colombia los pagos internacionales son 100% informales y no requieren reporte cambiario.",
        explicacion: "Incorrecta. Desconoce el régimen cambiario del Banco de la República y la competencia de control cambiario de la DIAN."
      },
      {
        id: "C",
        texto: "Solo es infracción si el dinero se transportó en un submarino militar.",
        explicacion: "Incorrecta. La infracción se configura por el medio ilícito de canalización frente al régimen normativo cambiario."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Régimen Cambiario (Resolución Externa 1 de 2018 Banco de la República) y D.L. 2245 de 2011",
    citaNormativa: "«Las operaciones de importación y exportación de bienes deberán canalizarse obligatoriamente a través del mercado cambiario mediante los intermediarios autorizados o mediante cuentas de compensación.» (Resolución Externa 1 de 2018, Art. 7)."
  },
  {
    id: "dian_cambiario_02",
    nivel: "Profesional",
    ejeId: "cambiario",
    ejeNombre: "Régimen Cambiario y Lavado de Activos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Competencia Sancionatoria de la DIAN en Materia Cambiaria (D.L. 2245 de 2011)",
    caso: "La DIAN adelanta investigación cambiaria contra un exportador que omitió reintegrar al país las divisas producto de sus ventas internacionales dentro de los plazos reglamentarios.",
    enunciado: "De acuerdo con el Decreto Ley 2245 de 2011, ¿cuál es la naturaleza de la sanción económica que puede imponer la DIAN por infracción al régimen cambiario?",
    opciones: [
      {
        id: "A",
        texto: "Multa pecuniaria a favor del Tesoro Nacional graduada porcentualmente sobre el monto de las divisas no canalizadas o indebidamente manejadas (Art. 3 Decreto Ley 2245 de 2011).",
        explicacion: "Correcta. El régimen sancionatorio cambiario administrado por la DIAN (Decreto Ley 2245 de 2011) castiga la indebida o no canalización de divisas con multas proporcionales al valor de la operación cambiaria infractora."
      },
      {
        id: "B",
        texto: "Trabajo comunitario obligatorio barriendo las instalaciones de la embajada del país comprador.",
        explicacion: "Incorrecta. Las sanciones cambiarias de la DIAN son estrictamente pecuniarias (multas) administrativas regladas."
      },
      {
        id: "C",
        texto: "Pena de destierro y pérdida de la ciudadanía colombiana.",
        explicacion: "Incorrecta. Inconstitucional y contraria a los derechos humanos y procesales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto Ley 2245 de 2011, Art. 3 (Sanciones en materia de control cambiario)",
    citaNormativa: "«La persona natural o jurídica que infrinja el régimen cambiario cuya vigilancia y control corresponda a la DIAN, será sancionada con multa fijada conforme a los porcentajes establecidos en el presente decreto.» (Decreto Ley 2245 de 2011, Art. 3)."
  },
  {
    id: "dian_cambiario_03",
    nivel: "Profesional",
    ejeId: "cambiario",
    ejeNombre: "Régimen Cambiario y Lavado de Activos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Término de Caducidad de la Acción Sancionatoria Cambiaria (D.L. 2245)",
    caso: "Se detecta una infracción cambiaria consistente en no presentación de declaraciones de cambio ocurrida hace seis (6) años. Durante este tiempo la DIAN no profirió ningún pliego de cargos cambiario.",
    enunciado: "Conforme al régimen sancionatorio aduanero y cambiario del Decreto Ley 2245 de 2011, ¿cuál es el término de caducidad de la acción sancionatoria?",
    opciones: [
      {
        id: "A",
        texto: "La facultad sancionatoria caducó; el término de caducidad de la acción sancionatoria cambiaria es de cinco (5) años contados a partir de la fecha de la ocurrencia de la infracción.",
        explicacion: "Correcta. El artículo 5 del Decreto Ley 2245 de 2011 establece que la acción para imponer sanciones por infracciones cambiarias caduca en el término de cinco (5) años contados desde la comisión de los hechos."
      },
      {
        id: "B",
        texto: "La facultad sancionatoria cambiaria nunca caduca y dura 50 años.",
        explicacion: "Incorrecta. En el derecho administrativo sancionador rige el principio de caducidad de la potestad punitiva del Estado (5 años en materia cambiaria)."
      },
      {
        id: "C",
        texto: "Caduca a los 30 días calendario de cometida la falta.",
        explicacion: "Incorrecta. Plazo erróneo; la ley confiere 5 años para investigar y formular pliego de cargos."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto Ley 2245 de 2011, Art. 5 (Caducidad de la acción cambiaria)",
    citaNormativa: "«La facultad que tiene la DIAN para imponer sanciones por infracción al régimen cambiario caduca en el término de cinco (5) años contados a partir de la fecha en que se consumó la infracción.» (Decreto Ley 2245 de 2011, Art. 5)."
  },
  {
    id: "dian_cambiario_04",
    nivel: "Profesional",
    ejeId: "cambiario",
    ejeNombre: "Régimen Cambiario y Lavado de Activos",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Reporte de Operaciones Sospechosas (ROS) a la UIAF y Reserva Legal",
    caso: "En una auditoría tributaria, el Gestor III identifica operaciones atípicas con empresas fachada en el exterior por montos desproporcionados sin justificación económica, con indicios vehementes de lavado de activos.",
    enunciado: "De acuerdo con el régimen de prevención de lavado de activos y financiación del terrorismo, ¿cuál es el conducto formal de reporte y qué deber de confidencialidad rige?",
    opciones: [
      {
        id: "A",
        texto: "Tramitar el Reporte de Operación Sospechosa (ROS) de manera inmediata y confidencial ante la Unidad de Información y Análisis Financiero (UIAF) a través del oficial de cumplimiento/enlace institucional, bajo estricta reserva legal sin informar al contribuyente investigado.",
        explicacion: "Correcta. La Ley 526 de 1999 y los protocolos SAGRILAFT/SARLAFT exigen que los reportes de operaciones sospechosas (ROS) se canalicen directamente a la UIAF bajo estricta reserva legal, estando penalmente prohibido alertar al sujeto reportado."
      },
      {
        id: "B",
        texto: "Llamar al contribuyente para advertirle que lo van a reportar a la UIAF para que retire su dinero rápidamente.",
        explicacion: "Incorrecta. Constituye delito de revelación de secretos y complicidad en lavado de activos (tipificación penal de 'tipping off')."
      },
      {
        id: "C",
        texto: "Publicar los nombres de los sospechosos en redes sociales personales sin ninguna prueba judicial.",
        explicacion: "Incorrecta. Vulnera la reserva legal, el debido proceso y la presunción de inocencia."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 526 de 1999 y Régimen de Prevención de Lavado de Activos UIAF",
    citaNormativa: "«Las autoridades que ejerzan funciones de inspección, vigilancia y control reportarán a la UIAF las operaciones sospechosas de las cuales tengan conocimiento. Dicha información estará sujeta a reserva legal.» (Ley 526 de 1999, Art. 10)."
  }
];

console.log("Batch 2 generado con éxito: " + BATCH_2.length + " preguntas.");
module.exports = { BATCH_2 };
