const express = require('express');
const router = express.Router();

// Book model
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new book
router.post('/', async (req, res) => {
  const { title, author, genre, available } = req.body;
  const book = new Book({
    title,
    author,
    genre,
    available,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
