const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

const list = document.getElementById("productList");

products.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `${p.name} - ₹${p.price}
    <button onclick="addToCart(${p.id})">Add</button>`;
  list.appendChild(li);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products.find(p => p.id === id));
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
