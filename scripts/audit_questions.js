const fs = require('fs');
const path = require('path');

const qb = require('../questions_gestor_iii.js').QUESTION_BANK_GESTOR;

console.log('Total questions in questions_gestor_iii.js:', qb.length);

const answers = { A: 0, B: 0, C: 0 };
qb.forEach(q => answers[q.respuestaCorrecta] = (answers[q.respuestaCorrecta] || 0) + 1);
console.log('Answers distribution:', answers);

const citationSpoilers = [];
const obviousQuestions = [];

const obviousRegexes = [
  /archivar.*inmediatamente|archivar el expediente sin/i,
  /pedir.*plata|coima|soborno|dádiva|acuerdo verbal informal/i,
  /despedir a todos|insubsistencia inmediata/i,
  /recomendar.*verbalmente.*pagar una cifra aproximada/i,
  /destruir las pruebas|ocultar el expediente/i,
  /suspender de manera generalizada las autorizaciones/i,
  /no hacer nada y esperar/i
];

qb.forEach((q, idx) => {
  let hasSpoiler = false;
  q.opciones.forEach(o => {
    if (/\((?:Art|Artículo|Ley|Decreto|Resolución|E\.T\.|Constitución)[^\)]*\)/i.test(o.texto)) {
      hasSpoiler = true;
      citationSpoilers.push({ id: q.id, optId: o.id, isCorrect: o.id === q.respuestaCorrecta, text: o.texto });
    }
  });

  let hasObvious = false;
  q.opciones.forEach(o => {
    for (const r of obviousRegexes) {
      if (r.test(o.texto)) {
        hasObvious = true;
        obviousQuestions.push({ id: q.id, optId: o.id, isCorrect: o.id === q.respuestaCorrecta, text: o.texto, matched: r.toString() });
        break;
      }
    }
  });
});

console.log('Citation spoilers count:', citationSpoilers.length);
citationSpoilers.forEach(s => console.log(`  [${s.id}] Opt ${s.optId} (Correct: ${s.isCorrect}): ${s.text}`));

console.log('\nObvious caricature questions count:', obviousQuestions.length);
obviousQuestions.forEach(o => console.log(`  [${o.id}] Opt ${o.optId} (Correct: ${o.isCorrect}): ${o.text}`));
