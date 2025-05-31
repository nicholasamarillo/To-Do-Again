const btn = document.querySelector('.button');
const board = document.querySelector('.board');
const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // ✅ Load saved tasks from localStorage

renderTasks(); // ✅ Render tasks when page loads

btn.addEventListener('click', function(){
    let taskName = prompt("Please enter the name of your task.");
    tasks.push(taskName.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks)); // ✅ Save updated list
    renderTasks();
});

function renderTasks(){
    board.innerHTML = '';

    tasks.forEach((task, index) => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = 'Completed';
        board.appendChild(card);
        card.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function(){
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks)); // ✅ Save after deleting
            renderTasks();
        });
    });
}
