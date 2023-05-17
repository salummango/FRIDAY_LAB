// // Get references to the task form and list container
// const taskForm = document.getElementById('task-form');
// const taskList = document.getElementById('task-list');

// // Add event listener to the task form
// taskForm.addEventListener('submit', function(event) {
//     // Prevent default form submission behavior
//     event.preventDefault();

//     // Get the task name from the form input
//     const taskName = document.getElementById('task-name').value;


//     // Generate a unique ID for the task
//     const taskId = `task-${Date.now()}`;

//     // Store the task data in local storage
//     const taskData = { name: taskName };

//     function saveToLocalStorage() {
//         localStorage.setItem(taskId, JSON.stringify(taskData));
//     }


//     // Create a new task element and add it to the task list
//     const taskElement = document.createElement('li');
//     taskElement.innerText = taskName;
//     taskElement.addEventListener('submit', function() {
//         // Retrieve task data from local storage and display it
//         const taskData = JSON.parse(localStorage.getItem(taskId));

//     });
//     taskList.appendChild(taskElement);


// });
// const deleteBtn = document.getElementById("remove");
// deleteBtn.addEventListener("click", () => {
//     if (taskName === taskData) {
//         deleteTask(index);
//     }

// });

// function deleteTask(index) {

//     taskId.splice(index, 1);


// }
// taskForm.reset();

// Get references to the task form and list container
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add event listener to the task form
taskForm.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the task name from the form input
    const taskName = document.getElementById('task-name').value;

    // Generate a unique ID for the task
    const taskId = `task-${Date.now()}`;

    // Store the task data in local storage
    const taskData = {
        name: taskName
    };
    localStorage.setItem(taskId, JSON.stringify(taskData));

    // Create a new task element and add it to the task list
    const taskElement = document.createElement('li');
    taskElement.innerText = taskName;
    taskElement.setAttribute('data-task-id', taskId); // Add a data attribute to store the task ID
    taskList.appendChild(taskElement);

    // Clear the form input
    document.getElementById('task-name').value = '';
});

// Add event listener to the remove task button
const deleteBtn = document.getElementById('remove');
deleteBtn.addEventListener('click', function() {
    // Get the task name from the form input
    const taskName = document.getElementById('task-name').value;

    // Get all the task elements in the list
    const taskElements = document.querySelectorAll('#task-list li');

    // Iterate over each task element
    taskElements.forEach(function(taskElement) {
        // Get the stored task ID from the data attribute
        const taskId = taskElement.getAttribute('data-task-id');

        // Retrieve task data from local storage
        const taskData = JSON.parse(localStorage.getItem(taskId));

        // Check if the task name matches the input value
        if (taskData && taskData.name === taskName) {
            // Remove the task element from the list
            taskList.removeChild(taskElement);

            // Remove the task data from local storage
            localStorage.removeItem(taskId);
        }
    });

    // Clear the form input
    document.getElementById('task-name').value = '';
});