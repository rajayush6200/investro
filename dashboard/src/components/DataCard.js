import React from "react";

export function DataCard({ title, subtitle, badge, badgeClass, rows, footer }) {
  return (
    <article className="data-card">
      <header className="data-card-header">
        <div>
          <h4 className="data-card-title">{title}</h4>
          {subtitle && <p className="data-card-subtitle">{subtitle}</p>}
        </div>
        {badge && <span className={`data-card-badge ${badgeClass || ""}`}>{badge}</span>}
      </header>
      <div className="data-card-body">
        {rows.map((row) => (
          <div className="data-card-row" key={row.label}>
            <span className="data-card-label">{row.label}</span>
            <span className={`data-card-value ${row.valueClass || ""}`}>{row.value}</span>
          </div>
        ))}
      </div>
      {footer && <footer className="data-card-footer">{footer}</footer>}
    </article>
  );
}

export function DataCardList({ children, emptyMessage }) {
  const hasChildren = React.Children.count(children) > 0;
  if (!hasChildren) {
    return emptyMessage ? <p className="data-cards-empty">{emptyMessage}</p> : null;
  }
  return <div className="data-cards">{children}</div>;
}
