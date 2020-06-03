import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className="Modal"
      style={{
        transform: props.show ? "translate Y(0)" : "translate Y(-100vh)",
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
