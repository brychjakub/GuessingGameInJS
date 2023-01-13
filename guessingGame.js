'use strict';

/*console.log(document.querySelector('.message').textContent);
 
document.querySelector(".number").textContent = 13
document.querySelector(".score").textContent = 20
 
document.querySelector(".guess").value = 23
console.log(document.querySelector(".guess").value)*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'no nubmer';

    //when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number!';
    //volíme css style, není tu tečka před body bo to není class ale element name
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }

    //when guess is wrong
  }else if (guess !== secretNumber) {
    
  
    //when guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : "too low";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
      document.querySelector('.score').textContent = 0;
    

    }}})

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
})
