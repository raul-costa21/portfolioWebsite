let clickEmail = () => {
  let emailIcon = document.querySelector(".fa-envelope-open-text");
  emailIcon.addEventListener("click", () => {
    Swal.fire({
      html: "<p>Email address copy to clipboard</p>",
      icon: "info",
      showConfirmButton: false
    });
    var email = "raulfscosta@gmail.com";
    navigator.clipboard.writeText(email);
  });
};

// main image(s) animation
let count = 1;
let slideShow = () => {
  let main = document.querySelector(".main");
  let images = ["beach.jpg", "music.jpg", "game.jpg", "code.jpg"];

  // this change the image and also controls the transition animation
  if (main.classList.contains("slideShowIn")) {
    main.classList.remove("slideShowIn");
    main.classList.add("slideShowOut");
    main.style.backgroundImage = `url(../../img/${images[count]})`;
    count++;
  }
  count = count == 4 ? 0 : count;

  // this functions controls the transition animation and then calls the parent function;
  let transitionAnime = () => {
    main.classList.remove("slideShowOut");
    main.classList.add("slideShowIn");
    setTimeout(slideShow, 2000);
  };

  setTimeout(transitionAnime, 5000);
};

// click to show nav bar menu
let clickHamburgerBar = () => {
  let hamburgerBar = document.querySelector(".hamburger-bar");
  let menuMobile = document.querySelector(".menu-mobile");
  let body = document.querySelector("body");

  // not only when we click the hamburger bar that the Mobile menu should disappear; even if we click in the links or in the menu the animations should be trigger
  [hamburgerBar, menuMobile].map((elem) => {
    elem.addEventListener("click", () => {
      if (menuMobile.classList.contains("fade-in")) {
        menuMobile.classList.remove("fade-in");
        menuMobile.classList.add("fade-out");
        body.setAttribute("style", "overflow: visible;");
      } else {
        menuMobile.classList.remove("fade-out");
        menuMobile.classList.add("fade-in");
        body.setAttribute("style", "overflow: hidden;");
      }
    });
  });
};

let sliderPortfolio = () => {
  let slideNum = 0;

  let rightArrow = document.querySelector(".fa-arrow-right");
  let leftArrow = document.querySelector(".fa-arrow-left");
  let arrows = [leftArrow, rightArrow];

  let image = document.querySelector(".portefolio-image img");
  let imagesArray = ["easyBank.jpg", "bkendBlog.jpg", "404.jpg"];

  let a = document.querySelector(".portefolio-image a");
  let aArray = Array.from(document.querySelectorAll(".hide-portfolio-content a"));

  let h3 = document.querySelector(".portefolio-text h3");
  let h3Array = Array.from(document.querySelectorAll(".hide-portfolio-content h3"));

  let p = document.querySelector(".portefolio-text p");
  let pArray = Array.from(document.querySelectorAll(".hide-portfolio-content p"));

  arrows.map((arrow) => {
    arrow.addEventListener("click", (event) => {
      if (arrow.id === "leftArrow") {
        slideNum--;
        slideNum < 0 ? (slideNum = 2) : slideNum;
      }
      if (arrow.id === "rightArrow") {
        slideNum++;
        slideNum > 2 ? (slideNum = 0) : slideNum;
      }

      // this controls the carousel animation and changes the image/h3/p
      [image, h3, p].map((elem) => {
        elem.classList.remove("fade-in");
        elem.classList.add("fade-out");
        elem.addEventListener("animationend", () => {
          elem.classList.remove("fade-out");
          elem.classList.add("fade-in");
          image.src = `img/${imagesArray[slideNum]}`;
          a.href = `${aArray[slideNum].href}`;
          a.target = `${aArray[slideNum].target}`;
          h3.textContent = `${h3Array[slideNum].textContent}`;
          p.textContent = `${pArray[slideNum].textContent}`;
        });
      });
    });
  });
};

window.addEventListener("load", () => {
  clickEmail();
  clickHamburgerBar();
  slideShow();
  sliderPortfolio();
});
