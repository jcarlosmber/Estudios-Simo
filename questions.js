// questions.js - Banco Maestro Multi-Perfil de Casos de Juicio Situacional (PJS) - DIAN 2676
// Integra:
// 1. GESTOR III (OPEC 242703 - Profesional): 327 Casos (Verbo Rector, Fiscalización, Cobro Coactivo, Aduanas, Zonas Francas Dec. 2147, Ofimática, Comportamentales Dec. 815, Integridad Función Pública/DIAN, Guía 2676)
// 2. ANALISTA IV (OPEC 236760 - Técnico): 317 Casos (Verbo Rector, Fiscalización, Cobro Coactivo, Aduanas, Zonas Francas Dec. 2147, Ofimática, Comportamentales Dec. 815, Integridad Función Pública/DIAN, Guía 2676)

(function(global) {
  // Obtener bancos de forma segura evitando colisiones de re-declaración const
  var gestor = null;
  if (typeof global !== "undefined" && global.QUESTION_BANK_GESTOR) {
    gestor = global.QUESTION_BANK_GESTOR;
  } else if (typeof QUESTION_BANK_GESTOR !== "undefined") {
    gestor = QUESTION_BANK_GESTOR;
  } else {
    try {
      gestor = require('./questions_gestor_iii.js').QUESTION_BANK_GESTOR;
    } catch (e) {
      gestor = [];
    }
  }

  var analista = null;
  if (typeof global !== "undefined" && global.QUESTION_BANK_ANALISTA) {
    analista = global.QUESTION_BANK_ANALISTA;
  } else if (typeof QUESTION_BANK_ANALISTA !== "undefined") {
    analista = QUESTION_BANK_ANALISTA;
  } else {
    try {
      analista = require('./questions_analista_iv.js').QUESTION_BANK_ANALISTA;
    } catch (e) {
      analista = [];
    }
  }

  var gestorCI = null;
  if (typeof global !== "undefined" && global.QUESTION_BANK_GESTOR_CI) {
    gestorCI = global.QUESTION_BANK_GESTOR_CI;
  } else if (typeof QUESTION_BANK_GESTOR_CI !== "undefined") {
    gestorCI = QUESTION_BANK_GESTOR_CI;
  } else {
    try {
      gestorCI = require('./questions_gestor_iii_ci.js').QUESTION_BANK_GESTOR_CI;
    } catch (e) {
      gestorCI = [];
    }
  }

  var questionBanks = {
    gestor_iii: gestor || [],
    gestor_iii_ci: gestorCI || [],
    gestor_iii_236872: gestorCI || [],
    "236872": gestorCI || [],
    analista_iv: analista || []
  };

  function getQuestionsForProfile(profileId) {
    return questionBanks[profileId] || questionBanks.gestor_iii_ci || questionBanks.gestor_iii;
  }

  function setActiveQuestionBank(profileId) {
    var bank = getQuestionsForProfile(profileId);
    if (typeof global !== "undefined") {
      global.QUESTION_BANK = bank;
    }
    return bank;
  }

  // Por defecto inicializar con el banco de Gestor III
  var currentBank = questionBanks.gestor_iii;

  if (typeof global !== "undefined") {
    global.QUESTION_BANKS = questionBanks;
    global.QUESTION_BANK_GESTOR = questionBanks.gestor_iii;
    global.QUESTION_BANK_GESTOR_CI = questionBanks.gestor_iii_ci;
    global.QUESTION_BANK_ANALISTA = questionBanks.analista_iv;
    global.getQuestionsForProfile = getQuestionsForProfile;
    global.setActiveQuestionBank = setActiveQuestionBank;
    global.QUESTION_BANK = currentBank;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      QUESTION_BANKS: questionBanks,
      QUESTION_BANK: currentBank,
      QUESTION_BANK_GESTOR: questionBanks.gestor_iii,
      QUESTION_BANK_GESTOR_CI: questionBanks.gestor_iii_ci,
      QUESTION_BANK_ANALISTA: questionBanks.analista_iv,
      getQuestionsForProfile: getQuestionsForProfile,
      setActiveQuestionBank: setActiveQuestionBank
    };
  }
})(typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this));
