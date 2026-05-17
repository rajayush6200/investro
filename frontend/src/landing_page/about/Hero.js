import React from "react";

function Hero() {
  return (
    <div className="container landing-content">

      {/* ── Hero Banner ── */}
      <div className="row p-5 mt-5 mb-3 text-center">
        <h1 className="fw-bold" style={{ fontSize: "2.2rem", color: "#1a1a2e" }}>
          Building India's Next-Generation
          <br />
          <span className="landing-accent-text" style={{ color: "#3b82f6" }}>Trading &amp; Investment Platform</span>
        </h1>
        <p className="text-muted mt-3" style={{ fontSize: "1.1rem", maxWidth: "650px", margin: "1rem auto 0" }}>
          INVESTRO was founded with one belief: every Indian investor deserves
          professional-grade tools, zero hidden costs, and a platform that works
          as hard as they do.
        </p>
      </div>

      {/* ── Stats Bar ── */}
      <div
        className="row text-center border-top border-bottom py-4 mb-5 landing-stat-band"
        style={{ background: "#f8faff" }}
      >
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <h2 className="fw-bold" style={{ color: "#2563eb" }}>₹0</h2>
          <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>Equity Delivery Brokerage</p>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <h2 className="fw-bold" style={{ color: "#2563eb" }}>₹20</h2>
          <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>Flat Intraday &amp; F&amp;O Fee</p>
        </div>
        <div className="col-12 col-md-4">
          <h2 className="fw-bold" style={{ color: "#2563eb" }}>2025</h2>
          <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>Founded</p>
        </div>
      </div>

      {/* ── Story ── */}
      <div
        className="row p-5 mt-2 border-top text-muted"
        style={{ lineHeight: "1.9", fontSize: "1.1em" }}
      >
        <div className="row">
          <div className="col-12 col-lg-6 p-4">
            <h5 className="fw-semibold mb-3" style={{ color: "#1a1a2e" }}>Our Story</h5>
            <p>
              INVESTRO was born in 2025 from a simple frustration: India's retail
              investors were paying too much and getting too little. High brokerage
              fees, cluttered platforms, and opaque pricing were locking ordinary
              people out of wealth-building opportunities.
            </p>
            <p>
              We set out to change that — building a full-stack trading ecosystem
              from scratch with a relentless focus on speed, simplicity, and
              transparency.
            </p>
            <p>
              Today, INVESTRO gives traders and investors a professional-grade
              platform with real-time data, smart order management, portfolio
              analytics, and a flat ₹20 fee structure that doesn't eat into your
              returns.
            </p>
          </div>
          <div className="col-12 col-lg-6 p-4">
            <h5 className="fw-semibold mb-3" style={{ color: "#1a1a2e" }}>Our Vision</h5>
            <p>
              We believe the next 100 million Indian investors shouldn't have to
              navigate complexity to participate in wealth creation. INVESTRO is
              our answer — a platform that makes investing intuitive, affordable,
              and empowering.
            </p>
            <p>
              Beyond execution, we are building an ecosystem: education, analytics,
              algorithmic tools, and community — all in one place. Think of it as
              the operating system for your financial life.
            </p>
            <p>
              We are a technology company at heart. Every feature we ship is
              designed to give you an edge — without the noise.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
