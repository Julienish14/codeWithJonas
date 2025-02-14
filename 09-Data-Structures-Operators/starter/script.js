'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    [weekdays[3]]: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Before ES6
  //openingHours: openingHours,
  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    startIndex = 1,
    mainIndex = 0,
    address = 'kanombe',
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious past with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },
};

////////////////////////////////////////////////////
// Optional chaining (?)

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

///////////////////////////////////////////////////
//Enhanced Object Literals.

///////////////////////////////////////////////////
//The for-of-loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//This is the old way of doing things

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

//New way (the for-of-loop)
for (const item of menu) console.log(item);

// console.log([...menu.entries()]);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//Samething but in cool way using desctructuring:
console.log('******* Using Destructuring *******');
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

//////////////////////////////////////////////////
//Logical Assignment Operators
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// Nullish assignment operator (null or undefined)

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

//////////////////////////////////////////////////
//The Nullish Coalescing Operator (??)
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
console.log('-------- OR --------');
////////////////////////////////////////
//Short circuiting (&& and ||)

// use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-------- AND --------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Jonas' && 0);

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
/////////////////////////////////////
// Rest pattern and parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 4);
add(3, 5, 6, 8);
add(4, 8, 6, 0, 3, 4, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
////////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); //will be the same as console.log(1, 2, 7, 8, 9)

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array.

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str); //will be the same as 👇🏾
console.log('J', 'o', 'n', 'a', 's');

//console.log(`${...str} Schmedtman`); //Not gonna work with template literal as this type doesn't excepts multiple values separated by a comma.

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*

/////////////////////////////////////////
// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 1,
  startIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  startIndex: 0,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Set a default value

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { close: c, open: o },
} = openingHours;
console.log(c, o);

//////////////////////////////////////////
// Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; //using destructuring
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// De-structuring nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
