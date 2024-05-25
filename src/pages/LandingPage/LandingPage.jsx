import React from 'react';
//import Form from '../../components/Form/Form';
import HeroImage from '../../components/HeroImage/HeroImage';
import LandingImage from '../../components/HeroImage/LandingImage';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <HeroImage />
      <LandingImage/>
    </div>
  );
};

export default LandingPage;