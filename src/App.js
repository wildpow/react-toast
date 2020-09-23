import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useToast } from "./toast/context";

function App() {
  const successToast = {
    title: "Added item to cart",

    description: "You are winning at this game!",
  };
  const infoToast = {
    title: "Added item to cart",
    description: "Info about winning life",
  };
  const dangerToast = {
    title: "Removed item to cart",
    description: "Are you sure your not going to buy this?",
  };
  const warningToast = {
    title: "misspelling",
    description: "maybe you should learn how to spell you name?",
  };
  const toast = useToast();
  const showToast = () => toast.add("warning", warningToast);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={showToast}>toast</button>
      </header>
    </div>
  );
}

export default App;
