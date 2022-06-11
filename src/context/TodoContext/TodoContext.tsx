import React, { createContext, useReducer } from "react";
import { TodoReducer } from "../../reducers";
import {
  GET_TODOS,
  UPDATE_TODOS,
  ADD_TODO,
  DELETE_TODOS,
} from "../../constants";
import {
  InitialStateType,
  TodoContextProviderProps,
  TodoType,
} from "../../constants/enums";

export const TodoProvider = ({ children }: TodoContextProviderProps) => {
  const initialState: InitialStateType = {
    todo: [],
  };
  const TodoContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<unknown>;
  }>({ state: initialState, dispatch: () => null });

  const mainReducer = ({ todo }: any, action: any) => ({
    todo: TodoReducer(todo, action),
  });

  const [state, dispatch] = useReducer(mainReducer, initialState);
  const getTodos = (todoType: string) => {
    dispatch({
      type: GET_TODOS,
      payload: todoType,
    });
  };
  const addTodo = (todo: string) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
  const updateTodo = (id: string, status: string) => {
    dispatch({
      type: UPDATE_TODOS,
      payload: {
        id,
        status,
      },
    });
  };
  const deleteTodos = () => {
    dispatch({
      type: DELETE_TODOS,
    });
  };

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
