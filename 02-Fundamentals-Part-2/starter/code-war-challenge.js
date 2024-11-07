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
