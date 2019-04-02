var inputNumber1 = 0;
var inputNumber2 = 0;
var displayValue = [];
var operator;

setZero();

// Adds the inputted values into the displayValue array, then updates the calc display
function showDisplayValue (input) {
    displayValue.push(input);

    if (displayValue.length < 10){
        document.getElementById('displayValue').innerText = displayValue.join("");
    } else {
        return;
    }
}

// Clears the current displayValue array and on calc
function clearCalc () {
    displayValue = [];
    inputNumber1 = 0;
    inputNumber2 = 0;
    operator;
    setZero();
}

// Set display to show 0
function setZero () {
    document.getElementById('displayValue').innerText = 0;
}

// Stores the selected operator
function storeOperator (input) {
    storeValueOne();
    operator = input;
    displayValue = [];
}

// Stores the value of the first inputted number into the calculator
function storeValueOne () {
    inputNumber1 = Number(displayValue.join(""));
}

// Stores the value of the second inputted number into the calculator
function storeValueTwo () {
    inputNumber2 = Number(displayValue.join(""));
}

// Calls storeValueTwo to store current displayValue, then calls the operate function
function equals () {
    storeValueTwo();
    operate(operator, inputNumber1, inputNumber2);
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
    roundValue(percentage);
}

// Checks if decimal has already been added
function checkDecimal () {
    console.log("before loop "+displayValue.length)
    for (var i=0; i<=displayValue.length; i++) {
        if (displayValue[i] == ".") {
            return;
        }
    }
    addDecimal();
}

// Adds decimal 
function addDecimal () {
    showDisplayValue('.');
}

// Addition function
function add (inputNumber1, inputNumber2) {
    var value = (inputNumber1 + inputNumber2);
    displayValue = [];
    roundValue(value);
}

// Subtraction function
function subtract (inputNumber1, inputNumber2) {
    var value = (inputNumber1 - inputNumber2);
    displayValue = [];
    roundValue(value);
}

// Multiplication function
function multiply (inputNumber1, inputNumber2) {
    var value = (inputNumber1 * inputNumber2);
    displayValue = [];
    roundValue(value);
}

// Division function
function divide (inputNumber1, inputNumber2) {
    var value = (inputNumber1 / inputNumber2);
    displayValue = [];
    roundValue(value);
}

function roundValue (value) {
    var newValue = parseFloat(value.toFixed(8));
    displayValue = [];
    showDisplayValue(newValue);
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