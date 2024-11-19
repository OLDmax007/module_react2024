import React, {useEffect} from 'react';
import {commentService, postService} from "../../services/api.jp.service";
import mainStore from "../../store/store";
import {IComment} from "../../models/IComment";
import {IPost} from "../../models/IPost";

const PostsWithComments = () => {

    const {commentSlice:{allComments,fillComments}, postSlice: {allPosts, fillPosts, fillPostsWithComments, postsWithComments}} = mainStore()

    useEffect(() => {
        commentService.getAllComments().then((data:IComment[]) => fillComments(data) )
        postService.getAllPosts().then((data:IPost[]) =>fillPosts(data) )
    }, []);

    useEffect(() => {
            fillPostsWithComments(allPosts, allComments);
    }, [allPosts, allComments]);

    return (
        <div>
            {postsWithComments.map(({ post:{id, title}, comments }) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <div>
                        {comments.map(({ id: commentId,body }) => (
                            <p key={commentId}>{body}</p>
                        ))}
                    </div>l
                </div>
            ))}
        </div>
    );
};

export default PostsWithComments;