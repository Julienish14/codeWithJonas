'use strict';

const buttonReset = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const currentOne = document.getElementById('current--0');
const currentTwo = document.getElementById('current--1');
const winnerOne = document.querySelector('.winner--0');
const winnerTwo = document.querySelector('.winner--1');
const diceRo = document.querySelector('.dice');

let scores, currentScore, currentPlayer, playing;

const initialization = () => {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentOne.textContent = 0;
  currentTwo.textContent = 0;
  playing = true;

  diceRo.classList.add('hidden');

  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');

  winnerOne.classList.add('hidden');
  winnerTwo.classList.add('hidden');
};

initialization();

const changeToOther = () => {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

buttonRoll.addEventListener('click', function () {
  if (playing) {
    diceRo.classList.remove('hidden');

    //Roll dice with different random side.
    const diceK = Math.trunc(Math.random() * 6) + 1;
    diceRo.src = `dice-${diceK}.png`;
    currentScore += diceK;
    if (diceK !== 1) {
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      changeToOther();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 100) {
      //Game over
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.winner--${currentPlayer}`)
        .classList.remove('hidden');
    } else {
      changeToOther();
    }
  }
});

buttonReset.addEventListener('click', initialization);
