import React from 'react'

const Todo = ({todoItems}) => {
  return (
    <div>
        <h2>Todo List</h2>
        {
            todoItems.map((todo) => (
                <div className='todo' style={{color : todo.isCompleted ? 'green' : 'red'}}>
                    <h4>Todo Title - {todo.title}</h4>
                    <p>Todo Description - {todo.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Todo