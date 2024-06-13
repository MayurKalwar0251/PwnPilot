import React from "react";
import "./Footer.css";
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

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
      <div className="divider"></div>
      <div className="footer-container">
        <div className="footer-first">
          <div className="footer-first-left">
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
        <div className="divider"></div>

        <div className="footer-middle" data-aos="fade-up">
          <div className="middle-grid" data-aos="fade-up">
            <div className="footer-section" data-aos="fade-up">
              <h3>Working Time</h3>
              <div className="working-card">
                <p className="card-txt"> 10am : 10pm IST</p>
                <p className="card-txt">All 7 days</p>
              </div>
            </div>
            <div className="footer-section" data-aos="fade-up">
              <h3>Our Services</h3>
              <ul>
                <Link to={"/web-app-sec"}>
                  <li>Web Application Security</li>
                </Link>
                <Link to={"/sast-dast"}>
                  <li>SAST and DAST Scanning</li>
                </Link>
                <Link to={"/api-sec"}>
                  <li>API Security</li>
                </Link>
                <Link to={"/mob-app"}>
                  <li>Mobile Application</li>
                </Link>
                <Link to={"/penetrat-test"}>
                  <li>Penetration Testing</li>
                </Link>
                <Link to={"/vulner-asses"}>
                  <li>Vulnerability Assessment</li>
                </Link>
                <Link to={"/wifi-sec"}>
                  <li>Wifi Security</li>
                </Link>
              </ul>
            </div>
            <div className="footer-section" data-aos="fade-up">
              <h3>Our Services</h3>
              <ul>
                <Link to={"/reg-comp-imp"}>
                  <li>Regulatory Compliance Implementation</li>
                </Link>
                <Link to={"/sec-comp-imp"}>
                  <li>Security Compliance Implementation</li>
                </Link>
                <Link to={"/pol-proc-des"}>
                  <li>Policy Procedure Designing</li>
                </Link>
                <Link to={"/nist-gui"}>
                  <li>NIST Guidelines</li>
                </Link>
                <Link to={"/risk-ass"}>
                  <li>Risk Assessment and Treatment</li>
                </Link>
                <Link to={"/reg-comp-aud"}>
                  <li>Regulatory Compliance Audit</li>
                </Link>
                <Link to={"/sec-comp-aud"}>
                  <li>Security Compliance Audit</li>
                </Link>
                <Link to={"/red-team"}>
                  <li>Red Teaming</li>
                </Link>
                <Link to={"/dev-sec-ops"}>
                  <li>DevSecOps</li>
                </Link>
              </ul>
            </div>
            <div className="footer-section" data-aos="fade-up">
              <h3>Industries We Serve</h3>
              <ul>
                <Link to={"/bfsi"}>
                  <li>BFSI</li>
                </Link>
                <Link to={"/manu"}>
                  <li>Manufacturing</li>
                </Link>
                <Link to={"/pharma"}>
                  <li>Pharmaceutical</li>
                </Link>
                <Link to={"/tech"}>
                  <li>Technology</li>
                </Link>
                <Link to={"/gov"}>
                  <li>Government</li>
                </Link>
                <Link to={"/edu"}>
                  <li>Education</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="footer-lower">
          <div className="lower-grid" data-aos="fade-up">
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Dombivli Office:</h3>
              <p>
                Mayur Vihar
                <br />
                New Delhi
                <br />
                Delhi
                <br />
                110091
              </p>
            </div>
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Malad Office:</h3>
              <p>
                Quantum Tower, Kalpataru
                <br />
                Plaza, 9th floor, 901, Chincholi <br /> Bunder Road, Nadiyawala
                <br />
                Colony 2, Malad West <br /> Mumbai - 400 064
              </p>
            </div>
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Call Us Toll Free:</h3>
              <p>For Sales: +91 90158 11818 </p>
              <p>For HR: +91 73982 43449 </p>
            </div>
            <div className="footer-section-lower" data-aos="fade-up">
              <h3>Email Us:</h3>
              <p>info@pwnpilot.com </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-bottom">
        <div className="bottom-left">
          <p>© 2024 | All Rights Reserved by</p>
          <p className="company-name">PWNPilot Security Private Limited</p>
        </div>

        <div className="bottom-right">Created By @name</div>
      </div>
    </footer>
  );
};

export default Footer;
