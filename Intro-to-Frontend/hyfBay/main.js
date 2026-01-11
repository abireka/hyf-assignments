const products = getAvailableProducts();
const productList = document.querySelector("#product-list");
function renderProducts(products) {
    productList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const li = document.createElement("li");

        li.innerHTML = "<strong>" + product.name + "</strong><br>" + "Price: " + product.price + "<br>" + "Rating: " + product.rating;
        productList.appendChild(li);
    }
}

renderProducts(products);
