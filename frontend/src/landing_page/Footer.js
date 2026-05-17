import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top mt-5" style={{ backgroundColor: "#f8f9fa", padding: "3rem 0" }}>
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <img src="media/images/logo.svg" alt="INVESTRO Logo" style={{ width: "150px" }} className="mb-3" />
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Empowering your financial journey with modern investment tools.
            </p>
          </div>
          
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h5 className="mb-3 text-dark" style={{ fontSize: "16px", fontWeight: "600" }}>Company</h5>
            <div className="d-flex flex-column gap-2">
              <Link to="/about" className="text-muted text-decoration-none footer-link">About</Link>
              <Link to="/product" className="text-muted text-decoration-none footer-link">Products</Link>
              <Link to="/pricing" className="text-muted text-decoration-none footer-link">Pricing</Link>
              <Link to="#" className="text-muted text-decoration-none footer-link">Careers</Link>
              <Link to="#" className="text-muted text-decoration-none footer-link">Press & Media</Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h5 className="mb-3 text-dark" style={{ fontSize: "16px", fontWeight: "600" }}>Support</h5>
            <div className="d-flex flex-column gap-2">
              <Link to="/support" className="text-muted text-decoration-none footer-link">Contact</Link>
              <Link to="/support" className="text-muted text-decoration-none footer-link">Support portal</Link>
              <Link to="#" className="text-muted text-decoration-none footer-link">Blog</Link>
              <Link to="#" className="text-muted text-decoration-none footer-link">Downloads</Link>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="mb-3 text-dark" style={{ fontSize: "16px", fontWeight: "600" }}>Account</h5>
            <div className="d-flex flex-column gap-2">
              <Link to="/signup" className="text-muted text-decoration-none footer-link">Open an account</Link>
              <Link to="#" className="text-muted text-decoration-none footer-link">Fund transfer</Link>
              <Link to="#" className="text-muted text-decoration-none footer-link">60 day challenge</Link>
            </div>
          </div>
        </div>

        <hr className="my-5" style={{ opacity: 0.1 }} />

        {/* Bottom Footer Section */}
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          
          {/* Social Icons */}
          <div className="d-flex gap-4 mb-4">
            <a href="mailto:rajayush6200@gmail.com" className="social-icon" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://www.linkedin.com/in/rajayush6200/" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/rajayush6200" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://x.com/AyushRaj444" className="social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/____ayush_raj____" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

          <div className="f-info-brand fw-bold">
            &copy; {new Date().getFullYear()} INVESTRO · Built by Ayush
          </div>

          {/* Legal Links */}
          <div className="d-flex gap-3 mt-1">
            <Link to="/privacy" className="text-muted text-decoration-none footer-link" style={{ fontSize: "14px" }}>Privacy Policy</Link>
            <span className="text-muted" style={{ fontSize: "14px" }}>|</span>
            <Link to="/terms" className="text-muted text-decoration-none footer-link" style={{ fontSize: "14px" }}>Terms of Service</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
