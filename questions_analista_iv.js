// questions_analista_iv.js - Banco Maestro de Casos de Juicio Situacional (PJS) para ANALISTA IV - DIAN 2676
// Alineado con el Manual de Funciones Ficha AT-FL-2010 y los Indicadores Oficiales de la Convocatoria CNSC (OPEC 236760)
// Nivel: Técnico | Código: 204 | Grado: 04 | Total: 252 Preguntas con Cita Textual de la Norma

const QUESTION_BANK_ANALISTA = [
  {
    "id": "an4_estruc_01",
    "nivel": "Técnico",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Competencias de la División de Fiscalización y Liquidación Seccional",
    "caso": "Como Analista IV adscrito al Grupo Interno de Trabajo de Fiscalización de una Dirección Seccional, usted recibe un expediente en el que se ha vencido el término de respuesta a un Requerimiento Especial y se requiere proyectar el acto oficial de determinación.",
    "enunciado": "Conforme a la estructura funcional de la DIAN (Decreto 1742 de 2020), ¿cuál es el acto administrativo definitivo que corresponde proyectar a la dependencia de Fiscalización y Liquidación?",
    "opciones": [
      {
        "id": "A",
        "texto": "La Liquidación Oficial de Revisión, en la cual se modifican oficialmente los valores de la declaración tributaria investigada.",
        "explicacion": "Correcta. En la estructura funcional seccional (Decreto 1742 de 2020), la División de Fiscalización y Liquidación es competente para proferir la Liquidación Oficial de Revisión una vez surtido el Requerimiento Especial y vencido el plazo legal (Art. 710 E.T.)."
      },
      {
        "id": "B",
        "texto": "El Mandamiento de Pago coactivo con orden de embargo de cuentas bancarias.",
        "explicacion": "Incorrecta. El mandamiento de pago es competencia exclusiva de la División de Cobranzas y requiere un título ejecutivo en firme."
      },
      {
        "id": "C",
        "texto": "Una Resolución de Sanción Directa sin motivación técnica ni antecedentes probatorios.",
        "explicacion": "Incorrecta. Genera nulidad absoluta por violación flagrante del debido proceso y falsa motivación."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020 Art. 38 y Estatuto Tributario Art. 710",
    "citaNormativa": "«Corresponde a las Divisiones de Fiscalización y Liquidación de las Direcciones Seccionales adelantar las investigaciones y proferir los actos de determinación oficial de tributos y sanciones.» (Decreto 1742 de 2020)."
  },
  {
    "id": "an4_estruc_02",
    "nivel": "Técnico",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Nivel Central vs. Direcciones Seccionales: Competencia en Doctrina y Apoyo Operativo",
    "caso": "Durante una diligencia de inspección contable, el contribuyente presenta un memorando firmado por un auditor de otra ciudad alegando que su criterio exonera a la empresa de retención en la fuente.",
    "enunciado": "De acuerdo con el orden jerárquico y funcional de la DIAN, ¿cómo debe proceder el Analista IV ante dicho documento?",
    "opciones": [
      {
        "id": "A",
        "texto": "Informar al profesional comisionado que los memorandos internos de auditoría no constituyen doctrina oficial obligatoria, rigiéndose únicamente por los Conceptos de la Dirección de Gestión Jurídica del Nivel Central.",
        "explicacion": "Correcta. La doctrina oficial de la DIAN vinculante para sus funcionarios radica de manera exclusiva y centralizada en la Dirección de Gestión Jurídica (Subdirección de Normativa y Doctrina), no en conceptos o memorandos seccionales aislados."
      },
      {
        "id": "B",
        "texto": "Aceptar de inmediato el criterio del auditor sin consultar la normativa ni informar al profesional líder de la diligencia.",
        "explicacion": "Incorrecta. Desconoce la jerarquía normativa institucional y vulnera el principio de legalidad tributaria."
      },
      {
        "id": "C",
        "texto": "Cerrar el expediente de investigación y archivar todas las pruebas recaudadas.",
        "explicacion": "Incorrecta. Incurre en omisión indebida de funciones y obstaculiza el ejercicio de fiscalización del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020 Art. 32 y Ley 2010 de 2019 Art. 131",
    "citaNormativa": "«Los conceptos emitidos por la Dirección de Gestión Jurídica de la DIAN constituyen la única interpretación oficial vinculante para los empleados de la Entidad.» (Ley 2010 de 2019, Art. 131)."
  },
  {
    "id": "an4_estruc_03",
    "nivel": "Técnico",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Articulación entre Operación Aduanera y Fiscalización en el Nivel Técnico",
    "caso": "Un Analista IV es asignado para apoyar operativamente una diligencia conjunta en zona primaria aduanera donde se detecta mercancía no declarada en el manifiesto de carga.",
    "enunciado": "Conforme a las competencias seccionales aduaneras, ¿cuál es la dependencia responsable de proferir el Acta de Aprehensión y custodiar la mercancía en el recinto de depósito?",
    "opciones": [
      {
        "id": "A",
        "texto": "La División de Operación Aduanera / Fiscalización Aduanera de la Dirección Seccional competente con jurisdicción en el lugar de arribo.",
        "explicacion": "Correcta. El control aduanero en zona primaria y la medida cautelar de aprehensión corresponden a la dependencia operativa aduanera/fiscalización seccional dentro de su jurisdicción territorial (Decreto 1742 de 2020 y Decreto 920 de 2023)."
      },
      {
        "id": "B",
        "texto": "La Subdirección Administrativa y Financiera del Nivel Central en Bogotá.",
        "explicacion": "Incorrecta. Esta subdirección maneja la logística interna y presupuesto institucional, careciendo de facultades de policía aduanera territorial."
      },
      {
        "id": "C",
        "texto": "La empresa de transporte marítimo privado responsable de la carga.",
        "explicacion": "Incorrecta. Las funciones de control aduanero y aprehensión son potestades exclusivas del Estado a través de la DIAN."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020 Art. 52 y Decreto 920 de 2023 Art. 65",
    "citaNormativa": "«Corresponde a las Direcciones Seccionales con competencia aduanera ejercer el control previo, simultáneo y posterior, aplicando las medidas cautelares de aprehensión e inmovilización.» (Decreto 920 de 2023)."
  },
  {
    "id": "an4_mision_01",
    "nivel": "Técnico",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Objetivo Superior de la DIAN y Orden Público Económico",
    "caso": "En una charla de inducción institucional, se le consulta a un Analista IV sobre el rol específico del nivel técnico en el cumplimiento de los fines esenciales de la DIAN.",
    "enunciado": "¿Cuál de las siguientes afirmaciones define con exactitud la contribución misional del empleo técnico de Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Prestar apoyo técnico, operativo y probatorio riguroso en las investigaciones y diligencias para asegurar la recaudación oportuna y reprimir la evasión, contrabando e infracciones cambiarias, protegiendo el orden público económico.",
        "explicacion": "Correcta. El propósito principal del Analista IV (AT-FL-2010) es soportar técnicamente la fiscalización para garantizar la seguridad fiscal del Estado y el cumplimiento tributario, aduanero y cambiario (Decreto 1742 de 2020, Art. 2)."
      },
      {
        "id": "B",
        "texto": "Emitir leyes en el Congreso para condonar deudas a grandes contribuyentes morosos.",
        "explicacion": "Incorrecta. La función legislativa corresponde al Congreso; la DIAN es una entidad de la rama ejecutiva que administra y recauda tributos."
      },
      {
        "id": "C",
        "texto": "Negociar acuerdos informales de exoneración de impuestos a cambio de agilizar trámites personales.",
        "explicacion": "Incorrecta. Constituye una conducta corrupta y delictiva tipificada en el Código Penal y sancionada disciplinariamente."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1742 de 2020, Art. 2 y Ficha Técnica AT-FL-2010",
    "citaNormativa": "«La DIAN tiene por objeto garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional mediante la administración y el debido control tributario, aduanero y cambiario.» (Decreto 1742 de 2020)."
  },
  {
    "id": "an4_mision_02",
    "nivel": "Técnico",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Facilitación del Comercio Exterior y Control Simultáneo",
    "caso": "Un usuario aduanero acude a la ventanilla técnica de la DIAN preocupado por el tiempo de inspección física de una importación de insumos médicos perecederos.",
    "enunciado": "De acuerdo con el principio misional de facilitación del comercio legítimo sin descuidar el control, ¿cuál debe ser la orientación técnica del Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Verificar la correcta radicación de la solicitud y tramitar con celeridad prioritaria ante los inspectores comisionados la práctica de la diligencia física conforme a las guías de mercancía perecedera.",
        "explicacion": "Correcta. La DIAN equilibra el control riguroso con la facilitación logística, dando trámite ágil a mercancías especiales o perecederas para no perjudicar la competitividad del comercio exterior legítimo."
      },
      {
        "id": "B",
        "texto": "Negar cualquier orientación y manifestarle al usuario que la DIAN no tiene interés en la conservación de la mercancía.",
        "explicacion": "Incorrecta. Vulnera los principios de servicio al ciudadano, celeridad y la vocación misional de facilitación de la Entidad."
      },
      {
        "id": "C",
        "texto": "Firmar unilateralmente el levante automático de la mercancía sin que el inspector designado haya realizado la revisión física.",
        "explicacion": "Incorrecta. Excede las competencias técnicas y comete una falta gravísima al omitir el procedimiento de inspección ordenado por el sistema de gestión de riesgos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019 Art. 185 y Decreto 1742 de 2020 Art. 2",
    "citaNormativa": "«La administración aduanera facilitará las operaciones de comercio exterior legítimo garantizando la celeridad en la inspección de mercancías perecederas sin perjuicio de las medidas de control fiscal.» (Decreto 1165 de 2019)."
  },
  {
    "id": "an4_mision_03",
    "nivel": "Técnico",
    "ejeId": "misionalidad",
    "ejeNombre": "Misionalidad de la DIAN",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Seguridad Fiscal y Lucha Integral contra el Contrabando",
    "caso": "Durante un operativo de control de mercancías extranjeras en establecimientos abiertos al público, se detectan licores y cigarrillos sin estampillas departamentales ni declaraciones de importación que acrediten su legal ingreso al país.",
    "enunciado": "¿Cuál es la finalidad misional inmediata de la medida cautelar que el equipo técnico debe apoyar en este procedimiento?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprehender la mercancía para salvaguardar el orden público económico nacional, proteger la salud pública y asegurar el recaudo de los tributos aduaneros evadidos.",
        "explicacion": "Correcta. El control al contrabando de mercancías sensibles cumple una doble función misional: defender los recursos de la salud/educación y proteger la industria legal frente a la competencia desleal."
      },
      {
        "id": "B",
        "texto": "Permitir la venta de la mercancía siempre que el comerciante pague una cuota en efectivo no oficial al equipo técnico.",
        "explicacion": "Incorrecta. Constituye cohecho, concusión y favorecimiento de contrabando, sancionables penalmente."
      },
      {
        "id": "C",
        "texto": "Devolver la mercancía de inmediato sin levantar acta alguna por tratarse de un negocio minorista.",
        "explicacion": "Incorrecta. La normativa aduanera exige la retención y aprehensión de mercancías que carezcan de prueba de legal introducción, sin importar el volumen."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1762 de 2015 (Ley Anticontrabando) y Decreto 920 de 2023",
    "citaNormativa": "«El Estado colombiano, a través de la DIAN y autoridades de control, reprimirá el contrabando de bienes sujetos al impuesto al consumo y aranceles como imperativo de seguridad fiscal.» (Ley 1762 de 2015)."
  },
  {
    "id": "an4_doc_01",
    "nivel": "Técnico",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad de Expedientes",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reglas Oficiales de Foliación en Expedientes de Fiscalización",
    "caso": "A un Analista IV se le encomienda organizar y foliar un expediente de investigación tributaria compuesto por 180 documentos, incluyendo pruebas contables, extractos bancarios y correspondencia externa.",
    "enunciado": "De acuerdo con el Acuerdo 002 de 2014 del Archivo General de la Nación (AGN), ¿cuál es la regla técnica correcta para la foliación del expediente?",
    "opciones": [
      {
        "id": "A",
        "texto": "Numerar de manera consecutiva en la esquina superior derecha de la cara recta del folio, con lápiz de mina negra suave (HB o B), de 1 en adelante en orden cronológico ascendente, sin tachones ni enmendaduras.",
        "explicacion": "Correcta. El Acuerdo AGN 002 de 2014 establece que la foliación debe realizarse en la esquina superior derecha de la cara recta con lápiz suave (HB o B), de manera consecutiva y respetando el orden cronológico del expediente administrativo."
      },
      {
        "id": "B",
        "texto": "Foliar con marcador indeleble rojo en la esquina inferior izquierda de todas las hojas tanto al derecho como al reverso.",
        "explicacion": "Incorrecta. El uso de tintas líquidas o marcadores puede deteriorar el papel y altera el estándar técnico archivístico nacional."
      },
      {
        "id": "C",
        "texto": "Asignar números repetidos con letras (ej: 15A, 15B) cada vez que llegue un documento nuevo para no cambiar el total.",
        "explicacion": "Incorrecta. La norma técnica prohíbe folios bis, alfanuméricos o subfoliaciones, salvo correcciones expresas autorizadas en acta de archivo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo 002 de 2014 AGN y Manual de Gestión Documental DIAN",
    "citaNormativa": "«La foliación se efectuará en la esquina superior derecha de la cara recta del folio en el sentido del texto, de manera legible, sin enmendaduras, utilizando lápiz de mina negra tipo HB o B.» (Acuerdo AGN 002 de 2014)."
  },
  {
    "id": "an4_doc_02",
    "nivel": "Técnico",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad de Expedientes",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Trazabilidad de Expedientes Electrónicos e Híbridos",
    "caso": "En el sistema de gestión documental electrónico de la DIAN, un funcionario advierte que un anexo probatorio aportado en PDF por un contribuyente no coincide con el índice electrónico del expediente digital.",
    "enunciado": "Como Analista IV encargado de la trazabilidad documental, ¿cuál es el procedimiento técnico debido?",
    "opciones": [
      {
        "id": "A",
        "texto": "Verificar la firma digital y los metadatos del documento, actualizar el índice electrónico del expediente registrando la fecha, hora, número de folios y resumen del contenido para garantizar su plena integridad probatoria.",
        "explicacion": "Correcta. La Ley 594 de 2000 y las normas de expediente electrónico exigen la estricta concordancia entre el índice electrónico, los metadatos y los documentos que lo conforman, asegurando inalterabilidad y cadena de custodia."
      },
      {
        "id": "B",
        "texto": "Eliminar el archivo PDF del sistema para evitar que el contribuyente pueda probar sus descargos.",
        "explicacion": "Incorrecta. Constituye ocultamiento o destrucción de documento público, delito tipificado en el Código Penal colombiano."
      },
      {
        "id": "C",
        "texto": "Dejar el expediente sin corregir argumentando que en los archivos digitales el índice carece de validez legal.",
        "explicacion": "Incorrecta. El índice electrónico es el documento rector que garantiza la trazabilidad y foliación virtual del expediente."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 594 de 2000 y Decreto 2609 de 2012 Art. 21 (Gestión de Documentos Electrónicos)",
    "citaNormativa": "«Los expedientes electrónicos deberán contar con un índice electrónico firmado digitalmente que garantice la autenticidad, integridad y trazabilidad de los documentos que lo conforman.» (Decreto 2609 de 2012)."
  },
  {
    "id": "an4_doc_03",
    "nivel": "Técnico",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad de Expedientes",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reserva Legal de los Expedientes de Fiscalización Tributaria",
    "caso": "Un tercero particular que no es parte procesal ni apoderado en un expediente de liquidación oficial de revisión solicita copia completa de las declaraciones de renta y extractos bancarios del contribuyente investigado.",
    "enunciado": "¿Cuál es la respuesta técnica y legal que debe proyectar el Analista IV conforme al Estatuto Tributario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la entrega de copias motivando la respuesta en el carácter de reserva legal que ampara las declaraciones tributarias y los documentos recaudados en fiscalización, de conformidad con el artículo 583 del Estatuto Tributario.",
        "explicacion": "Correcta. Las declaraciones tributarias y los expedientes de fiscalización están amparados por reserva legal estricta (Art. 583 E.T.); solo pueden ser examinados por el contribuyente, su apoderado o autoridades judiciales autorizadas."
      },
      {
        "id": "B",
        "texto": "Entregar copias simples de inmediato amparándose en el principio general de acceso a la información pública.",
        "explicacion": "Incorrecta. Viola la reserva tributaria y los derechos fundamentales de hábeas data e intimidad del contribuyente investigado."
      },
      {
        "id": "C",
        "texto": "Cobrar una tarifa personal en efectivo para entregar el expediente de manera extraoficial.",
        "explicacion": "Incorrecta. Delito de cohecho y violación de reserva procesal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 583 y Ley 1712 de 2014 Art. 19",
    "citaNormativa": "«La información relativa a las bases gravables y a la determinación privada de los impuestos que figuren en las declaraciones tributarias tendrá el carácter de información reservada.» (Estatuto Tributario, Art. 583)."
  },
  {
    "id": "an4_doc_04",
    "nivel": "Técnico",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad de Expedientes",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Tabla de Retención Documental (TRD) y Transferencias Primarias",
    "caso": "En el archivo de gestión de la División de Fiscalización se acumulan expedientes de investigaciones que culminaron con Liquidación Oficial ejecutoriada hace 5 años y su pago total está confirmado.",
    "enunciado": "De acuerdo con la Tabla de Retención Documental (TRD) de la DIAN, ¿qué acción técnica corresponde adelantar?",
    "opciones": [
      {
        "id": "A",
        "texto": "Preparar el inventario documental mediante el Formato Único de Inventario Documental (FUID) y gestionar la transferencia primaria al Archivo Central de la Entidad según los tiempos de retención estipulados.",
        "explicacion": "Correcta. La TRD determina los tiempos de permanencia en el archivo de gestión y ordena la transferencia primaria al archivo central mediante el FUID (Acuerdo AGN 042 de 2002), conservando el patrimonio documental de la DIAN."
      },
      {
        "id": "B",
        "texto": "Proceder a quemar o reciclar inmediatamente las carpetas en el patio de la seccional sin levantar inventario.",
        "explicacion": "Incorrecta. Destruir documentos públicos sin cumplir los procedimientos de la TRD acarrea responsabilidades disciplinarias y penales gravísimas."
      },
      {
        "id": "C",
        "texto": "Llevarse los expedientes a la casa del funcionario para desocupar estantes en la oficina.",
        "explicacion": "Incorrecta. Los expedientes públicos deben permanecer bajo custodia estricta de las instalaciones oficiales autorizadas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 594 de 2000 Art. 24 y Acuerdo AGN 042 de 2002",
    "citaNormativa": "«Las transferencias documentarias primarias se realizarán con sujeción a las Tablas de Retención Documental y se formalizarán mediante inventarios técnicos.» (Acuerdo AGN 042 de 2002)."
  },
  {
    "id": "an4_doc_05",
    "nivel": "Técnico",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad de Expedientes",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Radicación y Comunicaciones Oficiales en el Proceso de Fiscalización",
    "caso": "Un contribuyente radica un recurso de reconsideración en el punto de contacto presencial. El Analista IV encargado de la ventanilla debe incorporar el documento al sistema institucional de correspondencia.",
    "enunciado": "¿Cuáles son los datos mínimos obligatorios que el sistema debe estampar en la radicación para garantizar su validez jurídica y probatoria?",
    "opciones": [
      {
        "id": "A",
        "texto": "Número consecutivo único de radicado, fecha y hora de recepción oficial, número de folios y anexos recibidos, y nombre o identificación del remitente.",
        "explicacion": "Correcta. El Acuerdo AGN 060 de 2001 exige que la radicación oficial consigne el consecutivo, fecha y hora exacta, cantidad de folios/anexos e identificación del interesado, fijando la certeza procesal del término legal."
      },
      {
        "id": "B",
        "texto": "Únicamente la firma con huella dactilar del vigilante de turno de la portería.",
        "explicacion": "Incorrecta. El vigilante no tiene la condición de funcionario de correspondencia oficial ni valida la radicación jurídica."
      },
      {
        "id": "C",
        "texto": "Asignar un número de radicación manual con lápiz sin registrar fecha ni hora.",
        "explicacion": "Incorrecta. Deja en indefensión probatoria al administrado y vulnera la seguridad jurídica de los términos administrativos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo 060 de 2001 AGN Art. 2 y 5 (Comunicaciones Oficiales)",
    "citaNormativa": "«La radicación es el procedimiento por el cual las entidades asignan un número consecutivo a las comunicaciones recibidas, dejando constancia de la fecha y hora de recibo, folios y anexos.» (Acuerdo AGN 060 de 2001)."
  },
  {
    "id": "an4_doc_06",
    "nivel": "Técnico",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad de Expedientes",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reconstrucción de Expedientes Tributarios Extraviados o Deteriorados",
    "caso": "Debido a una filtración de agua en el archivo, se deterioran varios folios correspondientes a un pliego de cargos notificado y su correspondiente respuesta por parte del contribuyente.",
    "enunciado": "De acuerdo con el Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA) y las directrices archivísticas, ¿cómo debe actuar el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Informar de inmediato al Jefe de División, levantar un acta de hechos sobre los folios afectados e iniciar el procedimiento de reconstrucción del expediente solicitando copias de los actos al sistema informático y a las partes.",
        "explicacion": "Correcta. El CPACA (Art. 126) y las directrices de AGN exigen levantar acta formal de pérdida o deterioro e iniciar el trámite de reconstrucción allegando copias existentes en bases de datos y en poder de los intervinientes."
      },
      {
        "id": "B",
        "texto": "Ocultar el incidente botando a la basura los folios mojados para que nadie se dé cuenta del daño.",
        "explicacion": "Incorrecta. Es una conducta dolosa que constituye destrucción de documento público y falta disciplinaria gravísima."
      },
      {
        "id": "C",
        "texto": "Reinventar el texto de las respuestas del contribuyente según su propia memoria sin cotejar archivos oficiales.",
        "explicacion": "Incorrecta. Configura falsedad en documento público y vulnera el derecho al debido proceso."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "CPACA Art. 126 y Ley 594 de 2000 Art. 26 (Reconstrucción de Expedientes)",
    "citaNormativa": "«Comprobada la pérdida o deterioro de un expediente administrativo, se ordenará su reconstrucción con las copias que reposen en los archivos o que aporten los interesados.» (CPACA, Art. 126)."
  },
  {
    "id": "an4_laft_01",
    "nivel": "Técnico",
    "ejeId": "lavado_activos_ros",
    "ejeNombre": "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Señales de Alerta de Operaciones Inusuales y Sospechosas",
    "caso": "Al clasificar información tributaria de una sociedad creada hace 3 meses con capital inicial de $2.000.000, el Analista IV detecta compras y facturas electrónicas de importación por más de $15.000 millones de pesos pagadas en efectivo a través de depósitos fraccionados.",
    "enunciado": "¿Cómo debe tipificarse preliminarmente este comportamiento en el marco del sistema SARLAFT/SIPLAFT institucional?",
    "opciones": [
      {
        "id": "A",
        "texto": "Como una Operación Inusual con altas señales de alerta de Operación Sospechosa de Lavado de Activos, por incoherencia patrimonial, volumen económico atípico y fraccionamiento financiero.",
        "explicacion": "Correcta. La desproporción entre la capacidad económica legal, la corta antigüedad y las transacciones multimillonarias en efectivo constituye una señal clásica de alerta de lavado de activos que amerita escalamiento técnico a la UIAF."
      },
      {
        "id": "B",
        "texto": "Como una operación empresarial normal que demuestra excelente emprendimiento comercial sin necesidad de reporte alguno.",
        "explicacion": "Incorrecta. Ignorar el perfil de alto riesgo y el fraccionamiento en efectivo atenta contra el deber legal de prevención del LA/FT."
      },
      {
        "id": "C",
        "texto": "Como un simple error de digitación en el RUT que no merece verificación técnica.",
        "explicacion": "Incorrecta. Desconoce la gravedad de los indicios de triangulación económica y lavado de dinero."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 526 de 1999 Art. 9 y 10, y Resoluciones DIAN sobre SARLAFT",
    "citaNormativa": "«Se entenderá por operación sospechosa aquella que por su número, cantidad o características no se enmarque en las pautas de normalidad del sector económico o no tenga justificación económica lícita.» (Ley 526 de 1999)."
  },
  {
    "id": "an4_laft_02",
    "nivel": "Técnico",
    "ejeId": "lavado_activos_ros",
    "ejeNombre": "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Reserva Absoluta del Reporte de Operaciones Sospechosas (ROS) a la UIAF",
    "caso": "Un Analista IV apoya la estructuración de un Reporte de Operación Sospechosa (ROS) con destino a la Unidad de Información y Análisis Financiero (UIAF). Un compañero de otra división le pregunta quién es el contribuyente reportado.",
    "enunciado": "De acuerdo con el artículo 40 de la Ley 526 de 1999, ¿cuál es el deber legal de confidencialidad del funcionario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Mantener reserva absoluta del ROS; está prohibido revelar a terceros o al propio interesado la existencia del reporte o la información remitida a la UIAF (prohibición de tipping-off).",
        "explicacion": "Correcta. El artículo 40 de la Ley 526 de 1999 establece la estricta reserva legal del ROS. Revelar su contenido o existencia acarrea graves sanciones penales y disciplinarias, y pone en riesgo la efectividad de la investigación estatal."
      },
      {
        "id": "B",
        "texto": "Contarle los detalles al compañero siempre que este prometa no divulgarlo en redes sociales.",
        "explicacion": "Incorrecta. Viola la reserva legal agravada del sistema antilavado de la Nación."
      },
      {
        "id": "C",
        "texto": "Llamar al contribuyente investigado para ofrecerle asesoría para justificar los fondos antes de que la UIAF intervenga.",
        "explicacion": "Incorrecta. Delito de concierto para delinquir y favorecimiento de lavado de activos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 526 de 1999 Art. 40 y Código Penal Art. 418",
    "citaNormativa": "«La información que reciba o envíe la UIAF sobre operaciones sospechosas está amparada por estricta reserva legal. Ninguna persona que conozca de ella podrá darla a conocer a terceros.» (Ley 526 de 1999, Art. 40)."
  },
  {
    "id": "an4_laft_03",
    "nivel": "Técnico",
    "ejeId": "lavado_activos_ros",
    "ejeNombre": "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Canalización de Denuncias por Fraude y Corrupción en Fiscalización",
    "caso": "A la bandeja del Analista IV llega una denuncia ciudadana anónima pero documentada con facturas falsas y cheques que demostrarían ventas millonarias simuladas para solicitar devoluciones improcedentes de IVA.",
    "enunciado": "Conforme al procedimiento institucional de la DIAN para el trámite de denuncias, ¿qué acción debe ejecutar el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Clasificar y validar preliminarmente la pertinencia de las pruebas aportadas, registrar la denuncia en el sistema de fiscalización y remitir el informe técnico al superior jerárquico para programar la investigación respectiva.",
        "explicacion": "Correcta. La función técnica (AT-FL-2010) asigna clasificar la información y analizar preliminarmente los insumos y denuncias recibidas, asegurando su incorporación formal al plan de fiscalización."
      },
      {
        "id": "B",
        "texto": "Descartar la denuncia de inmediato por el solo hecho de ser anónima, sin revisar la contundencia de las pruebas adjuntas.",
        "explicacion": "Incorrecta. Las denuncias anónimas con soporte probatorio serio y concreto deben ser evaluadas y tramitadas obligatoriamente."
      },
      {
        "id": "C",
        "texto": "Enviar las pruebas al correo personal del denunciado para exigirle explicaciones directas.",
        "explicacion": "Incorrecta. Vulnera la reserva y arruina la posibilidad de una investigación fiscal sorpresiva."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1474 de 2011 (Estatuto Anticorrupción) Art. 81 y Ficha AT-FL-2010",
    "citaNormativa": "«Las denuncias sobre fraudes al erario deberán ser analizadas y clasificadas con base en las evidencias aportadas, remitiéndolas a las dependencias de fiscalización competentes.» (Ley 1474 de 2011)."
  },
  {
    "id": "an4_laft_04",
    "nivel": "Técnico",
    "ejeId": "lavado_activos_ros",
    "ejeNombre": "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Detección de Empresas de Papel o Facturadores Ficticios",
    "caso": "Al revisar el domicilio fiscal de un proveedor reportado con compras masivas en la contabilidad de una empresa auditada, el Analista IV constata que en la dirección registrada funciona un lote baldío abandonado desde hace una década.",
    "enunciado": "¿Cuál es el trámite administrativo especial que debe impulsar el área de fiscalización ante este hallazgo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Documentar el hallazgo mediante acta de visita técnica con registro fotográfico e iniciar el trámite para declarar al proveedor como 'Proveedor Ficticio o Inexistente' conforme al artículo 671 del Estatuto Tributario.",
        "explicacion": "Correcta. La declaración de proveedor ficticio o insolvente (Art. 671 E.T.) sanciona a quienes simulan operaciones mercantiles facturando compras inexistentes, inhabilitándolos tributariamente y desconociendo costos y deducciones a los compradores."
      },
      {
        "id": "B",
        "texto": "Modificar de oficio la dirección en el RUT poniéndole la dirección particular del contador de la empresa auditada.",
        "explicacion": "Incorrecta. No subsana la simulación sustancial y contraviene el procedimiento de fiscalización probatoria."
      },
      {
        "id": "C",
        "texto": "Asumir que el lote baldío es una bodega subterránea válida y abstenerse de emitir reporte.",
        "explicacion": "Incorrecta. Faltaría a la diligencia debida y al deber de verificación en la investigación tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 671 (Sanción de Declaración de Proveedor Ficticio)",
    "citaNormativa": "«Serán declarados proveedores ficticios quienes facturen ventas o servicios simulados o inexistentes; esta declaración conllevará el rechazo de los costos y deducciones correspondientes.» (Estatuto Tributario, Art. 671)."
  },
  {
    "id": "an4_laft_05",
    "nivel": "Técnico",
    "ejeId": "lavado_activos_ros",
    "ejeNombre": "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Articulación DIAN - UIAF y Fiscalía en Delitos contra el Régimen Aduanero",
    "caso": "En una verificación aduanera técnica se comprueba que una red delictiva ingresó contenedores con textiles subfacturados en un 95% respecto a los precios de referencia internacionales, transfiriendo dividendos a paraísos fiscales no cooperantes.",
    "enunciado": "Además de proferir el acta de aprehensión aduanera, ¿cuál es la acción interinstitucional imperativa?",
    "opciones": [
      {
        "id": "A",
        "texto": "Compilar el informe técnico probatorio y remitirlo simultáneamente al oficial de cumplimiento institucional para reporte ROS a la UIAF y formular la respectiva denuncia penal ante la Fiscalía General de la Nación por contrabando y fraude aduanero.",
        "explicacion": "Correcta. El fraude aduanero y la subfacturación sistemática con triangulación en paraísos fiscales constituyen delitos fuente de lavado de activos, obligando a dar traslado inmediato a la Fiscalía y a la UIAF (Ley 1762 de 2015)."
      },
      {
        "id": "B",
        "texto": "Guardar silencio institucional y limitarse a cobrar una multa menor sin tocar los contenedores.",
        "explicacion": "Incorrecta. Omitir la denuncia de delitos conocidos en ejercicio del cargo público configura prevaricato por omisión."
      },
      {
        "id": "C",
        "texto": "Publicar los nombres de los investigados en redes sociales personales sin orden judicial.",
        "explicacion": "Incorrecta. Viola la reserva procesal y puede viciar las investigaciones penales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1762 de 2015 Art. 5 y Código de Procedimiento Penal Art. 67",
    "citaNormativa": "«Todo servidor público que tenga conocimiento de la comisión de una conducta punible que deba investigarse de oficio está en la obligación de denunciarla inmediatamente a la autoridad competente.» (Ley 906 de 2004, Art. 67)."
  },
  {
    "id": "an4_laft_06",
    "nivel": "Técnico",
    "ejeId": "lavado_activos_ros",
    "ejeNombre": "Lavado de Activos Financiación del Terrorismo Reporte de Operaciones Sospechosas y Denuncias",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inexistencia de Justificación Económica en Enajenación de Activos",
    "caso": "Una sociedad bajo investigación tributaria vende su edificio principal, avaluado comercialmente en $10.000 millones, a una persona natural insolvente por la suma de $100 millones, pagados en títulos ficticios sin trazabilidad bancaria.",
    "enunciado": "Bajo la óptica del control de operaciones sospechosas, ¿cuál es la conclusión técnica del Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Existe una notoria operación sospechosa tendiente a la distracción de activos para insolvencia tributaria fraudulenta y ocultamiento de bienes de origen ilícito, carente de razonabilidad económica.",
        "explicacion": "Correcta. La enajenación de activos sustanciales a precios irrisorios sin justificación mercantil o contable es una tipología de ocultamiento patrimonial y fraude que sustenta el reporte de alertas LAFT y medidas de aforo/fiscalización."
      },
      {
        "id": "B",
        "texto": "Es un acto de beneficencia privada en el que la DIAN no tiene ninguna competencia de análisis.",
        "explicacion": "Incorrecta. La ley tributaria castiga las transferencias ficticias por debajo del valor comercial (Art. 90 E.T.)."
      },
      {
        "id": "C",
        "texto": "Aprobar la escritura pública y reducir de oficio los impuestos de la empresa vendedora a cero.",
        "explicacion": "Incorrecta. Es contrario a la ley y constituiría complicidad en fraude al fisco nacional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 90 y Código Penal Art. 323 (Lavado de Activos)",
    "citaNormativa": "«Para efectos tributarios, el precio de enajenación no podrá ser inferior al costo comercial ni apartarse de los precios de mercado en más de un 15%.» (Estatuto Tributario, Art. 90)."
  },
  {
    "id": "an4_liq_01",
    "nivel": "Técnico",
    "ejeId": "liquidacion_impuestos",
    "ejeNombre": "Liquidación de Impuestos Nacionales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Liquidación Oficial de Corrección Aritmética (Art. 697 E.T.)",
    "caso": "Al revisar una declaración del Impuesto sobre la Renta presentada por un contribuyente, el Analista IV detecta que al sumar los renglones de costos procedentes ($500 millones) y deducciones ($300 millones), el declarante escribió en el total de costos y deducciones $900 millones en lugar de $800 millones.",
    "enunciado": "¿Cuál es el acto oficial que procede proyectar para corregir este error puramente matemático?",
    "opciones": [
      {
        "id": "A",
        "texto": "Una Liquidación Oficial de Corrección Aritmética conforme al artículo 697 del Estatuto Tributario, recalculando la base y aplicando la sanción del 30% del mayor valor a pagar (Art. 646 E.T.).",
        "explicacion": "Correcta. El artículo 697 del E.T. prevé la Liquidación de Corrección Aritmética cuando se cometen errores aritméticos en la declaración que originan un menor saldo a pagar o mayor saldo a favor, aplicando la sanción específica del artículo 646."
      },
      {
        "id": "B",
        "texto": "Una Liquidación Oficial de Aforo ordenando la clausura inmediata del establecimiento comercial.",
        "explicacion": "Incorrecta. El aforo solo procede cuando el contribuyente es omiso absoluto y no presentó declaración tributaria."
      },
      {
        "id": "C",
        "texto": "Archivar el expediente ignorando el error de $100 millones de pesos a favor del Estado.",
        "explicacion": "Incorrecta. Omitir el cobro del mayor valor y su sanción aritmética causa daño patrimonial al erario."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 697 y Art. 646",
    "citaNormativa": "«La administración tributaria podrá corregir aritméticamente las declaraciones tributarias de los contribuyentes, cuando se hayan cometido errores aritméticos en su liquidación.» (Estatuto Tributario, Art. 697)."
  },
  {
    "id": "an4_liq_02",
    "nivel": "Técnico",
    "ejeId": "liquidacion_impuestos",
    "ejeNombre": "Liquidación de Impuestos Nacionales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Liquidación Oficial de Aforo para Contribuyentes Omisos (Art. 717 E.T.)",
    "caso": "Un comerciante obligado a declarar el impuesto sobre las ventas (IVA) no presentó sus declaraciones durante los seis bimestres de un año gravable, a pesar de que la DIAN le notificó en debida forma el Emplazamiento para Declarar y se venció el término de un mes sin respuesta.",
    "enunciado": "¿Cuál es el paso legal siguiente que debe proyectar el equipo de Liquidación?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proyectar la Liquidación Oficial de Aforo, determinando el impuesto omitido con base en las compras electrónicas y extractos bancarios, e imponiendo la sanción por no declarar del 10% de las consignaciones o ingresos (Art. 643 E.T.).",
        "explicacion": "Correcta. Agotado el emplazamiento para declarar sin que el obligado cumpla con su deber formal, la DIAN ejerce su facultad de determinar el tributo mediante Liquidación Oficial de Aforo dentro de los cinco años siguientes (Art. 717 E.T.)."
      },
      {
        "id": "B",
        "texto": "Exonerar de toda deuda al contribuyente por su buena fe al no haber sido requerido antes.",
        "explicacion": "Incorrecta. El incumplimiento contumaz genera determinación de aforo con severas sanciones económicas."
      },
      {
        "id": "C",
        "texto": "Requerimiento Ordinario informal sin valor probatorio concediendo otros 3 años de espera.",
        "explicacion": "Incorrecta. Dilata indebidamente el trámite y arriesga la caducidad de la facultad de aforo del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 715 a 717 y Art. 643",
    "citaNormativa": "«Vencido el término de un mes del emplazamiento para declarar sin que se hubiere presentado la declaración, la administración procederá a aplicar la sanción por no declarar y a proferir la liquidación de aforo.» (Estatuto Tributario, Art. 717)."
  },
  {
    "id": "an4_liq_03",
    "nivel": "Técnico",
    "ejeId": "liquidacion_impuestos",
    "ejeNombre": "Liquidación de Impuestos Nacionales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Requisitos de Validez de la Liquidación Oficial de Revisión (Art. 712 E.T.)",
    "caso": "El Analista IV está apoyando la revisión de los requisitos formales de un proyecto de Liquidación Oficial de Revisión antes de someterlo a la firma del Jefe de División.",
    "enunciado": "¿Cuál de los siguientes elementos es taxativamente obligatorio según el artículo 712 del Estatuto Tributario para evitar la nulidad del acto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Fecha y número del acto, periodo gravable, nombre o razón social y NIT del contribuyente, bases de cuantificación del tributo, monto de los tributos y sanciones determinadas, y explicación sucinta de las modificaciones.",
        "explicacion": "Correcta. El artículo 712 del E.T. establece el contenido esencial de la liquidación oficial; la omisión de las bases, sanciones o motivación genera causal de nulidad procesal expresa (Art. 730 E.T.)."
      },
      {
        "id": "B",
        "texto": "El estado civil y la firma manuscrita de todos los vecinos del barrio del contribuyente.",
        "explicacion": "Incorrecta. Es un requisito impertinente y ajeno al procedimiento tributario legal."
      },
      {
        "id": "C",
        "texto": "La estimación personal subjetiva de si el contribuyente cayó simpático al auditor.",
        "explicacion": "Incorrecta. Vulnera el principio de legalidad y motivación objetiva de los actos administrativos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 712 y Art. 730",
    "citaNormativa": "«La liquidación de revisión deberá contener: fecha, período fiscal, nombre o razón social, NIT, bases de cuantificación del tributo, monto de tributos y sanciones, e indicación de los recursos procedentes.» (Estatuto Tributario, Art. 712)."
  },
  {
    "id": "an4_liq_04",
    "nivel": "Técnico",
    "ejeId": "liquidacion_impuestos",
    "ejeNombre": "Liquidación de Impuestos Nacionales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Principio de Correspondencia entre Requerimiento Especial y Liquidación de Revisión",
    "caso": "En un proyecto de Liquidación Oficial de Revisión, el profesional comisionado pretende adicionar un rechazo de costos por $200 millones que jamás fue planteado ni mencionado en el Requerimiento Especial notificado previamente.",
    "enunciado": "Como Analista IV encargado de la revisión de antecedentes, ¿cuál es la alerta técnica que debe plantear?",
    "opciones": [
      {
        "id": "A",
        "texto": "Advertir que se violaría el Principio de Correspondencia (Art. 711 E.T.), lo que acarrearía la nulidad de la Liquidación de Revisión respecto a los nuevos conceptos no incluidos en el Requerimiento Especial.",
        "explicacion": "Correcta. El artículo 711 del Estatuto Tributario consagra el principio de correspondencia estricto: la Liquidación Oficial de Revisión solo puede recaer sobre los hechos y rubros planteados en el Requerimiento Especial, garantizando el derecho de defensa del administrado."
      },
      {
        "id": "B",
        "texto": "Aprobar el proyecto sin objeción porque la DIAN tiene derecho a cambiar de opinión en cualquier momento sin avisar.",
        "explicacion": "Incorrecta. Violaría el debido proceso consagrado en el artículo 29 constitucional y causaría la nulidad del acto."
      },
      {
        "id": "C",
        "texto": "Eliminar el Requerimiento Especial del expediente para fingir que nunca existió.",
        "explicacion": "Incorrecta. Constituye una falta gravísima y nulidad procesal insubsanable."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 711 y Art. 730 num. 4",
    "citaNormativa": "«La liquidación de revisión deberá contraerse exclusivamente a la declaración del contribuyente y a los hechos que hubieren sido contemplados en el requerimiento especial o en su ampliación.» (Estatuto Tributario, Art. 711)."
  },
  {
    "id": "an4_liq_05",
    "nivel": "Técnico",
    "ejeId": "liquidacion_impuestos",
    "ejeNombre": "Liquidación de Impuestos Nacionales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Término de Notificación de la Liquidación Oficial de Revisión (Art. 710 E.T.)",
    "caso": "Un contribuyente radicó en tiempo su respuesta al Requerimiento Especial el 10 de marzo. El Analista IV lleva el control de términos del expediente para evitar la caducidad de la facultad de determinación.",
    "enunciado": "¿Cuál es el término legal máximo con el que cuenta la DIAN para notificar en debida forma la Liquidación Oficial de Revisión?",
    "opciones": [
      {
        "id": "A",
        "texto": "Seis (6) meses contados a partir del vencimiento del término para dar respuesta al Requerimiento Especial (o de su respuesta oportuna).",
        "explicacion": "Correcta. El artículo 710 del Estatuto Tributario señala que dentro de los seis meses siguientes a la fecha de vencimiento del término para dar respuesta al Requerimiento Especial, la administración deberá proferir y notificar la liquidación de revisión; de no hacerlo, opera el silencio administrativo positivo."
      },
      {
        "id": "B",
        "texto": "Diez (10) días calendario improrrogables a partir de la visita del inspector.",
        "explicacion": "Incorrecta. Confunde los plazos ordinarios de trámite con el término legal perentorio de determinación."
      },
      {
        "id": "C",
        "texto": "Diez (10) años sin límite alguno de tiempo.",
        "explicacion": "Incorrecta. Los términos de determinación fiscal son de orden público y perentorios para garantizar seguridad jurídica."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 710",
    "citaNormativa": "«Dentro de los seis (6) meses siguientes a la fecha de vencimiento del término para dar respuesta al requerimiento especial... la administración deberá practicar y notificar la liquidación de revisión.» (Estatuto Tributario, Art. 710)."
  },
  {
    "id": "an4_liq_06",
    "nivel": "Técnico",
    "ejeId": "liquidacion_impuestos",
    "ejeNombre": "Liquidación de Impuestos Nacionales",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Liquidación Provisional (Art. 764-1 del Estatuto Tributario)",
    "caso": "Para un contribuyente de menores ingresos que no declaró el impuesto sobre la renta y cuyos ingresos brutos anuales provienen exclusivamente de compras con factura electrónica reportadas en el sistema, la DIAN busca una determinación rápida y simplificada.",
    "enunciado": "¿Qué figura legal expedita permite determinar el tributo y las sanciones de forma provisional sin agotar el trámite ordinario de aforo?",
    "opciones": [
      {
        "id": "A",
        "texto": "El procedimiento de Liquidación Provisional (Art. 764-1 E.T.), que constituye propuesta de determinación oficial notificada electrónicamente, la cual adquiere firmeza si no se objeta en el plazo legal.",
        "explicacion": "Correcta. La Liquidación Provisional (Art. 764-1 E.T.) es un mecanismo ágil creado para contribuyentes con ingresos determinados por factura electrónica o exógena, permitiendo fijar el impuesto y sanciones de forma sumaria y simplificada."
      },
      {
        "id": "B",
        "texto": "Una conciliación verbal en un centro de arbitraje privado sin aplicar el Estatuto Tributario.",
        "explicacion": "Incorrecta. La obligación tributaria sustancial no es transigible ni negociable fuera de las causales expresas de ley."
      },
      {
        "id": "C",
        "texto": "La prescripción oficiosa automática de la deuda sin cobro alguno.",
        "explicacion": "Incorrecta. Desconoce las facultades de cobro y determinación tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 764-1 a 764-6",
    "citaNormativa": "«La administración tributaria podrá proferir Liquidación Provisional en la cual determine uno o varios tributos respecto de contribuyentes omisos o que hayan presentado declaraciones inexactas.» (Estatuto Tributario, Art. 764-1)."
  },
  {
    "id": "an4_camb_01",
    "nivel": "Técnico",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Canalización de Divisas por Importación de Bienes a través del Mercado Cambiario",
    "caso": "Al apoyar la verificación de operaciones de comercio exterior de una empresa textilera, el Analista IV constata que pagó una importación de $50.000 USD mediante entrega de fajos de billetes en efectivo a un intermediario en el extranjero sin registrar declaración de cambio.",
    "enunciado": "De acuerdo con el Régimen Cambiario de la DIAN (Decreto Ley 2245 de 2011 y Res. Externa 1/2018 Banco de la República), ¿qué infracción se ha configurado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Infracción cambiaria por no canalizar el pago de la importación a través de los Intermediarios del Mercado Cambiario (IMC) o de cuentas de compensación debidamente registradas, haciéndose acreedora a sanción pecuniaria.",
        "explicacion": "Correcta. Las importaciones de bienes son operaciones de obligatoria canalización a través del mercado cambiario formal (IMC o cuentas de compensación). Pagar en efectivo o por canales no autorizados viola el régimen cambiario y es sancionado por la DIAN (Decreto Ley 2245 de 2011)."
      },
      {
        "id": "B",
        "texto": "Ninguna infracción, porque en Colombia existe libertad absoluta para pagar importaciones en cualquier moneda y por cualquier medio informal sin declarar.",
        "explicacion": "Incorrecta. El régimen cambiario colombiano es de orden público económico y regula estrictamente las operaciones de obligatoria canalización."
      },
      {
        "id": "C",
        "texto": "Es un asunto que solo le compete a la Cruz Roja Internacional y no a la DIAN.",
        "explicacion": "Incorrecta. La DIAN tiene la competencia privativa del control y sanción del régimen cambiario en operaciones de comercio exterior."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 2245 de 2011 Art. 3 y Res. Externa 1 de 2018 Banco de la República",
    "citaNormativa": "«Son de obligatoria canalización a través del mercado cambiario las importaciones y exportaciones de bienes... Su omisión constituye infracción cambiaria sancionada por la DIAN.» (Resolución Externa 1 de 2018)."
  },
  {
    "id": "an4_camb_02",
    "nivel": "Técnico",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Competencia de Control Cambiario de la DIAN vs. Superintendencia Financiera",
    "caso": "Un ciudadano es requerido para explicar una operación de endeudamiento externo contratada para la adquisición de maquinaria industrial importada que no fue informada al Banco de la República.",
    "enunciado": "¿Cuál es el ámbito de competencia de la DIAN en materia del control del régimen de cambios internacionales?",
    "opciones": [
      {
        "id": "A",
        "texto": "Controlar y sancionar las infracciones cambiarias derivadas de operaciones de importación y exportación de bienes y servicios, gastos asociados, financiación en moneda extranjera de comercio exterior y tráfico de divisas en aduanas.",
        "explicacion": "Correcta. El Decreto Ley 2245 de 2011 y el Decreto 1742 de 2020 delimitan la competencia de la DIAN al régimen cambiario en materia de comercio exterior, endeudamiento vinculado al mismo y control aduanero de divisas."
      },
      {
        "id": "B",
        "texto": "Vigilar el funcionamiento de la Bolsa de Valores y fijar la tasa de interés bancaria de los bancos comerciales.",
        "explicacion": "Incorrecta. Es competencia de la Superintendencia Financiera de Colombia y la Junta Directiva del Banco de la República."
      },
      {
        "id": "C",
        "texto": "Regular el precio del transporte público urbano en las ciudades capitales.",
        "explicacion": "Incorrecta. Competencia de las autoridades de tránsito y transporte municipal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 2245 de 2011 Art. 1 y Decreto 1742 de 2020 Art. 2",
    "citaNormativa": "«La DIAN es competente para adelantar el control, investigación y sanción de las infracciones al régimen de cambios en operaciones de importación, exportación y operaciones conexas.» (Decreto Ley 2245 de 2011)."
  },
  {
    "id": "an4_camb_03",
    "nivel": "Técnico",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Declaración Aduanera de Ingreso o Salida de Dinero en Efectivo o Títulos Representativos",
    "caso": "En el filtro de control de viajeros internacionales del aeropuerto, se intercepta a un pasajero con $25.000 dólares estadounidenses en efectivo en su equipaje de mano que no diligenció ni presentó la Declaración de Aduanas correspondiente.",
    "enunciado": "De acuerdo con el régimen cambiario y aduanero, ¿cuál es la medida cautelar y sancionatoria inmediata?",
    "opciones": [
      {
        "id": "A",
        "texto": "Retener provisionalmente el dinero en exceso de los 10.000 USD y proferir el Acta de Retención de Divisas, iniciando el procedimiento sancionatorio cambiario que contempla una sanción equivalente al porcentaje del valor no declarado.",
        "explicacion": "Correcta. Toda persona que ingrese o saque del país divisas o títulos por un monto superior a 10.000 USD está obligada a declararlo en el formulario aduanero oficial. La omisión o falsedad da lugar a la retención preventiva y sanción pecuniaria (Decreto Ley 2245 de 2011)."
      },
      {
        "id": "B",
        "texto": "Felicitar al viajero y permitirle abordar sin levantar ningún acta administrativa.",
        "explicacion": "Incorrecta. Incurre en omisión de funciones y encubrimiento de posible contrabando de divisas."
      },
      {
        "id": "C",
        "texto": "Repartir el dinero entre los funcionarios presentes en el aeropuerto de manera informal.",
        "explicacion": "Incorrecta. Delito de peculado por apropiación y cohecho propio."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 2245 de 2011 Art. 3 num. 22 y Res. Externa 1 de 2018 Banco de la República",
    "citaNormativa": "«La no presentación de la declaración de aduanas al ingresar o egresar divisas o títulos representativos por valor superior a 10.000 USD dará lugar a su retención y sanción cambiaria.» (Decreto Ley 2245 de 2011)."
  },
  {
    "id": "an4_camb_04",
    "nivel": "Técnico",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Obligación de Conservación de Documentos y Declaraciones de Cambio",
    "caso": "Una sociedad investigada por operaciones cambiarias de exportación de café argumenta que botó los comprobantes de egreso, formularios de canalización y declaraciones de cambio porque la operación ocurrió hace dos años.",
    "enunciado": "¿Cuál es el término legal durante el cual los residentes están obligados a conservar los soportes de sus operaciones de cambio?",
    "opciones": [
      {
        "id": "A",
        "texto": "Mínimo tres (3) años contados a partir del momento en que se realizó la operación, debiendo exhibirlos cuando la autoridad de control cambiario de la DIAN lo requiera.",
        "explicacion": "Correcta. La Circular Reglamentaria Externa DCIN-83 del Banco de la República y la normativa cambiaria obligan a conservar los documentos que acrediten el monto, origen y destino de las divisas por al menos tres años para efectos del control de la DIAN."
      },
      {
        "id": "B",
        "texto": "Treinta (30) días calendario contados desde la firma del cheque.",
        "explicacion": "Incorrecta. Un plazo tan corto haría inoperante la facultad de fiscalización y auditoría del Estado."
      },
      {
        "id": "C",
        "texto": "Cien (100) años sin posibilidad de destrucción bajo ninguna circunstancia.",
        "explicacion": "Incorrecta. Plazo desproporcionado no contemplado en la normativa financiera ni mercantil colombiana."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Circular Reglamentaria Externa DCIN-83 y Decreto Ley 2245 de 2011 Art. 3",
    "citaNormativa": "«Los residentes deberán conservar los documentos que acrediten el monto, condiciones y demás características de las operaciones de cambio por un término mínimo de tres (3) años.» (Circular DCIN-83)."
  },
  {
    "id": "an4_camb_05",
    "nivel": "Técnico",
    "ejeId": "normativa_cambiaria",
    "ejeNombre": "Normativa Cambiaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Procedimiento Sancionatorio Cambiario: Pliego de Cargos y Descargos",
    "caso": "El grupo de control cambiario proyecta un acto administrativo para iniciar formalmente el proceso sancionatorio contra un importador que no canalizó divisas en el plazo legal.",
    "enunciado": "¿Cuál es el acto administrativo mediante el cual se formulan los cargos y cuál es el término legal del investigado para presentar sus descargos según el Decreto Ley 2245 de 2011?",
    "opciones": [
      {
        "id": "A",
        "texto": "Mediante Auto que formula Pliego de Cargos, disponiendo el investigado de un plazo de un (1) mes contado a partir de su notificación para responder y aportar pruebas.",
        "explicacion": "Correcta. El procedimiento sancionatorio cambiario de la DIAN inicia formalmente con la notificación del Pliego de Cargos, otorgando al administrado el término legal de un mes para ejercer su derecho de defensa y contradicción (Decreto Ley 2245 de 2011)."
      },
      {
        "id": "B",
        "texto": "Mediante llamada telefónica informal concediendo 24 horas para consignar en una cuenta personal.",
        "explicacion": "Incorrecta. Vulnera flagrantemente las garantías del debido proceso administrativo y tipifica extorsión."
      },
      {
        "id": "C",
        "texto": "Mediante sentencia judicial de última instancia dictada por el Consejo de Estado.",
        "explicacion": "Incorrecta. Confunde la vía administrativa sancionatoria de la DIAN con el control judicial contencioso."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 2245 de 2011 Art. 12 y 13",
    "citaNormativa": "«El procedimiento administrativo sancionatorio cambiario se iniciará mediante la formulación de pliego de cargos... El investigado dispondrá de un mes para responder y solicitar pruebas.» (Decreto Ley 2245 de 2011)."
  },
  {
    "id": "an4_oblg_01",
    "nivel": "Técnico",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Formales y Sustanciales en Materia Tributaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Distinción entre Obligación Tributaria Sustancial y Formal",
    "caso": "Durante una jornada de orientación a usuarios, un ciudadano manifiesta que como su empresa arrojó pérdidas contables y no debe pagar impuesto de renta (saldo a pagar cero), no tiene ninguna obligación de presentar la declaración tributaria.",
    "enunciado": "Desde la doctrina tributaria y la normativa vigente, ¿cómo debe explicar el Analista IV esta situación?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aclarar que la obligación sustancial es el pago efectivo del tributo, mientras que la obligación formal de declarar es autónoma e independiente, debiendo presentarse oportunamente la declaración aun cuando el saldo a pagar sea cero o arroje saldo a favor.",
        "explicacion": "Correcta. El artículo 1 del Estatuto Tributario y la jurisprudencia constitucional señalan que las obligaciones formales (declarar, facturar, informar) son autónomas de la obligación sustancial de pago; no generar impuesto no exonera del deber formal de declarar si se superan los topes legales."
      },
      {
        "id": "B",
        "texto": "Confirmar la afirmación del ciudadano y decirle que nunca más vuelva a declarar renta si no tiene dinero.",
        "explicacion": "Incorrecta. Induce al error al contribuyente y causaría que se le impongan sanciones millonarias por extemporaneidad o no declarar."
      },
      {
        "id": "C",
        "texto": "Cobrarle de inmediato un millón de pesos en efectivo por la asesoría prestada.",
        "explicacion": "Incorrecta. La orientación técnica prestada por los servidores públicos de la DIAN es gratuita y oficial."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 1 y Art. 591",
    "citaNormativa": "«La obligación tributaria sustancial se origina al realizarse el presupuesto previsto en la ley como generador del impuesto... Las obligaciones formales facilitan su control y son de obligatorio cumplimiento.» (Estatuto Tributario, Art. 1)."
  },
  {
    "id": "an4_oblg_02",
    "nivel": "Técnico",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Formales y Sustanciales en Materia Tributaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Obligación de Facturar Electrónicamente con Validación Previa",
    "caso": "En una visita de verificación de control de facturación, el Analista IV constata que un almacén entrega a los clientes tirillas de papel generadas por un software POS no electrónico sin validación previa de la DIAN por compras que superan las 5 UVT.",
    "enunciado": "De acuerdo con el artículo 616-1 del Estatuto Tributario y la Resolución 000165 de 2023, ¿cuál es la consecuencia técnica del hallazgo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Configuración de presunto incumplimiento de la obligación formal de facturar electrónicamente, procediendo a levantar acta de visita para dar inicio al procedimiento sancionatorio de clausura del establecimiento (Art. 657 E.T.).",
        "explicacion": "Correcta. El artículo 616-1 del E.T. exige la expedición de factura electrónica de venta con validación previa de la DIAN; su omisión o incumplimiento de los requisitos técnicos acarrea la sanción de cierre o clausura del establecimiento (Art. 657 E.T.)."
      },
      {
        "id": "B",
        "texto": "Validar las tirillas informales porque cualquier papel escrito a mano equivale a factura legal.",
        "explicacion": "Incorrecta. La ley exige factura electrónica validada por la DIAN con código CUFE y código QR."
      },
      {
        "id": "C",
        "texto": "Cobrar una multa en efectivo al cajero del almacén en ese mismo instante.",
        "explicacion": "Incorrecta. Los funcionarios de la DIAN no reciben pagos en dinero bajo ninguna modalidad."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 616-1 y Art. 657, Res. 000165 de 2023",
    "citaNormativa": "«La expedición de la factura electrónica de venta con validación previa es de carácter obligatorio. Su no expedición o expedición sin requisitos dará lugar a la sanción de clausura del establecimiento.» (Estatuto Tributario, Art. 616-1)."
  },
  {
    "id": "an4_oblg_03",
    "nivel": "Técnico",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Formales y Sustanciales en Materia Tributaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Inscripción y Actualización en el Registro Único Tributario (RUT)",
    "caso": "Una sociedad cambió su actividad económica principal de comercio al por menor a transporte internacional de carga y modificó su domicilio de Cali a Barranquilla, sin actualizar el RUT durante los 8 meses posteriores al cambio.",
    "enunciado": "¿Cuál es el término legal para actualizar el RUT y qué sanción procede según el Estatuto Tributario?",
    "opciones": [
      {
        "id": "A",
        "texto": "La actualización debe efectuarse dentro del mes siguiente a la ocurrencia del hecho; no hacerlo genera la sanción por no actualizar el RUT equivalente a una (1) UVT por cada día de retraso (Art. 658-3 E.T.).",
        "explicacion": "Correcta. El artículo 658-3 del Estatuto Tributario establece que la desactualización del RUT genera sanción económica tasada en UVT por cada día de retraso o clausura temporal del establecimiento si se trata de cambio de dirección."
      },
      {
        "id": "B",
        "texto": "El plazo es de diez años y no acarrea ninguna sanción económica.",
        "explicacion": "Incorrecta. El RUT es la base de identificación tributaria y aduanera de la Nación y su actualización oportuna es perentoria."
      },
      {
        "id": "C",
        "texto": "El RUT se actualiza telepáticamente sin necesidad de trámite alguno.",
        "explicacion": "Incorrecta. Es un deber formal que recae en el contribuyente ante los sistemas informáticos de la DIAN."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 555-2 y Art. 658-3",
    "citaNormativa": "«Los obligados a inscribirse en el RUT deberán actualizar la información dentro del mes siguiente al hecho que genera la actualización... La no actualización causará sanción de una UVT por cada día de retraso.» (Estatuto Tributario, Art. 658-3)."
  },
  {
    "id": "an4_oblg_04",
    "nivel": "Técnico",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Formales y Sustanciales en Materia Tributaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Suministro de Información Exógena Tributaria (Medios Magnéticos)",
    "caso": "Al revisar el cumplimiento de deberes formales de una entidad bancaria, el Analista IV constata que venció el plazo fijado en la Resolución Anual de Información Exógena sin que el banco transmitiera el reporte de saldos de cuentas de ahorros.",
    "enunciado": "¿Qué actuación técnica debe proyectar el área de fiscalización?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proyectar Pliego de Cargos proponiendo la imposición de la sanción por no suministrar información exógena contemplada en el artículo 651 del Estatuto Tributario, sobre el monto de las sumas no reportadas.",
        "explicacion": "Correcta. El artículo 651 del E.T. sanciona con multas pecuniarias tasadas porcentualmente sobre la información no suministrada, errónea o extemporánea requerida para el control fiscal de la Entidad."
      },
      {
        "id": "B",
        "texto": "Pedir al banco un préstamo personal con tasa cero a cambio de no iniciar la investigación.",
        "explicacion": "Incorrecta. Delito de cohecho y falta gravísima de corrupción."
      },
      {
        "id": "C",
        "texto": "Declarar la caducidad del impuesto de renta de todos los clientes del banco.",
        "explicacion": "Incorrecta. Falta de conexidad jurídica y extralimitación absurda de funciones."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 631 y Art. 651",
    "citaNormativa": "«Las personas y entidades obligadas a suministrar información tributaria que no la suministren dentro del plazo establecido incurrirán en una multa hasta del 1% de las sumas no informadas.» (Estatuto Tributario, Art. 651)."
  },
  {
    "id": "an4_oblg_05",
    "nivel": "Técnico",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Formales y Sustanciales en Materia Tributaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Obligación de Practicar, Consignar y Expedir Certificados de Retención en la Fuente",
    "caso": "Una sociedad comercial retuvo $12 millones por concepto de retención en la fuente a título de renta a sus proveedores durante el mes de junio, pero en lugar de consignar el dinero a la DIAN, utilizó esos fondos para pagar la fiesta de fin de año de la gerencia.",
    "enunciado": "De acuerdo con el Estatuto Tributario y el Código Penal colombiano, ¿cuáles son las consecuencias jurídicas de esta conducta?",
    "opciones": [
      {
        "id": "A",
        "texto": "La declaración presentada sin pago no produce efecto legal alguno (Art. 580-1 E.T.) y se configura el delito de Omisión de Agente Retenedor o Recaudador (Art. 402 Código Penal), con pena de prisión de 48 a 108 meses.",
        "explicacion": "Correcta. Las sumas retenidas son dineros públicos del Estado. No consignarlas dentro de los dos meses siguientes acarrea la ineficacia de la declaración y responsabilidad penal por omisión de agente retenedor (Art. 402 C.P.)."
      },
      {
        "id": "B",
        "texto": "Ninguna consecuencia, porque el agente retenedor es dueño legítimo de las retenciones que practica.",
        "explicacion": "Incorrecta. El agente retenedor actúa por delegación del Estado recaudando dineros del erario público."
      },
      {
        "id": "C",
        "texto": "La DIAN debe premiar a la empresa con un certificado de excelencia recreativa.",
        "explicacion": "Incorrecta. Burla al régimen penal y tributario de la Nación."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 580-1 y Código Penal Art. 402",
    "citaNormativa": "«El agente retenedor que no consigne las sumas retenidas dentro de los dos meses siguientes a aquel en que debió presentar la declaración, incurrirá en prisión de 48 a 108 meses y multa.» (Código Penal, Art. 402)."
  },
  {
    "id": "an4_oblg_06",
    "nivel": "Técnico",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Formales y Sustanciales en Materia Tributaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Conservación de Libros de Contabilidad y Soportes Internos y Externos",
    "caso": "Durante una inspección tributaria, un comerciante sostiene que no conserva las facturas de compra física ni electrónica de sus inventarios del año gravable 2023 porque la ley de comercio solo exige guardar documentos por 6 meses.",
    "enunciado": "De conformidad con el artículo 632 del Estatuto Tributario y el artículo 46 de la Ley 962 de 2005, ¿cuál es el término legal correcto de conservación de pruebas tributarias?",
    "opciones": [
      {
        "id": "A",
        "texto": "Por el término de firmeza de la declaración tributaria a la cual corresponden los documentos, el cual generalmente es de tres (3) años, o durante el tiempo que dure el proceso administrativo si este fue notificado oportunamente.",
        "explicacion": "Correcta. El artículo 46 de la Ley 962 de 2005 y el artículo 632 del E.T. unificaron el término de conservación de libros y soportes al término de firmeza de la declaración tributaria respectiva, garantizando su exhibición ante la DIAN."
      },
      {
        "id": "B",
        "texto": "Quince (15) días calendario contados desde la expedición de la factura de venta.",
        "explicacion": "Incorrecta. Plazo irrisorio que impediría cualquier fiscalización posterior del Estado."
      },
      {
        "id": "C",
        "texto": "No existe obligación alguna de conservar soportes si el contribuyente alega que no tiene espacio en su oficina.",
        "explicacion": "Incorrecta. La no exhibición de libros y soportes contables genera desconocimiento de costos y sanciones probatorias."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 632 y Ley 962 de 2005 Art. 46",
    "citaNormativa": "«El período de conservación de los libros de contabilidad y documentos soporte de que trata el artículo 632 del Estatuto Tributario será igual al término de firmeza de la declaración tributaria correspondiente.» (Ley 962 de 2005, Art. 46)."
  },
  {
    "id": "an4_oblg_07",
    "nivel": "Técnico",
    "ejeId": "obligaciones_tributarias",
    "ejeNombre": "Obligaciones Formales y Sustanciales en Materia Tributaria",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Firma Digital y Representación en Declaraciones Tributarias Virtuales",
    "caso": "Una declaración del Impuesto sobre la Renta de una persona jurídica con ingresos superiores a 100.000 UVT fue presentada a través del portal de la DIAN utilizando la firma digital de la secretaria de recepción, careciendo de la firma del Representante Legal y del Revisor Fiscal.",
    "enunciado": "¿Cuál es la consecuencia jurídica que el Analista IV debe verificar en el control de calidad de la declaración?",
    "opciones": [
      {
        "id": "A",
        "texto": "La declaración se tiene por no presentada (Art. 580 literal d del Estatuto Tributario), al no haber sido firmada por quien tiene el deber legal de firmarla ni contar con la firma exigida del Revisor Fiscal o Contador.",
        "explicacion": "Correcta. El artículo 580 del Estatuto Tributario establece causales taxativas por las cuales una declaración se tiene por no presentada, entre ellas no contener la firma de quien debe cumplir el deber formal o del revisor fiscal cuando exista la obligación legal."
      },
      {
        "id": "B",
        "texto": "La declaración adquiere firmeza inmediata sin posibilidad de revisión de fondo por parte de la DIAN.",
        "explicacion": "Incorrecta. La falta de firma legalmente autorizada invalida el acto procesal de la declaración privada."
      },
      {
        "id": "C",
        "texto": "La secretaria asume automáticamente la propiedad de todos los bienes de la empresa.",
        "explicacion": "Incorrecta. Consecuencia jurídica inexistente y desprovista de sentido legal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 580 literal d y Art. 596",
    "citaNormativa": "«No se entenderá cumplido el deber de presentar la declaración tributaria cuando no contenga la constancia de la firma de quien deba cumplir el deber formal de declarar o la firma del revisor fiscal.» (Estatuto Tributario, Art. 580)."
  },
  {
    "id": "an4_fisc_01",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Práctica de Pruebas: Diligencia de Inspección Tributaria y Contable (Art. 779 y 779-1 E.T.)",
    "caso": "El Analista IV acompaña al profesional comisionado en una diligencia de inspección contable formalmente decretada mediante Auto de Trámite. Al ingresar al establecimiento, el gerente se niega a exhibir los libros de contabilidad alegando que son secretos.",
    "enunciado": "De acuerdo con el Estatuto Tributario, ¿qué constancia y efecto probatorio debe consignarse en el acta?",
    "opciones": [
      {
        "id": "A",
        "texto": "Consignar de manera detallada en el Acta de Inspección la no exhibición de los libros contables, lo cual dará lugar a la aplicación de la sanción por no exhibir libros (Art. 655 E.T.) y el desconocimiento de los costos y deducciones no demostrados.",
        "explicacion": "Correcta. La inspección tributaria y contable (Arts. 779 y 782 E.T.) es una facultad oficiosa de la DIAN ante la cual no es oponible la reserva comercial; negarse a exhibirlos se hace constar en acta y acarrea sanciones e inversión de la carga de la prueba."
      },
      {
        "id": "B",
        "texto": "Retirarse pidiéndole disculpas al gerente por haberlo importunado durante su jornada laboral.",
        "explicacion": "Incorrecta. Implica abandono de deberes y sumisión indebida de la potestad fiscal del Estado."
      },
      {
        "id": "C",
        "texto": "Derribar las puertas del establecimiento sin acompañamiento de la fuerza pública ni orden legal.",
        "explicacion": "Incorrecta. Constituye extralimitación y vulneración de derechos fundamentales constitucionales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 655, 779 y 782",
    "citaNormativa": "«La no exhibición de los libros de contabilidad cuando la administración tributaria lo exija dará lugar a la aplicación de las sanciones de que trata el artículo 655 del Estatuto Tributario.» (Estatuto Tributario, Art. 782)."
  },
  {
    "id": "an4_fisc_02",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Intervención en Diligencias de Destrucción de Mercancía Aduanera Averiada o Impropia",
    "caso": "Como función técnica específica (AT-FL-2010), el Analista IV interviene en una diligencia de destrucción de 5 toneladas de alimentos enlatados importados que sufrieron descomposición biológica en el depósito habilitado y fueron declarados impropios para el consumo.",
    "enunciado": "Conforme a la normativa aduanera (Decreto 1165 de 2019 / Decreto 920 de 2023), ¿cuál es el requisito documental y procedimental indispensable en la diligencia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Verificar la presencia de la autoridad sanitaria (INVIMA), presenciar la inutilización física total de la mercancía, levantar y suscribir el Acta de Destrucción detallando cantidades, pesos, método ambiental utilizado y causas técnicas.",
        "explicacion": "Correcta. La destrucción de mercancía averiada o impropia requiere la presencia de autoridades competentes (aduanera, sanitaria, ambiental), verificación física en sitio y suscripción de acta pormenorizada que extingue la obligación aduanera válidamente."
      },
      {
        "id": "B",
        "texto": "Repartir los alimentos descompuestos entre los vecinos del depósito para que los consuman bajo su riesgo.",
        "explicacion": "Incorrecta. Atenta contra la salud pública y constituye delito contra la salubridad y peculado."
      },
      {
        "id": "C",
        "texto": "Firmar el acta en blanco desde la oficina sin asistir al lugar de la destrucción física.",
        "explicacion": "Incorrecta. Constituye falsedad ideológica en documento público y falta disciplinaria gravísima."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019 Art. 209 y Manual de Disposición de Mercancías DIAN",
    "citaNormativa": "«La destrucción de mercancías averiadas, defectuosas o impropias se efectuará en presencia de la autoridad aduanera y sanitaria competente, levantándose el acta correspondiente que dará cuenta de su inutilización definitiva.» (Decreto 1165 de 2019)."
  },
  {
    "id": "an4_fisc_03",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Medida Cautelar de Aprehensión de Mercancías (Decreto 920 de 2023)",
    "caso": "En un control aduanero en vía pública, el equipo técnico inspecciona un camión que transporta electrodomésticos importados. El conductor aporta copias borrosas de declaraciones de importación cuyos números de serial y marcas no coinciden con la carga física.",
    "enunciado": "¿Cuál es la medida cautelar que corresponde adoptar y qué documento oficial debe suscribirse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Adoptar la medida cautelar de Aprehensión de las mercancías por no acreditar su legal introducción y permanencia en el territorio aduanero nacional, suscribiendo el Acta de Hechos y de Aprehensión conforme al Decreto 920 de 2023.",
        "explicacion": "Correcta. Cuando la mercancía no coincide en seriales, descripción o cantidad con la declaración de importación, procede la aprehensión inmediata mediante acta formal, trasladando los bienes a un depósito autorizado de la DIAN para el inicio del proceso de decomiso."
      },
      {
        "id": "B",
        "texto": "Permitir que el camión continúe su ruta con la condición de que el conductor compre un seguro de viaje privado.",
        "explicacion": "Incorrecta. Omisión flagrante de la medida cautelar que permite la fuga de mercancía de contrabando."
      },
      {
        "id": "C",
        "texto": "Subastar los electrodomésticos en la carretera a los conductores que pasen por el peaje.",
        "explicacion": "Incorrecta. Vulnera todo el procedimiento aduanero de decomiso y enajenación del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 920 de 2023 Art. 65 y Art. 69 (Régimen Sancionatorio Aduanero)",
    "citaNormativa": "«La aprehensión es la medida cautelar mediante la cual la autoridad aduanera toma posesión de las mercancías sobre las cuales se configure alguna de las causales de decomiso previstas en la ley.» (Decreto 920 de 2023, Art. 65)."
  },
  {
    "id": "an4_fisc_04",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Emplazamiento para Declarar en el Proceso de Fiscalización (Art. 715 E.T.)",
    "caso": "El grupo de control de omisos identifica a un contribuyente obligado a declarar el Impuesto sobre la Renta que no cumplió con dicha obligación en el plazo del calendario tributario. El Analista IV proyecta el acto preparatorio inicial.",
    "enunciado": "¿Cuál es el término perentorio que concede el Emplazamiento para Declarar al contribuyente para subsanar la omisión?",
    "opciones": [
      {
        "id": "A",
        "texto": "Un (1) mes improrrogable contado a partir de su notificación legal, liquidando y pagando la sanción por extemporaneidad correspondiente.",
        "explicacion": "Correcta. El artículo 715 del Estatuto Tributario concede el término legal de un mes al sujeto pasivo para que presente la declaración omitida. Si no lo hace, la DIAN queda facultada para aplicar la sanción por no declarar y liquidar de aforo."
      },
      {
        "id": "B",
        "texto": "Cinco (5) años hábiles según el criterio discrecional del auditor.",
        "explicacion": "Incorrecta. Desconoce el término perentorio legal establecido en el Código Tributario."
      },
      {
        "id": "C",
        "texto": "Veinticuatro (24) horas bajo pena de arresto policial inmediato.",
        "explicacion": "Incorrecta. En el procedimiento tributario civil no existe privación preventiva de la libertad por deudas fiscales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 715",
    "citaNormativa": "«Quienes incumplan con la obligación de presentar las declaraciones tributarias... serán emplazados por la administración para que lo hagan en el término perentorio de un (1) mes.» (Estatuto Tributario, Art. 715)."
  },
  {
    "id": "an4_fisc_05",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Requerimiento Especial como Propuesta de Modificación Oficial (Art. 703 E.T.)",
    "caso": "En una investigación por deducciones improcedentes en el impuesto sobre la renta, el profesional comisionado le pide al Analista IV estructurar la tabla de modificaciones y sanciones que conformará el Requerimiento Especial.",
    "enunciado": "¿Cuál es la naturaleza jurídica y el plazo legal de respuesta que debe consagrar el Requerimiento Especial según el artículo 707 del E.T.?",
    "opciones": [
      {
        "id": "A",
        "texto": "Es un acto preparatorio de trámite en el que la DIAN formula formalmente los puntos que propone modificar de la declaración y cuantifica las sanciones, concediendo tres (3) meses al contribuyente para responder y aportar pruebas.",
        "explicacion": "Correcta. El Requerimiento Especial (Art. 703 E.T.) es la pieza angular del debate probatorio tributario; otorga un plazo garantista de tres meses (Art. 707 E.T.) para que el administrado formule descargos antes de que se expida la Liquidación Oficial de Revisión."
      },
      {
        "id": "B",
        "texto": "Es una sentencia penal irrevocable que no admite ninguna prueba ni objeción por parte del contribuyente.",
        "explicacion": "Incorrecta. El Requerimiento Especial no es acto definitivo ni sanción ejecutoriada, sino una propuesta de determinación."
      },
      {
        "id": "C",
        "texto": "Es un folleto publicitario sin ningún valor procesal en la investigación.",
        "explicacion": "Incorrecta. Su notificación oportuna es requisito obligatorio de validez de la Liquidación Oficial (Art. 703 E.T.)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 703 y Art. 707",
    "citaNormativa": "«Antes de efectuar la liquidación de revisión, la administración enviará al contribuyente un requerimiento especial que contenga todos los puntos que se proponga modificar... El contribuyente dispondrá de tres meses para formular sus objeciones.» (Estatuto Tributario, Art. 703 y 707)."
  },
  {
    "id": "an4_fisc_06",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Suspensión de Términos por Notificación de Auto de Inspección Tributaria (Art. 706 E.T.)",
    "caso": "La DIAN notifica en debida forma un Auto que ordena Inspección Tributaria dentro de una investigación de renta a una empresa cuyo término de firmeza vencía en dos meses.",
    "enunciado": "De acuerdo con el artículo 706 del Estatuto Tributario, ¿qué efecto produce la notificación de este auto sobre el plazo que tiene la administración para notificar el Requerimiento Especial?",
    "opciones": [
      {
        "id": "A",
        "texto": "Suspende el término para notificar el Requerimiento Especial por el término de tres (3) meses contados a partir de la notificación del auto de inspección tributaria.",
        "explicacion": "Correcta. El artículo 706 del Estatuto Tributario señala expresamente que el término para notificar el Requerimiento Especial se suspende por tres meses con la notificación en debida forma del auto que ordena inspección tributaria."
      },
      {
        "id": "B",
        "texto": "Cancela definitivamente la investigación y le otorga inmunidad fiscal permanente a la empresa.",
        "explicacion": "Incorrecta. La inspección es una herramienta para recaudar pruebas a favor del Estado, no una condonación."
      },
      {
        "id": "C",
        "texto": "Obliga a la empresa a cerrar sus puertas durante todo el tiempo que dure la inspección.",
        "explicacion": "Incorrecta. La inspección contable no interrumpe el giro ordinario de los negocios del contribuyente."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 706",
    "citaNormativa": "«El término para notificar el requerimiento especial se suspenderá por el término de tres (3) meses contados a partir de la notificación del auto que ordene la práctica de inspección tributaria.» (Estatuto Tributario, Art. 706)."
  },
  {
    "id": "an4_fisc_07",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Requisitos de las Actas de Hechos y Pruebas en Visitas de Fiscalización",
    "caso": "Durante una visita de verificación a un establecimiento de comercio, el Analista IV elabora el acta de hechos registrando lo observado en el inventario físico y las declaraciones del encargado del local.",
    "enunciado": "Para que el acta tenga pleno valor probatorio en el proceso sancionatorio, ¿qué formalidad debe cumplirse al concluir la diligencia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dar lectura al acta en presencia de los intervinientes, suscribirla conjuntamente con el contribuyente o su delegado, y si este se niega a firmar, dejar constancia expresa de dicha negativa avalada por un testigo o funcionario público.",
        "explicacion": "Correcta. Las actas de visita de fiscalización son documentos públicos que dan fe de los hechos presenciados; la negativa del investigado a firmar no invalida el acta siempre que se deje constancia fundada con firma de testigos comisionados."
      },
      {
        "id": "B",
        "texto": "Romper el acta si el comerciante se disgusta y promete portarse bien en el futuro.",
        "explicacion": "Incorrecta. La función fiscalizadora es reglada y no queda al arbitrio o humor de los investigados."
      },
      {
        "id": "C",
        "texto": "Llenar los datos del acta dos semanas después en la casa sin haber anotado nada en el sitio.",
        "explicacion": "Incorrecta. Viola el principio de inmediatez y veracidad de la prueba administrativa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 684 y CPACA Art. 40",
    "citaNormativa": "«De toda diligencia de fiscalización se levantará acta firmada por los intervinientes; la negativa a suscribirla no afectará su validez si de ello se deja constancia motivada.» (Estatuto Tributario, Art. 684)."
  },
  {
    "id": "an4_fisc_08",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Causales de Decomiso Directo de Mercancías (Decreto 920 de 2023)",
    "caso": "En una operación aduanera de fiscalización posterior, se detecta que mercancía de procedencia extranjera ingresó al país oculta dentro de un doble fondo en un contenedor declarado únicamente con chatarra metálica.",
    "enunciado": "¿Cuál es la causal de aprehensión y decomiso directo aplicable según el régimen aduanero?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ocultamiento de mercancía en caletas, dobles fondos o medios de transporte adaptados para evadir el control aduanero, dando lugar al decomiso directo de las mercancías y del vehículo utilizado.",
        "explicacion": "Correcta. El Decreto 920 de 2023 tipifica como causal grave de decomiso el ocultamiento de mercancías en dobles fondos o compartimentos no autorizados, extendiendo la medida al medio de transporte adaptado para tal fin."
      },
      {
        "id": "B",
        "texto": "Cobro de una tarifa de estacionamiento especial en el puerto devolviendo los bienes.",
        "explicacion": "Incorrecta. No subsana el fraude ni el contrabando tipificado en la ley aduanera."
      },
      {
        "id": "C",
        "texto": "Regalar los bienes al conductor por su ingenio en el diseño del compartimento oculto.",
        "explicacion": "Incorrecta. Absurdo y tipifica encubrimiento de contrabando."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 920 de 2023 Art. 69 num. 1",
    "citaNormativa": "«Dará lugar al decomiso de las mercancías cuando se encuentren ocultas en dobles fondos o en cualquier otro medio que dificulte su descubrimiento por la autoridad aduanera.» (Decreto 920 de 2023, Art. 69)."
  },
  {
    "id": "an4_fisc_09",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Pliego de Cargos por No Facturar o Facturar sin Requisitos (Art. 657 y 658 E.T.)",
    "caso": "Un Analista IV compila las pruebas de una visita de control en la que se comprueba que un restaurante no expidió factura en 20 ventas consecutivas a clientes presenciales.",
    "enunciado": "¿Cuál es el acto administrativo que debe formular la DIAN para iniciar formalmente el proceso sancionatorio de clausura y qué plazo tiene el contribuyente para responder?",
    "opciones": [
      {
        "id": "A",
        "texto": "Un Pliego de Cargos donde se expone la presunta infracción, concediendo al interesado el término legal de diez (10) días hábiles para dar respuesta y solicitar pruebas (Art. 657 E.T.).",
        "explicacion": "Correcta. Para la sanción de clausura de establecimiento (Art. 657 E.T.), la DIAN formula un Pliego de Cargos concediendo al infractor diez días hábiles para presentar descargos; vencido este plazo, se profiere la resolución sancionatoria motivada."
      },
      {
        "id": "B",
        "texto": "Colocar un candado en la puerta de manera clandestina en la madrugada sin notificación previa.",
        "explicacion": "Incorrecta. Viola las garantías fundamentales del debido proceso administrativo (Art. 29 C.P.)."
      },
      {
        "id": "C",
        "texto": "Un memorando interno de felicitación por el ahorro de papel.",
        "explicacion": "Incorrecta. Desconoce la gravedad de la omisión de facturación y evasión de IVA/Impoconsumo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 657",
    "citaNormativa": "«La administración formulará pliego de cargos al contribuyente concediéndole el término de diez (10) días para que responda... Vencido este término, resolverá mediante resolución motivada.» (Estatuto Tributario, Art. 657)."
  },
  {
    "id": "an4_fisc_10",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cadena de Custodia de Pruebas Materiales en Investigaciones Aduaneras",
    "caso": "En una inspección aduanera a una bodega clandestina se incautan libros de contabilidad paralela en cuadernos manuscritos y memorias USB con registros de pagos en efectivo a contrabandistas.",
    "enunciado": "¿Cuál es el protocolo técnico que el Analista IV debe aplicar para garantizar la validez judicial y administrativa de estas evidencias?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rotular, embalar y sellar las evidencias físicas y digitales en bolsas de seguridad con registro de cadena de custodia, documentando la fecha, hora, responsable del hallazgo y firmas para evitar alteraciones o tachas de ilicitud.",
        "explicacion": "Correcta. La cadena de custodia de elementos probatorios (físicos o digitales) asegura su autenticidad e inalterabilidad desde su recolección hasta su incorporación en el expediente sancionatorio o judicial penal."
      },
      {
        "id": "B",
        "texto": "Llevarse las memorias USB en el bolsillo del pantalón y conectarlas a una computadora de juegos sin antivirus.",
        "explicacion": "Incorrecta. Contamina la evidencia digital y genera nulidad de la prueba por ruptura de cadena de custodia."
      },
      {
        "id": "C",
        "texto": "Tachar los nombres de los investigados en los cuadernos con corrector blanco líquido.",
        "explicacion": "Incorrecta. Constituye destrucción o alteración dolosa de elementos materiales probatorios."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Manual de Cadena de Custodia DIAN / Fiscalía y CPACA Art. 40",
    "citaNormativa": "«Los elementos materiales probatorios y evidencia física recolectados en diligencias administrativas deberán someterse a estrictos protocolos de cadena de custodia para asegurar su integridad y autenticidad.» (Manual de Cadena de Custodia)."
  },
  {
    "id": "an4_fisc_11",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Revisión Técnica de Denuncias Anónimas de Fiscalización",
    "caso": "Llega una denuncia manifestando que una ferretería compra facturas falsas. La denuncia adjunta copias simples de los comprobantes de egreso con nombres de empresas fantasmas, valores y números de cuenta bancaria.",
    "enunciado": "De acuerdo con el procedimiento institucional de clasificación y análisis preliminar, ¿qué debe certificar el Analista IV en su informe de viabilidad técnica?",
    "opciones": [
      {
        "id": "A",
        "texto": "Certificar si la denuncia aporta pruebas sumarias y hechos concretos, verificables y fiscalmente relevantes que justifiquen expedir auto comisorio de inspección, evitando archivar denuncias fundadas o tramitar acusaciones temerarias.",
        "explicacion": "Correcta. El análisis técnico preliminar de denuncias evalúa la razonabilidad, verosimilitud y suficiencia probatoria de los insumos allegados, orientando los recursos de fiscalización hacia fraudes reales demostrables."
      },
      {
        "id": "B",
        "texto": "Archivar el caso de inmediato porque las ferreterías nunca deben ser investigadas por la DIAN.",
        "explicacion": "Incorrecta. Viola el principio de equidad y universalidad del control fiscal."
      },
      {
        "id": "C",
        "texto": "Publicar la denuncia en periódicos locales antes de realizar cualquier cotejo institucional.",
        "explicacion": "Incorrecta. Viola la presunción de inocencia y la reserva legal tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1474 de 2011 Art. 81 y Procedimiento de Fiscalización DIAN",
    "citaNormativa": "«Las quejas y denuncias anónimas se tramitarán cuando aporten pruebas o datos mínimos que permitan verificar la ocurrencia de los hechos fraudulentos.» (Ley 1474 de 2011)."
  },
  {
    "id": "an4_fisc_12",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Recurso de Reconsideración contra la Liquidación Oficial de Revisión (Art. 720 E.T.)",
    "caso": "A un contribuyente se le notificó una Liquidación Oficial de Revisión por inexactitud en renta. El Analista IV recibe en la ventanilla técnica un escrito de impugnación radicado por el apoderado judicial.",
    "enunciado": "¿Cuál es el recurso procedente en vía gubernativa contra dicho acto y cuál es su término legal de interposición?",
    "opciones": [
      {
        "id": "A",
        "texto": "El Recurso de Reconsideración, el cual debe interponerse dentro de los dos (2) meses siguientes a la notificación de la Liquidación Oficial de Revisión (Art. 720 E.T.).",
        "explicacion": "Correcta. El artículo 720 del Estatuto Tributario establece que contra las liquidaciones oficiales y resoluciones sancionatorias procede el recurso de reconsideración, interponible dentro de los dos meses siguientes a su notificación legal."
      },
      {
        "id": "B",
        "texto": "El Recurso de Queja verbal ante la plenaria del Senado dentro de los 3 días hábiles.",
        "explicacion": "Incorrecta. Inexistente en el procedimiento tributario administrativo."
      },
      {
        "id": "C",
        "texto": "Ningún recurso, porque los actos de la DIAN son infalibles y no pueden controvertirse jamás.",
        "explicacion": "Incorrecta. Viola el derecho constitucional a la defensa y contradicción en la vía administrativa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 720",
    "citaNormativa": "«Sin perjuicio de lo dispuesto en normas especiales, contra las liquidaciones oficiales... procede el recurso de reconsideración dentro de los dos (2) meses siguientes a su notificación.» (Estatuto Tributario, Art. 720)."
  },
  {
    "id": "an4_fisc_13",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Silencio Administrativo Positivo en Recursos Tributarios (Art. 734 E.T.)",
    "caso": "Un contribuyente interpuso en debida forma el recurso de reconsideración el 15 de enero de 2024. Al 20 de enero de 2025, la administración no ha proferido ni notificado la resolución que resuelve el recurso.",
    "enunciado": "De acuerdo con el artículo 734 del Estatuto Tributario, ¿qué efecto jurídico sustancial se consolida?",
    "opciones": [
      {
        "id": "A",
        "texto": "Opera el Silencio Administrativo Positivo, entendiéndose fallado el recurso a favor del contribuyente, cesando las sanciones y modificaciones determinadas en la liquidación oficial recurrida.",
        "explicacion": "Correcta. El artículo 732 y 734 del E.T. señalan que la DIAN tiene un (1) año para resolver el recurso de reconsideración. Si vence dicho término sin notificación del acto resolutorio, opera de pleno derecho el silencio administrativo positivo a favor del recurrente."
      },
      {
        "id": "B",
        "texto": "La deuda se duplica automáticamente a favor de la DIAN por el transcurso del tiempo.",
        "explicacion": "Incorrecta. El silencio administrativo positivo castiga la mora injustificada del Estado beneficiando al ciudadano."
      },
      {
        "id": "C",
        "texto": "El contribuyente debe ser sancionado con cárcel por no haber ido a preguntar a la oficina.",
        "explicacion": "Incorrecta. La carga y el deber procesal de decidir y notificar a tiempo corresponden exclusivamente a la autoridad pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 732 y Art. 734",
    "citaNormativa": "«Si transcurrido un año desde la interposición del recurso de reconsideración no se ha notificado la decisión, operará el silencio administrativo positivo.» (Estatuto Tributario, Art. 734)."
  },
  {
    "id": "an4_fisc_14",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Procedimiento de Decomiso Ordinario Aduanero y Documentos de Descargos",
    "caso": "Notificada un acta de aprehensión aduanera por presunta mercancía no declarada, el interesado cuenta con un término para presentar el Documento de Objeción a la Aprehensión aportando las pruebas que demuestren el legal ingreso al país.",
    "enunciado": "¿Cuál es el término legal para presentar dicha objeción según el Decreto 920 de 2023?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dentro de los diez (10) días hábiles siguientes a la entrega o notificación del Acta de Aprehensión (Art. 73 Decreto 920 de 2023).",
        "explicacion": "Correcta. El artículo 73 del Decreto 920 de 2023 dispone que el interesado dispone de diez días hábiles siguientes a la aprehensión para presentar escrito de descargos u objeción a la aprehensión acompañando los documentos de soporte."
      },
      {
        "id": "B",
        "texto": "Tres (3) horas no prorrogables contadas desde el pesaje de la carga.",
        "explicacion": "Incorrecta. Violación flagrante del debido proceso por brevedad irrazonable."
      },
      {
        "id": "C",
        "texto": "Cinco (5) años sin necesidad de aportar pruebas de importación.",
        "explicacion": "Incorrecta. Plazo desmedido no contemplado en el régimen aduanero sancionatorio."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 920 de 2023 Art. 73 (Objeción a la Aprehensión)",
    "citaNormativa": "«Dentro de los diez (10) días hábiles siguientes a la notificación del acta de aprehensión, el interesado podrá presentar documento de objeción a la aprehensión con las pruebas pertinentes.» (Decreto 920 de 2023, Art. 73)."
  },
  {
    "id": "an4_mat_01",
    "nivel": "Técnico",
    "ejeId": "razonamiento_matematico",
    "ejeNombre": "Razonamiento Matemático",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cálculo de la Sanción Mínima Tributaria en UVT (Art. 639 E.T.)",
    "caso": "Un contribuyente calcula una sanción por extemporaneidad en su declaración de retención en la fuente que matemáticamente arroja un valor de $180.000 pesos colombianos. Para el año gravable 2025, el valor de la Unidad de Valor Tributario (UVT) es de $49.799.",
    "enunciado": "De acuerdo con el artículo 639 del Estatuto Tributario, ¿cuál es el valor real que debe liquidarse y pagarse por concepto de sanción?",
    "opciones": [
      {
        "id": "A",
        "texto": "El valor de la sanción mínima legal, equivalente a diez (10) UVT, es decir, $498.000 pesos (aproximado al múltiplo de mil más cercano).",
        "explicacion": "Correcta. El artículo 639 del Estatuto Tributario ordena que el valor mínimo de cualquier sanción tributaria nacional administrada por la DIAN no podrá ser inferior a 10 UVT (10 x $49.799 = $497.990, aproximado a $498.000 según reglas de redondeo fiscal)."
      },
      {
        "id": "B",
        "texto": "Los $180.000 calculados, porque la ley siempre premia pagar lo mínimo posible.",
        "explicacion": "Incorrecta. Desconoce la norma taxativa de la sanción mínima obligatoria del artículo 639 del E.T."
      },
      {
        "id": "C",
        "texto": "Cero pesos, porque las sanciones inferiores a un millón de pesos se perdonan de oficio.",
        "explicacion": "Incorrecta. No existe perdón oficioso automático; se debe aplicar la tarifa de sanción mínima."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 639 y Art. 868",
    "citaNormativa": "«El valor mínimo de cualquier sanción, incluidas las sanciones reducidas, será equivalente a la suma de diez (10) UVT.» (Estatuto Tributario, Art. 639)."
  },
  {
    "id": "an4_mat_02",
    "nivel": "Técnico",
    "ejeId": "razonamiento_matematico",
    "ejeNombre": "Razonamiento Matemático",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cálculo de Sanción por Inexactitud General y Reducción con Requerimiento Especial (Art. 709 E.T.)",
    "caso": "En una Liquidación de Revisión propuesta en Requerimiento Especial se determina un mayor impuesto a pagar de $40.000.000 por concepto de ingresos omitidos. La sanción general por inexactitud es del 100% de la diferencia ($40.000.000). El contribuyente decide aceptar todos los cargos y allanarse con ocasión de la respuesta al Requerimiento Especial.",
    "enunciado": "Conforme al artículo 709 del Estatuto Tributario, ¿a qué porcentaje se reduce la sanción por inexactitud y cuál es el valor resultante a pagar por dicha sanción?",
    "opciones": [
      {
        "id": "A",
        "texto": "Se reduce a la cuarta parte (25%) del valor inicialmente propuesto en caso de allanamiento total oportuno, o a la mitad (50%) según el marco del artículo 709 del E.T., pagando $10.000.000 o $20.000.000 respectivamente según la etapa de allanamiento demostrada.",
        "explicacion": "Correcta. El artículo 709 del Estatuto Tributario consagra la reducción de la sanción por inexactitud a la mitad (50%) cuando el contribuyente acepta los hechos planteados en el Requerimiento Especial, corrige su declaración y paga o acuerda el pago con la presentación del memorial de respuesta."
      },
      {
        "id": "B",
        "texto": "La sanción se incrementa al triple ($120.000.000) por haber respondido la citación oficial.",
        "explicacion": "Incorrecta. El allanamiento reduce las sanciones punitivas, no las agrava."
      },
      {
        "id": "C",
        "texto": "Se exonera totalmente del impuesto principal y de los intereses moratorios.",
        "explicacion": "Incorrecta. La reducción legal recae sobre la sanción por inexactitud, manteniéndose íntegro el deber de pagar el tributo omitido."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 648 y Art. 709",
    "citaNormativa": "«Si con ocasión de la respuesta al requerimiento especial el contribuyente acepta total o parcialmente los hechos, la sanción por inexactitud se reducirá a la mitad de la planteada.» (Estatuto Tributario, Art. 709)."
  },
  {
    "id": "an4_mat_03",
    "nivel": "Técnico",
    "ejeId": "razonamiento_matematico",
    "ejeNombre": "Razonamiento Matemático",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Conversión de Divisas y Liquidación de Tributos Aduaneros (Arancel e IVA)",
    "caso": "Una importación tiene un valor CIF de $10.000 USD. La Tasa Representativa del Mercado (TRM) oficial de la semana es de $4.000 COP por dólar. El arancel aplicable a la subpartida arancelaria es del 10% y la tarifa general de IVA es del 19%.",
    "enunciado": "¿Cuál es el valor base en pesos para la liquidación del IVA aduanero y cuánto suma el IVA liquidado?",
    "opciones": [
      {
        "id": "A",
        "texto": "El valor en aduanas es $40.000.000 COP, el arancel (10%) es $4.000.000 COP; la base gravable del IVA es $44.000.000 COP (CIF + Arancel), arrojando un IVA del 19% equivalente a $8.360.000 COP.",
        "explicacion": "Correcta. En la liquidación aduanera colombiana (Decreto 1165 de 2019 / Estatuto Tributario Art. 459), la base gravable sobre la cual se liquida el IVA en importaciones está conformada por el Valor CIF en pesos colombianos más el Arancel liquidado ($40M + $4M = $44M; $44M x 19% = $8.360.000)."
      },
      {
        "id": "B",
        "texto": "El IVA se calcula sobre cero pesos porque las importaciones pagan IVA únicamente en su país de origen.",
        "explicacion": "Incorrecta. El IVA en importaciones se causa en el territorio nacional al momento del levante o declaración."
      },
      {
        "id": "C",
        "texto": "El IVA es igual al 100% del valor total de la carga comercial.",
        "explicacion": "Incorrecta. Tarifa absurda y confiscatoria no contemplada en el Estatuto Tributario."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 459 y Decreto 1165 de 2019",
    "citaNormativa": "«La base gravable sobre la cual se liquida el impuesto sobre las ventas en las importaciones será la misma que se toma para liquidar los derechos de aduana, adicionada con el valor de este gravamen.» (Estatuto Tributario, Art. 459)."
  },
  {
    "id": "an4_mat_04",
    "nivel": "Técnico",
    "ejeId": "razonamiento_matematico",
    "ejeNombre": "Razonamiento Matemático",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Prorrateo Proporcional de Costos Comunes en IVA (Art. 490 E.T.)",
    "caso": "Una empresa genera durante el bimestre ingresos por operaciones gravadas con IVA por $60.000.000 e ingresos por operaciones excluidas de IVA por $40.000.000 (Ingresos totales = $100.000.000). Incurrió en costos comunes con IVA descontable de $5.000.000 que no pueden imputarse directamente a unas u otras.",
    "enunciado": "Aplicando la regla matemática de prorrata del artículo 490 del Estatuto Tributario, ¿cuánto puede tomar la empresa como IVA descontable en su declaración bimestral?",
    "opciones": [
      {
        "id": "A",
        "texto": "El 60% del IVA descontable, es decir, $3.000.000, proporcional a la participación de los ingresos gravados sobre los ingresos totales del período ($60M / $100M = 60%).",
        "explicacion": "Correcta. El artículo 490 del Estatuto Tributario establece que cuando los costos o compras comunes afecten indistintamente operaciones gravadas y excluidas, el IVA descontable se imputará en proporción directa al porcentaje que representen los ingresos gravados sobre el total de ingresos brutos del período."
      },
      {
        "id": "B",
        "texto": "El 100% de los $5.000.000 sin importar que venda bienes excluidos.",
        "explicacion": "Incorrecta. Constituye inexactitud tributaria por tomar descuentos tributarios improcedentes."
      },
      {
        "id": "C",
        "texto": "Cero pesos, perdiendo todo el IVA pagado a los proveedores.",
        "explicacion": "Incorrecta. La ley autoriza expresamente el descuento de la porción proporcional gravada."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 490",
    "citaNormativa": "«Cuando los bienes o servicios que otorguen derecho a descuento se destinen indistintamente a operaciones gravadas y excluidas... dicho descuento se calculará en proporción al monto de las operaciones gravadas.» (Estatuto Tributario, Art. 490)."
  },
  {
    "id": "an4_mat_05",
    "nivel": "Técnico",
    "ejeId": "razonamiento_matematico",
    "ejeNombre": "Razonamiento Matemático",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cálculo de Sanción por Extemporaneidad antes del Emplazamiento (Art. 641 E.T.)",
    "caso": "Un contribuyente presenta su declaración de retención en la fuente con 3 meses de retraso voluntariamente, antes de que la DIAN le profiera emplazamiento para declarar. El impuesto a cargo determinado en la declaración es de $10.000.000.",
    "enunciado": "Conforme al artículo 641 del Estatuto Tributario (5% por mes o fracción de mes de retraso sin exceder el 100%), ¿cuál es el valor de la sanción por extemporaneidad a liquidar?",
    "opciones": [
      {
        "id": "A",
        "texto": "$1.500.000 pesos, equivalente al 15% (3 meses x 5%) del impuesto determinado a cargo.",
        "explicacion": "Correcta. El artículo 641 del Estatuto Tributario señala que por cada mes o fracción de mes de retraso en la presentación de la declaración, se liquidará una sanción equivalente al 5% del total del impuesto a cargo, sin exceder del 100% (3 meses x 5% = 15%; 15% de $10.000.000 = $1.500.000)."
      },
      {
        "id": "B",
        "texto": "$50.000.000 pesos porque la tasa mensual es del 50%.",
        "explicacion": "Incorrecta. Error en la tasa porcentual legal fijada en el artículo 641."
      },
      {
        "id": "C",
        "texto": "$500.000 pesos fijos sin importar el número de meses transcurridos.",
        "explicacion": "Incorrecta. La sanción es directamente proporcional al tiempo de retardo acumulado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 641",
    "citaNormativa": "«El obligado a declarar que presente las declaraciones tributarias en forma extemporánea deberá liquidar y pagar una sanción por cada mes o fracción de mes calendario de retardo, equivalente al cinco por ciento (5%) del total del impuesto a cargo.» (Estatuto Tributario, Art. 641)."
  },
  {
    "id": "an4_comp_adap1_01",
    "nivel": "Técnico",
    "ejeId": "adaptabilidad_n1",
    "ejeNombre": "ADAPTABILIDAD NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Aceptación Inmediata de Cambios en Instrucciones y Métodos de Trabajo",
    "caso": "Debido a una contingencia en el sistema informático de la DIAN, el Jefe de Grupo instruye al Analista IV suspender la digitalización rutinaria de expedientes y pasar inmediatamente a apoyar el cotejo físico manual de actas de aprehensión para una audiencia urgente.",
    "enunciado": "¿Cuál es la conducta esperada del servidor que evidencia Adaptabilidad en Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Asumir con disposición positiva la nueva instrucción de trabajo de manera inmediata, reorganizando su tiempo para cumplir prioritariamente el cotejo manual sin resistencia al cambio.",
        "explicacion": "Conducta óptima. La Adaptabilidad Nivel 1 implica recibir e implementar instrucciones de cambio en las tareas diarias con flexibilidad y actitud constructiva ante las necesidades operativas emergentes de la entidad."
      },
      {
        "id": "B",
        "texto": "Negarse a realizar el cotejo argumentando que su contrato es para trabajar exclusivamente frente a la pantalla del computador.",
        "explicacion": "Conducta deficiente. Muestra rigidez, desobediencia funcional y falta de compromiso con los objetivos de la dependencia."
      },
      {
        "id": "C",
        "texto": "Aceptar la tarea pero demorarse el triple del tiempo para demostrar su disgusto con la jefatura.",
        "explicacion": "Conducta pasivo-agresiva que perjudica la oportunidad procesal del despacho administrativo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7 (Competencias Comportamentales del Nivel Técnico)",
    "citaNormativa": "«Acepta y se adapta fácilmente a nuevas directrices, métodos y situaciones de trabajo, manteniendo el ritmo y la calidad requeridos.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_adap1_02",
    "nivel": "Técnico",
    "ejeId": "adaptabilidad_n1",
    "ejeNombre": "ADAPTABILIDAD NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Receptividad ante Nuevas Herramientas Digitales Institucionales",
    "caso": "La DIAN implementa una nueva interfaz para el radicado de denuncias de fiscalización que reemplaza el software que el Analista IV utilizó durante los últimos tres años.",
    "enunciado": "¿Cómo debe reaccionar el Analista IV según la competencia de Adaptabilidad Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Participar con entusiasmo en las capacitaciones programadas, consultar las guías de usuario y practicar activamente en el nuevo software para dominar la herramienta con prontitud.",
        "explicacion": "Conducta óptima. Refleja receptividad y disposición voluntaria al aprendizaje y adopción de tecnologías que modernizan la gestión pública tributaria."
      },
      {
        "id": "B",
        "texto": "Seguir usando el software antiguo a escondidas ignorando la directriz oficial de transición.",
        "explicacion": "Conducta deficiente. Genera desarticulación en las bases de datos y entorpece la interoperabilidad de la Entidad."
      },
      {
        "id": "C",
        "texto": "Promover quejas colectivas para exigir que se elimine el nuevo sistema porque requiere leer manuales.",
        "explicacion": "Conducta resistente que frena la innovación y la transformación digital de la DIAN."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Aprende y aplica con prontitud nuevas tecnologías y procedimientos establecidos para el desarrollo eficiente de sus labores.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_adap1_03",
    "nivel": "Técnico",
    "ejeId": "adaptabilidad_n1",
    "ejeNombre": "ADAPTABILIDAD NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Manejo de Variaciones en el Horario de Diligencias de Campo",
    "caso": "Por retrasos imprevistos en la llegada de un vuelo con mercancía sospechosa, una diligencia de inspección aduanera que iniciaría a las 2:00 p.m. se reprograma para las 6:30 p.m. de un viernes.",
    "enunciado": "¿Cuál es la respuesta que evidencia la competencia en su Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ajustar su agenda personal y laboral colaborativamente, manteniéndose disponible para la diligencia aduanera programada con profesionalismo y sentido de deber.",
        "explicacion": "Conducta óptima. En los empleos técnicos operativos de control fiscal y aduanero, las operaciones en frontera o puertos demandan flexibilidad horaria y adaptación a contingencias del transporte."
      },
      {
        "id": "B",
        "texto": "Abandonar el puesto de trabajo a las 5:00 p.m. apagando el celular sin coordinar con el profesional comisionado.",
        "explicacion": "Conducta deficiente. Falta disciplinaria por abandono de funciones y desidia operativa."
      },
      {
        "id": "C",
        "texto": "Exigir que se detenga el avión en el aire hasta el lunes siguiente en horario de oficina.",
        "explicacion": "Conducta absurda e inviable que desconoce las realidades de la operación de comercio exterior."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Modifica sus planes de trabajo y rutinas cuando las necesidades del servicio y del entorno operativo así lo exijan.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_adap2_01",
    "nivel": "Técnico",
    "ejeId": "adaptabilidad_n2",
    "ejeNombre": "ADAPTABILIDAD NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Anticipación y Ajuste Proactivo ante Contingencias Operativas Complejas",
    "caso": "Durante un operativo de allanamiento y decomiso aduanero en un sector de alta afluencia comercial, la lluvia torrencial inunda el patio de descargue habitual, impidiendo ingresar el camión con la carga aprehendida.",
    "enunciado": "¿Cuál es la respuesta del Analista IV que demuestra Adaptabilidad en Nivel 2?",
    "opciones": [
      {
        "id": "A",
        "texto": "Proponer y gestionar inmediatamente una ruta alterna de acceso techado y coordinar carpas de protección temporal para no suspender el descargue y asegurar la conservación de las pruebas y mercancías.",
        "explicacion": "Conducta superior (Nivel 2). La adaptabilidad en nivel 2 no solo acata el cambio, sino que identifica alternativas viables de forma autónoma y rápida frente a situaciones imprevistas del entorno operativo."
      },
      {
        "id": "B",
        "texto": "Sentarse en el camión a esperar que pasen varias horas a ver si el agua se seca sola sin hacer nada.",
        "explicacion": "Conducta pasiva que pone en riesgo el deterioro de las mercancías bajo custodia estatal."
      },
      {
        "id": "C",
        "texto": "Descargar la mercancía sobre los charcos de agua sucia sin importar que se dañen los empaques originales.",
        "explicacion": "Conducta negligente que destruye el valor y la cadena de custodia de los bienes aprehendidos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Resuelve situaciones imprevistas ajustando su propio comportamiento y proponiendo soluciones viables ante escenarios cambiantes o de incertidumbre.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_adap2_02",
    "nivel": "Técnico",
    "ejeId": "adaptabilidad_n2",
    "ejeNombre": "ADAPTABILIDAD NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Reorganización de Prioridades ante Metas Imprevistas del Plan de Choque",
    "caso": "La Dirección Seccional decreta un plan de choque de 15 días para depurar 500 expedientes aduaneros en riesgo de caducidad. El Analista IV tenía planificada la organización física del archivo secundario para ese mes.",
    "enunciado": "¿Cómo aplica la Adaptabilidad Nivel 2 el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Reprogramar su cronograma ordinario, diseñar una matriz de control ágil por orden de vencimiento y concertar con el equipo la distribución balanceada de expedientes para salvar los términos legales de la Entidad.",
        "explicacion": "Conducta superior (Nivel 2). Demuestra capacidad para priorizar objetivos críticos institucionales sobre rutinas secundarias, diseñando metodologías ágiles de trabajo en equipo."
      },
      {
        "id": "B",
        "texto": "Ignorar el plan de choque y continuar limpiando estantes porque eso fue lo que anotó en su libreta el mes pasado.",
        "explicacion": "Conducta miope que ocasiona que los términos legales caduquen con detrimento patrimonial para el Estado."
      },
      {
        "id": "C",
        "texto": "Renunciar a la entidad afirmando que los planes de choque le producen estrés no deseado.",
        "explicacion": "Conducta incompatible con la naturaleza dinámica del servicio público de fiscalización."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Identifica prioridades institucionales cambiantes y adapta sus métodos de trabajo para responder oportunamente a las exigencias operativas.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_adap2_03",
    "nivel": "Técnico",
    "ejeId": "adaptabilidad_n2",
    "ejeNombre": "ADAPTABILIDAD NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Adaptación ante Cambios Normativos Rápidos en Procedimientos Sancionatorios",
    "caso": "Se expide un nuevo decreto reglamentario que modifica los términos de notificación electrónica y los requisitos de los autos de decomiso aduanero con aplicación inmediata a procesos en curso.",
    "enunciado": "¿Cuál es la manifestación de Adaptabilidad Nivel 2 en este contexto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Estudiar la nueva normativa de inmediato, actualizar las plantillas de documentos técnicos a su cargo y compartir las modificaciones clave con sus compañeros para evitar que los actos administrativos salgan con normas derogadas.",
        "explicacion": "Conducta superior (Nivel 2). Asimila proactivamente el marco normativo sobreviniente y transfiere mejoras operativas a su entorno laboral, blindando la legalidad procesal."
      },
      {
        "id": "B",
        "texto": "Seguir usando las minutas del decreto anterior esperando que los abogados de los investigados no se den cuenta del cambio.",
        "explicacion": "Conducta negligente que provocará nulidades de pleno derecho en los procesos administrativos."
      },
      {
        "id": "C",
        "texto": "Quejarse de que el Gobierno cambia mucho las leyes y dejar de proyectar documentos durante tres meses.",
        "explicacion": "Conducta obstaculizadora contraria al dinamismo del empleo público técnico."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Se apropia con celeridad de las modificaciones regulatorias y ajusta los instrumentos técnicos a su cargo garantizando la vigencia normativa.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_etic1_01",
    "nivel": "Técnico",
    "ejeId": "comportamiento_etico_n1",
    "ejeNombre": "COMPORTAMIENTO ETICO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Cumplimiento Estricto de Normas y Directrices Institucionales",
    "caso": "Un amigo de infancia le pide al Analista IV que revise en el sistema interno de la DIAN si una empresa con la que va a hacer negocios tiene investigaciones tributarias o denuncias por facturas falsas.",
    "enunciado": "¿Cuál es la conducta esperada según el Comportamiento Ético en Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rehusarse rotundamente a consultar la información, explicándole a su amigo que los sistemas institucionales y la información tributaria están bajo reserva legal y su consulta indebida acarrea delito y sanción disciplinaria.",
        "explicacion": "Conducta ética ejemplar (Nivel 1). Acata sin vacilar las normas de confidencialidad, reserva tributaria (Art. 583 E.T.) y custodia de bases de datos públicas, priorizando la legalidad sobre relaciones personales."
      },
      {
        "id": "B",
        "texto": "Consultar la base de datos rápidamente durante la hora de almuerzo y tomarle fotos a la pantalla con el celular para mandárselas por mensajería privada.",
        "explicacion": "Conducta ilícita y violatoria del deber de reserva legal y uso debido de la información oficial."
      },
      {
        "id": "C",
        "texto": "Cobrarle a su amigo una comisión económica para darle un informe completo de la competencia.",
        "explicacion": "Conducta delictiva gravísima (utilización indebida de información privilegiada y cohecho)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Ley 1952 de 2019 (Código General Disciplinario)",
    "citaNormativa": "«Aplica rigurosamente las normas y procedimientos institucionales, garantizando la confidencialidad y el uso legal de la información del Estado.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_etic1_02",
    "nivel": "Técnico",
    "ejeId": "comportamiento_etico_n1",
    "ejeNombre": "COMPORTAMIENTO ETICO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Cuidado y Manejo de los Bienes y Equipos del Estado",
    "caso": "Al finalizar la jornada laboral, el Analista IV observa que varios compañeros imprimen apuntes de estudio y fotocopias de novelas personales utilizando el papel institucional y las impresoras de alto rendimiento del despacho.",
    "enunciado": "Desde el Comportamiento Ético Nivel 1, ¿cuál es la actitud que debe asumir el servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Abstenerse estrictamente de destinar los recursos e insumos institucionales a fines particulares y promover el uso austero y exclusivo de los bienes para las labores oficiales de la DIAN.",
        "explicacion": "Conducta ética íntegra (Nivel 1). Reconoce que los recursos materiales del Estado son sagrados y financiados por los tributos de los ciudadanos, debiendo destinarse exclusivamente a los fines misionales."
      },
      {
        "id": "B",
        "texto": "Aprovechar también para imprimir 500 páginas de su libro favorito porque el papel lo paga el gobierno.",
        "explicacion": "Conducta antiética de malversación y uso indebido de bienes públicos."
      },
      {
        "id": "C",
        "texto": "Llevarse resmas de papel para su casa en la maleta para tener papelería de reserva personal.",
        "explicacion": "Constituye falta disciplinaria y delito de peculado sobre bienes del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019 Art. 38 num. 2 y Código de Integridad DIAN",
    "citaNormativa": "«Los servidores públicos utilizarán los bienes y recursos asignados al desempeño de su empleo exclusivamente para los fines a que están legalmente destinados.» (Ley 1952 de 2019)."
  },
  {
    "id": "an4_comp_etic1_03",
    "nivel": "Técnico",
    "ejeId": "comportamiento_etico_n1",
    "ejeNombre": "COMPORTAMIENTO ETICO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Veracidad Absoluta en el Registro de Horas y Diligencias Operativas",
    "caso": "Durante una salida técnica a un puerto para conteo físico de mercancía que terminó a las 3:00 p.m., un colega le sugiere al Analista IV registrar en la planilla que la diligencia terminó a las 9:00 p.m. para cobrar horas extras sin haberlas trabajado.",
    "enunciado": "¿Cómo debe proceder el Analista IV según la competencia de Comportamiento Ético?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la propuesta y registrar con estricta veracidad la hora real de culminación de la diligencia en la planilla oficial, sin inflar tiempos ni buscar beneficios económicos fraudulentos.",
        "explicacion": "Conducta ética Nivel 1. La honestidad y veracidad en los informes de gestión y cobro de estipendios públicos es un pilar no negociable de la integridad pública."
      },
      {
        "id": "B",
        "texto": "Firmar la planilla inflada para no discutir con su colega y repartir el dinero cobrado indebidamente.",
        "explicacion": "Conducta penal de fraude procesal, falsedad en documento y peculado por apropiación."
      },
      {
        "id": "C",
        "texto": "Pedir que pongan que la diligencia duró 24 horas continuas para cobrar aún más.",
        "explicacion": "Conducta corrupta agravada incompatible con el servicio público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código Penal Art. 287 (Falsedad Material) y Ley 1952 de 2019",
    "citaNormativa": "«El servidor público actuará con honradez, veracidad y transparencia en el reporte de sus actividades y el reconocimiento de sus derechos laborales.» (Código de Integridad)."
  },
  {
    "id": "an4_comp_etic4_01",
    "nivel": "Técnico",
    "ejeId": "comportamiento_etico_n4",
    "ejeNombre": "COMPORTAMIENTO ETICO NIVEL 4",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Rechazo Frontal y Denuncia Inmediata ante Intentos de Soborno (Cero Tolerancia)",
    "caso": "En una diligencia de aprehensión de mercancía extranjera sin soportes, el propietario se acerca discretamente al Analista IV y le desliza un sobre con 5 millones de pesos en efectivo para que 'se le pase por alto' contar una caja con perfumes importados.",
    "enunciado": "¿Cuál es la respuesta categórica del servidor bajo el Comportamiento Ético en Nivel 4?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar tajantemente el soborno en presencia del equipo y los testigos, dejar constancia inmediata en el acta de hechos y solicitar el apoyo inmediato de la Policía Fiscal y Aduanera para judicializar en flagrancia el delito de cohecho.",
        "explicacion": "Conducta superior (Nivel 4). En el Nivel 4, el funcionario no solo rechaza la dádiva, sino que actúa como defensor activo de la integridad pública, activando la ruta judicial y protegiendo el interés colectivo con valentía moral."
      },
      {
        "id": "B",
        "texto": "Recibir el sobre disimuladamente y guardarlo en el bolsillo diciendo que es un préstamo personal.",
        "explicacion": "Delito consumado de cohecho propio, falta gravísima disciplinaria y destitución inmediata."
      },
      {
        "id": "C",
        "texto": "Decirle al comerciante que 5 millones es muy poco y que necesita 20 millones para pensarlo.",
        "explicacion": "Conducta criminal de concusión y corrupción flagrante."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código Penal Art. 407 (Cohecho por dar u ofrecer) y Directiva Presidencial de Transparencia",
    "citaNormativa": "«Denuncia activamente cualquier acto de corrupción, soborno o irregularidad del cual tenga conocimiento, promoviendo una cultura de probidad institucional.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_etic4_02",
    "nivel": "Técnico",
    "ejeId": "comportamiento_etico_n4",
    "ejeNombre": "COMPORTAMIENTO ETICO NIVEL 4",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Declaración Obligatoria de Conflicto de Interés en Fiscalización",
    "caso": "Al recibir el reparto de expedientes para control de omisos de retención en la fuente, el Analista IV descubre que uno de los contribuyentes asignados es la firma comercial de propiedad de su cónyuge y de su hermano.",
    "enunciado": "De acuerdo con el Código General Disciplinario (Ley 1952 de 2019) y el nivel 4 de la competencia ética, ¿qué debe hacer?",
    "opciones": [
      {
        "id": "A",
        "texto": "Declararse formalmente impedido por escrito ante su superior jerárquico el mismo día de la asignación, explicando la causal de parentesco y conflicto de interés para que el expediente sea reasignado a otro funcionario.",
        "explicacion": "Conducta superior (Nivel 4). El deber de transparencia exige revelar oportunamente cualquier conflicto de interés real o potencial (Ley 1437/Ley 1952), garantizando la imparcialidad y la neutralidad absoluta de la DIAN."
      },
      {
        "id": "B",
        "texto": "Guardar silencio, tramitar el expediente en secreto y archivar todas las deudas de su familia sin que nadie se entere.",
        "explicacion": "Falta disciplinaria gravísima por actuar estando impedido e interés indebido en la celebración de actos públicos."
      },
      {
        "id": "C",
        "texto": "Llamar a su cónyuge para que cambie de nombre la empresa antes del mediodía.",
        "explicacion": "Fraude procesal y complicidad en simulación comercial."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019 Art. 40 (Conflicto de Intereses) y CPACA Art. 11",
    "citaNormativa": "«Todo servidor público deberá declararse impedido para actuar en un asunto cuando tenga interés particular y directo en su regulación, gestión o decisión.» (Ley 1952 de 2019, Art. 40)."
  },
  {
    "id": "an4_comp_etic4_03",
    "nivel": "Técnico",
    "ejeId": "comportamiento_etico_n4",
    "ejeNombre": "COMPORTAMIENTO ETICO NIVEL 4",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Protección de Testigos y Denunciantes en Casos de Corrupción Interna",
    "caso": "Un Analista IV descubre que un superior jerárquico elimina sistemáticamente del sistema las alertas de fiscalización de contrabandistas conocidos a cambio de pagos ilícitos.",
    "enunciado": "¿Cuál es la actuación institucional que evidencia Comportamiento Ético Nivel 4?",
    "opciones": [
      {
        "id": "A",
        "texto": "Compilar de forma reservada los registros informáticos de auditoría (logs) y presentar una denuncia formal y sustentada ante la Oficina de Control Interno Disciplinario y la Dirección de Fiscalía competente, solicitando reserva de identidad.",
        "explicacion": "Conducta superior (Nivel 4). La integridad pública en su máximo nivel asume el compromiso ético de denunciar la corrupción interna con pruebas objetivas, rompiendo pactos de silencio y defendiendo la institucionalidad."
      },
      {
        "id": "B",
        "texto": "Aliarse con el superior para pedirle una comisión por guardar silencio.",
        "explicacion": "Conducta criminal que tipifica concierto para delinquir y cohecho propio."
      },
      {
        "id": "C",
        "texto": "Fingir demencia y no denunciar por temor a que el jefe le asigne expedientes con más páginas.",
        "explicacion": "Omisión cobarde del deber de denuncia de delitos conocidos en ejercicio del cargo público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 2195 de 2022 (Ley de Transparencia y Lucha contra la Corrupción) y Ley 1952 de 2019",
    "citaNormativa": "«El Estado protegerá la identidad y los derechos laborales de los servidores públicos que denuncien de buena fe hechos de corrupción.» (Ley 2195 de 2022)."
  },
  {
    "id": "an4_comp_com1_01",
    "nivel": "Técnico",
    "ejeId": "comunicacion_efectiva_n1",
    "ejeNombre": "COMUNICACION EFECTIVA NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Redacción Clara, Concisa y Sin Ambigüedades en Informes Técnicos",
    "caso": "A un Analista IV se le encomienda redactar el informe técnico preliminar sobre una denuncia de omisión en facturación electrónica de una estación de gasolina.",
    "enunciado": "De acuerdo con la competencia de Comunicación Efectiva Nivel 1, ¿cuál es el estándar de redacción que debe caracterizar su producto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Estructurar el documento con orden cronológico, lenguaje técnico preciso pero directo, citando fechas, números de soporte, hechos concretos observados y evitando juicios subjetivos o adjetivos innecesarios.",
        "explicacion": "Conducta óptima (Nivel 1). La comunicación efectiva escrita a nivel técnico exige claridad expositiva, síntesis, rigor en los datos y estricto apego a los hechos probados sin ambigüedades."
      },
      {
        "id": "B",
        "texto": "Redactar un texto de 80 páginas lleno de poemas y apreciaciones personales sobre la personalidad del dueño de la estación.",
        "explicacion": "Conducta inadecuada. Hace perder tiempo, confunde el objeto probatorio y carece de validez jurídica."
      },
      {
        "id": "C",
        "texto": "Escribir un párrafo de dos renglones con errores ortográficos graves diciendo 'ahí les dejo las facturas para que las miren'.",
        "explicacion": "Conducta deficiente. Falta de profesionalismo, negligencia e incompetencia comunicativa."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 y Manual de Redacción Administrativa DIAN",
    "citaNormativa": "«Redacta informes y documentos técnicos con claridad, coherencia lógica, precisión sintáctica y lenguaje institucional apropiado.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_com1_02",
    "nivel": "Técnico",
    "ejeId": "comunicacion_efectiva_n1",
    "ejeNombre": "COMUNICACION EFECTIVA NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Escucha Activa ante Instrucciones Complejas del Profesional Líder",
    "caso": "En una reunión operativa previa a una inspección de inventarios, el profesional tributario explica las pautas para verificar las mermas y desperdicios de una fábrica química.",
    "enunciado": "¿Cómo evidencia el Analista IV la competencia de escucha activa y comunicación efectiva Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tomar notas ordenadas de los puntos críticos, parafrasear al final para confirmar el entendimiento cabal de las variables técnicas y formular preguntas puntuales sobre las dudas procedimentales.",
        "explicacion": "Conducta óptima (Nivel 1). La escucha activa y la retroalimentación confirman la comprensión mutua antes de actuar en el terreno, minimizando errores y reprocesos."
      },
      {
        "id": "B",
        "texto": "Revisar redes sociales en el celular durante toda la reunión asumiendo que luego adivinará qué hacer.",
        "explicacion": "Conducta deficiente. Desatención que induce a errores operativos en la práctica de pruebas."
      },
      {
        "id": "C",
        "texto": "Interrumpir cada dos palabras para contradecir al profesional sin haber escuchado la explicación completa.",
        "explicacion": "Conducta desarticuladora que afecta la coordinación del equipo de trabajo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Escucha con atención, confirma la comprensión de las directrices y formula inquietudes de manera oportuna y respetuosa.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_com1_03",
    "nivel": "Técnico",
    "ejeId": "comunicacion_efectiva_n1",
    "ejeNombre": "COMUNICACION EFECTIVA NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Claridad en el Registro de Folios y Anexos en Comunicaciones Oficiales",
    "caso": "Al trasladar un expediente probatorio a la División de Liquidación, el Analista IV debe redactar el memorando interno de remisión técnica.",
    "enunciado": "¿Cuál es la práctica comunicativa que garantiza la trazabilidad y eficacia administrativa?",
    "opciones": [
      {
        "id": "A",
        "texto": "Detallar con exactitud el número de carpetas, el rango de folios consecutivos remitidos, la lista precisa de anexos (CDs, memorias, muestras) y el estado procesal del expediente.",
        "explicacion": "Conducta óptima (Nivel 1). La comunicación formal interna debe brindar certeza absoluta sobre el contenido material transferido, evitando extravíos o vacíos de responsabilidad."
      },
      {
        "id": "B",
        "texto": "Enviar las carpetas amarradas con una pita sin memorando ni conteo de hojas.",
        "explicacion": "Conducta negligente que rompe la cadena de custodia y los estándares de gestión documental."
      },
      {
        "id": "C",
        "texto": "Anotar en un papel borrador 'ahí van unos papeles viejos para que los liquiden'.",
        "explicacion": "Conducta informal inadmisible en la administración pública tributaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Acuerdo 060 de 2001 AGN y Manual de Procedimientos DIAN",
    "citaNormativa": "«Las comunicaciones internas consignarán con precisión la descripción de los expedientes y anexos remitidos para asegurar su trazabilidad.» (Acuerdo AGN 060 de 2001)."
  },
  {
    "id": "an4_comp_com2_01",
    "nivel": "Técnico",
    "ejeId": "comunicacion_efectiva_n2",
    "ejeNombre": "COMUNICACION EFECTIVA NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Manejo Asertivo de Situaciones Tensas con Contribuyentes en Diligencias",
    "caso": "Durante una diligencia de aprehensión de mercancía en un depósito, el importador investigado comienza a gritar al equipo técnico, acusándolos de 'ladrones' y amenazando con demandas penales.",
    "enunciado": "¿Cuál es el proceder comunicativo asertivo que demuestra Nivel 2 en la competencia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Mantener el tono de voz calmado y firme, explicar con respeto las facultades legales de la DIAN y la causal de aprehensión, indicándole los canales institucionales y el plazo legal de 10 días para ejercer su derecho de defensa con pruebas.",
        "explicacion": "Conducta superior (Nivel 2). La asertividad en Nivel 2 desescala conflictos, no responde a provocaciones, mantiene el decoro institucional y encauza el reclamo hacia el procedimiento legal reglado."
      },
      {
        "id": "B",
        "texto": "Contestarle con los mismos insultos y retarlo a pelear a puños fuera del depósito.",
        "explicacion": "Conducta violenta inaceptable que daña la imagen de la DIAN y acarrea destitución disciplinaria."
      },
      {
        "id": "C",
        "texto": "Llorar y devolverle la mercancía aprehendida para que no siga gritando.",
        "explicacion": "Conducta de claudicación indebida del deber de control aduanero del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Maneja situaciones de comunicación complejas o conflictivas con asertividad, respeto, empatía y orientación pedagógica hacia los ciudadanos.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_com2_02",
    "nivel": "Técnico",
    "ejeId": "comunicacion_efectiva_n2",
    "ejeNombre": "COMUNICACION EFECTIVA NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Articulación y Transmisión Asertiva de Mensajes Interdisciplinarios",
    "caso": "Para un operativo de allanamiento y decomiso, el Analista IV debe coordinar con el enlace de la Policía Fiscal y Aduanera (POLFA) y con los peritos de sistemas forenses los requerimientos logísticos de la jornada.",
    "enunciado": "¿Cómo ejerce la Comunicación Efectiva Nivel 2 en este entorno?",
    "opciones": [
      {
        "id": "A",
        "texto": "Adaptar el mensaje al lenguaje técnico operativo de la fuerza pública y de los peritos informáticos, consolidando un cronograma conjunto y verificando que cada grupo conozca sus roles y protocolos de seguridad.",
        "explicacion": "Conducta superior (Nivel 2). Implica adaptar el registro y canal comunicativo según los perfiles de los actores interinstitucionales, garantizando sincronía y sinergia en la operación."
      },
      {
        "id": "B",
        "texto": "Mandar un mensaje de texto incompleto la noche anterior sin dar la dirección del lugar.",
        "explicacion": "Conducta deficiente que compromete el éxito y la seguridad física del operativo institucional."
      },
      {
        "id": "C",
        "texto": "Exigir que la Policía y los peritos adivinen la estrategia sin darles información previa.",
        "explicacion": "Conducta arrogante y disfuncional contraria a la coordinación intersectorial."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Transmite mensajes claros y adaptados a diversos interlocutores, facilitando la coordinación interdisciplinaria e interinstitucional.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_com2_03",
    "nivel": "Técnico",
    "ejeId": "comunicacion_efectiva_n2",
    "ejeNombre": "COMUNICACION EFECTIVA NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Lenguaje Claro y Pedagógico en la Orientación a Usuarios Vulnerables",
    "caso": "Un pequeño comerciante campesino que no sabe leer con fluidez se acerca al punto de fiscalización con una citación de la DIAN visiblemente angustiado creyendo que lo van a mandar a prisión.",
    "enunciado": "¿Cuál es la conducta del Analista IV orientada por la Comunicación Efectiva Nivel 2?",
    "opciones": [
      {
        "id": "A",
        "texto": "Atenderlo con paciencia y calidez humana, traducir los tecnicismos jurídicos a un lenguaje sencillo y cotidiano, explicándole con claridad en qué consiste el trámite y guiándolo paso a paso para que regularice su situación.",
        "explicacion": "Conducta superior (Nivel 2). La comunicación efectiva en el nivel técnico al servicio de la ciudadanía democratiza el acceso a la justicia fiscal y materializa el mandato de Lenguaje Claro del Estado colombiano."
      },
      {
        "id": "B",
        "texto": "Leerle de corrido 15 artículos del Estatuto Tributario en voz alta y decirle que si no entiende que contrate un abogado costoso.",
        "explicacion": "Conducta insensible y elitista que aleja al ciudadano del cumplimiento voluntario."
      },
      {
        "id": "C",
        "texto": "Burlarse de su angustia y decirle que se prepare para perder todos sus bienes.",
        "explicacion": "Conducta cruel e inhumana que vulnera la dignidad del ciudadano y acarrea sanción disciplinaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Guía de Lenguaje Claro (DAFP/DNP) y Decreto 815 de 2018",
    "citaNormativa": "«Facilita la comprensión de los trámites públicos empleando un lenguaje claro, accesible y empático acorde con la condición del usuario.» (Guía Lenguaje Claro)."
  },
  {
    "id": "an4_comp_logro1_01",
    "nivel": "Técnico",
    "ejeId": "orientacion_logro_n1",
    "ejeNombre": "ORIENTACION AL LOGRO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Cumplimiento Oportuno de Metas Asignadas de Revisión de Expedientes",
    "caso": "El Analista IV tiene asignada la meta semanal de clasificar preliminarmente 40 denuncias de fiscalización. Al llegar al día jueves, advierte que solo ha completado 25 debido a intermitencias técnicas a inicio de semana.",
    "enunciado": "De acuerdo con la Orientación al Logro Nivel 1, ¿cuál es la conducta esperada del servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Concentrar sus esfuerzos, optimizar la metodología de revisión y extender con dedicación su jornada para evacuar las 15 denuncias pendientes y alcanzar el 100% de la meta semanal sin descuidar la calidad técnica.",
        "explicacion": "Conducta óptima (Nivel 1). La orientación al logro a nivel técnico implica asumir la responsabilidad personal por los resultados asignados, buscando activamente superar obstáculos para cumplir los compromisos en el plazo fijado."
      },
      {
        "id": "B",
        "texto": "Marcar las 15 denuncias restantes como 'aprobadas' sin haberlas leído para que el sistema marque la meta en verde.",
        "explicacion": "Conducta fraudulenta y gravísima que vulnera la seguridad del control fiscal."
      },
      {
        "id": "C",
        "texto": "Apagar el equipo a las 3:00 p.m. del viernes diciendo que las metas de la DIAN son demasiado altas y no le interesan.",
        "explicacion": "Conducta negligente y carente de orientación al logro y responsabilidad laboral."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Cumple con oportunidad, eficiencia y calidad las metas y resultados fijados para su empleo o dependencia de trabajo.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_logro1_02",
    "nivel": "Técnico",
    "ejeId": "orientacion_logro_n1",
    "ejeNombre": "ORIENTACION AL LOGRO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Atención al Detalle y Cero Errores en la Elaboración de Actos Administrativos",
    "caso": "El Analista IV debe proyectar 10 autos de archivo de expedientes tributarios. Aunque tiene prisa por salir a un compromiso personal, sabe que un error en el NIT o en los valores numéricos genera nulidad procesal.",
    "enunciado": "¿Cómo actúa el servidor bajo el principio de Orientación al Logro Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Realizar una verificación cruzada rigurosa de cada NIT, nombre y valor frente a las bases de datos oficiales antes de enviar los actos a la firma del jefe, asegurando exactitud y pulcritud técnica.",
        "explicacion": "Conducta óptima (Nivel 1). La orientación al logro no es solo rapidez cuantitativa, sino garantizar que el producto final cumpla los estándares de calidad y rigor que blindan los procesos de la DIAN."
      },
      {
        "id": "B",
        "texto": "Enviar los autos con nombres cambiados e inventados para poder salir rápido a su compromiso.",
        "explicacion": "Conducta negligente que ocasiona revocatorias directas y nulidades en sede administrativa."
      },
      {
        "id": "C",
        "texto": "Delegar la proyección de los autos a un practicante sin revisar nada de lo que este redacte.",
        "explicacion": "Omisión indebida de la responsabilidad directa del cargo técnico."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Aplica rigurosidad y atención a los detalles técnicos, asegurando que los documentos elaborados carezcan de errores formales o sustanciales.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_logro1_03",
    "nivel": "Técnico",
    "ejeId": "orientacion_logro_n1",
    "ejeNombre": "ORIENTACION AL LOGRO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Iniciativa para Despejar Cuellos de Botella Operativos en el Archivo",
    "caso": "En el área de radicación técnica se produce un represamiento de 200 actas de notificación personal que no han sido escaneadas ni vinculadas a sus respectivos expedientes virtuales.",
    "enunciado": "¿Cuál es la propuesta del Analista IV que demuestra Orientación al Logro?",
    "opciones": [
      {
        "id": "A",
        "texto": "Identificar los expedientes con términos procesales más próximos a vencer, priorizar su escaneo inmediato y proponer al grupo una jornada coordinada de digitalización por lotes para superar el cuello de botella.",
        "explicacion": "Conducta óptima (Nivel 1). Muestra iniciativa práctica y enfoque en resultados tangibles, priorizando por riesgo de caducidad para proteger la gestión institucional."
      },
      {
        "id": "B",
        "texto": "Esconder las 200 actas en un armario cerrado con llave para que nadie pregunte por ellas.",
        "explicacion": "Conducta punible de ocultamiento de documento público y falta gravísima."
      },
      {
        "id": "C",
        "texto": "Cruzar los brazos y manifestar que ese trabajo le corresponde exclusivamente a la siguiente administración.",
        "explicacion": "Actitud pasiva y contraria al sentido de logro y servicio público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Propone acciones concretas y metodologías sencillas para superar obstáculos y asegurar el cumplimiento de los procesos asignados.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_usr1_01",
    "nivel": "Técnico",
    "ejeId": "orientacion_usuario_n1",
    "ejeNombre": "ORIENTACION AL USUARIO Y AL CIUDADANO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Trato Cortés, Oportuno y Transparente en la Atención Presencial",
    "caso": "Un contribuyente de la tercera edad acude a la ventanilla de fiscalización confundido porque recibió una notificación electrónica de un pliego de cargos y no cuenta con correo ni computadora en su hogar.",
    "enunciado": "Bajo la competencia de Orientación al Usuario y Ciudadano Nivel 1, ¿cómo debe actuar el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Atenderlo con calidez y paciencia, imprimirle una copia física del acto administrativo notificado, explicarle de forma clara y accesible el término y las opciones de respuesta que tiene, y orientarlo sobre los puntos de atención presencial de la DIAN.",
        "explicacion": "Conducta óptima (Nivel 1). Garantiza la inclusión, el debido proceso y la atención prioritaria y digna a ciudadanos en situación de vulnerabilidad o analfabetismo digital."
      },
      {
        "id": "B",
        "texto": "Decirle de mala manera que si no tiene internet no es problema de la DIAN y que vuelva cuando aprenda a usar el computador.",
        "explicacion": "Conducta inhumana, déspota y discriminatoria que vulnera el Estatuto de Atención al Ciudadano."
      },
      {
        "id": "C",
        "texto": "Recomendarle a su propio bufete de abogados privado para cobrarle honorarios de asesoría particular.",
        "explicacion": "Conflicto de interés y falta disciplinaria gravísima de utilización indebida del cargo público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1437 de 2011 Art. 5 (Derechos de las Personas) y Decreto 815 de 2018",
    "citaNormativa": "«Brinda una atención respetuosa, comprensiva, transparente y oportuna a los ciudadanos, facilitando el ejercicio de sus derechos y deberes.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_usr1_02",
    "nivel": "Técnico",
    "ejeId": "orientacion_usuario_n1",
    "ejeNombre": "ORIENTACION AL USUARIO Y AL CIUDADANO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Respeto a los Tiempos del Ciudadano y Celeridad en Trámites Técnicos",
    "caso": "Son las 11:55 a.m. y el Analista IV tiene listo su almuerzo para las 12:00 m. En ese instante se acerca a la ventanilla una comerciante que viajó 4 horas desde un municipio rural para radicar pruebas dentro de un proceso aduanero antes de que venza su plazo hoy.",
    "enunciado": "¿Cuál es la conducta del servidor que refleja Orientación al Usuario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Recibir los documentos de inmediato con toda la atención requerida, verificar los folios y radicar oportunamente el memorial en el sistema, asegurando que la ciudadana conserve su constancia con fecha y hora antes de hacer su pausa de almuerzo.",
        "explicacion": "Conducta óptima (Nivel 1). Demuestra empatía, compromiso de servicio público y respeto por el esfuerzo del ciudadano, evitando perjuicios procesales irreparables."
      },
      {
        "id": "B",
        "texto": "Bajar la ventanilla en la cara de la señora diciéndole que vuelva a las 2:00 p.m. porque su almuerzo no puede esperar un minuto.",
        "explicacion": "Conducta reprochable de indolencia y desinterés hacia las necesidades de los usuarios."
      },
      {
        "id": "C",
        "texto": "Botarle los documentos al piso para que desista de su trámite.",
        "explicacion": "Conducta agresiva y constitutiva de falta disciplinaria sancionable."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1437 de 2011 Art. 7 y Código de Integridad de la Función Pública",
    "citaNormativa": "«El servidor público antepondrá el servicio a los ciudadanos a sus comodidades personales, garantizando una atención ágil y eficaz.» (Código de Integridad)."
  },
  {
    "id": "an4_comp_usr1_03",
    "nivel": "Técnico",
    "ejeId": "orientacion_usuario_n1",
    "ejeNombre": "ORIENTACION AL USUARIO Y AL CIUDADANO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Imparcialidad y Ausencia de Discriminación en la Atención Ciudadana",
    "caso": "A la oficina técnica ingresan dos personas a solicitar orientación: un influyente empresario local vestido formalmente y una vendedora ambulante de origen étnico con vestimenta tradicional.",
    "enunciado": "De acuerdo con el mandato constitucional y la competencia de Orientación al Usuario, ¿cómo debe proceder el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Atender a ambos con el mismo nivel de esmero, respeto, dignidad e imparcialidad, respetando el orden estricto de llegada o turno sin privilegios ni sesgos socioeconómicos o raciales.",
        "explicacion": "Conducta óptima (Nivel 1). El principio constitucional de igualdad (Art. 13 C.P.) y el servicio público prohíben cualquier discriminación o privilegio indebido basado en posición social, raza, género o condición económica."
      },
      {
        "id": "B",
        "texto": "Hacer pasar de inmediato al empresario a una sala VIP y dejar a la vendedora ambulante de pie bajo el sol durante horas.",
        "explicacion": "Conducta discriminatoria flagrante y violatoria de la Constitución y el régimen disciplinario."
      },
      {
        "id": "C",
        "texto": "Negar la atención a ambos para no tener que atender a nadie.",
        "explicacion": "Omisión de funciones y denegación de servicios públicos legalmente debidos."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política Art. 13 y Ley 1437 de 2011 Art. 3",
    "citaNormativa": "«Las autoridades darán el mismo trato y protección a todas las personas en sus relaciones con la administración, sin discriminación alguna.» (Ley 1437 de 2011, Art. 3)."
  },
  {
    "id": "an4_comp_eq1_01",
    "nivel": "Técnico",
    "ejeId": "trabajo_equipo_n1",
    "ejeNombre": "TRABAJO EN EQUIPO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Colaboración Activa y Cumplimiento del Rol Individual en el Grupo",
    "caso": "En una diligencia de allanamiento e inspección de mercancías en una bodega, el equipo se divide las tareas: dos profesionales practican la inspección contable, un analista custodia el perímetro con la policía y el Analista IV tiene asignado el inventario físico y conteo de bultos.",
    "enunciado": "¿Cómo evidencia el Analista IV el Trabajo en Equipo Nivel 1?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ejecutar su rol de conteo con máxima concentración y exactitud, informando periódicamente al líder los subtotales e integrando sus planillas de conteo de forma sincronizada con el acta general de la diligencia.",
        "explicacion": "Conducta óptima (Nivel 1). El trabajo en equipo a nivel técnico se fundamenta en asumir con disciplina y rigor la parte asignada del engranaje operativo, comunicando avances oportunamente para el logro del objetivo común."
      },
      {
        "id": "B",
        "texto": "Abandonar el conteo para irse a fumar un cigarrillo a la esquina dejando las cajas a medio contar.",
        "explicacion": "Conducta irresponsable que rompe la sincronización del equipo y arriesga la pérdida de mercancía."
      },
      {
        "id": "C",
        "texto": "Interferir en la labor de los peritos contables descalificando su trabajo sin haber terminado el suyo propio.",
        "explicacion": "Conducta disociadora que genera conflictos y retrasos en la diligencia oficial."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Aporta activamente desde su rol particular al logro de los objetivos del equipo, colaborando con los demás miembros con sentido de responsabilidad compartida.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_eq1_02",
    "nivel": "Técnico",
    "ejeId": "trabajo_equipo_n1",
    "ejeNombre": "TRABAJO EN EQUIPO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Apoyo Solidario a Compañeros con Sobrecarga de Expedientes Urgentes",
    "caso": "El Analista IV concluye sus tareas del día a las 3:30 p.m. Al mirar el puesto de su compañera técnica de escritorio, observa que ella tiene una pila de expedientes aduaneros cuya notificación vence hoy y se encuentra desbordada.",
    "enunciado": "De acuerdo con el Trabajo en Equipo Nivel 1, ¿cuál es la actitud adecuada?",
    "opciones": [
      {
        "id": "A",
        "texto": "Acercarse amablemente, ofrecerle apoyo solidario y coordinar la revisión y foliación de parte de los expedientes para garantizar que la meta colectiva del grupo se cumpla a tiempo sin errores.",
        "explicacion": "Conducta óptima (Nivel 1). La solidaridad y cooperación desinteresada entre pares refuerza la cohesión del equipo y evita que la dependencia incurra en silencios administrativos o caducidades."
      },
      {
        "id": "B",
        "texto": "Burlarse de su compañera y marcharse silbando para demostrar que él es más rápido.",
        "explicacion": "Conducta mezquina e individualista contraria a la cultura de equipo institucional."
      },
      {
        "id": "C",
        "texto": "Ofrecerse a ayudarla únicamente si ella le paga dinero en efectivo por hora de trabajo.",
        "explicacion": "Comercialización ilegal del tiempo y deberes públicos en el despacho estatal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Demuestra disposición para apoyar a sus compañeros cuando las cargas de trabajo o contingencias de la dependencia lo ameriten.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_eq1_03",
    "nivel": "Técnico",
    "ejeId": "trabajo_equipo_n1",
    "ejeNombre": "TRABAJO EN EQUIPO NIVEL 1",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Transferencia Generosa del Conocimiento Técnico a Nuevos Integrantes",
    "caso": "Llega un nuevo analista técnico recién posesionado al grupo de fiscalización que tiene dudas sobre cómo generar los reportes de cruces exógenos en el software de la DIAN.",
    "enunciado": "¿Cómo actúa el Analista IV según la competencia de Trabajo en Equipo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Compartir con agrado sus conocimientos prácticos, explicarle paso a paso las rutas del sistema y facilitarle guías y minutas modelo para que adquiera autonomía rápidamente en el cargo.",
        "explicacion": "Conducta óptima (Nivel 1). La transferencia de conocimiento técnico y la acogida pedagógica a los nuevos miembros fortalece la capacidad instalada y la eficiencia del equipo."
      },
      {
        "id": "B",
        "texto": "Ocultar sus apuntes y decirle al nuevo compañero que en la DIAN cada quien debe aprender sufriendo solo.",
        "explicacion": "Conducta egoísta que genera pérdidas de tiempo institucional y debilita la curva de aprendizaje."
      },
      {
        "id": "C",
        "texto": "Dañarle la clave de acceso al nuevo para que lo despidan en el periodo de prueba.",
        "explicacion": "Conducta de sabotaje doloso sancionada disciplinaria y penalmente."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7 y Política de Gestión del Conocimiento MIPG",
    "citaNormativa": "«Comparte información, conocimientos y experiencias con los integrantes del equipo para facilitar su desempeño y aprendizaje continuo.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_eq2_01",
    "nivel": "Técnico",
    "ejeId": "trabajo_equipo_n2",
    "ejeNombre": "TRABAJO EN EQUIPO NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Articulación Proactiva y Resolución de Fricciones Interfuncionales",
    "caso": "Surge un desacuerdo operativo entre los técnicos de archivo y los técnicos de fiscalización sobre el formato de entrega de las pruebas recaudadas en inspecciones de campo, lo que está retrasando la radicación de expedientes.",
    "enunciado": "¿Cuál es la intervención del Analista IV que demuestra Trabajo en Equipo Nivel 2?",
    "opciones": [
      {
        "id": "A",
        "texto": "Promover una reunión breve de concertación entre ambos grupos, identificar los cuellos de botella y proponer una lista de chequeo unificada y sencilla que satisfaga los requisitos de archivo y agilice la labor de fiscalización.",
        "explicacion": "Conducta superior (Nivel 2). La competencia en Nivel 2 actúa como puente constructivo entre áreas distintas, diseñando acuerdos operativos estandarizados que benefician el flujo de trabajo global."
      },
      {
        "id": "B",
        "texto": "Tomar partido ciegamente por su grupo y negarse a hablar con los técnicos del archivo durante todo el año.",
        "explicacion": "Conducta sectaria que agrava los retrasos administrativos y la fragmentación institucional."
      },
      {
        "id": "C",
        "texto": "Botar los expedientes en el pasillo para que alguien más se encargue del problema.",
        "explicacion": "Abandono de funciones y desidia procesal inexcusable."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Facilita la articulación armónica entre diferentes dependencias y propone soluciones consensuadas que optimizan los procesos compartidos.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_eq2_02",
    "nivel": "Técnico",
    "ejeId": "trabajo_equipo_n2",
    "ejeNombre": "TRABAJO EN EQUIPO NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Construcción de Sinergia y Clima de Confianza en Operativos de Alto Riesgo",
    "caso": "Antes de salir a un operativo aduanero nocturno en una zona portuaria compleja, varios miembros del equipo manifiestan tensión, temor e incertidumbre sobre la logística de seguridad y repliegue.",
    "enunciado": "¿Cómo aplica el Trabajo en Equipo Nivel 2 el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Mantener una actitud serena y constructiva, revisar conjuntamente con el equipo y los mandos policiales la hoja de ruta y puntos de seguridad, transmitiendo serenidad, enfoque y confianza mutua entre todos los compañeros.",
        "explicacion": "Conducta superior (Nivel 2). Fomenta un clima de seguridad psicológica, autocuidado y cohesión emocional que resulta vital para la efectividad y preservación de la vida en operativos de campo."
      },
      {
        "id": "B",
        "texto": "Comenzar a gritar que todos van a salir heridos y salir corriendo de la estación.",
        "explicacion": "Conducta de pánico desestabilizadora que dinamita la moral y disciplina operativa del equipo."
      },
      {
        "id": "C",
        "texto": "Burlarse de los temores legítimos de sus compañeros diciéndoles que son cobardes.",
        "explicacion": "Conducta desconsiderada que destruye la confianza y la comunicación interna del grupo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7",
    "citaNormativa": "«Promueve la confianza mutua, el respeto y la cooperación en situaciones de alta presión o exigencia operativa.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_comp_eq2_03",
    "nivel": "Técnico",
    "ejeId": "trabajo_equipo_n2",
    "ejeNombre": "TRABAJO EN EQUIPO NIVEL 2",
    "tipo": "Comportamental (Clasificatorio - 15%)",
    "tema": "Reconocimiento y Celebración de los Logros Colectivos del Grupo",
    "caso": "La seccional alcanza el primer lugar nacional en efectividad de control aduanero y aprehensión de contrabando durante el trimestre. El Director felicita al equipo técnico en un acto general.",
    "enunciado": "¿Cuál es la actitud del Analista IV que refleja madurez en el Trabajo en Equipo Nivel 2?",
    "opciones": [
      {
        "id": "A",
        "texto": "Reconocer con humildad que el éxito es fruto del esfuerzo articulado de todos los inspectores, técnicos, conductores y personal administrativo, compartiendo el mérito colectivamente y motivando al grupo a seguir adelante.",
        "explicacion": "Conducta superior (Nivel 2). La madurez en trabajo en equipo subordina el protagonismo egoísta al reconocimiento del valor de cada rol en la cadena de valor de la Entidad."
      },
      {
        "id": "B",
        "texto": "Afirmar públicamente que él hizo todo el trabajo solo y que los demás 30 compañeros son unos incompetentes que no hicieron nada.",
        "explicacion": "Conducta arrogante, falsa y profundamente tóxica para el clima laboral."
      },
      {
        "id": "C",
        "texto": "Enojarse porque no le dieron un trofeo de oro macizo exclusivamente para él.",
        "explicacion": "Egoísmo infantil contrario a los principios de la función pública del Estado."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 815 de 2018 Art. 2.2.4.7 y Código de Integridad",
    "citaNormativa": "«Valora y visibiliza los aportes de todos los miembros del equipo, fortaleciendo el sentido de pertenencia y orgullo institucional.» (Decreto 815 de 2018)."
  },
  {
    "id": "an4_integ_comp_01",
    "nivel": "Técnico",
    "ejeId": "compromiso",
    "ejeNombre": "COMPROMISO",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Sentido de Pertenencia y Convicción en la Función Pública",
    "caso": "Durante un día de lluvia y transporte público congestionado, el Analista IV debe asegurar la apertura puntual de la ventanilla de radicación técnica para que los ciudadanos no pierdan sus citas de trámites tributarios.",
    "enunciado": "De acuerdo con el valor del Compromiso en el Código de Integridad, ¿cómo actúa el servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Planear su desplazamiento con suficiente anticipación previendo el tráfico, llegar a tiempo y abrir con puntualidad y orgullo por su labor, entendiendo que su trabajo garantiza los derechos de la ciudadanía.",
        "explicacion": "Valor Compromiso. Compromiso es asumir el servicio público con vocación, conciencia ciudadana y entrega personal, superando dificultades cotidianas para honrar la palabra y el deber legal."
      },
      {
        "id": "B",
        "texto": "Quedarse en casa durmiendo hasta el mediodía sin avisar a nadie porque el clima estaba frío.",
        "explicacion": "Falta de compromiso absoluto, irresponsabilidad y abandono del servicio público."
      },
      {
        "id": "C",
        "texto": "Llegar a las 2:00 p.m. y manifestarle a los usuarios que a él no le pagan lo suficiente para madrugar con lluvia.",
        "explicacion": "Desprecio por el servicio público y falta de respeto hacia la ciudadanía."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad del Servicio Público (DAFP) - Valor Compromiso",
    "citaNormativa": "«Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_comp_02",
    "nivel": "Técnico",
    "ejeId": "compromiso",
    "ejeNombre": "COMPROMISO",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Protección Proactiva de los Recursos Públicos de la Entidad",
    "caso": "Al salir de la oficina en la noche, el Analista IV se percata de que en un piso donde ya no hay personal quedaron las luces encendidas, tres aires acondicionados en su máxima potencia y dos pantallas de computador encendidas.",
    "enunciado": "¿Cuál es la conducta que refleja el valor del Compromiso institucional?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tomarse unos minutos para apagar los interruptores, acondicionadores y equipos, protegiendo los recursos energéticos del Estado y reportando la novedad al personal de servicios generales con sentido de pertenencia.",
        "explicacion": "Valor Compromiso. El compromiso se manifiesta en cuidar los bienes públicos como propios, aplicando criterios de sostenibilidad, ahorro y responsabilidad ambiental en la entidad."
      },
      {
        "id": "B",
        "texto": "Ignorar la situación diciendo que la cuenta de energía eléctrica la paga el Ministerio de Hacienda y a él no le descuentan nada.",
        "explicacion": "Desapego y falta de civismo institucional."
      },
      {
        "id": "C",
        "texto": "Encender las demás luces del edificio para que todo se gaste más rápido.",
        "explicacion": "Conducta destructiva contraria a la ética ciudadana."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad DAFP - Valor Compromiso y Políticas de Gestión Ambiental DIAN",
    "citaNormativa": "«Cuido y protejo los recursos públicos y los bienes de la entidad como si fueran propios, asegurando su uso racional y eficiente.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_comp_03",
    "nivel": "Técnico",
    "ejeId": "compromiso",
    "ejeNombre": "COMPROMISO",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Disposición para Superar Expectativas en Beneficio de la Institución",
    "caso": "Se presenta una auditoría externa sorpresiva de la Contraloría General de la República sobre las bodegas de almacenamiento de mercancías decomisadas. El Analista IV conoce la ubicación exacta de los expedientes físicos de soporte.",
    "enunciado": "¿Cómo manifiesta su Compromiso el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ponerse a entera disposición de los auditores con profesionalismo y prontitud, suministrando los expedientes requeridos con orden y claridad para que el control fiscal evidencie la transparencia de la gestión de la DIAN.",
        "explicacion": "Valor Compromiso. El servidor comprometido colabora con orgullo y diligencia ante los órganos de control del Estado, demostrando la pulcritud de las actuaciones administrativas."
      },
      {
        "id": "B",
        "texto": "Esconder las llaves de la bodega e inventar que está enfermo para no atender a los auditores.",
        "explicacion": "Conducta de obstrucción al control fiscal sancionable disciplinaria y fiscalmente."
      },
      {
        "id": "C",
        "texto": "Cobrar a los auditores de la Contraloría una tarifa por buscar cada carpeta.",
        "explicacion": "Conducta delictiva inadmisible entre autoridades públicas."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política Art. 267 y Código de Integridad",
    "citaNormativa": "«Facilito la labor de las entidades de control y asumo con orgullo la responsabilidad de rendir cuentas sobre mi gestión.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_dil_01",
    "nivel": "Técnico",
    "ejeId": "diligencia",
    "ejeNombre": "DILIGENCIA",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Actuación con Prontitud, Celeridad y Esmero sin Dilaciones Injustificadas",
    "caso": "A la bandeja del Analista IV ingresa una solicitud de un ciudadano que requiere una certificación de encontrarse al día en obligaciones tributarias para poder posesionarse en un cargo público mañana. El plazo legal ordinario es de 15 días hábiles.",
    "enunciado": "De acuerdo con el valor de la Diligencia, ¿cuál es el proceder del servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Verificar de inmediato los sistemas de recaudo, constatar que no existen deudas pendientes y expedir la certificación en el transcurso de la misma mañana, facilitando el derecho al trabajo del ciudadano.",
        "explicacion": "Valor Diligencia. Ser diligente significa actuar con celeridad y esmero, resolviendo con prontitud los asuntos sin agotar innecesariamente el plazo máximo legal cuando el trámite puede evacuarse de inmediato."
      },
      {
        "id": "B",
        "texto": "Guardar el documento en el fondo del cajón y esperar hasta el día 15 a las 5:00 p.m. solo para hacer esperar al ciudadano.",
        "explicacion": "Conducta dilatoria y burocrática contraria a los principios constitucionales de eficacia y celeridad."
      },
      {
        "id": "C",
        "texto": "Romper la solicitud porque a él no le gusta que la gente consiga empleo.",
        "explicacion": "Conducta reprochable y falta disciplinaria gravísima."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad del Servicio Público - Valor Diligencia y CPACA Art. 3",
    "citaNormativa": "«Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_dil_02",
    "nivel": "Técnico",
    "ejeId": "diligencia",
    "ejeNombre": "DILIGENCIA",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Control Preventivo de Vencimiento de Términos Legales",
    "caso": "El Analista IV administra el libro radicador de expedientes de fiscalización aduanera. Nota que para tres expedientes el término de dos años para expedir la resolución sancionatoria vence en 20 días hábiles.",
    "enunciado": "¿Cuál es la acción diligente e inmediata que debe ejecutar el servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Emitir una alerta técnica preventiva por escrito a su superior jerárquico y al profesional comisionado, priorizando dichos expedientes en la agenda para evitar la caducidad de la facultad sancionatoria de la DIAN.",
        "explicacion": "Valor Diligencia. La diligencia implica proactividad, previsión y sentido de oportunidad en la gestión de términos procesales, protegiendo al Estado de daños patrimoniales por prescripción o caducidad."
      },
      {
        "id": "B",
        "texto": "Dejar que venza el plazo sin decir nada para tener tres expedientes menos que archivar.",
        "explicacion": "Negligencia gravísima que genera responsabilidad patrimonial y disciplinaria por omisión."
      },
      {
        "id": "C",
        "texto": "Cambiar la fecha del sello del radicado original con corrector líquido para fingir que llegó ayer.",
        "explicacion": "Delito de falsedad ideológica y material en documento público."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019 Art. 38 num. 1 y Código de Integridad",
    "citaNormativa": "«Actúo con proactividad y previsión en el manejo de mis tiempos y los términos legales, evitando demoras o caducidades en los trámites.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_dil_03",
    "nivel": "Técnico",
    "ejeId": "diligencia",
    "ejeNombre": "DILIGENCIA",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Autoformación Continua y Actualización de Competencias Laborales",
    "caso": "La DIAN habilita en su campus virtual un curso especializado sobre 'Nuevas Tipologías de Evasión a través de Criptoactivos y Plataformas Digitales' en horario flexible no laboral.",
    "enunciado": "¿Cómo se refleja el valor de la Diligencia en el desarrollo profesional del Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Inscribirse voluntariamente y culminar el curso con disciplina, aplicando los nuevos conceptos en el análisis preliminar de denuncias y fortaleciendo sus capacidades técnicas en beneficio de la entidad.",
        "explicacion": "Valor Diligencia. La persona diligente busca capacitarse permanentemente y perfeccionar sus habilidades para ofrecer un servicio público actualizado y de vanguardia técnica."
      },
      {
        "id": "B",
        "texto": "Manifestar que como ya se posesionó en el cargo nunca más en la vida volverá a estudiar ni una página.",
        "explicacion": "Mediocridad profesional y falta de vocación de servicio."
      },
      {
        "id": "C",
        "texto": "Pagarle a un tercero para que le resuelva las evaluaciones virtuales.",
        "explicacion": "Fraude académico que viola la integridad pública básica."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad DAFP - Valor Diligencia",
    "citaNormativa": "«Me capacito permanentemente para mejorar mi desempeño laboral y aportar soluciones innovadoras al servicio público.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_hon_01",
    "nivel": "Técnico",
    "ejeId": "honestidad",
    "ejeNombre": "HONESTIDAD",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Incorruptibilidad y Veracidad en Todo Momento",
    "caso": "Al revisar el inventario de una bodega aduanera tras un decomiso de teléfonos celulares de alta gama, el Analista IV encuentra un equipo de última generación en una caja suelta sin registrar en el acta inicial.",
    "enunciado": "De acuerdo con el valor de la Honestidad, ¿cuál es la conducta que debe seguir?",
    "opciones": [
      {
        "id": "A",
        "texto": "Informar de inmediato a la comisión comisionada, ingresar el teléfono formalmente al inventario oficial en el sistema de disposición de mercancías y guardarlo en la bóveda de seguridad con su respectivo código de barras.",
        "explicacion": "Valor Honestidad. Actuar con honestidad es ser intachable, transparente e incorruptible, incluso cuando nadie está mirando, reconociendo que los bienes decomisados pertenecen a la Nación y son sagrados."
      },
      {
        "id": "B",
        "texto": "Guardarse el celular en el bolsillo diciendo que como no estaba en la lista inicial 'no es de nadie'.",
        "explicacion": "Delito de peculado por apropiación y falta disciplinaria gravísima de destitución."
      },
      {
        "id": "C",
        "texto": "Vender el teléfono a un compañero por la mitad del precio comercial.",
        "explicacion": "Comercio ilícito de bienes incautados por el Estado y corrupción."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad del Servicio Público - Valor Honestidad y Código Penal Art. 397",
    "citaNormativa": "«Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo siempre el interés general.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_hon_02",
    "nivel": "Técnico",
    "ejeId": "honestidad",
    "ejeNombre": "HONESTIDAD",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Reconocimiento Transparente de Errores Operativos Propios",
    "caso": "Al ingresar un número de NIT en una resolución de archivo, el Analista IV comete un error de digitación en el último dígito antes de que el documento sea enviado a la firma del jefe.",
    "enunciado": "¿Cuál es la respuesta honesta y profesional del servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Informar de inmediato la equivocación a su superior, solicitar la corrección del texto antes de la radicación y verificar nuevamente el número frente al RUT para asegurar la legalidad del acto.",
        "explicacion": "Valor Honestidad. La honestidad implica la humildad y valentía de reconocer los errores propios a tiempo y subsanarlos de inmediato, anteponiendo la verdad y la corrección técnica a la vanidad personal."
      },
      {
        "id": "B",
        "texto": "Culpar a un compañero recién llegado diciendo que él fue quien digitó mal el número.",
        "explicacion": "Conducta deshonesta, cobarde y difamatoria."
      },
      {
        "id": "C",
        "texto": "Dejar que el documento salga mal notificado sabiendo que afectará a un contribuyente inocente.",
        "explicacion": "Negligencia dolosa y falta al deber de veracidad pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad DAFP - Valor Honestidad",
    "citaNormativa": "«Reconozco mis errores con sinceridad y actúo de inmediato para corregirlos, asumiendo la responsabilidad de mis actos.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_hon_03",
    "nivel": "Técnico",
    "ejeId": "honestidad",
    "ejeNombre": "HONESTIDAD",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Rechazo a Ventajas o Privilegios Personales Indebidos",
    "caso": "El gerente de una empresa que está siendo objeto de una auditoría tributaria se acerca al Analista IV y le ofrece hospedaje gratis para toda su familia en un hotel de lujo en Cartagena durante las vacaciones.",
    "enunciado": "¿Cómo debe responder el Analista IV según el valor de la Honestidad?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar de plano la oferta de manera categórica, dejar constancia en el informe del expediente y advertir al investigado que ofrecer dádivas a servidores públicos constituye delito de cohecho.",
        "explicacion": "Valor Honestidad. El servidor honesto rechaza cualquier beneficio, regalo, descuento o privilegio que pueda comprometer su juicio, su independencia o la imagen de imparcialidad de la Entidad."
      },
      {
        "id": "B",
        "texto": "Aceptar el viaje pero pedir que le incluyan pasajes aéreos en primera clase.",
        "explicacion": "Cohecho impropio consumado y falta gravísima de corrupción."
      },
      {
        "id": "C",
        "texto": "Aceptar el viaje en secreto prometiendo demorar el requerimiento especial varios meses.",
        "explicacion": "Prevaricato y venta descarada de la función pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1952 de 2019 Art. 39 num. 22 y Código de Integridad",
    "citaNormativa": "«No acepto beneficios, regalos ni privilegios de ninguna persona que puedan influir en mis decisiones o comprometer mi juicio como servidor público.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_just_01",
    "nivel": "Técnico",
    "ejeId": "justicia",
    "ejeNombre": "JUSTICIA",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Imparcialidad y Equidad en la Aplicación de la Normativa Fiscal",
    "caso": "Durante una jornada de fiscalización tributaria a comerciantes de una plaza de mercado, un colega sugiere al Analista IV pasar por alto la omisión de facturación de los locales de sus conocidos y fiscalizar con la máxima severidad a los de comerciantes foráneos.",
    "enunciado": "De acuerdo con el valor de la Justicia, ¿cómo debe actuar el servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rechazar la sugerencia y aplicar los criterios legales y técnicos con rigurosa equidad, neutralidad e igualdad a todos los comerciantes sin favoritismos ni persecuciones discriminatorias.",
        "explicacion": "Valor Justicia. La justicia en el servicio público exige tomar decisiones basadas exclusivamente en la ley y en las pruebas objetivas, tratando a todas las personas con estricta igualdad y rectitud procesal."
      },
      {
        "id": "B",
        "texto": "Aceptar la propuesta para que los comerciantes amigos les regalen comida gratis al mediodía.",
        "explicacion": "Conducta corrupta que pervierte la función pública y viola el principio de igualdad tributaria."
      },
      {
        "id": "C",
        "texto": "Cerrar todos los locales de la plaza sin realizar visitas ni actas probatorias.",
        "explicacion": "Arbitrariedad flagrante y abuso de autoridad por acto arbitrario e injusto."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad del Servicio Público - Valor Justicia y Constitución Política Art. 209",
    "citaNormativa": "«Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación alguna.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_just_02",
    "nivel": "Técnico",
    "ejeId": "justicia",
    "ejeNombre": "JUSTICIA",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Reconocimiento Oportuno de Pruebas a Favor del Contribuyente",
    "caso": "Al revisar los anexos de respuesta a un requerimiento especial, el Analista IV descubre un certificado bancario y un comprobante de pago electrónico que demuestran que el contribuyente sí pagó una retención que la DIAN consideraba omitida.",
    "enunciado": "¿Cuál es la conducta justa y objetiva que debe asumir el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Incorporar inmediatamente la prueba al informe técnico, dar cuenta formal de que el pago fue realizado y proponer el descargue del rubro investigado en favor del contribuyente conforme al principio de justicia tributaria.",
        "explicacion": "Valor Justicia. La DIAN no busca sancionar injustamente, sino determinar el tributo con estricta verdad real. Si el contribuyente demuestra legalmente el pago, la justicia exige reconocerlo sin sesgos acusatorios."
      },
      {
        "id": "B",
        "texto": "Ocultar el comprobante de pago para que el contribuyente tenga que pagar el doble de dinero al Estado.",
        "explicacion": "Conducta inicua, arbitraria y delictiva que viola el debido proceso y la justicia material."
      },
      {
        "id": "C",
        "texto": "Exigirle al contribuyente dinero por haber encontrado su comprobante en el expediente.",
        "explicacion": "Extorsión y concusión penal gravísima."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 683 (Espíritu de Justicia) y Código de Integridad",
    "citaNormativa": "«Los funcionarios públicos deberán tener en cuenta que el fin último de su labor es la justicia, no debiendo exigir al contribuyente más de aquello con que la ley ha querido que coadyuve a las cargas públicas.» (Estatuto Tributario, Art. 683)."
  },
  {
    "id": "an4_integ_just_03",
    "nivel": "Técnico",
    "ejeId": "justicia",
    "ejeNombre": "JUSTICIA",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Garantía del Derecho de Defensa y Contradicción en Todo Momento",
    "caso": "En una audiencia de descargos aduaneros, el investigado intenta aportar una factura comercial apostillada que acredita el origen lícito de su mercancía. Un compañero pretende rechazar el documento diciendo que ya es hora de cerrar el acta.",
    "enunciado": "¿Qué actuación del Analista IV asegura el valor de la Justicia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Intervenir para garantizar que la prueba sea recibida, radicada e incorporada formalmente al expediente con su respectivo folio, asegurando el ejercicio pleno del derecho de contradicción y defensa del ciudadano.",
        "explicacion": "Valor Justicia. Garantizar el debido proceso y valorar todas las pruebas legalmente allegadas antes de fallar es la esencia de la justicia en la administración pública."
      },
      {
        "id": "B",
        "texto": "Apoyar el rechazo arbitrario para poder irse temprano a su casa.",
        "explicacion": "Violación del derecho de defensa que vicia de nulidad todo el proceso sancionatorio."
      },
      {
        "id": "C",
        "texto": "Romper la factura apostillada en pedazos delante del ciudadano.",
        "explicacion": "Destrucción de documento y abuso de poder criminal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Constitución Política Art. 29 y Código de Integridad",
    "citaNormativa": "«Garantizo a todas las personas el derecho a ser escuchadas y a presentar sus pruebas y descargos con sujeción a las reglas del debido proceso.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_resp_01",
    "nivel": "Técnico",
    "ejeId": "respeto",
    "ejeNombre": "RESPETO",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Reconocimiento de la Dignidad Humana en Toda Interacción",
    "caso": "Durante una diligencia de inspección a un restaurante popular, los empleados de cocina, vestidos con sus delantales de trabajo, miran con nerviosismo al equipo fiscalizador de la DIAN.",
    "enunciado": "De acuerdo con el valor del Respeto, ¿cómo debe iniciar la interacción el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Saludar cordialmente con amabilidad y educación, identificarse formalmente con su carné institucional y explicar con serenidad y cortesía el objeto de la visita, generando un ambiente de tranquilidad y respeto mutuo.",
        "explicacion": "Valor Respeto. El respeto es reconocer el valor intrínseco y la dignidad de cada persona, tratándola con cortesía, amabilidad y consideración, sin importar su condición, oficio o nivel socioeconómico."
      },
      {
        "id": "B",
        "texto": "Ingresar gritando insultos y amenazando a los cocineros con cerrarles el negocio para demostrar autoridad.",
        "explicacion": "Abuso de autoridad, prepotencia y falta absoluta de respeto y decoro público."
      },
      {
        "id": "C",
        "texto": "Mirar a los trabajadores con desdén y negarse a responderles el saludo.",
        "explicacion": "Conducta arrogante contraria al Código de Integridad de la Función Pública."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Código de Integridad del Servicio Público - Valor Respeto",
    "citaNormativa": "«Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, procedencia o condición.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_resp_02",
    "nivel": "Técnico",
    "ejeId": "respeto",
    "ejeNombre": "RESPETO",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Valoración de la Diversidad y No Discriminación",
    "caso": "A la ventanilla de radicación llega un ciudadano con discapacidad auditiva acompañado de un intérprete de señas para radicar un recurso de reconsideración.",
    "enunciado": "¿Cuál es la actitud respetuosa e inclusiva del Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dirigir su mirada y atención con empatía y cortesía al ciudadano y a su intérprete, facilitando el tiempo necesario para la comunicación fluida y confirmando con delicadeza la entrega completa de sus radicados.",
        "explicacion": "Valor Respeto. Respetar es acoger la diversidad con empatía e inclusión, garantizando ajustes razonables para que todas las personas ejerzan sus derechos en igualdad de condiciones."
      },
      {
        "id": "B",
        "texto": "Hacer gestos de fastidio y pedirle que se retire porque 'atiende más rápido a personas que hablan normal'.",
        "explicacion": "Discriminación inadmisible que vulnera la Ley de Discapacidad y acarrea sanciones disciplinarias gravísimas."
      },
      {
        "id": "C",
        "texto": "Burlarse de las señas del intérprete en presencia de otros usuarios.",
        "explicacion": "Conducta denigrante que atenta contra la dignidad humana y los principios constitucionales."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1618 de 2013 (Inclusión de Personas con Discapacidad) y Código de Integridad",
    "citaNormativa": "«Garantizo una atención inclusiva y respetuosa, adaptando mis canales de comunicación a las necesidades de las personas con discapacidad.» (Código de Integridad)."
  },
  {
    "id": "an4_integ_resp_03",
    "nivel": "Técnico",
    "ejeId": "respeto",
    "ejeNombre": "RESPETO",
    "tipo": "Integridad (Clasificatorio - 10%)",
    "tema": "Trato Respetuoso y Tolerante en el Clima Laboral Interno",
    "caso": "En una jornada de trabajo extenuante, un compañero de equipo comete un error menor al grapar unos anexos al revés. El Analista IV advierte la situación.",
    "enunciado": "¿Cómo debe comunicarse con su compañero bajo el principio del Respeto?",
    "opciones": [
      {
        "id": "A",
        "texto": "Acercarse en privado y con tono constructivo y amable, señalarle el detalle para desgrapar y ordenar las hojas correctamente, sin ridiculizarlo ni exponerlo frente a los demás miembros del grupo.",
        "explicacion": "Valor Respeto. El respeto en el ámbito interno laboral cuida el buen trato, la empatía y la dignidad de los compañeros, corrigiendo errores con pedagogía y evitando humillaciones."
      },
      {
        "id": "B",
        "texto": "Gritar delante de toda la oficina que su compañero es un inútil para que todos se burlen de él.",
        "explicacion": "Conducta de acoso laboral (Ley 1010 de 2006) y vulneración de la dignidad del trabajador."
      },
      {
        "id": "C",
        "texto": "Publicar fotos del error en grupos de mensajería con comentarios descalificadores.",
        "explicacion": "Ciberacoso laboral y falta disciplinaria grave contra el respeto institucional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ley 1010 de 2006 (Acoso Laboral) y Código de Integridad",
    "citaNormativa": "«Mantengo un trato amable, cordial y respetuoso con mis compañeros de trabajo, promoviendo un ambiente armónico y libre de acoso.» (Código de Integridad)."
  },
  {
    "id": "an4_vr_01",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Técnica del Verbo Rector en el Nivel Técnico - Acompañar la Práctica de Pruebas",
    "caso": "En el marco de una investigación por presunto contrabando en un depósito habilitado, se decreta mediante auto formal una diligencia de inspección aduanera y práctica de pruebas sobre un lote de mercancías electrónicas. Al Analista IV se le comisiona formalmente para la diligencia junto al profesional auditor.",
    "enunciado": "Conforme a la función 1 de su manual de funciones (AT-FL-2010), ¿cuál es el rol operativo y probatorio que debe ACOMPAÑAR y DESARROLLAR el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Acompañar la diligencia en terreno, cotejar físicamente los números de serie y marcas de las mercancías contra la declaración de importación y elaborar minuciosamente el acta técnica con firma de todos los intervinientes.",
        "explicacion": "Correcta. El Analista IV cumple estrictamente su verbo rector 'Acompañar' diligencias de práctica de pruebas, ejecutando la verificación física material y elaborando el acta técnica para la cadena de custodia probatoria."
      },
      {
        "id": "B",
        "texto": "Declarar de plano el decomiso definitivo de toda la mercancía mediante resolución expedida y notificada en el acto por su propia cuenta, sin esperar el pronunciamiento del profesional auditor.",
        "explicacion": "Incorrecta. Distractor de usurpación decisoria extrema; el Analista apoya y verifica la prueba, pero carece de competencia legal delegada para emitir fallos de decomiso o sanciones de fondo."
      },
      {
        "id": "C",
        "texto": "Permanecer sentado en el vehículo oficial sin intervenir en el cotejo físico ni firmar el acta, argumentando que las mercancías pesadas deben ser revisadas únicamente por el importador.",
        "explicacion": "Incorrecta. Distractor de omisión/pasividad; constituye falta disciplinaria grave por incumplimiento de los deberes funcionales técnicos de acompañamiento y fe pública probatoria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto Ley 071 de 2020 y Ficha Oficial AT-FL-2010 Función 1",
    "citaNormativa": "«Acompañar las diligencias de práctica de pruebas decretadas dentro de una investigación, de acuerdo con la normativa vigente y los procedimientos establecidos.» (Ficha AT-FL-2010)."
  },
  {
    "id": "an4_vr_02",
    "nivel": "Técnico",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad de Expedientes",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Verbo Rector en el Nivel Técnico - Clasificar Información Preliminar",
    "caso": "La División de Fiscalización recibe una serie de denuncias ciudadanas físicas y digitales acompañadas de facturas, fotografías y extractos bancarios que señalan la existencia de un esquema de evasión de IVA en una cadena de restaurantes.",
    "enunciado": "De acuerdo con la función 3 de su manual (AT-FL-2010), ¿cuál es la labor técnica que debe CLASIFICAR y EJECUTAR el Analista IV con estos insumos?",
    "opciones": [
      {
        "id": "A",
        "texto": "Clasificar la información técnica y documental organizando las evidencias por fecha, sujeto y tipo de soporte, estructurando el expediente preliminar para el análisis sustantivo del equipo de fiscalización.",
        "explicacion": "Correcta. Aplica con exactitud el verbo rector 'Clasificar la información necesaria para el análisis preliminar de los insumos y denuncias', asegurando la foliación técnica y la trazabilidad probatoria."
      },
      {
        "id": "B",
        "texto": "Desechar y triturar en la destructora de papel los documentos que contengan fotografías borrosas sin registrarlos en el sistema de gestión documental.",
        "explicacion": "Incorrecta. Destrucción indebida de documentos con valor probatorio potencial y violación flagrante del régimen de archivo (Ley 594 de 2000)."
      },
      {
        "id": "C",
        "texto": "Proferir un Pliego de Cargos tributario notificando formalmente sanciones pecuniarias millonarias a los restaurantes involucrados.",
        "explicacion": "Incorrecta. Extralimitación funcional absoluta; el Analista clasifica los insumos preparatorios, mientras que el pliego de cargos lo formula la autoridad competente tras investigación formal."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Ficha AT-FL-2010 Función 3 y Acuerdo AGN 002 de 2014",
    "citaNormativa": "«Clasificar la información necesaria para el análisis preliminar de los insumos y de las denuncias de fiscalización recibidas, de acuerdo con la normativa vigente, procedimientos y lineamientos institucionales.» (Ficha AT-FL-2010)."
  },
  {
    "id": "an4_vr_03",
    "nivel": "Técnico",
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Procedimiento de Fiscalización y Liquidación Tributaria y Aduanera",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Verbo Rector en Materia Aduanera - Intervenir en Diligencias de Destrucción",
    "caso": "Mediante resolución administrativa en firme, se ha ordenado la destrucción de un cargamento de alimentos perecederos en descomposición aprehendidos en zona primaria aduanera por representar riesgo biológico. Se designa al Analista IV para el procedimiento en la planta de tratamiento autorizada.",
    "enunciado": "Conforme a la función 5 de su manual de funciones (AT-FL-2010), ¿cómo debe INTERVENIR el Analista IV durante la diligencia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Intervenir presencialmente en la diligencia, verificar el pesaje y cotejo físico de las cantidades a destruir, constatar la inutilización total de la mercancía y levantar el acta circunstanciada con registro fotográfico y firmas de ley.",
        "explicacion": "Correcta. Ejecuta con rigor el verbo rector 'Intervenir en las diligencias de destrucción de mercancía...', garantizando la autenticidad fáctica, ambiental y aduanera de la disposición final de los bienes."
      },
      {
        "id": "B",
        "texto": "Delegar verbalmente la diligencia en el chofer del camión recolector y firmar el acta en blanco desde la oficina sin haber presenciado la incineración de los productos.",
        "explicacion": "Incorrecta. Falsedad ideológica en documento público, abandono del deber de custodia y violación del procedimiento aduanero reglado."
      },
      {
        "id": "C",
        "texto": "Suspender unilateralmente la destrucción y autorizar que los alimentos descompuestos sean donados a comedores comunitarios.",
        "explicacion": "Incorrecta. Viola directrices sanitarias y aduaneras obligatorias, pone en grave riesgo la salud colectiva y desacata un acto administrativo en firme."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019 Art. 675 y Ficha AT-FL-2010 Función 5",
    "citaNormativa": "«Intervenir en las diligencias de destrucción de mercancía averiada, defectuosa o impropia respecto del fin para el cual fue importada, de acuerdo con la normativa vigente, los procedimientos establecidos y las directrices institucionales.» (Ficha AT-FL-2010)."
  },
  {
    "id": "an4_lc_01",
    "nivel": "Técnico",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Clasificación Fáctica y Descarte de Ruido en Memorial de Objeciones del Contribuyente",
    "caso": "Un contribuyente investigado por omisión de ingresos aporta un memorial de 8 folios lleno de descargos emocionales, cartas de recomendación vecinal, diplomas honoríficos y recortes de periódico sobre su trayectoria cívica en el municipio. Entre todos esos documentos, adjunta fotocopia simple de tres (3) cotizaciones comerciales no aceptadas y un extracto bancario oficial con sello húmedo de certificación donde se evidencia que una consignación de $120.000.000 provino de la indemnización por expropiación judicial de un predio familiar decretada por el Juzgado Primero Civil del Circuito.",
    "enunciado": "Aplicando la técnica de filtrado de ruido narrativo y conforme a la función 3 de su manual (clasificar información preliminar para fiscalización), ¿cuál es la labor probatoria técnica que debe REALIZAR el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Separar los diplomas, cartas de recomendación y cotizaciones por carecer de aptitud probatoria fiscal, y clasificar e incorporar al expediente el extracto bancario con la certificación de la indemnización judicial como prueba documental idónea para sustentar el origen no constitutivo de renta en el informe preliminar.",
        "explicacion": "Correcta. La lectura crítica a nivel técnico exige discriminar entre documentos irrelevantes (ruido sentimental o cotizaciones no vinculantes) y el núcleo fáctico con valor probatorio legal (extracto certificado de indemnización judicial) para su correcta clasificación y trazabilidad en el expediente."
      },
      {
        "id": "B",
        "texto": "Archivar la investigación de inmediato con base exclusiva en los diplomas y cartas de buena conducta vecinal, presumiendo que las personas de buena reputación cívica no pagan impuestos.",
        "explicacion": "Incorrecta. Falla de razonamiento lógico y probatorio; las cartas de recomendación ciudadana no desvirtúan ni sustituyen las obligaciones tributarias sustanciales."
      },
      {
        "id": "C",
        "texto": "Romper y desechar el extracto bancario por considerar que los jueces de la República no tienen autoridad frente a la DIAN.",
        "explicacion": "Incorrecta. Destrucción arbitraria de prueba documental idónea, acarreando faltas gravísimas contra la fe pública y la administración de justicia."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 742, Art. 743 y Ficha AT-FL-2010 Función 3",
    "citaNormativa": "«La determinación de tributos y la imposición de sanciones deben fundarse en los hechos que aparezcan demostrados en el expediente, por los medios de prueba señalados en las leyes tributarias o en el Código General del Proceso.» (Estatuto Tributario, Art. 742)."
  },
  {
    "id": "an4_lc_02",
    "nivel": "Técnico",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Detección de Trampa Categórica en Requerimiento Ordinario de Información Documental",
    "caso": "Durante una auditoría a un distribuidor mayorista de licores, el funcionario asignado elabora un borrador de Requerimiento Ordinario de Información. En el texto propuesto se ordena al contribuyente aportar toda la contabilidad física de los últimos diez (10) años 'en un término perentorio e improrrogable de 24 horas, so pena de ordenar de plano y sin fórmula de juicio el cierre inmediato del establecimiento de comercio'. Se solicita al Analista IV revisar la minuta documental antes de su trámite.",
    "enunciado": "Al aplicar el radar de trampas de cuantificadores absolutos ('de plano y sin juicio') y las normas del Estatuto Tributario, ¿qué inconsistencia legal debe SEÑALAR el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Admitir que el plazo ordinario legal previsto en el artículo 651 del Estatuto Tributario para suministrar información no puede ser inferior a quince (15) días calendario, y advertir que la DIAN no puede decretar la sanción de clausura de plano sin surtir previamente el debido pliego de cargos y derecho de defensa.",
        "explicacion": "Correcta. La lectura crítica identifica de inmediato las trampas categóricas e ilegales: plazos arbitrarios de 24 horas violan el término de mínimo 15 días del Art. 651 E.T., y la sanción de cierre jamás opera 'de plano' sin pliego de cargos y oportunidad de contradicción (debido proceso Art. 29 C.P.)."
      },
      {
        "id": "B",
        "texto": "Aprobar el texto aduciendo que la DIAN tiene potestades dictatoriales para exigir información en 10 minutos y arrestar preventivamente a los contadores.",
        "explicacion": "Incorrecta. Distractor grotesco de abuso de autoridad y desconocimiento del régimen sancionatorio reglado."
      },
      {
        "id": "C",
        "texto": "Eliminar la solicitud de información y sustituirla por una invitación a almorzar con el contribuyente para negociar los libros contables.",
        "explicacion": "Incorrecta. Conducta corrupta sancionada disciplinaria y penalmente (cohecho y concusión)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 651 y Art. 657",
    "citaNormativa": "«El plazo para suministrar la información requerida no podrá ser inferior a quince (15) días calendario contados a partir de la fecha de notificación del requerimiento.» (Estatuto Tributario, Art. 651)."
  },
  {
    "id": "an4_lc_03",
    "nivel": "Técnico",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Lectura Inversa de Verbo Rector Operativo en Acta de Pruebas Tributarias",
    "caso": "En una diligencia de inspección tributaria a una fábrica textil en el marco de una investigación por compras inexistentes, el equipo de fiscalización se dispone a inspeccionar los libros diarios y tarjetas kardex de inventarios. El contribuyente se niega inicialmente a exhibir los soportes alegando secreto industrial, pero tras la explicación del marco legal accede a exhibir los libros de contabilidad del año gravable investigado.",
    "enunciado": "Conforme a la función 1 de su manual de funciones (AT-FL-2010: 'Acompañar las diligencias de práctica de pruebas decretadas...'), ¿cuál es la actuación operativa y técnica que corresponde al Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Acompañar activamente la diligencia, verificar el estado físico de los libros y folios exhibidos, cotejar las facturas electrónicas de compra seleccionadas para la muestra, y redactar con rigor cronológico los hechos presenciados en el proyecto de Acta de Inspección para firma conjunta.",
        "explicacion": "Correcta. El verbo rector 'Acompañar' y la función técnica exigen verificación operativa in situ, registro fáctico de los hallazgos y elaboración del acta circunstanciada de la diligencia con estricto apego a los hechos observados."
      },
      {
        "id": "B",
        "texto": "Dictar sentencia de revocatoria de la personería jurídica de la fábrica de confecciones y ordenar la subasta privada de las máquinas de coser en la acera del frente.",
        "explicacion": "Incorrecta. Trampa de usurpación total de competencias jurisdiccionales; un Analista técnico no puede revocar personerías jurídicas ni rematar bienes sin proceso de cobro ni orden judicial."
      },
      {
        "id": "C",
        "texto": "Retirarse de la fábrica antes de iniciar la diligencia aduciendo que la labor de pruebas es exclusiva de los celadores del edificio.",
        "explicacion": "Incorrecta. Desacato de la orden de comisión y abandono injustificado de las funciones probatorias de su empleo."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 779, Art. 782 y Ficha AT-FL-2010 Función 1",
    "citaNormativa": "«De la diligencia de inspección tributaria se levantará un acta que contenga todos los hechos demostrados, las observaciones de los funcionarios y del contribuyente, y las pruebas recaudadas.» (Estatuto Tributario, Art. 779)."
  },
  {
    "id": "an4_lc_04",
    "nivel": "Técnico",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Identificación de Datos Probados vs Apreciaciones Subjetivas en Reporte de Denuncia",
    "caso": "Llega a la bandeja de fiscalización una denuncia ciudadana anónima en la que el quejoso utiliza calificativos desobligantes contra el propietario de un supermercado, afirmando que 'es un mal vecino que hace fiestas ruidosas y con toda certeza evade el IVA porque compra autos caros'. Sin embargo, al final del escrito, el denunciante adjunta una relación de 15 tirillas de pago POS expedidas a clientes por montos superiores a 5 UVT ($235.000) en las que se lee expresamente 'Factura no válida como soporte fiscal' y se evidencia que no fueron transmitidas al servidor de la DIAN.",
    "enunciado": "Descartando el ruido subjetivo y extrayendo el núcleo de mérito fiscal, ¿cómo debe CLASIFICAR el Analista IV esta información conforme a su función 3?",
    "opciones": [
      {
        "id": "A",
        "texto": "Descartar los comentarios sobre la conducta vecinal por ser ruido irrelevante, y clasificar técnicamente la denuncia como mérito con indicio objetivo de incumplimiento del sistema de facturación electrónica (expedición de documentos no autorizados y no transmisión a la DIAN), remitiendo el informe preliminar al área de fiscalización.",
        "explicacion": "Correcta. La lectura crítica permite aislar los rencores personales del denunciante (ruido) y captar la evidencia fáctica y objetiva: documentos POS por encima de los topes legales sin transmisión a la DIAN, lo cual constituye una infracción formal sancionable bajo el artículo 657 del E.T."
      },
      {
        "id": "B",
        "texto": "Archivar de plano la denuncia y sancionar al denunciante con arresto domiciliario por haberse quejado del ruido de las fiestas.",
        "explicacion": "Incorrecta. Desconoce el valor probatorio de las tirillas adjuntas y asume facultades penales inexistentes."
      },
      {
        "id": "C",
        "texto": "Abrir una investigación policiva por perturbación de la tranquilidad vecinal e imponer multas de tránsito al propietario.",
        "explicacion": "Incorrecta. Desviación de la competencia tributaria hacia asuntos de convivencia ciudadana propios de la Policía Nacional."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 616-1, Art. 657 y Resolución 000165 de 2023",
    "citaNormativa": "«El documento equivalente expedido por máquinas registradoras con sistema POS no otorga derecho a costos ni deducciones en el impuesto sobre la renta... La expedición sin los requisitos legales dará lugar a la sanción de clausura del establecimiento.» (Estatuto Tributario, Art. 616-1)."
  },
  {
    "id": "an4_lc_05",
    "nivel": "Técnico",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Cómputo Fáctico de Términos y Verificación de Extemporaneidad en Memorial sin Recurso Formal",
    "caso": "Un comerciante fue notificado personalmente el día 2 de mayo de una Resolución Sanción por no expedir factura electrónica. El día 15 de julio del mismo año radica un memorial titulado 'Carta de inconformidad y solicitud de perdón', sin invocar artículos de ley ni señalar formalmente 'Recurso de Reconsideración', pero argumentando de manera extensa que el fallo sancionatorio fue injusto y solicitando que se revoque la sanción. El Analista IV tiene la tarea de revisar los términos y folios del expediente para preparar el informe de estado procesal.",
    "enunciado": "Conforme al artículo 720 del Estatuto Tributario y las reglas de lectura crítica para el cómputo de términos procesales, ¿cuál es el análisis fáctico y procesal que debe CONSIGNAR el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Determinar que el memorial, a pesar de su título informal, materialmente controvierte el fondo del acto; no obstante, fue radicado transcurridos más de dos (2) meses desde la notificación personal (del 2 de mayo al 15 de julio), por lo cual el término perentorio legal venció el 2 de julio, encontrándose el escrito irremediablemente extemporáneo y el acto sancionatorio debidamente ejecutoriado.",
        "explicacion": "Correcta. La lectura crítica procesal prevalece sobre el nombre formal del escrito (principio de eficacia y prevalencia del derecho sustancial): es una impugnación material, pero el dato temporal es implacable: el plazo de 2 meses del Art. 720 del E.T. venció el 2 de julio, operando la firmeza del acto administrativo."
      },
      {
        "id": "B",
        "texto": "Considerar que el término de dos meses solo empieza a contar cuando el contribuyente consiga un abogado graduado con honores, por lo que el escrito radicado en julio siempre se considerará oportuno.",
        "explicacion": "Incorrecta. Cae en la trampa del cuantificador categórico ('siempre se considerará oportuno') e inventa una regla contraria al cómputo objetivo de los términos procesales."
      },
      {
        "id": "C",
        "texto": "Eliminar el memorial del sistema para que no quede constancia de que el ciudadano radicó una queja en la entidad.",
        "explicacion": "Incorrecta. Falta gravísima contra la custodia documental y el archivo público (Ley General de Archivos 594 de 2000)."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Estatuto Tributario Art. 720, CPACA Art. 87 y Ficha AT-FL-2010 Función 9",
    "citaNormativa": "«El recurso de reconsideración deberá interponerse ante la oficina competente, dentro de los dos (2) meses siguientes a la notificación del respectivo acto.» (Estatuto Tributario, Art. 720)."
  },
  {
    "id": "an4_lc_06",
    "nivel": "Técnico",
    "ejeId": "comprension_lectora",
    "ejeNombre": "Comprensión Lectora y Casos Complejos",
    "tipo": "Funcional (Eliminatorio - 65%)",
    "tema": "Desarticulación de Incompetencia de Nivel en Diligencia de Inspección Aduanera",
    "caso": "Durante una inspección física a un contenedor de confecciones importadas en el depósito habilitado, el importador ofrece resistencia física verbal agresiva y amenaza con demandar a todos los funcionarios. El profesional a cargo de la comisión se retira temporalmente para solicitar apoyo de seguridad. En ese instante, el representante del importador exige al Analista IV que 'le firme de inmediato el acta de levante definitivo de las mercancías sin esperar al profesional, con la condición de retirar las amenazas'.",
    "enunciado": "Efectuando el 'Test del Rol' según el manual de funciones (AT-FL-2010) y el Decreto 1165 de 2019, ¿cuál es la conducta técnica que debe ADOPTAR el Analista IV?",
    "opciones": [
      {
        "id": "A",
        "texto": "Rehusarse a firmar el levante definitivo advirtiendo que su rol como Analista IV es de apoyo técnico y acompañamiento probatorio, careciendo de competencia legal para autorizar el levante de mercancías de forma autónoma, y esperar el retorno del profesional con el personal de seguridad para continuar la diligencia conforme al procedimiento aduanero reglado.",
        "explicacion": "Correcta. Test del rol y de legalidad: La autorización de levante es un acto aduanero de decisión reservado a los inspectores competentes. El Analista IV no puede usurpar funciones decisorias bajo intimidación o coacción externa."
      },
      {
        "id": "B",
        "texto": "Firmar de inmediato la entrega y levante de todas las mercancías para calmar al importador y evitar cualquier tipo de molestia.",
        "explicacion": "Incorrecta. Usurpación de funciones de nivel superior, favorecimiento de contrabando y expedición de actos nulos por falta absoluta de competencia."
      },
      {
        "id": "C",
        "texto": "Prender fuego a las mercancías dentro del contenedor para no tener que inspeccionarlas.",
        "explicacion": "Incorrecta. Conducta ilícita tipificada como daño en bien ajeno e incendio en instalación portuaria."
      }
    ],
    "respuestaCorrecta": "A",
    "norma": "Decreto 1165 de 2019 Art. 185 y Ficha AT-FL-2010 Función 2",
    "citaNormativa": "«Apoyar la ejecución de acciones de fiscalización, en el marco de su competencia y jurisdicción, tendientes a la verificación del cumplimiento de las obligaciones tributarias, aduaneras o cambiarias, de acuerdo con la normativa vigente y procedimientos establecidos.» (Ficha AT-FL-2010)."
  },
  {
    "id": "areandina_guia_prof_01",
    "nivel": "Profesional",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Organizacional DIAN",
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
    "ejeId": "fiscalizacion_aduanera_procedimiento",
    "ejeNombre": "Fiscalización, Pruebas y Destrucción Aduanera",
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
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Trazabilidad",
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
  // --- CASOS MISIONALES OFICIALES DIAN (Aduanas, Cambiario y Procedimiento Tributario - Nivel Técnico) ---
  {
    "id": "tec_dian_aduanas_pjs_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_08",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_09",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_10",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_11",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_12",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_13",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_14",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_15",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_16",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_17",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_18",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_19",
    "nivel": "Técnico",
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
    "id": "tec_dian_aduanas_pjs_20",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_08",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_09",
    "nivel": "Técnico",
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
    "id": "tec_dian_cambiario_pjs_10",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_08",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_09",
    "nivel": "Técnico",
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
    "id": "tec_dian_procedimiento_pjs_10",
    "nivel": "Técnico",
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
  // --- CASOS TRANSVERSALES CNSC FASE 2 (Gestión Pública, Contratación, Constitución y Comportamentales - Nivel Técnico) ---
  {
    "id": "tec_dian_gp_pjs_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_08",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_09",
    "nivel": "Técnico",
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
    "id": "tec_dian_gp_pjs_10",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_pjs_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_pjs_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_pjs_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_pjs_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_pjs_05",
    "nivel": "Técnico",
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
  // --- CASOS RAZONAMIENTO CUANTITATIVO, LÓGICO Y VERBAL FASE 3 (Competencias Básicas CNSC - Nivel Técnico) ---
  {
    "id": "tec_dian_raz_log_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_08",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_09",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_log_10",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_verb_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_verb_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_verb_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_verb_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_raz_verb_05",
    "nivel": "Técnico",
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
  // --- CASOS COMPORTAMENTALES OFICIALES DIAN, POLÍTICA DE SERVICIO Y CÓDIGO DE INTEGRIDAD (Fase 4 - Nivel Técnico) ---
  {
    "id": "tec_dian_comp_ser_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_08",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_09",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_10",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_11",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_12",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_13",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_14",
    "nivel": "Técnico",
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
    "id": "tec_dian_comp_ser_15",
    "nivel": "Técnico",
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
  // --- CASOS MISIONALES ESPECIALIZADOS FASE 5 (Fiscalización, Cobro Coactivo, Aduanas Dec 0920/2023 y Cambiario DCIN-83 - Nivel Técnico) ---
  {
    "id": "tec_dian_mis_trib_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_trib_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_trib_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_trib_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_trib_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_trib_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_trib_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_adu_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_adu_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_adu_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_adu_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_adu_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_adu_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_adu_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_cam_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_cam_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_cam_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_cam_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_cam_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_mis_cam_06",
    "nivel": "Técnico",
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
  // --- CASOS COMPETENCIAS BÁSICAS ORGANIZACIONALES FASE 6 (Disciplinario Ley 1952, Contratación Ley 80, MIPG/MECI, Archivo Ley 594, Antitrámites - Nivel Técnico) ---
  {
    "id": "tec_dian_cbo_disc_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_disc_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_disc_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_disc_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_cont_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_cont_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_cont_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_cont_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_mipg_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_mipg_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_mipg_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_mipg_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_arch_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_arch_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_arch_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_tran_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_tran_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_tran_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_tran_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_cbo_tran_05",
    "nivel": "Técnico",
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
  // --- CASOS ACUERDO DE CONVOCATORIA CNSC Y SISTEMA ESPECÍFICO DE CARRERA DIAN (Fase 7 - Nivel Técnico) ---
  {
    "id": "tec_dian_conv_reg_01",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_02",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_03",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_04",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_05",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_06",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_07",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_08",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_09",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_10",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_11",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_12",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_13",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_14",
    "nivel": "Técnico",
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
    "id": "tec_dian_conv_reg_15",
    "nivel": "Técnico",
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
  // --- CASOS GUÍAS, ESTRUCTURA ORGÁNICA DIAN, ZONAS FRANCAS, PETI Y PQSR (Fase 8 - Nivel Técnico) ---
  {
    "id": "tec_dian_guias_org_01",
    "perfil": "ANALISTA_IV",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Orgánica y Misionalidad de la DIAN",
    "tema": "Naturaleza Jurídica y Fusión Histórica de la DIAN (Decreto 2117 de 1992 y Dec. 1071 de 1999)",
    "contexto": "Un contribuyente se acerca a la ventanilla de atención técnica con un requerimiento alegando que la DIAN no puede recibirle documentación sobre aranceles de importación aduciendo que la entidad solo atiende renta e IVA.",
    "enunciado": "Como Analista IV del área de radicación y atención técnica, ¿qué orientación legal y procedimental debe brindar al ciudadano?",
    "opciones": [
      {
        "id": "A",
        "texto": "Sostener que la DIAN es una Unidad Administrativa Especial del orden nacional, de carácter técnico y adscrita al Ministerio de Hacienda, creada por la fusión de la DIN y la DAN con competencia integral sobre tributos del orden nacional, aduaneros y régimen cambiario."
      },
      {
        "id": "B",
        "texto": "Argumentar que la DIAN es un establecimiento público descentralizado territorialmente con autonomía judicial plena e independencia jerárquica total respecto del Ministerio de Hacienda y Crédito Público."
      },
      {
        "id": "C",
        "texto": "Reconocer que la DIAN solo tiene competencia tributaria interna, debiendo remitir el componente arancelario y aduanero al Ministerio de Comercio, Industria y Turismo para su liquidación final."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La DIAN fue creada como Unidad Administrativa Especial (UAE) mediante el Decreto 2117 de 1992, al fusionar el 1º de junio de 1993 la Dirección de Impuestos Nacionales (DIN) y la Dirección de Aduanas Nacionales (DAN), consolidada orgánicamente en el Decreto 1071 de 1999 y Decreto 4048 de 2008, con personería jurídica, autonomía y adscripción al Ministerio de Hacienda, ejerciendo la administración y control unitario de las obligaciones tributarias, aduaneras y cambiarias.",
    "norma": "Decreto 2117 de 1992, Decreto 1071 de 1999 y Decreto 4048 de 2008, Art. 1",
    "citaNormativa": "La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales - DIAN, es una entidad adscrita al Ministerio de Hacienda y Crédito Público, con personería jurídica, autonomía administrativa y presupuestal, y con competencia en materia de impuestos del orden nacional, aduanera y control cambiario.",
    "dificultad": "ALTA",
    "competencia": "Estructura del Estado y Misionalidad DIAN",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_02",
    "perfil": "ANALISTA_IV",
    "ejeId": "estructura_dian",
    "ejeNombre": "Estructura Orgánica y Misionalidad de la DIAN",
    "tema": "Distribución de Competencias: Nivel Central vs. Direcciones Seccionales de Grandes Contribuyentes",
    "contexto": "Un mensajero radica en la ventanilla técnica de una seccional delegada un escrito de devolución de saldos de una corporación clasificada como Gran Contribuyente.",
    "enunciado": "Como Analista IV responsable de la recepción documental en ventanilla, ¿cuál es el procedimiento correcto en el sistema institucional?",
    "opciones": [
      {
        "id": "A",
        "texto": "Asumir la sustanciación y trámite de la devolución en la Dirección Seccional Delegada por haber operado la radicación física dentro de su jurisdicción geográfica."
      },
      {
        "id": "B",
        "texto": "Remitir el expediente inmediatamente por competencia a la Dirección Seccional de Grandes Contribuyentes de Bogotá, notificando al contribuyente conforme al principio de competencia territorial y funcional de la DIAN."
      },
      {
        "id": "C",
        "texto": "Rechazar de plano y definitivamente la solicitud de devolución mediante auto sancionatorio sin posibilidad de remitirla a la seccional competente."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Conforme a los Decretos 4048 de 2008 y 1742 de 2020, la Dirección Seccional de Grandes Contribuyentes tiene competencia privativa y preferente para la administración, fiscalización, liquidación, discusión y cobro de los tributos de los sujetos calificados en dicha categoría, por lo que cualquier actuación radicada en otra seccional debe remitirse a la dependencia competente sin vulnerar el debido proceso.",
    "norma": "Decreto 4048 de 2008, Art. 38 y Decreto 1742 de 2020 (Competencia Grandes Contribuyentes)",
    "citaNormativa": "La Dirección Seccional de Grandes Contribuyentes de Bogotá ejerce competencia sobre los contribuyentes, responsables o agentes de retención que mediante resolución sean calificados como tales.",
    "dificultad": "ALTA",
    "competencia": "Competencias Funcionales y Territoriales de la DIAN",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_03",
    "perfil": "ANALISTA_IV",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Zonas Francas",
    "tema": "Régimen de Zonas Francas: Introducción de Mercancías desde el Exterior (Decreto 2147 de 2016)",
    "contexto": "En el punto de control aduanero de ingreso a una Zona Franca, el transportador presenta el Formulario de Movimiento de Mercancías (FMM) firmado por el Usuario Operador para una maquinaria proveniente del puerto marítimo.",
    "enunciado": "Como Analista IV encargado de la inspección física y cotejo documental en el punto de control aduanero, ¿qué trámite corresponde?",
    "opciones": [
      {
        "id": "A",
        "texto": "Exigir el pago previo de todos los gravámenes arancelarios porque la zona franca hace parte física del territorio colombiano y genera tributos en el puerto de arribo."
      },
      {
        "id": "B",
        "texto": "Autorizar el ingreso a la Zona Franca al amparo del principio de extraterritorialidad aduanera, mediante el Formulario de Movimiento de Mercancías (FMM) autorizado por el Usuario Operador, sin que se causen ni liquiden tributos aduaneros en esta etapa."
      },
      {
        "id": "C",
        "texto": "Obligar a transformar la planta generadora en chatarra antes del ingreso si no cuenta con registro de importación reembolsable del Banco de la República."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Decreto 2147 de 2016 consagra el principio de extraterritorialidad aduanera de las zonas francas: la introducción de bienes procedentes del exterior por parte de un usuario industrial o comercial calificado no constituye importación definitiva ni causa tributos aduaneros; la operación se ampara en el documento de transporte consignado a la zona franca y el Formulario de Movimiento de Mercancías (FMM) debidamente aprobado por el Usuario Operador.",
    "norma": "Decreto 2147 de 2016, Art. 47 y ss. (Introducción de bienes a Zona Franca desde el resto del mundo)",
    "citaNormativa": "La introducción de mercancías procedentes de otros países por parte de los usuarios de las zonas francas no se considerará importación, y solo causará tributos aduaneros cuando las mercancías se introduzcan de la zona franca al Territorio Aduanero Nacional.",
    "dificultad": "ALTA",
    "competencia": "Régimen Aduanero Especial y Zonas Francas",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_04",
    "perfil": "ANALISTA_IV",
    "ejeId": "aduanero",
    "ejeNombre": "Régimen Aduanero y Zonas Francas",
    "tema": "Zonas Francas: Salida de Bienes hacia el Territorio Aduanero Nacional - TAN (Decreto 2147 de 2016)",
    "contexto": "Al revisar la liquidación de la declaración de importación al TAN de un lote de confecciones fabricadas en Zona Franca, el Analista IV debe verificar los anexos técnicos.",
    "enunciado": "En su labor técnica de revisión previa, ¿qué documento debe exigir y cotejar para verificar el componente extranjero gravable?",
    "opciones": [
      {
        "id": "A",
        "texto": "Liquidar el arancel e IVA sobre el 100% del valor total en aduana del producto terminado, sin discriminar el valor agregado nacional."
      },
      {
        "id": "B",
        "texto": "Liquidar el arancel aduanero únicamente sobre el valor CIF de las materias primas e insumos extranjeros incorporados en el bien final, con base en el Certificado de Integración expedido por el Usuario Operador."
      },
      {
        "id": "C",
        "texto": "Exonerar de todo pago de arancel e IVA a la mercancía de manera indefinida por haberse producido dentro del territorio de una Zona Franca colombiana."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Según el Decreto 2147 de 2016 y la normativa aduanera nacional, cuando un bien procesado en zona franca se introduce al TAN, la base gravable para liquidar el arancel aduanero corresponde exclusivamente al valor en aduana de las materias primas e insumos extranjeros incorporados en su elaboración, acreditados debidamente en el Certificado de Integración expedido por el Usuario Operador, aplicando la subpartida arancelaria del producto final.",
    "norma": "Decreto 2147 de 2016, Art. 52 y Decreto Ley 0920 de 2023",
    "citaNormativa": "Al Territorio Aduanero Nacional se liquidará el gravamen arancelario aplicable a la subpartida del producto final, únicamente sobre el valor en aduana de las materias primas e insumos extranjeros incorporados en el bien producido.",
    "dificultad": "ALTA",
    "competencia": "Valoración y Liquidación de Tributos Aduaneros en Zonas Francas",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_05",
    "perfil": "ANALISTA_IV",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Servicio al Ciudadano y PQSR",
    "tema": "Procedimiento Cercanía al Ciudadano PR-CAC-0043: Términos Perentorios de Respuesta",
    "contexto": "El Analista IV encargado del buzón de correspondencia y radicación PQSR recibe un oficio mixto que contiene solicitud de copias, reclamo por atención y consulta jurídica.",
    "enunciado": "Como Analista IV responsable de clasificar y tipificar las peticiones en el aplicativo institucional, ¿qué acción técnica debe ejecutar?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aplicar un plazo uniforme de 15 días hábiles a todas las solicitudes sin importar su naturaleza jurídica por encontrarse en el mismo radicado."
      },
      {
        "id": "B",
        "texto": "Tramitar la entrega de copias en 10 días hábiles, la queja ciudadana en 15 días hábiles y la consulta jurídica institucional en un término de hasta 30 días hábiles, informando al peticionario la debida separación de competencias."
      },
      {
        "id": "C",
        "texto": "Conceder 6 meses de espera para responder la totalidad de las solicitudes mediante una sola respuesta acumulada anual."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Procedimiento PR-CAC-0043 de la DIAN y el Art. 14 de la Ley 1437 de 2015 (sustituido por la Ley 1755 de 2015) estipulan términos legales perentorios diferenciados: las peticiones de información y documentos prescriben a los diez (10) días hábiles; las peticiones de interés general, quejas y reclamos a los quince (15) días hábiles; y las consultas jurídicas sobre materias a cargo de la entidad a los treinta (30) días hábiles.",
    "norma": "Procedimiento DIAN PR-CAC-0043 y Ley 1755 de 2015, Art. 14 (Sustituto de la Ley 1437 de 2011)",
    "citaNormativa": "Salvo norma legal especial, toda petición deberá resolverse dentro de los quince (15) días siguientes a su recepción. Las peticiones de documentos e información deberán resolverse dentro de los diez (10) días... Las peticiones mediante las cuales se eleva una consulta deberán resolverse dentro de los treinta (30) días siguientes a su recepción.",
    "dificultad": "MEDIA",
    "competencia": "Gestión de PQRSF y Garantía de Derechos Ciudadanos",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_06",
    "perfil": "ANALISTA_IV",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Servicio al Ciudadano y PQSR",
    "tema": "Trámite de Denuncias por Evasión o Contrabando (Procedimiento PR-CAC-0043)",
    "contexto": "Un ciudadano entrega en ventanilla física una denuncia manuscrita con fotos de un camión descargando mercancía extranjera de contrabando en una bodega no autorizada.",
    "enunciado": "Como Analista IV que recepciona el documento, ¿qué medidas técnicas de seguridad y registro debe aplicar?",
    "opciones": [
      {
        "id": "A",
        "texto": "Publicar los anexos y el nombre completo del denunciante en la cartelera física de la sede seccional para que el investigado ejerza contradicción inmediata."
      },
      {
        "id": "B",
        "texto": "Clasificar la denuncia con estricta reserva de identidad, radicarla en el módulo de denuncias y remitirla inmediatamente a la Dirección de Gestión de Fiscalización para el análisis de riesgo y apertura del programa de control correspondiente."
      },
      {
        "id": "C",
        "texto": "Archivar la denuncia de plano porque las denuncias fiscales deben ser formuladas exclusivamente ante la Fiscalía General de la Nación."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Bajo el Procedimiento PR-CAC-0043 de la DIAN, las denuncias por evasión tributaria, contrabando o infracciones aduaneras deben tramitarse bajo absoluta reserva legal de los datos del denunciante y remitirse a la Dirección de Gestión de Fiscalización (Aduanera o Tributaria) para que se incorporen en las matrices de gestión de riesgo fiscal e inicien las auditorías pertinentes.",
    "norma": "Procedimiento DIAN PR-CAC-0043 (Numerales 4.2 y 5) y Art. 583 del Estatuto Tributario",
    "citaNormativa": "Las denuncias ciudadanas recibidas a través de los canales institucionales deberán remitirse a la dependencia competente de Fiscalización para su evaluación y trámite conforme a los criterios de riesgo, salvaguardando la identidad del denunciante.",
    "dificultad": "MEDIA",
    "competencia": "Trámite Reservado de Denuncias Fiscales",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_07",
    "perfil": "ANALISTA_IV",
    "ejeId": "mipg",
    "ejeNombre": "Transformación Digital y PETI DIAN",
    "tema": "PETI 2022-2025: Factura Electrónica con Validación Previa y Documento Equivalente (Res. 000165 de 2023)",
    "contexto": "En un operativo de control técnico en campo, el Analista IV solicita a un establecimiento comercial que emite tiquetes POS su transmisión de factura electrónica.",
    "enunciado": "Como Analista IV en la verificación del cumplimiento formal de facturación, ¿qué comprobación técnica debe realizar?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar el tiquete POS como soporte válido de costos y deducciones sin importar la solicitud del adquiriente ni el valor de la operación."
      },
      {
        "id": "B",
        "texto": "Determinar el incumplimiento del deber formal de facturar, dado que si el adquirente exige la factura electrónica de venta, el obligado debe generarla y transmitirla con validación previa en tiempo real a la DIAN, y el tiquete POS sin validación no da derecho a costos ni deducciones en renta."
      },
      {
        "id": "C",
        "texto": "Sancionar al comprador que solicitó la factura por entorpecer la actividad comercial del establecimiento."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Plan Estratégico de TI (PETI), el Art. 616-1 del E.T. y la Resolución 000165 de 2023 establecen la universalización del sistema de facturación electrónica con validación previa. El tiquete POS no otorga derecho a costos ni deducciones en el impuesto sobre la renta ni impuestos descontables en IVA, y cuando el comprador solicite la factura electrónica de venta, el emisor está obligado a expedirla con transmisión inmediata y validación previa por la DIAN.",
    "norma": "Estatuto Tributario Art. 616-1, PETI DIAN 2022-2025 y Resolución DIAN 000165 de 2023",
    "citaNormativa": "El documento equivalente generado por máquinas registradoras con sistema POS no otorga derecho a costos ni deducciones... Cuando el adquirente exija factura electrónica de venta, el emisor está en la obligación de expedirla cumpliendo las condiciones de validación previa.",
    "dificultad": "ALTA",
    "competencia": "Régimen Sancionatorio y Facturación Electrónica DIAN",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_08",
    "perfil": "ANALISTA_IV",
    "ejeId": "mipg",
    "ejeNombre": "Transformación Digital y PETI DIAN",
    "tema": "Modelos Analíticos de Riesgo Fiscal y Cruces de Información Exógena (Art. 684-4 E.T.)",
    "contexto": "Al operar el módulo de cruces de información exógena, el Analista IV detecta inconsistencias aritméticas entre los reportes de medios magnéticos y las declaraciones del contribuyente.",
    "enunciado": "En su calidad técnica de apoyo a la fiscalización, ¿qué actuación corresponde dentro de sus competencias?",
    "opciones": [
      {
        "id": "A",
        "texto": "Descartar los reportes automáticos por provenir de algoritmos computacionales y limitarse a esperar una denuncia física en papel."
      },
      {
        "id": "B",
        "texto": "Incorporar las alertas y perfiles de riesgo del MGR (Modelo de Gestión de Riesgo) como insumo para proferir emplazamientos previos por inexactitud o requerimientos ordinarios de información, sustentados en la facultad del Art. 684-4 del Estatuto Tributario."
      },
      {
        "id": "C",
        "texto": "Clausurar inmediatamente las empresas inmobiliarias de manera indefinida sin otorgar término para responder ni practicar pliego de cargos."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Art. 684-4 del Estatuto Tributario y el eje de Analítica del PETI autorizan a la DIAN a implementar modelos de gestión de riesgo fundamentados en cruces informáticos y analítica de datos. La información extraída permite expedir pliegos de cargos, emplazamientos o requerimientos conforme a las etapas procesales regladas, respetando el debido proceso y la contradicción.",
    "norma": "Estatuto Tributario, Art. 684-4 y PETI DIAN 2022-2025 (Eje de Analítica de Datos)",
    "citaNormativa": "La Dirección de Impuestos y Aduanas Nacionales podrá utilizar la información recolectada de la factura electrónica, declaraciones y terceros, para el diseño de modelos de riesgo tendientes a identificar y fiscalizar a los contribuyentes que presenten inexactitudes o evasión.",
    "dificultad": "ALTA",
    "competencia": "Inteligencia Tributaria y Gestión del Riesgo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_09",
    "perfil": "ANALISTA_IV",
    "ejeId": "misionalidad",
    "ejeNombre": "Planeación Estratégica Institucional DIAN",
    "tema": "Misión y Visión DIAN: Seguridad Fiscal y Facilitación del Comercio Exterior",
    "contexto": "Durante la elaboración del informe mensual de gestión de la división, se solicita al Analista IV consolidar los datos de atención al ciudadano y recaudo.",
    "enunciado": "Como Analista IV de soporte administrativo, ¿cómo debe clasificar y estructurar las estadísticas del área institucional?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobar la propuesta porque la única razón de ser de la DIAN es la imposición coactiva de multas y sanciones a la ciudadanía."
      },
      {
        "id": "B",
        "texto": "Alinear los objetivos equilibrando la facilitación del cumplimiento voluntario de las obligaciones con la lucha frontal contra el fraude y el contrabando, en concordancia con la misión de garantizar la sostenibilidad fiscal del Estado y facilitar el comercio legítimo."
      },
      {
        "id": "C",
        "texto": "Suspender todo tipo de control aduanero y tributario para no generar inconformidades entre los comerciantes de la región."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Plan Estratégico Institucional de la DIAN y el Decreto 4048 de 2008 establecen que la misión institucional combina de manera armónica dos pilares: facilitar el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias, y al mismo tiempo combatir con rigor la evasión, el contrabando y la corrupción, asegurando la sostenibilidad fiscal de la Nación.",
    "norma": "Decreto 4048 de 2008, Art. 2 y Plan Estratégico Institucional DIAN 2023-2026",
    "citaNormativa": "La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales tiene como objeto coadyuvar a garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional, mediante la administración y control al debido cumplimiento de las obligaciones tributarias, aduaneras, cambiarias.",
    "dificultad": "MEDIA",
    "competencia": "Alineación Estratégica Institucional",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_10",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Gestión del Talento Humano y Bienestar",
    "tema": "Plan Estratégico de Talento Humano y Bienestar DIAN 2023: Conciliación y Clima Laboral",
    "contexto": "El Analista IV es convocado a participar en las actividades semestrales del Plan de Bien-Estar DIAN y su jefe inmediato le manifiesta dudas sobre si el nivel técnico tiene derecho a participar.",
    "enunciado": "Como Analista IV conocedor de los lineamientos de talento humano, ¿qué fundamento ampara la participación del personal técnico?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la orden del jefe inmediato sin objeción, puesto que los planes de bienestar son facultativos y pueden cancelarse verbalmente por cualquier superior."
      },
      {
        "id": "B",
        "texto": "Recordar que los programas de capacitación y bienestar laboral son mandatos legales del Sistema Específico de Carrera DIAN y del Decreto Ley 1567 de 1998, diseñados para garantizar el desarrollo integral, el clima laboral óptimo y la salud de los servidores públicos."
      },
      {
        "id": "C",
        "texto": "Promover el abandono colectivo e indefinido de los puestos de trabajo de todos los funcionarios sin agotar los canales institucionales de concertación."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Plan Estratégico de Talento Humano y Bien-Estar DIAN 2023 se fundamenta en el Decreto Ley 71 de 2020 y el Decreto Ley 1567 de 1998, los cuales obligan a las entidades públicas a formular e implementar programas de estímulos, bienestar social y capacitación como parte de los derechos de los servidores públicos para fomentar la calidad de vida laboral y el desempeño institucional.",
    "norma": "Decreto Ley 71 de 2020, Art. 56 y Decreto Ley 1567 de 1998, Art. 13",
    "citaNormativa": "Los programas de bienestar social deben propender por la creación de condiciones favorables para el desarrollo integral del empleado y el mejoramiento de su nivel de vida y el de su familia.",
    "dificultad": "MEDIA",
    "competencia": "Políticas de Talento Humano y Bienestar Laboral",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_11",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Régimen Salarial y Prestacional DIAN",
    "tema": "Prima de Productividad en la DIAN: Requisitos y Criterios (Decreto Ley 1268 de 1999)",
    "contexto": "Al revisar el predesprendible de nómina, un Analista IV verifica los conceptos liquidados de la Prima de Productividad conforme al Decreto 1268 de 1999.",
    "enunciado": "En el análisis técnico del concepto salarial, ¿qué condición normativa debe cumplirse para su percepción?",
    "opciones": [
      {
        "id": "A",
        "texto": "Pagar el 100% de la prima porque se trata de un derecho salarial ciego e incondicionado que no depende en ningún caso del rendimiento individual ni colectivo."
      },
      {
        "id": "B",
        "texto": "Negar el reconocimiento de la prima de productividad, dado que el Decreto 1268 de 1999 condiciona taxativamente su pago al cumplimiento de metas de gestión institucionales y a un nivel satisfactorio en la evaluación del desempeño individual."
      },
      {
        "id": "C",
        "texto": "Duplicar el pago de la prima para compensar la baja calificación obtenida por el funcionario."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Decreto Ley 1268 de 1999 regula el régimen salarial y prestacional de los servidores de la contribución en la DIAN. La Prima de Productividad tiene como presupuesto obligatorio el cumplimiento de las metas institucionales de recaudo y control, así como una calificación de servicios satisfactoria o sobresaliente por parte del funcionario en el periodo evaluado.",
    "norma": "Decreto Ley 1268 de 1999, Art. 6° y Decreto Reglamentario de Productividad DIAN",
    "citaNormativa": "La prima de productividad no constituye factor salarial para ningún efecto legal y su reconocimiento estará supeditado al cumplimiento de las metas de gestión fijadas para la entidad y a la obtención de una calificación de servicios satisfactoria.",
    "dificultad": "ALTA",
    "competencia": "Régimen Salarial Especial de Servidores DIAN",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_12",
    "perfil": "ANALISTA_IV",
    "ejeId": "derecho_peticion_ciudadano",
    "ejeNombre": "Defensoría del Contribuyente y Garantías Ciudadanas",
    "tema": "Funciones y Alcance de la Defensoría del Contribuyente y Usuario Aduanero (Decreto 4048 de 2008)",
    "contexto": "Un contribuyente solicita en la taquilla de atención que se le oriente sobre qué oficina atiende quejas contra posibles vulneraciones cometidas por auditores aduaneros.",
    "enunciado": "Como Analista IV de atención e información en el canal presencial, ¿a qué dependencia debe canalizar al usuario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Reemplazar al Director General de la DIAN y modificar por decreto las partidas arancelarias de la mercancía."
      },
      {
        "id": "B",
        "texto": "Velar por el respeto de los derechos del contribuyente y usuario aduanero, actuando como mediador y formulando recomendaciones de trámite prioritario e investigaciones ante los entes competentes por dilación injustificada."
      },
      {
        "id": "C",
        "texto": "Negar la atención por considerar que la Defensoría únicamente atiende litigios laborales de los empleados internos de la DIAN."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Defensoría del Contribuyente y del Usuario Aduanero de la DIAN (Decreto 4048 de 2008, Art. 53 y Dec. 1742 de 2020) es una dependencia especial que garantiza la debida protección y efectividad de los derechos de los usuarios y contribuyentes frente a actuaciones arbitrarias, dilaciones injustificadas o vulneraciones de garantías procedimentales en la administración tributaria y aduanera.",
    "norma": "Decreto 4048 de 2008, Art. 53 y Decreto 1742 de 2020",
    "citaNormativa": "La Defensoría del Contribuyente y del Usuario Aduanero velará por el respeto de los derechos de los contribuyentes, responsables, agentes retenedores, declarantes y usuarios aduaneros, en sus relaciones con la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales.",
    "dificultad": "MEDIA",
    "competencia": "Protección y Garantías del Contribuyente",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_13",
    "perfil": "ANALISTA_IV",
    "ejeId": "gestion_documental",
    "ejeNombre": "Gestión Documental y Archivo DIAN",
    "tema": "Plan Institucional de Archivos PINAR: Tablas de Retención y Valoración de Expedientes Tributarios",
    "contexto": "En el archivo de gestión de la división, un Analista IV encuentra expedientes fiscales del año gravable anterior listos para expurgo no autorizado.",
    "enunciado": "Como Analista IV responsable del archivo satélite de la división, ¿qué procedimiento técnico debe seguir según las TRD?",
    "opciones": [
      {
        "id": "A",
        "texto": "Apoyar la incineración para acelerar la limpieza física de las instalaciones administrativas."
      },
      {
        "id": "B",
        "texto": "Frenar la destrucción de expedientes, exigiendo el cumplimiento estricto de las Tablas de Retención Documental (TRD) y las transferencias secundarias, recordando que los expedientes tributarios y aduaneros tienen reserva legal y tiempos de conservación regulados por la Ley 594 de 2000."
      },
      {
        "id": "C",
        "texto": "Regalar los expedientes a recicladores informales para obtener fondos de bienestar para la división."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El PINAR DIAN y la Ley General de Archivos (Ley 594 de 2000) prohíben la eliminación indiscriminada de documentos públicos sin aplicar las Tablas de Retención Documental (TRD) debidamente aprobadas por el Comité de Archivo Institucional. Además, los expedientes tributarios poseen valor probatorio fiscal y fiscalizable durante el término de firmeza de las declaraciones y cobro coactivo.",
    "norma": "Plan Institucional de Archivos PINAR DIAN y Ley 594 de 2000, Art. 24",
    "citaNormativa": "Las entidades del Estado deberán elaborar y adoptar las respectivas tablas de retención documental... La eliminación de documentos se efectuará de conformidad con lo establecido en las tablas de retención documental.",
    "dificultad": "ALTA",
    "competencia": "Gestión Documental y Custodia Probatoria Fiscal",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_14",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Convocatoria DIAN y Reglas del Proceso de Selección",
    "tema": "Modalidad de Ascenso vs. Modalidad de Ingreso Abierto (Acuerdo No. 08 de 2022 y Ley 1960 de 2019)",
    "contexto": "Un servidor público con nombramiento provisional en cargo asistencial se postula a una vacante técnica en concurso de ascenso sin acreditar derechos de carrera administrativa.",
    "enunciado": "Desde la verificación documental técnica en los procesos de selección, ¿qué requisito esencial de procedencia se incumple?",
    "opciones": [
      {
        "id": "A",
        "texto": "Declarar 'No Admitido' en la etapa de VRM, dado que en los concursos de ascenso los requisitos mínimos de estudio y experiencia del empleo deben cumplirse y acreditarse de manera obligatoria a la fecha de cierre de inscripciones."
      },
      {
        "id": "B",
        "texto": "Otorgarle un plazo de gracia de 2 años después de posesionado para que termine las materias universitarias pendientes."
      },
      {
        "id": "C",
        "texto": "Homologar de forma automática el título profesional por el solo hecho de ser servidor de carrera en la DIAN."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "Tanto la Ley 1960 de 2019 como el Acuerdo No. 08 de 2022 de la CNSC disponen que para participar en la modalidad de ascenso es obligatorio ostentar derechos de carrera y cumplir a cabalidad con la totalidad de los requisitos mínimos de estudio y experiencia exigidos para el cargo en la OPEC al momento del cierre de inscripciones, sin excepciones ni plazos posteriores.",
    "norma": "Acuerdo No. 08 de 2022 CNSC (Art. 10 y ss.) y Ley 1960 de 2019",
    "citaNormativa": "Los aspirantes a los empleos en modalidad de ascenso deben cumplir y acreditar los requisitos mínimos señalados en el manual específico de funciones y de competencias laborales a la fecha de cierre de la etapa de inscripciones.",
    "dificultad": "MEDIA",
    "competencia": "Normativa de Concursos Públicos de Mérito",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_guias_org_15",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Convocatoria DIAN y Reglas del Proceso de Selección",
    "tema": "Ponderación de Pruebas: Carácter Eliminatorio de Competencias Funcionales (Guía de Orientación al Aspirante)",
    "contexto": "Un aspirante técnico pregunta en la mesa de ayuda de la convocatoria sobre el efecto de no alcanzar los 70 puntos en la prueba funcional.",
    "enunciado": "Como personal de soporte técnico y orientación, ¿qué regla objetiva de la convocatoria debe certificarle?",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar la reclamación y promediar los antecedentes porque el posgrado compensa el déficit de puntaje en la prueba escrita."
      },
      {
        "id": "B",
        "texto": "Rechazar la reclamación y confirmar la exclusión del concurso, ya que la prueba de competencias funcionales tiene carácter estrictamente eliminatorio y su no aprobación impide acceder a la etapa clasificatoria de Valoración de Antecedentes."
      },
      {
        "id": "C",
        "texto": "Repetir la prueba escrita de manera personalizada al aspirante para evitar demandas contenciosas."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Acuerdo de Convocatoria DIAN y la Guía de Orientación al Aspirante establecen que la prueba sobre competencias funcionales tiene carácter eliminatorio. Quien no alcance el puntaje mínimo aprobatorio (70.00 puntos) queda automáticamente excluido del proceso de selección y no continúa a la etapa clasificatoria de Valoración de Antecedentes ni de Competencias Comportamentales.",
    "norma": "Acuerdo No. 08 de 2022 CNSC, Art. 21 y Guía de Orientación al Aspirante DIAN 2676",
    "citaNormativa": "La prueba sobre competencias funcionales tiene carácter eliminatorio y un puntaje mínimo aprobatorio... Los aspirantes que no alcancen dicho puntaje no continuarán en el proceso de selección y quedarán eliminados del mismo.",
    "dificultad": "ALTA",
    "competencia": "Reglas de Ponderación y Estructura de Pruebas CNSC",
    "nivel": "Técnico"
  },
  // --- CASOS OFIMÁTICA, COMPORTAMENTALES DEC. 815, INTEGRIDAD Y PROTOCOLOS DIAN 2676 (Fase 9 - Nivel Técnico) ---
  {
    "id": "tec_dian_ofim_01",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Gestión Eficiente de Documentos en Word: Apertura Rápida de Archivos Oficiales",
    "contexto": "En el desarrollo de sus labores de apoyo técnico documental y radicación en la DIAN, un Gestor III debe trabajar simultáneamente en varios informes técnicos. Mientras redacta un pliego de cargos, la jefatura le solicita abrir con urgencia un nuevo documento en blanco para proyectar un oficio perentorio dirigido a un contribuyente.",
    "enunciado": "Para abrir de inmediato un nuevo documento en blanco en Microsoft Word mediante el atajo oficial de teclado, usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Presiona la combinación de teclas Control + U."
      },
      {
        "id": "B",
        "texto": "Presiona la combinación de teclas Control + N."
      },
      {
        "id": "C",
        "texto": "Presiona la combinación de teclas Alt + N."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "En Microsoft Word en español, el atajo de teclado oficial para abrir un nuevo documento en blanco es Control + U. La combinación Control + N se utiliza para aplicar formato de negrita al texto seleccionado.",
    "norma": "Estándar Oficial Microsoft Office Word y Guía de Eficiencia Administrativa Función Pública",
    "citaNormativa": "Métodos abreviados de teclado en Word: 'Ctrl + U' crea un nuevo documento en blanco de manera inmediata.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_02",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Alineación de Texto y Estructura en Word: Centrado de Títulos y Encabezados",
    "contexto": "Al estructurar una resolución sancionatoria conforme a las normas de estilo de la DIAN, se requiere centrar el título principal y los encabezados de los considerandos antes de proceder al guardado y firma digital del documento.",
    "enunciado": "¿Cuál es el comando abreviado correcto en Word para centrar el texto seleccionado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Selecciona el contenido y usa la abreviatura Control + C."
      },
      {
        "id": "B",
        "texto": "Selecciona el contenido y usa la abreviatura Control + T (o Control + E en versiones tradicionales de centrado)."
      },
      {
        "id": "C",
        "texto": "Selecciona el contenido y usa la abreviatura Alt + E."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "En Microsoft Word, la función de centrar texto se ejecuta mediante el comando de teclado Control + T (o Control + E según la versión lingüística de Office). Control + C está reservado para la función Copiar.",
    "norma": "Manual de Estilo y Correspondencia Oficial DIAN / Soporte Microsoft Office",
    "citaNormativa": "Atajos de edición en Word: la alineación centrada del texto se aplica sobre la selección mediante el atajo de centrado.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_03",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Corrección de Errores Operativos: Deshacer Acciones en Word",
    "contexto": "Durante la edición de un informe técnico tributario confidencial, el funcionario borra involuntariamente una tabla de liquidación arancelaria recién calculada debido a un deslizamiento del ratón.",
    "enunciado": "Para recuperar de inmediato la tabla borrada revirtiendo la última acción errónea, usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Cierra el programa sin guardar cambios perdiendo todo el trabajo de la mañana."
      },
      {
        "id": "B",
        "texto": "Presiona la combinación de teclas Control + Z para deshacer la última acción."
      },
      {
        "id": "C",
        "texto": "Presiona la combinación de teclas Control + Y para avanzar a la siguiente página."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La combinación Control + Z es el estándar universal de Microsoft Office y Windows para deshacer inmediatamente la última acción efectuada, restaurando el contenido eliminado.",
    "norma": "Soporte Técnico Microsoft Office y Estándares de Seguridad de la Información DIAN",
    "citaNormativa": "Comandos universales de edición: 'Ctrl + Z' deshace la acción previa en el documento de trabajo.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_04",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Paginación y Saltos de Sección en Documentos Extensos",
    "contexto": "Al finalizar el primer capítulo de un expediente administrativo de 40 páginas, se requiere que el siguiente capítulo comience en la parte superior de una página nueva sin tener que presionar la tecla Enter repetidamente.",
    "enunciado": "¿Cuál es la acción técnica recomendada para forzar el inicio de una página nueva de manera técnico?",
    "opciones": [
      {
        "id": "A",
        "texto": "Insertar un salto de página utilizando la combinación de teclas Control + Enter (Intro)."
      },
      {
        "id": "B",
        "texto": "Presionar la barra espaciadora hasta que el texto ruede al siguiente folio."
      },
      {
        "id": "C",
        "texto": "Reducir el tamaño de la fuente a 2 puntos para que quepa en la misma hoja."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "En Microsoft Word, la inserción de un Salto de Página mediante el atajo Control + Enter garantiza que el nuevo texto comience en la página siguiente de manera limpia, evitando desplazamientos involuntarios cuando se modifiquen los párrafos precedentes.",
    "norma": "Guía de Buenas Prácticas Documentales en la Administración Pública y Soporte Office",
    "citaNormativa": "Paginación profesional: El salto de página ('Ctrl + Enter') fija el quiebre de página independientemente de ediciones futuras.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_05",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Combinación de Correspondencia Masiva a Contribuyentes",
    "contexto": "La división de cobranzas de la DIAN debe enviar comunicaciones personalizadas a 500 deudores morosos. Cada carta debe contener el nombre del contribuyente, el NIT, el monto adeudado y el periodo fiscal, tomando los datos de una hoja electrónica de Excel.",
    "enunciado": "Para automatizar este envío masivo sin redactar cada oficio individualmente, ¿qué herramienta de Word debe utilizarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Copiar y pegar manualmente los 500 registros uno por uno en documentos separados."
      },
      {
        "id": "B",
        "texto": "Utilizar el Asistente para Combinación de Correspondencia (Mail Merge) vinculando el archivo de Excel como origen de datos e insertando los campos combinados."
      },
      {
        "id": "C",
        "texto": "Crear una macro en bloc de notas para imprimir las hojas sin formato."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Combinación de Correspondencia en Word permite conectar un documento modelo con un origen de datos (hoja de cálculo de Excel o base de datos), insertando campos combinados como NIT, nombre y valor adeudado para generar masivamente oficios personalizados de forma exacta y automatizada.",
    "norma": "Procedimiento de Notificaciones Masivas DIAN y Manual de Usuario Office",
    "citaNormativa": "La combinación de correspondencia permite crear un lote de documentos personalizados donde cada carta contiene información única procedente de una fuente de datos.",
    "dificultad": "MEDIA",
    "competencia": "Automatización Documental y Gestión de Información",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_06",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Pegado Especial: Conservar Solo Texto al Importar Datos desde Internet",
    "contexto": "Al copiar extractos de sentencias del Consejo de Estado y normas desde la página web de la DIAN para insertarlos en un concepto jurídico, el texto pegado arrastra fuentes discordantes, colores de fondo y enlaces no deseados.",
    "enunciado": "Para homologar el formato al estilo institucional de Word sin arrastrar formatos externos, ¿qué opción de pegado debe elegirse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Hacer clic en 'Conservar formato de origen'."
      },
      {
        "id": "B",
        "texto": "Hacer clic en Pegado Especial y seleccionar 'Conservar solo texto' (o Texto sin formato)."
      },
      {
        "id": "C",
        "texto": "Pegar como imagen no editable para evitar alteraciones."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La opción 'Conservar solo texto' elimina las etiquetas HTML, estilos ajenos, hipervínculos indeseados y colores de fondo, adoptando automáticamente la tipografía y el interlineado del documento de destino en Word.",
    "norma": "Manual de Estilo Institucional DIAN y Guía Técnica de Ofimática",
    "citaNormativa": "Opciones de pegado en Office: 'Conservar solo texto' elimina el formato original y hace coincidir el contenido con el formato del párrafo de destino.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_07",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Selección Rápida de Párrafos con el Ratón en Word",
    "contexto": "Durante la revisión de un extenso memorial tributario, se requiere seleccionar un párrafo completo de argumentación para cambiarle el interlineado a 1.5 líneas.",
    "enunciado": "¿Cuál es la acción de ratón más rápida y precisa para seleccionar automáticamente todo un párrafo en Word?",
    "opciones": [
      {
        "id": "A",
        "texto": "Hacer un solo clic en el centro de cualquier palabra."
      },
      {
        "id": "B",
        "texto": "Hacer doble clic sobre la primera letra del párrafo."
      },
      {
        "id": "C",
        "texto": "Hacer triple clic en cualquier parte dentro del párrafo."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "En Microsoft Word, hacer triple clic dentro de un párrafo selecciona automáticamente todo el párrafo completo. El doble clic selecciona únicamente la palabra sobre la que se presiona.",
    "norma": "Soporte Técnico Microsoft Word / Técnicas de Productividad Ofimática",
    "citaNormativa": "Métodos de selección rápida: Doble clic selecciona una palabra; triple clic selecciona el párrafo completo.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Procesador de Texto",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_08",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Cálculo de Totales en Excel: Función SUMA en Rangos Continuos",
    "contexto": "En una hoja de fiscalización tributaria se listan los valores de retención en la fuente declarados por un contribuyente durante los 12 meses del año en las celdas B2 hasta B13.",
    "enunciado": "¿Cuál es la sintaxis correcta de la fórmula para totalizar dichos valores en la celda B14?",
    "opciones": [
      {
        "id": "A",
        "texto": "=SUMAR(B2-B13)"
      },
      {
        "id": "B",
        "texto": "=SUMA(B2:B13)"
      },
      {
        "id": "C",
        "texto": "=TOTAL(B2..B13)"
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La sintaxis estándar en Excel para sumar un rango continuo de celdas utiliza la función SUMA con el operador de rango de dos puntos: '=SUMA(B2:B13)'.",
    "norma": "Estándar Oficial Microsoft Excel y Guía de Auditoría Fiscal DIAN",
    "citaNormativa": "Funciones matemáticas en Excel: 'SUMA(número1, [número2], ...)' suma todos los números de un rango de celdas especificado.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_09",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Identificación de Valores Extremos: Función MAX en Auditorías de Precios",
    "contexto": "En un control aduanero de valoración de mercancías importadas, se cuenta con una columna (C2 a C50) con los precios unitarios declarados por diferentes agencias para una misma partida arancelaria.",
    "enunciado": "Para determinar de forma automática cuál es el precio unitario más alto de la muestra, ¿qué fórmula debe insertarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "=ALTO(C2:C50)"
      },
      {
        "id": "B",
        "texto": "=MAYOR(C2:C50)"
      },
      {
        "id": "C",
        "texto": "=MAX(C2:C50)"
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "La función MAX en Microsoft Excel devuelve el valor numérico máximo de un conjunto de valores contenidos en un rango de celdas ('=MAX(C2:C50)').",
    "norma": "Soporte Técnico Microsoft Excel y Procedimientos de Valoración Aduanera DIAN",
    "citaNormativa": "Funciones estadísticas en Excel: 'MAX' devuelve el valor más grande de un conjunto de datos.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_10",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Cálculo de Medias Estadísticas: Función PROMEDIO en Gestión Tributaria",
    "contexto": "Un auditor requiere calcular el promedio mensual de ventas gravadas con IVA de una empresa durante el año, ubicadas en el rango D2 a D13.",
    "enunciado": "¿Cuál es la fórmula correspondiente para obtener la media aritmética exacta?",
    "opciones": [
      {
        "id": "A",
        "texto": "=PROMEDIO(D2:D13)"
      },
      {
        "id": "B",
        "texto": "=MEDIA(D2:D13)"
      },
      {
        "id": "C",
        "texto": "=SUMA(D2:D13)/10"
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La función PROMEDIO en Excel suma los valores del rango especificado y los divide automáticamente entre la cantidad de celdas numéricas que contiene el rango.",
    "norma": "Estándar Oficial Microsoft Excel",
    "citaNormativa": "Funciones estadísticas: 'PROMEDIO' calcula la media aritmética de los argumentos contenidos en el rango seleccionado.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_11",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Condicionales Lógicos en Fiscalización: Función SI en Excel",
    "contexto": "En una matriz de control de obligaciones, la columna E contiene el valor de ingresos brutos anuales de varios contribuyentes y el tope legal para estar obligado a declarar renta es de $59.000.000. Se requiere que en la columna F aparezca 'OBLIGADO' si el valor de la celda E2 supera dicho tope y 'NO OBLIGADO' en caso contrario.",
    "enunciado": "¿Cuál es la formulación lógica correcta que debe implementarse en la celda F2?",
    "opciones": [
      {
        "id": "A",
        "texto": "=SI(E2>59000000, \"OBLIGADO\", \"NO OBLIGADO\")"
      },
      {
        "id": "B",
        "texto": "=CONDICION(E2>59000000, OBLIGADO, NO)"
      },
      {
        "id": "C",
        "texto": "=VERDADERO_FALSO(E2, 59000000, \"OBLIGADO\")"
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La función condicional SI evalúa una prueba lógica y devuelve un valor si es verdadera y otro si es falsa: '=SI(prueba_lógica, [valor_si_verdadero], [valor_si_falso])'. Al tratarse de cadenas de texto, deben encerrarse entre comillas dobles.",
    "norma": "Soporte Oficial Microsoft Excel y Manual de Fiscalización DIAN",
    "citaNormativa": "Funciones lógicas en Excel: La función 'SI' comprueba si se cumple una condición y devuelve un valor si se evalúa como VERDADERO y otro si se evalúa como FALSO.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_12",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Búsqueda y Cruce de Información: Función BUSCARV (VLOOKUP)",
    "contexto": "Se dispone de una base de datos institucional de 10.000 contribuyentes en la 'Hoja1'. En una hoja de trabajo separada, un Gestor III tiene una lista de 50 NITs y necesita extraer el nombre o razón social correspondiente ubicado en la columna 2 de la matriz A2:D10000.",
    "enunciado": "Para traer el nombre exacto del contribuyente cuyo NIT está en la celda A2, ¿qué fórmula debe utilizarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "=BUSCARV(A2, Hoja1!$A$2:$D$10000, 2, FALSO)"
      },
      {
        "id": "B",
        "texto": "=ENCONTRAR(A2, Hoja1!A2:D10000, 2)"
      },
      {
        "id": "C",
        "texto": "=EXTRAER(A2, 2, VERDADERO)"
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La función BUSCARV busca un valor en la primera columna de una tabla hacia la izquierda y devuelve el valor de la columna especificada (columna 2). El argumento FALSO (o 0) garantiza una coincidencia exacta del NIT y las referencias absolutas ($) fijan la matriz.",
    "norma": "Soporte Microsoft Excel y Guía de Cruces de Información Exógena DIAN",
    "citaNormativa": "Búsqueda y referencia: 'BUSCARV(valor_buscado, matriz_tabla, indicador_columnas, [rango])' busca en la primera columna y devuelve un valor en la misma fila desde una columna especificada.",
    "dificultad": "ALTA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_13",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Referencias Absolutas vs. Relativas: El Símbolo $ en Excel",
    "contexto": "Al calcular el impuesto liquidado para una lista de 200 liquidaciones, cada base gravable (columna B) debe multiplicarse por la tarifa general de renta del 35%, la cual está registrada de manera fija y única en la celda H1.",
    "enunciado": "Para que al arrastrar la fórmula hacia abajo la referencia a la celda H1 no se desplace a H2, H3, etc., ¿cómo debe escribirse la fórmula en la celda C2?",
    "opciones": [
      {
        "id": "A",
        "texto": "=B2*H1"
      },
      {
        "id": "B",
        "texto": "=B2*$H$1"
      },
      {
        "id": "C",
        "texto": "=B2&#H1"
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El signo de pesos ($) antes de la letra de la columna y del número de fila ($H$1) crea una referencia absoluta fija. Al copiar o arrastrar la fórmula a otras celdas, la referencia a H1 permanece inmutable mientras que B2 cambia a B3, B4 de forma relativa.",
    "norma": "Manual Técnico de Modelación Financiera y Soporte Microsoft Excel",
    "citaNormativa": "Referencias en Excel: Una referencia absoluta de celda (por ejemplo, $A$1) siempre hace referencia a una celda en una ubicación específica.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_14",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Análisis Multidimensional: Tablas Dinámicas en Grandes Volúmenes de Datos",
    "contexto": "La Dirección de Gestión de Fiscalización remite un archivo plano con más de 100.000 registros de declaraciones de importación con datos de seccional, fecha, tipo de mercancía y valor CIF. La jefatura solicita un informe gerencial que resuma el total importado por cada seccional y por cada mes en menos de 10 minutos.",
    "enunciado": "¿Cuál es la herramienta más eficaz y rápida en Excel para generar este resumen gerencial agrupado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Ordenar manualmente los 100.000 datos e ir sumando seccional por seccional con una calculadora externa."
      },
      {
        "id": "B",
        "texto": "Insertar una Tabla Dinámica (Pivot Table) arrastrando el campo Seccional a Filas, el campo Mes a Columnas y el campo Valor CIF a Valores."
      },
      {
        "id": "C",
        "texto": "Exportar el archivo a formato Word para hacer una tabla de texto."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Las Tablas Dinámicas en Excel son la herramienta idónea para explorar, resumir, calcular y analizar grandes volúmenes de datos en segundos, permitiendo realizar comparaciones, detectar patrones y generar informes gerenciales multidimensionales de manera automática.",
    "norma": "Guía de Analítica y Reportería Gerencial DIAN / Soporte Microsoft Excel",
    "citaNormativa": "Una tabla dinámica es una herramienta avanzada para calcular, resumir y analizar datos que le permite ver comparaciones, patrones y tendencias en ellos.",
    "dificultad": "ALTA",
    "competencia": "Manejo de Herramientas Ofimáticas - Hoja de Cálculo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_15",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Protección de Datos Personales en Correo Institucional: Uso de CCO en Outlook",
    "contexto": "La dependencia de servicio al ciudadano de la DIAN debe enviar por correo electrónico institucional una circular informativa a 300 contribuyentes que tienen trámites de devolución en curso. Conforme a la Ley 1581 de 2012 de Protección de Datos Personales (Habeas Data), las direcciones de correo electrónico no deben ser visibles entre los destinatarios.",
    "enunciado": "Al redactar el correo masivo en Microsoft Outlook, ¿en qué campo deben colocarse las 300 direcciones de correo de los ciudadanos?",
    "opciones": [
      {
        "id": "A",
        "texto": "En el campo 'Para' para que todos sepan quiénes más recibieron la circular."
      },
      {
        "id": "B",
        "texto": "En el campo 'CC' (Con Copia) para garantizar la transparencia pública de los datos."
      },
      {
        "id": "C",
        "texto": "En el campo 'CCO' (Con Copia Oculta) para garantizar que los correos electrónicos permanezcan confidenciales y ocultos para los demás receptores."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "El campo CCO (Con Copia Oculta) en el correo electrónico impide que los destinatarios vean las direcciones de las demás personas que reciben el mensaje. En el sector público, su uso es obligatorio al enviar correos masivos a ciudadanos para dar estricto cumplimiento al régimen general de protección de datos personales de la Ley 1581 de 2012.",
    "norma": "Ley 1581 de 2012 (Habeas Data) y Políticas de Seguridad de la Información DIAN",
    "citaNormativa": "La divulgación de correos electrónicos personales a terceros sin autorización constituye una vulneración al principio de seguridad y confidencialidad en el tratamiento de datos personales.",
    "dificultad": "MEDIA",
    "competencia": "Gestión de Comunicaciones Oficiales y Seguridad de la Información",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_16",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Automatización de Bandeja de Entrada en Outlook: Reglas de Correo",
    "contexto": "Un Gestor III recibe diariamente más de 120 correos electrónicos institucionales, entre los cuales se encuentran notificaciones del Sistema Electrónico de Contratación Pública (SECOP) y alertas de fiscalización que requieren atención prioritaria.",
    "enunciado": "Para que los correos que contengan en el asunto la palabra 'SECOP' se trasladen de forma automática a una carpeta especial denominada 'Contratos' sin saturar la bandeja principal, ¿qué función debe configurarse?",
    "opciones": [
      {
        "id": "A",
        "texto": "Configurar una 'Regla de Correo' (Rules) en Outlook que especifique la condición del asunto y la acción de mover el elemento a la carpeta seleccionada."
      },
      {
        "id": "B",
        "texto": "Eliminar la cuenta de correo y abrir una cuenta personal de mensajería comercial."
      },
      {
        "id": "C",
        "texto": "Esperar al final de la semana para clasificar manualmente los 600 correos acumulados."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "Las Reglas en Microsoft Outlook permiten automatizar la gestión y organización del correo electrónico institucional, aplicando acciones predefinidas (como mover mensajes, marcarlos con banderas o reenviarlos) con base en criterios específicos como remitente, palabras en el asunto o destinatarios.",
    "norma": "Manual de Usuario Microsoft Outlook y Guía de Eficiencia Administrativa Función Pública",
    "citaNormativa": "Reglas de Outlook: Las reglas permiten mover, marcar y responder automáticamente a los mensajes de correo electrónico según las condiciones establecidas.",
    "dificultad": "MEDIA",
    "competencia": "Manejo de Herramientas Ofimáticas - Correo Institucional",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_17",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Diseño y Presentación de Informes en PowerPoint: Notas del Orador",
    "contexto": "El Director Seccional solicita a un profesional preparar una presentación ejecutiva en PowerPoint sobre los resultados del plan de recaudo para el Comité Directivo de la DIAN. Se requiere incluir datos numéricos adicionales de soporte técnico que solo el presentador debe visualizar en su pantalla mientras proyecta las diapositivas al auditorio.",
    "enunciado": "¿En qué sección de PowerPoint debe consignarse esta información de apoyo?",
    "opciones": [
      {
        "id": "A",
        "texto": "En el panel de 'Notas' de cada diapositiva para visualizarse mediante la 'Vista Moderador' (Presenter View) sin proyectarse al público."
      },
      {
        "id": "B",
        "texto": "En el título de la diapositiva en fuente color blanco sobre fondo blanco."
      },
      {
        "id": "C",
        "texto": "En un correo electrónico impreso en papel sostenido en la mano."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "El panel de Notas en PowerPoint permite al expositor ingresar notas y datos clave que se visualizan exclusivamente en la pantalla del moderador (Vista Moderador) durante la exposición, mientras que la audiencia solo observa la diapositiva en la pantalla principal de proyección.",
    "norma": "Soporte Técnico Microsoft PowerPoint / Estándares de Comunicación Institucional",
    "citaNormativa": "Vista Moderador: Permite ver la presentación con las notas del orador en un equipo mientras el público ve las diapositivas en otra pantalla.",
    "dificultad": "BASICA",
    "competencia": "Manejo de Herramientas Ofimáticas - Presentaciones Ejecutivas",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_18",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Formatos Estándar de Intercambio y Preservación Documental: Archivos PDF",
    "contexto": "Al finalizar la redacción de un concepto tributario definitivo en Word, se requiere remitirlo por canal electrónico al contribuyente garantizando que el documento no pueda ser alterado fácilmente, preserve la fidelidad visual en cualquier dispositivo y cumpla con el estándar de conservación documental.",
    "enunciado": "¿A qué formato estándar debe exportarse o guardarse el archivo?",
    "opciones": [
      {
        "id": "A",
        "texto": "Formato de texto enriquecido .RTF editable."
      },
      {
        "id": "B",
        "texto": "Formato PDF (Portable Document Format) / PDF-A para archivo digital seguro."
      },
      {
        "id": "C",
        "texto": "Formato de bloc de notas sin formato .TXT."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El formato PDF (y en especial PDF/A para preservación a largo plazo) es el estándar legal y técnico en la administración pública colombiana para el intercambio de documentos oficiales firmados, puesto que asegura la inmutabilidad relativa del contenido, la compatibilidad multiplataforma y la integridad del diseño.",
    "norma": "Ley 594 de 2000, Acuerdo 002 de 2014 del AGN y Modelo de Seguridad y Privacidad MIPG",
    "citaNormativa": "Los documentos electrónicos que contengan actos administrativos oficiales deben ser generados y preservados en formatos de formato de documento portátil (PDF/A).",
    "dificultad": "BASICA",
    "competencia": "Gestión Documental y Preservación Digital",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_19",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Gestión y Almacenamiento de Archivos en Windows: Compresión en Formato ZIP",
    "contexto": "Para remitir un expediente probatorio que contiene 45 archivos (fotografías de inspección aduanera, actas de aprehensión y declaraciones de importación) cuyo peso total supera los límites permitidos por el servidor de correo institucional, el funcionario debe consolidarlos en un solo archivo de menor tamaño.",
    "enunciado": "¿Cuál es la acción técnica estándar en el explorador de archivos de Windows?",
    "opciones": [
      {
        "id": "A",
        "texto": "Seleccionar los archivos, hacer clic derecho, elegir 'Enviar a' y seleccionar 'Carpeta comprimida (en zip)'."
      },
      {
        "id": "B",
        "texto": "Eliminar 40 de los 45 archivos para que el correo no rebote."
      },
      {
        "id": "C",
        "texto": "Cambiar la extensión de los archivos a .exe para que pesen menos."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La compresión nativa en formato ZIP de Windows permite empaquetar múltiples archivos en un único contenedor y reducir su tamaño en bytes mediante algoritmos de compresión sin pérdida, facilitando su transmisión segura y ordenada por canales telemáticos.",
    "norma": "Manual de Estándares Tecnológicos DIAN y Soporte Técnico del Sistema Operativo Windows",
    "citaNormativa": "La compresión de carpetas permite agrupar varios documentos en un solo archivo comprimido optimizando el almacenamiento y ancho de banda.",
    "dificultad": "BASICA",
    "competencia": "Administración de Archivos y Sistemas Operativos",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_ofim_20",
    "perfil": "ANALISTA_IV",
    "ejeId": "herramientas_ofimaticas_digitales",
    "ejeNombre": "Herramientas Ofimáticas y Productividad Digital",
    "tema": "Seguridad de la Información: Bloqueo de Estación de Trabajo en Windows",
    "contexto": "Un Gestor III debe retirarse de su puesto de trabajo durante 15 minutos para acudir a una reunión presencial en la sala de juntas. En su monitor permanecen abiertas bases de datos con información amparada por reserva tributaria.",
    "enunciado": "Para salvaguardar la reserva de la información e impedir accesos no autorizados en su ausencia, ¿cuál es el atajo de teclado inmediato para bloquear la sesión en Windows?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dejar la pantalla encendida confiando en la buena fe de los transeúntes."
      },
      {
        "id": "B",
        "texto": "Presionar la tecla del logotipo de Windows + L para bloquear la estación de trabajo de inmediato."
      },
      {
        "id": "C",
        "texto": "Apagar el monitor sin cerrar la sesión ni bloquear el sistema operativo."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El atajo Tecla Windows + L bloquea de forma instantánea la sesión de usuario en Windows, exigiendo la contraseña o autenticación biométrica para reingresar. En entidades de la contribución como la DIAN, esta práctica es un deber formal de seguridad de la información obligatorio para proteger la reserva tributaria (Art. 583 E.T.).",
    "norma": "Estatuto Tributario Art. 583, Política de Seguridad de la Información DIAN y Norma ISO 27001",
    "citaNormativa": "Los servidores públicos deberán bloquear sus estaciones de trabajo cada vez que se ausenten de su puesto para prevenir la fuga o acceso no autorizado a datos reservados.",
    "dificultad": "BASICA",
    "competencia": "Seguridad Digital y Custodia de la Información",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_01",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Aporte Técnico-Profesional ante Cambios Normativos Complejos",
    "contexto": "La división de fiscalización donde usted labora se verá afectada de raíz por una reforma tributaria estructural que modifica sustancialmente el régimen sancionatorio y las liquidaciones oficiales. Estos cambios exigen rediseñar los procedimientos operativos y los formatos de pliegos de cargos.",
    "enunciado": "De acuerdo con las competencias del nivel técnico (Decreto 815 de 2018), ante esta situación usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Investiga con anterioridad la información disponible para estar prevenido ante posibles quejas de los usuarios."
      },
      {
        "id": "B",
        "texto": "Espera a que la Dirección General emita instrucciones formales y mientras tanto continúa aplicando la normativa anterior."
      },
      {
        "id": "C",
        "texto": "Estudia los cambios normativos anticipadamente y diseña una propuesta metodológica que facilite la transición operativa del equipo sin traumatismos en los términos procesales."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "La competencia de 'Aporte Técnico-Profesional' (Nivel Técnico/Asistencial - Decreto 815 de 2018) implica no solo conocer la norma, sino aplicar activamente los conocimientos técnicos especializados para generar soluciones innovadoras y metodologías que optimicen la gestión del área.",
    "norma": "Decreto 815 de 2018 (Competencias Comportamentales del Nivel Profesional)",
    "citaNormativa": "Aporte Técnico-Profesional: Aplica el conocimiento profesional en la resolución de problemas y promueve el mejoramiento continuo de los procesos institucionales.",
    "dificultad": "ALTA",
    "competencia": "Aporte Técnico-Profesional",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_02",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Gestión de Procedimientos y Racionalización del Servicio",
    "contexto": "En el área de cobranzas se presentan cuellos de botella en la expedición de mandamientos de pago debido al exceso de impresiones y firmas físicas en expedientes que ya cuentan con trazabilidad electrónica en el sistema Muisca.",
    "enunciado": "Bajo la competencia de 'Gestión de Procedimientos', ¿cuál es la conducta más adecuada del Analista IV (Técnico)?",
    "opciones": [
      {
        "id": "A",
        "texto": "Analizar el flujo integral del proceso, identificar actividades redundantes y formular un plan de racionalización apoyado en la firma digital para reducir los tiempos de respuesta."
      },
      {
        "id": "B",
        "texto": "Aumentar su jornada laboral de manera no autorizada para imprimir más documentos físicos por día."
      },
      {
        "id": "C",
        "texto": "Desentenderse de los retrasos argumentando que la culpa es exclusiva del sistema informático central."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La competencia de 'Gestión de Procedimientos' exige al profesional planificar, hacer seguimiento y ajustar continuamente las actividades para asegurar el cumplimiento eficiente, oportuno y con calidad de los objetivos de la entidad pública.",
    "norma": "Decreto 815 de 2018 (Gestión de Procedimientos)",
    "citaNormativa": "Gestión de Procedimientos: Coordina, ejecuta y controla las actividades asignadas de acuerdo con los planes y programas institucionales, buscando la optimización de recursos.",
    "dificultad": "ALTA",
    "competencia": "Gestión de Procedimientos",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_03",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Instrumentación de Decisiones Basadas en Evidencia Técnica",
    "contexto": "Al evaluar la viabilidad de proferir una liquidación oficial de revisión por valor de $5.000 millones a una multinacional, existen presiones internas para archivar el caso con base en interpretaciones subjetivas sin soporte contable.",
    "enunciado": "En cumplimiento de la competencia de 'Instrumentación de Decisiones', usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Adopta la decisión fundándose rigurosamente en las pruebas contables, cruces exógenos y doctrina jurídica vinculante, estructurando un concepto técnico sólido e inobjetable."
      },
      {
        "id": "B",
        "texto": "Archiva el expediente para evitar litigios futuros contra la administración tributaria."
      },
      {
        "id": "C",
        "texto": "Traslada la decisión a un comité informal sin dejar registro escrito ni sustento probatorio."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La 'Instrumentación de Decisiones' en el nivel profesional consiste en tomar decisiones fundamentadas en información válida, objetiva y rigurosa, asumiendo la responsabilidad técnica de sus efectos legales y fiscales.",
    "norma": "Decreto 815 de 2018 (Instrumentación de Decisiones)",
    "citaNormativa": "Instrumentación de Decisiones: Elige alternativas de acción viables, oportunas y sustentadas en información objetiva para resolver las situaciones que se presentan en el ejercicio de sus funciones.",
    "dificultad": "ALTA",
    "competencia": "Instrumentación de Decisiones",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_04",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Comunicación Efectiva y Asertiva ante Contribuyentes Exaltados",
    "contexto": "Un representante legal acude a la oficina jurídica sumamente disgustado por el embargo preventivo de sus cuentas bancarias, utilizando expresiones agresivas hacia los funcionarios de ventanilla.",
    "enunciado": "Como Analista IV (Técnico), bajo la competencia de 'Comunicación Efectiva', su proceder debe ser:",
    "opciones": [
      {
        "id": "A",
        "texto": "Responderle en el mismo tono defensivo para hacer respetar la autoridad estatal."
      },
      {
        "id": "B",
        "texto": "Escuchar activamente al ciudadano, mantener la serenidad y explicarle con claridad y lenguaje accesible los motivos jurídicos de la medida y los mecanismos legales que tiene para solicitar el desembargo."
      },
      {
        "id": "C",
        "texto": "Llamar a la fuerza pública de inmediato sin escuchar el motivo de la reclamación."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Comunicación Efectiva' en el servicio público exige transmitir información de manera clara, oportuna y empática, manteniendo la calma ante situaciones de conflicto y garantizando la adecuada orientación ciudadana.",
    "norma": "Decreto 815 de 2018 (Comunicación Efectiva) y Política de Servicio al Ciudadano DIAN",
    "citaNormativa": "Comunicación Efectiva: Expresa las ideas de forma clara, asertiva y respetuosa, adaptando el lenguaje al interlocutor y facilitando la comprensión recíproca.",
    "dificultad": "MEDIA",
    "competencia": "Comunicación Efectiva",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_05",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Liderazgo de Grupos de Trabajo y Cohesión de Equipo",
    "contexto": "Se le asigna la coordinación de un equipo interdisciplinario (abogados y contadores) para auditar un complejo esquema de precios de transferencia. Entre los miembros del equipo surgen discrepancias sobre la metodología de análisis.",
    "enunciado": "Bajo la competencia de 'Liderazgo de Grupos de Trabajo', ¿cuál es su actuación idónea?",
    "opciones": [
      {
        "id": "A",
        "texto": "Imponer su criterio profesional de manera unilateral sin consultar la opinión técnica de los contadores."
      },
      {
        "id": "B",
        "texto": "Convocar mesas técnicas de trabajo para concertar criterios, distribuir roles según las fortalezas individuales y motivar al equipo hacia el logro del objetivo común con metas claras."
      },
      {
        "id": "C",
        "texto": "Dejar que cada miembro actúe por su cuenta y que el informe final sea un mosaico desarticulado de opiniones contradictorias."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Liderazgo de Grupos de Trabajo' implica guiar, coordinar y alinear los esfuerzos del equipo hacia el cumplimiento de las metas institucionales, promoviendo un clima participativo, sinérgico y de respeto técnico.",
    "norma": "Decreto 815 de 2018 (Liderazgo de Grupos de Trabajo)",
    "citaNormativa": "Liderazgo de Grupos de Trabajo: Orienta y motiva el trabajo colectivo hacia el logro de metas y resultados institucionales, fomentando el desarrollo de sus integrantes.",
    "dificultad": "ALTA",
    "competencia": "Liderazgo de Grupos de Trabajo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_06",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Orientación a Resultados y Cumplimiento de Metas Institucionales",
    "contexto": "A falta de dos semanas para el cierre del trimestre, la seccional se encuentra al 85% de la meta de fiscalización asignada debido a retrasos en las notificaciones electrónicas de autos de inspección tributaria.",
    "enunciado": "Bajo la competencia de 'Orientación a Resultados', ¿qué acción prioritaria corresponde al Analista IV (Técnico)?",
    "opciones": [
      {
        "id": "A",
        "texto": "Priorizar y reprogramar las acciones críticas de notificación, optimizar el uso de los sistemas de envío electrónico y concentrar los esfuerzos en los casos con mayor impacto fiscal para alcanzar la meta establecida."
      },
      {
        "id": "B",
        "texto": "Solicitar una rebaja de la meta argumentando que el trimestre fue más corto de lo habitual."
      },
      {
        "id": "C",
        "texto": "Notificar actos incompletos o con fallas para inflar artificialmente las cifras de cierre."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La 'Orientación a Resultados' exige encaminar todos los actos hacia la consecución de los fines, metas y objetivos institucionales, con altos estándares de calidad, eficacia y sentido de urgencia.",
    "norma": "Decreto 815 de 2018 (Orientación a Resultados)",
    "citaNormativa": "Orientación a Resultados: Realiza las funciones y tareas orientadas al logro de los objetivos institucionales y la satisfacción del usuario.",
    "dificultad": "ALTA",
    "competencia": "Orientación a Resultados",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_07",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Orientación al Usuario y Facilitación del Cumplimiento Tributario",
    "contexto": "Un contribuyente adulto mayor de escasos recursos acude a la sede seccional solicitando orientación sobre la devolución del saldo a favor de su declaración simplificada, manifestando que no sabe utilizar el portal web.",
    "enunciado": "Bajo la competencia de 'Orientación al Usuario y al Ciudadano', ¿cómo debe proceder el servidor?",
    "opciones": [
      {
        "id": "A",
        "texto": "Indicarle de manera despectiva que todo se hace por internet y que si no sabe debe contratar a un contador."
      },
      {
        "id": "B",
        "texto": "Atenderlo con calidez y paciencia, orientarlo paso a paso en el punto de contacto asistido y facilitarle la autogestión de su solicitud garantizando su derecho de acceso."
      },
      {
        "id": "C",
        "texto": "Cobrarle una tarifa personal para hacerle el trámite desde su cuenta privada."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Orientación al Usuario' es una competencia esencial del servidor público que busca satisfacer las necesidades de la ciudadanía con enfoque diferencial, accesibilidad, respeto, oportunidad y trato digno.",
    "norma": "Decreto 815 de 2018 y Política Institucional de Cercanía al Ciudadano DIAN",
    "citaNormativa": "Orientación al Usuario: Dirige sus actuaciones hacia la atención prioritaria de las necesidades de los usuarios, con vocación de servicio.",
    "dificultad": "MEDIA",
    "competencia": "Orientación al Usuario y al Ciudadano",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_08",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Creatividad e Innovación en Métodos de Fiscalización",
    "contexto": "Los esquemas tradicionales de auditoría física no están logrando detectar maniobras complejas de venta informal a través de redes sociales y comercio electrónico no declarado.",
    "enunciado": "Bajo la competencia de 'Creatividad e Innovación', el técnico debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Proponer el uso de herramientas de analítica digital y cruces de datos con pasarelas de pago y operadores logísticos de envíos para rastrear transacciones digitales no declaradas."
      },
      {
        "id": "B",
        "texto": "Concluir que el comercio electrónico no puede ser fiscalizado y descartar cualquier acción institucional."
      },
      {
        "id": "C",
        "texto": "Prohibir el uso de internet a nivel nacional mediante un decreto interno."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La competencia de 'Creatividad e Innovación' implica generar alternativas novedosas y viables para mejorar los procesos y enfrentar desafíos emergentes en la administración tributaria y aduanera.",
    "norma": "Decreto 815 de 2018 (Creatividad e Innovación)",
    "citaNormativa": "Creatividad e Innovación: Plantea soluciones alternativas y novedosas frente a las situaciones laborales, orientadas al mejoramiento de los procesos institucionales.",
    "dificultad": "ALTA",
    "competencia": "Creatividad e Innovación",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_09",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Adaptabilidad y Flexibilidad ante Reestructuraciones Administrativas",
    "contexto": "Mediante decreto del Gobierno Nacional se reestructura la dependencia donde usted labora, trasladando sus funciones tradicionales hacia una nueva división de gestión analítica con nuevas herramientas tecnológicas.",
    "enunciado": "Bajo la competencia de 'Adaptabilidad al Cambio', ¿cuál es la actitud técnico requerida?",
    "opciones": [
      {
        "id": "A",
        "texto": "Negarse a utilizar los nuevos aplicativos y radicar quejas permanentes contra la reestructuración."
      },
      {
        "id": "B",
        "texto": "Asumir con disposición constructiva el cambio, capacitarse con rapidez en las nuevas metodologías y colaborar activamente en la puesta en marcha de la nueva división."
      },
      {
        "id": "C",
        "texto": "Solicitar una incapacidad médica prolongada para no participar en la transición."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Adaptabilidad al Cambio' faculta al servidor para ajustar su comportamiento y enfoque ante transformaciones en la estructura, procedimientos o tecnología de la entidad, manteniendo la productividad y motivación.",
    "norma": "Decreto 815 de 2018 (Adaptabilidad)",
    "citaNormativa": "Adaptabilidad: Modifica su conducta ante situaciones cambiantes en su entorno laboral para responder eficientemente a los nuevos requerimientos.",
    "dificultad": "MEDIA",
    "competencia": "Adaptabilidad al Cambio",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_10",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Trabajo en Equipo y Manejo de Conflictos Interpersonales",
    "contexto": "Durante una jornada de conciliación de glosas contables, dos técnicoes de su equipo discrepan fuertemente sobre el criterio de amortización de intangibles, paralizando el informe conjunto.",
    "enunciado": "Bajo la competencia de 'Trabajo en Equipo', ¿cómo debe intervenir el Analista IV (Técnico)?",
    "opciones": [
      {
        "id": "A",
        "texto": "Tomar partido personal por el compañero más afín y descalificar públicamente al otro colega."
      },
      {
        "id": "B",
        "texto": "Generar un espacio de diálogo técnico respetuoso, revisar la doctrina unificada de la DIAN y orientar la discusión hacia un consenso fundamentado en la ley."
      },
      {
        "id": "C",
        "texto": "Desentenderse del conflicto y esperar a que la jefatura sancione a ambos funcionarios."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Trabajo en Equipo' promueve la cooperación, la confianza y la búsqueda conjunta de soluciones constructivas frente a discrepancias técnicas, anteponiendo los objetivos institucionales sobre posturas individuales.",
    "norma": "Decreto 815 de 2018 (Trabajo en Equipo)",
    "citaNormativa": "Trabajo en Equipo: Coopera con los demás para alcanzar los objetivos comunes, propiciando un ambiente armónico y constructivo.",
    "dificultad": "MEDIA",
    "competencia": "Trabajo en Equipo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_11",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Toma de Decisiones Éticas bajo Presión Laboral",
    "contexto": "Un superior jerárquico le insinúa verbalmente a un auditor acelerar y aprobar una devolución millonaria sin verificar los libros contables, argumentando que el solicitante es una figura política influyente.",
    "enunciado": "Conforme a los principios de juicio moral y ética pública del servidor, usted:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobar la devolución de inmediato para evitar roces laborales y asegurar su permanencia."
      },
      {
        "id": "B",
        "texto": "Rechazar cualquier trato preferencial injustificado, exigir la verificación probatoria estricta de los soportes y sustentar el informe por escrito de forma técnica y transparente."
      },
      {
        "id": "C",
        "texto": "Filtrar los documentos confidenciales a la prensa de manera anónima sin tramitar el expediente."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La integridad ética y la toma de decisiones objetiva obligan al servidor público a anteponer el interés general y la legalidad sobre presiones indebidas, garantizando la igualdad y la protección del patrimonio público.",
    "norma": "Código de Integridad del Servicio Público y Ley 1952 de 2019",
    "citaNormativa": "Deber de imparcialidad: El servidor debe actuar sin favoritismos, garantizando que sus decisiones se sustenten exclusivamente en el ordenamiento legal.",
    "dificultad": "ALTA",
    "competencia": "Integridad y Razonamiento Moral",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_12",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Planeación y Organización de Tareas Complejas",
    "contexto": "Se le asigna simultáneamente la sustanciación de 15 recursos de reconsideración en materia aduanera que están próximos a vencerse por silencio administrativo positivo en diferentes fechas del mes.",
    "enunciado": "Bajo la competencia de 'Planeación', ¿cuál es la mejor estrategia operativa?",
    "opciones": [
      {
        "id": "A",
        "texto": "Elaborar un cronograma de trabajo priorizando los expedientes por orden estricto de vencimiento de términos, identificando las pruebas pendientes y asignando tiempos específicos a cada proyecto."
      },
      {
        "id": "B",
        "texto": "Comenzar por el expediente más fácil y dejar los complejos para el último día hábil."
      },
      {
        "id": "C",
        "texto": "Solicitar una prórroga colectiva de términos que la ley aduanera no contempla."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La 'Planeación' permite anticipar requerimientos, definir prioridades críticas en función de plazos perentorios y optimizar los tiempos de ejecución para evitar el acaecimiento de silencios administrativos perjudiciales para la administración.",
    "norma": "Decreto 815 de 2018 (Planeación) y Estatuto Aduanero (Silencio Administrativo)",
    "citaNormativa": "Planeación: Diseña y estructura las actividades de manera anticipada, ordenando los recursos disponibles para alcanzar los resultados previstos.",
    "dificultad": "ALTA",
    "competencia": "Planeación y Organización",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_13",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Pensamiento Estratégico y Visión Global de la DIAN",
    "contexto": "En una mesa técnica de formulación de indicadores de control aduanero, se discute si el éxito se mide únicamente por el valor de mercancías incautadas en pasos fronterizos o por la reducción global del contrabando en la economía formal.",
    "enunciado": "Bajo la competencia de 'Pensamiento Estratégico', el Analista IV (Técnico) debe orientar la visión hacia:",
    "opciones": [
      {
        "id": "A",
        "texto": "Medir exclusivamente operativos de choque aislados sin importar su impacto a largo plazo."
      },
      {
        "id": "B",
        "texto": "Conectar los controles aduaneros operativos con la formalización del comercio, la seguridad de las cadenas de suministro y el impacto en la competitividad y recaudo nacional sostenible."
      },
      {
        "id": "C",
        "texto": "Suprimir los controles aduaneros para favorecer el consumo sin restricciones."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Pensamiento Estratégico' permite al profesional comprender la interrelación entre las funciones específicas de su cargo y los grandes objetivos del Estado, anticipando escenarios de impacto macroeconómico y social.",
    "norma": "Decreto 815 de 2018 (Pensamiento Estratégico) y Plan Estratégico DIAN",
    "citaNormativa": "Pensamiento Estratégico: Comprende y analiza los factores del entorno para alinear las acciones del área con las metas y la misión institucional.",
    "dificultad": "ALTA",
    "competencia": "Pensamiento Estratégico",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_14",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Aprendizaje Continuo y Actualización Profesional Autónoma",
    "contexto": "La expedición de nuevos decretos reglamentarios sobre precios de transferencia e inteligencia artificial aplicada al recaudo no ha sido objeto aún de capacitaciones formales por parte de la entidad.",
    "enunciado": "Bajo la competencia de 'Aprendizaje Continuo', el servidor debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Abstenerse de resolver expedientes de esa temática hasta que la DIAN le financie un posgrado especializado."
      },
      {
        "id": "B",
        "texto": "Asumir la iniciativa de autoaprendizaje, estudiar de forma autónoma la jurisprudencia, doctrina y fuentes oficiales, y compartir los conocimientos adquiridos con su equipo."
      },
      {
        "id": "C",
        "texto": "Delegar todos los casos complejos a los funcionarios provisionales recién ingresados."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El 'Aprendizaje Continuo' impulsa al servidor público a adquirir y actualizar constantemente sus competencias técnicas y normativas, aplicando el conocimiento adquirido en beneficio de la excelencia institucional.",
    "norma": "Decreto 815 de 2018 (Aprendizaje Continuo)",
    "citaNormativa": "Aprendizaje Continuo: Identifica y adquiere conocimientos relevantes para su desarrollo profesional y el mejoramiento de su gestión laboral.",
    "dificultad": "MEDIA",
    "competencia": "Aprendizaje Continuo",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_comp_adv_15",
    "perfil": "ANALISTA_IV",
    "ejeId": "comportamentales",
    "ejeNombre": "Competencias Comportamentales Oficiales (Decreto 815 de 2018)",
    "tema": "Experticia Técnica en la Resolución de Casos Complejos",
    "contexto": "En una discusión técnica sobre la deducibilidad de regalías en contratos de explotación de recursos naturales no renovables, se presentan posiciones doctrinales divergentes.",
    "enunciado": "Bajo la competencia de 'Experticia Técnica', ¿cómo debe fundamentar su concepto el Analista IV (Técnico)?",
    "opciones": [
      {
        "id": "A",
        "texto": "Emitir una opinión rápida basada en intuición personal sin revisar las sentencias de unificación de la Corte Constitucional ni del Consejo de Estado."
      },
      {
        "id": "B",
        "texto": "Aplicar con rigor y profundidad los precedentes jurisprudenciales obligatorios, las normas tributarias vigentes y los principios de hermenéutica jurídica, estructurando un análisis coherente e irrebatible."
      },
      {
        "id": "C",
        "texto": "Copiar textualmente un concepto obsoleto emitido hace diez años antes de la reforma legal."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La 'Experticia Técnica' se traduce en el dominio especializado de la disciplina y el marco normativo, permitiendo resolver problemas complejos con criterio jurídico y técnico de alta precisión.",
    "norma": "Decreto 815 de 2018 (Experticia Técnica)",
    "citaNormativa": "Experticia Técnica: Domina y aplica los conocimientos especializados propios de su campo laboral en el análisis y solución de problemas.",
    "dificultad": "ALTA",
    "competencia": "Experticia Técnica",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_01",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Honestidad: Reconocimiento Abierto de Errores Operativos",
    "contexto": "Al proyectar una liquidación oficial, usted comete un error en la digitación de la tarifa aplicable que favorece involuntariamente al contribuyente en una suma millonaria. El documento aún no ha sido notificado pero ya fue firmado por su jefe inmediato.",
    "enunciado": "Conforme a los principios de moralidad pública y el valor institucional de la HONESTIDAD, usted debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Ocultar el error y permitir la notificación del acto para evitar un llamado de atención de su superior."
      },
      {
        "id": "B",
        "texto": "Informar de inmediato a su jefe sobre el error cometido, asumiendo con transparencia la equivocación y gestionando la corrección del acto antes de su notificación legal."
      },
      {
        "id": "C",
        "texto": "Alterar el archivo digital en secreto y culpar a un compañero de la falla en el sistema."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor de la HONESTIDAD en el Código de Integridad del Servicio Público establece: 'Siempre digo la verdad, incluso cuando cometo errores, porque es humano cometerlos pero no es correcto esconderlos'. Actuar con transparencia protege el patrimonio público y la validez de los actos administrativos.",
    "norma": "Código de Integridad del Servicio Público (Función Pública / DIAN) - Valor Honestidad",
    "citaNormativa": "Honestidad: Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y siempre favoreciendo el interés general.",
    "dificultad": "ALTA",
    "competencia": "Honestidad y Moralidad Pública",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_02",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Honestidad: Rechazo Rotundo a Dádivas e Incentivos Indebidos",
    "contexto": "El apoderado de una empresa investigada por contrabando se presenta en su oficina ofreciéndole una tarjeta de regalo de alto valor y boletos para un viaje internacional como 'muestra de agradecimiento por su cordial atención'.",
    "enunciado": "Frente a este ofrecimiento, su proceder ético y legal inmediato debe ser:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aceptar los boletos argumentando que se trata de una cortesía privada sin compromiso formal."
      },
      {
        "id": "B",
        "texto": "Rechazar categóricamente el beneficio, advertirle sobre la ilegalidad de su conducta y reportar de inmediato el hecho ante la Oficina de Control Disciplinario Interno y la Fiscalía."
      },
      {
        "id": "C",
        "texto": "Guardar silencio y recibir el obsequio a nombre de todo el grupo de trabajo."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad prohíbe tajantemente recibir favores, regalos o incentivos: 'No acepto incentivos, favores ni ningún otro tipo de beneficio que me ofrezcan personas interesadas en un proceso de toma de decisiones'. Dicha conducta configura además posibles delitos contra la administración pública (cohecho).",
    "norma": "Código de Integridad - Valor Honestidad y Ley 1952 de 2019, Art. 38",
    "citaNormativa": "Lo que no hago en Honestidad: No acepto incentivos, favores, ni ningún otro tipo de beneficio que me ofrezcan personas o grupos que estén interesados en un proceso de toma de decisiones.",
    "dificultad": "ALTA",
    "competencia": "Honestidad y Conflicto de Interés",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_03",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Respeto: Trato Digno e Inclusivo ante Perspectivas Diversas",
    "contexto": "Durante una mesa técnica de discusión institucional, un servidor recién posesionado expone una tesis interpretativa que contradice la costumbre operativa arraigada de los funcionarios más antiguos.",
    "enunciado": "Bajo el valor del RESPETO del Código de Integridad, el equipo debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Burlarse del nuevo funcionario y excluirlo de las futuras reuniones de trabajo."
      },
      {
        "id": "B",
        "texto": "Escuchar con atención y apertura los argumentos planteados, debatiendo sobre el mérito técnico de la idea con consideración y cortesía, sin importar la antigüedad del interlocutor."
      },
      {
        "id": "C",
        "texto": "Exigirle que guarde silencio hasta que cumpla al menos 5 años de servicio en la entidad."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor del RESPETO establece: 'Reconozco, valoro y trato de manera digna a todas las personas... Abro la ventana del diálogo y la comprensión, a pesar de que los demás tengan perspectivas y opiniones distintas a las mías'.",
    "norma": "Código de Integridad del Servicio Público - Valor Respeto",
    "citaNormativa": "Respeto: Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, títulos o cualquier otra condición.",
    "dificultad": "MEDIA",
    "competencia": "Respeto y Convivencia Laboral",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_04",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Compromiso: Disposición al Servicio y Bien Común",
    "contexto": "El último día del vencimiento de la declaración de renta se presenta una caída temporal del sistema en los servidores seccionales. Finalizada la jornada formal de trabajo, decenas de contribuyentes permanecen a la espera de radicación en la sede física.",
    "enunciado": "Bajo el valor institucional del COMPROMISO, ¿cuál es la conducta esperada del funcionario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Cerrar inmediatamente las ventanillas en punto de las 5:00 p.m. y marcharse ignorando la contingencia ciudadana."
      },
      {
        "id": "B",
        "texto": "Asumir con empatía y sentido de servicio la situación, coordinar con la jefatura la recepción manual o radicación de contingencia y atender a los ciudadanos presentes para evitarles sanciones injustas."
      },
      {
        "id": "C",
        "texto": "Apagar las luces de la sala de espera para presionar la salida de los usuarios."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor del COMPROMISO exige: 'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores'.",
    "norma": "Código de Integridad - Valor Compromiso y Estatuto Tributario (Régimen de Contingencia)",
    "citaNormativa": "Compromiso: Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas.",
    "dificultad": "MEDIA",
    "competencia": "Compromiso con el Servicio Público",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_05",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Diligencia: Seguridad de Equipos y Protección de Claves de Acceso",
    "contexto": "Al salir a almorzar, un funcionario olvida bloquear su computador de trabajo, dejando expuesta una consulta activa del sistema con datos patrimoniales reservados de ciudadanos. Al regresar, nota que alguien manipuló su equipo.",
    "enunciado": "Conforme al valor de la DILIGENCIA y la moralidad pública, el funcionario debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Guardar silencio para no ser sancionado disciplinariamente por el descuido."
      },
      {
        "id": "B",
        "texto": "Reportar de inmediato la inconsistencia al oficial de seguridad de la información y a su jefe inmediato, solicitando el cambio urgente de credenciales y auditoría de accesos."
      },
      {
        "id": "C",
        "texto": "Borrar el historial de navegación para fingir que la máquina estuvo apagada."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor de la DILIGENCIA impone: 'Uso responsablemente los recursos informáticos y protejo la información a mi cargo'. Ante un incidente de seguridad, actuar con celeridad y reporte transparente es un imperativo ético indispensable para mitigar riesgos sobre la reserva legal.",
    "norma": "Código de Integridad - Valor Diligencia y Política de Seguridad de la Información DIAN",
    "citaNormativa": "Diligencia: Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia.",
    "dificultad": "ALTA",
    "competencia": "Diligencia y Responsabilidad Pública",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_06",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Valor Justicia: Imparcialidad y Ausencia de Favoritismos",
    "contexto": "Un primo hermano de un funcionario radica una solicitud de devolución de impuestos con inconsistencias formales evidentes, solicitándole telefónicamente 'darle una mano aprobando el trámite rápido'.",
    "enunciado": "Bajo el valor de la JUSTICIA y las normas de conflicto de intereses, el servidor debe:",
    "opciones": [
      {
        "id": "A",
        "texto": "Aprobarle la solicitud por tratarse de un lazo familiar sagrado."
      },
      {
        "id": "B",
        "texto": "Declararse impedido de inmediato conforme al Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA), remitiendo el expediente a su superior para que asigne otro funcionario."
      },
      {
        "id": "C",
        "texto": "Archivar el expediente sin auto ni justificación."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El valor de la JUSTICIA dispone: 'Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación'. El conflicto de interés derivado del parentesco hasta el cuarto grado de consanguinidad obliga al funcionario a manifestar su impedimento legal.",
    "norma": "Código de Integridad - Valor Justicia y Ley 1437 de 2011, Art. 11 (Causales de Impedimento)",
    "citaNormativa": "Justicia: Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación... Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables.",
    "dificultad": "ALTA",
    "competencia": "Justicia e Imparcialidad",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_07",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Uso debido de los Bienes y Recursos Públicos del Estado",
    "contexto": "En una oficina seccional, un funcionario utiliza de forma cotidiana la impresora institucional, resmas de papel de la DIAN y el vehículo oficial asignado para imprimir publicidad de un negocio comercial privado de su cónyuge.",
    "enunciado": "Frente a este uso de recursos estatales, el marco ético de la función pública determina que:",
    "opciones": [
      {
        "id": "A",
        "texto": "Es una práctica admisible siempre que el funcionario no descuide su horario de trabajo."
      },
      {
        "id": "B",
        "texto": "Es una infracción grave al deber de honestidad y diligencia, pues los recursos públicos no deben destinarse a fines particulares o familiares, acarreando responsabilidad disciplinaria y fiscal."
      },
      {
        "id": "C",
        "texto": "Debe autorizarse formalmente por la Comisión de Personal para fomentar el emprendimiento familiar."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad es taxativo: 'No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos (esto incluye el tiempo laboral, elementos y bienes asignados)'. Dicho acto constituye falta disciplinaria gravísima.",
    "norma": "Código de Integridad - Valor Honestidad y Ley 1952 de 2019, Art. 38",
    "citaNormativa": "Lo que no hago en Honestidad: No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos.",
    "dificultad": "MEDIA",
    "competencia": "Custodia de Bienes Públicos",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_08",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Razonamiento Moral Posconvencional: Prevalencia del Interés General",
    "contexto": "Se discute la aplicación de una directiva interna que recomienda no fiscalizar a medianas empresas de cierta región para no perjudicar índices políticos locales, a pesar de constatarse graves indicios de evasión sistemática de IVA.",
    "enunciado": "Desde la perspectiva del razonamiento moral de Lawrence Kohlberg y el Código de Integridad, el servidor debe actuar guiado por:",
    "opciones": [
      {
        "id": "A",
        "texto": "El nivel preconvencional: obedecer ciegamente la directiva únicamente para evitar castigos o sanciones de sus superiores."
      },
      {
        "id": "B",
        "texto": "El nivel convencional: seguir la costumbre mayoritaria del grupo sin cuestionar la legalidad de la orden."
      },
      {
        "id": "C",
        "texto": "El nivel posconvencional: defender los principios constitucionales de igualdad, legalidad y moralidad pública, haciendo prevalecer el interés general y el mandato imperativo de la ley sobre directrices arbitrarias."
      }
    ],
    "respuestaCorrecta": "C",
    "justificacion": "Las pruebas de integridad de la CNSC evalúan el razonamiento moral según la escala de Kohlberg. El nivel posconvencional (el más alto y deseable en servidores públicos) guía el comportamiento mediante principios éticos universales, el deber constitucional y la primacía del bien común por encima de presiones coyunturales o intereses particulares.",
    "norma": "Constitución Política de 1991, Art. 209 (Principios de la Función Administrativa) y Código de Integridad",
    "citaNormativa": "La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.",
    "dificultad": "ALTA",
    "competencia": "Razonamiento Moral Posconvencional",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_09",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Transparencia y Acceso a la Información vs. Negativa Injustificada",
    "contexto": "Un periodista ciudadano solicita formalmente copia de los informes de auditoría sobre cumplimiento de metas de recaudo de la seccional de los últimos 2 años. Un directivo sugiere no entregar los datos aduciendo que la prensa busca perjudicar la imagen de la administración.",
    "enunciado": "Bajo los preceptos de honestidad y el principio de máxima publicidad (Ley 1712 de 2014), el Analista IV (Técnico) debe orientar la respuesta hacia:",
    "opciones": [
      {
        "id": "A",
        "texto": "Negar la información sin motivación legal inventando una causal inexistente de reserva de seguridad nacional."
      },
      {
        "id": "B",
        "texto": "Garantizar la entrega oportuna y completa de la información pública requerida, toda vez que los informes de gestión no están amparados por reserva legal tributaria y rige el principio de máxima divulgación."
      },
      {
        "id": "C",
        "texto": "Cobrar una suma exorbitante por cada copia para desmotivar al peticionario."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad establece: 'Facilito el acceso a la información pública, completa, veraz, oportuna y comprensible'. Salvo las excepciones taxativas de ley (reserva tributaria individual del Art. 583 E.T.), la información institucional sobre gestión y metas es pública por mandato de la Ley 1712 de 2014.",
    "norma": "Ley 1712 de 2014, Art. 2 y Código de Integridad - Valor Honestidad",
    "citaNormativa": "Principio de máxima publicidad: Toda información en posesión, custodia o control de un sujeto obligado es pública y no podrá ser reservada sino por disposición constitucional o legal expresa.",
    "dificultad": "ALTA",
    "competencia": "Transparencia y Acceso a la Información",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_integ_moral_10",
    "perfil": "ANALISTA_IV",
    "ejeId": "integridad",
    "ejeNombre": "Integridad y Razonamiento Moral en la Gestión Pública",
    "tema": "Denuncia de Conductas Irregulares y Cero Tolerancia con la Corrupción",
    "contexto": "Un Gestor III descubre que un compañero de división cobra dinero a tramitadores para agilizar el desbloqueo indebido del Registro Único Tributario (RUT) de contribuyentes suspendidos por simulación de operaciones.",
    "enunciado": "Ante este hallazgo, el imperativo ético y deber legal del funcionario es:",
    "opciones": [
      {
        "id": "A",
        "texto": "Hacerse el de la vista gorda porque no es su función fiscalizar a sus colegas y no desea ganarse enemigos."
      },
      {
        "id": "B",
        "texto": "Denunciar de manera inmediata, reservada y documentada los hechos ante la Oficina de Control Disciplinario Interno y la Dirección de Fiscalización, aportando las evidencias encontradas."
      },
      {
        "id": "C",
        "texto": "Pedirle al compañero una parte de las ganancias para no delatarlo."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Código de Integridad del Servicio Público ordena de manera perentoria: 'Denuncio las faltas, delitos o violación de derechos de los que tengo conocimiento en el ejercicio de mi cargo, siempre'. La omisión de denuncia constituye además falta disciplinaria y penal (prevaricato por omisión).",
    "norma": "Código de Integridad - Valor Honestidad y Ley 1952 de 2019, Art. 38 Num. 24",
    "citaNormativa": "Lo que hago en Honestidad: Denuncio las faltas, delitos o violación de derechos de los que tengo conocimiento en el ejercicio de mi cargo siempre.",
    "dificultad": "ALTA",
    "competencia": "Ética Pública y Lucha Contra la Corrupción",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_prot_01",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Técnica Oficial de Marcación de la Hoja Óptica de Respuestas",
    "contexto": "Durante la aplicación presencial de las pruebas escritas de la Convocatoria DIAN 2676 ante la Universidad de Área Andina, un aspirante realiza marcas con una 'X' tenue en lugar de rellenar el óvalo completo y utiliza un bolígrafo de tinta húmeda no autorizado.",
    "enunciado": "Conforme a las instrucciones expresas de la Guía de Orientación al Aspirante (GOA), ¿cuál es la instrucción oficial y obligatoria para la marcación de respuestas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Marcar únicamente con lápiz de mina negra No. 2 rellenando completamente el óvalo de la opción elegida, sin tachones ni marcas por fuera del círculo para garantizar la lectura óptica por el escáner."
      },
      {
        "id": "B",
        "texto": "Colocar un visto bueno con marcador fluorescente para que el lector óptico lo detecte más rápido."
      },
      {
        "id": "C",
        "texto": "Escribir la letra A, B o C con esfero azul en el margen de la hoja óptica."
      }
    ],
    "respuestaCorrecta": "A",
    "justificacion": "La Guía de Orientación al Aspirante para las pruebas escritas DIAN 2676 estipula que la hoja de respuestas es procesada por lectores ópticos de alta velocidad que requieren estrictamente el uso de lápiz de grafito No. 2 y el llenado completo y uniforme del óvalo correspondiente, advirtiendo que marcas tenues, cruces o tachaduras pueden invalidar la lectura de la pregunta.",
    "norma": "Guía de Orientación al Aspirante Pruebas Escritas DIAN 2676 - Sección Marcación",
    "citaNormativa": "Utilice exclusivamente lápiz de mina negra No. 2. Rellene completamente el círculo correspondiente a la opción seleccionada. No haga marcas fuera del círculo ni use bolígrafo.",
    "dificultad": "BASICA",
    "competencia": "Protocolos y Reglas de Pruebas Escritas CNSC",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_prot_02",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Prohibición de Dispositivos Electrónicos y Causal de Anulación Inmediata",
    "contexto": "Transcurrida una hora de la prueba escrita, el teléfono celular de un concursante vibra dentro de su bolsillo y el aspirante lo saca discretamente para mirar la hora.",
    "enunciado": "De acuerdo con el reglamento de aplicación de pruebas de la CNSC y la GOA DIAN 2676, ¿qué medida debe aplicar el jefe de salón?",
    "opciones": [
      {
        "id": "A",
        "texto": "Permitirle responder llamadas si se trata de una urgencia familiar justificada."
      },
      {
        "id": "B",
        "texto": "Anular de manera inmediata la prueba del aspirante, levantar el acta de anulación por manipulación de dispositivo móvil o electrónico y ordenar su retiro del recinto sin derecho a reclamo posterior."
      },
      {
        "id": "C",
        "texto": "Descontarle 5 puntos de la calificación final pero dejarle terminar el examen."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Guía de Orientación al Aspirante y los Acuerdos de Convocatoria de la CNSC sancionan de forma taxativa con la ANULACIÓN INMEDIATA del examen y la exclusión del concurso a cualquier aspirante que manipule teléfonos móviles, relojes inteligentes o cualquier dispositivo electrónico durante la sesión de la prueba.",
    "norma": "Guía de Orientación al Aspirante DIAN 2676 - Causales de Anulación de Pruebas",
    "citaNormativa": "Será causal de anulación de la prueba y exclusión del concurso portar, manipular o utilizar teléfonos celulares, cámaras o cualquier dispositivo de comunicación o grabación durante la sesión de examen.",
    "dificultad": "MEDIA",
    "competencia": "Protocolos y Reglas de Pruebas Escritas CNSC",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_prot_03",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Término Perentorio y Procedimiento para Reclamaciones contra Resultados",
    "contexto": "Publicados los resultados de las pruebas escritas en el aplicativo SIMO, un concursante inconforme con su puntaje funcional desea interponer una reclamación formal solicitando la revisión detallada de su hoja de respuestas y el cuadernillo de preguntas.",
    "enunciado": "¿Cuál es el término legal y el canal habilitado para radicar la reclamación conforme a la GOA y el Decreto Ley 760 de 2005?",
    "opciones": [
      {
        "id": "A",
        "texto": "Acudir a la sede física del Ministerio de Hacienda durante el mes siguiente a la publicación."
      },
      {
        "id": "B",
        "texto": "Radicar la reclamación exclusivamente a través del Sistema SIMO dentro de los cinco (5) días hábiles siguientes a la publicación de los resultados."
      },
      {
        "id": "C",
        "texto": "Enviar un mensaje por redes sociales oficiales de la CNSC en cualquier momento."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "El Decreto Ley 760 de 2005 y la Guía de Orientación al Aspirante DIAN 2676 consagran un término perentorio de cinco (5) días hábiles a partir de la publicación de resultados para presentar reclamaciones de forma exclusiva a través de la plataforma SIMO.",
    "norma": "Decreto Ley 760 de 2005, Art. 13 y Guía de Orientación al Aspirante DIAN 2676",
    "citaNormativa": "Las reclamaciones contra los resultados de las pruebas escritas deberán presentarse por los aspirantes únicamente a través del SIMO, dentro de los cinco (5) días hábiles siguientes a la publicación de los mismos.",
    "dificultad": "MEDIA",
    "competencia": "Garantías y Reclamaciones en Concursos de Mérito",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_prot_04",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Jornada y Duración de la Sesión de Examen Escrito DIAN 2676",
    "contexto": "Un aspirante organiza su plan de tiempo para responder la totalidad de las preguntas de juicio situacional (competencias funcionales y conductuales) durante la sesión única de la prueba.",
    "enunciado": "¿Cuál es el tiempo máximo oficial concedido para la resolución del examen escrito en la jornada continua?",
    "opciones": [
      {
        "id": "A",
        "texto": "Dos (2) horas exactas (120 minutos)."
      },
      {
        "id": "B",
        "texto": "Cuatro horas y treinta minutos (4 horas y 30 minutos / 270 minutos)."
      },
      {
        "id": "C",
        "texto": "Ocho (8) horas con receso para almorzar."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "La Guía Oficial de Orientación al Aspirante para el Proceso de Selección DIAN 2676 establece una jornada única de aplicación con una duración máxima de cuatro horas y treinta minutos (4 horas y 30 minutos) para responder la totalidad de los módulos de pruebas escritas.",
    "norma": "Guía de Orientación al Aspirante DIAN 2676 - Estructura de la Jornada de Aplicación",
    "citaNormativa": "La aplicación de las pruebas escritas se realizará en una sola sesión continua con una duración total de 4 horas y 30 minutos.",
    "dificultad": "BASICA",
    "competencia": "Estructura y Tiempos de Examen DIAN 2676",
    "nivel": "Técnico"
  },
  {
    "id": "tec_dian_prot_05",
    "perfil": "ANALISTA_IV",
    "ejeId": "sistema_carrera_dian",
    "ejeNombre": "Guía Oficial de Pruebas Escritas Convocatoria DIAN 2676",
    "tema": "Acceso a Pruebas y Reserva Legal del Material de Examen",
    "contexto": "Al interponer su reclamación en SIMO, el aspirante solicita que se le envíen por correo electrónico copias en PDF del cuadernillo de preguntas con sus respuestas para analizarlas con un abogado.",
    "enunciado": "De acuerdo con la reserva legal del material de pruebas de la CNSC y el Decreto Ley 760 de 2005, ¿cómo procede la exhibición de pruebas?",
    "opciones": [
      {
        "id": "A",
        "texto": "Enviar copias no controladas por correo a cualquier persona que las solicite."
      },
      {
        "id": "B",
        "texto": "Citar al aspirante a una sesión presencial de acceso a pruebas bajo estricta reserva, donde podrá consultar personalmente su cuadernillo y hoja de respuestas sin ingresar celulares ni cámaras, y sin posibilidad de retirar copia física ni digital."
      },
      {
        "id": "C",
        "texto": "Publicar el examen completo en la página web pública de la universidad operadora."
      }
    ],
    "respuestaCorrecta": "B",
    "justificacion": "Por mandato del Decreto Ley 760 de 2005 y la Ley 909 de 2004, las pruebas de concurso público gozan de reserva legal. El acceso a pruebas se efectúa en una jornada especial presencial y custodiada, prohibiendo la toma de fotografías, apuntes mecánicos o copias que vulneren la reserva del banco de preguntas.",
    "norma": "Decreto Ley 760 de 2005, Art. 13 Parágrafo y Guía de Orientación al Aspirante DIAN 2676",
    "citaNormativa": "El acceso a las pruebas se realizará en sesión presencial reservada. El aspirante solo podrá observar los documentos y no se le permitirá tomar fotografías ni grabaciones de los cuadernillos de examen.",
    "dificultad": "ALTA",
    "competencia": "Reserva Legal y Acceso a Pruebas CNSC",
    "nivel": "Técnico"
  }
];


if (typeof window !== "undefined") {
  window.QUESTION_BANK_ANALISTA = QUESTION_BANK_ANALISTA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_ANALISTA };
}
