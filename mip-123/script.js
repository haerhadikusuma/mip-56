window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 50);
});

// Efek muncul (fade-in) saat scroll bisa ditambahkan di sini