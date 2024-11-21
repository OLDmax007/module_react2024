import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPostSlice} from "../../models/storeModels/IPostSlice";
import {IPost} from "../../models/basicModels/IPost";

const postInitState:IPostSlice = {
    posts: []
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {
        loadPosts: (state,  action:PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        }
    }
})


export const {loadPosts }= postSlice.actions



export default postSlice