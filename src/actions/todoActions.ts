import { TodoStatus, TodoType } from "../constants";

export enum ActionType {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
}
export interface ADD_TODO {
  type: ActionType.ADD_TODO;
  payload: TodoType | string;
}
export interface DELETE_TODO {
  type: ActionType.DELETE_TODO;
}
export interface UPDATE_TODO {
  type: ActionType.UPDATE_TODO;
  payload: { id: string; status: TodoStatus };
}

export type TodoActions = ADD_TODO | DELETE_TODO | UPDATE_TODO;
