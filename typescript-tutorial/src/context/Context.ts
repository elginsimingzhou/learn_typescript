import React from "react";
import { Todo } from "../model";
import { Actions } from "./Reducer";

export const TodosContext = React.createContext<{
  state: Todo[];
  dispatch: React.Dispatch<Actions>;
}>({
  state: [],
  dispatch: () => undefined,
});
