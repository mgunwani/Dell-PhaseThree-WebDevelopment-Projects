
/**
 * JavaScript Objects to store key-value pairs.
 * There are two ways to create objects in JS:
 *  1. Object Literal
 *  2. Object Constructor
 *  
 */


// // Creating Empty Literal
// var person = {};
// // Attaching Properties and Methods to it.
// person.firstName = "King";
// person.lastName = "Kochhar";
// person.getFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`)
// }

// Creating Object Literal and Attaching Properties and Methods to it.
var person = {
    firstName: "King",
    lastName: "Kochhar",
    address: {
        street: 'Civil Lines',
        city: 'New Delhi',
        country: 'India'
    },
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
};


// Access Object Literal
console.log(person.firstName);
console.log(person['lastName']);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);
person.getFullName();