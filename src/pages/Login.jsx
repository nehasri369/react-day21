import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ loggedin, setLoggedin }) => {

  const navigate = useNavigate()

  const handleLogin = () => {
    setLoggedin(true)
    navigate('/products')
  }

  const handleLogout = () => {
    setLoggedin(false)
    navigate('/')
  }

  return (
    <div>
      <h1>Login Page</h1>

      {loggedin ? (
        <button onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  )
}

export default Login