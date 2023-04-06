import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState('all');  // all filtresi seçili olarak gelsin.
  const [filtered, setFiltered] = useState([]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "react öğren",
      completed: true,
    },
  ]);

  // listeye ekleme yapılır
  const addTodo = (text) =>
    setTodos((item) => [...item, { id: uuidv4(), completed: false, text }]); // uuidv4 ile benzersiz id oluşturulur

  // checkbox ı değiştir
  const toggleTodo = (id) => {
    const itemsTodo = [...todos];

    // todoyu tamamlandı ya da tamamlanmadı olarak bilgi verir
    const itemIndex = itemsTodo.findIndex((todo) => todo.id === id);
    
    const item = todos[itemIndex];

    // true ise false, false ise true yap
    item.completed = !item.completed;
    setTodos(itemsTodo);
  };

  // bir tane elemanı sil
  const destroyTodo = (id) => {
    const itemsTodo = [...todos]; // tüm todoları al, içinden seçeceğiz

    const itemIndex = itemsTodo.findIndex((todo) => todo.id === id)
    itemsTodo.splice(itemIndex, 1); //bu metodla kendinden sonra bir git yani kendisinden kalıyor ve siliyor.
    setTodos(itemsTodo);
  }
    
  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter,
    filtered,
    setFiltered,
  };

  return (
    <TodoContext.Provider value={values}> {children} </TodoContext.Provider>
  );
};

// componentlerde kullanılmak üzere useContext ile dışarı aktarılır.
export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("hata");
  }
  return context;
};
