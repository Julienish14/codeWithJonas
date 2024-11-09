'use strict';

const guess = Number(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 Woow!! Congratulations!';
  } else if (!guess === secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '📈 To High!' : '📉 To Low!';
  }
});
