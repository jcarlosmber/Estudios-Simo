const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const ROOT_DIR = path.join(__dirname, '..');

async function getPdfText(relPath) {
  const full = path.join(ROOT_DIR, relPath);
  const buf = fs.readFileSync(full);
  const parser = new PDFParse(new Uint8Array(buf));
  await parser.load();
  return (await parser.getText()).text;
}

function cleanOptionText(txt) {
  if (!txt) return "";
  let clean = txt
    .replace(/^[A-Z0-9]\s*[\.\)]\s*/, '') // strip leading "A.", "1.", "A)", etc.
    .replace(/\s*\((?:Decreto|Ley|Art|Artículo|Resolución|E\.T\.|Constitución)[^\)]*\)\.?/gi, '') // remove citation spoilers
    .replace(/\s+/g, ' ')
    .trim();
  return clean;
}

function normalizeToThreeOptions(rawOptions, correctOriginalId, targetLetter, explicacionCorrecta = "") {
  const correctOpt = rawOptions.find(o => o.id.toUpperCase() === correctOriginalId.toUpperCase());
  if (!correctOpt) return null;

  const validDistractors = rawOptions.filter(o => {
    if (o.id.toUpperCase() === correctOriginalId.toUpperCase()) return false;
    const t = o.texto.toLowerCase();
    if (t.includes('todas las anteriores') || t.includes('ninguna de las anteriores')) return false;
    return true;
  });

  const distractorsPool = validDistractors.length >= 2 
    ? validDistractors 
    : rawOptions.filter(o => o.id.toUpperCase() !== correctOriginalId.toUpperCase());

  if (distractorsPool.length < 2) return null;

  const d1 = distractorsPool[0];
  const d2 = distractorsPool[1];

  const cText = cleanOptionText(correctOpt.texto);
  const d1Text = cleanOptionText(d1.texto);
  const d2Text = cleanOptionText(d2.texto);

  let arranged = [];
  if (targetLetter === 'A') {
    arranged = [
      { id: 'A', texto: cText, explicacion: explicacionCorrecta || "Clave oficial conforme a los criterios y normativa técnica evaluada." },
      { id: 'B', texto: d1Text, explicacion: "Distractor técnico que omite o distorsiona elementos esenciales del procedimiento o competencia legal." },
      { id: 'C', texto: d2Text, explicacion: "Distractor técnico descartado conforme a la regulación y competencias institucionales." }
    ];
  } else if (targetLetter === 'B') {
    arranged = [
      { id: 'A', texto: d1Text, explicacion: "Distractor técnico que omite o distorsiona elementos esenciales del procedimiento o competencia legal." },
      { id: 'B', texto: cText, explicacion: explicacionCorrecta || "Clave oficial conforme a los criterios y normativa técnica evaluada." },
      { id: 'C', texto: d2Text, explicacion: "Distractor técnico descartado conforme a la regulación y competencias institucionales." }
    ];
  } else {
    arranged = [
      { id: 'A', texto: d1Text, explicacion: "Distractor técnico que omite o distorsiona elementos esenciales del procedimiento o competencia legal." },
      { id: 'B', texto: d2Text, explicacion: "Distractor técnico descartado conforme a la regulación y competencias institucionales." },
      { id: 'C', texto: cText, explicacion: explicacionCorrecta || "Clave oficial conforme a los criterios y normativa técnica evaluada." }
    ];
  }

  return arranged;
}

class Cycle {
  constructor() {
    this.list = ['A', 'B', 'C'];
    this.idx = 0;
  }
  next() {
    const val = this.list[this.idx % 3];
    this.idx++;
    return val;
  }
}

// 1. ADUANAS CON CASOS
async function extractAduanas(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/1_SIMULACRO ADUANAS CONVOCATORIA DIAN.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');

  const answers = {};
  [...text.matchAll(/Pregunta\s*(\d+)\s*=\s*([A-D])/gi)].forEach(m => {
    answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  const explanations = {};
  for (let i = 1; i <= 20; i++) {
    const pStr = `Pregunta ${i} =`;
    const pNextStr = `Pregunta ${i + 1} =`;
    const idx = text.indexOf(pStr);
    if (idx !== -1) {
      let endIdx = (i < 20) ? text.indexOf(pNextStr, idx) : text.indexOf('https://forms', idx);
      if (endIdx === -1) endIdx = text.length;
      const block = text.slice(idx, endIdx).trim();
      explanations[i] = block.split('\n').slice(1).join(' ').replace(/\s+/g, ' ').trim();
    }
  }

  const caseRegex = /CASO\s*(\d+)/gi;
  const caseMatches = [...text.matchAll(caseRegex)];
  const result = [];

  for (let c = 0; c < caseMatches.length; c++) {
    const startIdx = caseMatches[c].index;
    const endIdx = (c < caseMatches.length - 1) ? caseMatches[c + 1].index : text.indexOf('Pregunta 1 =');
    const caseBlock = text.slice(startIdx, endIdx).trim();

    const firstQMatch = caseBlock.search(/\n\s*\d+\s*[\.\)]/);
    if (firstQMatch === -1) continue;

    const casoText = caseBlock.slice(caseBlock.indexOf('\n'), firstQMatch)
      .replace(/^CASO\s*\d+/i, '')
      .replace(/Grado de dificultad:[^\n]*/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    const questionsPart = caseBlock.slice(firstQMatch);
    const qMatches = [...questionsPart.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];

    for (const qm of qMatches) {
      const qNum = parseInt(qm[1]);
      if (qNum > 20 || !answers[qNum]) continue;
      const qContent = qm[2].trim();

      const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
      if (optAMatch === -1) continue;

      const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
      const optsText = qContent.slice(optAMatch);

      const aIdx = optsText.search(/A[\.\)]\s*/);
      const bIdx = optsText.search(/B[\.\)]\s*/);
      const cIdx = optsText.search(/C[\.\)]\s*/);
      const dIdx = optsText.search(/D[\.\)]\s*/);

      if (aIdx === -1 || bIdx === -1) continue;

      const optA = optsText.slice(aIdx + 2, bIdx).trim();
      const optB = optsText.slice(bIdx + 2, (cIdx !== -1 ? cIdx : optsText.length)).trim();
      const optC = (cIdx !== -1) ? optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim() : "";

      const rawOpts = [
        { id: 'A', texto: optA },
        { id: 'B', texto: optB }
      ];
      if (optC) rawOpts.push({ id: 'C', texto: optC });

      const targetLetter = cycle.next();
      const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter, explanations[qNum]);
      if (!balanced) continue;

      result.push({
        id: `mat_aduanas_sim_${qNum}`,
        nivel: "Profesional",
        ejeId: "aduanero",
        ejeNombre: "Régimen Aduanero y Comercio Exterior",
        tipo: "Funcional (Eliminatorio - 65%)",
        tema: "Procedimientos Aduaneros, Tránsito y Agenciamiento (Decreto 1165 de 2019 / Dec. 360 de 2021)",
        caso: casoText,
        enunciado: enunciado,
        opciones: balanced,
        respuestaCorrecta: targetLetter,
        justificacion: explanations[qNum] || "Fundamentación técnica conforme al régimen aduanero nacional.",
        norma: "Decreto 1165 de 2019 y Decreto 360 de 2021",
        citaNormativa: explanations[qNum]?.slice(0, 300) || "Decreto 1165 de 2019 y normas modificatorias.",
        dificultad: "ALTA",
        competencia: "Régimen Aduanero y Facilitación del Comercio Legítimo"
      });
    }
  }

  return result;
}

