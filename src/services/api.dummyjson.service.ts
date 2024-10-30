import axios from "axios";
import {IResponseDMJ} from "../models/IResponseDMJ";
import {ITodo} from "../models/ITodo";

const axiosInstance = axios.create({
        baseURL: 'https://dummyjson.com',
        headers: {'Content-Type': 'application/json'}
    }
)


const todoService = {
    getAll: async (page: number): Promise<{ todos: ITodo[] } & {flag:boolean} > => {
    const skip: number = (page - 1) * 30
    const {data: {total, todos}} = await (axiosInstance.get<IResponseDMJ & { todos: ITodo[] }>('/todos', {
        params: {
            skip
        }
    }))


    const lastId = todos[todos.length - 1].id
    const flag = lastId >= total ? true : false;

    console.log({ todos, flag })
    return { todos, flag };
}
}

export {todoService}
