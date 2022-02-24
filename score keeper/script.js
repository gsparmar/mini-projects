const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#resetButton');
const playto = document.querySelector('#playto');

let p1 = 0;
let p2 = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', () => {
  if (!isGameOver) {
    p1 += 1;
    if (p1 === winningScore) {
      isGameOver = true;
      p1Score.classList.add('has-text-success');
      p2Score.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Score.textContent = p1;
  }
});

p2Button.addEventListener('click', () => {
  if (!isGameOver) {
    p2 += 1;
    if (p2 === winningScore) {
      isGameOver = true;
      p1Score.classList.add('has-text-danger');
      p2Score.classList.add('has-text-success');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Score.textContent = p2;
  }
});

resetBtn.addEventListener('click', () => {
  reset();
});

playto.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  p1 = 0;
  p2 = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Score.classList.remove('has-text-success', 'has-text-danger');
  p2Score.classList.remove('has-text-success', 'has-text-danger');
}
