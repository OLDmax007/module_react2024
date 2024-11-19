import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        "Content-Type": 'application/json'
    }
})

const userService = {
    getAllUsers: async ():Promise<IUser[]> => {
        const {data:users} = await axiosInstance.get<IUser[]>('users')
        return users
    }
}
const postService = {
    getAllPosts: async ():Promise<IPost[]> => {
        const {data:posts} = await  axiosInstance.get<IPost[]>('posts')
        return posts
    }
}
const commentService = {
    getAllComments: async ():Promise<IComment[]> => {
        const {data:comments} = await  axiosInstance.get<IComment[]>('comments')
        return comments
    }
}

export {userService, postService, commentService}