// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 34) console.log('this number');

const calcAge = birthYear => 2024 - birthYear;

console.log(calcAge(2003));
*/

/*
function repeatStr(n, s) {
  let k = '';
  for (let i = 1; i <= n; i++) {
    k += s;
  }
  return k;
}
console.log(repeatStr(3, 'hello'));

function narci(num) {
  const toStr = num.toString();
  const numLen = toStr.length;
  let res = 0;
  for (let i = 0; i < numLen; i++) {
    const k = parseInt(toStr[i]);
    res += Math.pow(k, numLen);
  }
  return res === num;
}

console.log(narci(1543));

function findSmallestInt(arr) {
  let sm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < sm) {
      sm = arr[i];
      //   console.log('This is small number : ' + sm);
    }
  }
  return sm;
}

const array = [34, 15, 88, 2];
const smallNumber = findSmallestInt(array);
console.log(smallNumber);

function removeVowel(sentence) {
  const vowels = ['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O'];
  let newSent = '';
  for (let i = 0; i < sentence.length; i++) {
    if (!vowels.includes(sentence[i])) {
      newSent += sentence[i];
    }
  }
  return newSent;
}

console.log(removeVowel('This website is for losers LOL!'));
*/
