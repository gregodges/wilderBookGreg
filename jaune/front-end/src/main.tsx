import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import UserProfile from './pages/UserProfile/UserProfile'


const router  = createBrowserRouter([
  {
  path : "/",
  element: <Home/>
  },
   {
    path: "/friends",
    element : <Profile/>
  },
  {
    path: "/profile/:id",
    element: <UserProfile/>
  }

])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
