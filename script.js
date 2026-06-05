let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

function changeSlide(dir) {
    current += dir;

    if (current < 0) current = slides.length - 1;
    if (current >= slides.length) current = 0;

    showSlide(current);
}

/* AUTO SLIDE */
setInterval(() => {
    changeSlide(1);
}, 4000);

/* NAVBAR */
const nav = document.getElementById("navMenu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = () => nav.classList.add("active");
closeBtn.onclick = () => nav.classList.remove("active");

const boxes = document.querySelectorAll(".feature-box");

window.addEventListener("scroll", () => {

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight - 100) {
            box.classList.add("show");
        }
    });

});

