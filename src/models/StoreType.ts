import {IUser} from "./IUser";

export type StoreType = {
    userSlice: {
        allUsers: IUser[],
        user: IUser | null,
        fillUser: (value:IUser) => void
        fillUsers: (value:IUser[]) => void
    }
}
