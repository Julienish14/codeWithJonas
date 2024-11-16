'use strict';

//Select every element we might need.

const resetGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdPoints = document.querySelector('.btn--hold');

const scoreElOne = document.getElementById('score--0');
const scoreElTwo = document.getElementById('score--1');
const currOneScore = document.getElementById('current--0');
const currTwoScore = document.getElementById('current--1');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const diceImgEl = document.querySelector('.dice');

diceImgEl.classList.add('hidden');

let holdedScore = 0;
let currScore = 0;
let playingPlayer = 0;
let playing = true;
let score = [0, 0];
scoreElOne.textContent = holdedScore;
scoreElTwo.textContent = holdedScore;

const switchSwitch = () => {
  document.getElementById(`current--${playingPlayer}`).textContent = 0;
  currScore = 0;
  playingPlayer = playingPlayer === 0 ? 1 : 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

//ROLL DICE

rollDice.addEventListener('click', function () {
  if (playing) {
    diceImgEl.classList.remove('hidden');
    let diceSide = Math.trunc(Math.random() * 6) + 1;
    diceImgEl.src = `dice-${diceSide}.png`;
    console.log(diceSide);
    if (diceSide !== 1) {
      currScore += diceSide;
      document.getElementById(`current--${playingPlayer}`).textContent =
        currScore;
    } else {
      switchSwitch();
    }
  }
});

holdPoints.addEventListener('click', function () {
  score[playingPlayer] += currScore;
  document.getElementById(`score--${playingPlayer}`).textContent =
    score[playingPlayer];
  if (score[playingPlayer] >= 20) {
    playing = false;
    document
      .querySelector(`.player--${playingPlayer}`)
      .classList.add('player--winner');
  }
  switchSwitch();
});
