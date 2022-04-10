'use strict';

// Variables
const message = document.querySelector('.amount');
const calcBtn = document.querySelector('.calc');
const againBtn = document.querySelector('.again');
const infoText = document.querySelector('.info');
const btnCloseInfo = document.querySelector('.close-info');
const btnOpenInfo = document.querySelector('.fas');
const overlay = document.querySelector('.overlay');

const length = document.querySelector('.x');
const width = document.querySelector('.y');
const height = document.querySelector('.z');

// First message
message.textContent = 'Please fill all values';
length.value = '';
width.value = '';
height.value = '';

// Button 'Calculate' counting all values together
calcBtn.addEventListener('click', function () {
  let x = parseFloat(length.value);
  let y = parseFloat(width.value);
  let z = parseFloat(height.value);
  const n = (x * y * z) / 900;
  let amount = n.toFixed(2);
  if (amount > 0) {
    message.textContent = `Use ${amount} kg resin`;
  } else {
    message.textContent = 'Please fill all values';
  }
});

// Button 'Again' to reset all values
againBtn.addEventListener('click', function () {
  length.value = '';
  width.value = '';
  height.value = '';
  message.textContent = 'Please fill again';
});

// Button 'Open Info' to show info
btnOpenInfo.addEventListener('click', function () {
  infoText.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Button 'Close Info' to hide info
const closeInfo = function () {
  infoText.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeInfo);
btnCloseInfo.addEventListener('click', closeInfo);

// Function to close info window when click outside the info field
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !infoText.classList.contains('hidden')) {
    closeInfo();
  }
});
