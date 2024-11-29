import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../../css/General.css";
import "../../css/Home.css";

import logo_brain from "../../images/logo brain.jpg";
import right_arrow from "../../icons/right-arrow.png";

function Header() {

    
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
      setMenuOpen(false);
    };

    const handleNavigation = (route) => {
        navigate(route); // Navigate to the specified route
        closeMenu(); // Close the menu after navigation
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
                <li><button onClick={() => handleNavigation('/home')}>Home</button></li>
                <li><button onClick={() => handleNavigation('/about')}>About</button></li>
                <li><button onClick={() => handleNavigation('/legends')}>Legends</button></li>
                <li><button onClick={() => handleNavigation('/drinks')}>Drinks</button></li>
                <li><button onClick={() => handleNavigation('/spots')}>Spots</button></li>
                <li><button onClick={() => handleNavigation('/learningLogin')}>Learning legend</button></li>
                </ul>
            </div>

        </div>





        <div className='not-cellphone-screen'>
            <h1>gamita imong cp </h1>
        </div>
    </div>
  )
}

export default Header
