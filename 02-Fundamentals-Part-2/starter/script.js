'use strict'; 
/*
let hasDriversLicense = false; 
const passTest = true; 

if (passTest) hasDriversLicense = true; 
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; 
// const private = 345; 

*/

    //----- FUNCTION -----
/*
function logger(){
    console.log('My name is Jonas'); 
}

// calling / running / invoking function
logger(); 
logger(); 
logger(); 

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; 
    return juice; 
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrange = fruitProcessor(2, 4); 
console.log(appleOrange);


    //Function declaration 
const age1 = 'calcAge'1(2005);

function calcAge1(birthYear){
    return 2024 - birthYear; 
}

    //Function expression 
const calcAge2 = function(birthYear) {
    return 2024 - birthYear; 
}
const age2 = calcAge2(2006);
console.log(age1, age2);

    //Arrow function 
const calcAge3 = birthYear => 2024 - birthYear; 
const age3 = calcAge3(2003); 
console.log(age3);

// use arrow function when you have parameter or multiple par 

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear; 
    const retirement = 65 - age; 
    return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirement(1998, 'Jabulani'));
console.log(yearsUntilRetirement(1995, 'Jonas'));



// Calling function inside a function 

function cutFruitPieces(fruit) {
     return fruit * 4; 
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces}  pieces of oranges.`; 
    return juice; 
}
    
console.log(fruitProcessor(2, 3)); 
    


//Functions review. 

function years (birthYear){
    return 2024 - birthYear; 
}

function yearsUntilRetirement (birthYear, firstName) {
    const age = years(birthYear); 
    const retirement = 65 - age; 
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`); 
        return retirement; 
    }else{
        console.log(`${firstName} has already retired 🎉`); 
        return -1 //-1 in programming means nothing or 9999
    }
}
console.log(yearsUntilRetirement(1990, 'Jonas'));
console.log(yearsUntilRetirement(1940, 'Bob'));




        // =====*** ARRAYS ***=====

const friend1 = 'Michael';
const friend2 = 'Monica';
const friend3 = 'Molata';
        
const friends = ['Michael', 'Monica', 'Molata'];
console.log(friends);
        
//Other way to write array
        
const yearAr = new Array(1991, 1984, 2008, 2020);
console.log(yearAr)
        
console.log(friends[0]); 
console.log(friends[2]); 
        
console.log(friends.length); 
console.log(friends[friends.length - 1]); 
        
    //You can mutate array. 
friends[2] = 'Peter'; //you can mutate array even though it is declared as const because it primitive value
console.log(friends);
        
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2024 - 1991,'Teacher', friends]; 
console.log(jonas);
        
    //Exercise
        
function calcAge1(birthYear){
    return 2024 - birthYear; 
}
        
const years = [1990, 1964, 2002, 2010, 2018]; 
        
const age1 = calcAge1(years[0]); 
const age2 = calcAge1(years[1]); 
const age3 = calcAge1(years[years.length - 1]); 
        
console.log(age1, age2, age3);
        
const ages = [calcAge1(years[0]),calcAge1(years[1]),calcAg(years[years.length - 1])];
console.log(ages);
        
        
const friends = ['Michael', 'Monica', 'Molata'];
//Add elements
const newLength = friends.push('Jay'); //push function(method) returns value
 console.log(friends);
 console.log(newLength);
        
 friends.unshift('John'); 
 console.log(friends);
        
//Remove elements. 
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);
        
friends.shift(); //First 
console.log(friends);
        
console.log(friends.indexOf('Monica'));
console.log(friends.indexOf('Bob')); //return -1 as Bob is not in array
        
console.log(friends.includes('Monica')); //return true as she is in arry
console.log(friends.includes('Bob')); //return false as he's not in arry
        
if(friends.includes('Monica')){
    console.log('You have a friend called Monica'); 
}
        
*/
        
        
        // ======= ****** OBJECTS ******** ==========
/*
const jonas = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    age: 2024 - 1994, 
    job: 'teacher', 
    friends: ['Michael', 'Peter', 'Steven']
};
        
        //Dot vs Bracket notation. 
        
console.log(jonas); 
console.log(jonas.lastName);
console.log(jonas['lastName']);
        
        
const nameKey = 'Name'; 
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
        
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastname, age, job and friends');
        
if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request!  Choose between firstname, lastname, age, job and friends'); 
}
        
jonas.location = 'Portugal'; 
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
         
//Challenge : write not hardcoded this version "jonas has 3 friends, and his best friend is called Michael";
        
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, his best friend is called ${jonas.friends[0]}`);
        
*/
        
        
         // ==== Object Method =======
        
/*
const jonas = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    birthYear: 1991, 
    job: 'teacher', 
    friends: ['Michael', 'Peter', 'Steven'], 
    hasDriversLicense: true, 
        
    // calcAge: function(birthYear){
    //     return 2024 - birthYear; 
    // }
            
    // calcAge: function(){
    //     return 2024 - this.birthYear; //this. same as jonas.
    // }
             
    calcAge: function () {
        this['age'] = 2024 - this.birthYear; //with this. we created new property
        return this.age;  
    },
        
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence`;
                
    }
};
        
console.log(jonas.calcAge());
console.log(jonas['calcAge']());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas);
        
    //Challange 
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
        
*/


        // ========= LOOP ==========

/*
// for loop keeps running while condition is TRUE. 
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights 
        repetition 🏋🏽‍♂️ ${rep}`); 
}
    

    // Looping arrays, Breaking and Continuing 

const jonas = [
    'Jonas', 
    'Schmedtmann', 
    2024 - 1991, 
    'teacher', 
    ['Micheal', 'Peter', 'Steven'], 
    true
];   

const types = []; //to get a new array of type of value in janas Array

for (let i = 0; i < jonas.length; i++){
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

        //Filling types array
    // types[i] = typeof jonas[i];
        // Other way
    types.push(typeof jonas[i]); 
}; 
console.log(types);

    //Other example
const years = [1991, 1998, 2003, 2020]; 
const ages = []; 

for(let i = 0; i < years.length; i++){
    ages.push(2024 - years[i]);
}
console.log(ages);


    //CONTINUE AND BREAK!

console.log('----- ONLY STRINGS -----');
for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue; 

    console.log(jonas[i], typeof jonas[i]);
}

console.log('----- BREAK WITH NUMBER -----');
for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break; 

    console.log(jonas[i], typeof jonas[i]);
}


*/
        