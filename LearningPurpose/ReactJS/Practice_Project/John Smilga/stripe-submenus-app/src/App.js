import React, { Fragment } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </Fragment>
  )
}

export default App