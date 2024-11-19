import React, {useEffect} from 'react';
import mainStore from "../../store/store";
import {IStore} from "../../models/IStore";

const PostsWithComments = () => {
     const store:IStore =  mainStore()

    const posts = store.postSlice.allPosts
    const comments = store.commentSlice.allComments
    const  postsWithComments = store.postSlice.postsWithComments


    useEffect(() => {
        store.postSlice.fillPostsWithComments(posts, comments)
    }, []);

    return (
        <div>
            {JSON.stringify(postsWithComments)}
        </div>
    );
};

export default PostsWithComments;