/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import showPwdImg from '../assets/show-password.svg';
import hidePwdImg from '../assets/hide-password.svg';
import styled from 'styled-components';

export default function Login() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate()
  const [credentials,setcredentials] = useState({email:"",password:""})
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      // await axios.post('http://localhost:8000/login',{
        await axios.post('https://pink-panda-sock.cyclic.app/login',{
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
  const PasswordInput = styled.img`
    cursor: pointer;
    width: 24px;
    height: 24px;
  `;
  return (
    <div>
      <div> <Navbar /></div>
      
      <div className='container '>
        <h2 className='text-center'>Login Page</h2>
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
      <input type={isRevealPwd ? "text" : "password"} className="form-control"name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
      <PasswordInput
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
        />
    </div>
  
    <button type="submit" className=" m-3 btn btn-success">Submit</button>
      <p>Don't have an account?{"  "} <Link to="/signup">Sign Up</Link></p> 
    </form>

    </div>
    </div>
  )
}
