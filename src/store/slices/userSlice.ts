import {asyncThunkCreator, createSlice} from "@reduxjs/toolkit";
import {IUserSlice} from "../../models/storeModels/IUserSlice";

const userInitState:IUserSlice = {
    users: []
}

const loadUsers = asyncThunkCreator((t) => {

}





const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},
    extraReducers: builder => {
        builder
    }

})



