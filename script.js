// Retrieve tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render the task list
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task', task.completed ? 'completed' : '');
        taskElement.innerHTML = `
            <div class="task-details">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Deadline: ${task.deadline} | Priority: ${task.priority} | Label: ${task.label}</p>
            </div>
            <div class="task-actions">
                <button class="btn btn-success btn-sm" onclick="markTaskComplete(${index})">Complete</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

// Function to add a new task
function addTask() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskLabel = document.getElementById('task-label').value;

    const task = {
        title: taskTitle,
        description: taskDescription,
        deadline: taskDeadline,
        priority: taskPriority,
        label: taskLabel,
        completed: false
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    clearForm();
}

// Function to mark a task as complete
function markTaskComplete(index) {
    tasks[index].completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to clear the form
function clearForm() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-priority').value = '1';
    document.getElementById('task-label').value = '';
}

// Initial rendering of the task list
renderTasks();
