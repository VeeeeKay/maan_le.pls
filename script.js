const products = [
  {
    name: "iPhone 14",
    price: 70000,
    image: "https://via.placeholder.com/200x150?text=iPhone+14"
  },
  {
    name: "Samsung Galaxy S23",
    price: 65000,
    image: "https://via.placeholder.com/200x150?text=Galaxy+S23"
  },
  {
    name: "Redmi Note 12",
    price: 18000,
    image: "https://via.placeholder.com/200x150?text=Redmi+Note+12"
  },
  {
    name: "Sony Headphones",
    price: 8000,
    image: "https://via.placeholder.com/200x150?text=Sony+Headphones"
  },
  {
    name: "Smart Watch",
    price: 3000,
    image: "https://via.placeholder.com/200x150?text=Smart+Watch"
  }
];

const productContainer = document.getElementById("product-container");
const cartItems = [];
const cartItemsList = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

function renderProducts() {
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
}

function addToCart(index) {
  cartItems.push(products[index]);
  alert(`${products[index].name} added to cart!`);
  updateCart();
}

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });
  cartTotalEl.textContent = total;
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

document.getElementById("view-cart-btn").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.remove("hidden");
});

renderProducts();
