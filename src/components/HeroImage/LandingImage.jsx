import React from "react";
import landingImage from "../../assets/landingImage.gif";

const LandingImage = () => (
  <div className="hero-image" style={{ flex: 1 }}>
    <img src={landingImage} alt="Hero" style={{ width: "80%",marginLeft:"15px"}} />
  </div>
);

export default LandingImage;
