const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  form.removeEventListener("submit", handleSubmit);
  saveName(currentValue);
  paintGreeting(currentValue);
}

function askForName() {
  console.log("askForName()");
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  // not working why?
  // form.classList.remove(SHOWING_CN);
  console.log("paintGreeting()");
  form.style.display = "none";
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
