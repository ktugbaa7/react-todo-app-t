import React, { useEffect } from "react";
import { useTodo } from "../../../contexts/TodoContext";
import Item from "./Item";

// let filtered = null;

function List() {
  const { todos, filter, filtered, setFiltered } = useTodo();

  // bu şekilde de filtreleme yapılabilir.
  // filtered = todos;
  // if (filter !== "all") {
  //   filtered = todos.filter((todo) =>
  //     filter === "active" ? todo.completed === false : todo.completed === true
  //   );
  // }

  useEffect(() => {
    if (filter === "all") {
      setFiltered(todos);
    } else if (filter === "active") {
      setFiltered(todos.filter((i) => i.completed === false));
    } else {
      setFiltered(todos.filter((i) => i.completed === true));
    }
  }, [filter,todos]);

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default List;
