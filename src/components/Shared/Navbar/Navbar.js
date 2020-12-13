import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavigationBar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul id='navUl' className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link mr-5' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mr-5' to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mr-5' to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mr-5 text-white' to='/dashboard'>
                Admin
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mr-5 text-white' to='#'>
                Blogs
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mr-5 text-white' to='#'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
