import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import AscsFooter from '../AscsFooter/AscsFooter'
import Footer from '../Footer/Footer'
import Input from '../../Input';
const ContactUs = () => {

  const [fname,setFname]=useState('')
  const [lname,setlname]=useState('')
  const [mobile,setMobile]=useState('')
  const [email,setEmail]=useState('')
  const [msg,setMsg]=useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qxuqe3e', 'template_llk1kr3', form.current, 'u3VKSe_ZOElJO752r',)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Your Details Has Sent Successfully')
      setFname('')
      setlname('')
      setMobile('')
      setEmail('')
      setMsg('')
    }
  return (
    <div className='contact-us'>
      <h1>Contact Us</h1>
      <div className='form-contact'>
        <div className='contactus-content'>
          <img src={require('../../Assests/addbox-image.jpg')} alt="" />
          <div className='details'>
            <h2>Call Us</h2>
            <div className='phonedetails phone'>
              <i className='fa fa-phone'></i>
              <span>8341510555</span>
            </div>
            <div className='webiste'>
              <i className='fa fa-globe'></i>
              <span>www.actionsupplychain.com</span>
            </div>
            <div className='phonedetails'>
              <i className='fa fa-envelope'></i>
              <span>info@actionsupplychain.com</span>
            </div>
          </div>

        </div>
        <div className='Contact-Form'>
          <form  ref={form} onSubmit={sendEmail}>
            <div className='fullname'>
              <div className='first'>
                <label>FirstName</label>
                <input type="text"  name='user_firstname' value={fname} onChange={(e)=>setFname(e.target.value)}/>
              </div>
              <div className='first'>
                <label>LastName</label>
                <input type="text" name='fuser_lastname' value={lname} onChange={(e)=>setlname(e.target.value)} />
              </div>
            </div>
            <div className='contact-details'>
              <div className='first'>
                <label htmlFor="">Contact</label>
                <input type="tel" name='fuser_contact' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
              </div>
              <div className='first'>
                <label>Email</label>
                <input type="email" name='fuser_email' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
            </div>
            <div className='textarea'>
              <label >Message Us</label>
              <textarea name="message" id="" cols="50" rows="5"  value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
            </div>
       
            <input type='submit' value="Send" className='btn btn-success mt-3'/>
          </form>
        </div>
      </div>
      
      <AscsFooter />
      <Footer />
    </div>
  )
}

export default ContactUs