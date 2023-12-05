import React from 'react'


{/*The contact component is located at the bottom of every page of the website right abover the footer. It allows 
for people to provide a direct contact to the university's disability resource center. 
As of currently it isn't a fully functional footer.*/}

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>
            Have any Questions?
        </h1>
        <p className='primary-text'>
            Contact the UofL Disability Resource Center
        </p>
        <div className='contact-form-container'>
            <input type="text" placeholder="yourmail@louisville.edu" />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact