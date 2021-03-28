import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../functions/useIntersectionObserver";
import {Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { cloud_name } from "../config/config";

/**
 * loads a placeholder until the image is ready to load
 * @param {imageData} props an object that holds the path of image file
 */
const ImageWithObserver = ({imageData}) => {


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
        <Link to={`/details:${imageData.name.replace(" ", "+")}`} >
          <div className="img-hover-text" >more info</div>
          <div className="img-hover-filter"></div>
          <CloudinaryContext cloudName={cloud_name}>
            <Image publicId={imageData.publicId} >
              <Transformation />
            </Image>
          </CloudinaryContext>
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