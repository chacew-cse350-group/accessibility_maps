import React from 'react'
import AboutBackground from "../Assets/about-background.png"

{/* The About page details more information that directly pertains to the purpose of the website.
  We also have more information about the members and how the project is for the class. */}

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className='primary-subheading'>About</p>
        <h1 className="primary-heading2">
          Accessibility is Important for Providing Equitable Access to Everyone
        </h1>
        <p className="primary-text2">
          Accessibility Maps bridges the gap between students and their campus. 
          Accessibility Maps allows for students to speak their mind on the issues they face on
          a regular basis regarding some of the accessbility markers on the engineering side of UofL's campus.
          This website was created as a project for UofL's CSE 350/550 course. The team consists of Chace Washington,
          Sydney Wall, Will Arnold, and JB Morse.
        </p>
      </div>
    </div>
  )
}

export default About