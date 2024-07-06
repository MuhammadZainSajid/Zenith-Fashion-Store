import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import NavBar from "./navBar";
import "../App.css";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <header className="App-header">
      <NavBar isOpen={isOpen} onClose={closeNav} />
      <i>
        <button className="material-symbols-outlined" onClick={toggleNav}>
          <span>menu</span>
        </button>
      </i>
      <h1 className="App-logo">Zenith</h1>
      <div>
        <button className="material-symbols-outlined" onClick={toggleTheme}>
          <span>{theme === "light" ? "dark_mode" : "light_mode"}</span>
        </button>
        <button className="material-symbols-outlined">
          <span>shopping_cart</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
