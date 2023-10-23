import { useState } from "react";

export default function Car() {
  const [color1, setProp1] = useState("red");
  // const [color2, setProp2] = useState("green");
  const changeColor = (event) => {
    setProp1(event.target.value);
  };
  return (
    <div>
      <h1>Car is of {color1} color.</h1>
      <div
        style={{
          backgroundColor: color1,
          height: "200px",
          width: "200px",
          border: "1px solid black",
          marginBottom: "15px",
        }}
      ></div>
      <select
        value={color1}
        onChange={(event) => {
          setProp1(event.target.value);
        }}
      >
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>
    </div>
  );
}
