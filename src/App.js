// App.js
import React from "react";
import'./App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
function App() {
  return (
    
    <Router>
      <div className="App">
      
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>

              
                <About />
                <Service />
                <AdditionFeature />
                <Pricing />
                <Howitswork />
                <Testimonials />
                <FAQ />



              </>
            }
          />
          <Route path="/faqs" element={<FAQ />} />          
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/terms_and_conditions" element={<TermsAndCondition />} />
          <Route path="/pricing_ranges" element={<PricingFooter />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
