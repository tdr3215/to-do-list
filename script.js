console.log("hello world");

// Data Structure
const arrayOfTasks = [];

// JS Variables

// DOM Variables
const newTaskInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-task");
const taskList = document.querySelector(".content");
// Function Defintions

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};

//createTask()
function createTask() {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    const task = arrayOfTasks[i];

    const newTask = task.task;

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
    readOnlyText.innerText = newTask;
    appendDiv.className = "input-group-append";
    removeButton.className = "btn btn-danger";
    removeButton.innerText = "Remove";

    taskList.append(inputGroupDiv);
    inputGroupDiv.append(prependDiv);
    inputGroupDiv.append(readOnlyText);
    inputGroupDiv.append(appendDiv);
    prependDiv.append(inputTextDiv);
    inputTextDiv.append(checkBox);
    appendDiv.append(removeButton);
  }
}

// removeTask()

// Event Listeners

// addButton --> click,createTask()

addBtn.addEventListener("click", () => {
  const addedTask = newTaskInput.value;
  const newObject = {
    task: addedTask,
    checked: false,
  };

  // arrayOfTasks.pop();
});
// removeButton --> click, removeTask()
