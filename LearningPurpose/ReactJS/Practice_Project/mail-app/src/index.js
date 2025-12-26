import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Inbox from './components/Inbox';
import Spam from './components/Spam';
import Trash from './components/Trash';
import Error from './components/Error';
import { MailProvider } from './components/MailProvider';
import MailDetails from './components/MailDetails';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <MailProvider><App /></MailProvider>,
    children:[
      {
        path:'',
        element:<Inbox />
      },
      {
        path:'mail/:id',
        element: <MailDetails />
      },
      {
        path:'spam',
        element:<Spam />
      },
      {
        path:'trash',
        element:<Trash />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
