import axiosApi from "./axiosApi";
import {IApiPosts} from "../models/IApiPosts";
import {AxiosResponse} from "axios";


export const getPosts =async (id:number):Promise<IApiPosts> => {
    const axiosResponse:AxiosResponse<IApiPosts> =  await axiosApi.get('/posts/user/'+id, {
        params: {
            limit: 0,
        }
    })
    return axiosResponse.data
}

