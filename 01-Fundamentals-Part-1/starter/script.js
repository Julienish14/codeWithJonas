/*
let js = "amazing";
console.log (40 + 8 + 23 -10); 

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

 let _newjonas_$matilda = 'JM'

 let myFirstJob = "Coder";
let myCurrentJob = "Teacher"; 

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


true; 
let javascriptIsFun = true; 
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Jonas');
console.log(typeof 23);

// change the value of variable 

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let varia = true;
console.log("This is the data type of this variable: " +typeof varia)

//undifined datatype

let year; 
console.log(year);
console.log(typeof year)
year = 1999; 
console.log(year+ " type of : " +typeof year);

//Error that exist in type of error!!

console.log(typeof null); 


//let, const, var

let age = 30; 
age = 21; 
console.log("Age is changed to 21: " +age)

const birthYear = 1999; 
// birthYear = 2002; 
console.log("Birth year can't change: " +birthYear); //we can't reassign const it is an immutable. this code will give an error. 

var job = 'programmer'; 
job = 'Coder'; 
console.log("updated job : " +job)

lastName = "Ishimwe" //This is bad idea we always have to decreare variables. 
console.log('last name is : '+lastName);


//Basic Operator

    //Math operator

const now = 2024; 
const ageJonas = now - 1991; 
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 3, ageJonas / 10, 2 ** 3)
   //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas"; 
const lastName = "Schmedtman";

   //We can use Plus "+" operator to concatinate 

console.log(firstName + " " +lastName);

   //Assignment operator

let x = 10 + 5; //15
x += 10; // x = x +10 = 25
x *= 4; // x = x* 4 = 100
x++; //x = x + 1 = 101 
x--; 
x--; // x = x - 1 = 99
console.log(x);

    // Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); 

const isFullAge = ageSarah >= 18; 
console.log(isFullAge)

      //Operator Precedence

const now = 2024; 
const ageJonas = now - 1991; 
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // You can ask yourself how the codes know which one to perform first btn Math or Comparison operator; each operator has precedence order. math has high precedence than comparison 

let x, y; 
x = y = 25 - 10 - 5; // x = y = 10, x = 10  
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); 

   //Strings and Template Literals. 

const firstName = "Julien"; 
const job = "IT Support Eng"; 
const birthYear = 1989; 
const year = 2024; 

const julien = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; 
console.log(julien);

// How to use template literals

const julienNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(julienNew); 
console.log(`This is just a regular string.....`); 

console.log('Old way Multiple line: \n\ new line \n\ used to be \n\ like this');
console.log(`Multiple lines with backtick:
   now with 
   template literals
   we can do this 
   and we have muliple lines`);



   // Taking Decisions: if / else Statements

const age = 15; 

if(age >= 18) {
   console.log('Sarah can driving license 🏎️');
}else{
   const yearsLeft = 18 - age; 
   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2021;
let century; 
if(birthYear <= 2000){
   century = 20; 
}else{
   century = 21; 
}

console.log(century);

   //Type Conversion and Coercion

//type conversion. 

const inputYear = '1991'; 
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear) 
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //it will give NaN(Not a Number), means unvalid number 

console.log(String(23), 23);

//type coercion 
console.log('I am ' + 23 + ' years old'); 
console.log('23' - '10' - 3);
console.log('23' / '2'); 

let n = '1' + 1; // result will be '11' bcs plus sign concatinate;
n = n - 1; // eleven string will be converted to number because of minus 
console.log(n); //Answer will be 10.  


   // Truthy and Falsy values

//5 falsy values are 0, '', undefined, Null, NaN

console.log(Boolean(0)); 
console.log(Boolean(undefined)); 
console.log(Boolean(''));
console.log(Boolean('Jonas')); 
console.log(Boolean({})); 

const money = 0; 
if(money){ // Here it is falsy value money = 0 
   console.log("Don't spend it all!"); 
}else{
   console.log('You should get a job!'); //This code gonna excute this bcs it is false. 
}

let height; // This is falsy value as it is undefined 
if(height){
   console.log('YAY! Height is defined');
}else{
   console.log('Height is UNDEFINED'); 
}

   // Eqaulity operator === vs ==

const age = 18; 

if(age === 18) console.log('You just became an adult :D (Strict)'); 

if(age == 18) console.log('You just became an adult :D (Loose)'); 

const favourite = Number(prompt("What is your favourite number?")); 
console.log(favourite);

if(favourite === 23){  
   console.log('Cool! 23 is an amazing number!'); 
}else if(favourite === 7){
   console.log('7 is also a cool number');
}else if(favourite === 9){
   console.log('9 is also a cool number'); 
}else{
   console.log('Number is not 23 or 7'); 
}

if(favourite !== 23) console.log('Why not 23? '); 



   //The Switch Statement

const day = 'sunday'; 


switch(day) {
   case 'monday': //day === 'monday'
      console.log('Plan course structure'); 
      console.log('Go to coding meetup');
      break; 
   case'tuesday': 
      console.log('Prepare theory videos');
      break; 
   case 'wednesday': 
   case 'thursday': 
      console.log('Write code examples');
      break; 
   case 'friday': 
      console.log('Record videos'); 
      break;
   case 'saturday':
   case 'sunday': 
      console.log('Enjoy the weekend :D'); 
      break;
   default:
      console.log('Not a valid day!');
}


//Do the same using if else statement
 
if(day === 'monday'){
   console.log('Plan course structure'); 
   console.log('Go to coding meetup');
}else if(day === 'tuesday'){
   console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday'){
   console.log('Write code examples');
}else if(day === 'friday') {
   console.log('Record videos'); 
}else if(day === 'saturday' || day === 'sunday'){
   console.log('Enjoy the weekend :D'); 
}else{
   console.log('Not a valid day!');
}


//My own exerices: you have different score from rubic cube give me the average. 

let a = 0.36, b = 0.39, c = 0.35, d = 0.43, e = 0.30, 
f = 0.39, g = 0.45, h = 0.35, i = 0.41, j = 0.35, 
k = 0.35, l =0.39, m = 0.43, n = 0.43, o = 0.37, 
p = 0.34, q = 0.33, r = 0.35, s = 0.37, t = 0.34, 
u = 0.39, v = 0.38, w = 0.44, z = 0.38, y = 0.37; 

const avOne = (a + b + c + d + e)/5; 
const avTwo = (f + g + h + i + j)/5; 
const avThree = (k + l + m + n + o)/5; 
const avFour = (p + q + r + s + t)/5; 
const avFive = (u + v + w + z + y)/5; 

const average = (avOne + avTwo + avThree + avFour + avFive)/5; 

console.log(`Average of
   1st score: ${avOne}
   2nd score: ${avTwo}
   3rd score: ${avThree}
   4th score: ${avFour}
   5th score: ${avFive}
   
   TOTAL Avarage : ${average}`); 


//The conditional(Ternary) Operator

const age = 20; 
//age >= 18 ? console.log(`I like to drink wine 🍷`) : age === 15 ? console.log(`I like to drink water 💧`) : console.log(`I like to drink milk 🍼`);

const drink = age >= 18 ? 'wine 🍷' : age === 15 ? 'water 💧' : 'milk 🍼'; 
console.log(drink);

//Now with ternary we can have conditional inside a template literal

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : age === 15 ? 'water 💧' : 'milk 🍼'}`);

 
*/



