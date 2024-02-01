// Untuk Animate Text
const animateText = document.querySelector('.impian');
const texts = ["Rumah Impian Anda.", "Kantor Nyaman Anda.", "Pergudangan Luas Anda.", "Ruko Bisnis Anda."];
let index = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[index].length) {
        animateText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Waktu jeda antar karakter
    } else {
        setTimeout(eraseText, 1000); // Tunggu sejenak setelah mengetik selesai
    }
}

function eraseText() {
    if (charIndex > 0) {
        animateText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Waktu jeda antar karakter saat menghapus
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 500); // Tunggu sejenak sebelum mulai mengetik lagi
    }
}
setTimeout(typeText, 500); // Mulai animasi setelah beberapa waktu

// Untuk Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navbarList = document.querySelector(".navbar-things");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navbarList.classList.toggle("active");  
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
