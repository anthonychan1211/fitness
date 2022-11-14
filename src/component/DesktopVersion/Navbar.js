import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to='/'><span className='logo'>FIT </span><span className='logo-hollow'>U</span></Link>
        <ul className='navbar'>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/learn'>LEARN BEFORE START</Link></li>
            <li><Link to='/contact'>CONTACT US</Link></li>
            <li>REGISTER</li>
            <li ><button className='sign-in'>SIGN IN</button></li>
        </ul>

    </div>
  )
}

export default Navbar