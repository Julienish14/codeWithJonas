// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 34) console.log('this number');

const calcAge = birthYear => 2024 - birthYear;

console.log(calcAge(2003));
