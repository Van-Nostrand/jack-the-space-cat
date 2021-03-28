import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const LandingPage = (props) => {

  useEffect(() => {
    props.setCurrentPage("/");
  })

  

  //import image here
  return(
    <div className="landing-page-container">
      <Link to='/gallery' className="landing-title">
        JACK THE SPACE CAT
      </Link>
      <div className="link-container">
        <Link to='/gallery'>Gallery</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      
    </div>
  )
}

export default LandingPage;