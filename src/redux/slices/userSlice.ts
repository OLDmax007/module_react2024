import {IUserSlice} from "../../models/storeModels/IUserSlice";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/basicModels/IUser";

const userInitSlice: IUserSlice = {
    users: [],
    user: null
}

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
       const usersApi =  await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

        console.log(usersApi)
        return thunkAPI.fulfillWithValue(usersApi);
    }
    catch (error) {
            return thunkAPI.fulfillWithValue(error)
    }
 })


const loadUser = createAsyncThunk('userSlice/loadUser', async (id:number, thunkAPI) => {
    try {
        const userApi =  await fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
        return thunkAPI.fulfillWithValue(userApi);
    }
    catch (error) {
        return thunkAPI.fulfillWithValue(error)
    }
})



const userSlice = createSlice(
    {
        name: 'userSlice',
        initialState: userInitSlice,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
                        state.users = action.payload
                })
                .addCase(loadUsers.rejected, (state, action:PayloadAction<any>) => {
                    console.log(action.payload)
                })
                .addCase(loadUser.fulfilled, (state, action:PayloadAction<IUser>) => {
                    state.user = action.payload
                })
                .addCase(loadUser.rejected, (state, action:PayloadAction<any>) => {
                    console.log(action.payload)
                })
                .addMatcher(isFulfilled(loadUser, loadUsers),  (state, action) => {
                    console.log('pes')
                })
        }
    }
)

export const userSliceActions = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}

export default userSlice