import React, { useEffect, useRef } from "react";

function Toast({ remove, bgColor, icon, description, title }) {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 5000;
    const id = setTimeout(() => removeRef.current(), duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className="toast" style={{ backgroundColor: bgColor }}>
      <div className="notification-image">
        <img src={icon} alt="" />
      </div>

      <div>
        <p className="notification-title">{title}</p>
        <p className="notification-message">{description}</p>
      </div>

      <button onClick={remove} className="toast__close-btn">
        x
      </button>
    </div>
  );
}

export default Toast;
