import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <NavLink to='/'><img src={require('../../Assests/ascs logo.jpg')} alt="" /></NavLink>

      </div>
      <div className='menu'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/whatwedo'>What We Do</NavLink>
        <NavLink to='/whoweserve'>Who We Serve</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/careers'>Carrers</NavLink>
      </div>

    </div>
  )
}

export default Navbar