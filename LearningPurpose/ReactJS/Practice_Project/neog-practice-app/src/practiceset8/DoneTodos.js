import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

const DoneTodos = () => {
  const {allTodos} = useContext(TodoContext);
  const doneTodos = allTodos.filter((todo) => todo.isCompleted);
  return (
    <React.Fragment>
      <h2>{doneTodos.length} Done Todos</h2>
      <div className='todos'>
          {
            doneTodos.map((todo)=>(
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

export default DoneTodos