"use strict";

switch (true) {
    case (age >= 0 && age <= 12):
    
//input
}
/**
 * Categorizes age into one of four categories: Child, Teenager, Adult, or Senior.
 * @param {number} age - The age to categorize.
 * @return {string} - The age category.
 */
function categorizeAge(age){
switch (true){
case(age >= 0 && age <= 12):
return "child";
case(age >= 13 && age <= 19):
return "teenager";
case(age >= 20 && age <= 59):
return "adult";
case(age >= 20 && age <= 59):
return "elderly";

//output display
let Age= 25;
let personCategory=categorizeAge(age);
console.log('the person is ${categorize');
}

// Input validation
if (typeof age !== 'number' || age < 0) {
    throw new Error("Invalid age input");
}


}