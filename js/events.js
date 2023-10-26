"use strict";

// Event listener for a button click (assuming there's a button with id 'btnNumber2' in the HTML)
document
.getElementById("btnNumber2")
.addEventListener("mouseover", function () {
    alert("Thank you for hovering over button 2");
  });

  // button 2 click event listener
document
.getElementById("myAge")
.addEventListener("keydown", function () {
    alert("You pressed a key");
  });

 // show key message
 const myAge = document.getElementById("myAge");

 myAge.addEventListener("keydown", showKeyPressedMessage);
 
 function showKeyPressedMessage() {
   alert("You pressed a key");

 }