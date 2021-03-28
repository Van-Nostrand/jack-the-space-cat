import React, {useState, useEffect } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

export const CloudinaryTest = () => {

  return (
    <CloudinaryContext cloudName="dhvaidpl9">
      <Image publicId="jack-the-space-cat/fatherofjack_xyeioo.jpg" >
        <Transformation width="200" crop="scale" />
        <Transformation border="5px_solid_black" />
      </Image>
    </CloudinaryContext>
  )
}