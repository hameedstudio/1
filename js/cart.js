/* ============================================================
   HAMEED STUDIO — Cart logic (shared across all pages)
   Cart is stored in localStorage under the key "hameed_cart" so
   it persists between the Home / Products / Product / Cart pages.
   ============================================================ */

const CART_KEY = "hameed_cart";
const SHIPPING_FLAT = 100;     // change flat shipping fee here
const PROMO_CODES = {          // add / edit promo codes here
  "DAD10": 200,
  "HS50": 500
};

/* Some browsers (mainly Firefox) block localStorage when a page is
   opened straight from disk (file:// instead of http://). To make
   sure Add to Cart / qty / remove NEVER breaks, we fall back to a
   plain in-memory array in that case. The only downside of the
   fallback is the cart won't survive a full page refresh — running
   the site through a local server (see README) avoids that. */
let _memoryCart = [];
let _storageOK = true;
try {
  localStorage.setItem("__hs_test__", "1");
  localStorage.removeItem("__hs_test__");
} catch (e) {
  _storageOK = false;
}

function getCart() {
  if (!_storageOK) return _memoryCart;
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return _memoryCart;
  }
}

function saveCart(cart) {
  if (_storageOK) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
      _storageOK = false;
      _memoryCart = cart;
    }
  } else {
    _memoryCart = cart;
  }
  updateCartCountBadge();
}

/* Adds an item. If the same product + same variant combo already
   exists in the cart, it just increases the quantity. */
function addToCart({ id, name, image, price, qty, variantLabel }) {
  const cart = getCart();
  const key = id + "|" + (variantLabel || "");
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, id, name, image, price, qty, variantLabel: variantLabel || "" });
  }
  saveCart(cart);
}

function removeFromCart(key) {
  const cart = getCart().filter(item => item.key !== key);
  saveCart(cart);
}

function setQty(key, qty) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartSubtotal() {
  return getCart().reduce((sum, i) => sum + i.qty * i.price, 0);
}

function clearCart() {
  if (_storageOK) {
    try {
      localStorage.removeItem(CART_KEY);
    } catch (e) {
      _memoryCart = [];
    }
  } else {
    _memoryCart = [];
  }
  updateCartCountBadge();
}

function updateCartCountBadge() {
  document.querySelectorAll(".cart-count").forEach(el => {
    const count = cartCount();
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function formatRs(n) {
  return "Rs. " + n.toLocaleString("en-PK");
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", updateCartCountBadge);
