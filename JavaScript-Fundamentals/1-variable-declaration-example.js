// var value = 100;

// console.log(value);
// console.log(typeof value);

// value = "King Kochhar";

// console.log(value);
// console.log(typeof value);

// ------------------------------------------------- //

// var - Global Scope

// var message = 'Hello World';

// function print() {
//     var message = 'Hello Everyone';
//     console.log(message);
//     var welcomeMessage = 'Lets Learn JavaScript';
//     console.log(welcomeMessage);
// }

// print();
// console.log(message);
// console.log(welcomeMessage);



// ------------------------------------------------- //

// let, const - Block and Function Scope

// let message = "Good Morning";
// let welcomeMessage = "Lets Learn JavaScript";

// function print() {
//     let message = "Good Afternoon";
//     console.log(message);
//     console.log(welcomeMessage);
// }

// print();
// console.log(message);
// console.log(welcomeMessage);

// ---------------------------------------------- //

// let, const - Block and Function Scope

const message = "Good Morning";
const welcomeMessage = "Lets Learn JavaScript";

function print() {
    message = "Good Afternoon"; // Not Assignable
    console.log(message);
    console.log(welcomeMessage);
}

print();
console.log(message);
console.log(welcomeMessage);

