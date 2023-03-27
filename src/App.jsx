import React from "react";
import {Route, Routes} from "react-router-dom"; 
import Home from "./pages/HomePage";
import Project from "./pages/ProjectPage";
import Resume from "./pages/ResumePage";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/projects' element={<Project />}/>
      </Routes>
  );
}

export default App;
