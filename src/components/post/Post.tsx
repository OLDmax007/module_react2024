import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import '../cssComponents/GeneralCssComponents.css'

type TypePost = {
    post:IPost,
    children?: React.ReactNode
}


const Post:FC<TypePost> = ({post:{id, userId, title}}) => {
    return (
        <div className={'post'}>
            <p>userId: {userId}</p>
            <p>postId: {id}</p>
            <p>Title: {title}</p>
        </div>
    );
};

export default Post;