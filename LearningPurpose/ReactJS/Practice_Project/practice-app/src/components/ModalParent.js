import React, { useState } from 'react'
import ModalChild from './ModalChild';

const ModalParent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleOpenModal = () =>{
        setIsModalVisible(true)
    }
    const handleCloseModal = () => {
        setIsModalVisible(false)
    }
  return (
    <React.Fragment>
        <button onClick={handleOpenModal}>Modal Open</button>
        {
            isModalVisible &&  <ModalChild onClose={handleCloseModal} />
        }
       
    </React.Fragment>
  )
}

export default ModalParent