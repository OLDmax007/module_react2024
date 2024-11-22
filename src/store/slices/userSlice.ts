import {asyncThunkCreator, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserSlice} from "../../models/storeModels/IUserSlice";
import {userService} from "../../services/api.jp.service";
import {AxiosError} from "axios";
import {IUser} from "../../models/IUser";

const userInitState: IUserSlice = {
    users: []
}

const loadUsers = createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const usersApi = await userService.getAllUsers()
            return thunkAPI.fulfillWithValue(usersApi)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    })


const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.error('Error: ', action.payload);
            })
    }

})

export const userSliceAction = {...userSlice.actions, loadUsers}


export default userSlice