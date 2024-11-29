import React from 'react'
import "../css/Welcome.css"


import { useNavigate } from 'react-router-dom';

import logo from "../images/logo.jpg"

function Welcome() {

    const navigate = useNavigate();
    const handleContinue = () => {
        navigate('/login'); // Navigate to '/another-page'
    };



  return (

    <div className='background'>
       <div className='cellphone-screen-only'>
            <div className='background'>
                <div className='text-center items-center'>
                    <div>
                        <img className='logo' src={logo} alt="" />
                        <h1 className='pt-2 font-semibold'>Understanding the Self</h1>

                        <button className='welcome-button' onClick={handleContinue}>
                            Continue
                        </button>

                        <div className='reminder'>
                            <h1>GAMITA IMONG CP FOR BEST EXPERIECE</h1>
                            <p className='text-[8px]'>powered by</p>
                            <h2 className='text-[11px]'>Tanduay SELECT</h2>
                        </div>
                    </div>
                
                </div>
               
            </div>
       </div>










       <div className='not-cellphone-screen'>
            <h1>gamita imong cp </h1>
       </div>
    </div>
    
  )
}

export default Welcome
