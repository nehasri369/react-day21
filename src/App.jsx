
import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Navbar from './Navbar'
import ProtectedRoutes from './ProtectedRoutes'
import "./App.css"

const App = () => {

  const [loggedin,setLoggedin] = useState(false);

  let Router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Login loggedin={loggedin} setLoggedin={setLoggedin} />
      </div>
    },
    {
      path: "/products",
      element: <div>
        <Navbar />
        <ProtectedRoutes loggedin={loggedin}>
          <Products />
        </ProtectedRoutes>
        
      </div>
    },
    {
      path: "/home",
      element: <div>
        <Navbar />
        <Home />
      </div>
    }
  ])

  return (
    <RouterProvider router={Router} />
  )
}

export default App
