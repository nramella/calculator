// Variables //
const number = document.querySelectorAll(".numBtn");
const operator = document.querySelectorAll(".operatorBtn");
const percent = document.querySelector(".percentBtn");
const decimal = document.querySelector(".decBtn");
const clear = document.querySelector(".clearBtn");
const negative = document.querySelector(".negBtn");
const equals = document.querySelector(".equalsBtn");
const equationDisplay = document.querySelector(".equationDisplay");
const resultsDisplay = document.querySelector(".resultsDisplay");

var equationDisplayArray = [];
var equationArray = [];
var resultsValue = [];
var operatorSelection;
var decimalCounter = 0;

// Creates array with the full equation to be solved // 
function createEquationArray () {
    var op;
    var number = '';

    for (var i = 0; i<equationDisplayArray.length; i++){
        if (equationDisplayArray[i] == '+' ||
            equationDisplayArray[i] == '-' ||
            equationDisplayArray[i] == '*' ||
            equationDisplayArray[i] == '/' ||
            equationDisplayArray[i] == '=') { 
                if (equationDisplayArray[i] == '=') {
                    equationArray.push(number);
                } else {
                    op = equationDisplayArray[i];
                    equationArray.push(number);
                    equationArray.push(op);
                    op;
                    number = '';
                }
        } else {
            number += equationDisplayArray[i];
        }
    }
}

// ---- Math Functions ---- //

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function makePercent () {
    var percentValue; 

    if (resultsValue[0] != 0){
        percentValue = resultsValue/100
        resultsValue = [];
        return percentValue;
    }
}

// Checks if decimal has already been added
function checkDecimal () {
    if (decimalCounter <= 1) {
        return true;
    } else {
        return false;
    }
}

// Calls appropriate operator function
function operate (operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// Gets the final result from the equation array //
function getResult () {
    for (var i = 0; i<equationArray.length; i++){
        if (equationArray[i] == '*' || equationArray[i] == '/') {
            equationArray[i-1] = operate(equationArray[i], equationArray[i-1], equationArray[i+1]);
            equationArray.splice(i, 1);
            equationArray.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i<equationArray.length; i++){
            if (equationArray[i] == '+' || equationArray[i] == '-') {
            equationArray[i-1] = operate(equationArray[i], Number(equationArray[i-1]), Number(equationArray[i+1])); 
            equationArray.splice(i, 1);
            equationArray.splice(i, 1);
            i--;
        }
    }
    resultValue = equationArray;
    return resultValue;
}



// ---- Display Functions ---- //

// Updates the result display
function updateResultsDisplay (input) {
    if (resultsValue[0] == 0){
        resultsValue = [];
    }
    resultsValue.push(input);
    resultsDisplay.innerHTML = resultsValue.join("");
}

// Updates the current equation displayed on the calculator 
function updateEquationDisplay (input) {
    if (equationDisplayArray[0] == 0){
        equationDisplayArray = [];
    }
    equationDisplayArray.push(input);
    equationDisplay.innerHTML = equationDisplayArray.join("");
}

// Checks if result has been displayed in order to operate on it
function checkDisplay (operator) {
    for (var i=0; i<equationDisplayArray.length; i++) {
        if (equationDisplayArray[i] == '=') {
            if (operator == '+' ||
                operator == '-' ||
                operator == 'x' ||
                operator == '/') {
                    var oldResult = resultsValue;
                    clearAll();
                    updateEquationDisplay(oldResult);
                    return;
            } 
            return true;
        }
    }
}

// Clears the  displays
function clearAll () {
    equationDisplayArray = [];
    equationArray = [];
    resultsValue = [];
    operatorSelection;
    decimalCounter = 0;
    updateEquationDisplay(" ");
    updateResultsDisplay(0);
}




// ---- Event Listners ---- //

number.forEach(function(e) {
    e.addEventListener('click', function () {
        if (checkDisplay()) {
            clearAll();
            updateEquationDisplay(this.id);
        } else {
            updateEquationDisplay(this.id);
        }
        
    });
});

operator.forEach(function(e) {
    e.addEventListener('click', function () {
        decimalCounter = 0; // reset counter for decimal
        checkDisplay(this.id);
        updateEquationDisplay(this.id);
    });
});

equals.addEventListener('click', function () {
    updateEquationDisplay(this.id)
    createEquationArray();
    updateResultsDisplay(getResult());
});

clear.addEventListener('click', function () {
    clearAll();
});

decimal.addEventListener('click', function () {
    decimalCounter++;
    if (checkDecimal()){
        updateEquationDisplay(this.id);
    }
});

negative.addEventListener('click', function () {
    updateEquationDisplay(this.id)

});

percent.addEventListener('click', function () {
    
    updateResultsDisplay(makePercent());
});