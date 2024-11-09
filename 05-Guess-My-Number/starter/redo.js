'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 Woow!! Congratulations!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 To High!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 To Low!';
  }
});
