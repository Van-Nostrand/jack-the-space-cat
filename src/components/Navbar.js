import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
// import NavbarBackgroundImage from "../../assets/martinandI-draft4.svg";

import ImageWithObserver  from './ImageWithObserver';

const Navbar = (props) => {
  // let [ landingNav, setLandingNav ] = useState();
  let [ shrinkNav, setShrinkNav ] = useState();

  let currentPage = useLocation();

  useEffect(() => {
    setShrinkNav(currentPage.pathname === '/');
  },[currentPage]);


  let jackLogo = <img className='nav-jack-logo' src={require('../assets/logos/jacklogo.png')} />


  return(
    <nav className={`navbar ${currentPage.pathname === '/' ? 'landing-navbar' : ''}`} >

      <Link to="/" className={`title-container ${currentPage.pathname === '/' ? 'landing-nav-title' : ''}`}>
        JACK THE SPACE CAT
      </Link>

      {jackLogo}

      <div className={`link-container ${currentPage.pathname === "/" ? "landing-nav-links" : ''}`}>

        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
    
      </div>
    </nav>
  );
}

export default Navbar;