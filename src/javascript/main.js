var display = document.getElementById("full-result");
var numberButtonList = document.querySelectorAll("[id*=key]");
var historyButton = document.getElementById("history");
var equalSymbol = document.getElementById("equals");
var clearButton = document.getElementById("clear");
var deleteButton = document.getElementById("backspace");

var fullHistory = "";

/*
  TODO List

  Saudações (z_z), provavelmente é o César do futuro que lerá isso,
  Talvez esse projeto seja terminado totalmente daqui
  2 dias, 2 meses ou 2 anos, mas o tempo é relativo senhores(a).
  ----------------------------------------------------
  - Refatorar as funções para arrow functions
  - Estruturar melhor o HTML e organizar e otimizar o CSS.
  - Diminuir a fonte quando ela ocupar 80% da tela
  - Adicionar seção de histórico, para quando for
    clicado o CE Button, a expressão seja inserida nessa seção.
  - Colocar o ícone de BACKSPACE no botão.
  - Encontrar uma forma de afastar os dígitos com um "", mesmo
    podendo inserir números com decimais 
*/

function displayUpdate(text) {
  display.textContent += `${text}`;
  verifyIfGreaterThanEleven(text);
}

function verifyIfGreaterThanEleven() {
  if (display.textContent.length >= 8) {
    display.style.fontSize = "2em";
  }
}

function deleteDigitOfDisplay() {
  let textDisplay = display.textContent;
  let deleteDigit = textDisplay.substring(0, textDisplay.length - 1);
  display.textContent = deleteDigit;
}

function calculateExpression(expression) {
  let finalExpression = eval(expression);
  display.textContent = "";
  displayUpdate(finalExpression);
  fullHistory = expression;
  console.log(fullHistory);
}

function clearDisplay() {
  display.textContent = "";
}

equalSymbol.addEventListener("click", () =>
  calculateExpression(display.textContent)
);

clearButton.addEventListener("click", () => clearDisplay());

deleteButton.addEventListener("click", () => deleteDigitOfDisplay());

historyButton.addEventListener(
  "click",
  () => (display.textContent = fullHistory)
);

numberButtonList.forEach((element) =>
  element.addEventListener("click", () => displayUpdate(element.textContent))
);
