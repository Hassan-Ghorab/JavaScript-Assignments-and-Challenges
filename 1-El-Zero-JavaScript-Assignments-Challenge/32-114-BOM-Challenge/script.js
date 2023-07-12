
// 114 - BOM Challenge

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const tasksContainer = document.querySelector(".tasks-container");

function renderTasks() {
  tasksContainer.innerHTML = "";
  let index = 0;
  for (const tasks of tasksArray) {
    let task = `
    <div class="task" id="${tasks.id}">
      <p class="task-title">${tasks.title}</p>
      <button class="delete-btn">Delete</button>
    </div>
    `;

    tasksContainer.innerHTML += task;
    index++;
  }
  saveDateToLocalStorage("tasks", tasksArray);
}
renderTasks();

function createTasks() {
  if (taskInput.value === "") return;
  const taskObj = {
    title: taskInput.value,
    id: Date.now(),
  };

  tasksArray.push(taskObj);
  renderTasks();

  taskInput.value = "";
  saveDateToLocalStorage("tasks", tasksArray);
}

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createTasks();
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    deleteTaskWithId(e.target.parentElement.id);
  }
});

function deleteTaskWithId(taskId) {
  tasksArray = tasksArray.filter((task) => task.id != taskId);
  saveDateToLocalStorage("tasks", tasksArray);
}

function saveDateToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
