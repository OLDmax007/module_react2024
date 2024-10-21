import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosApi