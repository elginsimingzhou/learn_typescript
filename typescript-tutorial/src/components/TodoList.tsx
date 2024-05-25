import React, {useReducer} from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-wrap place-content-evenly w-[90%]">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} 
         todos = {todos}
         setTodos = {setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
