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

// Create a function expression which does the exact same thing, called percentageOfWorld2, and also call it with 3 country populations (can be the same populations).

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
// Arrow Functions
/* 
// 1. Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = population => (population / 7900) * 100;
const germanyPopulationPercent3 = percentageOfWorld3(84);
const japanPopulationPercent3 = percentageOfWorld3(123);
const spainPopulationPercent3 = percentageOfWorld3(47);
console.log(
  germanyPopulationPercent3,
  japanPopulationPercent3,
  spainPopulationPercent3
);
 */

/////////////////////////////////////////////////
// Functions Calling Other Functions
/* 
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
  const percPopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percPopulation}% of the world `;
};

console.log(describePopulation('Germany', 84));
console.log(describePopulation('Japan', 123));
console.log(describePopulation('Spain', 47));
 */

/////////////////////////////////////////////////
// Introduction to Arrays
/* 
// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// 2. Log to the console whether the array has 4 elements or not (true or false).

// 3. Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

const populations = [84, 123, 47, 5];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
 */

/////////////////////////////////////////////////
//
