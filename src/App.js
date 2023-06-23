import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  // This is to check if dark mode  enabled or not, by default we are using light
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Navbar
        title="Text Utility"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="This is about texts"
      />
      <Textform />
      <div className="container my-3">
        {/* <Textform heading="Enter text below to analyze" /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
