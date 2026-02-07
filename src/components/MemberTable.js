import React from 'react';

function MemberTable({ members, onEdit, onDelete, onToggleStatus }) {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Contact</th>
            <th>Join Date</th>
            <th>Login Days</th>
            <th>Status</th>
            <th>Next Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                <div className="member-cell">
                  <span className="member-avatar">{member.avatar}</span>
                  <div>
                    <div className="member-name">{member.name}</div>
                    <div className="member-type">{member.subscriptionType}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="contact-cell">
                  <div>{member.email}</div>
                  <div className="phone">{member.phone}</div>
                </div>
              </td>
              <td>{member.joinDate}</td>
              <td>
                <div className="login-days">
                  <span className="days-badge">{member.loginDays} days</span>
                </div>
              </td>
              <td>
                <span className={`status-badge ${member.subscriptionStatus}`}>
                  {member.subscriptionStatus === 'active' ? '✓ Active' : '✕ Inactive'}
                </span>
              </td>
              <td>{member.nextPayment}</td>
              <td>
                <div className="action-buttons">
                  <button 
                    className="btn-toggle"
                    onClick={() => onToggleStatus(member.id)}
                    title={member.subscriptionStatus === 'active' ? 'Deactivate' : 'Activate'}
                  >
                    {member.subscriptionStatus === 'active' ? '⏸️' : '▶️'}
                  </button>
                  <button 
                    className="btn-edit"
                    onClick={() => onEdit(member)}
                  >
                    ✏️
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => onDelete(member.id)}
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberTable;