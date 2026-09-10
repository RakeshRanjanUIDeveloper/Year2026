import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constants/todoConstants"


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            text
        }
    }
}
export const deleteTodo = (id) =>{
    return{
        type:DELETE_TODO,
        payload: id  
    }
}

export const editTodo = (todo) => {
    return{
        type:EDIT_TODO,
        payload: todo
    }
}

export const updateTodo =(todo) =>{
    return{
        type:UPDATE_TODO,
        payload: todo
    }
}