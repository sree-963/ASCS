import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div class="footer">
      <div class="Map-links">
        <div class="map">
          <h5>Address</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15221.765651628471!2d78.3989826!3d17.4864298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914b1e7c543b%3A0x6dac187770a5acf1!2sAction%20Supply%20Chain%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1679730565006!5m2!1sen!2sin"
            class="ascsmap" width="300" height="250" style={{ border: "0" }} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="address">
            <b>Action Supply Chain Solutions Pvt. Ltd.</b>
            <p>
              #15-21-32/46 & 47,1st Floor, <br />
              M Squares Building, Balaji Nagar, Kukatpally, <br />
              Hyderabad, Telangana 500072
            </p>
          </div>
        </div>
        <div class="links">
          <div>
            <h5>Links</h5>
          </div>
          <div class="sitelinks">
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/whatwedo'>What We Do</Link>
            <Link to='/whoweserve'>Who We Serve</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/careers'>Carrers</Link>
          </div>
        </div>
      </div>
      <div class="media">
        <div class="socialmedia">
          <h5>Social Media</h5>
          <div class="icons">
            <a href="#" class="fa fa-facebook"></a>
            <span>Follow Us On Facebook</span>
          </div>
          <div class="icons">
            <a href="#" class="fa fa-instagram"></a>
            <span>Follow Us On Instagram</span>
          </div>
          <div class="icons">
            <a href="#" class="fa fa-linkedin"></a>
            <span>Follow Us On Linkedin</span>
          </div>
        </div>
        <div class="contactus">
          <h5>Contact Us</h5>
          <div class="phone">
            <a href="#" class="fa Fa fa-phone"></a>
            <span>8341510555</span>
          </div>
          <div class="mail">
            <a href="#" class="fa fa-envelope"></a>
            <span> info@actionsupplychain.com</span>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Footer;