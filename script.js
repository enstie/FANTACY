// JavaScript for Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScript to Dynamically Update Cart Count
let cartCount = 0;

const cartCountDisplay = document.querySelector('#cart-count');
const buyNowButtons = document.querySelectorAll('.buy-now');

buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountDisplay.textContent = cartCount;
    });
});

// JavaScript for Product Filtering (e.g., by Price)
const filterPrice = document.querySelector('#price-filter');
const productItems = document.querySelectorAll('.product');

filterPrice.addEventListener('change', (event) => {
    const selectedPrice = event.target.value;

    productItems.forEach(item => {
        const price = parseFloat(item.querySelector('p').textContent.replace('$', ''));
        if (selectedPrice === 'all' || (selectedPrice === 'low' && price < 50) || (selectedPrice === 'high' && price >= 50)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// JavaScript for Smooth Scrolling Behavior
const navLinksSmooth = document.querySelectorAll('.nav-links a');

navLinksSmooth.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for sticky header
            behavior: 'smooth'
        });
    });
});

// JavaScript for Newsletter Form Validation
const newsletterForm = document.querySelector('footer .newsletter form');
const emailInput = document.querySelector('footer .newsletter input');
const subscribeButton = document.querySelector('footer .newsletter button');

newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValue || !emailRegex.test(emailValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for subscribing!');
    emailInput.value = ''; // Clear input field after successful submission
});

// JavaScript to Load Random Images for Products
const productImages = [
    'https://via.placeholder.com/300x200?text=Product+1',
    'https://via.placeholder.com/300x200?text=Product+2',
    'https://via.placeholder.com/300x200?text=Product+3',
    'https://via.placeholder.com/300x200?text=Product+4',
    'https://via.placeholder.com/300x200?text=Product+5',
    'https://via.placeholder.com/300x200?text=Product+6',
    'https://via.placeholder.com/300x200?text=Product+7',
    'https://via.placeholder.com/300x200?text=Product+8'
];

productItems.forEach((item, index) => {
    const imgElement = item.querySelector('img');
    imgElement.src = productImages[index % productImages.length];
});

// JavaScript for Product Image Hover Effect
productItems.forEach(item => {
    const imgElement = item.querySelector('img');
    imgElement.addEventListener('mouseover', () => {
        imgElement.style.transition = 'transform 0.3s ease';
        imgElement.style.transform = 'scale(1.1)';
    });
    imgElement.addEventListener('mouseout', () => {
        imgElement.style.transform = 'scale(1)';
    });
});