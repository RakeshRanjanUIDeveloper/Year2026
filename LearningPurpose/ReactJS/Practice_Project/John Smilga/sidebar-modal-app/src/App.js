import React, { Fragment } from 'react'
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Fragment>
      <Home />
      <Modal />
      <Sidebar /> 
    </Fragment>
  )
}

export default App