// 2. CAMBIARIO CON CASOS
async function extractCambiario(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/2_SIMULACRO REGIMEN CAMBIARIO CONVOCATORIA DIAN.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');

  const answers = {};
  [...text.matchAll(/Pregunta\s*(\d+)\s*=\s*([A-D])/gi)].forEach(m => {
    answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  const explanations = {};
  for (let i = 1; i <= 10; i++) {
    const pStr = `Pregunta ${i} =`;
    const pNextStr = `Pregunta ${i + 1} =`;
    const idx = text.indexOf(pStr);
    if (idx !== -1) {
      let endIdx = (i < 10) ? text.indexOf(pNextStr, idx) : text.indexOf('https://forms', idx);
      if (endIdx === -1) endIdx = text.length;
      const block = text.slice(idx, endIdx).trim();
      explanations[i] = block.split('\n').slice(1).join(' ').replace(/\s+/g, ' ').trim();
    }
  }

  const caseRegex = /CASO\s*(\d+)/gi;
  const caseMatches = [...text.matchAll(caseRegex)];
  const result = [];

  for (let c = 0; c < caseMatches.length; c++) {
    const startIdx = caseMatches[c].index;
    const endIdx = (c < caseMatches.length - 1) ? caseMatches[c + 1].index : text.indexOf('Pregunta 1 =');
    const caseBlock = text.slice(startIdx, endIdx).trim();

    const firstQMatch = caseBlock.search(/\n\s*\d+\s*[\.\)]/);
    if (firstQMatch === -1) continue;

    const casoText = caseBlock.slice(caseBlock.indexOf('\n'), firstQMatch)
      .replace(/^CASO\s*\d+/i, '')
      .replace(/Grado de dificultad:[^\n]*/gi, '')
      .replace(/Simulacro con preguntas de opción múltiple de respuesta única/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    const questionsPart = caseBlock.slice(firstQMatch);
    const qMatches = [...questionsPart.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];

    for (const qm of qMatches) {
      const qNum = parseInt(qm[1]);
      if (qNum > 10 || !answers[qNum]) continue;
      const qContent = qm[2].trim();

      const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
      if (optAMatch === -1) continue;

      const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
      const optsText = qContent.slice(optAMatch);

      const aIdx = optsText.search(/A[\.\)]\s*/);
      const bIdx = optsText.search(/B[\.\)]\s*/);
      const cIdx = optsText.search(/C[\.\)]\s*/);
      const dIdx = optsText.search(/D[\.\)]\s*/);

      if (aIdx === -1 || bIdx === -1) continue;

      const optA = optsText.slice(aIdx + 2, bIdx).trim();
      const optB = optsText.slice(bIdx + 2, (cIdx !== -1 ? cIdx : optsText.length)).trim();
      const optC = (cIdx !== -1) ? optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim() : "";

      const rawOpts = [
        { id: 'A', texto: optA },
        { id: 'B', texto: optB }
      ];
      if (optC) rawOpts.push({ id: 'C', texto: optC });

      const targetLetter = cycle.next();
      const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter, explanations[qNum]);
      if (!balanced) continue;

      result.push({
        id: `mat_cambiario_sim_${qNum}`,
        nivel: "Profesional",
        ejeId: "cambiario",
        ejeNombre: "Régimen Cambiario y Lavado de Activos",
        tipo: "Funcional (Eliminatorio - 65%)",
        tema: "Operaciones de Cambio, Intermediarios y Régimen Cambiario (Ley 9 de 1991 / Res. Externa 1 de 2018)",
        caso: casoText,
        enunciado: enunciado,
        opciones: balanced,
        respuestaCorrecta: targetLetter,
        justificacion: explanations[qNum] || "Fundamentación técnica conforme al régimen cambiario nacional.",
        norma: "Ley 9 de 1991 y Resolución Externa 1 de 2018",
        citaNormativa: explanations[qNum]?.slice(0, 300) || "Ley 9 de 1991, Art. 3 y normas concordantes.",
        dificultad: "ALTA",
        competencia: "Control Cambiario y Prevención del Lavado de Activos"
      });
    }
  }

  return result;
}

// 3. CUESTIONARIO 1 (100 Cosas sobre la DIAN)
async function extractC1(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/CUESTIONARIO-1.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/Material Exclusivo de www\.concursaconexito\.com/gi, '');

  const ansIndex = text.search(/HOJA DE RESPUESTAS/i);
  const bodyText = text.slice(0, ansIndex);
  const ansText = text.slice(ansIndex);

  const answers = {};
  ansText.split('\n').forEach(l => {
    const m = l.match(/^\s*(\d+)\s*[\.\)]\s*([A-D])[\.\)]/i);
    if (m) answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];
  const result = [];

  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim();
    const optB = optsText.slice(bIdx + 2, cIdx).trim();
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim();
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2).trim() : '';

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];
    if (optD) rawOpts.push({ id: 'D', texto: optD });

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter);
    if (!balanced) continue;

    let ejeId = "misionalidad";
    let ejeNombre = "Misionalidad y Estructura DIAN";
    let tema = "Estructura Organizacional y Procesos Misionales de la DIAN";
    let norma = "Decreto 1742 de 2020 y Decreto 4048 de 2008";

    const lc = enunciado.toLowerCase();
    if (lc.includes('aduan') || lc.includes('zona franca') || lc.includes('arancel') || lc.includes('mercancía')) {
      ejeId = "aduanero";
      ejeNombre = "Régimen Aduanero y Comercio Exterior";
      tema = "Regulación Aduanera y Operaciones de Comercio Exterior";
      norma = "Decreto 1165 de 2019";
    } else if (lc.includes('impuesto') || lc.includes('renta') || lc.includes('tributari') || lc.includes('factura') || lc.includes('iva') || lc.includes('declarac')) {
      ejeId = "tributario";
      ejeNombre = "Procedimiento Tributario y Fiscalización";
      tema = "Procedimiento Tributario y Obligaciones Fiscales";
      norma = "Estatuto Tributario Nacional";
    } else if (lc.includes('cambiari') || lc.includes('divisa') || lc.includes('moneda')) {
      ejeId = "cambiario";
      ejeNombre = "Régimen Cambiario y Lavado de Activos";
      tema = "Control Cambiario y Operaciones Internacionales";
      norma = "Ley 9 de 1991";
    }

    result.push({
      id: `mat_c1_${qNum}`,
      nivel: "Profesional",
      ejeId: ejeId,
      ejeNombre: ejeNombre,
      tipo: "Funcional (Eliminatorio - 65%)",
      tema: tema,
      caso: `En el marco del conocimiento técnico-institucional de la DIAN para el ejercicio de las funciones del Gestor III, se requiere dominar con precisión la siguiente regla de gestión:`,
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: "Criterio institucional oficial conforme a los lineamientos y marco normativo de la DIAN.",
      norma: norma,
      citaNormativa: "Normativa orgánica, tributaria y aduanera aplicable a la DIAN (Decreto 1742 de 2020 y Estatuto Tributario).",
      dificultad: "MEDIA",
      competencia: "Conocimiento Técnico e Institucional DIAN"
    });
  }

  return result;
}

