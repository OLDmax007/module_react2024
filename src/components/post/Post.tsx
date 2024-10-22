import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type TypePost = {
    post: IPost
}

const Post: FC<TypePost> = ({post}) => {
    const {id, title, views} = post
    return (
        <div>
            <div className={'postOfCurUser'} key={id}>
                <h4>---Num of Post: {id}</h4>
                <p>Title: {title}</p>
                <p>Number of views: {views}</p>
            </div>
        </div>
    );
};

export default Post;