import React, { useState } from 'react';
import "../css/General.css"
import "../css/Home.css"

import logo_brain from "../images/logo brain.jpg"
import right_arrow from "../icons/right-arrow.png"

import utspic1 from "../images/uts 1.jpg"

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


            {/* Content */}
          <div className='parent-content'>
            <div>
              <img className='w-[100%]' src={utspic1} alt="" />
            </div>
            <div className='child-content'>
              <p>Understanding the self is the ability to gain insight into one's own behaviors, attitudes, 
                strengths, and weaknesses. It's a dynamic process that's shaped by personal experiences, 
                social interactions, cultural influences, and individual reflection.</p>
              <h4 className='mt-2'>Some aspects of understanding the self include:</h4>
              <ul>
                <li>Self-concept: The overall idea of who we think we are. It's developed through interactions with 
                  others and social comparison. </li>
                <li>Self-esteem: Based on the evaluations and judgments we make about our self-concept. </li>
                <li>Self-awareness: Having self-awareness can help us become better decision-makers, 
                  communicate more clearly, and understand things from multiple perspectives. </li>
              </ul>
              <h4 className='mt-2'>Some benefits of understanding the self include:</h4>
              <ul>
                <li>Being able to influence outcomes</li>
                <li>Having more self-confidence</li>
                <li>Being able to communicate with clarity and intention</li>
                <li>Being able to understand things from multiple perspectives</li>
                <li>Being able to free ourselves from assumptions and biases </li>
              </ul>
            </div>

          </div>
          
      </div>










      <div className='not-cellphone-screen'>
          <h1>gamita imong cp </h1>
      </div>
  </div>
  )
}

export default Home
