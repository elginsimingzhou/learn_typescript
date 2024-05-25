//Action have 2 parts, 1) type 2) payload/input type
import { Todo } from "../model";

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove": {
      console.log("removed");
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "done": {
      console.log("done");
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
      );
    }
    default:
      return state;
  }
};

export default TodoReducer;
