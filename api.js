import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = (data) => axios.post(`${API_URL}/auth/register`, data);
export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const runCode = (code) => axios.post(`${API_URL}/code/run`, { code });
export const sendMessage = (message) => axios.post(`${API_URL}/chat`, { message });
export const updateProgress = (data) => axios.post(`${API_URL}/user/progress`, data);
export const getRecommendations = (userId) => axios.post(`${API_URL}/user/recommendations`, { userId });
