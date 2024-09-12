let navBarToggler = document.querySelector(".navbar-toggler"); // Button Of Navbar
let ulNavbar = document.querySelector(".navbar .navbar-nav"); // The Links Of Navbar
let switcherUl = document.querySelectorAll(".our-work ul li"); // Ul Li In Our Work Section
let boxsWorkSection = document.querySelectorAll(".our-work .img-show"); // The Divs Of Images In OurWork
let scrollToTopButton = document.querySelector(".scroll-to-top"); // Scroll To Top Button

// The Clicking On Document To Close The Navbar
document.addEventListener("click", (e) => {
  if (e.target !== navBarToggler && e.target !== ulNavbar) {
    navBarToggler.setAttribute("aria-expanded", false);
    document.querySelector(".navbar-collapse").classList.remove("show");
  }
});

// This Function To Stop Propagation
function stopPro(ele) {
  ele.onclick = function (e) {
    e.stopPropagation();
  };
}
stopPro(navBarToggler); // Stop Propagation Of Button
stopPro(ulNavbar); // Stop Propagation Of Ul Links

// Filter The Our Work Section
switcherUl.forEach((li) => {
  li.onclick = function () {
    switcherUl.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });
    this.classList.add("active");
    boxsWorkSection.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelectorAll(this.dataset.show).forEach((div) => {
      div.style.display = "block";
    });
  };
});

// Window On Scroll
window.onscroll = function () {
  if (window.scrollY >= 500) {
    scrollToTopButton.style.right = "20px";
  } else {
    scrollToTopButton.style.right = "-35px";
  }
};
// Onclick On Scroll To Top Button
scrollToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
