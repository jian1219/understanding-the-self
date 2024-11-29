import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../css/General.css";
import "../css/Home.css";
import Warning from './components/Warning';

import Footer from './components/Footer';
import Header from './components/Header';

import utspic1 from "../images/uts 1.jpg";
import tora1 from "../images/tora 1.jpg";

function Home() {
 
 

  return (
    <div className='home-background'>
      <div className='cellphone-screen-only'>
        <div className=''>
          <Header />
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
          <div className='child-content '>
            <img src={tora1} alt="" />
            <p className='mt-2'>Life is the existence and experience of living beings, encompassing the physical, emotional, 
              and spiritual aspects of their journey. It begins with the spark of creation, whether through biological 
              processes or other means, and is characterized by growth, interaction, and change. Life is a continuous 
              cycle, from birth to death, filled with moments that shape individual identity and purpose.  

              At its core, life is a blend of challenges and opportunities, offering countless lessons and experiences. 
              It is a journey of discovery—of oneself, others, and the world. Each moment carries the potential for 
              growth, whether through success, failure, joy, or sorrow. Life’s meaning often varies for each individual, 
              shaped by personal beliefs, relationships, and experiences.  

              Ultimately, life is both fragile and resilient, constantly adapting and evolving. It is a celebration 
              of existence and the connections we build with others and our surroundings. Through its uncertainties 
              and certainties, life invites us to find purpose, cherish the present, and contribute to something 
              greater than ourselves.  </p>
          </div>
        </div>
        <div className='mt-1'>
          <Warning />
        </div>

        <div>
          <Footer />
        </div>
      </div>

      <div className='not-cellphone-screen'>
        <h1>gamita imong cp </h1>
      </div>
    </div>
  );
}

export default Home;
