'use strict';

const num = document.querySelector('.number');
const msg = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const hiSco = document.querySelector('.highscore');

let numberToGuess = Math.trunc(Math.random() * 5) + 1;

let scoreN = 20;

checkBtn.addEventListener('click', function () {
  const youGuess = Number(document.querySelector('.guess').value);
  num.textContent = numberToGuess;
  if (youGuess === numberToGuess) {
    msg.textContent = '🎉 Congz!';
    let highscore = 0;
    highscore = scoreN;
    console.log(highscore);
  } else if (youGuess > numberToGuess) {
    msg.textContent = 'too high';
    scoreN--;
    score.textContent = scoreN;
  } else if (youGuess < numberToGuess) {
    msg.textContent = 'too low';
    scoreN--;
    score.textContent = scoreN;
  }
});
