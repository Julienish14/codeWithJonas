const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

console.log('Body Mass Index of Mark: ' + BMIMark);
console.log('Body Mass Index of John: ' + BMIJohn);

console.log('Mark has hight BMI than John? : ' + markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's!(${BMIJohn})`);
} else {
  console.log(`John's BMI ${BMIJohn} is heigher than Mark's!(${BMIMark})`);
}

const scoreDolphines = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphines, scoreKoalas);

if (scoreDolphines > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreDolphines < scoreKoalas) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphines === scoreKoalas) {
  console.log('Both win the trophy');
}

const marks = 4;

switch (marks) {
  case 89:
    console.log('Excellent!');
    break;
  case 70:
    console.log('Very Good!');
    break;
  case 60:
    console.log('Good!');
    break;
  case 45:
    console.log('Not Good!');
    break;
  default:
    console.log('NOT QUALIFIED');
}

const calcAverage = (q, t, b) => {
  return (q + t + b) / 3;
};
const scoreDol = calcAverage(44, 23, 71);
const scoreKol = calcAverage(634, 5, 4);
console.log(`Dolphines ${scoreDol} And Koala ${scoreKol}`);
//TASK THREE
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`);
  } else if (avgKoalas >= avgDolphins) {
    return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    return console.log(`No team wins...`);
  }
}

checkWinner(scoreDol, scoreKol);

//This is about narci

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

function repeater(n, s) {
  let rep = '';
  for (let i = 1; i <= n; i++) {
    rep += s;
  }
  return rep;
}
console.log(repeater(4, 'HelloWorld|'));

const now = 2024;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
