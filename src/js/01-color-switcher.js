function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
import throttle from 'lodash.throttle';
console.log(document.body.style.backgroundColor);
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
// const background = document.body.style.backgroundColor;
console.log(startBtn);
let timerId = null
// function bgChange(){
if (timerId === null) {
    stopBtn.setAttribute('disabled', true);
}
// }

function startColorChange() {
    document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function stopColorChange() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
