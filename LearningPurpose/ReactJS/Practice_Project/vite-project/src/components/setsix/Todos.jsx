import React, { useEffect, useState } from 'react'
import { FakeTodosFetch } from './FakeTodosFetch';

const Todos = () => {
    const [allTodos, setAllTodos] = useState([]);
    const fetchTodosData =  async () =>{
        try{
            const response = await FakeTodosFetch('https://example.com/api/todos');
            setAllTodos(response.data.todos);
        }catch(error){
            console.log(error);
        }
    } 
    useEffect(() => {
        fetchTodosData();
    },[])
  return (
    <React.Fragment>
        {
            allTodos.map((t) => (
                <React.Fragment>
                    <h2>{t.title}</h2>
                    <ul>
                    {
                        t.todos.map((t) =>(
                            <li>{t}</li>
                        ))
                    }
                    </ul>
                </React.Fragment>
            ))
        }
    </React.Fragment>
  )
}

export default Todos