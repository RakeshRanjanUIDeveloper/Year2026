import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductListing from './practiceset8/ProductListing';
import Cart from './practiceset8/Cart';
import WishList from './practiceset8/WishList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './practiceset8/Error';
import SummaryTodos from './practiceset8/SummaryTodos';
import DoneTodos from './practiceset8/DoneTodos';
import OpenTodos from './practiceset8/OpenTodos';
import IndividualTodos from './practiceset8/IndividualTodos';
import { TodoProvider } from './practiceset8/TodoContext';
// import Home from './practiceset8/Home';
import Questions from './practiceset8/Questions';
import Answer from './practiceset8/Answer';
import { ExamProvider } from './practiceset8/ExamContext';
import Home from './practiceset9/Home';
import Inbox from './practiceset9/Inbox';
import Sent from './practiceset9/Sent';
import { MailProvider } from './practiceset9/MailContext';

// const appRouter = createBrowserRouter([
//   {
//       path: '/',
//       element: <App />, 
//       children :[
//           {
//               path: '',
//               element: <ProductListing />
//           },
//           {
//               path: "cart",
//               element: <Cart />
//           },
//           {
//               path: "WishList",
//               element: <WishList />
//           }
//       ],
//     errorElement :<Error />

//   }
// ])
// const appRouter = createBrowserRouter([
//   {
//       path: '/',
//       element: (
//         <TodoProvider>
//           <App />
//         </TodoProvider>
//       ), 
//       children :[
//           {
//               path: '',
//               element: <SummaryTodos />
//           },
//           {
//               path: "doneTodos",
//               element: <DoneTodos />
//           },
//           {
//               path: "openTodos",
//               element: <OpenTodos />
//           },
//           {
//             path: "individualTodos",
//             element: <IndividualTodos />
//         }
//       ],
//     errorElement :<Error />

//   }
// ])

// const appRouter = createBrowserRouter([
//   {
//       path: '/',
//       element: (
//         <ExamProvider>
//           <App />
//         </ExamProvider>
//       ), 
//       children :[
//           {
//               path: '',
//               element: <Home />
//           },
//           {
//               path: "questions",
//               element: <Questions />
//           },
//           {
//               path: "answer/:id",
//               element: <Answer />
//           }
//       ],
//     errorElement :<Error />

//   }
// ])

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: 
      <MailProvider>
       <App />
      </MailProvider>
      ,
    children:[
      {
        path:'',
        element: <Home />
      },
      {
        path:'inbox',
        element: <Inbox />
      },
      {
        path:'sent/:id',
        element: <Sent />
      }
    ],
    errorElement :<Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
// root.render(
//   <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
