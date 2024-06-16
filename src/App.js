import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SignupForm2 from "./components/SignUpForm2/SignupForm2";
import Profile from "./components/Profiles/Profile";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/Signup" element={<SignupForm />}></Route>
          <Route path="/Signupform" element={<SignupForm2 />}></Route>
          <Route path="/Profilecard" element={<ProfileCard />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/search_influencers" element={<ProfileCard />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
