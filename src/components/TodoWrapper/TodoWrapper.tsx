import React, { useContext, useState } from "react";
import { ActionType } from "../../actions/todoActions";
import { TodoDashboardStatus, TodoStatus, TodoType } from "../../constants";
import { TodoContext } from "../../context";
import Input from "../Input/Input";
import TodoCard from "../TodoCard/TodoCard";
import TodoHeader from "../TodoHeader/TodoHeader";

const TodoWrapper = () => {
  const [todoTypes, setTodoTypes] = useState(TodoDashboardStatus.ALL_TODO);
  const { dispatch, state } = useContext(TodoContext);
  const dataContext = state.todo;
  const handleTodo = () => {
    if (todoTypes === TodoDashboardStatus.ACTIVE_TODO) {
      const data = dataContext.filter(
        (el: TodoType) => el.status === TodoStatus.ACTIVE
      );
      return {
        data: data,
        activeTodo: data.length,
        activeTab: TodoDashboardStatus.ACTIVE_TODO,
      };
    } else if (todoTypes === TodoDashboardStatus.ALL_TODO) {
      let activeTodo = 0;
      for (let i = 0; i < dataContext.length; i++) {
        if (dataContext[i].status === TodoStatus.ACTIVE) activeTodo++;
      }
      return {
        data: dataContext,
        activeTodo: activeTodo,
        activeTab: TodoDashboardStatus.ALL_TODO,
      };
    } else if (todoTypes === TodoDashboardStatus.COMPLETED_TODO) {
      const data = dataContext.filter(
        (el: TodoType) => el.status === TodoStatus.DONE
      );
      const length = dataContext.filter(
        (el: TodoType) => el.status === TodoStatus.ACTIVE
      );

      return {
        data: data,
        activeTodo: length.length,
        activeTab: TodoDashboardStatus.COMPLETED_TODO,
      };
    }
  };
  const { data, activeTodo, activeTab } = handleTodo();
  const handleTodoTypes = (type: TodoDashboardStatus) => {
    setTodoTypes(type);
  };
  const addTodoHandler = (todo: string): void => {
    dispatch({ type: ActionType.ADD_TODO, payload: todo });
  };

  return (
    <div className="wrapper">
      <TodoHeader
        handleTodoTypes={handleTodoTypes}
        activeTodo={activeTodo}
        activeTab={activeTab}
      />
      <Input addTodoHandler={addTodoHandler} />
      {data?.map((todo_item: TodoType) => (
        <TodoCard
          key={todo_item.id}
          text={todo_item.text}
          id={todo_item.id}
          status={todo_item.status}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
