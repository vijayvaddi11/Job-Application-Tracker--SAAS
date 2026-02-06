import { Link ,useNavigate} from "react-router-dom";
import {useState} from 'react';
import api from '../api/axios.js';
import './formStyle.css';

const Register = () => {
     const navigate = useNavigate()

     const [form,setForm] = useState({
          username:'',
          email:'',
          password:''
     })

     const handleChange = (e)=>{
          setForm({
          ...form ,
          [e.target.name]:e.target.value
          })
     }


     const handleSubmit = async(e)=>{
          e.preventDefault();
          try{
          const res = await api.post('/register',form);
          alert("Register Successfully")
          
          if (res.status ===201 || res.status===200){
               navigate('/login')
          }
     }catch(e){
          if(e.response){
               alert(e.response.data.message)
          }else{
               alert('oops! something went wrong')
          }
     }

     }



     return (
     <>
     <div className='outer'>
     <form onSubmit={handleSubmit} className='form-container'>
     <h1 className='hero'>Create Account</h1>
     <input type="text" name="username" placeholder="Username" className="input-field" onChange={handleChange} />
     <input type="text" name="email" placeholder='Email' className="input-field" onChange={handleChange} />
     <input type="password" name="password" placeholder='Password' className="input-field" onChange={handleChange} />
     <button type="submit" className='submit-btn'>Register</button>
     <h6>Already have an account? <span><Link to="/login">Login</Link></span></h6>
     
     </form>
     </div>
     </>
     )
}

export default Register