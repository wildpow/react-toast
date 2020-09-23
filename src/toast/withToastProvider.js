import React, { useState } from "react";
import { createPortal } from "react-dom";
import successIcon from "../assets/check.svg";
import errorIcon from "../assets/error.svg";
import infoIcon from "../assets/info.svg";
import warningIcon from "../assets/warning.svg";

import ToastContext from "./context";
import Toast from "./Toast";

// Create a random ID
function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
}

function withToastProvider(Component) {
  function WithToastProvider(props) {
    const [toasts, setToasts] = useState([]);
    const typeOfToast = (type) => {
      switch (type) {
        case "success":
          return {
            backgroundColor: "#5cb85c",
            icon: successIcon,
          };
        case "danger":
          return {
            backgroundColor: "#d9534f",
            icon: errorIcon,
          };
        case "info":
          return {
            backgroundColor: "#5bc0de",
            icon: infoIcon,
          };
        case "warning":
          return {
            backgroundColor: "#f0ad4e",
            icon: warningIcon,
          };

        default:
          return {
            backgroundColor: "purple",
            icon: successIcon,
          };
      }
    };
    const add = (type = "success", objParams) => {
      const defPrams = {
        title: "test toast",
        description: "default values for toast",
      };
      const finalParams = { ...defPrams, ...objParams };
      console.log("objParams", objParams);
      console.log("finalParams", finalParams);
      const id = generateUEID();
      const toastType = typeOfToast(type);
      setToasts([...toasts, { id, ...finalParams, ...toastType }]);
    };
    const remove = (id) => setToasts(toasts.filter((t) => t.id !== id));
    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />

        {createPortal(
          <div className="toasts-wrapper">
            {toasts.map((t) => (
              <Toast
                key={t.id}
                remove={() => remove(t.id)}
                bgColor={t.backgroundColor}
                icon={t.icon}
                description={t.description}
                title={t.title}
              />
            ))}
          </div>,
          document.body
        )}
      </ToastContext.Provider>
    );
  }

  return WithToastProvider;
}

export default withToastProvider;
