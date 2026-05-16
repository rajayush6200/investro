import React, { useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
    // ✅ grab token from URL if coming from login
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    if (urlToken) {
      localStorage.setItem("token", urlToken);
      window.history.replaceState({}, "", "/"); // clean URL
    }

    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token");

        await axios.get("http://localhost:4000/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ send token
          },
        });

        console.log("User authenticated ✅");
      } catch (err) {
        console.log("Not authorized ❌");
        // ✅ redirect to frontend login
        window.location.href = "http://localhost:3000/login";
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
