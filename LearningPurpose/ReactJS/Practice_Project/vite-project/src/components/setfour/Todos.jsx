import React, { useState } from 'react'

const Todos = ({todoItemss}) => {

    const [todos, setTodos] = useState(
        todoItemss.map((todo) => ({...todo, isDone:false}))
    )
    const todoStyle ={
        textDecoration: 'line-through',
        color: 'red'
    }
    const handleDone = (todoId) => {
        setTodos((prevTodos) => prevTodos.map((todo) => todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo))
    }
  return (
   <React.Fragment>
        <h2>Todo List 2</h2>
        <div className='todolists'>
        <ul>
        {
            todos.map((t) => (
                <React.Fragment>
                    <li key={t.id} style={t.isDone ? todoStyle: {}}>{t.task}</li>
                    <button onClick={() => handleDone(t.id)}>{t.isDone ? 'Undo' : 'Mark as Done'}</button>
                </React.Fragment>
            ))
        }
        </ul>
        </div>
   </React.Fragment>
  )
}

export default Todos