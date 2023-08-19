document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const menu = document.getElementById('navbar-cta');

    if (hamburgerButton && menu) {
        hamburgerButton.addEventListener('click', function() {
            menu.classList.toggle('hidden'); // Toggle the "hidden" class to show/hide the menu
        });
    }
});

const foodImg = document.querySelector(".food-img");
let currentImageIndex = 1; 

const imageFilenames = ["food-1.png", "food-2.png", "food-3.png"];

const changeImage = () => {
    const nextImageIndex = currentImageIndex % imageFilenames.length;
    foodImg.src = `./assests/${imageFilenames[nextImageIndex]}`;
    currentImageIndex++;
};

const imageChangeInterval = setInterval(changeImage, 4000);

