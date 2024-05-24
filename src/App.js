import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/ContactUs/Contact";
import Pricing from "./pages/Pricing/Pricing";

const App = () => {
  return (
    <div className="App">
     
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/Signupform" element={<SignupForm />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
