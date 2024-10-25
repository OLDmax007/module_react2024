import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import '../cssComponents/GeneralCssComponents.css'
import {Link} from "react-router-dom";

type TypePost = {
    post:IPost,
    children?: React.ReactNode
}


const Post:FC<TypePost> = ({post:{id, userId, title}}) => {
    return (
        <div className={'post'}>
            <Link to={id.toString()}>
            <p>userId: {userId}</p>
            <p>postId: {id}</p>
            <p>Title: {title}</p>
            </Link>
        </div>
    );
};

export default Post;