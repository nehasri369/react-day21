import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <NavLink to="/"><button>Login</button></NavLink>
      <NavLink to="/home"> <button>Home</button></NavLink>
      <NavLink to="/products"><button>Products</button></NavLink>
    </div>
  )
}

export default Navbar