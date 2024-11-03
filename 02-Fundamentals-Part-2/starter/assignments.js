//Ass One

/* 
function describeCountry(country, population, capitalCity){
return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const A = describeCountry('Rwanda', 14, 'Kigali');
const B = describeCountry('Burundi', 15, 'Bujumbura');
const C = describeCountry('Kenya', 25, 'Nairobi');

console.log(A);
console.log(B);
console.log(C);


//Ass Two (Function declataion vs expression)

function percentageOfWorld1 (population) {
    return (population * 100) / 7900; 
}

const percentageOfWorld2 = function(population){
    return (population/7900) * 100; 
}

const Ghana = percentageOfWorld1(299); 
const Benin = percentageOfWorld1(300);
const BurkinaB = percentageOfWorld1(100);
console.log(`Ghana's % : ${Ghana}, Benin's % : ${Benin}, Burkina's % : ${BurkinaB}`);


const DRC = percentageOfWorld2(299); 
const Togo = percentageOfWorld2(300);
const Ouganda = percentageOfWorld2(100);

console.log(`DRC's % : ${DRC}, Togo's % : ${Togo}, Ouganda's % : ${Ouganda}`);



//Ass Three Arrow function 

const percentageOfWorld3 = population => (population / 7900) * 100; 
const DRC2 = percentageOfWorld3(501); 
const Togo2 = percentageOfWorld3(504);
const Ouganda2 = percentageOfWorld3(503);

console.log(`DRC's % : ${DRC2}, Togo's % : ${Togo2}, Ouganda's % : ${Ouganda2}`);

/*
function describePopulation(country, population) {
    const populations = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${populations} of the world.`;
    console.log(description);
}

describePopulation('Kenya', 30023);
describePopulation('Rwanda', 14023);
describePopulation('Burundi', 1023);
*/

/*
    //Using my favorite function type (Arrow functions)
    
const describePopulation = (country, population) => {
    const popPerc = percentageOfWorld1(population); 
    const desc = `${country} has ${population} million people, which is about ${popPerc} of the world.`; 
    console.log(desc); 
}
describePopulation('Kenya', 30023);
describePopulation('Rwanda', 14023);
describePopulation('Burundi', 1023);

*/

    //Introduction to ARRAYS
/*

const populations = [14, 202, 133, 100];

if (populations.length === 4){
  console.log(true); 
}else{
    console.log('false');
}

function percentageOfWorld1 (population) {
    return (population * 100) / 7900; 
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

*/


        //Basic Array Operations(Methods)
/*
const neighbours = ['Uganda', 'Burundi', 'Tanzania']; 
console.log(neighbours);

neighbours.push('Utopia'); 
console.log(neighbours); 

neighbours.pop('Utopia');
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log('Probaly not a central european country :D'); 
}

neighbours[neighbours.indexOf('Burundi')] = 'Kenya'; 
console.log(neighbours);

*/


/*
        //===** Intro to Object**===

const myCountry = {
    country: 'Rwanda', 
    capital: 'Kigali', 
    language: 'iKinyarwanda', 
    population: 14, 
    neighours: ['Burundi', 'Kenya', 'Uganda', 'Tanzania']
}; 
console.log(myCountry)



        // Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighours.length} neighbouring countries and a capital called ${myCountry.capital}`); 

//Increase 2millions on population using dot notation
myCountry.population += 2; 
console.log(myCountry); 

//Decrease 2 million using bracket notation
myCountry['population'] -= 2; 
console.log(myCountry);

*/



        //Object Method
/*
const myCountry = {
    country: 'Rwanda', 
    capital: 'Kigali', 
    language: 'iKinyarwanda', 
    population: 14, 
    neighours: ['Burundi', 'Kenya', 'Uganda', 'Tanzania'], 

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighours.length} neighbouring countries and a capital called ${this.capital}`
        );
    }, 

    checkIsland: function () {
        this.isIsland = this.neighours.length === 0 ? true : false;
    }
}; 

myCountry.describe(); 

myCountry.checkIsland(); 
console.log(myCountry); 

*/


        // Iteration: The for Loop
/*

for(let voter = 1; voter <= 50; voter++){
    console.log(`Voter number ${voter} is currently voting`); 
}

        //Looping Arrays, Breaking and Continuing

const populations = [14, 202, 133, 100];
const percentages2 = []; 

function percentageOfWorld1 (population) {
    return (population * 100) / 7900; 
}

for(let i = 0; i < populations.length; i++){
   percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);



        //Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]; 

for(let i = 0; i < listOfNeighbours.length; i++){
    for(let k = 0; k < listOfNeighbours[i].length; k++){
        console.log(listOfNeighbours[i][k]);  
    }
}


        //The While loop

const percentages3 = []; 

let i = 0; 
while(i < populations.length){
    percentages3.push(percentageOfWorld1(populations[i]));
    i++; 
}

console.log(percentages3);

*/

const myCountry = {
    country: 'Rwanda', 
    capital: 'Kigali', 
    language: 'iKinyarwanda', 
    population: 14, 
    neighours: ['Burundi', 'Kenya', 'Uganda', 'Tanzania'], 

    describe: function(){
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighours.length} neighbouring countries and a capital called ${this.capital}`)
    }, 

    checkIsland: function(){
        this.isIsland = this.neighours.length === 0 ? 'true' : 'false'; 
    }
}; 

myCountry.describe(); 
myCountry.checkIsland();
console.log(myCountry); 


for(let i = 1; i <= 50; i++){
    console.log(`Voter number ${i} is currently voting`);
}