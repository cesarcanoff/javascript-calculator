var operationArea = document.getElementById("full-operation");
var resultArea = document.getElementById("full-result");

function getElementOfHtml(element) {
  insertTextOnOperationSection(element.innerHTML);
}

function insertTextOnOperationSection(text) {
  let finalText = replaceMultiplicationSymbolToScreenInsert(text);
  operationArea.innerHTML += finalText;
}

function replaceMultiplicationSymbolToScreenInsert(symbol) {
  return symbol === "X" ? symbol = "*" : symbol;
}

function getExpression() {
  return operationArea.innerHTML;
}

function calculatingExpression() {
  let expression = getExpression();
  console.log(eval(expression));
}
