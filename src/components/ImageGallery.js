import React, {useState, useEffect, useRef} from "react";
import ImageWithObserver from "./ImageWithObserver";
import useGetWindowSize from "../functions/useGetWindowSize";
// import * as Sharp from "sharp";

const ImageGallery = ({ selectWork, setCurrentPage}) => {

  let windowsize = useGetWindowSize();
  let [ imagePaths, setImagePaths ] = useState([]);
  let [ imageData, setImageData ] = useState([]);
  let [ deviceSize, setDeviceSize ] = useState("");
  let [ imgSuffix, setImgSuffix ] = useState("@");


  const importAll = (r, object) => {
    if(object){
      let requirekeys = r.keys();
      let requirearray = requirekeys.map(r);
      
    }
    return r.keys().map(r);

  }

  const importAndMerge = (r) => {

    let data = r.keys().map(r);
    
    // keys = keys.map(key => key.split(/[.|/]/).filter(string => string.length > 0));
    let merged = data.map((image, i) => {
      return ({
        file: require(`../assets/artwork/${image.filename}`),
        ...image
      })
    })
    return merged;
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
    // let images = importAll(require.context('../assets/artwork/', false, /.(jpe?g|png)$/), false);
    // let imagejson = importAll(require.context('../assets/artwork/', false, /.json$/), true);

    let alldata = importAndMerge(require.context('../assets/artwork/', false, /.json$/));

    setImageData(alldata);
    // setImagePaths(images);
  },[]);  


  useEffect(() => {
    // determineWindowSize();
    setCurrentPage("/gallery");
  });

  if(imageData.length === 0){
    return(
      <div className="gallery-page-container">
        Loading...
      </div>
    )
  }

  else{
    let imageElements = imageData.map((artwork, i) => {

      // let thisimage = Sharp(artwork.filepath).resize(500)
      
      return <ImageWithObserver 
                alldata={artwork}
                source={artwork.file}
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
