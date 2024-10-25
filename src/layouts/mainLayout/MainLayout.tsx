import React, {Component} from 'react';
import {Outlet} from "react-router-dom";
import NavMenu from "../../components/navMenu/NavMenu";
import './MainLayout.css'

class MainLayout extends Component {
    render() {
        return (
            <div>
                <NavMenu/>
                <Outlet/>
            </div>
        );
    }
}

export default MainLayout;