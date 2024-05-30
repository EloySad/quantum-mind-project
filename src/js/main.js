// Import our custom CSS
<<<<<<< HEAD
import '../scss/styles.scss'
import '../scss/pricing.scss'
=======
import "../scss/styles.scss";
>>>>>>> 00a9f5a14009a21b79d0c501de721712ac7b698e

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { showAlertSuccess } from "./alerts";
import { showAlertSuccess2 } from "./alerts";

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

//suscribirse
function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function getSuscribed(event) {
  var emailInput = document.getElementById("exampleInputEmail1");
  var email = emailInput.value.trim();
  event.preventDefault();
  // Verifica si el correo electrónico es válido
  if (isValidEmail(email)) {
      // Limpia el campo de correo electrónico
      emailInput.value = "";
      // Muestra una alerta de éxito
      showAlertSuccess2();
  } else {
      // Muestra una alerta pidiendo al usuario que ingrese un correo electrónico válido
      alert("Please enter a valid email address.");
  }
}
document.getElementById("submitButton").addEventListener("click", getSuscribed);