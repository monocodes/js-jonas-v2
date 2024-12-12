/////////////////////////////////////////////////
// Scoping in Practice

'use strict';

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
