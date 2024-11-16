'use strict';

//Select every element we might need.

const resetGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdPoints = document.querySelector('.btn--hold');

const scoreElOne = document.getElementById('score--0');
const scoreElTwo = document.getElementById('score--1');
const currOneScore = document.getElementById('current--0');
const currTwoScore = document.getElementById('current--1');

const diceImgEl = document.querySelector('.dice');

diceImgEl.classList.add('hidden');

let holdedScore = 0;
scoreElOne.textContent = holdedScore;
scoreElTwo.textContent = holdedScore;
