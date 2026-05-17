import React from "react";
import "./about.css";

function Team() {
  return (
    <div className="container landing-content">
      <div className="row p-3 mt-5 border-top text-center">
        <h2 className="fw-bold about-section-title">Meet the Founder</h2>
        <p className="text-muted about-section-subtitle">
          The person behind the platform
        </p>
      </div>

      <div className="row p-4 mb-5 about-founder-layout">
        <div className="col-12 col-md-4 text-center d-flex flex-column align-items-center justify-content-start pt-3 mb-4 mb-md-0">
          <img
            className="team-avatar-ring"
            src="media/images/founder.jpg"
            alt="Ayush Raj - Founder & CEO"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="team-fallback-avatar">AR</div>
          <h4 className="fw-bold mb-1 team-founder-name">Ayush Raj</h4>
          <p className="mb-1 team-founder-role">Founder &amp; CEO</p>
          <p className="team-founder-meta">INVESTRO · Est. 2025</p>

          <div className="mt-3 d-flex gap-3">
            <a
              href="https://github.com/rajayush6200"
              target="_blank"
              rel="noreferrer"
              className="team-social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rajayush6200/"
              target="_blank"
              rel="noreferrer"
              className="team-social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/____ayush_raj____/"
              target="_blank"
              rel="noreferrer"
              className="team-social-link"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="col-12 col-md-8 p-4 text-muted">
          <p>
            <strong className="team-bio-strong">Ayush Raj</strong> is a fintech
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

          <blockquote className="mt-4 ps-3 team-quote">
            "Markets shouldn't be intimidating. INVESTRO exists to make sure they
            aren't."
            <br />
            <span className="team-quote-attribution">
              — Ayush Raj, Founder
            </span>
          </blockquote>
        </div>
      </div>

      <div className="row text-center border-top pt-4 pb-5 values-band">
        <h5 className="fw-semibold mb-4 about-section-heading">
          What We Stand For
        </h5>
        {[
          { icon: "💡", title: "Transparency", desc: "No hidden charges. Ever." },
          { icon: "⚡", title: "Speed", desc: "Real-time data, instant execution." },
          { icon: "🛡️", title: "Security", desc: "Bank-grade encryption & auth." },
          { icon: "📈", title: "Growth", desc: "Tools that help you invest better." },
        ].map((v) => (
          <div className="col-6 col-md-3 px-3 mb-4" key={v.title}>
            <div className="values-card-icon">{v.icon}</div>
            <p className="fw-semibold mt-2 mb-1 values-card-title">{v.title}</p>
            <p className="text-muted values-card-desc">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

