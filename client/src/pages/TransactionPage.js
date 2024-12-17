import React from 'react';
import TransactionForm from '../components/TransactionForm';

const TransactionPage = () => {
  const book = { _id: '12345', title: 'Book Title', author: 'Author Name' };  // Example book

  return (
    <div>
      <h2>Book Transaction</h2>
      <TransactionForm book={book} />
    </div>
  );
};

export default TransactionPage;
