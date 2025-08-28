// Load saved tasks on page load
window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => renderTask(task.text, task.completed));
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  renderTask(taskText, false);
  saveTasks();
  input.value = "";
}

function renderTask(taskText, isCompleted) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  if (isCompleted) span.classList.add("completed");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    span.classList.toggle("completed");
    saveTasks();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  const btnDiv = document.createElement("div");
  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);

  document.getElementById("taskList").appendChild(li);
}

function deleteAll() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    document.get
