import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1>The INVESTRO Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{ width: "40%" }} alt="Smallcase" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
          <img src="media/images/streakLogo.png" style={{ width: "40%" }} alt="Streak" />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
          <img style={{ width: "40%" }} src="media/images/sensibullLogo.svg" alt="Sensibull" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
          <img style={{ width: "40%" }} src="media/images/investroFundhouse.png" alt="Fundhouse" />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
          <img style={{ width: "40%" }} src="media/images/goldenpiLogo.png" alt="GoldenPi" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
          <img style={{ width: "40%" }} src="media/images/dittoLogo.png" alt="Ditto" />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <div className="col-12 mt-4">
          <Link to="/signup" className="btn btn-primary fs-5 btn-cta">
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
