// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Abre el modal
function abrirModal() {
    document.getElementById("miModal").style.display = "block";
  }
  
  // Asigna el evento al botón
  document.getElementById("abrirModal").addEventListener("click", abrirModal);
  