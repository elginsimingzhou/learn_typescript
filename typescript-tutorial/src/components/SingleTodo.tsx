import React, { useState, useRef, useEffect, useContext } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";
import { TodosContext } from "../context/Context";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const { dispatch } = useContext(TodosContext);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
    dispatch({type:"done", payload:id});
  };

  const handleDelete = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({type:"remove", payload:id});
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form
      className="flex w-[29.5%] rounded p-5 mt-3 bg-[#e4eb31] items-center sm:w-[100%] md:w-[100%] lg:w-[40%]"
      onSubmit={(e) => {
        handleEdit(e, todo.id);
      }}
    >
      {edit ? (
        <input
          ref={inputRef}
          className="flex flex-1 p-2 border-none text-md"
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s className="flex flex-1 p-2 border-none text-md ">{todo.todo}</s>
      ) : (
        <span className="flex flex-1 p-2 border-none text-md ">
          {todo.todo}
        </span>
      )}

      <div className="flex flex-row">
        <span
          className="ml-3 text-lg cursor-pointer md:w-[95%] "
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="ml-3 text-lg cursor-pointer md:w-[95%]"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className="ml-3 text-lg cursor-pointer md:w-[95%]"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
