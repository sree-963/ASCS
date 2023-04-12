import React,{useEffect} from 'react'
import './WhoweServe.css'
import AscsFooter from '../AscsFooter/AscsFooter'
import Footer from '../Footer/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'

const WhoWeServe = () => {
  useEffect(()=>{
    Aos.init()
  })

  return (
    <div className='whoweserve'>
      <h1>Who We Serve</h1>
      <div className='whoweserve-content'>
        <p>OUR TRUSTED CLIENTS</p>
        <h2>Our Clientele</h2>
      </div>

      <div className='client-images' data-aos='flip-up'>
        <img src={require('../../Assests/who-we-serve-01.jpg')} alt="" />
        <img src={require('../../Assests/who-we-serve-02.jpg')} alt="" />
      </div>
      <div className='client-images'data-aos='flip-right'>
        <img src={require('../../Assests/who-we-serve-03.jpg')} alt="" />
        <img src={require('../../Assests/who-we-serve-04.jpg')} alt="" />
      </div>
      <div className='client-images' data-aos='flip-left'>
        <img src={require('../../Assests/who-we-serve-05.jpg')} alt="" />
        <img src={require('../../Assests/who-we-serve-06.jpg')} alt="" />
      </div>
      <AscsFooter/>
      <Footer/>
    </div>
  )
}

export default WhoWeServe