// Featured Project section image Start
function page4Animation() {
  var fixed = document.querySelector(".fixed-image");
  var items = document.querySelectorAll(".feature-item");

  items.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var image = item.getAttribute("data-image");

      fixed.style.display = "block";
      fixed.style.backgroundImage = `url(${image})`;
    });

    item.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
    });
  });
}
document.addEventListener("DOMContentLoaded", page4Animation);
// Featured Project section image End

// We Work section slider Start
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// We Work section slider End

// Menu Responsive Start
var menu = document.querySelector(".mob-manu");
var full = document.querySelector(".full-scr");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.bottom = "0";
    flag = 1;
  } else {
    full.style.bottom = "-100%";
    flag = 0;
  }
});
// Menu Responsive End

var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)