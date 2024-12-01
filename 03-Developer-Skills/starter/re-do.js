'use strict';
/*
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

1. How to not use(skip) error?
2. How to calculate amplitude. maxTemp - minTemp
3. How to cal Max & Min element in array.
*/
const tempAmplitude = function (temp1, temp2) {
  const temp = temp1.concat(temp2);
  console.log(temp);
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    let currentTemp = temp[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const tempRoom1 = [23, 12, 44, 12];
const tempRoom2 = ['Error', 3, 'Error'];
const amplitude = tempAmplitude(tempRoom1, tempRoom2);
console.log(amplitude);

//Debugging with the console and breakingpoints
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) FIX
    // value: Number(prompt('Degrees celsius: ')),
    value: 10,
  };

  // FIND
  console.table(measurement);

  console.log(typeof measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 275;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger

const tempAmplitudeBug = function (temp1, temp2) {
  const temp = temp1.concat(temp2);
  console.log(temp);

  // FIX
  let max = 0;
  let min = 0;
  for (let i = 0; i < temp.length; i++) {
    let currentTemp = temp[i];
    if (typeof currentTemp !== 'number') continue;

    // debugger;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const tempRoom1 = [23, 12, 44, 12];
const tempRoom2 = ['Error', 3, 'Error'];
const amplitudeBug = tempAmplitudeBug(tempRoom1, tempRoom2);

// A) IDENTIFY
console.log(amplitudeBug);

*/

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//Understand the problem
// - given max temp display them with days. (Mines)
// - Array transformed to string, separated by ... (Jonas)
// - What is the X days? Answer: index +1 (Jonas)

//Break it up into sub-problems.
//- How to display given element from array? (Mines)
//- How to display days incrementing  (Mines)
//- How to make that string (Mines)

// Jonas

// - Transform array into string
// - Transform each element to string with °c
// - Strings needs to contain day (index +1)
// - Add ... between elements and start and end of string.
// - Log string to console

// My solution with low level of Problem solving 😅

// Jonas's solution. Pro😎

/*
const printForecastJ = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}°C in ${i + 1} days `;
        }
        console.log(str + '...');
        };
        // const maxTemp = [17, 21, 23];
        const maxTemp = [12, 5, -5, 0, 4];
        printForecastJ(maxTemp);
        console.log(printForecast(maxTemp));
        
        */

////////////////////////
//CHALLENGES From CodeWar

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */

//Understand problem
// - What is isogram? no repeating letters
// - Only letters.
// - Empty string is an isogram
// - Ignore letter case.

// Break it into sub question
// - How to detect repeated letter.
// - How to make empty string

// const ele = ['e', 'bay', 'mony', 34, 'iro'];

// console.log(`is it included? ${ele.includes(43)}`);

/*
      const isIsogram = function (str) {
        str = str.toLowerCase();
        const toArr = str.split('');
        toArr.sort();
        
        if (str === '') console.log(true);
        
        for (let i = 0; i < str.length; i++) {
            if (toArr[i] === toArr[i + 1]) return false;
            }
            return true;
            };
            console.log(isIsogram('Alphabet'));
            
            */

//Other way PRO 😎

/*
           function isIsogram(str) {
            return !/(\w).*\1/i.test(str);
            }
            console.log(`is this isogram? : ${isIsogram('Alphabet')}`);
            
            */

const printForecast = function (arr) {
  let day = 1;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`... ${arr[i]}°c in ${day++} days`);
  }
  return newArr.toString();
};

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
console.log(`is this isogram? : ${isIsogram('Alphabet')}`);

//Other way:

function isIsogram(str) {
  str = str.toLowerCase();

  if (str === '') return true;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }

  return true;
}
console.log('This is the ans: ' + isIsogram('backgrouND'));

//CHALLENGE ONE: You are given a number say true or false if number is narcissistic ex: 153 -> 1^3 + 5^3 + 3^3

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

//CHALLENGE THREE: Given an array of integers your solution should find the smallest integer.

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
