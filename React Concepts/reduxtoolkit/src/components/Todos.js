import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo, editTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => {
        return (
          <>
            <div key={todo.id}>
              <input
                type="checkbox"
                value={todo.completed}
                onClick={() => {
                  dispatch(updateTodo(todo.id));
                }}
              />
              {todo.edit ? (
                <>
                  <input type="text" value={todo.text} />
                </>
              ) : (
                <>
                  <span
                    style={
                      todo.completed ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {todo.text}
                  </span>
                </>
              )}
              <button
                style={{ border: "1px solid black", marginLeft: "20px" }}
                onClick={() => {
                  dispatch(editTodo(todo.id));
                }}
              >
                {todo.edit ? "Save" : "Edit"}
              </button>
              <button
                style={{ border: "1px solid black", marginLeft: "20px" }}
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                Delete
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}
