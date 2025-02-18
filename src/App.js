import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import PrivacyAndPolicy from "./PrivacyAndPolicy"
import TermsAndServices from "./TermsAndServices"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/privacy" element ={<PrivacyAndPolicy/>} />
        <Route path="/terms" element ={<TermsAndServices/>} />
      </Routes>
    </Router>
  );
}

export default App;