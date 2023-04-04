import React from 'react'
import './WhoweServe.css'
import AscsFooter from '../AscsFooter/AscsFooter'
import Footer from '../Footer/Footer'
const WhoWeServe = () => {
  return (
    <div className='whoweserve'>
      <h1>Who We Serve</h1>
      <div className='whoweserve-content'>
        <p>OUR TRUSTED CLIENTS</p>
        <h2>Our Clientele</h2>
      </div>

      <div className='client-images'>
        <img src={require('../../Assests/who-we-serve-01.jpg')} alt="" />
        <img src={require('../../Assests/who-we-serve-02.jpg')} alt="" />
      </div>
      <div className='client-images'>
        <img src={require('../../Assests/who-we-serve-03.jpg')} alt="" />
        <img src={require('../../Assests/who-we-serve-04.jpg')} alt="" />
      </div>
      <div className='client-images'>
        <img src={require('../../Assests/who-we-serve-05.jpg')} alt="" />
        <img src={require('../../Assests/who-we-serve-06.jpg')} alt="" />
      </div>
      <AscsFooter/>
      <Footer/>
    </div>
  )
}

export default WhoWeServe