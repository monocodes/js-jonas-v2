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
// Basic Array Operations (Methods)
/* 
// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// 3. Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// 4. If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbours = [
  'Denmark',
  'Netherlands',
  'Belgium',
  'Luxembourg',
  'France',
  'Switzerland',
  'Austria',
  'Czech Republic',
  'Poland',
];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop('Utopia');
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log(
    'Probably not a central european country or it might be Germany itself :D'
  );
}
// console.log(neighbours.indexOf('Luxembourg'));
// neighbours[3] = 'Kingdom of Luxembourg';
neighbours[neighbours.indexOf('Luxembourg')] = 'Kingdom of Luxembourg';
console.log(neighbours);
 */

/////////////////////////////////////////////////
// Introduction to Objects
/* 
// 1. Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
  country: 'Germany',
  capital: 'Berlin',
  language: 'German',
  population: 84,
  neighbours: [
    'Denmark',
    'Netherlands',
    'Belgium',
    'Luxembourg',
    'France',
    'Switzerland',
    'Austria',
    'Czech Republic',
    'Poland',
  ],
};
 */

/////////////////////////////////////////////////
// Dot vs. Bracket Notation
/* 
// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

const myCountry = {
  country: 'Germany',
  capital: 'Berlin',
  language: 'German',
  population: 84,
  neighbours: [
    'Denmark',
    'Netherlands',
    'Belgium',
    'Luxembourg',
    'France',
    'Switzerland',
    'Austria',
    'Czech Republic',
    'Poland',
  ],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population = 86;
console.log(myCountry.population);
myCountry['population'] = myCountry.population - 2;
console.log(myCountry.population);

// Jonas solution
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
 */

/////////////////////////////////////////////////
// Object Methods
/* 
// 1. Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// 2. Call the describe method.

// 3. Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

const myCountry = {
  country: 'Germany',
  capital: 'Berlin',
  language: 'German',
  population: 84,
  neighbours: [
    'Denmark',
    'Netherlands',
    'Belgium',
    'Luxembourg',
    'France',
    'Switzerland',
    'Austria',
    'Czech Republic',
    'Poland',
  ],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
 */

/////////////////////////////////////////////////
// Iteration: The for Loop
/* 
// 1. There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

for (let i = 1; i < 50; i++) {
  console.log(`Voter number ${i} is currently voting 🗳️`);
}
 */

/////////////////////////////////////////////////
// Looping Arrays, Breaking and Continuing
/* 
// 1. Let's bring back the populations array from a previous assignment.

// 2. Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// 3. Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

const populations = [84, 123, 47, 5];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
 */

/////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
/* 
// 1. Store this array of arrays into a variable called listOfNeighbours:
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const country = listOfNeighbours[i];
  for (let index = 0; index < country.length; index++) {
    console.log(`Neighbour: ${country[index]}`);
  }
}

// Jonas solution
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'],
//   ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
 */

/////////////////////////////////////////////////
// The while Loop
/* 
// 1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// 2. Reflect on what solution you like better for this task: the for loop or the while loop?

const populations = [84, 123, 47, 5];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
 */
