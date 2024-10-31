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
    getAllUsers: async (): Promise<IUser[]> => {
        const {data: {users}} = await axiosInstance.get<IDJResponse & { users: IUser[] }>('/users', {
            params: {
                skip: 30
            }
        });
        return users
    }
}

const cartsService = {
    getCartsOfUser: async (userId: string, page: number): Promise<{ carts: ICart[]; flag: boolean; }> => {
        const skip = (page - 1) * 1;
        const {data: {carts, total}} = await axiosInstance.get<IDJResponse & {
            carts: ICart[],
            total: number
        }>(`/users/${userId}/carts`, {
            params: {
                skip,
                limit: 1
            },
        });


        if (carts.length === 0) {
            return { carts, flag: true };
        }

        carts.forEach((cart: ICart, index: number) => {
            cart['uniqeId'] = skip + 1;
        });

        const lastIndex = carts[carts.length - 1].uniqeId
        const flag = lastIndex >= total ? true : false;
        return {carts, flag}

    }
}

export {usersSerive, cartsService}