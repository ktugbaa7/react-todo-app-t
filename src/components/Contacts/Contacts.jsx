import React, { useEffect, useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";
import Footer from "../Footer/Footer";

function Contacts() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default Contacts;
