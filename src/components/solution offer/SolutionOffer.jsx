import React from "react";
import "./solution.css";

const SolutionOffer = () => {
  return (
    <div className="solution-container">
      <div className="solution-left">
        <p className="solution-title">Advanced Services</p>
        <p className="solution-head">
          Specialized Cyber Security Solutions Offered
        </p>
      </div>
      <div className="solution-right">
        <div className="solution-txt">
          Our specialized cyber security solutions are crafted to tackle the
          distinct challenges businesses encounter in securing their digital
          assets. From thorough risk assessments to proactive threat detection
          and incident response, we offer a range of services covering network
          security, endpoint protection, cloud security, and data privacy. With
          a focus on innovation and compliance, we deliver cutting-edge
          solutions that align with industry standards, ensuring robust
          protection for our clients' critical infrastructure and sensitive
          data.
        </div>
        <div className="solution-btn">View All Services &gt; </div>
      </div>
    </div>
  );
};

export default SolutionOffer;
