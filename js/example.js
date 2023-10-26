//Global variables is not wrapped in a function and can be used by many functions

//Shoe is the objectname
//brand is a property of the object Shoe

let shoe = {
    brand: "Nike",
    model: "Air Max",
    size: 42,
    price: 120.5,
    isAvailable: true,
    colors: ["Red", "Blue", "Black"], // Array of strings
    discount: function () {
      // Method in an object
      if (isSaleActive) {
        return this.price * 0.9;
      }
      return this.price;
    },
  };
  
function displayShoeInfo() {
    console.log(
      `The brand is called ${shoe.brand} and this product's model is ${shoe.model}. and the available colours are ${shoe.colors}`
    );
  }
  displayShoeInfo();

  console.log(shoe.discount());

//example of a discount function
  function displayShoeInfo() {
    console.log(
      `The brand is called ${shoe.brand} and this product's model is
       ${shoe.model}. The available colours are ${shoe.colors.join(", ")} 
       and the discount price is  ${shoe.discount()}  
       `
    );

//example of array of strings (students)
let students = [
    { firstname: "Edson", lastname: "Peraza"},
    { firstname: "Rubia", lastname: "Agripino"},
    { firstname: "Derek", lastname: "Li"},
];
  }
//example of For Loop (students)
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    console.log("First Name: " + student.firstname + ", Last Name: " + student.lastname);
}

//write down a For loop that will display all the shoes max price
for(let index=0; index< shoe.length; index++){

//output
for(let i=0; i < shoe.length; i++){
if (shoe[I].price <== maxPrice){
console.log(shoe[i].model);}

//display everything else
shoes.forEach((shoe) => {
    for (let property in shoe) {
       console.log(`${property}: ${shoe[property]}`);
     }
   });