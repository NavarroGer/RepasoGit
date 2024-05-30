document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    const task = document.createElement('li');
    task.className = 'task';
    task.appendChild(document.createTextNode(taskInput.value));
    
    task.addEventListener('click', function() {
        task.classList.toggle('completed');
    });
    
    taskList.appendChild(task);
    taskInput.value = '';
});
