function toggleDropdown(buttonId, dropdownId, iconId) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);
    const icon = document.getElementById(iconId);

    button.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
        icon.style.transform = dropdown.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    });
}

toggleDropdown('veYoButton', 'veYoDropdown', 'veYoIcon');
toggleDropdown('sodaYoButton', 'sodaYoDropdown', 'sodaYoIcon');

// Close dropdowns when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.closest('.relative')) {
        document.querySelectorAll('.absolute.dropdown').forEach(dropdown => {
            dropdown.classList.add('hidden');
        });
        document.querySelectorAll('svg').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
    }
});


// -- mobile --
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const mobileVeYoIcon = document.getElementById('mobile-veYoIcon');
    const mobileSodaYoIcon = document.getElementById('mobile-sodaYoIcon');
    const mobileVeYoButton = document.getElementById('mobile-veYoButton');
    const mobileVeYoDropdown = document.getElementById('mobile-veYoDropdown');
    const mobileSodaYoButton = document.getElementById('mobile-sodaYoButton');
    const mobileSodaYoDropdown = document.getElementById('mobile-sodaYoDropdown');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
            mobileMenu.classList.add('hidden');
        }
    });

    mobileVeYoButton.addEventListener('click', function () {
        mobileVeYoDropdown.classList.toggle('hidden');
        mobileVeYoIcon.classList.toggle('rotate-180');
    });

    mobileSodaYoButton.addEventListener('click', function () {
        mobileSodaYoDropdown.classList.toggle('hidden');
        mobileSodaYoIcon.classList.toggle('rotate-180');
    });
});

// -- cart --
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.getElementById('close-cart-modal');
const cartOverlay = document.getElementById('cart-overlay');


cartButton.addEventListener('click', () => { 
    cartModal.classList.toggle('hidden')
    cartOverlay.classList.remove('hidden');
});

closeCartModal.addEventListener('click', () => {
    cartModal.classList.toggle('hidden')
    cartOverlay.classList.add('hidden');
});