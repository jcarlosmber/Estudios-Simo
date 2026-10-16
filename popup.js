// popup.js - Controlador del popup
document.addEventListener("DOMContentLoaded", () => {
  const jobTitleEl = document.getElementById("popupJobTitle");
  const btnOpen = document.getElementById("btnOpenSidePanel");

  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["activeJob"], (res) => {
      if (res.activeJob && res.activeJob.title) {
        jobTitleEl.textContent = `${res.activeJob.title}`;
      } else {
        jobTitleEl.textContent = "GESTOR III (DIAN 2676)";
      }
    });
  } else {
    jobTitleEl.textContent = "GESTOR III (DIAN 2676)";
  }

  // Cargar Tip Flash aleatorio de juicio situacional
  const tipSnippetEl = document.getElementById("popupTipSnippet");
  const tipCatEl = document.getElementById("popupTipCat");
  if (typeof TIPS_PJS_DATA !== "undefined" && TIPS_PJS_DATA.length > 0) {
    const randomTip = TIPS_PJS_DATA[Math.floor(Math.random() * TIPS_PJS_DATA.length)];
    if (tipSnippetEl) tipSnippetEl.textContent = randomTip.resumenCorto;
    if (tipCatEl) tipCatEl.textContent = randomTip.categoria;
  }

  btnOpen.addEventListener("click", async () => {
    if (typeof chrome !== "undefined" && chrome.sidePanel && chrome.sidePanel.open) {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab) {
        chrome.sidePanel.open({ tabId: tab.id });
        window.close();
      }
    } else {
      window.open("sidepanel.html", "_blank");
    }
  });
});
