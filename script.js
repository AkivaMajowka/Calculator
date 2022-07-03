function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;

    case "-":
      return subtract(a, b);
      break;

    case "x":
      return multiply(a, b);
      break;

    case "÷":
      return divide(a, b);
      break;
  }
}

function numberCreator(e) {
  //error handler
  if (lastAction == "result") {
    return
  }

  if (selectedOperator === "") {
    firstNumberToOperate += e.target.innerText;

    lastAction = "number1";

    displayBig = firstNumberToOperate;
    updateDisplay(displayBig);
  } else {
    secondNumberToOperate += e.target.innerText;

    lastAction = "number2";

    displaySmall = `${firstNumberToOperate} ${selectedOperator}`;
    displayBig = secondNumberToOperate;
    updateDisplay(displayBig, displaySmall);
  }
}

function assignOperator(e) {
  //error handler
  if (firstNumberToOperate === "" || lastAction === "operator") {
    return;
  }

  // Handles the first time operating
  if (selectedOperator == "") {
    selectedOperator = e.target.innerText;

    //display updates
    displaySmall = firstNumberToOperate;
    displayBig = selectedOperator;
    updateDisplay(displayBig, displaySmall);
  }
  // Handles a second operation before the result button is pressed
  else {
    calculateResult();
    firstNumberToOperate = result;
    secondNumberToOperate = "";
    selectedOperator = e.target.innerText;

    //display updates
    displaySmall = `${result} ${selectedOperator}`;
    updateDisplay("0", displaySmall);
  }
  lastAction = "operator";
}

function calculateResult() {
  //Error handler
  if (secondNumberToOperate == "") {
    return
  }

  result = operate(
    selectedOperator,
    Number(firstNumberToOperate),
    Number(secondNumberToOperate)
  );
  lastAction = "result";

  displaySmall = `${firstNumberToOperate} ${selectedOperator} ${secondNumberToOperate}`;
  displayBig = result;
  updateDisplay(displayBig, displaySmall);
}

function resetAll() {
  lastAction = "";
  firstNumberToOperate = "";
  secondNumberToOperate = "";
  selectedOperator = "";
  result = 0;

  updateDisplay("0");
}

function updateDisplay(a, b = "") {
  let mainText = document.querySelector(".display__big-text");
  let secondText = document.querySelector(".display__small-text");

  mainText.innerText = a;
  secondText.innerText = b;
}

let numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((i) => i.addEventListener("click", numberCreator));

let operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((i) => i.addEventListener("click", assignOperator));

let resultButton = document.querySelector(".result-button");
resultButton.addEventListener("click", calculateResult);

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetAll);

let lastAction = "";
let firstNumberToOperate = "";
let secondNumberToOperate = "";
let selectedOperator = "";
let displayBig = "";
let displaySmall = "";
let result = 0;
