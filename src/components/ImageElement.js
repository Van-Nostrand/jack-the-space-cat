import React from "react";

const ImageElement = (props) => {
  return(
    <div className="img-div" onClick={() => console.log("clicked div")} >
      <div className="img-hover-text">more info</div>
      <div className="img-hover-filter"></div>
      <img src={props.source} className="img-thumb" />
    </div>
  )
}

export default ImageElement;