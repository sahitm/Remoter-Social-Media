import React from 'react'
import LandingPage from './Authentication/LandingPage'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from './Authentication/UserDetails/Login';
import Home from './Dasboard/Home';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>    
    </div>
  )
}

export default App
