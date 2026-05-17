import React from "react";

function Team() {
  return (
    <div className="container">
      {/* ── Section Header ── */}
      <div className="row p-3 mt-5 border-top text-center">
        <h2 className="fw-bold" style={{ color: "#1a1a2e" }}>Meet the Founder</h2>
        <p className="text-muted" style={{ fontSize: "1rem" }}>
          The person behind the platform
        </p>
      </div>

      {/* ── Founder Card ── */}
      <div
        className="row p-4 mb-5"
        style={{ lineHeight: "1.85", fontSize: "1.05em" }}
      >
        {/* Avatar / Photo Column */}
        <div className="col-12 col-md-4 text-center d-flex flex-column align-items-center justify-content-start pt-3 mb-4 mb-md-0">
          {/* Founder Image 
              TODO: Place your professional square/circular photo (e.g. 400x400) 
              at this exact location: 
              frontend/public/media/images/founder.jpg 
          */}
          <img 
            src="media/images/founder.jpg" 
            alt="Ayush Raj - Founder & CEO"
            onError={(e) => {
              // Fallback to CSS monogram if image not found
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 8px 32px rgba(37,99,235,0.25)",
              marginBottom: "18px",
              border: "3px solid #fff"
            }}
          />
          <div
            className="fallback-avatar"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              display: "none", // hidden by default, shown via onError if img fails
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              fontWeight: "700",
              color: "#fff",
              letterSpacing: "2px",
              boxShadow: "0 8px 32px rgba(37,99,235,0.25)",
              marginBottom: "18px",
            }}
          >
            AR
          </div>
          <h4 className="fw-bold mb-1" style={{ color: "#1a1a2e" }}>Ayush Raj</h4>
          <p
            className="mb-1"
            style={{
              fontSize: "0.85rem",
              color: "#2563eb",
              fontWeight: "600",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Founder &amp; CEO
          </p>
          <p style={{ fontSize: "0.82rem", color: "#888" }}>INVESTRO · Est. 2025</p>

          {/* Social Links */}
          <div className="mt-3 d-flex gap-3">
            <a
              href="https://github.com/rajayush6200"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", fontSize: "0.85rem", textDecoration: "none" }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rajayush6200/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", fontSize: "0.85rem", textDecoration: "none" }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/____ayush_raj____/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#555", fontSize: "0.85rem", textDecoration: "none" }}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bio Column */}
        <div className="col-12 col-md-8 p-4 text-muted">
          <p>
            <strong style={{ color: "#1a1a2e" }}>Ayush Raj</strong> is a fintech
            builder and software engineer who founded INVESTRO in 2025 with a
            singular mission: to democratize investing for every Indian.
          </p>
          <p>
            Having witnessed firsthand how complex and expensive the traditional
            broking world was, Ayush decided to build a better alternative — a
            modern, full-stack trading platform that combines the power of
            real-time market data, intelligent order execution, and a clean,
            intuitive interface.
          </p>
          <p>
            INVESTRO is built on the conviction that technology can and should
            eliminate the friction between ordinary people and financial markets.
            From zero-commission equity delivery to a ₹20 flat fee on F&amp;O
            trades, every pricing decision at INVESTRO is made with the investor
            first.
          </p>
          <p>
            Ayush leads all product, engineering, and strategy at INVESTRO and is
            actively expanding the platform's ecosystem — adding algorithmic
            trading tools, mutual fund integration, and a community-driven
            education layer to help every investor grow their knowledge alongside
            their portfolio.
          </p>

          {/* Quote */}
          <blockquote
            className="mt-4 ps-3"
            style={{
              borderLeft: "3px solid #2563eb",
              color: "#444",
              fontStyle: "italic",
              fontSize: "1rem",
            }}
          >
            "Markets shouldn't be intimidating. INVESTRO exists to make sure they
            aren't."
            <br />
            <span style={{ fontSize: "0.85rem", fontStyle: "normal", color: "#888" }}>
              — Ayush Raj, Founder
            </span>
          </blockquote>
        </div>
      </div>

      {/* ── Values Strip ── */}
      <div
        className="row text-center border-top pt-4 pb-5"
        style={{ background: "#f8faff" }}
      >
        <h5 className="fw-semibold mb-4" style={{ color: "#1a1a2e" }}>What We Stand For</h5>
        {[
          { icon: "💡", title: "Transparency", desc: "No hidden charges. Ever." },
          { icon: "⚡", title: "Speed", desc: "Real-time data, instant execution." },
          { icon: "🛡️", title: "Security", desc: "Bank-grade encryption & auth." },
          { icon: "📈", title: "Growth", desc: "Tools that help you invest better." },
        ].map((v) => (
          <div className="col-6 col-md-3 px-3 mb-4" key={v.title}>
            <div style={{ fontSize: "2rem" }}>{v.icon}</div>
            <p className="fw-semibold mt-2 mb-1" style={{ color: "#1a1a2e" }}>{v.title}</p>
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;