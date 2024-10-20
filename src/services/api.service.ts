import {IApiUsers} from "../models/IApiUsers";
import {ITodo} from "../models/ITodo";
import {IUser} from "../models/IUser";
import axios from 'axios';


export const getUsers = async ():Promise<IApiUsers> => {
  const resposne = await fetch('https://dummyjson.com/users?limit=3');
  return resposne.json()
}

export const getTodoOfUser = async (user:IUser):Promise<ITodo[]> => {
  const resposne = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id);
  return resposne.json()
}

// lib axios replacement of the fetch


