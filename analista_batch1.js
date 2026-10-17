// analista_batch1.js - Preguntas 1 a 30 para ANALISTA IV (Nivel Técnico - OPEC 236760)
// Cubre: Estructura Organizacional (3), Misionalidad (3), Gestión Documental (6), Lavado de Activos/ROS (6), Liquidación de Impuestos (6), Normativa Cambiaria (5), Obligaciones Tributarias (1)

const ANALISTA_BATCH_1 = [
  // --- ESTRUCTURA ORGANIZACIONAL DE LA DIAN (3 preguntas) ---
  {
    id: "an4_estruc_01",
    nivel: "Técnico",
    ejeId: "estructura_dian",
    ejeNombre: "Estructura Organizacional de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Competencias de la División de Fiscalización y Liquidación Seccional",
    caso: "Como Analista IV adscrito al Grupo Interno de Trabajo de Fiscalización de una Dirección Seccional, usted recibe un expediente en el que se ha vencido el término de respuesta a un Requerimiento Especial y se requiere proyectar el acto oficial de determinación.",
    enunciado: "Conforme a la estructura funcional de la DIAN (Decreto 1742 de 2020), ¿cuál es el acto administrativo definitivo que corresponde proyectar a la dependencia de Fiscalización y Liquidación?",
    opciones: [
      {
        id: "A",
        texto: "La Liquidación Oficial de Revisión, en la cual se modifican oficialmente los valores de la declaración tributaria investigada.",
        explicacion: "Correcta. En la estructura funcional seccional (Decreto 1742 de 2020), la División de Fiscalización y Liquidación es competente para proferir la Liquidación Oficial de Revisión una vez surtido el Requerimiento Especial y vencido el plazo legal (Art. 710 E.T.)."
      },
      {
        id: "B",
        texto: "El Mandamiento de Pago coactivo con orden de embargo de cuentas bancarias.",
        explicacion: "Incorrecta. El mandamiento de pago es competencia exclusiva de la División de Cobranzas y requiere un título ejecutivo en firme."
      },
      {
        id: "C",
        texto: "Una Resolución de Sanción Directa sin motivación técnica ni antecedentes probatorios.",
        explicacion: "Incorrecta. Genera nulidad absoluta por violación flagrante del debido proceso y falsa motivación."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1742 de 2020 Art. 38 y Estatuto Tributario Art. 710",
    citaNormativa: "«Corresponde a las Divisiones de Fiscalización y Liquidación de las Direcciones Seccionales adelantar las investigaciones y proferir los actos de determinación oficial de tributos y sanciones.» (Decreto 1742 de 2020)."
  },
  {
    id: "an4_estruc_02",
    nivel: "Técnico",
    ejeId: "estructura_dian",
    ejeNombre: "Estructura Organizacional de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Nivel Central vs. Direcciones Seccionales: Competencia en Doctrina y Apoyo Operativo",
    caso: "Durante una diligencia de inspección contable, el contribuyente presenta un memorando firmado por un auditor de otra ciudad alegando que su criterio exonera a la empresa de retención en la fuente.",
    enunciado: "De acuerdo con el orden jerárquico y funcional de la DIAN, ¿cómo debe proceder el Analista IV ante dicho documento?",
    opciones: [
      {
        id: "A",
        texto: "Informar al profesional comisionado que los memorandos internos de auditoría no constituyen doctrina oficial obligatoria, rigiéndose únicamente por los Conceptos de la Dirección de Gestión Jurídica del Nivel Central.",
        explicacion: "Correcta. La doctrina oficial de la DIAN vinculante para sus funcionarios radica de manera exclusiva y centralizada en la Dirección de Gestión Jurídica (Subdirección de Normativa y Doctrina), no en conceptos o memorandos seccionales aislados."
      },
      {
        id: "B",
        texto: "Aceptar de inmediato el criterio del auditor sin consultar la normativa ni informar al profesional líder de la diligencia.",
        explicacion: "Incorrecta. Desconoce la jerarquía normativa institucional y vulnera el principio de legalidad tributaria."
      },
      {
        id: "C",
        texto: "Cerrar el expediente de investigación y archivar todas las pruebas recaudadas.",
        explicacion: "Incorrecta. Incurre en omisión indebida de funciones y obstaculiza el ejercicio de fiscalización del Estado."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1742 de 2020 Art. 32 y Ley 2010 de 2019 Art. 131",
    citaNormativa: "«Los conceptos emitidos por la Dirección de Gestión Jurídica de la DIAN constituyen la única interpretación oficial vinculante para los empleados de la Entidad.» (Ley 2010 de 2019, Art. 131)."
  },
  {
    id: "an4_estruc_03",
    nivel: "Técnico",
    ejeId: "estructura_dian",
    ejeNombre: "Estructura Organizacional de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Articulación entre Operación Aduanera y Fiscalización en el Nivel Técnico",
    caso: "Un Analista IV es asignado para apoyar operativamente una diligencia conjunta en zona primaria aduanera donde se detecta mercancía no declarada en el manifiesto de carga.",
    enunciado: "Conforme a las competencias seccionales aduaneras, ¿cuál es la dependencia responsable de proferir el Acta de Aprehensión y custodiar la mercancía en el recinto de depósito?",
    opciones: [
      {
        id: "A",
        texto: "La División de Operación Aduanera / Fiscalización Aduanera de la Dirección Seccional competente con jurisdicción en el lugar de arribo.",
        explicacion: "Correcta. El control aduanero en zona primaria y la medida cautelar de aprehensión corresponden a la dependencia operativa aduanera/fiscalización seccional dentro de su jurisdicción territorial (Decreto 1742 de 2020 y Decreto 920 de 2023)."
      },
      {
        id: "B",
        texto: "La Subdirección Administrativa y Financiera del Nivel Central en Bogotá.",
        explicacion: "Incorrecta. Esta subdirección maneja la logística interna y presupuesto institucional, careciendo de facultades de policía aduanera territorial."
      },
      {
        id: "C",
        texto: "La empresa de transporte marítimo privado responsable de la carga.",
        explicacion: "Incorrecta. Las funciones de control aduanero y aprehensión son potestades exclusivas del Estado a través de la DIAN."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1742 de 2020 Art. 52 y Decreto 920 de 2023 Art. 65",
    citaNormativa: "«Corresponde a las Direcciones Seccionales con competencia aduanera ejercer el control previo, simultáneo y posterior, aplicando las medidas cautelares de aprehensión e inmovilización.» (Decreto 920 de 2023)."
  },

  // --- MISIONALIDAD DE LA DIAN (3 preguntas) ---
  {
    id: "an4_mision_01",
    nivel: "Técnico",
    ejeId: "misionalidad",
    ejeNombre: "Misionalidad de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Objetivo Superior de la DIAN y Orden Público Económico",
    caso: "En una charla de inducción institucional, se le consulta a un Analista IV sobre el rol específico del nivel técnico en el cumplimiento de los fines esenciales de la DIAN.",
    enunciado: "¿Cuál de las siguientes afirmaciones define con exactitud la contribución misional del empleo técnico de Analista IV?",
    opciones: [
      {
        id: "A",
        texto: "Prestar apoyo técnico, operativo y probatorio riguroso en las investigaciones y diligencias para asegurar la recaudación oportuna y reprimir la evasión, contrabando e infracciones cambiarias, protegiendo el orden público económico.",
        explicacion: "Correcta. El propósito principal del Analista IV (AT-FL-2010) es soportar técnicamente la fiscalización para garantizar la seguridad fiscal del Estado y el cumplimiento tributario, aduanero y cambiario (Decreto 1742 de 2020, Art. 2)."
      },
      {
        id: "B",
        texto: "Emitir leyes en el Congreso para condonar deudas a grandes contribuyentes morosos.",
        explicacion: "Incorrecta. La función legislativa corresponde al Congreso; la DIAN es una entidad de la rama ejecutiva que administra y recauda tributos."
      },
      {
        id: "C",
        texto: "Negociar acuerdos informales de exoneración de impuestos a cambio de agilizar trámites personales.",
        explicacion: "Incorrecta. Constituye una conducta corrupta y delictiva tipificada en el Código Penal y sancionada disciplinariamente."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1742 de 2020, Art. 2 y Ficha Técnica AT-FL-2010",
    citaNormativa: "«La DIAN tiene por objeto garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional mediante la administración y el debido control tributario, aduanero y cambiario.» (Decreto 1742 de 2020)."
  },
  {
    id: "an4_mision_02",
    nivel: "Técnico",
    ejeId: "misionalidad",
    ejeNombre: "Misionalidad de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Facilitación del Comercio Exterior y Control Simultáneo",
    caso: "Un usuario aduanero acude a la ventanilla técnica de la DIAN preocupado por el tiempo de inspección física de una importación de insumos médicos perecederos.",
    enunciado: "De acuerdo con el principio misional de facilitación del comercio legítimo sin descuidar el control, ¿cuál debe ser la orientación técnica del Analista IV?",
    opciones: [
      {
        id: "A",
        texto: "Verificar la correcta radicación de la solicitud y tramitar con celeridad prioritaria ante los inspectores comisionados la práctica de la diligencia física conforme a las guías de mercancía perecedera.",
        explicacion: "Correcta. La DIAN equilibra el control riguroso con la facilitación logística, dando trámite ágil a mercancías especiales o perecederas para no perjudicar la competitividad del comercio exterior legítimo."
      },
      {
        id: "B",
        texto: "Negar cualquier orientación y manifestarle al usuario que la DIAN no tiene interés en la conservación de la mercancía.",
        explicacion: "Incorrecta. Vulnera los principios de servicio al ciudadano, celeridad y la vocación misional de facilitación de la Entidad."
      },
      {
        id: "C",
        texto: "Firmar unilateralmente el levante automático de la mercancía sin que el inspector designado haya realizado la revisión física.",
        explicacion: "Incorrecta. Excede las competencias técnicas y comete una falta gravísima al omitir el procedimiento de inspección ordenado por el sistema de gestión de riesgos."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1165 de 2019 Art. 185 y Decreto 1742 de 2020 Art. 2",
    citaNormativa: "«La administración aduanera facilitará las operaciones de comercio exterior legítimo garantizando la celeridad en la inspección de mercancías perecederas sin perjuicio de las medidas de control fiscal.» (Decreto 1165 de 2019)."
  },
  {
    id: "an4_mision_03",
    nivel: "Técnico",
    ejeId: "misionalidad",
    ejeNombre: "Misionalidad de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Seguridad Fiscal y Lucha Integral contra el Contrabando",
    caso: "Durante un operativo de control de mercancías extranjeras en establecimientos abiertos al público, se detectan licores y cigarrillos sin estampillas departamentales ni declaraciones de importación que acrediten su legal ingreso al país.",
    enunciado: "¿Cuál es la finalidad misional inmediata de la medida cautelar que el equipo técnico debe apoyar en este procedimiento?",
    opciones: [
      {
        id: "A",
        texto: "Aprehender la mercancía para salvaguardar el orden público económico nacional, proteger la salud pública y asegurar el recaudo de los tributos aduaneros evadidos.",
        explicacion: "Correcta. El control al contrabando de mercancías sensibles cumple una doble función misional: defender los recursos de la salud/educación y proteger la industria legal frente a la competencia desleal."
      },
      {
        id: "B",
        texto: "Permitir la venta de la mercancía siempre que el comerciante pague una cuota en efectivo no oficial al equipo técnico.",
        explicacion: "Incorrecta. Constituye cohecho, concusión y favorecimiento de contrabando, sancionables penalmente."
      },
      {
        id: "C",
        texto: "Devolver la mercancía de inmediato sin levantar acta alguna por tratarse de un negocio minorista.",
        explicacion: "Incorrecta. La normativa aduanera exige la retención y aprehensión de mercancías que carezcan de prueba de legal introducción, sin importar el volumen."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1762 de 2015 (Ley Anticontrabando) y Decreto 920 de 2023",
    citaNormativa: "«El Estado colombiano, a través de la DIAN y autoridades de control, reprimirá el contrabando de bienes sujetos al impuesto al consumo y aranceles como imperativo de seguridad fiscal.» (Ley 1762 de 2015)."
  },

  // --- GESTION DOCUMENTAL Y TRAZABILIDAD DE EXPEDIENTES (6 preguntas) ---
  {
    id: "an4_doc_01",
    nivel: "Técnico",
    ejeId: "gestion_documental",
    ejeNombre: "Gestión Documental y Trazabilidad de Expedientes",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Reglas Oficiales de Foliación en Expedientes de Fiscalización",
    caso: "A un Analista IV se le encomienda organizar y foliar un expediente de investigación tributaria compuesto por 180 documentos, incluyendo pruebas contables, extractos bancarios y correspondencia externa.",
    enunciado: "De acuerdo con el Acuerdo 002 de 2014 del Archivo General de la Nación (AGN), ¿cuál es la regla técnica correcta para la foliación del expediente?",
    opciones: [
      {
        id: "A",
        texto: "Numerar de manera consecutiva en la esquina superior derecha de la cara recta del folio, con lápiz de mina negra suave (HB o B), de 1 en adelante en orden cronológico ascendente, sin tachones ni enmendaduras.",
        explicacion: "Correcta. El Acuerdo AGN 002 de 2014 establece que la foliación debe realizarse en la esquina superior derecha de la cara recta con lápiz suave (HB o B), de manera consecutiva y respetando el orden cronológico del expediente administrativo."
      },
      {
        id: "B",
        texto: "Foliar con marcador indeleble rojo en la esquina inferior izquierda de todas las hojas tanto al derecho como al reverso.",
        explicacion: "Incorrecta. El uso de tintas líquidas o marcadores puede deteriorar el papel y altera el estándar técnico archivístico nacional."
      },
      {
        id: "C",
        texto: "Asignar números repetidos con letras (ej: 15A, 15B) cada vez que llegue un documento nuevo para no cambiar el total.",
        explicacion: "Incorrecta. La norma técnica prohíbe folios bis, alfanuméricos o subfoliaciones, salvo correcciones expresas autorizadas en acta de archivo."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Acuerdo 002 de 2014 AGN y Manual de Gestión Documental DIAN",
    citaNormativa: "«La foliación se efectuará en la esquina superior derecha de la cara recta del folio en el sentido del texto, de manera legible, sin enmendaduras, utilizando lápiz de mina negra tipo HB o B.» (Acuerdo AGN 002 de 2014)."
  },
  {
    id: "an4_doc_02",
    nivel: "Técnico",
    ejeId: "gestion_documental",
    ejeNombre: "Gestión Documental y Trazabilidad de Expedientes",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Trazabilidad de Expedientes Electrónicos e Híbridos",
    caso: "En el sistema de gestión documental electrónico de la DIAN, un funcionario advierte que un anexo probatorio aportado en PDF por un contribuyente no coincide con el índice electrónico del expediente digital.",
    enunciado: "Como Analista IV encargado de la trazabilidad documental, ¿cuál es el procedimiento técnico debido?",
    opciones: [
      {
        id: "A",
        texto: "Verificar la firma digital y los metadatos del documento, actualizar el índice electrónico del expediente registrando la fecha, hora, número de folios y resumen del contenido para garantizar su plena integridad probatoria.",
        explicacion: "Correcta. La Ley 594 de 2000 y las normas de expediente electrónico exigen la estricta concordancia entre el índice electrónico, los metadatos y los documentos que lo conforman, asegurando inalterabilidad y cadena de custodia."
      },
      {
        id: "B",
        texto: "Eliminar el archivo PDF del sistema para evitar que el contribuyente pueda probar sus descargos.",
        explicacion: "Incorrecta. Constituye ocultamiento o destrucción de documento público, delito tipificado en el Código Penal colombiano."
      },
      {
        id: "C",
        texto: "Dejar el expediente sin corregir argumentando que en los archivos digitales el índice carece de validez legal.",
        explicacion: "Incorrecta. El índice electrónico es el documento rector que garantiza la trazabilidad y foliación virtual del expediente."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 594 de 2000 y Decreto 2609 de 2012 Art. 21 (Gestión de Documentos Electrónicos)",
    citaNormativa: "«Los expedientes electrónicos deberán contar con un índice electrónico firmado digitalmente que garantice la autenticidad, integridad y trazabilidad de los documentos que lo conforman.» (Decreto 2609 de 2012)."
  },
  {
    id: "an4_doc_03",
    nivel: "Técnico",
    ejeId: "gestion_documental",
    ejeNombre: "Gestión Documental y Trazabilidad de Expedientes",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Reserva Legal de los Expedientes de Fiscalización Tributaria",
    caso: "Un tercero particular que no es parte procesal ni apoderado en un expediente de liquidación oficial de revisión solicita copia completa de las declaraciones de renta y extractos bancarios del contribuyente investigado.",
    enunciado: "¿Cuál es la respuesta técnica y legal que debe proyectar el Analista IV conforme al Estatuto Tributario?",
    opciones: [
      {
        id: "A",
        texto: "Rechazar la entrega de copias motivando la respuesta en el carácter de reserva legal que ampara las declaraciones tributarias y los documentos recaudados en fiscalización, de conformidad con el artículo 583 del Estatuto Tributario.",
        explicacion: "Correcta. Las declaraciones tributarias y los expedientes de fiscalización están amparados por reserva legal estricta (Art. 583 E.T.); solo pueden ser examinados por el contribuyente, su apoderado o autoridades judiciales autorizadas."
      },
      {
        id: "B",
        texto: "Entregar copias simples de inmediato amparándose en el principio general de acceso a la información pública.",
        explicacion: "Incorrecta. Viola la reserva tributaria y los derechos fundamentales de hábeas data e intimidad del contribuyente investigado."
      },
      {
        id: "C",
        texto: "Cobrar una tarifa personal en efectivo para entregar el expediente de manera extraoficial.",
        explicacion: "Incorrecta. Delito de cohecho y violación de reserva procesal."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 583 y Ley 1712 de 2014 Art. 19",
    citaNormativa: "«La información relativa a las bases gravables y a la determinación privada de los impuestos que figuren en las declaraciones tributarias tendrá el carácter de información reservada.» (Estatuto Tributario, Art. 583)."
  },
  {
    id: "an4_doc_04",
    nivel: "Técnico",
    ejeId: "gestion_documental",
    ejeNombre: "Gestión Documental y Trazabilidad de Expedientes",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Tabla de Retención Documental (TRD) y Transferencias Primarias",
    caso: "En el archivo de gestión de la División de Fiscalización se acumulan expedientes de investigaciones que culminaron con Liquidación Oficial ejecutoriada hace 5 años y su pago total está confirmado.",
    enunciado: "De acuerdo con la Tabla de Retención Documental (TRD) de la DIAN, ¿qué acción técnica corresponde adelantar?",
    opciones: [
      {
        id: "A",
        texto: "Preparar el inventario documental mediante el Formato Único de Inventario Documental (FUID) y gestionar la transferencia primaria al Archivo Central de la Entidad según los tiempos de retención estipulados.",
        explicacion: "Correcta. La TRD determina los tiempos de permanencia en el archivo de gestión y ordena la transferencia primaria al archivo central mediante el FUID (Acuerdo AGN 042 de 2002), conservando el patrimonio documental de la DIAN."
      },
      {
        id: "B",
        texto: "Proceder a quemar o reciclar inmediatamente las carpetas en el patio de la seccional sin levantar inventario.",
        explicacion: "Incorrecta. Destruir documentos públicos sin cumplir los procedimientos de la TRD acarrea responsabilidades disciplinarias y penales gravísimas."
      },
      {
        id: "C",
        texto: "Llevarse los expedientes a la casa del funcionario para desocupar estantes en la oficina.",
        explicacion: "Incorrecta. Los expedientes públicos deben permanecer bajo custodia estricta de las instalaciones oficiales autorizadas."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 594 de 2000 Art. 24 y Acuerdo AGN 042 de 2002",
    citaNormativa: "«Las transferencias documentarias primarias se realizarán con sujeción a las Tablas de Retención Documental y se formalizarán mediante inventarios técnicos.» (Acuerdo AGN 042 de 2002)."
  },
  {
    id: "an4_doc_05",
    nivel: "Técnico",
    ejeId: "gestion_documental",
    ejeNombre: "Gestión Documental y Trazabilidad de Expedientes",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Radicación y Comunicaciones Oficiales en el Proceso de Fiscalización",
    caso: "Un contribuyente radica un recurso de reconsideración en el punto de contacto presencial. El Analista IV encargado de la ventanilla debe incorporar el documento al sistema institucional de correspondencia.",
    enunciado: "¿Cuáles son los datos mínimos obligatorios que el sistema debe estampar en la radicación para garantizar su validez jurídica y probatoria?",
    opciones: [
      {
        id: "A",
        texto: "Número consecutivo único de radicado, fecha y hora de recepción oficial, número de folios y anexos recibidos, y nombre o identificación del remitente.",
        explicacion: "Correcta. El Acuerdo AGN 060 de 2001 exige que la radicación oficial consigne el consecutivo, fecha y hora exacta, cantidad de folios/anexos e identificación del interesado, fijando la certeza procesal del término legal."
      },
      {
        id: "B",
        texto: "Únicamente la firma con huella dactilar del vigilante de turno de la portería.",
        explicacion: "Incorrecta. El vigilante no tiene la condición de funcionario de correspondencia oficial ni valida la radicación jurídica."
      },
      {
        id: "C",
        texto: "Asignar un número de radicación manual con lápiz sin registrar fecha ni hora.",
        explicacion: "Incorrecta. Deja en indefensión probatoria al administrado y vulnera la seguridad jurídica de los términos administrativos."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Acuerdo 060 de 2001 AGN Art. 2 y 5 (Comunicaciones Oficiales)",
    citaNormativa: "«La radicación es el procedimiento por el cual las entidades asignan un número consecutivo a las comunicaciones recibidas, dejando constancia de la fecha y hora de recibo, folios y anexos.» (Acuerdo AGN 060 de 2001)."
  },
  {
    id: "an4_doc_06",
    nivel: "Técnico",
    ejeId: "gestion_documental",
    ejeNombre: "Gestión Documental y Trazabilidad de Expedientes",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Reconstrucción de Expedientes Tributarios Extraviados o Deteriorados",
    caso: "Debido a una filtración de agua en el archivo, se deterioran varios folios correspondientes a un pliego de cargos notificado y su correspondiente respuesta por parte del contribuyente.",
    enunciado: "De acuerdo con el Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA) y las directrices archivísticas, ¿cómo debe actuar el Analista IV?",
    opciones: [
      {
        id: "A",
        texto: "Informar de inmediato al Jefe de División, levantar un acta de hechos sobre los folios afectados e iniciar el procedimiento de reconstrucción del expediente solicitando copias de los actos al sistema informático y a las partes.",
        explicacion: "Correcta. El CPACA (Art. 126) y las directrices de AGN exigen levantar acta formal de pérdida o deterioro e iniciar el trámite de reconstrucción allegando copias existentes en bases de datos y en poder de los intervinientes."
      },
      {
        id: "B",
        texto: "Ocultar el incidente botando a la basura los folios mojados para que nadie se dé cuenta del daño.",
        explicacion: "Incorrecta. Es una conducta dolosa que constituye destrucción de documento público y falta disciplinaria gravísima."
      },
      {
        id: "C",
        texto: "Reinventar el texto de las respuestas del contribuyente según su propia memoria sin cotejar archivos oficiales.",
        explicacion: "Incorrecta. Configura falsedad en documento público y vulnera el derecho al debido proceso."
      }
    ],
    respuestaCorrecta: "A",
    norma: "CPACA Art. 126 y Ley 594 de 2000 Art. 26 (Reconstrucción de Expedientes)",
    citaNormativa: "«Comprobada la pérdida o deterioro de un expediente administrativo, se ordenará su reconstrucción con las copias que reposen en los archivos o que aporten los interesados.» (CPACA, Art. 126)."
  },

  // --- LAVADO DE ACTIVOS, FINANCIACION DEL TERRORISMO, REPORTE DE OPERACIONES SOSPECHOSAS Y DENUNCIAS (6 preguntas) ---
  {
    id: "an4_laft_01",
    nivel: "Técnico",
    ejeId: "lavado_activos_ros",
    ejeNombre: "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Señales de Alerta de Operaciones Inusuales y Sospechosas",
    caso: "Al clasificar información tributaria de una sociedad creada hace 3 meses con capital inicial de $2.000.000, el Analista IV detecta compras y facturas electrónicas de importación por más de $15.000 millones de pesos pagadas en efectivo a través de depósitos fraccionados.",
    enunciado: "¿Cómo debe tipificarse preliminarmente este comportamiento en el marco del sistema SARLAFT/SIPLAFT institucional?",
    opciones: [
      {
        id: "A",
        texto: "Como una Operación Inusual con altas señales de alerta de Operación Sospechosa de Lavado de Activos, por incoherencia patrimonial, volumen económico atípico y fraccionamiento financiero.",
        explicacion: "Correcta. La desproporción entre la capacidad económica legal, la corta antigüedad y las transacciones multimillonarias en efectivo constituye una señal clásica de alerta de lavado de activos que amerita escalamiento técnico a la UIAF."
      },
      {
        id: "B",
        texto: "Como una operación empresarial normal que demuestra excelente emprendimiento comercial sin necesidad de reporte alguno.",
        explicacion: "Incorrecta. Ignorar el perfil de alto riesgo y el fraccionamiento en efectivo atenta contra el deber legal de prevención del LA/FT."
      },
      {
        id: "C",
        texto: "Como un simple error de digitación en el RUT que no merece verificación técnica.",
        explicacion: "Incorrecta. Desconoce la gravedad de los indicios de triangulación económica y lavado de dinero."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 526 de 1999 Art. 9 y 10, y Resoluciones DIAN sobre SARLAFT",
    citaNormativa: "«Se entenderá por operación sospechosa aquella que por su número, cantidad o características no se enmarque en las pautas de normalidad del sector económico o no tenga justificación económica lícita.» (Ley 526 de 1999)."
  },
  {
    id: "an4_laft_02",
    nivel: "Técnico",
    ejeId: "lavado_activos_ros",
    ejeNombre: "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Reserva Absoluta del Reporte de Operaciones Sospechosas (ROS) a la UIAF",
    caso: "Un Analista IV apoya la estructuración de un Reporte de Operación Sospechosa (ROS) con destino a la Unidad de Información y Análisis Financiero (UIAF). Un compañero de otra división le pregunta quién es el contribuyente reportado.",
    enunciado: "De acuerdo con el artículo 40 de la Ley 526 de 1999, ¿cuál es el deber legal de confidencialidad del funcionario?",
    opciones: [
      {
        id: "A",
        texto: "Mantener reserva absoluta del ROS; está prohibido revelar a terceros o al propio interesado la existencia del reporte o la información remitida a la UIAF (prohibición de tipping-off).",
        explicacion: "Correcta. El artículo 40 de la Ley 526 de 1999 establece la estricta reserva legal del ROS. Revelar su contenido o existencia acarrea graves sanciones penales y disciplinarias, y pone en riesgo la efectividad de la investigación estatal."
      },
      {
        id: "B",
        texto: "Contarle los detalles al compañero siempre que este prometa no divulgarlo en redes sociales.",
        explicacion: "Incorrecta. Viola la reserva legal agravada del sistema antilavado de la Nación."
      },
      {
        id: "C",
        texto: "Llamar al contribuyente investigado para ofrecerle asesoría para justificar los fondos antes de que la UIAF intervenga.",
        explicacion: "Incorrecta. Delito de concierto para delinquir y favorecimiento de lavado de activos."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 526 de 1999 Art. 40 y Código Penal Art. 418",
    citaNormativa: "«La información que reciba o envíe la UIAF sobre operaciones sospechosas está amparada por estricta reserva legal. Ninguna persona que conozca de ella podrá darla a conocer a terceros.» (Ley 526 de 1999, Art. 40)."
  },
  {
    id: "an4_laft_03",
    nivel: "Técnico",
    ejeId: "lavado_activos_ros",
    ejeNombre: "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Canalización de Denuncias por Fraude y Corrupción en Fiscalización",
    caso: "A la bandeja del Analista IV llega una denuncia ciudadana anónima pero documentada con facturas falsas y cheques que demostrarían ventas millonarias simuladas para solicitar devoluciones improcedentes de IVA.",
    enunciado: "Conforme al procedimiento institucional de la DIAN para el trámite de denuncias, ¿qué acción debe ejecutar el Analista IV?",
    opciones: [
      {
        id: "A",
        texto: "Clasificar y validar preliminarmente la pertinencia de las pruebas aportadas, registrar la denuncia en el sistema de fiscalización y remitir el informe técnico al superior jerárquico para programar la investigación respectiva.",
        explicacion: "Correcta. La función técnica (AT-FL-2010) asigna clasificar la información y analizar preliminarmente los insumos y denuncias recibidas, asegurando su incorporación formal al plan de fiscalización."
      },
      {
        id: "B",
        texto: "Descartar la denuncia de inmediato por el solo hecho de ser anónima, sin revisar la contundencia de las pruebas adjuntas.",
        explicacion: "Incorrecta. Las denuncias anónimas con soporte probatorio serio y concreto deben ser evaluadas y tramitadas obligatoriamente."
      },
      {
        id: "C",
        texto: "Enviar las pruebas al correo personal del denunciado para exigirle explicaciones directas.",
        explicacion: "Incorrecta. Vulnera la reserva y arruina la posibilidad de una investigación fiscal sorpresiva."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1474 de 2011 (Estatuto Anticorrupción) Art. 81 y Ficha AT-FL-2010",
    citaNormativa: "«Las denuncias sobre fraudes al erario deberán ser analizadas y clasificadas con base en las evidencias aportadas, remitiéndolas a las dependencias de fiscalización competentes.» (Ley 1474 de 2011)."
  },
  {
    id: "an4_laft_04",
    nivel: "Técnico",
    ejeId: "lavado_activos_ros",
    ejeNombre: "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Detección de Empresas de Papel o Facturadores Ficticios",
    caso: "Al revisar el domicilio fiscal de un proveedor reportado con compras masivas en la contabilidad de una empresa auditada, el Analista IV constata que en la dirección registrada funciona un lote baldío abandonado desde hace una década.",
    enunciado: "¿Cuál es el trámite administrativo especial que debe impulsar el área de fiscalización ante este hallazgo?",
    opciones: [
      {
        id: "A",
        texto: "Documentar el hallazgo mediante acta de visita técnica con registro fotográfico e iniciar el trámite para declarar al proveedor como 'Proveedor Ficticio o Inexistente' conforme al artículo 671 del Estatuto Tributario.",
        explicacion: "Correcta. La declaración de proveedor ficticio o insolvente (Art. 671 E.T.) sanciona a quienes simulan operaciones mercantiles facturando compras inexistentes, inhabilitándolos tributariamente y desconociendo costos y deducciones a los compradores."
      },
      {
        id: "B",
        texto: "Modificar de oficio la dirección en el RUT poniéndole la dirección particular del contador de la empresa auditada.",
        explicacion: "Incorrecta. No subsana la simulación sustancial y contraviene el procedimiento de fiscalización probatoria."
      },
      {
        id: "C",
        texto: "Asumir que el lote baldío es una bodega subterránea válida y abstenerse de emitir reporte.",
        explicacion: "Incorrecta. Faltaría a la diligencia debida y al deber de verificación en la investigación tributaria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 671 (Sanción de Declaración de Proveedor Ficticio)",
    citaNormativa: "«Serán declarados proveedores ficticios quienes facturen ventas o servicios simulados o inexistentes; esta declaración conllevará el rechazo de los costos y deducciones correspondientes.» (Estatuto Tributario, Art. 671)."
  },
  {
    id: "an4_laft_05",
    nivel: "Técnico",
    ejeId: "lavado_activos_ros",
    ejeNombre: "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Articulación DIAN - UIAF y Fiscalía en Delitos contra el Régimen Aduanero",
    caso: "En una verificación aduanera técnica se comprueba que una red delictiva ingresó contenedores con textiles subfacturados en un 95% respecto a los precios de referencia internacionales, transfiriendo dividendos a paraísos fiscales no cooperantes.",
    enunciado: "Además de proferir el acta de aprehensión aduanera, ¿cuál es la acción interinstitucional imperativa?",
    opciones: [
      {
        id: "A",
        texto: "Compilar el informe técnico probatorio y remitirlo simultáneamente al oficial de cumplimiento institucional para reporte ROS a la UIAF y formular la respectiva denuncia penal ante la Fiscalía General de la Nación por contrabando y fraude aduanero.",
        explicacion: "Correcta. El fraude aduanero y la subfacturación sistemática con triangulación en paraísos fiscales constituyen delitos fuente de lavado de activos, obligando a dar traslado inmediato a la Fiscalía y a la UIAF (Ley 1762 de 2015)."
      },
      {
        id: "B",
        texto: "Guardar silencio institucional y limitarse a cobrar una multa menor sin tocar los contenedores.",
        explicacion: "Incorrecta. Omitir la denuncia de delitos conocidos en ejercicio del cargo público configura prevaricato por omisión."
      },
      {
        id: "C",
        texto: "Publicar los nombres de los investigados en redes sociales personales sin orden judicial.",
        explicacion: "Incorrecta. Viola la reserva procesal y puede viciar las investigaciones penales."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1762 de 2015 Art. 5 y Código de Procedimiento Penal Art. 67",
    citaNormativa: "«Todo servidor público que tenga conocimiento de la comisión de una conducta punible que deba investigarse de oficio está en la obligación de denunciarla inmediatamente a la autoridad competente.» (Ley 906 de 2004, Art. 67)."
  },
  {
    id: "an4_laft_06",
    nivel: "Técnico",
    ejeId: "lavado_activos_ros",
    ejeNombre: "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Inexistencia de Justificación Económica en Enajenación de Activos",
    caso: "Una sociedad bajo investigación tributaria vende su edificio principal, avaluado comercialmente en $10.000 millones, a una persona natural insolvente por la suma de $100 millones, pagados en títulos ficticios sin trazabilidad bancaria.",
    enunciado: "Bajo la óptica del control de operaciones sospechosas, ¿cuál es la conclusión técnica del Analista IV?",
    opciones: [
      {
        id: "A",
        texto: "Existe una notoria operación sospechosa tendiente a la distracción de activos para insolvencia tributaria fraudulenta y ocultamiento de bienes de origen ilícito, carente de razonabilidad económica.",
        explicacion: "Correcta. La enajenación de activos sustanciales a precios irrisorios sin justificación mercantil o contable es una tipología de ocultamiento patrimonial y fraude que sustenta el reporte de alertas LAFT y medidas de aforo/fiscalización."
      },
      {
        id: "B",
        texto: "Es un acto de beneficencia privada en el que la DIAN no tiene ninguna competencia de análisis.",
        explicacion: "Incorrecta. La ley tributaria castiga las transferencias ficticias por debajo del valor comercial (Art. 90 E.T.)."
      },
      {
        id: "C",
        texto: "Aprobar la escritura pública y reducir de oficio los impuestos de la empresa vendedora a cero.",
        explicacion: "Incorrecta. Es contrario a la ley y constituiría complicidad en fraude al fisco nacional."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 90 y Código Penal Art. 323 (Lavado de Activos)",
    citaNormativa: "«Para efectos tributarios, el precio de enajenación no podrá ser inferior al costo comercial ni apartarse de los precios de mercado en más de un 15%.» (Estatuto Tributario, Art. 90)."
  },

  // --- LIQUIDACION DE IMPUESTOS NACIONALES (6 preguntas) ---
  {
    id: "an4_liq_01",
    nivel: "Técnico",
    ejeId: "liquidacion_impuestos",
    ejeNombre: "Liquidación de Impuestos Nacionales",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Liquidación Oficial de Corrección Aritmética (Art. 697 E.T.)",
    caso: "Al revisar una declaración del Impuesto sobre la Renta presentada por un contribuyente, el Analista IV detecta que al sumar los renglones de costos procedentes ($500 millones) y deducciones ($300 millones), el declarante escribió en el total de costos y deducciones $900 millones en lugar de $800 millones.",
    enunciado: "¿Cuál es el acto oficial que procede proyectar para corregir este error puramente matemático?",
    opciones: [
      {
        id: "A",
        texto: "Una Liquidación Oficial de Corrección Aritmética conforme al artículo 697 del Estatuto Tributario, recalculando la base y aplicando la sanción del 30% del mayor valor a pagar (Art. 646 E.T.).",
        explicacion: "Correcta. El artículo 697 del E.T. prevé la Liquidación de Corrección Aritmética cuando se cometen errores aritméticos en la declaración que originan un menor saldo a pagar o mayor saldo a favor, aplicando la sanción específica del artículo 646."
      },
      {
        id: "B",
        texto: "Una Liquidación Oficial de Aforo ordenando la clausura inmediata del establecimiento comercial.",
        explicacion: "Incorrecta. El aforo solo procede cuando el contribuyente es omiso absoluto y no presentó declaración tributaria."
      },
      {
        id: "C",
        texto: "Archivar el expediente ignorando el error de $100 millones de pesos a favor del Estado.",
        explicacion: "Incorrecta. Omitir el cobro del mayor valor y su sanción aritmética causa daño patrimonial al erario."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 697 y Art. 646",
    citaNormativa: "«La administración tributaria podrá corregir aritméticamente las declaraciones tributarias de los contribuyentes, cuando se hayan cometido errores aritméticos en su liquidación.» (Estatuto Tributario, Art. 697)."
  },
  {
    id: "an4_liq_02",
    nivel: "Técnico",
    ejeId: "liquidacion_impuestos",
    ejeNombre: "Liquidación de Impuestos Nacionales",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Liquidación Oficial de Aforo para Contribuyentes Omisos (Art. 717 E.T.)",
    caso: "Un comerciante obligado a declarar el impuesto sobre las ventas (IVA) no presentó sus declaraciones durante los seis bimestres de un año gravable, a pesar de que la DIAN le notificó en debida forma el Emplazamiento para Declarar y se venció el término de un mes sin respuesta.",
    enunciado: "¿Cuál es el paso legal siguiente que debe proyectar el equipo de Liquidación?",
    opciones: [
      {
        id: "A",
        texto: "Proyectar la Liquidación Oficial de Aforo, determinando el impuesto omitido con base en las compras electrónicas y extractos bancarios, e imponiendo la sanción por no declarar del 10% de las consignaciones o ingresos (Art. 643 E.T.).",
        explicacion: "Correcta. Agotado el emplazamiento para declarar sin que el obligado cumpla con su deber formal, la DIAN ejerce su facultad de determinar el tributo mediante Liquidación Oficial de Aforo dentro de los cinco años siguientes (Art. 717 E.T.)."
      },
      {
        id: "B",
        texto: "Exonerar de toda deuda al contribuyente por su buena fe al no haber sido requerido antes.",
        explicacion: "Incorrecta. El incumplimiento contumaz genera determinación de aforo con severas sanciones económicas."
      },
      {
        id: "C",
        texto: "Requerimiento Ordinario informal sin valor probatorio concediendo otros 3 años de espera.",
        explicacion: "Incorrecta. Dilata indebidamente el trámite y arriesga la caducidad de la facultad de aforo del Estado."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 715 a 717 y Art. 643",
    citaNormativa: "«Vencido el término de un mes del emplazamiento para declarar sin que se hubiere presentado la declaración, la administración procederá a aplicar la sanción por no declarar y a proferir la liquidación de aforo.» (Estatuto Tributario, Art. 717)."
  },
  {
    id: "an4_liq_03",
    nivel: "Técnico",
    ejeId: "liquidacion_impuestos",
    ejeNombre: "Liquidación de Impuestos Nacionales",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Requisitos de Validez de la Liquidación Oficial de Revisión (Art. 712 E.T.)",
    caso: "El Analista IV está apoyando la revisión de los requisitos formales de un proyecto de Liquidación Oficial de Revisión antes de someterlo a la firma del Jefe de División.",
    enunciado: "¿Cuál de los siguientes elementos es taxativamente obligatorio según el artículo 712 del Estatuto Tributario para evitar la nulidad del acto?",
    opciones: [
      {
        id: "A",
        texto: "Fecha y número del acto, periodo gravable, nombre o razón social y NIT del contribuyente, bases de cuantificación del tributo, monto de los tributos y sanciones determinadas, y explicación sucinta de las modificaciones.",
        explicacion: "Correcta. El artículo 712 del E.T. establece el contenido esencial de la liquidación oficial; la omisión de las bases, sanciones o motivación genera causal de nulidad procesal expresa (Art. 730 E.T.)."
      },
      {
        id: "B",
        texto: "El estado civil y la firma manuscrita de todos los vecinos del barrio del contribuyente.",
        explicacion: "Incorrecta. Es un requisito impertinente y ajeno al procedimiento tributario legal."
      },
      {
        id: "C",
        texto: "La estimación personal subjetiva de si el contribuyente cayó simpático al auditor.",
        explicacion: "Incorrecta. Vulnera el principio de legalidad y motivación objetiva de los actos administrativos."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 712 y Art. 730",
    citaNormativa: "«La liquidación de revisión deberá contener: fecha, período fiscal, nombre o razón social, NIT, bases de cuantificación del tributo, monto de tributos y sanciones, e indicación de los recursos procedentes.» (Estatuto Tributario, Art. 712)."
  },
  {
    id: "an4_liq_04",
    nivel: "Técnico",
    ejeId: "liquidacion_impuestos",
    ejeNombre: "Liquidación de Impuestos Nacionales",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Principio de Correspondencia entre Requerimiento Especial y Liquidación de Revisión",
    caso: "En un proyecto de Liquidación Oficial de Revisión, el profesional comisionado pretende adicionar un rechazo de costos por $200 millones que jamás fue planteado ni mencionado en el Requerimiento Especial notificado previamente.",
    enunciado: "Como Analista IV encargado de la revisión de antecedentes, ¿cuál es la alerta técnica que debe plantear?",
    opciones: [
      {
        id: "A",
        texto: "Advertir que se violaría el Principio de Correspondencia (Art. 711 E.T.), lo que acarrearía la nulidad de la Liquidación de Revisión respecto a los nuevos conceptos no incluidos en el Requerimiento Especial.",
        explicacion: "Correcta. El artículo 711 del Estatuto Tributario consagra el principio de correspondencia estricto: la Liquidación Oficial de Revisión solo puede recaer sobre los hechos y rubros planteados en el Requerimiento Especial, garantizando el derecho de defensa del administrado."
      },
      {
        id: "B",
        texto: "Aprobar el proyecto sin objeción porque la DIAN tiene derecho a cambiar de opinión en cualquier momento sin avisar.",
        explicacion: "Incorrecta. Violaría el debido proceso consagrado en el artículo 29 constitucional y causaría la nulidad del acto."
      },
      {
        id: "C",
        texto: "Eliminar el Requerimiento Especial del expediente para fingir que nunca existió.",
        explicacion: "Incorrecta. Constituye una falta gravísima y nulidad procesal insubsanable."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 711 y Art. 730 num. 4",
    citaNormativa: "«La liquidación de revisión deberá contraerse exclusivamente a la declaración del contribuyente y a los hechos que hubieren sido contemplados en el requerimiento especial o en su ampliación.» (Estatuto Tributario, Art. 711)."
  },
  {
    id: "an4_liq_05",
    nivel: "Técnico",
    ejeId: "liquidacion_impuestos",
    ejeNombre: "Liquidación de Impuestos Nacionales",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Término de Notificación de la Liquidación Oficial de Revisión (Art. 710 E.T.)",
    caso: "Un contribuyente radicó en tiempo su respuesta al Requerimiento Especial el 10 de marzo. El Analista IV lleva el control de términos del expediente para evitar la caducidad de la facultad de determinación.",
    enunciado: "¿Cuál es el término legal máximo con el que cuenta la DIAN para notificar en debida forma la Liquidación Oficial de Revisión?",
    opciones: [
      {
        id: "A",
        texto: "Seis (6) meses contados a partir del vencimiento del término para dar respuesta al Requerimiento Especial (o de su respuesta oportuna).",
        explicacion: "Correcta. El artículo 710 del Estatuto Tributario señala que dentro de los seis meses siguientes a la fecha de vencimiento del término para dar respuesta al Requerimiento Especial, la administración deberá proferir y notificar la liquidación de revisión; de no hacerlo, opera el silencio administrativo positivo."
      },
      {
        id: "B",
        texto: "Diez (10) días calendario improrrogables a partir de la visita del inspector.",
        explicacion: "Incorrecta. Confunde los plazos ordinarios de trámite con el término legal perentorio de determinación."
      },
      {
        id: "C",
        texto: "Diez (10) años sin límite alguno de tiempo.",
        explicacion: "Incorrecta. Los términos de determinación fiscal son de orden público y perentorios para garantizar seguridad jurídica."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 710",
    citaNormativa: "«Dentro de los seis (6) meses siguientes a la fecha de vencimiento del término para dar respuesta al requerimiento especial... la administración deberá practicar y notificar la liquidación de revisión.» (Estatuto Tributario, Art. 710)."
  },
  {
    id: "an4_liq_06",
    nivel: "Técnico",
    ejeId: "liquidacion_impuestos",
    ejeNombre: "Liquidación de Impuestos Nacionales",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Liquidación Provisional (Art. 764-1 del Estatuto Tributario)",
    caso: "Para un contribuyente de menores ingresos que no declaró el impuesto sobre la renta y cuyos ingresos brutos anuales provienen exclusivamente de compras con factura electrónica reportadas en el sistema, la DIAN busca una determinación rápida y simplificada.",
    enunciado: "¿Qué figura legal expedita permite determinar el tributo y las sanciones de forma provisional sin agotar el trámite ordinario de aforo?",
    opciones: [
      {
        id: "A",
        texto: "El procedimiento de Liquidación Provisional (Art. 764-1 E.T.), que constituye propuesta de determinación oficial notificada electrónicamente, la cual adquiere firmeza si no se objeta en el plazo legal.",
        explicacion: "Correcta. La Liquidación Provisional (Art. 764-1 E.T.) es un mecanismo ágil creado para contribuyentes con ingresos determinados por factura electrónica o exógena, permitiendo fijar el impuesto y sanciones de forma sumaria y simplificada."
      },
      {
        id: "B",
        texto: "Una conciliación verbal en un centro de arbitraje privado sin aplicar el Estatuto Tributario.",
        explicacion: "Incorrecta. La obligación tributaria sustancial no es transigible ni negociable fuera de las causales expresas de ley."
      },
      {
        id: "C",
        texto: "La prescripción oficiosa automática de la deuda sin cobro alguno.",
        explicacion: "Incorrecta. Desconoce las facultades de cobro y determinación tributaria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 764-1 a 764-6",
    citaNormativa: "«La administración tributaria podrá proferir Liquidación Provisional en la cual determine uno o varios tributos respecto de contribuyentes omisos o que hayan presentado declaraciones inexactas.» (Estatuto Tributario, Art. 764-1)."
  },

  // --- NORMATIVA CAMBIARIA (5 preguntas) ---
  {
    id: "an4_camb_01",
    nivel: "Técnico",
    ejeId: "normativa_cambiaria",
    ejeNombre: "Normativa Cambiaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Canalización de Divisas por Importación de Bienes a través del Mercado Cambiario",
    caso: "Al apoyar la verificación de operaciones de comercio exterior de una empresa textilera, el Analista IV constata que pagó una importación de $50.000 USD mediante entrega de fajos de billetes en efectivo a un intermediario en el extranjero sin registrar declaración de cambio.",
    enunciado: "De acuerdo con el Régimen Cambiario de la DIAN (Decreto Ley 2245 de 2011 y Res. Externa 1/2018 Banco de la República), ¿qué infracción se ha configurado?",
    opciones: [
      {
        id: "A",
        texto: "Infracción cambiaria por no canalizar el pago de la importación a través de los Intermediarios del Mercado Cambiario (IMC) o de cuentas de compensación debidamente registradas, haciéndose acreedora a sanción pecuniaria.",
        explicacion: "Correcta. Las importaciones de bienes son operaciones de obligatoria canalización a través del mercado cambiario formal (IMC o cuentas de compensación). Pagar en efectivo o por canales no autorizados viola el régimen cambiario y es sancionado por la DIAN (Decreto Ley 2245 de 2011)."
      },
      {
        id: "B",
        texto: "Ninguna infracción, porque en Colombia existe libertad absoluta para pagar importaciones en cualquier moneda y por cualquier medio informal sin declarar.",
        explicacion: "Incorrecta. El régimen cambiario colombiano es de orden público económico y regula estrictamente las operaciones de obligatoria canalización."
      },
      {
        id: "C",
        texto: "Es un asunto que solo le compete a la Cruz Roja Internacional y no a la DIAN.",
        explicacion: "Incorrecta. La DIAN tiene la competencia privativa del control y sanción del régimen cambiario en operaciones de comercio exterior."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto Ley 2245 de 2011 Art. 3 y Res. Externa 1 de 2018 Banco de la República",
    citaNormativa: "«Son de obligatoria canalización a través del mercado cambiario las importaciones y exportaciones de bienes... Su omisión constituye infracción cambiaria sancionada por la DIAN.» (Resolución Externa 1 de 2018)."
  },
  {
    id: "an4_camb_02",
    nivel: "Técnico",
    ejeId: "normativa_cambiaria",
    ejeNombre: "Normativa Cambiaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Competencia de Control Cambiario de la DIAN vs. Superintendencia Financiera",
    caso: "Un ciudadano es requerido para explicar una operación de endeudamiento externo contratada para la adquisición de maquinaria industrial importada que no fue informada al Banco de la República.",
    enunciado: "¿Cuál es el ámbito de competencia de la DIAN en materia del control del régimen de cambios internacionales?",
    opciones: [
      {
        id: "A",
        texto: "Controlar y sancionar las infracciones cambiarias derivadas de operaciones de importación y exportación de bienes y servicios, gastos asociados, financiación en moneda extranjera de comercio exterior y tráfico de divisas en aduanas.",
        explicacion: "Correcta. El Decreto Ley 2245 de 2011 y el Decreto 1742 de 2020 delimitan la competencia de la DIAN al régimen cambiario en materia de comercio exterior, endeudamiento vinculado al mismo y control aduanero de divisas."
      },
      {
        id: "B",
        texto: "Vigilar el funcionamiento de la Bolsa de Valores y fijar la tasa de interés bancaria de los bancos comerciales.",
        explicacion: "Incorrecta. Es competencia de la Superintendencia Financiera de Colombia y la Junta Directiva del Banco de la República."
      },
      {
        id: "C",
        texto: "Regular el precio del transporte público urbano en las ciudades capitales.",
        explicacion: "Incorrecta. Competencia de las autoridades de tránsito y transporte municipal."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto Ley 2245 de 2011 Art. 1 y Decreto 1742 de 2020 Art. 2",
    citaNormativa: "«La DIAN es competente para adelantar el control, investigación y sanción de las infracciones al régimen de cambios en operaciones de importación, exportación y operaciones conexas.» (Decreto Ley 2245 de 2011)."
  },
  {
    id: "an4_camb_03",
    nivel: "Técnico",
    ejeId: "normativa_cambiaria",
    ejeNombre: "Normativa Cambiaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Declaración Aduanera de Ingreso o Salida de Dinero en Efectivo o Títulos Representativos",
    caso: "En el filtro de control de viajeros internacionales del aeropuerto, se intercepta a un pasajero con $25.000 dólares estadounidenses en efectivo en su equipaje de mano que no diligenció ni presentó la Declaración de Aduanas correspondiente.",
    enunciado: "De acuerdo con el régimen cambiario y aduanero, ¿cuál es la medida cautelar y sancionatoria inmediata?",
    opciones: [
      {
        id: "A",
        texto: "Retener provisionalmente el dinero en exceso de los 10.000 USD y proferir el Acta de Retención de Divisas, iniciando el procedimiento sancionatorio cambiario que contempla una sanción equivalente al porcentaje del valor no declarado.",
        explicacion: "Correcta. Toda persona que ingrese o saque del país divisas o títulos por un monto superior a 10.000 USD está obligada a declararlo en el formulario aduanero oficial. La omisión o falsedad da lugar a la retención preventiva y sanción pecuniaria (Decreto Ley 2245 de 2011)."
      },
      {
        id: "B",
        texto: "Felicitar al viajero y permitirle abordar sin levantar ningún acta administrativa.",
        explicacion: "Incorrecta. Incurre en omisión de funciones y encubrimiento de posible contrabando de divisas."
      },
      {
        id: "C",
        texto: "Repartir el dinero entre los funcionarios presentes en el aeropuerto de manera informal.",
        explicacion: "Incorrecta. Delito de peculado por apropiación y cohecho propio."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto Ley 2245 de 2011 Art. 3 num. 22 y Res. Externa 1 de 2018 Banco de la República",
    citaNormativa: "«La no presentación de la declaración de aduanas al ingresar o egresar divisas o títulos representativos por valor superior a 10.000 USD dará lugar a su retención y sanción cambiaria.» (Decreto Ley 2245 de 2011)."
  },
  {
    id: "an4_camb_04",
    nivel: "Técnico",
    ejeId: "normativa_cambiaria",
    ejeNombre: "Normativa Cambiaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Obligación de Conservación de Documentos y Declaraciones de Cambio",
    caso: "Una sociedad investigada por operaciones cambiarias de exportación de café argumenta que botó los comprobantes de egreso, formularios de canalización y declaraciones de cambio porque la operación ocurrió hace dos años.",
    enunciado: "¿Cuál es el término legal durante el cual los residentes están obligados a conservar los soportes de sus operaciones de cambio?",
    opciones: [
      {
        id: "A",
        texto: "Mínimo tres (3) años contados a partir del momento en que se realizó la operación, debiendo exhibirlos cuando la autoridad de control cambiario de la DIAN lo requiera.",
        explicacion: "Correcta. La Circular Reglamentaria Externa DCIN-83 del Banco de la República y la normativa cambiaria obligan a conservar los documentos que acrediten el monto, origen y destino de las divisas por al menos tres años para efectos del control de la DIAN."
      },
      {
        id: "B",
        texto: "Treinta (30) días calendario contados desde la firma del cheque.",
        explicacion: "Incorrecta. Un plazo tan corto haría inoperante la facultad de fiscalización y auditoría del Estado."
      },
      {
        id: "C",
        texto: "Cien (100) años sin posibilidad de destrucción bajo ninguna circunstancia.",
        explicacion: "Incorrecta. Plazo desproporcionado no contemplado en la normativa financiera ni mercantil colombiana."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Circular Reglamentaria Externa DCIN-83 y Decreto Ley 2245 de 2011 Art. 3",
    citaNormativa: "«Los residentes deberán conservar los documentos que acrediten el monto, condiciones y demás características de las operaciones de cambio por un término mínimo de tres (3) años.» (Circular DCIN-83)."
  },
  {
    id: "an4_camb_05",
    nivel: "Técnico",
    ejeId: "normativa_cambiaria",
    ejeNombre: "Normativa Cambiaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Procedimiento Sancionatorio Cambiario: Pliego de Cargos y Descargos",
    caso: "El grupo de control cambiario proyecta un acto administrativo para iniciar formalmente el proceso sancionatorio contra un importador que no canalizó divisas en el plazo legal.",
    enunciado: "¿Cuál es el acto administrativo mediante el cual se formulan los cargos y cuál es el término legal del investigado para presentar sus descargos según el Decreto Ley 2245 de 2011?",
    opciones: [
      {
        id: "A",
        texto: "Mediante Auto que formula Pliego de Cargos, disponiendo el investigado de un plazo de un (1) mes contado a partir de su notificación para responder y aportar pruebas.",
        explicacion: "Correcta. El procedimiento sancionatorio cambiario de la DIAN inicia formalmente con la notificación del Pliego de Cargos, otorgando al administrado el término legal de un mes para ejercer su derecho de defensa y contradicción (Decreto Ley 2245 de 2011)."
      },
      {
        id: "B",
        texto: "Mediante llamada telefónica informal concediendo 24 horas para consignar en una cuenta personal.",
        explicacion: "Incorrecta. Vulnera flagrantemente las garantías del debido proceso administrativo y tipifica extorsión."
      },
      {
        id: "C",
        texto: "Mediante sentencia judicial de última instancia dictada por el Consejo de Estado.",
        explicacion: "Incorrecta. Confunde la vía administrativa sancionatoria de la DIAN con el control judicial contencioso."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto Ley 2245 de 2011 Art. 12 y 13",
    citaNormativa: "«El procedimiento administrativo sancionatorio cambiario se iniciará mediante la formulación de pliego de cargos... El investigado dispondrá de un mes para responder y solicitar pruebas.» (Decreto Ley 2245 de 2011)."
  },

  // --- OBLIGACIONES FORMALES Y SUSTANCIALES EN MATERIA TRIBUTARIA (Pregunta 1 de 7) ---
  {
    id: "an4_oblg_01",
    nivel: "Técnico",
    ejeId: "obligaciones_tributarias",
    ejeNombre: "Obligaciones Formales y Sustanciales en Materia Tributaria",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Distinción entre Obligación Tributaria Sustancial y Formal",
    caso: "Durante una jornada de orientación a usuarios, un ciudadano manifiesta que como su empresa arrojó pérdidas contables y no debe pagar impuesto de renta (saldo a pagar cero), no tiene ninguna obligación de presentar la declaración tributaria.",
    enunciado: "Desde la doctrina tributaria y la normativa vigente, ¿cómo debe explicar el Analista IV esta situación?",
    opciones: [
      {
        id: "A",
        texto: "Aclarar que la obligación sustancial es el pago efectivo del tributo, mientras que la obligación formal de declarar es autónoma e independiente, debiendo presentarse oportunamente la declaración aun cuando el saldo a pagar sea cero o arroje saldo a favor.",
        explicacion: "Correcta. El artículo 1 del Estatuto Tributario y la jurisprudencia constitucional señalan que las obligaciones formales (declarar, facturar, informar) son autónomas de la obligación sustancial de pago; no generar impuesto no exonera del deber formal de declarar si se superan los topes legales."
      },
      {
        id: "B",
        texto: "Confirmar la afirmación del ciudadano y decirle que nunca más vuelva a declarar renta si no tiene dinero.",
        explicacion: "Incorrecta. Induce al error al contribuyente y causaría que se le impongan sanciones millonarias por extemporaneidad o no declarar."
      },
      {
        id: "C",
        texto: "Cobrarle de inmediato un millón de pesos en efectivo por la asesoría prestada.",
        explicacion: "Incorrecta. La orientación técnica prestada por los servidores públicos de la DIAN es gratuita y oficial."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 1 y Art. 591",
    citaNormativa: "«La obligación tributaria sustancial se origina al realizarse el presupuesto previsto en la ley como generador del impuesto... Las obligaciones formales facilitan su control y son de obligatorio cumplimiento.» (Estatuto Tributario, Art. 1)."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ANALISTA_BATCH_1 };
}
