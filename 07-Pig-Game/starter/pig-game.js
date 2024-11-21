'use strict';

const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const currScoreOne = document.getElementById('current--0');
const currScoreTwo = document.getElementById('current--1');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const dice = document.querySelector('.dice');

const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new');

scoreOne.textContent = 0;
scoreTwo.textContent = 0;
let isPlaying = true;
let currentP = 0;
let currentScore = 0;
let holdedScore = [0, 0];

dice.classList.add('hidden');

const swithGame = () => {
  document.querySelector(`#current--${currentP}`).textContent = 0;
  currentScore = 0;

  currentP = currentP === 0 ? 1 : 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

btn_roll.addEventListener('click', function () {
  if (isPlaying) {
    dice.classList.remove('hidden');
    const tossDice = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${tossDice}.png`;
    if (tossDice !== 1) {
      currentScore += tossDice;
      document.querySelector(`#current--${currentP}`).textContent =
        currentScore;
    } else {
      swithGame();
    }
  }
});

btn_hold.addEventListener('click', function () {
  if (isPlaying) {
    holdedScore[currentP] += currentScore;
    document.getElementById(`score--${currentP}`).textContent =
      holdedScore[currentP];

    if (holdedScore[currentP] >= 20) {
      isPlaying = false;

      document
        .querySelector(`.player--${currentP}`)
        .classList.add('player--winner');
    } else {
      swithGame();
    }
  }
});
