import React, { useEffect, useState } from 'react'
import fakeTodoFetch from './fakeTodoFetch'

const Todos = () => {
    const [allTodos, setAllTodos] = useState([]);
    useEffect(() =>{
        const fetchTodoData = async () =>{
            try {
                const response = await fakeTodoFetch('https://example.com/api/todos');
                if(response.status === 200){
                    setAllTodos(response.data.todos)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchTodoData();
    }, [])
  return (
    <React.Fragment>
        {
            allTodos.map((todo) => (
                <div className='todo-list'>
                    <h2><b>{todo.title}</b></h2>
                    <ul>
                        {
                            todo.todos.map((td) =>(
                                <li>{td}</li>
                            ))
                            
                        }
                    </ul>
                </div>
            ))
        }
    </React.Fragment>
  )
}

export default Todos