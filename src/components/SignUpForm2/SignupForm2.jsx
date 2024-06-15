import React, { useState, useEffect } from "react";
import Select from "react-select";
import styles from "./SignupForm2.module.css";
import { useNavigate } from "react-router-dom";
import HeroImage from "../HeroImage/HeroImage";
import { database } from "../../firebase-config";
import { ref, push } from "firebase/database";
import niches from './niches';
import SelectCss from './SelectCss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignupForm2 = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("Influencer");
  const [step, setStep] = useState(1);
  const [influencerData, setInfluencerData] = useState({
    userType: "Influencer",
    niche: [],
    primaryPlatform: "",
    profileLink: "",
    collaborations: "",
  });
  const [brandData, setBrandData] = useState({
    userType: "Brand",
    industry: "",
    websiteLink: "",
    companyType: "",
    aovRoas: "",
    influencerMarketing: "",
  });

  const nicheOptions = niches;
  const customStyles = SelectCss;

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      if (storedFormData.userType === "Influencer") {
        setInfluencerData(storedFormData);
      } else if (storedFormData.userType === "Brand") {
        setBrandData(storedFormData);
      }
    }
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  const handleUserTypeChange = (e) => {
    const selectedType = e.target.value;
    setUserType(selectedType);
    setStep(1); // Reset to the first step when changing user type
  };

  const handleInfluencerChange = (e) => {
    const { name, value } = e.target;
    setInfluencerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNicheChange = (selectedOptions) => {
    setInfluencerData((prev) => ({ ...prev, niche: selectedOptions }));
  };

  const handleBrandChange = (e) => {
    const { name, value } = e.target;
    setBrandData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setStep(step + 1);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

   const handleBackBtn =()=>{
    navigate('/signup')
   }

  const validateCurrentStep = () => {
    if (userType === "Influencer" && step === 1) {
      return influencerData.niche.length > 0 && influencerData.primaryPlatform;
    } else if (userType === "Influencer" && step === 2) {
      return influencerData.profileLink && influencerData.collaborations;
    } else if (userType === "Brand" && step === 1) {
      return brandData.industry && brandData.websiteLink;
    } else if (userType === "Brand" && step === 2) {
      return (
        brandData.companyType &&
        brandData.aovRoas &&
        brandData.influencerMarketing
      );
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step < 2) {
      handleNextStep();
    } else if (validateCurrentStep()) {
      const formData = userType === "Influencer" ? influencerData : brandData;
      localStorage.setItem("formData", JSON.stringify(formData));
      const formDataRef = ref(
        database,
        userType === "Influencer" ? "influencers/" : "brands/"
      );
      try {
        await push(formDataRef, formData);
        alert("Data submitted successfully!");
        console.log(formData)
        navigate("/dashboard");
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Try Again!!");
      }
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <>
      <div className={styles.SignupForm}>
        <div className={styles.formImage} data-aos='fade-up'  data-aos-easing="ease-in-sine" data-aos-duration="600">
          <HeroImage />
        </div>
        <div className={styles.formContainer} data-aos='fade-up'  data-aos-easing="ease-in-sine" data-aos-duration="600">
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.heading}>Almost there...</h2>
            <p className={styles.description}>Step {step}/2</p>

            <label className={styles.label}>You are signing up as</label>
            <select
              className={styles.inputField}
              name="userType"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="Influencer">Influencer</option>
              <option value="Brand">Brand</option>
            </select>

            {userType === "Influencer" && (
              <>
                {step === 1 ? (
                  <>
                    <label className={styles.label}>
                      What niche do you work on?
                    </label>
                    <Select
                      className={`${styles.multiSelect} ${styles.reactSelect}`}
                      classNamePrefix="reactSelect"
                      isMulti
                      name="niche"
                      options={nicheOptions}
                      value={influencerData.niche}
                      onChange={handleNicheChange}
                      placeholder="Select your niches"
                      styles={customStyles}
                    />
                    <label className={styles.label}>
                      What is your primary platform of collaboration?
                    </label>
                    <select
                      className={styles.inputField}
                      name="primaryPlatform"
                      value={influencerData.primaryPlatform}
                      onChange={handleInfluencerChange}
                    >
                      <option value="">Select</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Twitter">Twitter</option>
                    </select>
                  </>
                ) : (
                  <>
                    <label className={styles.label}>Profile Link</label>
                    <input
                      className={styles.inputField}
                      type="text"
                      name="profileLink"
                      value={influencerData.profileLink}
                      onChange={handleInfluencerChange}
                      placeholder="Enter your profile link"
                    />
                    <label className={styles.label}>
                      How many collaborations have you had roughly?
                    </label>
                    <select
                      className={styles.inputField}
                      name="collaborations"
                      value={influencerData.collaborations}
                      onChange={handleInfluencerChange}
                    >
                      <option value="">Select</option>
                      <option value="1-10">1-10</option>
                      <option value="10-50">10-50</option>
                      <option value="50-100">50-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </>
                )}
              </>
            )}

            {userType === "Brand" && (
              <>
                {step === 1 ? (
                  <>
                    <div className={styles.brandContainer}>
                      <label className={styles.label}>
                        Which industry are you based in
                      </label>
                      <input
                        className={styles.inputField}
                        type="text"
                        name="industry"
                        value={brandData.industry}
                        onChange={handleBrandChange}
                        placeholder="Enter your industry"
                      />
                      <label className={styles.label}>Website Link</label>
                      <input
                        className={styles.inputField}
                        type="text"
                        name="websiteLink"
                        value={brandData.websiteLink}
                        onChange={handleBrandChange}
                        placeholder="Enter your website link"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <label className={styles.label}>Company Type</label>
                    <select
                      className={styles.inputField}
                      name="companyType"
                      value={brandData.companyType}
                      onChange={handleBrandChange}
                    >
                      <option value="">Select</option>
                      <option value="B2B">B2B</option>
                      <option value="B2C">B2C</option>
                      <option value="D2C">D2C</option>
                      <option value="C2C">C2C</option>
                    </select>
                    <label className={styles.label}>
                      What's your AOV, RoAS?
                    </label>
                    <input
                      className={styles.inputField}
                      type="text"
                      name="aovRoas"
                      value={brandData.aovRoas}
                      onChange={handleBrandChange}
                      placeholder="Enter your AOV, RoAS"
                    />
                    <label className={styles.label}>
                      Have you worked with influencer marketing before?
                    </label>
                    <select
                      className={styles.inputField}
                      name="influencerMarketing"
                      value={brandData.influencerMarketing}
                      onChange={handleBrandChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </>
                )}
              </>
            )}

            <div className={styles.buttonContainer}>
              {step === 1 ? (
                <>
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={handleNextStep}
                >
                  Continue
                </button>
                <button
                    type="button"
                    onClick={handleBackBtn}
                    className={styles.submitButton}
                  >
                    Back
                  </button>
                </>
                
              ) : (
                <>
                  <button type="submit" className={styles.submitButton}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleBackStep}
                    className={styles.submitButton}
                  >
                    Back
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm2;
