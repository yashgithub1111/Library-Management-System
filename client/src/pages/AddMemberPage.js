import React, { useState } from 'react';
import { addMembership } from '../api/membership';

const AddMemberPage = () => {
  const [userId, setUserId] = useState('');
  const [type, setType] = useState('6 months');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMembership(userId, type);
  };

  return (
    <div>
      <h2>Add Membership</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="6 months">6 months</option>
          <option value="1 year">1 year</option>
          <option value="2 years">2 years</option>
        </select>
        <button type="submit">Add Membership</button>
      </form>
    </div>
  );
};

export default AddMemberPage;
