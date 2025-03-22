const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  if (windowPosition) {
    navBar.style.background = "white"; // Background putih saat di-scroll
    navBar.style.padding = "30px 0 30px 0";

    // Ubah warna teks logo
    const logoText = document.querySelector(".logo h1");
    const logoSubtext = document.querySelector(".logo h1 span");
    if (logoText && logoSubtext) {
      logoText.style.color = "black";
      logoSubtext.style.color = "black";
    }

    // Ubah warna teks menu
    const menuLinks = document.querySelectorAll(".menu li a");
    menuLinks.forEach((link) => {
      link.style.color = "black";
    });
  } else {
    navBar.style.background = "transparent"; // Background transparan saat tidak di-scroll
    navBar.style.padding = "20px 0 20px 0";

    // Kembalikan warna teks logo ke putih
    const logoText = document.querySelector(".logo h1");
    const logoSubtext = document.querySelector(".logo h1 span");
    if (logoText && logoSubtext) {
      logoText.style.color = "white";
      logoSubtext.style.color = "white";
    }

    // Kembalikan warna teks menu ke putih
    const menuLinks = document.querySelectorAll(".menu li a");
    menuLinks.forEach((link) => {
      link.style.color = "white";
    });
  }
  menuNav.classList.remove("menu-active");
});
