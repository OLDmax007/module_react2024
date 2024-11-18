import axios from "axios";
import {IUser} from "../models/IUser";
import {IDJResponse} from "../models/IDJResponse";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        "Content-Type": 'application/json'
    }
})

export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const {data:{users}} = await axiosInstance.get<IDJResponse & {users: IUser[] }>('users')
        return users
    }
}