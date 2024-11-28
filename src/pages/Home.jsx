import React, { useState } from 'react';
import "../css/General.css"
import "../css/Home.css"

import logo_brain from "../images/logo brain.jpg"
import right_arrow from "../icons/right-arrow.png"

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='home-background'>
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
              <img className='icon-arrow' src={right_arrow} alt="" />
              <button className='' onClick={closeMenu}>Back</button>
            </div>
            <ul>
              <li><a href="#option1">Home</a></li>
              <li><a href="#option2">About</a></li>
              <li><a href="#option3">Members</a></li>
              <li><a href="#option3">Drinks</a></li>
              <li><a href="#option3">Spots</a></li>

            </ul>
          </div>
          
      </div>










      <div className='not-cellphone-screen'>
          <h1>gamita imong cp </h1>
      </div>
  </div>
  )
}

export default Home
