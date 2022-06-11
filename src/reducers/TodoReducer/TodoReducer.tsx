import {
  ACTIVE,
  ADD_TODO,
  DELETE_TODOS,
  DONE,
  GET_TODOS,
  UPDATE_TODOS,
} from "../../constants";
import { v4 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS: {
      const tempArr = [...state.todo];
      return [...tempArr];
    }
    case ADD_TODO: {
      return {
        todo: [
          { id: uuid(), text: action.payload, status: ACTIVE },
          ...state.todo,
        ],
      };
    }
    case UPDATE_TODOS: {
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
    case DELETE_TODOS: {
      const temp = [...state.todo];
      const updatedState = temp.filter((todo) => todo.status !== DONE);
      return {
        todo: [...updatedState],
      };
    }
    default:
      return state;
  }
};
