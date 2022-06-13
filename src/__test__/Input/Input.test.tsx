import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import Input from "../../components/Input/Input";

test("Loads input properly", () => {
  const addTodoHandler = jest.fn();
  addTodoHandler.mockResolvedValueOnce("test");
  render(<Input addTodoHandler={addTodoHandler} />);
  const placeholder = screen.getByPlaceholderText("What needs to be done?");
  expect(placeholder).toBeInTheDocument();
});

test("Proper input validation", () => {
  const addTodoHandler = jest.fn();
  render(<Input addTodoHandler={addTodoHandler} />);
  const input = screen.getByTestId("input") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "test" } });
  fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });
  expect(addTodoHandler).toBeCalledTimes(1);
  expect(input.value).toBe("");
});
