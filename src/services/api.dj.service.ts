import axios from "axios";
import {ILogin} from "../models/ILogin";
import {IUser} from "../models/IUser";
import {IToken} from "../models/IToken";
import {IProduct} from "../models/IProduct";
import {IDJResponse} from "../models/IDJResponse";
import {retriveLocalStorage} from "../helpers/helpers";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {
        "Content-Type": 'application/json'
    }
})


axiosInstance.interceptors.request.use(request => {
    if (request.method?.toUpperCase() === 'GET') {
        const token = retriveLocalStorage<IUser & IToken>('currentUser');
        request.headers.Authorization = 'Bearer ' + token.accessToken
    }
    return request
})


 export const userService = {
    login: async ({username, password, expiresInMins}: ILogin): Promise<IUser & IToken> => {
        const {data: userWithToken} = await axiosInstance.post<IUser & IToken>('/login', {
            username,
            password,
            expiresInMins
        })
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        localStorage.setItem('currentUser', JSON.stringify(userWithToken))
        users.push(userWithToken)
        localStorage.setItem('users', JSON.stringify(users));

        console.log('-----------------')
        console.log(userWithToken.accessToken)
        console.log(userWithToken.refreshToken)

        return userWithToken
    },

    refreshToken: async () => {
        const user = retriveLocalStorage<IUser & IToken>('currentUser');

        console.log('user')
        console.log(user.accessToken)
        console.log(user.refreshToken)

        const {data: {accessToken, refreshToken}} = await axiosInstance.post<IToken>('/refresh', {
            refreshToken: user.refreshToken,
            expiresInMins: 0
        })

        console.log(accessToken)
        console.log(refreshToken)

        user.accessToken = accessToken;
        user.refreshToken = refreshToken;
        console.log(user)
        localStorage.setItem('currentUser', JSON.stringify(user))

    },

     loadAuthProductsOfUser: async (): Promise<IProduct[] | undefined> => {
         const {data} = await axiosInstance.get<IDJResponse>('products')
         return data.products
     }
}


