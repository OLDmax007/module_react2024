import {IApiUsers} from "../models/IApiUsers";
import {ITodo} from "../models/ITodo";
import {IUser} from "../models/IUser";
import axios from 'axios';

// lib axios replacement of the fetch

const axiosInstancePlaceHolder = axios.create(
    {baseURL: 'https://jsonplaceholder.typicode.com',
      headers: {'Content-Type' : 'application/json'}
    }
)

const axiosInstanceDummyJson = axios.create(
    {baseURL: 'https://dummyjson.com',
        headers: {'Content-Type' : 'application/json'}
    }
)

axiosInstanceDummyJson.interceptors.request.use((request) => {
    if (request.method === 'get') {
        request.params = {
            limit: 3
        }
    }
    return request
})



export const getUsers = async ():Promise<IApiUsers> => {
  const resposne = await  axiosInstanceDummyJson.get('/users',  {
  });

  return resposne.data
}

export const getTodoOfUser = async (user:IUser):Promise<ITodo[]> => {
    const resposne = await axiosInstancePlaceHolder.get('/todos', {
        params: {
            userId: user.id,
        }
    })

    return resposne.data.slice(0,5)
}

