import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import MyCustomButton from "../button/CommonButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="top-txt">
          Schedule A Consultation And Take <br />
          Proactive Steps To Protect Your
          <br />
          Digital Assets.
        </p>
        <MyCustomButton name={"Lets Work Together"} backgroundColor="black" />
      </div>
      <div className="footer-container">
        <div className="footer-first">
          <div className="footer-first-left">
            <div className="footer-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <p className="txt">
              We excel in information security, delivering expert services,
              deploying solutions, and providing training. Our dedicated team
              evaluates your IT infrastructure's well-being, addresses high-risk
              areas, and protects your vital data from exploitation.
            </p>
          </div>
          <div className="footer-first-right">
            <div className="right-item">
              <p className="footer-title">Our Mission</p>
              <p className="footer-txt">
                To provide quality information security services and build great
                work environment
              </p>
            </div>
            <div className="right-item">
              <p className="footer-title">Our Vision</p>
              <p className="footer-txt">
                To be synonm of Cyber Security Services
              </p>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="middle-grid">
            <div className="footer-section">
              <h3>Working Time</h3>
              <div className="working-card">
                <p className="card-txt">Mon - Sat / 09am : 07pm</p>
                <p className="card-txt">Mon - Sat / 09am : 07pm</p>
                <p className="card-txt">Sunday Close</p>
              </div>
            </div>
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul>
                <li>Web Application Security</li>
                <li>SAST and DAST Scanning</li>
                <li>API Security</li>
                <li>Mobile Application</li>
                <li>Penetration Testing</li>
                <li>Vulnerability Assessment</li>
                <li>Wifi Security</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul>
                <li>Regulatory Compliance Implementation</li>
                <li>Security Compliance Implementation</li>
                <li>Policy Procedure Designing</li>
                <li>NIST Guidelines</li>
                <li>Risk Assessment and Treatment</li>
                <li>Regulatory Compliance Audit</li>
                <li>Security Compliance Audit</li>
                <li>Red Teaming</li>
                <li>DevSecOps</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Industries We Serve</h3>
              <ul>
                <li>BFSI</li>
                <li>Manufacturing</li>
                <li>Pharmaceutical</li>
                <li>Technology</li>
                <li>Government</li>
                <li>Education</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-lower">
          <div className="lower-grid">
            <div className="footer-section-lower">
              <h3>Dombivli Office:</h3>
              <p>
                606 - 608, B-Wing, 6th Floor,
                <br />
                Navare Plaza, Station Rd,
                <br />
                Ramnagar, Dombivli East
                <br />
                421201
              </p>
            </div>
            <div className="footer-section-lower">
              <h3>Malad Office:</h3>
              <p>
                Quantum Tower, Kalpataru
                <br />
                Plaza, 9th floor, 901, Chincholi <br /> Bunder Road, Nadiyawala
                <br />
                Colony 2, Malad West <br /> Mumbai - 400 064
              </p>
            </div>
            <div className="footer-section-lower">
              <h3>Call Us Toll Free:</h3>
              <p>For Sales: +91 91 670 30335</p>
              <p>For HR: +91 90 046 04570</p>
            </div>
            <div className="footer-section-lower">
              <h3>Email Us:</h3>
              <p>sales@talakunchi.com</p>
              <p>careers@talakunchi.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 | All Rights Reserved by</p>
        <h3 className="company-name">PWNPilot Security Private Limited</h3>
      </div>
    </footer>
  );
};

export default Footer;
