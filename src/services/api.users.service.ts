import axiosApi from "./axiosApi";
import { AxiosResponse } from 'axios';
import {IApiUsers} from "../models/IApiUsers";


export const getUsers = async ():Promise<IApiUsers> => {
    const axiosResponse:AxiosResponse<IApiUsers> = await axiosApi.get('/users', {

        params: {
            limit: 5
        }
    })

    console.log('justaxios:',axiosResponse)
    console.log('axios data:',axiosResponse.data)
    return axiosResponse.data
}

export default axiosApi;