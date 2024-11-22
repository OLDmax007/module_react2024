import React, {useEffect} from 'react';
import {IComment} from "../../models/IComment";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {commentSliceActions} from "../../store/slices/commentSlice";
import Comment from "./Comment";

const Comments = () => {
    const allComments = useAppSelector(state => state.commentSlice.comments)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);



    return (
        <ul>
            {allComments.map((comment: IComment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </ul>
    );

};

export default Comments;