import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login";
import About from "./pages/About";
import Legends from "./pages/Legends";

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/legends" element={<Legends />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
