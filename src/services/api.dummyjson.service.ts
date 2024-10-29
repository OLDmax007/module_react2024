import axios from "axios";
import {IResponseDMJ} from "../models/IResponseDMJ";
import {ITodo} from "../models/ITodo";

const axiosInstance = axios.create({
        baseURL: 'https://dummyjson.com',
        headers: {'Content-Type': 'application/json'}
    }
)


const todoService = {
    getAll: async (page: number): Promise<IResponseDMJ & { todos: ITodo[] }> => {
        const skip: number = (page - 1) * 30
        return (await (axiosInstance.get<IResponseDMJ & { todos: ITodo[] }>('/todos', {
            params: {
                skip
            }
        }))).data
    }
}

export {todoService}
