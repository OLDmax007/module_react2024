import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)

const usersService:{ getUsers: () => Promise<IUser[]>,  getUser: (id:string) => Promise<IUser>} = {
    getUsers: async ():Promise<IUser[]>  => {
        return (await axiosInstance.get<IUser[]>('/users')).data
    },

    getUser: async (id:string):Promise<IUser>  => {
        return (await axiosInstance.get<IUser>('/users/' + id)).data
    }
}


const postsService:{getPosts: () => Promise<IPost[]>;} = {
    getPosts: async ():Promise<IPost[]>  => {
        return (await axiosInstance.get<IPost[]>('/posts', {
            params: {
                limit: 30
            }
        })).data
    }
}

const commentsService: {getComments: () => Promise<IComment[]>;} = {
    getComments: async ():Promise<IComment[]>  => {
        return (await axiosInstance.get<IComment[]>('/comments')).data
    }
}

export { usersService, postsService, commentsService };