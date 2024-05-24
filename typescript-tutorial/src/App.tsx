import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo)
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#2f74c0]">
      <span className="uppercase text-4xl my-7 mx-0 text-white z-1 text-center md:my-3 md:text-2xl">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
