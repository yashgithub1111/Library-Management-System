const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use CORS middleware to allow cross-origin requests (for frontend and backend communication)
app.use(cors());

// Use morgan for logging HTTP requests (only in development mode)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Routes import
const bookRoutes = require('./routes/book');
const membershipRoutes = require('./routes/membership');
const transactionRoutes = require('./routes/transaction');
const userRoutes = require('./routes/user');

// Use Routes
app.use('/api/books', bookRoutes);
app.use('/api/memberships', membershipRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

// Static file configuration (for serving frontend in production)
if (process.env.NODE_ENV === 'production') {
  // Serve static assets if in production
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React's index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Default route for API
app.get('/', (req, res) => {
  res.send('Library Management System API');
});

// 404 route for undefined API routes
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
