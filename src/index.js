import React from "react";
import ReactDOM from "react-dom";
import ClickOutsideDiv from "./ClickOutsideDiv";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ClickOutsideDiv />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
