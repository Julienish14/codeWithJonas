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
