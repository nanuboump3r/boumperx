// Array para almacenar los productos en el carrito
let cart = [];

// Función para añadir productos al carrito
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });

    updateCart();
}

// Función para actualizar el contenido del carrito en la página
function updateCart() {
    const cartContent = document.getElementById('cart-content');
    const cartButton = document.getElementById('checkout');

    if (cart.length === 0) {
        cartContent.innerHTML = '<p>No hay productos en el carrito.</p>';
        cartButton.style.display = 'none';
    } else {
        let cartHTML = '<ul>';
        let totalPrice = 0;

        cart.forEach(item => {
            cartHTML += `<li>${item.name} - $${item.price}</li>`;
            totalPrice += item.price;
        });

        cartHTML += `</ul><p><strong>Total: $${totalPrice.toFixed(2)}</strong></p>`;
        cartContent.innerHTML = cartHTML;

        cartButton.style.display = 'block';
    }
}
