import {ITokens} from "./ITokens";

export interface IUser extends ITokens{
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
}
