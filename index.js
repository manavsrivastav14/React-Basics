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
// const JSXHeading = (
//   <React.Fragment>
//     <h1>Hello React with JSX!</h1>
//     <p>This is a paragraph in JSX</p>
//   </React.Fragment>

//   <>
//     <h1>About React</h1>
//     <p>React is a javascript library used to build user interfaces.</p>
//     <ul>
//       <li>React is declarative</li>
//       <li>Used to build SPA</li>
//       <li>React is composable</li>
//     </ul>
//   </>
// );
function App() {
  return (
    <>
      <h1>React Project </h1>
      <p>Skills used to make this project</p>
      <ol>
        <li>HTML</li>
        <li>javaScript</li>
        <li>CSS</li>
      </ol>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
