var inputNumber1 = [];
var inputNumber2 = [];
var displayValue = [];
var operator;

setZero();

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
    setZero();
}

function setZero () {
    document.getElementById('displayValue').innerText = 0;
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

// Checks if negative sign is currently displayed, if so, it removes it
function negative () {
    if (displayValue[0] == '-'){
        displayValue = [];
        showDisplayValue();
    } else {
        showDisplayValue('-');
    }
}

// Changes display value to a percentage by multiplying by 0.01
function percent () {
    percentage = Number(displayValue) * 0.01;
    displayValue = [];
    showDisplayValue(percentage);
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