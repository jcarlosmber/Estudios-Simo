// verify_bank.js - Auditoría completa de los bancos multi-perfil (Gestor III y Analista IV)
const { QUESTION_BANK_GESTOR, QUESTION_BANK_ANALISTA } = require('./questions.js');

console.log("=================================================");
console.log(" AUDITORÍA GENERAL DE BANCOS DE PREGUNTAS DIAN 2676");
console.log("=================================================");

function auditBank(bank, bankName, minPerAxis = 3) {
  console.log(`\n--- Auditando: ${bankName} ---`);
  console.log(`Total preguntas cargadas: ${bank.length}`);

  const errors = [];
  const axes = {};

  bank.forEach((q, idx) => {
    if (!q.id) errors.push(`Pregunta #${idx} no tiene id`);
    if (!q.caso) errors.push(`Pregunta #${idx} (${q.id}) no tiene caso`);
    if (!q.enunciado) errors.push(`Pregunta #${idx} (${q.id}) no tiene enunciado`);
    if (!Array.isArray(q.opciones) || q.opciones.length !== 3) errors.push(`Pregunta #${idx} (${q.id}) no tiene 3 opciones`);
    if (!['A', 'B', 'C'].includes(q.respuestaCorrecta)) errors.push(`Pregunta #${idx} (${q.id}) respuesta correcta inválida`);
    if (!q.norma) errors.push(`Pregunta #${idx} (${q.id}) no tiene norma`);
    if (!q.citaNormativa) errors.push(`Pregunta #${idx} (${q.id}) no tiene citaNormativa`);
    if (!q.ejeNombre) errors.push(`Pregunta #${idx} (${q.id}) no tiene ejeNombre`);

    axes[q.ejeNombre] = (axes[q.ejeNombre] || 0) + 1;
  });

  console.log(`Total ejes identificados: ${Object.keys(axes).length}`);
  const belowMin = Object.entries(axes).filter(([name, count]) => count < minPerAxis);

  if (belowMin.length > 0) {
    errors.push(`Ejes con menos de ${minPerAxis} preguntas: ${JSON.stringify(belowMin)}`);
  }

  if (errors.length === 0) {
    console.log(`✅ ÉXITO TOTAL: ${bankName} cuenta con ${bank.length} preguntas y TODOS sus ${Object.keys(axes).length} ejes tienen al menos ${minPerAxis} preguntas.`);
  } else {
    console.error(`❌ Errores en ${bankName}:`, errors);
  }
}

auditBank(QUESTION_BANK_GESTOR, "GESTOR III (OPEC 242703)");
auditBank(QUESTION_BANK_ANALISTA, "ANALISTA IV (OPEC 236760)");
