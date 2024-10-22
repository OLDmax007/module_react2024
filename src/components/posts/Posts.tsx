import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

type TypePosts = {
    posts: IPost[],
    currUserId: number | null
}


const Posts: FC<TypePosts> = ({posts, currUserId}) => {


    return (
        <div>
            {currUserId !== null && <h3>User: {currUserId}</h3>}
            {posts.length > 0 ?
                (
                    posts.map(({id, title, views}: IPost) => (
                        <div className={'postOfCurUser'} key={id}>
                            <h4>---Num of Post: {id}</h4>
                            <p>Title: {title}</p>
                            <p>Number of views: {views}</p>
                        </div>))
                ) : (
                    currUserId !== null && <p>User with <strong>id: {currUserId}</strong> hasn't posts</p>
                )}
        </div>
    );
};

export default Posts;