const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function parseCambiario() {
  const full = path.join(__dirname, '../material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/2_SIMULACRO REGIMEN CAMBIARIO CONVOCATORIA DIAN.pdf');
  const buf = fs.readFileSync(full);
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  let text = (await parser.getText()).text;

  // Clean page markers
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');

  // Extract answer keys
  const answers = {};
  const ansMatches = [...text.matchAll(/Pregunta\s*(\d+)\s*=\s*([A-D])/gi)];
  ansMatches.forEach(m => {
    answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  // Extract explanations
  const explanations = {};
  for (let i = 1; i <= 10; i++) {
    const pStr = `Pregunta ${i} =`;
    const pNextStr = `Pregunta ${i + 1} =`;
    const idx = text.indexOf(pStr);
    if (idx !== -1) {
      let endIdx = (i < 10) ? text.indexOf(pNextStr, idx) : text.indexOf('https://forms', idx);
      if (endIdx === -1) endIdx = text.length;
      const block = text.slice(idx, endIdx).trim();
      const lines = block.split('\n').slice(1).join(' ').trim();
      explanations[i] = lines;
    }
  }

  // Split into cases
  const caseRegex = /CASO\s*(\d+)/gi;
  const caseMatches = [...text.matchAll(caseRegex)];
  
  const parsedQuestions = [];

  for (let c = 0; c < caseMatches.length; c++) {
    const caseNum = parseInt(caseMatches[c][1]);
    const startIdx = caseMatches[c].index;
    const endIdx = (c < caseMatches.length - 1) ? caseMatches[c + 1].index : text.indexOf('Pregunta 1 =');
    const caseBlock = text.slice(startIdx, endIdx).trim();

    const firstQMatch = caseBlock.search(/\n\s*\d+\s*[\.\)]/);
    if (firstQMatch === -1) continue;

    const casoText = caseBlock.slice(caseBlock.indexOf('\n'), firstQMatch)
      .replace(/^CASO\s*\d+/i, '')
      .replace(/Grado de dificultad:[^\n]*/gi, '')
      .replace(/Simulacro con preguntas de opción múltiple de respuesta única/gi, '')
      .trim();

    const questionsPart = caseBlock.slice(firstQMatch);
    const qMatches = [...questionsPart.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];

    for (const qm of qMatches) {
      const qNum = parseInt(qm[1]);
      if (qNum > 10) continue;
      const qContent = qm[2].trim();

      const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
      if (optAMatch === -1) continue;

      const enunciado = qContent.slice(0, optAMatch).trim();
      const optsText = qContent.slice(optAMatch);

      const aIdx = optsText.search(/A[\.\)]\s*/);
      const bIdx = optsText.search(/B[\.\)]\s*/);
      const cIdx = optsText.search(/C[\.\)]\s*/);
      const dIdx = optsText.search(/D[\.\)]\s*/);

      if (aIdx === -1 || bIdx === -1) continue;

      const optA = optsText.slice(aIdx + 2, bIdx).trim().replace(/^[A-Z][\.\)]\s*/, '');
      const optB = optsText.slice(bIdx + 2, (cIdx !== -1 ? cIdx : optsText.length)).trim().replace(/^[A-Z][\.\)]\s*/, '');
      let optC = "";
      if (cIdx !== -1) {
        optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim().replace(/^[A-Z][\.\)]\s*/, '');
      }

      const correctLetter = answers[qNum] || "A";
      const expl = explanations[qNum] || "Fundamentación oficial conforme al régimen cambiario (Ley 9 de 1991, Resolución Externa 1 de 2018 Banco de la República).";

      parsedQuestions.push({
        num: qNum,
        caseNum: caseNum,
        caso: casoText,
        enunciado: enunciado,
        opciones: [
          { id: "A", texto: optA },
          { id: "B", texto: optB },
          { id: "C", texto: optC }
        ],
        respuestaCorrecta: correctLetter,
        explicacion: expl
      });
    }
  }

  console.log(`Parsed ${parsedQuestions.length} Cambiario questions!`);
  console.log('Sample parsed Q1:', JSON.stringify(parsedQuestions[0], null, 2));
}

parseCambiario().catch(console.error);
