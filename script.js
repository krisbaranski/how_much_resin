'use strict';

// variables
const message = document.querySelector('.amount');
const calcBtn = document.querySelector('.calc');
const againBtn = document.querySelector('.again');
const infoText = document.querySelector('.info');
const btnCloseInfo = document.querySelector('.close-info');
const btnOpenInfo = document.querySelector('.fas');
const overlay = document.querySelector('.overlay');

// values
let x = (document.querySelector('.x').value = '');
let y = (document.querySelector('.y').value = '');
let z = (document.querySelector('.z').value = '');

// first message
message.textContent = 'Please fill all numbers';

// calculate button counting all together
calcBtn.addEventListener('click', function () {
  x = parseFloat(document.querySelector('.x').value);
  y = parseFloat(document.querySelector('.y').value);
  z = parseFloat(document.querySelector('.z').value);
  const n = (x * y * z) / 900;
  let amount = n.toFixed(2);
  if (amount > 0) {
    message.textContent = `Use ${amount} kg resin`;
  } else {
    message.textContent = 'Please fill all numbers';
  }
});

// again button reseting all
againBtn.addEventListener('click', function () {
  document.querySelector('.x').value = '';
  document.querySelector('.y').value = '';
  document.querySelector('.z').value = '';
  message.textContent = 'Please fill again';
});

btnOpenInfo.addEventListener('click', function () {
  infoText.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const closeInfo = function () {
  infoText.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeInfo);
btnCloseInfo.addEventListener('click', closeInfo);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !infoText.classList.contains('hidden')) {
    closeInfo();
  }
});
