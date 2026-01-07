let cart = JSON.parse(localStorage.getItem("cart")) || [];
let list = document.getElementById("cartItems");
let total = 0;

cart.forEach(item => {
  const li = document.createElement("li");
  li.innerText = `${item.name} - ₹${item.price}`;
  list.appendChild(li);
  total += item.price;
});

document.getElementById("total").innerText =
  "Total: ₹" + total;
