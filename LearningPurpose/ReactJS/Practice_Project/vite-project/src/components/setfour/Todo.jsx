import React, { useState } from "react";

const Todo = ({ todoItems }) => {
  const todoStyle ={
    textDecoration : 'line-through' 
  }
  
  const [todos, setTodos] = useState(todoItems)

  const handleDelete = (todoId) =>{
    setTodos(todos.filter((todo) => todo.id != todoId))
  }
  return (
    <React.Fragment>
      <h2>Todo List</h2>
      <ul>
        {todos.map((t) => (
          <li key={t.id} style={t.isDone ? todoStyle : {}}>{t.task} <span onClick={() => handleDelete(t.id)}>X</span></li>

        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
