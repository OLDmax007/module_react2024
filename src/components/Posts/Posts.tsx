import React, {useEffect} from 'react';
import mainStore from "../../store/store";
import {postService} from "../../services/api.jp.service";
import {IPost} from "../../models/IPost";

const Posts = () => {
    const {postSlice:{allPosts,fillPosts}} = mainStore()

    useEffect(() => {
        postService.getAllPosts().then((data:IPost[]) =>fillPosts(data) )
    }, []);

    return (
            <ul>
                {allPosts.map((post: IPost) => (
                    <li key={post.id}>
                        {post.id}
                        {post.title}
                    </li>
                ))}
            </ul>
    );
};

export default Posts;