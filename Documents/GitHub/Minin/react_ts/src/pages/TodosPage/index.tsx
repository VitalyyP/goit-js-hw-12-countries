import { useState, useEffect } from "react";

import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { ITodo } from "../../interfaces";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    // console.log("reading localStorage");
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    // console.log(saved);
    setTodos((prev) => [...saved, ...prev]);
    // console.log(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    console.log("id: ", id);
    setTodos((prev) =>
      prev.map((todo) => {
        console.log("WTF");
        if (todo.id === id) {
          // console.log("todo.completed before: ", todo.completed);
          todo.completed = !todo.completed;
          // console.log("todo.completed after: ", todo.completed);
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm("Are you shore to remove this todo?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default TodosPage;
