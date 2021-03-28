import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {useIntersectionObserver} from "../functions/useIntersectionObserver";

/**
 * loads a placeholder until the image is ready to load
 * @param {source} props path/name of image file
 */
const ImageWithObserver = ({source, name}) => {

  const [ showImage, setShowImage ] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    useIntersectionObserver(placeholderRef.current, setShowImage);
  },[]);

  /*
  I'll have to address this eventually. I made the Link element the clickable thing but it used to be the parent div. Now ONLY the text is clickable, but I want the whole image to be clickable. 
  */
  if(showImage){
    return(
      <div className="img-div">
        <Link to={`/details/${name.split(" ").join("-")}`} >
          <div className="img-hover-text" >more info</div>
          <div className="img-hover-filter"></div>
          <img className="img-thumb" src={source} alt="artwork" />
        </Link>
      </div>
      
    )
  }

  return(
    <div ref={placeholderRef} className="img-div"  >
      <div className="img-hover-text">more info</div>
      <div className="img-hover-filter"></div>
      <span className="img-thumb" ></span>
    </div>
  )
}

export default ImageWithObserver;