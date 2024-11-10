'use strict';

const btnMdl = document.querySelectorAll('.show-modal');
const btnClsMdl = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

for (let i = 0; i < btnMdl.length; i++)
  btnMdl[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnClsMdl.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Y') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  } else if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
