import React, { useEffect } from "react";

function Toast({ remove, bgColor, icon, description, title }) {
  // useEffect(() => {
  //   const duration = 3000;
  //   const id = setTimeout(() => remove(), duration);

  //   return () => clearTimeout(id);
  // }, [remove]);

  return (
    <div className="toast" style={{ backgroundColor: bgColor }}>
      <div className="notification-image">
        <img src={icon} alt="" />
      </div>

      <div>
        <h5 className="notification-title">{title}</h5>
        <p className="notification-message">{description}</p>
      </div>
      {/* <div className="toast__wrapper-btn"> */}
      <button
        onClick={remove}
        className="toast__close-btn"
        aria-expanded="false"
        type="button"
        aria-hidden="true"
        focusable="false"
      >
        x
      </button>
      {/* </div> */}
    </div>
  );
}

export default Toast;
