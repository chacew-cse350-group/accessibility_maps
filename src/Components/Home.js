import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png"
import { FiArrowRight } from "react-icons/fi"

{/* The Home page is design to contain a hero section/attetion graber for the audience. It details out what the
  website is about and why people should look forward to using it. */}

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""/>
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            See how accessible your campus is!
          </h1>
          <p className="primary-text">
            Accessibility Maps is a website all about reviewing the accessibility of your school.
            Review, rate, and comment all about how your school is doing to be accomadating to students!
          </p>
          <button className="secondary-button">
            Learn More <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home