import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

interface ICommentProps {
    comment: IComment
}

const Comment: FC<ICommentProps> = ({comment}) => {
    return (
        <li key={comment.id}>
            {comment.id}
            {comment.body}
        </li>

    );
};

export default Comment;