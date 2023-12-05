import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import BannerBackground from "../Assets/home-banner-background.png"

{/* The About page details more information that directly pertains to the purpose of the website.
  We also have more information about the members and how the project is for the class. */}

const About = () => {
  return (
    <div className="home-section-container">
      <div className='home-banner-container'>
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""/>
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Meet The Team!
          </h1>
          <p className="primary-text3">
            Our team consists of four members: Chace Washington, Sydney Wall, JB Morse, and Will Arnold. We are all
             computer science and engineering majors at the University of Louisville. We created this project for our 
             CSE 350/550 - Introduction to Software Engineering Course. This project was made in hope of streamlining
              the process for students to seek help for accessibility related issues on campus.
          </p>
        </div>
      </div>
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
    </div>
  )
}

export default About