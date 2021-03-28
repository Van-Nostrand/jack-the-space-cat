import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Details from "./Details";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ImageGallery from "./ImageGallery";
import LandingPage from "./LandingPage";

import useCustomScrollRef from "../functions/useCustomScrollRef";
import useGetWindowSize from "../functions/useGetWindowSize";


export default function App(){

  let contentRef = useRef(null);
  let [ currentPage, setCurrentPage ] = useState();

  /**
   * TODO
   * if currentpage === gallery or details, import images
   */

  // SCROLL EFFECT STUFF
  let scrollTargetRef = useRef(null);
  let smallNav = useCustomScrollRef(150);
  // SCROLL EFFECT STUFF

  let currentWindowSize = useGetWindowSize();


  return(
    
    <Router>
      <Navbar currentPage={currentPage} />
      <div ref={contentRef} className='content-container' >
        <Switch>
          <Route exact path="/">
            <LandingPage 
              setCurrentPage={setCurrentPage} 
            />
          </Route>
          <Route path="/gallery">
            <ImageGallery 
              setCurrentPage={setCurrentPage}  
             
            />
          </Route>
          <Route path="/contact">
            <Contact 
              setCurrentPage={setCurrentPage} 
            />
          </Route>
          <Route path="/details/:name" children={<Details />} /> 
        </Switch>
      </div>
    </Router>
  );
}


