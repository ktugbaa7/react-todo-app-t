import React from "react";
import { useTodo } from "../../../contexts/TodoContext";

function Item({ todo }) {
  const { todos, setTodos, toggleTodo, destroyTodo } = useTodo();

  // checkbox ı değiştir
  const onChange = (id) => toggleTodo(id); 

  // bir tane elemanı sil
  const deleteItem = (id) => destroyTodo(id);

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => deleteItem(todo.id)}></button>
      </div>
    </li>
  );
}

export default Item;
