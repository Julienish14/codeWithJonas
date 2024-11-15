'use strict';

const showModal = document.querySelectorAll('.show-modal');
const 

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    console.log(showModal[i].textContent);
  });
