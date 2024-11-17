'use strict';
/* 
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
*/

/*
    //TASK ONE
const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3; 
    //TASK TWO  
const scoreDolphines = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(634, 5, 4);
console.log(`Dolphines ${scoreDolphines} And Koala ${scoreKoalas}`);
    //TASK THREE
function checkWinner (avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas * 2){
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`);
    }else if(avgKoalas >= avgDolphins){
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        return console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphines, scoreKoalas);

*/

/*

    CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/

//Task One
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 

console.log(calcTip(100)); 

    //Task Two

const bills = [125, 555, 44]; 

    //Task Three

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; 
console.log(bills, tips); 
    //Task Four

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(totals); 

*/

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/

const Mar = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};
const Joh = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.92,
};

/* Write your code below. Good luck! 🙂 */

/*
const mark = {
    fullName : 'Mark Miller', 
    mass : 78, 
    height : 1.69,
    
    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi; 
    }
};

const john = {
    fullName : 'John Smith', 
    mass : 92, 
    height : 1.95,
    
    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi; 
    }
};

mark.calcBMI(); 
john.calcBMI(); 

console.log(mark.bmi, john.bmi)

if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}else{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}

*/

/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; 
  const tips = []; 
  const totals = [];
  
  for (let i = 0; i < bills.length; i++){
        //fist way 
    //   const tip = calcTip(bills[i]); 
    //   tips.push(tip);

        //Second way
    tips.push(calcTip(bills[i]));

        //Third way 
    //   tips[i] = calcTip(bills[i]);
      
        //First way on Total
    //   const tot = tips[i] + bills[i]; 
    //   totals.push(tot);

        //Second way on Total
    totals.push(tips[i] + bills[i]); 

        //Third way on Total
    // totals[i] = tips[i] + bills[i]; 
  }

  console.log(bills, tips, totals);

*/

/*
  BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

3. Call the function with the totals array.

*/

/*
//Results

function calcAverage (arr){
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length; 
}

console.log(calcAverage(bills));

*/

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
*/

/*
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
