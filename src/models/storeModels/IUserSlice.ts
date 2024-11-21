import {IUser} from "../basicModels/IUser";

export interface IUserSlice {
    users: IUser[]
    user: IUser| null
}