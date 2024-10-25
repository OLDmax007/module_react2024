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

const usersService:{ getUsers: () => Promise<IUser[]>;} = {
    getUsers: async ():Promise<IUser[]>  => {
        return (await axiosInstance.get<IUser[]>('/users')).data
    }
}


const postsService:{getPosts: () => Promise<IPost[]>;} = {
    getPosts: async ():Promise<IPost[]>  => {
        return (await axiosInstance.get<IPost[]>('/posts')).data
    }
}

const commentsService: {getComments: () => Promise<IComment[]>;} = {
    getComments: async ():Promise<IComment[]>  => {
        return (await axiosInstance.get<IComment[]>('/comments')).data
    }
}

export { usersService, postsService, commentsService };