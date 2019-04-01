var inputNumber1 = [];
var inputNumber2 = [];
var displayValue = [];
var operator;

showDisplayValue(0);

// Adds the inputted values into the displayValue array, then updates the calc display
function showDisplayValue (input) {
    displayValue = [];
    displayValue.push(input);
    console.log(displayValue.join(""));
    document.getElementById('displayValue').innerText = displayValue.join("");
}

// Clears the current displayValue array and on calc
function clearCalc () {
    displayValue = [0];
    operator;
    showDisplayValue(displayValue);
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

// Addition function
function add (inputNumber1, inputNumber2) {
    var value = inputNumber1 + inputNumber2;
    displayValue = [];
    showDisplayValue(value);
}

// Subtraction function
function subtract (inputNumber1, inputNumber2) {
    var value = inputNumber1 - inputNumber2;
    displayValue = [];
    showDisplayValue(value);
}

// Multiplication function
function multiply (inputNumber1, inputNumber2) {
    var value = inputNumber1 * inputNumber2
    displayValue = [];
    showDisplayValue(value);
}

// Division function
function divide (inputNumber1, inputNumber2) {
    var value = inputNumber1 / inputNumber2;
    displayValue = [];
    showDisplayValue(value);
}

// Calls the appropriate function based on the operator and passes the two inputted numbers to them
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