import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LikedVideo from './pages/LikedVideo';
import Videos from './pages/Videos';
import WatchLater from './pages/WatchLater';
import Error from './pages/Error';
import Home from './pages/Home';
import { VideoProvider } from './components/VideoContext';
import VideoDetails from './pages/VideoDetails';


const approuter = createBrowserRouter([
  {
    path:'/',
    element: <VideoProvider><App /></VideoProvider>,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/videos',
        element: <Videos />
      },
      {
        path: '/likedVideos',
        element: <LikedVideo />
      },
      {
        path:'/watchLater',
        element: <WatchLater />
      },
      {
        path:'individualVideo/:id',
        element: <VideoDetails />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
