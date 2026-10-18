const qGestor = require('../questions_gestor_iii.js').QUESTION_BANK_GESTOR;
const qCI = require('../questions_gestor_iii_ci.js').QUESTION_BANK_GESTOR_CI;

console.log("=== AUDITORÍA RIGUROSA DE BANCOS DE PREGUNTAS ===");

function auditBank(name, bank) {
  console.log(`\n--- Evaluando ${name} (${bank.length} preguntas) ---`);
  
  const dist = { A: 0, B: 0, C: 0 };
  let invalidOptCount = 0;
  let mismatchedAnswer = 0;
  let citationSpoilers = 0;
  let emptyCasesInSituations = 0;
  let caricatures = 0;

  const caricatureRegexes = [
    /soborno|dádiva.*500\.000/i,
    /curiosidad comunitaria/i,
    /whatsapp.*amigo/i,
    /24 horas continuas sin dormir/i,
    /destrucción de los convenios con la polfa/i,
    /destruir los soportes.*cada 30 días/i,
    /calificaciones deficientes.*200%/i,
    /acatar sumisamente la orden verbal e imponer la sanción arbitraria/i,
    /recomendar verbalmente.*pagar una cifra aproximada/i,
    /archivar el expediente sin auto ni justificación/i,
    /correo electrónico informal cada fin de mes/i,
    /responder con igual agresividad y amenazar con denunciar/i,
    /hacerse el de la vista gorda/i
  ];

  bank.forEach((q, idx) => {
    // 1. Answer distribution
    dist[q.respuestaCorrecta] = (dist[q.respuestaCorrecta] || 0) + 1;

    // 2. Options count
    if (!Array.isArray(q.opciones) || q.opciones.length !== 3) {
      invalidOptCount++;
      console.error(`[${q.id}] opciones no tiene longitud 3:`, q.opciones?.length);
    }

    // 3. Match of correct answer
    const found = q.opciones.find(o => o.id === q.respuestaCorrecta);
    if (!found) {
      mismatchedAnswer++;
      console.error(`[${q.id}] respuestaCorrecta ${q.respuestaCorrecta} no existe en opciones`);
    }

    // 4. Citation spoilers in options text
    q.opciones.forEach(o => {
      if (/\((?:Art|Artículo|Ley|Decreto|Resolución|E\.T\.|Constitución)[^\)]*\)/i.test(o.texto)) {
        citationSpoilers++;
        console.warn(`[${q.id}] Spoiler normativo en opción ${o.id}: "${o.texto}"`);
      }
    });

    // 5. Caricatures
    q.opciones.forEach(o => {
      for (const r of caricatureRegexes) {
        if (r.test(o.texto)) {
          caricatures++;
          console.warn(`[${q.id}] Distractor caricatura detectado en opción ${o.id}: "${o.texto}"`);
        }
      }
    });

    // 6. Case presence in situational questions
    if (q.id.startsWith('mat_aduanas') || q.id.startsWith('mat_cambiario') || q.id.startsWith('mat_integ') || q.id.startsWith('mat_regalo')) {
      if (!q.caso || q.caso.trim().length < 15) {
        emptyCasesInSituations++;
        console.error(`[${q.id}] Caso situacional vacío o muy corto: "${q.caso}"`);
      }
    }
  });

  console.log(`Distribución de respuestas:`, dist);
  console.log(`Preguntas con conteo incorrecto de opciones (!= 3): ${invalidOptCount}`);
  console.log(`Preguntas con respuesta incorrecta o huérfana: ${mismatchedAnswer}`);
  console.log(`Spoilers de citas normativas en textos de opción: ${citationSpoilers}`);
  console.log(`Distractores de caricatura u obvios encontrados: ${caricatures}`);
  console.log(`Casos situacionales vacíos: ${emptyCasesInSituations}`);

  if (invalidOptCount === 0 && mismatchedAnswer === 0 && citationSpoilers === 0 && caricatures === 0 && emptyCasesInSituations === 0) {
    console.log(`✅ ${name} APROBADO AL 100% SIN NINGÚN DEFECTO.`);
  } else {
    console.error(`❌ ${name} TIENE DEFECTOS A CORREGIR.`);
  }
}

auditBank("BANCO GESTOR III (questions_gestor_iii.js)", qGestor);
auditBank("BANCO CONTROL INTERNO (questions_gestor_iii_ci.js)", qCI);
