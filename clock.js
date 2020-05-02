const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
let initialTime = true;

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  if (seconds == 0 || initialTime) {
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    initialTime = false;
  }
}

function init() {
  setInterval(getTime, 1000);
}

init();
