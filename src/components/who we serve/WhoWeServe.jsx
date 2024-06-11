import React from "react";
import "./whoweserve.css";

const WhoWeServe = () => {
  return (
    <div className="who-container" data-aos="fade-up">
      <div className="who-inner">
        <div className="who-head">OUR WORK INDUSTRIES</div>
        <div className="who-title">Who we Serve</div>

        <div className="who-grid">
          <div className="who-card" data-aos="fade-up">
            <div className="card-left">
              <div className="card-title">
                Banking, Financial Services and Insurance
              </div>
              <div className="txt">
                Our Experts are involved in protecting sensitive financial data,
                customer information, and critical infrastructure from cyber
                threats.
              </div>
            </div>
            <div className="card-right">01</div>
          </div>
          <div className="who-card" data-aos="fade-up">
            <div className="card-left">
              <div className="card-title">Manufacturing</div>
              <div className="txt">
                Our cybersecurity experts focus on safeguarding production
                processes, industrial control systems, and sensitive data from
                cyber threats and unauthorized access
              </div>
            </div>
            <div className="card-right">02</div>
          </div>
          <div className="who-card" data-aos="fade-up">
            <div className="card-left">
              <div className="card-title">Pharmaceutical</div>
              <div className="txt">
                Our service offerings enhance customer experience throughout
                secure &amp; highly functional.
              </div>
            </div>
            <div className="card-right">03</div>
          </div>
          <div className="who-card" data-aos="fade-up">
            <div className="card-left">
              <div className="card-title">Technology</div>
              <div className="txt">
                Our service offerings enhance customer experience throughout
                secure & highly functional.
              </div>
            </div>
            <div className="card-right">04</div>
          </div>
          <div className="who-card" data-aos="fade-up">
            <div className="card-left">
              <div className="card-title">Government</div>
              <div className="txt">
                Our service offerings enhance customer experience throughout
                secure & highly functional.
              </div>
            </div>
            <div className="card-right">05</div>
          </div>
          <div className="who-card" data-aos="fade-up">
            <div className="card-left">
              <div className="card-title">Education</div>
              <div className="txt">
                Our service offerings enhance customer experience throughout
                secure & highly functional.
              </div>
            </div>
            <div className="card-right">06</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
