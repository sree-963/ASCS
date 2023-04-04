import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (

        <div class="Homepage">

            <div class="header">
                <div class="header-icons">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                </div>
                <NavLink to='/contactus'>Contact Us</NavLink>
            </div>
        </div>

    )
}

export default Header