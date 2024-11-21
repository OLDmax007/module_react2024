import {IUserSlice} from "../../models/storeModels/IUserSlice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/basicModels/IUser";

const userInitSlice: IUserSlice = {
    users: [],
    user: null
}

const userSlice = createSlice(
    {
        name: 'userSliceName',
        initialState: userInitSlice,
        reducers: {
            loadUsers: (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            },
            loadUser: (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            }
        }
    }
)

export const {loadUsers}= userSlice.actions

export default userSlice