import React from "react";
import TodoList from "./TodoList";
import "./App.css"; // Tell webpack that Button.js uses these styles

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
