/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import styles from "./SignupForm.module.css";
import { useNavigate } from "react-router-dom";
import formImage from "../../assets/formImage.png";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { auth, facebook } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    displayName:"",
  });

  //const [isLogin, setIsLogin] = useState(false); // Manages whether the user is logged in or not
  // const [userFace, setUserFace] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // GOOGLE LOGIN HANDLER
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("Google login successful:", codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
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
          console.log("Google user profile data:", res.data);
          const updatedFormData = {
            email: res.data.email,
            displayName: res.data.name,
          };

          setFormData(updatedFormData);
          localStorage.setItem("formData", JSON.stringify(updatedFormData));
          navigate("/Signupform2");
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // FACEBOOK LOGIN HANDLER
  const loginFace = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const emailface = result.user.email;
      const displayName = result.user.displayName;
      console.log([emailface, displayName]);

      const updatedFormData = {
        email: emailface,
        displayName: displayName,
      };
      setFormData(updatedFormData);
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
      console.log(updatedFormData);
      navigate("/Signupform2");
    } catch (e) {
      console.log(`login error ${e}`);
    }
  };

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-useless-escape

    if (!formData.email) {
      alert("type email");
    } else {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
      ) {
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/Signupform2");
      } else {
        alert("Wrong Email-Try again!!");
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
            <input
              className={styles.inputField}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email ID"
            />
            <div className={styles.orText}>OR</div>
            <div className={styles.buttonContainer}>
              <button
                type="button"
                onClick={() => login()}
                className={styles.authButton}
              >
                Continue with Google
              </button>
              <button
                type="button"
                onClick={() => loginFace(facebook)}
                className={styles.authButton}
              >
                Continue with Facebook
              </button>
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.continueButton}>
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
