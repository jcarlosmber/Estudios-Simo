// image_catalog.js - Catálogo Curado de Imágenes CDN (Unsplash / Wikimedia) para SIMO Prep (DIAN 2676)
// Fotografías HD profesionales y libres de derechos optimizadas para visualización rápida

const THEME_IMAGE_CATALOG = {
  // 1. Control Aduanero, Tránsito Marítimo y Contrabando Técnico
  aduanas: {
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "escena_caso_aduanero_1792160796766.jpg",
    alt: "Terminal de Contenedores y Fiscalización Aduanera",
    badge: "🚢 Régimen de Aduanas & Comercio Exterior",
    caption: "Inspección física y documental en puertos aduaneros (Decretos 1165/2019 y 659/2024)"
  },
  
  // 2. Fiscalización Tributaria, Facturación Electrónica y Beneficio de Auditoría
  fiscalizacion: {
    url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "",
    alt: "Auditoría Fiscal y Declaraciones Tributarias",
    badge: "📊 Fiscalización & Auditoría Tributaria",
    caption: "Verificación de libros, facturación electrónica y liquidaciones oficiales (Art. 689-3 E.T.)"
  },

  // 3. Cobro Coactivo, Títulos Ejecutivos y Jurisdicción Coactiva
  cobranzas: {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "",
    alt: "Procedimiento Administrativo y Jurisdicción Coactiva",
    badge: "⚖️ Procedimiento Tributario & Cobro Coactivo",
    caption: "Exigibilidad de títulos ejecutivos y debido proceso sancionatorio (CPACA & Estatuto)"
  },

  // 4. Modelo Integrado de Planeación y Gestión (MIPG) y Control Interno (MECI)
  mipg: {
    url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "infografia_mipg_dimensiones_1792160771993.jpg",
    alt: "Dimensiones del MIPG y Control Interno",
    badge: "🏛️ MIPG & 3 Líneas de Defensa",
    caption: "Planeación estratégica, gestión de riesgos institucionales y evaluación FURAG"
  },

  // 5. Integridad Pública, Conflicto de Intereses y Régimen Disciplinario
  integridad: {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "insignia_guardian_integridad_1792160821376.jpg",
    alt: "Código de Integridad y Ética en la Función Pública",
    badge: "🛡️ Integridad & Ética del Servidor Público",
    caption: "Valores del servidor DIAN: honestidad, respeto, compromiso y diligencia"
  },

  // 6. Servicio al Ciudadano, Derecho de Petición y Rendición de Cuentas
  servicio: {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "",
    alt: "Atención al Ciudadano y PQRS",
    badge: "🤝 Servicio al Ciudadano & PQRS",
    caption: "Garantía de acceso a la información pública y trámite oportuno (Ley 1755 de 2015)"
  },

  // 7. Comprensión Lectora Táctica y Juicio Situacional (CNSC / SIMO)
  lectura: {
    url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "",
    alt: "Técnicas de Comprensión Lectora para el Examen",
    badge: "🎯 Claves de Juicio Situacional & Lectura",
    caption: "Análisis de premisas fácticas, detección de distractores y regla E-P-C"
  },

  // 8. Misionalidad General de la DIAN y Constitución Política
  constitucional: {
    url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=720&h=240&q=80",
    fallbackUrl: "",
    alt: "Constitución Política y Marco Institucional",
    badge: "🇨🇴 Misionalidad DIAN & Marco Legal",
    caption: "Seguridad fiscal del Estado y facilitación del comercio legítimo (Decreto 1742/2020)"
  }
};

/**
 * Obtiene la imagen curada más afín para una pregunta o tip a partir de su texto
 * @param {Object} item - Objeto de pregunta o tip
 * @returns {Object} Objeto con url, alt, badge y caption
 */
function getImageForContext(item) {
  if (!item) return THEME_IMAGE_CATALOG.constitucional;

  const textToScan = [
    item.ejeId || "",
    item.ejeNombre || "",
    item.tema || "",
    item.categoria || "",
    item.caso || "",
    item.titulo || "",
    item.enunciado || ""
  ].join(" ").toLowerCase();

  // 1. Aduanas / Comercio Exterior
  if (
    textToScan.includes("aduan") ||
    textToScan.includes("arancel") ||
    textToScan.includes("contrabando") ||
    textToScan.includes("importa") ||
    textToScan.includes("decomiso") ||
    textToScan.includes("levante") ||
    textToScan.includes("aprehens") ||
    textToScan.includes("mercanc") ||
    textToScan.includes("1165") ||
    textToScan.includes("659")
  ) {
    return THEME_IMAGE_CATALOG.aduanas;
  }

  // 2. Fiscalización / Impuestos / Facturación Electrónica / Beneficio Auditoría
  if (
    textToScan.includes("fiscaliz") ||
    textToScan.includes("tributar") ||
    textToScan.includes("factura electr") ||
    textToScan.includes("auditor") ||
    textToScan.includes("exógena") ||
    textToScan.includes("recaudo") ||
    textToScan.includes("iva") ||
    textToScan.includes("renta") ||
    textToScan.includes("689-3") ||
    textToScan.includes("657")
  ) {
    return THEME_IMAGE_CATALOG.fiscalizacion;
  }

  // 3. Cobranzas / Cobro Coactivo / Título Ejecutivo
  if (
    textToScan.includes("cobranza") ||
    textToScan.includes("cobro coactivo") ||
    textToScan.includes("título ejecutivo") ||
    textToScan.includes("embargo") ||
    textToScan.includes("prescrip")
  ) {
    return THEME_IMAGE_CATALOG.cobranzas;
  }

  // 4. MIPG / Control Interno / MECI / 3 Líneas
  if (
    textToScan.includes("mipg") ||
    textToScan.includes("meci") ||
    textToScan.includes("control interno") ||
    textToScan.includes("líneas de defensa") ||
    textToScan.includes("planeación") ||
    textToScan.includes("furag") ||
    textToScan.includes("1499")
  ) {
    return THEME_IMAGE_CATALOG.mipg;
  }

  // 5. Integridad / Ética / Disciplinario / Conflicto de Interés
  if (
    textToScan.includes("integridad") ||
    textToScan.includes("ética") ||
    textToScan.includes("conflicto de inter") ||
    textToScan.includes("disciplinar") ||
    textToScan.includes("impedimento") ||
    textToScan.includes("corrupción") ||
    textToScan.includes("1952")
  ) {
    return THEME_IMAGE_CATALOG.integridad;
  }

  // 6. Servicio al Ciudadano / PQRS / Petición
  if (
    textToScan.includes("atención al ciudadano") ||
    textToScan.includes("servicio al ciudadano") ||
    textToScan.includes("petición") ||
    textToScan.includes("pqrs") ||
    textToScan.includes("1755") ||
    textToScan.includes("1437") ||
    textToScan.includes("silencio administrativo")
  ) {
    return THEME_IMAGE_CATALOG.servicio;
  }

  // 7. Comprensión Lectora / Juicio Situacional
  if (
    textToScan.includes("lectura") ||
    textToScan.includes("comprensión") ||
    textToScan.includes("distractor") ||
    textToScan.includes("clave") ||
    textToScan.includes("mnemotec")
  ) {
    return THEME_IMAGE_CATALOG.lectura;
  }

  // Fallback por defecto
  return THEME_IMAGE_CATALOG.constitucional;
}

// Exportación compatible tanto con Service Worker (importScripts) como con navegador/Sidepanel
if (typeof module !== "undefined" && module.exports) {
  module.exports = { THEME_IMAGE_CATALOG, getImageForContext };
}
