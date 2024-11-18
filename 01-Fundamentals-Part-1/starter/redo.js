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
