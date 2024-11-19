import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'posts'}>Posts</Link></li>
            <li><Link to={'comments'}>Comments</Link></li>
            <li><Link to={'postsWithComments'}>Posts with comments</Link></li>
        </ul>
    );
};

export default Menu;