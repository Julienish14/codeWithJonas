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
