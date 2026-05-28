import {ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO} from '../constants/todoConstants';


const initialState = {
    todos: [],
    editingTodo: null
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        case EDIT_TODO:
            return{
                ...state,
                editingTodo: action.payload
            }
        case UPDATE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo),
                editingTodo: null
            }
        default:
            return state
    }
}

export default todoReducer;