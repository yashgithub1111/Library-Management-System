import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    localStorage.setItem('token', response.data.token); // Store JWT token in localStorage
  } catch (error) {
    console.error('Login error:', error);
  }
};
