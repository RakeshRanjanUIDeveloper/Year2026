import React, { useState } from 'react'
import ModalContent from './ModalContent';

const Modal = () => {
const [show,setShow] = useState(false);

const handleOpen = () => {
    setShow(true)
}
const handleClose = () =>{
    setShow(false)
}
  return (
    <React.Fragment>
        <div onClick={handleOpen}>Open Modal</div>
        {
            show &&  <ModalContent show={show} onClose={handleClose} />
        }
       
    </React.Fragment>
  )
}

export default Modal