// 4. CUESTIONARIO 2 (Procedimiento y fiscalización DIAN)
async function extractC2(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/CUESTIONARIO-2.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/REGALO DIAN 2/gi, '');

  const ansIndex = text.search(/RESPUESTAS/i);
  if (ansIndex === -1) return [];
  const bodyText = text.slice(0, ansIndex);
  const ansText = text.slice(ansIndex);

  const answers = {};
  ansText.split('\n').forEach(l => {
    const m = l.match(/^\s*(\d+)\s*[\.\)]\s*([A-E])[\.\)]/i);
    if (m) answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];
  const result = [];

  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);
    const eIdx = optsText.search(/E[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim();
    const optB = optsText.slice(bIdx + 2, cIdx).trim();
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim();
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2, (eIdx !== -1 ? eIdx : optsText.length)).trim() : '';
    const optE = (eIdx !== -1) ? optsText.slice(eIdx + 2).trim() : '';

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];
    if (optD) rawOpts.push({ id: 'D', texto: optD });
    if (optE) rawOpts.push({ id: 'E', texto: optE });

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter);
    if (!balanced) continue;

    result.push({
      id: `mat_c2_${qNum}`,
      nivel: "Profesional",
      ejeId: "tributario",
      ejeNombre: "Procedimiento Tributario y Fiscalización",
      tipo: "Funcional (Eliminatorio - 65%)",
      tema: "Procedimiento Administrativo Tributario y Determinación Oficial (Estatuto Tributario)",
      caso: "En el ejercicio del control tributario, fiscalización y notificaciones oficiales por parte de las Seccionales de la DIAN, se plantea la siguiente regla jurídica:",
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: "Criterio tributario conforme a los procedimientos y términos del Estatuto Tributario.",
      norma: "Estatuto Tributario y Código de Procedimiento Administrativo",
      citaNormativa: "Estatuto Tributario Nacional, normas procedimentales aplicables a la determinación oficial.",
      dificultad: "ALTA",
      competencia: "Procedimiento Tributario y Determinación de la Obligación"
    });
  }

  return result;
}

// 5. CUESTIONARIO 3 (Conceptos generales tributarios DIAN)
async function extractC3(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/CUESTIONARIO-3.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/PRUEBAS GENERALES DIAN/gi, '');

  const ansIndex = text.search(/RESPUESTAS/i);
  if (ansIndex === -1) return [];
  const bodyText = text.slice(0, ansIndex);
  const ansText = text.slice(ansIndex);

  const answers = {};
  ansText.split('\n').forEach(l => {
    const m = l.match(/^\s*(\d+)\s*[\.\)]\s*([A-E])[\.\)]/i);
    if (m) answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];
  const result = [];

  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);
    const eIdx = optsText.search(/E[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim();
    const optB = optsText.slice(bIdx + 2, cIdx).trim();
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim();
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2, (eIdx !== -1 ? eIdx : optsText.length)).trim() : '';
    const optE = (eIdx !== -1) ? optsText.slice(eIdx + 2).trim() : '';

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];
    if (optD) rawOpts.push({ id: 'D', texto: optD });
    if (optE) rawOpts.push({ id: 'E', texto: optE });

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter);
    if (!balanced) continue;

    result.push({
      id: `mat_c3_${qNum}`,
      nivel: "Profesional",
      ejeId: "tributario",
      ejeNombre: "Procedimiento Tributario y Fiscalización",
      tipo: "Funcional (Eliminatorio - 65%)",
      tema: "Hecho Generador, Sujetos y Fundamentos de la Obligación Tributaria",
      caso: "En el análisis dogmático y jurídico sustancial de las obligaciones fiscales a cargo de la DIAN, se evalúa el siguiente criterio de imposición:",
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: "Criterio dogmático y legal del Derecho Tributario y la potestad impositiva del Estado.",
      norma: "Constitución Política (Art. 338) y Estatuto Tributario",
      citaNormativa: "Constitución Política Art. 338 y principios fundamentales del sistema tributario.",
      dificultad: "ALTA",
      competencia: "Juicio Sustancial en Obligaciones Tributarias"
    });
  }

  return result;
}

// 6. CUESTIONARIO 4 (Derecho de petición y función pública)
async function extractC4(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/CUESTIONARIO-4.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/MATERIAL DE OBSEQUIO DIAN 4/gi, '');

  const ansIndex = text.search(/RESPUESTAS/i);
  if (ansIndex === -1) return [];
  const bodyText = text.slice(0, ansIndex);
  const ansText = text.slice(ansIndex);

  const answers = {};
  ansText.split('\n').forEach(l => {
    const m = l.match(/^\s*(\d+)\s*[\.\)]\s*([A-E])[\.\)]/i);
    if (m) answers[parseInt(m[1])] = m[2].toUpperCase();
  });

  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];
  const result = [];

  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);
    const eIdx = optsText.search(/E[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim();
    const optB = optsText.slice(bIdx + 2, cIdx).trim();
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim();
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2, (eIdx !== -1 ? eIdx : optsText.length)).trim() : '';
    const optE = (eIdx !== -1) ? optsText.slice(eIdx + 2).trim() : '';

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];
    if (optD) rawOpts.push({ id: 'D', texto: optD });
    if (optE) rawOpts.push({ id: 'E', texto: optE });

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter);
    if (!balanced) continue;

    result.push({
      id: `mat_c4_${qNum}`,
      nivel: "Profesional",
      ejeId: "servicio",
      ejeNombre: "Derecho de Petición y Atención al Ciudadano",
      tipo: "Funcional (Eliminatorio - 65%)",
      tema: "Derecho Fundamental de Petición, Acceso a la Información y CPACA (Ley 1755 de 2015)",
      caso: "Como Gestor III que orienta la resolución de trámites ciudadanos y solicitudes de información en la DIAN, se atiende la siguiente contingencia:",
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: "Criterio garantista conforme a la Ley Estatutaria 1755 de 2015 y el CPACA.",
      norma: "Ley 1755 de 2015 y CPACA (Ley 1437 de 2011)",
      citaNormativa: "Ley 1755 de 2015, reglas de trámite, términos perentorios y excepciones al acceso documental.",
      dificultad: "MEDIA",
      competencia: "Orientación al Usuario y Garantía del Debido Proceso Administrativo"
    });
  }

  return result;
}

// 7. CGP (Código General del Proceso y Cobro Coactivo)
async function extractCGP(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/Cuestionario Codigo Gral del proceso.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');

  const ansIdx = text.search(/\b1\.\s*[A-E]\.\s*[\s\S]*?Ley\s*1564/i);
  if (ansIdx === -1) return [];
  const bodyText = text.slice(0, ansIdx);
  const ansText = text.slice(ansIdx);

  const answers = {};
  const normMap = {};
  ansText.split(/(?=\n\s*\d+\s*[\.\)])/).forEach(al => {
    const m = al.match(/^\s*(\d+)\s*[\.\)]\s*([A-E])[\.\)]\s*([\s\S]*)/i);
    if (m) {
      answers[parseInt(m[1])] = m[2].toUpperCase();
      const leyMatch = m[3].match(/Ley\s*1564\s*de\s*2012[^\n]*/i);
      normMap[parseInt(m[1])] = leyMatch ? leyMatch[0].trim() : "Código General del Proceso (Ley 1564 de 2012)";
    }
  });

  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];
  const result = [];

  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);
    const eIdx = optsText.search(/E[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim();
    const optB = optsText.slice(bIdx + 2, cIdx).trim();
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim();
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2, (eIdx !== -1 ? eIdx : optsText.length)).trim() : '';
    const optE = (eIdx !== -1) ? optsText.slice(eIdx + 2).trim() : '';

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];
    if (optD) rawOpts.push({ id: 'D', texto: optD });
    if (optE) rawOpts.push({ id: 'E', texto: optE });

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter);
    if (!balanced) continue;

    result.push({
      id: `mat_cgp_${qNum}`,
      nivel: "Profesional",
      ejeId: "cobranzas",
      ejeNombre: "Cobro Coactivo y Títulos Ejecutivos",
      tipo: "Funcional (Eliminatorio - 65%)",
      tema: "Medidas Cautelares, Títulos Ejecutivos y Remisión Procesal (CGP Ley 1564 de 2012 / E.T. Art. 823)",
      caso: "En el procedimiento de ejecución y cobro coactivo de deudas fiscales de la DIAN, por remisión del Estatuto Tributario al Código General del Proceso, se presenta la siguiente regla procesal:",
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: `Fundamentación legal oficial: ${normMap[qNum] || "Código General del Proceso (Ley 1564 de 2012)"}.`,
      norma: normMap[qNum] || "Ley 1564 de 2012 (CGP) y Estatuto Tributario",
      citaNormativa: `${normMap[qNum] || "Ley 1564 de 2012"}, aplicable en subsidio al procedimiento de cobro coactivo DIAN.`,
      dificultad: "ALTA",
      competencia: "Gestión de Cobro Coactivo y Procedimiento Ejecutivo"
    });
  }

  return result;
}

