import React from "react";
import "./contact.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left2">
        <p className="heading">Follow On:</p>
        <ul>
          <li className="item">
            <FaFacebookF className="icon-fb" />
          </li>
          <li className="item">
            <FaInstagram />
          </li>
          <li className="item">
            <FaLinkedin />
          </li>
        </ul>
      </div>

      <div className="r">
        <ul>
          <li>
            <IoIosCall />
            <p>For Sales</p>
            <p>+99999999</p>
          </li>
          <li>
            <AiOutlineMail />
            <p>sales@gmail.com</p>
          </li>
          <li>
            <IoIosCall />
            <p>For HR</p>
            <p>+99999999</p>
          </li>
          <li>
            <AiOutlineMail />
            <p>career@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
