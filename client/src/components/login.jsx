import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('users/signup');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  async function loginAccount(event) {
    event.preventDefault();

    try {
      console.log('before fetch');
      const response = await fetch('http://localhost:3000/users/login', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
      });
      console.log('response ', response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate('/users/dashboard');
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert('bad fetch response');
    }
  }

  return (
    <div className='login-container'>
      <div>
        Login
        <form id='loginform'>
          username:{' '}
          <input type='text' id='usernameInput' onChange={handleUser}></input>
          <br></br>
          password:{' '}
          <input
            type='text'
            id='passwordInput'
            onChange={handlePassword}
          ></input>
          <button type='submit' id='loginButton' onClick={loginAccount}>
            login!
          </button>
        </form>
      </div>
      <button onClick={handleClick} id='signup'>
        sign up
      </button>
    </div>
  );
};

export default Login;
