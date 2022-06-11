console.log("hello world");

// Data Structure
const arrayOfTasks = [
  {
    task: "walk the dog",
    checked: false,
  },
  {
    task: "bake the chicken",
    checked: false,
  },
  {
    task: "pick up child",
    checked: false,
  },
  {
    task: "put down milk",
    checked: false,
  },
];

// JS Variables

// DOM Variables
const newTaskInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-task");
const taskList = document.querySelector(".content");
// Function Defintions

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

createTask();
// removeTask()

// Event Listeners

// addButton --> click,createTask()
// removeButton --> click, removeTask()
