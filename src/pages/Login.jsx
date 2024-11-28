import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { supabase } from "../config/supabaseClient"; // Supabase client
import "../css/General.css";
import "../css/Login.css";

import logo_brain from "../images/logo brain.jpg";

function Login() {
  const [username, setUsername] = useState(""); // Username state
  const [password, setPassword] = useState(""); // Password state
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate(); // React Router navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      // Query the Supabase 'users' table for matching username and password
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .eq("password", password)
        .single(); // Ensure it fetches only one row

      if (error) {
        throw new Error("Invalid username or password");
      }

      if (data) {
        console.log("Login successful:", data);
        navigate("/home"); // Redirect to the home page
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      console.error("Login failed:", err.message);
      setError("Invalid username or password.");
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
                  placeholder="Username"
                  className="login-input mb-4"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">
                  Login
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
