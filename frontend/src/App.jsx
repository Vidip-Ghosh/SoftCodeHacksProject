

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Login from "./Pages/Signup";
import Login from "./Pages/Contact";


function App() {
  return (
    
     <>
    
     <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;

