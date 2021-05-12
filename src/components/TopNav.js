import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
// import NavbarBackgroundImage from "../../assets/martinandI-draft4.svg";

import ImageWithObserver  from './ImageWithObserver';

const TopNav = (props) => {
  // let [ landingNav, setLandingNav ] = useState();
  let [ shrinkNav, setShrinkNav ] = useState();

  let currentPage = useLocation();

  useEffect(() => {
    setShrinkNav(currentPage.pathname === '/');
  },[currentPage]);


  let jackLogo = <img className='topnav-jack-logo' src={require('../assets/logos/jacklogo.png')} />


  return(
    <nav className={`topnav${props.bigNav ? '' : ' topnav-small'}${currentPage.pathname === '/' ? ' landing-topnav' : ''}`} >

      <Link to="/gallery">
        Gallery
      </Link>

      {jackLogo}

      <Link to="/contact">
        Contact
      </Link>
    
      <Link to="/" className={`topnav-title-container ${currentPage.pathname === '/' ? 'landing-nav-title' : ''}`}>
        JACK THE SPACE CAT
      </Link>

    </nav>
  );
}

export default TopNav;