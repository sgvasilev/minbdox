import React, { useContext } from "react";
import { ACTIVE_TODO, ALL_TODO, COMPLETED_TODO } from "../../constants";
import { TodoContext } from "../../context";

const TodoFooter = ({ handleTodoTypes, activeTodo }) => {
  const { deleteTodos } = useContext(TodoContext);
  return (
    <div className="footer__wrapper">
      <div>{+activeTodo} items left</div>
      <div className="footer__section">
        <button
          className="btn"
          onClick={() => {
            handleTodoTypes(ALL_TODO);
          }}
        >
          All
        </button>
        <button
          className="btn"
          onClick={() => {
            handleTodoTypes(ACTIVE_TODO);
          }}
        >
          Active
        </button>
        <button
          className="btn"
          onClick={() => {
            handleTodoTypes(COMPLETED_TODO);
          }}
        >
          Completed
        </button>
      </div>
      <button className="btn" onClick={deleteTodos}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoFooter;
