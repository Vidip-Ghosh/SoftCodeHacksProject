import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
export default function Contact() {
  const [status,setStatus] = useState("Submit");
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setStatus('Sending...');
    const {name,email,message} = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message : message.value
    }

    // let response = await fetch('http://localhost:8000/contact-form',{
    let response = await fetch('https://pink-panda-sock.cyclic.app/contact-form',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json;charset=utf-8',
      },
      body: JSON.stringify(details)
    });
    setStatus('Submit')
    let result = await response.json();
    alert(result.status);
  }
  return (
    <div>
      <div> <Navbar /></div>
      <div className="container py-4">


      <form onSubmit={handleSubmit} method='POST' className='contact-inputs'>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-control" name='name' type="text" placeholder="Name" autoComplete='off' />
        </div>

      
        <div className="mb-3">
          <label className="form-label" htmlFor="emailAddress">Email Address</label>
          <input className="form-control" name='email' id="emailAddress" type="email" placeholder="Email Address" autoComplete='off'/>
        </div>


        <div className="mb-3">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height:10+'em'}}></textarea>
        </div>

      
        <div className="d-grid">
          <button className="btn btn-primary btn-lg" type="submit">{status}</button>
        </div>
      </form>

    </div>
    </div>
  )
}
