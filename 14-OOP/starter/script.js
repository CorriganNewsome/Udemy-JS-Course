"use strict";

//constructor function
const Person = function (firstName, birthyear) {
  //instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;

  //Method

  /*
  Never use a method inside of a constructor function, because then everytime you run this funciton you will
  also be bringing along this method which you may not necessairly need. Use protoypes instead for that 
  functionality. 
  
  this.calcAge = function () {
     console.log(2037 - this.birthyear);
   };
  */
};

const jonas = new Person("Jonas", 1991);

//BTS of the 'new' keyword
// 1. New object is created
// 2. Function is called, this = ().
// 3. Object is linked to a prototype
// 4. Function automatically retuns a object with the passed data.

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

const jay = "Jay";

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

//Prototypes and Prototypal Inheritance
