import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Outlet />
    </React.Fragment>
  );
}

export default App;
