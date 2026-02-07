import React, { useState, useEffect } from 'react';
import { initialMembers, getStatistics } from '../data/mockData';

function Subscriptions() {
  const [members, setMembers] = useState([]);
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setMembers(initialMembers);
      setStats(getStatistics(initialMembers));
      setIsLoading(false);
    }, 500);
  }, []);

  const handleToggleSubscription = (id) => {
    setMembers(prev => {
      const updated = prev.map(member => {
        if (member.id === id) {
          return {
            ...member,
            subscriptionStatus: member.subscriptionStatus === 'active' ? 'inactive' : 'active'
          };
        }
        return member;
      });
      setStats(getStatistics(updated));
      return updated;
    });
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading subscriptions...</p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h1 className="page-title">💳 Subscription Management</h1>
          <p className="page-subtitle">Control and monitor member subscriptions</p>
        </div>
      </div>

      {/* Subscription Statistics */}
      <div className="subscription-stats">
        <div className="sub-stat-card active">
          <div className="sub-stat-icon">✓</div>
          <div className="sub-stat-content">
            <h3>Active Subscriptions</h3>
            <p className="sub-stat-value">{stats.activeMembers}</p>
            <p className="sub-stat-revenue">{(stats.activeMembers * 300).toLocaleString()} SAR/month</p>
          </div>
        </div>

        <div className="sub-stat-card inactive">
          <div className="sub-stat-icon">✕</div>
          <div className="sub-stat-content">
            <h3>Inactive Subscriptions</h3>
            <p className="sub-stat-value">{stats.inactiveMembers}</p>
            <p className="sub-stat-revenue">Lost: {(stats.inactiveMembers * 300).toLocaleString()} SAR/month</p>
          </div>
        </div>

        <div className="sub-stat-card total">
          <div className="sub-stat-icon">💰</div>
          <div className="sub-stat-content">
            <h3>Total Yearly Revenue</h3>
            <p className="sub-stat-value">{stats.yearlyRevenue.toLocaleString()} SAR</p>
            <p className="sub-stat-revenue">Based on active subscriptions</p>
          </div>
        </div>
      </div>

      {/* Subscription Control Section */}
      <div className="subscription-control">
        <h2 className="section-title">🎛️ Subscription Control Panel</h2>
        <p className="section-subtitle">Activate or deactivate member subscriptions</p>

        <div className="subscription-grid">
          {members.map((member) => (
            <div key={member.id} className={`subscription-card ${member.subscriptionStatus}`}>
              <div className="sub-card-header">
                <div className="sub-member-info">
                  <span className="sub-avatar">{member.avatar}</span>
                  <div>
                    <h3 className="sub-member-name">{member.name}</h3>
                    <p className="sub-member-email">{member.email}</p>
                  </div>
                </div>
                <span className={`sub-status-badge ${member.subscriptionStatus}`}>
                  {member.subscriptionStatus === 'active' ? '✓ Active' : '✕ Inactive'}
                </span>
              </div>

              <div className="sub-card-body">
                <div className="sub-detail">
                  <span className="sub-label">Subscription Type</span>
                  <span className="sub-value">{member.subscriptionType}</span>
                </div>
                <div className="sub-detail">
                  <span className="sub-label">Monthly Fee</span>
                  <span className="sub-value">{member.monthlyFee} SAR</span>
                </div>
                <div className="sub-detail">
                  <span className="sub-label">Join Date</span>
                  <span className="sub-value">{member.joinDate}</span>
                </div>
                <div className="sub-detail">
                  <span className="sub-label">Next Payment</span>
                  <span className="sub-value">{member.nextPayment}</span>
                </div>
              </div>

              <div className="sub-card-footer">
                <button
                  className={`btn-toggle-sub ${member.subscriptionStatus}`}
                  onClick={() => handleToggleSubscription(member.id)}
                >
                  {member.subscriptionStatus === 'active' ? (
                    <>⏸️ Pause Subscription</>
                  ) : (
                    <>▶️ Activate Subscription</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Info */}
      <div className="pricing-info">
        <h2 className="section-title">💵 Subscription Pricing</h2>
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Premium Membership</h3>
            <p className="pricing-value">300 SAR <span>/month</span></p>
          </div>
          <div className="pricing-features">
            <div className="pricing-feature">✓ Unlimited gym access</div>
            <div className="pricing-feature">✓ All classes included</div>
            <div className="pricing-feature">✓ Personal trainer consultation</div>
            <div className="pricing-feature">✓ Free parking</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;