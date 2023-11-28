'use strict';

const Person = function (firstName , birthYear){


    this.firstName = firstName
    this.birthYear = birthYear
    console.log(firstName)


};

const jonas = new Person('Jonas', 1991);

Person.prototype.calcAge = function(){

    console.log(2037 - this.birthYear)

}

jonas.calcAge();
console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype)

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species)

console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.hasOwnProperty('species'))

