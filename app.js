// DOM elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create <li>
    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle complete on click
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.style.background = "red";
    delBtn.style.color = "white";
    delBtn.style.marginLeft = "10px";
    delBtn.style.border = "none";
    delBtn.style.padding = "5px 8px";
    delBtn.style.cursor = "pointer";

    delBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent marking completed
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input
});
