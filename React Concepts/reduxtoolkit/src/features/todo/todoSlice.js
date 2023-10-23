import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello", completed: false, edit: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    editTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        if (todo.id === action.payload) {
          todo.edit = !todo.edit;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
