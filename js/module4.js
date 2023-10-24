"use strict";
function displayAge(myAge) {
    let messageDiv = document.getElementById("messageDiv");
    messageDiv.innerHTML = `Hi, I'm am ${myAge} years old`;
  
    //Desired Output
    // Hi, I`m am 24 years old.
}

// We would want this code to run when the user clicks the Show button
let name = nameField.value;
let age = ageField.value;
let message =
  `Hi ${name}! I hear you are ${age} years old!`;


// desired output/
var currentAge;
var retirementAge;

// calculations for years left til retirement/
function calculateRetirement(){
  //input
  let myAge = parseFloat(document.getElementById("currentAge").value);

//calculation 
  let retirementAge= 65;
  let yearsTilRetirement = 65 - myAge;

//output
  let messageDiv= 'Hi i am ${currentAge}' years old and have ${yearsLeft} till retirement';
  document.getElementById('messageDiv').innerHTML = messageDiv;
}





