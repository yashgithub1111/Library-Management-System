import React, { useState } from 'react';
import { issueBook, returnBook } from '../api/transaction';

const TransactionForm = ({ book }) => {
  const [userId, setUserId] = useState('');
  const [transactionType, setTransactionType] = useState('issue');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (transactionType === 'issue') {
      await issueBook(userId, book._id);
    } else {
      await returnBook(userId, book._id, returnDate);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      {transactionType === 'return' && (
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />
      )}
      <button type="submit">{transactionType === 'issue' ? 'Issue Book' : 'Return Book'}</button>
    </form>
  );
};

export default TransactionForm;
