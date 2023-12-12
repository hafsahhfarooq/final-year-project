import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getDashboardData = async (userId) => {
    try {
      const response = await api.get(`/dashboard/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching dashboard data');
    }
};

export default api;