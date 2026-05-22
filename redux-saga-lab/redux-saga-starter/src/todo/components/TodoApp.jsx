import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from '../redux/store'

const TodoApp = () => {
  return (
    <Provider store={store}>
        <TodoForm />
        <TodoList />
    </Provider>
  )
}

export default TodoApp