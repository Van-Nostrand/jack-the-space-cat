import React, {useState, useEffect, useRef} from "react";
import ImageWithObserver from "./ImageWithObserver";
import useGetWindowSize from "../functions/useGetWindowSize";

const ImageGallery = ({ artData, setCurrentPage}) => {

  useEffect(() => {
    setCurrentPage("/gallery");
  });

  let imageElements = artData.map((artwork, i) => {
    return <ImageWithObserver 
              imageData={artwork}
              width={300}
              key={`image-element-${i}`} />
  }); 
  return(
    <div className="gallery-page-container">
      {imageElements}
    </div>
  );
}

export default ImageGallery;
