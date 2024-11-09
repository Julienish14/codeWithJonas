'use strict';

const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const displayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeMo = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', displayModal);

closeModal.addEventListener('click', closeMo);
overlay.addEventListener('click', closeMo);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.add('hidden')) closeMo();
});
