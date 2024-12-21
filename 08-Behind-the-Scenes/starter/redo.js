'use strict';
/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating new variable as same as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      output = `NEW OUTPUT!`;

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(3, 4));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

*/

//HOISTING and TDZ

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(4, 5));
// console.log(addExpr(4, 5));
console.log(addArrow);
// console.log(addArrow(4, 5));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 100;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
