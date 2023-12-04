import React from 'react'

{/*The footer component is located at the bottom of every page of the website. Details out some basic 
contact info and information regarding the website. As of currently it isn't a fully functional footer.*/}

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <span>Accessibility Maps</span>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>About</span>
                <span>Map</span>
                <span>Review</span>
            </div>
            <div className='footer-section-columns'>
                <span>502-852-6938</span>
                <span>askdrc@louisville.edu</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer