'use strict';

const btnMdl = document.querySelectorAll('.show-modal');
const btnClsMdl = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnMdl.length; i++)
  btnMdl[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnClsMdl.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (
    (e.key === 'Escape' || e.key === 'y') &&
    !modal.classList.contains('hidden')
  ) {
    hideModal();
  }
});
