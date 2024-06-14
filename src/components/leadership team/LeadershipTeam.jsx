import React from "react";
import "./leadership-team.css";
import Founder1 from "../../assets/founder1.webp";
import Founder2 from "../../assets/founder2.webp";
import Founder3 from "../../assets/founder3.webp";
import Fb from "../../assets/fb.png";
import Insta from "../../assets/insta.png";
import Linkedin from "../../assets/linkedin.png";
import { Link } from "react-router-dom";

const LeadershipTeam = () => {
  return (
    <div className="leader-container" data-aos="fade-up">
      <div className="leader-inner" data-aos="fade-up">
        <div className="leader-title">Leadership Team</div>

        <div className="leader-grid" data-aos="fade-up">
          <div className="leader-leader-card" data-aos="fade-up">
            <div className="leader-card-up">
              <img src={Founder1} alt="Founder Image" srcset="" />
              <div className="leader-card-overlay"></div>
            </div>
            <div className="leader-card-down">
              <p className="name">Sonu Kumar Thakur</p>
              <p className="role">Cybersecurity Analyst at TechMahindra</p>
              <p className="card-icon">
                <Link
                  to={
                    "https://www.linkedin.com/in/sonu-kumar-thakur-50835479?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  }
                >
                  <img src={Linkedin} alt="LinkedIn" srcset="" />
                </Link>
              </p>
            </div>
          </div>

          <div className="leader-leader-card" data-aos="fade-up">
            <div className="leader-card-up">
              <img src={Founder3} alt="Founder Image" srcset="" />
              <div className="leader-card-overlay"></div>
            </div>
            <div className="leader-card-down">
              <p className="name">Abhishek Kumar Singh </p>
              <p className="role">
                Ethical Hacker, Penetration Tester (VAPT), Soc Analyst
              </p>
              <p className="card-icon">
                <Link
                  to={
                    "https://www.linkedin.com/in/abhishek-kumar-singh-142129241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  }
                >
                  <img src={Linkedin} alt="LinkedIn" srcset="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
