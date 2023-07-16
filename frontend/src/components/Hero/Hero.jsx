import React from "react";
;
const Hero = () => {
    return (<>
    <div className='Hero'>
      <img alt="HelpImg" src="./images/doctor.jpg" className="img-fluid blur(10px) "/>
    </div>
    <div className="Hero-text mb-5">
       
        <p className="h1 text-sm-start carousel-caption text-success mb-5 ps-1" >CHECK THE AVAILABILITY OF BEDS</p>
        <p className="h2 text-sm-start carousel-caption text-success " >Helpline Number: +91 8765838341</p>
        
      
    </div>
    </>
    )
}
export default Hero