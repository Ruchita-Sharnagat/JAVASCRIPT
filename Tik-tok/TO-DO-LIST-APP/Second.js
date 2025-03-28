// Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from Local Storage
document.addEventListener("DOMContentLoaded", loadTasks);

// 🟢 Add Task Function
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Empty input check

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="delete-btn">❌</button>
    `;

    taskList.appendChild(taskItem);
    saveTasks();
    taskInput.value = ""; // Clear input field

    // ✅ Mark Task as Completed
    taskItem.querySelector(".task").addEventListener("click", () => {
        taskItem.classList.toggle("completed");
        saveTasks();
    });

    // ❌ Delete Task
    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
        saveTasks();
    });
});

// 🔄 Save Tasks in Local Storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(taskItem => {
        tasks.push({
            text: taskItem.querySelector(".task").innerText,
            completed: taskItem.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 🔄 Load Tasks from Local Storage
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="task">${task.text}</span>
            <button class="delete-btn">❌</button>
        `;
        if (task.completed) taskItem.classList.add("completed");

        taskList.appendChild(taskItem);

        // ✅ Mark Task as Completed
        taskItem.querySelector(".task").addEventListener("click", () => {
            taskItem.classList.toggle("completed");
            saveTasks();
        });

        // ❌ Delete Task
        taskItem.querySelector(".delete-btn").addEventListener("click", () => {
            taskItem.remove();
            saveTasks();
        });
    });
}
