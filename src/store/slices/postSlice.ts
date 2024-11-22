import {IPostSlice} from "../../models/storeModels/IPostSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postService} from "../../services/api.jp.service";
import {IPost} from "../../models/IPost";

const postInitState: IPostSlice = {
    posts: []
}


const loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI) => {
    try {
        const postsApi = await postService.getAllPosts();
        return thunkAPI.fulfillWithValue(postsApi)

    } catch (e) {
        const error = e as AxiosError
        return thunkAPI.rejectWithValue(error)
    }
})

 const postSlice = createSlice(
    {
        name: 'postSLice',
        initialState: postInitState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
                .addCase(loadPosts.rejected, (state, action) => {
                    console.log('Error: ', action.payload)
                })
        }
    }
)


export default postSlice