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

const usersService: { getUsers: () => Promise<IUser[]>, getUser: (id: string) => Promise<IUser> } = {
    getUsers: async (): Promise<IUser[]> => {
        return (await axiosInstance.get<IUser[]>('/users')).data
    },

    getUser: async (id: string): Promise<IUser> => {
        return (await axiosInstance.get<IUser>('/users/' + id)).data
    }
}


const postsService: { getPosts: () => Promise<IPost[]>, getPostsOfUser: (id: string) => Promise<IPost[]> } = {
    getPosts: async (): Promise<IPost[]> => {
        return (await axiosInstance.get<IPost[]>('/posts', {
            params: {
                _limit: 30
            }
        })).data
    },
    getPostsOfUser: async (id: string): Promise<IPost[]> => {
        return (await axiosInstance.get<IPost[]>('/posts', {
            params: {
                userId: id
            }
        })).data
    }
}

const commentsService: { getComments: () => Promise<IComment[]>; getCommentsOfPost: (id:string) => Promise<IComment[]> } = {
    getComments: async (): Promise<IComment[]> => {
        return (await axiosInstance.get<IComment[]>('/comments')).data
    },

    getCommentsOfPost: async (id: string): Promise<IComment[]> => {
        return (await axiosInstance.get<IComment[]>('/comments', {
            params: {
                postId: id
            }
        })).data
    }
}

export {usersService, postsService, commentsService};