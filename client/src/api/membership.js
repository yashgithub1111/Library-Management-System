import axios from 'axios';

const API_URL = 'http://localhost:5000/api/membership';

export const addMembership = async (userId, type) => {
  await axios.post(API_URL, { userId, type });
};
