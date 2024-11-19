import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IComment} from "./IComment";

export interface IStore {
    userSlice: {
        allUsers: IUser[],
        fillUsers: (users: IUser[]) => void
    }
    postSlice: {
        postsWithComments: {post: IPost, comments : IComment[]}[],
        fillPostsWithComments:  (posts: IPost[], comments: IComment[]) => void,
        allPosts: IPost[],
        fillPosts: (posts: IPost[]) => void
    }
    commentSlice: {
        allComments: IComment[],
        fillComments: (comments: IComment[]) => void
    }
}
