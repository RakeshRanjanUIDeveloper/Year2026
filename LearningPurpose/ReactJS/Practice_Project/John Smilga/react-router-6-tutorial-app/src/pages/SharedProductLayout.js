import React, { Fragment } from 'react'
import {Outlet } from 'react-router-dom'
const SharedProductLayout = () => {
  return (
    <Fragment>
        <h2>Products</h2>
        <Outlet />
    </Fragment>
  )
}

export default SharedProductLayout