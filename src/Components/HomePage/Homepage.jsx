import React, { useState, createRef, useEffect } from 'react'
import './Homepage.css'
import { Link, NavLink, Navigate } from 'react-router-dom'
import AscsFooter from '../AscsFooter/AscsFooter'
import Footer from '../Footer/Footer'
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from './Data'
import Aos from 'aos';
import 'aos/dist/aos.css'
import BacktoTop from '../BacktoTop/BacktoTop'
const Homepage = () => {
  useEffect(()=>{
    Aos.init()
  })
  const customeSlider = createRef();

  const [sliderSettings, setSliderSettings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  })
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }
  return (
    <div className='homepage'>
      <div className='hero'>
        <img className="heroimg image-fluid" src={require('../../Assests/herobg.jpg')} alt="" />
        <div class="overlay"></div>
        <div class="content">
          <p> Action Supply Chain Solutions Pvt Ltd (ASCS)</p>
          <div class="heading">
            <h1> Companies is among the<br /> fastest growing integrated <br />  supply chain solutions</h1>

          </div>
        </div>
      </div>

<div className='top-up'>
      <div class="section-2-cards">

        <div className="App">

          <Slider {...sliderSettings} ref={customeSlider}>
            {Data.map((item) => (

              <div className="card" key={item.id}>
                <div className="card-top">
                  <img src={item.img} alt={item.name} />
                  <h6>{item.name}</h6>
                </div>
                <div className="card-bottom">
                  <p>{item.t1} </p>
                  <p>{item.t2} </p>
                </div>
                <div className='READMORE'>
                  <Link className='ReadMore' to='/whatwedo'>ReadMore</Link>
                </div>
              </div>
            ))}
          </Slider>
          <div className='buttons'>
            <span className='arrow' onClick={() => gotoPrev()}><FaArrowCircleLeft /></span>
            <span className='arrow' onClick={() => gotoNext()}><FaArrowCircleRight /></span>

          </div>
        </div>

      </div>

      <div class="section-3-mission" data-aos='zoom-in' >
        <div class="mission">
          <div class="keep-improving">
            <p>KEEP IMPROVING OURSELVES</p>
            <h3>Mission</h3>
          </div>
          <div class="line3">
            <hr />
          </div>
          <div class="values">
            <p>At ‘ASCS’ we are stern about our responsibilities to act
              <span>with integrity and give back. By fostering a culture of </span>
              <span>implementing sustainability and commitment where we</span>
              <span>work, it adds to the sense of pride and collective spirit</span>
              <span>among our employees, and strengthening our relationship </span>
              with customers and share-holders.
            </p>
            <NavLink to='/aboutus' className='btn btn-warning Learn-more'>ReadMore</NavLink>
          </div>
        </div>
        <img class='mission-img'  src={require('../../Assests/mission (1).jpg')} alt="" />
      </div>

      <div class="section-3-mission ourvalues" data-aos='zoom-in-up' >
        <img class='mission-img' src={require('../../Assests/our-values.jpg')} alt="" />
        <div class="mission">
          <div class="keep-improving">
            <p>HELPING OUR CLIENTS</p>
            <h3>Our Values</h3>
          </div>
          <div class="line3">
            <hr />
          </div>
          <div class="values">
            <p>The values at the heart of ASCS culture are honesty, taking
              <span>ownership, doing team work and win the confidence of our </span>
              <span>Client / Business Partner. We seek, encourage, celebrate </span>
              <span>and reward these values because they are essential to the</span>
              <span>promises we have made to our Clients, Investors, </span>
              Suppliers and Employees.
            </p>
            <NavLink to='/aboutus' className='btn btn-warning Learn-more'>ReadMore</NavLink>
          </div>
        </div>
      </div>


      <div class="ourgallery-section">
        <div class="ourgallery-content">
          <h1>Our Gallery</h1>
          <div class="line">
            <hr />
          </div>
          <p>The Values at the heart of ASCS culture are honesty, taking ownership, doing team work and win the
            confidence of our Client / Business Partner</p>
        </div>
        <div class="images">
          <div class="images1">
            <img class="image-fluid" src={require('../../Assests/gallery-01.jpg')} alt="" />
            <img class="image-fluid" src={require("../../Assests/gallery-02.jpg")} alt="" />
          </div>
          <div class="images1">
            <img class="image-fluid" src={require("../../Assests/gallery-03.jpg")} alt="" />
            <img class="image-fluid" src={require("../../Assests/gallery-04.jpg")} alt="" />
          </div>
        </div>
        <NavLink to='/gallery' style={{ marginTop: "25px", padding: "6px 30px" }} className='btn btn-warning seemore '>See More</NavLink>

      </div>


      {/* <!-- //our clients say section --> */}

      <div class="client-heading">
        <h1>Our Clients Say</h1>
        <div class="line">
          <hr />
        </div>
      </div>
      <div class="ourclients" data-aos='flip-down'>

        <div class="client">
          <img src={require('../../Assests/client1.jpg')} alt="" />
          <h6> ‘‘Outstanding Work’’</h6>

          <div class="rating">
            <img src={require("../../Assests/stars.png")} alt="" /> &nbsp;&nbsp;
            <span>5 / 5</span>
          </div>
          <p>Action Supply Chain Solutions Pvt Ltd <br /> (ASCS), part of Action Group of <br /> Comapnies is among the
            fastest growing <br /> integrated supply chain solutions. <br /> Headquartered at Hyderabad, the <br /> inception
            of
            ASCS happened in 2017 <br /> promoted by Action Group</p>
          <p><b>Andra Kesari</b></p>
        </div>
        <div class="client">
          <img src={require("../../Assests/client 2.jpg")} alt="" />
          <h6> ‘‘Great’’</h6>

          <div class="rating">
            <img src={require("../../Assests/4star.png")} alt="" /> &nbsp;&nbsp;
            <span>4 / 5</span>
          </div>
          <p>Action Supply Chain Solutions Pvt Ltd <br /> (ASCS), part of Action Group of <br /> Comapnies is among the
            fastest growing <br /> integrated supply chain solutions. <br /> Headquartered at Hyderabad, the <br /> inception
            of
            ASCS happened in 2017 <br /> promoted by Action Group</p>
          <p><b>Acharya</b></p>
        </div>
        <div class="client">
          <img src={require("../../Assests/client 3.png")} alt="" />
          <h6> ‘‘Outstanding Work’’</h6>

          <div class="rating">
            <img src={require("../../Assests/stars.png")} alt="" /> &nbsp;&nbsp;
            <span>5 / 5</span>
          </div>
          <p>Action Supply Chain Solutions Pvt Ltd <br /> (ASCS), part of Action Group of <br /> Comapnies is among the
            fastest growing <br /> integrated supply chain solutions. <br /> Headquartered at Hyderabad, the <br /> inception
            of
            ASCS happened in 2017 <br /> promoted by Action Group</p>
          <p><b>Anna</b></p>
        </div>
      </div>

      <AscsFooter />
      <Footer />
      <BacktoTop/>
      </div>
      
    </div >
  )
}

export default Homepage