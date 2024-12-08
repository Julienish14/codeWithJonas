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

//CHALLENGE THREE: Given an array of integers your solution should find the smallest integer.

/*
function findSmall(arr) {
    let smallNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallNum) {
        smallNum = arr[i];
      }
    }
    return smallNum;
  }
  const thisArr = [34, 12, 52, 33];
  console.log(`This is the small number:  ${findSmall(thisArr)}`);
  */

/*

  //CHALLENGE FOUR: write a function that takes a string and return a new string with all vowels removed.

function removeVowel(sent) {
    const allVowels = ['a', 'i', 'e', 'u', 'o', 'A', 'I', 'E', 'U', 'O'];
    let newSent = '';
    for (let i = 0; i < sent.length; i++) {
      if (!allVowels.includes(sent[i])) {
        newSent += sent[i];
      }
    }
    return newSent;
  }

  console.log(removeVowel('This is The SENTENCE and removed vowels'));

  */

/*
//CHALLENGE FIVE: Make a function that reverses whatever we pass into it.

const reverses = function (whatever) {
    let newWhat = ' ';
    for (let i = whatever.length - 1; i >= 0; i--) {
      newWhat += whatever[i];
    }
    return newWhat;
  };

  console.log(reverses('Hello My Baby!!!'));

  */

/*
//CHALLENGE SIX: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  str = str.toLowerCase();
  const strin = str.split('');
  strin.sort();
  const xx = [];
  const oo = [];

  for (let i = 0; i < strin.length; i++) {
    if (strin[i] === 'x') xx.push(strin[i]);
    else if (strin[i] === 'o') oo.push(str[i]);
  }
  if (xx.length === oo.length) return true;
  else if (!strin.includes('o') && !strin.includes('x')) return true;
  return false;
}

//Other simple way to do it like PRO 😎
function XOo(str) {
  str = str.toLowerCase().split('');
  return (
    str.filter(x => x === 'x').length === str.filter(o => o === 'o').length
  );
}

console.log(XOo('zpspsps'));
console.log(XOo('xooxx'));
console.log(XOo('ooxXm'));
console.log(XOo('zpzpzpzpp'));
console.log(XOo('zzoo'));

*/

/*
//CHALLENGE SEVEN: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.

const arrDiffe = function (a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
};

//Other simple way to do it like PRO 😎

const arrDiff = (a, b) => {
  return a.filter(i => !b.includes(i));
};

console.log(arrDiffe([2, 4, 4, 1, 5], [2, 4, 3]));
*/
