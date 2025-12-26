import React from 'react'
import './Modal.css'
const ModalChild = ({onClose}) => {
  return (
    <React.Fragment>
    <div className="modal-backdrop" onClick={onClose} />
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
}

export default ModalChild