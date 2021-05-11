import React, {useState, useEffect} from "react";

const Videos = (props) => {

  useEffect(() => {
    props.setCurrentPage("/videos");
  });

  return(
    <div className="video-page-container">

      
      
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

export default Videos;


