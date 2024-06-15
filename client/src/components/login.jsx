import React from "react"
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import "./login.css";



 const Login = () => {
    let navigate = useNavigate();
    const handleClick = () =>{
        navigate('/users/signup')
    }
    return (
      <div>
      <div>login
        <form /*onSubmit={handleSubmit}*/ id="loginform">
            username: <input type="text" id="usernameInput" /*onChange={storeUsername}*/></input><br></br>
            password: <input type="text" ide="passwordInput" /*onChange={storePassword}*/></input>
            <button type="submit" id="loginButton">login!</button>
        </form>
      </div>
      <button onClick={handleClick} id="signup">sign up</button>
      </div>
    )
    
  }

  export default Login