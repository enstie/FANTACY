document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const discountElement = document.getElementById('discount');
    const totalElement = document.getElementById('total');
    const discountCodeInput = document.getElementById('discount-code');
    const applyDiscountButton = document.getElementById('apply-discount');

    const TAX_RATE = 0.1; // 10% tax rate
    const DISCOUNT_CODES = {
        'SAVE10': 0.1, // 10% discount
        'SAVE20': 0.2  // 20% discount
    };

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        cart.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td class="price">$${product.price}</td>
                <td><input type="number" value="${product.quantity}" min="1" class="quantity"></td>
                <td class="total">$${(product.price * product.quantity).toFixed(2)}</td>
                <td><button class="remove-item">Remove</button></td>
            `;
            cartItemsContainer.appendChild(row);

            row.querySelector('.quantity').addEventListener('input', (e) => {
                product.quantity = parseInt(e.target.value);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            });

            row.querySelector('.remove-item').addEventListener('click', () => {
                cart.splice(cart.indexOf(product), 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                loadCart();
                updateCart();
            });
        });

        updateCart();
    }

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = 0;

        cart.forEach(product => {
            subtotal += product.price * product.quantity;
        });

        const tax = subtotal * TAX_RATE;
        const discountCode = discountCodeInput.value.trim().toUpperCase();
        const discount = DISCOUNT_CODES[discountCode] ? subtotal * DISCOUNT_CODES[discountCode] : 0;
        const total = subtotal + tax - discount;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        discountElement.textContent = `$${discount.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    applyDiscountButton.addEventListener('click', updateCart);

    loadCart();
});