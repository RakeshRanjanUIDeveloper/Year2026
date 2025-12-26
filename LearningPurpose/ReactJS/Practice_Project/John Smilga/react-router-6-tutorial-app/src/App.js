import React, { Fragment, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProctedRoute'
import Products from './pages/Products'
import SharedLayout from './pages/SharedLayout'
import SharedProductLayout from './pages/SharedProductLayout'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='products' element={<SharedProductLayout />}>
                  <Route index element={<Products />} />
                  <Route path=':productId' element={<SingleProduct />} />
              </Route>
              <Route path='login' element={<Login setUser={setUser}></Login>} />
              <Route path='dashboard' element={
                <ProtectedRoute user={user}>
                    <Dashboard user={user}></Dashboard>
                </ProtectedRoute>
              } />
              <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App