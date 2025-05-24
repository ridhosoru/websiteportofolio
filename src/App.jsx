import HomePage from "./HomePage/HomePage";
import NavbarPage from "./Navbar/NavbarPage";
import { useState } from "react";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App(){
  const[bgscreen,setBgscreen] = useState(false);
  
  return(
    <div className={bgscreen ? 'bg-black ':'bg-white'}>
      <Router>
        <div>
        <section id="NavbarPage"><NavbarPage setBgscreen={setBgscreen} bgscreen={bgscreen}/></section>
        <section id="Home"><HomePage bgscreen={bgscreen}/></section>
        <section id="Profile"><Profile bgscreen={bgscreen}/></section>
      </div>
      </Router>
    </div>
  )
}