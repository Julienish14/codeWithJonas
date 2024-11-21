'use strict';

const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const currScoreOne = document.getElementById('current--0');
const currScoreTwo = document.getElementById('current--1');
const playerOne = document.getElementById('.player--0');
const playerTwo = document.getElementById('.player--1');

const dice = document.querySelector('.dice');

const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new');

scoreOne.textContent = 0;
scoreTwo.textContent = 0;
let isPlaying = true;
let currentP = 0;
let currentScore = 0;

dice.classList.add('hidden');

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
      currentScore = 0;
      document.querySelector(`#current--${currentP}`).textContent = 0;

      currentP = currentP === 0 ? 1 : 0;
      playerOne.classList.toggle('player--active');
      playerTwo.classList.toggle('player--active');
    }
  }
});
