// questions.js - Banco Maestro Multi-Perfil de Casos de Juicio Situacional (PJS) - DIAN 2676
// Integra:
// 1. GESTOR III (OPEC 242703 - Profesional): 110 Casos (Todos los ejes con mínimo 3 preguntas)
// 2. ANALISTA IV (OPEC 236760 - Técnico): 100 Casos (Los 24 indicadores evaluados con mínimo 3 preguntas)

const { QUESTION_BANK_GESTOR } = (function() {
  if (typeof window !== "undefined" && window.QUESTION_BANK_GESTOR) {
    return { QUESTION_BANK_GESTOR: window.QUESTION_BANK_GESTOR };
  }
  try {
    return require('./questions_gestor_iii.js');
  } catch (e) {
    return { QUESTION_BANK_GESTOR: [] };
  }
})();

const { QUESTION_BANK_ANALISTA } = (function() {
  if (typeof window !== "undefined" && window.QUESTION_BANK_ANALISTA) {
    return { QUESTION_BANK_ANALISTA: window.QUESTION_BANK_ANALISTA };
  }
  try {
    return require('./questions_analista_iv.js');
  } catch (e) {
    return { QUESTION_BANK_ANALISTA: [] };
  }
})();

const QUESTION_BANKS = {
  gestor_iii: QUESTION_BANK_GESTOR,
  analista_iv: QUESTION_BANK_ANALISTA
};

function getQuestionsForProfile(profileId) {
  return QUESTION_BANKS[profileId] || QUESTION_BANK_GESTOR;
}

// Compatibilidad retroactiva: QUESTION_BANK apunta por defecto al banco de Gestor III o al perfil activo en memoria
let QUESTION_BANK = QUESTION_BANK_GESTOR;

function setActiveQuestionBank(profileId) {
  const bank = getQuestionsForProfile(profileId);
  QUESTION_BANK = bank;
  if (typeof window !== "undefined") {
    window.QUESTION_BANK = bank;
  }
  return bank;
}

if (typeof window !== "undefined") {
  window.QUESTION_BANKS = QUESTION_BANKS;
  window.QUESTION_BANK_GESTOR = QUESTION_BANK_GESTOR;
  window.QUESTION_BANK_ANALISTA = QUESTION_BANK_ANALISTA;
  window.getQuestionsForProfile = getQuestionsForProfile;
  window.setActiveQuestionBank = setActiveQuestionBank;
  window.QUESTION_BANK = QUESTION_BANK;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    QUESTION_BANKS,
    QUESTION_BANK,
    QUESTION_BANK_GESTOR,
    QUESTION_BANK_ANALISTA,
    getQuestionsForProfile,
    setActiveQuestionBank
  };
}
