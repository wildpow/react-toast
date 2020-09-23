import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useToast}  from './toast/context';

function App() {
  const toast = useToast();
  const showToast = () => toast.add('Toast created from child component!');
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
        <button onClick={showToast}>
          toast
        </button>
      </header>
    </div>
  );
}

export default App;
