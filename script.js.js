const phoneNumber = "2347044718879";

/* PRODUCTS */
const products = [
  {
    name: "Smart Watch",
    price: "15000",
    category: "Electronics",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Wireless Headset",
    price: "8000",
    category: "Electronics",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Sneakers",
    price: "12000",
    category: "Fashion",
    image: "https://via.placeholder.com/300"
  }
];

/* RENDER PRODUCTS */
function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₦${p.price}</p>
      <a href="product.html?name=${encodeURIComponent(p.name)}">View</a>
    `;

    grid.appendChild(div);
  });
}

function filterCategory(category) {
  renderProducts(category);
}

/* CART */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  let count = document.getElementById("cartCount");
  if (count) count.innerText = cart.length;

  let list = document.getElementById("cartItems");
  if (!list) return;

  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

function checkout() {
  let message = "Order:%0A";
  cart.forEach(item => {
    message += "- " + item + "%0A";
  });

  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function buyNow(product) {
  let url = "https://wa.me/" + phoneNumber + "?text=I want " + product;
  window.open(url, "_blank");
}

function openWhatsApp() {
  window.open("https://wa.me/" + phoneNumber, "_blank");
}

updateCart();
renderProducts();