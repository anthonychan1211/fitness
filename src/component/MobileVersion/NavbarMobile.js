import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {useRef} from "react"
const NavbarMobile = () => {
    const [isShownMenu, setIsShownMenu] = useState(false)
    const toggleDisplay = () => {
        setIsShownMenu(!isShownMenu)
    }
    const navMenu = useRef(null)
    const clickedOutsideMenus = (e)=>{
        if(navMenu.current && isShownMenu && !navMenu.current.contains(e.target)){
            setIsShownMenu(false)
        }
    }
    document.addEventListener('mousedown',clickedOutsideMenus)
  return (
    <>
        <div className='navbar-container-mobile'>
         <Link to='/'><span className='logo-mobile'>FIT </span><span className='logo-hollow-mobile'>U</span></Link>
         <HamburgerIcon className='menu-icon' w={10} h={10} onClick={toggleDisplay}/>
        </div>
        <div ref={navMenu} className={isShownMenu?'nav-menu-mobile':'nav-menu-hidden'}>
            <div className='close-icon' onClick={toggleDisplay}>
            <CloseIcon  w={4} h={4}/>
            </div>
            <div className='list'>
            <ul>    
                <li className='sign-in-mobile' onClick={()=>setIsShownMenu(false)}>SIGN IN</li>
                <Link to={'/about'}><li onClick={()=>setIsShownMenu(false)}>ABOUT</li></Link>
                <li onClick={()=>setIsShownMenu(false)}>EXPERT SUPPORT</li>
                <li onClick={()=>setIsShownMenu(false)}>REGISTER</li>
                <li onClick={()=>setIsShownMenu(false)}>CONTACT US</li>
            </ul>
            </div>
            
        </div>
    </>
  )
}

export default NavbarMobile