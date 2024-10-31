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
    getAll: async (): Promise<IUser[]> => {
        const {data: {users}} = await axiosInstance.get<IDJResponse & { users: IUser[] }>('/users', {
            params: {
                skip: 30
            }
        });
        return users
    }
}

const cartsService = {
    getAll: async (id: string, page: number): Promise<{ carts: ICart[]; flag: boolean; }> => {
        const skip = (page - 1) * 1;
        const {data: {carts, total}} = await axiosInstance.get<IDJResponse & { carts: ICart[] }>(`/users/${id}/carts`, {
            params: {
                skip
            },

        });

        const lastIndex = carts[carts.length - 1];
        const flag =  +lastIndex >= 0 ? true : false;

        return {carts, flag}
    }
}

export {usersSerive, cartsService}