import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IComment} from "../../models/IComment";
import {commentsService} from "../../services/api.jsonplaceholder.service";
import Comment from "../comment/Comment";

const CommentsOfPost = () => {
    const {id} = useParams()

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        if (id) {
            commentsService.getCommentsOfPost(id).then((data:IComment[]) => setComments(data))
        }
    }, []);

    return (
        <div>
            {comments.map((comment:IComment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    );
};

export default CommentsOfPost;