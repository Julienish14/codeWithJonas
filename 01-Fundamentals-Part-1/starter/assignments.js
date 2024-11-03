/*
// Assignment NumberOne.

let country = "Rwanda";
let continent = "Africa";
let population = 14; 

console.log(" Country : " +country+ "," +"\n", "Continent : " +continent+"," +"\n", "Population : " +population); 
console.log(country);
console.log(continent);
console.log(population)

//Assignment Data types

// const isIsland = true;
let language; 

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Assignment Let, Const, Var

language = "i Kinyarwanda";

const country = "Rwanda";
const continent = "Africa";
const isIsland = false; 
isIsland = true; 

console.log(isIsland);


    //Assignment Basic Operators
    let country = "Rwanda";
    let continent = "Africa";
    let population = 14;
    language = "i Kinyarwanda";
//Ass One
let halfCountryPopulation = population / 2; 

//Ass one
/*
console.log("Q1. if your country split in half, How many people would live in each half? : " + halfCountryPopulation)
*/

//Ass two
/*
population++; 
console.log("Q2. Increase population of our country by 1 : " +population); 
*/

//Ass three
/*
let finland = 6; 
const morePopulationCountry = population > finland;
console.log("Q3. Does your country have more people than Finland : " + morePopulationCountry); 
*/

//Ass four

/*
let averagePopulation = 33; 
const lessPeopleCountry = population < averagePopulation; 
console.log("Q4. Does your country have less people than the average country : " + lessPeopleCountry);
*/

//Ass five
/*
console.log("Q5. "+country+ ' is in ' +continent+ ' and its ' +population+ ' million people speak ' +language);
*/

//Ass six

/*
let country = "Rwanda";
let continent = "Africa";
let population = 14;
language = "i Kinyarwanda";

const description = `${country} is in ${continent} and its ${population} million people speak ${language}`; 
// console.log(description);

// Ass seven if condition

if(population > 33){
    console.log(`${country}'s population is 22 million below average`);
}else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}
*/

// Ass eight Type Conversion and Coercion

/*
console.log('Predict the result of thes 5 operations without executing them: '); 

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


//Ass Nine Equality Operators : == vs. ===
let country = "Rwanda";

// LATER : This helps us prevent bugs
const numNeighbours = Number(prompt(`How many neighbour countries doe your ${country} have?`)); 

if(numNeighbours === 1){
    console.log('Only 1 border!');
}else if(numNeighbours > 1){
    console.log('More than 1 border');
}else{
    console.log('No borders');
}


//Ass Ten Logical Operators 

let country = "Rwanda";
let continent = "Africa";
let population = 14;
const language = "i Kinyarwanda";
const isIsland = false;


if(language === "English" && population < 50 && !isIsland){
    console.log(`You should live in ${country} :)`); 
}else{
    console.log(`${country} does not meet your critiria :(`); 
}


const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense); 

const shouldDrive = hasDriversLicense && hasGoodVision; 

// if(shouldDrive){
//     console.log('Sarah is able to driver!');
// }else{
//     console.log('Someone else should driver...'); 
// }

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired); 

if(shouldDrive && hasGoodVision && ! isTired){
    console.log('Sarah is able to driver!');
}else{
    console.log('Someone else should driver...'); 
}



//Ass Eleven

const language = 'mandarin'; 

switch(language){
    case 'mandarin':
    case 'chinese':
        console.log('MOST number of native speakers!'); 
        break;
    case 'spanish':
        console.log('2ND place in number of native speakers');
        break;
    case 'english': 
        console.log('3rd place');
        break; 
    case 'hindi':
        console.log('Number 4'); 
        break; 
    case 'arabic': 
        console.log('5th most spoken language');
        break; 
    default: 
        console.log('Great language too :D');
}


//Ass Twelve: Ternary operator

let country = "Rwanda";
let continent = "Africa";
let population = 44;
const language = "i Kinyarwanda";
const isIsland = false;

console.log(`${country}'s polulation ${population > 33 ? 'is above' : 'is below'} average`);

*/

let country = 'Angola'; 
let continent = 'Africa'; 
let population = 50; 

console.log(country, continent, population);

let isIsland = false; 
let language = 'English'; 

console.log(typeof country); 
console.log(typeof continent); 
console.log(typeof language); 
console.log(typeof isIsland); 

console.log(population/2); 
population++;
console.log(population); 

console.log(population > 6); 

console.log(population < 33);

if(population > 33){ 
    console.log(`${country}'s population is above average`); 
}else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}

console.log('9' - '5'); // -> ? 4
console.log('19' - '13' + '17'); // -> ? 617
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ? false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ? 1143

/*
const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if(numNeighbours === 1){
    console.log('Only 1 border!'); 
}else if(numNeighbours > 1){
    console.log('More than 1 border'); 
}else{
    console.log('No border'); 
}


console.log(typeof numNeighbours);
*/

if(language === 'English' && population < 50 && isIsland === false){
    console.log(`You should live in ${country} :)`); 
}else{
    console.log(`${country} does not meet your creteria :(`);
}