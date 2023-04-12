import React, { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Career.css'
import AscsFooter from '../AscsFooter/AscsFooter'
import Footer from '../Footer/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Careers = () => {
  useEffect(()=>{
    Aos.init()
  })

  const [fname,setFname]=useState('')
  const [lname,setlname]=useState('')
  const [mobile,setMobile]=useState('')
  const [email,setEmail]=useState('')
  const [msg,setMsg]=useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qxuqe3e', 'template_llk1kr3', form.current, 'u3VKSe_ZOElJO752r')
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
    <div className='careers'>
      <h1>Careers</h1>
      <div className='career-content'>
        <img src={require('../../Assests/careers-01.jpg')} alt="" />
        <div className='career-content-1'>
          <h2>Are You Dedicated, Hardworking, And Fun? Join Us?</h2>
          <p>At ‘ASCS’ we are stern about our responsibilities to act with integrity and give back. By fostering a culture of implementing sustainability and commitment where we work, it adds to the sense of pride and collective spirit among our employees, and strengthening our relationship with customers and share-holders.</p>
        </div>
      </div>
      <div className='openjobs'>
        <img src={require('../../Assests/openjobs.jpg')} alt="" />
        <div className='openjobs-content'>
          <div className='open-jobs-content-1'>
            <h2>Open Jobs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper faucibus <br /> velit, vel scelerisque mauris porttitor et.</p>
          </div>
          <div className='open-job' data-aos='fade-up'>
            <div className='openjob-1'>
              <h2>Brand Strategist </h2>
              <p>Orlando, Florida, USA</p>
            </div>
            <div className='openjob-1' >
              <h2>Digital Marketing Manager </h2>
              <p>Orlando, Florida, USA</p>
            </div>
          </div>
          <div className='open-job' data-aos='zoom-in-up'>
            <div className='openjob-1'>
              <h2>Web Developer </h2>
              <p>Orlando, Florida, USA</p>
            </div>
            <div className='openjob-1'>
              <h2>Marketing Specialist
              </h2>
              <p>Orlando, Florida, USA</p>
            </div>
          </div>
          <div className='open-job' data-aos='flip-right'>
            <div className='openjob-1'>
              <h2>Good Adwords Specialist</h2>
              <p>Orlando, Florida, USA</p>
            </div>
            <div className='openjob-1'>
              <h2>Community Manager </h2>
              <p>Orlando, Florida, USA</p>
            </div>
          </div>
        </div>
      </div>
      <div className='recruitmentprocess' data-aos='flip-left'>
        <h2>What Does The Recruitment Process Look Like?</h2>
        <div className='interview-process'>
          <div className='interview'>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <h3>1. Phone Interview</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod ratione placeat odit facilis </p>
          </div>
          <div className='interview'>
            <i class="fa fa-users" aria-hidden="true"></i>
            <h3>2. First Interview</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod ratione placeat odit facilis </p>

          </div>
          <div className='interview'>
            <i class="fa fa-cog" aria-hidden="true"></i>
            <h3>3. Technical Test</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod ratione placeat odit facilis </p>

          </div>
          <div className='interview'>
            <i class="fa fa-handshake-o" aria-hidden="true"></i>
            <h3>4. Offer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod ratione placeat odit facilis </p>
          </div>
        </div>
      </div>

      <div className="job-banner">
        <img src={require('../../Assests/jobbanner.jpg')} alt="" />
        <div className='job-content'>
          <h2>Ready For Your New Job?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper faucibus velit.</p>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='Name' style={{ display: "flex", gap: "1rem" }}>
                <div class="Form-group Input">
                  <label for="exampleInputEmail1">First Name</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FirstName"  name='user_firstname' value={fname} onChange={(e)=>setFname(e.target.value)}  required />

                </div>
                <div class="Form-group Input">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter LastName"  name='fuser_lastname' value={lname} onChange={(e)=>setlname(e.target.value)} required />
                </div>

              </div>

              <div className='Name' style={{ display: "flex", gap: "1rem" }}>
                <div class="Form-group Input">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name='fuser_email ' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="Form-group Input">
                  <label for="exampleInputPassword1">Mobile Number</label>
                  <input type="tel" class="form-control" id="exampleInputPassword1"  name='fuser_contact' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter Mobile" required />
                </div>
              </div>


              <div class="Form-group Input">
                <label class="form-check-label" for="exampleCheck1">Message</label>

                <textarea name="message" id="" cols="50" class="form-control" rows="5"   value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
              </div>
              
              <button type="submit" class="btn btn-warning fw-bold submit">Submit</button>
            </form>

          </div>
        </div>
      </div>
      <div className="" style={{ padding: "0rem 0" }}>
        <AscsFooter />
        <Footer />
      </div>
    </div>
  )
}

export default Careers