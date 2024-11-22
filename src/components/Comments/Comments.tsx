import React from 'react';
import {IComment} from "../../models/IComment";
import {useAppSelector} from "../../store/store";

const Comments = () => {
    const allComments = useAppSelector(state => state.commentSlice.comments)

    return (
        <ul>
            {allComments.map((comment: IComment) => (
                <li key={comment.id}>
                    {comment.id}
                    {comment.body}
                </li>
            ))}
        </ul>
    );

};

export default Comments;