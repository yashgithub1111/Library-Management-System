const Transaction = require('../models/Transaction');
const Book = require('../models/Book');
const User = require('../models/User');

const issueBook = async (req, res) => {
  const { bookId, userId } = req.body;

  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const transaction = new Transaction({
    bookId,
    userId,
    issueDate: Date.now(),
    returnDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
  });

  await transaction.save();
  res.status(201).json({ message: 'Book issued successfully', transaction });
};

const returnBook = async (req, res) => {
  const { transactionId } = req.body;

  const transaction = await Transaction.findById(transactionId);
  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  transaction.status = 'returned';
  transaction.returnDate = Date.now();

  await transaction.save();
  res.status(200).json({ message: 'Book returned successfully', transaction });
};

module.exports = { issueBook, returnBook };
