import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div className={'menu'}>
            <Link to={'/'}>Home</Link>
            <Link to={'products'}>Products</Link>
            <Link to={'recipes'}>Recipes</Link>
        </div>
    );
};

export default Menu;