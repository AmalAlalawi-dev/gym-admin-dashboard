import React, { useState, useEffect } from 'react';
import { initialMembers } from '../data/mockData';

function Attendance() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('loginDays');

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setMembers(initialMembers);
      setIsLoading(false);
    }, 500);
  }, []);

  // Sort members
  const sortedMembers = [...members].sort((a, b) => {
    if (sortBy === 'loginDays') {
      return b.loginDays - a.loginDays;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const totalLoginDays = members.reduce((sum, member) => sum + member.loginDays, 0);
  const averageLoginDays = members.length > 0 ? Math.round(totalLoginDays / members.length) : 0;
  const topAttender = members.reduce((max, member) => 
    member.loginDays > max.loginDays ? member : max, members[0] || { loginDays: 0 }
  );

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading attendance data...</p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h1 className="page-title">📅 Attendance Tracking</h1>
          <p className="page-subtitle">Monitor member login days and activity</p>
        </div>
      </div>

      {/* Attendance Stats */}
      <div className="attendance-stats">
        <div className="attendance-stat-card">
          <div className="att-stat-icon">📊</div>
          <div className="att-stat-content">
            <h3>Total Login Days</h3>
            <p className="att-stat-value">{totalLoginDays}</p>
            <p className="att-stat-subtitle">Across all members</p>
          </div>
        </div>

        <div className="attendance-stat-card">
          <div className="att-stat-icon">📈</div>
          <div className="att-stat-content">
            <h3>Average Login Days</h3>
            <p className="att-stat-value">{averageLoginDays}</p>
            <p className="att-stat-subtitle">Per member</p>
          </div>
        </div>

        <div className="attendance-stat-card highlight">
          <div className="att-stat-icon">🏆</div>
          <div className="att-stat-content">
            <h3>Top Attender</h3>
            <p className="att-stat-value">{topAttender.name}</p>
            <p className="att-stat-subtitle">{topAttender.loginDays} days</p>
          </div>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="sort-controls">
        <label>Sort by:</label>
        <button
          className={`sort-btn ${sortBy === 'loginDays' ? 'active' : ''}`}
          onClick={() => setSortBy('loginDays')}
        >
          📊 Login Days
        </button>
        <button
          className={`sort-btn ${sortBy === 'name' ? 'active' : ''}`}
          onClick={() => setSortBy('name')}
        >
          🔤 Name
        </button>
      </div>

      {/* Attendance Leaderboard */}
      <div className="attendance-section">
        <h2 className="section-title">🏆 Attendance Leaderboard</h2>
        <div className="leaderboard">
          {sortedMembers.map((member, index) => {
            const percentage = (member.loginDays / 90) * 100; // Assuming 90 days tracking period
            
            return (
              <div key={member.id} className="leaderboard-item">
                <div className="leaderboard-rank">
                  {index === 0 && '🥇'}
                  {index === 1 && '🥈'}
                  {index === 2 && '🥉'}
                  {index > 2 && `#${index + 1}`}
                </div>

                <div className="leaderboard-member">
                  <span className="member-avatar-small">{member.avatar}</span>
                  <div className="member-details">
                    <h4>{member.name}</h4>
                    <p>{member.email}</p>
                  </div>
                </div>

                <div className="leaderboard-progress">
                  <div className="progress-info">
                    <span className="progress-label">Login Days</span>
                    <span className="progress-value">{member.loginDays} days</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="leaderboard-status">
                  <span className={`status-dot ${member.subscriptionStatus}`}></span>
                  <span className="status-text">{member.subscriptionStatus}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Attendance Details Table */}
      <div className="attendance-table-section">
        <h2 className="section-title">📋 Detailed Attendance Records</h2>
        <div className="table-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Member</th>
                <th>Join Date</th>
                <th>Login Days</th>
                <th>Attendance Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedMembers.map((member, index) => {
                const daysSinceJoin = Math.floor((new Date() - new Date(member.joinDate)) / (1000 * 60 * 60 * 24));
                const attendanceRate = daysSinceJoin > 0 ? Math.round((member.loginDays / daysSinceJoin) * 100) : 0;
                
                return (
                  <tr key={member.id}>
                    <td className="rank-cell">
                      {index === 0 && '🥇'}
                      {index === 1 && '🥈'}
                      {index === 2 && '🥉'}
                      {index > 2 && `#${index + 1}`}
                    </td>
                    <td>
                      <div className="table-member-cell">
                        <span className="member-avatar-small">{member.avatar}</span>
                        <div>
                          <div className="member-name-small">{member.name}</div>
                          <div className="member-email-small">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{member.joinDate}</td>
                    <td>
                      <div className="login-days-badge">
                        {member.loginDays} days
                      </div>
                    </td>
                    <td>
                      <div className="attendance-rate">
                        <span className={`rate-badge ${attendanceRate > 70 ? 'high' : attendanceRate > 40 ? 'medium' : 'low'}`}>
                          {attendanceRate}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${member.subscriptionStatus}`}>
                        {member.subscriptionStatus === 'active' ? '✓ Active' : '✕ Inactive'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;