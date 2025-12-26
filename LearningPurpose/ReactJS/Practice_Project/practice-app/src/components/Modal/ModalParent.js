import React, { useState } from 'react'
import Modal from './Modal'

const ModalParent = () => {
    const [open, setOpen] = useState(false);
    const handleOpenModal = () =>{
        setOpen(true)
    }
    const handleCloseModal = () =>{
        setOpen(false)
    }

  return (
   <React.Fragment>
        <button className='button' onClick={handleOpenModal}>Open Modal</button>
        {
            open && <Modal onClose={handleCloseModal} />
        }
        
   </React.Fragment>
  )
}

export default ModalParent