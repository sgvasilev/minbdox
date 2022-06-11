import React from "react";

export type TodoType = {
  id: string;
  text: string;
  status: string;
};
export type InitialStateType = {
  todo: TodoType[];
};
export type TodoContextProviderProps = {
  children: React.ReactNode;
};
