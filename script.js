// Select elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks when page loads
window.onload = function() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task.text, task.completed));
};

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTaskToDOM(taskText, false);
  saveTask(taskText, false);

  taskInput.value = "";
}

// Add task to DOM
function addTaskToDOM(taskText, completed) {
  const li = document.createElement("li");
  li.textContent = taskText;

  if (completed) {
    li.classList.add("completed");
  }

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateStorage();
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = () => {
    li.remove();
    updateStorage();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Save new task
function saveTask(taskText, completed) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: completed });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update storage after changes
function updateStorage() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
