"use strict";

//constructor function
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

//BTS of the 'new' keyword
// 1. New object is created
// 2. Function is called, this = ().
// 3. Object is linked to a prototype
// 4. Function automatically retuns a object with the passed data.
