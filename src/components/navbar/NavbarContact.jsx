import "./nav.css";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import "./navbar2.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Discord from "../../assets/discord.png";
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
  const [showInnerServices, setShowInnerServices] = useState("");

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
  const handleInnerServices = (ele) => {
    setShowInnerServices(ele);
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
              <li className="contact-item">
                <FaDiscord className="contact-icon" />
              </li>
            </ul>
          </div>

          <div className="r">
            <ul>
              <li>
                <IoIosCall className="contact-icon" />
                <p>For Sales</p>
                <p>+91 90158 11818</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>info@pwnpilot.com</p>
              </li>
              <li>
                <IoIosCall className="contact-icon" />
                <p>For Enquiry</p>
                <p>+91 7398243449</p>
              </li>
              <li>
                <AiOutlineMail className="contact-icon" />
                <p>pwnpilot@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav">
        <div
          className={`navbar-container ${scrolled ? "scrolled-navbar" : ""} ${
            isMobile ? "scrolled-navbar" : ""
          }
           ${showServices ? "dark-navbar" : ""}  
          `}
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
                          <h3 className="card-header">
                            Vulnerability Assessment &amp; Penetration Testing
                          </h3>
                          <ul className="outer-ul">
                            <div
                              onMouseEnter={() => {
                                handleInnerServices("vul");
                              }}
                              onMouseLeave={() => {
                                handleInnerServices("");
                              }}
                              className="inner-div"
                            >
                              <li className="inner-item">
                                Vulnerability Assessment
                              </li>

                              {showInnerServices == "vul" && (
                                <ul className="inner-ul">
                                  <li>Network Vulnerability Assessment</li>
                                  <li>Host-based Vulnerability Assessment</li>
                                  <li>Application Vulnerability Assessmen</li>
                                  <li>Database Vulnerability Assessment</li>
                                </ul>
                              )}
                            </div>
                            <div
                              onMouseEnter={() => {
                                handleInnerServices("penet");
                              }}
                              onMouseLeave={() => {
                                handleInnerServices("");
                              }}
                              className="inner-div"
                            >
                              <li className="inner-item">
                                Penetration Testing
                              </li>
                              {showInnerServices == "penet" && (
                                <ul>
                                  <li>Network Penetration Testing</li>
                                  <li>Web Application Penetration Testing</li>
                                  <li>
                                    Mobile Application Penetration Testing
                                  </li>
                                  <li>Wireless Network Penetration Testing</li>
                                  <li>Social Engineering Testing</li>
                                  <li>Physical Penetration Testing</li>
                                  <li>Cloud Penetration Testing</li>
                                  <li>oT Penetration Testing</li>
                                </ul>
                              )}
                            </div>
                            <div
                              onMouseEnter={() => {
                                handleInnerServices("hybrid");
                              }}
                              onMouseLeave={() => {
                                handleInnerServices("");
                              }}
                              className="inner-div"
                            >
                              <li className="inner-item">Hybrid Approach</li>
                              {showInnerServices == "hybrid" && (
                                <ul>
                                  <li>Internal and External Assessments</li>
                                  <li>Continuous Monitoring and Testing</li>
                                </ul>
                              )}
                            </div>
                            <div
                              onMouseEnter={() => {
                                handleInnerServices("auto");
                              }}
                              onMouseLeave={() => {
                                handleInnerServices("");
                              }}
                              className="inner-div"
                            >
                              <li className="inner-item">
                                Automated vs. Manual Testing
                              </li>
                              {showInnerServices == "auto" && (
                                <ul>
                                  <li>Automated Testing</li>
                                  <li>Manual Testing</li>
                                </ul>
                              )}
                            </div>
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
