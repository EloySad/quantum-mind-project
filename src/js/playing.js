(function () {
    const userSesion = localStorage.getItem("userSesion")

    if (userSesion === null) {
        window.location.href = "../views/games.html"
    }
})()

// Import our custom CSS
import '../scss/games.scss'
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//evenlisned boton logout
  const btnLogout = document.getElementById("btn-logout")
  btnLogout.addEventListener("click", () => {
      localStorage.removeItem("userSesion")
      window.location.href = "/"
  })

// Abre el modal
function abrirModal() {
    document.getElementById("miModal").style.display = "block";
  }
  
  // Asigna el evento al botón
  document.getElementById("abrirModal").addEventListener("click", abrirModal);
  
  