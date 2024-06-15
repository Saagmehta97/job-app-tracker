import React from "react"
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import "./login.css";



 const Login = () => {
    let navigate = useNavigate();
    const handleClick = () =>{
        navigate('/users/signup')
        console.log('hello')
    }
    return (
      <div>
      <div>login</div>
      <button onClick={handleClick} id="signup">sign up</button>
      </div>
    )
    
  }

  export default Login