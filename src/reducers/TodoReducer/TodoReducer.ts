import { InitialStateType, TodoStatus } from "../../constants";
import { v4 as uuid } from "uuid";
import { ActionType, TodoActions } from "../../actions/todoActions";

export const todoReducer = (
  state: InitialStateType,
  action: TodoActions
): InitialStateType => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      return {
        todo: [
          {
            id: uuid(),
            text: action.payload.toString(),
            status: TodoStatus.ACTIVE,
          },
          ...state.todo,
        ],
      };
    }
    case ActionType.UPDATE_TODO: {
      const tempArr = [...state.todo];
      const todoToUpdate = tempArr.find(
        (todo) => todo.id === action.payload.id
      );
      if (!todoToUpdate)
        return {
          todo: [...state.todo],
        };
      todoToUpdate.status = action.payload.status;
      const updatedState = tempArr.map((todo) => {
        return todo.id === action.payload.id ? todoToUpdate : todo;
      });
      return {
        todo: [...updatedState],
      };
    }
    case ActionType.DELETE_TODO: {
      const temp = [...state.todo];
      const updatedState = temp.filter(
        (todo) => todo.status !== TodoStatus.DONE
      );
      return {
        todo: [...updatedState],
      };
    }
    default:
      return state;
  }
};
