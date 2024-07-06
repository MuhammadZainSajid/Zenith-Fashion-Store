import React, { createContext, useState } from "react";
import Products from "./components/products";
import Header from "./components/header";
import Banner from "./components/banner";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Banner />
        <Products />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