// 8. CUD (Código Disciplinario e Integridad)
async function extractCUD(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Simulacros_DIAN/Cuestionario Codigo unico disciplinario.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');

  const m = text.match(/\nRESPUESTAS\s*\n1\.\s*([A-D])\./i);
  if (!m) return [];
  const bodyText = text.slice(0, m.index);
  const ansText = text.slice(m.index);

  const answers = {};
  const explanations = {};
  ansText.split(/(?=\n\s*\d+\s*[\.\)])/).forEach(l => {
    const am = l.match(/^\s*(\d+)\s*[\.\)]\s*([A-D])\.\s*([\s\S]*)/i);
    if (am) {
      const qNum = parseInt(am[1]);
      answers[qNum] = am[2].toUpperCase();
      explanations[qNum] = am[3].replace(/\s+/g, ' ').trim();
    }
  });

  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|$))/g)];
  const result = [];

  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim();
    const optB = optsText.slice(bIdx + 2, cIdx).trim();
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim();
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2).trim() : '';

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];
    if (optD) rawOpts.push({ id: 'D', texto: optD });

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter);
    if (!balanced) continue;

    result.push({
      id: `mat_cud_${qNum}`,
      nivel: "Profesional",
      ejeId: "integridad",
      ejeNombre: "Valores de Integridad y CGD",
      tipo: "Integridad (10%)",
      tema: "Régimen Disciplinario, Faltas, Sanciones y Deberes Funcionales (Ley 1952 de 2019 / Ley 734)",
      caso: "En la evaluación del régimen disciplinario aplicable a los servidores públicos de la DIAN y el cumplimiento de los principios de la función administrativa:",
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: explanations[qNum] || "Criterio de legalidad disciplinaria según el Código General Disciplinario.",
      norma: "Ley 1952 de 2019 (Código General Disciplinario)",
      citaNormativa: explanations[qNum] ? ("Ley 1952 de 2019 / Ley 734: " + explanations[qNum]) : "Ley 1952 de 2019, deberes, prohibiciones e inhabilidades del servidor público.",
      dificultad: "ALTA",
      competencia: "Comportamiento Ético y Régimen Disciplinario"
    });
  }

  return result;
}

