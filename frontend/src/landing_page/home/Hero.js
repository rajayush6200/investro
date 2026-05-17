import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 text-center ">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="Hero image"
          className="mb-5 img-fluid"
        />
        <h1 className="mt-5 ">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more{" "}
        </p>
        <Link to="/signup" className="d-inline-block">
          <button
            type="button"
            className="p-2 btn btn-primary fs-5 mb-5 btn-cta"
          >
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
