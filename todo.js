const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function showDelBtn(e) {
  e.target.querySelector("button").classList.remove("hidden");
}
function hideDelBtn(e) {
  e.target.querySelector("button").classList.add("hidden");
}

function deleteToDo(e) {
  const del = e.target.parentNode;
  toDoList.removeChild(del);
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(del.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "x";
  delBtn.classList.add("hidden");
  delBtn.addEventListener("click", deleteToDo);
  li.addEventListener("mouseenter", showDelBtn);
  li.addEventListener("mouseleave", hideDelBtn);
  li.innerText = text;
  li.id = newId;
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => paintToDo(toDo.text));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoList
    .querySelectorAll("li")
    .forEach((ele) => ele.addEventListener("mouseenter", showDelBtn));
  toDoList
    .querySelectorAll("li")
    .forEach((ele) => ele.addEventListener("mouseleave", hideDelBtn));
}

init();
