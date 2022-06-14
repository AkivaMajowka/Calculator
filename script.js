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

function operate(operation, a, b) {
  switch (operation) {
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
  if (SelectedOperator === "") {
    firstNumberToOperate += e.target.innerText;
  } else {
    secondNumberToOperate += e.target.innerText;
  }
}

function assignOperator(e) {
  if (SelectedOperator == "") {
    SelectedOperator = e.target.innerText;
  } else {
    calculateResult();
    firstNumberToOperate = result;
    secondNumberToOperate = "";
    SelectedOperator = e.target.innerText;
  }
}

function calculateResult() {
  result = operate(
    SelectedOperator,
    parseInt(firstNumberToOperate),
    parseInt(secondNumberToOperate)
  );
  console.log(result);
}

function eraseLastNumber() {
  
}

function resetAll() {
  firstNumberToOperate = "";
  secondNumberToOperate = "";
  SelectedOperator = "";
  result = 0;
}

let numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((i) => i.addEventListener("click", numberCreator));

let operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((i) => i.addEventListener("click", assignOperator));

let resultButton = document.querySelector(".result-button");
resultButton.addEventListener("click", calculateResult);

let eraseButton = document.querySelector(".erase-button");
eraseButton.addEventListener("click", eraseLastNumber);

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetAll);

let firstNumberToOperate = "";
let secondNumberToOperate = "";
let SelectedOperator = "";
let result = 0;
