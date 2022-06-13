console.log("hello world");

// Data Structure

// JS Variables

// DOM Variables
const newTaskInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-task");
const taskList = document.querySelector(".content");
// Function Defintions

// Storage.prototype.setObject = function (key, value) {
//   this.setItem(key, JSON.stringify(value));
// };

// Storage.prototype.getObject = function (key) {
//   var value = this.getItem(key);
//   return value && JSON.parse(value);
// };
function addToTaskList(newTask) {
  const addedTask = {
    id: Date.now(),
    task: newTask,
    checked: false,
  };
  localStorage.setItem(addedTask.id, newTask);
}

// function loadTasks() {
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//   }
// }

//createTask()
function createTask(task) {
  const inputGroupDiv = document.createElement("div");
  const prependDiv = document.createElement("div");
  const inputTextDiv = document.createElement("div");
  const checkBox = document.createElement("input");
  const readOnlyText = document.createElement("div");
  const appendDiv = document.createElement("div");
  const removeButton = document.createElement("button");

  inputGroupDiv.className = "input-group mb-3";
  prependDiv.className = "input-group-prepend";
  inputTextDiv.className = "input-group-text";
  checkBox.type = "checkbox";
  readOnlyText.className = "card-body";
  readOnlyText.innerText = task;
  appendDiv.className = "input-group-append";
  removeButton.className = "btn btn-danger";
  removeButton.innerText = "Remove";

  inputGroupDiv.append(prependDiv);
  inputGroupDiv.append(readOnlyText);
  inputGroupDiv.append(appendDiv);
  prependDiv.append(inputTextDiv);
  inputTextDiv.append(checkBox);
  appendDiv.append(removeButton);
  taskList.append(inputGroupDiv);
}

// removeTask()

// Event Listeners

// addButton --> click,createTask()

addBtn.addEventListener("click", () => {
  addToTaskList(newTaskInput.value);
});

removeButton.addEventListener('click', ()=>{
  
})

window.addEventListener("load", (evt) => {
  // loop over storage and create each div using the current input as the inner text for each task
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.getItem(localStorage.key(i));
    createTask(key);
  }
});
// // removeButton --> click, removeTask()
