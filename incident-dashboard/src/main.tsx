import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'

import IncidentsPage from './pages/IncidentsPage.tsx'
import { Provider } from 'react-redux'
import {ErrorBoundary} from './components/ErrorBoundary.tsx'
import { store } from './app/store.ts'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'


const router = createBrowserRouter([
  {
    path:'/login',
    element:<LoginPage />
  },
  {
    element:<ProtectedRoute />,
    children:[
      {path:'/', element: <IncidentsPage />},
      {path:'/incidents', element:<IncidentsPage />}
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
          <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
)
