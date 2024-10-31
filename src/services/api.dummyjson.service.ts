import axios from "axios";
import {IUser} from "../models/IUser";
import {IDJResponse} from "../models/IDJResponse";
import {ICart} from "../models/ICart";
import cart from "../components/Cart";

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
    getAll: async (userId: string, page: number): Promise<{ carts: ICart[]; flag: boolean; }> => {
        const skip = (page - 1) * 1;
        const {data: {carts, total}} = await axiosInstance.get<IDJResponse & {
            carts: ICart[],
            total: number
        }>(`/users/${userId}/carts`, {
            params: {
                skip
            },
        });

        carts.forEach((cart:ICart, index:number) => {
            cart['uniqeId'] = index+1;
        });

        console.log(carts)
        const lastIndex = carts[carts.length - 1].uniqeId
        const flag = lastIndex > total;
        console.log(flag)

        console.log(total)
        console.log(lastIndex, flag)
        return {carts, flag}
    }
}

export {usersSerive, cartsService}