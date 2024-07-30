import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const signUp = (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

const getProfile = (token) => {
  return axios.get(`${API_URL}/profile`, {
    headers: { 'x-auth-token': token }
  });
};

export { signUp, login, getProfile };
