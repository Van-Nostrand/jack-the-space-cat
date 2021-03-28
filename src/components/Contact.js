import React, {useState, useEffect} from "react";
import FacebookLogo from "../../assets/facebook.svg";
import InstaLogo from "../../assets/instalogoB&W.svg";
import EmailLogo from "../../assets/emailLogo.svg";

const Contact = (props) => {
  let [ inputText, setInputText ] = useState("");

  useEffect(() => {
    props.setCurrentPage("/contact");
  });

  return(
    <div className="contact-page-container">
      <p>
        Reach out for information about prints and commissioned work 
      </p>
      <div className="contact-logo-container">
        <a href="mailto:acgallos@gmail.com">
          <img className="social-logo" src={EmailLogo} />
        </a>
        
        <a href="https://www.instagram.com/scout_berry/">
          <img className="social-logo" src={InstaLogo} />
        </a>
      </div>
    <Footer />
      
    </div>
  )
}

const Footer = () => {
  let style = {
    position: "fixed",
    bottom: "0",
    fontSize: "8px",
    color: "rgba(0,0,0,0.6)",
    zIndex:"0"
  }
  
  return (
    <div className="footer" style={style}>
      <div className="footer-text">Copyright © 2021 Daniel Doull</div>
    </div>
  )
}

export default Contact;


