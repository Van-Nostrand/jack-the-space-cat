import React, { useState, useEffect } from "react";


const About = (props) => {

  let [ imagePath, setImagePath ] = useState();

  useEffect(() => {
    const context = require.context('../../assets', false, /.*(scoutberry).*(png|jpe?g)$/);
    const images = context.keys().map(context);
    setImagePath(images[0]);
  },[]);

  useEffect(() => {
    props.setCurrentPage("/about");
  })

  let paragraphs = props.data.paragraphs.map((para, i) => 
    <p 
      className={`about-paragraph-${i + 1} fade-in`} 
      key={`about-p-${i}`}>
        {para}
    </p>
  );

  // let paragraph1 = <p className='paragraph1'>I have been painting since I can remember but I have been working more seriously with acrylic and ink on canvas for 6 years, focusing on an abstract style. In this series, I wanted to capture moments of reflection, and I try to offer respect for a moment in each piece </p>;

  // let altparagraph = <p className="paragraph1">
  //   Scoutberry (or Annie as she's known to her friends) has had an interest in art which began in childhood, that developed further upon discovering a love for working with acrylic and ink as an adult. She strives to capture and respect moments of reflection in her own abstract way
  // </p>

  let paragraph1 = <p className='paragraph1'>"I have always aspired to create a mood in my work; to paint the physical with the emotional, and show the beauty in the grey of things"</p>;

  

  if(imagePath){
    return (
      <div className="about-page-container">
        <div className="about-image-element-wrapper">
          <img src={imagePath} alt="berrypicture" />
        </div>
        {/* {paragraph1} */}
        {/* {altparagraph} */}
        {paragraph1}
               
      </div>
    )
  }

  //import image here
  return(
    <div className="about-page-container">
      <div>
        {paragraphs}
      </div>
      <div>THIS IS THE DANG ABOUT PAGE</div>
      <div className="about-image-element-wrapper">
        <span />
      </div>
    </div>
  )
}

export default About;
