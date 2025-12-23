let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(num) {
    currentNumber += num;
    updateDisplay(currentNumber);
}

function chooseOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    let result;
    const prev = 
    parseFloat(previousNumber);
    const current =
    parseFloat(currentNumber);

    if (operator === "+") result = prev + current;
    if (operator === "-") result = prev - current;
    if (operator === "*") result = prev * current;
    if (operator === "/") result = prev / current;

    currentNumber= result;
    operator = "";
    updateDisplay(result);
}
 function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    updateDisplay("");
}
function updateDisplay(value) {
  document.getElementById('display').value = value;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  justCalculated = false;
  updateDisplay("");
}
let justCalculated = false;
// Clear when clicking outside the calculator
document.addEventListener("click", (e) => {
  if (!e.target.closest(".calculator")) {
    clearDisplay();
  }
});
