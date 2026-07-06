/* ============================================================
   HAMEED STUDIO — Shared UI behaviour (nav, product cards, etc.)
   ============================================================ */

function initMobileNav() {
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".mobile-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

function renderStars(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

/* Builds one product card's HTML. Used on Home + All Products pages. */
function productCardHTML(p) {
  const img = p.images[0].src;
  const badge = p.category === "Deals" ? `<span class="badge">${p.badge}</span>` : "";
  const strike = p.category === "Deals" && p.oldPrice ? `<span class="price-strike">${formatRs(p.oldPrice)}</span>` : "";
  return `
    <div class="product-card">
      <a href="product.html?id=${p.id}" class="product-thumb">
        ${badge}
        <img src="${img}" alt="${p.name}" loading="lazy">
      </a>
      <button class="wishlist-btn" aria-label="Add to wishlist">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </button>
      <div class="product-info">
        <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
        
        <div class="price-row">
          <span class="price">${formatRs(p.price)}</span>
          ${strike}
        </div>
        <button class="add-cart-btn" onclick="quickAddToCart('${p.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
          Add to Cart
        </button>
      </div>
    </div>`;
}

function renderProductGrid(container, products) {
  container.innerHTML = products.map(productCardHTML).join("");
}

/* Quick-add from a grid card: uses the first option of each
   variant type as the default, so it works whether the product
   has color, size, both, or neither. */
function quickAddToCart(id) {
  const p = getProductById(id);
  if (!p) return;
  const labels = [];
  if (p.options?.color) labels.push(p.options.color[0].name);
  if (p.options?.size) labels.push(p.options.size[0]);
  addToCart({
    id: p.id,
    name: p.name,
    image: p.images[0].src,
    price: p.price,
    qty: 1,
    variantLabel: labels.join(" / ")
  });
  showToast(`${p.name} added to cart`);
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
});
