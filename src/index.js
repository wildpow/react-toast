import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import withToastProvider from './toast/withToastProvider'
function indexFunc() {
  return (
  <React.StrictMode>
      <App />
  </React.StrictMode>

  )
}
const AppWithToastProvider = withToastProvider(indexFunc)
ReactDOM.render(<AppWithToastProvider/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
