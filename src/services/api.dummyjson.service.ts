import axios from "axios";
import {IUser} from "../models/IUser";
import {IDJResponse} from "../models/IDJResponse";
import {ICart} from "../models/ICart";
import {isFinalIndex, toCreateUniqeIdForItem} from "../modules/utils";

const axiosInstance = axios.create({
            baseURL: 'https://dummyjson.com/',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
;

const usersSerive = {
    getAllUsers: async (page: number): Promise<{ users: IUser[]; flag: boolean }> => {
        const skip = (page - 1) * 10;
        const {data: {users, total}} = await axiosInstance.get<IDJResponse & { users: IUser[] }>('/users', {
            params: {
                skip,
                limit: 10
            }
        });

        toCreateUniqeIdForItem(users)

        const arr: IUser[] = users;
        const flag = isFinalIndex(arr, total)
        return {users, flag}
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


        toCreateUniqeIdForItem(carts)

        const arr: ICart[] = carts;
        const flag = isFinalIndex(arr, total)
        return {carts, flag}
    }
}

export {usersSerive, cartsService}