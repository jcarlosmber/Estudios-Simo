// build_gestor_iii_bank.js - Completa el banco de Gestor III para que TODOS los ejes tengan mínimo 3 preguntas
const fs = require('fs');

const rawQuestions = fs.readFileSync('questions.js', 'utf8');
let baseQuestions = [];
try {
  eval(rawQuestions.replace(/const QUESTION_BANK =/, 'baseQuestions ='));
} catch (e) {
  const mod = require('./questions.js');
  baseQuestions = mod.QUESTION_BANK;
}

const GESTOR_ADDITIONAL_QUESTIONS = [
  {
    id: "dian_mision_04",
    nivel: "Profesional",
    ejeId: "misionalidad",
    ejeNombre: "Misionalidad de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Facilitación del Cumplimiento Voluntario y Seguridad Fiscal",
    caso: "Como Gestor III, se le solicita proponer una estrategia para reducir la brecha de cumplimiento en profesionales independientes que no emiten facturación electrónica de venta, antes de iniciar procesos punitivos masivos.",
    enunciado: "¿Cuál de las siguientes acciones se alinea de forma óptima con la visión y objetivos misionales modernos de la DIAN?",
    opciones: [
      {
        id: "A",
        texto: "Implementar campañas de pedagogía tributaria personalizada con advertencias persuasivas en el buzón electrónico, facilitando la adopción del sistema de facturación gratuita de la DIAN antes de desplegar fiscalización formal.",
        explicacion: "Correcta. La misionalidad contemporánea de la DIAN busca promover prioritariamente el cumplimiento voluntario mediante facilitación, herramientas gratuitas y persuasión fundada en datos, reservando la coacción punitiva para la renuencia contumaz."
      },
      {
        id: "B",
        texto: "Ordenar el embargo preventivo inmediato de las cuentas bancarias de todos los obligados omisos sin previo aviso persuasivo.",
        explicacion: "Incorrecta. Viola el debido proceso y la proporcionalidad; las medidas cautelares en cobro coactivo exigen la previa existencia de un título ejecutivo en firme."
      },
      {
        id: "C",
        texto: "Delegar a las agremiaciones privadas el cobro y control de la facturación electrónica exonerando a la DIAN de su función fiscal.",
        explicacion: "Incorrecta. La función pública tributaria y el control de obligaciones es indelegable por mandato constitucional y legal."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1742 de 2020, Art. 2 y Estatuto Tributario Art. 616-1",
    citaNormativa: "«Coadyuvar a garantizar la seguridad fiscal del Estado mediante la administración y el control oportuno... facilitando el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias.» (Decreto 1742 de 2020)."
  },
  {
    id: "dian_estruc_03",
    nivel: "Profesional",
    ejeId: "estructura_dian",
    ejeNombre: "Estructura Organizacional de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Competencias de las Direcciones de Gestión y Dependencias del Nivel Central",
    caso: "En una Dirección Seccional surge una consulta técnica sobre la interpretación del tratamiento tributario de activos intangibles formados en el exterior. La División de Fiscalización y la División Jurídica local sostienen criterios contradictorios.",
    enunciado: "De acuerdo con la estructura del Decreto 1742 de 2020, ¿a qué dependencia del Nivel Central le corresponde fijar el criterio interpretativo vinculante para todos los empleados de la Entidad?",
    opciones: [
      {
        id: "A",
        texto: "A la Dirección de Gestión Jurídica, a través de la Subdirección de Normativa y Doctrina, cuyos conceptos oficiales son vinculantes para los funcionarios de la DIAN.",
        explicacion: "Correcta. El Decreto 1742 de 2020 asigna a la Dirección de Gestión Jurídica y su Subdirección de Normativa y Doctrina la competencia exclusiva para absolver consultas y sentar doctrina oficial vinculante (Art. 131 Ley 2010 de 2019)."
      },
      {
        id: "B",
        texto: "A la Dirección de Gestión de Fiscalización, ya que es el área que adelanta las investigaciones operativas en el terreno.",
        explicacion: "Incorrecta. Fiscalización define lineamientos operativos, pero carece de facultad de interpretación jurídica doctrinal general y vinculante."
      },
      {
        id: "C",
        texto: "Al Director Seccional de Impuestos respectivo, quien tiene autonomía legal absoluta para definir el criterio jurídico en su jurisdicción.",
        explicacion: "Incorrecta. La doctrina jurídica en la DIAN es unitaria a nivel nacional para garantizar seguridad jurídica e igualdad ante la ley."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1742 de 2020, Art. 32 y Ley 2010 de 2019 Art. 131",
    citaNormativa: "«Los conceptos emitidos por la Dirección de Gestión Jurídica o la Subdirección de Normativa y Doctrina de la DIAN constituyen interpretación oficial para los empleados de la entidad y serán de obligatoria aplicación para estos.» (Ley 2010 de 2019, Art. 131)."
  },
  {
    id: "dian_estruc_04",
    nivel: "Profesional",
    ejeId: "estructura_dian",
    ejeNombre: "Estructura Organizacional de la DIAN",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Articulación entre Nivel Central y Direcciones Seccionales",
    caso: "Un plan estratégico nacional para combatir la informalidad aduanera en zonas de frontera es diseñado por la Dirección General. El Gestor III debe coordinar su despliegue operativo en la seccional correspondiente.",
    enunciado: "¿Cuál es el canal jerárquico y funcional formal para canalizar estas directrices operativas hacia los grupos ejecutores?",
    opciones: [
      {
        id: "A",
        texto: "A través del Director Seccional y los Jefes de División de Operación Aduanera y Fiscalización, quienes adoptan el plan conforme a las metas e indicadores fijados por el Nivel Central.",
        explicacion: "Correcta. La estructura desconcentrada de la DIAN (Decreto 1742 de 2020) opera mediante líneas directivas nacionales hacia las Direcciones Seccionales y sus divisiones especializadas."
      },
      {
        id: "B",
        texto: "Contactando directamente a empresas transportadoras locales para que operen como inspectores delegados sin intervención de los jefes seccionales.",
        explicacion: "Incorrecta. Rompe el principio de jerarquía administrativa y delega indebidamente facultades reservadas a servidores públicos."
      },
      {
        id: "C",
        texto: "Desconociendo el plan nacional e implementando un manual alternativo sin aval del Nivel Central.",
        explicacion: "Incorrecta. Viola el principio de unidad de gestión y disciplina institucional consagrado en el régimen de la DIAN."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1742 de 2020, Art. 4, 38 y 52",
    citaNormativa: "«Las Direcciones Seccionales dependen técnica, funcional y jerárquicamente del Director General de la DIAN a través de las Direcciones de Gestión respectivas, garantizando la ejecución de políticas nacionales.» (Decreto 1742 de 2020)."
  },
  {
    id: "dian_mipg_04",
    nivel: "Profesional",
    ejeId: "mipg",
    ejeNombre: "Modelo de Planeación y Gestión MIPG",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Dimensión de Direccionamiento Estratégico y Planeación en MIPG",
    caso: "En el marco de la formulación del Plan de Acción Institucional (PAI) de la seccional, el Gestor III debe estructurar metas orientadas al logro de los objetivos del Plan Estratégico de la DIAN bajo la Dimensión 1 del MIPG.",
    enunciado: "¿Cuál es el componente metodológico indispensable que debe estructurar el Gestor III según el Manual Operativo del MIPG?",
    opciones: [
      {
        id: "A",
        texto: "Definir objetivos claros articulados a las políticas de gestión, metas cuantitativas verificables, cronograma de actividades, asignación de responsables y riesgos asociados a la gestión.",
        explicacion: "Correcta. La Dimensión de Direccionamiento Estratégico del MIPG (Decreto 1499 de 2017) exige alinear la visión, los objetivos estratégicos, la gestión de riesgos y la asignación eficiente de recursos hacia resultados cuantificables."
      },
      {
        id: "B",
        texto: "Copiar textualmente las metas del año gravable anterior sin evaluar el contexto externo ni los riesgos emergentes del entorno económico.",
        explicacion: "Incorrecta. Contraviene el principio de mejora continua y dinamismo estratégico que exige el MIPG."
      },
      {
        id: "C",
        texto: "Suprimir el mapa de riesgos institucionales para agilizar la aprobación administrativa del plan operativo.",
        explicacion: "Incorrecta. La gestión del riesgo es transversal y obligatoria en todas las dimensiones del MIPG."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1499 de 2017 y Manual Operativo MIPG (DAFP)",
    citaNormativa: "«La Dimensión de Direccionamiento Estratégico y Planeación permite a la entidad focalizar su accionar para garantizar el cumplimiento de su misión, determinando prioridades, metas, asignación presupuestal y mitigación de riesgos.» (Manual Operativo MIPG)."
  },
  {
    id: "dian_furag_02",
    nivel: "Profesional",
    ejeId: "desempeno",
    ejeNombre: "Medición del Desempeño Institucional (FURAG)",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Diligenciamiento de Evidencias y Veracidad en el FURAG",
    caso: "Al recopilar las evidencias para el reporte anual del FURAG en la Dirección Seccional, se evidencia que un grupo de trabajo reporta un 100% de cumplimiento en capacitación de servicio al ciudadano, pero carece de listas de asistencia y evaluaciones de impacto.",
    enunciado: "¿Cuál es el proceder técnico y ético del Gestor III como coordinador de la información para el FURAG?",
    opciones: [
      {
        id: "A",
        texto: "Exigir los soportes documentales verificables antes de validar el puntaje en el aplicativo, ajustando el porcentaje al avance real soportado documentalmente para garantizar la integridad del reporte.",
        explicacion: "Correcta. El FURAG exige que toda respuesta esté respaldada en evidencias documentales objetivas y verificables; registrar datos no comprobados vulnera la veracidad del reporte y el control interno institucional."
      },
      {
        id: "B",
        texto: "Validar el 100% sin soportes para asegurar una alta calificación de la seccional en el ranking nacional de Función Pública.",
        explicacion: "Incorrecta. Falsifica el estado real del avance institucional y transgrede el principio de transparencia y honestidad pública."
      },
      {
        id: "C",
        texto: "Eliminar la política completa del reporte para no tener que responder preguntas sobre evidencias faltantes.",
        explicacion: "Incorrecta. El reporte de todas las políticas del MIPG es de carácter obligatorio para las entidades del orden nacional."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1499 de 2017 y Lineamientos de Medición FURAG (DAFP)",
    citaNormativa: "«Las entidades públicas responderán el FURAG con absoluta objetividad y veracidad, sustentando sus respuestas en evidencias comprobables y trazables que demuestren la implementación de las políticas de gestión y desempeño.» (DAFP, Guía FURAG)."
  },
  {
    id: "dian_furag_03",
    nivel: "Profesional",
    ejeId: "desempeno",
    ejeNombre: "Medición del Desempeño Institucional (FURAG)",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Uso del Índice de Desempeño Institucional (IDI) para Planes de Mejoramiento",
    caso: "Función Pública publica los resultados del FURAG y la DIAN identifica que la política de 'Gestión del Conocimiento y la Innovación' obtuvo un puntaje inferior al promedio del sector Hacienda.",
    enunciado: "¿Cuál es la acción correctiva que debe estructurar el Gestor III desde el punto de vista del ciclo de mejora continua?",
    opciones: [
      {
        id: "A",
        texto: "Diseñar un Plan de Mejoramiento Institucional focalizado en las debilidades diagnosticadas por el IDI, estableciendo acciones de transferencia de conocimiento tácito a explícito, bancos de buenas prácticas y seguimiento semestral.",
        explicacion: "Correcta. La finalidad de la medición del desempeño a través del FURAG es retroalimentar el ciclo de gestión (PHVA), formulando planes de mejoramiento orientados a cerrar las brechas identificadas por el IDI."
      },
      {
        id: "B",
        texto: "Impugnar la medición afirmando que la política de gestión del conocimiento no aplica a entidades tributarias.",
        explicacion: "Incorrecta. Todas las políticas del MIPG aplican transversalmente a las entidades del orden nacional sin excepción."
      },
      {
        id: "C",
        texto: "Archivar los resultados y esperar la siguiente vigencia para verificar si el puntaje sube espontáneamente.",
        explicacion: "Incorrecta. Ignorar los resultados del FURAG atenta contra el principio de eficacia y evaluación del desempeño administrativo."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Decreto 1499 de 2017, Art. 2.2.22.3.8 y Manual Operativo MIPG",
    citaNormativa: "«Los resultados de la medición del desempeño institucional servirán de insumo para que las entidades formulen planes de mejoramiento que atiendan las debilidades y consoliden las fortalezas identificadas.» (Decreto 1499 de 2017)."
  },
  {
    id: "dian_indic_03",
    nivel: "Profesional",
    ejeId: "indicadores",
    ejeNombre: "Indicadores de Gestión",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Indicadores de Impacto y Efectividad en la Gestión Tributaria",
    caso: "La seccional busca medir no solo cuántas visitas de fiscalización se hicieron (actividad/producto), sino en qué medida esas visitas lograron cambiar el comportamiento de cumplimiento voluntario futuro de los contribuyentes fiscalizados.",
    enunciado: "¿Qué tipología de indicador debe formular el Gestor III para medir este efecto transformador a mediano y largo plazo?",
    opciones: [
      {
        id: "A",
        texto: "Un indicador de Efectividad o Impacto, que evalúa el cambio en la conducta tributaria y el incremento sostenido del recaudo voluntario generado a partir de las intervenciones de fiscalización.",
        explicacion: "Correcta. De acuerdo con la Guía de Indicadores de DNP/DAFP, los indicadores de impacto y efectividad miden los cambios sustanciales en la población objetivo y la solución del problema público de fondo (cumplimiento voluntario)."
      },
      {
        id: "B",
        texto: "Un indicador de insumo que contabilice únicamente el número de resmas de papel utilizadas en las actas de visita.",
        explicacion: "Incorrecta. Mide utilización de recursos materiales inmediatos, sin relación con el efecto tributario real."
      },
      {
        id: "C",
        texto: "Un indicador binario de si los funcionarios llegaron temprano al despacho el día de la visita.",
        explicacion: "Incorrecta. Mide puntualidad laboral individual, no el resultado institucional sobre la cultura tributaria."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Guía para la Construcción e Interpretación de Indicadores de Gestión (DNP / DAFP)",
    citaNormativa: "«Los indicadores de efectividad o impacto miden el logro de los objetivos de la política pública y el cambio duradero producido en el entorno socioeconómico o en el comportamiento de los ciudadanos.» (Guía DNP)."
  },
  {
    id: "dian_razon_03",
    nivel: "Profesional",
    ejeId: "razonamiento",
    ejeNombre: "Razonamiento Analítico",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Inferencia Lógica sobre Desviaciones Financieras y Fiscales",
    caso: "Al auditar un conglomerado comercial, el Gestor III observa que mientras los ingresos brutos crecieron un 85% interanual, la utilidad neta gravable disminuyó en un 60%, debido a un incremento exponencial en 'gastos por asesorías de gestión en el exterior' contratadas con una filial vinculada.",
    enunciado: "Aplicando razonamiento analítico y deductivo en materia de fiscalización, ¿cuál es la hipótesis técnica principal que debe formularse?",
    opciones: [
      {
        id: "A",
        texto: "Existe un alto indicio de planeación fiscal agresiva mediante erosión de la base imponible y traslado artificial de utilidades a través de precios de transferencia no acordes al principio de plena competencia (arm's length).",
        explicacion: "Correcta. El razonamiento analítico correlaciona el crecimiento atípico de gastos vinculados con el exterior frente a la contracción artificial de la renta gravable local, activando el régimen de precios de transferencia (Art. 260-1 E.T.)."
      },
      {
        id: "B",
        texto: "La empresa automáticamente quebrará la próxima semana por lo que no vale la pena continuar la auditoría tributaria.",
        explicacion: "Incorrecta. Es una conclusión apresurada, errónea y carente de sustento técnico financiero y analítico."
      },
      {
        id: "C",
        texto: "Aceptar los gastos sin comprobación porque los contratos entre empresas familiares y vinculadas están exentos de revisión tributaria.",
        explicacion: "Incorrecta. Las operaciones con vinculados del exterior están sujetas a la vigilancia más rigurosa del régimen de precios de transferencia."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Estatuto Tributario Art. 260-1 a 260-11 (Precios de Transferencia) y Art. 684",
    citaNormativa: "«Los contribuyentes del impuesto sobre la renta que celebren operaciones con vinculados del exterior están obligados a determinar sus ingresos y deducciones considerando el principio de plena competencia.» (Estatuto Tributario, Art. 260-1)."
  },
  {
    id: "dian_rend_02",
    nivel: "Profesional",
    ejeId: "rendicion_cuentas",
    ejeNombre: "Estrategia de Rendición de Cuentas",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Los Tres Elementos del Ciclo de Rendición de Cuentas (Ley 1757 de 2015)",
    caso: "Para la jornada anual de rendición de cuentas de la Dirección Seccional, el despacho propone únicamente publicar un informe en PDF de 400 páginas con cifras técnicas en la web, sin abrir espacios de diálogo ni responder preguntas ciudadanas.",
    enunciado: "De acuerdo con el Manual de Rendición de Cuentas (CONPES 3654 y Ley 1757 de 2015), ¿por qué esta propuesta es técnicamente incompleta?",
    opciones: [
      {
        id: "A",
        texto: "Porque la rendición de cuentas exige tres elementos inseparables: Información comprensible (lenguaje claro), Diálogo constructivo (interacción y retroalimentación) e Incentivos/responsabilidad (compromisos de mejora pública).",
        explicacion: "Correcta. La Ley 1757 de 2015 y la política de rendición de cuentas del MIPG definen que no basta con publicar datos (información); es indispensable el diálogo participativo con la ciudadanía y la asunción de responsabilidades."
      },
      {
        id: "B",
        texto: "Porque la ley prohíbe taxativamente subir archivos digitales en formato PDF a los portales web gubernamentales.",
        explicacion: "Incorrecta. Los informes digitales son válidos, lo que es deficiente es la ausencia de diálogo deliberativo y lenguaje claro."
      },
      {
        id: "C",
        texto: "Porque la rendición de cuentas solo debe hacerse ante los jueces de la República y no ante la ciudadanía civil.",
        explicacion: "Incorrecta. La rendición de cuentas pública es un deber democrático obligatorio frente a toda la sociedad civil."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1757 de 2015, Art. 48 a 52 y Conpes 3654 de 2010",
    citaNormativa: "«La rendición de cuentas es un proceso conformado por un conjunto de normas, procedimientos, metodologías y estructuras... que comprende tres elementos centrales: información, diálogo e incentivos.» (Ley 1757 de 2015, Art. 48)."
  },
  {
    id: "dian_rend_03",
    nivel: "Profesional",
    ejeId: "rendicion_cuentas",
    ejeNombre: "Estrategia de Rendición de Cuentas",
    tipo: "Funcional (Eliminatorio - 65%)",
    tema: "Uso de Lenguaje Claro y Diálogo con Grupos de Valor",
    caso: "Al redactar el informe de rendición de cuentas seccional, se presentan explicaciones cargadas de siglas y tecnicismos jurídicos que impiden a los comerciantes de la región comprender cómo se invirtió el recaudo tributario y los resultados contra el contrabando local.",
    enunciado: "¿Cuál es la recomendación del Gestor III para garantizar la efectividad del ejercicio según las directrices de Función Pública?",
    opciones: [
      {
        id: "A",
        texto: "Traducir los resultados técnicos a infografías y resúmenes ejecutivos en Lenguaje Claro, explicando el impacto social de la gestión y habilitando canales previos para recoger preguntas e inquietudes de la comunidad.",
        explicacion: "Correcta. El marco de Lenguaje Claro (Guía DAFP) exige simplificar el mensaje administrativo para democratizar el acceso a la información y fomentar una participación ciudadana informada y constructiva."
      },
      {
        id: "B",
        texto: "Aumentar aún más los tecnicismos jurídicos en latín para demostrar superioridad académica ante los ciudadanos participantes.",
        explicacion: "Incorrecta. Aleja a la ciudadanía, restringe la transparencia y debilita la confianza institucional en el Estado."
      },
      {
        id: "C",
        texto: "Cancelar la jornada de rendición de cuentas bajo el argumento de que el ciudadano común no entiende temas aduaneros.",
        explicacion: "Incorrecta. Viola el mandato constitucional de transparencia y la Ley Estatutaria de Participación Ciudadana."
      }
    ],
    respuestaCorrecta: "A",
    norma: "Ley 1757 de 2015 y Guía de Lenguaje Claro para Servidores Públicos (DNP / DAFP)",
    citaNormativa: "«Las entidades públicas deberán utilizar un lenguaje claro, sencillo y comprensible que permita a los ciudadanos entender la gestión pública y ejercer el control social de manera efectiva.» (Ley 1757 de 2015)."
  }
];

const fullGestorBank = [...baseQuestions, ...GESTOR_ADDITIONAL_QUESTIONS];

// Escribir questions_gestor_iii.js
const content = `// questions_gestor_iii.js - Banco Maestro de Casos de Juicio Situacional (PJS) para GESTOR III - DIAN 2676
// Alineado con el Manual de Funciones FT-TAH-1824 y los Ejes Oficiales de la Convocatoria CNSC (OPEC 242703)
// Cada caso incluye fundamentación normativa con Cita Clave Textual. Total preguntas: ${fullGestorBank.length}

const QUESTION_BANK_GESTOR = ${JSON.stringify(fullGestorBank, null, 2)};

if (typeof window !== "undefined") {
  window.QUESTION_BANK_GESTOR = QUESTION_BANK_GESTOR;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_GESTOR };
}
`;

fs.writeFileSync('questions_gestor_iii.js', content, 'utf8');
console.log(`questions_gestor_iii.js generado con éxito. Total preguntas: ${fullGestorBank.length}`);

// Auditar ejes de Gestor III
const ejes = {};
fullGestorBank.forEach(q => {
  ejes[q.ejeNombre] = (ejes[q.ejeNombre] || 0) + 1;
});
console.log("Distribución por ejes en Gestor III:");
console.log(JSON.stringify(ejes, null, 2));

const below3 = Object.entries(ejes).filter(([name, count]) => count < 3);
if (below3.length === 0) {
  console.log("✅ GESTOR III: TODOS los ejes tienen mínimo 3 preguntas!");
} else {
  console.warn("⚠️ Ejes con menos de 3:", below3);
}
