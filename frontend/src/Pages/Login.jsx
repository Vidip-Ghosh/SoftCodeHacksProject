/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [credentials,setcredentials] = useState({email:"",password:""})
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:8000/login',{
        "username": credentials['email'],
        "password": credentials['password']
      })
      .then(res=>{
        if(res.data=="Exist")
        {
          navigate('/',{state:{id:credentials['email']}})
        }
        else if(res.data=="NotExist")
        {
          alert('User has not signed up!!')
        }
      })
    }catch (error) {
      console.log(error);
    }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div>
      <div> <Navbar /></div>
      
      <div className='container '>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
    
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
    </div>
  
    <button type="submit" className=" m-3 btn btn-success">Submit</button>
    <Link to="/signup" className=" m-3 btn btn-danger">I'm a user</Link>
    </form>

    </div>
    </div>
  )
}