// 9. COMPORTAMENTALES NIVEL PROFESIONAL (Decreto 815 de 2018)
async function extractComportamentales(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/PRUEBAS-COMPORTAMENTALES-.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/COMPORTAMENTALES/gi, '');

  const qBlocks = text.split(/(?=\n\s*\d+\s*[\.\)]\s*)/);
  const result = [];

  for (const block of qBlocks) {
    const numMatch = block.match(/^\s*(\d+)\s*[\.\)]\s*([\s\S]*)/);
    if (!numMatch) continue;
    const qNum = parseInt(numMatch[1]);
    const content = numMatch[2];

    const ansMatch = content.match(/Respuesta[\.\s]*\n?\s*([A-C])[\.\)]/i);
    if (!ansMatch) continue;
    const correctLetter = ansMatch[1].toUpperCase();

    const explMatch = content.match(/Explicaci[oó]n:\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|PRUEBAS|$))/i);
    const expl = explMatch ? explMatch[1].replace(/\s+/g, ' ').trim() : "Evaluación de competencias laborales según Decreto 815 de 2018 para nivel profesional.";

    const beforeAns = content.slice(0, ansMatch.index);
    const aIdx = beforeAns.search(/(?:^|\n)\s*A[\.\)]\s*/);
    const bIdx = beforeAns.search(/(?:^|\n)\s*B[\.\)]\s*/);
    const cIdx = beforeAns.search(/(?:^|\n)\s*C[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const enunciado = beforeAns.slice(0, aIdx).replace(/\s+/g, ' ').trim();
    const optA = beforeAns.slice(aIdx, bIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();
    const optB = beforeAns.slice(bIdx, cIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();
    const optC = beforeAns.slice(cIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, correctLetter, targetLetter, expl);
    if (!balanced) continue;

    result.push({
      id: `mat_comp_${qNum}`,
      nivel: "Profesional",
      ejeId: "comportamentales",
      ejeNombre: "Competencias Comportamentales Gestor III",
      tipo: "Comportamental (15%)",
      tema: "Competencias Laborales Nivel Profesional (Decreto 815 de 2018): Aporte Técnico, Gestión de Procedimientos y Solución de Problemas",
      caso: "Usted se desempeña en el nivel profesional (Gestor III) en una dependencia de la DIAN y enfrenta el siguiente desafío organizacional y de toma de decisiones situacionales:",
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: expl,
      norma: "Decreto 815 de 2018 y Decreto 1083 de 2015",
      citaNormativa: "Decreto 815 de 2018: Competencias comportamentales comunes y por nivel jerárquico profesional en la administración pública.",
      dificultad: "ALTA",
      competencia: "Competencias Comportamentales Nivel Profesional CNSC"
    });
  }

  return result;
}

// 10. INTEGRIDAD CON CASOS (Valores Aerocivil / Función Pública)
async function extractIntegridad(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/PRUEBA-DE-INTEGRIDAD-AEROCIVIL.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/PRUEBA DE INTEGRIDAD AEROCIVIL[\s\S]*?derechos reservados/gi, '');
  text = text.replace(/W\s*W\s*W\s*\.\s*C\s*O\s*N\s*C\s*U\s*R\s*S\s*A\s*C\s*O\s*N\s*E\s*X\s*I\s*T\s*O\s*\.\s*C\s*O\s*M[\s\S]*?derechos reservados/gi, '');

  const cases = {
    1: 'Al interior de la entidad, usted siempre ha buscado tener un ascenso para coordinar un grupo de trabajo. Este sueño está a punto de cumplirse, pero usted acude al doctor por una serie de dolores, encontrando que posee una enfermedad bastante grave, razón por la cual se le prohíbe tener cargos de alto estrés o responsabilidades mayores.',
    2: 'Al interior de la entidad, usted siempre ha buscado tener un ascenso para coordinar un grupo de trabajo. Este sueño está a punto de cumplirse, pero usted acude al doctor por una serie de dolores, encontrando que posee una enfermedad bastante grave, razón por la cual se le prohíbe tener cargos de alto estrés o responsabilidades mayores.',
    3: 'Usted ha pasado todos los filtros y pruebas para el concurso de méritos y ha quedado en lista de elegibles; sin embargo, la entidad ha realizado una solicitud de exclusión, teniendo en cuenta que usted no ha aportado un documento necesario para poder tomar posesión, teniendo solo 15 días hábiles para responder.',
    4: 'Usted ha pasado todos los filtros y pruebas para el concurso de méritos y ha quedado en lista de elegibles; sin embargo, la entidad ha realizado una solicitud de exclusión, teniendo en cuenta que usted no ha aportado un documento necesario para poder tomar posesión, teniendo solo 15 días hábiles para responder.',
    5: 'Usted tiene 3 hijos pequeños por los que debe responder y por cuestiones de la vida hace las funciones de padre y madre. En su oficina se está tomando la decisión sobre quién debe trabajar el 24 y 31 de diciembre en turnos de disponibilidad, pero usted no tiene quién cuide a sus hijos esos días festivos.',
    6: 'Usted tiene 3 hijos pequeños por los que debe responder y por cuestiones de la vida hace las funciones de padre y madre. En su oficina se está tomando la decisión sobre quién debe trabajar el 24 y 31 de diciembre en turnos de disponibilidad, pero usted no tiene quién cuide a sus hijos esos días festivos.',
    7: 'Antes de salir de la oficina a descansar el fin de semana, usted se olvida de apagar el equipo de trabajo, dejando el sistema abierto con sus claves y credenciales institucionales. El día lunes, al llegar a su puesto de trabajo, usted verifica y efectivamente alguien ha accedido al sistema.',
    8: 'La entidad tiene un concurso interno que busca la recopilación de ideas de todos los funcionarios, con el fin de mejorar el uso adecuado de los implementos de oficina con miras a la preservación ambiental. Este concurso tiene un premio de reconocimiento muy importante.',
    9: 'La entidad tiene un concurso interno que busca la recopilación de ideas de todos los funcionarios, con el fin de mejorar el uso adecuado de los implementos de oficina con miras a la preservación ambiental. Este concurso tiene un premio de reconocimiento muy importante.',
    10: 'Usted como líder de grupo en la entidad pública, recibe constantemente relatos de algunos funcionarios que se quejan de otros compañeros de trabajo por supuestos favoritismos o demoras.',
    11: 'Usted debe dar apoyo técnico y de convivencia para dirimir un conflicto interpersonal que involucra a dos compañeros de trabajo, originado por marcadas diferencias en cuanto a creencias religiosas y convicciones personales.',
    12: 'En el ejercicio de sus funciones al interior de la entidad, usted se entera formalmente de un proceso de inspección, control y fiscalización que se adelantará en contra de un familiar de una amiga cercana suya.',
    13: 'Un compañero de oficina le pide el favor de prestarle 10 minutos su computador de trabajo institucional, teniendo en cuenta que debe terminar un informe urgente que debe ser enviado para revisión directiva.',
    14: 'La entidad ha realizado una actualización integral al panel de control de los sistemas informáticos electrónicos, adicionando un nuevo servicio y módulos de reporte en el menú de usuarios.',
    15: 'Usted debe imprimir ciertos documentos extensos de carácter estrictamente personal; sin embargo, en su hogar no cuenta con una impresora láser, mientras que en su puesto de trabajo en la entidad se dispone de equipos e insumos de oficina.',
    16: 'Se ha solicitado a la oficina de comunicaciones varios afiches con los requisitos necesarios para la prestación de un servicio ágil y de calidad a los ciudadanos. La oficina manifiesta que tardará un mes en entregarlos, pero se requieren con urgencia para una jornada de atención.',
    17: 'Varios compañeros de trabajo están tramitando el retiro de sus cesantías y contactaron a una persona externa que les suministra contratos de obra falsos para aparentar remodelación de vivienda y acceder a los fondos rápidamente. Usted tiene una necesidad económica urgente.',
    18: 'En el trámite y radicación realizado a un ciudadano usuario, usted ha cometido un error involuntario en el sistema que genera que el ciudadano deba esperar varias horas adicionales para que se le brinde una solución definitiva.',
    19: 'En el proceso de orientación presencial a un ciudadano en ventanilla, usted no posee todo el conocimiento especializado sobre el trámite consultado; acude a sus compañeros de módulo pero ninguno se muestra dispuesto a colaborar.',
    20: 'Varios compañeros de dependencia han manifestado que últimamente su carácter y forma de comunicación han generado tensión y han contribuido a un clima laboral adverso al interior del equipo de trabajo.'
  };

  const result = [];
  for (let i = 1; i <= 20; i++) {
    const startStr = `${i}.`;
    const nextStr = (i < 20) ? `${i + 1}.` : 'HOJA DE RESPUESTAS';
    const sIdx = text.indexOf(startStr);
    const eIdx = (i < 20) ? text.indexOf(nextStr, sIdx) : text.length;
    if (sIdx === -1) continue;

    const block = text.slice(sIdx, eIdx).trim();
    const respMatch = block.match(/RESPUESTA[\s\S]*?([A-C])\s*[:\.]\s*3/i);
    if (!respMatch) continue;
    const correctLetter = respMatch[1].toUpperCase();

    const aIdx = block.search(/(?:^|\n)\s*A[\.\)]\s*/);
    const bIdx = block.search(/(?:^|\n)\s*B[\.\)]\s*/);
    const cIdx = block.search(/(?:^|\n)\s*C[\.\)]\s*/);
    const respIdx = block.search(/RESPUESTA/i);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1 || respIdx === -1) continue;

    let enunciado = block.slice(block.indexOf('.') + 1, aIdx)
      .replace(/PRUEBA DE INTEGRIDAD[\s\S]*?com/gi, '')
      .replace(/W\s*W\s*W[\s\S]*?com/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (enunciado.length < 5) {
      enunciado = "Frente a esta situación planteada, la conducta ética que debe adoptar el servidor es:";
    }

    const optA = block.slice(aIdx, bIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();
    const optB = block.slice(bIdx, cIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();
    const optC = block.slice(cIdx, respIdx).replace(/^[A-Z][\.\)]\s*/, '').trim();

    const explText = block.slice(respIdx).replace(/RESPUESTA[\s\S]*?[A-C]\s*:\s*[1-3]/gi, '').replace(/\s+/g, ' ').trim();

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, correctLetter, targetLetter, explText);
    if (!balanced) continue;

    result.push({
      id: `mat_integ_${i}`,
      nivel: "Profesional",
      ejeId: "integridad",
      ejeNombre: "Valores de Integridad y CGD",
      tipo: "Integridad (10%)",
      tema: "Código de Integridad del Servidor Público (Honestidad, Respeto, Compromiso, Diligencia, Justicia)",
      caso: cases[i],
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: explText || "Conducta que demuestra máximo apego a los principios y valores de integridad del servidor público.",
      norma: "Código de Integridad del Servidor Público (Función Pública) y Código de Ética DIAN",
      citaNormativa: "Código de Integridad del Servicio Público: Valores de Honestidad, Respeto, Compromiso, Diligencia y Justicia.",
      dificultad: "ALTA",
      competencia: "Juicio Moral, Conducta Ética y Transparencia Pública"
    });
  }

  return result;
}

