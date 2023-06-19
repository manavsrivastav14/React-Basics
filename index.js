const heading = document.createElement("h2");
heading.textContent = "Hello World Javascript";
heading.className = "header";
document.getElementById("root").append(heading);

console.log("Javascript element:", heading);

// Creating React element
// const React = require("react");

const reactHeading = React.createElement("h1", {
  className: "head",
  id: "reactHead",
  children: "Hello React!!",
});
console.log("React element:", reactHeading);

ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
