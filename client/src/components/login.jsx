import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
      if (response.ok) {
        navigate('/dashboard');
      } else {
        alert('Wrong password, try again!');
      }
    } catch (err) {
      alert('bad fetch response');
    }
  }

  return (
    <div className='login-container'>
      <div className='login-div'>
        <h1 className='header'>JobHub</h1>
        <form id='loginform'>
          <p className='signs'>Username: </p>
          <input
            className='text-box'
            type='text'
            id='usernameInput'
            onChange={handleUser}
          ></input>
          <br></br>
          <p className='signs'>Password: </p>
          <input
            className='text-box'
            type='password'
            id='passwordInput'
            onChange={handlePassword}
          ></input>
        </form>
        <button
          className='btn'
          type='submit'
          id='loginButton'
          onClick={loginAccount}
        >
          Login
          {/* <Link to='/dashboard'> login</Link> */}
        </button>
      </div>
      <div className='signupdiv'>
        <p>Not already a member?</p>
        <button onClick={handleClick} id='signup'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
