import axiosApi from "./axiosApi";
import {IUser} from "../models/IUser";
import {IApiUsers} from "../models/IApiUsers";

export const getUsers = async ():Promise<IApiUsers> => {
    const axiosResponse = await axiosApi.get('/users', {

        params: {
            limit: 5
        }
    })

    console.log(axiosResponse)
    console.log(axiosResponse.data)
    return axiosResponse.data
}

export default axiosApi;