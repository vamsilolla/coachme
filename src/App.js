import Landing from "./components/landing";
import Coach from "./components/coach";
import Tutor from "./components/tutor";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<Landing /> } />
          <Route path="/coach" element={<Coach />} />
          <Route path="/tutor" element={<Tutor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