// 11. REGALO PRUEBAS SITUACIONALES (Casos de retención, contratación, peticiones)
async function extractRegaloSituacionales(cycle) {
  let text = await getPdfText('material/05_Simulacros_y_Bancos_de_Preguntas/Pruebas_Situacionales_CNSC/MATERIAL-DE-REGALO-PRUEBAS-SITUACIONALES.pdf');
  text = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '');
  text = text.replace(/MATERIAL DE REGALO PRUEBAS SITUACIONALES/gi, '');

  const ansIdx = text.search(/1\.\s*[A-E]\./i);
  const bodyText = text.slice(0, ansIdx);
  const ansText = text.slice(ansIdx);

  const answers = {};
  const explanations = {};
  const ansBlocks = ansText.split(/(?=\n\s*\d+\s*[\.\)])/);
  ansBlocks.forEach(b => {
    const m = b.match(/^\s*(\d+)\s*[\.\)]\s*([A-E])\.\s*([\s\S]*)/i);
    if (m) {
      const qNum = parseInt(m[1]);
      answers[qNum] = m[2].toUpperCase();
      explanations[qNum] = m[3].replace(/\s+/g, ' ').trim();
    }
  });

  const cases = {
    1: "Un grupo de ciudadanos ha radicado un derecho de petición para consultar ciertas presuntas irregularidades en el desarrollo de la construcción de escenarios deportivos, cuyo tiempo de entrega se ha demorado más de tres años de lo previsto en el cronograma inicial.",
    2: "Juan Pérez es un agente retenedor de los impuestos administrados por la entidad pública, pero al momento de cumplir con su obligación formal de presentar su declaración tributaria, no lo hace dentro de los plazos legales por descuido de su asesor contable.",
    3: "Juan Pérez es un agente retenedor de los impuestos administrados por la entidad pública, pero al momento de cumplir con su obligación formal de presentar su declaración tributaria, no lo hace dentro de los plazos legales por descuido de su asesor contable.",
    4: "Una entidad pública gubernamental adelanta el reconocimiento de las poblaciones que por sus características particulares, en razón de su edad, género, orientación sexual, grupo étnico y situación de discapacidad, deben recibir un tratamiento especial en materia de atención y protección integral.",
    5: "Una entidad pública gubernamental adelanta el reconocimiento de las poblaciones que por sus características particulares, en razón de su edad, género, orientación sexual, grupo étnico y situación de discapacidad, deben recibir un tratamiento especial en materia de atención y protección integral.",
    6: "Juan Pérez es el encargado de los procedimientos de contratación al interior de la entidad pública. En su trabajo, él aplica los principios de economía, transparencia y selección objetiva contenidos en la Ley 80 de 1993. Ante una situación imprevista que compromete la continuidad del servicio, existe urgencia manifiesta y decide tramitar un contrato justificando formalmente el procedimiento.",
    7: "Juan Pérez es el encargado de los procedimientos de contratación al interior de la entidad pública. En su trabajo, él aplica los principios de economía, transparencia y selección objetiva contenidos en la Ley 80 de 1993. Ante una situación imprevista que compromete la continuidad del servicio, existe urgencia manifiesta y decide tramitar un contrato justificando formalmente el procedimiento.",
    8: "Juan Pérez es el encargado de los procedimientos de contratación al interior de la entidad pública. En su trabajo, él aplica los principios de economía, transparencia y selección objetiva contenidos en la Ley 80 de 1993. Ante una situación imprevista que compromete la continuidad del servicio, existe urgencia manifiesta y decide tramitar un contrato justificando formalmente el procedimiento.",
    9: "Juan Pérez es el encargado de los procedimientos de contratación al interior de la entidad pública. En su trabajo, él aplica los principios de economía, transparencia y selección objetiva contenidos en la Ley 80 de 1993. Ante una situación imprevista que compromete la continuidad del servicio, existe urgencia manifiesta y decide tramitar un contrato justificando formalmente el procedimiento.",
    10: "Juan Pérez es el encargado de los procedimientos de contratación al interior de la entidad pública. En su trabajo, él aplica los principios de economía, transparencia y selección objetiva contenidos en la Ley 80 de 1993. Ante una situación imprevista que compromete la continuidad del servicio, existe urgencia manifiesta y decide tramitar un contrato justificando formalmente el procedimiento."
  };

  const ejes = {
    1: { ejeId: "servicio", ejeNombre: "Derecho de Petición y Atención al Ciudadano", tema: "Mecanismos de Participación Ciudadana y Control Social", norma: "Ley 1757 de 2015 y Ley 1755 de 2015" },
    2: { ejeId: "tributario", ejeNombre: "Procedimiento Tributario y Fiscalización", tema: "Determinación Oficial del Tributo y Emplazamiento para Declarar", norma: "Estatuto Tributario, Art. 715" },
    3: { ejeId: "tributario", ejeNombre: "Procedimiento Tributario y Fiscalización", tema: "Sanciones Tributarias y Liquidación de Extemporaneidad", norma: "Estatuto Tributario, Arts. 641 y 642" },
    4: { ejeId: "servicio", ejeNombre: "Derecho de Petición y Atención al Ciudadano", tema: "Enfoque Diferencial y Poblaciones de Especial Protección", norma: "Constitución Política Art. 13 y Ley 1448 de 2011" },
    5: { ejeId: "servicio", ejeNombre: "Derecho de Petición y Atención al Ciudadano", tema: "Criterios de Focalización y Enfoque Diferencial", norma: "Constitución Política Art. 13" },
    6: { ejeId: "contratacion", ejeNombre: "Contratación Estatal y Convenios", tema: "Principios de la Contratación Estatal y Responsabilidad", norma: "Ley 80 de 1993, Arts. 26 y 42" },
    7: { ejeId: "contratacion", ejeNombre: "Contratación Estatal y Convenios", tema: "Modalidades de Selección: Contratación Directa por Urgencia Manifiesta", norma: "Ley 80 de 1993 y Ley 1150 de 2007" },
    8: { ejeId: "contratacion", ejeNombre: "Contratación Estatal y Convenios", tema: "Actos Administrativos que Justifican la Contratación", norma: "Decreto 1082 de 2015" },
    9: { ejeId: "contratacion", ejeNombre: "Contratación Estatal y Convenios", tema: "Requisitos del Acto Administrativo de Urgencia Manifiesta", norma: "Decreto 1082 de 2015, Art. 2.2.1.2.1.4.1" },
    10: { ejeId: "contratacion", ejeNombre: "Contratación Estatal y Convenios", tema: "Publicidad y Transparencia Contractual en Plataforma SECOP", norma: "Ley 1712 de 2014 y Decreto 1082 de 2015" }
  };

  const qMatches = [...bodyText.matchAll(/(?:^|\n)\s*(\d+)\s*[\.\)]\s*([\s\S]*?)(?=(?:\n\s*\d+\s*[\.\)]|RESPUESTAS|$))/g)];
  const result = [];

  for (const qm of qMatches) {
    const qNum = parseInt(qm[1]);
    if (!answers[qNum]) continue;
    const qContent = qm[2].trim();

    const optAMatch = qContent.search(/(?:^|\n)\s*A[\.\)]\s*/);
    if (optAMatch === -1) continue;

    const enunciado = qContent.slice(0, optAMatch).replace(/\s+/g, ' ').trim();
    const optsText = qContent.slice(optAMatch);

    const aIdx = optsText.search(/A[\.\)]\s*/);
    const bIdx = optsText.search(/B[\.\)]\s*/);
    const cIdx = optsText.search(/C[\.\)]\s*/);
    const dIdx = optsText.search(/D[\.\)]\s*/);
    const eIdx = optsText.search(/E[\.\)]\s*/);

    if (aIdx === -1 || bIdx === -1 || cIdx === -1) continue;

    const optA = optsText.slice(aIdx + 2, bIdx).trim();
    const optB = optsText.slice(bIdx + 2, cIdx).trim();
    const optC = optsText.slice(cIdx + 2, (dIdx !== -1 ? dIdx : optsText.length)).trim();
    const optD = (dIdx !== -1) ? optsText.slice(dIdx + 2, (eIdx !== -1 ? eIdx : optsText.length)).trim() : '';
    const optE = (eIdx !== -1) ? optsText.slice(eIdx + 2).trim() : '';

    const rawOpts = [
      { id: 'A', texto: optA },
      { id: 'B', texto: optB },
      { id: 'C', texto: optC }
    ];
    if (optD) rawOpts.push({ id: 'D', texto: optD });
    if (optE) rawOpts.push({ id: 'E', texto: optE });

    const targetLetter = cycle.next();
    const balanced = normalizeToThreeOptions(rawOpts, answers[qNum], targetLetter, explanations[qNum]);
    if (!balanced) continue;

    const meta = ejes[qNum] || { ejeId: "servicio", ejeNombre: "Derecho de Petición y Atención al Ciudadano", tema: "Gestión Administrativa Pública", norma: "CPACA" };

    result.push({
      id: `mat_regalo_sit_${qNum}`,
      nivel: "Profesional",
      ejeId: meta.ejeId,
      ejeNombre: meta.ejeNombre,
      tipo: "Funcional (Eliminatorio - 65%)",
      tema: meta.tema,
      caso: cases[qNum],
      enunciado: enunciado,
      opciones: balanced,
      respuestaCorrecta: targetLetter,
      justificacion: explanations[qNum] || "Criterio normativo oficial conforme a la legislación vigente.",
      norma: meta.norma,
      citaNormativa: explanations[qNum] || meta.norma,
      dificultad: "ALTA",
      competencia: "Juicio Situacional en la Gestión Pública"
    });
  }

  return result;
}

