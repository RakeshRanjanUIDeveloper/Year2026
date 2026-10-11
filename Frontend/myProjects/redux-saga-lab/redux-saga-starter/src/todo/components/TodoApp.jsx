import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css";

const TodoApp = () => {
  return (
    <div className="app-container">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;