import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { supabase } from '../../config/supabaseClient';

import "../LessonPage/LessonGeneral.css";

import logo_brain from "../../images/logo brain.jpg";

function LearningLegendSignUp() {

    const navigate = useNavigate(); // React Router navigation

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        age: '',
        address: '',
        name: '',
        lastname: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validate inputs (basic example)
        if (!formData.username || !formData.password || !formData.name || !formData.lastname) {
        setError('Please fill in all required fields.');
        return;
        }

        try {
        // Insert data into the `users` table
        const { data, error } = await supabase.from('users').insert([formData]);

        if (error) throw error;

        setSuccess('User successfully registered!');
        setFormData({ username: '', password: '', age: '', address: '', name: '', lastname: '' }); // Reset form
        navigate("/learningLogin")
        } catch (err) {
        setError(err.message || 'An error occurred while registering.');
        }
    };



  return (
    <div>
      <div className="cellphone-screen-only">
        <div className="learning-background">
          <div className="learning-content">
            <div className="flex justify-center mt-[50px]">
              <img className="rounded-[200px] w-[100px]" src={logo_brain} alt="Logo" />
            </div>
            <div className="grid justify-center text-center">
              <h1 className="learning-h1">UNDERSTANDING THE SELF</h1>
              <h2 className="learning-h2">Learning the legends</h2>
            </div>

            <div className='flex justify-center'>
              <form onSubmit={handleSubmit} className="grid signup_form">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="SignUp-input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="SignUp-input"
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="SignUp-input"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="SignUp-input"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="SignUp-input"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="SignUp-input"
                />
                <button type="submit" className="signUp-button">
                  Sign Up
                </button>
              </form>
              {error && <p className="error-message text-red-500 mt-2">{error}</p>}
              {success && <p className="success-message text-green-500 mt-2">{success}</p>}
            </div>

            <div className="footer">
              <p className='text-[12px]'>For Concerns and Inquiries kindly message on</p>
              <h3>
                <a className="learning-a" href="#">
                  Tanduay Select Page
                </a>
              </h3>
              <h4 className="learning-line2">All rights reserved. Shiftnight C2 Agao | Powered by Tanduay Select</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="not-cellphone-screen">
        <h1>Gamita imong CP</h1>
      </div>
    </div>
  );
}

export default LearningLegendSignUp;
