import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import Signup from "./landing_page/signup/Signup";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/signup/Login";
import PrivacyPolicy from "./landing_page/legal/PrivacyPolicy";
import TermsOfService from "./landing_page/legal/TermsOfService";

function App() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className={isAuthPage ? "app-shell app-shell--auth" : "app-shell"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer variant={isAuthPage ? "auth" : "default"} />
    </div>
  );
}

export default App;
