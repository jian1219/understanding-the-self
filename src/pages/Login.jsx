import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import "../css/General.css";
import "../css/Login.css";

import logo_brain from "../images/logo brain.jpg";

function Login() {
  const [password, setPassword] = useState(""); // Password state
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate(); // React Router navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Check if password matches "tanduay"
    if (password.toLowerCase() === "tanduay") {
      navigate("/home"); // Navigate to the desired route on success
    } else {
      setError("Incorrect password. Please try again."); // Show error message
    }
  };

  return (
    <div>
      <div className="cellphone-screen-only">
        <div className="login-background">
          <div className="login-content">
            <div className="flex justify-center mt-[80px]">
              <img className="rounded-[200px] w-[100px]" src={logo_brain} alt="Logo" />
            </div>
            <div className="grid justify-center text-center">
              <h1 className="login-h1">UNDERSTANDING THE SELF</h1>
              <p className="login-power">powered by</p>
              <h2 className="login-h2">Tanduay Select</h2>
            </div>

            <div className="login-form">
              <h3 className="text-center mb-4 text-[17px] font-semibold text-slate-50">Login Here</h3>
              <form className="grid justify-center" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Fav Drinks"
                  className="login-input mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">
                  Enter
                </button>
              </form>
              {error && <p className="error-message text-red-500 mt-2">{error}</p>} {/* Display errors */}
            </div>
            <div className="footer">
              <p>For Concerns and Inquiries kindly message on</p>
              <h3>
                <a className="login-a" href="#">
                  Tanduay Select Page
                </a>
              </h3>
              <h4 className="login-line2">All rights reserved. Shiftnight C2 Agao | Powered by Tanduay Select</h4>
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

export default Login;
