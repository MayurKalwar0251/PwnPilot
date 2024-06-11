import React from "react";
import "./evolution-of-cyber.css";
import backgroundImage from "../../assets/can-help-background.png"; // Update the path accordingly
import Icon from "../../assets/cancel.png";
import CallIcon from "../../assets/phone.png";
import MessageIcon from "../../assets/message.png";
import MyCustomButton from "../button/CommonButton.jsx";

const EvolutionOfCyber = () => {
  return (
    <div
      className="evolution-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="evolution-overlay">
        <div className="evolution-content">
          <div className="evolution-left">
            <p className="evolution-head">
              Experience The Evolution Of Your Cybersecurity
            </p>
            <p className="evolution-txt">
              Protect your organization from cyber threats and secure your
              future with TalaKunchi Networks Private Limited's cybersecurity
              solutions for the your sector. Contact us today to learn more
              about our services and schedule a consultation with one of our
              cybersecurity experts.
            </p>
            <div className="evolution-btns">
              <div className="evolution-btn">
                <div className="evolution-icon">
                  <img src={CallIcon} alt="" srcset="" />
                </div>
                <div className="evolution-call">
                  Call Us Today
                  <br /> +91921921212
                </div>
              </div>
              <div className="evolution-btn">
                <div className="evolution-icon">
                  <img src={MessageIcon} alt="" />
                </div>
                <div className="evolution-call">
                  Email Drop Us <br /> sales@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="evolution-right">
            <div className="form">
              <div className="form-head">GET IN TOUCH</div>
              <div className="form-title">Free Consultation</div>
              <div className="form-inputs">
                <input type="text" className="input" placeholder="Your Name" />
                <input
                  type="email"
                  className="input"
                  placeholder="Your Email"
                />
                <input type="text" className="input" placeholder="Subject" />
                <textarea
                  rows={4}
                  type="text"
                  className="input"
                  placeholder="Your Message"
                />
                <MyCustomButton name={"Free Consultancy"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionOfCyber;
