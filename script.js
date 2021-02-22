'use strict';

// shortcuts
const message = document.querySelector('.amount');
const calc = document.querySelector('.calc');

// first message
message.textContent = 'Please fill all meassurements';

// // values
let x = (document.querySelector('.x').value = '');
let y = (document.querySelector('.y').value = '');
let z = (document.querySelector('.z').value = '');

// calculate button counting all together

calc.addEventListener('click', function () {
  x = parseFloat(document.querySelector('.x').value);
  y = parseFloat(document.querySelector('.y').value);
  z = parseFloat(document.querySelector('.z').value);
  const n = (x * y * z) / 900;
  let amount = n.toFixed(2);
  if (amount > 0) {
    message.textContent = `Use ${amount} kg resin`;
  } else {
    message.textContent = 'Please fill all meassurements';
  }
});

// again button reseting all
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.x').value = '';
  document.querySelector('.y').value = '';
  document.querySelector('.z').value = '';
  message.textContent = 'Please fill all meassurements again';
});
