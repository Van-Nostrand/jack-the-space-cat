import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

import Details from "./Details";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

import Contact from "../views/Contact";
import ImageGallery from "../views/ImageGallery";
import LandingPage from "../views/LandingPage";

import useCustomScrollRef from "../functions/useCustomScrollRef";
import useGetWindowSize from "../functions/useGetWindowSize";

import { ART_DATA } from "../constants/CONSTANTS";
import { useScrollingEffect } from '../functions/useScrollingEffect';

export default function App(){

  let contentRef = useRef();
  let [ currentPage, setCurrentPage ] = useState();
  let engageEffect = useScrollingEffect();

  useEffect(() => {
    console.log(currentPage);
  },[currentPage]);
  

  /**
   * TODO
   * if currentpage === gallery or details, import images
   */

  return (
    
    <Router>
      {/* <Navbar navClass={currentPage === '/' ? 'landing-navbar' : 'navbar'} currentPage={currentPage} /> */}
      <TopNav bigNav={engageEffect} />
     
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


