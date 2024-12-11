// Function to increment quantity
function increment() {
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;

    updateAddToCartButton(quantity);
}

// Function to decrement quantity
function decrement() {
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
    }
    quantityInput.value = quantity;

    updateAddToCartButton(quantity);
}

// Function to update the "Add to Cart" button with the current quantity
function updateAddToCartButton(quantity) {
    const addToCartBtn = document.getElementById("addToCartBtn");
    addToCartBtn.textContent = `Add to Cart (${quantity})`;
}
