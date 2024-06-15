import React, { useState, useEffect } from "react";
import styles from "./SignupForm.module.css";
import { useNavigate } from "react-router-dom";
import formImage from "../../assets/formImage.png";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { auth, facebook } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import emailjs from "emailjs-com";


const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    otp: "",
  });
  const [user, setUser] = useState([]);
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
    ux_mode: "popup",
  });

  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          const updatedFormData = {
            email: res.data.email,
            displayName: res.data.name,
          };

          setFormData(updatedFormData);
          localStorage.setItem("formData", JSON.stringify(updatedFormData));
          navigate("/Signupform");
        })
        .catch((err) => console.log(err));
    }
  }, [user,navigate]);

  const loginFace = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const emailface = result.user.email;
      const displayName = result.user.displayName;

      const updatedFormData = {
        email: emailface,
        displayName: displayName,
      };
      setFormData(updatedFormData);
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
      navigate("/Signupform");
    } catch (e) {
      console.log(`login error ${e}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetOtp = () => {
    if (!formData.email) {
      alert("Please enter your email");
      return;
    }// eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp);

      const templateParams = {
        email: formData.email,
        message:"Use this otp to verify your email and get started with Inggage.",
        otp: otp,
      };

      emailjs
        .send(
          "service_rsbb72i", // Replace with your service ID
          "template_8ily7bb", // Replace with your template ID
          templateParams,
          "Rv2--lg-zY8PMp2HG" // Replace with your user ID
        )
        .then(
          (response) => {
            console.log(
              "OTP sent successfully",
              response.status,
              response.text
            );
            alert("OTP sent Successfully")
            setOtpSent(true);
          },
          (err) => {
            console.log("Failed to send OTP", err);
          }
        );
    } else {
      alert("Invalid Email. Please try again.");
    }
  };

  const handleVerifyOtp = () => {
    if (formData.otp === generatedOtp) {
      alert("OTP verified successfully!");
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/Signupform");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email) {
      alert("Please enter your email");
    } else {
      
      if (
        // eslint-disable-next-line
        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formData.email)
      ) {
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/Signupform");
      } else {
        alert("Invalid Email. Please try again.");
      }
    }
  };

  return (
    <>
      <div className={styles.SignupForm}>
        <div className={styles.formImage}>
          <img src={formImage} alt="formimage"></img>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.heading}>Sign Up</h2>
            <p className={styles.description}>
              We will require your email ID to further proceed and get in touch
              with our team
            </p>
            {!otpSent ? (
              <>
                <input
                  className={styles.inputField}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="    Enter your Email ID"
                />
                <button
                  type="button"
                  onClick={handleGetOtp}
                  className={styles.continueButton}
                >
                  Get OTP
                </button>
              </>
            ) : (
              <>
                <input
                  className={styles.inputField}
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter your OTP"
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className={styles.continueButton}
                >
                  Verify OTP
                </button>
              </>
            )}
            <div className={styles.orText}>OR</div>
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                onClick={() => login()}
                className={styles.authButton}
              >
                Continue with Google
              </button>
              <button
                type="submit"
                onClick={() => loginFace(facebook)}
                className={styles.authButton}
              >
                Continue with Facebook
              </button>
            </div>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
