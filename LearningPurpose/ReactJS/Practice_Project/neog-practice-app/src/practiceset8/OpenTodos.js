import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

const OpenTodos = () => {
  const {allTodos} = useContext(TodoContext);
  const openTodos = allTodos.filter((todo) => !todo.isCompleted);
  return (
        <React.Fragment>
          <h2>{openTodos.length} Open Todos</h2>
          <div className='todos'>
              {
                openTodos.map((todo)=>(
                      <div className='todo' key={todo.id}>
                          <p className="todo-title"><b>Title : </b>{todo.title}</p>
                          <p className="todo-description"><b>Description : </b>{todo.description}</p>
                          <p className={`todo-status ${todo.isCompleted ? 'done' : 'open'}`}><b>Status : </b>{todo.isCompleted ? 'Done' : 'Open'}</p>
                      </div>
                  ))
              }
        </div>
        </React.Fragment>
  )
}

export default OpenTodos