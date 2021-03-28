import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../functions/useIntersectionObserver";
import {Image, Transformation, CloudinaryContext } from "cloudinary-react";
import cloud_name from "../config/config";

/**
 * loads a placeholder until the image is ready to load
 * @param {imageData} props an object that holds the path of image file
 */
const ImageWithObserver = ({imageData, width}) => {

  const [ showImage, setShowImage ] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    useIntersectionObserver(placeholderRef.current, setShowImage);
  },[]);

  if(showImage){
    return(
      <div className="img-div">
        <Link to={`/details/${imageData.name.toLowerCase().replace(/( )/gi, "+")}`} >
          <div className="img-hover-text" >more info</div>
          <div className="img-hover-filter"></div>
          <CloudinaryContext cloudName={cloud_name.cloud_name}>
            <Image publicId={imageData.publicId} >
              <Transformation width={width} crop="scale" />
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