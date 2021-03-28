import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const LandingPage = (props) => {

  useEffect(() => {
    props.setCurrentPage("/");
  })

  

  //import image here
  return(
    <div className="landing-page-container">
      <Link to='/works' className="landing-title">
        SCOUTBERRY
      </Link>
      <div className="link-container">
        <Link to='/about'>About</Link>
        <Link to='/works'>Works</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      
    </div>
  )
}

export default LandingPage;