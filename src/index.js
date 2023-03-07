import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
