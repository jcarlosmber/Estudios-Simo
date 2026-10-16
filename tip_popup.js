// tip_popup.js - Controlador de la ventana flotante de tips espaciados
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tipId = parseInt(urlParams.get("id"), 10);

  let tip = null;
  if (typeof TIPS_PJS_DATA !== "undefined" && TIPS_PJS_DATA.length > 0) {
    if (!isNaN(tipId)) {
      tip = TIPS_PJS_DATA.find((t) => t.id === tipId);
    }
    if (!tip) {
      tip = TIPS_PJS_DATA[Math.floor(Math.random() * TIPS_PJS_DATA.length)];
    }
  }

  if (tip) {
    const tipIcon = document.getElementById("tipIcon");
    const tipBadge = document.getElementById("tipBadge");
    const tipTitle = document.getElementById("tipTitle");
    const tipNorma = document.getElementById("tipNorma");
    const tipBody = document.getElementById("tipBody");
    const tipResumenText = document.getElementById("tipResumenText");

    if (tipIcon) tipIcon.textContent = tip.icono || "💡";
    if (tipBadge) {
      tipBadge.textContent = `Clave #${tip.numero} • ${tip.categoria}`;
      tipBadge.style.color = tip.color || "#f59e0b";
    }
    if (tipTitle) {
      tipTitle.textContent = `${tip.numero}. ${tip.titulo}`;
      tipTitle.style.color = tip.color || "#f8fafc";
    }
    if (tipNorma) tipNorma.textContent = `📌 Fundamento: ${tip.normaReferencia}`;

    const themeImg = typeof getImageForContext === "function" ? getImageForContext(tip) : null;
    const bannerContainer = document.getElementById("tipBannerContainer");
    const bannerImg = document.getElementById("tipBannerImg");
    const bannerBadge = document.getElementById("tipBannerBadge");
    if (bannerContainer && themeImg) {
      if (bannerImg) {
        bannerImg.src = themeImg.url;
        bannerImg.alt = themeImg.alt;
      }
      if (bannerBadge) {
        bannerBadge.textContent = themeImg.badge;
      }
    }

    if (tipBody) {
      tipBody.innerHTML = tip.contenidoDetallado;
      tipBody.style.borderLeftColor = tip.color || "#f59e0b";
    }
    if (tipResumenText) tipResumenText.textContent = tip.resumenCorto;
  }

  const btnEntendido = document.getElementById("btnEntendido");
  if (btnEntendido) {
    btnEntendido.addEventListener("click", () => {
      window.close();
    });
  }

  const btnOpenSidebar = document.getElementById("btnOpenSidebar");
  if (btnOpenSidebar) {
    btnOpenSidebar.addEventListener("click", async () => {
      if (typeof chrome !== "undefined" && chrome.tabs && chrome.sidePanel) {
        try {
          const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
          if (tab && chrome.sidePanel.open) {
            await chrome.sidePanel.open({ tabId: tab.id });
          }
        } catch (e) {
          console.error("Error abriendo panel lateral:", e);
        }
      }
      window.close();
    });
  }
});
