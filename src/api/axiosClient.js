import axios from 'axios';
import { isAuthenticated } from '../utils/rerender';
const token = isAuthenticated().accessToken;
export const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
});
export default instance;