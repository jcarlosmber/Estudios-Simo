// questions_analista_iv.js - Banco Maestro de 100 Casos de Juicio Situacional (PJS) para ANALISTA IV - DIAN 2676
// Alineado con el Manual de Funciones Ficha AT-FL-2010 y los 24 Indicadores Oficiales de la Convocatoria CNSC (OPEC 236760)
// Nivel: Técnico | Código: 204 | Grado: 04 | Asignación: $6.390.426 | Total: 100 Preguntas con Cita Textual de la Norma

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
  }
];

if (typeof window !== "undefined") {
  window.QUESTION_BANK_ANALISTA = QUESTION_BANK_ANALISTA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_ANALISTA };
}
