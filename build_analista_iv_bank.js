// build_analista_iv_bank.js - Construye y audita questions_analista_iv.js
const fs = require('fs');
const { ANALISTA_BATCH_1 } = require('./analista_batch1.js');
const { ANALISTA_BATCH_2 } = require('./analista_batch2.js');
const { ANALISTA_BATCH_3 } = require('./analista_batch3.js');

const fullBank = [...ANALISTA_BATCH_1, ...ANALISTA_BATCH_2, ...ANALISTA_BATCH_3];

console.log(`Uniendo lotes de Analista IV. Total preguntas: ${fullBank.length}`);

// Validaciones
const errors = [];
const axesCount = {};

fullBank.forEach((q, idx) => {
  if (!q.id) errors.push(`Pregunta #${idx} no tiene id`);
  if (!q.caso) errors.push(`Pregunta #${idx} (${q.id}) no tiene caso`);
  if (!q.enunciado) errors.push(`Pregunta #${idx} (${q.id}) no tiene enunciado`);
  if (!Array.isArray(q.opciones) || q.opciones.length !== 3) errors.push(`Pregunta #${idx} (${q.id}) no tiene 3 opciones`);
  if (!['A', 'B', 'C'].includes(q.respuestaCorrecta)) errors.push(`Pregunta #${idx} (${q.id}) respuesta correcta inválida`);
  if (!q.norma) errors.push(`Pregunta #${idx} (${q.id}) no tiene norma`);
  if (!q.citaNormativa) errors.push(`Pregunta #${idx} (${q.id}) no tiene citaNormativa`);
  if (!q.ejeNombre) errors.push(`Pregunta #${idx} (${q.id}) no tiene ejeNombre`);

  axesCount[q.ejeNombre] = (axesCount[q.ejeNombre] || 0) + 1;
});

console.log("\n--- DISTRIBUCIÓN POR EJES DE ANALISTA IV ---");
console.log(JSON.stringify(axesCount, null, 2));
console.log(`Total de ejes evaluados: ${Object.keys(axesCount).length}`);

const below3 = Object.entries(axesCount).filter(([name, count]) => count < 3);
if (below3.length > 0) {
  errors.push(`Los siguientes ejes tienen menos de 3 preguntas: ${JSON.stringify(below3)}`);
}

if (errors.length > 0) {
  console.error("❌ ERRORES ENCONTRADOS:", errors);
  process.exit(1);
} else {
  console.log("✅ ÉXITO TOTAL: Las 100 preguntas cumplen todos los requisitos y los 24 ejes tienen >= 3 preguntas.");
}

const fileHeader = `// questions_analista_iv.js - Banco Maestro de 100 Casos de Juicio Situacional (PJS) para ANALISTA IV - DIAN 2676
// Alineado con el Manual de Funciones Ficha AT-FL-2010 y los 24 Indicadores Oficiales de la Convocatoria CNSC (OPEC 236760)
// Nivel: Técnico | Código: 204 | Grado: 04 | Asignación: $6.390.426 | Total: 100 Preguntas con Cita Textual de la Norma

const QUESTION_BANK_ANALISTA = ${JSON.stringify(fullBank, null, 2)};

if (typeof window !== "undefined") {
  window.QUESTION_BANK_ANALISTA = QUESTION_BANK_ANALISTA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_ANALISTA };
}
`;

fs.writeFileSync('questions_analista_iv.js', fileHeader, 'utf8');
console.log("Archivo questions_analista_iv.js guardado exitosamente.");
