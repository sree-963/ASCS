import React from 'react'
import './Gallery.css'
import AscsFooter from '../AscsFooter/AscsFooter'
import Footer from '../Footer/Footer'
const Gallery = () => {
  return (
    <div className='gallery'>
      <h1>Gallery</h1>
      <div className='gallery-content'>
        <p>BEST SOLUTIONS AND SERVICES</p>
        <h2>Our focus is to always keep improving ourselves</h2>
      </div>
      <div className='IMAGES'>
        <div className='img1'>
          <img src="" alt="pic-1" />
          <p>warehouse</p>
        </div>
        <div className='img1'>
          <img src="" alt="pic-2" />
          <p>warehouse</p>
        </div>
        <div className='img1'>
          <img src="" alt="pic-3" />
          <p>warehouse</p>
        </div>
      </div>
      <div className='IMAGES'>
        <div className='img1'>
          <img src="" alt="pic-1" />
          <p>warehouse</p>
        </div>
        <div className='img1'>
          <img src="" alt="pic-2" />
          <p>warehouse</p>
        </div>
        <div className='img1'>
          <img src="" alt="pic-3" />
          <p>warehouse</p>
        </div>
      </div>
      <div className='IMAGES'>
        <div className='img1'>
          <img src="" alt="pic-1" />
          <p>warehouse</p>
        </div>
        <div className='img1'>
          <img src="" alt="pic-2" />
          <p>warehouse</p>
        </div>
        <div className='img1'>
          <img src="" alt="pic-3" />
          <p>warehouse</p>
        </div>
      </div>
      <AscsFooter/>
      <Footer/>
    </div>
  )
}

export default Gallery