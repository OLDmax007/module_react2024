import axiosApi from "./axiosApi";
import {IPost} from "../models/IPost";
import {IApiPosts} from "../models/IApiPosts";

export const getPosts =async (id:number):Promise<IApiPosts> => {
    const axiosResponse =  await axiosApi.get('/posts/user/'+id, {
        params: {
            limit: 0,
        }
    })
    return axiosResponse.data
}

