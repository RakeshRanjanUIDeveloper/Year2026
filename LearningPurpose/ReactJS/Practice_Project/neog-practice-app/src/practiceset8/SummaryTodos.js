import React, { useContext} from 'react'
import { TodoContext } from './TodoContext'
const SummaryTodos = () => {
 const {allTodos, addToDoneTodo} = useContext(TodoContext);
 console.log(allTodos)

    if (allTodos.length === 0) {
        return <p>No todos available</p>;
    }

  return (
    <React.Fragment>
        <h2>Summary of Done and Open Todos</h2>
        <div className='todos'>
            {
                allTodos.map((todo)=>(
                    <div className={`todo ${todo.isCompleted ? "completed" : ""}`} key={todo.id}>
                        <p className="todo-title"><b>Title : </b>{todo.title}</p>
                        <p className="todo-description"><b>Description : </b>{todo.description}</p>
                        <p className={`todo-status ${todo.isCompleted ? 'done' : 'open'}`}><b>Status : </b>{todo.isCompleted ? 'Done' : 'Open'}</p>
                        <br />
                        {   !todo.isCompleted &&
                            <button onClick={() => addToDoneTodo(todo.id)}>Mark as Done</button>
                        }
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default SummaryTodos