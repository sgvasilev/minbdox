import React, { KeyboardEvent, useState } from "react";

const Input = ({
  addTodoHandler,
}: {
  addTodoHandler: (todo: string) => void;
}) => {
  const [todo, setTodo] = useState("");
  const _handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (todo.trim().length === 0) return;
      addTodoHandler(todo);
      setTodo("");
    }
  };

  return (
    <>
      <input
        data-testid="input"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => _handleKeyDown(e)}
        placeholder="What needs to be done?"
        className="input"
      />
    </>
  );
};

export default Input;
