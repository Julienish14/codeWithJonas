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
