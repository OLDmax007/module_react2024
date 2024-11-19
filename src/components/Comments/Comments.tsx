import React, {useEffect} from 'react';
import mainStore from "../../store/store";
import {commentService} from "../../services/api.jp.service";
import {IComment} from "../../models/IComment";

const Comments = () => {
    const {commentSlice:{allComments,fillComments}} = mainStore()

    useEffect(() => {
        commentService.getAllComments().then((data:IComment[]) => fillComments(data) )
    }, []);


    return (
        <ul>
            {allComments.map((comment: IComment) => (
                <li key={comment.id}>
                    {comment.id}
                    {comment.body}
                </li>
            ))}
        </ul>
    );

};

export default Comments;