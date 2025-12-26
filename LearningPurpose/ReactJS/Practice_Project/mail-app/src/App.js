
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router';

function App() {
  return (
   <React.Fragment>
   <div className="App">
        <Header />
        <div className='content'>
          <Outlet />
        </div>
   </div>    
   </React.Fragment>
  );
}

export default App;
