import React from "react";
import logo from "../assets/logo.svg";
// import
export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="taskmate-logo"></img>
          <span>Taskmate</span>
        </div>
        <div className="themeSelector">
          <span className="light"></span>
          <span className="medium"></span>
          <span className="dark activeTheme"></span>
          <span className="gradientOne"></span>
          <span className="gradientTwo"></span>
          <span className="gradientThree"></span>
        </div>
      </header>
    </>
  );
}
