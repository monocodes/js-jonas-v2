/////////////////////////////////////////////////
// Functions

'use strict';
/* 
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
  const desc = `${country} has ${population} million people and its capital is ${capitalCity}`;
  return desc;
}

const describedGermany = describeCountry('Germany', 84, 'Berlin');
console.log(describedGermany);

const describedJapan = describeCountry('Japan', 125, 'Tokyo');
console.log(describedJapan);

const describedSpain = describeCountry('Spain', 47, 'Madrid');
console.log(describedSpain);
 */

/////////////////////////////////////////////////
// Function Declarations vs. Expressions
/* 
// // The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// // Create a function expression which does the exact same thing, called percentageOfWorld2, and also call it with 3 country populations (can be the same populations).

// Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const germanyPopulationPercent1 = percentageOfWorld1(84);
const japanPopulationPercent1 = percentageOfWorld1(123);
const spainPopulationPercent1 = percentageOfWorld1(47);
console.log(
  germanyPopulationPercent1,
  japanPopulationPercent1,
  spainPopulationPercent1
);

// Function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const germanyPopulationPercent2 = percentageOfWorld2(84);
const japanPopulationPercent2 = percentageOfWorld2(123);
const spainPopulationPercent2 = percentageOfWorld2(47);
console.log(
  germanyPopulationPercent2,
  japanPopulationPercent2,
  spainPopulationPercent2
);
 */

/////////////////////////////////////////////////
//
