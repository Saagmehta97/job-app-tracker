import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  let navigate = useNavigate();

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const createAccount = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          firstName: firstname,
          lastName: lastname,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      console.log('Signup successful:', data);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to sign up');
    }
  };

  return (
    <div className='signup-container'>
      <h1 className='header'>JobHub</h1>
      <div className='signup-box'>
        <input
          className='text-box'
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          onChange={handleUser}
        />
        <input
          className='text-box'
          type='text'
          id='password'
          name='password'
          placeholder='Password'
          onChange={handlePassword}
        />
        <input
          className='text-box'
          type='text'
          id='firstname'
          name='firstname'
          placeholder='Firstname'
          onChange={handleFirstname}
        />
        <input
          className='text-box'
          type='text'
          id='lastname'
          name='lastname'
          placeholder='Lastname'
          onChange={handleLastname}
        />
        <button type='button' onClick={createAccount} className='btn'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
