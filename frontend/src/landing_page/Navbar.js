import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ThemeToggle from "../theme/ThemeToggle";
import { API_BASE_URL, DASHBOARD_URL, FRONTEND_URL } from "../config/urls";

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);

  // check login
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅ get token
        if (!token) return setIsAuth(false);

        const res = await axios.get(
          `${API_BASE_URL}/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ send token
            },
          },
        );

        if (res.data) {
          setIsAuth(true);
        }
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  // logout
const handleLogout = () => {
  localStorage.removeItem("token");
  setIsAuth(false);
  window.location.href = FRONTEND_URL;
};

  return (
    <nav className="navbar navbar-expand-lg border-bottom investro-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/media/images/logo.svg" alt="INVESTRO logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* 🔴 NOT LOGGED IN */}
            {!isAuth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {/* 🟢 LOGGED IN */}
            {isAuth && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={DASHBOARD_URL}
                  >
                    Dashboard
                  </a>{" "}
                </li>

                <li className="nav-item">
                  <button className="nav-link btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}

            {/* COMMON LINKS */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item theme-toggle-nav-item d-flex align-items-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
