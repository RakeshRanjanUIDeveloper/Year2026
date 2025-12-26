import React from 'react'

const TodoItem = React.memo(({ todo, onToggle }) => {
    console.log(`Rendering Todo: ${todo.text}`);
    return (
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </div>
    );
  });

export default TodoItem