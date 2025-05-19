// 'use strict';

// const scoreOne = document.getElementById('score--0');
// const scoreTwo = document.getElementById('score--1');
// const currScoreOne = document.getElementById('current--0');
// const currScoreTwo = document.getElementById('current--1');
// const playerOne = document.querySelector('.player--0');
// const playerTwo = document.querySelector('.player--1');
// const winnerOne = document.querySelector('.winner--0');
// const winnerTwo = document.querySelector('.winner--1');

// const dice = document.querySelector('.dice');

// const btn_roll = document.querySelector('.btn--roll');
// const btn_hold = document.querySelector('.btn--hold');
// const btn_new = document.querySelector('.btn--new');

// let isPlaying, currentP, currentScore, holdedScore;

// const initi = () => {
//   currentP = 0;
//   currentScore = 0;
//   holdedScore = [0, 0];
//   isPlaying = true;

//   dice.classList.add('hidden');
//   scoreOne.textContent = 0;
//   scoreTwo.textContent = 0;
//   currScoreOne.textContent = 0;
//   currScoreTwo.textContent = 0;
//   currentScore = 0;

//   playerOne.classList.add('player--active');
//   playerTwo.classList.remove('player--active');
//   playerOne.classList.remove('player--winner');
//   playerTwo.classList.remove('player--winner');
//   winnerOne.classList.add('hidden');
//   winnerTwo.classList.add('hidden');
// };

// const swithGame = () => {
//   document.querySelector(`#current--${currentP}`).textContent = 0;
//   currentScore = 0;

//   currentP = currentP === 0 ? 1 : 0;
//   playerOne.classList.toggle('player--active');
//   playerTwo.classList.toggle('player--active');
// };

// initi();

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

    if (holdedScore[currentP] >= 100) {
      isPlaying = false;
      dice.classList.remove('hidden');
      document
        .querySelector(`.player--${currentP}`)
        .classList.add('player--winner');
      document.querySelector(`.winner--${currentP}`).classList.remove('hidden');
      document
        .querySelector(`.player--${currentP}`)
        .classList.remove('player--active');
    } else {
      swithGame();
    }
  }
});

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  winner0El.classList.add('hidden');
  winner1El.classList.add('hidden');
};
// btn_new.addEventListener('click', initi);
