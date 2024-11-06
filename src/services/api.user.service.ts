import axios from "axios";
import {IFormData} from "../models/IFormData";
import {date} from "joi";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
})


export const userServices = {
    postUser: async (formData: IFormData) => {
        try {
            return await (axiosInstance.post('/posts', formData));
        }
        catch (error) {
            console.error("Error posting user data:", error);
            throw error;
        }
    }
}