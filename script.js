// script.js
// Gera os cards de produto dinamicamente a partir de products.js.
// Usa criação de elementos DOM (não innerHTML com dados dinâmicos) para evitar XSS.

(function () {
  "use strict";

  function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "card";

    // Imagem
    const imageWrap = document.createElement("div");
    imageWrap.className = "card-image-wrap";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    imageWrap.appendChild(img);
    card.appendChild(imageWrap);

    // Aviso sobre imagem ilustrativa
    const disclaimer = document.createElement("p");
    disclaimer.className = "card-disclaimer";
    disclaimer.textContent =
      "Imagem meramente ilustrativa. O produto da imagem pode apresentar diferenças em relação ao modelo anunciado.";
    card.appendChild(disclaimer);

    // Corpo do card
    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h2");
    title.textContent = product.name;
    body.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = product.description;
    body.appendChild(desc);

    const link = document.createElement("a");
    link.className = "btn";
    link.href = product.affiliateLink;
    link.textContent = "Saiba mais";
    link.target = "_blank";
    link.rel = "noopener noreferrer sponsored";
    body.appendChild(link);

    card.appendChild(body);

    return card;
  }

  function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid || !Array.isArray(window.products)) return;

    const fragment = document.createDocumentFragment();
    window.products.forEach(function (product) {
      fragment.appendChild(createProductCard(product));
    });
    grid.appendChild(fragment);
  }

  document.addEventListener("DOMContentLoaded", renderProducts);
})();
