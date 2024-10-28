console.log("hello cart");

const data = localStorage.getItem("cart");
const convert = JSON.parse(data) || [];
console.log(convert);

let cartproduct = document.querySelector(".cartproduct");
let grandTotalElement = document.querySelector(".grand-total");

function updateGrandTotal() {
    let grandTotal = 0;
    document.querySelectorAll(".total").forEach((totalElement) => {
        grandTotal += parseFloat(totalElement.innerText.replace("$", "")) || 0;
    });
    grandTotalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

function renderCart() {
    cartproduct.innerHTML = "";
    convert.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        cartproduct.innerHTML += `
            <tr data-index="${index}">
                <td>
                    <div class="item-name">${item.brand}</div>
                    <div class="estimated-ship-date">${item.model}</div>
                    <div class="fuel-source">Ram: ${item.ram}  Rom: ${item.rom}</div>
                </td>
                <td class="price">$${item.price}</td>
                <td class="quantity">
                    <button class="decrease-btn">-</button>
                    <input type="number" value="${item.quantity}" min="1" readonly>
                    <button class="increase-btn">+</button>
                </td>
                <td class="total">$${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    // Attach event listeners after rendering
    document.querySelectorAll(".increase-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => increaseQuantity(index));
    });

    document.querySelectorAll(".decrease-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => decreaseQuantity(index));
    });

    updateGrandTotal();
}

function increaseQuantity(index) {
    convert[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(convert));
    renderCart();
}

function decreaseQuantity(index) {
    if (convert[index].quantity > 1) {
        convert[index].quantity -= 1;
    } else {
        // Remove item if quantity is 1 and decrease is clicked
        convert.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(convert));
    renderCart();
}

renderCart();
