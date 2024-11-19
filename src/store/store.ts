import {create} from "zustand/react";
import {StoreType} from "../models/StoreType";

//
// create<StoreType>()((set) => {
//     return {
//         userSlice: {
//             allUsers: [],
//             fillUsers: (users) => {
//                 return set(state => (
//                     {...state, userSlice: {
//                         ...state.userSlice,
//                             allUsers: users
//                         }}
//                 ))
//             }
//         }
//     }
// })

const mainStore = create<StoreType>()((set) => {
    return {
        userSlice: {
            allUsers: [],
            fillUsers: (users) => {
                return set(state => (
                    {userSlice: {
                        ...state.userSlice,
                            allUsers: users
                        }}
                ))
            }
        }
    }
})

export  default  mainStore