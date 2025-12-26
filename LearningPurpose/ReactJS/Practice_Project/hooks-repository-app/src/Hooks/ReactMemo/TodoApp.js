import React, { useState, useCallback } from 'react'
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Learn React.memo", completed: false },
        { id: 3, text: "Build a Project", completed: false },
      ]);
    const [newTodoText, setNewTodoText] =useState("");

    const addTodo = () =>{
        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: newTodoText, completed: false }]);
        setNewTodoText("")
    } 
    const toggleTodo = useCallback((id) => {
          setTodos((prevTodos) =>prevTodos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          );
        },[setTodos]);
  return (
    <div>
        <h1>Todo List</h1>
        <input type='text' value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
        <button onClick={addTodo}>Add To-Do</button>
        {
            todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
            ))
        }
    </div>
  )
}

export default TodoApp