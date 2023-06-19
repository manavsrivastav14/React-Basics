// const heading = document.createElement("h2");
// heading.textContent = "Hello World Javascript";
// heading.className = "header";
// document.getElementById("root").append(heading);

// console.log("Javascript element:", heading);

// Creating React element with JS

// const reactHeading = React.createElement("h1", {
//   className: "head",
//   id: "reactHead",
//   children: "Hello React!!",
// });
// console.log("React element:", reactHeading);

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// Creating React element with JSX
const JSXHeading = (
  <div>
    <h1>Hello React with JSX!</h1>
    <p>This is a paragraph in JSX</p>
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(JSXHeading);
