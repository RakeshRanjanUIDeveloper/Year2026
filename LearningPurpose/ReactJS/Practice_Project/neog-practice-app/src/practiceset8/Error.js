import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div><b>{err.status} Page</b></div>
  )
}

export default Error