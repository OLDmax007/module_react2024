import {IPostSlice} from "../../models/storeModels/IPostSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {commentService, postService} from "../../services/api.jp.service";
import {IPost} from "../../models/IPost";
import {IComment} from "../../models/IComment";

const postInitState: IPostSlice = {
    posts: [],
    postComments: []
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

const loadCommentsToPost = createAsyncThunk('postSlice/loadCommentsToPost',
    async (id: number, thunkAPI) => {
        try {
            const postCommentsApi = await commentService.getCommentsForPost(id)
            return thunkAPI.fulfillWithValue(postCommentsApi)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.message)
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
                .addCase(loadPosts.rejected, (state, action:PayloadAction<any>) => {
                    console.log('Error: ', action.payload)
                })
                .addCase(loadCommentsToPost.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                    state.postComments = action.payload
                })
                .addCase(loadCommentsToPost.rejected, (state, action:PayloadAction<any>) => {
                    console.log('Error: ', action.payload)
                })
        }

    }
)

export const postSliceActions = { ...postSlice.actions, loadPosts, loadCommentsToPost };

export default postSlice