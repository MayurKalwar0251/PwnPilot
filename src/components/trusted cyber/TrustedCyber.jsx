import React from "react";
import "./trustedcyber.css";
import backgroundImage from "../../assets/planning-success-bg.png"; // Update the path accordingly
import MyCustomButton from "../button/CommonButton";

const TrustedCyber = () => {
  return (
    <div
      className="trusted-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="trusted-content">
          <div className="trusted-left">
            <p className="trusted-head">
              Trusted cybersecurity <br /> experts delivering <br /> dependable
              solutions.
            </p>
            <p className="trusted-txt">
              Count on our experienced team for reliable cybersecurity
              solutions. We're dedicated to safeguarding your digital assets
              with professionalism and expertise, ensuring peace of mind for
              your business.
            </p>
          </div>
          <div className="trusted-right">
            <MyCustomButton name={"View All Services"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCyber;
