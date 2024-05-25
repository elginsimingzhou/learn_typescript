import React, { useReducer, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import TodoReducer from "./context/Reducer";
import { TodosContext } from "./context/Context";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [state, dispatch] = useReducer(TodoReducer, todos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //prevent auto-refresh
    if (todo) {
      // setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      dispatch({ type: "add", payload: todo });
      setTodo("");
    }
    // console.log("add action dispatched")
  };

  // console.log(todo);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className="w-screen h-screen flex flex-col items-center bg-[#2f74c0]">
        <span className="uppercase text-4xl my-7 mx-0 text-white z-1 text-center md:my-3 md:text-2xl">
          Taskify
        </span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={state} setTodos={setTodos} />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
