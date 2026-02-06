import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axios';
import './formStyle.css';;


const Login = () => {
  const [form ,setForm]= useState({
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res = await api.post('/login',form);

    localStorage.setItem('accessToken', res.data.accessToken)
    localStorage.setItem('refreshToken',res.data.refreshToken)

    alert('successfully logged In')
  }

  return (
    <>
    <div className='outer'>
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className='hero'>Welcome Back</h1>
      <input type="text" placeholder='Email' className="input-field" name='email' onChange={handleChange}/>
      <input type="password" placeholder='Password' className="input-field" name='password' onChange={handleChange}/>
      <button className='submit-btn'>Login</button>
      <div className='forgot-pass'>
        <h6>Don't have an account? <span><Link to="/register">Register</Link></span></h6>
        <h5>Forgot password?</h5>
      </div>
    </form>
    </div>
    </>
  )
}

export default Login;