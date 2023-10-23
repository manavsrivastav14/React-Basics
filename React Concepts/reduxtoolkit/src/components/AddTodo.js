import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo(props) {
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(props.input));
    props.setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}
