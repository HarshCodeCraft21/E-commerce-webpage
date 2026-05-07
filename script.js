let mainCard = document.querySelector('.main-card');

async function fetchProducts() {
    try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();

        displayProducts(data);
    } catch (error) {
        console.error(`something went wrong by fetching products: ${error}`)
    }
}

function displayProducts(data) {

    data.forEach(product => {

        const { title, category, description, image, price } = product;

        let card = document.createElement('div');
        card.classList.add("card")

        let card_template = `<div class="card">
            <p class="tag">${category}</p>
            <img src=${image} class="product-image">
            <h2 class="title">${title}</h2>
            <p class="desc">${description.slice(0,11)}</p>
            <p class="price">$${price}</p>
            <button class="buy-btn">Add to Cart</button>
        </div>`;
        mainCard.innerHTML += card_template;
    });
}

fetchProducts();