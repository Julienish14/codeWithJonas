'use strict';

const num = document.querySelector('.number');

// num.textContent = numberToGuess;

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
  let numberToGuess = Math.trunc(Math.random() * 5) + 1;
  const youGuess = Number(document.querySelector('.guess').value);
  console.log(typeof youGuess);
  console.log(Number(youGuess));
});
