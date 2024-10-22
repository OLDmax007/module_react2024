import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div className={'menu'}>
            <Link to={'/'}>Home</Link>
            <Link to={'dogs'}>Dogs</Link>
            <Link to={'cats'}>Cats</Link>
        </div>
    );
};

export default Menu;