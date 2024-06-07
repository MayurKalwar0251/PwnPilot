import React from "react";
import "./collaborating.css";
import Checkmark from "../../assets/checkmarx-logo-2.webp";

const CollaboratingClosely = () => {
  return (
    <div className="collab-container">
      <div className="collab-parent">
        <div>CYBER SECURITY SOLUTION PARTNERS</div>
        <div className="collab-head">
          <p className="collab-head-left">
            Collaborating Closely on Cutting-Edge
          </p>
          <p className="collab-head-right">CyberSecurity Solutions</p>
        </div>

        <div className="collab-card">
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
          <div className="card">
            <img src={Checkmark} alt="Checkmark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratingClosely;
