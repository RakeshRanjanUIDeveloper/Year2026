import React, { useState } from 'react'

const Todo = ({todoItems}) => {  
    const greenStyle={
        color:'Green'
    } 
    const redStyle={
        color:'Red'
    }
  return (
    <div>
        {
            todoItems.map((todo)=>(
                <div key={todo.id} style={todo.isCompleted ? greenStyle : redStyle}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Todo