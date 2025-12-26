import React, { useState } from 'react'

const TodoList = ({todoItems}) => {
    const [todos, setTodos] = useState(todoItems);

    const todoStyle={
        textDecoration : 'line-through'
    }
    const handleXClick = (id) =>{
       setTodos(todos.filter((todo) => todo.id != id));
    }
  return (
    <React.Fragment>
        <ol>
            {
                todos.map((todo) => (
                    <div>
                        <li key={todo.id} style={todo.isDone ? todoStyle : {}}>{todo.task}</li>
                        <button onClick={() => handleXClick(todo.id)}>X</button>
                    </div>
                    ))
            }
        </ol>
    </React.Fragment>
  )
}

export default TodoList