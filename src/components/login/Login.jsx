// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logos/badge-abcd-logo.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <div className='logo badge-abcd-logo'>
        <img src={logo} alt='ABCD Logo' />
      </div>
      <h1>Welcome Back!</h1>
      <p>For secure access to your account, please enter your credentials.</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email Address'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
        </div>
        <button type='submit' className='btn'>
          Login
        </button>
      </form>
      <div className='formlink-below'>
        <ul className='formlinks'>
          <li>
            <a href='/' className='orange-link'>
              Create Account
            </a>
          </li>
          <li>
            <a href='/' className='orange-link'>
              Forget Password?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
