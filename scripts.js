// Fetch todos from the server and render them
fetch('http://localhost:3000/todos')
  .then(response => response.json())
  .then(todos => {
    const todoListContainer = document.getElementById('todo-list');
    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
        <span class="title">${todo.title}</span>
        <span class="completed">${todo.completed ? '(Completed)' : ''}</span>
      `;
      todoListContainer.appendChild(todoItem);
    });
  });

// Add event listener for the add todo form
const addTodoForm = document.getElementById('add-todo-form');
const todoInput = document.getElementById('todo-input');
addTodoForm.addEventListener('submit', event => {
  event.preventDefault();
  const title = todoInput.value.trim();
  if (title !== '') {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })
      .then(response => response.json())
      .then(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
          <span class="title">${todo.title}</span>
          <span class="completed"></span>
        `;
        const todoListContainer = document.getElementById('todo-list');
        todoListContainer.appendChild(todoItem);
        todoInput.value = '';
      });
  }
});
