import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {postSliceActions} from "../../store/slices/postSlice";
import {IComment} from "../../models/IComment";
import Comment from "../Comments/Comment";


interface IPostCommentsProps {
    postId: number
}

const PostComments: FC<IPostCommentsProps> = ({postId}) => {
    const {commentSlice: {comments}} = useAppSelector(state => state);

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postSliceActions.loadCommentsToPost(postId))
    }, []);


    return (
        <li>
            <ol>
                {comments.filter(comment => comment.postId === postId).map((comment: IComment) => (
                    <Comment comment={comment} key={comment.id}/>
                ))}
            </ol>
        </li>
    );
};

export default PostComments;