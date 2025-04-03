import React from "react";
import "./modal.css";

const Modal = ({ active, onClickModal, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={onClickModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
