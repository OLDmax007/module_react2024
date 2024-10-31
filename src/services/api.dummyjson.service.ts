import axios from "axios";
import {IUser} from "../models/IUser";
import {IDJResponse} from "../models/IDJResponse";
import {ICart} from "../models/ICart";

const axiosInstance = axios.create({
            baseURL: 'https://dummyjson.com/',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
;

const usersSerive = {
    getAll: async ():Promise<IUser[]> => {
        const {data: {users}} = await axiosInstance.get<IDJResponse & {users: IUser[]}>('/users', {
            params: {
                skip:30
            }
        });
        return users
    }
}

const cartsService  = {
    getAll: async (id:string):Promise<ICart[]> => {
        const {data: {carts}} = await axiosInstance.get<IDJResponse & {carts: ICart[]}>(`/users/${id}/carts`, {
        });
        return carts
    }
}

export {usersSerive, cartsService}