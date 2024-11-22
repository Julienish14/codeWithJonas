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
