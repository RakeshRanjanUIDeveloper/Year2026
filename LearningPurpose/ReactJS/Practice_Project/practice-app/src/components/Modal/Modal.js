import React from "react";

const Modal = ({ onClose }) => {
  return (
    <React.Fragment>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">Title</div>
            <div className="modal-close" onClick={onClose}>X</div>
          </div>
          <div className="modal-body">
            <h2>Modal Body</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
