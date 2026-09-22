async function loadProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();

  const container = document.getElementById("products");

  products.forEach((product) => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <h4>₹${product.price}</h4>
        <button  onclick="viewDetails('${product._id}')">View Details</button>
      </div>
    `;
  });
}

loadProducts();

function viewDetails(id) {
  window.location.href = `product.html?id=${id}`;
}

const shoppingCartBtn = document.getElementById("shopping-cart-btn");

shoppingCartBtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});
