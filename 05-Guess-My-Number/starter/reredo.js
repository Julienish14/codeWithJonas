'use strict';

const num = document.querySelector('.number');
const msg = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const hiSco = document.querySelector('.highscore');
const resetGame = document.querySelector('.again');

let numberToGuess = Math.trunc(Math.random() * 10) + 1;

let scoreN = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
  const youGuess = Number(document.querySelector('.guess').value);
  if (!youGuess) {
    msg.textContent = 'No number';
  } else if (youGuess === numberToGuess) {
    num.textContent = numberToGuess;
    msg.textContent = '🎉 Congz!';
    if (scoreN > highscore) {
      highscore = scoreN;
      hiSco.textContent = highscore;
    }
  } else if (youGuess !== numberToGuess) {
    msg.textContent = `${youGuess > numberToGuess ? 'Too High' : 'Too Low!'}`;
    scoreN--;
    score.textContent = scoreN;
  }
});

resetGame.addEventListener('click', function () {
  scoreN = 20;
  highscore = 0;
  msg.textContent = 'Start guessing...';
  hiSco.textContent = highscore;
  score.textContent = scoreN;
  num.textContent = '?';
  document.querySelector('.guess').value = '';
});
