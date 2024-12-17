import React, { useState } from 'react';
import { addBook } from '../api/book';

const BookForm = ({ book, updateMode = false }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [type, setType] = useState(book ? book.type : 'book');
  const [available, setAvailable] = useState(book ? book.available : true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, type, available };
    if (updateMode) {
      // Update book logic here
      console.log('Update Book:', newBook);
    } else {
      await addBook(newBook);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="book">Book</option>
        <option value="movie">Movie</option>
      </select>
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit">{updateMode ? 'Update Book' : 'Add Book'}</button>
    </form>
  );
};

export default BookForm;
