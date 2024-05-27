import React from "react";
//import Form from '../../components/Form/Form';
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
const navigate = useNavigate();
const handleClick =()=>
  {
    navigate('/signupform')
  }
  return (
    <div className="landing-container">
      <div className="upperImage">
        <img src={bg1} alt="bg1"></img>
      </div>
      <p>
        Powerful, self-serve product and growth analytics to help you convert,
      </p>
      <p>engage, and retain more users. Trusted by over 4,000 startups.</p>
      <button className="StartBtn" onClick={handleClick}>Get Started</button>
      <div className="lowerImage">
        <img src={bg2} alt="bg2"></img>
      </div>
    </div>
  );
};

export default LandingPage;
