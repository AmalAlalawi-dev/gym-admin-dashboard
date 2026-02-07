import React, { useState, useEffect } from 'react';
import MemberTable from '../components/MemberTable';
import MemberForm from '../components/MemberForm';
import { initialMembers } from '../data/mockData';

function Members() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Simulate API call with useEffect
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setMembers(initialMembers);
      setFilteredMembers(initialMembers);
      setIsLoading(false);
    }, 500);
  }, []);

  // Search and filter logic
  useEffect(() => {
    let result = members;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== 'all') {
      result = result.filter(member => member.subscriptionStatus === filterStatus);
    }

    setFilteredMembers(result);
  }, [searchTerm, filterStatus, members]);

  const handleAddMember = () => {
    setEditingMember(null);
    setShowForm(true);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(prev => prev.filter(m => m.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setMembers(prev => prev.map(member => {
      if (member.id === id) {
        return {
          ...member,
          subscriptionStatus: member.subscriptionStatus === 'active' ? 'inactive' : 'active'
        };
      }
      return member;
    }));
  };

  const handleSaveMember = (memberData) => {
    if (editingMember) {
      // Update existing member
      setMembers(prev => prev.map(m =>
        m.id === editingMember.id ? { ...memberData, id: m.id } : m
      ));
    } else {
      // Add new member
      const newMember = {
        ...memberData,
        id: Math.max(...members.map(m => m.id)) + 1,
        joinDate: new Date().toISOString().split('T')[0],
        lastPayment: new Date().toISOString().split('T')[0],
        nextPayment: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        monthlyFee: 300,
        avatar: '👤'
      };
      setMembers(prev => [...prev, newMember]);
    }
    setShowForm(false);
    setEditingMember(null);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading members...</p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h1 className="page-title">👥 Members Management</h1>
          <p className="page-subtitle">Manage your gym members</p>
        </div>
        <button className="btn-primary" onClick={handleAddMember}>
          ➕ Add New Member
        </button>
      </div>

      {/* Search and Filter */}
      <div className="filter-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label>Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Members</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
      </div>

      {/* Members Table */}
      {filteredMembers.length > 0 ? (
        <MemberTable
          members={filteredMembers}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No members found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Member Form Modal */}
      {showForm && (
        <MemberForm
          member={editingMember}
          onSave={handleSaveMember}
          onCancel={() => {
            setShowForm(false);
            setEditingMember(null);
          }}
        />
      )}
    </div>
  );
}

export default Members;