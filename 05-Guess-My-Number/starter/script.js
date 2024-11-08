'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 0;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Me trying to work on it with console.
/*
const gameGuessNumber = function (number) {
  const num = Math.trunc(Math.random() * 20) + 1;
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
