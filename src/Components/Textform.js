import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    newText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(newText.value);
  };
  const handleExtraSpace = () => {
    // Using Regex below, the text is being split based on spaces
    let newText = text.split(/[ ]+/);
    // Using join function to join the text again with space
    setText(newText.join(" "));
  };

  const handleOnChange = (e) => {
    // event- is now depriciated
    // setText(event.target.value) is replaced with setText(window.Event.value)
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success m-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger m-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-danger m-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpace}>
          Remove extra space
        </button>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
        }}
      >
        <h1>Your text summary has:</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>It takes {0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview:</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
