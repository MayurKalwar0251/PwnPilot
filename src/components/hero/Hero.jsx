import React from "react";
import BannerHome from "../../assets/banner-home.png";
import PatternHome from "../../assets/pattern.svg";
import StartHome from "../../assets/banner-start.svg";
import { ReactSVG } from "react-svg";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="left">
        <p className="name">
          Welcome To <span>PWNPilot Networks Private Limited</span>
        </p>
        <h2 className="heading">Cybersecurity Simplified</h2>
        <p className="txt">
          Enhance your security posture through strategic cybersecurity
          planning.
        </p>
        <div type="button">Read More &nbsp; &gt; </div>
      </div>
      <div className="right">
        <img src={BannerHome} alt="Image" />
      </div>

      <ReactSVG src={PatternHome} className="pattern" />
      <ReactSVG src={StartHome} className="start" />
    </div>
  );
};

export default Hero;
