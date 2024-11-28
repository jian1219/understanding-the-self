import React, { useState } from 'react'

import "../css/About.css"

import logo_brain from "../images/logo brain.jpg"
import right_arrow from "../icons/right-arrow.png"
import alcohol_drinks from "../images/alcohol-drinks.jpg"
import complete_team from "../images/complete team.jpg"
import team3 from "../images/team 3.jpg"

import Footer from './Footer'

function About() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
      setMenuOpen(false);
    };
  return (
    <div>
      
        <div className='cellphone-screen-only'>
            <div className='header'>
                <div className='flex items-center'>
                <img src={logo_brain} alt="" />
                <h1 className='text-[17px]'>Understanding the Self</h1>
                </div>
                <div>
                <button onClick={toggleMenu}>Menu</button>
                </div>
            </div>

            {/* Sliding Menu */}
            <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                <div className='back-button'>
                
                <button className='' onClick={closeMenu}> <img className='icon-arrow' src={right_arrow} alt="" /></button>
                </div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#option3">Legends</a></li>
                    <li><a href="#option3">Drinks</a></li>
                    <li><a href="#option3">Spots</a></li>
                </ul>
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
