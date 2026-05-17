import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-5">Pricing</h1>
        <h3 className="text-center text-muted fs-5 mt-3 pb-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
        <div className="row p-3 p-md-5 mt-3 text-center g-4">
          <div className="col-12 col-md-4 p-4">
            <img src="media/images/pricingEquity.svg" alt="Free equity" className="img-fluid mb-3" style={{ width: "70%", maxWidth: "200px" }} />
            <h2 className="fs-4">Free equity delivery</h2>
            <p className="text-muted">All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage</p>
          </div>
          <div className="col-12 col-md-4 p-4">
            <img src="media/images/intradayTrades.svg" alt="Intraday" className="img-fluid mb-3" style={{ width: "70%", maxWidth: "200px" }} />
            <h2 className="fs-4">Intraday and F&O trades</h2>
            <p className="text-muted">Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
          </div>
          <div className="col-12 col-md-4 p-4">
            <img src="media/images/pricingEquity.svg" alt="Mutual funds" className="img-fluid mb-3" style={{ width: "70%", maxWidth: "200px" }} />
            <h2 className="fs-4">Free direct MF</h2>
            <p className="text-muted">All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
