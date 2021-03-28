import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarBackgroundImage from "../../assets/martinandI-draft4.svg";

const Navbar = (props) => {
  let [ landingNav, setLandingNav ] = useState();
  let [ shrinkNav, setShrinkNav ] = useState();

  let current = useLocation();

  const checkNav = () => {
    setLandingNav(current.pathname === "/" );
  }

  const shrinkTheNav = () => {
    setShrinkNav(!shrinkNav);
  }

  useEffect(() => {
    checkNav();
  })

  let imgclass = `navimage`;
  let titleclass = `title-container ${props.currentPage === "/" ? "landing-nav-title" : ""}`;
  let linksclass = `link-container ${props.currentPage === "/" ? "landing-nav-links" : ""}`


  return(
    <nav className={props.navClass} >

      <Link to="/" className={titleclass}>
        SCOUTBERRY
      </Link>

      <div className={linksclass}>

        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/">LANDING</Link> */}
    
      </div>

      <img className={imgclass} src={NavbarBackgroundImage} alt='martinandi' onClick={shrinkTheNav} />
    </nav>
  );
}

export default Navbar;