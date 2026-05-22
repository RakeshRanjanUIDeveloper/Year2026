import React from 'react'
import {addTodo} from '../redux/actions/todoActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const TodoForm = () => {
  const [text, setText] = useState('')
const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch addTodo action here
    dispatch(addTodo(text))
    setText('')
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter todo' value={text} onChange={(e) => setText(e.target.value)} />
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm