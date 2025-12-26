import React, { useState } from "react";
import './Modal.css';
const ModalContent = ({show, onClose}) => {
  return (
    show && (
        <React.Fragment>
        <div className="modal-backdrop" />
        <div className="modal-wrapper">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Modal Title</div>
              <div className="modal-close" onClick={onClose}> X</div>
            </div>
            <div className="modal-body">Modal Body</div>
          </div>
        </div>
      </React.Fragment>
    )
  );
};

export default ModalContent;
