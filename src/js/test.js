// Import our custom CSS
import "../scss/test.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Llamar funcion

import { showAlertSuccess } from "./alerts";
import { showAlertSuccess2 } from "./alerts";
// Definición de las preguntas y respuestas
const questions = [
  "When facing a technical problem, what is your main approach?",
  "What aspect of technology fascinates you the most?",
  "What motivates you to learn more about technology?",
  "How do you prefer to approach a new technological project?",
  "What do you find most exciting about technology?",
];

const answers = [
  [
    "Thoroughly analyze the problem.",
    "Try different solutions until finding one that works.",
    "Research online for possible solutions.",
    "Seek help from colleagues or online communities.",
  ],
  [
    "Building programs and applications from scratch.",
    "Exploring new technologies and frameworks.",
    "Designing intuitive and attractive user interfaces.",
    "Experimenting with technological tools and gadgets.",
  ],
  [
    "Solving complex technical challenges.",
    "Developing advanced programming skills.",
    "Expressing creativity through digital design.",
    "Satisfying curiosity by understanding how things work.",
  ],
  [
    "Carefully plan each step before starting.",
    "Dive directly into the code and learn on the go.",
    "Design a visual prototype before starting implementation.",
    "Research and experiment with different approaches before deciding.",
  ],
  [
    "The ability to efficiently solve complex problems.",
    "The freedom to create and experiment with new ideas.",
    "The opportunity to design unique and engaging digital experiences.",
    "The constant change and evolution of the technological landscape.",
  ],
];

// Personality types definition
const personalityTypes = [
  "Technological Problem Solver",
  "Programming Enthusiast",
  "Digital Creative",
  "Technological Curious",
];

const descriptionPersonality = [
  "You're the code hero, the master of Ctrl + Z, and the expert at finding holes in the most unbreakable system. When it comes to technology, there's no problem you can't solve with a little coffee and an extra dose of determination. Your friends seek you out when their devices are in trouble because they know you have the power to turn chaos into order with a single click. You're the everyday life hacker!",
  "You consider yourself a code wizard, a programming ninja, and an architect of the digital future. You're passionate about every line of code you write, and every new project excites you, challenging you to push your limits. For you, every bug is just an opportunity to learn something new, and every technical challenge is just another obstacle on the exciting journey towards code perfection. You're the keyboard rockstar!",
  "Your mind is a digital canvas, and technology is your brush. You love to explore new digital worlds, experiment with bright colors and surprising shapes, and create experiences that captivate the senses and challenge the imagination. For you, technology is not just tools and gadgets, it's a blank canvas waiting to be filled with your limitless creativity. You're the pixel Picasso!",
  "You're the cyberspace explorer, the algorithm adventurer, and the detective of the lost data. Your insatiable curiosity drives you to seek answers to the most intriguing questions and uncover the deepest secrets of the digital universe. For you, technology is a vast ocean of possibilities waiting to be explored, and every new technology is just another mystery to be solved. You're the Sherlock Holmes of cybernetics!",
];
let currentQuestionIndex = 0;
const questionContainer = document.getElementById("questionContainer");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const resultDiv = document.getElementById("result");
const botonesDiv = document.getElementById("botones");
const botonStartDiv = document.getElementById("siguiente");
const startButton = document.getElementById("startButton");


// Función para mostrar la pregunta actual
function showCurrentQuestion() {
  
  optionsContainer.innerHTML = ""; // Limpiar opciones anteriores
  questionContainer.textContent = questions[currentQuestionIndex];
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
  button1.addEventListener("click", function() {
    showCurrentQuestion();
  });
  
  // Para el botón 2 (Sign Up)
  button2.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "./src/auth/register.html";
  });
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
startTest()


function startTest(){
  // se crea el boton para iniciar el test
  const button3 = document.createElement("button");
  const initialText = document.createElement("div")
  initialText.textContent = "Are you ready to discover what kind of person you are? We have prepared a personality questionnaire for you, where we will define whether you are a tech enthusiast, a digital creative, or maybe a technology problem solver. Click the button below to get started!";
  button3.textContent = "START TEST";
  button3.classList.add("btn-success");
  button3.classList.add("btn");
  button3.classList.add("new-button");
  nextButton.style.display = "none"; // Ocultar el botón de "Siguiente"
  button3.id = "miBoton";
  questionContainer.appendChild(initialText)
  optionsContainer.appendChild(button3);
  button3.addEventListener("click", function(event) {
    event.preventDefault();
    nextButton.style.display = "block";
    showCurrentQuestion();
  });
}
// Agregar evento de escucha al botón de "Siguiente"
nextButton.addEventListener("click", goToNextQuestion);


// suscribirse
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