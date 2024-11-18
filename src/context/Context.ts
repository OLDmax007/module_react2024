import {createContext} from "react";
import {StoreType} from "../models/StoreType";


export let defaultValue:StoreType = {userSlice:
        {allUsers: [],
            user: null}}

let context = createContext<StoreType>(defaultValue)

export default context