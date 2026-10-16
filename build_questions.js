// build_questions.js - Une los lotes de preguntas en questions.js de forma limpia
const fs = require('fs');
const { BATCH_1 } = require('./questions_batch1.js');
const { BATCH_2 } = require('./questions_batch2.js');
const { BATCH_3 } = require('./questions_batch3.js');

const rawQuestions = fs.readFileSync('questions.js', 'utf8');
eval(rawQuestions.replace(/const QUESTION_BANK =/, 'global.QUESTION_BANK ='));

const fullBank = [...QUESTION_BANK, ...BATCH_1, ...BATCH_2, ...BATCH_3];

const fileHeader = `// questions.js - Banco Maestro de 100 Casos de Juicio Situacional (PJS) para GESTOR III - DIAN 2676
// Alineado con el Manual de Funciones FT-TAH-1824 y los Ejes Oficiales de la Convocatoria CNSC (OPEC 242703)
// Cada caso incluye fundamentación normativa con Cita Clave Textual para asimilación progresiva

const QUESTION_BANK = ${JSON.stringify(fullBank, null, 2)};

if (typeof window !== "undefined") {
  window.QUESTION_BANK = QUESTION_BANK;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK };
}
`;

fs.writeFileSync('questions.js', fileHeader, 'utf8');
console.log(`questions.js generado con éxito. Total preguntas: ${fullBank.length}`);
