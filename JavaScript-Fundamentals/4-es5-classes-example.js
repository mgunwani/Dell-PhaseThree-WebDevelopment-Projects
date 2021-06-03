
/* JavaScript Class */

/*
function Person() {
    this.firstName = 'King';
    this.lastName = 'Kochhar';
    this.displayDetails = function () {
        console.log(`First Name : ${this.firstName}`);
        console.log(`Last Name : ${this.lastName}`);
    }
}

var p1 = new Person();
p1.displayDetails();

var p2 = new Person();
p2.displayDetails();
*/

// ----------------------------------------------- //

/* JavaScript Classes and Constructor */

function Person(fname, lname) {
    this.firstName = fname || 'Unknown';
    this.lastName = lname || 'Unknown';
    this.displayDetails = function () {
        console.log(`First Name : ${this.firstName}`);
        console.log(`Last Name : ${this.lastName}`);
    }
}

var p1 = new Person();
p1.displayDetails();

console.log('---------');

var p2 = new Person('Sarah', 'Bowling');
p2.displayDetails();
