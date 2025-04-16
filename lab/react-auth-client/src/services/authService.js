import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const register = async (username, email, password) => {
    const response = await axios.post(`${API_URL}/register`, {
        username,
        email,
        password
    });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password
    });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
};

export const authHeader = () => {
    const user = getCurrentUser();
    if (user && user.token) {
        return { Authorization: `Bearer ${user.token}` };
    }
    return {};
};