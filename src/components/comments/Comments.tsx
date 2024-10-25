import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/api.jsonplaceholder.service";
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentsService.getComments().then((data: IComment[]) => setComments(data))
    }, []);


    return (
        <div>
            {
                comments.map((comment:IComment) => (
                 <Comment key={comment.id} comment={comment}/>
                ))
            }
        </div>
    );
};

export default Comments;