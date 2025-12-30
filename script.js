let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    const item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    updateCart();
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));

    let cartItems = document.getElementById("cart-items");
    let total = 0;
    let count = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        count += item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (x${item.qty})</span>
                <span>₹${item.price * item.qty}</span>
                <button onclick="removeItem(${index})">❌</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("count").innerText = count;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

updateCart();

