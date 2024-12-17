import axios from 'axios';

const API_URL = 'http://localhost:5000/api/transaction';

export const issueBook = async (userId, bookId) => {
  await axios.post(`${API_URL}/issue`, { userId, bookId });
};

export const returnBook = async (userId, bookId, returnDate) => {
  await axios.post(`${API_URL}/return`, { userId, bookId, returnDate });
};
