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
app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
})
