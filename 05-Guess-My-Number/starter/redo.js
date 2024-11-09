'use strict';

const guess = Number(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  }
});
