import {IPost} from "../IPost";
import {IComment} from "../IComment";

export interface IPostSlice {
    posts: IPost[],
    postComments: IComment[]
}