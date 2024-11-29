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
