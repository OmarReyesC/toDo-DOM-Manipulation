const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Humble first attempt at creating Task items on my own. 
//taskForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const taskInput = document.getElementById('task-input');
//     const task = taskInput.value;
//     console.log(task);
//     const newTask = document.createElement('li');
//     // const newTaskText = document.createElement('p');
//     // newTaskText.textContent = task;
//     const newDeleteBtn = document.createElement('span');
//     newDeleteBtn.textContent = '❌';
//     const newEditBtn = document.createElement('span');
//     newEditBtn.textContent = '✏️';
//     newTask.append(task);
//     newTask.append(newDeleteBtn);
//     newTask.append(newEditBtn);
//     taskList.prepend(newTask);
// });

taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = document.getElementById('task-input');
        const task = taskInput.value;
        console.log(task);
        if (task) {
            taskList.append(createTaskElement(task));
            taskInput.value = '';
        };
});

function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.append(createButton('❌', 'delete-btn'), createButton('✏️', 'edit-btn'));
    return li;
};

function createButton(text, className) {
    const btn = document.createElement('span');
    btn.textContent = text;
    btn.className = className;
    return btn;
};

taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')) {
        deleteTask(e.target.parentElement);
    } else if(e.target.classList.contains('edit-btn')) {
        editTask(e.target.parentElement);
    }
});

function deleteTask(taskItem) {
    if(confirm('¿Confirmas que quieres eliminar permanentemente este elemento?')) {
        taskItem.remove();
    };
};

function editTask(taskItem) {
    const newTask = prompt('Edita tu tarea:', taskItem.firstChild.textContent);
    if(newTask) {
        taskItem.firstChild.textContent = newTask
    };
};