// Rebalance and clean existing questions from original files
function rebalanceExistingQuestion(q, targetLetter) {
  const correctOpt = q.opciones.find(o => o.id === q.respuestaCorrecta);
  const distractors = q.opciones.filter(o => o.id !== q.respuestaCorrecta);

  if (!correctOpt || distractors.length < 2) return null;

  let cText = cleanOptionText(correctOpt.texto);
  let d1Text = cleanOptionText(distractors[0].texto);
  let d2Text = cleanOptionText(distractors[1].texto);

  // Fix known caricature distractors to professional plausible alternatives
  const distractorRepairs = [
    { match: /soborno|dádiva.*500\.000/i, replacement: "Entregar copias no autenticadas de las declaraciones al ciudadano argumentando el principio de publicidad y transparencia administrativa." },
    { match: /curiosidad comunitaria/i, replacement: "Suministrar la información solicitada sin verificar la legitimación en la causa, considerando que prima el derecho de acceso a documentos públicos." },
    { match: /adjudicar.*whatsapp.*amigo/i, replacement: "Declarar la urgencia manifiesta sin acto administrativo motivado y contratar directamente sin verificar la capacidad técnica ni la idoneidad del proveedor." },
    { match: /amenazar.*24 horas continuas sin dormir/i, replacement: "Delegar la totalidad de los expedientes atrasados en los analistas recién vinculados sin realizar redistribución de cargas ni acompañamiento metodológico." },
    { match: /destrucción de los convenios con la polfa/i, replacement: "Suspender los operativos conjuntos con la POLFA y remitir el caso exclusivamente al archivo pasivo por falta de pruebas concluyentes en la etapa preliminar." },
    { match: /destruir los soportes.*cada 30 días/i, replacement: "Exonerar de la obligación de conservación documental a las operaciones cambiarias cuyo valor sea inferior a diez mil dólares de los Estados Unidos de América." },
    { match: /amenazar al equipo con calificaciones deficientes.*200%/i, replacement: "Exigir horas extras obligatorias sin compensación y suspender las capacitaciones programadas para dedicarse exclusivamente a la atención de ventanilla." },
    { match: /acatar sumisamente la orden verbal e imponer la sanción arbitraria/i, replacement: "Aplicar la sanción recomendada por el superior invocando el principio de jerarquía administrativa, dejando constancia de su discrepancia personal en un memorando interno." },
    { match: /recomendar verbalmente.*pagar una cifra aproximada/i, replacement: "Remitir el expediente a la ventanilla de radicación sin proyectar el pliego de cargos, solicitando al contribuyente que subsane motu proprio las inconsistencias." },
    { match: /archivar el expediente sin auto ni justificación/i, replacement: "Suspender provisionalmente el trámite del expediente hasta que el contribuyente allegue explicaciones voluntarias, sin expedir auto de trámite que interrumpa términos." },
    { match: /correo electrónico informal cada fin de mes/i, replacement: "Permitir las modificaciones directas en base de datos siempre que se cuente con la autorización verbal del jefe de soporte informático." },
    { match: /responder con igual agresividad y amenazar con denunciar/i, replacement: "Interrumpir la reunión y retirarse de las instalaciones sin emitir el informe de auditoría preliminar ni levantar acta de lo sucedido." },
    { match: /hacerse el de la vista gorda/i, replacement: "Omitir el reporte inmediato bajo el argumento de que el control de permanencia corresponde exclusivamente al área de talento humano y no a los pares profesionales." }
  ];

  distractorRepairs.forEach(r => {
    if (r.match.test(d1Text)) d1Text = r.replacement;
    if (r.match.test(d2Text)) d2Text = r.replacement;
    if (r.match.test(cText)) cText = r.replacement;
  });

  let arranged = [];
  if (targetLetter === 'A') {
    arranged = [
      { id: 'A', texto: cText, explicacion: correctOpt.explicacion },
      { id: 'B', texto: d1Text, explicacion: distractors[0].explicacion },
      { id: 'C', texto: d2Text, explicacion: distractors[1].explicacion }
    ];
  } else if (targetLetter === 'B') {
    arranged = [
      { id: 'A', texto: d1Text, explicacion: distractors[0].explicacion },
      { id: 'B', texto: cText, explicacion: correctOpt.explicacion },
      { id: 'C', texto: d2Text, explicacion: distractors[1].explicacion }
    ];
  } else {
    arranged = [
      { id: 'A', texto: d1Text, explicacion: distractors[0].explicacion },
      { id: 'B', texto: d2Text, explicacion: distractors[1].explicacion },
      { id: 'C', texto: cText, explicacion: correctOpt.explicacion }
    ];
  }

  return {
    ...q,
    opciones: arranged,
    respuestaCorrecta: targetLetter
  };
}

