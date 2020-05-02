const body = document.querySelector("body");

const IMG_NUMBER = 5;

let currentNumber;

function paintImage(imgNumber) {
  const div = document.createElement("div");
  div.style.backgroundImage = `url('images/${imgNumber + 1}.jpg')`;
  div.classList.add("bgImage");
  body.appendChild(div);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  let randomNumber;
  while (true) {
    randomNumber = genRandom();
    if (currentNumber != randomNumber) {
      currentNumber = randomNumber;
      break;
    }
  }

  paintImage(currentNumber);
}

init();
setInterval(init, 1000 * 60);
