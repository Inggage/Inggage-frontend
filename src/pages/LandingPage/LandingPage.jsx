import React from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import analytics from "../../assets/analytics.png";
import search from "../../assets/search.png";
import ceat from "../../assets/ceat.png";
import ajio from "../../assets/ajio.png";
import dbs from "../../assets/dbs.png";
import tata from "../../assets/tata.png";
import campaign from "../../assets/campaign.png";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signupform");
  };

  return (
    <>
      {/* Section 1 - Hero Section */}
      <div className="landing-container">
        <div className="upperImage">
          <img src={bg1} alt="bg1" />
        </div>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
        </p>
        <p>engage, and retain more users. Trusted by over 4,000 startups.</p>
        <button className="StartBtn" onClick={handleClick}>
          Get Started
        </button>
        <div className="lowerImage">
          <img src={bg2} alt="bg2" />
        </div>
      </div>

      {/* Stats section*/}
      <div className="statistics-section">
        <h2>Our Achievements</h2>
        <div className="statistics-cards">
          <div className="stat-card">
            <h3>
              <CountUp end={400} duration={2} />+
            </h3>
            <p>Startups</p>
          </div>
          <div className="stat-card">
            <h3>
              <CountUp end={100} duration={2} />+
            </h3>
            <p>Users Engaged</p>
          </div>
          <div className="stat-card">
            <h3>
              <CountUp end={100} duration={2} />+
            </h3>
            <p>Data Points Analyzed</p>
          </div>
        </div>
      </div>

      {/* Section 3 - Brands Animation Section */}
      <div className="brands-section">
        <h2>Our Trusted Brands</h2>
        <div className="brands-logos">
          {/* Add your brand logos here */}
          <img src={ceat} alt="Brand 1" />
          <img src={ajio} alt="Brand 1" />
          <img src={dbs} alt="Brand 1" />
          <img src={tata} alt="Brand 2" />

          {/* More logos */}
        </div>
      </div>

      {/*<!-- Section 4 - Features Section -->*/}
      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <div className="image-container">
              <img src={analytics} alt="Analytics Dashboard" />
            </div>
            <h3>Comprehensive Analytics Dashboard</h3>
            <p>
              Track campaign performance with detailed analytics and insights.
              Measure engagement, reach, conversions, and ROI in real-time.
            </p>
          </div>
          <div className="feature-card">
            <div className="image-container">
              <img src={search} alt="Influencer Discovery" />
            </div>
            <h3>Influencer Discovery</h3>
            <p>
              Find the right influencers with powerful search and filters.
              Access profiles, audience demographics, and engagement metrics.
            </p>
          </div>
          <div className="feature-card">
            <div className="image-container">
              <img src={campaign} alt="Campaign Management" />
            </div>
            <h3>Campaign Management</h3>
            <p>
              Create, manage, and monitor campaigns seamlessly. Collaborate with
              influencers, set goals, and track progress from a single platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
