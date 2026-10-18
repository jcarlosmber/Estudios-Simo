const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function parseComportamentales() {
  const full = path.join(__dirname, '../material/05_Simulacros_y_Bancos_de_Preguntas/PRUEBAS-COMPORTAMENTALES-.pdf');
  const buf = fs.readFileSync(full);
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  let text = (await parser.getText()).text;
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');

  // Look for question patterns: number. text ... A. ... B. ... C. ... Respuesta. X ... Explicación: ...
  const qBlocks = text.split(/(?=\n\s*\d+\s*[\.\)]\s*)/);
  console.log('Total split blocks:', qBlocks.length);

  const parsed = [];
  for (const block of qBlocks) {
    const numMatch = block.match(/^\s*(\d+)\s*[\.\)]\s*([\s\S]*)/);
    if (!numMatch) continue;
    const qNum = parseInt(numMatch[1]);
    const content = numMatch[2];

    const ansMatch = content.match(/Respuesta[\.\s]*\n?\s*([A-C])[\.\)]/i);
    if (!ansMatch) continue;
    const correctLetter = ansMatch[1].toUpperCase();

    const explMatch = content.match(/Explicaci[oó]n:\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|PRUEBAS|$))/i);
    const expl = explMatch ? explMatch[1].trim() : "Evaluación de competencias laborales según Decreto 815 de 2018 para nivel profesional.";

    // Before 'Respuesta', get enunciado and options A, B, C
    const beforeAns = content.slice(0, ansMatch.index);
    const aIdx = beforeAns.search(/(?:^|\n)\s*A[\.\)]\s*/);
    const bIdx = beforeAns.search(/(?:^|\n)\s*B[\.\)]\s*/);
    const cIdx = beforeAns.search(/(?:^|\n)\s*C[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const enunciado = beforeAns.slice(0, aIdx).trim();
    const optA = beforeAns.slice(aIdx).replace(/^[A-Z][\.\)]\s*/, '').slice(0, bIdx - aIdx).trim();
    const optB = beforeAns.slice(bIdx).replace(/^[A-Z][\.\)]\s*/, '').slice(0, cIdx - bIdx).trim();
    const optC = beforeAns.slice(cIdx).replace(/^[A-Z][\.\)]\s*/).trim();

    parsed.push({
      num: qNum,
      enunciado,
      optA,
      optB,
      optC,
      correct: correctLetter,
      expl
    });
  }

  console.log(`Parsed ${parsed.length} comportamentales questions!`);
  if (parsed.length > 0) {
    console.log('Sample Q1:', parsed[0]);
    console.log('Sample Q2:', parsed[1]);
  }
}

parseComportamentales().catch(console.error);
