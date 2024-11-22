import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {postSliceActions} from "../../store/slices/postSlice";
import {IComment} from "../../models/IComment";
import Comment from "../Comments/Comment";


interface IPostCommentsProps {
   postId: number
}

const PostComments:FC<IPostCommentsProps> = ({postId}) => {
    const postComments= useAppSelector(state => state.postSlice.postComments)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postSliceActions.loadCommentsToPost(postId))
    }, []);


    return (
        <div>
            {postComments.map((comment:IComment) => <Comment comment={comment}/>)}
        </div>
    );
};

export default PostComments;