const loadAllData = () => {
    //all json data for each product detail
    const data = [
        {
            "id": "101",
            "title": "Pink shirt",
            "img": "../images/img-1.jpg",
            "price": 350.50

        },
        {
            "id": "102",
            "title": "Stripe Pink shirt",
            "img": "../images/img-2.jpg",
            "price": 370.20
        },
        {
            "id": "103",
            "title": "Check shirt",
            "img": "../images/img-3.jpg",
            "price": 405.10
        },
        {
            "id": "104",
            "title": "Black shirt",
            "img": "../images/img-4.jpg",
            "price": 330.50
        },
        {
            "id": "105",
            "title": "Dotted Print T-shirt",
            "img": "../images/img-5.jpg",
            "price": 250.50
        },
        {
            "id": "106",
            "title": "Zebra T-shirt",
            "img": "../images/img-6.jpg",
            "price": 260.50
        },
        {
            "id": "107",
            "title": "JL T-shirt",
            "img": "../images/img-7.jpg",
            "price": 220.50
        },
        {
            "id": "108",
            "title": "Exclusive T-shirt",
            "img": "../images/img-8.jpg",
            "price": 252.50
        }
    ]
    showProductData(data);

}


//function calling for showing the data on UI dynamically
const showProductData = (products) => {
    const allProduct = products.map(product => product);
    console.log(allProduct);
    for (const product of allProduct) {
        const image = product.img;
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<div class="single-product shadow-lg">
          <div>
        <img class="product-image" src=${image} style="margin-top:3px"></img>
          </div>
          <h6 class="product-title" >${product.title}</h6>
          <p class="product-price">Price: BDT ${product.price}</p>
          <div class="col text-center">
           <button onclick="addToCart(${product.id},${product.price})")" class="btn buy-now">Add to cart</button>
           </div>
          `;
        //append the card to the parent node on UI
        document.getElementById("product-show").appendChild(div);
    }
}

//function calling for add to cart portion
const addToCart = (id, price) => {
    console.log(id);
    // console.log(price);
    updatePrice("price", price);
    showDataToCart(id);


};

//function calling for update the price while che
const updatePrice = (id, value) => {
    //console.log(id);
    const convertOldValue = getInputValue(id);
    const converted = parseFloat(value);
    const totalUpdatedPrice = convertOldValue + converted;
    document.getElementById(id).innerText = totalUpdatedPrice.toFixed(2);
    updateTotalPrice();

}


//function calling for getting price value from user interaction
const getInputValue = (id) => {
    const takingValue = document.getElementById(id).innerText;
    const convertedValue = parseFloat(takingValue);
    return convertedValue;
}

//function calling for showing total updated price from UI
const updateTotalPrice = () => {
    const overallTotal = getInputValue("price") + getInputValue("tax");
    document.getElementById("total").innerText = overallTotal.toFixed(2);
}






loadAllData();