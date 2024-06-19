import React from "react";
import Video from "../../assets/1.mp4";
import "./hero2.css";
import MyCustomButton from "../button/CommonButton";

const Hero2 = () => {
  return (
    <div className="hero-container">
      <video
        className="video"
        src={Video}
        autoPlay
        muted
        loop
        disablePictureInPicture
      />

      <div className="hero-left">
        <div className="hero-head">
          Welcome To <span className="span">PwnPilot Security</span>
        </div>
        <div className="hero-title">
          Cybersecurity <br /> Simplified
        </div>
        <div className="hero-txt">
          Enhance your security posture through strategic
          <br /> cybersecurity planning.
        </div>

        <MyCustomButton
          name={"Read More"}
          backgroundColor="var(--primary-color)"
          color="white"
          onClicked={() => {}}
        />
      </div>
    </div>
  );
};

export default Hero2;
