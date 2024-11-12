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

buttonRoll.addEventListener('click', function () {
  diceRo.classList.remove('hidden');
  const diceK = Math.trunc(Math.random() * 6) + 1;
});
