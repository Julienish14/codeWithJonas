'use strict';

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  // console.log(firstName); //here what happens is called variable lookup, the variable was not in this scope, it loops up in scope chain and find it in parent scope

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //Var is function scope not like let&const(ES6)

      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      //output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); //is block scope
    console.log(millenial);
    //console.log(add(4, 5)); //bcz we use strict we can't use function from block
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
console.log(calcAge(1991));
// console.log(age);
// printAge();

// ------- HOSTING --------

//variables

console.log(me);
//console.log(job);
//console.log(year); // both let&const create a TDZ:Temporal Dead Zone when used before initialization.

var me = 'Julien';
let job = 'teacher';
const year = 1997;

//Functions

console.log(addDecl(3, 5));
// console.log(addExpr(3, 5)); // same hear both Exp&Arro create TDZ
// con sole.log(addArrow(3, 5)); //var gives not a function error bcz it is undifined

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

console.log(numProducts);
if (!numProducts) deleteShoppingCart(); //function will still be excuted even thou the numProducs is undefined. Again don't use Var

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
