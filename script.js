function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn" onclick="completeTask(this)">✔</button>
      <button class="delete-btn" onclick="deleteTask(this)">✖</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.querySelector("span").classList.toggle("completed");
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}
