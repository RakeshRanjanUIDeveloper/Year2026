const express = require('express');
const app = express();
app.use(express.json()); 
app.use((req, res, next) => {   
  console.log(req.method, req.url);
  next();
});
let todos = [
  { id: 1, title: 'Learn Node', done: false },
  { id: 2, title: 'Learn Express', done: false }
];
let nextId = 3;
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
  res.status(204).send();
});

app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
})
