import React from 'react'

{/* Embedding a google form that the team created to store reviews. Old form method was not gonna work with retaining
 user reviews. This method not only looks better but worked significanly better. */}

const Review = () => {
  return (
    <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLSdm1uycUTzKzNp-cg6xXJ4Om8IYBHxM6CER9T_G5S2kVflqIQ/viewform?embedded=true" 
      width="700" 
      height="750" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
        Loading…
    </iframe>
  )
}

export default Review