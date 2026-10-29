import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({children,loggedin}) => {

  let navigate = useNavigate();

  if(!loggedin){
    return <Navigate to="/" />

  }
  else{
    navigate("/products")
  }

  


  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes