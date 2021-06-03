
// Demonstration: Simple Function

// function sayHello() {
//     console.log('Hello Everyone');
// }

// sayHello();
// sayHello();

// ---------------------------------------- //

// Demonstration: Parameterized Function

// function getFullName(fname, lname) {
//     console.log(`${fname} ${lname}`);
// }

// getFullName('Bhawna', 'Gunwani');
// getFullName(100, 200);
// getFullName('Bhawna', 'Gunwani', 'Trainer');
// getFullName('Bhawna');

// --------------------------------------- //

// Demonstration: Parameterized Function with Return Statement

// function getFullName(fname, lname) {
//     return `${fname} ${lname}`;
// }

// var result = getFullName('Bhawna', 'Gunwani');
// console.log(result);
// console.log(getFullName('John', 'Smith'));

// --------------------------------------- //

// Demonstration: Function Expression

// var userFullName = function getFullName(fname, lname) {
//     console.log(`${fname} ${lname}`);
// }

// userFullName('Bhawna', 'Gunwani');

// --------------------------------------- //

// Demonstration: Annonymous Function (Unnamed Function)

// var userFullName = function (fname, lname) {
//     console.log(`${fname} ${lname}`);
// }

// userFullName('Bhawna', 'Gunwani');

// --------------------------------------- //

// Demonstration: Arrow Functions

var sayHello = () => console.log('Hello Everyone');

sayHello();

console.log('-------------');

var sayHelloAgain = () => {
    console.log('Hello Everyone');
    console.log('Lets Learn JavaScript');
}

sayHelloAgain();

console.log('-------------');

var addition = (num1, num2) => console.log('Sum of two numbers : ', (num1 + num2));

addition(100, 200);

console.log('-------------');

var sum = (num1, num2) => (num1 + num2);

console.log(sum(1000, 2000));

var sum = (num1, num2) => {
    var result = num1 + num2;
    return result;
};

console.log(sum(1500, 2500));

