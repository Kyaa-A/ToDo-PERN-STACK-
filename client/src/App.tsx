import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
