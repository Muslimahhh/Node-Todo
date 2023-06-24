const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

let todos = [
  { title: 'Buy groceries', completed: false },
  { title: 'Walk the dog', completed: true },
  { title: 'Do laundry', completed: false },
  { title: 'Clean the house', completed: true },
  { title: 'Write a blog post', completed: false }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
