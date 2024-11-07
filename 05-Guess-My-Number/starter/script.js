'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) document.querySelector('.message').textContent = '⛔️ No number!';
});

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);
*/

//Me trying to work on it with console.
/*
const gameGuessNumber = function (number) {
  const num = Math.trunc(Math.random() * 6) + 1;
  console.log('Number: ' + num);
  let score = 20;
  let highScore = 0;

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
