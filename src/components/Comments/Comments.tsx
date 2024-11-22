import React from 'react';
import {IComment} from "../../models/IComment";

const Comments = () => {

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