"use strict";

function myFunction(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultInput = document.getElementById('result');
    
    if (operation === 'add') {
        resultInput.value = num1 + num2;
    } else if (operation === 'subtract') {
        resultInput.value = num1 - num2;
    } else if (operation === 'multiply') {
        resultInput.value = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            resultInput.value = "Cannot divide by zero";
        } else {
            resultInput.value = num1 / num2;
        }
    }
}