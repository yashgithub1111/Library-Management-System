import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>{book.available ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default BookCard;
