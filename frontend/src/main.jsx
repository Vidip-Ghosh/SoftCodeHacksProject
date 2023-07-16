import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:'/',
    element: <HomePage/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/contact-form',
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
