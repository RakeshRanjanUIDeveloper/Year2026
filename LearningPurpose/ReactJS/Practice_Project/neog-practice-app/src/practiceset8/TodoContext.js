import React,{ createContext, useEffect,useState } from "react";
import { fakeTodoFetch } from "./fakeTodoFetch";

// Create the Context
export const TodoContext = createContext();

// Create Provider Component
export const TodoProvider = ({children}) => {
    const [allTodos, setAllTodos] = useState([]);

    const addToDoneTodo =(todoId) =>{
        setAllTodos((prevTodos) => 
            prevTodos.map((todo) => todo.id === todoId ? {...todo, isCompleted:true} : todo)
        )
      }
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fakeTodoFetch("https://example.com/api/todos");
        if (response.status === 200) {
          setAllTodos(response.data.todos);
        }
      } catch (error) {
        console.log(error)
      } 
    };
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{allTodos, addToDoneTodo}}>
        {children}
    </TodoContext.Provider>
  )
};
