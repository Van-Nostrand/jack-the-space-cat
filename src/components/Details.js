import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import useGetWindowSize from "../functions/useGetWindowSize";
import EmailLogo from "../../assets/emailLogo.svg";

const Details = ({artData}) => {


  const {name} = useParams();
  const [ theImage, setTheImage ] = useState();
  const [ imageData, setImageData ] = useState(artData.filter(art => RegExp(`${name.replace(' ', '-')}.(jpe?g|png)`).test(art.fileName))[0]);


  //regex inside require.context needs to be static. That means getting all of the files that match a predefined regex pattern, and THEN parsing through the array.
  useEffect(() => {
    
    const img = require(`../assets/${name}@768.${imageData.fileName.split(".")[imageData.fileName.split(".").length - 1]}`);
    setTheImage(img);
  },[])

  // if the image isn't imported yet, load placeholder
  // placeholder needs work.. 
  if(!theImage){
    return(
      <div>DETAILS SCREEN</div>
    )
  }

  return(
    <div className="detail-page-container">
      <div className="image-div">
        <a href={require(`../assets/${imageData.fileName}`)}><img className="fullsize-img" src={theImage} /></a>
      </div>
      <div className="info-div">
        <div className="art-title">{imageData.name}</div>
        <div className="medium">{imageData.medium}</div>
        {/* <div className="date-div">{imageData.date}</div> */}
        {/* <div className="description">{imageData.description}</div> */}
        <div className="size">{imageData.size}</div>
        <a href={`mailto:acgallos@gmail.com?subject=Inquiry: ${imageData.name}`}>
          <img src={EmailLogo} />
            pricing and prints
        </a>
     
      </div>
    </div>
  );
 

};

export default Details;
