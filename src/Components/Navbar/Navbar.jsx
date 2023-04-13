import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
const Navbar = () => {

  const [burger, setBurger] = useState(false)
  const handleclick = () => {
    setBurger(!burger)
  }
  return (
    <div className='navbar'>
      <div>
        <NavLink to='/'><img src={require('../../Assests/ascs logo.jpg')} alt="" /></NavLink>

      </div>
      <div className={burger ? "menu active" : "menu"}>
        <a style={{ color: "white" }} className='active cross' onClick={handleclick}><FaTimes size={30} /></a>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/whatwedo'>What We Do</NavLink>
        <NavLink to='/whoweserve'>Who We Serve</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/careers'>Carrers</NavLink>

      </div>
      <div className='hamburger' onClick={handleclick}>
        {burger ? "" : <FaBars size={28} />}


      </div>
    </div>
  )
}

export default Navbar