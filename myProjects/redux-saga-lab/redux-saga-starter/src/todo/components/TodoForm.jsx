import React from 'react'
import {addTodo, updateTodo} from '../redux/actions/todoActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './TodoApp.css'
const TodoForm = () => {
  const [text, setText] = useState('')
const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(editingTodo){
      dispatch(updateTodo({...editingTodo, text}))
    }else{
      dispatch(addTodo(text))
    }
    setText('')
  }

  //Get Value of editingTodo from store
  const editingTodo = useSelector((state) => state.todo.editingTodo)
  
  // Fill input box when edit clicked
  useEffect(() => {
    if(editingTodo){
      setText(editingTodo.text)
    }
  }, [editingTodo])
  return (
    <div className="todo-form-container">
        <h1>Redux Todo App</h1>
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text" placeholder='Enter todo' value={text} onChange={(e) => setText(e.target.value)} />
            <button type='submit'>
              {
                editingTodo ? 'Update Todo' : 'Add Todo'
              }
            </button>
        </form>
    </div>
  )
}

export default TodoForm