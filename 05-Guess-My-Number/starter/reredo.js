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

const dispM = mesg => (msg.textContent = mesg);

checkBtn.addEventListener('click', function () {
  const youGuess = Number(document.querySelector('.guess').value);
  if (!youGuess) {
    dispM('No number');
  }

  if (youGuess === numberToGuess) {
    num.textContent = numberToGuess;
    dispM('🎉 Congz!');

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (scoreN > highscore) {
      highscore = scoreN;
      hiSco.textContent = highscore;
    }
  } else if (youGuess !== numberToGuess) {
    if (scoreN > 1) {
      msg.textContent = `${youGuess > numberToGuess ? 'Too High' : 'Too Low!'}`;
      scoreN--;
      score.textContent = scoreN;
    } else {
      dispM('You got no Game G!');
      score.textContent = 0;
    }
  }
});

resetGame.addEventListener('click', function () {
  scoreN = 20;
  dispM('Start guessing...');

  hiSco.textContent = highscore;
  score.textContent = scoreN;
  num.textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
