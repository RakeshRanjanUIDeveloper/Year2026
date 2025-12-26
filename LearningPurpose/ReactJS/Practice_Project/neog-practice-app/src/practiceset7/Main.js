import React from 'react'
import Weather from './Weather'
import UserDetails from './UserDetails'
import Movies from './Movies'
import CompanyResources from './CompanyResources'
import Quotes from './Quotes'
import MoviesList from './MoviesList'
import ProductList from './ProductList'
import Stationary from './Stationary'

const Main = () => {
  return (
    <React.Fragment>
        <Weather />
        <UserDetails />
        <Movies />
        <CompanyResources />
        <Quotes />
        <MoviesList />
        <ProductList />
        <Stationary />
    </React.Fragment>
  )
}

export default Main