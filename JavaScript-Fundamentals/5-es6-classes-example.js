
/* Demonstration 1: Classe with Default Constructor */

// class Person {
//     constructor() {
//         this.firstName = 'Bhawna';
//         this.lastName = 'Gunwani';
//     }
//     displayDetails() {
//         console.log(`First Name : ${this.firstName}`);
//         console.log(`Last Name : ${this.lastName}`);
//     }
// }

// var p1 = new Person();
// p1.displayDetails();
// console.log('--------');
// var p2 = new Person();
// p2.displayDetails();

// -------------------------------------------------------------- //

/* Demonstration 2: Classes with Parameterized Constructor */

// class Person {
//     constructor(fname, lname) {
//         this.firstName = fname || 'Unknown';
//         this.lastName = lname || 'Unknown';
//     }
//     displayDetails() {
//         console.log(`First Name : ${this.firstName}`);
//         console.log(`Last Name : ${this.lastName}`);
//     }
// }

// var p1 = new Person('Kartik', 'Sharma');
// p1.displayDetails();
// console.log('--------');
// var p2 = new Person('Roger', 'Lee');
// p2.displayDetails();
// console.log('--------');
// var p3 = new Person();
// p3.displayDetails();

// -------------------------------------------------------------- //

/* Demonstration 3: Inheritance */

class Person {
    constructor(fname, lname) {
        console.log('Person constructor invoked..');
        this.firstName = fname || 'Unknown';
        this.lastName = lname || 'Unknown';
    }
    static applicationDetails() {
        this.applicationVersion = 'v001';
        this.applicationName = 'Simplilearn Admin Portal';
        console.log(`Application Version : ${this.applicationVersion}`);
        console.log(`Application Name : ${this.applicationName}`);
    }
    displayDetails() {
        console.log(`First Name : ${this.firstName}`);
        console.log(`Last Name : ${this.lastName}`);
    }
}

class Employee extends Person {
    constructor(fname, lname, salary) {
        console.log('Employee constructor invoked..')
        super(fname, lname);
        this.salary = salary;
    }
    displayDetails() {
        super.displayDetails();
        console.log(`Employee Salary : ${this.salary}`);
    }
}

Person.applicationDetails();

var emp1 = new Employee('King', 'Kochhar', 12000);
emp1.displayDetails();

var emp2 = new Employee('John', 'Smith', 12000);
emp2.displayDetails();

// -------------------------------------------------------------- //