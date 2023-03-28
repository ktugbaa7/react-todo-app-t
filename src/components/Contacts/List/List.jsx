import React, { useState, useEffect } from "react";

function List({ todos, setTodos }) {
  const [selected, setSelected] = useState("All");
  const [filtered, setFiltered] = useState([]);

  // tek item silmek için
  const deleteItem = (i) => {
    const deleteTodo = todos.filter((item) => item !== i);
    setTodos(deleteTodo);
  };
  //tümünü siler
  const deleteAllItem = () => {
    setTodos(todos.filter((todo) => todo.isDone === false));
  };
  //tamamlandı olarak işaretler
  const toDoComplete = (i) => {
    setTodos(
      todos.map((todo) => {
        if (todo.i === i) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  // filtreleme yapılır
  useEffect(() => {
    if (selected === "All") {
      setFiltered(todos);
    } else if (selected === "Active") {
      setFiltered(todos.filter((i) => i.completed === false));
    } else {
      setFiltered(todos.filter((i) => i.completed === true));
    }
  }, [selected, todos]);

  return (
    <section class="main">
      <ul className="todo-list">
        {filtered.map((todo, i) => (
          <li className={todo.completed ? "completed" : ""} key={i}>
            <div className="view">
              <input
                onClick={() => toDoComplete(todo.i)}
                checked={todo.completed}
                className="toggle"
                type="checkbox"
              />
              <label>{todo.content}</label>
              <button className="destroy" onClick={() => deleteItem(todo)}>
                <i className=""></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer class="footer">
        <span class="todo-count">
          <strong>{todos.filter((i) => i.completed === false).length}</strong>
          items left
        </span>

        <ul class="filters">
          <li>
            <button>
              <a onClick={() => setSelected("All")} class="selected">
                All
              </a>
            </button>
          </li>
          <li>
            <button>
              <a onClick={() => setSelected("Active")}>Active</a>
            </button>
          </li>
          <li>
            <button>
              <a onClick={() => setSelected("Completed")}>Completed</a>
            </button>
          </li>
        </ul>

        <button class="clear-completed" onClick={() => deleteAllItem()}>
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default List;
