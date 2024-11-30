import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login";
import About from "./pages/About";
import Legends from "./pages/Legends";
import LegendProfile from "./pages/LegendProfile";
import LearningLegendLogin from "./pages/LessonPage/LearningLegendLogin";
import LearningLegendSignUp from "./pages/LessonPage/LearningLegendSignUp";
import LearningHome from "./pages/LessonPage/LearningHome";
import LearningActivities from "./pages/LessonPage/LearningActivities"
import LearningBooks from "./pages/LessonPage/LearningBooks"
import LearningProfile from "./pages/LessonPage/LearningProfile"
import LearningStudents from "./pages/LessonPage/LearningStudents"
import LearningRecord from "./pages/LessonPage/LearningRecord";
import LearningStatistics from "./pages/LessonPage/LearningStatistics"

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

          <Route path="/learningHome" element={<LearningHome />} />
          <Route path="/learningStudents" element={<LearningStudents />} />
          <Route path="/learningBooks" element={<LearningBooks />} />
          <Route path="/learningActivities" element={<LearningActivities />} />
          <Route path="/learningProfile" element={<LearningProfile />} />
          <Route path="/learningRecords" element={<LearningRecord />} />
          <Route path="/learningStatistics" element={<LearningStatistics />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
