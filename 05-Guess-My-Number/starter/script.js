'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

//Me trying to work on it with console.
/*
const gameGuessNumber = function (number) {
  const num = Math.trunc(Math.random() * 6) + 1;
  console.log('Number: ' + num);
  let score = 20;
  let highScore = 0;

  for (let i = score; i > 0; i--) {
    // console.log('Score: ' + score);
  }
  if (num === number) {
    console.log('🎉 Correct number');
    highScore += 17;
    score--;
  } else if (num > number) {
    console.log('Too High!');
    score--;
  } else if (num < number) {
    console.log('Too Low!');
    score--;
  }
  console.log('HighScore : ' + highScore);
  console.log('Score: ' + score);
};

gameGuessNumber(5);
*/
