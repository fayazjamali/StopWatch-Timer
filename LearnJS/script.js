// let random = Math.floor(Math.random(10) * 10 + 1);
 
// if (random >= 7) {
//     console.log("Yes now you won, Got ");
//     console.log(random);
// }


// 0 - 5 = Baby   Free
// 5 - 10 = child  $5
// 10 - 18  = teen  $10
// 18 - 65 = Adult  $20
// 65 = Seniors  $22

// const age = prompt("How old are you?")

// if (age < 5 ) {

//     document.getElementById("text").innerHTML = "You are baby and you get it for Free";
// } else if (age < 10) {
//     console.log("You are Child, You have to pay $5.");
// }else if (age < 18) {
//     console.log("You are Teen, You have to pay $10.");
// }else if (age < 65) {
//     console.log("You are Adult, You have to pay $20.");
// }else if (age > 65) {
//     console.log("You are Seniors! We respect you But You have to pay $22.");
// }



// // Variables and Data Types:

// let age = 25;           // Declare a variable called 'age'
// const name = "John";    // Declare a constant variable called 'name'
// var score = 95;         // An older way to declare a variable (avoid using 'var')

// // Data types: number, string, boolean, null, undefined, object, array


// // Operators:

// let x = 10;
// let y = 5;
// let sum = x + y;        // Addition
// let difference = x - y; // Subtraction
// let product = x * y;    // Multiplication
// let quotient = x / y;   // Division
// let isTrue = x > y;     // Comparison (returns boolean)


// // Conditional Statements:

// if (condition) {
//     // Code to execute if the condition is true
// } else {
//     // Code to execute if the condition is false
// }

// // Example:
// let num = 8;
// if (num > 10) {
//     console.log("Number is greater than 10");
// } else {
//     console.log("Number is not greater than 10");
// }



// // Loops:

// // For Loop
// for (let i = 0; i < 5; i++) {
//     // Code to repeat
// }

// // While Loop
// let i = 0;
// while (i < 5) {
//     // Code to repeat
//     i++;
// }


// // Functions:

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// let message = greet("Alice"); // Call the function



// // Arrays:

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits[0]); // Accessing array elements
// fruits.push("grape");   // Adding an element


// // Objects:

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };
// console.log(person.firstName); // Accessing object properties
// person.age = 31;                // Modifying a property



// // Events and Event Handling:

// // HTML: <button id="myButton">Click Me</button>
// const button = document.getElementById("myButton");
// button.addEventListener("click", function() {
//     // Code to run when the button is clicked
// });



// // DOM Manipulation:

// // Change text of an element
// document.getElementById("myElement").textContent = "New Text";

// // Add a new element
// let newElement = document.createElement("div");
// newElement.textContent = "Hello!";
// document.body.appendChild(newElement);


// const ageInput = document.getElementById('age');
// const submitButton = document.getElementById('submitButton');

// // Add a click event listener to the submit button
// submitButton.addEventListener('click', function() {
//     // Get the value from the input field
//     const ageValue = ageInput.value;

//     if (ageValue < 5 ) {

//         document.getElementById("text").innerHTML = "You are baby and you get it for Fre
//     } else if (ageValue < 10 ) {

//         document.getElementById("text").innerHTML = "You are Child and you get it for $5 only";
//     } else if (ageValue < 18 ) {

//         document.getElementById("text").innerHTML = "You are Teen and you get it for $10";
//     } 
//     else if (ageValue < 65 ) {

//         document.getElementById("text").innerHTML = "You are Adult and you get it for $20";
//     } else if (ageValue > 65 ) {

//         document.getElementById("text").innerHTML = "You are Seniors! We respect you But You have to pay $22.";
//     } 
// });

let password = prompt("Enter your new password")

if (password >=) {
    console.log("YOUR PASSWORD IS LONG ENOUGH");
} else {
    console.log("YOUR PASSWORD MUST BE 6 OR MORE CHARACTORS LONG")
}