'use strict';

//========== ******* CHALLENGES ******* ========

//CHALLENGE ONE: You are given a number say true or false if number is narcissistic ex: 153 -> 1^3 + 5^3 + 3^3

/*
function isItNarcissistic(num) {
  const toStr = num.toString();
  const numLeng = toStr.length;
  let result = 0;
  for (let i = 0; i < numLeng; i++) {
    const y = parseInt(toStr[i]);
    result += Math.pow(y, numLeng);
  }
  return result === num;
}

console.log(isItNarcissistic(153));
console.log(isItNarcissistic(13));

//CHALLENGE TWO: Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeater(n, s) {
  let rep = '';
  for (let i = 1; i <= n; i++) {
    rep += s;
  }
  return rep;
}
console.log(repeater(4, 'HelloWorld|'));
*/
