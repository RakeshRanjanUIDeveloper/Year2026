import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router';
import AllBooks from './pages/AllBooks';
import Favorites from './pages/Favorites';
import Read from './pages/Read';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import { BookProvider } from './components/BookContext';

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<BookProvider><App/></BookProvider>,
    children: [
      {
        path:'',
        element :   <AllBooks />
      },
      {
        path:'favorites',
        element:  <Favorites />
      },
      {
        path:'read',
        element:<Read />
      },
      {
        path:'profile',
        element: <Profile />
      }
    ],
    errorElement :<ErrorPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
