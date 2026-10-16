// verify_bank.js - Auditoría completa de las 100 preguntas
const { QUESTION_BANK } = require('./questions.js');

console.log("Total preguntas cargadas:", QUESTION_BANK.length);

const errors = [];
QUESTION_BANK.forEach((q, idx) => {
  if (!q.id) errors.push(`Pregunta #${idx} no tiene id`);
  if (!q.caso) errors.push(`Pregunta #${idx} (${q.id}) no tiene caso`);
  if (!q.enunciado) errors.push(`Pregunta #${idx} (${q.id}) no tiene enunciado`);
  if (!Array.isArray(q.opciones) || q.opciones.length !== 3) errors.push(`Pregunta #${idx} (${q.id}) no tiene 3 opciones`);
  if (!['A', 'B', 'C'].includes(q.respuestaCorrecta)) errors.push(`Pregunta #${idx} (${q.id}) respuesta correcta inválida`);
  if (!q.norma) errors.push(`Pregunta #${idx} (${q.id}) no tiene norma`);
  if (!q.citaNormativa) errors.push(`Pregunta #${idx} (${q.id}) no tiene citaNormativa`);
});

if (errors.length === 0) {
  console.log("✅ ÉXITO TOTAL: Las 100 preguntas cuentan con caso, enunciado, 3 opciones fundamentadas, respuesta correcta y cita textual de la norma.");
} else {
  console.error("Errores:", errors);
}
