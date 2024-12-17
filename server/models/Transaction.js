const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['issued', 'returned'],
    default: 'issued',
  },
});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
