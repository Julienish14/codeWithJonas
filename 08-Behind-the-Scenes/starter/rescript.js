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
  }
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

var x = 1; //variable declared with var will create propert on global window object.
let y = 5;
const z = 7;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  //   console.log(this);
};
calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2024 - 1990);
  //   console.log(this); //arrow function doesn't get it own this keyword
};
calcAgeArrow();
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

matilda.calcAge = jonas.calcAge; //Method borrowing
matilda.calcAge();

const f = jonas.calcAge;
f();

// var firstName = 'Matilda';
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
*/