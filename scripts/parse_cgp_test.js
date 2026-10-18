const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function parseCGP() {
  const full = path.join(__dirname, '../material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/Cuestionario Codigo Gral del proceso.pdf');
  const buf = fs.readFileSync(full);
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  let text = (await parser.getText()).text;
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');

  // Find answers section
  const ansIdx = text.search(/\b1\.\s*[A-E]\.\s*[\s\S]*?Ley\s*1564/i);
  console.log('Ans index:', ansIdx);
  const bodyText = text.slice(0, ansIdx);
  const ansText = text.slice(ansIdx);

  const answers = {};
  const normMap = {};
  const ansLines = ansText.split(/(?=\n\s*\d+\s*[\.\)])/);
  for (const al of ansLines) {
    const m = al.match(/^\s*(\d+)\s*[\.\)]\s*([A-E])[\.\)]\s*([\s\S]*)/i);
    if (m) {
      const qNum = parseInt(m[1]);
      const letter = m[2].toUpperCase();
      answers[qNum] = letter;
      const rest = m[3].trim();
      const leyMatch = rest.match(/Ley\s*1564\s*de\s*2012[^\n]*/i);
      normMap[qNum] = leyMatch ? leyMatch[0].trim() : "Código General del Proceso (Ley 1564 de 2012)";
    }
  }

  console.log('CGP answers parsed:', Object.keys(answers).length);
  console.log('Sample answer 1:', answers[1], normMap[1]);
  console.log('Sample answer 2:', answers[2], normMap[2]);
}

parseCGP().catch(console.error);
