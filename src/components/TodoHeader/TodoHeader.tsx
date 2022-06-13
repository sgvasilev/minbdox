import React, { useContext } from "react";
import { ActionType } from "../../actions/todoActions";
import { TodoDashboardStatus } from "../../constants";
import { TodoContext } from "../../context";

const TodoHeader = ({
  activeTab,
  handleTodoTypes,
  activeTodo,
}: {
  activeTab: TodoDashboardStatus;
  handleTodoTypes: (TodoDashboardStatus: TodoDashboardStatus) => void;
  activeTodo: TodoDashboardStatus;
}) => {
  const { dispatch } = useContext(TodoContext);
  const _deleteTodos = () => {
    dispatch({
      type: ActionType.DELETE_TODO,
    });
  };
  return (
    <div className="footer__wrapper">
      <div>{+activeTodo} items left</div>
      <div className="footer__section">
        <button
          className={`btn ${activeTab == 0 ? "btn_active" : "btn_default"}`}
          onClick={() => {
            handleTodoTypes(TodoDashboardStatus.ALL_TODO);
          }}
        >
          All
        </button>
        <button
          className={`btn ${activeTab == 1 ? "btn_active" : "btn_default"}`}
          onClick={() => {
            handleTodoTypes(TodoDashboardStatus.ACTIVE_TODO);
          }}
        >
          Active
        </button>
        <button
          className={`btn ${activeTab == 2 ? "btn_active" : "btn_default"}`}
          onClick={() => {
            handleTodoTypes(TodoDashboardStatus.COMPLETED_TODO);
          }}
        >
          Completed
        </button>
      </div>
      <button className="btn" onClick={_deleteTodos}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoHeader;
