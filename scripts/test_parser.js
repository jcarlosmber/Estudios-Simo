const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function getPdfText(relPath) {
  const full = path.join(__dirname, '..', relPath);
  const buf = fs.readFileSync(full);
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  return (await parser.getText()).text;
}

async function test() {
  const aduanas = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/1_SIMULACRO ADUANAS CONVOCATORIA DIAN.pdf');
  console.log('Aduanas length:', aduanas.length);

  const cambiario = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/2_SIMULACRO REGIMEN CAMBIARIO CONVOCATORIA DIAN.pdf');
  console.log('Cambiario length:', cambiario.length);

  const c1 = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/CUESTIONARIO-1.pdf');
  console.log('CUESTIONARIO-1 length:', c1.length);

  const c2 = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/CUESTIONARIO-2.pdf');
  console.log('CUESTIONARIO-2 length:', c2.length);

  const comp = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/PRUEBAS-COMPORTAMENTALES-.pdf');
  console.log('Comportamentales length:', comp.length);

  const integ = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/PRUEBA-DE-INTEGRIDAD-AEROCIVIL.pdf');
  console.log('Integridad length:', integ.length);
}

test().catch(console.error);
