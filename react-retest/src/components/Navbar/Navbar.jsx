import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"></div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
        </div>
    </div>
  )
}

export default Navbar
