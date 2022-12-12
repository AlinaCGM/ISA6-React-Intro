import React from "react";
import "../App.css";
import companyLogo from "../images/logo.png";

function Hero() {
  return (
    <div className="hero-container">
      {/* navbar */}
      <div className="navbar-container">
        <ul className="navbar-ul">
          <li>BUSINESS TYPES</li>
          <li>PRODUCTS</li>
        </ul>
        <div className="logo">
          <img className="image-logo" src={companyLogo} alt="" />
        </div>
        <div className="login">
          <span className="navbar-login">LOG IN</span>
        </div>
      </div>
      {/* hero */}
      <div className="hero-main">
        <div className="hero-title">
          <h5>SQUARE CAPITAL</h5>
          <h2>Simple access to funds for growing your business</h2>
        </div>
        <div className="hero-image">
          {/* <img className="image-hero" src={laptop} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
