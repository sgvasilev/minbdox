import "./index.css";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper";
import { TodoProvider } from "./context";
import React from "react";

function App(): JSX.Element {
  return (
    <TodoProvider>
      <div className="App">
        <h1>todos</h1>
        <TodoWrapper />
      </div>
    </TodoProvider>
  );
}

export default App;
