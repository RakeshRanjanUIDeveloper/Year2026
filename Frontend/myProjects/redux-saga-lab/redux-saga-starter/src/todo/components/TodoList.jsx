import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/actions/todoActions';
import './TodoApp.css'
const TodoList = () => {
  const todos = useSelector(
    (state) => state.todo.todos
  )
  const dispatch = useDispatch();


  return (
    <div  className="todo-list-container">
      <ul className="todo-list">
        {
          todos.map((todo) => (
            <li key={todo.id}className="todo-item">
              <span>{todo.text} </span>
               <div className="button-group">
              <button className="edit-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              <button className="delete-btn" onClick={() => dispatch(editTodo(todo))}>Edit</button>
               </div>

            </li>
          ))  
        }
      </ul>
    </div>
  )
}

export default TodoList