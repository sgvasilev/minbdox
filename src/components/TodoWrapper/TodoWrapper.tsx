import React, { useContext, useState } from "react";
import {
  ACTIVE,
  ACTIVE_TODO,
  ALL_TODO,
  COMPLETED_TODO,
  DONE,
  oneTodo,
} from "../../constants";
import { TodoContext } from "../../context";
import Input from "../Input/Input";
import TodoCard from "../TodoCard/TodoCard";
import TodoHeader from "../TodoHeader/TodoHeader";

const TodoWrapper = () => {
  const [todoTypes, setTodoTypes] = useState(ALL_TODO);
  const handleTodoTypes = (type: string) => {
    setTodoTypes(type);
  };
  const { todo, addTodo } = useContext(TodoContext);
  const addTodoHandler = (todo): void => {
    addTodo(todo);
  };

  const _handle = () => {
    if (todoTypes === ACTIVE_TODO) {
      const data = todo.filter((el: oneTodo) => el.status === ACTIVE);
      return {
        data: data,
        activeTodo: data.length,
      };
    } else if (todoTypes === ALL_TODO) {
      let activeTodo = 0;
      for (let t of todo.values()) {
        if (t.status === ACTIVE) activeTodo++;
      }
      return {
        data: todo,
        activeTodo: activeTodo,
      };
    } else if (todoTypes === COMPLETED_TODO) {
      const data = todo.filter((el: oneTodo) => el.status === DONE);
      const length = todo.filter((el: oneTodo) => el.status === ACTIVE);

      return {
        data: data,
        activeTodo: length.length,
      };
    }
  };
  const { data, activeTodo } = _handle();

  return (
    <div className="wrapper">
      <TodoHeader handleTodoTypes={handleTodoTypes} activeTodo={activeTodo} />
      <Input addTodoHandler={addTodoHandler} />
      {data?.map((todo_item: oneTodo) => (
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