async function buildMasterBanks() {
  console.log("=== INICIANDO EXTRACCIÓN Y REESTRUCTURACIÓN DEL BANCO DE PREGUNTAS ===");
  const cycleGestor = new Cycle();

  // 1. Extraer cuestionarios auténticos del material
  console.log("-> Extrayendo Simulacro Aduanas...");
  const aduanas = await extractAduanas(cycleGestor);
  console.log(`   Extraídas ${aduanas.length} preguntas de Aduanas.`);

  console.log("-> Extrayendo Simulacro Régimen Cambiario...");
  const cambiario = await extractCambiario(cycleGestor);
  console.log(`   Extraídas ${cambiario.length} preguntas de Cambiario.`);

  console.log("-> Extrayendo Cuestionario 1 (100 Cosas DIAN)...");
  const c1 = await extractC1(cycleGestor);
  console.log(`   Extraídas ${c1.length} preguntas de Cuestionario 1.`);

  console.log("-> Extrayendo Cuestionario 2 (Procedimiento y Fiscalización)...");
  const c2 = await extractC2(cycleGestor);
  console.log(`   Extraídas ${c2.length} preguntas de Cuestionario 2.`);

  console.log("-> Extrayendo Cuestionario 3 (Conceptos Generales Tributarios)...");
  const c3 = await extractC3(cycleGestor);
  console.log(`   Extraídas ${c3.length} preguntas de Cuestionario 3.`);

  console.log("-> Extrayendo Cuestionario 4 (Derecho de Petición y Función Pública)...");
  const c4 = await extractC4(cycleGestor);
  console.log(`   Extraídas ${c4.length} preguntas de Cuestionario 4.`);

  console.log("-> Extrayendo Cuestionario Código General del Proceso (Cobro Coactivo)...");
  const cgp = await extractCGP(cycleGestor);
  console.log(`   Extraídas ${cgp.length} preguntas de CGP.`);

  console.log("-> Extrayendo Cuestionario Código Único Disciplinario (Integridad)...");
  const cud = await extractCUD(cycleGestor);
  console.log(`   Extraídas ${cud.length} preguntas de CUD.`);

  console.log("-> Extrayendo Pruebas Comportamentales Nivel Profesional (Decreto 815)...");
  const comp = await extractComportamentales(cycleGestor);
  console.log(`   Extraídas ${comp.length} preguntas Comportamentales.`);

  console.log("-> Extrayendo Pruebas de Integridad Aerocivil (Casos Situacionales)...");
  const integ = await extractIntegridad(cycleGestor);
  console.log(`   Extraídas ${integ.length} preguntas de Integridad.`);

  console.log("-> Extrayendo Material de Regalo Pruebas Situacionales...");
  const regaloSit = await extractRegaloSituacionales(cycleGestor);
  console.log(`   Extraídas ${regaloSit.length} preguntas de Pruebas Situacionales.`);

  const newAuthenticQuestions = [
    ...aduanas,
    ...cambiario,
    ...c1,
    ...c2,
    ...c3,
    ...c4,
    ...cgp,
    ...cud,
    ...comp,
    ...integ,
    ...regaloSit
  ];
  console.log(`\nTOTAL PREGUNTAS AUTÉNTICAS EXTRAÍDAS DEL MATERIAL: ${newAuthenticQuestions.length}`);

  // 2. Limpiar, des-caricaturizar y rebalancear preguntas existentes de questions_gestor_iii.js
  console.log("\n-> Procesando y rebalanceando preguntas existentes en questions_gestor_iii.js...");
  const existingGestor = require('../questions_gestor_iii.js').QUESTION_BANK_GESTOR.filter(q => !q.id.startsWith('mat_'));
  const rebalancedExistingGestor = existingGestor.map(q => {
    const targetLetter = cycleGestor.next();
    return rebalanceExistingQuestion(q, targetLetter);
  }).filter(Boolean);

  const fullGestorBank = [
    ...newAuthenticQuestions,
    ...rebalancedExistingGestor
  ];

  console.log(`TOTAL BANCO GESTOR III FINAL: ${fullGestorBank.length} preguntas`);
  const gestorDist = { A: 0, B: 0, C: 0 };
  fullGestorBank.forEach(q => gestorDist[q.respuestaCorrecta] = (gestorDist[q.respuestaCorrecta] || 0) + 1);
  console.log("Distribución de Claves Gestor III:", gestorDist);

  // 3. Escribir questions_gestor_iii.js
  const gestorJsContent = `// questions_gestor_iii.js - Banco Maestro de Casos de Juicio Situacional (PJS) para GESTOR III - DIAN 2676
// Alineado con el Manual de Funciones FT-TAH-1824 y los Ejes Oficiales de la Convocatoria CNSC (OPEC 242703)
// Total Casos y Preguntas: ${fullGestorBank.length}
// Incluye cuestionarios auténticos del material DIAN/CNSC (Aduanas, Cambiario, Procedimiento Tributario, CGP, CUD, Comportamentales e Integridad).
// Claves 100% balanceadas en proporción equitativa (A: ${gestorDist.A}, B: ${gestorDist.B}, C: ${gestorDist.C}).
// Opciones depuradas sin spoilers normativos entre paréntesis ni distractores obvios.

const QUESTION_BANK_GESTOR = ${JSON.stringify(fullGestorBank, null, 2)};

if (typeof window !== "undefined") {
  window.QUESTION_BANK_GESTOR = QUESTION_BANK_GESTOR;
}
if (typeof global !== "undefined") {
  global.QUESTION_BANK_GESTOR = QUESTION_BANK_GESTOR;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_GESTOR };
}
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'questions_gestor_iii.js'), gestorJsContent, 'utf8');
  console.log("-> questions_gestor_iii.js actualizado exitosamente.");

  // 4. Limpiar y rebalancear questions_gestor_iii_ci.js
  console.log("\n-> Procesando y rebalanceando questions_gestor_iii_ci.js...");
  const cycleCI = new Cycle();
  const existingCI = require('../questions_gestor_iii_ci.js').QUESTION_BANK_GESTOR_CI;
  const rebalancedCI = existingCI.map(q => {
    const targetLetter = cycleCI.next();
    return rebalanceExistingQuestion(q, targetLetter);
  }).filter(Boolean);

  const ciDist = { A: 0, B: 0, C: 0 };
  rebalancedCI.forEach(q => ciDist[q.respuestaCorrecta] = (ciDist[q.respuestaCorrecta] || 0) + 1);
  console.log(`TOTAL BANCO CONTROL INTERNO: ${rebalancedCI.length} preguntas`);
  console.log("Distribución de Claves Control Interno:", ciDist);

  const ciJsContent = `// questions_gestor_iii_ci.js - Banco Maestro de Casos de Juicio Situacional (PJS)
// GESTOR III - Control Interno (Convocatoria DIAN 2676 - OPEC 236872 - Ficha PC-CI-3006)
// Total Casos: ${rebalancedCI.length}
// Cubre el 100% de los Indicadores a Evaluar oficiales de la CNSC/SIMO:
// Control Interno MECI, MIPG en Auditoría, Normas Internacionales de Auditoría (NIA/IIA),
// Metodologías de Auditorías de Sistemas TI, Gestión del Riesgo, Fiscalidad Internacional TACI,
// Principios de Contabilidad Pública (CGN), Conceptos de Contratación Estatal, Estructura y Misionalidad DIAN,
// Razonamiento Analítico, Competencias Comportamentales Profesionales (Niveles 1, 3 y 4) y Valores de Integridad.
// Claves 100% balanceadas en proporción equitativa (A: ${ciDist.A}, B: ${ciDist.B}, C: ${ciDist.C}).

const QUESTION_BANK_GESTOR_CI = ${JSON.stringify(rebalancedCI, null, 2)};

if (typeof window !== "undefined") {
  window.QUESTION_BANK_GESTOR_CI = QUESTION_BANK_GESTOR_CI;
}
if (typeof global !== "undefined") {
  global.QUESTION_BANK_GESTOR_CI = QUESTION_BANK_GESTOR_CI;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK_GESTOR_CI };
}
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'questions_gestor_iii_ci.js'), ciJsContent, 'utf8');
  console.log("-> questions_gestor_iii_ci.js actualizado exitosamente.");
}

buildMasterBanks().catch(err => {
  console.error("Error construyendo bancos:", err);
  process.exit(1);
});
