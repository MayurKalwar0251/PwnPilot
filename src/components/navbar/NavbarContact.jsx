import "./nav.css";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Cancel from "../../assets/multiply.png";
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const NavbarContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //... rest of your code

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (item) => {
    if (activeDropdown === item) {
      setShowDropdown(!showDropdown);
    } else {
      setActiveDropdown(item);
      setShowDropdown(true);
    }
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
    setActiveDropdown(null);
  };

  const handleMouseLeaveItem = () => {
    handleDropdownClose();
  };

  const handleServices = () => {
    setShowServices(!showServices);
  };
  return (
    <div className="nav-con">
      <div className="contact">
        <div className="contact-container">
          <div className="left2">
            <p className="contact-heading">Follow On:</p>
            <ul>
              <li className="contact-item">
                <FaFacebookF className="contact-icon" />
              </li>
              <li className="contact-item">
                <FaInstagram className="contact-icon" />
              </li>
              <li className="contact-item">
                <FaLinkedin className="contact-icon" />
              </li>
            </ul>
          </div>

          <div className="r">
            <ul>
              <li>
                <IoIosCall className="contact-icon" />
                <p>For Sales</p>
                <p>+99999999</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>sales@gmail.com</p>
              </li>
              <li>
                <IoIosCall className="contact-icon" />
                <p>For HR</p>
                <p>+99999999</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>career@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav">
        <div
          className={`navbar-container ${scrolled ? "scrolled-navbar" : ""} ${
            isMobile ? "scrolled-navbar" : ""
          }`}
        >
          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>

            {!isOpen && (
              <div className="btn-ham">
                <MyCustomButton
                  name={"Get A Qoute"}
                  backgroundColor="black"
                  color="white"
                />
              </div>
            )}
            {!isOpen && (
              <button className="hamburger-button" onClick={toggleMenu}>
                &#9776; {/* This is the "☰" character for the hamburger icon */}
              </button>
            )}
            <div className={`items ${isOpen ? "open" : ""}`}>
              {isOpen && (
                <button className="cancel-button" onClick={toggleMenu}>
                  <img src={Cancel} alt="Cancel img" />
                </button>
              )}
              <Link to={"/"}>
                <div className="item">
                  <p>Home</p>
                </div>
              </Link>
              <Link to={"/services"}>
                <div
                  className="item"
                  onMouseEnter={handleServices}
                  onMouseLeave={handleServices}
                >
                  <p>Services</p>
                  {showServices && (
                    <div className="services-container">
                      <div className="services-grid">
                        <div className="services-card">
                          <h3 className="card-header">Security Assesment</h3>
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
                        <div className="services-card">
                          <h3 className="card-header">Security Consulting</h3>
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
                          </ul>
                        </div>
                        <div className="services-card">
                          <h3 className="card-header">
                            Security Compilance Services
                          </h3>
                          <ul>
                            <Link to={"/reg-comp-aud"}>
                              <li>Regulatory Compliance Audit</li>
                            </Link>
                            <Link to={"/sec-comp-aud"}>
                              <li>Security Compliance Audit</li>
                            </Link>
                          </ul>
                        </div>
                        <div className="services-card">
                          <h3 className="card-header">Advanced Services</h3>
                          <ul>
                            <Link to={"/red-team"}>
                              <li>Red Teaming</li>
                            </Link>
                            <Link to={"/dev-sec-ops"}>
                              <li>DevSecOps</li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
              <Link to={"/products"}>
                <div
                  className="item"
                  onMouseEnter={() => handleDropdownToggle("Products")}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  <p>Products</p>
                  {showDropdown && activeDropdown === "Products" && (
                    <div className="dropdown">
                      <ul>
                        <Link to={"/products"}>
                          <li>Squad1</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </Link>

              <Link to={"/industries"}>
                <div
                  className="item"
                  onMouseEnter={() => handleDropdownToggle("Industries")}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  <p>Industries</p>
                  {showDropdown && activeDropdown === "Industries" && (
                    <div className="dropdown">
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
                  )}
                </div>
              </Link>

              <Link to={"/company"}>
                <div
                  className="item"
                  onMouseEnter={() => handleDropdownToggle("Company")}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  <p>Company</p>
                  {showDropdown && activeDropdown === "Company" && (
                    <div className="dropdown">
                      <ul>
                        <Link to={"/about"}>
                          <li>About Us</li>
                        </Link>
                        <Link to={"/leadership"}>
                          <li>Leadership</li>
                        </Link>
                        <Link to={"cert-in"}>
                          <li>Cert-IN</li>
                        </Link>
                        <Link to={"key25"}>
                          <li>Key-25sec</li>
                        </Link>
                        <Link to={"/career"}>
                          <li>Careers</li>
                        </Link>
                        <Link to={"/contact"}>
                          <li>Contact Us</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </Link>

              {!isOpen && (
                <MyCustomButton
                  name={"Get A Qoute"}
                  backgroundColor="black"
                  color="white"
                />
              )}

              {isOpen && (
                <div className="container">
                  <div className="contact">
                    <h4>Contact Info</h4>

                    <ul>
                      <li>For Sales</li>
                      <li>For HR</li>
                      <li>sales@gmail.com</li>
                      <li>career@gmail.com</li>
                    </ul>
                  </div>

                  <div className="follow">
                    <h4>Follow On</h4>

                    <ul>
                      <li>
                        <FaFacebookF />
                      </li>
                      <li>
                        <FaInstagram />
                      </li>
                      <li>
                        <FaLinkedin />
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContact;