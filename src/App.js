import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import PrivacyAndPolicy from "./PrivacyAndPolicy"
import TermsAndServices from "./TermsAndServices"

function ValidationFile() {
  return (
    <div style={{whiteSpace: 'pre-wrap'}}>
      tiktok-developers-site-verification=MuSMrP7vRkGFNKZLKUaxVzOm3jI2sqIm
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ /" element ={<Home/>} />
        <Route path="/privacy/" element ={<PrivacyAndPolicy/>} />
        <Route path="/terms/" element ={<TermsAndServices/>} />
      </Routes>
    </Router>
  );
}

export default App;