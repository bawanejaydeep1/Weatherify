import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import weather from "./images/Weatherify logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const phrases = [
    "Experience weather updates like never before with our comprehensive service!",
    "Stay ahead of the weather curve and plan your day with our accurate forecasts.",
    "Don't let unpredictable weather catch you off guard - get reliable updates here!",
    "Explore the world of weather with our detailed forecasts and stay informed always.",
    "Rain or shine, we've got you covered with the most accurate and up-to-date information.",
    "From sunny skies to stormy nights, our service keeps you informed on all weather fronts.",
    "Stay prepared for any weather eventuality with our reliable and timely forecasts.",
    
    "We're your daily source for all things weather - stay informed and stay safe!",
    "Plan your day with confidence, backed by our precise and trustworthy weather updates.",
    "Be in the know about all weather conditions - rely on us for accurate forecasts always.",
    "Weather insights for every occasion, helping you make the most of your day!",
    "Don't leave home unprepared - get the latest weather updates tailored just for you.",
    "Stay a step ahead of the weather with our timely and reliable forecasts at your disposal.",
    "Accurate weather updates, anytime you need them, wherever you are.",
    "Your weather companion, providing you with the information you need, when you need it.",
    "Forecasts you can rely on to plan your activities with confidence.",
    
    "Stay one step ahead of the weather with our comprehensive and reliable updates.",
    "Get the latest weather information tailored to your location, so you're always prepared.",
    "Rain or snow, we've got you covered with up-to-date and reliable forecasts.",
    "Whether it's sunny days or stormy nights, you'll always know what to expect with us by your side.",
    "Your go-to source for accurate and reliable weather information, ensuring you're always in the know.",
    "Stay weather-wise with us and make the most of every day, rain or shine!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={weather} className="logo" alt="logo" />
      </Link>

      <div className="burger" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
      
      <p>
        {isTyping ? (
          phrases[textIndex]
        ) : (
          <span>
            {phrases[textIndex]}
            <span className="typewriter-cursor">|</span>
          </span>
        )}
      </p>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>

          {global.ok ? (
              <li>
                <Link to="/logout">Log Out</Link>
              </li>
              ) : ( 
              <li>
                <Link to="/login">Login</Link>
              </li>
          )} 

        </ul>
      </div>
    </div>
  );
}

export default Navbar;

