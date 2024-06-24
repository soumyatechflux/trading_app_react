// App.js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import AdditionFeature from "./components/AdditionFeature/AdditionFeature";
import Pricing from "./components/Pricing/Pricing";
import Howitswork from "./components/Howitswork/Howitswork";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials/Testimonials";
import PricingFooter from "./components/PricingFooter/PricingFooter";
import TermsAndCondition from "./components/TermsAndCondition/TermsAndCondition";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "./ScrollToTop"; 

function App() {
  return (
    <Router>
      <ScrollToTop />  
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Fade top>
                  <About />
                  <Service />
                  <AdditionFeature />
                  <Pricing />
                  <Howitswork />
                  <Testimonials />
                  <FAQ />
                </Fade>
              </>
            }
          />


          <Route path="/faqs" element={<Fade top><FAQ /></Fade>} />
          <Route path="/privacy_policy" element={<Fade top><PrivacyPolicy /></Fade>} />
          <Route path="/about_us" element={<Fade top><AboutUs /></Fade>} />
          <Route path="/contact_us" element={<Fade top><ContactUs /></Fade>} />
          <Route path="/terms_and_conditions" element={<Fade top><TermsAndCondition /></Fade>} />
          <Route path="/pricing_ranges" element={<Fade top><PricingFooter /></Fade>} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
