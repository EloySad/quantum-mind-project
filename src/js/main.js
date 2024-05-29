// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

let lastScrollTop = 0;
let headerHeight = document.querySelector("header").offsetHeight;
window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
      // Desplazamiento hacia abajo
      document.querySelector("header").style.top = "-" + headerHeight + "px";
    } else {
      // Desplazamiento hacia arriba o en la parte superior de la página
      document.querySelector("header").style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  },
  false
);
