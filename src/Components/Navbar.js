import React from 'react'
import "../App.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/" className='site-title'>Accessibility Maps</Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/map">Map</CustomLink>
        <CustomLink to="/review">Review</CustomLink>
      </ul>
    </nav>
  )
}

{/* This function is a more efficient method of switching between pages on the website.
    The function grabs the path name from the website url, and depending on that path name
    the function will switch between what page is active/clicked on. */}
function CustomLink({ to, children, ...props }) {

  {/* By using react-router-dom, the website loading speed is much quicker.
      React-router-dom prevents the page from having to fully re-render everytime
      a new page is selected. It instead will allow for only the content/necessary
      changes to reload (useResolvedPath and useMatch help with this). */}
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
  return (
    <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default Navbar