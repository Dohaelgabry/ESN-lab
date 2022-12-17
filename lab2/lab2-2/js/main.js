document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".Products");
  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      let title = response[i].name;
      let description = response[i].description;
      products.innerHTML += `
            <div class="product">
            <img src="${response[i].image}" class="product-img" alt="">
            <div class="product-content">
            <h2 class="product-title">${
              title.length > 18
                ? title.substring(0, 18).concat("..more")
                : title
            }</h2>
             
            <p class="product-description">${
              description.length > 80 ? description : description
            } </p>
            <div class="product-price-container">
                <h3 class="product-price">$${response[i].price}</h3>
                
                
            </div>
</div>
           
            </div>
            `;
    }

    console.log(response);
  }
  fetchProducts("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
});
