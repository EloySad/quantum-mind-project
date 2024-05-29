// Import our custom CSS
import "../scss/test.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Llamar funcion

import { showAlertSuccess } from "./alerts";

// Definición de las preguntas y respuestas
const questions = [
  "Cuando te enfrentas a un problema técnico, ¿cuál es tu enfoque principal?",
  "Qué aspecto de la tecnología te resulta más fascinante?",
  "Qué te motiva a aprender más sobre tecnología?",
  "Cómo prefieres abordar un nuevo proyecto tecnológico?",
  "Qué te resulta más emocionante de la tecnología?",
];

const answers = [
  [
    "Analizar detalladamente el problema.",
    "Probar diferentes soluciones hasta encontrar una que funcione.",
    "Investigar en línea en busca de posibles soluciones.",
    "Pedir ayuda a colegas o comunidades en línea.",
  ],
  [
    "Crear programas y aplicaciones desde cero.",
    "Explorar nuevas tecnologías y frameworks.",
    "Diseñar interfaces de usuario intuitivas y atractivas.",
    "Experimentar con herramientas y gadgets tecnológicos.",
  ],
  [
    "Resolver desafíos técnicos complejos.",
    "Desarrollar habilidades de programación avanzadas.",
    "Expresar mi creatividad a través del diseño digital.",
    "Satisfacer mi curiosidad por entender cómo funcionan las cosas.",
  ],
  [
    "Planificar cuidadosamente cada paso antes de comenzar.",
    "Sumergirme directamente en el código y aprender sobre la marcha.",
    "Diseñar un prototipo visual antes de comenzar la implementación.",
    "Investigar y experimentar con diferentes enfoques antes de decidir.",
  ],
  [
    "La posibilidad de resolver problemas complejos de manera eficiente.",
    "La libertad para crear y experimentar con nuevas ideas.",
    "La oportunidad de diseñar experiencias digitales únicas y atractivas.",
    "El constante cambio y evolución del panorama tecnológico.",
  ],
];
// Definición de los tipos de personalidad
const personalityTypes = [
  "Solucionador de Problemas Tecnológicos",
  "Entusiasta de la Programación",
  "Creativo Digital",
  "Curioso Tecnológico",
];
const descriptionPersonality = [
  "Eres el héroe del código, el maestro del Ctrl + Z y el experto en encontrar agujeros en el sistema más inquebrantable. Cuando se trata de tecnología, no hay problema que no puedas solucionar con un poco de café y una dosis extra de determinación. Tus amigos te buscan cuando sus dispositivos están en apuros, porque saben que tienes el poder de convertir el caos en orden con un solo clic. ¡Eres el hacker de la vida cotidiana!",
  "Te consideras un mago del código, un ninja de la programación y un arquitecto del futuro digital. Te apasiona cada línea de código que escribes y te emociona cada nuevo proyecto que te desafía a superar tus límites. Para ti, cada bug es solo una oportunidad para aprender algo nuevo y cada desafío técnico es solo otro obstáculo en el emocionante viaje hacia la perfección del código. ¡Eres el rockstar del teclado!",
  "Tu mente es un lienzo digital, y la tecnología es tu pincel. Te encanta explorar nuevos mundos digitales, experimentar con colores brillantes y formas sorprendentes, y crear experiencias que cautivan los sentidos y desafían la imaginación. Para ti, la tecnología no es solo herramientas y gadgets, es un lienzo en blanco esperando ser llenado con tu creatividad ilimitada. ¡Eres el Picasso del pixel!",
  "Eres el explorador del ciberespacio, el aventurero del algoritmo y el detective del dato perdido. Tu curiosidad insaciable te impulsa a buscar respuestas a las preguntas más intrigantes y a descubrir los secretos más profundos del universo digital. Para ti, la tecnología es un vasto océano de posibilidades esperando ser explorado, y cada nueva tecnología es solo otro misterio por resolver. ¡Eres el Sherlock Holmes de la cibernética!",
];  
let currentQuestionIndex = 0;
const questionContainer = document.getElementById("questionContainer");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const resultDiv = document.getElementById("result");
const botonesDiv = document.getElementById("botones");

// Función para mostrar la pregunta actual
function showCurrentQuestion() {
  questionContainer.textContent = questions[currentQuestionIndex];
  optionsContainer.innerHTML = ""; // Limpiar opciones anteriores

  answers[currentQuestionIndex].forEach((option, idx) => {
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", "answer");
    radioInput.setAttribute("value", idx);
    radioInput.classList.add("form-check-input"); // Agregar clase de Bootstrap
    radioInput.classList.add("flexRadioDefault1"); // Agregar la clase "flexRadioDefault1"
    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.classList.add("form-check-label"); // Agregar clase de Bootstrap
    label.classList.add("custom-label");
    label.appendChild(radioInput);
    label.appendChild(document.createTextNode(option));
    optionsContainer.appendChild(label);
    const br = document.createElement("br");
    optionsContainer.appendChild(br);
  });
}

// Función para pasar a la siguiente pregunta
function goToNextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    const answerIndex = parseInt(selectedOption.value);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showCurrentQuestion();
    } else {
      showAlertSuccess();
      showResult(answerIndex);

      nextButton.style.display = "none";
    }
  } else {
    alert("Por favor, selecciona una opción.");
  }
}

// Función para mostrar el resultado
function showResult(answerIndex) {
  const { personalityType, description } =
    calculatePersonalityType(answerIndex);
  resultDiv.innerHTML = `Tu tipo de personalidad es:<br>${personalityType}`; // Agrega un salto de línea antes del tipo de personalidad

  // Crear un nuevo elemento <div> para la descripción
  const descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = description;

  // Agregar la clase CSS a la descripción
  descriptionDiv.classList.add("personality-description");

  // Agregar la descripción al resultado
  resultDiv.appendChild(descriptionDiv);

  questionContainer.style.display = "none"; // Ocultar el contenedor de preguntas
  optionsContainer.style.display = "none"; // Ocultar el contenedor de opciones
  nextButton.style.display = "none"; // Ocultar el botón de "Siguiente"
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  button1.textContent = "< RESTART";
  button2.textContent = "SIGN UP!";
  button1.classList.add("btn-danger");
  button2.classList.add("btn-success");
  button1.classList.add("btn");
  button2.classList.add("btn");
  botonesDiv.appendChild(button1);
  botonesDiv.appendChild(button2);
  button1.classList.add("new-button");
  button2.classList.add("new-button");

  button1.addEventListener("click", showCurrentQuestion);
}

// Función para calcular el tipo de personalidad
function calculatePersonalityType(answerIndex) {
  const scores = [0, 0, 0, 0];
  scores[answerIndex] = 1;

  const maxScoreIndex = scores.indexOf(Math.max(...scores));
  return {
    personalityType: personalityTypes[maxScoreIndex],
    description: descriptionPersonality[maxScoreIndex],
  };
}

// Mostrar la primera pregunta al cargar la página
showCurrentQuestion();

// Agregar evento de escucha al botón de "Siguiente"
nextButton.addEventListener("click", goToNextQuestion);
