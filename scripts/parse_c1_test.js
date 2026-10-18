const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function parseC1() {
  const full = path.join(__dirname, '../material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/CUESTIONARIO-1.pdf');
  const buf = fs.readFileSync(full);
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  let text = (await parser.getText()).text;

  // Clean page markers
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/Material Exclusivo de www\.concursaconexito\.com/gi, '');

  const ansIndex = text.search(/HOJA DE RESPUESTAS/i);
  const bodyText = text.slice(0, ansIndex);
  const ansText = text.slice(ansIndex);

  // Extract answer map
  const answers = {};
  const ansLines = ansText.split('\n');
  ansLines.forEach(l => {
    const m = l.match(/^\s*(\d+)\s*[\.\)]\s*([A-D])[\.\)]/i);
    if (m) answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  console.log('Answers parsed count:', Object.keys(answers).length);
  console.log('Answer sample 1-10:', Object.entries(answers).slice(0, 10));

  // Extract questions
  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];
  console.log('Question matches in body:', qMatches.length);

  const parsed = [];
  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim().replace(/^[A-Z][\.\)]\s*/, '');
    const optB = optsText.slice(bIdx + 2, cIdx).trim().replace(/^[A-Z][\.\)]\s*/, '');
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim().replace(/^[A-Z][\.\)]\s*/, '');
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2).trim().replace(/^[A-Z][\.\)]\s*/, '') : '';

    parsed.push({
      num: qNum,
      enunciado,
      optA,
      optB,
      optC,
      optD,
      correct: answers[qNum]
    });
  }

  console.log('Fully parsed questions from C1:', parsed.length);
  console.log('Sample parsed Q1:', parsed[0]);
  console.log('Sample parsed Q2:', parsed[1]);
  console.log('Sample parsed Q3:', parsed[2]);
}

parseC1().catch(console.error);
