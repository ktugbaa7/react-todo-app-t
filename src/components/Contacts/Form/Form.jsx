import React, { useEffect, useState } from "react";

function Form( { setTodos, todos } ) {
  const [form, setForm] = useState({});
  
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // boş bilgi gönderilmesini engeller.
  const onSubmit = (e) => {
    e.preventDefault();
    if(form.content === "") {  
        alert("boş bıraktınız")
        return false;
    }
    setTodos([...todos, form]); // tüm bilgiler ard arda kayıt edilir ki kayıp bilgi olmasın.
    console.log(form);  
  };

  // inputları temizler.
  useEffect(() => {
    setForm({ content: ""}) 
  }, [todos])

  
  
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            name="content"
            value={form.content}
            placeholder="What needs to be done?"
            onChange={onChangeInput}
          />
      </form>
    </section>
  );
}

export default Form;
