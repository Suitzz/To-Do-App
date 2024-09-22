// Step 1: Grab the necessary elements from the HTML
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Step 2: Add an event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  // Step 3: Ensure input is not empty
  if (taskText !== "") {
    // Create a new list item (li) element
    const newTask = document.createElement('li');
    
    // Create a checkbox element to mark task as done
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    // Add an event listener to the checkbox to toggle the "done" state
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        newTask.classList.add('done');
      } else {
        newTask.classList.remove('done');
      }
    });

    // Create a span to hold the task text
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    // Create a trash bin icon using Font Awesome
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('trash');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';  // Use Font Awesome trash icon
    
    // Add an event listener to the trash icon to delete the task
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(newTask);
    });

    // Append the checkbox, task text, and trash bin to the task
    newTask.appendChild(checkbox);
    newTask.appendChild(taskTextElement);
    newTask.appendChild(deleteButton);

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = '';
  }
}
