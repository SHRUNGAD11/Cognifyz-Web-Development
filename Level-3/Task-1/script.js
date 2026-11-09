
// Image slideshow data

const slides = [
    {
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        caption: "Mountain Landscape"
    },
    {
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
        caption: "Beautiful Lake"
    },
    {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
        caption: "Mountain and Lake"
    },
    {
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200",
        caption: "Sunrise Landscape"
    }
];

let currentSlide = 0;
let slideshowTimer;
let isPlaying = true;

const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");
const playPauseButton = document.getElementById("playPauseButton");


// Display selected slide

function displaySlide(index) {

    currentSlide = (index + slides.length) % slides.length;

    slideImage.style.opacity = "0";

    setTimeout(function() {

        slideImage.src = slides[currentSlide].image;

        slideCaption.textContent = slides[currentSlide].caption;

        slideImage.style.opacity = "1";

    }, 250);

}


// Next and previous navigation

document.getElementById("nextSlide").addEventListener("click", function() {
    displaySlide(currentSlide + 1);
});

document.getElementById("previousSlide").addEventListener("click", function() {
    displaySlide(currentSlide - 1);
});


// Automatic slideshow

function startSlideshow() {

    clearInterval(slideshowTimer);

    slideshowTimer = setInterval(function() {
        displaySlide(currentSlide + 1);
    }, 3000);

    isPlaying = true;
    playPauseButton.textContent = "Pause Slideshow";

}

function pauseSlideshow() {

    clearInterval(slideshowTimer);

    isPlaying = false;
    playPauseButton.textContent = "Play Slideshow";

}

playPauseButton.addEventListener("click", function() {

    if (isPlaying) {
        pauseSlideshow();
    } else {
        startSlideshow();
    }

});


// Clickable image gallery

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.dataset.full;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});


// Close enlarged image

document.getElementById("closeLightbox").addEventListener("click", function() {

    lightbox.classList.remove("active");

});


// Close by clicking outside the image

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});


// Close with Escape key

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});


// Start slideshow automatically

startSlideshow();
