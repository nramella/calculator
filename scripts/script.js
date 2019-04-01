var inputNumber1 = [];
var inputNumber2 = [];
var displayValue = [];
var operator;

// Adds the inputted values into the displayValue array, then updates the calc display
function showDisplayValue (input) {
    displayValue.push(input);
    console.log(displayValue.join(""));
    document.getElementById('displayValue').innerText = displayValue.join("");
}

// Clears the current displayValue array and on calc
function clearCalc () {
    displayValue = [];
    operator;
    showDisplayValue();
}

// Stores the value of the first inputted number into the calculator
function storeValueOne (inputOperator) {
    inputNumber1 = Number(displayValue.join(""));
    operator = inputOperator;
    console.log(inputNumber1);
    console.log(operator);
    displayValue = [];
    
}

// Stores the value of the second inputted number into the calculator
function storeValueTwo () {
    inputNumber2 = Number(displayValue.join(""));
    console.log(inputNumber2);

    operate(operator, inputNumber1, inputNumber2)
}

function add (inputNumber1, inputNumber2) {
    var value = inputNumber1 + inputNumber2;
    console.log("Equals "+value);
    displayValue = [];
    showDisplayValue(value);
}

function subtract (inputNumber1, inputNumber2) {
    var value = inputNumber1 - inputNumber2;
    console.log(value);
    displayValue = [];
    showDisplayValue(value);
}

function multiply (inputNumber1, inputNumber2) {
    var value = inputNumber1 * inputNumber2
    console.log(value);
    displayValue = [];
    showDisplayValue(value);
}

function divide (inputNumber1, inputNumber2) {
    var value = inputNumber1 / inputNumber2;
    console.log(value);
    displayValue = [];
    showDisplayValue(value);
}

function operate (operator, inputNumber1, inputNumber2) {
    if (operator == "add") {
        add(inputNumber1, inputNumber2);
    } else if (operator == "subtract") {
        subtract(inputNumber1, inputNumber2)
    } else if (operator == "multiply") {
        multiply(inputNumber1, inputNumber2)
    } else if (operator == "divide") {
        divide(inputNumber1, inputNumber2)
    } 
}