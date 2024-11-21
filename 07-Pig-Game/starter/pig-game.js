'use strict';

const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new');

scoreOne.textContent = 0;
scoreTwo.textContent = 0;

dice.classList.add('hidden');
