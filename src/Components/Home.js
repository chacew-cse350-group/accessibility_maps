import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png"
import { FiArrowRight } from "react-icons/fi"
import About from './About'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

{/* The Home page is design to contain a hero section/attetion graber for the audience. It details out what the
  website is about and why people should look forward to using it. */}

const Home = () => {
  {/* Created soome functions that will help with navigating to the About page from the Learn more button. */}
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about')
  }

  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""/>
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            See how Accessible the University of Louisville is!
          </h1>
          <p className="primary-text">
            Accessibility Maps is a website all about reviewing the accessibility of the University of Louisville.
             Review, rate, and comment all about how the school is doing to be accomadating to students!
          </p>
          <button className="secondary-button" onClick={navigateToAbout}>
            Learn More <FiArrowRight />{""}
          </button>
          <Routes>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home