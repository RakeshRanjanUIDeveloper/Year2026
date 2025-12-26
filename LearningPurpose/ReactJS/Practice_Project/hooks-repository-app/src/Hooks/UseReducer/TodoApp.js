import React, { useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const TodoApp = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [taskText, setTaskText] = React.useState("");

  const addTask = () => {
    if (taskText.trim()) {
      dispatch({ type: "ADD_TASK", payload: taskText });
      setTaskText("");
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a task" 
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
              onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
