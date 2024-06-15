import React from 'react';

export default function Signup() {
  
  function createAccount() {
    const newUsername = document.getElementById('username');
    const newPassword = document.getElementById('password');

    console.log(newUsername.value);
    console.log(newPassword.value);

    fetch('/api/signup', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: newUsername.value,
        password: newPassword.value,
      }),
    })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (res) {
        alert('bad');
      });
  }

  return (
      <div className= "signup-box">
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
        />
        <input
          type='text'
          id='password'
          name='password'
          placeholder='Password'
        />
        <button type='button' onClick={createAccount}>
          Sign Up
        </button>
      </div>

  );
}
