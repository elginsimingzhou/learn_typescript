import React, { useRef, useState } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="flex w-[90%] relative items-center"
    >
      <input
        ref={inputRef}
        className="w-screen rounded py-5 px-6 text-2xl border-0 duration-200 shadow-inner transition focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] outline-none"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="absolute w-12 h-12 m-3 rounded-full right-0 border-none text-base bg-[#2f74c0] text-white transition-all duration-200 shadow-inner hover:bg-[#388ae2] active:scale-75"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
