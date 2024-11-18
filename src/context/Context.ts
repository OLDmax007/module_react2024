import {createContext} from "react";
import {StoreType} from "../models/StoreType";
import {IUser} from "../models/IUser";


export let defaultValue:StoreType = {userSlice:
        {allUsers: [],
            user: null,
            fillUsers: (value:IUser[]) => {
            defaultValue.userSlice.allUsers = value
            }
        }
}

let context = createContext<StoreType>(defaultValue)

export default context