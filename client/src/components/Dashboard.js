import React, { useEffect, useState } from 'react';
import { getBooks } from '../api/book';
import BookCard from './BookCard';

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  return (
    <div className="dashboard">
      <h2>Library Dashboard</h2>
      <div className="books-list">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
