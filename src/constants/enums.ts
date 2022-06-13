export type InitialStateType = {
  todo: TodoType[];
};
export type TodoContextProviderProps = {
  children: React.ReactNode;
};

// export enum TodoReducerActions {
//   GET_TODO = "GET_TODO",
//   ADD_TODO = "ADD_TODO",
//   UPDATE_TODO = "UPDATE_TODO",
//   DELETE_TODOS = "DELETE_TODOS",
// }
export enum TodoStatus {
  ACTIVE = "ACTIVE",
  DONE = "DONE",
}
export interface TodoType {
  id: string;
  text: string;
  status: TodoStatus;
}

export enum TodoDashboardStatus {
  ALL_TODO,
  ACTIVE_TODO,
  COMPLETED_TODO,
}
