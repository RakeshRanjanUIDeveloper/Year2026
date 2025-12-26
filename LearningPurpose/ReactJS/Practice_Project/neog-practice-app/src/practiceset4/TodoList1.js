import React, { useState } from "react";

const TodoList1 = ({ todoItems }) => {
  const [todos, setTodos] = useState(
    todoItems.map((todo) => ({...todo, isDone:false}))
  );

  const completedStyle = {
    color: 'red',
    textDecoration: 'line-through'
  };

  const handleToggleStatus = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  return (
    <React.Fragment>
      <ol>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li style={todo.isDone ? completedStyle : {}}>{todo.task}</li>
            <button onClick={() => handleToggleStatus(todo.id)}>
              Mark as Done
            </button>
          </div>
        ))}
      </ol>
    </React.Fragment>
  );
};

export default TodoList1;
