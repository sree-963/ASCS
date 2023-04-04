import React from 'react'
import './Contact.css'
import AscsFooter from '../AscsFooter/AscsFooter'
import Footer from '../Footer/Footer'
const ContactUs = () => {
  return (
    <div className='contact-us'>
      <h1>Contact Us</h1>
      <div className='form-contact'>
        <div className='contactus-content'>
          <img src={require('../../Assests/addbox-image.jpg')} alt="" />
          <div className='details'>
            <h2>Call Us</h2>
            <div className='phonedetails'>
              <a href="#" className='fa fa-phone'></a>
              <span>8341510555</span>
            </div>
            <div className='webiste'>
              <a href="#" className='fa fa-globe'></a>
              <span>www.actionsupplychain.com</span>
            </div>
            <div className='phonedetails'>
              <a href="#" className='fa fa-envelope'></a>
              <span>info@actionsupplychain.com</span>
            </div>
          </div>

        </div>
        <div className='Form'>
          <form>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FullName" required />

              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mail" required />
              </div>

            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div class="form-group">
                <label for="exampleInputEmail1">Your ZIP Code</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Zipcode" required />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Mobile Number</label>
                <input type="tel" class="form-control" id="exampleInputPassword1" placeholder="Enter Mobile" required />
              </div>
            </div>


            <div class="form-group">
              <label class="form-check-label" for="exampleCheck1">Your Message</label>

              <textarea name="" id="" cols="60" class="form-control" rows="5"></textarea>
            </div>

            <button type="submit" class="btn submit">SUBMIT YOUR ENQUERY </button>
          </form>

        </div>
      </div>
      <AscsFooter />
      <Footer />
    </div>
  )
}

export default ContactUs