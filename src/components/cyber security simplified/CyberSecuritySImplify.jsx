import React from "react";
import "./cybersecurity.css";

import Company1 from "../../assets/our-company-1.png";
import Company2 from "../../assets/our-company-2.png";
import { FaStar } from "react-icons/fa6";
import CountUp from "react-countup";

const CyberSecuritySImplify = () => {
  return (
    <div className="cyber-container">
      <div className="cyber-left">
        <div>
          <div className="left-up">
            <img src={Company1} alt="Company" />
          </div>
          <div className="left-down">
            <p className="no">
              <CountUp
                enableScrollSpy={true}
                scrollSpyOnce={true}
                start={0}
                end={23}
                duration={1}
                className="count-txt"
              />
              +
            </p>
            <p>Years Experience</p>
          </div>
        </div>
        <div className="left-right">
          <img src={Company2} alt="Company" />
        </div>
      </div>
      <div className="cyber-right">
        <div className="head">Know Our Company</div>
        <h3>Cyber Security Simplified</h3>
        <p className="txt">
          PWNPilot Networks Private Limited is your trusted partner for
          simplified cybersecurity solutions. With a focus on clarity and
          effectiveness, we streamline complex security measures to protect your
          digital assets. Our team of experts offers comprehensive services,
          from risk assessments to incident response, ensuring your organization
          stays resilient in the face of evolving threats. At PWNPilot, we
          prioritize simplicity without compromising on security, empowering you
          to navigate the digital landscape with confidence and peace of mind.
        </p>

        <div className="btns">
          <div className="cyber-btn">Success Project</div>
          <div className="cyber-btn">Satisfied Customers</div>
        </div>

        <div className="detail">
          <div className="det">
            <div className="info">
              <p className="per">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={99}
                  duration={1}
                  className="count-no"
                />
                %
              </p>
              <p>
                Boost your cybersecurity success with our established history of
                delivering top-tier projects.
              </p>
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
          </div>
          <div className="det">
            <div className="info">
              <p className="per">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={100}
                  duration={1}
                  className="count-no"
                />
                %
              </p>
              <p>
                Our satisfied customers stand as a testament to our commitment
                to fortifying cybersecurity.
              </p>
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecuritySImplify;
