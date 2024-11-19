import {create} from "zustand/react";
import {IStore} from "../models/IStore";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const mainStore = create<IStore>()((set) => {
    return {
        userSlice: {
            allUsers: [],
            fillUsers: (users: IUser[]) => {
                return set(state => (
                    {
                        ...state, userSlice: {
                            ...state.userSlice,
                            allUsers: users
                        }
                    }
                ))
            }
        },
        postSlice: {
            postsWithComments: [],
            fillPostsWithComments: (posts: IPost[], comments: IComment[]) => {
                return set(state => ({
                    ...state,
                    postSlice: {
                        ...state.postSlice,
                        postsWithComments: posts.map((post: IPost) => ({
                            post: post,
                            comments: comments.filter((comment) => comment.postId === post.id),
                        }))
                    }
                }));
            },
            allPosts: [],
            fillPosts: (posts: IPost[]) => {
                return set(state => ({
                    ...state,
                    postSlice: {
                        ...state.postSlice,
                        allPosts: posts,
                    }
                }));
            }
        },
        commentSlice: {
            allComments: [],
            fillComments: (comments: IComment[]) => {
                return set(state => (
                    {
                        ...state, commentSlice: {
                            ...state.commentSlice,
                            allComments: comments
                        }
                    }
                ))
            }
        }
    }
})

export default mainStore

