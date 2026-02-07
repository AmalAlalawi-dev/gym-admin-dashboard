import React, { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import { initialMembers, getStatistics } from '../data/mockData';

function Dashboard() {
  const [members, setMembers] = useState([]);
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API call with useEffect
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate fetching data from API
    setTimeout(() => {
      setMembers(initialMembers);
      setStats(getStatistics(initialMembers));
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">📊 Dashboard Overview</h1>
        <p className="page-subtitle">Welcome to your gym management dashboard</p>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <StatCard
          icon="👥"
          title="Total Members"
          value={stats.totalMembers}
          subtitle={`${stats.activeMembers} active, ${stats.inactiveMembers} inactive`}
          color="gradient-purple"
          trend={{ direction: 'up', value: '+12.5%' }}
        />
        
        <StatCard
          icon="✓"
          title="Active Subscriptions"
          value={stats.activeMembers}
          subtitle="Currently active members"
          color="gradient-green"
          trend={{ direction: 'up', value: '+8.2%' }}
        />
        
        <StatCard
          icon="💰"
          title="Monthly Revenue"
          value={`${stats.monthlyRevenue.toLocaleString()} SAR`}
          subtitle={`${stats.monthlyFee || 300} SAR per member`}
          color="gradient-blue"
          trend={{ direction: 'up', value: '+15.3%' }}
        />
        
        <StatCard
          icon="📅"
          title="Avg Login Days"
          value={stats.averageLoginDays}
          subtitle="Days per member"
          color="gradient-orange"
        />
      </div>

      {/* Yearly Revenue Section */}
      <div className="revenue-section">
        <div className="revenue-card">
          <div className="revenue-header">
            <h2>💎 Yearly Revenue Statistics</h2>
            <span className="year-badge">2025</span>
          </div>
          <div className="revenue-content">
            <div className="revenue-main">
              <span className="revenue-label">Total Yearly Revenue</span>
              <span className="revenue-value">{stats.yearlyRevenue.toLocaleString()} SAR</span>
              <span className="revenue-breakdown">
                ({stats.activeMembers} members × 300 SAR × 12 months)
              </span>
            </div>
            <div className="revenue-stats">
              <div className="revenue-stat-item">
                <span className="stat-label">Active Revenue</span>
                <span className="stat-value">{(stats.activeMembers * 300 * 12).toLocaleString()} SAR</span>
              </div>
              <div className="revenue-stat-item">
                <span className="stat-label">Potential Loss</span>
                <span className="stat-value">{(stats.inactiveMembers * 300 * 12).toLocaleString()} SAR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Members */}
      <div className="recent-section">
        <h2 className="section-title">👥 Recent Members</h2>
        <div className="recent-grid">
          {members.slice(0, 3).map((member) => (
            <div key={member.id} className="recent-card">
              <div className="recent-avatar">{member.avatar}</div>
              <h3 className="recent-name">{member.name}</h3>
              <p className="recent-email">{member.email}</p>
              <div className="recent-stats">
                <div className="recent-stat">
                  <span className="stat-label">Login Days</span>
                  <span className="stat-value">{member.loginDays}</span>
                </div>
                <div className="recent-stat">
                  <span className="stat-label">Status</span>
                  <span className={`status-badge ${member.subscriptionStatus}`}>
                    {member.subscriptionStatus}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;