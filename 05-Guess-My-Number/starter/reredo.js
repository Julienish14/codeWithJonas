'use strict';

const num = document.querySelector('.number');
const msg = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const hiSco = document.querySelector('.highscore');

let numberToGuess = Math.trunc(Math.random() * 5) + 1;

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
