import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <AddTodo input={input} setInput={setInput} />
      <Todos input={input} setInput={setInput} />
    </div>
  );
}

export default App;
