import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Error from './pages/Error';
import { FoodProvider } from './components/FoodContext';



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <FoodProvider><App /></FoodProvider>,
    children: [
      {
        path:'',
        element: <Home />
      },
      {
        path:'menu',
        element: <Menu />
      },
      {
        path:'cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  } 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
