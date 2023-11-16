function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = document.createTextNode(taskInput.value);
        const newTask = document.createElement('li');
        newTask.appendChild(taskText);

        // Adiciona um botão de conclusão à tarefa
        const completeButton = document.createElement('button');
        completeButton.appendChild(document.createTextNode('Concluir'));
        completeButton.onclick = function() {
            newTask.classList.toggle('completed');
        };
        newTask.appendChild(completeButton);

        // Adiciona um botão de exclusão à tarefa
        const deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Excluir'));
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}
