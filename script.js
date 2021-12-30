'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `Correct Number!`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.again').style.display = `none`;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    displayMessage(`Invalid input`);
  } else if (guess === secretNumber) {
    displayMessage(`Correct number`);
    displayNumber(secretNumber);
    document.body.style.backgroundColor = '#228B22';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   } else if (guess > secretNumber || guess < secretNumber) {
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High` : `Too low`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`You lost the game!`);
      displayScore(0);
      document.body.style.backgroundColor = `	#FF4500`;
      displayNumber(`X`);
      document.querySelector(`h1`).textContent = `You Guessed Wrong!`;
      document.querySelector('.again').style.display = `block`;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayScore(score);
  displayNumber(`?`);
  document.querySelector('.guess').value = '';
  document.querySelector('.again').style.display = `none`;
});
