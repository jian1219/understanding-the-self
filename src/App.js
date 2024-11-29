import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login";
import About from "./pages/About";
import Legends from "./pages/Legends";
import LegendProfile from "./pages/LegendProfile";
import LearningLegendLogin from "./pages/LessonPage/LearningLegendLogin";
import LearningLegendSignUp from "./pages/LessonPage/LearningLegendSignUp";

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
          <Route path="/legend/:id" element={<LegendProfile />} />
          <Route path="/learningLogin" element={<LearningLegendLogin />} />
          <Route path="/learningSignUp" element={<LearningLegendSignUp />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
