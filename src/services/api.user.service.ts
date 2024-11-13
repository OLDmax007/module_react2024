import axios from "axios";
import {IUser} from "../models/IUser";
import {IUserForm} from "../models/IUserForm";
import {ITodo} from "../models/ITodo";
import {IDJResponse} from "../models/IDJResponse";
import {retriveLocalStorage} from "../helpers/helperForApi";
import {ITokens} from "../models/ITokens";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {
        "Content-Type": 'application/json'
    }
})

axiosInstance.interceptors.request.use(request => {
    if (request.method?.toUpperCase() === 'GET') {
        const token = retriveLocalStorage<IUser & ITokens>('currentUser');
        request.headers.Authorization = 'Bearer ' + token.accessToken
    }
    return request
})


const userService = {
    login: async ({username, password}: IUserForm):Promise<IUser> => {
        const {data:userData} = await axiosInstance.post<IUser>('login', {
            username,
            password,
            expiresInMins: 1
        })

        const usersList = JSON.parse(localStorage.getItem('users') || '[]')
        usersList.push(userData)
        localStorage.setItem('users', JSON.stringify(usersList))
        localStorage.setItem('currentUser', JSON.stringify(userData))
        return userData

    },

    refreshToken: async () => {
        const user = retriveLocalStorage<IUser & ITokens>('currentUser')

        const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokens>('refresh', {
            refreshToken: user.refreshToken,
            expiresInMins: 1
        })

        user.accessToken = accessToken
        user.refreshToken = refreshToken

        localStorage.setItem('currentUser', JSON.stringify(user))
    },

    getTodosOfUser: async ():Promise<ITodo[]> => {
        const {data:{todos}} =await axiosInstance.get<{ todos: ITodo[] } & IDJResponse>('/todos')
        return todos
    }


}


export default userService
