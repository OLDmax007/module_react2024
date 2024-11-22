import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {ICommentSlice} from "../../models/storeModels/ICommentSlice";
import {commentService} from "../../services/api.jp.service";
import {IComment} from "../../models/IComment";

const commentInitState: ICommentSlice = {
    comments: []
}

const loadComments = createAsyncThunk('commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const commentsApi = await commentService.getAllComments()
            return thunkAPI.fulfillWithValue(commentsApi)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    })


const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentInitState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
            .addCase(loadComments.rejected, (state, action:PayloadAction<unknown>) => {
                console.error('Error: ', action.payload);
            })
    }

})

export const commentSliceActions = {...commentSlice.actions, loadComments};

export default commentSlice
