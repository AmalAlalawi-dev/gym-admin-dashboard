import React from 'react';

function StatCard({ icon, title, value, subtitle, color, trend }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon-wrapper">
        <span className="stat-icon">{icon}</span>
      </div>
      <div className="stat-content">
        <h3 className="stat-title">{title}</h3>
        <p className="stat-value">{value}</p>
        {subtitle && <p className="stat-subtitle">{subtitle}</p>}
        {trend && (
          <div className="stat-trend">
            <span className={trend.direction === 'up' ? 'trend-up' : 'trend-down'}>
              {trend.direction === 'up' ? '📈' : '📉'} {trend.value}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;