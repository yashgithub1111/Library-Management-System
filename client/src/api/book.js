import axios from 'axios';

const API_URL = 'http://localhost:5000/api/book';

export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBook = async (book) => {
  await axios.post(API_URL, book);
};
