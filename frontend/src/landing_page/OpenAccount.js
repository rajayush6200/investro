import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container p-5 text-center ">
      <div className="row">
        <h1 className="mt-5 ">Open an INVESTRO account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.{" "}
        </p>
        <Link to="/signup" className="d-inline-block">
          <button type="button" className="p-2 btn btn-primary fs-5 mb-5 btn-cta">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
