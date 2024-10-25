import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import '../cssComponents/GeneralCssComponents.css'

type TypeComment = {
    comment: IComment,
    children?: React.ReactNode
}


const Comment: FC<TypeComment> = ({comment: {id, name, postId, email, body}}) => {
    return (
        <div className={'comment'}>
            <p>Com id: {id}</p>
            <p>Name: {name}</p>
            <p>Post id: {postId}</p>
            <p>Email: {email}</p>
            <p>Comment: {body}</p>
        </div>
    );
};

export default Comment;