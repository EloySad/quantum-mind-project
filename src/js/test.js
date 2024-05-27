// Import our custom CSS
import "../scss/test.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Definición de las preguntas y respuestas
const questions = [
  "Cuando te enfrentas a un problema complejo, ¿cuál es tu enfoque principal?",
  "¿Qué tipo de herramienta te resulta más atractiva?",
  "¿Qué aspecto de un proyecto te resulta más motivador?",
  "¿Cómo prefieres trabajar en equipo?",
  "¿Qué te resulta más satisfactorio de tu trabajo?",
];

const answers = [
  [
    "a) Analizar detalladamente todas las posibles soluciones.",
    "b) Descomponer el problema en partes más pequeñas para abordarlo por etapas.",
    "c) Visualizar cómo se vería la solución final y trabajar hacia atrás desde allí.",
    "d) Recolectar y procesar grandes cantidades de datos para entender el problema.",
  ],
  [
    "a) Software que permite diseñar interfaces intuitivas y atractivas.",
    "b) Frameworks y lenguajes de programación robustos y escalables.",
    "c) Herramientas de desarrollo que facilitan la creación de interfaces interactivas.",
    "d) Plataformas de análisis de datos y visualización de información.",
  ],
  [
    "a) Crear experiencias que impacten positivamente en la vida de los usuarios.",
    "b) Desarrollar la lógica y la estructura que sostienen una aplicación o sistema.",
    "c) Traducir diseños creativos en interfaces funcionales y atractivas.",
    "d) Descubrir patrones y tendencias ocultas en conjuntos de datos complejos.",
  ],
  [
    "a) Colaborando estrechamente con diseñadores y expertos en experiencia de usuario.",
    "b) Participando en discusiones técnicas y resolviendo desafíos de implementación.",
    "c) Integrando el diseño con el desarrollo para lograr una experiencia de usuario cohesiva.",
    "d) Analizando datos para proporcionar información útil al equipo y tomar decisiones informadas.",
  ],
  [
    "a) Ver cómo los usuarios interactúan con una experiencia que has diseñado.",
    "b) Saber que has construido una base sólida para un sistema complejo.",
    "c) Observar cómo una interfaz que has desarrollado cobra vida y es utilizada por muchas personas.",
    "d) Extraer información significativa de conjuntos de datos que parecen caóticos a primera vista.",
  ],
];

// Definición de los tipos de personalidad
const personalityTypes = [
  "Diseñador de Experiencias UX",
  "Programador de Backend",
  "Programador de Frontend",
  "Analista de Datos",
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById("questionContainer");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const resultDiv = document.getElementById("result");

// Función para mostrar la pregunta actual
function showCurrentQuestion() {
  questionContainer.textContent = questions[currentQuestionIndex];
  optionsContainer.innerHTML = ""; // Limpiar opciones anteriores

  answers[currentQuestionIndex].forEach((option, idx) => {
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", "answer");
    radioInput.setAttribute("value", idx);
    const label = document.createElement("label");
    label.appendChild(radioInput);
    label.appendChild(document.createTextNode(option));
    optionsContainer.appendChild(label);
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
      showResult(answerIndex);
      nextButton.style.display = "none";
    }
  } else {
    alert("Por favor, selecciona una opción.");
  }   
}

// Función para mostrar el resultado
function showResult(answerIndex) {
  const personalityType = calculatePersonalityType(answerIndex);
  resultDiv.textContent = `Tu tipo de personalidad es: ${personalityType}`;
  resultDiv.style.display = "block";
}

// Función para calcular el tipo de personalidad
function calculatePersonalityType(answerIndex) {
  const scores = [0, 0, 0, 0];
  scores[answerIndex] = 1;

  const maxScoreIndex = scores.indexOf(Math.max(...scores));
  return personalityTypes[maxScoreIndex];
}

// Mostrar la primera pregunta al cargar la página
showCurrentQuestion();

// Agregar evento de escucha al botón de "Siguiente"
nextButton.addEventListener("click", goToNextQuestion);
