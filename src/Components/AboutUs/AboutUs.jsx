import React from 'react'
import './AboutUs.css'
import AscsFooter from '../AscsFooter/AscsFooter';
import Footer from '../Footer/Footer'
const AboutUs = () => {
  return (
    <>
      <div className='aboutus'>
        <h1>About Us</h1>
      </div >
      <div className='bg'>
      <div className='about-content'>
        <p>GET TO KNOW US</p>
        <h4>Accuracy, Sincerity, Credibility and Sustainability.</h4>
        <p className='p'>Action Supply Chain Solutions Pvt Ltd (ASCS), part of Action Group of Companies is among the fastest growing integrated supply chain solutions. Headquartered at Hyderabad, the inception of ASCS happened in 2017 promoted by Action Group by a cohesive team represented by domain experts from Supply Chain, Logistics, Warehousing & Distribution and Inventory Management. We believe in our philosophy of doing business, in line with the core- values of ‘ASCS’ of accuracy, sincerity, credibility and sustainability. We also believe that we are in a position to attract talent, customers and business partners due to the recognition of Action Group PAN India. With ASCS presence across India through its branch offices and associate network, we make sure that every client is served with at-most expertise and reliable manner. Our focus is to always keep improving ourselves with changing technology and helping our clients in providing the best solutions and services with maximum satisfaction.</p>
      </div>
      <div className='about-mission'>
        <img src={require('../../Assests/about-mission.jpg')} alt="" />
        <div className='aboutmission-content'>
          <h1>Our Mission</h1>
          <p>At ‘ASCS’ we are stern about our responsibilities to act with integrity and give back. By fostering a culture of implementing sustainability and commitment where we work, it adds to the sense of pride and collective spirit among our employees, and strengthening our relationship with customers and share-holders.</p>
        </div>
      </div>

      <div className='about-values'>
        <div className='aboutvalues-content'>
          <h1> Our Values</h1>
          <p>The values at the heart of ASCS culture are honesty, taking ownership, doing team work and win the confidence of our Client / Business Partner. We seek, encourage, celebrate and reward these values because they are essential to the promises we have made to our Clients, Investors, Suppliers and Employees.</p>
        </div>
        <img className='aboutvaluesimg' src={require('../../Assests/about-values.jpg')} alt="" />
      </div>

      <div className='about-vision'>
        <img  className='image-fluid'src={require('../../Assests/about-vision.jpg')} alt="" />
        <div className='aboutvision-content'>
          <h1> Our Vision</h1>
          <p>Our vision is to redefine the Supply Chain by providing reliable and efficient services and to be the leading 3PL service provider in the nation.</p>
        </div>

      </div>
</div>
      <AscsFooter />
      <Footer />

    </>
  )
}

export default AboutUs