const phones = [
    {
        brand: "Samsung",
        model: "Galaxy S21",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 799,
    },
    {
        brand: "Apple",
        model: "iPhone 13",
        ram: 4,
        rom: 128,
        camera: "12 megapixel",
        price: 799,
    },
    {
        brand: "OnePlus",
        model: "9",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 729,
    },
    {
        brand: "Google",
        model: "Pixel 6",
        ram: 8,
        rom: 128,
        camera: "50 megapixel",
        price: 599,
    },
    {
        brand: "Xiaomi",
        model: "Mi 11",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 749,
    },
    {
        brand: "Sony",
        model: "Xperia 1 III",
        ram: 12,
        rom: 256,
        camera: "12 megapixel",
        price: 1299,
    },
    {
        brand: "Oppo",
        model: "Find X3 Pro",
        ram: 12,
        rom: 256,
        camera: "50 megapixel",
        price: 1149,
    },
    {
        brand: "Vivo",
        model: "X60 Pro",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 999,
    },
    {
        brand: "Nokia",
        model: "G50",
        ram: 4,
        rom: 128,
        camera: "48 megapixel",
        price: 299,
    },
    {
        brand: "Motorola",
        model: "Edge 20",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 599,
    },
    {
        brand: "Realme",
        model: "GT",
        ram: 12,
        rom: 256,
        camera: "64 megapixel",
        price: 499,
    },
    {
        brand: "Asus",
        model: "ROG Phone 5",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "HTC",
        model: "Desire 21 Pro",
        ram: 8,
        rom: 128,
        camera: "48 megapixel",
        price: 399,
    },
    {
        brand: "Huawei",
        model: "P40 Pro",
        ram: 8,
        rom: 256,
        camera: "50 megapixel",
        price: 899,
    },
    {
        brand: "LG",
        model: "Wing",
        ram: 8,
        rom: 256,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "ZTE",
        model: "Axon 20",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 399,
    },
    {
        brand: "BlackBerry",
        model: "KEY2",
        ram: 6,
        rom: 64,
        camera: "12 megapixel",
        price: 649,
    },
    {
        brand: "Lenovo",
        model: "Legion Phone Duel",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "Alcatel",
        model: "3L",
        ram: 4,
        rom: 64,
        camera: "48 megapixel",
        price: 199,
    },
    {
        brand: "TCL",
        model: "10 Pro",
        ram: 6,
        rom: 128,
        camera: "64 megapixel",
        price: 449,
    },
];
let row = document.querySelector(".main_row");
let cart_product;

const storedCart = localStorage.getItem("cart");
if (storedCart) {
  try {
    cart_product = JSON.parse(storedCart) || [];
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
    cart_product = []; 
  }
} else {
  cart_product = []; 
}

console.log("cart_product===>", cart_product);


phones.map((item, index) => {
    row.innerHTML += `
    <div class="col-lg-4 col-sm-4">
        <div class="box_main">
            <h4 class="shirt_text">${item.brand}</h4>
            <p class="price_text">Model <span style="color: #262626;">${item.model}</span></p>
            <div class="electronic_img"><img src="images/laptop-img.png"></div>
            <div class="btn_main">
                <div class="buy_bt" onclick="addtocart(${index})"><a href="#">add to cart</a></div>
                <div class="seemore_bt"><a href="">price $${item.price}</a></div>
            </div>
        </div>
    </div>`;
});

function addtocart(index) {
    console.log("hello", index);
    const indexcheck = cart_product.findIndex(item => item.model === phones[index].model);
    if (indexcheck === -1) {
        phones[index].quantity = 1;
        cart_product.push(phones[index]);
    } else {
        cart_product[indexcheck].quantity += 1;
    }
    console.log(cart_product);
    Swal.fire({
        title: "Good job!",
        text: "Item added to cart successfully!",
        icon: "success",
    });
}

function checkout() {
    const convertArrIntoStr = JSON.stringify(cart_product);
    localStorage.setItem("cart", convertArrIntoStr);
    window.location = "cart.html";
}
