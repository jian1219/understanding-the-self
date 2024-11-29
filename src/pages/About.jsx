import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import "../css/About.css"
import Header from './components/Header';


import alcohol_drinks from "../images/alcohol-drinks.jpg"
import complete_team from "../images/complete team.jpg"
import team3 from "../images/team 3.jpg"

import Footer from './components/Footer'

function About() {

  return (
    <div>
      
        <div className='cellphone-screen-only'>

            <div>
                <Header />
            </div>

            <div className='about-content'>
                <img src={alcohol_drinks} alt="" />
                <h1 className='text-center mt-10'>ABOUT</h1>
                <p>"This app is designed purely for entertainment purposes, providing a fun and engaging way to pass the time."</p>

                <img className='about-complete-team' src={complete_team} alt="" />
                <img className='about-complete-team' src={team3} alt="" />
                <p className='mt-2 mb-3'>Mga PALAHUBOG</p>
            </div>

            <div>
                <Footer />
            </div>

        </div>





        <div className='not-cellphone-screen'>
            <h1>gamita imong cp </h1>
        </div>
    </div>
  )
}

export default About
