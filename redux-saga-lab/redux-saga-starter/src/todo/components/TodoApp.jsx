import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from '../redux/store'
import './TodoApp.css'
const TodoApp = () => {
  return (
    <div  className="app-container">
    <Provider store={store}>
        <TodoForm />
        <TodoList />
    </Provider>
    </div>

  )
}

export default TodoApp