import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Details from "./Details";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ImageGallery from "./ImageGallery";
import LandingPage from "./LandingPage";

import useCustomScrollRef from "../functions/useCustomScrollRef";
import useGetWindowSize from "../functions/useGetWindowSize";

import {
  ART_DATA,
  PAGE_DATA
} from "../constants/CONSTANTS";

export default function App(){

  let contentRef = useRef(null);
  let [ currentPage, setCurrentPage ] = useState();

  // SCROLL EFFECT STUFF
  let scrollTargetRef = useRef(null);
  // let smallNav = useCustomScrollRef(scrollTargetRef, 100);
  let smallNav = useCustomScrollRef(150);
  // SCROLL EFFECT STUFF

  let currentWindowSize = useGetWindowSize();

  const checkRef = () => {
    // console.log(contentRef.current);
  }

  useEffect(() => {
    // checkRef();
    // console.log(smallNav);
  }); 
// console.log(ART_DATA);
  let navClass;
  if(currentWindowSize.width < 600){
    navClass = `navbar ${smallNav ? 'shrink-nav' : ''}`;
  } 
  else {
    navClass = "navbar willnotshrink";
  }
  return(
    
    <Router>
      <Navbar navClass={navClass} currentPage={currentPage} smallNav={smallNav} />
      <div ref={contentRef} className='content-container' >
        <div className="scrolling-target" ref={scrollTargetRef}></div>
        <Switch>
          <Route exact path="/">
            <LandingPage 
              setCurrentPage={setCurrentPage} 
              />
          </Route>
          <Route path="/about">
            <About 
              setCurrentPage={setCurrentPage} 
              data={PAGE_DATA["about"]} 
            />
          </Route>
          <Route path="/works">
            <ImageGallery 
              setCurrentPage={setCurrentPage}  
              artData={ART_DATA} 
            />
          </Route>
          <Route path="/contact">
            <Contact 
              setCurrentPage={setCurrentPage} 
            />
          </Route>
          <Route path="/details/:name" children={<Details artData={ART_DATA} />} /> 
        </Switch>
      </div>
    </Router>
  );
}


