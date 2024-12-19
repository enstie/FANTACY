document.addEventListener('DOMContentLoaded', () => {
    const buyNowButtons = document.querySelectorAll('.buy-now');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your purchase!');
        });
    });
});