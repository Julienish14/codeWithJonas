'use strict';

const buttonReset = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');

const diceRo = document.querySelector('.dice');

diceRo.classList.add('hidden');
scoreOne.textContent = 0;
scoreTwo.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

buttonRoll.addEventListener('click', function () {
  if (playing) {
    diceRo.classList.remove('hidden');

    //Roll dice with different random side.
    const diceK = Math.trunc(Math.random() * 6) + 1;
    diceRo.src = `dice-${diceK}.png`;
    currentScore += diceK;

    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 20) {
      //Game over
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
    } else {
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      currentPlayer = currentPlayer === 0 ? 1 : 0;
      currentScore = 0;

      playerOne.classList.toggle('player--active');
      playerTwo.classList.toggle('player--active');
    }
  }
});
