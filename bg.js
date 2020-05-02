const body = document.querySelector("body");

const IMG_NUMBER = 5;

let currentNumber;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
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
