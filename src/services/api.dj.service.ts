import axios from "axios";
import {IDJResponse} from "../models/BasicModels";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        "Content-Type": 'application/json'
    }
})


export const dummyJsonData = async <T,> (endpoint: string): Promise<IDJResponse & T> => {
    const { data } = await axiosInstance.get<IDJResponse & T>(endpoint);
    return data;
};