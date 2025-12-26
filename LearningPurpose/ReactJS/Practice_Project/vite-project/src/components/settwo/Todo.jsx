import React from 'react'

const Todo = ({todoItems}) => {
    const statusCompleted = {
        color : 'green'
    }
    const statusInComplete = {
        color : 'red'
    }
  return (
    <React.Fragment>
        {
            todoItems.map((t) => (
                <div className='todo' key={t.id} style={t.isCompleted ? statusCompleted : statusInComplete}>
                    <h2>{t.title}</h2>
                    <p>{t.description}</p>
                </div>
            ))
        }
    </React.Fragment>
  )
}

export default Todo