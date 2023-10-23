import React from "react";

export default function AddTask() {
  return (
    <>
      <section className="addTask">
        <form>
          <input
            type="text"
            autoComplete="off"
            placeholder="Add Task"
            maxLength="25"
          />
          <button type="submit">Add</button>
        </form>
      </section>
    </>
  );
}
