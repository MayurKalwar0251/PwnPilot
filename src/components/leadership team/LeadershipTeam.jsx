import React from "react";
import "./leadership-team.css";
import Founder1 from "../../assets/founder1.webp";
import Founder2 from "../../assets/founder2.webp";
import Founder3 from "../../assets/founder3.webp";

const LeadershipTeam = () => {
  return (
    <div className="leader-container">
      <div className="leader-inner">
        <div className="leader-head"> OUR LEADERSHIP</div>
        <div className="leader-title">Leadership Team</div>

        <div className="leader-grid">
          <div className="leader-leader-card">
            <div className="leader-card-up">
              <img src={Founder1} alt="Founder Image" srcset="" />
              <div className="leader-card-overlay"></div>
            </div>
            <div className="leader-card-down">
              <p className="name">Mr. Vishal Sunil Shah</p>
              <p className="role">Co-Founder & Chief Executive Officer</p>
            </div>
          </div>
          <div className="leader-leader-card">
            <div className="leader-card-up">
              <img src={Founder2} alt="Founder Image" srcset="" />
              <div className="leader-card-overlay"></div>
            </div>
            <div className="leader-card-down">
              <p className="name">Mr. Rahul Sunil Gala</p>
              <p className="role">Co-Founder & Chief Technology Officer</p>
            </div>
          </div>
          <div className="leader-leader-card">
            <div className="leader-card-up">
              <img src={Founder3} alt="Founder Image" srcset="" />
              <div className="leader-card-overlay"></div>
            </div>
            <div className="leader-card-down">
              <p className="name">Mr. Sujal Dilip Shah</p>
              <p className="role">Co-Founder & Chief Operating Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
