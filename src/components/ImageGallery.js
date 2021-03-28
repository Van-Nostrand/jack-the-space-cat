import React, {useState, useEffect, useRef} from "react";
import ImageWithObserver from "./ImageWithObserver";
import useGetWindowSize from "../functions/useGetWindowSize";

const ImageGallery = ({artData, selectWork, setCurrentPage}) => {

  let windowsize = useGetWindowSize();
  let [ imagePaths, setImagePaths ] = useState([]);
  let [ deviceSize, setDeviceSize ] = useState("");
  let [ imgSuffix, setImgSuffix ] = useState("@");


  const importAll = (r) => {
    return r.keys().map(r);
  }

  const determineWindowSize = () => {

    if(windowsize.width < 600){
      setDeviceSize("phone");
      setImgSuffix("@320");
      return "phone";
    }
    else if(windowsize.width < 900){
      setDeviceSize("tab-port");
      setImgSuffix("@480");
      return "tab-port";
    }
    else if(windowsize.width < 1200){
      setDeviceSize("tab-land");
      setImgSuffix("@768")
      return "tab-land";
    }
    else if(windowsize.width < 1800){
      setDeviceSize("small-pc");
      setImgSuffix("@768");
      return "small-pc";
    }
    else if (windowsize.width >= 1800){
      setDeviceSize("large-pc");
      setImgSuffix("@768");
      return "large-pc";
    }
  }

  
  useEffect(() => {
    let images;
    if(deviceSize === "phone"){
      images = importAll(require.context('../assets/', false, /(@320.(jpe?g|png))$/));
    }
    else if (deviceSize === "tab-port"){
      images = importAll(require.context('../assets/', false, /(@480.(jpe?g|png))$/));
    }
    else if (deviceSize === "tab-land" || deviceSize === "small-pc" || deviceSize === "large-pc"){
      images = importAll(require.context('../assets/', false, /(@768.(jpe?g|png))$/));
    }
    else if (deviceSize === ""){
      images = [];
    }
    
    setImagePaths(images);
  },[deviceSize]);  


  useEffect(() => {
    determineWindowSize();
    setCurrentPage("/gallery");
  });

  if(imagePaths.length === 0){
    return(
      <div className="gallery-page-container">
        Loading...
      </div>
    )
  }

  else if (imagePaths.length > 0){
    let imageElements = artData.map((artwork, i) => {
      let thisArt = imagePaths.filter(path => RegExp(`(${artwork.fileName.split('.').join(imgSuffix + '.')})`).test(path));
  
      return <ImageWithObserver 
                name={artwork.name}
                source={thisArt[0]}
                key={`image-element-${i}`} />
    }); 
    return(
      <div className="gallery-page-container">
        {imageElements}
      </div>
    );
  }
}

export default ImageGallery;
