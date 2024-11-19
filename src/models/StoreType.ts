import {IUser} from "./IUser";

export type StoreType = {
    userSlice: {
        allUsers: IUser[],
        fillUsers: (users:IUser[]) => void
    }
}
