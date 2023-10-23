import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
// import
export default function Header() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="taskmate-logo"></img>
          <span>Taskmate</span>
        </div>
        <div className="themeSelector">
          <span
            className={theme === "light" ? "light activeTheme" : "light"}
            onClick={() => {
              setTheme("light");
            }}
          ></span>
          <span
            className={theme === "medium" ? "medium activeTheme" : "medium"}
            onClick={() => {
              setTheme("medium");
            }}
          ></span>
          <span
            className={theme === "dark" ? "dark activeTheme" : "dark"}
            onClick={() => {
              setTheme("dark");
            }}
          ></span>
          <span
            className={
              theme === "gradientOne"
                ? "gradientOne activeTheme"
                : "gradientOne"
            }
            onClick={() => {
              setTheme("gradientOne");
            }}
          ></span>
          <span
            className={
              theme === "gradientTwo"
                ? "gradientTwo activeTheme"
                : "gradientTwo"
            }
            onClick={() => {
              setTheme("gradientTwo");
            }}
          ></span>
          <span
            className={
              theme === "gradientThree"
                ? "gradientThree activeTheme"
                : "gradientThree"
            }
            onClick={() => {
              setTheme("gradientThree");
            }}
          ></span>
        </div>
      </header>
    </>
  );
}
