
/* Object Constructor */

var person = new Object();
person.firstName = "King";
person.lastName = "Kochhar";
person.age = 30;
person.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`)
}

console.log(person.firstName);
console.log(person['lastName']);
if (person.hasOwnProperty('age'))
    console.log(person.age);
person.getFullName();