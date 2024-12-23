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
/*
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
*/

//This key word in action.

// console.log(this);
/*
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  //   console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    //Solution 1
    const self = this; // self or that
    // const isMellenial = function () {
    //       console.log(self);
    //       console.log(self.year >= 1981 && self.year <= 1996);
    //       //   console.log(this.year >= 1981 && this.year <= 1996);
    //     };

    //Solution 2
    const isMellenial = () => {
      //Arrow func use this keyword from its parent
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMellenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 71);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }; //argument function doesn't exist in arrow fun
// addArrow(2, 5, 6);
