const optiTomexOS = document.getElementById('optitomexos');
const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Impact', 'Comic Sans MS', 'Lucida Console', 'Tahoma'];
let currentFont = 0;
setInterval(() => {
    optiTomexOS.style.fontFamily = fonts[currentFont];
    currentFont = (currentFont + 1) % fonts.length;
}, 1500);

document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.feature');

function showSlide(n) {
    slides.forEach((slide, index) => {
        if (index === n) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function moveNext() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function movePrev() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}
showSlide(slideIndex);
document.querySelector('.prev-arrow').addEventListener('click', movePrev);
document.querySelector('.next-arrow').addEventListener('click', moveNext);


