/////////////////////////////////////////////////
// Scoping in Practice

'use strict';
/* 
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;

      // Creating NEW variable with same name as outer scope's variable
      // Variable with the same name can be declared inside functions and blocks even if variable with the same name is already declared in a global scope
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      // In that case it will change the existent variable
      // If do const output = 'NEW OUTPUT!' it will be a new variable and won't affect anything
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);

    // Variables declared with var are not block-scoped
    console.log(millennial);

    // Functions are also blocked-scoped in strict mode
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
 */

/////////////////////////////////////////////////
// Hoisting and TDZ in Practice
/* 
// Variables
console.log(me); // undefined
// console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow); // undefined
// console.log(addArrow(2, 3)); // Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(x === window.y); // false
console.log(x === window.z); // false
 */

/////////////////////////////////////////////////
// The this Keyword in Practice
/* 
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

// Copy function from one object to another
matilda.calcAge = jonas.calcAge;

// this keyword is always point to an object that is calling the method
matilda.calcAge();

const f = jonas.calcAge;
f();
 */

/////////////////////////////////////////////////
// Regular Functions vs. Arrow Functions
/* 
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // Pre ES6 solution: to preserve this keyword for function inside method inside object we can use self/this variable
    // const self = this; // self or that
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // Solution 2
    // Current solution: to preserve this keyword for function inside method inside object we can use arrow function because they get this keyword from lexical scope
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // Arrow functions don't have arguments keyword
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
 */

/////////////////////////////////////////////////
// Memory Management: Primitives vs. Objects
