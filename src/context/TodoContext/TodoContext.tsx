import React, { createContext, useReducer } from "react";
import { TodoActions } from "../../actions/todoActions";

import { InitialStateType, TodoContextProviderProps } from "../../constants";
import { todoReducer } from "../../reducers";

const initialState: InitialStateType = {
  todo: [],
};
export const TodoContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<TodoActions>;
}>({ state: initialState, dispatch: () => undefined });

export const TodoProvider = ({ children }: TodoContextProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
