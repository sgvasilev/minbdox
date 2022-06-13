import { InitialStateType, TodoStatus } from "../../constants";
import { ActionType } from "../../actions/todoActions";
import { todoReducer } from "../../reducers/index";
jest.mock("uuid", () => ({ v4: () => "00000000-0000-0000-0000-000000000000" }));

test("Reducer should properly add todo", () => {
  const initialState: InitialStateType = {
    todo: [],
  };
  const updatedState = {
    todo: [
      {
        id: "00000000-0000-0000-0000-000000000000",
        text: "testText",
        status: TodoStatus.ACTIVE,
      },
    ],
  };
  const returnValue = todoReducer(initialState, {
    payload: "testText",
    type: ActionType.ADD_TODO,
  });
  expect(updatedState).toEqual(returnValue);
});
test("Reducer should properly update todo", () => {
  const initialState: InitialStateType = {
    todo: [
      {
        id: "00000000-0000-0000-0000-000000000000",
        text: "testText",
        status: TodoStatus.ACTIVE,
      },
    ],
  };
  const updatedState = {
    todo: [
      {
        id: "00000000-0000-0000-0000-000000000000",
        text: "testText",
        status: TodoStatus.DONE,
      },
    ],
  };
  const returnValue = todoReducer(initialState, {
    payload: {
      id: "00000000-0000-0000-0000-000000000000",
      status: TodoStatus.DONE,
    },
    type: ActionType.UPDATE_TODO,
  });
  expect(updatedState).toEqual(returnValue);
});

test("Reducer should properly delete todo", () => {
  const initialState: InitialStateType = {
    todo: [
      {
        id: "00000000-0000-0000-0000-000000000000",
        text: "testText",
        status: TodoStatus.ACTIVE,
      },
      {
        id: "00000000-0000-0000-0000-000000000001",
        text: "testText",
        status: TodoStatus.DONE,
      },
    ],
  };
  const updatedState = {
    todo: [
      {
        id: "00000000-0000-0000-0000-000000000000",
        text: "testText",
        status: TodoStatus.ACTIVE,
      },
    ],
  };
  const returnValue = todoReducer(initialState, {
    type: ActionType.DELETE_TODO,
  });
  expect(updatedState).toEqual(returnValue);
});
