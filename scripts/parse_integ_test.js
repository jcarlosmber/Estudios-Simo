const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function parseIntegridad() {
  const full = path.join(__dirname, '../material/05_Simulacros_y_Bancos_de_Preguntas/PRUEBA-DE-INTEGRIDAD-AEROCIVIL.pdf');
  const buf = fs.readFileSync(full);
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  let text = (await parser.getText()).text;
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/PRUEBA DE INTEGRIDAD AEROCIVIL[\s\S]*?derechos reservados/gi, '');

  const startIdx = text.search(/CASO\s*\n/i);
  const relevantText = text.slice(startIdx);

  // Split into cases or questions
  const caseBlocks = relevantText.split(/(?=\n\s*CASO\s*\n)/i);
  console.log('Case blocks found:', caseBlocks.length);

  const parsed = [];
  let globalQNum = 1;

  for (const cBlock of caseBlocks) {
    const firstQMatch = cBlock.search(/\n\s*\d+\s*[\.\)]\s*/);
    if (firstQMatch === -1) continue;

    const casoText = cBlock.slice(0, firstQMatch).replace(/^CASO\s*/i, '').trim();
    const qPart = cBlock.slice(firstQMatch);

    const qBlocks = qPart.split(/(?=\n\s*\d+\s*[\.\)]\s*)/);
    for (const qb of qBlocks) {
      const numM = qb.match(/^\s*(\d+)\s*[\.\)]\s*([\s\S]*)/);
      if (!numM) continue;
      const content = numM[2];

      const respMatch = content.match(/RESPUESTA[\s\S]*?([A-C])\s*[:\.]\s*3/i);
      if (!respMatch) continue;
      const correctLetter = respMatch[1].toUpperCase();

      const aIdx = content.search(/(?:^|\n)\s*A[\.\)]\s*/);
      const bIdx = content.search(/(?:^|\n)\s*B[\.\)]\s*/);
      const cIdx = content.search(/(?:^|\n)\s*C[\.\)]\s*/);
      const respIdx = content.search(/RESPUESTA/i);

      if (aIdx === -1 || bIdx === -1 || cIdx === -1 || respIdx === -1) continue;

      const enunciado = content.slice(0, aIdx).trim();
      const optA = content.slice(aIdx, bIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();
      const optB = content.slice(bIdx, cIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();
      const optC = content.slice(cIdx, respIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();

      const explText = content.slice(respIdx).replace(/RESPUESTA[\s\S]*?[A-C]\s*:\s*[1-3]/gi, '').trim();

      parsed.push({
        num: globalQNum++,
        caso: casoText,
        enunciado,
        opciones: [
          { id: "A", texto: optA },
          { id: "B", texto: optB },
          { id: "C", texto: optC }
        ],
        respuestaCorrecta: correctLetter,
        explicacion: explText || "Conducta alineada con el Código de Integridad del Servidor Público."
      });
    }
  }

  console.log('Parsed integrity questions:', parsed.length);
  if (parsed.length > 0) {
    console.log('Sample Q1:', parsed[0]);
    console.log('Sample Q2:', parsed[1]);
  }
}

parseIntegridad().catch(console.error);
