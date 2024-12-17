const express = require('express');
const router = express.Router();

// Transaction model
const Transaction = require('../models/Transaction');

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new transaction (issue book)
router.post('/', async (req, res) => {
  const { bookId, userId, issueDate, returnDate } = req.body;
  const transaction = new Transaction({
    bookId,
    userId,
    issueDate,
    returnDate,
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
