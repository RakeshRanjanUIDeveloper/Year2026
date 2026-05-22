import { ADD_TODO } from "../constants/todoConstants"


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            text
        }
    }
}