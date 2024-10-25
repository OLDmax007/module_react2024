import React from 'react';
import {Link} from "react-router-dom";
import './NavMenu.css'

const NavMenu = () => {
    return (
        <div className={'nav-menu'}>
            <Link to={'/'}>
                <img className={'home-logo'} src="https://www.clker.com/cliparts/V/T/2/h/s/b/home-logo-md.png"/>
            </Link>
            <Link to={'users'}>Users</Link>
            <Link to={'posts'}>Posts</Link>
            <Link to={'comments'}>Comments</Link>
        </div>
    );
};

export default NavMenu;