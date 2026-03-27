function orderNow(product, price) {
  let phone = "2347044718879"; // Replace with your WhatsApp number
  let message = `Hello, I want to order ${product} for $${price}`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}