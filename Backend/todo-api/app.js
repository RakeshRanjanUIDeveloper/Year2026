const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'todos.json');

function loadTodos() {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function saveTodos() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

app.use(express.json()); 
app.use((req, res, next) => {   
  console.log(req.method, req.url);
  next();
});

let todos = loadTodos();
let nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;

app.get('/todos', (req, res) => {
  res.json(todos);
});
app.post('/todos', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }

  const todo = { id: nextId++, title, done: false };
  todos.push(todo);
  saveTodos();
  res.status(201).json(todo);
});

app.put('/todos/:id', (req, res) => {

  const id = Number(req.params.id);
    if (Number.isNaN(id)) {
  return res.status(400).json({ error: 'id must be a number' });
}
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const { title, done } = req.body;
  if (title !== undefined) todo.title = title;
  if (done !== undefined) todo.done = done;
  saveTodos();

  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {

  const id = Number(req.params.id);
    if (Number.isNaN(id)) {
  return res.status(400).json({ error: 'id must be a number' });
}
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);
   saveTodos();
  res.status(204).send();
});

app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
})
