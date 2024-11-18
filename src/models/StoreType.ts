import {IUser} from "./IUser";

export type StoreType = {
    userSlice: {
        allUsers: IUser[],
        user: IUser | null
    }
}
