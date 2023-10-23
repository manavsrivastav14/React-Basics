import React from "react";

export default function ShowTask() {
  const tasks = [
    {
      id: 1001,
      name: "Task A",
      time: "2:09:01 AM 9/14/2030",
    },
    {
      id: 1002,
      name: "Task B",
      time: "2:00:00 PM 12/14/2023",
    },
    {
      id: 1003,
      name: "Task C",
      time: "12:00:00 PM 5/14/2024",
    },
    {
      id: 1004,
      name: "Task D",
      time: "4:00:00 PM 10/14/2024",
    },
  ];
  return (
    <>
      <section className="showTask">
        <div className="head">
          <div>
            <span className="title">Todo</span>
            <span className="count">0</span>
          </div>
          <button className="clearAll">Clear All</button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i class="bi bi-pencil-square"></i>
              <i class="bi bi-trash"></i>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
