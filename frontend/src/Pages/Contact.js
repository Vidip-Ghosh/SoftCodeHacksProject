import React from 'react'
import Navbar from '../components/Navbar/Navbar';
export default function Contact() {
  return (
    <div>
         <div> <Navbar /></div>
<div className="container py-4">


  <form id="contactForm">

  
    <div className="mb-3">
      <label class="form-label" for="name">Name</label>
      <input class="form-control" id="name" type="text" placeholder="Name" />
    </div>

  
    <div className="mb-3">
      <label class="form-label" for="emailAddress">Email Address</label>
      <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
    </div>


    <div className="mb-3">
      <label class="form-label" for="message">Message</label>
      <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
    </div>

  
    <div className="d-grid">
      <button class="btn btn-primary btn-lg" type="submit">Submit</button>
    </div>

  </form>

</div>
    </div>
  )
}
